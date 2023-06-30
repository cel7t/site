// Compiled by ClojureScript 1.10.773 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.userAgent.product');
goog.require('goog.object');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('figwheel.client.heads_up');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('cljs.repl');
figwheel.client._figwheel_version_ = "0.5.20";
figwheel.client.js_stringify = (((((typeof JSON !== 'undefined')) && ((!((JSON.stringify == null))))))?(function (x){
return ["#js ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(x,null," "))].join('');
}):(function (x){
try{return cljs.core.str.cljs$core$IFn$_invoke$arity$1(x);
}catch (e30543){if((e30543 instanceof Error)){
var e = e30543;
return "Error: Unable to stringify";
} else {
throw e30543;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__30546 = arguments.length;
switch (G__30546) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__30544_SHARP_){
if(typeof p1__30544_SHARP_ === 'string'){
return p1__30544_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__30544_SHARP_);
}
}),args)], null)], null));

return null;
}));

(figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
}));

(figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2);

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__4742__auto__ = [];
var len__4736__auto___30549 = arguments.length;
var i__4737__auto___30550 = (0);
while(true){
if((i__4737__auto___30550 < len__4736__auto___30549)){
args__4742__auto__.push((arguments[i__4737__auto___30550]));

var G__30551 = (i__4737__auto___30550 + (1));
i__4737__auto___30550 = G__30551;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
}));

(figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq30548){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30548));
}));

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__4742__auto__ = [];
var len__4736__auto___30553 = arguments.length;
var i__4737__auto___30554 = (0);
while(true){
if((i__4737__auto___30554 < len__4736__auto___30553)){
args__4742__auto__.push((arguments[i__4737__auto___30554]));

var G__30555 = (i__4737__auto___30554 + (1));
i__4737__auto___30554 = G__30555;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
}));

(figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq30552){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30552));
}));

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
(cljs.core._STAR_print_newline_STAR_ = false);

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (function figwheel$client$autoload_QMARK_(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),true);
});
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
var res = figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),"Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Figwheel autoloading ",(cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF")].join(''));

return res;
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
/**
 * Figwheel by default loads code changes as you work. Sometimes you
 *   just want to work on your code without the ramifications of
 *   autoloading and simply load your code piecemeal in the REPL. You can
 *   turn autoloading on and of with this method.
 * 
 *   (figwheel.client/set-autoload false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_autoload = (function figwheel$client$set_autoload(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),b);
});
goog.exportSymbol('figwheel.client.set_autoload', figwheel.client.set_autoload);
figwheel.client.repl_pprint = (function figwheel$client$repl_pprint(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),true);
});
goog.exportSymbol('figwheel.client.repl_pprint', figwheel.client.repl_pprint);
/**
 * This method gives you the ability to turn the pretty printing of
 *   the REPL's return value on and off.
 * 
 *   (figwheel.client/set-repl-pprint false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_repl_pprint = (function figwheel$client$set_repl_pprint(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),b);
});
goog.exportSymbol('figwheel.client.set_repl_pprint', figwheel.client.set_repl_pprint);
figwheel.client.repl_result_pr_str = (function figwheel$client$repl_result_pr_str(v){
if(cljs.core.truth_(figwheel.client.repl_pprint.call(null))){
return figwheel.client.utils.pprint_to_string.call(null,v);
} else {
return cljs.core.pr_str.call(null,v);
}
});
goog.exportSymbol('figwheel.client.repl_result_pr_str', figwheel.client.repl_result_pr_str);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel.client.get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__30556){
var map__30557 = p__30556;
var map__30557__$1 = (((((!((map__30557 == null))))?(((((map__30557.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30557.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30557):map__30557);
var message = cljs.core.get.call(null,map__30557__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__30557__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)," : ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__4126__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
if(cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return false;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return ((cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts))));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__26455__auto___30636 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__26456__auto__ = (function (){var switch__26360__auto__ = (function (state_30608){
var state_val_30609 = (state_30608[(1)]);
if((state_val_30609 === (7))){
var inst_30604 = (state_30608[(2)]);
var state_30608__$1 = state_30608;
var statearr_30610_30637 = state_30608__$1;
(statearr_30610_30637[(2)] = inst_30604);

(statearr_30610_30637[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30609 === (1))){
var state_30608__$1 = state_30608;
var statearr_30611_30638 = state_30608__$1;
(statearr_30611_30638[(2)] = null);

(statearr_30611_30638[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30609 === (4))){
var inst_30561 = (state_30608[(7)]);
var inst_30561__$1 = (state_30608[(2)]);
var state_30608__$1 = (function (){var statearr_30612 = state_30608;
(statearr_30612[(7)] = inst_30561__$1);

return statearr_30612;
})();
if(cljs.core.truth_(inst_30561__$1)){
var statearr_30613_30639 = state_30608__$1;
(statearr_30613_30639[(1)] = (5));

} else {
var statearr_30614_30640 = state_30608__$1;
(statearr_30614_30640[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30609 === (15))){
var inst_30568 = (state_30608[(8)]);
var inst_30583 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_30568);
var inst_30584 = cljs.core.first.call(null,inst_30583);
var inst_30585 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_30584);
var inst_30586 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_30585)].join('');
var inst_30587 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_30586);
var state_30608__$1 = state_30608;
var statearr_30615_30641 = state_30608__$1;
(statearr_30615_30641[(2)] = inst_30587);

(statearr_30615_30641[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30609 === (13))){
var inst_30592 = (state_30608[(2)]);
var state_30608__$1 = state_30608;
var statearr_30616_30642 = state_30608__$1;
(statearr_30616_30642[(2)] = inst_30592);

(statearr_30616_30642[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30609 === (6))){
var state_30608__$1 = state_30608;
var statearr_30617_30643 = state_30608__$1;
(statearr_30617_30643[(2)] = null);

(statearr_30617_30643[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30609 === (17))){
var inst_30590 = (state_30608[(2)]);
var state_30608__$1 = state_30608;
var statearr_30618_30644 = state_30608__$1;
(statearr_30618_30644[(2)] = inst_30590);

(statearr_30618_30644[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30609 === (3))){
var inst_30606 = (state_30608[(2)]);
var state_30608__$1 = state_30608;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30608__$1,inst_30606);
} else {
if((state_val_30609 === (12))){
var inst_30567 = (state_30608[(9)]);
var inst_30581 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_30567,opts);
var state_30608__$1 = state_30608;
if(inst_30581){
var statearr_30619_30645 = state_30608__$1;
(statearr_30619_30645[(1)] = (15));

} else {
var statearr_30620_30646 = state_30608__$1;
(statearr_30620_30646[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30609 === (2))){
var state_30608__$1 = state_30608;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30608__$1,(4),ch);
} else {
if((state_val_30609 === (11))){
var inst_30568 = (state_30608[(8)]);
var inst_30573 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_30574 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_30568);
var inst_30575 = cljs.core.async.timeout.call(null,(1000));
var inst_30576 = [inst_30574,inst_30575];
var inst_30577 = (new cljs.core.PersistentVector(null,2,(5),inst_30573,inst_30576,null));
var state_30608__$1 = state_30608;
return cljs.core.async.ioc_alts_BANG_.call(null,state_30608__$1,(14),inst_30577);
} else {
if((state_val_30609 === (9))){
var inst_30568 = (state_30608[(8)]);
var inst_30594 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_30595 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_30568);
var inst_30596 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_30595);
var inst_30597 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_30596)].join('');
var inst_30598 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_30597);
var state_30608__$1 = (function (){var statearr_30621 = state_30608;
(statearr_30621[(10)] = inst_30594);

return statearr_30621;
})();
var statearr_30622_30647 = state_30608__$1;
(statearr_30622_30647[(2)] = inst_30598);

(statearr_30622_30647[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30609 === (5))){
var inst_30561 = (state_30608[(7)]);
var inst_30563 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_30564 = (new cljs.core.PersistentArrayMap(null,2,inst_30563,null));
var inst_30565 = (new cljs.core.PersistentHashSet(null,inst_30564,null));
var inst_30566 = figwheel.client.focus_msgs.call(null,inst_30565,inst_30561);
var inst_30567 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_30566);
var inst_30568 = cljs.core.first.call(null,inst_30566);
var inst_30569 = figwheel.client.autoload_QMARK_.call(null);
var state_30608__$1 = (function (){var statearr_30623 = state_30608;
(statearr_30623[(9)] = inst_30567);

(statearr_30623[(8)] = inst_30568);

return statearr_30623;
})();
if(cljs.core.truth_(inst_30569)){
var statearr_30624_30648 = state_30608__$1;
(statearr_30624_30648[(1)] = (8));

} else {
var statearr_30625_30649 = state_30608__$1;
(statearr_30625_30649[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30609 === (14))){
var inst_30579 = (state_30608[(2)]);
var state_30608__$1 = state_30608;
var statearr_30626_30650 = state_30608__$1;
(statearr_30626_30650[(2)] = inst_30579);

(statearr_30626_30650[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30609 === (16))){
var state_30608__$1 = state_30608;
var statearr_30627_30651 = state_30608__$1;
(statearr_30627_30651[(2)] = null);

(statearr_30627_30651[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30609 === (10))){
var inst_30600 = (state_30608[(2)]);
var state_30608__$1 = (function (){var statearr_30628 = state_30608;
(statearr_30628[(11)] = inst_30600);

return statearr_30628;
})();
var statearr_30629_30652 = state_30608__$1;
(statearr_30629_30652[(2)] = null);

(statearr_30629_30652[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30609 === (8))){
var inst_30567 = (state_30608[(9)]);
var inst_30571 = figwheel.client.reload_file_state_QMARK_.call(null,inst_30567,opts);
var state_30608__$1 = state_30608;
if(cljs.core.truth_(inst_30571)){
var statearr_30630_30653 = state_30608__$1;
(statearr_30630_30653[(1)] = (11));

} else {
var statearr_30631_30654 = state_30608__$1;
(statearr_30631_30654[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__26361__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__26361__auto____0 = (function (){
var statearr_30632 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30632[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__26361__auto__);

(statearr_30632[(1)] = (1));

return statearr_30632;
});
var figwheel$client$file_reloader_plugin_$_state_machine__26361__auto____1 = (function (state_30608){
while(true){
var ret_value__26362__auto__ = (function (){try{while(true){
var result__26363__auto__ = switch__26360__auto__.call(null,state_30608);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26363__auto__;
}
break;
}
}catch (e30633){if((e30633 instanceof Object)){
var ex__26364__auto__ = e30633;
var statearr_30634_30655 = state_30608;
(statearr_30634_30655[(5)] = ex__26364__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30608);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30633;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30656 = state_30608;
state_30608 = G__30656;
continue;
} else {
return ret_value__26362__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__26361__auto__ = function(state_30608){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__26361__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__26361__auto____1.call(this,state_30608);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__26361__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__26361__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__26361__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__26361__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__26361__auto__;
})()
})();
var state__26457__auto__ = (function (){var statearr_30635 = f__26456__auto__.call(null);
(statearr_30635[(6)] = c__26455__auto___30636);

return statearr_30635;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26457__auto__);
}));


return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__30657_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__30657_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(figwheel.client.utils.node_env_QMARK_.call(null)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(goog.userAgent.product.SAFARI){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(goog.userAgent.product.CHROME){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(goog.userAgent.product.FIREFOX){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(goog.userAgent.product.IE){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_30663 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var sb = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__30659 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__30660 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__30661 = true;
var _STAR_print_fn_STAR__temp_val__30662 = (function (x){
return sb.append(x);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__30661);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__30662);

try{var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
var result_value__$1 = (((!(typeof result_value === 'string')))?cljs.core.pr_str.call(null,result_value):result_value);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"out","out",-910545517),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value__$1], null));
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__30660);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__30659);
}}catch (e30658){if((e30658 instanceof Error)){
var e = e30658;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_30663], null));
} else {
var e = e30658;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return (cljs.user = ({}));
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__30664){
var map__30665 = p__30664;
var map__30665__$1 = (((((!((map__30665 == null))))?(((((map__30665.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30665.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30665):map__30665);
var opts = map__30665__$1;
var build_id = cljs.core.get.call(null,map__30665__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return (function (p__30667){
var vec__30668 = p__30667;
var seq__30669 = cljs.core.seq.call(null,vec__30668);
var first__30670 = cljs.core.first.call(null,seq__30669);
var seq__30669__$1 = cljs.core.next.call(null,seq__30669);
var map__30671 = first__30670;
var map__30671__$1 = (((((!((map__30671 == null))))?(((((map__30671.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30671.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30671):map__30671);
var msg = map__30671__$1;
var msg_name = cljs.core.get.call(null,map__30671__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__30669__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,(function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
}));
} else {
return null;
}
});
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__30673){
var vec__30674 = p__30673;
var seq__30675 = cljs.core.seq.call(null,vec__30674);
var first__30676 = cljs.core.first.call(null,seq__30675);
var seq__30675__$1 = cljs.core.next.call(null,seq__30675);
var map__30677 = first__30676;
var map__30677__$1 = (((((!((map__30677 == null))))?(((((map__30677.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30677.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30677):map__30677);
var msg = map__30677__$1;
var msg_name = cljs.core.get.call(null,map__30677__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__30675__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__30679){
var map__30680 = p__30679;
var map__30680__$1 = (((((!((map__30680 == null))))?(((((map__30680.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30680.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30680):map__30680);
var on_compile_warning = cljs.core.get.call(null,map__30680__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__30680__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return (function (p__30682){
var vec__30683 = p__30682;
var seq__30684 = cljs.core.seq.call(null,vec__30683);
var first__30685 = cljs.core.first.call(null,seq__30684);
var seq__30684__$1 = cljs.core.next.call(null,seq__30684);
var map__30686 = first__30685;
var map__30686__$1 = (((((!((map__30686 == null))))?(((((map__30686.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30686.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30686):map__30686);
var msg = map__30686__$1;
var msg_name = cljs.core.get.call(null,map__30686__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__30684__$1;
var pred__30688 = cljs.core._EQ_;
var expr__30689 = msg_name;
if(cljs.core.truth_(pred__30688.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__30689))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__30688.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__30689))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__26455__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__26456__auto__ = (function (){var switch__26360__auto__ = (function (state_30778){
var state_val_30779 = (state_30778[(1)]);
if((state_val_30779 === (7))){
var inst_30698 = (state_30778[(2)]);
var state_30778__$1 = state_30778;
if(cljs.core.truth_(inst_30698)){
var statearr_30780_30827 = state_30778__$1;
(statearr_30780_30827[(1)] = (8));

} else {
var statearr_30781_30828 = state_30778__$1;
(statearr_30781_30828[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30779 === (20))){
var inst_30772 = (state_30778[(2)]);
var state_30778__$1 = state_30778;
var statearr_30782_30829 = state_30778__$1;
(statearr_30782_30829[(2)] = inst_30772);

(statearr_30782_30829[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30779 === (27))){
var inst_30768 = (state_30778[(2)]);
var state_30778__$1 = state_30778;
var statearr_30783_30830 = state_30778__$1;
(statearr_30783_30830[(2)] = inst_30768);

(statearr_30783_30830[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30779 === (1))){
var inst_30691 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_30778__$1 = state_30778;
if(cljs.core.truth_(inst_30691)){
var statearr_30784_30831 = state_30778__$1;
(statearr_30784_30831[(1)] = (2));

} else {
var statearr_30785_30832 = state_30778__$1;
(statearr_30785_30832[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30779 === (24))){
var inst_30770 = (state_30778[(2)]);
var state_30778__$1 = state_30778;
var statearr_30786_30833 = state_30778__$1;
(statearr_30786_30833[(2)] = inst_30770);

(statearr_30786_30833[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30779 === (4))){
var inst_30776 = (state_30778[(2)]);
var state_30778__$1 = state_30778;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30778__$1,inst_30776);
} else {
if((state_val_30779 === (15))){
var inst_30774 = (state_30778[(2)]);
var state_30778__$1 = state_30778;
var statearr_30787_30834 = state_30778__$1;
(statearr_30787_30834[(2)] = inst_30774);

(statearr_30787_30834[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30779 === (21))){
var inst_30727 = (state_30778[(2)]);
var inst_30728 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30729 = figwheel.client.auto_jump_to_error.call(null,opts,inst_30728);
var state_30778__$1 = (function (){var statearr_30788 = state_30778;
(statearr_30788[(7)] = inst_30727);

return statearr_30788;
})();
var statearr_30789_30835 = state_30778__$1;
(statearr_30789_30835[(2)] = inst_30729);

(statearr_30789_30835[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30779 === (31))){
var inst_30757 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_30778__$1 = state_30778;
if(inst_30757){
var statearr_30790_30836 = state_30778__$1;
(statearr_30790_30836[(1)] = (34));

} else {
var statearr_30791_30837 = state_30778__$1;
(statearr_30791_30837[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30779 === (32))){
var inst_30766 = (state_30778[(2)]);
var state_30778__$1 = state_30778;
var statearr_30792_30838 = state_30778__$1;
(statearr_30792_30838[(2)] = inst_30766);

(statearr_30792_30838[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30779 === (33))){
var inst_30753 = (state_30778[(2)]);
var inst_30754 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30755 = figwheel.client.auto_jump_to_error.call(null,opts,inst_30754);
var state_30778__$1 = (function (){var statearr_30793 = state_30778;
(statearr_30793[(8)] = inst_30753);

return statearr_30793;
})();
var statearr_30794_30839 = state_30778__$1;
(statearr_30794_30839[(2)] = inst_30755);

(statearr_30794_30839[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30779 === (13))){
var inst_30712 = figwheel.client.heads_up.clear.call(null);
var state_30778__$1 = state_30778;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30778__$1,(16),inst_30712);
} else {
if((state_val_30779 === (22))){
var inst_30733 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30734 = figwheel.client.heads_up.append_warning_message.call(null,inst_30733);
var state_30778__$1 = state_30778;
var statearr_30795_30840 = state_30778__$1;
(statearr_30795_30840[(2)] = inst_30734);

(statearr_30795_30840[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30779 === (36))){
var inst_30764 = (state_30778[(2)]);
var state_30778__$1 = state_30778;
var statearr_30796_30841 = state_30778__$1;
(statearr_30796_30841[(2)] = inst_30764);

(statearr_30796_30841[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30779 === (29))){
var inst_30744 = (state_30778[(2)]);
var inst_30745 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30746 = figwheel.client.auto_jump_to_error.call(null,opts,inst_30745);
var state_30778__$1 = (function (){var statearr_30797 = state_30778;
(statearr_30797[(9)] = inst_30744);

return statearr_30797;
})();
var statearr_30798_30842 = state_30778__$1;
(statearr_30798_30842[(2)] = inst_30746);

(statearr_30798_30842[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30779 === (6))){
var inst_30693 = (state_30778[(10)]);
var state_30778__$1 = state_30778;
var statearr_30799_30843 = state_30778__$1;
(statearr_30799_30843[(2)] = inst_30693);

(statearr_30799_30843[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30779 === (28))){
var inst_30740 = (state_30778[(2)]);
var inst_30741 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30742 = figwheel.client.heads_up.display_warning.call(null,inst_30741);
var state_30778__$1 = (function (){var statearr_30800 = state_30778;
(statearr_30800[(11)] = inst_30740);

return statearr_30800;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30778__$1,(29),inst_30742);
} else {
if((state_val_30779 === (25))){
var inst_30738 = figwheel.client.heads_up.clear.call(null);
var state_30778__$1 = state_30778;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30778__$1,(28),inst_30738);
} else {
if((state_val_30779 === (34))){
var inst_30759 = figwheel.client.heads_up.flash_loaded.call(null);
var state_30778__$1 = state_30778;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30778__$1,(37),inst_30759);
} else {
if((state_val_30779 === (17))){
var inst_30718 = (state_30778[(2)]);
var inst_30719 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30720 = figwheel.client.auto_jump_to_error.call(null,opts,inst_30719);
var state_30778__$1 = (function (){var statearr_30801 = state_30778;
(statearr_30801[(12)] = inst_30718);

return statearr_30801;
})();
var statearr_30802_30844 = state_30778__$1;
(statearr_30802_30844[(2)] = inst_30720);

(statearr_30802_30844[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30779 === (3))){
var inst_30710 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_30778__$1 = state_30778;
if(inst_30710){
var statearr_30803_30845 = state_30778__$1;
(statearr_30803_30845[(1)] = (13));

} else {
var statearr_30804_30846 = state_30778__$1;
(statearr_30804_30846[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30779 === (12))){
var inst_30706 = (state_30778[(2)]);
var state_30778__$1 = state_30778;
var statearr_30805_30847 = state_30778__$1;
(statearr_30805_30847[(2)] = inst_30706);

(statearr_30805_30847[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30779 === (2))){
var inst_30693 = (state_30778[(10)]);
var inst_30693__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_30778__$1 = (function (){var statearr_30806 = state_30778;
(statearr_30806[(10)] = inst_30693__$1);

return statearr_30806;
})();
if(cljs.core.truth_(inst_30693__$1)){
var statearr_30807_30848 = state_30778__$1;
(statearr_30807_30848[(1)] = (5));

} else {
var statearr_30808_30849 = state_30778__$1;
(statearr_30808_30849[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30779 === (23))){
var inst_30736 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_30778__$1 = state_30778;
if(inst_30736){
var statearr_30809_30850 = state_30778__$1;
(statearr_30809_30850[(1)] = (25));

} else {
var statearr_30810_30851 = state_30778__$1;
(statearr_30810_30851[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30779 === (35))){
var state_30778__$1 = state_30778;
var statearr_30811_30852 = state_30778__$1;
(statearr_30811_30852[(2)] = null);

(statearr_30811_30852[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30779 === (19))){
var inst_30731 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_30778__$1 = state_30778;
if(inst_30731){
var statearr_30812_30853 = state_30778__$1;
(statearr_30812_30853[(1)] = (22));

} else {
var statearr_30813_30854 = state_30778__$1;
(statearr_30813_30854[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30779 === (11))){
var inst_30702 = (state_30778[(2)]);
var state_30778__$1 = state_30778;
var statearr_30814_30855 = state_30778__$1;
(statearr_30814_30855[(2)] = inst_30702);

(statearr_30814_30855[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30779 === (9))){
var inst_30704 = figwheel.client.heads_up.clear.call(null);
var state_30778__$1 = state_30778;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30778__$1,(12),inst_30704);
} else {
if((state_val_30779 === (5))){
var inst_30695 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_30778__$1 = state_30778;
var statearr_30815_30856 = state_30778__$1;
(statearr_30815_30856[(2)] = inst_30695);

(statearr_30815_30856[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30779 === (14))){
var inst_30722 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_30778__$1 = state_30778;
if(inst_30722){
var statearr_30816_30857 = state_30778__$1;
(statearr_30816_30857[(1)] = (18));

} else {
var statearr_30817_30858 = state_30778__$1;
(statearr_30817_30858[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30779 === (26))){
var inst_30748 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_30778__$1 = state_30778;
if(inst_30748){
var statearr_30818_30859 = state_30778__$1;
(statearr_30818_30859[(1)] = (30));

} else {
var statearr_30819_30860 = state_30778__$1;
(statearr_30819_30860[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30779 === (16))){
var inst_30714 = (state_30778[(2)]);
var inst_30715 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30716 = figwheel.client.heads_up.display_exception.call(null,inst_30715);
var state_30778__$1 = (function (){var statearr_30820 = state_30778;
(statearr_30820[(13)] = inst_30714);

return statearr_30820;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30778__$1,(17),inst_30716);
} else {
if((state_val_30779 === (30))){
var inst_30750 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30751 = figwheel.client.heads_up.display_warning.call(null,inst_30750);
var state_30778__$1 = state_30778;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30778__$1,(33),inst_30751);
} else {
if((state_val_30779 === (10))){
var inst_30708 = (state_30778[(2)]);
var state_30778__$1 = state_30778;
var statearr_30821_30861 = state_30778__$1;
(statearr_30821_30861[(2)] = inst_30708);

(statearr_30821_30861[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30779 === (18))){
var inst_30724 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30725 = figwheel.client.heads_up.display_exception.call(null,inst_30724);
var state_30778__$1 = state_30778;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30778__$1,(21),inst_30725);
} else {
if((state_val_30779 === (37))){
var inst_30761 = (state_30778[(2)]);
var state_30778__$1 = state_30778;
var statearr_30822_30862 = state_30778__$1;
(statearr_30822_30862[(2)] = inst_30761);

(statearr_30822_30862[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30779 === (8))){
var inst_30700 = figwheel.client.heads_up.flash_loaded.call(null);
var state_30778__$1 = state_30778;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30778__$1,(11),inst_30700);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26361__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26361__auto____0 = (function (){
var statearr_30823 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30823[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26361__auto__);

(statearr_30823[(1)] = (1));

return statearr_30823;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26361__auto____1 = (function (state_30778){
while(true){
var ret_value__26362__auto__ = (function (){try{while(true){
var result__26363__auto__ = switch__26360__auto__.call(null,state_30778);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26363__auto__;
}
break;
}
}catch (e30824){if((e30824 instanceof Object)){
var ex__26364__auto__ = e30824;
var statearr_30825_30863 = state_30778;
(statearr_30825_30863[(5)] = ex__26364__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30778);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30824;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30864 = state_30778;
state_30778 = G__30864;
continue;
} else {
return ret_value__26362__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26361__auto__ = function(state_30778){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26361__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26361__auto____1.call(this,state_30778);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26361__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26361__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26361__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26361__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26361__auto__;
})()
})();
var state__26457__auto__ = (function (){var statearr_30826 = f__26456__auto__.call(null);
(statearr_30826[(6)] = c__26455__auto__);

return statearr_30826;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26457__auto__);
}));

return c__26455__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__26455__auto___30893 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__26456__auto__ = (function (){var switch__26360__auto__ = (function (state_30879){
var state_val_30880 = (state_30879[(1)]);
if((state_val_30880 === (1))){
var state_30879__$1 = state_30879;
var statearr_30881_30894 = state_30879__$1;
(statearr_30881_30894[(2)] = null);

(statearr_30881_30894[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30880 === (2))){
var state_30879__$1 = state_30879;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30879__$1,(4),ch);
} else {
if((state_val_30880 === (3))){
var inst_30877 = (state_30879[(2)]);
var state_30879__$1 = state_30879;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30879__$1,inst_30877);
} else {
if((state_val_30880 === (4))){
var inst_30867 = (state_30879[(7)]);
var inst_30867__$1 = (state_30879[(2)]);
var state_30879__$1 = (function (){var statearr_30882 = state_30879;
(statearr_30882[(7)] = inst_30867__$1);

return statearr_30882;
})();
if(cljs.core.truth_(inst_30867__$1)){
var statearr_30883_30895 = state_30879__$1;
(statearr_30883_30895[(1)] = (5));

} else {
var statearr_30884_30896 = state_30879__$1;
(statearr_30884_30896[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30880 === (5))){
var inst_30867 = (state_30879[(7)]);
var inst_30869 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_30867);
var state_30879__$1 = state_30879;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30879__$1,(8),inst_30869);
} else {
if((state_val_30880 === (6))){
var state_30879__$1 = state_30879;
var statearr_30885_30897 = state_30879__$1;
(statearr_30885_30897[(2)] = null);

(statearr_30885_30897[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30880 === (7))){
var inst_30875 = (state_30879[(2)]);
var state_30879__$1 = state_30879;
var statearr_30886_30898 = state_30879__$1;
(statearr_30886_30898[(2)] = inst_30875);

(statearr_30886_30898[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30880 === (8))){
var inst_30871 = (state_30879[(2)]);
var state_30879__$1 = (function (){var statearr_30887 = state_30879;
(statearr_30887[(8)] = inst_30871);

return statearr_30887;
})();
var statearr_30888_30899 = state_30879__$1;
(statearr_30888_30899[(2)] = null);

(statearr_30888_30899[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
});
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__26361__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__26361__auto____0 = (function (){
var statearr_30889 = [null,null,null,null,null,null,null,null,null];
(statearr_30889[(0)] = figwheel$client$heads_up_plugin_$_state_machine__26361__auto__);

(statearr_30889[(1)] = (1));

return statearr_30889;
});
var figwheel$client$heads_up_plugin_$_state_machine__26361__auto____1 = (function (state_30879){
while(true){
var ret_value__26362__auto__ = (function (){try{while(true){
var result__26363__auto__ = switch__26360__auto__.call(null,state_30879);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26363__auto__;
}
break;
}
}catch (e30890){if((e30890 instanceof Object)){
var ex__26364__auto__ = e30890;
var statearr_30891_30900 = state_30879;
(statearr_30891_30900[(5)] = ex__26364__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30879);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30890;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30901 = state_30879;
state_30879 = G__30901;
continue;
} else {
return ret_value__26362__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__26361__auto__ = function(state_30879){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__26361__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__26361__auto____1.call(this,state_30879);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__26361__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__26361__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__26361__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__26361__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__26361__auto__;
})()
})();
var state__26457__auto__ = (function (){var statearr_30892 = f__26456__auto__.call(null);
(statearr_30892[(6)] = c__26455__auto___30893);

return statearr_30892;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26457__auto__);
}));


figwheel.client.heads_up.ensure_container.call(null);

return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__26455__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__26456__auto__ = (function (){var switch__26360__auto__ = (function (state_30907){
var state_val_30908 = (state_30907[(1)]);
if((state_val_30908 === (1))){
var inst_30902 = cljs.core.async.timeout.call(null,(3000));
var state_30907__$1 = state_30907;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30907__$1,(2),inst_30902);
} else {
if((state_val_30908 === (2))){
var inst_30904 = (state_30907[(2)]);
var inst_30905 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_30907__$1 = (function (){var statearr_30909 = state_30907;
(statearr_30909[(7)] = inst_30904);

return statearr_30909;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30907__$1,inst_30905);
} else {
return null;
}
}
});
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__26361__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__26361__auto____0 = (function (){
var statearr_30910 = [null,null,null,null,null,null,null,null];
(statearr_30910[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__26361__auto__);

(statearr_30910[(1)] = (1));

return statearr_30910;
});
var figwheel$client$enforce_project_plugin_$_state_machine__26361__auto____1 = (function (state_30907){
while(true){
var ret_value__26362__auto__ = (function (){try{while(true){
var result__26363__auto__ = switch__26360__auto__.call(null,state_30907);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26363__auto__;
}
break;
}
}catch (e30911){if((e30911 instanceof Object)){
var ex__26364__auto__ = e30911;
var statearr_30912_30914 = state_30907;
(statearr_30912_30914[(5)] = ex__26364__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30907);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30911;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30915 = state_30907;
state_30907 = G__30915;
continue;
} else {
return ret_value__26362__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__26361__auto__ = function(state_30907){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__26361__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__26361__auto____1.call(this,state_30907);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__26361__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__26361__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__26361__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__26361__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__26361__auto__;
})()
})();
var state__26457__auto__ = (function (){var statearr_30913 = f__26456__auto__.call(null);
(statearr_30913[(6)] = c__26455__auto__);

return statearr_30913;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26457__auto__);
}));

return c__26455__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__5720__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__5720__auto__)){
var figwheel_version = temp__5720__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__26455__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__26456__auto__ = (function (){var switch__26360__auto__ = (function (state_30922){
var state_val_30923 = (state_30922[(1)]);
if((state_val_30923 === (1))){
var inst_30916 = cljs.core.async.timeout.call(null,(2000));
var state_30922__$1 = state_30922;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30922__$1,(2),inst_30916);
} else {
if((state_val_30923 === (2))){
var inst_30918 = (state_30922[(2)]);
var inst_30919 = ["Figwheel Client Version <strong>",figwheel.client._figwheel_version_,"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_30920 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_30919);
var state_30922__$1 = (function (){var statearr_30924 = state_30922;
(statearr_30924[(7)] = inst_30918);

return statearr_30924;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30922__$1,inst_30920);
} else {
return null;
}
}
});
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26361__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26361__auto____0 = (function (){
var statearr_30925 = [null,null,null,null,null,null,null,null];
(statearr_30925[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26361__auto__);

(statearr_30925[(1)] = (1));

return statearr_30925;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26361__auto____1 = (function (state_30922){
while(true){
var ret_value__26362__auto__ = (function (){try{while(true){
var result__26363__auto__ = switch__26360__auto__.call(null,state_30922);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26363__auto__;
}
break;
}
}catch (e30926){if((e30926 instanceof Object)){
var ex__26364__auto__ = e30926;
var statearr_30927_30929 = state_30922;
(statearr_30927_30929[(5)] = ex__26364__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30922);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30926;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30930 = state_30922;
state_30922 = G__30930;
continue;
} else {
return ret_value__26362__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26361__auto__ = function(state_30922){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26361__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26361__auto____1.call(this,state_30922);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26361__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26361__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26361__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26361__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26361__auto__;
})()
})();
var state__26457__auto__ = (function (){var statearr_30928 = f__26456__auto__.call(null);
(statearr_30928[(6)] = c__26455__auto__);

return statearr_30928;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26457__auto__);
}));

return c__26455__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__30931){
var map__30932 = p__30931;
var map__30932__$1 = (((((!((map__30932 == null))))?(((((map__30932.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30932.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30932):map__30932);
var file = cljs.core.get.call(null,map__30932__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__30932__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__30932__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__30934 = "";
var G__30934__$1 = (cljs.core.truth_(file)?[G__30934,"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__30934);
var G__30934__$2 = (cljs.core.truth_(line)?[G__30934__$1," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__30934__$1);
if(cljs.core.truth_((function (){var and__4115__auto__ = line;
if(cljs.core.truth_(and__4115__auto__)){
return column;
} else {
return and__4115__auto__;
}
})())){
return [G__30934__$2,", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__30934__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__30935){
var map__30936 = p__30935;
var map__30936__$1 = (((((!((map__30936 == null))))?(((((map__30936.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30936.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30936):map__30936);
var ed = map__30936__$1;
var exception_data = cljs.core.get.call(null,map__30936__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__30936__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
var message_30939 = (function (){var G__30938 = cljs.core.apply.call(null,cljs.core.str,"Figwheel: Compile Exception ",figwheel.client.format_messages.call(null,exception_data));
if(cljs.core.truth_(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(exception_data))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__30938)," Error on ",figwheel.client.file_line_column.call(null,exception_data)].join('');
} else {
return G__30938;
}
})();
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),message_30939);

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__30940){
var map__30941 = p__30940;
var map__30941__$1 = (((((!((map__30941 == null))))?(((((map__30941.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30941.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30941):map__30941);
var w = map__30941__$1;
var message = cljs.core.get.call(null,map__30941__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),["Figwheel: Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message))," in ",figwheel.client.file_line_column.call(null,message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.config_defaults !== 'undefined')){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources/public/js/compiled/out/figwheel/client.cljs",33,1,362,362,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources/public/js/compiled/out/figwheel/client.cljs",30,1,355,355,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,["ws://",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),"/figwheel-ws"].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(figwheel.client.utils.html_env_QMARK_.call(null)){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = (((!(figwheel.client.utils.html_env_QMARK_.call(null))))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__4115__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__4115__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__4115__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_json_message_watch = (function figwheel$client$add_json_message_watch(key,callback){
return figwheel.client.add_message_watch.call(null,key,cljs.core.comp.call(null,callback,cljs.core.clj__GT_js));
});
goog.exportSymbol('figwheel.client.add_json_message_watch', figwheel.client.add_json_message_watch);
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__30943 = cljs.core.seq.call(null,plugins);
var chunk__30944 = null;
var count__30945 = (0);
var i__30946 = (0);
while(true){
if((i__30946 < count__30945)){
var vec__30953 = cljs.core._nth.call(null,chunk__30944,i__30946);
var k = cljs.core.nth.call(null,vec__30953,(0),null);
var plugin = cljs.core.nth.call(null,vec__30953,(1),null);
if(cljs.core.truth_(plugin)){
var pl_30959 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__30943,chunk__30944,count__30945,i__30946,pl_30959,vec__30953,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_30959.call(null,msg_hist);
});})(seq__30943,chunk__30944,count__30945,i__30946,pl_30959,vec__30953,k,plugin))
);
} else {
}


var G__30960 = seq__30943;
var G__30961 = chunk__30944;
var G__30962 = count__30945;
var G__30963 = (i__30946 + (1));
seq__30943 = G__30960;
chunk__30944 = G__30961;
count__30945 = G__30962;
i__30946 = G__30963;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__30943);
if(temp__5720__auto__){
var seq__30943__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30943__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__30943__$1);
var G__30964 = cljs.core.chunk_rest.call(null,seq__30943__$1);
var G__30965 = c__4556__auto__;
var G__30966 = cljs.core.count.call(null,c__4556__auto__);
var G__30967 = (0);
seq__30943 = G__30964;
chunk__30944 = G__30965;
count__30945 = G__30966;
i__30946 = G__30967;
continue;
} else {
var vec__30956 = cljs.core.first.call(null,seq__30943__$1);
var k = cljs.core.nth.call(null,vec__30956,(0),null);
var plugin = cljs.core.nth.call(null,vec__30956,(1),null);
if(cljs.core.truth_(plugin)){
var pl_30968 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__30943,chunk__30944,count__30945,i__30946,pl_30968,vec__30956,k,plugin,seq__30943__$1,temp__5720__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_30968.call(null,msg_hist);
});})(seq__30943,chunk__30944,count__30945,i__30946,pl_30968,vec__30956,k,plugin,seq__30943__$1,temp__5720__auto__))
);
} else {
}


var G__30969 = cljs.core.next.call(null,seq__30943__$1);
var G__30970 = null;
var G__30971 = (0);
var G__30972 = (0);
seq__30943 = G__30969;
chunk__30944 = G__30970;
count__30945 = G__30971;
i__30946 = G__30972;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var G__30974 = arguments.length;
switch (G__30974) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((((!((goog.dependencies_ == null)))) || ((((!((goog.debugLoader_ == null)))) && ((!((goog.debugLoader_.dependencies_ == null)))))))){
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.__figwheel_start_once__ !== 'undefined')){
return null;
} else {
return (
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
(figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts));

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__30975_30980 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__30976_30981 = null;
var count__30977_30982 = (0);
var i__30978_30983 = (0);
while(true){
if((i__30978_30983 < count__30977_30982)){
var msg_30984 = cljs.core._nth.call(null,chunk__30976_30981,i__30978_30983);
figwheel.client.socket.handle_incoming_message.call(null,msg_30984);


var G__30985 = seq__30975_30980;
var G__30986 = chunk__30976_30981;
var G__30987 = count__30977_30982;
var G__30988 = (i__30978_30983 + (1));
seq__30975_30980 = G__30985;
chunk__30976_30981 = G__30986;
count__30977_30982 = G__30987;
i__30978_30983 = G__30988;
continue;
} else {
var temp__5720__auto___30989 = cljs.core.seq.call(null,seq__30975_30980);
if(temp__5720__auto___30989){
var seq__30975_30990__$1 = temp__5720__auto___30989;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30975_30990__$1)){
var c__4556__auto___30991 = cljs.core.chunk_first.call(null,seq__30975_30990__$1);
var G__30992 = cljs.core.chunk_rest.call(null,seq__30975_30990__$1);
var G__30993 = c__4556__auto___30991;
var G__30994 = cljs.core.count.call(null,c__4556__auto___30991);
var G__30995 = (0);
seq__30975_30980 = G__30992;
chunk__30976_30981 = G__30993;
count__30977_30982 = G__30994;
i__30978_30983 = G__30995;
continue;
} else {
var msg_30996 = cljs.core.first.call(null,seq__30975_30990__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_30996);


var G__30997 = cljs.core.next.call(null,seq__30975_30990__$1);
var G__30998 = null;
var G__30999 = (0);
var G__31000 = (0);
seq__30975_30980 = G__30997;
chunk__30976_30981 = G__30998;
count__30977_30982 = G__30999;
i__30978_30983 = G__31000;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
})))
;
}
} else {
return null;
}
}));

(figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
}));

(figwheel.client.start.cljs$lang$maxFixedArity = 1);

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__4742__auto__ = [];
var len__4736__auto___31005 = arguments.length;
var i__4737__auto___31006 = (0);
while(true){
if((i__4737__auto___31006 < len__4736__auto___31005)){
args__4742__auto__.push((arguments[i__4737__auto___31006]));

var G__31007 = (i__4737__auto___31006 + (1));
i__4737__auto___31006 = G__31007;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__31002){
var map__31003 = p__31002;
var map__31003__$1 = (((((!((map__31003 == null))))?(((((map__31003.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31003.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31003):map__31003);
var opts = map__31003__$1;
return figwheel.client.start.call(null,opts);
}));

(figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq31001){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31001));
}));

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e31008){if((e31008 instanceof Error)){
var e = e31008;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e31008;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
(goog.dependencies_ = true);
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),(function (p__31009){
var map__31010 = p__31009;
var map__31010__$1 = (((((!((map__31010 == null))))?(((((map__31010.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31010.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31010):map__31010);
var msg_name = cljs.core.get.call(null,map__31010__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return (location.href = location.href);
} else {
return null;
}
}));
});

//# sourceMappingURL=client.js.map?rel=1688157140020
