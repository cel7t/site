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
var G__26515 = arguments.length;
switch (G__26515) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async26516 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26516 = (function (f,blockable,meta26517){
this.f = f;
this.blockable = blockable;
this.meta26517 = meta26517;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async26516.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26518,meta26517__$1){
var self__ = this;
var _26518__$1 = this;
return (new cljs.core.async.t_cljs$core$async26516(self__.f,self__.blockable,meta26517__$1));
}));

(cljs.core.async.t_cljs$core$async26516.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26518){
var self__ = this;
var _26518__$1 = this;
return self__.meta26517;
}));

(cljs.core.async.t_cljs$core$async26516.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async26516.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async26516.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async26516.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async26516.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta26517","meta26517",-2084941309,null)], null);
}));

(cljs.core.async.t_cljs$core$async26516.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async26516.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26516");

(cljs.core.async.t_cljs$core$async26516.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async26516");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26516.
 */
cljs.core.async.__GT_t_cljs$core$async26516 = (function cljs$core$async$__GT_t_cljs$core$async26516(f__$1,blockable__$1,meta26517){
return (new cljs.core.async.t_cljs$core$async26516(f__$1,blockable__$1,meta26517));
});

}

return (new cljs.core.async.t_cljs$core$async26516(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__26522 = arguments.length;
switch (G__26522) {
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
var G__26525 = arguments.length;
switch (G__26525) {
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
var G__26528 = arguments.length;
switch (G__26528) {
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
var val_26530 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_26530);
} else {
cljs.core.async.impl.dispatch.run.call(null,(function (){
return fn1.call(null,val_26530);
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
var G__26532 = arguments.length;
switch (G__26532) {
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
var n__4613__auto___26534 = n;
var x_26535 = (0);
while(true){
if((x_26535 < n__4613__auto___26534)){
(a[x_26535] = x_26535);

var G__26536 = (x_26535 + (1));
x_26535 = G__26536;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async26537 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26537 = (function (flag,meta26538){
this.flag = flag;
this.meta26538 = meta26538;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async26537.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26539,meta26538__$1){
var self__ = this;
var _26539__$1 = this;
return (new cljs.core.async.t_cljs$core$async26537(self__.flag,meta26538__$1));
}));

(cljs.core.async.t_cljs$core$async26537.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26539){
var self__ = this;
var _26539__$1 = this;
return self__.meta26538;
}));

(cljs.core.async.t_cljs$core$async26537.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async26537.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
}));

(cljs.core.async.t_cljs$core$async26537.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async26537.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async26537.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta26538","meta26538",823321289,null)], null);
}));

(cljs.core.async.t_cljs$core$async26537.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async26537.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26537");

(cljs.core.async.t_cljs$core$async26537.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async26537");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26537.
 */
cljs.core.async.__GT_t_cljs$core$async26537 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async26537(flag__$1,meta26538){
return (new cljs.core.async.t_cljs$core$async26537(flag__$1,meta26538));
});

}

return (new cljs.core.async.t_cljs$core$async26537(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async26540 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26540 = (function (flag,cb,meta26541){
this.flag = flag;
this.cb = cb;
this.meta26541 = meta26541;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async26540.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26542,meta26541__$1){
var self__ = this;
var _26542__$1 = this;
return (new cljs.core.async.t_cljs$core$async26540(self__.flag,self__.cb,meta26541__$1));
}));

(cljs.core.async.t_cljs$core$async26540.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26542){
var self__ = this;
var _26542__$1 = this;
return self__.meta26541;
}));

(cljs.core.async.t_cljs$core$async26540.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async26540.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
}));

(cljs.core.async.t_cljs$core$async26540.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async26540.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async26540.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta26541","meta26541",1250297220,null)], null);
}));

(cljs.core.async.t_cljs$core$async26540.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async26540.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26540");

(cljs.core.async.t_cljs$core$async26540.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async26540");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26540.
 */
cljs.core.async.__GT_t_cljs$core$async26540 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async26540(flag__$1,cb__$1,meta26541){
return (new cljs.core.async.t_cljs$core$async26540(flag__$1,cb__$1,meta26541));
});

}

