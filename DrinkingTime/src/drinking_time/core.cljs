(ns drinking-time.core
  (:require [reagent.core :as r]
            [reagent.react-native :as rn]
            ["@brianium/drinkingtimeui" :as ui]))

(def button (r/adapt-react-class ui/Button))

(def home-screen (r/adapt-react-class ui/HomeScreen))

(defn hello []
  [home-screen {:on-button-press #(.log js/console "pressed")}])

(defn ^:export -main [& args]
  (r/as-element [hello]))
