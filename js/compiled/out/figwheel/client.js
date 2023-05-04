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
}catch (e24379){if((e24379 instanceof Error)){
var e = e24379;
return "Error: Unable to stringify";
} else {
throw e24379;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__24382 = arguments.length;
switch (G__24382) {
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
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__24380_SHARP_){
if(typeof p1__24380_SHARP_ === 'string'){
return p1__24380_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__24380_SHARP_);
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
var len__4736__auto___24385 = arguments.length;
var i__4737__auto___24386 = (0);
while(true){
if((i__4737__auto___24386 < len__4736__auto___24385)){
args__4742__auto__.push((arguments[i__4737__auto___24386]));

var G__24387 = (i__4737__auto___24386 + (1));
i__4737__auto___24386 = G__24387;
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
(figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq24384){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24384));
}));

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__4742__auto__ = [];
var len__4736__auto___24389 = arguments.length;
var i__4737__auto___24390 = (0);
while(true){
if((i__4737__auto___24390 < len__4736__auto___24389)){
args__4742__auto__.push((arguments[i__4737__auto___24390]));

var G__24391 = (i__4737__auto___24390 + (1));
i__4737__auto___24390 = G__24391;
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
(figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq24388){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24388));
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__24392){
var map__24393 = p__24392;
var map__24393__$1 = (((((!((map__24393 == null))))?(((((map__24393.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24393.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24393):map__24393);
var message = cljs.core.get.call(null,map__24393__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__24393__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
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
var c__23644__auto___24472 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__23645__auto__ = (function (){var switch__23621__auto__ = (function (state_24444){
var state_val_24445 = (state_24444[(1)]);
if((state_val_24445 === (7))){
var inst_24440 = (state_24444[(2)]);
var state_24444__$1 = state_24444;
var statearr_24446_24473 = state_24444__$1;
(statearr_24446_24473[(2)] = inst_24440);

(statearr_24446_24473[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24445 === (1))){
var state_24444__$1 = state_24444;
var statearr_24447_24474 = state_24444__$1;
(statearr_24447_24474[(2)] = null);

(statearr_24447_24474[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24445 === (4))){
var inst_24397 = (state_24444[(7)]);
var inst_24397__$1 = (state_24444[(2)]);
var state_24444__$1 = (function (){var statearr_24448 = state_24444;
(statearr_24448[(7)] = inst_24397__$1);

return statearr_24448;
})();
if(cljs.core.truth_(inst_24397__$1)){
var statearr_24449_24475 = state_24444__$1;
(statearr_24449_24475[(1)] = (5));

} else {
var statearr_24450_24476 = state_24444__$1;
(statearr_24450_24476[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24445 === (15))){
var inst_24404 = (state_24444[(8)]);
var inst_24419 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_24404);
var inst_24420 = cljs.core.first.call(null,inst_24419);
var inst_24421 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_24420);
var inst_24422 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_24421)].join('');
var inst_24423 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_24422);
var state_24444__$1 = state_24444;
var statearr_24451_24477 = state_24444__$1;
(statearr_24451_24477[(2)] = inst_24423);

(statearr_24451_24477[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24445 === (13))){
var inst_24428 = (state_24444[(2)]);
var state_24444__$1 = state_24444;
var statearr_24452_24478 = state_24444__$1;
(statearr_24452_24478[(2)] = inst_24428);

(statearr_24452_24478[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24445 === (6))){
var state_24444__$1 = state_24444;
var statearr_24453_24479 = state_24444__$1;
(statearr_24453_24479[(2)] = null);

(statearr_24453_24479[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24445 === (17))){
var inst_24426 = (state_24444[(2)]);
var state_24444__$1 = state_24444;
var statearr_24454_24480 = state_24444__$1;
(statearr_24454_24480[(2)] = inst_24426);

(statearr_24454_24480[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24445 === (3))){
var inst_24442 = (state_24444[(2)]);
var state_24444__$1 = state_24444;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24444__$1,inst_24442);
} else {
if((state_val_24445 === (12))){
var inst_24403 = (state_24444[(9)]);
var inst_24417 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_24403,opts);
var state_24444__$1 = state_24444;
if(inst_24417){
var statearr_24455_24481 = state_24444__$1;
(statearr_24455_24481[(1)] = (15));

} else {
var statearr_24456_24482 = state_24444__$1;
(statearr_24456_24482[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24445 === (2))){
var state_24444__$1 = state_24444;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24444__$1,(4),ch);
} else {
if((state_val_24445 === (11))){
var inst_24404 = (state_24444[(8)]);
var inst_24409 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_24410 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_24404);
var inst_24411 = cljs.core.async.timeout.call(null,(1000));
var inst_24412 = [inst_24410,inst_24411];
var inst_24413 = (new cljs.core.PersistentVector(null,2,(5),inst_24409,inst_24412,null));
var state_24444__$1 = state_24444;
return cljs.core.async.ioc_alts_BANG_.call(null,state_24444__$1,(14),inst_24413);
} else {
if((state_val_24445 === (9))){
var inst_24404 = (state_24444[(8)]);
var inst_24430 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_24431 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_24404);
var inst_24432 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_24431);
var inst_24433 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_24432)].join('');
var inst_24434 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_24433);
var state_24444__$1 = (function (){var statearr_24457 = state_24444;
(statearr_24457[(10)] = inst_24430);

return statearr_24457;
})();
var statearr_24458_24483 = state_24444__$1;
(statearr_24458_24483[(2)] = inst_24434);

(statearr_24458_24483[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24445 === (5))){
var inst_24397 = (state_24444[(7)]);
var inst_24399 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_24400 = (new cljs.core.PersistentArrayMap(null,2,inst_24399,null));
var inst_24401 = (new cljs.core.PersistentHashSet(null,inst_24400,null));
var inst_24402 = figwheel.client.focus_msgs.call(null,inst_24401,inst_24397);
var inst_24403 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_24402);
var inst_24404 = cljs.core.first.call(null,inst_24402);
var inst_24405 = figwheel.client.autoload_QMARK_.call(null);
var state_24444__$1 = (function (){var statearr_24459 = state_24444;
(statearr_24459[(9)] = inst_24403);

(statearr_24459[(8)] = inst_24404);

return statearr_24459;
})();
if(cljs.core.truth_(inst_24405)){
var statearr_24460_24484 = state_24444__$1;
(statearr_24460_24484[(1)] = (8));

} else {
var statearr_24461_24485 = state_24444__$1;
(statearr_24461_24485[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24445 === (14))){
var inst_24415 = (state_24444[(2)]);
var state_24444__$1 = state_24444;
var statearr_24462_24486 = state_24444__$1;
(statearr_24462_24486[(2)] = inst_24415);

(statearr_24462_24486[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24445 === (16))){
var state_24444__$1 = state_24444;
var statearr_24463_24487 = state_24444__$1;
(statearr_24463_24487[(2)] = null);

(statearr_24463_24487[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24445 === (10))){
var inst_24436 = (state_24444[(2)]);
var state_24444__$1 = (function (){var statearr_24464 = state_24444;
(statearr_24464[(11)] = inst_24436);

return statearr_24464;
})();
var statearr_24465_24488 = state_24444__$1;
(statearr_24465_24488[(2)] = null);

(statearr_24465_24488[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24445 === (8))){
var inst_24403 = (state_24444[(9)]);
var inst_24407 = figwheel.client.reload_file_state_QMARK_.call(null,inst_24403,opts);
var state_24444__$1 = state_24444;
if(cljs.core.truth_(inst_24407)){
var statearr_24466_24489 = state_24444__$1;
(statearr_24466_24489[(1)] = (11));

} else {
var statearr_24467_24490 = state_24444__$1;
(statearr_24467_24490[(1)] = (12));

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
var figwheel$client$file_reloader_plugin_$_state_machine__23622__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__23622__auto____0 = (function (){
var statearr_24468 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24468[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__23622__auto__);

(statearr_24468[(1)] = (1));

return statearr_24468;
});
var figwheel$client$file_reloader_plugin_$_state_machine__23622__auto____1 = (function (state_24444){
while(true){
var ret_value__23623__auto__ = (function (){try{while(true){
var result__23624__auto__ = switch__23621__auto__.call(null,state_24444);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23624__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23624__auto__;
}
break;
}
}catch (e24469){if((e24469 instanceof Object)){
var ex__23625__auto__ = e24469;
var statearr_24470_24491 = state_24444;
(statearr_24470_24491[(5)] = ex__23625__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24444);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24469;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23623__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24492 = state_24444;
state_24444 = G__24492;
continue;
} else {
return ret_value__23623__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__23622__auto__ = function(state_24444){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__23622__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__23622__auto____1.call(this,state_24444);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__23622__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__23622__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__23622__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__23622__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__23622__auto__;
})()
})();
var state__23646__auto__ = (function (){var statearr_24471 = f__23645__auto__.call(null);
(statearr_24471[(6)] = c__23644__auto___24472);

return statearr_24471;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23646__auto__);
}));


return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__24493_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__24493_SHARP_));
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
var base_path_24499 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var sb = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__24495 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__24496 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__24497 = true;
var _STAR_print_fn_STAR__temp_val__24498 = (function (x){
return sb.append(x);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__24497);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__24498);

try{var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
var result_value__$1 = (((!(typeof result_value === 'string')))?cljs.core.pr_str.call(null,result_value):result_value);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"out","out",-910545517),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value__$1], null));
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__24496);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__24495);
}}catch (e24494){if((e24494 instanceof Error)){
var e = e24494;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_24499], null));
} else {
var e = e24494;
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__24500){
var map__24501 = p__24500;
var map__24501__$1 = (((((!((map__24501 == null))))?(((((map__24501.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24501.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24501):map__24501);
var opts = map__24501__$1;
var build_id = cljs.core.get.call(null,map__24501__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return (function (p__24503){
var vec__24504 = p__24503;
var seq__24505 = cljs.core.seq.call(null,vec__24504);
var first__24506 = cljs.core.first.call(null,seq__24505);
var seq__24505__$1 = cljs.core.next.call(null,seq__24505);
var map__24507 = first__24506;
var map__24507__$1 = (((((!((map__24507 == null))))?(((((map__24507.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24507.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24507):map__24507);
var msg = map__24507__$1;
var msg_name = cljs.core.get.call(null,map__24507__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__24505__$1;
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
return (function (p__24509){
var vec__24510 = p__24509;
var seq__24511 = cljs.core.seq.call(null,vec__24510);
var first__24512 = cljs.core.first.call(null,seq__24511);
var seq__24511__$1 = cljs.core.next.call(null,seq__24511);
var map__24513 = first__24512;
var map__24513__$1 = (((((!((map__24513 == null))))?(((((map__24513.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24513.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24513):map__24513);
var msg = map__24513__$1;
var msg_name = cljs.core.get.call(null,map__24513__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__24511__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__24515){
var map__24516 = p__24515;
var map__24516__$1 = (((((!((map__24516 == null))))?(((((map__24516.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24516.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24516):map__24516);
var on_compile_warning = cljs.core.get.call(null,map__24516__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__24516__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return (function (p__24518){
var vec__24519 = p__24518;
var seq__24520 = cljs.core.seq.call(null,vec__24519);
var first__24521 = cljs.core.first.call(null,seq__24520);
var seq__24520__$1 = cljs.core.next.call(null,seq__24520);
var map__24522 = first__24521;
var map__24522__$1 = (((((!((map__24522 == null))))?(((((map__24522.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24522.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24522):map__24522);
var msg = map__24522__$1;
var msg_name = cljs.core.get.call(null,map__24522__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__24520__$1;
var pred__24524 = cljs.core._EQ_;
var expr__24525 = msg_name;
if(cljs.core.truth_(pred__24524.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__24525))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__24524.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__24525))){
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
var c__23644__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__23645__auto__ = (function (){var switch__23621__auto__ = (function (state_24614){
var state_val_24615 = (state_24614[(1)]);
if((state_val_24615 === (7))){
var inst_24534 = (state_24614[(2)]);
var state_24614__$1 = state_24614;
if(cljs.core.truth_(inst_24534)){
var statearr_24616_24663 = state_24614__$1;
(statearr_24616_24663[(1)] = (8));

} else {
var statearr_24617_24664 = state_24614__$1;
(statearr_24617_24664[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24615 === (20))){
var inst_24608 = (state_24614[(2)]);
var state_24614__$1 = state_24614;
var statearr_24618_24665 = state_24614__$1;
(statearr_24618_24665[(2)] = inst_24608);

(statearr_24618_24665[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24615 === (27))){
var inst_24604 = (state_24614[(2)]);
var state_24614__$1 = state_24614;
var statearr_24619_24666 = state_24614__$1;
(statearr_24619_24666[(2)] = inst_24604);

(statearr_24619_24666[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24615 === (1))){
var inst_24527 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_24614__$1 = state_24614;
if(cljs.core.truth_(inst_24527)){
var statearr_24620_24667 = state_24614__$1;
(statearr_24620_24667[(1)] = (2));

} else {
var statearr_24621_24668 = state_24614__$1;
(statearr_24621_24668[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24615 === (24))){
var inst_24606 = (state_24614[(2)]);
var state_24614__$1 = state_24614;
var statearr_24622_24669 = state_24614__$1;
(statearr_24622_24669[(2)] = inst_24606);

(statearr_24622_24669[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24615 === (4))){
var inst_24612 = (state_24614[(2)]);
var state_24614__$1 = state_24614;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24614__$1,inst_24612);
} else {
if((state_val_24615 === (15))){
var inst_24610 = (state_24614[(2)]);
var state_24614__$1 = state_24614;
var statearr_24623_24670 = state_24614__$1;
(statearr_24623_24670[(2)] = inst_24610);

(statearr_24623_24670[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24615 === (21))){
var inst_24563 = (state_24614[(2)]);
var inst_24564 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_24565 = figwheel.client.auto_jump_to_error.call(null,opts,inst_24564);
var state_24614__$1 = (function (){var statearr_24624 = state_24614;
(statearr_24624[(7)] = inst_24563);

return statearr_24624;
})();
var statearr_24625_24671 = state_24614__$1;
(statearr_24625_24671[(2)] = inst_24565);

(statearr_24625_24671[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24615 === (31))){
var inst_24593 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_24614__$1 = state_24614;
if(inst_24593){
var statearr_24626_24672 = state_24614__$1;
(statearr_24626_24672[(1)] = (34));

} else {
var statearr_24627_24673 = state_24614__$1;
(statearr_24627_24673[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24615 === (32))){
var inst_24602 = (state_24614[(2)]);
var state_24614__$1 = state_24614;
var statearr_24628_24674 = state_24614__$1;
(statearr_24628_24674[(2)] = inst_24602);

(statearr_24628_24674[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24615 === (33))){
var inst_24589 = (state_24614[(2)]);
var inst_24590 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_24591 = figwheel.client.auto_jump_to_error.call(null,opts,inst_24590);
var state_24614__$1 = (function (){var statearr_24629 = state_24614;
(statearr_24629[(8)] = inst_24589);

return statearr_24629;
})();
var statearr_24630_24675 = state_24614__$1;
(statearr_24630_24675[(2)] = inst_24591);

(statearr_24630_24675[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24615 === (13))){
var inst_24548 = figwheel.client.heads_up.clear.call(null);
var state_24614__$1 = state_24614;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24614__$1,(16),inst_24548);
} else {
if((state_val_24615 === (22))){
var inst_24569 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_24570 = figwheel.client.heads_up.append_warning_message.call(null,inst_24569);
var state_24614__$1 = state_24614;
var statearr_24631_24676 = state_24614__$1;
(statearr_24631_24676[(2)] = inst_24570);

(statearr_24631_24676[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24615 === (36))){
var inst_24600 = (state_24614[(2)]);
var state_24614__$1 = state_24614;
var statearr_24632_24677 = state_24614__$1;
(statearr_24632_24677[(2)] = inst_24600);

(statearr_24632_24677[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24615 === (29))){
var inst_24580 = (state_24614[(2)]);
var inst_24581 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_24582 = figwheel.client.auto_jump_to_error.call(null,opts,inst_24581);
var state_24614__$1 = (function (){var statearr_24633 = state_24614;
(statearr_24633[(9)] = inst_24580);

return statearr_24633;
})();
var statearr_24634_24678 = state_24614__$1;
(statearr_24634_24678[(2)] = inst_24582);

(statearr_24634_24678[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24615 === (6))){
var inst_24529 = (state_24614[(10)]);
var state_24614__$1 = state_24614;
var statearr_24635_24679 = state_24614__$1;
(statearr_24635_24679[(2)] = inst_24529);

(statearr_24635_24679[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24615 === (28))){
var inst_24576 = (state_24614[(2)]);
var inst_24577 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_24578 = figwheel.client.heads_up.display_warning.call(null,inst_24577);
var state_24614__$1 = (function (){var statearr_24636 = state_24614;
(statearr_24636[(11)] = inst_24576);

return statearr_24636;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24614__$1,(29),inst_24578);
} else {
if((state_val_24615 === (25))){
var inst_24574 = figwheel.client.heads_up.clear.call(null);
var state_24614__$1 = state_24614;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24614__$1,(28),inst_24574);
} else {
if((state_val_24615 === (34))){
var inst_24595 = figwheel.client.heads_up.flash_loaded.call(null);
var state_24614__$1 = state_24614;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24614__$1,(37),inst_24595);
} else {
if((state_val_24615 === (17))){
var inst_24554 = (state_24614[(2)]);
var inst_24555 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_24556 = figwheel.client.auto_jump_to_error.call(null,opts,inst_24555);
var state_24614__$1 = (function (){var statearr_24637 = state_24614;
(statearr_24637[(12)] = inst_24554);

return statearr_24637;
})();
var statearr_24638_24680 = state_24614__$1;
(statearr_24638_24680[(2)] = inst_24556);

(statearr_24638_24680[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24615 === (3))){
var inst_24546 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_24614__$1 = state_24614;
if(inst_24546){
var statearr_24639_24681 = state_24614__$1;
(statearr_24639_24681[(1)] = (13));

} else {
var statearr_24640_24682 = state_24614__$1;
(statearr_24640_24682[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24615 === (12))){
var inst_24542 = (state_24614[(2)]);
var state_24614__$1 = state_24614;
var statearr_24641_24683 = state_24614__$1;
(statearr_24641_24683[(2)] = inst_24542);

(statearr_24641_24683[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24615 === (2))){
var inst_24529 = (state_24614[(10)]);
var inst_24529__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_24614__$1 = (function (){var statearr_24642 = state_24614;
(statearr_24642[(10)] = inst_24529__$1);

return statearr_24642;
})();
if(cljs.core.truth_(inst_24529__$1)){
var statearr_24643_24684 = state_24614__$1;
(statearr_24643_24684[(1)] = (5));

} else {
var statearr_24644_24685 = state_24614__$1;
(statearr_24644_24685[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24615 === (23))){
var inst_24572 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_24614__$1 = state_24614;
if(inst_24572){
var statearr_24645_24686 = state_24614__$1;
(statearr_24645_24686[(1)] = (25));

} else {
var statearr_24646_24687 = state_24614__$1;
(statearr_24646_24687[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24615 === (35))){
var state_24614__$1 = state_24614;
var statearr_24647_24688 = state_24614__$1;
(statearr_24647_24688[(2)] = null);

(statearr_24647_24688[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24615 === (19))){
var inst_24567 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_24614__$1 = state_24614;
if(inst_24567){
var statearr_24648_24689 = state_24614__$1;
(statearr_24648_24689[(1)] = (22));

} else {
var statearr_24649_24690 = state_24614__$1;
(statearr_24649_24690[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24615 === (11))){
var inst_24538 = (state_24614[(2)]);
var state_24614__$1 = state_24614;
var statearr_24650_24691 = state_24614__$1;
(statearr_24650_24691[(2)] = inst_24538);

(statearr_24650_24691[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24615 === (9))){
var inst_24540 = figwheel.client.heads_up.clear.call(null);
var state_24614__$1 = state_24614;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24614__$1,(12),inst_24540);
} else {
if((state_val_24615 === (5))){
var inst_24531 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_24614__$1 = state_24614;
var statearr_24651_24692 = state_24614__$1;
(statearr_24651_24692[(2)] = inst_24531);

(statearr_24651_24692[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24615 === (14))){
var inst_24558 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_24614__$1 = state_24614;
if(inst_24558){
var statearr_24652_24693 = state_24614__$1;
(statearr_24652_24693[(1)] = (18));

} else {
var statearr_24653_24694 = state_24614__$1;
(statearr_24653_24694[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24615 === (26))){
var inst_24584 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_24614__$1 = state_24614;
if(inst_24584){
var statearr_24654_24695 = state_24614__$1;
(statearr_24654_24695[(1)] = (30));

} else {
var statearr_24655_24696 = state_24614__$1;
(statearr_24655_24696[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24615 === (16))){
var inst_24550 = (state_24614[(2)]);
var inst_24551 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_24552 = figwheel.client.heads_up.display_exception.call(null,inst_24551);
var state_24614__$1 = (function (){var statearr_24656 = state_24614;
(statearr_24656[(13)] = inst_24550);

return statearr_24656;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24614__$1,(17),inst_24552);
} else {
if((state_val_24615 === (30))){
var inst_24586 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_24587 = figwheel.client.heads_up.display_warning.call(null,inst_24586);
var state_24614__$1 = state_24614;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24614__$1,(33),inst_24587);
} else {
if((state_val_24615 === (10))){
var inst_24544 = (state_24614[(2)]);
var state_24614__$1 = state_24614;
var statearr_24657_24697 = state_24614__$1;
(statearr_24657_24697[(2)] = inst_24544);

(statearr_24657_24697[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24615 === (18))){
var inst_24560 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_24561 = figwheel.client.heads_up.display_exception.call(null,inst_24560);
var state_24614__$1 = state_24614;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24614__$1,(21),inst_24561);
} else {
if((state_val_24615 === (37))){
var inst_24597 = (state_24614[(2)]);
var state_24614__$1 = state_24614;
var statearr_24658_24698 = state_24614__$1;
(statearr_24658_24698[(2)] = inst_24597);

(statearr_24658_24698[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24615 === (8))){
var inst_24536 = figwheel.client.heads_up.flash_loaded.call(null);
var state_24614__$1 = state_24614;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24614__$1,(11),inst_24536);
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
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23622__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23622__auto____0 = (function (){
var statearr_24659 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24659[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23622__auto__);

(statearr_24659[(1)] = (1));

return statearr_24659;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23622__auto____1 = (function (state_24614){
while(true){
var ret_value__23623__auto__ = (function (){try{while(true){
var result__23624__auto__ = switch__23621__auto__.call(null,state_24614);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23624__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23624__auto__;
}
break;
}
}catch (e24660){if((e24660 instanceof Object)){
var ex__23625__auto__ = e24660;
var statearr_24661_24699 = state_24614;
(statearr_24661_24699[(5)] = ex__23625__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24614);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24660;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23623__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24700 = state_24614;
state_24614 = G__24700;
continue;
} else {
return ret_value__23623__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23622__auto__ = function(state_24614){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23622__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23622__auto____1.call(this,state_24614);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23622__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23622__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23622__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23622__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23622__auto__;
})()
})();
var state__23646__auto__ = (function (){var statearr_24662 = f__23645__auto__.call(null);
(statearr_24662[(6)] = c__23644__auto__);

return statearr_24662;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23646__auto__);
}));

return c__23644__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__23644__auto___24729 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__23645__auto__ = (function (){var switch__23621__auto__ = (function (state_24715){
var state_val_24716 = (state_24715[(1)]);
if((state_val_24716 === (1))){
var state_24715__$1 = state_24715;
var statearr_24717_24730 = state_24715__$1;
(statearr_24717_24730[(2)] = null);

(statearr_24717_24730[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24716 === (2))){
var state_24715__$1 = state_24715;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24715__$1,(4),ch);
} else {
if((state_val_24716 === (3))){
var inst_24713 = (state_24715[(2)]);
var state_24715__$1 = state_24715;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24715__$1,inst_24713);
} else {
if((state_val_24716 === (4))){
var inst_24703 = (state_24715[(7)]);
var inst_24703__$1 = (state_24715[(2)]);
var state_24715__$1 = (function (){var statearr_24718 = state_24715;
(statearr_24718[(7)] = inst_24703__$1);

return statearr_24718;
})();
if(cljs.core.truth_(inst_24703__$1)){
var statearr_24719_24731 = state_24715__$1;
(statearr_24719_24731[(1)] = (5));

} else {
var statearr_24720_24732 = state_24715__$1;
(statearr_24720_24732[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24716 === (5))){
var inst_24703 = (state_24715[(7)]);
var inst_24705 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_24703);
var state_24715__$1 = state_24715;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24715__$1,(8),inst_24705);
} else {
if((state_val_24716 === (6))){
var state_24715__$1 = state_24715;
var statearr_24721_24733 = state_24715__$1;
(statearr_24721_24733[(2)] = null);

(statearr_24721_24733[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24716 === (7))){
var inst_24711 = (state_24715[(2)]);
var state_24715__$1 = state_24715;
var statearr_24722_24734 = state_24715__$1;
(statearr_24722_24734[(2)] = inst_24711);

(statearr_24722_24734[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24716 === (8))){
var inst_24707 = (state_24715[(2)]);
var state_24715__$1 = (function (){var statearr_24723 = state_24715;
(statearr_24723[(8)] = inst_24707);

return statearr_24723;
})();
var statearr_24724_24735 = state_24715__$1;
(statearr_24724_24735[(2)] = null);

(statearr_24724_24735[(1)] = (2));


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
var figwheel$client$heads_up_plugin_$_state_machine__23622__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__23622__auto____0 = (function (){
var statearr_24725 = [null,null,null,null,null,null,null,null,null];
(statearr_24725[(0)] = figwheel$client$heads_up_plugin_$_state_machine__23622__auto__);

(statearr_24725[(1)] = (1));

return statearr_24725;
});
var figwheel$client$heads_up_plugin_$_state_machine__23622__auto____1 = (function (state_24715){
while(true){
var ret_value__23623__auto__ = (function (){try{while(true){
var result__23624__auto__ = switch__23621__auto__.call(null,state_24715);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23624__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23624__auto__;
}
break;
}
}catch (e24726){if((e24726 instanceof Object)){
var ex__23625__auto__ = e24726;
var statearr_24727_24736 = state_24715;
(statearr_24727_24736[(5)] = ex__23625__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24715);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24726;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23623__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24737 = state_24715;
state_24715 = G__24737;
continue;
} else {
return ret_value__23623__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__23622__auto__ = function(state_24715){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__23622__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__23622__auto____1.call(this,state_24715);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__23622__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__23622__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__23622__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__23622__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__23622__auto__;
})()
})();
var state__23646__auto__ = (function (){var statearr_24728 = f__23645__auto__.call(null);
(statearr_24728[(6)] = c__23644__auto___24729);

return statearr_24728;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23646__auto__);
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
var c__23644__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__23645__auto__ = (function (){var switch__23621__auto__ = (function (state_24743){
var state_val_24744 = (state_24743[(1)]);
if((state_val_24744 === (1))){
var inst_24738 = cljs.core.async.timeout.call(null,(3000));
var state_24743__$1 = state_24743;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24743__$1,(2),inst_24738);
} else {
if((state_val_24744 === (2))){
var inst_24740 = (state_24743[(2)]);
var inst_24741 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_24743__$1 = (function (){var statearr_24745 = state_24743;
(statearr_24745[(7)] = inst_24740);

return statearr_24745;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24743__$1,inst_24741);
} else {
return null;
}
}
});
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__23622__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__23622__auto____0 = (function (){
var statearr_24746 = [null,null,null,null,null,null,null,null];
(statearr_24746[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__23622__auto__);

(statearr_24746[(1)] = (1));

return statearr_24746;
});
var figwheel$client$enforce_project_plugin_$_state_machine__23622__auto____1 = (function (state_24743){
while(true){
var ret_value__23623__auto__ = (function (){try{while(true){
var result__23624__auto__ = switch__23621__auto__.call(null,state_24743);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23624__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23624__auto__;
}
break;
}
}catch (e24747){if((e24747 instanceof Object)){
var ex__23625__auto__ = e24747;
var statearr_24748_24750 = state_24743;
(statearr_24748_24750[(5)] = ex__23625__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24743);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24747;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23623__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24751 = state_24743;
state_24743 = G__24751;
continue;
} else {
return ret_value__23623__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__23622__auto__ = function(state_24743){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__23622__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__23622__auto____1.call(this,state_24743);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__23622__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__23622__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__23622__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__23622__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__23622__auto__;
})()
})();
var state__23646__auto__ = (function (){var statearr_24749 = f__23645__auto__.call(null);
(statearr_24749[(6)] = c__23644__auto__);

return statearr_24749;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23646__auto__);
}));

return c__23644__auto__;
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
var c__23644__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__23645__auto__ = (function (){var switch__23621__auto__ = (function (state_24758){
var state_val_24759 = (state_24758[(1)]);
if((state_val_24759 === (1))){
var inst_24752 = cljs.core.async.timeout.call(null,(2000));
var state_24758__$1 = state_24758;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24758__$1,(2),inst_24752);
} else {
if((state_val_24759 === (2))){
var inst_24754 = (state_24758[(2)]);
var inst_24755 = ["Figwheel Client Version <strong>",figwheel.client._figwheel_version_,"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_24756 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_24755);
var state_24758__$1 = (function (){var statearr_24760 = state_24758;
(statearr_24760[(7)] = inst_24754);

return statearr_24760;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24758__$1,inst_24756);
} else {
return null;
}
}
});
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23622__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23622__auto____0 = (function (){
var statearr_24761 = [null,null,null,null,null,null,null,null];
(statearr_24761[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23622__auto__);

(statearr_24761[(1)] = (1));

return statearr_24761;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23622__auto____1 = (function (state_24758){
while(true){
var ret_value__23623__auto__ = (function (){try{while(true){
var result__23624__auto__ = switch__23621__auto__.call(null,state_24758);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23624__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23624__auto__;
}
break;
}
}catch (e24762){if((e24762 instanceof Object)){
var ex__23625__auto__ = e24762;
var statearr_24763_24765 = state_24758;
(statearr_24763_24765[(5)] = ex__23625__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24758);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24762;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23623__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24766 = state_24758;
state_24758 = G__24766;
continue;
} else {
return ret_value__23623__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23622__auto__ = function(state_24758){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23622__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23622__auto____1.call(this,state_24758);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23622__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23622__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23622__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23622__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23622__auto__;
})()
})();
var state__23646__auto__ = (function (){var statearr_24764 = f__23645__auto__.call(null);
(statearr_24764[(6)] = c__23644__auto__);

return statearr_24764;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23646__auto__);
}));

return c__23644__auto__;
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
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__24767){
var map__24768 = p__24767;
var map__24768__$1 = (((((!((map__24768 == null))))?(((((map__24768.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24768.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24768):map__24768);
var file = cljs.core.get.call(null,map__24768__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__24768__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__24768__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__24770 = "";
var G__24770__$1 = (cljs.core.truth_(file)?[G__24770,"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__24770);
var G__24770__$2 = (cljs.core.truth_(line)?[G__24770__$1," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__24770__$1);
if(cljs.core.truth_((function (){var and__4115__auto__ = line;
if(cljs.core.truth_(and__4115__auto__)){
return column;
} else {
return and__4115__auto__;
}
})())){
return [G__24770__$2,", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__24770__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__24771){
var map__24772 = p__24771;
var map__24772__$1 = (((((!((map__24772 == null))))?(((((map__24772.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24772.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24772):map__24772);
var ed = map__24772__$1;
var exception_data = cljs.core.get.call(null,map__24772__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__24772__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
var message_24775 = (function (){var G__24774 = cljs.core.apply.call(null,cljs.core.str,"Figwheel: Compile Exception ",figwheel.client.format_messages.call(null,exception_data));
if(cljs.core.truth_(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(exception_data))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24774)," Error on ",figwheel.client.file_line_column.call(null,exception_data)].join('');
} else {
return G__24774;
}
})();
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),message_24775);

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__24776){
var map__24777 = p__24776;
var map__24777__$1 = (((((!((map__24777 == null))))?(((((map__24777.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24777.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24777):map__24777);
var w = map__24777__$1;
var message = cljs.core.get.call(null,map__24777__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
var seq__24779 = cljs.core.seq.call(null,plugins);
var chunk__24780 = null;
var count__24781 = (0);
var i__24782 = (0);
while(true){
if((i__24782 < count__24781)){
var vec__24789 = cljs.core._nth.call(null,chunk__24780,i__24782);
var k = cljs.core.nth.call(null,vec__24789,(0),null);
var plugin = cljs.core.nth.call(null,vec__24789,(1),null);
if(cljs.core.truth_(plugin)){
var pl_24795 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__24779,chunk__24780,count__24781,i__24782,pl_24795,vec__24789,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_24795.call(null,msg_hist);
});})(seq__24779,chunk__24780,count__24781,i__24782,pl_24795,vec__24789,k,plugin))
);
} else {
}


var G__24796 = seq__24779;
var G__24797 = chunk__24780;
var G__24798 = count__24781;
var G__24799 = (i__24782 + (1));
seq__24779 = G__24796;
chunk__24780 = G__24797;
count__24781 = G__24798;
i__24782 = G__24799;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__24779);
if(temp__5720__auto__){
var seq__24779__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24779__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__24779__$1);
var G__24800 = cljs.core.chunk_rest.call(null,seq__24779__$1);
var G__24801 = c__4556__auto__;
var G__24802 = cljs.core.count.call(null,c__4556__auto__);
var G__24803 = (0);
seq__24779 = G__24800;
chunk__24780 = G__24801;
count__24781 = G__24802;
i__24782 = G__24803;
continue;
} else {
var vec__24792 = cljs.core.first.call(null,seq__24779__$1);
var k = cljs.core.nth.call(null,vec__24792,(0),null);
var plugin = cljs.core.nth.call(null,vec__24792,(1),null);
if(cljs.core.truth_(plugin)){
var pl_24804 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__24779,chunk__24780,count__24781,i__24782,pl_24804,vec__24792,k,plugin,seq__24779__$1,temp__5720__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_24804.call(null,msg_hist);
});})(seq__24779,chunk__24780,count__24781,i__24782,pl_24804,vec__24792,k,plugin,seq__24779__$1,temp__5720__auto__))
);
} else {
}


var G__24805 = cljs.core.next.call(null,seq__24779__$1);
var G__24806 = null;
var G__24807 = (0);
var G__24808 = (0);
seq__24779 = G__24805;
chunk__24780 = G__24806;
count__24781 = G__24807;
i__24782 = G__24808;
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
var G__24810 = arguments.length;
switch (G__24810) {
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

var seq__24811_24816 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__24812_24817 = null;
var count__24813_24818 = (0);
var i__24814_24819 = (0);
while(true){
if((i__24814_24819 < count__24813_24818)){
var msg_24820 = cljs.core._nth.call(null,chunk__24812_24817,i__24814_24819);
figwheel.client.socket.handle_incoming_message.call(null,msg_24820);


var G__24821 = seq__24811_24816;
var G__24822 = chunk__24812_24817;
var G__24823 = count__24813_24818;
var G__24824 = (i__24814_24819 + (1));
seq__24811_24816 = G__24821;
chunk__24812_24817 = G__24822;
count__24813_24818 = G__24823;
i__24814_24819 = G__24824;
continue;
} else {
var temp__5720__auto___24825 = cljs.core.seq.call(null,seq__24811_24816);
if(temp__5720__auto___24825){
var seq__24811_24826__$1 = temp__5720__auto___24825;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24811_24826__$1)){
var c__4556__auto___24827 = cljs.core.chunk_first.call(null,seq__24811_24826__$1);
var G__24828 = cljs.core.chunk_rest.call(null,seq__24811_24826__$1);
var G__24829 = c__4556__auto___24827;
var G__24830 = cljs.core.count.call(null,c__4556__auto___24827);
var G__24831 = (0);
seq__24811_24816 = G__24828;
chunk__24812_24817 = G__24829;
count__24813_24818 = G__24830;
i__24814_24819 = G__24831;
continue;
} else {
var msg_24832 = cljs.core.first.call(null,seq__24811_24826__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_24832);


var G__24833 = cljs.core.next.call(null,seq__24811_24826__$1);
var G__24834 = null;
var G__24835 = (0);
var G__24836 = (0);
seq__24811_24816 = G__24833;
chunk__24812_24817 = G__24834;
count__24813_24818 = G__24835;
i__24814_24819 = G__24836;
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
var len__4736__auto___24841 = arguments.length;
var i__4737__auto___24842 = (0);
while(true){
if((i__4737__auto___24842 < len__4736__auto___24841)){
args__4742__auto__.push((arguments[i__4737__auto___24842]));

var G__24843 = (i__4737__auto___24842 + (1));
i__4737__auto___24842 = G__24843;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__24838){
var map__24839 = p__24838;
var map__24839__$1 = (((((!((map__24839 == null))))?(((((map__24839.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24839.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24839):map__24839);
var opts = map__24839__$1;
return figwheel.client.start.call(null,opts);
}));

(figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq24837){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24837));
}));

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e24844){if((e24844 instanceof Error)){
var e = e24844;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e24844;

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

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),(function (p__24845){
var map__24846 = p__24845;
var map__24846__$1 = (((((!((map__24846 == null))))?(((((map__24846.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24846.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24846):map__24846);
var msg_name = cljs.core.get.call(null,map__24846__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return (location.href = location.href);
} else {
return null;
}
}));
});

//# sourceMappingURL=client.js.map?rel=1683240968927