return (new cljs.core.async.t_cljs$core$async26540(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__26543_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__26543_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__26544_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__26544_SHARP_,port], null));
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
var G__26545 = (i + (1));
i = G__26545;
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
var len__4736__auto___26551 = arguments.length;
var i__4737__auto___26552 = (0);
while(true){
if((i__4737__auto___26552 < len__4736__auto___26551)){
args__4742__auto__.push((arguments[i__4737__auto___26552]));

var G__26553 = (i__4737__auto___26552 + (1));
i__4737__auto___26552 = G__26553;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__26548){
var map__26549 = p__26548;
var map__26549__$1 = (((((!((map__26549 == null))))?(((((map__26549.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26549.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26549):map__26549);
var opts = map__26549__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq26546){
var G__26547 = cljs.core.first.call(null,seq26546);
var seq26546__$1 = cljs.core.next.call(null,seq26546);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26547,seq26546__$1);
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
var G__26555 = arguments.length;
switch (G__26555) {
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
var c__26455__auto___26601 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__26456__auto__ = (function (){var switch__26360__auto__ = (function (state_26579){
var state_val_26580 = (state_26579[(1)]);
if((state_val_26580 === (7))){
var inst_26575 = (state_26579[(2)]);
var state_26579__$1 = state_26579;
var statearr_26581_26602 = state_26579__$1;
(statearr_26581_26602[(2)] = inst_26575);

(statearr_26581_26602[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26580 === (1))){
var state_26579__$1 = state_26579;
var statearr_26582_26603 = state_26579__$1;
(statearr_26582_26603[(2)] = null);

(statearr_26582_26603[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26580 === (4))){
var inst_26558 = (state_26579[(7)]);
var inst_26558__$1 = (state_26579[(2)]);
var inst_26559 = (inst_26558__$1 == null);
var state_26579__$1 = (function (){var statearr_26583 = state_26579;
(statearr_26583[(7)] = inst_26558__$1);

return statearr_26583;
})();
if(cljs.core.truth_(inst_26559)){
var statearr_26584_26604 = state_26579__$1;
(statearr_26584_26604[(1)] = (5));

} else {
var statearr_26585_26605 = state_26579__$1;
(statearr_26585_26605[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26580 === (13))){
var state_26579__$1 = state_26579;
var statearr_26586_26606 = state_26579__$1;
(statearr_26586_26606[(2)] = null);

(statearr_26586_26606[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26580 === (6))){
var inst_26558 = (state_26579[(7)]);
var state_26579__$1 = state_26579;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26579__$1,(11),to,inst_26558);
} else {
if((state_val_26580 === (3))){
var inst_26577 = (state_26579[(2)]);
var state_26579__$1 = state_26579;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26579__$1,inst_26577);
} else {
if((state_val_26580 === (12))){
var state_26579__$1 = state_26579;
var statearr_26587_26607 = state_26579__$1;
(statearr_26587_26607[(2)] = null);

(statearr_26587_26607[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26580 === (2))){
var state_26579__$1 = state_26579;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26579__$1,(4),from);
} else {
if((state_val_26580 === (11))){
var inst_26568 = (state_26579[(2)]);
var state_26579__$1 = state_26579;
if(cljs.core.truth_(inst_26568)){
var statearr_26588_26608 = state_26579__$1;
(statearr_26588_26608[(1)] = (12));

} else {
var statearr_26589_26609 = state_26579__$1;
(statearr_26589_26609[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26580 === (9))){
var state_26579__$1 = state_26579;
var statearr_26590_26610 = state_26579__$1;
(statearr_26590_26610[(2)] = null);

(statearr_26590_26610[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26580 === (5))){
var state_26579__$1 = state_26579;
if(cljs.core.truth_(close_QMARK_)){
var statearr_26591_26611 = state_26579__$1;
(statearr_26591_26611[(1)] = (8));

} else {
var statearr_26592_26612 = state_26579__$1;
(statearr_26592_26612[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26580 === (14))){
var inst_26573 = (state_26579[(2)]);
var state_26579__$1 = state_26579;
var statearr_26593_26613 = state_26579__$1;
(statearr_26593_26613[(2)] = inst_26573);

(statearr_26593_26613[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26580 === (10))){
var inst_26565 = (state_26579[(2)]);
var state_26579__$1 = state_26579;
var statearr_26594_26614 = state_26579__$1;
(statearr_26594_26614[(2)] = inst_26565);

(statearr_26594_26614[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26580 === (8))){
var inst_26562 = cljs.core.async.close_BANG_.call(null,to);
var state_26579__$1 = state_26579;
var statearr_26595_26615 = state_26579__$1;
(statearr_26595_26615[(2)] = inst_26562);

(statearr_26595_26615[(1)] = (10));


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
var cljs$core$async$state_machine__26361__auto__ = null;
var cljs$core$async$state_machine__26361__auto____0 = (function (){
var statearr_26596 = [null,null,null,null,null,null,null,null];
(statearr_26596[(0)] = cljs$core$async$state_machine__26361__auto__);

(statearr_26596[(1)] = (1));

return statearr_26596;
});
var cljs$core$async$state_machine__26361__auto____1 = (function (state_26579){
while(true){
var ret_value__26362__auto__ = (function (){try{while(true){
var result__26363__auto__ = switch__26360__auto__.call(null,state_26579);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26363__auto__;
}
break;
}
}catch (e26597){if((e26597 instanceof Object)){
var ex__26364__auto__ = e26597;
var statearr_26598_26616 = state_26579;
(statearr_26598_26616[(5)] = ex__26364__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26579);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26597;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26617 = state_26579;
state_26579 = G__26617;
continue;
} else {
return ret_value__26362__auto__;
}
break;
}
});
cljs$core$async$state_machine__26361__auto__ = function(state_26579){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26361__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26361__auto____1.call(this,state_26579);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26361__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26361__auto____0;
cljs$core$async$state_machine__26361__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26361__auto____1;
return cljs$core$async$state_machine__26361__auto__;
})()
})();
var state__26457__auto__ = (function (){var statearr_26599 = f__26456__auto__.call(null);
(statearr_26599[(6)] = c__26455__auto___26601);

return statearr_26599;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26457__auto__);
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
var process = (function (p__26618){
var vec__26619 = p__26618;
var v = cljs.core.nth.call(null,vec__26619,(0),null);
var p = cljs.core.nth.call(null,vec__26619,(1),null);
var job = vec__26619;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__26455__auto___26790 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__26456__auto__ = (function (){var switch__26360__auto__ = (function (state_26626){
var state_val_26627 = (state_26626[(1)]);
if((state_val_26627 === (1))){
var state_26626__$1 = state_26626;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26626__$1,(2),res,v);
} else {
if((state_val_26627 === (2))){
var inst_26623 = (state_26626[(2)]);
var inst_26624 = cljs.core.async.close_BANG_.call(null,res);
var state_26626__$1 = (function (){var statearr_26628 = state_26626;
(statearr_26628[(7)] = inst_26623);

return statearr_26628;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26626__$1,inst_26624);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26361__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26361__auto____0 = (function (){
var statearr_26629 = [null,null,null,null,null,null,null,null];
(statearr_26629[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26361__auto__);

(statearr_26629[(1)] = (1));

return statearr_26629;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26361__auto____1 = (function (state_26626){
while(true){
var ret_value__26362__auto__ = (function (){try{while(true){
var result__26363__auto__ = switch__26360__auto__.call(null,state_26626);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26363__auto__;
}
break;
}
}catch (e26630){if((e26630 instanceof Object)){
var ex__26364__auto__ = e26630;
var statearr_26631_26791 = state_26626;
(statearr_26631_26791[(5)] = ex__26364__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26626);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26630;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26792 = state_26626;
state_26626 = G__26792;
continue;
} else {
return ret_value__26362__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26361__auto__ = function(state_26626){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26361__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26361__auto____1.call(this,state_26626);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__26361__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26361__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26361__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26361__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26361__auto__;
})()
})();
var state__26457__auto__ = (function (){var statearr_26632 = f__26456__auto__.call(null);
(statearr_26632[(6)] = c__26455__auto___26790);

return statearr_26632;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26457__auto__);
}));


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});
var async = (function (p__26633){
var vec__26634 = p__26633;
var v = cljs.core.nth.call(null,vec__26634,(0),null);
var p = cljs.core.nth.call(null,vec__26634,(1),null);
var job = vec__26634;
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
var n__4613__auto___26793 = n;
var __26794 = (0);
while(true){
if((__26794 < n__4613__auto___26793)){
var G__26637_26795 = type;
var G__26637_26796__$1 = (((G__26637_26795 instanceof cljs.core.Keyword))?G__26637_26795.fqn:null);
switch (G__26637_26796__$1) {
case "compute":
var c__26455__auto___26798 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__26794,c__26455__auto___26798,G__26637_26795,G__26637_26796__$1,n__4613__auto___26793,jobs,results,process,async){
return (function (){
var f__26456__auto__ = (function (){var switch__26360__auto__ = ((function (__26794,c__26455__auto___26798,G__26637_26795,G__26637_26796__$1,n__4613__auto___26793,jobs,results,process,async){
return (function (state_26650){
var state_val_26651 = (state_26650[(1)]);
if((state_val_26651 === (1))){
var state_26650__$1 = state_26650;
var statearr_26652_26799 = state_26650__$1;
(statearr_26652_26799[(2)] = null);

(statearr_26652_26799[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26651 === (2))){
var state_26650__$1 = state_26650;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26650__$1,(4),jobs);
} else {
if((state_val_26651 === (3))){
var inst_26648 = (state_26650[(2)]);
var state_26650__$1 = state_26650;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26650__$1,inst_26648);
} else {
if((state_val_26651 === (4))){
var inst_26640 = (state_26650[(2)]);
var inst_26641 = process.call(null,inst_26640);
var state_26650__$1 = state_26650;
if(cljs.core.truth_(inst_26641)){
var statearr_26653_26800 = state_26650__$1;
(statearr_26653_26800[(1)] = (5));

} else {
var statearr_26654_26801 = state_26650__$1;
(statearr_26654_26801[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26651 === (5))){
var state_26650__$1 = state_26650;
var statearr_26655_26802 = state_26650__$1;
(statearr_26655_26802[(2)] = null);

(statearr_26655_26802[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26651 === (6))){
var state_26650__$1 = state_26650;
var statearr_26656_26803 = state_26650__$1;
(statearr_26656_26803[(2)] = null);

(statearr_26656_26803[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26651 === (7))){
var inst_26646 = (state_26650[(2)]);
var state_26650__$1 = state_26650;
var statearr_26657_26804 = state_26650__$1;
(statearr_26657_26804[(2)] = inst_26646);

(statearr_26657_26804[(1)] = (3));


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
});})(__26794,c__26455__auto___26798,G__26637_26795,G__26637_26796__$1,n__4613__auto___26793,jobs,results,process,async))
;
return ((function (__26794,switch__26360__auto__,c__26455__auto___26798,G__26637_26795,G__26637_26796__$1,n__4613__auto___26793,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26361__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26361__auto____0 = (function (){
var statearr_26658 = [null,null,null,null,null,null,null];
(statearr_26658[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26361__auto__);

(statearr_26658[(1)] = (1));

return statearr_26658;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26361__auto____1 = (function (state_26650){
while(true){
var ret_value__26362__auto__ = (function (){try{while(true){
var result__26363__auto__ = switch__26360__auto__.call(null,state_26650);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26363__auto__;
}
break;
}
}catch (e26659){if((e26659 instanceof Object)){
var ex__26364__auto__ = e26659;
var statearr_26660_26805 = state_26650;
(statearr_26660_26805[(5)] = ex__26364__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26650);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26659;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26806 = state_26650;
state_26650 = G__26806;
continue;
} else {
return ret_value__26362__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26361__auto__ = function(state_26650){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26361__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26361__auto____1.call(this,state_26650);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__26361__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26361__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26361__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26361__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26361__auto__;
})()
;})(__26794,switch__26360__auto__,c__26455__auto___26798,G__26637_26795,G__26637_26796__$1,n__4613__auto___26793,jobs,results,process,async))
})();
var state__26457__auto__ = (function (){var statearr_26661 = f__26456__auto__.call(null);
(statearr_26661[(6)] = c__26455__auto___26798);

return statearr_26661;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26457__auto__);
});})(__26794,c__26455__auto___26798,G__26637_26795,G__26637_26796__$1,n__4613__auto___26793,jobs,results,process,async))
);


break;
case "async":
var c__26455__auto___26807 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__26794,c__26455__auto___26807,G__26637_26795,G__26637_26796__$1,n__4613__auto___26793,jobs,results,process,async){
return (function (){
var f__26456__auto__ = (function (){var switch__26360__auto__ = ((function (__26794,c__26455__auto___26807,G__26637_26795,G__26637_26796__$1,n__4613__auto___26793,jobs,results,process,async){
return (function (state_26674){
var state_val_26675 = (state_26674[(1)]);
if((state_val_26675 === (1))){
var state_26674__$1 = state_26674;
var statearr_26676_26808 = state_26674__$1;
(statearr_26676_26808[(2)] = null);

(statearr_26676_26808[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26675 === (2))){
var state_26674__$1 = state_26674;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26674__$1,(4),jobs);
} else {
if((state_val_26675 === (3))){
var inst_26672 = (state_26674[(2)]);
var state_26674__$1 = state_26674;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26674__$1,inst_26672);
} else {
if((state_val_26675 === (4))){
var inst_26664 = (state_26674[(2)]);
var inst_26665 = async.call(null,inst_26664);
var state_26674__$1 = state_26674;
if(cljs.core.truth_(inst_26665)){
var statearr_26677_26809 = state_26674__$1;
(statearr_26677_26809[(1)] = (5));

} else {
var statearr_26678_26810 = state_26674__$1;
(statearr_26678_26810[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26675 === (5))){
var state_26674__$1 = state_26674;
var statearr_26679_26811 = state_26674__$1;
(statearr_26679_26811[(2)] = null);

(statearr_26679_26811[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26675 === (6))){
var state_26674__$1 = state_26674;
var statearr_26680_26812 = state_26674__$1;
(statearr_26680_26812[(2)] = null);

(statearr_26680_26812[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26675 === (7))){
var inst_26670 = (state_26674[(2)]);
var state_26674__$1 = state_26674;
var statearr_26681_26813 = state_26674__$1;
(statearr_26681_26813[(2)] = inst_26670);

(statearr_26681_26813[(1)] = (3));


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
});})(__26794,c__26455__auto___26807,G__26637_26795,G__26637_26796__$1,n__4613__auto___26793,jobs,results,process,async))
;
return ((function (__26794,switch__26360__auto__,c__26455__auto___26807,G__26637_26795,G__26637_26796__$1,n__4613__auto___26793,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26361__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26361__auto____0 = (function (){
var statearr_26682 = [null,null,null,null,null,null,null];
(statearr_26682[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26361__auto__);

(statearr_26682[(1)] = (1));

return statearr_26682;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26361__auto____1 = (function (state_26674){
while(true){
var ret_value__26362__auto__ = (function (){try{while(true){
var result__26363__auto__ = switch__26360__auto__.call(null,state_26674);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26363__auto__;
}
break;
}
}catch (e26683){if((e26683 instanceof Object)){
var ex__26364__auto__ = e26683;
var statearr_26684_26814 = state_26674;
(statearr_26684_26814[(5)] = ex__26364__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26674);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26683;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26815 = state_26674;
state_26674 = G__26815;
continue;
} else {
return ret_value__26362__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26361__auto__ = function(state_26674){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26361__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26361__auto____1.call(this,state_26674);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__26361__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26361__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26361__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26361__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26361__auto__;
})()
;})(__26794,switch__26360__auto__,c__26455__auto___26807,G__26637_26795,G__26637_26796__$1,n__4613__auto___26793,jobs,results,process,async))
})();
var state__26457__auto__ = (function (){var statearr_26685 = f__26456__auto__.call(null);
(statearr_26685[(6)] = c__26455__auto___26807);

return statearr_26685;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26457__auto__);
});})(__26794,c__26455__auto___26807,G__26637_26795,G__26637_26796__$1,n__4613__auto___26793,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__26637_26796__$1)].join('')));

}

var G__26816 = (__26794 + (1));
__26794 = G__26816;
continue;
} else {
}
break;
}

var c__26455__auto___26817 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__26456__auto__ = (function (){var switch__26360__auto__ = (function (state_26707){
var state_val_26708 = (state_26707[(1)]);
if((state_val_26708 === (7))){
var inst_26703 = (state_26707[(2)]);
var state_26707__$1 = state_26707;
var statearr_26709_26818 = state_26707__$1;
(statearr_26709_26818[(2)] = inst_26703);

(statearr_26709_26818[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26708 === (1))){
var state_26707__$1 = state_26707;
var statearr_26710_26819 = state_26707__$1;
(statearr_26710_26819[(2)] = null);

(statearr_26710_26819[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26708 === (4))){
var inst_26688 = (state_26707[(7)]);
var inst_26688__$1 = (state_26707[(2)]);
var inst_26689 = (inst_26688__$1 == null);
var state_26707__$1 = (function (){var statearr_26711 = state_26707;
(statearr_26711[(7)] = inst_26688__$1);

return statearr_26711;
})();
if(cljs.core.truth_(inst_26689)){
var statearr_26712_26820 = state_26707__$1;
(statearr_26712_26820[(1)] = (5));

} else {
var statearr_26713_26821 = state_26707__$1;
(statearr_26713_26821[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26708 === (6))){
var inst_26693 = (state_26707[(8)]);
var inst_26688 = (state_26707[(7)]);
var inst_26693__$1 = cljs.core.async.chan.call(null,(1));
var inst_26694 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_26695 = [inst_26688,inst_26693__$1];
var inst_26696 = (new cljs.core.PersistentVector(null,2,(5),inst_26694,inst_26695,null));
var state_26707__$1 = (function (){var statearr_26714 = state_26707;
(statearr_26714[(8)] = inst_26693__$1);

return statearr_26714;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26707__$1,(8),jobs,inst_26696);
} else {
if((state_val_26708 === (3))){
var inst_26705 = (state_26707[(2)]);
var state_26707__$1 = state_26707;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26707__$1,inst_26705);
} else {
if((state_val_26708 === (2))){
var state_26707__$1 = state_26707;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26707__$1,(4),from);
} else {
if((state_val_26708 === (9))){
var inst_26700 = (state_26707[(2)]);
var state_26707__$1 = (function (){var statearr_26715 = state_26707;
(statearr_26715[(9)] = inst_26700);

return statearr_26715;
})();
var statearr_26716_26822 = state_26707__$1;
(statearr_26716_26822[(2)] = null);

(statearr_26716_26822[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26708 === (5))){
var inst_26691 = cljs.core.async.close_BANG_.call(null,jobs);
var state_26707__$1 = state_26707;
var statearr_26717_26823 = state_26707__$1;
(statearr_26717_26823[(2)] = inst_26691);

(statearr_26717_26823[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26708 === (8))){
var inst_26693 = (state_26707[(8)]);
var inst_26698 = (state_26707[(2)]);
var state_26707__$1 = (function (){var statearr_26718 = state_26707;
(statearr_26718[(10)] = inst_26698);

return statearr_26718;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26707__$1,(9),results,inst_26693);
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
var cljs$core$async$pipeline_STAR__$_state_machine__26361__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26361__auto____0 = (function (){
var statearr_26719 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26719[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26361__auto__);

(statearr_26719[(1)] = (1));

return statearr_26719;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26361__auto____1 = (function (state_26707){
while(true){
var ret_value__26362__auto__ = (function (){try{while(true){
var result__26363__auto__ = switch__26360__auto__.call(null,state_26707);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26363__auto__;
}
break;
}
}catch (e26720){if((e26720 instanceof Object)){
var ex__26364__auto__ = e26720;
var statearr_26721_26824 = state_26707;
(statearr_26721_26824[(5)] = ex__26364__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26707);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26720;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26825 = state_26707;
state_26707 = G__26825;
continue;
} else {
return ret_value__26362__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26361__auto__ = function(state_26707){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26361__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26361__auto____1.call(this,state_26707);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__26361__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26361__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26361__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26361__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26361__auto__;
})()
})();
var state__26457__auto__ = (function (){var statearr_26722 = f__26456__auto__.call(null);
(statearr_26722[(6)] = c__26455__auto___26817);

return statearr_26722;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26457__auto__);
}));


var c__26455__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__26456__auto__ = (function (){var switch__26360__auto__ = (function (state_26760){
var state_val_26761 = (state_26760[(1)]);
if((state_val_26761 === (7))){
var inst_26756 = (state_26760[(2)]);
var state_26760__$1 = state_26760;
var statearr_26762_26826 = state_26760__$1;
(statearr_26762_26826[(2)] = inst_26756);

(statearr_26762_26826[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26761 === (20))){
var state_26760__$1 = state_26760;
var statearr_26763_26827 = state_26760__$1;
(statearr_26763_26827[(2)] = null);

(statearr_26763_26827[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26761 === (1))){
var state_26760__$1 = state_26760;
var statearr_26764_26828 = state_26760__$1;
(statearr_26764_26828[(2)] = null);

(statearr_26764_26828[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26761 === (4))){
var inst_26725 = (state_26760[(7)]);
var inst_26725__$1 = (state_26760[(2)]);
var inst_26726 = (inst_26725__$1 == null);
var state_26760__$1 = (function (){var statearr_26765 = state_26760;
(statearr_26765[(7)] = inst_26725__$1);

return statearr_26765;
})();
if(cljs.core.truth_(inst_26726)){
var statearr_26766_26829 = state_26760__$1;
(statearr_26766_26829[(1)] = (5));

} else {
var statearr_26767_26830 = state_26760__$1;
(statearr_26767_26830[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26761 === (15))){
var inst_26738 = (state_26760[(8)]);
var state_26760__$1 = state_26760;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26760__$1,(18),to,inst_26738);
} else {
if((state_val_26761 === (21))){
var inst_26751 = (state_26760[(2)]);
var state_26760__$1 = state_26760;
var statearr_26768_26831 = state_26760__$1;
(statearr_26768_26831[(2)] = inst_26751);

(statearr_26768_26831[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26761 === (13))){
var inst_26753 = (state_26760[(2)]);
var state_26760__$1 = (function (){var statearr_26769 = state_26760;
(statearr_26769[(9)] = inst_26753);

return statearr_26769;
})();
var statearr_26770_26832 = state_26760__$1;
(statearr_26770_26832[(2)] = null);

(statearr_26770_26832[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26761 === (6))){
var inst_26725 = (state_26760[(7)]);
var state_26760__$1 = state_26760;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26760__$1,(11),inst_26725);
} else {
if((state_val_26761 === (17))){
var inst_26746 = (state_26760[(2)]);
var state_26760__$1 = state_26760;
if(cljs.core.truth_(inst_26746)){
var statearr_26771_26833 = state_26760__$1;
(statearr_26771_26833[(1)] = (19));

} else {
var statearr_26772_26834 = state_26760__$1;
(statearr_26772_26834[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26761 === (3))){
var inst_26758 = (state_26760[(2)]);
var state_26760__$1 = state_26760;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26760__$1,inst_26758);
} else {
if((state_val_26761 === (12))){
var inst_26735 = (state_26760[(10)]);
var state_26760__$1 = state_26760;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26760__$1,(14),inst_26735);
} else {
if((state_val_26761 === (2))){
var state_26760__$1 = state_26760;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26760__$1,(4),results);
} else {
if((state_val_26761 === (19))){
var state_26760__$1 = state_26760;
var statearr_26773_26835 = state_26760__$1;
(statearr_26773_26835[(2)] = null);

(statearr_26773_26835[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26761 === (11))){
var inst_26735 = (state_26760[(2)]);
var state_26760__$1 = (function (){var statearr_26774 = state_26760;
(statearr_26774[(10)] = inst_26735);

return statearr_26774;
})();
var statearr_26775_26836 = state_26760__$1;
(statearr_26775_26836[(2)] = null);

(statearr_26775_26836[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26761 === (9))){
var state_26760__$1 = state_26760;
var statearr_26776_26837 = state_26760__$1;
(statearr_26776_26837[(2)] = null);

(statearr_26776_26837[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26761 === (5))){
var state_26760__$1 = state_26760;
if(cljs.core.truth_(close_QMARK_)){
var statearr_26777_26838 = state_26760__$1;
(statearr_26777_26838[(1)] = (8));

} else {
var statearr_26778_26839 = state_26760__$1;
(statearr_26778_26839[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26761 === (14))){
var inst_26738 = (state_26760[(8)]);
var inst_26738__$1 = (state_26760[(2)]);
var inst_26739 = (inst_26738__$1 == null);
var inst_26740 = cljs.core.not.call(null,inst_26739);
var state_26760__$1 = (function (){var statearr_26779 = state_26760;
(statearr_26779[(8)] = inst_26738__$1);

return statearr_26779;
})();
if(inst_26740){
var statearr_26780_26840 = state_26760__$1;
(statearr_26780_26840[(1)] = (15));

} else {
var statearr_26781_26841 = state_26760__$1;
(statearr_26781_26841[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26761 === (16))){
var state_26760__$1 = state_26760;
var statearr_26782_26842 = state_26760__$1;
(statearr_26782_26842[(2)] = false);

(statearr_26782_26842[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26761 === (10))){
var inst_26732 = (state_26760[(2)]);
var state_26760__$1 = state_26760;
var statearr_26783_26843 = state_26760__$1;
(statearr_26783_26843[(2)] = inst_26732);

(statearr_26783_26843[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26761 === (18))){
var inst_26743 = (state_26760[(2)]);
var state_26760__$1 = state_26760;
var statearr_26784_26844 = state_26760__$1;
(statearr_26784_26844[(2)] = inst_26743);

(statearr_26784_26844[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26761 === (8))){
var inst_26729 = cljs.core.async.close_BANG_.call(null,to);
var state_26760__$1 = state_26760;
var statearr_26785_26845 = state_26760__$1;
(statearr_26785_26845[(2)] = inst_26729);

(statearr_26785_26845[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__26361__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26361__auto____0 = (function (){
var statearr_26786 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26786[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26361__auto__);

(statearr_26786[(1)] = (1));

return statearr_26786;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26361__auto____1 = (function (state_26760){
while(true){
var ret_value__26362__auto__ = (function (){try{while(true){
var result__26363__auto__ = switch__26360__auto__.call(null,state_26760);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26363__auto__;
}
break;
}
}catch (e26787){if((e26787 instanceof Object)){
var ex__26364__auto__ = e26787;
var statearr_26788_26846 = state_26760;
(statearr_26788_26846[(5)] = ex__26364__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26760);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26787;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26847 = state_26760;
state_26760 = G__26847;
continue;
} else {
return ret_value__26362__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26361__auto__ = function(state_26760){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26361__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26361__auto____1.call(this,state_26760);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__26361__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26361__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26361__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26361__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26361__auto__;
})()
})();
var state__26457__auto__ = (function (){var statearr_26789 = f__26456__auto__.call(null);
(statearr_26789[(6)] = c__26455__auto__);

return statearr_26789;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26457__auto__);
}));

return c__26455__auto__;
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
var G__26849 = arguments.length;
switch (G__26849) {
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
var G__26852 = arguments.length;
switch (G__26852) {
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
var G__26855 = arguments.length;
switch (G__26855) {
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
var c__26455__auto___26904 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__26456__auto__ = (function (){var switch__26360__auto__ = (function (state_26881){
var state_val_26882 = (state_26881[(1)]);
if((state_val_26882 === (7))){
var inst_26877 = (state_26881[(2)]);
var state_26881__$1 = state_26881;
var statearr_26883_26905 = state_26881__$1;
(statearr_26883_26905[(2)] = inst_26877);

(statearr_26883_26905[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26882 === (1))){
var state_26881__$1 = state_26881;
var statearr_26884_26906 = state_26881__$1;
(statearr_26884_26906[(2)] = null);

(statearr_26884_26906[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26882 === (4))){
var inst_26858 = (state_26881[(7)]);
var inst_26858__$1 = (state_26881[(2)]);
var inst_26859 = (inst_26858__$1 == null);
var state_26881__$1 = (function (){var statearr_26885 = state_26881;
(statearr_26885[(7)] = inst_26858__$1);

return statearr_26885;
})();
if(cljs.core.truth_(inst_26859)){
var statearr_26886_26907 = state_26881__$1;
(statearr_26886_26907[(1)] = (5));

} else {
var statearr_26887_26908 = state_26881__$1;
(statearr_26887_26908[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26882 === (13))){
var state_26881__$1 = state_26881;
var statearr_26888_26909 = state_26881__$1;
(statearr_26888_26909[(2)] = null);

(statearr_26888_26909[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26882 === (6))){
var inst_26858 = (state_26881[(7)]);
var inst_26864 = p.call(null,inst_26858);
var state_26881__$1 = state_26881;
if(cljs.core.truth_(inst_26864)){
var statearr_26889_26910 = state_26881__$1;
(statearr_26889_26910[(1)] = (9));

} else {
var statearr_26890_26911 = state_26881__$1;
(statearr_26890_26911[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26882 === (3))){
var inst_26879 = (state_26881[(2)]);
var state_26881__$1 = state_26881;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26881__$1,inst_26879);
} else {
if((state_val_26882 === (12))){
var state_26881__$1 = state_26881;
var statearr_26891_26912 = state_26881__$1;
(statearr_26891_26912[(2)] = null);

(statearr_26891_26912[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26882 === (2))){
var state_26881__$1 = state_26881;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26881__$1,(4),ch);
} else {
if((state_val_26882 === (11))){
var inst_26858 = (state_26881[(7)]);
var inst_26868 = (state_26881[(2)]);
var state_26881__$1 = state_26881;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26881__$1,(8),inst_26868,inst_26858);
} else {
if((state_val_26882 === (9))){
var state_26881__$1 = state_26881;
var statearr_26892_26913 = state_26881__$1;
(statearr_26892_26913[(2)] = tc);

(statearr_26892_26913[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26882 === (5))){
var inst_26861 = cljs.core.async.close_BANG_.call(null,tc);
var inst_26862 = cljs.core.async.close_BANG_.call(null,fc);
var state_26881__$1 = (function (){var statearr_26893 = state_26881;
(statearr_26893[(8)] = inst_26861);

return statearr_26893;
})();
var statearr_26894_26914 = state_26881__$1;
(statearr_26894_26914[(2)] = inst_26862);

(statearr_26894_26914[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26882 === (14))){
var inst_26875 = (state_26881[(2)]);
var state_26881__$1 = state_26881;
var statearr_26895_26915 = state_26881__$1;
(statearr_26895_26915[(2)] = inst_26875);

(statearr_26895_26915[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26882 === (10))){
var state_26881__$1 = state_26881;
var statearr_26896_26916 = state_26881__$1;
(statearr_26896_26916[(2)] = fc);

(statearr_26896_26916[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26882 === (8))){
var inst_26870 = (state_26881[(2)]);
var state_26881__$1 = state_26881;
if(cljs.core.truth_(inst_26870)){
var statearr_26897_26917 = state_26881__$1;
(statearr_26897_26917[(1)] = (12));

} else {
var statearr_26898_26918 = state_26881__$1;
(statearr_26898_26918[(1)] = (13));

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
var cljs$core$async$state_machine__26361__auto__ = null;
var cljs$core$async$state_machine__26361__auto____0 = (function (){
var statearr_26899 = [null,null,null,null,null,null,null,null,null];
(statearr_26899[(0)] = cljs$core$async$state_machine__26361__auto__);

(statearr_26899[(1)] = (1));

return statearr_26899;
});
var cljs$core$async$state_machine__26361__auto____1 = (function (state_26881){
while(true){
var ret_value__26362__auto__ = (function (){try{while(true){
var result__26363__auto__ = switch__26360__auto__.call(null,state_26881);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26363__auto__;
}
break;
}
}catch (e26900){if((e26900 instanceof Object)){
var ex__26364__auto__ = e26900;
var statearr_26901_26919 = state_26881;
(statearr_26901_26919[(5)] = ex__26364__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26881);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26900;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26920 = state_26881;
state_26881 = G__26920;
continue;
} else {
return ret_value__26362__auto__;
}
break;
}
});
cljs$core$async$state_machine__26361__auto__ = function(state_26881){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26361__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26361__auto____1.call(this,state_26881);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26361__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26361__auto____0;
cljs$core$async$state_machine__26361__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26361__auto____1;
return cljs$core$async$state_machine__26361__auto__;
})()
})();
var state__26457__auto__ = (function (){var statearr_26902 = f__26456__auto__.call(null);
(statearr_26902[(6)] = c__26455__auto___26904);

return statearr_26902;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26457__auto__);
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
var c__26455__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__26456__auto__ = (function (){var switch__26360__auto__ = (function (state_26941){
var state_val_26942 = (state_26941[(1)]);
if((state_val_26942 === (7))){
var inst_26937 = (state_26941[(2)]);
var state_26941__$1 = state_26941;
var statearr_26943_26961 = state_26941__$1;
(statearr_26943_26961[(2)] = inst_26937);

(statearr_26943_26961[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26942 === (1))){
var inst_26921 = init;
var state_26941__$1 = (function (){var statearr_26944 = state_26941;
(statearr_26944[(7)] = inst_26921);

return statearr_26944;
})();
var statearr_26945_26962 = state_26941__$1;
(statearr_26945_26962[(2)] = null);

(statearr_26945_26962[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26942 === (4))){
var inst_26924 = (state_26941[(8)]);
var inst_26924__$1 = (state_26941[(2)]);
var inst_26925 = (inst_26924__$1 == null);
var state_26941__$1 = (function (){var statearr_26946 = state_26941;
(statearr_26946[(8)] = inst_26924__$1);

return statearr_26946;
})();
if(cljs.core.truth_(inst_26925)){
var statearr_26947_26963 = state_26941__$1;
(statearr_26947_26963[(1)] = (5));

} else {
var statearr_26948_26964 = state_26941__$1;
(statearr_26948_26964[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26942 === (6))){
var inst_26928 = (state_26941[(9)]);
var inst_26924 = (state_26941[(8)]);
var inst_26921 = (state_26941[(7)]);
var inst_26928__$1 = f.call(null,inst_26921,inst_26924);
var inst_26929 = cljs.core.reduced_QMARK_.call(null,inst_26928__$1);
var state_26941__$1 = (function (){var statearr_26949 = state_26941;
(statearr_26949[(9)] = inst_26928__$1);

return statearr_26949;
})();
if(inst_26929){
var statearr_26950_26965 = state_26941__$1;
(statearr_26950_26965[(1)] = (8));

} else {
var statearr_26951_26966 = state_26941__$1;
(statearr_26951_26966[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26942 === (3))){
var inst_26939 = (state_26941[(2)]);
var state_26941__$1 = state_26941;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26941__$1,inst_26939);
} else {
if((state_val_26942 === (2))){
var state_26941__$1 = state_26941;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26941__$1,(4),ch);
} else {
if((state_val_26942 === (9))){
var inst_26928 = (state_26941[(9)]);
var inst_26921 = inst_26928;
var state_26941__$1 = (function (){var statearr_26952 = state_26941;
(statearr_26952[(7)] = inst_26921);

return statearr_26952;
})();
var statearr_26953_26967 = state_26941__$1;
(statearr_26953_26967[(2)] = null);

(statearr_26953_26967[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26942 === (5))){
var inst_26921 = (state_26941[(7)]);
var state_26941__$1 = state_26941;
var statearr_26954_26968 = state_26941__$1;
(statearr_26954_26968[(2)] = inst_26921);

(statearr_26954_26968[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26942 === (10))){
var inst_26935 = (state_26941[(2)]);
var state_26941__$1 = state_26941;
var statearr_26955_26969 = state_26941__$1;
(statearr_26955_26969[(2)] = inst_26935);

(statearr_26955_26969[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26942 === (8))){
var inst_26928 = (state_26941[(9)]);
var inst_26931 = cljs.core.deref.call(null,inst_26928);
var state_26941__$1 = state_26941;
var statearr_26956_26970 = state_26941__$1;
(statearr_26956_26970[(2)] = inst_26931);

(statearr_26956_26970[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__26361__auto__ = null;
var cljs$core$async$reduce_$_state_machine__26361__auto____0 = (function (){
var statearr_26957 = [null,null,null,null,null,null,null,null,null,null];
(statearr_26957[(0)] = cljs$core$async$reduce_$_state_machine__26361__auto__);

(statearr_26957[(1)] = (1));

return statearr_26957;
});
var cljs$core$async$reduce_$_state_machine__26361__auto____1 = (function (state_26941){
while(true){
var ret_value__26362__auto__ = (function (){try{while(true){
var result__26363__auto__ = switch__26360__auto__.call(null,state_26941);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26363__auto__;
}
break;
}
}catch (e26958){if((e26958 instanceof Object)){
var ex__26364__auto__ = e26958;
var statearr_26959_26971 = state_26941;
(statearr_26959_26971[(5)] = ex__26364__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26941);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26958;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26972 = state_26941;
state_26941 = G__26972;
continue;
} else {
return ret_value__26362__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__26361__auto__ = function(state_26941){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__26361__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__26361__auto____1.call(this,state_26941);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__26361__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__26361__auto____0;
cljs$core$async$reduce_$_state_machine__26361__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__26361__auto____1;
return cljs$core$async$reduce_$_state_machine__26361__auto__;
})()
})();
var state__26457__auto__ = (function (){var statearr_26960 = f__26456__auto__.call(null);
(statearr_26960[(6)] = c__26455__auto__);

return statearr_26960;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26457__auto__);
}));

return c__26455__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__26455__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__26456__auto__ = (function (){var switch__26360__auto__ = (function (state_26978){
var state_val_26979 = (state_26978[(1)]);
if((state_val_26979 === (1))){
var inst_26973 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_26978__$1 = state_26978;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26978__$1,(2),inst_26973);
} else {
if((state_val_26979 === (2))){
var inst_26975 = (state_26978[(2)]);
var inst_26976 = f__$1.call(null,inst_26975);
var state_26978__$1 = state_26978;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26978__$1,inst_26976);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__26361__auto__ = null;
var cljs$core$async$transduce_$_state_machine__26361__auto____0 = (function (){
var statearr_26980 = [null,null,null,null,null,null,null];
(statearr_26980[(0)] = cljs$core$async$transduce_$_state_machine__26361__auto__);

(statearr_26980[(1)] = (1));

return statearr_26980;
});
var cljs$core$async$transduce_$_state_machine__26361__auto____1 = (function (state_26978){
while(true){
var ret_value__26362__auto__ = (function (){try{while(true){
var result__26363__auto__ = switch__26360__auto__.call(null,state_26978);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26363__auto__;
}
break;
}
}catch (e26981){if((e26981 instanceof Object)){
var ex__26364__auto__ = e26981;
var statearr_26982_26984 = state_26978;
(statearr_26982_26984[(5)] = ex__26364__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26978);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26981;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26985 = state_26978;
state_26978 = G__26985;
continue;
} else {
return ret_value__26362__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__26361__auto__ = function(state_26978){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__26361__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__26361__auto____1.call(this,state_26978);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__26361__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__26361__auto____0;
cljs$core$async$transduce_$_state_machine__26361__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__26361__auto____1;
return cljs$core$async$transduce_$_state_machine__26361__auto__;
})()
})();
var state__26457__auto__ = (function (){var statearr_26983 = f__26456__auto__.call(null);
(statearr_26983[(6)] = c__26455__auto__);

return statearr_26983;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26457__auto__);
}));

return c__26455__auto__;
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
var G__26987 = arguments.length;
switch (G__26987) {
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
var c__26455__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__26456__auto__ = (function (){var switch__26360__auto__ = (function (state_27012){
var state_val_27013 = (state_27012[(1)]);
if((state_val_27013 === (7))){
var inst_26994 = (state_27012[(2)]);
var state_27012__$1 = state_27012;
var statearr_27014_27035 = state_27012__$1;
(statearr_27014_27035[(2)] = inst_26994);

(statearr_27014_27035[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27013 === (1))){
var inst_26988 = cljs.core.seq.call(null,coll);
var inst_26989 = inst_26988;
var state_27012__$1 = (function (){var statearr_27015 = state_27012;
(statearr_27015[(7)] = inst_26989);

return statearr_27015;
})();
var statearr_27016_27036 = state_27012__$1;
(statearr_27016_27036[(2)] = null);

(statearr_27016_27036[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27013 === (4))){
var inst_26989 = (state_27012[(7)]);
var inst_26992 = cljs.core.first.call(null,inst_26989);
var state_27012__$1 = state_27012;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27012__$1,(7),ch,inst_26992);
} else {
if((state_val_27013 === (13))){
var inst_27006 = (state_27012[(2)]);
var state_27012__$1 = state_27012;
var statearr_27017_27037 = state_27012__$1;
(statearr_27017_27037[(2)] = inst_27006);

(statearr_27017_27037[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27013 === (6))){
var inst_26997 = (state_27012[(2)]);
var state_27012__$1 = state_27012;
if(cljs.core.truth_(inst_26997)){
var statearr_27018_27038 = state_27012__$1;
(statearr_27018_27038[(1)] = (8));

} else {
var statearr_27019_27039 = state_27012__$1;
(statearr_27019_27039[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27013 === (3))){
var inst_27010 = (state_27012[(2)]);
var state_27012__$1 = state_27012;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27012__$1,inst_27010);
} else {
if((state_val_27013 === (12))){
var state_27012__$1 = state_27012;
var statearr_27020_27040 = state_27012__$1;
(statearr_27020_27040[(2)] = null);

(statearr_27020_27040[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27013 === (2))){
var inst_26989 = (state_27012[(7)]);
var state_27012__$1 = state_27012;
if(cljs.core.truth_(inst_26989)){
var statearr_27021_27041 = state_27012__$1;
(statearr_27021_27041[(1)] = (4));

} else {
var statearr_27022_27042 = state_27012__$1;
(statearr_27022_27042[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27013 === (11))){
var inst_27003 = cljs.core.async.close_BANG_.call(null,ch);
var state_27012__$1 = state_27012;
var statearr_27023_27043 = state_27012__$1;
(statearr_27023_27043[(2)] = inst_27003);

(statearr_27023_27043[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27013 === (9))){
var state_27012__$1 = state_27012;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27024_27044 = state_27012__$1;
(statearr_27024_27044[(1)] = (11));

} else {
var statearr_27025_27045 = state_27012__$1;
(statearr_27025_27045[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27013 === (5))){
var inst_26989 = (state_27012[(7)]);
var state_27012__$1 = state_27012;
var statearr_27026_27046 = state_27012__$1;
(statearr_27026_27046[(2)] = inst_26989);

(statearr_27026_27046[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27013 === (10))){
var inst_27008 = (state_27012[(2)]);
var state_27012__$1 = state_27012;
var statearr_27027_27047 = state_27012__$1;
(statearr_27027_27047[(2)] = inst_27008);

(statearr_27027_27047[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27013 === (8))){
var inst_26989 = (state_27012[(7)]);
var inst_26999 = cljs.core.next.call(null,inst_26989);
var inst_26989__$1 = inst_26999;
var state_27012__$1 = (function (){var statearr_27028 = state_27012;
(statearr_27028[(7)] = inst_26989__$1);

return statearr_27028;
})();
var statearr_27029_27048 = state_27012__$1;
(statearr_27029_27048[(2)] = null);

(statearr_27029_27048[(1)] = (2));


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
var cljs$core$async$state_machine__26361__auto__ = null;
var cljs$core$async$state_machine__26361__auto____0 = (function (){
var statearr_27030 = [null,null,null,null,null,null,null,null];
(statearr_27030[(0)] = cljs$core$async$state_machine__26361__auto__);

(statearr_27030[(1)] = (1));

return statearr_27030;
});
var cljs$core$async$state_machine__26361__auto____1 = (function (state_27012){
while(true){
var ret_value__26362__auto__ = (function (){try{while(true){
var result__26363__auto__ = switch__26360__auto__.call(null,state_27012);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26363__auto__;
}
break;
}
}catch (e27031){if((e27031 instanceof Object)){
var ex__26364__auto__ = e27031;
var statearr_27032_27049 = state_27012;
(statearr_27032_27049[(5)] = ex__26364__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27012);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27031;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27050 = state_27012;
state_27012 = G__27050;
continue;
} else {
return ret_value__26362__auto__;
}
break;
}
});
cljs$core$async$state_machine__26361__auto__ = function(state_27012){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26361__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26361__auto____1.call(this,state_27012);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26361__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26361__auto____0;
cljs$core$async$state_machine__26361__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26361__auto____1;
return cljs$core$async$state_machine__26361__auto__;
})()
})();
var state__26457__auto__ = (function (){var statearr_27033 = f__26456__auto__.call(null);
(statearr_27033[(6)] = c__26455__auto__);

return statearr_27033;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26457__auto__);
}));

return c__26455__auto__;
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

var cljs$core$async$Mux$muxch_STAR_$dyn_27051 = (function (_){
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
return cljs$core$async$Mux$muxch_STAR_$dyn_27051.call(null,_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_27052 = (function (m,ch,close_QMARK_){
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
return cljs$core$async$Mult$tap_STAR_$dyn_27052.call(null,m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_27053 = (function (m,ch){
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
return cljs$core$async$Mult$untap_STAR_$dyn_27053.call(null,m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_27054 = (function (m){
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
return cljs$core$async$Mult$untap_all_STAR_$dyn_27054.call(null,m);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async27055 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27055 = (function (ch,cs,meta27056){
this.ch = ch;
this.cs = cs;
this.meta27056 = meta27056;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async27055.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27057,meta27056__$1){
var self__ = this;
var _27057__$1 = this;
return (new cljs.core.async.t_cljs$core$async27055(self__.ch,self__.cs,meta27056__$1));
}));

(cljs.core.async.t_cljs$core$async27055.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27057){
var self__ = this;
var _27057__$1 = this;
return self__.meta27056;
}));

(cljs.core.async.t_cljs$core$async27055.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async27055.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async27055.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async27055.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async27055.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async27055.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async27055.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta27056","meta27056",-1493380663,null)], null);
}));

(cljs.core.async.t_cljs$core$async27055.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async27055.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27055");

(cljs.core.async.t_cljs$core$async27055.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async27055");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27055.
 */
cljs.core.async.__GT_t_cljs$core$async27055 = (function cljs$core$async$mult_$___GT_t_cljs$core$async27055(ch__$1,cs__$1,meta27056){
return (new cljs.core.async.t_cljs$core$async27055(ch__$1,cs__$1,meta27056));
});

}

return (new cljs.core.async.t_cljs$core$async27055(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__26455__auto___27277 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__26456__auto__ = (function (){var switch__26360__auto__ = (function (state_27192){
var state_val_27193 = (state_27192[(1)]);
if((state_val_27193 === (7))){
var inst_27188 = (state_27192[(2)]);
var state_27192__$1 = state_27192;
var statearr_27194_27278 = state_27192__$1;
(statearr_27194_27278[(2)] = inst_27188);

(statearr_27194_27278[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27193 === (20))){
var inst_27091 = (state_27192[(7)]);
var inst_27103 = cljs.core.first.call(null,inst_27091);
var inst_27104 = cljs.core.nth.call(null,inst_27103,(0),null);
var inst_27105 = cljs.core.nth.call(null,inst_27103,(1),null);
var state_27192__$1 = (function (){var statearr_27195 = state_27192;
(statearr_27195[(8)] = inst_27104);

return statearr_27195;
})();
if(cljs.core.truth_(inst_27105)){
var statearr_27196_27279 = state_27192__$1;
(statearr_27196_27279[(1)] = (22));

} else {
var statearr_27197_27280 = state_27192__$1;
(statearr_27197_27280[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27193 === (27))){
var inst_27140 = (state_27192[(9)]);
var inst_27133 = (state_27192[(10)]);
var inst_27060 = (state_27192[(11)]);
var inst_27135 = (state_27192[(12)]);
var inst_27140__$1 = cljs.core._nth.call(null,inst_27133,inst_27135);
var inst_27141 = cljs.core.async.put_BANG_.call(null,inst_27140__$1,inst_27060,done);
var state_27192__$1 = (function (){var statearr_27198 = state_27192;
(statearr_27198[(9)] = inst_27140__$1);

return statearr_27198;
})();
if(cljs.core.truth_(inst_27141)){
var statearr_27199_27281 = state_27192__$1;
(statearr_27199_27281[(1)] = (30));

} else {
var statearr_27200_27282 = state_27192__$1;
(statearr_27200_27282[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27193 === (1))){
var state_27192__$1 = state_27192;
var statearr_27201_27283 = state_27192__$1;
(statearr_27201_27283[(2)] = null);

(statearr_27201_27283[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27193 === (24))){
var inst_27091 = (state_27192[(7)]);
var inst_27110 = (state_27192[(2)]);
var inst_27111 = cljs.core.next.call(null,inst_27091);
var inst_27069 = inst_27111;
var inst_27070 = null;
var inst_27071 = (0);
var inst_27072 = (0);
var state_27192__$1 = (function (){var statearr_27202 = state_27192;
(statearr_27202[(13)] = inst_27071);

(statearr_27202[(14)] = inst_27070);

(statearr_27202[(15)] = inst_27069);

(statearr_27202[(16)] = inst_27110);

(statearr_27202[(17)] = inst_27072);

return statearr_27202;
})();
var statearr_27203_27284 = state_27192__$1;
(statearr_27203_27284[(2)] = null);

(statearr_27203_27284[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27193 === (39))){
var state_27192__$1 = state_27192;
var statearr_27207_27285 = state_27192__$1;
(statearr_27207_27285[(2)] = null);

(statearr_27207_27285[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27193 === (4))){
var inst_27060 = (state_27192[(11)]);
var inst_27060__$1 = (state_27192[(2)]);
var inst_27061 = (inst_27060__$1 == null);
var state_27192__$1 = (function (){var statearr_27208 = state_27192;
(statearr_27208[(11)] = inst_27060__$1);

return statearr_27208;
})();
if(cljs.core.truth_(inst_27061)){
var statearr_27209_27286 = state_27192__$1;
(statearr_27209_27286[(1)] = (5));

} else {
var statearr_27210_27287 = state_27192__$1;
(statearr_27210_27287[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27193 === (15))){
var inst_27071 = (state_27192[(13)]);
var inst_27070 = (state_27192[(14)]);
var inst_27069 = (state_27192[(15)]);
var inst_27072 = (state_27192[(17)]);
var inst_27087 = (state_27192[(2)]);
var inst_27088 = (inst_27072 + (1));
var tmp27204 = inst_27071;
var tmp27205 = inst_27070;
var tmp27206 = inst_27069;
var inst_27069__$1 = tmp27206;
var inst_27070__$1 = tmp27205;
var inst_27071__$1 = tmp27204;
var inst_27072__$1 = inst_27088;
var state_27192__$1 = (function (){var statearr_27211 = state_27192;
(statearr_27211[(18)] = inst_27087);

(statearr_27211[(13)] = inst_27071__$1);

(statearr_27211[(14)] = inst_27070__$1);

(statearr_27211[(15)] = inst_27069__$1);

(statearr_27211[(17)] = inst_27072__$1);

return statearr_27211;
})();
var statearr_27212_27288 = state_27192__$1;
(statearr_27212_27288[(2)] = null);

(statearr_27212_27288[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27193 === (21))){
var inst_27114 = (state_27192[(2)]);
var state_27192__$1 = state_27192;
var statearr_27216_27289 = state_27192__$1;
(statearr_27216_27289[(2)] = inst_27114);

(statearr_27216_27289[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27193 === (31))){
var inst_27140 = (state_27192[(9)]);
var inst_27144 = done.call(null,null);
var inst_27145 = cljs.core.async.untap_STAR_.call(null,m,inst_27140);
var state_27192__$1 = (function (){var statearr_27217 = state_27192;
(statearr_27217[(19)] = inst_27144);

return statearr_27217;
})();
var statearr_27218_27290 = state_27192__$1;
(statearr_27218_27290[(2)] = inst_27145);

(statearr_27218_27290[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27193 === (32))){
var inst_27132 = (state_27192[(20)]);
var inst_27133 = (state_27192[(10)]);
var inst_27135 = (state_27192[(12)]);
var inst_27134 = (state_27192[(21)]);
var inst_27147 = (state_27192[(2)]);
var inst_27148 = (inst_27135 + (1));
var tmp27213 = inst_27132;
var tmp27214 = inst_27133;
var tmp27215 = inst_27134;
var inst_27132__$1 = tmp27213;
var inst_27133__$1 = tmp27214;
var inst_27134__$1 = tmp27215;
var inst_27135__$1 = inst_27148;
var state_27192__$1 = (function (){var statearr_27219 = state_27192;
(statearr_27219[(20)] = inst_27132__$1);

(statearr_27219[(10)] = inst_27133__$1);

(statearr_27219[(12)] = inst_27135__$1);

(statearr_27219[(22)] = inst_27147);

(statearr_27219[(21)] = inst_27134__$1);

return statearr_27219;
})();
var statearr_27220_27291 = state_27192__$1;
(statearr_27220_27291[(2)] = null);

(statearr_27220_27291[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27193 === (40))){
var inst_27160 = (state_27192[(23)]);
var inst_27164 = done.call(null,null);
var inst_27165 = cljs.core.async.untap_STAR_.call(null,m,inst_27160);
var state_27192__$1 = (function (){var statearr_27221 = state_27192;
(statearr_27221[(24)] = inst_27164);

return statearr_27221;
})();
var statearr_27222_27292 = state_27192__$1;
(statearr_27222_27292[(2)] = inst_27165);

(statearr_27222_27292[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27193 === (33))){
var inst_27151 = (state_27192[(25)]);
var inst_27153 = cljs.core.chunked_seq_QMARK_.call(null,inst_27151);
var state_27192__$1 = state_27192;
if(inst_27153){
var statearr_27223_27293 = state_27192__$1;
(statearr_27223_27293[(1)] = (36));

} else {
var statearr_27224_27294 = state_27192__$1;
(statearr_27224_27294[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27193 === (13))){
var inst_27081 = (state_27192[(26)]);
var inst_27084 = cljs.core.async.close_BANG_.call(null,inst_27081);
var state_27192__$1 = state_27192;
var statearr_27225_27295 = state_27192__$1;
(statearr_27225_27295[(2)] = inst_27084);

(statearr_27225_27295[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27193 === (22))){
var inst_27104 = (state_27192[(8)]);
var inst_27107 = cljs.core.async.close_BANG_.call(null,inst_27104);
var state_27192__$1 = state_27192;
var statearr_27226_27296 = state_27192__$1;
(statearr_27226_27296[(2)] = inst_27107);

(statearr_27226_27296[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27193 === (36))){
var inst_27151 = (state_27192[(25)]);
var inst_27155 = cljs.core.chunk_first.call(null,inst_27151);
var inst_27156 = cljs.core.chunk_rest.call(null,inst_27151);
var inst_27157 = cljs.core.count.call(null,inst_27155);
var inst_27132 = inst_27156;
var inst_27133 = inst_27155;
var inst_27134 = inst_27157;
var inst_27135 = (0);
var state_27192__$1 = (function (){var statearr_27227 = state_27192;
(statearr_27227[(20)] = inst_27132);

(statearr_27227[(10)] = inst_27133);

(statearr_27227[(12)] = inst_27135);

(statearr_27227[(21)] = inst_27134);

return statearr_27227;
})();
var statearr_27228_27297 = state_27192__$1;
(statearr_27228_27297[(2)] = null);

(statearr_27228_27297[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27193 === (41))){
var inst_27151 = (state_27192[(25)]);
var inst_27167 = (state_27192[(2)]);
var inst_27168 = cljs.core.next.call(null,inst_27151);
var inst_27132 = inst_27168;
var inst_27133 = null;
var inst_27134 = (0);
var inst_27135 = (0);
var state_27192__$1 = (function (){var statearr_27229 = state_27192;
(statearr_27229[(27)] = inst_27167);

(statearr_27229[(20)] = inst_27132);

(statearr_27229[(10)] = inst_27133);

(statearr_27229[(12)] = inst_27135);

(statearr_27229[(21)] = inst_27134);

return statearr_27229;
})();
var statearr_27230_27298 = state_27192__$1;
(statearr_27230_27298[(2)] = null);

(statearr_27230_27298[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27193 === (43))){
var state_27192__$1 = state_27192;
var statearr_27231_27299 = state_27192__$1;
(statearr_27231_27299[(2)] = null);

(statearr_27231_27299[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27193 === (29))){
var inst_27176 = (state_27192[(2)]);
var state_27192__$1 = state_27192;
var statearr_27232_27300 = state_27192__$1;
(statearr_27232_27300[(2)] = inst_27176);

(statearr_27232_27300[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27193 === (44))){
var inst_27185 = (state_27192[(2)]);
var state_27192__$1 = (function (){var statearr_27233 = state_27192;
(statearr_27233[(28)] = inst_27185);

return statearr_27233;
})();
var statearr_27234_27301 = state_27192__$1;
(statearr_27234_27301[(2)] = null);

(statearr_27234_27301[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27193 === (6))){
var inst_27124 = (state_27192[(29)]);
var inst_27123 = cljs.core.deref.call(null,cs);
var inst_27124__$1 = cljs.core.keys.call(null,inst_27123);
var inst_27125 = cljs.core.count.call(null,inst_27124__$1);
var inst_27126 = cljs.core.reset_BANG_.call(null,dctr,inst_27125);
var inst_27131 = cljs.core.seq.call(null,inst_27124__$1);
var inst_27132 = inst_27131;
var inst_27133 = null;
var inst_27134 = (0);
var inst_27135 = (0);
var state_27192__$1 = (function (){var statearr_27235 = state_27192;
(statearr_27235[(29)] = inst_27124__$1);

(statearr_27235[(20)] = inst_27132);

(statearr_27235[(10)] = inst_27133);

(statearr_27235[(30)] = inst_27126);

(statearr_27235[(12)] = inst_27135);

(statearr_27235[(21)] = inst_27134);

return statearr_27235;
})();
var statearr_27236_27302 = state_27192__$1;
(statearr_27236_27302[(2)] = null);

(statearr_27236_27302[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27193 === (28))){
var inst_27151 = (state_27192[(25)]);
var inst_27132 = (state_27192[(20)]);
var inst_27151__$1 = cljs.core.seq.call(null,inst_27132);
var state_27192__$1 = (function (){var statearr_27237 = state_27192;
(statearr_27237[(25)] = inst_27151__$1);

return statearr_27237;
})();
if(inst_27151__$1){
var statearr_27238_27303 = state_27192__$1;
(statearr_27238_27303[(1)] = (33));

} else {
var statearr_27239_27304 = state_27192__$1;
(statearr_27239_27304[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27193 === (25))){
var inst_27135 = (state_27192[(12)]);
var inst_27134 = (state_27192[(21)]);
var inst_27137 = (inst_27135 < inst_27134);
var inst_27138 = inst_27137;
var state_27192__$1 = state_27192;
if(cljs.core.truth_(inst_27138)){
var statearr_27240_27305 = state_27192__$1;
(statearr_27240_27305[(1)] = (27));

} else {
var statearr_27241_27306 = state_27192__$1;
(statearr_27241_27306[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27193 === (34))){
var state_27192__$1 = state_27192;
var statearr_27242_27307 = state_27192__$1;
(statearr_27242_27307[(2)] = null);

(statearr_27242_27307[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27193 === (17))){
var state_27192__$1 = state_27192;
var statearr_27243_27308 = state_27192__$1;
(statearr_27243_27308[(2)] = null);

(statearr_27243_27308[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27193 === (3))){
var inst_27190 = (state_27192[(2)]);
var state_27192__$1 = state_27192;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27192__$1,inst_27190);
} else {
if((state_val_27193 === (12))){
var inst_27119 = (state_27192[(2)]);
var state_27192__$1 = state_27192;
var statearr_27244_27309 = state_27192__$1;
(statearr_27244_27309[(2)] = inst_27119);

(statearr_27244_27309[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27193 === (2))){
var state_27192__$1 = state_27192;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27192__$1,(4),ch);
} else {
if((state_val_27193 === (23))){
var state_27192__$1 = state_27192;
var statearr_27245_27310 = state_27192__$1;
(statearr_27245_27310[(2)] = null);

(statearr_27245_27310[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27193 === (35))){
var inst_27174 = (state_27192[(2)]);
var state_27192__$1 = state_27192;
var statearr_27246_27311 = state_27192__$1;
(statearr_27246_27311[(2)] = inst_27174);

(statearr_27246_27311[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27193 === (19))){
var inst_27091 = (state_27192[(7)]);
var inst_27095 = cljs.core.chunk_first.call(null,inst_27091);
var inst_27096 = cljs.core.chunk_rest.call(null,inst_27091);
var inst_27097 = cljs.core.count.call(null,inst_27095);
var inst_27069 = inst_27096;
var inst_27070 = inst_27095;
var inst_27071 = inst_27097;
var inst_27072 = (0);
var state_27192__$1 = (function (){var statearr_27247 = state_27192;
(statearr_27247[(13)] = inst_27071);

(statearr_27247[(14)] = inst_27070);

(statearr_27247[(15)] = inst_27069);

(statearr_27247[(17)] = inst_27072);

return statearr_27247;
})();
var statearr_27248_27312 = state_27192__$1;
(statearr_27248_27312[(2)] = null);

(statearr_27248_27312[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27193 === (11))){
var inst_27069 = (state_27192[(15)]);
var inst_27091 = (state_27192[(7)]);
var inst_27091__$1 = cljs.core.seq.call(null,inst_27069);
var state_27192__$1 = (function (){var statearr_27249 = state_27192;
(statearr_27249[(7)] = inst_27091__$1);

return statearr_27249;
})();
if(inst_27091__$1){
var statearr_27250_27313 = state_27192__$1;
(statearr_27250_27313[(1)] = (16));

} else {
var statearr_27251_27314 = state_27192__$1;
(statearr_27251_27314[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27193 === (9))){
var inst_27121 = (state_27192[(2)]);
var state_27192__$1 = state_27192;
var statearr_27252_27315 = state_27192__$1;
(statearr_27252_27315[(2)] = inst_27121);

(statearr_27252_27315[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27193 === (5))){
var inst_27067 = cljs.core.deref.call(null,cs);
var inst_27068 = cljs.core.seq.call(null,inst_27067);
var inst_27069 = inst_27068;
var inst_27070 = null;
var inst_27071 = (0);
var inst_27072 = (0);
var state_27192__$1 = (function (){var statearr_27253 = state_27192;
(statearr_27253[(13)] = inst_27071);

(statearr_27253[(14)] = inst_27070);

(statearr_27253[(15)] = inst_27069);

(statearr_27253[(17)] = inst_27072);

return statearr_27253;
})();
var statearr_27254_27316 = state_27192__$1;
(statearr_27254_27316[(2)] = null);

(statearr_27254_27316[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27193 === (14))){
var state_27192__$1 = state_27192;
var statearr_27255_27317 = state_27192__$1;
(statearr_27255_27317[(2)] = null);

(statearr_27255_27317[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27193 === (45))){
var inst_27182 = (state_27192[(2)]);
var state_27192__$1 = state_27192;
var statearr_27256_27318 = state_27192__$1;
(statearr_27256_27318[(2)] = inst_27182);

(statearr_27256_27318[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27193 === (26))){
var inst_27124 = (state_27192[(29)]);
var inst_27178 = (state_27192[(2)]);
var inst_27179 = cljs.core.seq.call(null,inst_27124);
var state_27192__$1 = (function (){var statearr_27257 = state_27192;
(statearr_27257[(31)] = inst_27178);

return statearr_27257;
})();
if(inst_27179){
var statearr_27258_27319 = state_27192__$1;
(statearr_27258_27319[(1)] = (42));

} else {
var statearr_27259_27320 = state_27192__$1;
(statearr_27259_27320[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27193 === (16))){
var inst_27091 = (state_27192[(7)]);
var inst_27093 = cljs.core.chunked_seq_QMARK_.call(null,inst_27091);
var state_27192__$1 = state_27192;
if(inst_27093){
var statearr_27260_27321 = state_27192__$1;
(statearr_27260_27321[(1)] = (19));

} else {
var statearr_27261_27322 = state_27192__$1;
(statearr_27261_27322[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27193 === (38))){
var inst_27171 = (state_27192[(2)]);
var state_27192__$1 = state_27192;
var statearr_27262_27323 = state_27192__$1;
(statearr_27262_27323[(2)] = inst_27171);

(statearr_27262_27323[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27193 === (30))){
var state_27192__$1 = state_27192;
var statearr_27263_27324 = state_27192__$1;
(statearr_27263_27324[(2)] = null);

(statearr_27263_27324[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27193 === (10))){
var inst_27070 = (state_27192[(14)]);
var inst_27072 = (state_27192[(17)]);
var inst_27080 = cljs.core._nth.call(null,inst_27070,inst_27072);
var inst_27081 = cljs.core.nth.call(null,inst_27080,(0),null);
var inst_27082 = cljs.core.nth.call(null,inst_27080,(1),null);
var state_27192__$1 = (function (){var statearr_27264 = state_27192;
(statearr_27264[(26)] = inst_27081);

return statearr_27264;
})();
if(cljs.core.truth_(inst_27082)){
var statearr_27265_27325 = state_27192__$1;
(statearr_27265_27325[(1)] = (13));

} else {
var statearr_27266_27326 = state_27192__$1;
(statearr_27266_27326[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27193 === (18))){
var inst_27117 = (state_27192[(2)]);
var state_27192__$1 = state_27192;
var statearr_27267_27327 = state_27192__$1;
(statearr_27267_27327[(2)] = inst_27117);

(statearr_27267_27327[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27193 === (42))){
var state_27192__$1 = state_27192;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27192__$1,(45),dchan);
} else {
if((state_val_27193 === (37))){
var inst_27160 = (state_27192[(23)]);
var inst_27151 = (state_27192[(25)]);
var inst_27060 = (state_27192[(11)]);
var inst_27160__$1 = cljs.core.first.call(null,inst_27151);
var inst_27161 = cljs.core.async.put_BANG_.call(null,inst_27160__$1,inst_27060,done);
var state_27192__$1 = (function (){var statearr_27268 = state_27192;
(statearr_27268[(23)] = inst_27160__$1);

return statearr_27268;
})();
if(cljs.core.truth_(inst_27161)){
var statearr_27269_27328 = state_27192__$1;
(statearr_27269_27328[(1)] = (39));

} else {
var statearr_27270_27329 = state_27192__$1;
(statearr_27270_27329[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27193 === (8))){
var inst_27071 = (state_27192[(13)]);
var inst_27072 = (state_27192[(17)]);
var inst_27074 = (inst_27072 < inst_27071);
var inst_27075 = inst_27074;
var state_27192__$1 = state_27192;
if(cljs.core.truth_(inst_27075)){
var statearr_27271_27330 = state_27192__$1;
(statearr_27271_27330[(1)] = (10));

} else {
var statearr_27272_27331 = state_27192__$1;
(statearr_27272_27331[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__26361__auto__ = null;
var cljs$core$async$mult_$_state_machine__26361__auto____0 = (function (){
var statearr_27273 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27273[(0)] = cljs$core$async$mult_$_state_machine__26361__auto__);

(statearr_27273[(1)] = (1));

return statearr_27273;
});
var cljs$core$async$mult_$_state_machine__26361__auto____1 = (function (state_27192){
while(true){
var ret_value__26362__auto__ = (function (){try{while(true){
var result__26363__auto__ = switch__26360__auto__.call(null,state_27192);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26363__auto__;
}
break;
}
}catch (e27274){if((e27274 instanceof Object)){
var ex__26364__auto__ = e27274;
var statearr_27275_27332 = state_27192;
(statearr_27275_27332[(5)] = ex__26364__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27192);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27274;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27333 = state_27192;
state_27192 = G__27333;
continue;
} else {
return ret_value__26362__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__26361__auto__ = function(state_27192){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__26361__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__26361__auto____1.call(this,state_27192);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__26361__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__26361__auto____0;
cljs$core$async$mult_$_state_machine__26361__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__26361__auto____1;
return cljs$core$async$mult_$_state_machine__26361__auto__;
})()
})();
var state__26457__auto__ = (function (){var statearr_27276 = f__26456__auto__.call(null);
(statearr_27276[(6)] = c__26455__auto___27277);

return statearr_27276;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26457__auto__);
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
var G__27335 = arguments.length;
switch (G__27335) {
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

var cljs$core$async$Mix$admix_STAR_$dyn_27337 = (function (m,ch){
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
return cljs$core$async$Mix$admix_STAR_$dyn_27337.call(null,m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_27338 = (function (m,ch){
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
return cljs$core$async$Mix$unmix_STAR_$dyn_27338.call(null,m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_27339 = (function (m){
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
return cljs$core$async$Mix$unmix_all_STAR_$dyn_27339.call(null,m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_27340 = (function (m,state_map){
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
return cljs$core$async$Mix$toggle_STAR_$dyn_27340.call(null,m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_27341 = (function (m,mode){
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
return cljs$core$async$Mix$solo_mode_STAR_$dyn_27341.call(null,m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___27352 = arguments.length;
var i__4737__auto___27353 = (0);
while(true){
if((i__4737__auto___27353 < len__4736__auto___27352)){
args__4742__auto__.push((arguments[i__4737__auto___27353]));

var G__27354 = (i__4737__auto___27353 + (1));
i__4737__auto___27353 = G__27354;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__27346){
var map__27347 = p__27346;
var map__27347__$1 = (((((!((map__27347 == null))))?(((((map__27347.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27347.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27347):map__27347);
var opts = map__27347__$1;
var statearr_27349_27355 = state;
(statearr_27349_27355[(1)] = cont_block);


var temp__5720__auto__ = cljs.core.async.do_alts.call(null,(function (val){
var statearr_27350_27356 = state;
(statearr_27350_27356[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
}),ports,opts);
if(cljs.core.truth_(temp__5720__auto__)){
var cb = temp__5720__auto__;
var statearr_27351_27357 = state;
(statearr_27351_27357[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq27342){
var G__27343 = cljs.core.first.call(null,seq27342);
var seq27342__$1 = cljs.core.next.call(null,seq27342);
var G__27344 = cljs.core.first.call(null,seq27342__$1);
var seq27342__$2 = cljs.core.next.call(null,seq27342__$1);
var G__27345 = cljs.core.first.call(null,seq27342__$2);
var seq27342__$3 = cljs.core.next.call(null,seq27342__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27343,G__27344,G__27345,seq27342__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async27358 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27358 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta27359){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta27359 = meta27359;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async27358.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27360,meta27359__$1){
var self__ = this;
var _27360__$1 = this;
return (new cljs.core.async.t_cljs$core$async27358(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta27359__$1));
}));

(cljs.core.async.t_cljs$core$async27358.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27360){
var self__ = this;
var _27360__$1 = this;
return self__.meta27359;
}));

(cljs.core.async.t_cljs$core$async27358.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async27358.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async27358.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async27358.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async27358.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async27358.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async27358.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async27358.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async27358.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta27359","meta27359",-842061681,null)], null);
}));

(cljs.core.async.t_cljs$core$async27358.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async27358.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27358");

(cljs.core.async.t_cljs$core$async27358.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async27358");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27358.
 */
cljs.core.async.__GT_t_cljs$core$async27358 = (function cljs$core$async$mix_$___GT_t_cljs$core$async27358(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta27359){
return (new cljs.core.async.t_cljs$core$async27358(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta27359));
});

}

return (new cljs.core.async.t_cljs$core$async27358(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__26455__auto___27522 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__26456__auto__ = (function (){var switch__26360__auto__ = (function (state_27462){
var state_val_27463 = (state_27462[(1)]);
if((state_val_27463 === (7))){
var inst_27377 = (state_27462[(2)]);
var state_27462__$1 = state_27462;
var statearr_27464_27523 = state_27462__$1;
(statearr_27464_27523[(2)] = inst_27377);

(statearr_27464_27523[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27463 === (20))){
var inst_27389 = (state_27462[(7)]);
var state_27462__$1 = state_27462;
var statearr_27465_27524 = state_27462__$1;
(statearr_27465_27524[(2)] = inst_27389);

(statearr_27465_27524[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27463 === (27))){
var state_27462__$1 = state_27462;
var statearr_27466_27525 = state_27462__$1;
(statearr_27466_27525[(2)] = null);

(statearr_27466_27525[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27463 === (1))){
var inst_27364 = (state_27462[(8)]);
var inst_27364__$1 = calc_state.call(null);
var inst_27366 = (inst_27364__$1 == null);
var inst_27367 = cljs.core.not.call(null,inst_27366);
var state_27462__$1 = (function (){var statearr_27467 = state_27462;
(statearr_27467[(8)] = inst_27364__$1);

return statearr_27467;
})();
if(inst_27367){
var statearr_27468_27526 = state_27462__$1;
(statearr_27468_27526[(1)] = (2));

} else {
var statearr_27469_27527 = state_27462__$1;
(statearr_27469_27527[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27463 === (24))){
var inst_27422 = (state_27462[(9)]);
var inst_27436 = (state_27462[(10)]);
var inst_27413 = (state_27462[(11)]);
var inst_27436__$1 = inst_27413.call(null,inst_27422);
var state_27462__$1 = (function (){var statearr_27470 = state_27462;
(statearr_27470[(10)] = inst_27436__$1);

return statearr_27470;
})();
if(cljs.core.truth_(inst_27436__$1)){
var statearr_27471_27528 = state_27462__$1;
(statearr_27471_27528[(1)] = (29));

} else {
var statearr_27472_27529 = state_27462__$1;
(statearr_27472_27529[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27463 === (4))){
var inst_27380 = (state_27462[(2)]);
var state_27462__$1 = state_27462;
if(cljs.core.truth_(inst_27380)){
var statearr_27473_27530 = state_27462__$1;
(statearr_27473_27530[(1)] = (8));

} else {
var statearr_27474_27531 = state_27462__$1;
(statearr_27474_27531[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27463 === (15))){
var inst_27407 = (state_27462[(2)]);
var state_27462__$1 = state_27462;
if(cljs.core.truth_(inst_27407)){
var statearr_27475_27532 = state_27462__$1;
(statearr_27475_27532[(1)] = (19));

} else {
var statearr_27476_27533 = state_27462__$1;
(statearr_27476_27533[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27463 === (21))){
var inst_27412 = (state_27462[(12)]);
var inst_27412__$1 = (state_27462[(2)]);
var inst_27413 = cljs.core.get.call(null,inst_27412__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_27414 = cljs.core.get.call(null,inst_27412__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_27415 = cljs.core.get.call(null,inst_27412__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_27462__$1 = (function (){var statearr_27477 = state_27462;
(statearr_27477[(13)] = inst_27414);

(statearr_27477[(11)] = inst_27413);

(statearr_27477[(12)] = inst_27412__$1);

return statearr_27477;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_27462__$1,(22),inst_27415);
} else {
if((state_val_27463 === (31))){
var inst_27444 = (state_27462[(2)]);
var state_27462__$1 = state_27462;
if(cljs.core.truth_(inst_27444)){
var statearr_27478_27534 = state_27462__$1;
(statearr_27478_27534[(1)] = (32));

} else {
var statearr_27479_27535 = state_27462__$1;
(statearr_27479_27535[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27463 === (32))){
var inst_27421 = (state_27462[(14)]);
var state_27462__$1 = state_27462;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27462__$1,(35),out,inst_27421);
} else {
if((state_val_27463 === (33))){
var inst_27412 = (state_27462[(12)]);
var inst_27389 = inst_27412;
var state_27462__$1 = (function (){var statearr_27480 = state_27462;
(statearr_27480[(7)] = inst_27389);

return statearr_27480;
})();
var statearr_27481_27536 = state_27462__$1;
(statearr_27481_27536[(2)] = null);

(statearr_27481_27536[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27463 === (13))){
var inst_27389 = (state_27462[(7)]);
var inst_27396 = inst_27389.cljs$lang$protocol_mask$partition0$;
var inst_27397 = (inst_27396 & (64));
var inst_27398 = inst_27389.cljs$core$ISeq$;
var inst_27399 = (cljs.core.PROTOCOL_SENTINEL === inst_27398);
var inst_27400 = ((inst_27397) || (inst_27399));
var state_27462__$1 = state_27462;
if(cljs.core.truth_(inst_27400)){
var statearr_27482_27537 = state_27462__$1;
(statearr_27482_27537[(1)] = (16));

} else {
var statearr_27483_27538 = state_27462__$1;
(statearr_27483_27538[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27463 === (22))){
var inst_27422 = (state_27462[(9)]);
var inst_27421 = (state_27462[(14)]);
var inst_27420 = (state_27462[(2)]);
var inst_27421__$1 = cljs.core.nth.call(null,inst_27420,(0),null);
var inst_27422__$1 = cljs.core.nth.call(null,inst_27420,(1),null);
var inst_27423 = (inst_27421__$1 == null);
var inst_27424 = cljs.core._EQ_.call(null,inst_27422__$1,change);
var inst_27425 = ((inst_27423) || (inst_27424));
var state_27462__$1 = (function (){var statearr_27484 = state_27462;
(statearr_27484[(9)] = inst_27422__$1);

(statearr_27484[(14)] = inst_27421__$1);

return statearr_27484;
})();
if(cljs.core.truth_(inst_27425)){
var statearr_27485_27539 = state_27462__$1;
(statearr_27485_27539[(1)] = (23));

} else {
var statearr_27486_27540 = state_27462__$1;
(statearr_27486_27540[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27463 === (36))){
var inst_27412 = (state_27462[(12)]);
var inst_27389 = inst_27412;
var state_27462__$1 = (function (){var statearr_27487 = state_27462;
(statearr_27487[(7)] = inst_27389);

return statearr_27487;
})();
var statearr_27488_27541 = state_27462__$1;
(statearr_27488_27541[(2)] = null);

(statearr_27488_27541[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27463 === (29))){
var inst_27436 = (state_27462[(10)]);
var state_27462__$1 = state_27462;
var statearr_27489_27542 = state_27462__$1;
(statearr_27489_27542[(2)] = inst_27436);

(statearr_27489_27542[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27463 === (6))){
var state_27462__$1 = state_27462;
var statearr_27490_27543 = state_27462__$1;
(statearr_27490_27543[(2)] = false);

(statearr_27490_27543[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27463 === (28))){
var inst_27432 = (state_27462[(2)]);
var inst_27433 = calc_state.call(null);
var inst_27389 = inst_27433;
var state_27462__$1 = (function (){var statearr_27491 = state_27462;
(statearr_27491[(15)] = inst_27432);

(statearr_27491[(7)] = inst_27389);

return statearr_27491;
})();
var statearr_27492_27544 = state_27462__$1;
(statearr_27492_27544[(2)] = null);

(statearr_27492_27544[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27463 === (25))){
var inst_27458 = (state_27462[(2)]);
var state_27462__$1 = state_27462;
var statearr_27493_27545 = state_27462__$1;
(statearr_27493_27545[(2)] = inst_27458);

(statearr_27493_27545[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27463 === (34))){
var inst_27456 = (state_27462[(2)]);
var state_27462__$1 = state_27462;
var statearr_27494_27546 = state_27462__$1;
(statearr_27494_27546[(2)] = inst_27456);

(statearr_27494_27546[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27463 === (17))){
var state_27462__$1 = state_27462;
var statearr_27495_27547 = state_27462__$1;
(statearr_27495_27547[(2)] = false);

(statearr_27495_27547[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27463 === (3))){
var state_27462__$1 = state_27462;
var statearr_27496_27548 = state_27462__$1;
(statearr_27496_27548[(2)] = false);

(statearr_27496_27548[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27463 === (12))){
var inst_27460 = (state_27462[(2)]);
var state_27462__$1 = state_27462;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27462__$1,inst_27460);
} else {
if((state_val_27463 === (2))){
var inst_27364 = (state_27462[(8)]);
var inst_27369 = inst_27364.cljs$lang$protocol_mask$partition0$;
var inst_27370 = (inst_27369 & (64));
var inst_27371 = inst_27364.cljs$core$ISeq$;
var inst_27372 = (cljs.core.PROTOCOL_SENTINEL === inst_27371);
var inst_27373 = ((inst_27370) || (inst_27372));
var state_27462__$1 = state_27462;
if(cljs.core.truth_(inst_27373)){
var statearr_27497_27549 = state_27462__$1;
(statearr_27497_27549[(1)] = (5));

} else {
var statearr_27498_27550 = state_27462__$1;
(statearr_27498_27550[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27463 === (23))){
var inst_27421 = (state_27462[(14)]);
var inst_27427 = (inst_27421 == null);
var state_27462__$1 = state_27462;
if(cljs.core.truth_(inst_27427)){
var statearr_27499_27551 = state_27462__$1;
(statearr_27499_27551[(1)] = (26));

} else {
var statearr_27500_27552 = state_27462__$1;
(statearr_27500_27552[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27463 === (35))){
var inst_27447 = (state_27462[(2)]);
var state_27462__$1 = state_27462;
if(cljs.core.truth_(inst_27447)){
var statearr_27501_27553 = state_27462__$1;
(statearr_27501_27553[(1)] = (36));

} else {
var statearr_27502_27554 = state_27462__$1;
(statearr_27502_27554[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27463 === (19))){
var inst_27389 = (state_27462[(7)]);
var inst_27409 = cljs.core.apply.call(null,cljs.core.hash_map,inst_27389);
var state_27462__$1 = state_27462;
var statearr_27503_27555 = state_27462__$1;
(statearr_27503_27555[(2)] = inst_27409);

(statearr_27503_27555[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27463 === (11))){
var inst_27389 = (state_27462[(7)]);
var inst_27393 = (inst_27389 == null);
var inst_27394 = cljs.core.not.call(null,inst_27393);
var state_27462__$1 = state_27462;
if(inst_27394){
var statearr_27504_27556 = state_27462__$1;
(statearr_27504_27556[(1)] = (13));

} else {
var statearr_27505_27557 = state_27462__$1;
(statearr_27505_27557[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27463 === (9))){
var inst_27364 = (state_27462[(8)]);
var state_27462__$1 = state_27462;
var statearr_27506_27558 = state_27462__$1;
(statearr_27506_27558[(2)] = inst_27364);

(statearr_27506_27558[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27463 === (5))){
var state_27462__$1 = state_27462;
var statearr_27507_27559 = state_27462__$1;
(statearr_27507_27559[(2)] = true);

(statearr_27507_27559[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27463 === (14))){
var state_27462__$1 = state_27462;
var statearr_27508_27560 = state_27462__$1;
(statearr_27508_27560[(2)] = false);

(statearr_27508_27560[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27463 === (26))){
var inst_27422 = (state_27462[(9)]);
var inst_27429 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_27422);
var state_27462__$1 = state_27462;
var statearr_27509_27561 = state_27462__$1;
(statearr_27509_27561[(2)] = inst_27429);

(statearr_27509_27561[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27463 === (16))){
var state_27462__$1 = state_27462;
var statearr_27510_27562 = state_27462__$1;
(statearr_27510_27562[(2)] = true);

(statearr_27510_27562[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27463 === (38))){
var inst_27452 = (state_27462[(2)]);
var state_27462__$1 = state_27462;
var statearr_27511_27563 = state_27462__$1;
(statearr_27511_27563[(2)] = inst_27452);

(statearr_27511_27563[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27463 === (30))){
var inst_27414 = (state_27462[(13)]);
var inst_27422 = (state_27462[(9)]);
var inst_27413 = (state_27462[(11)]);
var inst_27439 = cljs.core.empty_QMARK_.call(null,inst_27413);
var inst_27440 = inst_27414.call(null,inst_27422);
var inst_27441 = cljs.core.not.call(null,inst_27440);
var inst_27442 = ((inst_27439) && (inst_27441));
var state_27462__$1 = state_27462;
var statearr_27512_27564 = state_27462__$1;
(statearr_27512_27564[(2)] = inst_27442);

(statearr_27512_27564[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27463 === (10))){
var inst_27364 = (state_27462[(8)]);
var inst_27385 = (state_27462[(2)]);
var inst_27386 = cljs.core.get.call(null,inst_27385,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_27387 = cljs.core.get.call(null,inst_27385,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_27388 = cljs.core.get.call(null,inst_27385,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_27389 = inst_27364;
var state_27462__$1 = (function (){var statearr_27513 = state_27462;
(statearr_27513[(16)] = inst_27386);

(statearr_27513[(17)] = inst_27387);

(statearr_27513[(7)] = inst_27389);

(statearr_27513[(18)] = inst_27388);

return statearr_27513;
})();
var statearr_27514_27565 = state_27462__$1;
(statearr_27514_27565[(2)] = null);

(statearr_27514_27565[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27463 === (18))){
var inst_27404 = (state_27462[(2)]);
var state_27462__$1 = state_27462;
var statearr_27515_27566 = state_27462__$1;
(statearr_27515_27566[(2)] = inst_27404);

(statearr_27515_27566[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27463 === (37))){
var state_27462__$1 = state_27462;
var statearr_27516_27567 = state_27462__$1;
(statearr_27516_27567[(2)] = null);

(statearr_27516_27567[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27463 === (8))){
var inst_27364 = (state_27462[(8)]);
var inst_27382 = cljs.core.apply.call(null,cljs.core.hash_map,inst_27364);
var state_27462__$1 = state_27462;
var statearr_27517_27568 = state_27462__$1;
(statearr_27517_27568[(2)] = inst_27382);

(statearr_27517_27568[(1)] = (10));


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
var cljs$core$async$mix_$_state_machine__26361__auto__ = null;
var cljs$core$async$mix_$_state_machine__26361__auto____0 = (function (){
var statearr_27518 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27518[(0)] = cljs$core$async$mix_$_state_machine__26361__auto__);

(statearr_27518[(1)] = (1));

return statearr_27518;
});
var cljs$core$async$mix_$_state_machine__26361__auto____1 = (function (state_27462){
while(true){
var ret_value__26362__auto__ = (function (){try{while(true){
var result__26363__auto__ = switch__26360__auto__.call(null,state_27462);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26363__auto__;
}
break;
}
}catch (e27519){if((e27519 instanceof Object)){
var ex__26364__auto__ = e27519;
var statearr_27520_27569 = state_27462;
(statearr_27520_27569[(5)] = ex__26364__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27462);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27519;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27570 = state_27462;
state_27462 = G__27570;
continue;
} else {
return ret_value__26362__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__26361__auto__ = function(state_27462){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__26361__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__26361__auto____1.call(this,state_27462);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__26361__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__26361__auto____0;
cljs$core$async$mix_$_state_machine__26361__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__26361__auto____1;
return cljs$core$async$mix_$_state_machine__26361__auto__;
})()
})();
var state__26457__auto__ = (function (){var statearr_27521 = f__26456__auto__.call(null);
(statearr_27521[(6)] = c__26455__auto___27522);

return statearr_27521;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26457__auto__);
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

var cljs$core$async$Pub$sub_STAR_$dyn_27573 = (function (p,v,ch,close_QMARK_){
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
return cljs$core$async$Pub$sub_STAR_$dyn_27573.call(null,p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_27574 = (function (p,v,ch){
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
return cljs$core$async$Pub$unsub_STAR_$dyn_27574.call(null,p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_27575 = (function() {
var G__27576 = null;
var G__27576__1 = (function (p){
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
var G__27576__2 = (function (p,v){
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
G__27576 = function(p,v){
switch(arguments.length){
case 1:
return G__27576__1.call(this,p);
case 2:
return G__27576__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__27576.cljs$core$IFn$_invoke$arity$1 = G__27576__1;
G__27576.cljs$core$IFn$_invoke$arity$2 = G__27576__2;
return G__27576;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__27572 = arguments.length;
switch (G__27572) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_27575.call(null,p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_27575.call(null,p,v);
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
var G__27580 = arguments.length;
switch (G__27580) {
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
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,(function (p1__27578_SHARP_){
if(cljs.core.truth_(p1__27578_SHARP_.call(null,topic))){
return p1__27578_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__27578_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async27581 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27581 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta27582){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta27582 = meta27582;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async27581.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27583,meta27582__$1){
var self__ = this;
var _27583__$1 = this;
return (new cljs.core.async.t_cljs$core$async27581(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta27582__$1));
}));

(cljs.core.async.t_cljs$core$async27581.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27583){
var self__ = this;
var _27583__$1 = this;
return self__.meta27582;
}));

(cljs.core.async.t_cljs$core$async27581.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async27581.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async27581.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async27581.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async27581.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async27581.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async27581.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async27581.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta27582","meta27582",-1351202414,null)], null);
}));

(cljs.core.async.t_cljs$core$async27581.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async27581.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27581");

(cljs.core.async.t_cljs$core$async27581.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async27581");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27581.
 */
cljs.core.async.__GT_t_cljs$core$async27581 = (function cljs$core$async$__GT_t_cljs$core$async27581(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta27582){
return (new cljs.core.async.t_cljs$core$async27581(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta27582));
});

}

return (new cljs.core.async.t_cljs$core$async27581(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__26455__auto___27701 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__26456__auto__ = (function (){var switch__26360__auto__ = (function (state_27655){
var state_val_27656 = (state_27655[(1)]);
if((state_val_27656 === (7))){
var inst_27651 = (state_27655[(2)]);
var state_27655__$1 = state_27655;
var statearr_27657_27702 = state_27655__$1;
(statearr_27657_27702[(2)] = inst_27651);

(statearr_27657_27702[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27656 === (20))){
var state_27655__$1 = state_27655;
var statearr_27658_27703 = state_27655__$1;
(statearr_27658_27703[(2)] = null);

(statearr_27658_27703[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27656 === (1))){
var state_27655__$1 = state_27655;
var statearr_27659_27704 = state_27655__$1;
(statearr_27659_27704[(2)] = null);

(statearr_27659_27704[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27656 === (24))){
var inst_27634 = (state_27655[(7)]);
var inst_27643 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_27634);
var state_27655__$1 = state_27655;
var statearr_27660_27705 = state_27655__$1;
(statearr_27660_27705[(2)] = inst_27643);

(statearr_27660_27705[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27656 === (4))){
var inst_27586 = (state_27655[(8)]);
var inst_27586__$1 = (state_27655[(2)]);
var inst_27587 = (inst_27586__$1 == null);
var state_27655__$1 = (function (){var statearr_27661 = state_27655;
(statearr_27661[(8)] = inst_27586__$1);

return statearr_27661;
})();
if(cljs.core.truth_(inst_27587)){
var statearr_27662_27706 = state_27655__$1;
(statearr_27662_27706[(1)] = (5));

} else {
var statearr_27663_27707 = state_27655__$1;
(statearr_27663_27707[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27656 === (15))){
var inst_27628 = (state_27655[(2)]);
var state_27655__$1 = state_27655;
var statearr_27664_27708 = state_27655__$1;
(statearr_27664_27708[(2)] = inst_27628);

(statearr_27664_27708[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27656 === (21))){
var inst_27648 = (state_27655[(2)]);
var state_27655__$1 = (function (){var statearr_27665 = state_27655;
(statearr_27665[(9)] = inst_27648);

return statearr_27665;
})();
var statearr_27666_27709 = state_27655__$1;
(statearr_27666_27709[(2)] = null);

(statearr_27666_27709[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27656 === (13))){
var inst_27610 = (state_27655[(10)]);
var inst_27612 = cljs.core.chunked_seq_QMARK_.call(null,inst_27610);
var state_27655__$1 = state_27655;
if(inst_27612){
var statearr_27667_27710 = state_27655__$1;
(statearr_27667_27710[(1)] = (16));

} else {
var statearr_27668_27711 = state_27655__$1;
(statearr_27668_27711[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27656 === (22))){
var inst_27640 = (state_27655[(2)]);
var state_27655__$1 = state_27655;
if(cljs.core.truth_(inst_27640)){
var statearr_27669_27712 = state_27655__$1;
(statearr_27669_27712[(1)] = (23));

} else {
var statearr_27670_27713 = state_27655__$1;
(statearr_27670_27713[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27656 === (6))){
var inst_27586 = (state_27655[(8)]);
var inst_27636 = (state_27655[(11)]);
var inst_27634 = (state_27655[(7)]);
var inst_27634__$1 = topic_fn.call(null,inst_27586);
var inst_27635 = cljs.core.deref.call(null,mults);
var inst_27636__$1 = cljs.core.get.call(null,inst_27635,inst_27634__$1);
var state_27655__$1 = (function (){var statearr_27671 = state_27655;
(statearr_27671[(11)] = inst_27636__$1);

(statearr_27671[(7)] = inst_27634__$1);

return statearr_27671;
})();
if(cljs.core.truth_(inst_27636__$1)){
var statearr_27672_27714 = state_27655__$1;
(statearr_27672_27714[(1)] = (19));

} else {
var statearr_27673_27715 = state_27655__$1;
(statearr_27673_27715[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27656 === (25))){
var inst_27645 = (state_27655[(2)]);
var state_27655__$1 = state_27655;
var statearr_27674_27716 = state_27655__$1;
(statearr_27674_27716[(2)] = inst_27645);

(statearr_27674_27716[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27656 === (17))){
var inst_27610 = (state_27655[(10)]);
var inst_27619 = cljs.core.first.call(null,inst_27610);
var inst_27620 = cljs.core.async.muxch_STAR_.call(null,inst_27619);
var inst_27621 = cljs.core.async.close_BANG_.call(null,inst_27620);
var inst_27622 = cljs.core.next.call(null,inst_27610);
var inst_27596 = inst_27622;
var inst_27597 = null;
var inst_27598 = (0);
var inst_27599 = (0);
var state_27655__$1 = (function (){var statearr_27675 = state_27655;
(statearr_27675[(12)] = inst_27599);

(statearr_27675[(13)] = inst_27598);

(statearr_27675[(14)] = inst_27621);

(statearr_27675[(15)] = inst_27597);

(statearr_27675[(16)] = inst_27596);

return statearr_27675;
})();
var statearr_27676_27717 = state_27655__$1;
(statearr_27676_27717[(2)] = null);

(statearr_27676_27717[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27656 === (3))){
var inst_27653 = (state_27655[(2)]);
var state_27655__$1 = state_27655;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27655__$1,inst_27653);
} else {
if((state_val_27656 === (12))){
var inst_27630 = (state_27655[(2)]);
var state_27655__$1 = state_27655;
var statearr_27677_27718 = state_27655__$1;
(statearr_27677_27718[(2)] = inst_27630);

(statearr_27677_27718[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27656 === (2))){
var state_27655__$1 = state_27655;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27655__$1,(4),ch);
} else {
if((state_val_27656 === (23))){
var state_27655__$1 = state_27655;
var statearr_27678_27719 = state_27655__$1;
(statearr_27678_27719[(2)] = null);

(statearr_27678_27719[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27656 === (19))){
var inst_27586 = (state_27655[(8)]);
var inst_27636 = (state_27655[(11)]);
var inst_27638 = cljs.core.async.muxch_STAR_.call(null,inst_27636);
var state_27655__$1 = state_27655;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27655__$1,(22),inst_27638,inst_27586);
} else {
if((state_val_27656 === (11))){
var inst_27610 = (state_27655[(10)]);
var inst_27596 = (state_27655[(16)]);
var inst_27610__$1 = cljs.core.seq.call(null,inst_27596);
var state_27655__$1 = (function (){var statearr_27679 = state_27655;
(statearr_27679[(10)] = inst_27610__$1);

return statearr_27679;
})();
if(inst_27610__$1){
var statearr_27680_27720 = state_27655__$1;
(statearr_27680_27720[(1)] = (13));

} else {
var statearr_27681_27721 = state_27655__$1;
(statearr_27681_27721[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27656 === (9))){
var inst_27632 = (state_27655[(2)]);
var state_27655__$1 = state_27655;
var statearr_27682_27722 = state_27655__$1;
(statearr_27682_27722[(2)] = inst_27632);

(statearr_27682_27722[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27656 === (5))){
var inst_27593 = cljs.core.deref.call(null,mults);
var inst_27594 = cljs.core.vals.call(null,inst_27593);
var inst_27595 = cljs.core.seq.call(null,inst_27594);
var inst_27596 = inst_27595;
var inst_27597 = null;
var inst_27598 = (0);
var inst_27599 = (0);
var state_27655__$1 = (function (){var statearr_27683 = state_27655;
(statearr_27683[(12)] = inst_27599);

(statearr_27683[(13)] = inst_27598);

(statearr_27683[(15)] = inst_27597);

(statearr_27683[(16)] = inst_27596);

return statearr_27683;
})();
var statearr_27684_27723 = state_27655__$1;
(statearr_27684_27723[(2)] = null);

(statearr_27684_27723[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27656 === (14))){
var state_27655__$1 = state_27655;
var statearr_27688_27724 = state_27655__$1;
(statearr_27688_27724[(2)] = null);

(statearr_27688_27724[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27656 === (16))){
var inst_27610 = (state_27655[(10)]);
var inst_27614 = cljs.core.chunk_first.call(null,inst_27610);
var inst_27615 = cljs.core.chunk_rest.call(null,inst_27610);
var inst_27616 = cljs.core.count.call(null,inst_27614);
var inst_27596 = inst_27615;
var inst_27597 = inst_27614;
var inst_27598 = inst_27616;
var inst_27599 = (0);
var state_27655__$1 = (function (){var statearr_27689 = state_27655;
(statearr_27689[(12)] = inst_27599);

(statearr_27689[(13)] = inst_27598);

(statearr_27689[(15)] = inst_27597);

(statearr_27689[(16)] = inst_27596);

return statearr_27689;
})();
var statearr_27690_27725 = state_27655__$1;
(statearr_27690_27725[(2)] = null);

(statearr_27690_27725[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27656 === (10))){
var inst_27599 = (state_27655[(12)]);
var inst_27598 = (state_27655[(13)]);
var inst_27597 = (state_27655[(15)]);
var inst_27596 = (state_27655[(16)]);
var inst_27604 = cljs.core._nth.call(null,inst_27597,inst_27599);
var inst_27605 = cljs.core.async.muxch_STAR_.call(null,inst_27604);
var inst_27606 = cljs.core.async.close_BANG_.call(null,inst_27605);
var inst_27607 = (inst_27599 + (1));
var tmp27685 = inst_27598;
var tmp27686 = inst_27597;
var tmp27687 = inst_27596;
var inst_27596__$1 = tmp27687;
var inst_27597__$1 = tmp27686;
var inst_27598__$1 = tmp27685;
var inst_27599__$1 = inst_27607;
var state_27655__$1 = (function (){var statearr_27691 = state_27655;
(statearr_27691[(12)] = inst_27599__$1);

(statearr_27691[(13)] = inst_27598__$1);

(statearr_27691[(17)] = inst_27606);

(statearr_27691[(15)] = inst_27597__$1);

(statearr_27691[(16)] = inst_27596__$1);

return statearr_27691;
})();
var statearr_27692_27726 = state_27655__$1;
(statearr_27692_27726[(2)] = null);

(statearr_27692_27726[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27656 === (18))){
var inst_27625 = (state_27655[(2)]);
var state_27655__$1 = state_27655;
var statearr_27693_27727 = state_27655__$1;
(statearr_27693_27727[(2)] = inst_27625);

(statearr_27693_27727[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27656 === (8))){
var inst_27599 = (state_27655[(12)]);
var inst_27598 = (state_27655[(13)]);
var inst_27601 = (inst_27599 < inst_27598);
var inst_27602 = inst_27601;
var state_27655__$1 = state_27655;
if(cljs.core.truth_(inst_27602)){
var statearr_27694_27728 = state_27655__$1;
(statearr_27694_27728[(1)] = (10));

} else {
var statearr_27695_27729 = state_27655__$1;
(statearr_27695_27729[(1)] = (11));

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
var cljs$core$async$state_machine__26361__auto__ = null;
var cljs$core$async$state_machine__26361__auto____0 = (function (){
var statearr_27696 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27696[(0)] = cljs$core$async$state_machine__26361__auto__);

(statearr_27696[(1)] = (1));

return statearr_27696;
});
var cljs$core$async$state_machine__26361__auto____1 = (function (state_27655){
while(true){
var ret_value__26362__auto__ = (function (){try{while(true){
var result__26363__auto__ = switch__26360__auto__.call(null,state_27655);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26363__auto__;
}
break;
}
}catch (e27697){if((e27697 instanceof Object)){
var ex__26364__auto__ = e27697;
var statearr_27698_27730 = state_27655;
(statearr_27698_27730[(5)] = ex__26364__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27655);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27697;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27731 = state_27655;
state_27655 = G__27731;
continue;
} else {
return ret_value__26362__auto__;
}
break;
}
});
cljs$core$async$state_machine__26361__auto__ = function(state_27655){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26361__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26361__auto____1.call(this,state_27655);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26361__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26361__auto____0;
cljs$core$async$state_machine__26361__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26361__auto____1;
return cljs$core$async$state_machine__26361__auto__;
})()
})();
var state__26457__auto__ = (function (){var statearr_27699 = f__26456__auto__.call(null);
(statearr_27699[(6)] = c__26455__auto___27701);

return statearr_27699;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26457__auto__);
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
var G__27733 = arguments.length;
switch (G__27733) {
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
var G__27736 = arguments.length;
switch (G__27736) {
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
var G__27739 = arguments.length;
switch (G__27739) {
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
var c__26455__auto___27806 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__26456__auto__ = (function (){var switch__26360__auto__ = (function (state_27778){
var state_val_27779 = (state_27778[(1)]);
if((state_val_27779 === (7))){
var state_27778__$1 = state_27778;
var statearr_27780_27807 = state_27778__$1;
(statearr_27780_27807[(2)] = null);

(statearr_27780_27807[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27779 === (1))){
var state_27778__$1 = state_27778;
var statearr_27781_27808 = state_27778__$1;
(statearr_27781_27808[(2)] = null);

(statearr_27781_27808[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27779 === (4))){
var inst_27742 = (state_27778[(7)]);
var inst_27744 = (inst_27742 < cnt);
var state_27778__$1 = state_27778;
if(cljs.core.truth_(inst_27744)){
var statearr_27782_27809 = state_27778__$1;
(statearr_27782_27809[(1)] = (6));

} else {
var statearr_27783_27810 = state_27778__$1;
(statearr_27783_27810[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27779 === (15))){
var inst_27774 = (state_27778[(2)]);
var state_27778__$1 = state_27778;
var statearr_27784_27811 = state_27778__$1;
(statearr_27784_27811[(2)] = inst_27774);

(statearr_27784_27811[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27779 === (13))){
var inst_27767 = cljs.core.async.close_BANG_.call(null,out);
var state_27778__$1 = state_27778;
var statearr_27785_27812 = state_27778__$1;
(statearr_27785_27812[(2)] = inst_27767);

(statearr_27785_27812[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27779 === (6))){
var state_27778__$1 = state_27778;
var statearr_27786_27813 = state_27778__$1;
(statearr_27786_27813[(2)] = null);

(statearr_27786_27813[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27779 === (3))){
var inst_27776 = (state_27778[(2)]);
var state_27778__$1 = state_27778;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27778__$1,inst_27776);
} else {
if((state_val_27779 === (12))){
var inst_27764 = (state_27778[(8)]);
var inst_27764__$1 = (state_27778[(2)]);
var inst_27765 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_27764__$1);
var state_27778__$1 = (function (){var statearr_27787 = state_27778;
(statearr_27787[(8)] = inst_27764__$1);

return statearr_27787;
})();
if(cljs.core.truth_(inst_27765)){
var statearr_27788_27814 = state_27778__$1;
(statearr_27788_27814[(1)] = (13));

} else {
var statearr_27789_27815 = state_27778__$1;
(statearr_27789_27815[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27779 === (2))){
var inst_27741 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_27742 = (0);
var state_27778__$1 = (function (){var statearr_27790 = state_27778;
(statearr_27790[(9)] = inst_27741);

(statearr_27790[(7)] = inst_27742);

return statearr_27790;
})();
var statearr_27791_27816 = state_27778__$1;
(statearr_27791_27816[(2)] = null);

(statearr_27791_27816[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27779 === (11))){
var inst_27742 = (state_27778[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_27778,(10),Object,null,(9));
var inst_27751 = chs__$1.call(null,inst_27742);
var inst_27752 = done.call(null,inst_27742);
var inst_27753 = cljs.core.async.take_BANG_.call(null,inst_27751,inst_27752);
var state_27778__$1 = state_27778;
var statearr_27792_27817 = state_27778__$1;
(statearr_27792_27817[(2)] = inst_27753);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27778__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27779 === (9))){
var inst_27742 = (state_27778[(7)]);
var inst_27755 = (state_27778[(2)]);
var inst_27756 = (inst_27742 + (1));
var inst_27742__$1 = inst_27756;
var state_27778__$1 = (function (){var statearr_27793 = state_27778;
(statearr_27793[(10)] = inst_27755);

(statearr_27793[(7)] = inst_27742__$1);

return statearr_27793;
})();
var statearr_27794_27818 = state_27778__$1;
(statearr_27794_27818[(2)] = null);

(statearr_27794_27818[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27779 === (5))){
var inst_27762 = (state_27778[(2)]);
var state_27778__$1 = (function (){var statearr_27795 = state_27778;
(statearr_27795[(11)] = inst_27762);

return statearr_27795;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27778__$1,(12),dchan);
} else {
if((state_val_27779 === (14))){
var inst_27764 = (state_27778[(8)]);
var inst_27769 = cljs.core.apply.call(null,f,inst_27764);
var state_27778__$1 = state_27778;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27778__$1,(16),out,inst_27769);
} else {
if((state_val_27779 === (16))){
var inst_27771 = (state_27778[(2)]);
var state_27778__$1 = (function (){var statearr_27796 = state_27778;
(statearr_27796[(12)] = inst_27771);

return statearr_27796;
})();
var statearr_27797_27819 = state_27778__$1;
(statearr_27797_27819[(2)] = null);

(statearr_27797_27819[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27779 === (10))){
var inst_27746 = (state_27778[(2)]);
var inst_27747 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_27778__$1 = (function (){var statearr_27798 = state_27778;
(statearr_27798[(13)] = inst_27746);

return statearr_27798;
})();
var statearr_27799_27820 = state_27778__$1;
(statearr_27799_27820[(2)] = inst_27747);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27778__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27779 === (8))){
var inst_27760 = (state_27778[(2)]);
var state_27778__$1 = state_27778;
var statearr_27800_27821 = state_27778__$1;
(statearr_27800_27821[(2)] = inst_27760);

(statearr_27800_27821[(1)] = (5));


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
var cljs$core$async$state_machine__26361__auto__ = null;
var cljs$core$async$state_machine__26361__auto____0 = (function (){
var statearr_27801 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27801[(0)] = cljs$core$async$state_machine__26361__auto__);

(statearr_27801[(1)] = (1));

return statearr_27801;
});
var cljs$core$async$state_machine__26361__auto____1 = (function (state_27778){
while(true){
var ret_value__26362__auto__ = (function (){try{while(true){
var result__26363__auto__ = switch__26360__auto__.call(null,state_27778);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26363__auto__;
}
break;
}
}catch (e27802){if((e27802 instanceof Object)){
var ex__26364__auto__ = e27802;
var statearr_27803_27822 = state_27778;
(statearr_27803_27822[(5)] = ex__26364__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27778);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27802;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27823 = state_27778;
state_27778 = G__27823;
continue;
} else {
return ret_value__26362__auto__;
}
break;
}
});
cljs$core$async$state_machine__26361__auto__ = function(state_27778){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26361__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26361__auto____1.call(this,state_27778);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26361__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26361__auto____0;
cljs$core$async$state_machine__26361__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26361__auto____1;
return cljs$core$async$state_machine__26361__auto__;
})()
})();
var state__26457__auto__ = (function (){var statearr_27804 = f__26456__auto__.call(null);
(statearr_27804[(6)] = c__26455__auto___27806);

return statearr_27804;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26457__auto__);
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
var G__27826 = arguments.length;
switch (G__27826) {
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
var c__26455__auto___27880 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__26456__auto__ = (function (){var switch__26360__auto__ = (function (state_27858){
var state_val_27859 = (state_27858[(1)]);
if((state_val_27859 === (7))){
var inst_27838 = (state_27858[(7)]);
var inst_27837 = (state_27858[(8)]);
var inst_27837__$1 = (state_27858[(2)]);
var inst_27838__$1 = cljs.core.nth.call(null,inst_27837__$1,(0),null);
var inst_27839 = cljs.core.nth.call(null,inst_27837__$1,(1),null);
var inst_27840 = (inst_27838__$1 == null);
var state_27858__$1 = (function (){var statearr_27860 = state_27858;
(statearr_27860[(7)] = inst_27838__$1);

(statearr_27860[(8)] = inst_27837__$1);

(statearr_27860[(9)] = inst_27839);

return statearr_27860;
})();
if(cljs.core.truth_(inst_27840)){
var statearr_27861_27881 = state_27858__$1;
(statearr_27861_27881[(1)] = (8));

} else {
var statearr_27862_27882 = state_27858__$1;
(statearr_27862_27882[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27859 === (1))){
var inst_27827 = cljs.core.vec.call(null,chs);
var inst_27828 = inst_27827;
var state_27858__$1 = (function (){var statearr_27863 = state_27858;
(statearr_27863[(10)] = inst_27828);

return statearr_27863;
})();
var statearr_27864_27883 = state_27858__$1;
(statearr_27864_27883[(2)] = null);

(statearr_27864_27883[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27859 === (4))){
var inst_27828 = (state_27858[(10)]);
var state_27858__$1 = state_27858;
return cljs.core.async.ioc_alts_BANG_.call(null,state_27858__$1,(7),inst_27828);
} else {
if((state_val_27859 === (6))){
var inst_27854 = (state_27858[(2)]);
var state_27858__$1 = state_27858;
var statearr_27865_27884 = state_27858__$1;
(statearr_27865_27884[(2)] = inst_27854);

(statearr_27865_27884[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27859 === (3))){
var inst_27856 = (state_27858[(2)]);
var state_27858__$1 = state_27858;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27858__$1,inst_27856);
} else {
if((state_val_27859 === (2))){
var inst_27828 = (state_27858[(10)]);
var inst_27830 = cljs.core.count.call(null,inst_27828);
var inst_27831 = (inst_27830 > (0));
var state_27858__$1 = state_27858;
if(cljs.core.truth_(inst_27831)){
var statearr_27867_27885 = state_27858__$1;
(statearr_27867_27885[(1)] = (4));

} else {
var statearr_27868_27886 = state_27858__$1;
(statearr_27868_27886[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27859 === (11))){
var inst_27828 = (state_27858[(10)]);
var inst_27847 = (state_27858[(2)]);
var tmp27866 = inst_27828;
var inst_27828__$1 = tmp27866;
var state_27858__$1 = (function (){var statearr_27869 = state_27858;
(statearr_27869[(11)] = inst_27847);

(statearr_27869[(10)] = inst_27828__$1);

return statearr_27869;
})();
var statearr_27870_27887 = state_27858__$1;
(statearr_27870_27887[(2)] = null);

(statearr_27870_27887[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27859 === (9))){
var inst_27838 = (state_27858[(7)]);
var state_27858__$1 = state_27858;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27858__$1,(11),out,inst_27838);
} else {
if((state_val_27859 === (5))){
var inst_27852 = cljs.core.async.close_BANG_.call(null,out);
var state_27858__$1 = state_27858;
var statearr_27871_27888 = state_27858__$1;
(statearr_27871_27888[(2)] = inst_27852);

(statearr_27871_27888[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27859 === (10))){
var inst_27850 = (state_27858[(2)]);
var state_27858__$1 = state_27858;
var statearr_27872_27889 = state_27858__$1;
(statearr_27872_27889[(2)] = inst_27850);

(statearr_27872_27889[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27859 === (8))){
var inst_27838 = (state_27858[(7)]);
var inst_27837 = (state_27858[(8)]);
var inst_27828 = (state_27858[(10)]);
var inst_27839 = (state_27858[(9)]);
var inst_27842 = (function (){var cs = inst_27828;
var vec__27833 = inst_27837;
var v = inst_27838;
var c = inst_27839;
return (function (p1__27824_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__27824_SHARP_);
});
})();
var inst_27843 = cljs.core.filterv.call(null,inst_27842,inst_27828);
var inst_27828__$1 = inst_27843;
var state_27858__$1 = (function (){var statearr_27873 = state_27858;
(statearr_27873[(10)] = inst_27828__$1);

return statearr_27873;
})();
var statearr_27874_27890 = state_27858__$1;
(statearr_27874_27890[(2)] = null);

(statearr_27874_27890[(1)] = (2));


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
var cljs$core$async$state_machine__26361__auto__ = null;
var cljs$core$async$state_machine__26361__auto____0 = (function (){
var statearr_27875 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27875[(0)] = cljs$core$async$state_machine__26361__auto__);

(statearr_27875[(1)] = (1));

return statearr_27875;
});
var cljs$core$async$state_machine__26361__auto____1 = (function (state_27858){
while(true){
var ret_value__26362__auto__ = (function (){try{while(true){
var result__26363__auto__ = switch__26360__auto__.call(null,state_27858);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26363__auto__;
}
break;
}
}catch (e27876){if((e27876 instanceof Object)){
var ex__26364__auto__ = e27876;
var statearr_27877_27891 = state_27858;
(statearr_27877_27891[(5)] = ex__26364__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27858);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27876;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27892 = state_27858;
state_27858 = G__27892;
continue;
} else {
return ret_value__26362__auto__;
}
break;
}
});
cljs$core$async$state_machine__26361__auto__ = function(state_27858){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26361__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26361__auto____1.call(this,state_27858);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26361__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26361__auto____0;
cljs$core$async$state_machine__26361__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26361__auto____1;
return cljs$core$async$state_machine__26361__auto__;
})()
})();
var state__26457__auto__ = (function (){var statearr_27878 = f__26456__auto__.call(null);
(statearr_27878[(6)] = c__26455__auto___27880);

return statearr_27878;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26457__auto__);
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
var G__27894 = arguments.length;
switch (G__27894) {
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
var c__26455__auto___27939 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__26456__auto__ = (function (){var switch__26360__auto__ = (function (state_27918){
var state_val_27919 = (state_27918[(1)]);
if((state_val_27919 === (7))){
var inst_27900 = (state_27918[(7)]);
var inst_27900__$1 = (state_27918[(2)]);
var inst_27901 = (inst_27900__$1 == null);
var inst_27902 = cljs.core.not.call(null,inst_27901);
var state_27918__$1 = (function (){var statearr_27920 = state_27918;
(statearr_27920[(7)] = inst_27900__$1);

return statearr_27920;
})();
if(inst_27902){
var statearr_27921_27940 = state_27918__$1;
(statearr_27921_27940[(1)] = (8));

} else {
var statearr_27922_27941 = state_27918__$1;
(statearr_27922_27941[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27919 === (1))){
var inst_27895 = (0);
var state_27918__$1 = (function (){var statearr_27923 = state_27918;
(statearr_27923[(8)] = inst_27895);

return statearr_27923;
})();
var statearr_27924_27942 = state_27918__$1;
(statearr_27924_27942[(2)] = null);

(statearr_27924_27942[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27919 === (4))){
var state_27918__$1 = state_27918;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27918__$1,(7),ch);
} else {
if((state_val_27919 === (6))){
var inst_27913 = (state_27918[(2)]);
var state_27918__$1 = state_27918;
var statearr_27925_27943 = state_27918__$1;
(statearr_27925_27943[(2)] = inst_27913);

(statearr_27925_27943[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27919 === (3))){
var inst_27915 = (state_27918[(2)]);
var inst_27916 = cljs.core.async.close_BANG_.call(null,out);
var state_27918__$1 = (function (){var statearr_27926 = state_27918;
(statearr_27926[(9)] = inst_27915);

return statearr_27926;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27918__$1,inst_27916);
} else {
if((state_val_27919 === (2))){
var inst_27895 = (state_27918[(8)]);
var inst_27897 = (inst_27895 < n);
var state_27918__$1 = state_27918;
if(cljs.core.truth_(inst_27897)){
var statearr_27927_27944 = state_27918__$1;
(statearr_27927_27944[(1)] = (4));

} else {
var statearr_27928_27945 = state_27918__$1;
(statearr_27928_27945[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27919 === (11))){
var inst_27895 = (state_27918[(8)]);
var inst_27905 = (state_27918[(2)]);
var inst_27906 = (inst_27895 + (1));
var inst_27895__$1 = inst_27906;
var state_27918__$1 = (function (){var statearr_27929 = state_27918;
(statearr_27929[(8)] = inst_27895__$1);

(statearr_27929[(10)] = inst_27905);

return statearr_27929;
})();
var statearr_27930_27946 = state_27918__$1;
(statearr_27930_27946[(2)] = null);

(statearr_27930_27946[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27919 === (9))){
var state_27918__$1 = state_27918;
var statearr_27931_27947 = state_27918__$1;
(statearr_27931_27947[(2)] = null);

(statearr_27931_27947[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27919 === (5))){
var state_27918__$1 = state_27918;
var statearr_27932_27948 = state_27918__$1;
(statearr_27932_27948[(2)] = null);

(statearr_27932_27948[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27919 === (10))){
var inst_27910 = (state_27918[(2)]);
var state_27918__$1 = state_27918;
var statearr_27933_27949 = state_27918__$1;
(statearr_27933_27949[(2)] = inst_27910);

(statearr_27933_27949[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27919 === (8))){
var inst_27900 = (state_27918[(7)]);
var state_27918__$1 = state_27918;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27918__$1,(11),out,inst_27900);
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
var cljs$core$async$state_machine__26361__auto__ = null;
var cljs$core$async$state_machine__26361__auto____0 = (function (){
var statearr_27934 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27934[(0)] = cljs$core$async$state_machine__26361__auto__);

(statearr_27934[(1)] = (1));

return statearr_27934;
});
var cljs$core$async$state_machine__26361__auto____1 = (function (state_27918){
while(true){
var ret_value__26362__auto__ = (function (){try{while(true){
var result__26363__auto__ = switch__26360__auto__.call(null,state_27918);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26363__auto__;
}
break;
}
}catch (e27935){if((e27935 instanceof Object)){
var ex__26364__auto__ = e27935;
var statearr_27936_27950 = state_27918;
(statearr_27936_27950[(5)] = ex__26364__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27918);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27935;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27951 = state_27918;
state_27918 = G__27951;
continue;
} else {
return ret_value__26362__auto__;
}
break;
}
});
cljs$core$async$state_machine__26361__auto__ = function(state_27918){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26361__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26361__auto____1.call(this,state_27918);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26361__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26361__auto____0;
cljs$core$async$state_machine__26361__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26361__auto____1;
return cljs$core$async$state_machine__26361__auto__;
})()
})();
var state__26457__auto__ = (function (){var statearr_27937 = f__26456__auto__.call(null);
(statearr_27937[(6)] = c__26455__auto___27939);

return statearr_27937;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26457__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async27953 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27953 = (function (f,ch,meta27954){
this.f = f;
this.ch = ch;
this.meta27954 = meta27954;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async27953.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27955,meta27954__$1){
var self__ = this;
var _27955__$1 = this;
return (new cljs.core.async.t_cljs$core$async27953(self__.f,self__.ch,meta27954__$1));
}));

(cljs.core.async.t_cljs$core$async27953.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27955){
var self__ = this;
var _27955__$1 = this;
return self__.meta27954;
}));

(cljs.core.async.t_cljs$core$async27953.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async27953.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async27953.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async27953.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async27953.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async27956 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27956 = (function (f,ch,meta27954,_,fn1,meta27957){
this.f = f;
this.ch = ch;
this.meta27954 = meta27954;
this._ = _;
this.fn1 = fn1;
this.meta27957 = meta27957;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async27956.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27958,meta27957__$1){
var self__ = this;
var _27958__$1 = this;
return (new cljs.core.async.t_cljs$core$async27956(self__.f,self__.ch,self__.meta27954,self__._,self__.fn1,meta27957__$1));
}));

(cljs.core.async.t_cljs$core$async27956.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27958){
var self__ = this;
var _27958__$1 = this;
return self__.meta27957;
}));

(cljs.core.async.t_cljs$core$async27956.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async27956.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
}));

(cljs.core.async.t_cljs$core$async27956.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async27956.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return (function (p1__27952_SHARP_){
return f1.call(null,(((p1__27952_SHARP_ == null))?null:self__.f.call(null,p1__27952_SHARP_)));
});
}));

(cljs.core.async.t_cljs$core$async27956.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta27954","meta27954",286106582,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async27953","cljs.core.async/t_cljs$core$async27953",865270187,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta27957","meta27957",1012154685,null)], null);
}));

(cljs.core.async.t_cljs$core$async27956.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async27956.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27956");

(cljs.core.async.t_cljs$core$async27956.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async27956");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27956.
 */
cljs.core.async.__GT_t_cljs$core$async27956 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async27956(f__$1,ch__$1,meta27954__$1,___$2,fn1__$1,meta27957){
return (new cljs.core.async.t_cljs$core$async27956(f__$1,ch__$1,meta27954__$1,___$2,fn1__$1,meta27957));
});

}

return (new cljs.core.async.t_cljs$core$async27956(self__.f,self__.ch,self__.meta27954,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

(cljs.core.async.t_cljs$core$async27953.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async27953.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async27953.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta27954","meta27954",286106582,null)], null);
}));

(cljs.core.async.t_cljs$core$async27953.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async27953.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27953");

(cljs.core.async.t_cljs$core$async27953.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async27953");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27953.
 */
cljs.core.async.__GT_t_cljs$core$async27953 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async27953(f__$1,ch__$1,meta27954){
return (new cljs.core.async.t_cljs$core$async27953(f__$1,ch__$1,meta27954));
});

}

return (new cljs.core.async.t_cljs$core$async27953(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async27959 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27959 = (function (f,ch,meta27960){
this.f = f;
this.ch = ch;
this.meta27960 = meta27960;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async27959.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27961,meta27960__$1){
var self__ = this;
var _27961__$1 = this;
return (new cljs.core.async.t_cljs$core$async27959(self__.f,self__.ch,meta27960__$1));
}));

(cljs.core.async.t_cljs$core$async27959.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27961){
var self__ = this;
var _27961__$1 = this;
return self__.meta27960;
}));

(cljs.core.async.t_cljs$core$async27959.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async27959.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async27959.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async27959.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async27959.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async27959.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
}));

(cljs.core.async.t_cljs$core$async27959.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta27960","meta27960",-1962689697,null)], null);
}));

(cljs.core.async.t_cljs$core$async27959.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async27959.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27959");

(cljs.core.async.t_cljs$core$async27959.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async27959");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27959.
 */
cljs.core.async.__GT_t_cljs$core$async27959 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async27959(f__$1,ch__$1,meta27960){
return (new cljs.core.async.t_cljs$core$async27959(f__$1,ch__$1,meta27960));
});

}

return (new cljs.core.async.t_cljs$core$async27959(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async27962 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27962 = (function (p,ch,meta27963){
this.p = p;
this.ch = ch;
this.meta27963 = meta27963;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async27962.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27964,meta27963__$1){
var self__ = this;
var _27964__$1 = this;
return (new cljs.core.async.t_cljs$core$async27962(self__.p,self__.ch,meta27963__$1));
}));

(cljs.core.async.t_cljs$core$async27962.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27964){
var self__ = this;
var _27964__$1 = this;
return self__.meta27963;
}));

(cljs.core.async.t_cljs$core$async27962.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async27962.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async27962.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async27962.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async27962.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async27962.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async27962.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async27962.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta27963","meta27963",1106626100,null)], null);
}));

(cljs.core.async.t_cljs$core$async27962.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async27962.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27962");

(cljs.core.async.t_cljs$core$async27962.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async27962");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27962.
 */
cljs.core.async.__GT_t_cljs$core$async27962 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async27962(p__$1,ch__$1,meta27963){
return (new cljs.core.async.t_cljs$core$async27962(p__$1,ch__$1,meta27963));
});

}

return (new cljs.core.async.t_cljs$core$async27962(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__27966 = arguments.length;
switch (G__27966) {
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
var c__26455__auto___28006 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__26456__auto__ = (function (){var switch__26360__auto__ = (function (state_27987){
var state_val_27988 = (state_27987[(1)]);
if((state_val_27988 === (7))){
var inst_27983 = (state_27987[(2)]);
var state_27987__$1 = state_27987;
var statearr_27989_28007 = state_27987__$1;
(statearr_27989_28007[(2)] = inst_27983);

(statearr_27989_28007[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27988 === (1))){
var state_27987__$1 = state_27987;
var statearr_27990_28008 = state_27987__$1;
(statearr_27990_28008[(2)] = null);

(statearr_27990_28008[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27988 === (4))){
var inst_27969 = (state_27987[(7)]);
var inst_27969__$1 = (state_27987[(2)]);
var inst_27970 = (inst_27969__$1 == null);
var state_27987__$1 = (function (){var statearr_27991 = state_27987;
(statearr_27991[(7)] = inst_27969__$1);

return statearr_27991;
})();
if(cljs.core.truth_(inst_27970)){
var statearr_27992_28009 = state_27987__$1;
(statearr_27992_28009[(1)] = (5));

} else {
var statearr_27993_28010 = state_27987__$1;
(statearr_27993_28010[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27988 === (6))){
var inst_27969 = (state_27987[(7)]);
var inst_27974 = p.call(null,inst_27969);
var state_27987__$1 = state_27987;
if(cljs.core.truth_(inst_27974)){
var statearr_27994_28011 = state_27987__$1;
(statearr_27994_28011[(1)] = (8));

} else {
var statearr_27995_28012 = state_27987__$1;
(statearr_27995_28012[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27988 === (3))){
var inst_27985 = (state_27987[(2)]);
var state_27987__$1 = state_27987;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27987__$1,inst_27985);
} else {
if((state_val_27988 === (2))){
var state_27987__$1 = state_27987;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27987__$1,(4),ch);
} else {
if((state_val_27988 === (11))){
var inst_27977 = (state_27987[(2)]);
var state_27987__$1 = state_27987;
var statearr_27996_28013 = state_27987__$1;
(statearr_27996_28013[(2)] = inst_27977);

(statearr_27996_28013[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27988 === (9))){
var state_27987__$1 = state_27987;
var statearr_27997_28014 = state_27987__$1;
(statearr_27997_28014[(2)] = null);

(statearr_27997_28014[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27988 === (5))){
var inst_27972 = cljs.core.async.close_BANG_.call(null,out);
var state_27987__$1 = state_27987;
var statearr_27998_28015 = state_27987__$1;
(statearr_27998_28015[(2)] = inst_27972);

(statearr_27998_28015[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27988 === (10))){
var inst_27980 = (state_27987[(2)]);
var state_27987__$1 = (function (){var statearr_27999 = state_27987;
(statearr_27999[(8)] = inst_27980);

return statearr_27999;
})();
var statearr_28000_28016 = state_27987__$1;
(statearr_28000_28016[(2)] = null);

(statearr_28000_28016[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27988 === (8))){
var inst_27969 = (state_27987[(7)]);
var state_27987__$1 = state_27987;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27987__$1,(11),out,inst_27969);
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
var cljs$core$async$state_machine__26361__auto__ = null;
var cljs$core$async$state_machine__26361__auto____0 = (function (){
var statearr_28001 = [null,null,null,null,null,null,null,null,null];
(statearr_28001[(0)] = cljs$core$async$state_machine__26361__auto__);

(statearr_28001[(1)] = (1));

return statearr_28001;
});
var cljs$core$async$state_machine__26361__auto____1 = (function (state_27987){
while(true){
var ret_value__26362__auto__ = (function (){try{while(true){
var result__26363__auto__ = switch__26360__auto__.call(null,state_27987);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26363__auto__;
}
break;
}
}catch (e28002){if((e28002 instanceof Object)){
var ex__26364__auto__ = e28002;
var statearr_28003_28017 = state_27987;
(statearr_28003_28017[(5)] = ex__26364__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27987);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28002;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28018 = state_27987;
state_27987 = G__28018;
continue;
} else {
return ret_value__26362__auto__;
}
break;
}
});
cljs$core$async$state_machine__26361__auto__ = function(state_27987){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26361__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26361__auto____1.call(this,state_27987);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26361__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26361__auto____0;
cljs$core$async$state_machine__26361__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26361__auto____1;
return cljs$core$async$state_machine__26361__auto__;
})()
})();
var state__26457__auto__ = (function (){var statearr_28004 = f__26456__auto__.call(null);
(statearr_28004[(6)] = c__26455__auto___28006);

return statearr_28004;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26457__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__28020 = arguments.length;
switch (G__28020) {
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
var c__26455__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__26456__auto__ = (function (){var switch__26360__auto__ = (function (state_28083){
var state_val_28084 = (state_28083[(1)]);
if((state_val_28084 === (7))){
var inst_28079 = (state_28083[(2)]);
var state_28083__$1 = state_28083;
var statearr_28085_28123 = state_28083__$1;
(statearr_28085_28123[(2)] = inst_28079);

(statearr_28085_28123[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28084 === (20))){
var inst_28049 = (state_28083[(7)]);
var inst_28060 = (state_28083[(2)]);
var inst_28061 = cljs.core.next.call(null,inst_28049);
var inst_28035 = inst_28061;
var inst_28036 = null;
var inst_28037 = (0);
var inst_28038 = (0);
var state_28083__$1 = (function (){var statearr_28086 = state_28083;
(statearr_28086[(8)] = inst_28038);

(statearr_28086[(9)] = inst_28037);

(statearr_28086[(10)] = inst_28060);

(statearr_28086[(11)] = inst_28036);

(statearr_28086[(12)] = inst_28035);

return statearr_28086;
})();
var statearr_28087_28124 = state_28083__$1;
(statearr_28087_28124[(2)] = null);

(statearr_28087_28124[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28084 === (1))){
var state_28083__$1 = state_28083;
var statearr_28088_28125 = state_28083__$1;
(statearr_28088_28125[(2)] = null);

(statearr_28088_28125[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28084 === (4))){
var inst_28024 = (state_28083[(13)]);
var inst_28024__$1 = (state_28083[(2)]);
var inst_28025 = (inst_28024__$1 == null);
var state_28083__$1 = (function (){var statearr_28089 = state_28083;
(statearr_28089[(13)] = inst_28024__$1);

return statearr_28089;
})();
if(cljs.core.truth_(inst_28025)){
var statearr_28090_28126 = state_28083__$1;
(statearr_28090_28126[(1)] = (5));

} else {
var statearr_28091_28127 = state_28083__$1;
(statearr_28091_28127[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28084 === (15))){
var state_28083__$1 = state_28083;
var statearr_28095_28128 = state_28083__$1;
(statearr_28095_28128[(2)] = null);

(statearr_28095_28128[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28084 === (21))){
var state_28083__$1 = state_28083;
var statearr_28096_28129 = state_28083__$1;
(statearr_28096_28129[(2)] = null);

(statearr_28096_28129[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28084 === (13))){
var inst_28038 = (state_28083[(8)]);
var inst_28037 = (state_28083[(9)]);
var inst_28036 = (state_28083[(11)]);
var inst_28035 = (state_28083[(12)]);
var inst_28045 = (state_28083[(2)]);
var inst_28046 = (inst_28038 + (1));
var tmp28092 = inst_28037;
var tmp28093 = inst_28036;
var tmp28094 = inst_28035;
var inst_28035__$1 = tmp28094;
var inst_28036__$1 = tmp28093;
var inst_28037__$1 = tmp28092;
var inst_28038__$1 = inst_28046;
var state_28083__$1 = (function (){var statearr_28097 = state_28083;
(statearr_28097[(8)] = inst_28038__$1);

(statearr_28097[(14)] = inst_28045);

(statearr_28097[(9)] = inst_28037__$1);

(statearr_28097[(11)] = inst_28036__$1);

(statearr_28097[(12)] = inst_28035__$1);

return statearr_28097;
})();
var statearr_28098_28130 = state_28083__$1;
(statearr_28098_28130[(2)] = null);

(statearr_28098_28130[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28084 === (22))){
var state_28083__$1 = state_28083;
var statearr_28099_28131 = state_28083__$1;
(statearr_28099_28131[(2)] = null);

(statearr_28099_28131[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28084 === (6))){
var inst_28024 = (state_28083[(13)]);
var inst_28033 = f.call(null,inst_28024);
var inst_28034 = cljs.core.seq.call(null,inst_28033);
var inst_28035 = inst_28034;
var inst_28036 = null;
var inst_28037 = (0);
var inst_28038 = (0);
var state_28083__$1 = (function (){var statearr_28100 = state_28083;
(statearr_28100[(8)] = inst_28038);

(statearr_28100[(9)] = inst_28037);

(statearr_28100[(11)] = inst_28036);

(statearr_28100[(12)] = inst_28035);

return statearr_28100;
})();
var statearr_28101_28132 = state_28083__$1;
(statearr_28101_28132[(2)] = null);

(statearr_28101_28132[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28084 === (17))){
var inst_28049 = (state_28083[(7)]);
var inst_28053 = cljs.core.chunk_first.call(null,inst_28049);
var inst_28054 = cljs.core.chunk_rest.call(null,inst_28049);
var inst_28055 = cljs.core.count.call(null,inst_28053);
var inst_28035 = inst_28054;
var inst_28036 = inst_28053;
var inst_28037 = inst_28055;
var inst_28038 = (0);
var state_28083__$1 = (function (){var statearr_28102 = state_28083;
(statearr_28102[(8)] = inst_28038);

(statearr_28102[(9)] = inst_28037);

(statearr_28102[(11)] = inst_28036);

(statearr_28102[(12)] = inst_28035);

return statearr_28102;
})();
var statearr_28103_28133 = state_28083__$1;
(statearr_28103_28133[(2)] = null);

(statearr_28103_28133[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28084 === (3))){
var inst_28081 = (state_28083[(2)]);
var state_28083__$1 = state_28083;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28083__$1,inst_28081);
} else {
if((state_val_28084 === (12))){
var inst_28069 = (state_28083[(2)]);
var state_28083__$1 = state_28083;
var statearr_28104_28134 = state_28083__$1;
(statearr_28104_28134[(2)] = inst_28069);

(statearr_28104_28134[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28084 === (2))){
var state_28083__$1 = state_28083;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28083__$1,(4),in$);
} else {
if((state_val_28084 === (23))){
var inst_28077 = (state_28083[(2)]);
var state_28083__$1 = state_28083;
var statearr_28105_28135 = state_28083__$1;
(statearr_28105_28135[(2)] = inst_28077);

(statearr_28105_28135[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28084 === (19))){
var inst_28064 = (state_28083[(2)]);
var state_28083__$1 = state_28083;
var statearr_28106_28136 = state_28083__$1;
(statearr_28106_28136[(2)] = inst_28064);

(statearr_28106_28136[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28084 === (11))){
var inst_28035 = (state_28083[(12)]);
var inst_28049 = (state_28083[(7)]);
var inst_28049__$1 = cljs.core.seq.call(null,inst_28035);
var state_28083__$1 = (function (){var statearr_28107 = state_28083;
(statearr_28107[(7)] = inst_28049__$1);

return statearr_28107;
})();
if(inst_28049__$1){
var statearr_28108_28137 = state_28083__$1;
(statearr_28108_28137[(1)] = (14));

} else {
var statearr_28109_28138 = state_28083__$1;
(statearr_28109_28138[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28084 === (9))){
var inst_28071 = (state_28083[(2)]);
var inst_28072 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_28083__$1 = (function (){var statearr_28110 = state_28083;
(statearr_28110[(15)] = inst_28071);

return statearr_28110;
})();
if(cljs.core.truth_(inst_28072)){
var statearr_28111_28139 = state_28083__$1;
(statearr_28111_28139[(1)] = (21));

} else {
var statearr_28112_28140 = state_28083__$1;
(statearr_28112_28140[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28084 === (5))){
var inst_28027 = cljs.core.async.close_BANG_.call(null,out);
var state_28083__$1 = state_28083;
var statearr_28113_28141 = state_28083__$1;
(statearr_28113_28141[(2)] = inst_28027);

(statearr_28113_28141[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28084 === (14))){
var inst_28049 = (state_28083[(7)]);
var inst_28051 = cljs.core.chunked_seq_QMARK_.call(null,inst_28049);
var state_28083__$1 = state_28083;
if(inst_28051){
var statearr_28114_28142 = state_28083__$1;
(statearr_28114_28142[(1)] = (17));

} else {
var statearr_28115_28143 = state_28083__$1;
(statearr_28115_28143[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28084 === (16))){
var inst_28067 = (state_28083[(2)]);
var state_28083__$1 = state_28083;
var statearr_28116_28144 = state_28083__$1;
(statearr_28116_28144[(2)] = inst_28067);

(statearr_28116_28144[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28084 === (10))){
var inst_28038 = (state_28083[(8)]);
var inst_28036 = (state_28083[(11)]);
var inst_28043 = cljs.core._nth.call(null,inst_28036,inst_28038);
var state_28083__$1 = state_28083;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28083__$1,(13),out,inst_28043);
} else {
if((state_val_28084 === (18))){
var inst_28049 = (state_28083[(7)]);
var inst_28058 = cljs.core.first.call(null,inst_28049);
var state_28083__$1 = state_28083;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28083__$1,(20),out,inst_28058);
} else {
if((state_val_28084 === (8))){
var inst_28038 = (state_28083[(8)]);
var inst_28037 = (state_28083[(9)]);
var inst_28040 = (inst_28038 < inst_28037);
var inst_28041 = inst_28040;
var state_28083__$1 = state_28083;
if(cljs.core.truth_(inst_28041)){
var statearr_28117_28145 = state_28083__$1;
(statearr_28117_28145[(1)] = (10));

} else {
var statearr_28118_28146 = state_28083__$1;
(statearr_28118_28146[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__26361__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__26361__auto____0 = (function (){
var statearr_28119 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28119[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__26361__auto__);

(statearr_28119[(1)] = (1));

return statearr_28119;
});
var cljs$core$async$mapcat_STAR__$_state_machine__26361__auto____1 = (function (state_28083){
while(true){
var ret_value__26362__auto__ = (function (){try{while(true){
var result__26363__auto__ = switch__26360__auto__.call(null,state_28083);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26363__auto__;
}
break;
}
}catch (e28120){if((e28120 instanceof Object)){
var ex__26364__auto__ = e28120;
var statearr_28121_28147 = state_28083;
(statearr_28121_28147[(5)] = ex__26364__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28083);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28120;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28148 = state_28083;
state_28083 = G__28148;
continue;
} else {
return ret_value__26362__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__26361__auto__ = function(state_28083){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__26361__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__26361__auto____1.call(this,state_28083);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__26361__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__26361__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__26361__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__26361__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__26361__auto__;
})()
})();
var state__26457__auto__ = (function (){var statearr_28122 = f__26456__auto__.call(null);
(statearr_28122[(6)] = c__26455__auto__);

return statearr_28122;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26457__auto__);
}));

return c__26455__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__28150 = arguments.length;
switch (G__28150) {
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
var G__28153 = arguments.length;
switch (G__28153) {
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
var G__28156 = arguments.length;
switch (G__28156) {
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
var c__26455__auto___28203 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__26456__auto__ = (function (){var switch__26360__auto__ = (function (state_28180){
var state_val_28181 = (state_28180[(1)]);
if((state_val_28181 === (7))){
var inst_28175 = (state_28180[(2)]);
var state_28180__$1 = state_28180;
var statearr_28182_28204 = state_28180__$1;
(statearr_28182_28204[(2)] = inst_28175);

(statearr_28182_28204[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28181 === (1))){
var inst_28157 = null;
var state_28180__$1 = (function (){var statearr_28183 = state_28180;
(statearr_28183[(7)] = inst_28157);

return statearr_28183;
})();
var statearr_28184_28205 = state_28180__$1;
(statearr_28184_28205[(2)] = null);

(statearr_28184_28205[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28181 === (4))){
var inst_28160 = (state_28180[(8)]);
var inst_28160__$1 = (state_28180[(2)]);
var inst_28161 = (inst_28160__$1 == null);
var inst_28162 = cljs.core.not.call(null,inst_28161);
var state_28180__$1 = (function (){var statearr_28185 = state_28180;
(statearr_28185[(8)] = inst_28160__$1);

return statearr_28185;
})();
if(inst_28162){
var statearr_28186_28206 = state_28180__$1;
(statearr_28186_28206[(1)] = (5));

} else {
var statearr_28187_28207 = state_28180__$1;
(statearr_28187_28207[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28181 === (6))){
var state_28180__$1 = state_28180;
var statearr_28188_28208 = state_28180__$1;
(statearr_28188_28208[(2)] = null);

(statearr_28188_28208[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28181 === (3))){
var inst_28177 = (state_28180[(2)]);
var inst_28178 = cljs.core.async.close_BANG_.call(null,out);
var state_28180__$1 = (function (){var statearr_28189 = state_28180;
(statearr_28189[(9)] = inst_28177);

return statearr_28189;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28180__$1,inst_28178);
} else {
if((state_val_28181 === (2))){
var state_28180__$1 = state_28180;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28180__$1,(4),ch);
} else {
if((state_val_28181 === (11))){
var inst_28160 = (state_28180[(8)]);
var inst_28169 = (state_28180[(2)]);
var inst_28157 = inst_28160;
var state_28180__$1 = (function (){var statearr_28190 = state_28180;
(statearr_28190[(7)] = inst_28157);

(statearr_28190[(10)] = inst_28169);

return statearr_28190;
})();
var statearr_28191_28209 = state_28180__$1;
(statearr_28191_28209[(2)] = null);

(statearr_28191_28209[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28181 === (9))){
var inst_28160 = (state_28180[(8)]);
var state_28180__$1 = state_28180;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28180__$1,(11),out,inst_28160);
} else {
if((state_val_28181 === (5))){
var inst_28157 = (state_28180[(7)]);
var inst_28160 = (state_28180[(8)]);
var inst_28164 = cljs.core._EQ_.call(null,inst_28160,inst_28157);
var state_28180__$1 = state_28180;
if(inst_28164){
var statearr_28193_28210 = state_28180__$1;
(statearr_28193_28210[(1)] = (8));

} else {
var statearr_28194_28211 = state_28180__$1;
(statearr_28194_28211[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28181 === (10))){
var inst_28172 = (state_28180[(2)]);
var state_28180__$1 = state_28180;
var statearr_28195_28212 = state_28180__$1;
(statearr_28195_28212[(2)] = inst_28172);

(statearr_28195_28212[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28181 === (8))){
var inst_28157 = (state_28180[(7)]);
var tmp28192 = inst_28157;
var inst_28157__$1 = tmp28192;
var state_28180__$1 = (function (){var statearr_28196 = state_28180;
(statearr_28196[(7)] = inst_28157__$1);

return statearr_28196;
})();
var statearr_28197_28213 = state_28180__$1;
(statearr_28197_28213[(2)] = null);

(statearr_28197_28213[(1)] = (2));


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
var cljs$core$async$state_machine__26361__auto__ = null;
var cljs$core$async$state_machine__26361__auto____0 = (function (){
var statearr_28198 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28198[(0)] = cljs$core$async$state_machine__26361__auto__);

(statearr_28198[(1)] = (1));

return statearr_28198;
});
var cljs$core$async$state_machine__26361__auto____1 = (function (state_28180){
while(true){
var ret_value__26362__auto__ = (function (){try{while(true){
var result__26363__auto__ = switch__26360__auto__.call(null,state_28180);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26363__auto__;
}
break;
}
}catch (e28199){if((e28199 instanceof Object)){
var ex__26364__auto__ = e28199;
var statearr_28200_28214 = state_28180;
(statearr_28200_28214[(5)] = ex__26364__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28180);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28199;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28215 = state_28180;
state_28180 = G__28215;
continue;
} else {
return ret_value__26362__auto__;
}
break;
}
});
cljs$core$async$state_machine__26361__auto__ = function(state_28180){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26361__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26361__auto____1.call(this,state_28180);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26361__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26361__auto____0;
cljs$core$async$state_machine__26361__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26361__auto____1;
return cljs$core$async$state_machine__26361__auto__;
})()
})();
var state__26457__auto__ = (function (){var statearr_28201 = f__26456__auto__.call(null);
(statearr_28201[(6)] = c__26455__auto___28203);

return statearr_28201;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26457__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__28217 = arguments.length;
switch (G__28217) {
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
var c__26455__auto___28283 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__26456__auto__ = (function (){var switch__26360__auto__ = (function (state_28255){
var state_val_28256 = (state_28255[(1)]);
if((state_val_28256 === (7))){
var inst_28251 = (state_28255[(2)]);
var state_28255__$1 = state_28255;
var statearr_28257_28284 = state_28255__$1;
(statearr_28257_28284[(2)] = inst_28251);

(statearr_28257_28284[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28256 === (1))){
var inst_28218 = (new Array(n));
var inst_28219 = inst_28218;
var inst_28220 = (0);
var state_28255__$1 = (function (){var statearr_28258 = state_28255;
(statearr_28258[(7)] = inst_28219);

(statearr_28258[(8)] = inst_28220);

return statearr_28258;
})();
var statearr_28259_28285 = state_28255__$1;
(statearr_28259_28285[(2)] = null);

(statearr_28259_28285[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28256 === (4))){
var inst_28223 = (state_28255[(9)]);
var inst_28223__$1 = (state_28255[(2)]);
var inst_28224 = (inst_28223__$1 == null);
var inst_28225 = cljs.core.not.call(null,inst_28224);
var state_28255__$1 = (function (){var statearr_28260 = state_28255;
(statearr_28260[(9)] = inst_28223__$1);

return statearr_28260;
})();
if(inst_28225){
var statearr_28261_28286 = state_28255__$1;
(statearr_28261_28286[(1)] = (5));

} else {
var statearr_28262_28287 = state_28255__$1;
(statearr_28262_28287[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28256 === (15))){
var inst_28245 = (state_28255[(2)]);
var state_28255__$1 = state_28255;
var statearr_28263_28288 = state_28255__$1;
(statearr_28263_28288[(2)] = inst_28245);

(statearr_28263_28288[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28256 === (13))){
var state_28255__$1 = state_28255;
var statearr_28264_28289 = state_28255__$1;
(statearr_28264_28289[(2)] = null);

(statearr_28264_28289[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28256 === (6))){
var inst_28220 = (state_28255[(8)]);
var inst_28241 = (inst_28220 > (0));
var state_28255__$1 = state_28255;
if(cljs.core.truth_(inst_28241)){
var statearr_28265_28290 = state_28255__$1;
(statearr_28265_28290[(1)] = (12));

} else {
var statearr_28266_28291 = state_28255__$1;
(statearr_28266_28291[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28256 === (3))){
var inst_28253 = (state_28255[(2)]);
var state_28255__$1 = state_28255;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28255__$1,inst_28253);
} else {
if((state_val_28256 === (12))){
var inst_28219 = (state_28255[(7)]);
var inst_28243 = cljs.core.vec.call(null,inst_28219);
var state_28255__$1 = state_28255;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28255__$1,(15),out,inst_28243);
} else {
if((state_val_28256 === (2))){
var state_28255__$1 = state_28255;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28255__$1,(4),ch);
} else {
if((state_val_28256 === (11))){
var inst_28235 = (state_28255[(2)]);
var inst_28236 = (new Array(n));
var inst_28219 = inst_28236;
var inst_28220 = (0);
var state_28255__$1 = (function (){var statearr_28267 = state_28255;
(statearr_28267[(7)] = inst_28219);

(statearr_28267[(8)] = inst_28220);

(statearr_28267[(10)] = inst_28235);

return statearr_28267;
})();
var statearr_28268_28292 = state_28255__$1;
(statearr_28268_28292[(2)] = null);

(statearr_28268_28292[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28256 === (9))){
var inst_28219 = (state_28255[(7)]);
var inst_28233 = cljs.core.vec.call(null,inst_28219);
var state_28255__$1 = state_28255;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28255__$1,(11),out,inst_28233);
} else {
if((state_val_28256 === (5))){
var inst_28219 = (state_28255[(7)]);
var inst_28223 = (state_28255[(9)]);
var inst_28220 = (state_28255[(8)]);
var inst_28228 = (state_28255[(11)]);
var inst_28227 = (inst_28219[inst_28220] = inst_28223);
var inst_28228__$1 = (inst_28220 + (1));
var inst_28229 = (inst_28228__$1 < n);
var state_28255__$1 = (function (){var statearr_28269 = state_28255;
(statearr_28269[(12)] = inst_28227);

(statearr_28269[(11)] = inst_28228__$1);

return statearr_28269;
})();
if(cljs.core.truth_(inst_28229)){
var statearr_28270_28293 = state_28255__$1;
(statearr_28270_28293[(1)] = (8));

} else {
var statearr_28271_28294 = state_28255__$1;
(statearr_28271_28294[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28256 === (14))){
var inst_28248 = (state_28255[(2)]);
var inst_28249 = cljs.core.async.close_BANG_.call(null,out);
var state_28255__$1 = (function (){var statearr_28273 = state_28255;
(statearr_28273[(13)] = inst_28248);

return statearr_28273;
})();
var statearr_28274_28295 = state_28255__$1;
(statearr_28274_28295[(2)] = inst_28249);

(statearr_28274_28295[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28256 === (10))){
var inst_28239 = (state_28255[(2)]);
var state_28255__$1 = state_28255;
var statearr_28275_28296 = state_28255__$1;
(statearr_28275_28296[(2)] = inst_28239);

(statearr_28275_28296[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28256 === (8))){
var inst_28219 = (state_28255[(7)]);
var inst_28228 = (state_28255[(11)]);
var tmp28272 = inst_28219;
var inst_28219__$1 = tmp28272;
var inst_28220 = inst_28228;
var state_28255__$1 = (function (){var statearr_28276 = state_28255;
(statearr_28276[(7)] = inst_28219__$1);

(statearr_28276[(8)] = inst_28220);

return statearr_28276;
})();
var statearr_28277_28297 = state_28255__$1;
(statearr_28277_28297[(2)] = null);

(statearr_28277_28297[(1)] = (2));


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
var cljs$core$async$state_machine__26361__auto__ = null;
var cljs$core$async$state_machine__26361__auto____0 = (function (){
var statearr_28278 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28278[(0)] = cljs$core$async$state_machine__26361__auto__);

(statearr_28278[(1)] = (1));

return statearr_28278;
});
var cljs$core$async$state_machine__26361__auto____1 = (function (state_28255){
while(true){
var ret_value__26362__auto__ = (function (){try{while(true){
var result__26363__auto__ = switch__26360__auto__.call(null,state_28255);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26363__auto__;
}
break;
}
}catch (e28279){if((e28279 instanceof Object)){
var ex__26364__auto__ = e28279;
var statearr_28280_28298 = state_28255;
(statearr_28280_28298[(5)] = ex__26364__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28255);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28279;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28299 = state_28255;
state_28255 = G__28299;
continue;
} else {
return ret_value__26362__auto__;
}
break;
}
});
cljs$core$async$state_machine__26361__auto__ = function(state_28255){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26361__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26361__auto____1.call(this,state_28255);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26361__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26361__auto____0;
cljs$core$async$state_machine__26361__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26361__auto____1;
return cljs$core$async$state_machine__26361__auto__;
})()
})();
var state__26457__auto__ = (function (){var statearr_28281 = f__26456__auto__.call(null);
(statearr_28281[(6)] = c__26455__auto___28283);

return statearr_28281;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26457__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__28301 = arguments.length;
switch (G__28301) {
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
var c__26455__auto___28371 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__26456__auto__ = (function (){var switch__26360__auto__ = (function (state_28343){
var state_val_28344 = (state_28343[(1)]);
if((state_val_28344 === (7))){
var inst_28339 = (state_28343[(2)]);
var state_28343__$1 = state_28343;
var statearr_28345_28372 = state_28343__$1;
(statearr_28345_28372[(2)] = inst_28339);

(statearr_28345_28372[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28344 === (1))){
var inst_28302 = [];
var inst_28303 = inst_28302;
var inst_28304 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_28343__$1 = (function (){var statearr_28346 = state_28343;
(statearr_28346[(7)] = inst_28304);

(statearr_28346[(8)] = inst_28303);

return statearr_28346;
})();
var statearr_28347_28373 = state_28343__$1;
(statearr_28347_28373[(2)] = null);

(statearr_28347_28373[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28344 === (4))){
var inst_28307 = (state_28343[(9)]);
var inst_28307__$1 = (state_28343[(2)]);
var inst_28308 = (inst_28307__$1 == null);
var inst_28309 = cljs.core.not.call(null,inst_28308);
var state_28343__$1 = (function (){var statearr_28348 = state_28343;
(statearr_28348[(9)] = inst_28307__$1);

return statearr_28348;
})();
if(inst_28309){
var statearr_28349_28374 = state_28343__$1;
(statearr_28349_28374[(1)] = (5));

} else {
var statearr_28350_28375 = state_28343__$1;
(statearr_28350_28375[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28344 === (15))){
var inst_28333 = (state_28343[(2)]);
var state_28343__$1 = state_28343;
var statearr_28351_28376 = state_28343__$1;
(statearr_28351_28376[(2)] = inst_28333);

(statearr_28351_28376[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28344 === (13))){
var state_28343__$1 = state_28343;
var statearr_28352_28377 = state_28343__$1;
(statearr_28352_28377[(2)] = null);

(statearr_28352_28377[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28344 === (6))){
var inst_28303 = (state_28343[(8)]);
var inst_28328 = inst_28303.length;
var inst_28329 = (inst_28328 > (0));
var state_28343__$1 = state_28343;
if(cljs.core.truth_(inst_28329)){
var statearr_28353_28378 = state_28343__$1;
(statearr_28353_28378[(1)] = (12));

} else {
var statearr_28354_28379 = state_28343__$1;
(statearr_28354_28379[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28344 === (3))){
var inst_28341 = (state_28343[(2)]);
var state_28343__$1 = state_28343;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28343__$1,inst_28341);
} else {
if((state_val_28344 === (12))){
var inst_28303 = (state_28343[(8)]);
var inst_28331 = cljs.core.vec.call(null,inst_28303);
var state_28343__$1 = state_28343;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28343__$1,(15),out,inst_28331);
} else {
if((state_val_28344 === (2))){
var state_28343__$1 = state_28343;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28343__$1,(4),ch);
} else {
if((state_val_28344 === (11))){
var inst_28311 = (state_28343[(10)]);
var inst_28307 = (state_28343[(9)]);
var inst_28321 = (state_28343[(2)]);
var inst_28322 = [];
var inst_28323 = inst_28322.push(inst_28307);
var inst_28303 = inst_28322;
var inst_28304 = inst_28311;
var state_28343__$1 = (function (){var statearr_28355 = state_28343;
(statearr_28355[(11)] = inst_28323);

(statearr_28355[(12)] = inst_28321);

(statearr_28355[(7)] = inst_28304);

(statearr_28355[(8)] = inst_28303);

return statearr_28355;
})();
var statearr_28356_28380 = state_28343__$1;
(statearr_28356_28380[(2)] = null);

(statearr_28356_28380[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28344 === (9))){
var inst_28303 = (state_28343[(8)]);
var inst_28319 = cljs.core.vec.call(null,inst_28303);
var state_28343__$1 = state_28343;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28343__$1,(11),out,inst_28319);
} else {
if((state_val_28344 === (5))){
var inst_28304 = (state_28343[(7)]);
var inst_28311 = (state_28343[(10)]);
var inst_28307 = (state_28343[(9)]);
var inst_28311__$1 = f.call(null,inst_28307);
var inst_28312 = cljs.core._EQ_.call(null,inst_28311__$1,inst_28304);
var inst_28313 = cljs.core.keyword_identical_QMARK_.call(null,inst_28304,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_28314 = ((inst_28312) || (inst_28313));
var state_28343__$1 = (function (){var statearr_28357 = state_28343;
(statearr_28357[(10)] = inst_28311__$1);

return statearr_28357;
})();
if(cljs.core.truth_(inst_28314)){
var statearr_28358_28381 = state_28343__$1;
(statearr_28358_28381[(1)] = (8));

} else {
var statearr_28359_28382 = state_28343__$1;
(statearr_28359_28382[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28344 === (14))){
var inst_28336 = (state_28343[(2)]);
var inst_28337 = cljs.core.async.close_BANG_.call(null,out);
var state_28343__$1 = (function (){var statearr_28361 = state_28343;
(statearr_28361[(13)] = inst_28336);

return statearr_28361;
})();
var statearr_28362_28383 = state_28343__$1;
(statearr_28362_28383[(2)] = inst_28337);

(statearr_28362_28383[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28344 === (10))){
var inst_28326 = (state_28343[(2)]);
var state_28343__$1 = state_28343;
var statearr_28363_28384 = state_28343__$1;
(statearr_28363_28384[(2)] = inst_28326);

(statearr_28363_28384[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28344 === (8))){
var inst_28303 = (state_28343[(8)]);
var inst_28311 = (state_28343[(10)]);
var inst_28307 = (state_28343[(9)]);
var inst_28316 = inst_28303.push(inst_28307);
var tmp28360 = inst_28303;
var inst_28303__$1 = tmp28360;
var inst_28304 = inst_28311;
var state_28343__$1 = (function (){var statearr_28364 = state_28343;
(statearr_28364[(7)] = inst_28304);

(statearr_28364[(8)] = inst_28303__$1);

(statearr_28364[(14)] = inst_28316);

return statearr_28364;
})();
var statearr_28365_28385 = state_28343__$1;
(statearr_28365_28385[(2)] = null);

(statearr_28365_28385[(1)] = (2));


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
var cljs$core$async$state_machine__26361__auto__ = null;
var cljs$core$async$state_machine__26361__auto____0 = (function (){
var statearr_28366 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28366[(0)] = cljs$core$async$state_machine__26361__auto__);

(statearr_28366[(1)] = (1));

return statearr_28366;
});
var cljs$core$async$state_machine__26361__auto____1 = (function (state_28343){
while(true){
var ret_value__26362__auto__ = (function (){try{while(true){
var result__26363__auto__ = switch__26360__auto__.call(null,state_28343);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26363__auto__;
}
break;
}
}catch (e28367){if((e28367 instanceof Object)){
var ex__26364__auto__ = e28367;
var statearr_28368_28386 = state_28343;
(statearr_28368_28386[(5)] = ex__26364__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28343);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28367;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28387 = state_28343;
state_28343 = G__28387;
continue;
} else {
return ret_value__26362__auto__;
}
break;
}
});
cljs$core$async$state_machine__26361__auto__ = function(state_28343){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26361__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26361__auto____1.call(this,state_28343);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26361__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26361__auto____0;
cljs$core$async$state_machine__26361__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26361__auto____1;
return cljs$core$async$state_machine__26361__auto__;
})()
})();
var state__26457__auto__ = (function (){var statearr_28369 = f__26456__auto__.call(null);
(statearr_28369[(6)] = c__26455__auto___28371);

return statearr_28369;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26457__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=async.js.map?rel=1688157138527
