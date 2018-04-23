(ns cljs-101.appium
  (:import [io.appium.java_client AppiumDriver MobileBy]
           [io.appium.java_client.android AndroidDriver]
           [io.appium.java_client.remote MobileCapabilityType
                                        AndroidMobileCapabilityType]
           [org.apache.commons.io FileUtils]
           [org.openqa.selenium By OutputType]
           [org.openqa.selenium.remote DesiredCapabilities]
           [java.io File]
           [java.net URL]
           [java.nio.file Paths Files]
           [java.util Base64]
           [org.openqa.selenium.support.ui WebDriverWait ExpectedConditions]))


;;Creacion de la funcion encoder la cual codifica la imagen en Base64 para permitir enviarla por el servidor
(defn encoder [image-path]
  (let [image-data (Files/readAllBytes (Paths/get image-path))
        base64Image (.encodeToString (Base64/getEncoder) image-data)]
        base64Image))

;;Creacion de la funcion build-capabilities la cual contiene
(defn build-capabilities [v m u p a]
  (let [desiredCapabilities (new DesiredCapabilities)]
    (.setCapability desiredCapabilities MobileCapabilityType/PLATFORM_NAME "Android")
    (.setCapability desiredCapabilities MobileCapabilityType/PLATFORM_VERSION v)
    (.setCapability desiredCapabilities MobileCapabilityType/NO_RESET true)
    (.setCapability desiredCapabilities MobileCapabilityType/DEVICE_NAME m)
    (.setCapability desiredCapabilities MobileCapabilityType/UDID u)
    (.setCapability desiredCapabilities AndroidMobileCapabilityType/APP_PACKAGE p)
    (.setCapability desiredCapabilities AndroidMobileCapabilityType/APP_ACTIVITY a)
  desiredCapabilities))

;;Funcion build-url que contiene la url del servidor appium
(defn build-url [ipp port]
  (new URL (str "http://" ipp ":" port "/wd/hub")))

;;Funcion build-android-driver que contiene
(defn build-android-driver [url desiredCapabilities]
  (new AndroidDriver url desiredCapabilities))

(defn build-web-driver-wait [driver millis]
  (new WebDriverWait driver millis))

(defn get-data [key data_user]
  (let [key (keyword key)]
    (get data_user key)))

;;Fucnion run_appium que contiene los valores que el cliente mando al servidor en un atomo y realizá las funciones de appium
;;para testear GoogleMaps 
(defn run_appium [data_user]
  (let [ip (get-data "ip" data_user)
        port (get-data "port" data_user)
        m (get-data "marca" data_user)
        v (get-data "version" data_user)
        u (get-data "udid" data_user)
        p (get-data "paquete" data_user)
        a (get-data "actividad" data_user)
        b (get-data "buscar" data_user)
        url (build-url ip port)
        dc (build-capabilities v m u p a)
        driver (build-android-driver url dc)
        web-driver-wait (build-web-driver-wait driver 30)]
        ;(.click (.findElementById driver "com.google.android.apps.maps:id/search_omnibox_text_box")) ;Device fisico
        (.click (.findElementById driver "com.google.android.apps.gmm:id/search_omnibox_text_box"))   ;Device virtual
        ;(-> (.findElementById driver "com.google.android.apps.maps:id/search_omnibox_text_box") (.sendKeys (into-array [(str b "\n")]))) ;Device fisico
        (-> (.findElementById driver "com.google.android.apps.gmm:id/search_omnibox_edit_text") (.sendKeys (into-array [(str b "\n")])))  ;Device virtual
        ;(.until web-driver-wait (ExpectedConditions/visibilityOfElementLocated (By/id "com.google.android.apps.maps:id/recycler_view"))) ;Device fisico
        (.until web-driver-wait (ExpectedConditions/visibilityOfElementLocated (By/id "com.google.android.apps.gmm:id/recycler_view")))   ;Device virtual
        (let [scrFile (.getScreenshotAs driver OutputType/FILE)
            ;(FileUtils/copyFile scrFile (new File "/home/alopez/Descargas/archivo2.png")) ;almacena la foto en local
              Foto (str "data:image/png;base64," (encoder (.toURI scrFile)))]
              (println Foto)
              (println (.getAbsolutePath scrFile))
              (let [list-of-results (.findElementsById driver "com.google.android.apps.gmm:id/title")  ;Device virtual      ;com.google.android.apps.maps:id/title ;Device fisoc
                    first-result (first list-of-results)
                    res-name (.getText first-result)
                    lista (reduce (fn [acum elem] (conj acum (-> elem .getText .toString))) [] list-of-results)
                    fusion (conj lista Foto)]
                    (println fusion)
                (dorun (map (fn [elem] (println (-> elem .getText .toString) "\n")) list-of-results))
                (.click first-result)
                (.isDisplayed (.findElement driver (MobileBy/AndroidUIAutomator (str "new UiSelector().text(\"" res-name "\");"))))
                (Thread/sleep 5000)
                (.quit driver)
                fusion))))
