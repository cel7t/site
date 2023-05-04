// Compiled by ClojureScript 1.10.773 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('goog.array');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__32042 = arguments.length;
switch (G__32042) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32043 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32043 = (function (f,blockable,meta32044){
this.f = f;
this.blockable = blockable;
this.meta32044 = meta32044;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32043.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32045,meta32044__$1){
var self__ = this;
var _32045__$1 = this;
return (new cljs.core.async.t_cljs$core$async32043(self__.f,self__.blockable,meta32044__$1));
}));

(cljs.core.async.t_cljs$core$async32043.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32045){
var self__ = this;
var _32045__$1 = this;
return self__.meta32044;
}));

(cljs.core.async.t_cljs$core$async32043.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32043.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async32043.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async32043.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async32043.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta32044","meta32044",-1275753437,null)], null);
}));

(cljs.core.async.t_cljs$core$async32043.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32043.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32043");

(cljs.core.async.t_cljs$core$async32043.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async32043");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32043.
 */
cljs.core.async.__GT_t_cljs$core$async32043 = (function cljs$core$async$__GT_t_cljs$core$async32043(f__$1,blockable__$1,meta32044){
return (new cljs.core.async.t_cljs$core$async32043(f__$1,blockable__$1,meta32044));
});

}

return (new cljs.core.async.t_cljs$core$async32043(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__32049 = arguments.length;
switch (G__32049) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__32052 = arguments.length;
switch (G__32052) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__32055 = arguments.length;
switch (G__32055) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_32057 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_32057);
} else {
cljs.core.async.impl.dispatch.run.call(null,(function (){
return fn1.call(null,val_32057);
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__32059 = arguments.length;
switch (G__32059) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5718__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5718__auto__)){
var ret = temp__5718__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5718__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__5718__auto__)){
var retb = temp__5718__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,(function (){
return fn1.call(null,ret);
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4613__auto___32061 = n;
var x_32062 = (0);
while(true){
if((x_32062 < n__4613__auto___32061)){
(a[x_32062] = x_32062);

var G__32063 = (x_32062 + (1));
x_32062 = G__32063;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32064 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32064 = (function (flag,meta32065){
this.flag = flag;
this.meta32065 = meta32065;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32064.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32066,meta32065__$1){
var self__ = this;
var _32066__$1 = this;
return (new cljs.core.async.t_cljs$core$async32064(self__.flag,meta32065__$1));
}));

(cljs.core.async.t_cljs$core$async32064.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32066){
var self__ = this;
var _32066__$1 = this;
return self__.meta32065;
}));

(cljs.core.async.t_cljs$core$async32064.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32064.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
}));

(cljs.core.async.t_cljs$core$async32064.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async32064.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async32064.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta32065","meta32065",-21910967,null)], null);
}));

(cljs.core.async.t_cljs$core$async32064.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32064.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32064");

(cljs.core.async.t_cljs$core$async32064.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async32064");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32064.
 */
cljs.core.async.__GT_t_cljs$core$async32064 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async32064(flag__$1,meta32065){
return (new cljs.core.async.t_cljs$core$async32064(flag__$1,meta32065));
});

}

return (new cljs.core.async.t_cljs$core$async32064(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32067 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32067 = (function (flag,cb,meta32068){
this.flag = flag;
this.cb = cb;
this.meta32068 = meta32068;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32067.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32069,meta32068__$1){
var self__ = this;
var _32069__$1 = this;
return (new cljs.core.async.t_cljs$core$async32067(self__.flag,self__.cb,meta32068__$1));
}));

(cljs.core.async.t_cljs$core$async32067.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32069){
var self__ = this;
var _32069__$1 = this;
return self__.meta32068;
}));

(cljs.core.async.t_cljs$core$async32067.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32067.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
}));

(cljs.core.async.t_cljs$core$async32067.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async32067.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async32067.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta32068","meta32068",623551609,null)], null);
}));

(cljs.core.async.t_cljs$core$async32067.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32067.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32067");

(cljs.core.async.t_cljs$core$async32067.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async32067");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32067.
 */
cljs.core.async.__GT_t_cljs$core$async32067 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async32067(flag__$1,cb__$1,meta32068){
return (new cljs.core.async.t_cljs$core$async32067(flag__$1,cb__$1,meta32068));
});

}

