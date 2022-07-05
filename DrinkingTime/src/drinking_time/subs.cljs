(ns drinking-time.subs
  (:require [re-frame.core :refer [reg-sub]]))

(reg-sub
 :subs.user/user
 (fn [{:db.user/keys [weight gender]} _]
   {:gender gender
    :weight weight}))

(reg-sub
 :subs.ui/user 
 (fn [{:db.ui.user/keys [weight]}]
   {:weight weight}))

(reg-sub
 :subs.screen/user
 
 :<- [:subs.ui/user]
 :<- [:subs.user/user]
 
 (fn [[ui model] _] 
   (let [weight (js/parseInt (:weight ui))]
     {:gender         (:gender model)
      :weight         (:weight ui)
      :is-first-visit (zero? (:weight model))
      :screen-state   (cond
                        (js/isNaN weight) "error"
                        (<= weight 0) "error"
                        :else "default")})))
