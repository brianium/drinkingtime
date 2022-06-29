(ns drinking-time.core
  (:require [reagent.core :as r]
            [drinking-time.ui :as ui]))

(defn app []
  [ui/container
   [ui/home-screen {:on-button-press #(.log js/console "pressed")}]])

(defn ^:export -main [& _]
  (r/as-element [app]))
