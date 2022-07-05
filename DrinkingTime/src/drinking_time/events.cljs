(ns drinking-time.events
  (:require [re-frame.core :refer [reg-event-fx reg-event-db reg-fx dispatch]]
            [drinking-time.db :as db]
            [drinking-time.navigation :as nav]
            [drinking-time.storage :as storage]))

(def user-storage-key "@DrinkingTime_user")

;;; Events

(reg-event-fx
 :evt.navigation/navigate
 (fn [cofx [_ name]]
   (assoc cofx :fx.navigation/navigate name)))

(reg-event-fx
 :evt.user/load-db
 (fn [_ [_ user-string]]
   (if-some [current-db (db/from-string user-string)]
     {:db current-db
      :dispatch [:evt.navigation/navigate "User"]}
     {:db db/default-db
      :dispatch [:evt.navigation/navigate "User"]})))

(reg-event-fx
 :evt.user/user-storage-error
 (fn [cofx [_ e]]
   (println "Error")
   (println e)
   cofx))

(reg-event-fx
 :evt.home/start-drinking
 (fn [cofx _]
   (assoc cofx :fx.storage/get-item {:key user-storage-key
                                     :on-success [:evt.user/load-db]
                                     :on-error   [:evt.user/user-storage-error]})))

;;; @TODO use event-fx to update db for gender and weight, but trigger effect for navigate event

(reg-event-db
 :evt.user/change
 (fn [db [_ [event-id payload]]]
   (case event-id
     "gender" (assoc db :db.user/gender payload)
     "weight" (assoc db :db.ui.user/weight payload)
     db)))

(reg-event-fx
 :evt.user/update
 (fn [{:keys [db]} [_ {:keys [weight gender]}]] 
   {:db                  (assoc db :db.user/gender gender :db.user/weight weight)
    :fx.storage/set-item {:key        user-storage-key
                          :value      (.stringify js/JSON #js {:gender gender
                                                               :weight weight})
                          :on-error   [:evt.user/user-storage-error]
                          :on-success [:evt.navigation/navigate "Dashboard"]}}))

;;; Effects

(reg-fx
 :fx.navigation/navigate
 (fn [name]
   (nav/navigate name)))

(reg-fx
 :fx.storage/get-item
 (fn [{:keys [on-success on-error key]}]
   (-> (storage/get-item key)
       (.then #(dispatch (conj on-success %)))
       (.catch #(dispatch (conj on-error %))))))

(reg-fx
 :fx.storage/set-item
 (fn [{:keys [on-success on-error key value]}]
   (-> (storage/set-item key value)
       (.then #(dispatch (conj on-success %)))
       (.catch #(dispatch (conj on-error %))))))

#_(dispatch [:evt.navigation/navigate "Home"])

#_(storage/remove-item user-storage-key)