return (new cljs.core.async.t_cljs$core$async32067(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count.call(null,ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__32070_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__32070_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__32071_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__32071_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__4126__auto__ = wport;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return port;
}
})()], null));
} else {
var G__32072 = (i + (1));
i = G__32072;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4126__auto__ = ret;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5720__auto__ = (function (){var and__4115__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__4115__auto__;
}
})();
if(cljs.core.truth_(temp__5720__auto__)){
var got = temp__5720__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___32078 = arguments.length;
var i__4737__auto___32079 = (0);
while(true){
if((i__4737__auto___32079 < len__4736__auto___32078)){
args__4742__auto__.push((arguments[i__4737__auto___32079]));

var G__32080 = (i__4737__auto___32079 + (1));
i__4737__auto___32079 = G__32080;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__32075){
var map__32076 = p__32075;
var map__32076__$1 = (((((!((map__32076 == null))))?(((((map__32076.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32076.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32076):map__32076);
var opts = map__32076__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq32073){
var G__32074 = cljs.core.first.call(null,seq32073);
var seq32073__$1 = cljs.core.next.call(null,seq32073);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32074,seq32073__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__32082 = arguments.length;
switch (G__32082) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__31982__auto___32128 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__31983__auto__ = (function (){var switch__31887__auto__ = (function (state_32106){
var state_val_32107 = (state_32106[(1)]);
if((state_val_32107 === (7))){
var inst_32102 = (state_32106[(2)]);
var state_32106__$1 = state_32106;
var statearr_32108_32129 = state_32106__$1;
(statearr_32108_32129[(2)] = inst_32102);

(statearr_32108_32129[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32107 === (1))){
var state_32106__$1 = state_32106;
var statearr_32109_32130 = state_32106__$1;
(statearr_32109_32130[(2)] = null);

(statearr_32109_32130[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32107 === (4))){
var inst_32085 = (state_32106[(7)]);
var inst_32085__$1 = (state_32106[(2)]);
var inst_32086 = (inst_32085__$1 == null);
var state_32106__$1 = (function (){var statearr_32110 = state_32106;
(statearr_32110[(7)] = inst_32085__$1);

return statearr_32110;
})();
if(cljs.core.truth_(inst_32086)){
var statearr_32111_32131 = state_32106__$1;
(statearr_32111_32131[(1)] = (5));

} else {
var statearr_32112_32132 = state_32106__$1;
(statearr_32112_32132[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32107 === (13))){
var state_32106__$1 = state_32106;
var statearr_32113_32133 = state_32106__$1;
(statearr_32113_32133[(2)] = null);

(statearr_32113_32133[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32107 === (6))){
var inst_32085 = (state_32106[(7)]);
var state_32106__$1 = state_32106;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32106__$1,(11),to,inst_32085);
} else {
if((state_val_32107 === (3))){
var inst_32104 = (state_32106[(2)]);
var state_32106__$1 = state_32106;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32106__$1,inst_32104);
} else {
if((state_val_32107 === (12))){
var state_32106__$1 = state_32106;
var statearr_32114_32134 = state_32106__$1;
(statearr_32114_32134[(2)] = null);

(statearr_32114_32134[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32107 === (2))){
var state_32106__$1 = state_32106;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32106__$1,(4),from);
} else {
if((state_val_32107 === (11))){
var inst_32095 = (state_32106[(2)]);
var state_32106__$1 = state_32106;
if(cljs.core.truth_(inst_32095)){
var statearr_32115_32135 = state_32106__$1;
(statearr_32115_32135[(1)] = (12));

} else {
var statearr_32116_32136 = state_32106__$1;
(statearr_32116_32136[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32107 === (9))){
var state_32106__$1 = state_32106;
var statearr_32117_32137 = state_32106__$1;
(statearr_32117_32137[(2)] = null);

(statearr_32117_32137[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32107 === (5))){
var state_32106__$1 = state_32106;
if(cljs.core.truth_(close_QMARK_)){
var statearr_32118_32138 = state_32106__$1;
(statearr_32118_32138[(1)] = (8));

} else {
var statearr_32119_32139 = state_32106__$1;
(statearr_32119_32139[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32107 === (14))){
var inst_32100 = (state_32106[(2)]);
var state_32106__$1 = state_32106;
var statearr_32120_32140 = state_32106__$1;
(statearr_32120_32140[(2)] = inst_32100);

(statearr_32120_32140[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32107 === (10))){
var inst_32092 = (state_32106[(2)]);
var state_32106__$1 = state_32106;
var statearr_32121_32141 = state_32106__$1;
(statearr_32121_32141[(2)] = inst_32092);

(statearr_32121_32141[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32107 === (8))){
var inst_32089 = cljs.core.async.close_BANG_.call(null,to);
var state_32106__$1 = state_32106;
var statearr_32122_32142 = state_32106__$1;
(statearr_32122_32142[(2)] = inst_32089);

(statearr_32122_32142[(1)] = (10));


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
});
return (function() {
var cljs$core$async$state_machine__31888__auto__ = null;
var cljs$core$async$state_machine__31888__auto____0 = (function (){
var statearr_32123 = [null,null,null,null,null,null,null,null];
(statearr_32123[(0)] = cljs$core$async$state_machine__31888__auto__);

(statearr_32123[(1)] = (1));

return statearr_32123;
});
var cljs$core$async$state_machine__31888__auto____1 = (function (state_32106){
while(true){
var ret_value__31889__auto__ = (function (){try{while(true){
var result__31890__auto__ = switch__31887__auto__.call(null,state_32106);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31890__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31890__auto__;
}
break;
}
}catch (e32124){if((e32124 instanceof Object)){
var ex__31891__auto__ = e32124;
var statearr_32125_32143 = state_32106;
(statearr_32125_32143[(5)] = ex__31891__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32106);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32124;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31889__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32144 = state_32106;
state_32106 = G__32144;
continue;
} else {
return ret_value__31889__auto__;
}
break;
}
});
cljs$core$async$state_machine__31888__auto__ = function(state_32106){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31888__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31888__auto____1.call(this,state_32106);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31888__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31888__auto____0;
cljs$core$async$state_machine__31888__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31888__auto____1;
return cljs$core$async$state_machine__31888__auto__;
})()
})();
var state__31984__auto__ = (function (){var statearr_32126 = f__31983__auto__.call(null);
(statearr_32126[(6)] = c__31982__auto___32128);

return statearr_32126;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31984__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = (function (p__32145){
var vec__32146 = p__32145;
var v = cljs.core.nth.call(null,vec__32146,(0),null);
var p = cljs.core.nth.call(null,vec__32146,(1),null);
var job = vec__32146;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__31982__auto___32317 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__31983__auto__ = (function (){var switch__31887__auto__ = (function (state_32153){
var state_val_32154 = (state_32153[(1)]);
if((state_val_32154 === (1))){
var state_32153__$1 = state_32153;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32153__$1,(2),res,v);
} else {
if((state_val_32154 === (2))){
var inst_32150 = (state_32153[(2)]);
var inst_32151 = cljs.core.async.close_BANG_.call(null,res);
var state_32153__$1 = (function (){var statearr_32155 = state_32153;
(statearr_32155[(7)] = inst_32150);

return statearr_32155;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32153__$1,inst_32151);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__31888__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__31888__auto____0 = (function (){
var statearr_32156 = [null,null,null,null,null,null,null,null];
(statearr_32156[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__31888__auto__);

(statearr_32156[(1)] = (1));

return statearr_32156;
});
var cljs$core$async$pipeline_STAR__$_state_machine__31888__auto____1 = (function (state_32153){
while(true){
var ret_value__31889__auto__ = (function (){try{while(true){
var result__31890__auto__ = switch__31887__auto__.call(null,state_32153);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31890__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31890__auto__;
}
break;
}
}catch (e32157){if((e32157 instanceof Object)){
var ex__31891__auto__ = e32157;
var statearr_32158_32318 = state_32153;
(statearr_32158_32318[(5)] = ex__31891__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32153);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32157;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31889__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32319 = state_32153;
state_32153 = G__32319;
continue;
} else {
return ret_value__31889__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__31888__auto__ = function(state_32153){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__31888__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__31888__auto____1.call(this,state_32153);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__31888__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__31888__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__31888__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__31888__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__31888__auto__;
})()
})();
var state__31984__auto__ = (function (){var statearr_32159 = f__31983__auto__.call(null);
(statearr_32159[(6)] = c__31982__auto___32317);

return statearr_32159;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31984__auto__);
}));


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});
var async = (function (p__32160){
var vec__32161 = p__32160;
var v = cljs.core.nth.call(null,vec__32161,(0),null);
var p = cljs.core.nth.call(null,vec__32161,(1),null);
var job = vec__32161;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});
var n__4613__auto___32320 = n;
var __32321 = (0);
while(true){
if((__32321 < n__4613__auto___32320)){
var G__32164_32322 = type;
var G__32164_32323__$1 = (((G__32164_32322 instanceof cljs.core.Keyword))?G__32164_32322.fqn:null);
switch (G__32164_32323__$1) {
case "compute":
var c__31982__auto___32325 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__32321,c__31982__auto___32325,G__32164_32322,G__32164_32323__$1,n__4613__auto___32320,jobs,results,process,async){
return (function (){
var f__31983__auto__ = (function (){var switch__31887__auto__ = ((function (__32321,c__31982__auto___32325,G__32164_32322,G__32164_32323__$1,n__4613__auto___32320,jobs,results,process,async){
return (function (state_32177){
var state_val_32178 = (state_32177[(1)]);
if((state_val_32178 === (1))){
var state_32177__$1 = state_32177;
var statearr_32179_32326 = state_32177__$1;
(statearr_32179_32326[(2)] = null);

(statearr_32179_32326[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32178 === (2))){
var state_32177__$1 = state_32177;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32177__$1,(4),jobs);
} else {
if((state_val_32178 === (3))){
var inst_32175 = (state_32177[(2)]);
var state_32177__$1 = state_32177;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32177__$1,inst_32175);
} else {
if((state_val_32178 === (4))){
var inst_32167 = (state_32177[(2)]);
var inst_32168 = process.call(null,inst_32167);
var state_32177__$1 = state_32177;
if(cljs.core.truth_(inst_32168)){
var statearr_32180_32327 = state_32177__$1;
(statearr_32180_32327[(1)] = (5));

} else {
var statearr_32181_32328 = state_32177__$1;
(statearr_32181_32328[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32178 === (5))){
var state_32177__$1 = state_32177;
var statearr_32182_32329 = state_32177__$1;
(statearr_32182_32329[(2)] = null);

(statearr_32182_32329[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32178 === (6))){
var state_32177__$1 = state_32177;
var statearr_32183_32330 = state_32177__$1;
(statearr_32183_32330[(2)] = null);

(statearr_32183_32330[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32178 === (7))){
var inst_32173 = (state_32177[(2)]);
var state_32177__$1 = state_32177;
var statearr_32184_32331 = state_32177__$1;
(statearr_32184_32331[(2)] = inst_32173);

(statearr_32184_32331[(1)] = (3));


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
});})(__32321,c__31982__auto___32325,G__32164_32322,G__32164_32323__$1,n__4613__auto___32320,jobs,results,process,async))
;
return ((function (__32321,switch__31887__auto__,c__31982__auto___32325,G__32164_32322,G__32164_32323__$1,n__4613__auto___32320,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__31888__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__31888__auto____0 = (function (){
var statearr_32185 = [null,null,null,null,null,null,null];
(statearr_32185[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__31888__auto__);

(statearr_32185[(1)] = (1));

return statearr_32185;
});
var cljs$core$async$pipeline_STAR__$_state_machine__31888__auto____1 = (function (state_32177){
while(true){
var ret_value__31889__auto__ = (function (){try{while(true){
var result__31890__auto__ = switch__31887__auto__.call(null,state_32177);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31890__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31890__auto__;
}
break;
}
}catch (e32186){if((e32186 instanceof Object)){
var ex__31891__auto__ = e32186;
var statearr_32187_32332 = state_32177;
(statearr_32187_32332[(5)] = ex__31891__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32177);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32186;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31889__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32333 = state_32177;
state_32177 = G__32333;
continue;
} else {
return ret_value__31889__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__31888__auto__ = function(state_32177){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__31888__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__31888__auto____1.call(this,state_32177);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__31888__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__31888__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__31888__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__31888__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__31888__auto__;
})()
;})(__32321,switch__31887__auto__,c__31982__auto___32325,G__32164_32322,G__32164_32323__$1,n__4613__auto___32320,jobs,results,process,async))
})();
var state__31984__auto__ = (function (){var statearr_32188 = f__31983__auto__.call(null);
(statearr_32188[(6)] = c__31982__auto___32325);

return statearr_32188;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31984__auto__);
});})(__32321,c__31982__auto___32325,G__32164_32322,G__32164_32323__$1,n__4613__auto___32320,jobs,results,process,async))
);


break;
case "async":
var c__31982__auto___32334 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__32321,c__31982__auto___32334,G__32164_32322,G__32164_32323__$1,n__4613__auto___32320,jobs,results,process,async){
return (function (){
var f__31983__auto__ = (function (){var switch__31887__auto__ = ((function (__32321,c__31982__auto___32334,G__32164_32322,G__32164_32323__$1,n__4613__auto___32320,jobs,results,process,async){
return (function (state_32201){
var state_val_32202 = (state_32201[(1)]);
if((state_val_32202 === (1))){
var state_32201__$1 = state_32201;
var statearr_32203_32335 = state_32201__$1;
(statearr_32203_32335[(2)] = null);

(statearr_32203_32335[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32202 === (2))){
var state_32201__$1 = state_32201;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32201__$1,(4),jobs);
} else {
if((state_val_32202 === (3))){
var inst_32199 = (state_32201[(2)]);
var state_32201__$1 = state_32201;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32201__$1,inst_32199);
} else {
if((state_val_32202 === (4))){
var inst_32191 = (state_32201[(2)]);
var inst_32192 = async.call(null,inst_32191);
var state_32201__$1 = state_32201;
if(cljs.core.truth_(inst_32192)){
var statearr_32204_32336 = state_32201__$1;
(statearr_32204_32336[(1)] = (5));

} else {
var statearr_32205_32337 = state_32201__$1;
(statearr_32205_32337[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32202 === (5))){
var state_32201__$1 = state_32201;
var statearr_32206_32338 = state_32201__$1;
(statearr_32206_32338[(2)] = null);

(statearr_32206_32338[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32202 === (6))){
var state_32201__$1 = state_32201;
var statearr_32207_32339 = state_32201__$1;
(statearr_32207_32339[(2)] = null);

(statearr_32207_32339[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32202 === (7))){
var inst_32197 = (state_32201[(2)]);
var state_32201__$1 = state_32201;
var statearr_32208_32340 = state_32201__$1;
(statearr_32208_32340[(2)] = inst_32197);

(statearr_32208_32340[(1)] = (3));


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
});})(__32321,c__31982__auto___32334,G__32164_32322,G__32164_32323__$1,n__4613__auto___32320,jobs,results,process,async))
;
return ((function (__32321,switch__31887__auto__,c__31982__auto___32334,G__32164_32322,G__32164_32323__$1,n__4613__auto___32320,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__31888__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__31888__auto____0 = (function (){
var statearr_32209 = [null,null,null,null,null,null,null];
(statearr_32209[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__31888__auto__);

(statearr_32209[(1)] = (1));

return statearr_32209;
});
var cljs$core$async$pipeline_STAR__$_state_machine__31888__auto____1 = (function (state_32201){
while(true){
var ret_value__31889__auto__ = (function (){try{while(true){
var result__31890__auto__ = switch__31887__auto__.call(null,state_32201);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31890__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31890__auto__;
}
break;
}
}catch (e32210){if((e32210 instanceof Object)){
var ex__31891__auto__ = e32210;
var statearr_32211_32341 = state_32201;
(statearr_32211_32341[(5)] = ex__31891__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32201);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32210;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31889__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32342 = state_32201;
state_32201 = G__32342;
continue;
} else {
return ret_value__31889__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__31888__auto__ = function(state_32201){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__31888__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__31888__auto____1.call(this,state_32201);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__31888__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__31888__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__31888__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__31888__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__31888__auto__;
})()
;})(__32321,switch__31887__auto__,c__31982__auto___32334,G__32164_32322,G__32164_32323__$1,n__4613__auto___32320,jobs,results,process,async))
})();
var state__31984__auto__ = (function (){var statearr_32212 = f__31983__auto__.call(null);
(statearr_32212[(6)] = c__31982__auto___32334);

return statearr_32212;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31984__auto__);
});})(__32321,c__31982__auto___32334,G__32164_32322,G__32164_32323__$1,n__4613__auto___32320,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__32164_32323__$1)].join('')));

}

var G__32343 = (__32321 + (1));
__32321 = G__32343;
continue;
} else {
}
break;
}

var c__31982__auto___32344 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__31983__auto__ = (function (){var switch__31887__auto__ = (function (state_32234){
var state_val_32235 = (state_32234[(1)]);
if((state_val_32235 === (7))){
var inst_32230 = (state_32234[(2)]);
var state_32234__$1 = state_32234;
var statearr_32236_32345 = state_32234__$1;
(statearr_32236_32345[(2)] = inst_32230);

(statearr_32236_32345[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32235 === (1))){
var state_32234__$1 = state_32234;
var statearr_32237_32346 = state_32234__$1;
(statearr_32237_32346[(2)] = null);

(statearr_32237_32346[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32235 === (4))){
var inst_32215 = (state_32234[(7)]);
var inst_32215__$1 = (state_32234[(2)]);
var inst_32216 = (inst_32215__$1 == null);
var state_32234__$1 = (function (){var statearr_32238 = state_32234;
(statearr_32238[(7)] = inst_32215__$1);

return statearr_32238;
})();
if(cljs.core.truth_(inst_32216)){
var statearr_32239_32347 = state_32234__$1;
(statearr_32239_32347[(1)] = (5));

} else {
var statearr_32240_32348 = state_32234__$1;
(statearr_32240_32348[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32235 === (6))){
var inst_32215 = (state_32234[(7)]);
var inst_32220 = (state_32234[(8)]);
var inst_32220__$1 = cljs.core.async.chan.call(null,(1));
var inst_32221 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_32222 = [inst_32215,inst_32220__$1];
var inst_32223 = (new cljs.core.PersistentVector(null,2,(5),inst_32221,inst_32222,null));
var state_32234__$1 = (function (){var statearr_32241 = state_32234;
(statearr_32241[(8)] = inst_32220__$1);

return statearr_32241;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32234__$1,(8),jobs,inst_32223);
} else {
if((state_val_32235 === (3))){
var inst_32232 = (state_32234[(2)]);
var state_32234__$1 = state_32234;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32234__$1,inst_32232);
} else {
if((state_val_32235 === (2))){
var state_32234__$1 = state_32234;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32234__$1,(4),from);
} else {
if((state_val_32235 === (9))){
var inst_32227 = (state_32234[(2)]);
var state_32234__$1 = (function (){var statearr_32242 = state_32234;
(statearr_32242[(9)] = inst_32227);

return statearr_32242;
})();
var statearr_32243_32349 = state_32234__$1;
(statearr_32243_32349[(2)] = null);

(statearr_32243_32349[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32235 === (5))){
var inst_32218 = cljs.core.async.close_BANG_.call(null,jobs);
var state_32234__$1 = state_32234;
var statearr_32244_32350 = state_32234__$1;
(statearr_32244_32350[(2)] = inst_32218);

(statearr_32244_32350[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32235 === (8))){
var inst_32220 = (state_32234[(8)]);
var inst_32225 = (state_32234[(2)]);
var state_32234__$1 = (function (){var statearr_32245 = state_32234;
(statearr_32245[(10)] = inst_32225);

return statearr_32245;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32234__$1,(9),results,inst_32220);
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
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__31888__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__31888__auto____0 = (function (){
var statearr_32246 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32246[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__31888__auto__);

(statearr_32246[(1)] = (1));

return statearr_32246;
});
var cljs$core$async$pipeline_STAR__$_state_machine__31888__auto____1 = (function (state_32234){
while(true){
var ret_value__31889__auto__ = (function (){try{while(true){
var result__31890__auto__ = switch__31887__auto__.call(null,state_32234);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31890__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31890__auto__;
}
break;
}
}catch (e32247){if((e32247 instanceof Object)){
var ex__31891__auto__ = e32247;
var statearr_32248_32351 = state_32234;
(statearr_32248_32351[(5)] = ex__31891__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32234);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32247;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31889__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32352 = state_32234;
state_32234 = G__32352;
continue;
} else {
return ret_value__31889__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__31888__auto__ = function(state_32234){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__31888__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__31888__auto____1.call(this,state_32234);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__31888__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__31888__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__31888__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__31888__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__31888__auto__;
})()
})();
var state__31984__auto__ = (function (){var statearr_32249 = f__31983__auto__.call(null);
(statearr_32249[(6)] = c__31982__auto___32344);

return statearr_32249;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31984__auto__);
}));


var c__31982__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__31983__auto__ = (function (){var switch__31887__auto__ = (function (state_32287){
var state_val_32288 = (state_32287[(1)]);
if((state_val_32288 === (7))){
var inst_32283 = (state_32287[(2)]);
var state_32287__$1 = state_32287;
var statearr_32289_32353 = state_32287__$1;
(statearr_32289_32353[(2)] = inst_32283);

(statearr_32289_32353[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32288 === (20))){
var state_32287__$1 = state_32287;
var statearr_32290_32354 = state_32287__$1;
(statearr_32290_32354[(2)] = null);

(statearr_32290_32354[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32288 === (1))){
var state_32287__$1 = state_32287;
var statearr_32291_32355 = state_32287__$1;
(statearr_32291_32355[(2)] = null);

(statearr_32291_32355[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32288 === (4))){
var inst_32252 = (state_32287[(7)]);
var inst_32252__$1 = (state_32287[(2)]);
var inst_32253 = (inst_32252__$1 == null);
var state_32287__$1 = (function (){var statearr_32292 = state_32287;
(statearr_32292[(7)] = inst_32252__$1);

return statearr_32292;
})();
if(cljs.core.truth_(inst_32253)){
var statearr_32293_32356 = state_32287__$1;
(statearr_32293_32356[(1)] = (5));

} else {
var statearr_32294_32357 = state_32287__$1;
(statearr_32294_32357[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32288 === (15))){
var inst_32265 = (state_32287[(8)]);
var state_32287__$1 = state_32287;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32287__$1,(18),to,inst_32265);
} else {
if((state_val_32288 === (21))){
var inst_32278 = (state_32287[(2)]);
var state_32287__$1 = state_32287;
var statearr_32295_32358 = state_32287__$1;
(statearr_32295_32358[(2)] = inst_32278);

(statearr_32295_32358[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32288 === (13))){
var inst_32280 = (state_32287[(2)]);
var state_32287__$1 = (function (){var statearr_32296 = state_32287;
(statearr_32296[(9)] = inst_32280);

return statearr_32296;
})();
var statearr_32297_32359 = state_32287__$1;
(statearr_32297_32359[(2)] = null);

(statearr_32297_32359[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32288 === (6))){
var inst_32252 = (state_32287[(7)]);
var state_32287__$1 = state_32287;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32287__$1,(11),inst_32252);
} else {
if((state_val_32288 === (17))){
var inst_32273 = (state_32287[(2)]);
var state_32287__$1 = state_32287;
if(cljs.core.truth_(inst_32273)){
var statearr_32298_32360 = state_32287__$1;
(statearr_32298_32360[(1)] = (19));

} else {
var statearr_32299_32361 = state_32287__$1;
(statearr_32299_32361[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32288 === (3))){
var inst_32285 = (state_32287[(2)]);
var state_32287__$1 = state_32287;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32287__$1,inst_32285);
} else {
if((state_val_32288 === (12))){
var inst_32262 = (state_32287[(10)]);
var state_32287__$1 = state_32287;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32287__$1,(14),inst_32262);
} else {
if((state_val_32288 === (2))){
var state_32287__$1 = state_32287;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32287__$1,(4),results);
} else {
if((state_val_32288 === (19))){
var state_32287__$1 = state_32287;
var statearr_32300_32362 = state_32287__$1;
(statearr_32300_32362[(2)] = null);

(statearr_32300_32362[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32288 === (11))){
var inst_32262 = (state_32287[(2)]);
var state_32287__$1 = (function (){var statearr_32301 = state_32287;
(statearr_32301[(10)] = inst_32262);

return statearr_32301;
})();
var statearr_32302_32363 = state_32287__$1;
(statearr_32302_32363[(2)] = null);

(statearr_32302_32363[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32288 === (9))){
var state_32287__$1 = state_32287;
var statearr_32303_32364 = state_32287__$1;
(statearr_32303_32364[(2)] = null);

(statearr_32303_32364[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32288 === (5))){
var state_32287__$1 = state_32287;
if(cljs.core.truth_(close_QMARK_)){
var statearr_32304_32365 = state_32287__$1;
(statearr_32304_32365[(1)] = (8));

} else {
var statearr_32305_32366 = state_32287__$1;
(statearr_32305_32366[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32288 === (14))){
var inst_32265 = (state_32287[(8)]);
var inst_32265__$1 = (state_32287[(2)]);
var inst_32266 = (inst_32265__$1 == null);
var inst_32267 = cljs.core.not.call(null,inst_32266);
var state_32287__$1 = (function (){var statearr_32306 = state_32287;
(statearr_32306[(8)] = inst_32265__$1);

return statearr_32306;
})();
if(inst_32267){
var statearr_32307_32367 = state_32287__$1;
(statearr_32307_32367[(1)] = (15));

} else {
var statearr_32308_32368 = state_32287__$1;
(statearr_32308_32368[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32288 === (16))){
var state_32287__$1 = state_32287;
var statearr_32309_32369 = state_32287__$1;
(statearr_32309_32369[(2)] = false);

(statearr_32309_32369[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32288 === (10))){
var inst_32259 = (state_32287[(2)]);
var state_32287__$1 = state_32287;
var statearr_32310_32370 = state_32287__$1;
(statearr_32310_32370[(2)] = inst_32259);

(statearr_32310_32370[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32288 === (18))){
var inst_32270 = (state_32287[(2)]);
var state_32287__$1 = state_32287;
var statearr_32311_32371 = state_32287__$1;
(statearr_32311_32371[(2)] = inst_32270);

(statearr_32311_32371[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32288 === (8))){
var inst_32256 = cljs.core.async.close_BANG_.call(null,to);
var state_32287__$1 = state_32287;
var statearr_32312_32372 = state_32287__$1;
(statearr_32312_32372[(2)] = inst_32256);

(statearr_32312_32372[(1)] = (10));


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
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__31888__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__31888__auto____0 = (function (){
var statearr_32313 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32313[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__31888__auto__);

(statearr_32313[(1)] = (1));

return statearr_32313;
});
var cljs$core$async$pipeline_STAR__$_state_machine__31888__auto____1 = (function (state_32287){
while(true){
var ret_value__31889__auto__ = (function (){try{while(true){
var result__31890__auto__ = switch__31887__auto__.call(null,state_32287);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31890__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31890__auto__;
}
break;
}
}catch (e32314){if((e32314 instanceof Object)){
var ex__31891__auto__ = e32314;
var statearr_32315_32373 = state_32287;
(statearr_32315_32373[(5)] = ex__31891__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32287);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32314;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31889__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32374 = state_32287;
state_32287 = G__32374;
continue;
} else {
return ret_value__31889__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__31888__auto__ = function(state_32287){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__31888__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__31888__auto____1.call(this,state_32287);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__31888__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__31888__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__31888__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__31888__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__31888__auto__;
})()
})();
var state__31984__auto__ = (function (){var statearr_32316 = f__31983__auto__.call(null);
(statearr_32316[(6)] = c__31982__auto__);

return statearr_32316;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31984__auto__);
}));

return c__31982__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__32376 = arguments.length;
switch (G__32376) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__32379 = arguments.length;
switch (G__32379) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__32382 = arguments.length;
switch (G__32382) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__31982__auto___32431 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__31983__auto__ = (function (){var switch__31887__auto__ = (function (state_32408){
var state_val_32409 = (state_32408[(1)]);
if((state_val_32409 === (7))){
var inst_32404 = (state_32408[(2)]);
var state_32408__$1 = state_32408;
var statearr_32410_32432 = state_32408__$1;
(statearr_32410_32432[(2)] = inst_32404);

(statearr_32410_32432[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32409 === (1))){
var state_32408__$1 = state_32408;
var statearr_32411_32433 = state_32408__$1;
(statearr_32411_32433[(2)] = null);

(statearr_32411_32433[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32409 === (4))){
var inst_32385 = (state_32408[(7)]);
var inst_32385__$1 = (state_32408[(2)]);
var inst_32386 = (inst_32385__$1 == null);
var state_32408__$1 = (function (){var statearr_32412 = state_32408;
(statearr_32412[(7)] = inst_32385__$1);

return statearr_32412;
})();
if(cljs.core.truth_(inst_32386)){
var statearr_32413_32434 = state_32408__$1;
(statearr_32413_32434[(1)] = (5));

} else {
var statearr_32414_32435 = state_32408__$1;
(statearr_32414_32435[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32409 === (13))){
var state_32408__$1 = state_32408;
var statearr_32415_32436 = state_32408__$1;
(statearr_32415_32436[(2)] = null);

(statearr_32415_32436[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32409 === (6))){
var inst_32385 = (state_32408[(7)]);
var inst_32391 = p.call(null,inst_32385);
var state_32408__$1 = state_32408;
if(cljs.core.truth_(inst_32391)){
var statearr_32416_32437 = state_32408__$1;
(statearr_32416_32437[(1)] = (9));

} else {
var statearr_32417_32438 = state_32408__$1;
(statearr_32417_32438[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32409 === (3))){
var inst_32406 = (state_32408[(2)]);
var state_32408__$1 = state_32408;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32408__$1,inst_32406);
} else {
if((state_val_32409 === (12))){
var state_32408__$1 = state_32408;
var statearr_32418_32439 = state_32408__$1;
(statearr_32418_32439[(2)] = null);

(statearr_32418_32439[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32409 === (2))){
var state_32408__$1 = state_32408;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32408__$1,(4),ch);
} else {
if((state_val_32409 === (11))){
var inst_32385 = (state_32408[(7)]);
var inst_32395 = (state_32408[(2)]);
var state_32408__$1 = state_32408;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32408__$1,(8),inst_32395,inst_32385);
} else {
if((state_val_32409 === (9))){
var state_32408__$1 = state_32408;
var statearr_32419_32440 = state_32408__$1;
(statearr_32419_32440[(2)] = tc);

(statearr_32419_32440[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32409 === (5))){
var inst_32388 = cljs.core.async.close_BANG_.call(null,tc);
var inst_32389 = cljs.core.async.close_BANG_.call(null,fc);
var state_32408__$1 = (function (){var statearr_32420 = state_32408;
(statearr_32420[(8)] = inst_32388);

return statearr_32420;
})();
var statearr_32421_32441 = state_32408__$1;
(statearr_32421_32441[(2)] = inst_32389);

(statearr_32421_32441[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32409 === (14))){
var inst_32402 = (state_32408[(2)]);
var state_32408__$1 = state_32408;
var statearr_32422_32442 = state_32408__$1;
(statearr_32422_32442[(2)] = inst_32402);

(statearr_32422_32442[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32409 === (10))){
var state_32408__$1 = state_32408;
var statearr_32423_32443 = state_32408__$1;
(statearr_32423_32443[(2)] = fc);

(statearr_32423_32443[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32409 === (8))){
var inst_32397 = (state_32408[(2)]);
var state_32408__$1 = state_32408;
if(cljs.core.truth_(inst_32397)){
var statearr_32424_32444 = state_32408__$1;
(statearr_32424_32444[(1)] = (12));

} else {
var statearr_32425_32445 = state_32408__$1;
(statearr_32425_32445[(1)] = (13));

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
});
return (function() {
var cljs$core$async$state_machine__31888__auto__ = null;
var cljs$core$async$state_machine__31888__auto____0 = (function (){
var statearr_32426 = [null,null,null,null,null,null,null,null,null];
(statearr_32426[(0)] = cljs$core$async$state_machine__31888__auto__);

(statearr_32426[(1)] = (1));

return statearr_32426;
});
var cljs$core$async$state_machine__31888__auto____1 = (function (state_32408){
while(true){
var ret_value__31889__auto__ = (function (){try{while(true){
var result__31890__auto__ = switch__31887__auto__.call(null,state_32408);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31890__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31890__auto__;
}
break;
}
}catch (e32427){if((e32427 instanceof Object)){
var ex__31891__auto__ = e32427;
var statearr_32428_32446 = state_32408;
(statearr_32428_32446[(5)] = ex__31891__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32408);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32427;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31889__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32447 = state_32408;
state_32408 = G__32447;
continue;
} else {
return ret_value__31889__auto__;
}
break;
}
});
cljs$core$async$state_machine__31888__auto__ = function(state_32408){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31888__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31888__auto____1.call(this,state_32408);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31888__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31888__auto____0;
cljs$core$async$state_machine__31888__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31888__auto____1;
return cljs$core$async$state_machine__31888__auto__;
})()
})();
var state__31984__auto__ = (function (){var statearr_32429 = f__31983__auto__.call(null);
(statearr_32429[(6)] = c__31982__auto___32431);

return statearr_32429;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31984__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__31982__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__31983__auto__ = (function (){var switch__31887__auto__ = (function (state_32468){
var state_val_32469 = (state_32468[(1)]);
if((state_val_32469 === (7))){
var inst_32464 = (state_32468[(2)]);
var state_32468__$1 = state_32468;
var statearr_32470_32488 = state_32468__$1;
(statearr_32470_32488[(2)] = inst_32464);

(statearr_32470_32488[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32469 === (1))){
var inst_32448 = init;
var state_32468__$1 = (function (){var statearr_32471 = state_32468;
(statearr_32471[(7)] = inst_32448);

return statearr_32471;
})();
var statearr_32472_32489 = state_32468__$1;
(statearr_32472_32489[(2)] = null);

(statearr_32472_32489[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32469 === (4))){
var inst_32451 = (state_32468[(8)]);
var inst_32451__$1 = (state_32468[(2)]);
var inst_32452 = (inst_32451__$1 == null);
var state_32468__$1 = (function (){var statearr_32473 = state_32468;
(statearr_32473[(8)] = inst_32451__$1);

return statearr_32473;
})();
if(cljs.core.truth_(inst_32452)){
var statearr_32474_32490 = state_32468__$1;
(statearr_32474_32490[(1)] = (5));

} else {
var statearr_32475_32491 = state_32468__$1;
(statearr_32475_32491[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32469 === (6))){
var inst_32448 = (state_32468[(7)]);
var inst_32451 = (state_32468[(8)]);
var inst_32455 = (state_32468[(9)]);
var inst_32455__$1 = f.call(null,inst_32448,inst_32451);
var inst_32456 = cljs.core.reduced_QMARK_.call(null,inst_32455__$1);
var state_32468__$1 = (function (){var statearr_32476 = state_32468;
(statearr_32476[(9)] = inst_32455__$1);

return statearr_32476;
})();
if(inst_32456){
var statearr_32477_32492 = state_32468__$1;
(statearr_32477_32492[(1)] = (8));

} else {
var statearr_32478_32493 = state_32468__$1;
(statearr_32478_32493[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32469 === (3))){
var inst_32466 = (state_32468[(2)]);
var state_32468__$1 = state_32468;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32468__$1,inst_32466);
} else {
if((state_val_32469 === (2))){
var state_32468__$1 = state_32468;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32468__$1,(4),ch);
} else {
if((state_val_32469 === (9))){
var inst_32455 = (state_32468[(9)]);
var inst_32448 = inst_32455;
var state_32468__$1 = (function (){var statearr_32479 = state_32468;
(statearr_32479[(7)] = inst_32448);

return statearr_32479;
})();
var statearr_32480_32494 = state_32468__$1;
(statearr_32480_32494[(2)] = null);

(statearr_32480_32494[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32469 === (5))){
var inst_32448 = (state_32468[(7)]);
var state_32468__$1 = state_32468;
var statearr_32481_32495 = state_32468__$1;
(statearr_32481_32495[(2)] = inst_32448);

(statearr_32481_32495[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32469 === (10))){
var inst_32462 = (state_32468[(2)]);
var state_32468__$1 = state_32468;
var statearr_32482_32496 = state_32468__$1;
(statearr_32482_32496[(2)] = inst_32462);

(statearr_32482_32496[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32469 === (8))){
var inst_32455 = (state_32468[(9)]);
var inst_32458 = cljs.core.deref.call(null,inst_32455);
var state_32468__$1 = state_32468;
var statearr_32483_32497 = state_32468__$1;
(statearr_32483_32497[(2)] = inst_32458);

(statearr_32483_32497[(1)] = (10));


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
});
return (function() {
var cljs$core$async$reduce_$_state_machine__31888__auto__ = null;
var cljs$core$async$reduce_$_state_machine__31888__auto____0 = (function (){
var statearr_32484 = [null,null,null,null,null,null,null,null,null,null];
(statearr_32484[(0)] = cljs$core$async$reduce_$_state_machine__31888__auto__);

(statearr_32484[(1)] = (1));

return statearr_32484;
});
var cljs$core$async$reduce_$_state_machine__31888__auto____1 = (function (state_32468){
while(true){
var ret_value__31889__auto__ = (function (){try{while(true){
var result__31890__auto__ = switch__31887__auto__.call(null,state_32468);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31890__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31890__auto__;
}
break;
}
}catch (e32485){if((e32485 instanceof Object)){
var ex__31891__auto__ = e32485;
var statearr_32486_32498 = state_32468;
(statearr_32486_32498[(5)] = ex__31891__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32468);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32485;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31889__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32499 = state_32468;
state_32468 = G__32499;
continue;
} else {
return ret_value__31889__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__31888__auto__ = function(state_32468){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__31888__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__31888__auto____1.call(this,state_32468);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__31888__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__31888__auto____0;
cljs$core$async$reduce_$_state_machine__31888__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__31888__auto____1;
return cljs$core$async$reduce_$_state_machine__31888__auto__;
})()
})();
var state__31984__auto__ = (function (){var statearr_32487 = f__31983__auto__.call(null);
(statearr_32487[(6)] = c__31982__auto__);

return statearr_32487;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31984__auto__);
}));

return c__31982__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__31982__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__31983__auto__ = (function (){var switch__31887__auto__ = (function (state_32505){
var state_val_32506 = (state_32505[(1)]);
if((state_val_32506 === (1))){
var inst_32500 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_32505__$1 = state_32505;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32505__$1,(2),inst_32500);
} else {
if((state_val_32506 === (2))){
var inst_32502 = (state_32505[(2)]);
var inst_32503 = f__$1.call(null,inst_32502);
var state_32505__$1 = state_32505;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32505__$1,inst_32503);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__31888__auto__ = null;
var cljs$core$async$transduce_$_state_machine__31888__auto____0 = (function (){
var statearr_32507 = [null,null,null,null,null,null,null];
(statearr_32507[(0)] = cljs$core$async$transduce_$_state_machine__31888__auto__);

(statearr_32507[(1)] = (1));

return statearr_32507;
});
var cljs$core$async$transduce_$_state_machine__31888__auto____1 = (function (state_32505){
while(true){
var ret_value__31889__auto__ = (function (){try{while(true){
var result__31890__auto__ = switch__31887__auto__.call(null,state_32505);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31890__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31890__auto__;
}
break;
}
}catch (e32508){if((e32508 instanceof Object)){
var ex__31891__auto__ = e32508;
var statearr_32509_32511 = state_32505;
(statearr_32509_32511[(5)] = ex__31891__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32505);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32508;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31889__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32512 = state_32505;
state_32505 = G__32512;
continue;
} else {
return ret_value__31889__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__31888__auto__ = function(state_32505){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__31888__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__31888__auto____1.call(this,state_32505);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__31888__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__31888__auto____0;
cljs$core$async$transduce_$_state_machine__31888__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__31888__auto____1;
return cljs$core$async$transduce_$_state_machine__31888__auto__;
})()
})();
var state__31984__auto__ = (function (){var statearr_32510 = f__31983__auto__.call(null);
(statearr_32510[(6)] = c__31982__auto__);

return statearr_32510;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31984__auto__);
}));

return c__31982__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__32514 = arguments.length;
switch (G__32514) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__31982__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__31983__auto__ = (function (){var switch__31887__auto__ = (function (state_32539){
var state_val_32540 = (state_32539[(1)]);
if((state_val_32540 === (7))){
var inst_32521 = (state_32539[(2)]);
var state_32539__$1 = state_32539;
var statearr_32541_32562 = state_32539__$1;
(statearr_32541_32562[(2)] = inst_32521);

(statearr_32541_32562[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32540 === (1))){
var inst_32515 = cljs.core.seq.call(null,coll);
var inst_32516 = inst_32515;
var state_32539__$1 = (function (){var statearr_32542 = state_32539;
(statearr_32542[(7)] = inst_32516);

return statearr_32542;
})();
var statearr_32543_32563 = state_32539__$1;
(statearr_32543_32563[(2)] = null);

(statearr_32543_32563[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32540 === (4))){
var inst_32516 = (state_32539[(7)]);
var inst_32519 = cljs.core.first.call(null,inst_32516);
var state_32539__$1 = state_32539;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32539__$1,(7),ch,inst_32519);
} else {
if((state_val_32540 === (13))){
var inst_32533 = (state_32539[(2)]);
var state_32539__$1 = state_32539;
var statearr_32544_32564 = state_32539__$1;
(statearr_32544_32564[(2)] = inst_32533);

(statearr_32544_32564[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32540 === (6))){
var inst_32524 = (state_32539[(2)]);
var state_32539__$1 = state_32539;
if(cljs.core.truth_(inst_32524)){
var statearr_32545_32565 = state_32539__$1;
(statearr_32545_32565[(1)] = (8));

} else {
var statearr_32546_32566 = state_32539__$1;
(statearr_32546_32566[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32540 === (3))){
var inst_32537 = (state_32539[(2)]);
var state_32539__$1 = state_32539;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32539__$1,inst_32537);
} else {
if((state_val_32540 === (12))){
var state_32539__$1 = state_32539;
var statearr_32547_32567 = state_32539__$1;
(statearr_32547_32567[(2)] = null);

(statearr_32547_32567[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32540 === (2))){
var inst_32516 = (state_32539[(7)]);
var state_32539__$1 = state_32539;
if(cljs.core.truth_(inst_32516)){
var statearr_32548_32568 = state_32539__$1;
(statearr_32548_32568[(1)] = (4));

} else {
var statearr_32549_32569 = state_32539__$1;
(statearr_32549_32569[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32540 === (11))){
var inst_32530 = cljs.core.async.close_BANG_.call(null,ch);
var state_32539__$1 = state_32539;
var statearr_32550_32570 = state_32539__$1;
(statearr_32550_32570[(2)] = inst_32530);

(statearr_32550_32570[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32540 === (9))){
var state_32539__$1 = state_32539;
if(cljs.core.truth_(close_QMARK_)){
var statearr_32551_32571 = state_32539__$1;
(statearr_32551_32571[(1)] = (11));

} else {
var statearr_32552_32572 = state_32539__$1;
(statearr_32552_32572[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32540 === (5))){
var inst_32516 = (state_32539[(7)]);
var state_32539__$1 = state_32539;
var statearr_32553_32573 = state_32539__$1;
(statearr_32553_32573[(2)] = inst_32516);

(statearr_32553_32573[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32540 === (10))){
var inst_32535 = (state_32539[(2)]);
var state_32539__$1 = state_32539;
var statearr_32554_32574 = state_32539__$1;
(statearr_32554_32574[(2)] = inst_32535);

(statearr_32554_32574[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32540 === (8))){
var inst_32516 = (state_32539[(7)]);
var inst_32526 = cljs.core.next.call(null,inst_32516);
var inst_32516__$1 = inst_32526;
var state_32539__$1 = (function (){var statearr_32555 = state_32539;
(statearr_32555[(7)] = inst_32516__$1);

return statearr_32555;
})();
var statearr_32556_32575 = state_32539__$1;
(statearr_32556_32575[(2)] = null);

(statearr_32556_32575[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__31888__auto__ = null;
var cljs$core$async$state_machine__31888__auto____0 = (function (){
var statearr_32557 = [null,null,null,null,null,null,null,null];
(statearr_32557[(0)] = cljs$core$async$state_machine__31888__auto__);

(statearr_32557[(1)] = (1));

return statearr_32557;
});
var cljs$core$async$state_machine__31888__auto____1 = (function (state_32539){
while(true){
var ret_value__31889__auto__ = (function (){try{while(true){
var result__31890__auto__ = switch__31887__auto__.call(null,state_32539);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31890__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31890__auto__;
}
break;
}
}catch (e32558){if((e32558 instanceof Object)){
var ex__31891__auto__ = e32558;
var statearr_32559_32576 = state_32539;
(statearr_32559_32576[(5)] = ex__31891__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32539);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32558;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31889__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32577 = state_32539;
state_32539 = G__32577;
continue;
} else {
return ret_value__31889__auto__;
}
break;
}
});
cljs$core$async$state_machine__31888__auto__ = function(state_32539){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31888__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31888__auto____1.call(this,state_32539);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31888__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31888__auto____0;
cljs$core$async$state_machine__31888__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31888__auto____1;
return cljs$core$async$state_machine__31888__auto__;
})()
})();
var state__31984__auto__ = (function (){var statearr_32560 = f__31983__auto__.call(null);
(statearr_32560[(6)] = c__31982__auto__);

return statearr_32560;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31984__auto__);
}));

return c__31982__auto__;
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_32578 = (function (_){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,_);
} else {
var m__4426__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_32578.call(null,_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_32579 = (function (m,ch,close_QMARK_){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__4426__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_32579.call(null,m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_32580 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,m,ch);
} else {
var m__4426__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_32580.call(null,m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_32581 = (function (m){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,m);
} else {
var m__4426__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_32581.call(null,m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32582 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32582 = (function (ch,cs,meta32583){
this.ch = ch;
this.cs = cs;
this.meta32583 = meta32583;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32582.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32584,meta32583__$1){
var self__ = this;
var _32584__$1 = this;
return (new cljs.core.async.t_cljs$core$async32582(self__.ch,self__.cs,meta32583__$1));
}));

(cljs.core.async.t_cljs$core$async32582.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32584){
var self__ = this;
var _32584__$1 = this;
return self__.meta32583;
}));

(cljs.core.async.t_cljs$core$async32582.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32582.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async32582.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32582.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async32582.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async32582.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async32582.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta32583","meta32583",401710594,null)], null);
}));

(cljs.core.async.t_cljs$core$async32582.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32582.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32582");

(cljs.core.async.t_cljs$core$async32582.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async32582");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32582.
 */
cljs.core.async.__GT_t_cljs$core$async32582 = (function cljs$core$async$mult_$___GT_t_cljs$core$async32582(ch__$1,cs__$1,meta32583){
return (new cljs.core.async.t_cljs$core$async32582(ch__$1,cs__$1,meta32583));
});

}

return (new cljs.core.async.t_cljs$core$async32582(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});
var c__31982__auto___32804 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__31983__auto__ = (function (){var switch__31887__auto__ = (function (state_32719){
var state_val_32720 = (state_32719[(1)]);
if((state_val_32720 === (7))){
var inst_32715 = (state_32719[(2)]);
var state_32719__$1 = state_32719;
var statearr_32721_32805 = state_32719__$1;
(statearr_32721_32805[(2)] = inst_32715);

(statearr_32721_32805[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32720 === (20))){
var inst_32618 = (state_32719[(7)]);
var inst_32630 = cljs.core.first.call(null,inst_32618);
var inst_32631 = cljs.core.nth.call(null,inst_32630,(0),null);
var inst_32632 = cljs.core.nth.call(null,inst_32630,(1),null);
var state_32719__$1 = (function (){var statearr_32722 = state_32719;
(statearr_32722[(8)] = inst_32631);

return statearr_32722;
})();
if(cljs.core.truth_(inst_32632)){
var statearr_32723_32806 = state_32719__$1;
(statearr_32723_32806[(1)] = (22));

} else {
var statearr_32724_32807 = state_32719__$1;
(statearr_32724_32807[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32720 === (27))){
var inst_32667 = (state_32719[(9)]);
var inst_32662 = (state_32719[(10)]);
var inst_32587 = (state_32719[(11)]);
var inst_32660 = (state_32719[(12)]);
var inst_32667__$1 = cljs.core._nth.call(null,inst_32660,inst_32662);
var inst_32668 = cljs.core.async.put_BANG_.call(null,inst_32667__$1,inst_32587,done);
var state_32719__$1 = (function (){var statearr_32725 = state_32719;
(statearr_32725[(9)] = inst_32667__$1);

return statearr_32725;
})();
if(cljs.core.truth_(inst_32668)){
var statearr_32726_32808 = state_32719__$1;
(statearr_32726_32808[(1)] = (30));

} else {
var statearr_32727_32809 = state_32719__$1;
(statearr_32727_32809[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32720 === (1))){
var state_32719__$1 = state_32719;
var statearr_32728_32810 = state_32719__$1;
(statearr_32728_32810[(2)] = null);

(statearr_32728_32810[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32720 === (24))){
var inst_32618 = (state_32719[(7)]);
var inst_32637 = (state_32719[(2)]);
var inst_32638 = cljs.core.next.call(null,inst_32618);
var inst_32596 = inst_32638;
var inst_32597 = null;
var inst_32598 = (0);
var inst_32599 = (0);
var state_32719__$1 = (function (){var statearr_32729 = state_32719;
(statearr_32729[(13)] = inst_32597);

(statearr_32729[(14)] = inst_32598);

(statearr_32729[(15)] = inst_32599);

(statearr_32729[(16)] = inst_32596);

(statearr_32729[(17)] = inst_32637);

return statearr_32729;
})();
var statearr_32730_32811 = state_32719__$1;
(statearr_32730_32811[(2)] = null);

(statearr_32730_32811[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32720 === (39))){
var state_32719__$1 = state_32719;
var statearr_32734_32812 = state_32719__$1;
(statearr_32734_32812[(2)] = null);

(statearr_32734_32812[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32720 === (4))){
var inst_32587 = (state_32719[(11)]);
var inst_32587__$1 = (state_32719[(2)]);
var inst_32588 = (inst_32587__$1 == null);
var state_32719__$1 = (function (){var statearr_32735 = state_32719;
(statearr_32735[(11)] = inst_32587__$1);

return statearr_32735;
})();
if(cljs.core.truth_(inst_32588)){
var statearr_32736_32813 = state_32719__$1;
(statearr_32736_32813[(1)] = (5));

} else {
var statearr_32737_32814 = state_32719__$1;
(statearr_32737_32814[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32720 === (15))){
var inst_32597 = (state_32719[(13)]);
var inst_32598 = (state_32719[(14)]);
var inst_32599 = (state_32719[(15)]);
var inst_32596 = (state_32719[(16)]);
var inst_32614 = (state_32719[(2)]);
var inst_32615 = (inst_32599 + (1));
var tmp32731 = inst_32597;
var tmp32732 = inst_32598;
var tmp32733 = inst_32596;
var inst_32596__$1 = tmp32733;
var inst_32597__$1 = tmp32731;
var inst_32598__$1 = tmp32732;
var inst_32599__$1 = inst_32615;
var state_32719__$1 = (function (){var statearr_32738 = state_32719;
(statearr_32738[(13)] = inst_32597__$1);

(statearr_32738[(14)] = inst_32598__$1);

(statearr_32738[(15)] = inst_32599__$1);

(statearr_32738[(16)] = inst_32596__$1);

(statearr_32738[(18)] = inst_32614);

return statearr_32738;
})();
var statearr_32739_32815 = state_32719__$1;
(statearr_32739_32815[(2)] = null);

(statearr_32739_32815[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32720 === (21))){
var inst_32641 = (state_32719[(2)]);
var state_32719__$1 = state_32719;
var statearr_32743_32816 = state_32719__$1;
(statearr_32743_32816[(2)] = inst_32641);

(statearr_32743_32816[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32720 === (31))){
var inst_32667 = (state_32719[(9)]);
var inst_32671 = done.call(null,null);
var inst_32672 = cljs.core.async.untap_STAR_.call(null,m,inst_32667);
var state_32719__$1 = (function (){var statearr_32744 = state_32719;
(statearr_32744[(19)] = inst_32671);

return statearr_32744;
})();
var statearr_32745_32817 = state_32719__$1;
(statearr_32745_32817[(2)] = inst_32672);

(statearr_32745_32817[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32720 === (32))){
var inst_32659 = (state_32719[(20)]);
var inst_32661 = (state_32719[(21)]);
var inst_32662 = (state_32719[(10)]);
var inst_32660 = (state_32719[(12)]);
var inst_32674 = (state_32719[(2)]);
var inst_32675 = (inst_32662 + (1));
var tmp32740 = inst_32659;
var tmp32741 = inst_32661;
var tmp32742 = inst_32660;
var inst_32659__$1 = tmp32740;
var inst_32660__$1 = tmp32742;
var inst_32661__$1 = tmp32741;
var inst_32662__$1 = inst_32675;
var state_32719__$1 = (function (){var statearr_32746 = state_32719;
(statearr_32746[(22)] = inst_32674);

(statearr_32746[(20)] = inst_32659__$1);

(statearr_32746[(21)] = inst_32661__$1);

(statearr_32746[(10)] = inst_32662__$1);

(statearr_32746[(12)] = inst_32660__$1);

return statearr_32746;
})();
var statearr_32747_32818 = state_32719__$1;
(statearr_32747_32818[(2)] = null);

(statearr_32747_32818[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32720 === (40))){
var inst_32687 = (state_32719[(23)]);
var inst_32691 = done.call(null,null);
var inst_32692 = cljs.core.async.untap_STAR_.call(null,m,inst_32687);
var state_32719__$1 = (function (){var statearr_32748 = state_32719;
(statearr_32748[(24)] = inst_32691);

return statearr_32748;
})();
var statearr_32749_32819 = state_32719__$1;
(statearr_32749_32819[(2)] = inst_32692);

(statearr_32749_32819[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32720 === (33))){
var inst_32678 = (state_32719[(25)]);
var inst_32680 = cljs.core.chunked_seq_QMARK_.call(null,inst_32678);
var state_32719__$1 = state_32719;
if(inst_32680){
var statearr_32750_32820 = state_32719__$1;
(statearr_32750_32820[(1)] = (36));

} else {
var statearr_32751_32821 = state_32719__$1;
(statearr_32751_32821[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32720 === (13))){
var inst_32608 = (state_32719[(26)]);
var inst_32611 = cljs.core.async.close_BANG_.call(null,inst_32608);
var state_32719__$1 = state_32719;
var statearr_32752_32822 = state_32719__$1;
(statearr_32752_32822[(2)] = inst_32611);

(statearr_32752_32822[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32720 === (22))){
var inst_32631 = (state_32719[(8)]);
var inst_32634 = cljs.core.async.close_BANG_.call(null,inst_32631);
var state_32719__$1 = state_32719;
var statearr_32753_32823 = state_32719__$1;
(statearr_32753_32823[(2)] = inst_32634);

(statearr_32753_32823[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32720 === (36))){
var inst_32678 = (state_32719[(25)]);
var inst_32682 = cljs.core.chunk_first.call(null,inst_32678);
var inst_32683 = cljs.core.chunk_rest.call(null,inst_32678);
var inst_32684 = cljs.core.count.call(null,inst_32682);
var inst_32659 = inst_32683;
var inst_32660 = inst_32682;
var inst_32661 = inst_32684;
var inst_32662 = (0);
var state_32719__$1 = (function (){var statearr_32754 = state_32719;
(statearr_32754[(20)] = inst_32659);

(statearr_32754[(21)] = inst_32661);

(statearr_32754[(10)] = inst_32662);

(statearr_32754[(12)] = inst_32660);

return statearr_32754;
})();
var statearr_32755_32824 = state_32719__$1;
(statearr_32755_32824[(2)] = null);

(statearr_32755_32824[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32720 === (41))){
var inst_32678 = (state_32719[(25)]);
var inst_32694 = (state_32719[(2)]);
var inst_32695 = cljs.core.next.call(null,inst_32678);
var inst_32659 = inst_32695;
var inst_32660 = null;
var inst_32661 = (0);
var inst_32662 = (0);
var state_32719__$1 = (function (){var statearr_32756 = state_32719;
(statearr_32756[(27)] = inst_32694);

(statearr_32756[(20)] = inst_32659);

(statearr_32756[(21)] = inst_32661);

(statearr_32756[(10)] = inst_32662);

(statearr_32756[(12)] = inst_32660);

return statearr_32756;
})();
var statearr_32757_32825 = state_32719__$1;
(statearr_32757_32825[(2)] = null);

(statearr_32757_32825[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32720 === (43))){
var state_32719__$1 = state_32719;
var statearr_32758_32826 = state_32719__$1;
(statearr_32758_32826[(2)] = null);

(statearr_32758_32826[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32720 === (29))){
var inst_32703 = (state_32719[(2)]);
var state_32719__$1 = state_32719;
var statearr_32759_32827 = state_32719__$1;
(statearr_32759_32827[(2)] = inst_32703);

(statearr_32759_32827[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32720 === (44))){
var inst_32712 = (state_32719[(2)]);
var state_32719__$1 = (function (){var statearr_32760 = state_32719;
(statearr_32760[(28)] = inst_32712);

return statearr_32760;
})();
var statearr_32761_32828 = state_32719__$1;
(statearr_32761_32828[(2)] = null);

(statearr_32761_32828[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32720 === (6))){
var inst_32651 = (state_32719[(29)]);
var inst_32650 = cljs.core.deref.call(null,cs);
var inst_32651__$1 = cljs.core.keys.call(null,inst_32650);
var inst_32652 = cljs.core.count.call(null,inst_32651__$1);
var inst_32653 = cljs.core.reset_BANG_.call(null,dctr,inst_32652);
var inst_32658 = cljs.core.seq.call(null,inst_32651__$1);
var inst_32659 = inst_32658;
var inst_32660 = null;
var inst_32661 = (0);
var inst_32662 = (0);
var state_32719__$1 = (function (){var statearr_32762 = state_32719;
(statearr_32762[(20)] = inst_32659);

(statearr_32762[(30)] = inst_32653);

(statearr_32762[(21)] = inst_32661);

(statearr_32762[(10)] = inst_32662);

(statearr_32762[(29)] = inst_32651__$1);

(statearr_32762[(12)] = inst_32660);

return statearr_32762;
})();
var statearr_32763_32829 = state_32719__$1;
(statearr_32763_32829[(2)] = null);

(statearr_32763_32829[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32720 === (28))){
var inst_32659 = (state_32719[(20)]);
var inst_32678 = (state_32719[(25)]);
var inst_32678__$1 = cljs.core.seq.call(null,inst_32659);
var state_32719__$1 = (function (){var statearr_32764 = state_32719;
(statearr_32764[(25)] = inst_32678__$1);

return statearr_32764;
})();
if(inst_32678__$1){
var statearr_32765_32830 = state_32719__$1;
(statearr_32765_32830[(1)] = (33));

} else {
var statearr_32766_32831 = state_32719__$1;
(statearr_32766_32831[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32720 === (25))){
var inst_32661 = (state_32719[(21)]);
var inst_32662 = (state_32719[(10)]);
var inst_32664 = (inst_32662 < inst_32661);
var inst_32665 = inst_32664;
var state_32719__$1 = state_32719;
if(cljs.core.truth_(inst_32665)){
var statearr_32767_32832 = state_32719__$1;
(statearr_32767_32832[(1)] = (27));

} else {
var statearr_32768_32833 = state_32719__$1;
(statearr_32768_32833[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32720 === (34))){
var state_32719__$1 = state_32719;
var statearr_32769_32834 = state_32719__$1;
(statearr_32769_32834[(2)] = null);

(statearr_32769_32834[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32720 === (17))){
var state_32719__$1 = state_32719;
var statearr_32770_32835 = state_32719__$1;
(statearr_32770_32835[(2)] = null);

(statearr_32770_32835[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32720 === (3))){
var inst_32717 = (state_32719[(2)]);
var state_32719__$1 = state_32719;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32719__$1,inst_32717);
} else {
if((state_val_32720 === (12))){
var inst_32646 = (state_32719[(2)]);
var state_32719__$1 = state_32719;
var statearr_32771_32836 = state_32719__$1;
(statearr_32771_32836[(2)] = inst_32646);

(statearr_32771_32836[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32720 === (2))){
var state_32719__$1 = state_32719;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32719__$1,(4),ch);
} else {
if((state_val_32720 === (23))){
var state_32719__$1 = state_32719;
var statearr_32772_32837 = state_32719__$1;
(statearr_32772_32837[(2)] = null);

(statearr_32772_32837[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32720 === (35))){
var inst_32701 = (state_32719[(2)]);
var state_32719__$1 = state_32719;
var statearr_32773_32838 = state_32719__$1;
(statearr_32773_32838[(2)] = inst_32701);

(statearr_32773_32838[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32720 === (19))){
var inst_32618 = (state_32719[(7)]);
var inst_32622 = cljs.core.chunk_first.call(null,inst_32618);
var inst_32623 = cljs.core.chunk_rest.call(null,inst_32618);
var inst_32624 = cljs.core.count.call(null,inst_32622);
var inst_32596 = inst_32623;
var inst_32597 = inst_32622;
var inst_32598 = inst_32624;
var inst_32599 = (0);
var state_32719__$1 = (function (){var statearr_32774 = state_32719;
(statearr_32774[(13)] = inst_32597);

(statearr_32774[(14)] = inst_32598);

(statearr_32774[(15)] = inst_32599);

(statearr_32774[(16)] = inst_32596);

return statearr_32774;
})();
var statearr_32775_32839 = state_32719__$1;
(statearr_32775_32839[(2)] = null);

(statearr_32775_32839[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32720 === (11))){
var inst_32596 = (state_32719[(16)]);
var inst_32618 = (state_32719[(7)]);
var inst_32618__$1 = cljs.core.seq.call(null,inst_32596);
var state_32719__$1 = (function (){var statearr_32776 = state_32719;
(statearr_32776[(7)] = inst_32618__$1);

return statearr_32776;
})();
if(inst_32618__$1){
var statearr_32777_32840 = state_32719__$1;
(statearr_32777_32840[(1)] = (16));

} else {
var statearr_32778_32841 = state_32719__$1;
(statearr_32778_32841[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32720 === (9))){
var inst_32648 = (state_32719[(2)]);
var state_32719__$1 = state_32719;
var statearr_32779_32842 = state_32719__$1;
(statearr_32779_32842[(2)] = inst_32648);

(statearr_32779_32842[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32720 === (5))){
var inst_32594 = cljs.core.deref.call(null,cs);
var inst_32595 = cljs.core.seq.call(null,inst_32594);
var inst_32596 = inst_32595;
var inst_32597 = null;
var inst_32598 = (0);
var inst_32599 = (0);
var state_32719__$1 = (function (){var statearr_32780 = state_32719;
(statearr_32780[(13)] = inst_32597);

(statearr_32780[(14)] = inst_32598);

(statearr_32780[(15)] = inst_32599);

(statearr_32780[(16)] = inst_32596);

return statearr_32780;
})();
var statearr_32781_32843 = state_32719__$1;
(statearr_32781_32843[(2)] = null);

(statearr_32781_32843[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32720 === (14))){
var state_32719__$1 = state_32719;
var statearr_32782_32844 = state_32719__$1;
(statearr_32782_32844[(2)] = null);

(statearr_32782_32844[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32720 === (45))){
var inst_32709 = (state_32719[(2)]);
var state_32719__$1 = state_32719;
var statearr_32783_32845 = state_32719__$1;
(statearr_32783_32845[(2)] = inst_32709);

(statearr_32783_32845[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32720 === (26))){
var inst_32651 = (state_32719[(29)]);
var inst_32705 = (state_32719[(2)]);
var inst_32706 = cljs.core.seq.call(null,inst_32651);
var state_32719__$1 = (function (){var statearr_32784 = state_32719;
(statearr_32784[(31)] = inst_32705);

return statearr_32784;
})();
if(inst_32706){
var statearr_32785_32846 = state_32719__$1;
(statearr_32785_32846[(1)] = (42));

} else {
var statearr_32786_32847 = state_32719__$1;
(statearr_32786_32847[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32720 === (16))){
var inst_32618 = (state_32719[(7)]);
var inst_32620 = cljs.core.chunked_seq_QMARK_.call(null,inst_32618);
var state_32719__$1 = state_32719;
if(inst_32620){
var statearr_32787_32848 = state_32719__$1;
(statearr_32787_32848[(1)] = (19));

} else {
var statearr_32788_32849 = state_32719__$1;
(statearr_32788_32849[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32720 === (38))){
var inst_32698 = (state_32719[(2)]);
var state_32719__$1 = state_32719;
var statearr_32789_32850 = state_32719__$1;
(statearr_32789_32850[(2)] = inst_32698);

(statearr_32789_32850[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32720 === (30))){
var state_32719__$1 = state_32719;
var statearr_32790_32851 = state_32719__$1;
(statearr_32790_32851[(2)] = null);

(statearr_32790_32851[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32720 === (10))){
var inst_32597 = (state_32719[(13)]);
var inst_32599 = (state_32719[(15)]);
var inst_32607 = cljs.core._nth.call(null,inst_32597,inst_32599);
var inst_32608 = cljs.core.nth.call(null,inst_32607,(0),null);
var inst_32609 = cljs.core.nth.call(null,inst_32607,(1),null);
var state_32719__$1 = (function (){var statearr_32791 = state_32719;
(statearr_32791[(26)] = inst_32608);

return statearr_32791;
})();
if(cljs.core.truth_(inst_32609)){
var statearr_32792_32852 = state_32719__$1;
(statearr_32792_32852[(1)] = (13));

} else {
var statearr_32793_32853 = state_32719__$1;
(statearr_32793_32853[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32720 === (18))){
var inst_32644 = (state_32719[(2)]);
var state_32719__$1 = state_32719;
var statearr_32794_32854 = state_32719__$1;
(statearr_32794_32854[(2)] = inst_32644);

(statearr_32794_32854[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32720 === (42))){
var state_32719__$1 = state_32719;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32719__$1,(45),dchan);
} else {
if((state_val_32720 === (37))){
var inst_32678 = (state_32719[(25)]);
var inst_32687 = (state_32719[(23)]);
var inst_32587 = (state_32719[(11)]);
var inst_32687__$1 = cljs.core.first.call(null,inst_32678);
var inst_32688 = cljs.core.async.put_BANG_.call(null,inst_32687__$1,inst_32587,done);
var state_32719__$1 = (function (){var statearr_32795 = state_32719;
(statearr_32795[(23)] = inst_32687__$1);

return statearr_32795;
})();
if(cljs.core.truth_(inst_32688)){
var statearr_32796_32855 = state_32719__$1;
(statearr_32796_32855[(1)] = (39));

} else {
var statearr_32797_32856 = state_32719__$1;
(statearr_32797_32856[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32720 === (8))){
var inst_32598 = (state_32719[(14)]);
var inst_32599 = (state_32719[(15)]);
var inst_32601 = (inst_32599 < inst_32598);
var inst_32602 = inst_32601;
var state_32719__$1 = state_32719;
if(cljs.core.truth_(inst_32602)){
var statearr_32798_32857 = state_32719__$1;
(statearr_32798_32857[(1)] = (10));

} else {
var statearr_32799_32858 = state_32719__$1;
(statearr_32799_32858[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__31888__auto__ = null;
var cljs$core$async$mult_$_state_machine__31888__auto____0 = (function (){
var statearr_32800 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32800[(0)] = cljs$core$async$mult_$_state_machine__31888__auto__);

(statearr_32800[(1)] = (1));

return statearr_32800;
});
var cljs$core$async$mult_$_state_machine__31888__auto____1 = (function (state_32719){
while(true){
var ret_value__31889__auto__ = (function (){try{while(true){
var result__31890__auto__ = switch__31887__auto__.call(null,state_32719);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31890__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31890__auto__;
}
break;
}
}catch (e32801){if((e32801 instanceof Object)){
var ex__31891__auto__ = e32801;
var statearr_32802_32859 = state_32719;
(statearr_32802_32859[(5)] = ex__31891__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32719);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32801;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31889__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32860 = state_32719;
state_32719 = G__32860;
continue;
} else {
return ret_value__31889__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__31888__auto__ = function(state_32719){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__31888__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__31888__auto____1.call(this,state_32719);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__31888__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__31888__auto____0;
cljs$core$async$mult_$_state_machine__31888__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__31888__auto____1;
return cljs$core$async$mult_$_state_machine__31888__auto__;
})()
})();
var state__31984__auto__ = (function (){var statearr_32803 = f__31983__auto__.call(null);
(statearr_32803[(6)] = c__31982__auto___32804);

return statearr_32803;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31984__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__32862 = arguments.length;
switch (G__32862) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_32864 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,m,ch);
} else {
var m__4426__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_32864.call(null,m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_32865 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,m,ch);
} else {
var m__4426__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_32865.call(null,m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_32866 = (function (m){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,m);
} else {
var m__4426__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_32866.call(null,m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_32867 = (function (m,state_map){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,m,state_map);
} else {
var m__4426__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_32867.call(null,m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_32868 = (function (m,mode){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,m,mode);
} else {
var m__4426__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_32868.call(null,m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___32879 = arguments.length;
var i__4737__auto___32880 = (0);
while(true){
if((i__4737__auto___32880 < len__4736__auto___32879)){
args__4742__auto__.push((arguments[i__4737__auto___32880]));

var G__32881 = (i__4737__auto___32880 + (1));
i__4737__auto___32880 = G__32881;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__32873){
var map__32874 = p__32873;
var map__32874__$1 = (((((!((map__32874 == null))))?(((((map__32874.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32874.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32874):map__32874);
var opts = map__32874__$1;
var statearr_32876_32882 = state;
(statearr_32876_32882[(1)] = cont_block);


var temp__5720__auto__ = cljs.core.async.do_alts.call(null,(function (val){
var statearr_32877_32883 = state;
(statearr_32877_32883[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
}),ports,opts);
if(cljs.core.truth_(temp__5720__auto__)){
var cb = temp__5720__auto__;
var statearr_32878_32884 = state;
(statearr_32878_32884[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq32869){
var G__32870 = cljs.core.first.call(null,seq32869);
var seq32869__$1 = cljs.core.next.call(null,seq32869);
var G__32871 = cljs.core.first.call(null,seq32869__$1);
var seq32869__$2 = cljs.core.next.call(null,seq32869__$1);
var G__32872 = cljs.core.first.call(null,seq32869__$2);
var seq32869__$3 = cljs.core.next.call(null,seq32869__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32870,G__32871,G__32872,seq32869__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv.call(null,(function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,((((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_.call(null,solos))))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32885 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32885 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta32886){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta32886 = meta32886;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32885.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32887,meta32886__$1){
var self__ = this;
var _32887__$1 = this;
return (new cljs.core.async.t_cljs$core$async32885(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta32886__$1));
}));

(cljs.core.async.t_cljs$core$async32885.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32887){
var self__ = this;
var _32887__$1 = this;
return self__.meta32886;
}));

(cljs.core.async.t_cljs$core$async32885.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32885.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async32885.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32885.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async32885.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async32885.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async32885.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async32885.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async32885.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta32886","meta32886",-585827044,null)], null);
}));

(cljs.core.async.t_cljs$core$async32885.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32885.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32885");

(cljs.core.async.t_cljs$core$async32885.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async32885");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32885.
 */
cljs.core.async.__GT_t_cljs$core$async32885 = (function cljs$core$async$mix_$___GT_t_cljs$core$async32885(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta32886){
return (new cljs.core.async.t_cljs$core$async32885(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta32886));
});

}

return (new cljs.core.async.t_cljs$core$async32885(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__31982__auto___33049 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__31983__auto__ = (function (){var switch__31887__auto__ = (function (state_32989){
var state_val_32990 = (state_32989[(1)]);
if((state_val_32990 === (7))){
var inst_32904 = (state_32989[(2)]);
var state_32989__$1 = state_32989;
var statearr_32991_33050 = state_32989__$1;
(statearr_32991_33050[(2)] = inst_32904);

(statearr_32991_33050[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32990 === (20))){
var inst_32916 = (state_32989[(7)]);
var state_32989__$1 = state_32989;
var statearr_32992_33051 = state_32989__$1;
(statearr_32992_33051[(2)] = inst_32916);

(statearr_32992_33051[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32990 === (27))){
var state_32989__$1 = state_32989;
var statearr_32993_33052 = state_32989__$1;
(statearr_32993_33052[(2)] = null);

(statearr_32993_33052[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32990 === (1))){
var inst_32891 = (state_32989[(8)]);
var inst_32891__$1 = calc_state.call(null);
var inst_32893 = (inst_32891__$1 == null);
var inst_32894 = cljs.core.not.call(null,inst_32893);
var state_32989__$1 = (function (){var statearr_32994 = state_32989;
(statearr_32994[(8)] = inst_32891__$1);

return statearr_32994;
})();
if(inst_32894){
var statearr_32995_33053 = state_32989__$1;
(statearr_32995_33053[(1)] = (2));

} else {
var statearr_32996_33054 = state_32989__$1;
(statearr_32996_33054[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32990 === (24))){
var inst_32949 = (state_32989[(9)]);
var inst_32963 = (state_32989[(10)]);
var inst_32940 = (state_32989[(11)]);
var inst_32963__$1 = inst_32940.call(null,inst_32949);
var state_32989__$1 = (function (){var statearr_32997 = state_32989;
(statearr_32997[(10)] = inst_32963__$1);

return statearr_32997;
})();
if(cljs.core.truth_(inst_32963__$1)){
var statearr_32998_33055 = state_32989__$1;
(statearr_32998_33055[(1)] = (29));

} else {
var statearr_32999_33056 = state_32989__$1;
(statearr_32999_33056[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32990 === (4))){
var inst_32907 = (state_32989[(2)]);
var state_32989__$1 = state_32989;
if(cljs.core.truth_(inst_32907)){
var statearr_33000_33057 = state_32989__$1;
(statearr_33000_33057[(1)] = (8));

} else {
var statearr_33001_33058 = state_32989__$1;
(statearr_33001_33058[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32990 === (15))){
var inst_32934 = (state_32989[(2)]);
var state_32989__$1 = state_32989;
if(cljs.core.truth_(inst_32934)){
var statearr_33002_33059 = state_32989__$1;
(statearr_33002_33059[(1)] = (19));

} else {
var statearr_33003_33060 = state_32989__$1;
(statearr_33003_33060[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32990 === (21))){
var inst_32939 = (state_32989[(12)]);
var inst_32939__$1 = (state_32989[(2)]);
var inst_32940 = cljs.core.get.call(null,inst_32939__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_32941 = cljs.core.get.call(null,inst_32939__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_32942 = cljs.core.get.call(null,inst_32939__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_32989__$1 = (function (){var statearr_33004 = state_32989;
(statearr_33004[(13)] = inst_32941);

(statearr_33004[(12)] = inst_32939__$1);

(statearr_33004[(11)] = inst_32940);

return statearr_33004;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_32989__$1,(22),inst_32942);
} else {
if((state_val_32990 === (31))){
var inst_32971 = (state_32989[(2)]);
var state_32989__$1 = state_32989;
if(cljs.core.truth_(inst_32971)){
var statearr_33005_33061 = state_32989__$1;
(statearr_33005_33061[(1)] = (32));

} else {
var statearr_33006_33062 = state_32989__$1;
(statearr_33006_33062[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32990 === (32))){
var inst_32948 = (state_32989[(14)]);
var state_32989__$1 = state_32989;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32989__$1,(35),out,inst_32948);
} else {
if((state_val_32990 === (33))){
var inst_32939 = (state_32989[(12)]);
var inst_32916 = inst_32939;
var state_32989__$1 = (function (){var statearr_33007 = state_32989;
(statearr_33007[(7)] = inst_32916);

return statearr_33007;
})();
var statearr_33008_33063 = state_32989__$1;
(statearr_33008_33063[(2)] = null);

(statearr_33008_33063[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32990 === (13))){
var inst_32916 = (state_32989[(7)]);
var inst_32923 = inst_32916.cljs$lang$protocol_mask$partition0$;
var inst_32924 = (inst_32923 & (64));
var inst_32925 = inst_32916.cljs$core$ISeq$;
var inst_32926 = (cljs.core.PROTOCOL_SENTINEL === inst_32925);
var inst_32927 = ((inst_32924) || (inst_32926));
var state_32989__$1 = state_32989;
if(cljs.core.truth_(inst_32927)){
var statearr_33009_33064 = state_32989__$1;
(statearr_33009_33064[(1)] = (16));

} else {
var statearr_33010_33065 = state_32989__$1;
(statearr_33010_33065[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32990 === (22))){
var inst_32948 = (state_32989[(14)]);
var inst_32949 = (state_32989[(9)]);
var inst_32947 = (state_32989[(2)]);
var inst_32948__$1 = cljs.core.nth.call(null,inst_32947,(0),null);
var inst_32949__$1 = cljs.core.nth.call(null,inst_32947,(1),null);
var inst_32950 = (inst_32948__$1 == null);
var inst_32951 = cljs.core._EQ_.call(null,inst_32949__$1,change);
var inst_32952 = ((inst_32950) || (inst_32951));
var state_32989__$1 = (function (){var statearr_33011 = state_32989;
(statearr_33011[(14)] = inst_32948__$1);

(statearr_33011[(9)] = inst_32949__$1);

return statearr_33011;
})();
if(cljs.core.truth_(inst_32952)){
var statearr_33012_33066 = state_32989__$1;
(statearr_33012_33066[(1)] = (23));

} else {
var statearr_33013_33067 = state_32989__$1;
(statearr_33013_33067[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32990 === (36))){
var inst_32939 = (state_32989[(12)]);
var inst_32916 = inst_32939;
var state_32989__$1 = (function (){var statearr_33014 = state_32989;
(statearr_33014[(7)] = inst_32916);

return statearr_33014;
})();
var statearr_33015_33068 = state_32989__$1;
(statearr_33015_33068[(2)] = null);

(statearr_33015_33068[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32990 === (29))){
var inst_32963 = (state_32989[(10)]);
var state_32989__$1 = state_32989;
var statearr_33016_33069 = state_32989__$1;
(statearr_33016_33069[(2)] = inst_32963);

(statearr_33016_33069[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32990 === (6))){
var state_32989__$1 = state_32989;
var statearr_33017_33070 = state_32989__$1;
(statearr_33017_33070[(2)] = false);

(statearr_33017_33070[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32990 === (28))){
var inst_32959 = (state_32989[(2)]);
var inst_32960 = calc_state.call(null);
var inst_32916 = inst_32960;
var state_32989__$1 = (function (){var statearr_33018 = state_32989;
(statearr_33018[(15)] = inst_32959);

(statearr_33018[(7)] = inst_32916);

return statearr_33018;
})();
var statearr_33019_33071 = state_32989__$1;
(statearr_33019_33071[(2)] = null);

(statearr_33019_33071[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32990 === (25))){
var inst_32985 = (state_32989[(2)]);
var state_32989__$1 = state_32989;
var statearr_33020_33072 = state_32989__$1;
(statearr_33020_33072[(2)] = inst_32985);

(statearr_33020_33072[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32990 === (34))){
var inst_32983 = (state_32989[(2)]);
var state_32989__$1 = state_32989;
var statearr_33021_33073 = state_32989__$1;
(statearr_33021_33073[(2)] = inst_32983);

(statearr_33021_33073[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32990 === (17))){
var state_32989__$1 = state_32989;
var statearr_33022_33074 = state_32989__$1;
(statearr_33022_33074[(2)] = false);

(statearr_33022_33074[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32990 === (3))){
var state_32989__$1 = state_32989;
var statearr_33023_33075 = state_32989__$1;
(statearr_33023_33075[(2)] = false);

(statearr_33023_33075[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32990 === (12))){
var inst_32987 = (state_32989[(2)]);
var state_32989__$1 = state_32989;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32989__$1,inst_32987);
} else {
if((state_val_32990 === (2))){
var inst_32891 = (state_32989[(8)]);
var inst_32896 = inst_32891.cljs$lang$protocol_mask$partition0$;
var inst_32897 = (inst_32896 & (64));
var inst_32898 = inst_32891.cljs$core$ISeq$;
var inst_32899 = (cljs.core.PROTOCOL_SENTINEL === inst_32898);
var inst_32900 = ((inst_32897) || (inst_32899));
var state_32989__$1 = state_32989;
if(cljs.core.truth_(inst_32900)){
var statearr_33024_33076 = state_32989__$1;
(statearr_33024_33076[(1)] = (5));

} else {
var statearr_33025_33077 = state_32989__$1;
(statearr_33025_33077[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32990 === (23))){
var inst_32948 = (state_32989[(14)]);
var inst_32954 = (inst_32948 == null);
var state_32989__$1 = state_32989;
if(cljs.core.truth_(inst_32954)){
var statearr_33026_33078 = state_32989__$1;
(statearr_33026_33078[(1)] = (26));

} else {
var statearr_33027_33079 = state_32989__$1;
(statearr_33027_33079[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32990 === (35))){
var inst_32974 = (state_32989[(2)]);
var state_32989__$1 = state_32989;
if(cljs.core.truth_(inst_32974)){
var statearr_33028_33080 = state_32989__$1;
(statearr_33028_33080[(1)] = (36));

} else {
var statearr_33029_33081 = state_32989__$1;
(statearr_33029_33081[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32990 === (19))){
var inst_32916 = (state_32989[(7)]);
var inst_32936 = cljs.core.apply.call(null,cljs.core.hash_map,inst_32916);
var state_32989__$1 = state_32989;
var statearr_33030_33082 = state_32989__$1;
(statearr_33030_33082[(2)] = inst_32936);

(statearr_33030_33082[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32990 === (11))){
var inst_32916 = (state_32989[(7)]);
var inst_32920 = (inst_32916 == null);
var inst_32921 = cljs.core.not.call(null,inst_32920);
var state_32989__$1 = state_32989;
if(inst_32921){
var statearr_33031_33083 = state_32989__$1;
(statearr_33031_33083[(1)] = (13));

} else {
var statearr_33032_33084 = state_32989__$1;
(statearr_33032_33084[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32990 === (9))){
var inst_32891 = (state_32989[(8)]);
var state_32989__$1 = state_32989;
var statearr_33033_33085 = state_32989__$1;
(statearr_33033_33085[(2)] = inst_32891);

(statearr_33033_33085[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32990 === (5))){
var state_32989__$1 = state_32989;
var statearr_33034_33086 = state_32989__$1;
(statearr_33034_33086[(2)] = true);

(statearr_33034_33086[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32990 === (14))){
var state_32989__$1 = state_32989;
var statearr_33035_33087 = state_32989__$1;
(statearr_33035_33087[(2)] = false);

(statearr_33035_33087[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32990 === (26))){
var inst_32949 = (state_32989[(9)]);
var inst_32956 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_32949);
var state_32989__$1 = state_32989;
var statearr_33036_33088 = state_32989__$1;
(statearr_33036_33088[(2)] = inst_32956);

(statearr_33036_33088[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32990 === (16))){
var state_32989__$1 = state_32989;
var statearr_33037_33089 = state_32989__$1;
(statearr_33037_33089[(2)] = true);

(statearr_33037_33089[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32990 === (38))){
var inst_32979 = (state_32989[(2)]);
var state_32989__$1 = state_32989;
var statearr_33038_33090 = state_32989__$1;
(statearr_33038_33090[(2)] = inst_32979);

(statearr_33038_33090[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32990 === (30))){
var inst_32941 = (state_32989[(13)]);
var inst_32949 = (state_32989[(9)]);
var inst_32940 = (state_32989[(11)]);
var inst_32966 = cljs.core.empty_QMARK_.call(null,inst_32940);
var inst_32967 = inst_32941.call(null,inst_32949);
var inst_32968 = cljs.core.not.call(null,inst_32967);
var inst_32969 = ((inst_32966) && (inst_32968));
var state_32989__$1 = state_32989;
var statearr_33039_33091 = state_32989__$1;
(statearr_33039_33091[(2)] = inst_32969);

(statearr_33039_33091[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32990 === (10))){
var inst_32891 = (state_32989[(8)]);
var inst_32912 = (state_32989[(2)]);
var inst_32913 = cljs.core.get.call(null,inst_32912,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_32914 = cljs.core.get.call(null,inst_32912,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_32915 = cljs.core.get.call(null,inst_32912,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_32916 = inst_32891;
var state_32989__$1 = (function (){var statearr_33040 = state_32989;
(statearr_33040[(16)] = inst_32915);

(statearr_33040[(17)] = inst_32913);

(statearr_33040[(18)] = inst_32914);

(statearr_33040[(7)] = inst_32916);

return statearr_33040;
})();
var statearr_33041_33092 = state_32989__$1;
(statearr_33041_33092[(2)] = null);

(statearr_33041_33092[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32990 === (18))){
var inst_32931 = (state_32989[(2)]);
var state_32989__$1 = state_32989;
var statearr_33042_33093 = state_32989__$1;
(statearr_33042_33093[(2)] = inst_32931);

(statearr_33042_33093[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32990 === (37))){
var state_32989__$1 = state_32989;
var statearr_33043_33094 = state_32989__$1;
(statearr_33043_33094[(2)] = null);

(statearr_33043_33094[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32990 === (8))){
var inst_32891 = (state_32989[(8)]);
var inst_32909 = cljs.core.apply.call(null,cljs.core.hash_map,inst_32891);
var state_32989__$1 = state_32989;
var statearr_33044_33095 = state_32989__$1;
(statearr_33044_33095[(2)] = inst_32909);

(statearr_33044_33095[(1)] = (10));


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
var cljs$core$async$mix_$_state_machine__31888__auto__ = null;
var cljs$core$async$mix_$_state_machine__31888__auto____0 = (function (){
var statearr_33045 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33045[(0)] = cljs$core$async$mix_$_state_machine__31888__auto__);

(statearr_33045[(1)] = (1));

return statearr_33045;
});
var cljs$core$async$mix_$_state_machine__31888__auto____1 = (function (state_32989){
while(true){
var ret_value__31889__auto__ = (function (){try{while(true){
var result__31890__auto__ = switch__31887__auto__.call(null,state_32989);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31890__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31890__auto__;
}
break;
}
}catch (e33046){if((e33046 instanceof Object)){
var ex__31891__auto__ = e33046;
var statearr_33047_33096 = state_32989;
(statearr_33047_33096[(5)] = ex__31891__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32989);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33046;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31889__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33097 = state_32989;
state_32989 = G__33097;
continue;
} else {
return ret_value__31889__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__31888__auto__ = function(state_32989){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__31888__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__31888__auto____1.call(this,state_32989);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__31888__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__31888__auto____0;
cljs$core$async$mix_$_state_machine__31888__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__31888__auto____1;
return cljs$core$async$mix_$_state_machine__31888__auto__;
})()
})();
var state__31984__auto__ = (function (){var statearr_33048 = f__31983__auto__.call(null);
(statearr_33048[(6)] = c__31982__auto___33049);

return statearr_33048;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31984__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_33100 = (function (p,v,ch,close_QMARK_){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__4426__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_33100.call(null,p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_33101 = (function (p,v,ch){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,p,v,ch);
} else {
var m__4426__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_33101.call(null,p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_33102 = (function() {
var G__33103 = null;
var G__33103__1 = (function (p){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,p);
} else {
var m__4426__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
});
var G__33103__2 = (function (p,v){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,p,v);
} else {
var m__4426__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
});
G__33103 = function(p,v){
switch(arguments.length){
case 1:
return G__33103__1.call(this,p);
case 2:
return G__33103__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__33103.cljs$core$IFn$_invoke$arity$1 = G__33103__1;
G__33103.cljs$core$IFn$_invoke$arity$2 = G__33103__2;
return G__33103;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__33099 = arguments.length;
switch (G__33099) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_33102.call(null,p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_33102.call(null,p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__33107 = arguments.length;
switch (G__33107) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,(function (p1__33105_SHARP_){
if(cljs.core.truth_(p1__33105_SHARP_.call(null,topic))){
return p1__33105_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__33105_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33108 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33108 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta33109){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta33109 = meta33109;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33108.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33110,meta33109__$1){
var self__ = this;
var _33110__$1 = this;
return (new cljs.core.async.t_cljs$core$async33108(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta33109__$1));
}));

(cljs.core.async.t_cljs$core$async33108.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33110){
var self__ = this;
var _33110__$1 = this;
return self__.meta33109;
}));

(cljs.core.async.t_cljs$core$async33108.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33108.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async33108.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33108.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async33108.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5720__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__5720__auto__)){
var m = temp__5720__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async33108.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async33108.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async33108.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta33109","meta33109",706967892,null)], null);
}));

(cljs.core.async.t_cljs$core$async33108.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33108.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33108");

(cljs.core.async.t_cljs$core$async33108.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async33108");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33108.
 */
cljs.core.async.__GT_t_cljs$core$async33108 = (function cljs$core$async$__GT_t_cljs$core$async33108(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta33109){
return (new cljs.core.async.t_cljs$core$async33108(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta33109));
});

}

return (new cljs.core.async.t_cljs$core$async33108(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__31982__auto___33228 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__31983__auto__ = (function (){var switch__31887__auto__ = (function (state_33182){
var state_val_33183 = (state_33182[(1)]);
if((state_val_33183 === (7))){
var inst_33178 = (state_33182[(2)]);
var state_33182__$1 = state_33182;
var statearr_33184_33229 = state_33182__$1;
(statearr_33184_33229[(2)] = inst_33178);

(statearr_33184_33229[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33183 === (20))){
var state_33182__$1 = state_33182;
var statearr_33185_33230 = state_33182__$1;
(statearr_33185_33230[(2)] = null);

(statearr_33185_33230[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33183 === (1))){
var state_33182__$1 = state_33182;
var statearr_33186_33231 = state_33182__$1;
(statearr_33186_33231[(2)] = null);

(statearr_33186_33231[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33183 === (24))){
var inst_33161 = (state_33182[(7)]);
var inst_33170 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_33161);
var state_33182__$1 = state_33182;
var statearr_33187_33232 = state_33182__$1;
(statearr_33187_33232[(2)] = inst_33170);

(statearr_33187_33232[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33183 === (4))){
var inst_33113 = (state_33182[(8)]);
var inst_33113__$1 = (state_33182[(2)]);
var inst_33114 = (inst_33113__$1 == null);
var state_33182__$1 = (function (){var statearr_33188 = state_33182;
(statearr_33188[(8)] = inst_33113__$1);

return statearr_33188;
})();
if(cljs.core.truth_(inst_33114)){
var statearr_33189_33233 = state_33182__$1;
(statearr_33189_33233[(1)] = (5));

} else {
var statearr_33190_33234 = state_33182__$1;
(statearr_33190_33234[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33183 === (15))){
var inst_33155 = (state_33182[(2)]);
var state_33182__$1 = state_33182;
var statearr_33191_33235 = state_33182__$1;
(statearr_33191_33235[(2)] = inst_33155);

(statearr_33191_33235[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33183 === (21))){
var inst_33175 = (state_33182[(2)]);
var state_33182__$1 = (function (){var statearr_33192 = state_33182;
(statearr_33192[(9)] = inst_33175);

return statearr_33192;
})();
var statearr_33193_33236 = state_33182__$1;
(statearr_33193_33236[(2)] = null);

(statearr_33193_33236[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33183 === (13))){
var inst_33137 = (state_33182[(10)]);
var inst_33139 = cljs.core.chunked_seq_QMARK_.call(null,inst_33137);
var state_33182__$1 = state_33182;
if(inst_33139){
var statearr_33194_33237 = state_33182__$1;
(statearr_33194_33237[(1)] = (16));

} else {
var statearr_33195_33238 = state_33182__$1;
(statearr_33195_33238[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33183 === (22))){
var inst_33167 = (state_33182[(2)]);
var state_33182__$1 = state_33182;
if(cljs.core.truth_(inst_33167)){
var statearr_33196_33239 = state_33182__$1;
(statearr_33196_33239[(1)] = (23));

} else {
var statearr_33197_33240 = state_33182__$1;
(statearr_33197_33240[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33183 === (6))){
var inst_33113 = (state_33182[(8)]);
var inst_33163 = (state_33182[(11)]);
var inst_33161 = (state_33182[(7)]);
var inst_33161__$1 = topic_fn.call(null,inst_33113);
var inst_33162 = cljs.core.deref.call(null,mults);
var inst_33163__$1 = cljs.core.get.call(null,inst_33162,inst_33161__$1);
var state_33182__$1 = (function (){var statearr_33198 = state_33182;
(statearr_33198[(11)] = inst_33163__$1);

(statearr_33198[(7)] = inst_33161__$1);

return statearr_33198;
})();
if(cljs.core.truth_(inst_33163__$1)){
var statearr_33199_33241 = state_33182__$1;
(statearr_33199_33241[(1)] = (19));

} else {
var statearr_33200_33242 = state_33182__$1;
(statearr_33200_33242[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33183 === (25))){
var inst_33172 = (state_33182[(2)]);
var state_33182__$1 = state_33182;
var statearr_33201_33243 = state_33182__$1;
(statearr_33201_33243[(2)] = inst_33172);

(statearr_33201_33243[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33183 === (17))){
var inst_33137 = (state_33182[(10)]);
var inst_33146 = cljs.core.first.call(null,inst_33137);
var inst_33147 = cljs.core.async.muxch_STAR_.call(null,inst_33146);
var inst_33148 = cljs.core.async.close_BANG_.call(null,inst_33147);
var inst_33149 = cljs.core.next.call(null,inst_33137);
var inst_33123 = inst_33149;
var inst_33124 = null;
var inst_33125 = (0);
var inst_33126 = (0);
var state_33182__$1 = (function (){var statearr_33202 = state_33182;
(statearr_33202[(12)] = inst_33148);

(statearr_33202[(13)] = inst_33124);

(statearr_33202[(14)] = inst_33123);

(statearr_33202[(15)] = inst_33126);

(statearr_33202[(16)] = inst_33125);

return statearr_33202;
})();
var statearr_33203_33244 = state_33182__$1;
(statearr_33203_33244[(2)] = null);

(statearr_33203_33244[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33183 === (3))){
var inst_33180 = (state_33182[(2)]);
var state_33182__$1 = state_33182;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33182__$1,inst_33180);
} else {
if((state_val_33183 === (12))){
var inst_33157 = (state_33182[(2)]);
var state_33182__$1 = state_33182;
var statearr_33204_33245 = state_33182__$1;
(statearr_33204_33245[(2)] = inst_33157);

(statearr_33204_33245[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33183 === (2))){
var state_33182__$1 = state_33182;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33182__$1,(4),ch);
} else {
if((state_val_33183 === (23))){
var state_33182__$1 = state_33182;
var statearr_33205_33246 = state_33182__$1;
(statearr_33205_33246[(2)] = null);

(statearr_33205_33246[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33183 === (19))){
var inst_33113 = (state_33182[(8)]);
var inst_33163 = (state_33182[(11)]);
var inst_33165 = cljs.core.async.muxch_STAR_.call(null,inst_33163);
var state_33182__$1 = state_33182;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33182__$1,(22),inst_33165,inst_33113);
} else {
if((state_val_33183 === (11))){
var inst_33137 = (state_33182[(10)]);
var inst_33123 = (state_33182[(14)]);
var inst_33137__$1 = cljs.core.seq.call(null,inst_33123);
var state_33182__$1 = (function (){var statearr_33206 = state_33182;
(statearr_33206[(10)] = inst_33137__$1);

return statearr_33206;
})();
if(inst_33137__$1){
var statearr_33207_33247 = state_33182__$1;
(statearr_33207_33247[(1)] = (13));

} else {
var statearr_33208_33248 = state_33182__$1;
(statearr_33208_33248[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33183 === (9))){
var inst_33159 = (state_33182[(2)]);
var state_33182__$1 = state_33182;
var statearr_33209_33249 = state_33182__$1;
(statearr_33209_33249[(2)] = inst_33159);

(statearr_33209_33249[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33183 === (5))){
var inst_33120 = cljs.core.deref.call(null,mults);
var inst_33121 = cljs.core.vals.call(null,inst_33120);
var inst_33122 = cljs.core.seq.call(null,inst_33121);
var inst_33123 = inst_33122;
var inst_33124 = null;
var inst_33125 = (0);
var inst_33126 = (0);
var state_33182__$1 = (function (){var statearr_33210 = state_33182;
(statearr_33210[(13)] = inst_33124);

(statearr_33210[(14)] = inst_33123);

(statearr_33210[(15)] = inst_33126);

(statearr_33210[(16)] = inst_33125);

return statearr_33210;
})();
var statearr_33211_33250 = state_33182__$1;
(statearr_33211_33250[(2)] = null);

(statearr_33211_33250[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33183 === (14))){
var state_33182__$1 = state_33182;
var statearr_33215_33251 = state_33182__$1;
(statearr_33215_33251[(2)] = null);

(statearr_33215_33251[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33183 === (16))){
var inst_33137 = (state_33182[(10)]);
var inst_33141 = cljs.core.chunk_first.call(null,inst_33137);
var inst_33142 = cljs.core.chunk_rest.call(null,inst_33137);
var inst_33143 = cljs.core.count.call(null,inst_33141);
var inst_33123 = inst_33142;
var inst_33124 = inst_33141;
var inst_33125 = inst_33143;
var inst_33126 = (0);
var state_33182__$1 = (function (){var statearr_33216 = state_33182;
(statearr_33216[(13)] = inst_33124);

(statearr_33216[(14)] = inst_33123);

(statearr_33216[(15)] = inst_33126);

(statearr_33216[(16)] = inst_33125);

return statearr_33216;
})();
var statearr_33217_33252 = state_33182__$1;
(statearr_33217_33252[(2)] = null);

(statearr_33217_33252[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33183 === (10))){
var inst_33124 = (state_33182[(13)]);
var inst_33123 = (state_33182[(14)]);
var inst_33126 = (state_33182[(15)]);
var inst_33125 = (state_33182[(16)]);
var inst_33131 = cljs.core._nth.call(null,inst_33124,inst_33126);
var inst_33132 = cljs.core.async.muxch_STAR_.call(null,inst_33131);
var inst_33133 = cljs.core.async.close_BANG_.call(null,inst_33132);
var inst_33134 = (inst_33126 + (1));
var tmp33212 = inst_33124;
var tmp33213 = inst_33123;
var tmp33214 = inst_33125;
var inst_33123__$1 = tmp33213;
var inst_33124__$1 = tmp33212;
var inst_33125__$1 = tmp33214;
var inst_33126__$1 = inst_33134;
var state_33182__$1 = (function (){var statearr_33218 = state_33182;
(statearr_33218[(17)] = inst_33133);

(statearr_33218[(13)] = inst_33124__$1);

(statearr_33218[(14)] = inst_33123__$1);

(statearr_33218[(15)] = inst_33126__$1);

(statearr_33218[(16)] = inst_33125__$1);

return statearr_33218;
})();
var statearr_33219_33253 = state_33182__$1;
(statearr_33219_33253[(2)] = null);

(statearr_33219_33253[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33183 === (18))){
var inst_33152 = (state_33182[(2)]);
var state_33182__$1 = state_33182;
var statearr_33220_33254 = state_33182__$1;
(statearr_33220_33254[(2)] = inst_33152);

(statearr_33220_33254[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33183 === (8))){
var inst_33126 = (state_33182[(15)]);
var inst_33125 = (state_33182[(16)]);
var inst_33128 = (inst_33126 < inst_33125);
var inst_33129 = inst_33128;
var state_33182__$1 = state_33182;
if(cljs.core.truth_(inst_33129)){
var statearr_33221_33255 = state_33182__$1;
(statearr_33221_33255[(1)] = (10));

} else {
var statearr_33222_33256 = state_33182__$1;
(statearr_33222_33256[(1)] = (11));

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
var cljs$core$async$state_machine__31888__auto__ = null;
var cljs$core$async$state_machine__31888__auto____0 = (function (){
var statearr_33223 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33223[(0)] = cljs$core$async$state_machine__31888__auto__);

(statearr_33223[(1)] = (1));

return statearr_33223;
});
var cljs$core$async$state_machine__31888__auto____1 = (function (state_33182){
while(true){
var ret_value__31889__auto__ = (function (){try{while(true){
var result__31890__auto__ = switch__31887__auto__.call(null,state_33182);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31890__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31890__auto__;
}
break;
}
}catch (e33224){if((e33224 instanceof Object)){
var ex__31891__auto__ = e33224;
var statearr_33225_33257 = state_33182;
(statearr_33225_33257[(5)] = ex__31891__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33182);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33224;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31889__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33258 = state_33182;
state_33182 = G__33258;
continue;
} else {
return ret_value__31889__auto__;
}
break;
}
});
cljs$core$async$state_machine__31888__auto__ = function(state_33182){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31888__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31888__auto____1.call(this,state_33182);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31888__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31888__auto____0;
cljs$core$async$state_machine__31888__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31888__auto____1;
return cljs$core$async$state_machine__31888__auto__;
})()
})();
var state__31984__auto__ = (function (){var statearr_33226 = f__31983__auto__.call(null);
(statearr_33226[(6)] = c__31982__auto___33228);

return statearr_33226;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31984__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__33260 = arguments.length;
switch (G__33260) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__33263 = arguments.length;
switch (G__33263) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__33266 = arguments.length;
switch (G__33266) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,(function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.call(null,cnt));
var c__31982__auto___33333 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__31983__auto__ = (function (){var switch__31887__auto__ = (function (state_33305){
var state_val_33306 = (state_33305[(1)]);
if((state_val_33306 === (7))){
var state_33305__$1 = state_33305;
var statearr_33307_33334 = state_33305__$1;
(statearr_33307_33334[(2)] = null);

(statearr_33307_33334[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33306 === (1))){
var state_33305__$1 = state_33305;
var statearr_33308_33335 = state_33305__$1;
(statearr_33308_33335[(2)] = null);

(statearr_33308_33335[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33306 === (4))){
var inst_33269 = (state_33305[(7)]);
var inst_33271 = (inst_33269 < cnt);
var state_33305__$1 = state_33305;
if(cljs.core.truth_(inst_33271)){
var statearr_33309_33336 = state_33305__$1;
(statearr_33309_33336[(1)] = (6));

} else {
var statearr_33310_33337 = state_33305__$1;
(statearr_33310_33337[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33306 === (15))){
var inst_33301 = (state_33305[(2)]);
var state_33305__$1 = state_33305;
var statearr_33311_33338 = state_33305__$1;
(statearr_33311_33338[(2)] = inst_33301);

(statearr_33311_33338[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33306 === (13))){
var inst_33294 = cljs.core.async.close_BANG_.call(null,out);
var state_33305__$1 = state_33305;
var statearr_33312_33339 = state_33305__$1;
(statearr_33312_33339[(2)] = inst_33294);

(statearr_33312_33339[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33306 === (6))){
var state_33305__$1 = state_33305;
var statearr_33313_33340 = state_33305__$1;
(statearr_33313_33340[(2)] = null);

(statearr_33313_33340[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33306 === (3))){
var inst_33303 = (state_33305[(2)]);
var state_33305__$1 = state_33305;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33305__$1,inst_33303);
} else {
if((state_val_33306 === (12))){
var inst_33291 = (state_33305[(8)]);
var inst_33291__$1 = (state_33305[(2)]);
var inst_33292 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_33291__$1);
var state_33305__$1 = (function (){var statearr_33314 = state_33305;
(statearr_33314[(8)] = inst_33291__$1);

return statearr_33314;
})();
if(cljs.core.truth_(inst_33292)){
var statearr_33315_33341 = state_33305__$1;
(statearr_33315_33341[(1)] = (13));

} else {
var statearr_33316_33342 = state_33305__$1;
(statearr_33316_33342[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33306 === (2))){
var inst_33268 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_33269 = (0);
var state_33305__$1 = (function (){var statearr_33317 = state_33305;
(statearr_33317[(7)] = inst_33269);

(statearr_33317[(9)] = inst_33268);

return statearr_33317;
})();
var statearr_33318_33343 = state_33305__$1;
(statearr_33318_33343[(2)] = null);

(statearr_33318_33343[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33306 === (11))){
var inst_33269 = (state_33305[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_33305,(10),Object,null,(9));
var inst_33278 = chs__$1.call(null,inst_33269);
var inst_33279 = done.call(null,inst_33269);
var inst_33280 = cljs.core.async.take_BANG_.call(null,inst_33278,inst_33279);
var state_33305__$1 = state_33305;
var statearr_33319_33344 = state_33305__$1;
(statearr_33319_33344[(2)] = inst_33280);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33305__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33306 === (9))){
var inst_33269 = (state_33305[(7)]);
var inst_33282 = (state_33305[(2)]);
var inst_33283 = (inst_33269 + (1));
var inst_33269__$1 = inst_33283;
var state_33305__$1 = (function (){var statearr_33320 = state_33305;
(statearr_33320[(7)] = inst_33269__$1);

(statearr_33320[(10)] = inst_33282);

return statearr_33320;
})();
var statearr_33321_33345 = state_33305__$1;
(statearr_33321_33345[(2)] = null);

(statearr_33321_33345[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33306 === (5))){
var inst_33289 = (state_33305[(2)]);
var state_33305__$1 = (function (){var statearr_33322 = state_33305;
(statearr_33322[(11)] = inst_33289);

return statearr_33322;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33305__$1,(12),dchan);
} else {
if((state_val_33306 === (14))){
var inst_33291 = (state_33305[(8)]);
var inst_33296 = cljs.core.apply.call(null,f,inst_33291);
var state_33305__$1 = state_33305;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33305__$1,(16),out,inst_33296);
} else {
if((state_val_33306 === (16))){
var inst_33298 = (state_33305[(2)]);
var state_33305__$1 = (function (){var statearr_33323 = state_33305;
(statearr_33323[(12)] = inst_33298);

return statearr_33323;
})();
var statearr_33324_33346 = state_33305__$1;
(statearr_33324_33346[(2)] = null);

(statearr_33324_33346[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33306 === (10))){
var inst_33273 = (state_33305[(2)]);
var inst_33274 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_33305__$1 = (function (){var statearr_33325 = state_33305;
(statearr_33325[(13)] = inst_33273);

return statearr_33325;
})();
var statearr_33326_33347 = state_33305__$1;
(statearr_33326_33347[(2)] = inst_33274);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33305__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33306 === (8))){
var inst_33287 = (state_33305[(2)]);
var state_33305__$1 = state_33305;
var statearr_33327_33348 = state_33305__$1;
(statearr_33327_33348[(2)] = inst_33287);

(statearr_33327_33348[(1)] = (5));


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
});
return (function() {
var cljs$core$async$state_machine__31888__auto__ = null;
var cljs$core$async$state_machine__31888__auto____0 = (function (){
var statearr_33328 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33328[(0)] = cljs$core$async$state_machine__31888__auto__);

(statearr_33328[(1)] = (1));

return statearr_33328;
});
var cljs$core$async$state_machine__31888__auto____1 = (function (state_33305){
while(true){
var ret_value__31889__auto__ = (function (){try{while(true){
var result__31890__auto__ = switch__31887__auto__.call(null,state_33305);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31890__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31890__auto__;
}
break;
}
}catch (e33329){if((e33329 instanceof Object)){
var ex__31891__auto__ = e33329;
var statearr_33330_33349 = state_33305;
(statearr_33330_33349[(5)] = ex__31891__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33305);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33329;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31889__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33350 = state_33305;
state_33305 = G__33350;
continue;
} else {
return ret_value__31889__auto__;
}
break;
}
});
cljs$core$async$state_machine__31888__auto__ = function(state_33305){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31888__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31888__auto____1.call(this,state_33305);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31888__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31888__auto____0;
cljs$core$async$state_machine__31888__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31888__auto____1;
return cljs$core$async$state_machine__31888__auto__;
})()
})();
var state__31984__auto__ = (function (){var statearr_33331 = f__31983__auto__.call(null);
(statearr_33331[(6)] = c__31982__auto___33333);

return statearr_33331;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31984__auto__);
}));


return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__33353 = arguments.length;
switch (G__33353) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__31982__auto___33407 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__31983__auto__ = (function (){var switch__31887__auto__ = (function (state_33385){
var state_val_33386 = (state_33385[(1)]);
if((state_val_33386 === (7))){
var inst_33364 = (state_33385[(7)]);
var inst_33365 = (state_33385[(8)]);
var inst_33364__$1 = (state_33385[(2)]);
var inst_33365__$1 = cljs.core.nth.call(null,inst_33364__$1,(0),null);
var inst_33366 = cljs.core.nth.call(null,inst_33364__$1,(1),null);
var inst_33367 = (inst_33365__$1 == null);
var state_33385__$1 = (function (){var statearr_33387 = state_33385;
(statearr_33387[(9)] = inst_33366);

(statearr_33387[(7)] = inst_33364__$1);

(statearr_33387[(8)] = inst_33365__$1);

return statearr_33387;
})();
if(cljs.core.truth_(inst_33367)){
var statearr_33388_33408 = state_33385__$1;
(statearr_33388_33408[(1)] = (8));

} else {
var statearr_33389_33409 = state_33385__$1;
(statearr_33389_33409[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33386 === (1))){
var inst_33354 = cljs.core.vec.call(null,chs);
var inst_33355 = inst_33354;
var state_33385__$1 = (function (){var statearr_33390 = state_33385;
(statearr_33390[(10)] = inst_33355);

return statearr_33390;
})();
var statearr_33391_33410 = state_33385__$1;
(statearr_33391_33410[(2)] = null);

(statearr_33391_33410[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33386 === (4))){
var inst_33355 = (state_33385[(10)]);
var state_33385__$1 = state_33385;
return cljs.core.async.ioc_alts_BANG_.call(null,state_33385__$1,(7),inst_33355);
} else {
if((state_val_33386 === (6))){
var inst_33381 = (state_33385[(2)]);
var state_33385__$1 = state_33385;
var statearr_33392_33411 = state_33385__$1;
(statearr_33392_33411[(2)] = inst_33381);

(statearr_33392_33411[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33386 === (3))){
var inst_33383 = (state_33385[(2)]);
var state_33385__$1 = state_33385;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33385__$1,inst_33383);
} else {
if((state_val_33386 === (2))){
var inst_33355 = (state_33385[(10)]);
var inst_33357 = cljs.core.count.call(null,inst_33355);
var inst_33358 = (inst_33357 > (0));
var state_33385__$1 = state_33385;
if(cljs.core.truth_(inst_33358)){
var statearr_33394_33412 = state_33385__$1;
(statearr_33394_33412[(1)] = (4));

} else {
var statearr_33395_33413 = state_33385__$1;
(statearr_33395_33413[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33386 === (11))){
var inst_33355 = (state_33385[(10)]);
var inst_33374 = (state_33385[(2)]);
var tmp33393 = inst_33355;
var inst_33355__$1 = tmp33393;
var state_33385__$1 = (function (){var statearr_33396 = state_33385;
(statearr_33396[(10)] = inst_33355__$1);

(statearr_33396[(11)] = inst_33374);

return statearr_33396;
})();
var statearr_33397_33414 = state_33385__$1;
(statearr_33397_33414[(2)] = null);

(statearr_33397_33414[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33386 === (9))){
var inst_33365 = (state_33385[(8)]);
var state_33385__$1 = state_33385;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33385__$1,(11),out,inst_33365);
} else {
if((state_val_33386 === (5))){
var inst_33379 = cljs.core.async.close_BANG_.call(null,out);
var state_33385__$1 = state_33385;
var statearr_33398_33415 = state_33385__$1;
(statearr_33398_33415[(2)] = inst_33379);

(statearr_33398_33415[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33386 === (10))){
var inst_33377 = (state_33385[(2)]);
var state_33385__$1 = state_33385;
var statearr_33399_33416 = state_33385__$1;
(statearr_33399_33416[(2)] = inst_33377);

(statearr_33399_33416[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33386 === (8))){
var inst_33366 = (state_33385[(9)]);
var inst_33364 = (state_33385[(7)]);
var inst_33355 = (state_33385[(10)]);
var inst_33365 = (state_33385[(8)]);
var inst_33369 = (function (){var cs = inst_33355;
var vec__33360 = inst_33364;
var v = inst_33365;
var c = inst_33366;
return (function (p1__33351_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__33351_SHARP_);
});
})();
var inst_33370 = cljs.core.filterv.call(null,inst_33369,inst_33355);
var inst_33355__$1 = inst_33370;
var state_33385__$1 = (function (){var statearr_33400 = state_33385;
(statearr_33400[(10)] = inst_33355__$1);

return statearr_33400;
})();
var statearr_33401_33417 = state_33385__$1;
(statearr_33401_33417[(2)] = null);

(statearr_33401_33417[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__31888__auto__ = null;
var cljs$core$async$state_machine__31888__auto____0 = (function (){
var statearr_33402 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33402[(0)] = cljs$core$async$state_machine__31888__auto__);

(statearr_33402[(1)] = (1));

return statearr_33402;
});
var cljs$core$async$state_machine__31888__auto____1 = (function (state_33385){
while(true){
var ret_value__31889__auto__ = (function (){try{while(true){
var result__31890__auto__ = switch__31887__auto__.call(null,state_33385);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31890__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31890__auto__;
}
break;
}
}catch (e33403){if((e33403 instanceof Object)){
var ex__31891__auto__ = e33403;
var statearr_33404_33418 = state_33385;
(statearr_33404_33418[(5)] = ex__31891__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33385);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33403;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31889__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33419 = state_33385;
state_33385 = G__33419;
continue;
} else {
return ret_value__31889__auto__;
}
break;
}
});
cljs$core$async$state_machine__31888__auto__ = function(state_33385){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31888__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31888__auto____1.call(this,state_33385);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31888__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31888__auto____0;
cljs$core$async$state_machine__31888__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31888__auto____1;
return cljs$core$async$state_machine__31888__auto__;
})()
})();
var state__31984__auto__ = (function (){var statearr_33405 = f__31983__auto__.call(null);
(statearr_33405[(6)] = c__31982__auto___33407);

return statearr_33405;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31984__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__33421 = arguments.length;
switch (G__33421) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__31982__auto___33466 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__31983__auto__ = (function (){var switch__31887__auto__ = (function (state_33445){
var state_val_33446 = (state_33445[(1)]);
if((state_val_33446 === (7))){
var inst_33427 = (state_33445[(7)]);
var inst_33427__$1 = (state_33445[(2)]);
var inst_33428 = (inst_33427__$1 == null);
var inst_33429 = cljs.core.not.call(null,inst_33428);
var state_33445__$1 = (function (){var statearr_33447 = state_33445;
(statearr_33447[(7)] = inst_33427__$1);

return statearr_33447;
})();
if(inst_33429){
var statearr_33448_33467 = state_33445__$1;
(statearr_33448_33467[(1)] = (8));

} else {
var statearr_33449_33468 = state_33445__$1;
(statearr_33449_33468[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33446 === (1))){
var inst_33422 = (0);
var state_33445__$1 = (function (){var statearr_33450 = state_33445;
(statearr_33450[(8)] = inst_33422);

return statearr_33450;
})();
var statearr_33451_33469 = state_33445__$1;
(statearr_33451_33469[(2)] = null);

(statearr_33451_33469[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33446 === (4))){
var state_33445__$1 = state_33445;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33445__$1,(7),ch);
} else {
if((state_val_33446 === (6))){
var inst_33440 = (state_33445[(2)]);
var state_33445__$1 = state_33445;
var statearr_33452_33470 = state_33445__$1;
(statearr_33452_33470[(2)] = inst_33440);

(statearr_33452_33470[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33446 === (3))){
var inst_33442 = (state_33445[(2)]);
var inst_33443 = cljs.core.async.close_BANG_.call(null,out);
var state_33445__$1 = (function (){var statearr_33453 = state_33445;
(statearr_33453[(9)] = inst_33442);

return statearr_33453;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33445__$1,inst_33443);
} else {
if((state_val_33446 === (2))){
var inst_33422 = (state_33445[(8)]);
var inst_33424 = (inst_33422 < n);
var state_33445__$1 = state_33445;
if(cljs.core.truth_(inst_33424)){
var statearr_33454_33471 = state_33445__$1;
(statearr_33454_33471[(1)] = (4));

} else {
var statearr_33455_33472 = state_33445__$1;
(statearr_33455_33472[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33446 === (11))){
var inst_33422 = (state_33445[(8)]);
var inst_33432 = (state_33445[(2)]);
var inst_33433 = (inst_33422 + (1));
var inst_33422__$1 = inst_33433;
var state_33445__$1 = (function (){var statearr_33456 = state_33445;
(statearr_33456[(8)] = inst_33422__$1);

(statearr_33456[(10)] = inst_33432);

return statearr_33456;
})();
var statearr_33457_33473 = state_33445__$1;
(statearr_33457_33473[(2)] = null);

(statearr_33457_33473[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33446 === (9))){
var state_33445__$1 = state_33445;
var statearr_33458_33474 = state_33445__$1;
(statearr_33458_33474[(2)] = null);

(statearr_33458_33474[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33446 === (5))){
var state_33445__$1 = state_33445;
var statearr_33459_33475 = state_33445__$1;
(statearr_33459_33475[(2)] = null);

(statearr_33459_33475[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33446 === (10))){
var inst_33437 = (state_33445[(2)]);
var state_33445__$1 = state_33445;
var statearr_33460_33476 = state_33445__$1;
(statearr_33460_33476[(2)] = inst_33437);

(statearr_33460_33476[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33446 === (8))){
var inst_33427 = (state_33445[(7)]);
var state_33445__$1 = state_33445;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33445__$1,(11),out,inst_33427);
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
});
return (function() {
var cljs$core$async$state_machine__31888__auto__ = null;
var cljs$core$async$state_machine__31888__auto____0 = (function (){
var statearr_33461 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33461[(0)] = cljs$core$async$state_machine__31888__auto__);

(statearr_33461[(1)] = (1));

return statearr_33461;
});
var cljs$core$async$state_machine__31888__auto____1 = (function (state_33445){
while(true){
var ret_value__31889__auto__ = (function (){try{while(true){
var result__31890__auto__ = switch__31887__auto__.call(null,state_33445);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31890__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31890__auto__;
}
break;
}
}catch (e33462){if((e33462 instanceof Object)){
var ex__31891__auto__ = e33462;
var statearr_33463_33477 = state_33445;
(statearr_33463_33477[(5)] = ex__31891__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33445);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33462;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31889__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33478 = state_33445;
state_33445 = G__33478;
continue;
} else {
return ret_value__31889__auto__;
}
break;
}
});
cljs$core$async$state_machine__31888__auto__ = function(state_33445){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31888__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31888__auto____1.call(this,state_33445);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31888__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31888__auto____0;
cljs$core$async$state_machine__31888__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31888__auto____1;
return cljs$core$async$state_machine__31888__auto__;
})()
})();
var state__31984__auto__ = (function (){var statearr_33464 = f__31983__auto__.call(null);
(statearr_33464[(6)] = c__31982__auto___33466);

return statearr_33464;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31984__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33480 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33480 = (function (f,ch,meta33481){
this.f = f;
this.ch = ch;
this.meta33481 = meta33481;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33480.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33482,meta33481__$1){
var self__ = this;
var _33482__$1 = this;
return (new cljs.core.async.t_cljs$core$async33480(self__.f,self__.ch,meta33481__$1));
}));

(cljs.core.async.t_cljs$core$async33480.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33482){
var self__ = this;
var _33482__$1 = this;
return self__.meta33481;
}));

(cljs.core.async.t_cljs$core$async33480.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33480.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async33480.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async33480.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33480.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33483 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33483 = (function (f,ch,meta33481,_,fn1,meta33484){
this.f = f;
this.ch = ch;
this.meta33481 = meta33481;
this._ = _;
this.fn1 = fn1;
this.meta33484 = meta33484;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33483.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33485,meta33484__$1){
var self__ = this;
var _33485__$1 = this;
return (new cljs.core.async.t_cljs$core$async33483(self__.f,self__.ch,self__.meta33481,self__._,self__.fn1,meta33484__$1));
}));

(cljs.core.async.t_cljs$core$async33483.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33485){
var self__ = this;
var _33485__$1 = this;
return self__.meta33484;
}));

(cljs.core.async.t_cljs$core$async33483.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33483.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
}));

(cljs.core.async.t_cljs$core$async33483.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async33483.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return (function (p1__33479_SHARP_){
return f1.call(null,(((p1__33479_SHARP_ == null))?null:self__.f.call(null,p1__33479_SHARP_)));
});
}));

(cljs.core.async.t_cljs$core$async33483.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33481","meta33481",1909387096,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async33480","cljs.core.async/t_cljs$core$async33480",-275865389,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta33484","meta33484",-2024025573,null)], null);
}));

(cljs.core.async.t_cljs$core$async33483.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33483.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33483");

(cljs.core.async.t_cljs$core$async33483.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async33483");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33483.
 */
cljs.core.async.__GT_t_cljs$core$async33483 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async33483(f__$1,ch__$1,meta33481__$1,___$2,fn1__$1,meta33484){
return (new cljs.core.async.t_cljs$core$async33483(f__$1,ch__$1,meta33481__$1,___$2,fn1__$1,meta33484));
});

}

return (new cljs.core.async.t_cljs$core$async33483(self__.f,self__.ch,self__.meta33481,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4115__auto__ = ret;
if(cljs.core.truth_(and__4115__auto__)){
return (!((cljs.core.deref.call(null,ret) == null)));
} else {
return and__4115__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async33480.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33480.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async33480.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33481","meta33481",1909387096,null)], null);
}));

(cljs.core.async.t_cljs$core$async33480.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33480.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33480");

(cljs.core.async.t_cljs$core$async33480.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async33480");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33480.
 */
cljs.core.async.__GT_t_cljs$core$async33480 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async33480(f__$1,ch__$1,meta33481){
return (new cljs.core.async.t_cljs$core$async33480(f__$1,ch__$1,meta33481));
});

}

return (new cljs.core.async.t_cljs$core$async33480(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33486 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33486 = (function (f,ch,meta33487){
this.f = f;
this.ch = ch;
this.meta33487 = meta33487;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33486.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33488,meta33487__$1){
var self__ = this;
var _33488__$1 = this;
return (new cljs.core.async.t_cljs$core$async33486(self__.f,self__.ch,meta33487__$1));
}));

(cljs.core.async.t_cljs$core$async33486.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33488){
var self__ = this;
var _33488__$1 = this;
return self__.meta33487;
}));

(cljs.core.async.t_cljs$core$async33486.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33486.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async33486.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33486.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async33486.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33486.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
}));

(cljs.core.async.t_cljs$core$async33486.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33487","meta33487",-1510508704,null)], null);
}));

(cljs.core.async.t_cljs$core$async33486.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33486.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33486");

(cljs.core.async.t_cljs$core$async33486.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async33486");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33486.
 */
cljs.core.async.__GT_t_cljs$core$async33486 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async33486(f__$1,ch__$1,meta33487){
return (new cljs.core.async.t_cljs$core$async33486(f__$1,ch__$1,meta33487));
});

}

return (new cljs.core.async.t_cljs$core$async33486(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33489 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33489 = (function (p,ch,meta33490){
this.p = p;
this.ch = ch;
this.meta33490 = meta33490;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33489.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33491,meta33490__$1){
var self__ = this;
var _33491__$1 = this;
return (new cljs.core.async.t_cljs$core$async33489(self__.p,self__.ch,meta33490__$1));
}));

(cljs.core.async.t_cljs$core$async33489.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33491){
var self__ = this;
var _33491__$1 = this;
return self__.meta33490;
}));

(cljs.core.async.t_cljs$core$async33489.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33489.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async33489.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async33489.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33489.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async33489.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33489.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async33489.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33490","meta33490",-1671501259,null)], null);
}));

(cljs.core.async.t_cljs$core$async33489.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33489.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33489");

(cljs.core.async.t_cljs$core$async33489.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async33489");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33489.
 */
cljs.core.async.__GT_t_cljs$core$async33489 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async33489(p__$1,ch__$1,meta33490){
return (new cljs.core.async.t_cljs$core$async33489(p__$1,ch__$1,meta33490));
});

}

return (new cljs.core.async.t_cljs$core$async33489(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__33493 = arguments.length;
switch (G__33493) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__31982__auto___33533 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__31983__auto__ = (function (){var switch__31887__auto__ = (function (state_33514){
var state_val_33515 = (state_33514[(1)]);
if((state_val_33515 === (7))){
var inst_33510 = (state_33514[(2)]);
var state_33514__$1 = state_33514;
var statearr_33516_33534 = state_33514__$1;
(statearr_33516_33534[(2)] = inst_33510);

(statearr_33516_33534[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33515 === (1))){
var state_33514__$1 = state_33514;
var statearr_33517_33535 = state_33514__$1;
(statearr_33517_33535[(2)] = null);

(statearr_33517_33535[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33515 === (4))){
var inst_33496 = (state_33514[(7)]);
var inst_33496__$1 = (state_33514[(2)]);
var inst_33497 = (inst_33496__$1 == null);
var state_33514__$1 = (function (){var statearr_33518 = state_33514;
(statearr_33518[(7)] = inst_33496__$1);

return statearr_33518;
})();
if(cljs.core.truth_(inst_33497)){
var statearr_33519_33536 = state_33514__$1;
(statearr_33519_33536[(1)] = (5));

} else {
var statearr_33520_33537 = state_33514__$1;
(statearr_33520_33537[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33515 === (6))){
var inst_33496 = (state_33514[(7)]);
var inst_33501 = p.call(null,inst_33496);
var state_33514__$1 = state_33514;
if(cljs.core.truth_(inst_33501)){
var statearr_33521_33538 = state_33514__$1;
(statearr_33521_33538[(1)] = (8));

} else {
var statearr_33522_33539 = state_33514__$1;
(statearr_33522_33539[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33515 === (3))){
var inst_33512 = (state_33514[(2)]);
var state_33514__$1 = state_33514;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33514__$1,inst_33512);
} else {
if((state_val_33515 === (2))){
var state_33514__$1 = state_33514;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33514__$1,(4),ch);
} else {
if((state_val_33515 === (11))){
var inst_33504 = (state_33514[(2)]);
var state_33514__$1 = state_33514;
var statearr_33523_33540 = state_33514__$1;
(statearr_33523_33540[(2)] = inst_33504);

(statearr_33523_33540[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33515 === (9))){
var state_33514__$1 = state_33514;
var statearr_33524_33541 = state_33514__$1;
(statearr_33524_33541[(2)] = null);

(statearr_33524_33541[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33515 === (5))){
var inst_33499 = cljs.core.async.close_BANG_.call(null,out);
var state_33514__$1 = state_33514;
var statearr_33525_33542 = state_33514__$1;
(statearr_33525_33542[(2)] = inst_33499);

(statearr_33525_33542[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33515 === (10))){
var inst_33507 = (state_33514[(2)]);
var state_33514__$1 = (function (){var statearr_33526 = state_33514;
(statearr_33526[(8)] = inst_33507);

return statearr_33526;
})();
var statearr_33527_33543 = state_33514__$1;
(statearr_33527_33543[(2)] = null);

(statearr_33527_33543[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33515 === (8))){
var inst_33496 = (state_33514[(7)]);
var state_33514__$1 = state_33514;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33514__$1,(11),out,inst_33496);
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
});
return (function() {
var cljs$core$async$state_machine__31888__auto__ = null;
var cljs$core$async$state_machine__31888__auto____0 = (function (){
var statearr_33528 = [null,null,null,null,null,null,null,null,null];
(statearr_33528[(0)] = cljs$core$async$state_machine__31888__auto__);

(statearr_33528[(1)] = (1));

return statearr_33528;
});
var cljs$core$async$state_machine__31888__auto____1 = (function (state_33514){
while(true){
var ret_value__31889__auto__ = (function (){try{while(true){
var result__31890__auto__ = switch__31887__auto__.call(null,state_33514);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31890__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31890__auto__;
}
break;
}
}catch (e33529){if((e33529 instanceof Object)){
var ex__31891__auto__ = e33529;
var statearr_33530_33544 = state_33514;
(statearr_33530_33544[(5)] = ex__31891__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33514);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33529;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31889__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33545 = state_33514;
state_33514 = G__33545;
continue;
} else {
return ret_value__31889__auto__;
}
break;
}
});
cljs$core$async$state_machine__31888__auto__ = function(state_33514){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31888__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31888__auto____1.call(this,state_33514);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31888__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31888__auto____0;
cljs$core$async$state_machine__31888__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31888__auto____1;
return cljs$core$async$state_machine__31888__auto__;
})()
})();
var state__31984__auto__ = (function (){var statearr_33531 = f__31983__auto__.call(null);
(statearr_33531[(6)] = c__31982__auto___33533);

return statearr_33531;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31984__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__33547 = arguments.length;
switch (G__33547) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__31982__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__31983__auto__ = (function (){var switch__31887__auto__ = (function (state_33610){
var state_val_33611 = (state_33610[(1)]);
if((state_val_33611 === (7))){
var inst_33606 = (state_33610[(2)]);
var state_33610__$1 = state_33610;
var statearr_33612_33650 = state_33610__$1;
(statearr_33612_33650[(2)] = inst_33606);

(statearr_33612_33650[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33611 === (20))){
var inst_33576 = (state_33610[(7)]);
var inst_33587 = (state_33610[(2)]);
var inst_33588 = cljs.core.next.call(null,inst_33576);
var inst_33562 = inst_33588;
var inst_33563 = null;
var inst_33564 = (0);
var inst_33565 = (0);
var state_33610__$1 = (function (){var statearr_33613 = state_33610;
(statearr_33613[(8)] = inst_33563);

(statearr_33613[(9)] = inst_33587);

(statearr_33613[(10)] = inst_33564);

(statearr_33613[(11)] = inst_33565);

(statearr_33613[(12)] = inst_33562);

return statearr_33613;
})();
var statearr_33614_33651 = state_33610__$1;
(statearr_33614_33651[(2)] = null);

(statearr_33614_33651[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33611 === (1))){
var state_33610__$1 = state_33610;
var statearr_33615_33652 = state_33610__$1;
(statearr_33615_33652[(2)] = null);

(statearr_33615_33652[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33611 === (4))){
var inst_33551 = (state_33610[(13)]);
var inst_33551__$1 = (state_33610[(2)]);
var inst_33552 = (inst_33551__$1 == null);
var state_33610__$1 = (function (){var statearr_33616 = state_33610;
(statearr_33616[(13)] = inst_33551__$1);

return statearr_33616;
})();
if(cljs.core.truth_(inst_33552)){
var statearr_33617_33653 = state_33610__$1;
(statearr_33617_33653[(1)] = (5));

} else {
var statearr_33618_33654 = state_33610__$1;
(statearr_33618_33654[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33611 === (15))){
var state_33610__$1 = state_33610;
var statearr_33622_33655 = state_33610__$1;
(statearr_33622_33655[(2)] = null);

(statearr_33622_33655[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33611 === (21))){
var state_33610__$1 = state_33610;
var statearr_33623_33656 = state_33610__$1;
(statearr_33623_33656[(2)] = null);

(statearr_33623_33656[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33611 === (13))){
var inst_33563 = (state_33610[(8)]);
var inst_33564 = (state_33610[(10)]);
var inst_33565 = (state_33610[(11)]);
var inst_33562 = (state_33610[(12)]);
var inst_33572 = (state_33610[(2)]);
var inst_33573 = (inst_33565 + (1));
var tmp33619 = inst_33563;
var tmp33620 = inst_33564;
var tmp33621 = inst_33562;
var inst_33562__$1 = tmp33621;
var inst_33563__$1 = tmp33619;
var inst_33564__$1 = tmp33620;
var inst_33565__$1 = inst_33573;
var state_33610__$1 = (function (){var statearr_33624 = state_33610;
(statearr_33624[(8)] = inst_33563__$1);

(statearr_33624[(14)] = inst_33572);

(statearr_33624[(10)] = inst_33564__$1);

(statearr_33624[(11)] = inst_33565__$1);

(statearr_33624[(12)] = inst_33562__$1);

return statearr_33624;
})();
var statearr_33625_33657 = state_33610__$1;
(statearr_33625_33657[(2)] = null);

(statearr_33625_33657[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33611 === (22))){
var state_33610__$1 = state_33610;
var statearr_33626_33658 = state_33610__$1;
(statearr_33626_33658[(2)] = null);

(statearr_33626_33658[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33611 === (6))){
var inst_33551 = (state_33610[(13)]);
var inst_33560 = f.call(null,inst_33551);
var inst_33561 = cljs.core.seq.call(null,inst_33560);
var inst_33562 = inst_33561;
var inst_33563 = null;
var inst_33564 = (0);
var inst_33565 = (0);
var state_33610__$1 = (function (){var statearr_33627 = state_33610;
(statearr_33627[(8)] = inst_33563);

(statearr_33627[(10)] = inst_33564);

(statearr_33627[(11)] = inst_33565);

(statearr_33627[(12)] = inst_33562);

return statearr_33627;
})();
var statearr_33628_33659 = state_33610__$1;
(statearr_33628_33659[(2)] = null);

(statearr_33628_33659[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33611 === (17))){
var inst_33576 = (state_33610[(7)]);
var inst_33580 = cljs.core.chunk_first.call(null,inst_33576);
var inst_33581 = cljs.core.chunk_rest.call(null,inst_33576);
var inst_33582 = cljs.core.count.call(null,inst_33580);
var inst_33562 = inst_33581;
var inst_33563 = inst_33580;
var inst_33564 = inst_33582;
var inst_33565 = (0);
var state_33610__$1 = (function (){var statearr_33629 = state_33610;
(statearr_33629[(8)] = inst_33563);

(statearr_33629[(10)] = inst_33564);

(statearr_33629[(11)] = inst_33565);

(statearr_33629[(12)] = inst_33562);

return statearr_33629;
})();
var statearr_33630_33660 = state_33610__$1;
(statearr_33630_33660[(2)] = null);

(statearr_33630_33660[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33611 === (3))){
var inst_33608 = (state_33610[(2)]);
var state_33610__$1 = state_33610;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33610__$1,inst_33608);
} else {
if((state_val_33611 === (12))){
var inst_33596 = (state_33610[(2)]);
var state_33610__$1 = state_33610;
var statearr_33631_33661 = state_33610__$1;
(statearr_33631_33661[(2)] = inst_33596);

(statearr_33631_33661[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33611 === (2))){
var state_33610__$1 = state_33610;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33610__$1,(4),in$);
} else {
if((state_val_33611 === (23))){
var inst_33604 = (state_33610[(2)]);
var state_33610__$1 = state_33610;
var statearr_33632_33662 = state_33610__$1;
(statearr_33632_33662[(2)] = inst_33604);

(statearr_33632_33662[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33611 === (19))){
var inst_33591 = (state_33610[(2)]);
var state_33610__$1 = state_33610;
var statearr_33633_33663 = state_33610__$1;
(statearr_33633_33663[(2)] = inst_33591);

(statearr_33633_33663[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33611 === (11))){
var inst_33576 = (state_33610[(7)]);
var inst_33562 = (state_33610[(12)]);
var inst_33576__$1 = cljs.core.seq.call(null,inst_33562);
var state_33610__$1 = (function (){var statearr_33634 = state_33610;
(statearr_33634[(7)] = inst_33576__$1);

return statearr_33634;
})();
if(inst_33576__$1){
var statearr_33635_33664 = state_33610__$1;
(statearr_33635_33664[(1)] = (14));

} else {
var statearr_33636_33665 = state_33610__$1;
(statearr_33636_33665[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33611 === (9))){
var inst_33598 = (state_33610[(2)]);
var inst_33599 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_33610__$1 = (function (){var statearr_33637 = state_33610;
(statearr_33637[(15)] = inst_33598);

return statearr_33637;
})();
if(cljs.core.truth_(inst_33599)){
var statearr_33638_33666 = state_33610__$1;
(statearr_33638_33666[(1)] = (21));

} else {
var statearr_33639_33667 = state_33610__$1;
(statearr_33639_33667[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33611 === (5))){
var inst_33554 = cljs.core.async.close_BANG_.call(null,out);
var state_33610__$1 = state_33610;
var statearr_33640_33668 = state_33610__$1;
(statearr_33640_33668[(2)] = inst_33554);

(statearr_33640_33668[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33611 === (14))){
var inst_33576 = (state_33610[(7)]);
var inst_33578 = cljs.core.chunked_seq_QMARK_.call(null,inst_33576);
var state_33610__$1 = state_33610;
if(inst_33578){
var statearr_33641_33669 = state_33610__$1;
(statearr_33641_33669[(1)] = (17));

} else {
var statearr_33642_33670 = state_33610__$1;
(statearr_33642_33670[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33611 === (16))){
var inst_33594 = (state_33610[(2)]);
var state_33610__$1 = state_33610;
var statearr_33643_33671 = state_33610__$1;
(statearr_33643_33671[(2)] = inst_33594);

(statearr_33643_33671[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33611 === (10))){
var inst_33563 = (state_33610[(8)]);
var inst_33565 = (state_33610[(11)]);
var inst_33570 = cljs.core._nth.call(null,inst_33563,inst_33565);
var state_33610__$1 = state_33610;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33610__$1,(13),out,inst_33570);
} else {
if((state_val_33611 === (18))){
var inst_33576 = (state_33610[(7)]);
var inst_33585 = cljs.core.first.call(null,inst_33576);
var state_33610__$1 = state_33610;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33610__$1,(20),out,inst_33585);
} else {
if((state_val_33611 === (8))){
var inst_33564 = (state_33610[(10)]);
var inst_33565 = (state_33610[(11)]);
var inst_33567 = (inst_33565 < inst_33564);
var inst_33568 = inst_33567;
var state_33610__$1 = state_33610;
if(cljs.core.truth_(inst_33568)){
var statearr_33644_33672 = state_33610__$1;
(statearr_33644_33672[(1)] = (10));

} else {
var statearr_33645_33673 = state_33610__$1;
(statearr_33645_33673[(1)] = (11));

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
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__31888__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__31888__auto____0 = (function (){
var statearr_33646 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33646[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__31888__auto__);

(statearr_33646[(1)] = (1));

return statearr_33646;
});
var cljs$core$async$mapcat_STAR__$_state_machine__31888__auto____1 = (function (state_33610){
while(true){
var ret_value__31889__auto__ = (function (){try{while(true){
var result__31890__auto__ = switch__31887__auto__.call(null,state_33610);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31890__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31890__auto__;
}
break;
}
}catch (e33647){if((e33647 instanceof Object)){
var ex__31891__auto__ = e33647;
var statearr_33648_33674 = state_33610;
(statearr_33648_33674[(5)] = ex__31891__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33610);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33647;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31889__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33675 = state_33610;
state_33610 = G__33675;
continue;
} else {
return ret_value__31889__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__31888__auto__ = function(state_33610){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__31888__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__31888__auto____1.call(this,state_33610);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__31888__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__31888__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__31888__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__31888__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__31888__auto__;
})()
})();
var state__31984__auto__ = (function (){var statearr_33649 = f__31983__auto__.call(null);
(statearr_33649[(6)] = c__31982__auto__);

return statearr_33649;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31984__auto__);
}));

return c__31982__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__33677 = arguments.length;
switch (G__33677) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__33680 = arguments.length;
switch (G__33680) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__33683 = arguments.length;
switch (G__33683) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__31982__auto___33730 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__31983__auto__ = (function (){var switch__31887__auto__ = (function (state_33707){
var state_val_33708 = (state_33707[(1)]);
if((state_val_33708 === (7))){
var inst_33702 = (state_33707[(2)]);
var state_33707__$1 = state_33707;
var statearr_33709_33731 = state_33707__$1;
(statearr_33709_33731[(2)] = inst_33702);

(statearr_33709_33731[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33708 === (1))){
var inst_33684 = null;
var state_33707__$1 = (function (){var statearr_33710 = state_33707;
(statearr_33710[(7)] = inst_33684);

return statearr_33710;
})();
var statearr_33711_33732 = state_33707__$1;
(statearr_33711_33732[(2)] = null);

(statearr_33711_33732[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33708 === (4))){
var inst_33687 = (state_33707[(8)]);
var inst_33687__$1 = (state_33707[(2)]);
var inst_33688 = (inst_33687__$1 == null);
var inst_33689 = cljs.core.not.call(null,inst_33688);
var state_33707__$1 = (function (){var statearr_33712 = state_33707;
(statearr_33712[(8)] = inst_33687__$1);

return statearr_33712;
})();
if(inst_33689){
var statearr_33713_33733 = state_33707__$1;
(statearr_33713_33733[(1)] = (5));

} else {
var statearr_33714_33734 = state_33707__$1;
(statearr_33714_33734[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33708 === (6))){
var state_33707__$1 = state_33707;
var statearr_33715_33735 = state_33707__$1;
(statearr_33715_33735[(2)] = null);

(statearr_33715_33735[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33708 === (3))){
var inst_33704 = (state_33707[(2)]);
var inst_33705 = cljs.core.async.close_BANG_.call(null,out);
var state_33707__$1 = (function (){var statearr_33716 = state_33707;
(statearr_33716[(9)] = inst_33704);

return statearr_33716;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33707__$1,inst_33705);
} else {
if((state_val_33708 === (2))){
var state_33707__$1 = state_33707;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33707__$1,(4),ch);
} else {
if((state_val_33708 === (11))){
var inst_33687 = (state_33707[(8)]);
var inst_33696 = (state_33707[(2)]);
var inst_33684 = inst_33687;
var state_33707__$1 = (function (){var statearr_33717 = state_33707;
(statearr_33717[(10)] = inst_33696);

(statearr_33717[(7)] = inst_33684);

return statearr_33717;
})();
var statearr_33718_33736 = state_33707__$1;
(statearr_33718_33736[(2)] = null);

(statearr_33718_33736[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33708 === (9))){
var inst_33687 = (state_33707[(8)]);
var state_33707__$1 = state_33707;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33707__$1,(11),out,inst_33687);
} else {
if((state_val_33708 === (5))){
var inst_33687 = (state_33707[(8)]);
var inst_33684 = (state_33707[(7)]);
var inst_33691 = cljs.core._EQ_.call(null,inst_33687,inst_33684);
var state_33707__$1 = state_33707;
if(inst_33691){
var statearr_33720_33737 = state_33707__$1;
(statearr_33720_33737[(1)] = (8));

} else {
var statearr_33721_33738 = state_33707__$1;
(statearr_33721_33738[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33708 === (10))){
var inst_33699 = (state_33707[(2)]);
var state_33707__$1 = state_33707;
var statearr_33722_33739 = state_33707__$1;
(statearr_33722_33739[(2)] = inst_33699);

(statearr_33722_33739[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33708 === (8))){
var inst_33684 = (state_33707[(7)]);
var tmp33719 = inst_33684;
var inst_33684__$1 = tmp33719;
var state_33707__$1 = (function (){var statearr_33723 = state_33707;
(statearr_33723[(7)] = inst_33684__$1);

return statearr_33723;
})();
var statearr_33724_33740 = state_33707__$1;
(statearr_33724_33740[(2)] = null);

(statearr_33724_33740[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__31888__auto__ = null;
var cljs$core$async$state_machine__31888__auto____0 = (function (){
var statearr_33725 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33725[(0)] = cljs$core$async$state_machine__31888__auto__);

(statearr_33725[(1)] = (1));

return statearr_33725;
});
var cljs$core$async$state_machine__31888__auto____1 = (function (state_33707){
while(true){
var ret_value__31889__auto__ = (function (){try{while(true){
var result__31890__auto__ = switch__31887__auto__.call(null,state_33707);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31890__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31890__auto__;
}
break;
}
}catch (e33726){if((e33726 instanceof Object)){
var ex__31891__auto__ = e33726;
var statearr_33727_33741 = state_33707;
(statearr_33727_33741[(5)] = ex__31891__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33707);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33726;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31889__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33742 = state_33707;
state_33707 = G__33742;
continue;
} else {
return ret_value__31889__auto__;
}
break;
}
});
cljs$core$async$state_machine__31888__auto__ = function(state_33707){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31888__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31888__auto____1.call(this,state_33707);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31888__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31888__auto____0;
cljs$core$async$state_machine__31888__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31888__auto____1;
return cljs$core$async$state_machine__31888__auto__;
})()
})();
var state__31984__auto__ = (function (){var statearr_33728 = f__31983__auto__.call(null);
(statearr_33728[(6)] = c__31982__auto___33730);

return statearr_33728;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31984__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__33744 = arguments.length;
switch (G__33744) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__31982__auto___33810 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__31983__auto__ = (function (){var switch__31887__auto__ = (function (state_33782){
var state_val_33783 = (state_33782[(1)]);
if((state_val_33783 === (7))){
var inst_33778 = (state_33782[(2)]);
var state_33782__$1 = state_33782;
var statearr_33784_33811 = state_33782__$1;
(statearr_33784_33811[(2)] = inst_33778);

(statearr_33784_33811[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33783 === (1))){
var inst_33745 = (new Array(n));
var inst_33746 = inst_33745;
var inst_33747 = (0);
var state_33782__$1 = (function (){var statearr_33785 = state_33782;
(statearr_33785[(7)] = inst_33746);

(statearr_33785[(8)] = inst_33747);

return statearr_33785;
})();
var statearr_33786_33812 = state_33782__$1;
(statearr_33786_33812[(2)] = null);

(statearr_33786_33812[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33783 === (4))){
var inst_33750 = (state_33782[(9)]);
var inst_33750__$1 = (state_33782[(2)]);
var inst_33751 = (inst_33750__$1 == null);
var inst_33752 = cljs.core.not.call(null,inst_33751);
var state_33782__$1 = (function (){var statearr_33787 = state_33782;
(statearr_33787[(9)] = inst_33750__$1);

return statearr_33787;
})();
if(inst_33752){
var statearr_33788_33813 = state_33782__$1;
(statearr_33788_33813[(1)] = (5));

} else {
var statearr_33789_33814 = state_33782__$1;
(statearr_33789_33814[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33783 === (15))){
var inst_33772 = (state_33782[(2)]);
var state_33782__$1 = state_33782;
var statearr_33790_33815 = state_33782__$1;
(statearr_33790_33815[(2)] = inst_33772);

(statearr_33790_33815[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33783 === (13))){
var state_33782__$1 = state_33782;
var statearr_33791_33816 = state_33782__$1;
(statearr_33791_33816[(2)] = null);

(statearr_33791_33816[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33783 === (6))){
var inst_33747 = (state_33782[(8)]);
var inst_33768 = (inst_33747 > (0));
var state_33782__$1 = state_33782;
if(cljs.core.truth_(inst_33768)){
var statearr_33792_33817 = state_33782__$1;
(statearr_33792_33817[(1)] = (12));

} else {
var statearr_33793_33818 = state_33782__$1;
(statearr_33793_33818[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33783 === (3))){
var inst_33780 = (state_33782[(2)]);
var state_33782__$1 = state_33782;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33782__$1,inst_33780);
} else {
if((state_val_33783 === (12))){
var inst_33746 = (state_33782[(7)]);
var inst_33770 = cljs.core.vec.call(null,inst_33746);
var state_33782__$1 = state_33782;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33782__$1,(15),out,inst_33770);
} else {
if((state_val_33783 === (2))){
var state_33782__$1 = state_33782;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33782__$1,(4),ch);
} else {
if((state_val_33783 === (11))){
var inst_33762 = (state_33782[(2)]);
var inst_33763 = (new Array(n));
var inst_33746 = inst_33763;
var inst_33747 = (0);
var state_33782__$1 = (function (){var statearr_33794 = state_33782;
(statearr_33794[(10)] = inst_33762);

(statearr_33794[(7)] = inst_33746);

(statearr_33794[(8)] = inst_33747);

return statearr_33794;
})();
var statearr_33795_33819 = state_33782__$1;
(statearr_33795_33819[(2)] = null);

(statearr_33795_33819[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33783 === (9))){
var inst_33746 = (state_33782[(7)]);
var inst_33760 = cljs.core.vec.call(null,inst_33746);
var state_33782__$1 = state_33782;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33782__$1,(11),out,inst_33760);
} else {
if((state_val_33783 === (5))){
var inst_33750 = (state_33782[(9)]);
var inst_33746 = (state_33782[(7)]);
var inst_33755 = (state_33782[(11)]);
var inst_33747 = (state_33782[(8)]);
var inst_33754 = (inst_33746[inst_33747] = inst_33750);
var inst_33755__$1 = (inst_33747 + (1));
var inst_33756 = (inst_33755__$1 < n);
var state_33782__$1 = (function (){var statearr_33796 = state_33782;
(statearr_33796[(12)] = inst_33754);

(statearr_33796[(11)] = inst_33755__$1);

return statearr_33796;
})();
if(cljs.core.truth_(inst_33756)){
var statearr_33797_33820 = state_33782__$1;
(statearr_33797_33820[(1)] = (8));

} else {
var statearr_33798_33821 = state_33782__$1;
(statearr_33798_33821[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33783 === (14))){
var inst_33775 = (state_33782[(2)]);
var inst_33776 = cljs.core.async.close_BANG_.call(null,out);
var state_33782__$1 = (function (){var statearr_33800 = state_33782;
(statearr_33800[(13)] = inst_33775);

return statearr_33800;
})();
var statearr_33801_33822 = state_33782__$1;
(statearr_33801_33822[(2)] = inst_33776);

(statearr_33801_33822[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33783 === (10))){
var inst_33766 = (state_33782[(2)]);
var state_33782__$1 = state_33782;
var statearr_33802_33823 = state_33782__$1;
(statearr_33802_33823[(2)] = inst_33766);

(statearr_33802_33823[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33783 === (8))){
var inst_33746 = (state_33782[(7)]);
var inst_33755 = (state_33782[(11)]);
var tmp33799 = inst_33746;
var inst_33746__$1 = tmp33799;
var inst_33747 = inst_33755;
var state_33782__$1 = (function (){var statearr_33803 = state_33782;
(statearr_33803[(7)] = inst_33746__$1);

(statearr_33803[(8)] = inst_33747);

return statearr_33803;
})();
var statearr_33804_33824 = state_33782__$1;
(statearr_33804_33824[(2)] = null);

(statearr_33804_33824[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__31888__auto__ = null;
var cljs$core$async$state_machine__31888__auto____0 = (function (){
var statearr_33805 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33805[(0)] = cljs$core$async$state_machine__31888__auto__);

(statearr_33805[(1)] = (1));

return statearr_33805;
});
var cljs$core$async$state_machine__31888__auto____1 = (function (state_33782){
while(true){
var ret_value__31889__auto__ = (function (){try{while(true){
var result__31890__auto__ = switch__31887__auto__.call(null,state_33782);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31890__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31890__auto__;
}
break;
}
}catch (e33806){if((e33806 instanceof Object)){
var ex__31891__auto__ = e33806;
var statearr_33807_33825 = state_33782;
(statearr_33807_33825[(5)] = ex__31891__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33782);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33806;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31889__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33826 = state_33782;
state_33782 = G__33826;
continue;
} else {
return ret_value__31889__auto__;
}
break;
}
});
cljs$core$async$state_machine__31888__auto__ = function(state_33782){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31888__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31888__auto____1.call(this,state_33782);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31888__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31888__auto____0;
cljs$core$async$state_machine__31888__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31888__auto____1;
return cljs$core$async$state_machine__31888__auto__;
})()
})();
var state__31984__auto__ = (function (){var statearr_33808 = f__31983__auto__.call(null);
(statearr_33808[(6)] = c__31982__auto___33810);

return statearr_33808;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31984__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__33828 = arguments.length;
switch (G__33828) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__31982__auto___33898 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__31983__auto__ = (function (){var switch__31887__auto__ = (function (state_33870){
var state_val_33871 = (state_33870[(1)]);
if((state_val_33871 === (7))){
var inst_33866 = (state_33870[(2)]);
var state_33870__$1 = state_33870;
var statearr_33872_33899 = state_33870__$1;
(statearr_33872_33899[(2)] = inst_33866);

(statearr_33872_33899[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33871 === (1))){
var inst_33829 = [];
var inst_33830 = inst_33829;
var inst_33831 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_33870__$1 = (function (){var statearr_33873 = state_33870;
(statearr_33873[(7)] = inst_33830);

(statearr_33873[(8)] = inst_33831);

return statearr_33873;
})();
var statearr_33874_33900 = state_33870__$1;
(statearr_33874_33900[(2)] = null);

(statearr_33874_33900[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33871 === (4))){
var inst_33834 = (state_33870[(9)]);
var inst_33834__$1 = (state_33870[(2)]);
var inst_33835 = (inst_33834__$1 == null);
var inst_33836 = cljs.core.not.call(null,inst_33835);
var state_33870__$1 = (function (){var statearr_33875 = state_33870;
(statearr_33875[(9)] = inst_33834__$1);

return statearr_33875;
})();
if(inst_33836){
var statearr_33876_33901 = state_33870__$1;
(statearr_33876_33901[(1)] = (5));

} else {
var statearr_33877_33902 = state_33870__$1;
(statearr_33877_33902[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33871 === (15))){
var inst_33860 = (state_33870[(2)]);
var state_33870__$1 = state_33870;
var statearr_33878_33903 = state_33870__$1;
(statearr_33878_33903[(2)] = inst_33860);

(statearr_33878_33903[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33871 === (13))){
var state_33870__$1 = state_33870;
var statearr_33879_33904 = state_33870__$1;
(statearr_33879_33904[(2)] = null);

(statearr_33879_33904[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33871 === (6))){
var inst_33830 = (state_33870[(7)]);
var inst_33855 = inst_33830.length;
var inst_33856 = (inst_33855 > (0));
var state_33870__$1 = state_33870;
if(cljs.core.truth_(inst_33856)){
var statearr_33880_33905 = state_33870__$1;
(statearr_33880_33905[(1)] = (12));

} else {
var statearr_33881_33906 = state_33870__$1;
(statearr_33881_33906[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33871 === (3))){
var inst_33868 = (state_33870[(2)]);
var state_33870__$1 = state_33870;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33870__$1,inst_33868);
} else {
if((state_val_33871 === (12))){
var inst_33830 = (state_33870[(7)]);
var inst_33858 = cljs.core.vec.call(null,inst_33830);
var state_33870__$1 = state_33870;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33870__$1,(15),out,inst_33858);
} else {
if((state_val_33871 === (2))){
var state_33870__$1 = state_33870;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33870__$1,(4),ch);
} else {
if((state_val_33871 === (11))){
var inst_33834 = (state_33870[(9)]);
var inst_33838 = (state_33870[(10)]);
var inst_33848 = (state_33870[(2)]);
var inst_33849 = [];
var inst_33850 = inst_33849.push(inst_33834);
var inst_33830 = inst_33849;
var inst_33831 = inst_33838;
var state_33870__$1 = (function (){var statearr_33882 = state_33870;
(statearr_33882[(7)] = inst_33830);

(statearr_33882[(8)] = inst_33831);

(statearr_33882[(11)] = inst_33850);

(statearr_33882[(12)] = inst_33848);

return statearr_33882;
})();
var statearr_33883_33907 = state_33870__$1;
(statearr_33883_33907[(2)] = null);

(statearr_33883_33907[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33871 === (9))){
var inst_33830 = (state_33870[(7)]);
var inst_33846 = cljs.core.vec.call(null,inst_33830);
var state_33870__$1 = state_33870;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33870__$1,(11),out,inst_33846);
} else {
if((state_val_33871 === (5))){
var inst_33831 = (state_33870[(8)]);
var inst_33834 = (state_33870[(9)]);
var inst_33838 = (state_33870[(10)]);
var inst_33838__$1 = f.call(null,inst_33834);
var inst_33839 = cljs.core._EQ_.call(null,inst_33838__$1,inst_33831);
var inst_33840 = cljs.core.keyword_identical_QMARK_.call(null,inst_33831,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_33841 = ((inst_33839) || (inst_33840));
var state_33870__$1 = (function (){var statearr_33884 = state_33870;
(statearr_33884[(10)] = inst_33838__$1);

return statearr_33884;
})();
if(cljs.core.truth_(inst_33841)){
var statearr_33885_33908 = state_33870__$1;
(statearr_33885_33908[(1)] = (8));

} else {
var statearr_33886_33909 = state_33870__$1;
(statearr_33886_33909[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33871 === (14))){
var inst_33863 = (state_33870[(2)]);
var inst_33864 = cljs.core.async.close_BANG_.call(null,out);
var state_33870__$1 = (function (){var statearr_33888 = state_33870;
(statearr_33888[(13)] = inst_33863);

return statearr_33888;
})();
var statearr_33889_33910 = state_33870__$1;
(statearr_33889_33910[(2)] = inst_33864);

(statearr_33889_33910[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33871 === (10))){
var inst_33853 = (state_33870[(2)]);
var state_33870__$1 = state_33870;
var statearr_33890_33911 = state_33870__$1;
(statearr_33890_33911[(2)] = inst_33853);

(statearr_33890_33911[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33871 === (8))){
var inst_33830 = (state_33870[(7)]);
var inst_33834 = (state_33870[(9)]);
var inst_33838 = (state_33870[(10)]);
var inst_33843 = inst_33830.push(inst_33834);
var tmp33887 = inst_33830;
var inst_33830__$1 = tmp33887;
var inst_33831 = inst_33838;
var state_33870__$1 = (function (){var statearr_33891 = state_33870;
(statearr_33891[(7)] = inst_33830__$1);

(statearr_33891[(8)] = inst_33831);

(statearr_33891[(14)] = inst_33843);

return statearr_33891;
})();
var statearr_33892_33912 = state_33870__$1;
(statearr_33892_33912[(2)] = null);

(statearr_33892_33912[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__31888__auto__ = null;
var cljs$core$async$state_machine__31888__auto____0 = (function (){
var statearr_33893 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33893[(0)] = cljs$core$async$state_machine__31888__auto__);

(statearr_33893[(1)] = (1));

return statearr_33893;
});
var cljs$core$async$state_machine__31888__auto____1 = (function (state_33870){
while(true){
var ret_value__31889__auto__ = (function (){try{while(true){
var result__31890__auto__ = switch__31887__auto__.call(null,state_33870);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31890__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31890__auto__;
}
break;
}
}catch (e33894){if((e33894 instanceof Object)){
var ex__31891__auto__ = e33894;
var statearr_33895_33913 = state_33870;
(statearr_33895_33913[(5)] = ex__31891__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33870);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33894;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31889__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33914 = state_33870;
state_33870 = G__33914;
continue;
} else {
return ret_value__31889__auto__;
}
break;
}
});
cljs$core$async$state_machine__31888__auto__ = function(state_33870){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31888__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31888__auto____1.call(this,state_33870);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31888__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31888__auto____0;
cljs$core$async$state_machine__31888__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31888__auto____1;
return cljs$core$async$state_machine__31888__auto__;
})()
})();
var state__31984__auto__ = (function (){var statearr_33896 = f__31983__auto__.call(null);
(statearr_33896[(6)] = c__31982__auto___33898);

return statearr_33896;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31984__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=async.js.map?rel=1683240957704
