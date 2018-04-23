(defproject cljs-101 "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [[org.clojure/clojure "1.9.0"]
                 [org.clojure/clojurescript "1.10.238"]
                 [reagent "0.7.0"]
                 [com.yetanalytics/re-mdl "0.1.8" :exclusions [cljsjs/react-with-addons]]
                 [cljsjs/react-with-addons "15.5.4-0"]
                 [cljs-http "0.1.45"]
                 [org.clojure/core.async  "0.4.474"]
                 [compojure/compojure "1.6.0"]
                 ;[ring-cors/ring-cors "0.1.12"]
                 [ring/ring-json "0.4.0"]
                 [ring/ring-defaults "0.3.1"]
                 [jumblerg/ring.middleware.cors "1.0.1"]
                 ;appium
                 [io.appium/java-client "6.0.0-BETA4"]]

  :main cljs-101.core

  :plugins [[lein-cljsbuild "1.1.7"]
            [lein-figwheel "0.5.15"]
            [lein-ring/lein-ring "0.12.4"]
]

  :ring {:handler cljs-101.core/handler}
  :figwheel {:readline false}

  :cljsbuild {
    :builds [{:id "dev"
              :source-paths ["src-cljs"]
              :figwheel true
              :compiler {:main cljs-101.hello
                         :asset-path "js/out"
                         :output-dir "resources/public/js/out"
                         :output-to "resources/public/js/main.js"
                         :optimizations :none
                         :pretty-print true
                         }}]})
