(ns cljs-101.validar
  (:require [reagent.core :as reagent :refer [atom]]
            [re-mdl.core  :as mdl]
            [cljs-http.client :as http]
            [clojure.string :as str]
            [cljs.core.async :refer [<!]])
   (:require-macros [cljs.core.async.macros :refer [go]])  )

;;Creation of the atom "aresponse"
(defonce aresponse (atom {:response "........."}))

;;Creation of the client function that contains the parameters of the valida atom with the name data_user
(defn http-client [data_user]
  ;;Send the request to the server with the parameters of the atom
 (go (let [response (<! (http/post "http://localhost:3000/appium"  {:body @data_user :headers {"Content-Type" "text/plain"}}))]
; (prn (:status response))
;  (prn (:body response))
; (println (last (get-in response [:body])))
        ;;Change the values ​​of the aresponse atom associating it with the key image
        ;;obtaining the last field of the response vector that comes in the body tag
        (swap! aresponse assoc :image (last (get-in response [:body])))
;(println (get-in @aresponse [:image]))
        ;;Change the values ​​of the aresponse atom associating it with the response key
        ;;obtaining the result when deleting the last field of the response vector and doing a line jump to each field of the vector
        (swap! aresponse assoc :response (str/join "\n" (drop-last (get-in response [:body]))))
        )))

        ;;Creation of the validate function that contains the parameters of the valida atom
(defn validate [valida]
        ;;Validates that the size of each field of the atom is greater than 0
    (if (and (> (count (get @valida :ip)) 0)
             (> (count (get @valida :port)) 0)
             (> (count (get @valida :marca)) 0)
             (> (count (get @valida :version)) 0)
             (> (count (get @valida :udid)) 0)
             (> (count (get @valida :paquete)) 0)
             (> (count (get @valida :actividad)) 0)
             (> (count (get @valida :buscar)) 0))
             ;;If the validation is correct, call the http-client function
          (http-client valida)
            ;;If the validation is not correct send the message of empty fields
          (js/alert "Por favor, complete el formulario!")
          ))
