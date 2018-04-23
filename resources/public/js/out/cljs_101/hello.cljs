(ns cljs-101.hello
  (:require [reagent.core :as reagent]
            [re-mdl.core  :as mdl]
            ;;import the class validar and name it ass vall
            [cljs-101.validar :as vall]
            ))

;;Creation of the atom "valida"
;;This atom contains the parameters entered by the client
(defonce valida (atom {:ip "" :port "" :marca "" :version "" :udid "" :paquete "" :actividad "" :buscar ""}))

;;Creation of the view for the client
(defn grid
      []
  (let [style {:box-sizing       "border-box"
               :border           "5px solid black"
               :background-color "rgba(88, 88, 88, 0.9)"
               :height           "650px"
               :width            "350px"
               :padding-left     "8px"
               :padding-top      "4px"
               :float            "left"
               }]

  [:div {:id "alinear"}   [mdl/cell
                             :attr     {:style style}
                             :col      1
                             :children [


              [mdl/textfield
              :id             "ip"
              :floating-label? true
              :label           "Ingresa la IP del Servidor"
              ;;Validates that the client enters the correct ip with a regular expression
              :pattern         "^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5]{15})$"
              :invalid-message "No es una IP valida!"
              :color "#181B1C"
              ;;change the value of the atom with swap!
              :handler-fn     #(swap! valida assoc :ip %)]

              [mdl/textfield
              :id             "port"
              :floating-label? true
              :label           "Ingresa el Puerto del Servidor"
              :color "#181B1C"
              :handler-fn     #(swap! valida assoc :port %)]

              [mdl/textfield
              :id             "marca"
              :floating-label? true
              :label           "Ingresa la Marca del Dispositivo"
              :color "#181B1C"
              :handler-fn     #(swap! valida assoc :marca %)]

              [mdl/textfield
              :id              "version"
              :floating-label? true
              :label           "Ingresa la Versión de Android"
              :pattern         "^[4-7]([.][0-9]+)([.][0-9]+)?"
              :invalid-message "No es una Versión valida!"
              :handler-fn     #(swap! valida assoc :version %)]

              [mdl/textfield
              :id               "udid"
              :floating-label? true
              :label           "Ingresa la UDID del Dispositivo"
              :handler-fn     #(swap! valida assoc :udid %)
              ]

              [mdl/textfield
              :id             "paquete"
              :floating-label? true
              :label           "Ingresa el Paquete de la Aplicación"
              :handler-fn     #(swap! valida assoc :paquete %)]

              [mdl/textfield
              :id              "actividad"
              :floating-label? true
              :label           "Ingresa la Actividad de la Aplicación"
              :handler-fn     #(swap! valida assoc :actividad %)]

              ; [:div.mdl-textfield.mdl-js-textfield.mdl-textfield--floating-label.getmdl-select
              ; [:input#sample3.mdl-textfield__input
              ; {:readOnly "readonly", :value "", :type "text"}]
              ; [:input {:name "sample3", :value "", :type "hidden"}]
              ; [:label.mdl-textfield__label {:for "sample3"} "Country"]
              ; [:ul.mdl-menu.mdl-menu--bottom-left.mdl-js-menu
              ; {:for "sample3"}
              ; [:li.mdl-menu__item {:data-val "googlemaps"} "GoogleMapsTest"]
              ; [:li.mdl-menu__item {:data-val "gmail"} "GmailTest"]]]

              [mdl/textfield
              :id              "buscar"
              :floating-label? true
              :label           "Qué Deseas Buscar?"
              :handler-fn     #(swap! valida assoc :buscar %)]

            [:div {:id "center"}
              [mdl/button
              :id       "btn"
                :child    "GoogleMaps"
                ;;Call the function validate of the validar class
                :on-click   #(vall/validate valida)
                :raised?   true
                :ripple-effect?  true
                :colored?  true]]]]

              [:div
                [mdl/cell
                    :attr     {:style style}
                    :col      1
                    :children [
                                [mdl/textfield
                                    :id              "muestra"
                                    :floating-label? true
                                    :label           "Resultados"
                                    :type            :textarea
                                    ;;shows the data of the atom with model
                                    :model         (get-in @vall/aresponse [:response])
                                    :rows           "10"]]]]

                                    [:div
                                    ;;shows the image that comes in the atom
                                      [:img {:src (get-in @vall/aresponse [:image]) }
                                       ]]

                                    ]))

(defn ^:export init[]
  ; (js/alert "Hello from ClojureScript!")
  (reagent/render [grid] (.getElementById js/document "app")))
