(ns drinking-time.navigation
  (:require ["@react-navigation/native" :as nav]))

(def navigationRef (nav/createNavigationContainerRef))

(defn navigate
  ([name params]
   (when (.isReady navigationRef)
     (.navigate navigationRef name params)))
  ([name]
   (when (.isReady navigationRef)
     (.navigate navigationRef name))))
