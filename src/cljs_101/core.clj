(ns cljs-101.core
  (:require [compojure.core :refer [defroutes POST GET OPTIONS]]
           [compojure.handler :as handler]
           [compojure.route :as route]
           [cljs-101.appium :as appium]
           [ring.util.response :refer [resource-response response]]
           [ring.middleware.json :as middleware]
           [ring.middleware.defaults :refer [wrap-defaults api-defaults]]
           [ring.middleware.cors :refer :all]))


;;Creation of the request-appium function with the req parameters
(defn request-appium [req]
  ;;Creation of the body variable that contains the body tag with the req value
  ;;Creation of the data_user variable that contains a string of the body variable
  (let [body (:body req)
        data_user (read-string (slurp body))]
        {
          ;;The server returns the status key with value 200 and the process response of type edn
          :status 200
          :headers {"Content-Type" "application/edn"}
          :body (str (appium/run_appium data_user))}))

; (defn json [data_user]
;     {:status 200
;        :headers {"Content-Type" "application/json"}
;        :body [{:name data_user} {:name data_user}]})

;;Creation of the app-routes function in which the routes through which requests are executed on the server are created
(defroutes app-routes
   (POST "/appium" req (request-appium req))
   (GET "/" [] "hola")
   (route/resources "/")
   (route/not-found "Page not found"))


(def handler
  (-> app-routes
      (handler/site)
      (wrap-cors #".*")
      (wrap-cors identity)
      (middleware/wrap-json-body)
      (middleware/wrap-json-response)
      (wrap-defaults api-defaults)
))
