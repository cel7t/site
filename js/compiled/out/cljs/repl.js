// Compiled by ClojureScript 1.10.773 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__30196){
var map__30197 = p__30196;
var map__30197__$1 = (((((!((map__30197 == null))))?(((((map__30197.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30197.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30197):map__30197);
var m = map__30197__$1;
var n = cljs.core.get.call(null,map__30197__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__30197__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,(function (){var or__4126__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return [(function (){var temp__5720__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5720__auto__)){
var ns = temp__5720__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})());

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__30199_30231 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__30200_30232 = null;
var count__30201_30233 = (0);
var i__30202_30234 = (0);
while(true){
if((i__30202_30234 < count__30201_30233)){
var f_30235 = cljs.core._nth.call(null,chunk__30200_30232,i__30202_30234);
cljs.core.println.call(null,"  ",f_30235);


var G__30236 = seq__30199_30231;
var G__30237 = chunk__30200_30232;
var G__30238 = count__30201_30233;
var G__30239 = (i__30202_30234 + (1));
seq__30199_30231 = G__30236;
chunk__30200_30232 = G__30237;
count__30201_30233 = G__30238;
i__30202_30234 = G__30239;
continue;
} else {
var temp__5720__auto___30240 = cljs.core.seq.call(null,seq__30199_30231);
if(temp__5720__auto___30240){
var seq__30199_30241__$1 = temp__5720__auto___30240;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30199_30241__$1)){
var c__4556__auto___30242 = cljs.core.chunk_first.call(null,seq__30199_30241__$1);
var G__30243 = cljs.core.chunk_rest.call(null,seq__30199_30241__$1);
var G__30244 = c__4556__auto___30242;
var G__30245 = cljs.core.count.call(null,c__4556__auto___30242);
var G__30246 = (0);
seq__30199_30231 = G__30243;
chunk__30200_30232 = G__30244;
count__30201_30233 = G__30245;
i__30202_30234 = G__30246;
continue;
} else {
var f_30247 = cljs.core.first.call(null,seq__30199_30241__$1);
cljs.core.println.call(null,"  ",f_30247);


var G__30248 = cljs.core.next.call(null,seq__30199_30241__$1);
var G__30249 = null;
var G__30250 = (0);
var G__30251 = (0);
seq__30199_30231 = G__30248;
chunk__30200_30232 = G__30249;
count__30201_30233 = G__30250;
i__30202_30234 = G__30251;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_30252 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_30252);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_30252)))?cljs.core.second.call(null,arglists_30252):arglists_30252));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Spec");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__30203_30253 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__30204_30254 = null;
var count__30205_30255 = (0);
var i__30206_30256 = (0);
while(true){
if((i__30206_30256 < count__30205_30255)){
var vec__30217_30257 = cljs.core._nth.call(null,chunk__30204_30254,i__30206_30256);
var name_30258 = cljs.core.nth.call(null,vec__30217_30257,(0),null);
var map__30220_30259 = cljs.core.nth.call(null,vec__30217_30257,(1),null);
var map__30220_30260__$1 = (((((!((map__30220_30259 == null))))?(((((map__30220_30259.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30220_30259.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30220_30259):map__30220_30259);
var doc_30261 = cljs.core.get.call(null,map__30220_30260__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_30262 = cljs.core.get.call(null,map__30220_30260__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_30258);

cljs.core.println.call(null," ",arglists_30262);

if(cljs.core.truth_(doc_30261)){
cljs.core.println.call(null," ",doc_30261);
} else {
}


var G__30263 = seq__30203_30253;
var G__30264 = chunk__30204_30254;
var G__30265 = count__30205_30255;
var G__30266 = (i__30206_30256 + (1));
seq__30203_30253 = G__30263;
chunk__30204_30254 = G__30264;
count__30205_30255 = G__30265;
i__30206_30256 = G__30266;
continue;
} else {
var temp__5720__auto___30267 = cljs.core.seq.call(null,seq__30203_30253);
if(temp__5720__auto___30267){
var seq__30203_30268__$1 = temp__5720__auto___30267;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30203_30268__$1)){
var c__4556__auto___30269 = cljs.core.chunk_first.call(null,seq__30203_30268__$1);
var G__30270 = cljs.core.chunk_rest.call(null,seq__30203_30268__$1);
var G__30271 = c__4556__auto___30269;
var G__30272 = cljs.core.count.call(null,c__4556__auto___30269);
var G__30273 = (0);
seq__30203_30253 = G__30270;
chunk__30204_30254 = G__30271;
count__30205_30255 = G__30272;
i__30206_30256 = G__30273;
continue;
} else {
var vec__30222_30274 = cljs.core.first.call(null,seq__30203_30268__$1);
var name_30275 = cljs.core.nth.call(null,vec__30222_30274,(0),null);
var map__30225_30276 = cljs.core.nth.call(null,vec__30222_30274,(1),null);
var map__30225_30277__$1 = (((((!((map__30225_30276 == null))))?(((((map__30225_30276.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30225_30276.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30225_30276):map__30225_30276);
var doc_30278 = cljs.core.get.call(null,map__30225_30277__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_30279 = cljs.core.get.call(null,map__30225_30277__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_30275);

cljs.core.println.call(null," ",arglists_30279);

if(cljs.core.truth_(doc_30278)){
cljs.core.println.call(null," ",doc_30278);
} else {
}


var G__30280 = cljs.core.next.call(null,seq__30203_30268__$1);
var G__30281 = null;
var G__30282 = (0);
var G__30283 = (0);
seq__30203_30253 = G__30280;
chunk__30204_30254 = G__30281;
count__30205_30255 = G__30282;
i__30206_30256 = G__30283;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5720__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n)),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5720__auto__)){
var fnspec = temp__5720__auto__;
cljs.core.print.call(null,"Spec");

var seq__30227 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__30228 = null;
var count__30229 = (0);
var i__30230 = (0);
while(true){
if((i__30230 < count__30229)){
var role = cljs.core._nth.call(null,chunk__30228,i__30230);
var temp__5720__auto___30284__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5720__auto___30284__$1)){
var spec_30285 = temp__5720__auto___30284__$1;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_30285));
} else {
}


var G__30286 = seq__30227;
var G__30287 = chunk__30228;
var G__30288 = count__30229;
var G__30289 = (i__30230 + (1));
seq__30227 = G__30286;
chunk__30228 = G__30287;
count__30229 = G__30288;
i__30230 = G__30289;
continue;
} else {
var temp__5720__auto____$1 = cljs.core.seq.call(null,seq__30227);
if(temp__5720__auto____$1){
var seq__30227__$1 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30227__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__30227__$1);
var G__30290 = cljs.core.chunk_rest.call(null,seq__30227__$1);
var G__30291 = c__4556__auto__;
var G__30292 = cljs.core.count.call(null,c__4556__auto__);
var G__30293 = (0);
seq__30227 = G__30290;
chunk__30228 = G__30291;
count__30229 = G__30292;
i__30230 = G__30293;
continue;
} else {
var role = cljs.core.first.call(null,seq__30227__$1);
var temp__5720__auto___30294__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5720__auto___30294__$2)){
var spec_30295 = temp__5720__auto___30294__$2;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_30295));
} else {
}


var G__30296 = cljs.core.next.call(null,seq__30227__$1);
var G__30297 = null;
var G__30298 = (0);
var G__30299 = (0);
seq__30227 = G__30296;
chunk__30228 = G__30297;
count__30229 = G__30298;
i__30230 = G__30299;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof Error))?cljs.core.symbol.call(null,"js",t.name):null
))], null),(function (){var temp__5720__auto__ = cljs.core.ex_message.call(null,t);
if(cljs.core.truth_(temp__5720__auto__)){
var msg = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5720__auto__ = cljs.core.ex_data.call(null,t);
if(cljs.core.truth_(temp__5720__auto__)){
var ed = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})());
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__30300 = cljs.core.conj.call(null,via,t);
var G__30301 = cljs.core.ex_cause.call(null,t);
via = G__30300;
t = G__30301;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek.call(null,via);
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec.call(null,cljs.core.map.call(null,base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5720__auto__ = cljs.core.ex_message.call(null,root);
if(cljs.core.truth_(temp__5720__auto__)){
var root_msg = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5720__auto__ = cljs.core.ex_data.call(null,root);
if(cljs.core.truth_(temp__5720__auto__)){
var data = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5720__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data.call(null,o));
if(cljs.core.truth_(temp__5720__auto__)){
var phase = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})());
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__30304 = datafied_throwable;
var map__30304__$1 = (((((!((map__30304 == null))))?(((((map__30304.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30304.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30304):map__30304);
var via = cljs.core.get.call(null,map__30304__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.call(null,map__30304__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.call(null,map__30304__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__30305 = cljs.core.last.call(null,via);
var map__30305__$1 = (((((!((map__30305 == null))))?(((((map__30305.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30305.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30305):map__30305);
var type = cljs.core.get.call(null,map__30305__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__30305__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.call(null,map__30305__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__30306 = data;
var map__30306__$1 = (((((!((map__30306 == null))))?(((((map__30306.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30306.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30306):map__30306);
var problems = cljs.core.get.call(null,map__30306__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.call(null,map__30306__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.call(null,map__30306__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__30307 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,via));
var map__30307__$1 = (((((!((map__30307 == null))))?(((((map__30307.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30307.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30307):map__30307);
var top_data = map__30307__$1;
var source = cljs.core.get.call(null,map__30307__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.call(null,(function (){var G__30312 = phase;
var G__30312__$1 = (((G__30312 instanceof cljs.core.Keyword))?G__30312.fqn:null);
switch (G__30312__$1) {
case "read-source":
var map__30313 = data;
var map__30313__$1 = (((((!((map__30313 == null))))?(((((map__30313.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30313.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30313):map__30313);
var line = cljs.core.get.call(null,map__30313__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__30313__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__30315 = cljs.core.merge.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,via)),top_data);
var G__30315__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__30315,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__30315);
var G__30315__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__30315__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__30315__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__30315__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__30315__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__30316 = top_data;
var G__30316__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__30316,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__30316);
var G__30316__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__30316__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__30316__$1);
var G__30316__$3 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__30316__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__30316__$2);
var G__30316__$4 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__30316__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__30316__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__30316__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__30316__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__30317 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__30317,(0),null);
var method = cljs.core.nth.call(null,vec__30317,(1),null);
var file = cljs.core.nth.call(null,vec__30317,(2),null);
var line = cljs.core.nth.call(null,vec__30317,(3),null);
var G__30320 = top_data;
var G__30320__$1 = (cljs.core.truth_(line)?cljs.core.assoc.call(null,G__30320,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__30320);
var G__30320__$2 = (cljs.core.truth_(file)?cljs.core.assoc.call(null,G__30320__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__30320__$1);
var G__30320__$3 = (cljs.core.truth_((function (){var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
})())?cljs.core.assoc.call(null,G__30320__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__30320__$2);
var G__30320__$4 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__30320__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__30320__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__30320__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__30320__$4;
}

break;
case "execution":
var vec__30321 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__30321,(0),null);
var method = cljs.core.nth.call(null,vec__30321,(1),null);
var file = cljs.core.nth.call(null,vec__30321,(2),null);
var line = cljs.core.nth.call(null,vec__30321,(3),null);
var file__$1 = cljs.core.first.call(null,cljs.core.remove.call(null,(function (p1__30303_SHARP_){
var or__4126__auto__ = (p1__30303_SHARP_ == null);
if(or__4126__auto__){
return or__4126__auto__;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,p1__30303_SHARP_);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return line;
}
})();
var G__30324 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__30324__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.call(null,G__30324,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__30324);
var G__30324__$2 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__30324__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__30324__$1);
var G__30324__$3 = (cljs.core.truth_((function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
}
})())?cljs.core.assoc.call(null,G__30324__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__30324__$2);
var G__30324__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.call(null,G__30324__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__30324__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__30324__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__30324__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__30312__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__30328){
var map__30329 = p__30328;
var map__30329__$1 = (((((!((map__30329 == null))))?(((((map__30329.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30329.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30329):map__30329);
var triage_data = map__30329__$1;
var phase = cljs.core.get.call(null,map__30329__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.call(null,map__30329__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.call(null,map__30329__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__30329__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.call(null,map__30329__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.call(null,map__30329__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.call(null,map__30329__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.call(null,map__30329__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = source;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = line;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name.call(null,(function (){var or__4126__auto__ = class$;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__30331 = phase;
var G__30331__$1 = (((G__30331 instanceof cljs.core.Keyword))?G__30331.fqn:null);
switch (G__30331__$1) {
case "read-source":
return format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause);

break;
case "macro-syntax-check":
return format.call(null,"Syntax error macroexpanding %sat (%s).\n%s",(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,(cljs.core.truth_(spec)?(function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__30332_30341 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__30333_30342 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__30334_30343 = true;
var _STAR_print_fn_STAR__temp_val__30335_30344 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__30334_30343);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__30335_30344);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__30326_SHARP_){
return cljs.core.dissoc.call(null,p1__30326_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__30333_30342);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__30332_30341);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})():format.call(null,"%s\n",cause)));

break;
case "macroexpansion":
return format.call(null,"Unexpected error%s macroexpanding %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compile-syntax-check":
return format.call(null,"Syntax error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compilation":
return format.call(null,"Unexpected error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "read-eval-result":
return format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "print-eval-result":
return format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "execution":
if(cljs.core.truth_(spec)){
return format.call(null,"Execution error - invalid arguments to %s at (%s).\n%s",symbol,loc,(function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__30336_30345 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__30337_30346 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__30338_30347 = true;
var _STAR_print_fn_STAR__temp_val__30339_30348 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__30338_30347);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__30339_30348);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__30327_SHARP_){
return cljs.core.dissoc.call(null,p1__30327_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__30337_30346);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__30336_30345);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})());
} else {
return format.call(null,"Execution error%s at %s(%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__30331__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str.call(null,cljs.repl.ex_triage.call(null,cljs.repl.Error__GT_map.call(null,error)));
});

//# sourceMappingURL=repl.js.map?rel=1688157139698
