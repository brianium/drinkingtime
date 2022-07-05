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

(defn user-screen [_]
  (let [{:keys [weight gender screen-state is-first-visit]} @(rf/subscribe [:subs.screen/user])]
    [:> ui/UserScreen
     {:gender          gender
      :weight          weight
      :is-first-visit  is-first-visit
      :screen-state    screen-state
      :on-button-press #(rf/dispatch [:evt.user/update {:gender gender :weight (js/parseInt weight)}])
      :on-change       #(rf/dispatch [:evt.user/change (array-seq %)])}]))

#_(rf/dispatch [:evt.navigation/navigate "Home"])
