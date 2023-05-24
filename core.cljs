(ns site.core
  (:require
   [reagent.core :as reagent :refer [atom]]
   [reagent.dom :as rd]
   [clojure.string :as s]))

(defonce rot-deg (atom 0))
(defonce clock-o (atom 0))
(defonce cnt (atom 0))

(def banners
  [
   ;; jazmine,
"                               
8  o                      
8                         
8 o8 .oPYo. .oPYo. o    o 
8  8 Yb..   8    8 8    8 
8  8   'Yb. 8    8 8    8 
8  8 `YooP' 8YooP' `YooP8 
..:..:.....:8 ....::....8 
::::::::::::8 :::::::ooP'.
::::::::::::..:::::::...::
                            
   o                8      
   8                8      
  o8P .oPYo. .oPYo. 8oPYo. 
   8  8oooo8 8    ' 8    8 
   8  8.     8    . 8    8 
   8  `Yooo' `YooP' 8    8 
:::..::.....::.....:..:::..
:::::::::::::::::::::::::::
:::::::::::::::::::::::::::
"

   ;; eftiwater,

"
 _ o         
 ))_ ______ _
((((_)((_\\(/'
       )) )) 
 _      _   
 )L____ ))_ 
((((((_((`( 
"
   ;; coinstak
" O))                           
 O)) O)                        
 O))    O)))) O) O))  O))   O))
 O))O))O))    O)  O))  O)) O)) 
 O))O))  O))) O)   O))   O)))  
 O))O))    O))O)) O))     O))  
O)))O))O)) O))O))        O))   
              O))      O))     
  O))                           
  O))                   O))     
O)O) O)   O))       O)))O))     
  O))   O)   O))  O))   O) O)   
  O))  O))))) O))O))    O))  O))
  O))  O)         O))   O)   O))
   O))   O))))      O)))O))  O))
"
   ])

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
              :font-size "80%"
              :margin-top "1em"
              :margin-bottom "1em"}}
     "Click the logo to return home!"])

(defonce page (atom "home"))

(defn home []
  [:div
   [:br]
   [:div {:class "banner"}
    (rand-nth banners)]
   [:h2 "Sarthak Shah's Homepage"]
   [:div {:class "flex-kebab"}
    [:input {:type "button"
             :class "buttonX"
             :value "About"
             :on-click #(do (reset! page "about")
                            (page-transition))}]
    [:input {:type "button"
             :class "buttonX"
             :value "Blog"
             :on-click #(do (reset! page "blog")
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
   [:h3 "Background"]
   [:p {:class "center"} "I am currently pursuing a Master's degree in Mathematics at " [:a {:href "https://www.bits-pilani.ac.in/hyderabad/"} "BITS Pilani"] "."]
   [:p {:class "center"} "I am the founding president of the " [:a {:href "https://bits-sos.ml"} "Society for Open Software"] " and a member of CRUX, ACM and the Journal Club."]
   [:h3 "Languages"]
   [:div {:class "flex-langs"}
    [:a {:href "https://clojure.org/"} [:img
     {:src "images/clojure.svg"
      :title "Clojure"}]]
    [:a {:href "https://common-lisp.net/"} [:img
     {:src "images/cl.svg"
      :title "Common Lisp"}]]
    [:a {:href "http://www.open-std.org/jtc1/sc22/wg14/"} [:img
     {:src "images/gcc.svg"
      :title "C"}]]
    [:a {:href "https://www.python.org/"} [:img
     {:src "images/py.svg"
      :title "Python"}]]
    [:a {:href "https://ocaml.org/"} [:img
     {:src "images/ocaml.svg"
      :title "Ocaml"}]]]
   [:h3 "Interests"]
   [:p {:class "center"} "I am mainly interested in Cybersecurity, Programming Language Theory and High-Performance Computing."]
   [:h3 "Resume"]
   [:p {:class "center"} "My resume can be found "
    [:a {:href "/resume.pdf"} "here"] "."]
   [:br]])

(defn contact []
  [:div
   [:h1 "Contact"]
   [:h2 [:a {:href "mailto:shahsarthakw at gmail dot com"} "Email"]]
   [:h2 [:a {:href "https://github.com/cel7t"} "Github"]]
   [:h2 [:a {:href "https://in.linkedin.com/in/sarthak-shah-sos"} "Linkedin"]]
   [:h2 [:a {:href "https://discord.com/users/885027267401646121"} "Discord"]]
   [:br]])

(defn blog []
  [:div
   [:h1 "Personal Blog"]
   [:h2 [:a {:href "https://blog.lispy.tech"} "blog.lispy.tech"]]
   [:h1 "BITS SOS' Blog"]
   [:h2 [:a {:href "https://bits-sos.ml/posts"} "bits-sos.ml/posts"]]
   [:br]])

(defn main-page []
  [:div
   (case @page
     "home" [home]
     "about" [about]
     "contact" [contact]
     "blog" [blog])
   [:div {:class "flex-kebab"}
    [:img
     {:src "images/clojure.svg"
      :title "Home"
      :width "60px"
      :style {:transform (str "rotate(" @rot-deg "deg)")
              :transition-duration "1s"}
      :on-click #(do (reset! page "home")
                     (page-transition))}]]
   [hint]
   [:footer
    [:div "Made with "
    [:a {:href "https://clojurescript.org/"}"Clojurescript"] "."]
    [:img {:src "images/CC-BY-SA.svg"}]]])

(rd/render [main-page]
           (. js/document (getElementById "app")))
