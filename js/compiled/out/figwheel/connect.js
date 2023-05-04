// Compiled by ClojureScript 1.10.773 {}
goog.provide('figwheel.connect');
goog.require('cljs.core');
goog.require('figwheel.client');
figwheel.connect.start = (function figwheel$connect$start(){
var config = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__24882__delegate = function (x__24861__auto__){
if(cljs.core.truth_(site.core.on_js_reload)){
return cljs.core.apply.call(null,site.core.on_js_reload,x__24861__auto__);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),["Figwheel: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602))," hook '","site.core/on-js-reload","' is missing"].join(''));
}
};
var G__24882 = function (var_args){
var x__24861__auto__ = null;
if (arguments.length > 0) {
var G__24883__i = 0, G__24883__a = new Array(arguments.length -  0);
while (G__24883__i < G__24883__a.length) {G__24883__a[G__24883__i] = arguments[G__24883__i + 0]; ++G__24883__i;}
  x__24861__auto__ = new cljs.core.IndexedSeq(G__24883__a,0,null);
} 
return G__24882__delegate.call(this,x__24861__auto__);};
G__24882.cljs$lang$maxFixedArity = 0;
G__24882.cljs$lang$applyTo = (function (arglist__24884){
var x__24861__auto__ = cljs.core.seq(arglist__24884);
return G__24882__delegate(x__24861__auto__);
});
G__24882.cljs$core$IFn$_invoke$arity$variadic = G__24882__delegate;
return G__24882;
})()
,new cljs.core.Keyword(null,"open-urls","open-urls",-1478664930),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["http://localhost:3449/index.html"], null),new cljs.core.Keyword(null,"build-id","build-id",1642831089),"dev",new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws"], null);
figwheel.client.start.call(null,config);

if(cljs.core.truth_(new cljs.core.Keyword(null,"devcards","devcards",365747130).cljs$core$IFn$_invoke$arity$1(config))){
return devcards.core.start_devcard_ui_BANG__STAR_();
} else {
return null;
}
});
goog.exportSymbol('figwheel.connect.start', figwheel.connect.start);

//# sourceMappingURL=connect.js.map?rel=1683240968974
