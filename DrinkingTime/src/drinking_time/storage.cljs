(ns drinking-time.storage
  (:require ["@react-native-async-storage/async-storage$default" :as storage]))

(defn set-item
  [k v]
  (.setItem storage k v))

(defn get-item
  [k]
  (.getItem storage k))

(defn remove-item
  [k]
  (.removeItem storage k))
