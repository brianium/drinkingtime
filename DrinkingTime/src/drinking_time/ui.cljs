(ns drinking-time.ui
  (:require [reagent.core :as r]
            [reagent.react-native :as rn]
            [re-frame.core :as rf]
            ["@brianium/drinkingtimeui" :as ui]
            ["@react-navigation/native" :as nav]
            ["@react-navigation/native-stack" :as stack]))

;;; React Navigation

(def Stack (.createNativeStackNavigator stack))

(def navigator (r/adapt-react-class (.-Navigator Stack)))

(def screen (r/adapt-react-class (.-Screen Stack)))

(def navigation-container (r/adapt-react-class nav/NavigationContainer))

;;; Utility Components

(defn container
  [& children]
  [rn/safe-area-view
   {:style #js [#js {:flex 1}]}
   (map-indexed #(with-meta %2 {:key %1}) children)])

;;; DrinkingTime UI

(defn home-screen [_]
  [:> ui/HomeScreen
   {:on-button-press #(rf/dispatch [:evt.home/start-drinking])}])

(defn user-screen
  [props]
  [:> ui/UserScreen props])
