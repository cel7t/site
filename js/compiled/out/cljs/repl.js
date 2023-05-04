// Compiled by ClojureScript 1.10.773 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__22052){
var map__22053 = p__22052;
var map__22053__$1 = (((((!((map__22053 == null))))?(((((map__22053.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22053.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22053):map__22053);
var m = map__22053__$1;
var n = cljs.core.get.call(null,map__22053__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__22053__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__22055_22087 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__22056_22088 = null;
var count__22057_22089 = (0);
var i__22058_22090 = (0);
while(true){
if((i__22058_22090 < count__22057_22089)){
var f_22091 = cljs.core._nth.call(null,chunk__22056_22088,i__22058_22090);
cljs.core.println.call(null,"  ",f_22091);


var G__22092 = seq__22055_22087;
var G__22093 = chunk__22056_22088;
var G__22094 = count__22057_22089;
var G__22095 = (i__22058_22090 + (1));
seq__22055_22087 = G__22092;
chunk__22056_22088 = G__22093;
count__22057_22089 = G__22094;
i__22058_22090 = G__22095;
continue;
} else {
var temp__5720__auto___22096 = cljs.core.seq.call(null,seq__22055_22087);
if(temp__5720__auto___22096){
var seq__22055_22097__$1 = temp__5720__auto___22096;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22055_22097__$1)){
var c__4556__auto___22098 = cljs.core.chunk_first.call(null,seq__22055_22097__$1);
var G__22099 = cljs.core.chunk_rest.call(null,seq__22055_22097__$1);
var G__22100 = c__4556__auto___22098;
var G__22101 = cljs.core.count.call(null,c__4556__auto___22098);
var G__22102 = (0);
seq__22055_22087 = G__22099;
chunk__22056_22088 = G__22100;
count__22057_22089 = G__22101;
i__22058_22090 = G__22102;
continue;
} else {
var f_22103 = cljs.core.first.call(null,seq__22055_22097__$1);
cljs.core.println.call(null,"  ",f_22103);


var G__22104 = cljs.core.next.call(null,seq__22055_22097__$1);
var G__22105 = null;
var G__22106 = (0);
var G__22107 = (0);
seq__22055_22087 = G__22104;
chunk__22056_22088 = G__22105;
count__22057_22089 = G__22106;
i__22058_22090 = G__22107;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_22108 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_22108);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_22108)))?cljs.core.second.call(null,arglists_22108):arglists_22108));
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
var seq__22059_22109 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__22060_22110 = null;
var count__22061_22111 = (0);
var i__22062_22112 = (0);
while(true){
if((i__22062_22112 < count__22061_22111)){
var vec__22073_22113 = cljs.core._nth.call(null,chunk__22060_22110,i__22062_22112);
var name_22114 = cljs.core.nth.call(null,vec__22073_22113,(0),null);
var map__22076_22115 = cljs.core.nth.call(null,vec__22073_22113,(1),null);
var map__22076_22116__$1 = (((((!((map__22076_22115 == null))))?(((((map__22076_22115.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22076_22115.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22076_22115):map__22076_22115);
var doc_22117 = cljs.core.get.call(null,map__22076_22116__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_22118 = cljs.core.get.call(null,map__22076_22116__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_22114);

cljs.core.println.call(null," ",arglists_22118);

if(cljs.core.truth_(doc_22117)){
cljs.core.println.call(null," ",doc_22117);
} else {
}


var G__22119 = seq__22059_22109;
var G__22120 = chunk__22060_22110;
var G__22121 = count__22061_22111;
var G__22122 = (i__22062_22112 + (1));
seq__22059_22109 = G__22119;
chunk__22060_22110 = G__22120;
count__22061_22111 = G__22121;
i__22062_22112 = G__22122;
continue;
} else {
var temp__5720__auto___22123 = cljs.core.seq.call(null,seq__22059_22109);
if(temp__5720__auto___22123){
var seq__22059_22124__$1 = temp__5720__auto___22123;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22059_22124__$1)){
var c__4556__auto___22125 = cljs.core.chunk_first.call(null,seq__22059_22124__$1);
var G__22126 = cljs.core.chunk_rest.call(null,seq__22059_22124__$1);
var G__22127 = c__4556__auto___22125;
var G__22128 = cljs.core.count.call(null,c__4556__auto___22125);
var G__22129 = (0);
seq__22059_22109 = G__22126;
chunk__22060_22110 = G__22127;
count__22061_22111 = G__22128;
i__22062_22112 = G__22129;
continue;
} else {
var vec__22078_22130 = cljs.core.first.call(null,seq__22059_22124__$1);
var name_22131 = cljs.core.nth.call(null,vec__22078_22130,(0),null);
var map__22081_22132 = cljs.core.nth.call(null,vec__22078_22130,(1),null);
var map__22081_22133__$1 = (((((!((map__22081_22132 == null))))?(((((map__22081_22132.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22081_22132.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22081_22132):map__22081_22132);
var doc_22134 = cljs.core.get.call(null,map__22081_22133__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_22135 = cljs.core.get.call(null,map__22081_22133__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_22131);

cljs.core.println.call(null," ",arglists_22135);

if(cljs.core.truth_(doc_22134)){
cljs.core.println.call(null," ",doc_22134);
} else {
}


var G__22136 = cljs.core.next.call(null,seq__22059_22124__$1);
var G__22137 = null;
var G__22138 = (0);
var G__22139 = (0);
seq__22059_22109 = G__22136;
chunk__22060_22110 = G__22137;
count__22061_22111 = G__22138;
i__22062_22112 = G__22139;
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

var seq__22083 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__22084 = null;
var count__22085 = (0);
var i__22086 = (0);
while(true){
if((i__22086 < count__22085)){
var role = cljs.core._nth.call(null,chunk__22084,i__22086);
var temp__5720__auto___22140__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5720__auto___22140__$1)){
var spec_22141 = temp__5720__auto___22140__$1;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_22141));
} else {
}


var G__22142 = seq__22083;
var G__22143 = chunk__22084;
var G__22144 = count__22085;
var G__22145 = (i__22086 + (1));
seq__22083 = G__22142;
chunk__22084 = G__22143;
count__22085 = G__22144;
i__22086 = G__22145;
continue;
} else {
var temp__5720__auto____$1 = cljs.core.seq.call(null,seq__22083);
if(temp__5720__auto____$1){
var seq__22083__$1 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22083__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__22083__$1);
var G__22146 = cljs.core.chunk_rest.call(null,seq__22083__$1);
var G__22147 = c__4556__auto__;
var G__22148 = cljs.core.count.call(null,c__4556__auto__);
var G__22149 = (0);
seq__22083 = G__22146;
chunk__22084 = G__22147;
count__22085 = G__22148;
i__22086 = G__22149;
continue;
} else {
var role = cljs.core.first.call(null,seq__22083__$1);
var temp__5720__auto___22150__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5720__auto___22150__$2)){
var spec_22151 = temp__5720__auto___22150__$2;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_22151));
} else {
}


var G__22152 = cljs.core.next.call(null,seq__22083__$1);
var G__22153 = null;
var G__22154 = (0);
var G__22155 = (0);
seq__22083 = G__22152;
chunk__22084 = G__22153;
count__22085 = G__22154;
i__22086 = G__22155;
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
var G__22156 = cljs.core.conj.call(null,via,t);
var G__22157 = cljs.core.ex_cause.call(null,t);
via = G__22156;
t = G__22157;
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
var map__22160 = datafied_throwable;
var map__22160__$1 = (((((!((map__22160 == null))))?(((((map__22160.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22160.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22160):map__22160);
var via = cljs.core.get.call(null,map__22160__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.call(null,map__22160__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.call(null,map__22160__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__22161 = cljs.core.last.call(null,via);
var map__22161__$1 = (((((!((map__22161 == null))))?(((((map__22161.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22161.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22161):map__22161);
var type = cljs.core.get.call(null,map__22161__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__22161__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.call(null,map__22161__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__22162 = data;
var map__22162__$1 = (((((!((map__22162 == null))))?(((((map__22162.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22162.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22162):map__22162);
var problems = cljs.core.get.call(null,map__22162__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.call(null,map__22162__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.call(null,map__22162__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__22163 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,via));
var map__22163__$1 = (((((!((map__22163 == null))))?(((((map__22163.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22163.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22163):map__22163);
var top_data = map__22163__$1;
var source = cljs.core.get.call(null,map__22163__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.call(null,(function (){var G__22168 = phase;
var G__22168__$1 = (((G__22168 instanceof cljs.core.Keyword))?G__22168.fqn:null);
switch (G__22168__$1) {
case "read-source":
var map__22169 = data;
var map__22169__$1 = (((((!((map__22169 == null))))?(((((map__22169.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22169.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22169):map__22169);
var line = cljs.core.get.call(null,map__22169__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__22169__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__22171 = cljs.core.merge.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,via)),top_data);
var G__22171__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__22171,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__22171);
var G__22171__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__22171__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__22171__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__22171__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__22171__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__22172 = top_data;
var G__22172__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__22172,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__22172);
var G__22172__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__22172__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__22172__$1);
var G__22172__$3 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__22172__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__22172__$2);
var G__22172__$4 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__22172__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__22172__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__22172__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__22172__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__22173 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__22173,(0),null);
var method = cljs.core.nth.call(null,vec__22173,(1),null);
var file = cljs.core.nth.call(null,vec__22173,(2),null);
var line = cljs.core.nth.call(null,vec__22173,(3),null);
var G__22176 = top_data;
var G__22176__$1 = (cljs.core.truth_(line)?cljs.core.assoc.call(null,G__22176,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__22176);
var G__22176__$2 = (cljs.core.truth_(file)?cljs.core.assoc.call(null,G__22176__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__22176__$1);
var G__22176__$3 = (cljs.core.truth_((function (){var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
})())?cljs.core.assoc.call(null,G__22176__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__22176__$2);
var G__22176__$4 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__22176__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__22176__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__22176__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__22176__$4;
}

break;
case "execution":
var vec__22177 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__22177,(0),null);
var method = cljs.core.nth.call(null,vec__22177,(1),null);
var file = cljs.core.nth.call(null,vec__22177,(2),null);
var line = cljs.core.nth.call(null,vec__22177,(3),null);
var file__$1 = cljs.core.first.call(null,cljs.core.remove.call(null,(function (p1__22159_SHARP_){
var or__4126__auto__ = (p1__22159_SHARP_ == null);
if(or__4126__auto__){
return or__4126__auto__;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,p1__22159_SHARP_);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return line;
}
})();
var G__22180 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__22180__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.call(null,G__22180,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__22180);
var G__22180__$2 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__22180__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__22180__$1);
var G__22180__$3 = (cljs.core.truth_((function (){var or__4126__auto__ = fn;
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
})())?cljs.core.assoc.call(null,G__22180__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__22180__$2);
var G__22180__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.call(null,G__22180__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__22180__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__22180__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__22180__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__22168__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__22184){
var map__22185 = p__22184;
var map__22185__$1 = (((((!((map__22185 == null))))?(((((map__22185.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22185.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22185):map__22185);
var triage_data = map__22185__$1;
var phase = cljs.core.get.call(null,map__22185__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.call(null,map__22185__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.call(null,map__22185__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__22185__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.call(null,map__22185__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.call(null,map__22185__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.call(null,map__22185__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.call(null,map__22185__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
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
var G__22187 = phase;
var G__22187__$1 = (((G__22187 instanceof cljs.core.Keyword))?G__22187.fqn:null);
switch (G__22187__$1) {
case "read-source":
return format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause);

break;
case "macro-syntax-check":
return format.call(null,"Syntax error macroexpanding %sat (%s).\n%s",(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,(cljs.core.truth_(spec)?(function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__22188_22197 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__22189_22198 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__22190_22199 = true;
var _STAR_print_fn_STAR__temp_val__22191_22200 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__22190_22199);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__22191_22200);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__22182_SHARP_){
return cljs.core.dissoc.call(null,p1__22182_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__22189_22198);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__22188_22197);
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
var _STAR_print_newline_STAR__orig_val__22192_22201 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__22193_22202 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__22194_22203 = true;
var _STAR_print_fn_STAR__temp_val__22195_22204 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__22194_22203);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__22195_22204);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__22183_SHARP_){
return cljs.core.dissoc.call(null,p1__22183_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__22193_22202);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__22192_22201);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})());
} else {
return format.call(null,"Execution error%s at %s(%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__22187__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str.call(null,cljs.repl.ex_triage.call(null,cljs.repl.Error__GT_map.call(null,error)));
});

//# sourceMappingURL=repl.js.map?rel=1683240968038
