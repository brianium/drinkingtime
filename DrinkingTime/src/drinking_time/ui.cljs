(ns drinking-time.ui
  (:require [reagent.core :as r]
            [reagent.react-native :as rn]
            ["@brianium/drinkingtimeui" :as ui]))

(defn container
  [& children]
  [rn/safe-area-view
   {:style #js [#js {:flex 1}]}
   (map-indexed #(with-meta %2 {:key %1}) children)])

(def home-screen (r/adapt-react-class ui/HomeScreen))
