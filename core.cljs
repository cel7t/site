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
   ; barbwire,
"                   ><<                                  ><<                 ><<
                   ><<                                  ><<                 ><<
><<  ><<><< ><<  ><>< ><><<   ><<>< ><<     ><<         ><<   ><<< ><< ><<  ><<
><<  ><< ><<  ><<  ><<   ><< ><< ><  ><<  ><   ><<  ><< ><<    ><<  ><  ><< ><<
><<  ><< ><<  ><<  ><<     ><<<  ><   ><<><<<<< ><<><   ><<    ><<  ><  ><< ><<
><<  ><< ><<  ><<  ><<      ><<  ><< ><< ><        ><   ><<    ><<  ><  ><< ><<
  ><<><<><<<  ><<   ><<    ><<   ><<       ><<<<    ><< ><<><<><<<  ><  ><<><<<
                         ><<     ><<                                           
"
   ;  bigchief,
"____________________________________________________________
                                                            
                                              /            /
-----------__--_/_------------__----__----__-/-----_--_---/-
  /   /  /   ) /    /   /   /   ) /___) /   /     / /  ) /  
_(___(__/___/_(_ __(___/___/___/_(___ _(___/___o_/_/__/_/___
                      /   /                                 
                  (_ /   /                                  
"
   ;; doom,
"             _                        _             _ 
            | |                      | |           | |
 _   _ _ __ | |_ _   _ _ __   ___  __| |  _ __ ___ | |
| | | | '_ \\| __| | | | '_ \\ / _ \\/ _` | | '_ ` _ \\| |
| |_| | | | | |_| |_| | |_) |  __| (_| |_| | | | | | |
 \\__,_|_| |_|\\__|\\__, | .__/ \\___|\\__,_(_|_| |_| |_|_|
                  __/ | |                             
                 |___/|_|                             
"
   ;; slant,
"               __                       __             __
  __  ______  / /___  ______  ___  ____/ /  ____ ___  / /
 / / / / __ \\/ __/ / / / __ \\/ _ \\/ __  /  / __ `__ \\/ / 
/ /_/ / / / / /_/ /_/ / /_/ /  __/ /_/ /_ / / / / / / /  
\\__,_/_/ /_/\\__/\\__, / .___/\\___/\\__,_/(_)_/ /_/ /_/_/   
               /____/_/                                  
"
   ;; thin,
"                                              
          |                       |      |    
.   .,---.|--- ,   .,---.,---.,---| ,-.-.|    
|   ||   ||    |   ||   ||---'|   | | | ||    
`---'`   '`---'`---||---'`---'`---'o` ' '`---'
               `---'|                         
"
   ;; jazmine,
"                                                           
               o                            8            8 
               8                            8            8 
o    o odYo.  o8P o    o .oPYo. .oPYo. .oPYo8    ooYoYo. 8 
8    8 8' `8   8  8    8 8    8 8oooo8 8    8    8' 8  8 8 
8    8 8   8   8  8    8 8    8 8.     8    8    8  8  8 8 
`YooP' 8   8   8  `YooP8 8YooP' `Yooo' `YooP' 88 8  8  8 8 
:.....:..::..::..::....8 8 ....::.....::.....:..:..:..:....
::::::::::::::::::::ooP'.8 ::::::::::::::::::::::::::::::::
::::::::::::::::::::...::..::::::::::::::::::::::::::::::::
"
   ;; xcourb,
"                                                                   
                                                                   
                ##                           ###             ###   
                ##                            ##              ##   
### ##  ## ##  #####  ### ### #####   ###   ####     #####    ##   
 ## ##   ## ##  ##     ## ##   ## ## ## ## ## ##      #####   ##   
 ## ##   ## ##  ##     ## ##   ## ## ##### ## ##      # # #   ##   
 ## ##   ## ##  ## ##   # #    ## ## ##    ## ##      # # #   ##   
  #####  ## ##   ###    ###    ####   ####  ##### ##  # # # ###### 
                        ##     ##                                  
                      ####    ####                                 
"
   ;; o8,
"                      o8                                         oooo    
oooo  oooo oo ooooooo888oooooo   ooooooooooooo   ooooooooo8 ooooo888     
 888   888  888   888888   888   888  888    888888oooooo8888    888     
 888   888  888   888888    888 888   888    888888       888    888 ooo 
  888o88 8oo888o o888o888o    8888    888ooo88    88oooo888 88ooo888o888 
                           o8o888    o888                                
"
   ;; os2,
"_______________oo_______________________________oo___________ooo___
oo____ooo_ooo__oo____o___oo___ooooo__ooooo__oooooo__oo_oo_oo__oo___
oo____oooo___ooooo___o___oo___o___oooo____ooo___oo__ooo_oo__o_oo___
oo____ooo____o_oo____o___oo__oo___ooooooooooo___oo__oo__oo__o_oo___
ooo___ooo____o_oo__o__ooooo__oo___oooo_____oo___oooooo__oo__o_oo___
oo_ooo_oo____o__ooo_o____ooo_ooooo___ooooo__oooooooooo______oooooo_
_____________________ooooo_oooo____________________________________
"
   ;; kban,
"                    .                                  '||  .            '||  
... ...  .. ...   .||.  .... ... ... ...    ....     .. ||    .. .. ..    ||  
 ||  ||   ||  ||   ||    '|.  |   ||'  || .|...||  .'  '||     || || ||   ||  
 ||  ||   ||  ||   ||     '|.|    ||    | ||       |.   ||     || || ||   ||  
 '|..'|. .||. ||.  '|.'    '|     ||...'   '|...'  '|..'||.   .|| || ||. .||. 
                        .. |      ||                                          
                         ''      ''''                                         
"
   ;; fuzzy,
"           .-.                  .-.         .-.  
          .' `.                 : :         : :  
.-..-,-.,-`. ..-..-.---. .--. .-' : ,-.,-.,-: :  
: :; : ,. :: :: :; : .; ' '_.' .; :_: ,. ,. : :_ 
`.__.:_;:_;:_;`._. : ._.`.__.`.__.:_:_;:_;:_`.__;
               .-. : :                           
               `._.:_;                           
"
   ;; fender,
"                    ||                                ||`               '||` 
                    ||                                ||                 ||  
'||  ||` `||''|,  ''||''  '||  ||` '||''|, .|''|, .|''||     '||),,(|,   ||  
 ||  ||   ||  ||    ||     `|..||   ||  || ||..|| ||  ||      || || ||   ||  
 `|..'|. .||  ||.   `|..'      ||   ||..|' `|...  `|..||. .. .||    ||. .||. 
                            ,  |'   ||                                       
                             ''    .||                                       
"
   ;; eftiwater,
"         _           _        _ 
 _   _ _ )__ ___ ____)   _  _ ))
((_(((\\(((\\(/((_((((_( o((`1((( 
           )) ))                
"
   ;; coinstak
"                   O))                                  O))                 O))
                   O))                                  O))                 O))
O))  O))O)) O))  O)O) O)O))   O))O) O))     O))         O))   O))) O)) O))  O))
O))  O)) O))  O))  O))   O)) O)) O)  O))  O)   O))  O)) O))    O))  O)  O)) O))
O))  O)) O))  O))  O))     O)))  O)   O))O))))) O))O)   O))    O))  O)  O)) O))
O))  O)) O))  O))  O))      O))  O)) O)) O)        O)   O))    O))  O)  O)) O))
  O))O))O)))  O))   O))    O))   O))       O))))    O)) O))O))O)))  O)  O))O)))
                         O))     O))                                           
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
   [:h2 "Functional, yet untyped."]
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
    [:a {:href "http://www.open-std.org/jtc1/sc22/wg14/"} [:img
     {:src "https://upload.wikimedia.org/wikipedia/commons/3/35/The_C_Programming_Language_logo.svg"
      :title "C"}]]
    [:a {:href "https://www.python.org/"} [:img
     {:src "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg"
      :title "Python"}]]
    [:a {:href "https://ocaml.org/"} [:img
     {:src "https://github.com/ocaml/ocaml-logo/blob/master/Colour/SVG/colour-icon.svg?raw=true"
      :title "Ocaml"}]]]
   [:br]])

(defn contact []
  [:div
   [:h1 "Contact"]
   [:h2 [:a {:href "mailto:shahsarthakw at gmail dot com"} "Email"]]
   [:h2 [:a {:href "https://github.com/cel7t"} "Github"]]
   [:h2 [:a {:href "https://discord.com/users/885027267401646121"} "Discord"]]
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
   [hint]
   [:footer
    [:div "Made with "
    [:a {:href "https://clojurescript.org/"}"Clojurescript"] "."]
    [:img {:src "http://mirrors.creativecommons.org/presskit/buttons/88x31/svg/by-sa.svg"}]]])

(rd/render [main-page]
           (. js/document (getElementById "app")))
