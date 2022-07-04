(ns drinking-time.core
  (:require [reagent.core :as r]
            [drinking-time.events]
            [drinking-time.subs]
            [drinking-time.navigation :as nav]
            [drinking-time.ui :as ui]))

(defn app []
  [ui/navigation-container {:ref nav/navigationRef}
   [ui/container
    [ui/navigator {:screenOptions #js {:headerShown false}}
     [ui/screen
      {:name "Home"
       :component (r/reactify-component ui/home-screen)}]
     [ui/screen
      {:name "User"
       :component (r/reactify-component ui/user-screen)}]
     [ui/screen
      {:name "Dashboard"
       :component (r/reactify-component ui/home-screen)}]]]])

(defn ^:export -main [& _]
  (r/as-element [app]))
