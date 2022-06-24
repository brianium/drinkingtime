(ns drinking-time.core
  (:require [reagent.core :as r]
            [reagent.react-native :as rn]
            ["@brianium/drinkingtimeui" :as ui]))

(def button (r/adapt-react-class ui/MyButton))

(defn hello []
  [rn/view {:style {:flex 1 :align-items "center" :justify-content "center"}}
   [button {:color "purple" :text "boop boop boop beep"}]
   [rn/text {:style {:font-size 50}} "Hello Krell!"]])

(defn ^:export -main [& args]
  (r/as-element [hello]))
