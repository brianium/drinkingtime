(ns drinking-time.events
  (:require [re-frame.core :refer [reg-event-fx reg-fx]]
            [drinking-time.navigation :as nav]))

;;; Events

(reg-event-fx
 :evt.home/start-drinking
 (fn [cofx _]
   (assoc cofx :fx.navigation/navigate "User")))

;;; Effects

(reg-fx
 :fx.navigation/navigate
 (fn [name]
   (nav/navigate name)))
