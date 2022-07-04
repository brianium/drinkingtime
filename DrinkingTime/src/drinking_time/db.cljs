(ns drinking-time.db
  (:require [cljs.spec.alpha :as s]))

(s/def :db.user/gender #{"male" "female"})

(s/def :db.user/weight nat-int?)

(s/def :db.ui.user/weight string?)

(s/def ::db (s/keys :req [:db.user/gender
                          :db.user/weight
                          :db.ui.user/weight]))

(def default-db
  {:db.user/gender "male"
   :db.user/weight 0
   :db.ui.user/weight "100"})

(defn from-string
  [s]
  (when-some [user (.parse js/JSON s)]
    (merge default-db {:db.user/gender (.-gender user)
                       :db.user/weight (.-weight user)
                       :db.ui.user/weight (str (.-weight user))})))
