(ns site.core
  (:require 
   [reagent.core :as reagent :refer [atom]]
   [reagent.dom :as rd]
   [clojure.string :as s]))

(js/console.log "Hello, Github Pages!")

(defonce rot-deg (atom 0))
(defonce clock-o (atom 0))
(defonce cnt (atom 0))

(defn page-transition []
  (if (= @rot-deg 0)
    (reset! rot-deg 360)
    (reset! rot-deg 0))
  (when (< @cnt 1) ; might set it to 2 later
  (reset! clock-o 1)
  (js/setTimeout #(reset! clock-o 0) 1000)
  (swap! cnt inc)))

(defn hint []
    [:div.hint
     {:style {:color "#c7c7c7" ; "#d96e26"
              :text-align "center"
              :opacity (str @clock-o)
              :transition-duration "2s"
              :margin-top "1em"}}
     "Click the logo to return home!"])

(defonce page (atom "home"))

(defn home []
  [:div
   [:h1 "Hi."]
   [:h2 "Welcome to my site."]
   [:div {:class "flex-kebab"}
    [:input {:type "button"
             :class "buttonX"
             :value "About"
             :on-click #(do (reset! page "about")
                            (page-transition))}]
    [:input {:type "button"
             :class "buttonX"
             :value "Contact"
             :on-click #(do (reset! page "contact")
                            (page-transition))}]]
   [:br]])

(defn about []
  [:div
   [:h1 "About"]
   [:h3 "Education"]
   [:p {:class "center"} "I am studying Mathematics at " [:a {:href "https://www.bits-pilani.ac.in/hyderabad/"} "BITS Pilani"] "."]
   [:h3 "Languages"]
   [:div {:class "flex-langs"}
    [:a {:href "https://clojure.org/"} [:img
     {:src "https://upload.wikimedia.org/wikipedia/commons/5/5d/Clojure_logo.svg"
      :title "Clojure"}]]
    [:a {:href "https://common-lisp.net/"} [:img
     {:src "https://upload.wikimedia.org/wikipedia/commons/4/48/Lisp_logo.svg"
      :title "Common Lisp"}]]
    [:a {:href "https://ocaml.org/"} [:img
     {:src "https://ocaml.org/img/OCaml_Sticker.svg"
      :title "Ocaml"}]]
    [:a {:href "http://www.open-std.org/jtc1/sc22/wg14/"} [:img
     {:src "https://upload.wikimedia.org/wikipedia/commons/3/35/The_C_Programming_Language_logo.svg"
      :title "C"}]]
    [:a {:href "https://www.python.org/"} [:img
     {:src "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg"
      :title "Python"}]]]
   [:br]])

(defn contact []
  [:div
   [:h1 "Contact"]
   [:h2 [:a {:href "mailto:shahsarthakw at gmail dot com"} "Email"]]
   [:h2 [:a {:href "https://github.com/cel7t"} "Github"]]
   [:h2 [:a {:href "Average#4310"} "Discord"]]
   [:br]])

(defn main-page []
  [:div
   (case @page
     "home" [home]
     "about" [about]
     "contact" [contact])
   [:div {:class "flex-kebab"}
    [:img
     {:src "https://upload.wikimedia.org/wikipedia/commons/5/5d/Clojure_logo.svg"
      :title "Home"
      :width "60px"
      :style {:transform (str "rotate(" @rot-deg "deg)")
              :transition-duration "1s"}
      :on-click #(do (reset! page "home")
                     (page-transition))}]]
   [hint]])

                                        ; (defonce app-state (atom {:text "Hi."}))

(rd/render [main-page]
           (. js/document (getElementById "app")))
