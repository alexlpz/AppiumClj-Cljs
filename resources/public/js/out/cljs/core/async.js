// Compiled by ClojureScript 1.10.238 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__30077 = arguments.length;
switch (G__30077) {
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

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async30078 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30078 = (function (f,blockable,meta30079){
this.f = f;
this.blockable = blockable;
this.meta30079 = meta30079;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async30078.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30080,meta30079__$1){
var self__ = this;
var _30080__$1 = this;
return (new cljs.core.async.t_cljs$core$async30078(self__.f,self__.blockable,meta30079__$1));
});

cljs.core.async.t_cljs$core$async30078.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30080){
var self__ = this;
var _30080__$1 = this;
return self__.meta30079;
});

cljs.core.async.t_cljs$core$async30078.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30078.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async30078.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async30078.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async30078.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta30079","meta30079",-1426063278,null)], null);
});

cljs.core.async.t_cljs$core$async30078.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30078.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30078";

cljs.core.async.t_cljs$core$async30078.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async30078");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30078.
 */
cljs.core.async.__GT_t_cljs$core$async30078 = (function cljs$core$async$__GT_t_cljs$core$async30078(f__$1,blockable__$1,meta30079){
return (new cljs.core.async.t_cljs$core$async30078(f__$1,blockable__$1,meta30079));
});

}

return (new cljs.core.async.t_cljs$core$async30078(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

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
if(!((buff == null))){
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
var G__30084 = arguments.length;
switch (G__30084) {
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

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__30087 = arguments.length;
switch (G__30087) {
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

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

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
var G__30090 = arguments.length;
switch (G__30090) {
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

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_30092 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_30092);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_30092,ret){
return (function (){
return fn1.call(null,val_30092);
});})(val_30092,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

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
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__30094 = arguments.length;
switch (G__30094) {
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

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5455__auto__)){
var ret = temp__5455__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__5455__auto__)){
var retb = temp__5455__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__5455__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__5455__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4376__auto___30096 = n;
var x_30097 = (0);
while(true){
if((x_30097 < n__4376__auto___30096)){
(a[x_30097] = (0));

var G__30098 = (x_30097 + (1));
x_30097 = G__30098;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__30099 = (i + (1));
i = G__30099;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async30100 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30100 = (function (flag,meta30101){
this.flag = flag;
this.meta30101 = meta30101;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async30100.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_30102,meta30101__$1){
var self__ = this;
var _30102__$1 = this;
return (new cljs.core.async.t_cljs$core$async30100(self__.flag,meta30101__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async30100.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_30102){
var self__ = this;
var _30102__$1 = this;
return self__.meta30101;
});})(flag))
;

cljs.core.async.t_cljs$core$async30100.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30100.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async30100.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async30100.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async30100.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta30101","meta30101",-174420462,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async30100.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30100.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30100";

cljs.core.async.t_cljs$core$async30100.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async30100");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30100.
 */
cljs.core.async.__GT_t_cljs$core$async30100 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async30100(flag__$1,meta30101){
return (new cljs.core.async.t_cljs$core$async30100(flag__$1,meta30101));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async30100(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async30103 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30103 = (function (flag,cb,meta30104){
this.flag = flag;
this.cb = cb;
this.meta30104 = meta30104;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async30103.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30105,meta30104__$1){
var self__ = this;
var _30105__$1 = this;
return (new cljs.core.async.t_cljs$core$async30103(self__.flag,self__.cb,meta30104__$1));
});

cljs.core.async.t_cljs$core$async30103.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30105){
var self__ = this;
var _30105__$1 = this;
return self__.meta30104;
});

cljs.core.async.t_cljs$core$async30103.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30103.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async30103.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async30103.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async30103.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta30104","meta30104",-1562481757,null)], null);
});

cljs.core.async.t_cljs$core$async30103.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30103.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30103";

cljs.core.async.t_cljs$core$async30103.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async30103");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30103.
 */
cljs.core.async.__GT_t_cljs$core$async30103 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async30103(flag__$1,cb__$1,meta30104){
return (new cljs.core.async.t_cljs$core$async30103(flag__$1,cb__$1,meta30104));
});

}

return (new cljs.core.async.t_cljs$core$async30103(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
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
return (function (p1__30106_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__30106_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__30107_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__30107_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3922__auto__ = wport;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return port;
}
})()], null));
} else {
var G__30108 = (i + (1));
i = G__30108;
continue;
}
} else {
return null;
}
break;
}
})();
var or__3922__auto__ = ret;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5457__auto__ = (function (){var and__3911__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__3911__auto__;
}
})();
if(cljs.core.truth_(temp__5457__auto__)){
var got = temp__5457__auto__;
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
var args__4502__auto__ = [];
var len__4499__auto___30114 = arguments.length;
var i__4500__auto___30115 = (0);
while(true){
if((i__4500__auto___30115 < len__4499__auto___30114)){
args__4502__auto__.push((arguments[i__4500__auto___30115]));

var G__30116 = (i__4500__auto___30115 + (1));
i__4500__auto___30115 = G__30116;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__30111){
var map__30112 = p__30111;
var map__30112__$1 = ((((!((map__30112 == null)))?(((((map__30112.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30112.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30112):map__30112);
var opts = map__30112__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq30109){
var G__30110 = cljs.core.first.call(null,seq30109);
var seq30109__$1 = cljs.core.next.call(null,seq30109);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30110,seq30109__$1);
});

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
var G__30118 = arguments.length;
switch (G__30118) {
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

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__28153__auto___30164 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28153__auto___30164){
return (function (){
var f__28154__auto__ = (function (){var switch__27996__auto__ = ((function (c__28153__auto___30164){
return (function (state_30142){
var state_val_30143 = (state_30142[(1)]);
if((state_val_30143 === (7))){
var inst_30138 = (state_30142[(2)]);
var state_30142__$1 = state_30142;
var statearr_30144_30165 = state_30142__$1;
(statearr_30144_30165[(2)] = inst_30138);

(statearr_30144_30165[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30143 === (1))){
var state_30142__$1 = state_30142;
var statearr_30145_30166 = state_30142__$1;
(statearr_30145_30166[(2)] = null);

(statearr_30145_30166[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30143 === (4))){
var inst_30121 = (state_30142[(7)]);
var inst_30121__$1 = (state_30142[(2)]);
var inst_30122 = (inst_30121__$1 == null);
var state_30142__$1 = (function (){var statearr_30146 = state_30142;
(statearr_30146[(7)] = inst_30121__$1);

return statearr_30146;
})();
if(cljs.core.truth_(inst_30122)){
var statearr_30147_30167 = state_30142__$1;
(statearr_30147_30167[(1)] = (5));

} else {
var statearr_30148_30168 = state_30142__$1;
(statearr_30148_30168[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30143 === (13))){
var state_30142__$1 = state_30142;
var statearr_30149_30169 = state_30142__$1;
(statearr_30149_30169[(2)] = null);

(statearr_30149_30169[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30143 === (6))){
var inst_30121 = (state_30142[(7)]);
var state_30142__$1 = state_30142;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30142__$1,(11),to,inst_30121);
} else {
if((state_val_30143 === (3))){
var inst_30140 = (state_30142[(2)]);
var state_30142__$1 = state_30142;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30142__$1,inst_30140);
} else {
if((state_val_30143 === (12))){
var state_30142__$1 = state_30142;
var statearr_30150_30170 = state_30142__$1;
(statearr_30150_30170[(2)] = null);

(statearr_30150_30170[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30143 === (2))){
var state_30142__$1 = state_30142;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30142__$1,(4),from);
} else {
if((state_val_30143 === (11))){
var inst_30131 = (state_30142[(2)]);
var state_30142__$1 = state_30142;
if(cljs.core.truth_(inst_30131)){
var statearr_30151_30171 = state_30142__$1;
(statearr_30151_30171[(1)] = (12));

} else {
var statearr_30152_30172 = state_30142__$1;
(statearr_30152_30172[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30143 === (9))){
var state_30142__$1 = state_30142;
var statearr_30153_30173 = state_30142__$1;
(statearr_30153_30173[(2)] = null);

(statearr_30153_30173[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30143 === (5))){
var state_30142__$1 = state_30142;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30154_30174 = state_30142__$1;
(statearr_30154_30174[(1)] = (8));

} else {
var statearr_30155_30175 = state_30142__$1;
(statearr_30155_30175[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30143 === (14))){
var inst_30136 = (state_30142[(2)]);
var state_30142__$1 = state_30142;
var statearr_30156_30176 = state_30142__$1;
(statearr_30156_30176[(2)] = inst_30136);

(statearr_30156_30176[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30143 === (10))){
var inst_30128 = (state_30142[(2)]);
var state_30142__$1 = state_30142;
var statearr_30157_30177 = state_30142__$1;
(statearr_30157_30177[(2)] = inst_30128);

(statearr_30157_30177[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30143 === (8))){
var inst_30125 = cljs.core.async.close_BANG_.call(null,to);
var state_30142__$1 = state_30142;
var statearr_30158_30178 = state_30142__$1;
(statearr_30158_30178[(2)] = inst_30125);

(statearr_30158_30178[(1)] = (10));


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
});})(c__28153__auto___30164))
;
return ((function (switch__27996__auto__,c__28153__auto___30164){
return (function() {
var cljs$core$async$state_machine__27997__auto__ = null;
var cljs$core$async$state_machine__27997__auto____0 = (function (){
var statearr_30159 = [null,null,null,null,null,null,null,null];
(statearr_30159[(0)] = cljs$core$async$state_machine__27997__auto__);

(statearr_30159[(1)] = (1));

return statearr_30159;
});
var cljs$core$async$state_machine__27997__auto____1 = (function (state_30142){
while(true){
var ret_value__27998__auto__ = (function (){try{while(true){
var result__27999__auto__ = switch__27996__auto__.call(null,state_30142);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27999__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27999__auto__;
}
break;
}
}catch (e30160){if((e30160 instanceof Object)){
var ex__28000__auto__ = e30160;
var statearr_30161_30179 = state_30142;
(statearr_30161_30179[(5)] = ex__28000__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30142);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30160;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27998__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30180 = state_30142;
state_30142 = G__30180;
continue;
} else {
return ret_value__27998__auto__;
}
break;
}
});
cljs$core$async$state_machine__27997__auto__ = function(state_30142){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27997__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27997__auto____1.call(this,state_30142);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__27997__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27997__auto____0;
cljs$core$async$state_machine__27997__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27997__auto____1;
return cljs$core$async$state_machine__27997__auto__;
})()
;})(switch__27996__auto__,c__28153__auto___30164))
})();
var state__28155__auto__ = (function (){var statearr_30162 = f__28154__auto__.call(null);
(statearr_30162[(6)] = c__28153__auto___30164);

return statearr_30162;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28155__auto__);
});})(c__28153__auto___30164))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__30181){
var vec__30182 = p__30181;
var v = cljs.core.nth.call(null,vec__30182,(0),null);
var p = cljs.core.nth.call(null,vec__30182,(1),null);
var job = vec__30182;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__28153__auto___30353 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28153__auto___30353,res,vec__30182,v,p,job,jobs,results){
return (function (){
var f__28154__auto__ = (function (){var switch__27996__auto__ = ((function (c__28153__auto___30353,res,vec__30182,v,p,job,jobs,results){
return (function (state_30189){
var state_val_30190 = (state_30189[(1)]);
if((state_val_30190 === (1))){
var state_30189__$1 = state_30189;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30189__$1,(2),res,v);
} else {
if((state_val_30190 === (2))){
var inst_30186 = (state_30189[(2)]);
var inst_30187 = cljs.core.async.close_BANG_.call(null,res);
var state_30189__$1 = (function (){var statearr_30191 = state_30189;
(statearr_30191[(7)] = inst_30186);

return statearr_30191;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30189__$1,inst_30187);
} else {
return null;
}
}
});})(c__28153__auto___30353,res,vec__30182,v,p,job,jobs,results))
;
return ((function (switch__27996__auto__,c__28153__auto___30353,res,vec__30182,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27997__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27997__auto____0 = (function (){
var statearr_30192 = [null,null,null,null,null,null,null,null];
(statearr_30192[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27997__auto__);

(statearr_30192[(1)] = (1));

return statearr_30192;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27997__auto____1 = (function (state_30189){
while(true){
var ret_value__27998__auto__ = (function (){try{while(true){
var result__27999__auto__ = switch__27996__auto__.call(null,state_30189);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27999__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27999__auto__;
}
break;
}
}catch (e30193){if((e30193 instanceof Object)){
var ex__28000__auto__ = e30193;
var statearr_30194_30354 = state_30189;
(statearr_30194_30354[(5)] = ex__28000__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30189);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30193;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27998__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30355 = state_30189;
state_30189 = G__30355;
continue;
} else {
return ret_value__27998__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27997__auto__ = function(state_30189){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27997__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27997__auto____1.call(this,state_30189);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__27997__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27997__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27997__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27997__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27997__auto__;
})()
;})(switch__27996__auto__,c__28153__auto___30353,res,vec__30182,v,p,job,jobs,results))
})();
var state__28155__auto__ = (function (){var statearr_30195 = f__28154__auto__.call(null);
(statearr_30195[(6)] = c__28153__auto___30353);

return statearr_30195;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28155__auto__);
});})(c__28153__auto___30353,res,vec__30182,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__30196){
var vec__30197 = p__30196;
var v = cljs.core.nth.call(null,vec__30197,(0),null);
var p = cljs.core.nth.call(null,vec__30197,(1),null);
var job = vec__30197;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__4376__auto___30356 = n;
var __30357 = (0);
while(true){
if((__30357 < n__4376__auto___30356)){
var G__30200_30358 = type;
var G__30200_30359__$1 = (((G__30200_30358 instanceof cljs.core.Keyword))?G__30200_30358.fqn:null);
switch (G__30200_30359__$1) {
case "compute":
var c__28153__auto___30361 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__30357,c__28153__auto___30361,G__30200_30358,G__30200_30359__$1,n__4376__auto___30356,jobs,results,process,async){
return (function (){
var f__28154__auto__ = (function (){var switch__27996__auto__ = ((function (__30357,c__28153__auto___30361,G__30200_30358,G__30200_30359__$1,n__4376__auto___30356,jobs,results,process,async){
return (function (state_30213){
var state_val_30214 = (state_30213[(1)]);
if((state_val_30214 === (1))){
var state_30213__$1 = state_30213;
var statearr_30215_30362 = state_30213__$1;
(statearr_30215_30362[(2)] = null);

(statearr_30215_30362[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30214 === (2))){
var state_30213__$1 = state_30213;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30213__$1,(4),jobs);
} else {
if((state_val_30214 === (3))){
var inst_30211 = (state_30213[(2)]);
var state_30213__$1 = state_30213;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30213__$1,inst_30211);
} else {
if((state_val_30214 === (4))){
var inst_30203 = (state_30213[(2)]);
var inst_30204 = process.call(null,inst_30203);
var state_30213__$1 = state_30213;
if(cljs.core.truth_(inst_30204)){
var statearr_30216_30363 = state_30213__$1;
(statearr_30216_30363[(1)] = (5));

} else {
var statearr_30217_30364 = state_30213__$1;
(statearr_30217_30364[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30214 === (5))){
var state_30213__$1 = state_30213;
var statearr_30218_30365 = state_30213__$1;
(statearr_30218_30365[(2)] = null);

(statearr_30218_30365[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30214 === (6))){
var state_30213__$1 = state_30213;
var statearr_30219_30366 = state_30213__$1;
(statearr_30219_30366[(2)] = null);

(statearr_30219_30366[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30214 === (7))){
var inst_30209 = (state_30213[(2)]);
var state_30213__$1 = state_30213;
var statearr_30220_30367 = state_30213__$1;
(statearr_30220_30367[(2)] = inst_30209);

(statearr_30220_30367[(1)] = (3));


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
});})(__30357,c__28153__auto___30361,G__30200_30358,G__30200_30359__$1,n__4376__auto___30356,jobs,results,process,async))
;
return ((function (__30357,switch__27996__auto__,c__28153__auto___30361,G__30200_30358,G__30200_30359__$1,n__4376__auto___30356,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27997__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27997__auto____0 = (function (){
var statearr_30221 = [null,null,null,null,null,null,null];
(statearr_30221[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27997__auto__);

(statearr_30221[(1)] = (1));

return statearr_30221;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27997__auto____1 = (function (state_30213){
while(true){
var ret_value__27998__auto__ = (function (){try{while(true){
var result__27999__auto__ = switch__27996__auto__.call(null,state_30213);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27999__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27999__auto__;
}
break;
}
}catch (e30222){if((e30222 instanceof Object)){
var ex__28000__auto__ = e30222;
var statearr_30223_30368 = state_30213;
(statearr_30223_30368[(5)] = ex__28000__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30213);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30222;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27998__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30369 = state_30213;
state_30213 = G__30369;
continue;
} else {
return ret_value__27998__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27997__auto__ = function(state_30213){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27997__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27997__auto____1.call(this,state_30213);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__27997__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27997__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27997__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27997__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27997__auto__;
})()
;})(__30357,switch__27996__auto__,c__28153__auto___30361,G__30200_30358,G__30200_30359__$1,n__4376__auto___30356,jobs,results,process,async))
})();
var state__28155__auto__ = (function (){var statearr_30224 = f__28154__auto__.call(null);
(statearr_30224[(6)] = c__28153__auto___30361);

return statearr_30224;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28155__auto__);
});})(__30357,c__28153__auto___30361,G__30200_30358,G__30200_30359__$1,n__4376__auto___30356,jobs,results,process,async))
);


break;
case "async":
var c__28153__auto___30370 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__30357,c__28153__auto___30370,G__30200_30358,G__30200_30359__$1,n__4376__auto___30356,jobs,results,process,async){
return (function (){
var f__28154__auto__ = (function (){var switch__27996__auto__ = ((function (__30357,c__28153__auto___30370,G__30200_30358,G__30200_30359__$1,n__4376__auto___30356,jobs,results,process,async){
return (function (state_30237){
var state_val_30238 = (state_30237[(1)]);
if((state_val_30238 === (1))){
var state_30237__$1 = state_30237;
var statearr_30239_30371 = state_30237__$1;
(statearr_30239_30371[(2)] = null);

(statearr_30239_30371[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30238 === (2))){
var state_30237__$1 = state_30237;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30237__$1,(4),jobs);
} else {
if((state_val_30238 === (3))){
var inst_30235 = (state_30237[(2)]);
var state_30237__$1 = state_30237;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30237__$1,inst_30235);
} else {
if((state_val_30238 === (4))){
var inst_30227 = (state_30237[(2)]);
var inst_30228 = async.call(null,inst_30227);
var state_30237__$1 = state_30237;
if(cljs.core.truth_(inst_30228)){
var statearr_30240_30372 = state_30237__$1;
(statearr_30240_30372[(1)] = (5));

} else {
var statearr_30241_30373 = state_30237__$1;
(statearr_30241_30373[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30238 === (5))){
var state_30237__$1 = state_30237;
var statearr_30242_30374 = state_30237__$1;
(statearr_30242_30374[(2)] = null);

(statearr_30242_30374[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30238 === (6))){
var state_30237__$1 = state_30237;
var statearr_30243_30375 = state_30237__$1;
(statearr_30243_30375[(2)] = null);

(statearr_30243_30375[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30238 === (7))){
var inst_30233 = (state_30237[(2)]);
var state_30237__$1 = state_30237;
var statearr_30244_30376 = state_30237__$1;
(statearr_30244_30376[(2)] = inst_30233);

(statearr_30244_30376[(1)] = (3));


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
});})(__30357,c__28153__auto___30370,G__30200_30358,G__30200_30359__$1,n__4376__auto___30356,jobs,results,process,async))
;
return ((function (__30357,switch__27996__auto__,c__28153__auto___30370,G__30200_30358,G__30200_30359__$1,n__4376__auto___30356,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27997__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27997__auto____0 = (function (){
var statearr_30245 = [null,null,null,null,null,null,null];
(statearr_30245[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27997__auto__);

(statearr_30245[(1)] = (1));

return statearr_30245;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27997__auto____1 = (function (state_30237){
while(true){
var ret_value__27998__auto__ = (function (){try{while(true){
var result__27999__auto__ = switch__27996__auto__.call(null,state_30237);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27999__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27999__auto__;
}
break;
}
}catch (e30246){if((e30246 instanceof Object)){
var ex__28000__auto__ = e30246;
var statearr_30247_30377 = state_30237;
(statearr_30247_30377[(5)] = ex__28000__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30237);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30246;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27998__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30378 = state_30237;
state_30237 = G__30378;
continue;
} else {
return ret_value__27998__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27997__auto__ = function(state_30237){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27997__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27997__auto____1.call(this,state_30237);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__27997__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27997__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27997__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27997__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27997__auto__;
})()
;})(__30357,switch__27996__auto__,c__28153__auto___30370,G__30200_30358,G__30200_30359__$1,n__4376__auto___30356,jobs,results,process,async))
})();
var state__28155__auto__ = (function (){var statearr_30248 = f__28154__auto__.call(null);
(statearr_30248[(6)] = c__28153__auto___30370);

return statearr_30248;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28155__auto__);
});})(__30357,c__28153__auto___30370,G__30200_30358,G__30200_30359__$1,n__4376__auto___30356,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__30200_30359__$1)].join('')));

}

var G__30379 = (__30357 + (1));
__30357 = G__30379;
continue;
} else {
}
break;
}

var c__28153__auto___30380 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28153__auto___30380,jobs,results,process,async){
return (function (){
var f__28154__auto__ = (function (){var switch__27996__auto__ = ((function (c__28153__auto___30380,jobs,results,process,async){
return (function (state_30270){
var state_val_30271 = (state_30270[(1)]);
if((state_val_30271 === (1))){
var state_30270__$1 = state_30270;
var statearr_30272_30381 = state_30270__$1;
(statearr_30272_30381[(2)] = null);

(statearr_30272_30381[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30271 === (2))){
var state_30270__$1 = state_30270;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30270__$1,(4),from);
} else {
if((state_val_30271 === (3))){
var inst_30268 = (state_30270[(2)]);
var state_30270__$1 = state_30270;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30270__$1,inst_30268);
} else {
if((state_val_30271 === (4))){
var inst_30251 = (state_30270[(7)]);
var inst_30251__$1 = (state_30270[(2)]);
var inst_30252 = (inst_30251__$1 == null);
var state_30270__$1 = (function (){var statearr_30273 = state_30270;
(statearr_30273[(7)] = inst_30251__$1);

return statearr_30273;
})();
if(cljs.core.truth_(inst_30252)){
var statearr_30274_30382 = state_30270__$1;
(statearr_30274_30382[(1)] = (5));

} else {
var statearr_30275_30383 = state_30270__$1;
(statearr_30275_30383[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30271 === (5))){
var inst_30254 = cljs.core.async.close_BANG_.call(null,jobs);
var state_30270__$1 = state_30270;
var statearr_30276_30384 = state_30270__$1;
(statearr_30276_30384[(2)] = inst_30254);

(statearr_30276_30384[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30271 === (6))){
var inst_30251 = (state_30270[(7)]);
var inst_30256 = (state_30270[(8)]);
var inst_30256__$1 = cljs.core.async.chan.call(null,(1));
var inst_30257 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_30258 = [inst_30251,inst_30256__$1];
var inst_30259 = (new cljs.core.PersistentVector(null,2,(5),inst_30257,inst_30258,null));
var state_30270__$1 = (function (){var statearr_30277 = state_30270;
(statearr_30277[(8)] = inst_30256__$1);

return statearr_30277;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30270__$1,(8),jobs,inst_30259);
} else {
if((state_val_30271 === (7))){
var inst_30266 = (state_30270[(2)]);
var state_30270__$1 = state_30270;
var statearr_30278_30385 = state_30270__$1;
(statearr_30278_30385[(2)] = inst_30266);

(statearr_30278_30385[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30271 === (8))){
var inst_30256 = (state_30270[(8)]);
var inst_30261 = (state_30270[(2)]);
var state_30270__$1 = (function (){var statearr_30279 = state_30270;
(statearr_30279[(9)] = inst_30261);

return statearr_30279;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30270__$1,(9),results,inst_30256);
} else {
if((state_val_30271 === (9))){
var inst_30263 = (state_30270[(2)]);
var state_30270__$1 = (function (){var statearr_30280 = state_30270;
(statearr_30280[(10)] = inst_30263);

return statearr_30280;
})();
var statearr_30281_30386 = state_30270__$1;
(statearr_30281_30386[(2)] = null);

(statearr_30281_30386[(1)] = (2));


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
});})(c__28153__auto___30380,jobs,results,process,async))
;
return ((function (switch__27996__auto__,c__28153__auto___30380,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27997__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27997__auto____0 = (function (){
var statearr_30282 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30282[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27997__auto__);

(statearr_30282[(1)] = (1));

return statearr_30282;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27997__auto____1 = (function (state_30270){
while(true){
var ret_value__27998__auto__ = (function (){try{while(true){
var result__27999__auto__ = switch__27996__auto__.call(null,state_30270);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27999__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27999__auto__;
}
break;
}
}catch (e30283){if((e30283 instanceof Object)){
var ex__28000__auto__ = e30283;
var statearr_30284_30387 = state_30270;
(statearr_30284_30387[(5)] = ex__28000__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30270);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30283;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27998__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30388 = state_30270;
state_30270 = G__30388;
continue;
} else {
return ret_value__27998__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27997__auto__ = function(state_30270){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27997__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27997__auto____1.call(this,state_30270);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__27997__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27997__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27997__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27997__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27997__auto__;
})()
;})(switch__27996__auto__,c__28153__auto___30380,jobs,results,process,async))
})();
var state__28155__auto__ = (function (){var statearr_30285 = f__28154__auto__.call(null);
(statearr_30285[(6)] = c__28153__auto___30380);

return statearr_30285;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28155__auto__);
});})(c__28153__auto___30380,jobs,results,process,async))
);


var c__28153__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28153__auto__,jobs,results,process,async){
return (function (){
var f__28154__auto__ = (function (){var switch__27996__auto__ = ((function (c__28153__auto__,jobs,results,process,async){
return (function (state_30323){
var state_val_30324 = (state_30323[(1)]);
if((state_val_30324 === (7))){
var inst_30319 = (state_30323[(2)]);
var state_30323__$1 = state_30323;
var statearr_30325_30389 = state_30323__$1;
(statearr_30325_30389[(2)] = inst_30319);

(statearr_30325_30389[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30324 === (20))){
var state_30323__$1 = state_30323;
var statearr_30326_30390 = state_30323__$1;
(statearr_30326_30390[(2)] = null);

(statearr_30326_30390[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30324 === (1))){
var state_30323__$1 = state_30323;
var statearr_30327_30391 = state_30323__$1;
(statearr_30327_30391[(2)] = null);

(statearr_30327_30391[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30324 === (4))){
var inst_30288 = (state_30323[(7)]);
var inst_30288__$1 = (state_30323[(2)]);
var inst_30289 = (inst_30288__$1 == null);
var state_30323__$1 = (function (){var statearr_30328 = state_30323;
(statearr_30328[(7)] = inst_30288__$1);

return statearr_30328;
})();
if(cljs.core.truth_(inst_30289)){
var statearr_30329_30392 = state_30323__$1;
(statearr_30329_30392[(1)] = (5));

} else {
var statearr_30330_30393 = state_30323__$1;
(statearr_30330_30393[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30324 === (15))){
var inst_30301 = (state_30323[(8)]);
var state_30323__$1 = state_30323;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30323__$1,(18),to,inst_30301);
} else {
if((state_val_30324 === (21))){
var inst_30314 = (state_30323[(2)]);
var state_30323__$1 = state_30323;
var statearr_30331_30394 = state_30323__$1;
(statearr_30331_30394[(2)] = inst_30314);

(statearr_30331_30394[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30324 === (13))){
var inst_30316 = (state_30323[(2)]);
var state_30323__$1 = (function (){var statearr_30332 = state_30323;
(statearr_30332[(9)] = inst_30316);

return statearr_30332;
})();
var statearr_30333_30395 = state_30323__$1;
(statearr_30333_30395[(2)] = null);

(statearr_30333_30395[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30324 === (6))){
var inst_30288 = (state_30323[(7)]);
var state_30323__$1 = state_30323;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30323__$1,(11),inst_30288);
} else {
if((state_val_30324 === (17))){
var inst_30309 = (state_30323[(2)]);
var state_30323__$1 = state_30323;
if(cljs.core.truth_(inst_30309)){
var statearr_30334_30396 = state_30323__$1;
(statearr_30334_30396[(1)] = (19));

} else {
var statearr_30335_30397 = state_30323__$1;
(statearr_30335_30397[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30324 === (3))){
var inst_30321 = (state_30323[(2)]);
var state_30323__$1 = state_30323;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30323__$1,inst_30321);
} else {
if((state_val_30324 === (12))){
var inst_30298 = (state_30323[(10)]);
var state_30323__$1 = state_30323;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30323__$1,(14),inst_30298);
} else {
if((state_val_30324 === (2))){
var state_30323__$1 = state_30323;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30323__$1,(4),results);
} else {
if((state_val_30324 === (19))){
var state_30323__$1 = state_30323;
var statearr_30336_30398 = state_30323__$1;
(statearr_30336_30398[(2)] = null);

(statearr_30336_30398[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30324 === (11))){
var inst_30298 = (state_30323[(2)]);
var state_30323__$1 = (function (){var statearr_30337 = state_30323;
(statearr_30337[(10)] = inst_30298);

return statearr_30337;
})();
var statearr_30338_30399 = state_30323__$1;
(statearr_30338_30399[(2)] = null);

(statearr_30338_30399[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30324 === (9))){
var state_30323__$1 = state_30323;
var statearr_30339_30400 = state_30323__$1;
(statearr_30339_30400[(2)] = null);

(statearr_30339_30400[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30324 === (5))){
var state_30323__$1 = state_30323;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30340_30401 = state_30323__$1;
(statearr_30340_30401[(1)] = (8));

} else {
var statearr_30341_30402 = state_30323__$1;
(statearr_30341_30402[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30324 === (14))){
var inst_30301 = (state_30323[(8)]);
var inst_30303 = (state_30323[(11)]);
var inst_30301__$1 = (state_30323[(2)]);
var inst_30302 = (inst_30301__$1 == null);
var inst_30303__$1 = cljs.core.not.call(null,inst_30302);
var state_30323__$1 = (function (){var statearr_30342 = state_30323;
(statearr_30342[(8)] = inst_30301__$1);

(statearr_30342[(11)] = inst_30303__$1);

return statearr_30342;
})();
if(inst_30303__$1){
var statearr_30343_30403 = state_30323__$1;
(statearr_30343_30403[(1)] = (15));

} else {
var statearr_30344_30404 = state_30323__$1;
(statearr_30344_30404[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30324 === (16))){
var inst_30303 = (state_30323[(11)]);
var state_30323__$1 = state_30323;
var statearr_30345_30405 = state_30323__$1;
(statearr_30345_30405[(2)] = inst_30303);

(statearr_30345_30405[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30324 === (10))){
var inst_30295 = (state_30323[(2)]);
var state_30323__$1 = state_30323;
var statearr_30346_30406 = state_30323__$1;
(statearr_30346_30406[(2)] = inst_30295);

(statearr_30346_30406[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30324 === (18))){
var inst_30306 = (state_30323[(2)]);
var state_30323__$1 = state_30323;
var statearr_30347_30407 = state_30323__$1;
(statearr_30347_30407[(2)] = inst_30306);

(statearr_30347_30407[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30324 === (8))){
var inst_30292 = cljs.core.async.close_BANG_.call(null,to);
var state_30323__$1 = state_30323;
var statearr_30348_30408 = state_30323__$1;
(statearr_30348_30408[(2)] = inst_30292);

(statearr_30348_30408[(1)] = (10));


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
});})(c__28153__auto__,jobs,results,process,async))
;
return ((function (switch__27996__auto__,c__28153__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27997__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27997__auto____0 = (function (){
var statearr_30349 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30349[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27997__auto__);

(statearr_30349[(1)] = (1));

return statearr_30349;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27997__auto____1 = (function (state_30323){
while(true){
var ret_value__27998__auto__ = (function (){try{while(true){
var result__27999__auto__ = switch__27996__auto__.call(null,state_30323);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27999__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27999__auto__;
}
break;
}
}catch (e30350){if((e30350 instanceof Object)){
var ex__28000__auto__ = e30350;
var statearr_30351_30409 = state_30323;
(statearr_30351_30409[(5)] = ex__28000__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30323);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30350;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27998__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30410 = state_30323;
state_30323 = G__30410;
continue;
} else {
return ret_value__27998__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27997__auto__ = function(state_30323){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27997__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27997__auto____1.call(this,state_30323);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__27997__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27997__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27997__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27997__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27997__auto__;
})()
;})(switch__27996__auto__,c__28153__auto__,jobs,results,process,async))
})();
var state__28155__auto__ = (function (){var statearr_30352 = f__28154__auto__.call(null);
(statearr_30352[(6)] = c__28153__auto__);

return statearr_30352;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28155__auto__);
});})(c__28153__auto__,jobs,results,process,async))
);

return c__28153__auto__;
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
var G__30412 = arguments.length;
switch (G__30412) {
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

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

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
var G__30415 = arguments.length;
switch (G__30415) {
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

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

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
var G__30418 = arguments.length;
switch (G__30418) {
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

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__28153__auto___30467 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28153__auto___30467,tc,fc){
return (function (){
var f__28154__auto__ = (function (){var switch__27996__auto__ = ((function (c__28153__auto___30467,tc,fc){
return (function (state_30444){
var state_val_30445 = (state_30444[(1)]);
if((state_val_30445 === (7))){
var inst_30440 = (state_30444[(2)]);
var state_30444__$1 = state_30444;
var statearr_30446_30468 = state_30444__$1;
(statearr_30446_30468[(2)] = inst_30440);

(statearr_30446_30468[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30445 === (1))){
var state_30444__$1 = state_30444;
var statearr_30447_30469 = state_30444__$1;
(statearr_30447_30469[(2)] = null);

(statearr_30447_30469[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30445 === (4))){
var inst_30421 = (state_30444[(7)]);
var inst_30421__$1 = (state_30444[(2)]);
var inst_30422 = (inst_30421__$1 == null);
var state_30444__$1 = (function (){var statearr_30448 = state_30444;
(statearr_30448[(7)] = inst_30421__$1);

return statearr_30448;
})();
if(cljs.core.truth_(inst_30422)){
var statearr_30449_30470 = state_30444__$1;
(statearr_30449_30470[(1)] = (5));

} else {
var statearr_30450_30471 = state_30444__$1;
(statearr_30450_30471[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30445 === (13))){
var state_30444__$1 = state_30444;
var statearr_30451_30472 = state_30444__$1;
(statearr_30451_30472[(2)] = null);

(statearr_30451_30472[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30445 === (6))){
var inst_30421 = (state_30444[(7)]);
var inst_30427 = p.call(null,inst_30421);
var state_30444__$1 = state_30444;
if(cljs.core.truth_(inst_30427)){
var statearr_30452_30473 = state_30444__$1;
(statearr_30452_30473[(1)] = (9));

} else {
var statearr_30453_30474 = state_30444__$1;
(statearr_30453_30474[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30445 === (3))){
var inst_30442 = (state_30444[(2)]);
var state_30444__$1 = state_30444;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30444__$1,inst_30442);
} else {
if((state_val_30445 === (12))){
var state_30444__$1 = state_30444;
var statearr_30454_30475 = state_30444__$1;
(statearr_30454_30475[(2)] = null);

(statearr_30454_30475[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30445 === (2))){
var state_30444__$1 = state_30444;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30444__$1,(4),ch);
} else {
if((state_val_30445 === (11))){
var inst_30421 = (state_30444[(7)]);
var inst_30431 = (state_30444[(2)]);
var state_30444__$1 = state_30444;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30444__$1,(8),inst_30431,inst_30421);
} else {
if((state_val_30445 === (9))){
var state_30444__$1 = state_30444;
var statearr_30455_30476 = state_30444__$1;
(statearr_30455_30476[(2)] = tc);

(statearr_30455_30476[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30445 === (5))){
var inst_30424 = cljs.core.async.close_BANG_.call(null,tc);
var inst_30425 = cljs.core.async.close_BANG_.call(null,fc);
var state_30444__$1 = (function (){var statearr_30456 = state_30444;
(statearr_30456[(8)] = inst_30424);

return statearr_30456;
})();
var statearr_30457_30477 = state_30444__$1;
(statearr_30457_30477[(2)] = inst_30425);

(statearr_30457_30477[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30445 === (14))){
var inst_30438 = (state_30444[(2)]);
var state_30444__$1 = state_30444;
var statearr_30458_30478 = state_30444__$1;
(statearr_30458_30478[(2)] = inst_30438);

(statearr_30458_30478[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30445 === (10))){
var state_30444__$1 = state_30444;
var statearr_30459_30479 = state_30444__$1;
(statearr_30459_30479[(2)] = fc);

(statearr_30459_30479[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30445 === (8))){
var inst_30433 = (state_30444[(2)]);
var state_30444__$1 = state_30444;
if(cljs.core.truth_(inst_30433)){
var statearr_30460_30480 = state_30444__$1;
(statearr_30460_30480[(1)] = (12));

} else {
var statearr_30461_30481 = state_30444__$1;
(statearr_30461_30481[(1)] = (13));

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
});})(c__28153__auto___30467,tc,fc))
;
return ((function (switch__27996__auto__,c__28153__auto___30467,tc,fc){
return (function() {
var cljs$core$async$state_machine__27997__auto__ = null;
var cljs$core$async$state_machine__27997__auto____0 = (function (){
var statearr_30462 = [null,null,null,null,null,null,null,null,null];
(statearr_30462[(0)] = cljs$core$async$state_machine__27997__auto__);

(statearr_30462[(1)] = (1));

return statearr_30462;
});
var cljs$core$async$state_machine__27997__auto____1 = (function (state_30444){
while(true){
var ret_value__27998__auto__ = (function (){try{while(true){
var result__27999__auto__ = switch__27996__auto__.call(null,state_30444);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27999__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27999__auto__;
}
break;
}
}catch (e30463){if((e30463 instanceof Object)){
var ex__28000__auto__ = e30463;
var statearr_30464_30482 = state_30444;
(statearr_30464_30482[(5)] = ex__28000__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30444);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30463;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27998__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30483 = state_30444;
state_30444 = G__30483;
continue;
} else {
return ret_value__27998__auto__;
}
break;
}
});
cljs$core$async$state_machine__27997__auto__ = function(state_30444){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27997__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27997__auto____1.call(this,state_30444);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__27997__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27997__auto____0;
cljs$core$async$state_machine__27997__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27997__auto____1;
return cljs$core$async$state_machine__27997__auto__;
})()
;})(switch__27996__auto__,c__28153__auto___30467,tc,fc))
})();
var state__28155__auto__ = (function (){var statearr_30465 = f__28154__auto__.call(null);
(statearr_30465[(6)] = c__28153__auto___30467);

return statearr_30465;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28155__auto__);
});})(c__28153__auto___30467,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__28153__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28153__auto__){
return (function (){
var f__28154__auto__ = (function (){var switch__27996__auto__ = ((function (c__28153__auto__){
return (function (state_30504){
var state_val_30505 = (state_30504[(1)]);
if((state_val_30505 === (7))){
var inst_30500 = (state_30504[(2)]);
var state_30504__$1 = state_30504;
var statearr_30506_30524 = state_30504__$1;
(statearr_30506_30524[(2)] = inst_30500);

(statearr_30506_30524[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30505 === (1))){
var inst_30484 = init;
var state_30504__$1 = (function (){var statearr_30507 = state_30504;
(statearr_30507[(7)] = inst_30484);

return statearr_30507;
})();
var statearr_30508_30525 = state_30504__$1;
(statearr_30508_30525[(2)] = null);

(statearr_30508_30525[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30505 === (4))){
var inst_30487 = (state_30504[(8)]);
var inst_30487__$1 = (state_30504[(2)]);
var inst_30488 = (inst_30487__$1 == null);
var state_30504__$1 = (function (){var statearr_30509 = state_30504;
(statearr_30509[(8)] = inst_30487__$1);

return statearr_30509;
})();
if(cljs.core.truth_(inst_30488)){
var statearr_30510_30526 = state_30504__$1;
(statearr_30510_30526[(1)] = (5));

} else {
var statearr_30511_30527 = state_30504__$1;
(statearr_30511_30527[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30505 === (6))){
var inst_30491 = (state_30504[(9)]);
var inst_30487 = (state_30504[(8)]);
var inst_30484 = (state_30504[(7)]);
var inst_30491__$1 = f.call(null,inst_30484,inst_30487);
var inst_30492 = cljs.core.reduced_QMARK_.call(null,inst_30491__$1);
var state_30504__$1 = (function (){var statearr_30512 = state_30504;
(statearr_30512[(9)] = inst_30491__$1);

return statearr_30512;
})();
if(inst_30492){
var statearr_30513_30528 = state_30504__$1;
(statearr_30513_30528[(1)] = (8));

} else {
var statearr_30514_30529 = state_30504__$1;
(statearr_30514_30529[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30505 === (3))){
var inst_30502 = (state_30504[(2)]);
var state_30504__$1 = state_30504;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30504__$1,inst_30502);
} else {
if((state_val_30505 === (2))){
var state_30504__$1 = state_30504;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30504__$1,(4),ch);
} else {
if((state_val_30505 === (9))){
var inst_30491 = (state_30504[(9)]);
var inst_30484 = inst_30491;
var state_30504__$1 = (function (){var statearr_30515 = state_30504;
(statearr_30515[(7)] = inst_30484);

return statearr_30515;
})();
var statearr_30516_30530 = state_30504__$1;
(statearr_30516_30530[(2)] = null);

(statearr_30516_30530[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30505 === (5))){
var inst_30484 = (state_30504[(7)]);
var state_30504__$1 = state_30504;
var statearr_30517_30531 = state_30504__$1;
(statearr_30517_30531[(2)] = inst_30484);

(statearr_30517_30531[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30505 === (10))){
var inst_30498 = (state_30504[(2)]);
var state_30504__$1 = state_30504;
var statearr_30518_30532 = state_30504__$1;
(statearr_30518_30532[(2)] = inst_30498);

(statearr_30518_30532[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30505 === (8))){
var inst_30491 = (state_30504[(9)]);
var inst_30494 = cljs.core.deref.call(null,inst_30491);
var state_30504__$1 = state_30504;
var statearr_30519_30533 = state_30504__$1;
(statearr_30519_30533[(2)] = inst_30494);

(statearr_30519_30533[(1)] = (10));


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
});})(c__28153__auto__))
;
return ((function (switch__27996__auto__,c__28153__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__27997__auto__ = null;
var cljs$core$async$reduce_$_state_machine__27997__auto____0 = (function (){
var statearr_30520 = [null,null,null,null,null,null,null,null,null,null];
(statearr_30520[(0)] = cljs$core$async$reduce_$_state_machine__27997__auto__);

(statearr_30520[(1)] = (1));

return statearr_30520;
});
var cljs$core$async$reduce_$_state_machine__27997__auto____1 = (function (state_30504){
while(true){
var ret_value__27998__auto__ = (function (){try{while(true){
var result__27999__auto__ = switch__27996__auto__.call(null,state_30504);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27999__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27999__auto__;
}
break;
}
}catch (e30521){if((e30521 instanceof Object)){
var ex__28000__auto__ = e30521;
var statearr_30522_30534 = state_30504;
(statearr_30522_30534[(5)] = ex__28000__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30504);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30521;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27998__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30535 = state_30504;
state_30504 = G__30535;
continue;
} else {
return ret_value__27998__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__27997__auto__ = function(state_30504){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__27997__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__27997__auto____1.call(this,state_30504);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__27997__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__27997__auto____0;
cljs$core$async$reduce_$_state_machine__27997__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__27997__auto____1;
return cljs$core$async$reduce_$_state_machine__27997__auto__;
})()
;})(switch__27996__auto__,c__28153__auto__))
})();
var state__28155__auto__ = (function (){var statearr_30523 = f__28154__auto__.call(null);
(statearr_30523[(6)] = c__28153__auto__);

return statearr_30523;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28155__auto__);
});})(c__28153__auto__))
);

return c__28153__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__28153__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28153__auto__,f__$1){
return (function (){
var f__28154__auto__ = (function (){var switch__27996__auto__ = ((function (c__28153__auto__,f__$1){
return (function (state_30541){
var state_val_30542 = (state_30541[(1)]);
if((state_val_30542 === (1))){
var inst_30536 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_30541__$1 = state_30541;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30541__$1,(2),inst_30536);
} else {
if((state_val_30542 === (2))){
var inst_30538 = (state_30541[(2)]);
var inst_30539 = f__$1.call(null,inst_30538);
var state_30541__$1 = state_30541;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30541__$1,inst_30539);
} else {
return null;
}
}
});})(c__28153__auto__,f__$1))
;
return ((function (switch__27996__auto__,c__28153__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__27997__auto__ = null;
var cljs$core$async$transduce_$_state_machine__27997__auto____0 = (function (){
var statearr_30543 = [null,null,null,null,null,null,null];
(statearr_30543[(0)] = cljs$core$async$transduce_$_state_machine__27997__auto__);

(statearr_30543[(1)] = (1));

return statearr_30543;
});
var cljs$core$async$transduce_$_state_machine__27997__auto____1 = (function (state_30541){
while(true){
var ret_value__27998__auto__ = (function (){try{while(true){
var result__27999__auto__ = switch__27996__auto__.call(null,state_30541);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27999__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27999__auto__;
}
break;
}
}catch (e30544){if((e30544 instanceof Object)){
var ex__28000__auto__ = e30544;
var statearr_30545_30547 = state_30541;
(statearr_30545_30547[(5)] = ex__28000__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30541);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30544;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27998__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30548 = state_30541;
state_30541 = G__30548;
continue;
} else {
return ret_value__27998__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__27997__auto__ = function(state_30541){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__27997__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__27997__auto____1.call(this,state_30541);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__27997__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__27997__auto____0;
cljs$core$async$transduce_$_state_machine__27997__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__27997__auto____1;
return cljs$core$async$transduce_$_state_machine__27997__auto__;
})()
;})(switch__27996__auto__,c__28153__auto__,f__$1))
})();
var state__28155__auto__ = (function (){var statearr_30546 = f__28154__auto__.call(null);
(statearr_30546[(6)] = c__28153__auto__);

return statearr_30546;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28155__auto__);
});})(c__28153__auto__,f__$1))
);

return c__28153__auto__;
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
var G__30550 = arguments.length;
switch (G__30550) {
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

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__28153__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28153__auto__){
return (function (){
var f__28154__auto__ = (function (){var switch__27996__auto__ = ((function (c__28153__auto__){
return (function (state_30575){
var state_val_30576 = (state_30575[(1)]);
if((state_val_30576 === (7))){
var inst_30557 = (state_30575[(2)]);
var state_30575__$1 = state_30575;
var statearr_30577_30598 = state_30575__$1;
(statearr_30577_30598[(2)] = inst_30557);

(statearr_30577_30598[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30576 === (1))){
var inst_30551 = cljs.core.seq.call(null,coll);
var inst_30552 = inst_30551;
var state_30575__$1 = (function (){var statearr_30578 = state_30575;
(statearr_30578[(7)] = inst_30552);

return statearr_30578;
})();
var statearr_30579_30599 = state_30575__$1;
(statearr_30579_30599[(2)] = null);

(statearr_30579_30599[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30576 === (4))){
var inst_30552 = (state_30575[(7)]);
var inst_30555 = cljs.core.first.call(null,inst_30552);
var state_30575__$1 = state_30575;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30575__$1,(7),ch,inst_30555);
} else {
if((state_val_30576 === (13))){
var inst_30569 = (state_30575[(2)]);
var state_30575__$1 = state_30575;
var statearr_30580_30600 = state_30575__$1;
(statearr_30580_30600[(2)] = inst_30569);

(statearr_30580_30600[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30576 === (6))){
var inst_30560 = (state_30575[(2)]);
var state_30575__$1 = state_30575;
if(cljs.core.truth_(inst_30560)){
var statearr_30581_30601 = state_30575__$1;
(statearr_30581_30601[(1)] = (8));

} else {
var statearr_30582_30602 = state_30575__$1;
(statearr_30582_30602[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30576 === (3))){
var inst_30573 = (state_30575[(2)]);
var state_30575__$1 = state_30575;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30575__$1,inst_30573);
} else {
if((state_val_30576 === (12))){
var state_30575__$1 = state_30575;
var statearr_30583_30603 = state_30575__$1;
(statearr_30583_30603[(2)] = null);

(statearr_30583_30603[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30576 === (2))){
var inst_30552 = (state_30575[(7)]);
var state_30575__$1 = state_30575;
if(cljs.core.truth_(inst_30552)){
var statearr_30584_30604 = state_30575__$1;
(statearr_30584_30604[(1)] = (4));

} else {
var statearr_30585_30605 = state_30575__$1;
(statearr_30585_30605[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30576 === (11))){
var inst_30566 = cljs.core.async.close_BANG_.call(null,ch);
var state_30575__$1 = state_30575;
var statearr_30586_30606 = state_30575__$1;
(statearr_30586_30606[(2)] = inst_30566);

(statearr_30586_30606[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30576 === (9))){
var state_30575__$1 = state_30575;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30587_30607 = state_30575__$1;
(statearr_30587_30607[(1)] = (11));

} else {
var statearr_30588_30608 = state_30575__$1;
(statearr_30588_30608[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30576 === (5))){
var inst_30552 = (state_30575[(7)]);
var state_30575__$1 = state_30575;
var statearr_30589_30609 = state_30575__$1;
(statearr_30589_30609[(2)] = inst_30552);

(statearr_30589_30609[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30576 === (10))){
var inst_30571 = (state_30575[(2)]);
var state_30575__$1 = state_30575;
var statearr_30590_30610 = state_30575__$1;
(statearr_30590_30610[(2)] = inst_30571);

(statearr_30590_30610[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30576 === (8))){
var inst_30552 = (state_30575[(7)]);
var inst_30562 = cljs.core.next.call(null,inst_30552);
var inst_30552__$1 = inst_30562;
var state_30575__$1 = (function (){var statearr_30591 = state_30575;
(statearr_30591[(7)] = inst_30552__$1);

return statearr_30591;
})();
var statearr_30592_30611 = state_30575__$1;
(statearr_30592_30611[(2)] = null);

(statearr_30592_30611[(1)] = (2));


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
});})(c__28153__auto__))
;
return ((function (switch__27996__auto__,c__28153__auto__){
return (function() {
var cljs$core$async$state_machine__27997__auto__ = null;
var cljs$core$async$state_machine__27997__auto____0 = (function (){
var statearr_30593 = [null,null,null,null,null,null,null,null];
(statearr_30593[(0)] = cljs$core$async$state_machine__27997__auto__);

(statearr_30593[(1)] = (1));

return statearr_30593;
});
var cljs$core$async$state_machine__27997__auto____1 = (function (state_30575){
while(true){
var ret_value__27998__auto__ = (function (){try{while(true){
var result__27999__auto__ = switch__27996__auto__.call(null,state_30575);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27999__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27999__auto__;
}
break;
}
}catch (e30594){if((e30594 instanceof Object)){
var ex__28000__auto__ = e30594;
var statearr_30595_30612 = state_30575;
(statearr_30595_30612[(5)] = ex__28000__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30575);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30594;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27998__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30613 = state_30575;
state_30575 = G__30613;
continue;
} else {
return ret_value__27998__auto__;
}
break;
}
});
cljs$core$async$state_machine__27997__auto__ = function(state_30575){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27997__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27997__auto____1.call(this,state_30575);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__27997__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27997__auto____0;
cljs$core$async$state_machine__27997__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27997__auto____1;
return cljs$core$async$state_machine__27997__auto__;
})()
;})(switch__27996__auto__,c__28153__auto__))
})();
var state__28155__auto__ = (function (){var statearr_30596 = f__28154__auto__.call(null);
(statearr_30596[(6)] = c__28153__auto__);

return statearr_30596;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28155__auto__);
});})(c__28153__auto__))
);

return c__28153__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

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

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if(((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4211__auto__ = (((_ == null))?null:_);
var m__4212__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,_);
} else {
var m__4212__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__4212__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,ch);
} else {
var m__4212__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m);
} else {
var m__4212__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
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
if(typeof cljs.core.async.t_cljs$core$async30614 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30614 = (function (ch,cs,meta30615){
this.ch = ch;
this.cs = cs;
this.meta30615 = meta30615;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async30614.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_30616,meta30615__$1){
var self__ = this;
var _30616__$1 = this;
return (new cljs.core.async.t_cljs$core$async30614(self__.ch,self__.cs,meta30615__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async30614.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_30616){
var self__ = this;
var _30616__$1 = this;
return self__.meta30615;
});})(cs))
;

cljs.core.async.t_cljs$core$async30614.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30614.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async30614.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30614.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async30614.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async30614.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async30614.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta30615","meta30615",-1678430864,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async30614.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30614.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30614";

cljs.core.async.t_cljs$core$async30614.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async30614");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30614.
 */
cljs.core.async.__GT_t_cljs$core$async30614 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async30614(ch__$1,cs__$1,meta30615){
return (new cljs.core.async.t_cljs$core$async30614(ch__$1,cs__$1,meta30615));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async30614(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__28153__auto___30836 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28153__auto___30836,cs,m,dchan,dctr,done){
return (function (){
var f__28154__auto__ = (function (){var switch__27996__auto__ = ((function (c__28153__auto___30836,cs,m,dchan,dctr,done){
return (function (state_30751){
var state_val_30752 = (state_30751[(1)]);
if((state_val_30752 === (7))){
var inst_30747 = (state_30751[(2)]);
var state_30751__$1 = state_30751;
var statearr_30753_30837 = state_30751__$1;
(statearr_30753_30837[(2)] = inst_30747);

(statearr_30753_30837[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30752 === (20))){
var inst_30650 = (state_30751[(7)]);
var inst_30662 = cljs.core.first.call(null,inst_30650);
var inst_30663 = cljs.core.nth.call(null,inst_30662,(0),null);
var inst_30664 = cljs.core.nth.call(null,inst_30662,(1),null);
var state_30751__$1 = (function (){var statearr_30754 = state_30751;
(statearr_30754[(8)] = inst_30663);

return statearr_30754;
})();
if(cljs.core.truth_(inst_30664)){
var statearr_30755_30838 = state_30751__$1;
(statearr_30755_30838[(1)] = (22));

} else {
var statearr_30756_30839 = state_30751__$1;
(statearr_30756_30839[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30752 === (27))){
var inst_30619 = (state_30751[(9)]);
var inst_30694 = (state_30751[(10)]);
var inst_30692 = (state_30751[(11)]);
var inst_30699 = (state_30751[(12)]);
var inst_30699__$1 = cljs.core._nth.call(null,inst_30692,inst_30694);
var inst_30700 = cljs.core.async.put_BANG_.call(null,inst_30699__$1,inst_30619,done);
var state_30751__$1 = (function (){var statearr_30757 = state_30751;
(statearr_30757[(12)] = inst_30699__$1);

return statearr_30757;
})();
if(cljs.core.truth_(inst_30700)){
var statearr_30758_30840 = state_30751__$1;
(statearr_30758_30840[(1)] = (30));

} else {
var statearr_30759_30841 = state_30751__$1;
(statearr_30759_30841[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30752 === (1))){
var state_30751__$1 = state_30751;
var statearr_30760_30842 = state_30751__$1;
(statearr_30760_30842[(2)] = null);

(statearr_30760_30842[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30752 === (24))){
var inst_30650 = (state_30751[(7)]);
var inst_30669 = (state_30751[(2)]);
var inst_30670 = cljs.core.next.call(null,inst_30650);
var inst_30628 = inst_30670;
var inst_30629 = null;
var inst_30630 = (0);
var inst_30631 = (0);
var state_30751__$1 = (function (){var statearr_30761 = state_30751;
(statearr_30761[(13)] = inst_30630);

(statearr_30761[(14)] = inst_30628);

(statearr_30761[(15)] = inst_30669);

(statearr_30761[(16)] = inst_30629);

(statearr_30761[(17)] = inst_30631);

return statearr_30761;
})();
var statearr_30762_30843 = state_30751__$1;
(statearr_30762_30843[(2)] = null);

(statearr_30762_30843[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30752 === (39))){
var state_30751__$1 = state_30751;
var statearr_30766_30844 = state_30751__$1;
(statearr_30766_30844[(2)] = null);

(statearr_30766_30844[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30752 === (4))){
var inst_30619 = (state_30751[(9)]);
var inst_30619__$1 = (state_30751[(2)]);
var inst_30620 = (inst_30619__$1 == null);
var state_30751__$1 = (function (){var statearr_30767 = state_30751;
(statearr_30767[(9)] = inst_30619__$1);

return statearr_30767;
})();
if(cljs.core.truth_(inst_30620)){
var statearr_30768_30845 = state_30751__$1;
(statearr_30768_30845[(1)] = (5));

} else {
var statearr_30769_30846 = state_30751__$1;
(statearr_30769_30846[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30752 === (15))){
var inst_30630 = (state_30751[(13)]);
var inst_30628 = (state_30751[(14)]);
var inst_30629 = (state_30751[(16)]);
var inst_30631 = (state_30751[(17)]);
var inst_30646 = (state_30751[(2)]);
var inst_30647 = (inst_30631 + (1));
var tmp30763 = inst_30630;
var tmp30764 = inst_30628;
var tmp30765 = inst_30629;
var inst_30628__$1 = tmp30764;
var inst_30629__$1 = tmp30765;
var inst_30630__$1 = tmp30763;
var inst_30631__$1 = inst_30647;
var state_30751__$1 = (function (){var statearr_30770 = state_30751;
(statearr_30770[(13)] = inst_30630__$1);

(statearr_30770[(14)] = inst_30628__$1);

(statearr_30770[(16)] = inst_30629__$1);

(statearr_30770[(18)] = inst_30646);

(statearr_30770[(17)] = inst_30631__$1);

return statearr_30770;
})();
var statearr_30771_30847 = state_30751__$1;
(statearr_30771_30847[(2)] = null);

(statearr_30771_30847[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30752 === (21))){
var inst_30673 = (state_30751[(2)]);
var state_30751__$1 = state_30751;
var statearr_30775_30848 = state_30751__$1;
(statearr_30775_30848[(2)] = inst_30673);

(statearr_30775_30848[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30752 === (31))){
var inst_30699 = (state_30751[(12)]);
var inst_30703 = done.call(null,null);
var inst_30704 = cljs.core.async.untap_STAR_.call(null,m,inst_30699);
var state_30751__$1 = (function (){var statearr_30776 = state_30751;
(statearr_30776[(19)] = inst_30703);

return statearr_30776;
})();
var statearr_30777_30849 = state_30751__$1;
(statearr_30777_30849[(2)] = inst_30704);

(statearr_30777_30849[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30752 === (32))){
var inst_30694 = (state_30751[(10)]);
var inst_30692 = (state_30751[(11)]);
var inst_30691 = (state_30751[(20)]);
var inst_30693 = (state_30751[(21)]);
var inst_30706 = (state_30751[(2)]);
var inst_30707 = (inst_30694 + (1));
var tmp30772 = inst_30692;
var tmp30773 = inst_30691;
var tmp30774 = inst_30693;
var inst_30691__$1 = tmp30773;
var inst_30692__$1 = tmp30772;
var inst_30693__$1 = tmp30774;
var inst_30694__$1 = inst_30707;
var state_30751__$1 = (function (){var statearr_30778 = state_30751;
(statearr_30778[(10)] = inst_30694__$1);

(statearr_30778[(11)] = inst_30692__$1);

(statearr_30778[(22)] = inst_30706);

(statearr_30778[(20)] = inst_30691__$1);

(statearr_30778[(21)] = inst_30693__$1);

return statearr_30778;
})();
var statearr_30779_30850 = state_30751__$1;
(statearr_30779_30850[(2)] = null);

(statearr_30779_30850[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30752 === (40))){
var inst_30719 = (state_30751[(23)]);
var inst_30723 = done.call(null,null);
var inst_30724 = cljs.core.async.untap_STAR_.call(null,m,inst_30719);
var state_30751__$1 = (function (){var statearr_30780 = state_30751;
(statearr_30780[(24)] = inst_30723);

return statearr_30780;
})();
var statearr_30781_30851 = state_30751__$1;
(statearr_30781_30851[(2)] = inst_30724);

(statearr_30781_30851[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30752 === (33))){
var inst_30710 = (state_30751[(25)]);
var inst_30712 = cljs.core.chunked_seq_QMARK_.call(null,inst_30710);
var state_30751__$1 = state_30751;
if(inst_30712){
var statearr_30782_30852 = state_30751__$1;
(statearr_30782_30852[(1)] = (36));

} else {
var statearr_30783_30853 = state_30751__$1;
(statearr_30783_30853[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30752 === (13))){
var inst_30640 = (state_30751[(26)]);
var inst_30643 = cljs.core.async.close_BANG_.call(null,inst_30640);
var state_30751__$1 = state_30751;
var statearr_30784_30854 = state_30751__$1;
(statearr_30784_30854[(2)] = inst_30643);

(statearr_30784_30854[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30752 === (22))){
var inst_30663 = (state_30751[(8)]);
var inst_30666 = cljs.core.async.close_BANG_.call(null,inst_30663);
var state_30751__$1 = state_30751;
var statearr_30785_30855 = state_30751__$1;
(statearr_30785_30855[(2)] = inst_30666);

(statearr_30785_30855[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30752 === (36))){
var inst_30710 = (state_30751[(25)]);
var inst_30714 = cljs.core.chunk_first.call(null,inst_30710);
var inst_30715 = cljs.core.chunk_rest.call(null,inst_30710);
var inst_30716 = cljs.core.count.call(null,inst_30714);
var inst_30691 = inst_30715;
var inst_30692 = inst_30714;
var inst_30693 = inst_30716;
var inst_30694 = (0);
var state_30751__$1 = (function (){var statearr_30786 = state_30751;
(statearr_30786[(10)] = inst_30694);

(statearr_30786[(11)] = inst_30692);

(statearr_30786[(20)] = inst_30691);

(statearr_30786[(21)] = inst_30693);

return statearr_30786;
})();
var statearr_30787_30856 = state_30751__$1;
(statearr_30787_30856[(2)] = null);

(statearr_30787_30856[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30752 === (41))){
var inst_30710 = (state_30751[(25)]);
var inst_30726 = (state_30751[(2)]);
var inst_30727 = cljs.core.next.call(null,inst_30710);
var inst_30691 = inst_30727;
var inst_30692 = null;
var inst_30693 = (0);
var inst_30694 = (0);
var state_30751__$1 = (function (){var statearr_30788 = state_30751;
(statearr_30788[(27)] = inst_30726);

(statearr_30788[(10)] = inst_30694);

(statearr_30788[(11)] = inst_30692);

(statearr_30788[(20)] = inst_30691);

(statearr_30788[(21)] = inst_30693);

return statearr_30788;
})();
var statearr_30789_30857 = state_30751__$1;
(statearr_30789_30857[(2)] = null);

(statearr_30789_30857[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30752 === (43))){
var state_30751__$1 = state_30751;
var statearr_30790_30858 = state_30751__$1;
(statearr_30790_30858[(2)] = null);

(statearr_30790_30858[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30752 === (29))){
var inst_30735 = (state_30751[(2)]);
var state_30751__$1 = state_30751;
var statearr_30791_30859 = state_30751__$1;
(statearr_30791_30859[(2)] = inst_30735);

(statearr_30791_30859[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30752 === (44))){
var inst_30744 = (state_30751[(2)]);
var state_30751__$1 = (function (){var statearr_30792 = state_30751;
(statearr_30792[(28)] = inst_30744);

return statearr_30792;
})();
var statearr_30793_30860 = state_30751__$1;
(statearr_30793_30860[(2)] = null);

(statearr_30793_30860[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30752 === (6))){
var inst_30683 = (state_30751[(29)]);
var inst_30682 = cljs.core.deref.call(null,cs);
var inst_30683__$1 = cljs.core.keys.call(null,inst_30682);
var inst_30684 = cljs.core.count.call(null,inst_30683__$1);
var inst_30685 = cljs.core.reset_BANG_.call(null,dctr,inst_30684);
var inst_30690 = cljs.core.seq.call(null,inst_30683__$1);
var inst_30691 = inst_30690;
var inst_30692 = null;
var inst_30693 = (0);
var inst_30694 = (0);
var state_30751__$1 = (function (){var statearr_30794 = state_30751;
(statearr_30794[(10)] = inst_30694);

(statearr_30794[(11)] = inst_30692);

(statearr_30794[(29)] = inst_30683__$1);

(statearr_30794[(30)] = inst_30685);

(statearr_30794[(20)] = inst_30691);

(statearr_30794[(21)] = inst_30693);

return statearr_30794;
})();
var statearr_30795_30861 = state_30751__$1;
(statearr_30795_30861[(2)] = null);

(statearr_30795_30861[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30752 === (28))){
var inst_30691 = (state_30751[(20)]);
var inst_30710 = (state_30751[(25)]);
var inst_30710__$1 = cljs.core.seq.call(null,inst_30691);
var state_30751__$1 = (function (){var statearr_30796 = state_30751;
(statearr_30796[(25)] = inst_30710__$1);

return statearr_30796;
})();
if(inst_30710__$1){
var statearr_30797_30862 = state_30751__$1;
(statearr_30797_30862[(1)] = (33));

} else {
var statearr_30798_30863 = state_30751__$1;
(statearr_30798_30863[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30752 === (25))){
var inst_30694 = (state_30751[(10)]);
var inst_30693 = (state_30751[(21)]);
var inst_30696 = (inst_30694 < inst_30693);
var inst_30697 = inst_30696;
var state_30751__$1 = state_30751;
if(cljs.core.truth_(inst_30697)){
var statearr_30799_30864 = state_30751__$1;
(statearr_30799_30864[(1)] = (27));

} else {
var statearr_30800_30865 = state_30751__$1;
(statearr_30800_30865[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30752 === (34))){
var state_30751__$1 = state_30751;
var statearr_30801_30866 = state_30751__$1;
(statearr_30801_30866[(2)] = null);

(statearr_30801_30866[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30752 === (17))){
var state_30751__$1 = state_30751;
var statearr_30802_30867 = state_30751__$1;
(statearr_30802_30867[(2)] = null);

(statearr_30802_30867[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30752 === (3))){
var inst_30749 = (state_30751[(2)]);
var state_30751__$1 = state_30751;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30751__$1,inst_30749);
} else {
if((state_val_30752 === (12))){
var inst_30678 = (state_30751[(2)]);
var state_30751__$1 = state_30751;
var statearr_30803_30868 = state_30751__$1;
(statearr_30803_30868[(2)] = inst_30678);

(statearr_30803_30868[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30752 === (2))){
var state_30751__$1 = state_30751;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30751__$1,(4),ch);
} else {
if((state_val_30752 === (23))){
var state_30751__$1 = state_30751;
var statearr_30804_30869 = state_30751__$1;
(statearr_30804_30869[(2)] = null);

(statearr_30804_30869[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30752 === (35))){
var inst_30733 = (state_30751[(2)]);
var state_30751__$1 = state_30751;
var statearr_30805_30870 = state_30751__$1;
(statearr_30805_30870[(2)] = inst_30733);

(statearr_30805_30870[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30752 === (19))){
var inst_30650 = (state_30751[(7)]);
var inst_30654 = cljs.core.chunk_first.call(null,inst_30650);
var inst_30655 = cljs.core.chunk_rest.call(null,inst_30650);
var inst_30656 = cljs.core.count.call(null,inst_30654);
var inst_30628 = inst_30655;
var inst_30629 = inst_30654;
var inst_30630 = inst_30656;
var inst_30631 = (0);
var state_30751__$1 = (function (){var statearr_30806 = state_30751;
(statearr_30806[(13)] = inst_30630);

(statearr_30806[(14)] = inst_30628);

(statearr_30806[(16)] = inst_30629);

(statearr_30806[(17)] = inst_30631);

return statearr_30806;
})();
var statearr_30807_30871 = state_30751__$1;
(statearr_30807_30871[(2)] = null);

(statearr_30807_30871[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30752 === (11))){
var inst_30628 = (state_30751[(14)]);
var inst_30650 = (state_30751[(7)]);
var inst_30650__$1 = cljs.core.seq.call(null,inst_30628);
var state_30751__$1 = (function (){var statearr_30808 = state_30751;
(statearr_30808[(7)] = inst_30650__$1);

return statearr_30808;
})();
if(inst_30650__$1){
var statearr_30809_30872 = state_30751__$1;
(statearr_30809_30872[(1)] = (16));

} else {
var statearr_30810_30873 = state_30751__$1;
(statearr_30810_30873[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30752 === (9))){
var inst_30680 = (state_30751[(2)]);
var state_30751__$1 = state_30751;
var statearr_30811_30874 = state_30751__$1;
(statearr_30811_30874[(2)] = inst_30680);

(statearr_30811_30874[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30752 === (5))){
var inst_30626 = cljs.core.deref.call(null,cs);
var inst_30627 = cljs.core.seq.call(null,inst_30626);
var inst_30628 = inst_30627;
var inst_30629 = null;
var inst_30630 = (0);
var inst_30631 = (0);
var state_30751__$1 = (function (){var statearr_30812 = state_30751;
(statearr_30812[(13)] = inst_30630);

(statearr_30812[(14)] = inst_30628);

(statearr_30812[(16)] = inst_30629);

(statearr_30812[(17)] = inst_30631);

return statearr_30812;
})();
var statearr_30813_30875 = state_30751__$1;
(statearr_30813_30875[(2)] = null);

(statearr_30813_30875[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30752 === (14))){
var state_30751__$1 = state_30751;
var statearr_30814_30876 = state_30751__$1;
(statearr_30814_30876[(2)] = null);

(statearr_30814_30876[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30752 === (45))){
var inst_30741 = (state_30751[(2)]);
var state_30751__$1 = state_30751;
var statearr_30815_30877 = state_30751__$1;
(statearr_30815_30877[(2)] = inst_30741);

(statearr_30815_30877[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30752 === (26))){
var inst_30683 = (state_30751[(29)]);
var inst_30737 = (state_30751[(2)]);
var inst_30738 = cljs.core.seq.call(null,inst_30683);
var state_30751__$1 = (function (){var statearr_30816 = state_30751;
(statearr_30816[(31)] = inst_30737);

return statearr_30816;
})();
if(inst_30738){
var statearr_30817_30878 = state_30751__$1;
(statearr_30817_30878[(1)] = (42));

} else {
var statearr_30818_30879 = state_30751__$1;
(statearr_30818_30879[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30752 === (16))){
var inst_30650 = (state_30751[(7)]);
var inst_30652 = cljs.core.chunked_seq_QMARK_.call(null,inst_30650);
var state_30751__$1 = state_30751;
if(inst_30652){
var statearr_30819_30880 = state_30751__$1;
(statearr_30819_30880[(1)] = (19));

} else {
var statearr_30820_30881 = state_30751__$1;
(statearr_30820_30881[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30752 === (38))){
var inst_30730 = (state_30751[(2)]);
var state_30751__$1 = state_30751;
var statearr_30821_30882 = state_30751__$1;
(statearr_30821_30882[(2)] = inst_30730);

(statearr_30821_30882[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30752 === (30))){
var state_30751__$1 = state_30751;
var statearr_30822_30883 = state_30751__$1;
(statearr_30822_30883[(2)] = null);

(statearr_30822_30883[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30752 === (10))){
var inst_30629 = (state_30751[(16)]);
var inst_30631 = (state_30751[(17)]);
var inst_30639 = cljs.core._nth.call(null,inst_30629,inst_30631);
var inst_30640 = cljs.core.nth.call(null,inst_30639,(0),null);
var inst_30641 = cljs.core.nth.call(null,inst_30639,(1),null);
var state_30751__$1 = (function (){var statearr_30823 = state_30751;
(statearr_30823[(26)] = inst_30640);

return statearr_30823;
})();
if(cljs.core.truth_(inst_30641)){
var statearr_30824_30884 = state_30751__$1;
(statearr_30824_30884[(1)] = (13));

} else {
var statearr_30825_30885 = state_30751__$1;
(statearr_30825_30885[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30752 === (18))){
var inst_30676 = (state_30751[(2)]);
var state_30751__$1 = state_30751;
var statearr_30826_30886 = state_30751__$1;
(statearr_30826_30886[(2)] = inst_30676);

(statearr_30826_30886[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30752 === (42))){
var state_30751__$1 = state_30751;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30751__$1,(45),dchan);
} else {
if((state_val_30752 === (37))){
var inst_30619 = (state_30751[(9)]);
var inst_30719 = (state_30751[(23)]);
var inst_30710 = (state_30751[(25)]);
var inst_30719__$1 = cljs.core.first.call(null,inst_30710);
var inst_30720 = cljs.core.async.put_BANG_.call(null,inst_30719__$1,inst_30619,done);
var state_30751__$1 = (function (){var statearr_30827 = state_30751;
(statearr_30827[(23)] = inst_30719__$1);

return statearr_30827;
})();
if(cljs.core.truth_(inst_30720)){
var statearr_30828_30887 = state_30751__$1;
(statearr_30828_30887[(1)] = (39));

} else {
var statearr_30829_30888 = state_30751__$1;
(statearr_30829_30888[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30752 === (8))){
var inst_30630 = (state_30751[(13)]);
var inst_30631 = (state_30751[(17)]);
var inst_30633 = (inst_30631 < inst_30630);
var inst_30634 = inst_30633;
var state_30751__$1 = state_30751;
if(cljs.core.truth_(inst_30634)){
var statearr_30830_30889 = state_30751__$1;
(statearr_30830_30889[(1)] = (10));

} else {
var statearr_30831_30890 = state_30751__$1;
(statearr_30831_30890[(1)] = (11));

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
});})(c__28153__auto___30836,cs,m,dchan,dctr,done))
;
return ((function (switch__27996__auto__,c__28153__auto___30836,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__27997__auto__ = null;
var cljs$core$async$mult_$_state_machine__27997__auto____0 = (function (){
var statearr_30832 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30832[(0)] = cljs$core$async$mult_$_state_machine__27997__auto__);

(statearr_30832[(1)] = (1));

return statearr_30832;
});
var cljs$core$async$mult_$_state_machine__27997__auto____1 = (function (state_30751){
while(true){
var ret_value__27998__auto__ = (function (){try{while(true){
var result__27999__auto__ = switch__27996__auto__.call(null,state_30751);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27999__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27999__auto__;
}
break;
}
}catch (e30833){if((e30833 instanceof Object)){
var ex__28000__auto__ = e30833;
var statearr_30834_30891 = state_30751;
(statearr_30834_30891[(5)] = ex__28000__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30751);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30833;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27998__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30892 = state_30751;
state_30751 = G__30892;
continue;
} else {
return ret_value__27998__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__27997__auto__ = function(state_30751){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__27997__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__27997__auto____1.call(this,state_30751);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__27997__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__27997__auto____0;
cljs$core$async$mult_$_state_machine__27997__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__27997__auto____1;
return cljs$core$async$mult_$_state_machine__27997__auto__;
})()
;})(switch__27996__auto__,c__28153__auto___30836,cs,m,dchan,dctr,done))
})();
var state__28155__auto__ = (function (){var statearr_30835 = f__28154__auto__.call(null);
(statearr_30835[(6)] = c__28153__auto___30836);

return statearr_30835;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28155__auto__);
});})(c__28153__auto___30836,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__30894 = arguments.length;
switch (G__30894) {
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

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

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

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,ch);
} else {
var m__4212__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,ch);
} else {
var m__4212__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m);
} else {
var m__4212__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,state_map);
} else {
var m__4212__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,mode);
} else {
var m__4212__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4502__auto__ = [];
var len__4499__auto___30906 = arguments.length;
var i__4500__auto___30907 = (0);
while(true){
if((i__4500__auto___30907 < len__4499__auto___30906)){
args__4502__auto__.push((arguments[i__4500__auto___30907]));

var G__30908 = (i__4500__auto___30907 + (1));
i__4500__auto___30907 = G__30908;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((3) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4503__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__30900){
var map__30901 = p__30900;
var map__30901__$1 = ((((!((map__30901 == null)))?(((((map__30901.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30901.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30901):map__30901);
var opts = map__30901__$1;
var statearr_30903_30909 = state;
(statearr_30903_30909[(1)] = cont_block);


var temp__5457__auto__ = cljs.core.async.do_alts.call(null,((function (map__30901,map__30901__$1,opts){
return (function (val){
var statearr_30904_30910 = state;
(statearr_30904_30910[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__30901,map__30901__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5457__auto__)){
var cb = temp__5457__auto__;
var statearr_30905_30911 = state;
(statearr_30905_30911[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq30896){
var G__30897 = cljs.core.first.call(null,seq30896);
var seq30896__$1 = cljs.core.next.call(null,seq30896);
var G__30898 = cljs.core.first.call(null,seq30896__$1);
var seq30896__$2 = cljs.core.next.call(null,seq30896__$1);
var G__30899 = cljs.core.first.call(null,seq30896__$2);
var seq30896__$3 = cljs.core.next.call(null,seq30896__$2);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30897,G__30898,G__30899,seq30896__$3);
});

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
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,((((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos)))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async30912 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30912 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta30913){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta30913 = meta30913;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async30912.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_30914,meta30913__$1){
var self__ = this;
var _30914__$1 = this;
return (new cljs.core.async.t_cljs$core$async30912(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta30913__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30912.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_30914){
var self__ = this;
var _30914__$1 = this;
return self__.meta30913;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30912.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30912.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30912.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30912.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30912.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30912.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30912.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30912.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30912.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta30913","meta30913",-992104031,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30912.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30912.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30912";

cljs.core.async.t_cljs$core$async30912.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async30912");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30912.
 */
cljs.core.async.__GT_t_cljs$core$async30912 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async30912(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta30913){
return (new cljs.core.async.t_cljs$core$async30912(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta30913));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async30912(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__28153__auto___31076 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28153__auto___31076,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__28154__auto__ = (function (){var switch__27996__auto__ = ((function (c__28153__auto___31076,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_31016){
var state_val_31017 = (state_31016[(1)]);
if((state_val_31017 === (7))){
var inst_30931 = (state_31016[(2)]);
var state_31016__$1 = state_31016;
var statearr_31018_31077 = state_31016__$1;
(statearr_31018_31077[(2)] = inst_30931);

(statearr_31018_31077[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31017 === (20))){
var inst_30943 = (state_31016[(7)]);
var state_31016__$1 = state_31016;
var statearr_31019_31078 = state_31016__$1;
(statearr_31019_31078[(2)] = inst_30943);

(statearr_31019_31078[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31017 === (27))){
var state_31016__$1 = state_31016;
var statearr_31020_31079 = state_31016__$1;
(statearr_31020_31079[(2)] = null);

(statearr_31020_31079[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31017 === (1))){
var inst_30918 = (state_31016[(8)]);
var inst_30918__$1 = calc_state.call(null);
var inst_30920 = (inst_30918__$1 == null);
var inst_30921 = cljs.core.not.call(null,inst_30920);
var state_31016__$1 = (function (){var statearr_31021 = state_31016;
(statearr_31021[(8)] = inst_30918__$1);

return statearr_31021;
})();
if(inst_30921){
var statearr_31022_31080 = state_31016__$1;
(statearr_31022_31080[(1)] = (2));

} else {
var statearr_31023_31081 = state_31016__$1;
(statearr_31023_31081[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31017 === (24))){
var inst_30990 = (state_31016[(9)]);
var inst_30976 = (state_31016[(10)]);
var inst_30967 = (state_31016[(11)]);
var inst_30990__$1 = inst_30967.call(null,inst_30976);
var state_31016__$1 = (function (){var statearr_31024 = state_31016;
(statearr_31024[(9)] = inst_30990__$1);

return statearr_31024;
})();
if(cljs.core.truth_(inst_30990__$1)){
var statearr_31025_31082 = state_31016__$1;
(statearr_31025_31082[(1)] = (29));

} else {
var statearr_31026_31083 = state_31016__$1;
(statearr_31026_31083[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31017 === (4))){
var inst_30934 = (state_31016[(2)]);
var state_31016__$1 = state_31016;
if(cljs.core.truth_(inst_30934)){
var statearr_31027_31084 = state_31016__$1;
(statearr_31027_31084[(1)] = (8));

} else {
var statearr_31028_31085 = state_31016__$1;
(statearr_31028_31085[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31017 === (15))){
var inst_30961 = (state_31016[(2)]);
var state_31016__$1 = state_31016;
if(cljs.core.truth_(inst_30961)){
var statearr_31029_31086 = state_31016__$1;
(statearr_31029_31086[(1)] = (19));

} else {
var statearr_31030_31087 = state_31016__$1;
(statearr_31030_31087[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31017 === (21))){
var inst_30966 = (state_31016[(12)]);
var inst_30966__$1 = (state_31016[(2)]);
var inst_30967 = cljs.core.get.call(null,inst_30966__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_30968 = cljs.core.get.call(null,inst_30966__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_30969 = cljs.core.get.call(null,inst_30966__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_31016__$1 = (function (){var statearr_31031 = state_31016;
(statearr_31031[(13)] = inst_30968);

(statearr_31031[(12)] = inst_30966__$1);

(statearr_31031[(11)] = inst_30967);

return statearr_31031;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_31016__$1,(22),inst_30969);
} else {
if((state_val_31017 === (31))){
var inst_30998 = (state_31016[(2)]);
var state_31016__$1 = state_31016;
if(cljs.core.truth_(inst_30998)){
var statearr_31032_31088 = state_31016__$1;
(statearr_31032_31088[(1)] = (32));

} else {
var statearr_31033_31089 = state_31016__$1;
(statearr_31033_31089[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31017 === (32))){
var inst_30975 = (state_31016[(14)]);
var state_31016__$1 = state_31016;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31016__$1,(35),out,inst_30975);
} else {
if((state_val_31017 === (33))){
var inst_30966 = (state_31016[(12)]);
var inst_30943 = inst_30966;
var state_31016__$1 = (function (){var statearr_31034 = state_31016;
(statearr_31034[(7)] = inst_30943);

return statearr_31034;
})();
var statearr_31035_31090 = state_31016__$1;
(statearr_31035_31090[(2)] = null);

(statearr_31035_31090[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31017 === (13))){
var inst_30943 = (state_31016[(7)]);
var inst_30950 = inst_30943.cljs$lang$protocol_mask$partition0$;
var inst_30951 = (inst_30950 & (64));
var inst_30952 = inst_30943.cljs$core$ISeq$;
var inst_30953 = (cljs.core.PROTOCOL_SENTINEL === inst_30952);
var inst_30954 = ((inst_30951) || (inst_30953));
var state_31016__$1 = state_31016;
if(cljs.core.truth_(inst_30954)){
var statearr_31036_31091 = state_31016__$1;
(statearr_31036_31091[(1)] = (16));

} else {
var statearr_31037_31092 = state_31016__$1;
(statearr_31037_31092[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31017 === (22))){
var inst_30976 = (state_31016[(10)]);
var inst_30975 = (state_31016[(14)]);
var inst_30974 = (state_31016[(2)]);
var inst_30975__$1 = cljs.core.nth.call(null,inst_30974,(0),null);
var inst_30976__$1 = cljs.core.nth.call(null,inst_30974,(1),null);
var inst_30977 = (inst_30975__$1 == null);
var inst_30978 = cljs.core._EQ_.call(null,inst_30976__$1,change);
var inst_30979 = ((inst_30977) || (inst_30978));
var state_31016__$1 = (function (){var statearr_31038 = state_31016;
(statearr_31038[(10)] = inst_30976__$1);

(statearr_31038[(14)] = inst_30975__$1);

return statearr_31038;
})();
if(cljs.core.truth_(inst_30979)){
var statearr_31039_31093 = state_31016__$1;
(statearr_31039_31093[(1)] = (23));

} else {
var statearr_31040_31094 = state_31016__$1;
(statearr_31040_31094[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31017 === (36))){
var inst_30966 = (state_31016[(12)]);
var inst_30943 = inst_30966;
var state_31016__$1 = (function (){var statearr_31041 = state_31016;
(statearr_31041[(7)] = inst_30943);

return statearr_31041;
})();
var statearr_31042_31095 = state_31016__$1;
(statearr_31042_31095[(2)] = null);

(statearr_31042_31095[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31017 === (29))){
var inst_30990 = (state_31016[(9)]);
var state_31016__$1 = state_31016;
var statearr_31043_31096 = state_31016__$1;
(statearr_31043_31096[(2)] = inst_30990);

(statearr_31043_31096[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31017 === (6))){
var state_31016__$1 = state_31016;
var statearr_31044_31097 = state_31016__$1;
(statearr_31044_31097[(2)] = false);

(statearr_31044_31097[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31017 === (28))){
var inst_30986 = (state_31016[(2)]);
var inst_30987 = calc_state.call(null);
var inst_30943 = inst_30987;
var state_31016__$1 = (function (){var statearr_31045 = state_31016;
(statearr_31045[(7)] = inst_30943);

(statearr_31045[(15)] = inst_30986);

return statearr_31045;
})();
var statearr_31046_31098 = state_31016__$1;
(statearr_31046_31098[(2)] = null);

(statearr_31046_31098[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31017 === (25))){
var inst_31012 = (state_31016[(2)]);
var state_31016__$1 = state_31016;
var statearr_31047_31099 = state_31016__$1;
(statearr_31047_31099[(2)] = inst_31012);

(statearr_31047_31099[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31017 === (34))){
var inst_31010 = (state_31016[(2)]);
var state_31016__$1 = state_31016;
var statearr_31048_31100 = state_31016__$1;
(statearr_31048_31100[(2)] = inst_31010);

(statearr_31048_31100[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31017 === (17))){
var state_31016__$1 = state_31016;
var statearr_31049_31101 = state_31016__$1;
(statearr_31049_31101[(2)] = false);

(statearr_31049_31101[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31017 === (3))){
var state_31016__$1 = state_31016;
var statearr_31050_31102 = state_31016__$1;
(statearr_31050_31102[(2)] = false);

(statearr_31050_31102[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31017 === (12))){
var inst_31014 = (state_31016[(2)]);
var state_31016__$1 = state_31016;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31016__$1,inst_31014);
} else {
if((state_val_31017 === (2))){
var inst_30918 = (state_31016[(8)]);
var inst_30923 = inst_30918.cljs$lang$protocol_mask$partition0$;
var inst_30924 = (inst_30923 & (64));
var inst_30925 = inst_30918.cljs$core$ISeq$;
var inst_30926 = (cljs.core.PROTOCOL_SENTINEL === inst_30925);
var inst_30927 = ((inst_30924) || (inst_30926));
var state_31016__$1 = state_31016;
if(cljs.core.truth_(inst_30927)){
var statearr_31051_31103 = state_31016__$1;
(statearr_31051_31103[(1)] = (5));

} else {
var statearr_31052_31104 = state_31016__$1;
(statearr_31052_31104[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31017 === (23))){
var inst_30975 = (state_31016[(14)]);
var inst_30981 = (inst_30975 == null);
var state_31016__$1 = state_31016;
if(cljs.core.truth_(inst_30981)){
var statearr_31053_31105 = state_31016__$1;
(statearr_31053_31105[(1)] = (26));

} else {
var statearr_31054_31106 = state_31016__$1;
(statearr_31054_31106[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31017 === (35))){
var inst_31001 = (state_31016[(2)]);
var state_31016__$1 = state_31016;
if(cljs.core.truth_(inst_31001)){
var statearr_31055_31107 = state_31016__$1;
(statearr_31055_31107[(1)] = (36));

} else {
var statearr_31056_31108 = state_31016__$1;
(statearr_31056_31108[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31017 === (19))){
var inst_30943 = (state_31016[(7)]);
var inst_30963 = cljs.core.apply.call(null,cljs.core.hash_map,inst_30943);
var state_31016__$1 = state_31016;
var statearr_31057_31109 = state_31016__$1;
(statearr_31057_31109[(2)] = inst_30963);

(statearr_31057_31109[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31017 === (11))){
var inst_30943 = (state_31016[(7)]);
var inst_30947 = (inst_30943 == null);
var inst_30948 = cljs.core.not.call(null,inst_30947);
var state_31016__$1 = state_31016;
if(inst_30948){
var statearr_31058_31110 = state_31016__$1;
(statearr_31058_31110[(1)] = (13));

} else {
var statearr_31059_31111 = state_31016__$1;
(statearr_31059_31111[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31017 === (9))){
var inst_30918 = (state_31016[(8)]);
var state_31016__$1 = state_31016;
var statearr_31060_31112 = state_31016__$1;
(statearr_31060_31112[(2)] = inst_30918);

(statearr_31060_31112[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31017 === (5))){
var state_31016__$1 = state_31016;
var statearr_31061_31113 = state_31016__$1;
(statearr_31061_31113[(2)] = true);

(statearr_31061_31113[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31017 === (14))){
var state_31016__$1 = state_31016;
var statearr_31062_31114 = state_31016__$1;
(statearr_31062_31114[(2)] = false);

(statearr_31062_31114[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31017 === (26))){
var inst_30976 = (state_31016[(10)]);
var inst_30983 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_30976);
var state_31016__$1 = state_31016;
var statearr_31063_31115 = state_31016__$1;
(statearr_31063_31115[(2)] = inst_30983);

(statearr_31063_31115[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31017 === (16))){
var state_31016__$1 = state_31016;
var statearr_31064_31116 = state_31016__$1;
(statearr_31064_31116[(2)] = true);

(statearr_31064_31116[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31017 === (38))){
var inst_31006 = (state_31016[(2)]);
var state_31016__$1 = state_31016;
var statearr_31065_31117 = state_31016__$1;
(statearr_31065_31117[(2)] = inst_31006);

(statearr_31065_31117[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31017 === (30))){
var inst_30968 = (state_31016[(13)]);
var inst_30976 = (state_31016[(10)]);
var inst_30967 = (state_31016[(11)]);
var inst_30993 = cljs.core.empty_QMARK_.call(null,inst_30967);
var inst_30994 = inst_30968.call(null,inst_30976);
var inst_30995 = cljs.core.not.call(null,inst_30994);
var inst_30996 = ((inst_30993) && (inst_30995));
var state_31016__$1 = state_31016;
var statearr_31066_31118 = state_31016__$1;
(statearr_31066_31118[(2)] = inst_30996);

(statearr_31066_31118[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31017 === (10))){
var inst_30918 = (state_31016[(8)]);
var inst_30939 = (state_31016[(2)]);
var inst_30940 = cljs.core.get.call(null,inst_30939,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_30941 = cljs.core.get.call(null,inst_30939,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_30942 = cljs.core.get.call(null,inst_30939,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_30943 = inst_30918;
var state_31016__$1 = (function (){var statearr_31067 = state_31016;
(statearr_31067[(7)] = inst_30943);

(statearr_31067[(16)] = inst_30941);

(statearr_31067[(17)] = inst_30940);

(statearr_31067[(18)] = inst_30942);

return statearr_31067;
})();
var statearr_31068_31119 = state_31016__$1;
(statearr_31068_31119[(2)] = null);

(statearr_31068_31119[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31017 === (18))){
var inst_30958 = (state_31016[(2)]);
var state_31016__$1 = state_31016;
var statearr_31069_31120 = state_31016__$1;
(statearr_31069_31120[(2)] = inst_30958);

(statearr_31069_31120[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31017 === (37))){
var state_31016__$1 = state_31016;
var statearr_31070_31121 = state_31016__$1;
(statearr_31070_31121[(2)] = null);

(statearr_31070_31121[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31017 === (8))){
var inst_30918 = (state_31016[(8)]);
var inst_30936 = cljs.core.apply.call(null,cljs.core.hash_map,inst_30918);
var state_31016__$1 = state_31016;
var statearr_31071_31122 = state_31016__$1;
(statearr_31071_31122[(2)] = inst_30936);

(statearr_31071_31122[(1)] = (10));


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
});})(c__28153__auto___31076,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__27996__auto__,c__28153__auto___31076,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__27997__auto__ = null;
var cljs$core$async$mix_$_state_machine__27997__auto____0 = (function (){
var statearr_31072 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31072[(0)] = cljs$core$async$mix_$_state_machine__27997__auto__);

(statearr_31072[(1)] = (1));

return statearr_31072;
});
var cljs$core$async$mix_$_state_machine__27997__auto____1 = (function (state_31016){
while(true){
var ret_value__27998__auto__ = (function (){try{while(true){
var result__27999__auto__ = switch__27996__auto__.call(null,state_31016);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27999__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27999__auto__;
}
break;
}
}catch (e31073){if((e31073 instanceof Object)){
var ex__28000__auto__ = e31073;
var statearr_31074_31123 = state_31016;
(statearr_31074_31123[(5)] = ex__28000__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31016);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31073;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27998__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31124 = state_31016;
state_31016 = G__31124;
continue;
} else {
return ret_value__27998__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__27997__auto__ = function(state_31016){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__27997__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__27997__auto____1.call(this,state_31016);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__27997__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__27997__auto____0;
cljs$core$async$mix_$_state_machine__27997__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__27997__auto____1;
return cljs$core$async$mix_$_state_machine__27997__auto__;
})()
;})(switch__27996__auto__,c__28153__auto___31076,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__28155__auto__ = (function (){var statearr_31075 = f__28154__auto__.call(null);
(statearr_31075[(6)] = c__28153__auto___31076);

return statearr_31075;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28155__auto__);
});})(c__28153__auto___31076,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


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

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4211__auto__ = (((p == null))?null:p);
var m__4212__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__4212__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4211__auto__ = (((p == null))?null:p);
var m__4212__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,p,v,ch);
} else {
var m__4212__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__31126 = arguments.length;
switch (G__31126) {
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

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4211__auto__ = (((p == null))?null:p);
var m__4212__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,p);
} else {
var m__4212__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4211__auto__ = (((p == null))?null:p);
var m__4212__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,p,v);
} else {
var m__4212__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


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
var G__31130 = arguments.length;
switch (G__31130) {
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

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__3922__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3922__auto__,mults){
return (function (p1__31128_SHARP_){
if(cljs.core.truth_(p1__31128_SHARP_.call(null,topic))){
return p1__31128_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__31128_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3922__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async31131 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31131 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta31132){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta31132 = meta31132;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async31131.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_31133,meta31132__$1){
var self__ = this;
var _31133__$1 = this;
return (new cljs.core.async.t_cljs$core$async31131(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta31132__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31131.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_31133){
var self__ = this;
var _31133__$1 = this;
return self__.meta31132;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31131.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31131.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31131.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31131.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31131.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5457__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__5457__auto__)){
var m = temp__5457__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31131.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31131.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31131.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta31132","meta31132",1398646460,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31131.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31131.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31131";

cljs.core.async.t_cljs$core$async31131.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async31131");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31131.
 */
cljs.core.async.__GT_t_cljs$core$async31131 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async31131(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta31132){
return (new cljs.core.async.t_cljs$core$async31131(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta31132));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async31131(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__28153__auto___31251 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28153__auto___31251,mults,ensure_mult,p){
return (function (){
var f__28154__auto__ = (function (){var switch__27996__auto__ = ((function (c__28153__auto___31251,mults,ensure_mult,p){
return (function (state_31205){
var state_val_31206 = (state_31205[(1)]);
if((state_val_31206 === (7))){
var inst_31201 = (state_31205[(2)]);
var state_31205__$1 = state_31205;
var statearr_31207_31252 = state_31205__$1;
(statearr_31207_31252[(2)] = inst_31201);

(statearr_31207_31252[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31206 === (20))){
var state_31205__$1 = state_31205;
var statearr_31208_31253 = state_31205__$1;
(statearr_31208_31253[(2)] = null);

(statearr_31208_31253[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31206 === (1))){
var state_31205__$1 = state_31205;
var statearr_31209_31254 = state_31205__$1;
(statearr_31209_31254[(2)] = null);

(statearr_31209_31254[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31206 === (24))){
var inst_31184 = (state_31205[(7)]);
var inst_31193 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_31184);
var state_31205__$1 = state_31205;
var statearr_31210_31255 = state_31205__$1;
(statearr_31210_31255[(2)] = inst_31193);

(statearr_31210_31255[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31206 === (4))){
var inst_31136 = (state_31205[(8)]);
var inst_31136__$1 = (state_31205[(2)]);
var inst_31137 = (inst_31136__$1 == null);
var state_31205__$1 = (function (){var statearr_31211 = state_31205;
(statearr_31211[(8)] = inst_31136__$1);

return statearr_31211;
})();
if(cljs.core.truth_(inst_31137)){
var statearr_31212_31256 = state_31205__$1;
(statearr_31212_31256[(1)] = (5));

} else {
var statearr_31213_31257 = state_31205__$1;
(statearr_31213_31257[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31206 === (15))){
var inst_31178 = (state_31205[(2)]);
var state_31205__$1 = state_31205;
var statearr_31214_31258 = state_31205__$1;
(statearr_31214_31258[(2)] = inst_31178);

(statearr_31214_31258[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31206 === (21))){
var inst_31198 = (state_31205[(2)]);
var state_31205__$1 = (function (){var statearr_31215 = state_31205;
(statearr_31215[(9)] = inst_31198);

return statearr_31215;
})();
var statearr_31216_31259 = state_31205__$1;
(statearr_31216_31259[(2)] = null);

(statearr_31216_31259[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31206 === (13))){
var inst_31160 = (state_31205[(10)]);
var inst_31162 = cljs.core.chunked_seq_QMARK_.call(null,inst_31160);
var state_31205__$1 = state_31205;
if(inst_31162){
var statearr_31217_31260 = state_31205__$1;
(statearr_31217_31260[(1)] = (16));

} else {
var statearr_31218_31261 = state_31205__$1;
(statearr_31218_31261[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31206 === (22))){
var inst_31190 = (state_31205[(2)]);
var state_31205__$1 = state_31205;
if(cljs.core.truth_(inst_31190)){
var statearr_31219_31262 = state_31205__$1;
(statearr_31219_31262[(1)] = (23));

} else {
var statearr_31220_31263 = state_31205__$1;
(statearr_31220_31263[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31206 === (6))){
var inst_31136 = (state_31205[(8)]);
var inst_31186 = (state_31205[(11)]);
var inst_31184 = (state_31205[(7)]);
var inst_31184__$1 = topic_fn.call(null,inst_31136);
var inst_31185 = cljs.core.deref.call(null,mults);
var inst_31186__$1 = cljs.core.get.call(null,inst_31185,inst_31184__$1);
var state_31205__$1 = (function (){var statearr_31221 = state_31205;
(statearr_31221[(11)] = inst_31186__$1);

(statearr_31221[(7)] = inst_31184__$1);

return statearr_31221;
})();
if(cljs.core.truth_(inst_31186__$1)){
var statearr_31222_31264 = state_31205__$1;
(statearr_31222_31264[(1)] = (19));

} else {
var statearr_31223_31265 = state_31205__$1;
(statearr_31223_31265[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31206 === (25))){
var inst_31195 = (state_31205[(2)]);
var state_31205__$1 = state_31205;
var statearr_31224_31266 = state_31205__$1;
(statearr_31224_31266[(2)] = inst_31195);

(statearr_31224_31266[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31206 === (17))){
var inst_31160 = (state_31205[(10)]);
var inst_31169 = cljs.core.first.call(null,inst_31160);
var inst_31170 = cljs.core.async.muxch_STAR_.call(null,inst_31169);
var inst_31171 = cljs.core.async.close_BANG_.call(null,inst_31170);
var inst_31172 = cljs.core.next.call(null,inst_31160);
var inst_31146 = inst_31172;
var inst_31147 = null;
var inst_31148 = (0);
var inst_31149 = (0);
var state_31205__$1 = (function (){var statearr_31225 = state_31205;
(statearr_31225[(12)] = inst_31171);

(statearr_31225[(13)] = inst_31147);

(statearr_31225[(14)] = inst_31146);

(statearr_31225[(15)] = inst_31148);

(statearr_31225[(16)] = inst_31149);

return statearr_31225;
})();
var statearr_31226_31267 = state_31205__$1;
(statearr_31226_31267[(2)] = null);

(statearr_31226_31267[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31206 === (3))){
var inst_31203 = (state_31205[(2)]);
var state_31205__$1 = state_31205;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31205__$1,inst_31203);
} else {
if((state_val_31206 === (12))){
var inst_31180 = (state_31205[(2)]);
var state_31205__$1 = state_31205;
var statearr_31227_31268 = state_31205__$1;
(statearr_31227_31268[(2)] = inst_31180);

(statearr_31227_31268[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31206 === (2))){
var state_31205__$1 = state_31205;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31205__$1,(4),ch);
} else {
if((state_val_31206 === (23))){
var state_31205__$1 = state_31205;
var statearr_31228_31269 = state_31205__$1;
(statearr_31228_31269[(2)] = null);

(statearr_31228_31269[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31206 === (19))){
var inst_31136 = (state_31205[(8)]);
var inst_31186 = (state_31205[(11)]);
var inst_31188 = cljs.core.async.muxch_STAR_.call(null,inst_31186);
var state_31205__$1 = state_31205;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31205__$1,(22),inst_31188,inst_31136);
} else {
if((state_val_31206 === (11))){
var inst_31160 = (state_31205[(10)]);
var inst_31146 = (state_31205[(14)]);
var inst_31160__$1 = cljs.core.seq.call(null,inst_31146);
var state_31205__$1 = (function (){var statearr_31229 = state_31205;
(statearr_31229[(10)] = inst_31160__$1);

return statearr_31229;
})();
if(inst_31160__$1){
var statearr_31230_31270 = state_31205__$1;
(statearr_31230_31270[(1)] = (13));

} else {
var statearr_31231_31271 = state_31205__$1;
(statearr_31231_31271[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31206 === (9))){
var inst_31182 = (state_31205[(2)]);
var state_31205__$1 = state_31205;
var statearr_31232_31272 = state_31205__$1;
(statearr_31232_31272[(2)] = inst_31182);

(statearr_31232_31272[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31206 === (5))){
var inst_31143 = cljs.core.deref.call(null,mults);
var inst_31144 = cljs.core.vals.call(null,inst_31143);
var inst_31145 = cljs.core.seq.call(null,inst_31144);
var inst_31146 = inst_31145;
var inst_31147 = null;
var inst_31148 = (0);
var inst_31149 = (0);
var state_31205__$1 = (function (){var statearr_31233 = state_31205;
(statearr_31233[(13)] = inst_31147);

(statearr_31233[(14)] = inst_31146);

(statearr_31233[(15)] = inst_31148);

(statearr_31233[(16)] = inst_31149);

return statearr_31233;
})();
var statearr_31234_31273 = state_31205__$1;
(statearr_31234_31273[(2)] = null);

(statearr_31234_31273[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31206 === (14))){
var state_31205__$1 = state_31205;
var statearr_31238_31274 = state_31205__$1;
(statearr_31238_31274[(2)] = null);

(statearr_31238_31274[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31206 === (16))){
var inst_31160 = (state_31205[(10)]);
var inst_31164 = cljs.core.chunk_first.call(null,inst_31160);
var inst_31165 = cljs.core.chunk_rest.call(null,inst_31160);
var inst_31166 = cljs.core.count.call(null,inst_31164);
var inst_31146 = inst_31165;
var inst_31147 = inst_31164;
var inst_31148 = inst_31166;
var inst_31149 = (0);
var state_31205__$1 = (function (){var statearr_31239 = state_31205;
(statearr_31239[(13)] = inst_31147);

(statearr_31239[(14)] = inst_31146);

(statearr_31239[(15)] = inst_31148);

(statearr_31239[(16)] = inst_31149);

return statearr_31239;
})();
var statearr_31240_31275 = state_31205__$1;
(statearr_31240_31275[(2)] = null);

(statearr_31240_31275[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31206 === (10))){
var inst_31147 = (state_31205[(13)]);
var inst_31146 = (state_31205[(14)]);
var inst_31148 = (state_31205[(15)]);
var inst_31149 = (state_31205[(16)]);
var inst_31154 = cljs.core._nth.call(null,inst_31147,inst_31149);
var inst_31155 = cljs.core.async.muxch_STAR_.call(null,inst_31154);
var inst_31156 = cljs.core.async.close_BANG_.call(null,inst_31155);
var inst_31157 = (inst_31149 + (1));
var tmp31235 = inst_31147;
var tmp31236 = inst_31146;
var tmp31237 = inst_31148;
var inst_31146__$1 = tmp31236;
var inst_31147__$1 = tmp31235;
var inst_31148__$1 = tmp31237;
var inst_31149__$1 = inst_31157;
var state_31205__$1 = (function (){var statearr_31241 = state_31205;
(statearr_31241[(13)] = inst_31147__$1);

(statearr_31241[(14)] = inst_31146__$1);

(statearr_31241[(15)] = inst_31148__$1);

(statearr_31241[(17)] = inst_31156);

(statearr_31241[(16)] = inst_31149__$1);

return statearr_31241;
})();
var statearr_31242_31276 = state_31205__$1;
(statearr_31242_31276[(2)] = null);

(statearr_31242_31276[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31206 === (18))){
var inst_31175 = (state_31205[(2)]);
var state_31205__$1 = state_31205;
var statearr_31243_31277 = state_31205__$1;
(statearr_31243_31277[(2)] = inst_31175);

(statearr_31243_31277[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31206 === (8))){
var inst_31148 = (state_31205[(15)]);
var inst_31149 = (state_31205[(16)]);
var inst_31151 = (inst_31149 < inst_31148);
var inst_31152 = inst_31151;
var state_31205__$1 = state_31205;
if(cljs.core.truth_(inst_31152)){
var statearr_31244_31278 = state_31205__$1;
(statearr_31244_31278[(1)] = (10));

} else {
var statearr_31245_31279 = state_31205__$1;
(statearr_31245_31279[(1)] = (11));

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
});})(c__28153__auto___31251,mults,ensure_mult,p))
;
return ((function (switch__27996__auto__,c__28153__auto___31251,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__27997__auto__ = null;
var cljs$core$async$state_machine__27997__auto____0 = (function (){
var statearr_31246 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31246[(0)] = cljs$core$async$state_machine__27997__auto__);

(statearr_31246[(1)] = (1));

return statearr_31246;
});
var cljs$core$async$state_machine__27997__auto____1 = (function (state_31205){
while(true){
var ret_value__27998__auto__ = (function (){try{while(true){
var result__27999__auto__ = switch__27996__auto__.call(null,state_31205);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27999__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27999__auto__;
}
break;
}
}catch (e31247){if((e31247 instanceof Object)){
var ex__28000__auto__ = e31247;
var statearr_31248_31280 = state_31205;
(statearr_31248_31280[(5)] = ex__28000__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31205);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31247;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27998__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31281 = state_31205;
state_31205 = G__31281;
continue;
} else {
return ret_value__27998__auto__;
}
break;
}
});
cljs$core$async$state_machine__27997__auto__ = function(state_31205){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27997__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27997__auto____1.call(this,state_31205);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__27997__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27997__auto____0;
cljs$core$async$state_machine__27997__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27997__auto____1;
return cljs$core$async$state_machine__27997__auto__;
})()
;})(switch__27996__auto__,c__28153__auto___31251,mults,ensure_mult,p))
})();
var state__28155__auto__ = (function (){var statearr_31249 = f__28154__auto__.call(null);
(statearr_31249[(6)] = c__28153__auto___31251);

return statearr_31249;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28155__auto__);
});})(c__28153__auto___31251,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__31283 = arguments.length;
switch (G__31283) {
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

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

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
var G__31286 = arguments.length;
switch (G__31286) {
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

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

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
var G__31289 = arguments.length;
switch (G__31289) {
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

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__28153__auto___31356 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28153__auto___31356,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__28154__auto__ = (function (){var switch__27996__auto__ = ((function (c__28153__auto___31356,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_31328){
var state_val_31329 = (state_31328[(1)]);
if((state_val_31329 === (7))){
var state_31328__$1 = state_31328;
var statearr_31330_31357 = state_31328__$1;
(statearr_31330_31357[(2)] = null);

(statearr_31330_31357[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31329 === (1))){
var state_31328__$1 = state_31328;
var statearr_31331_31358 = state_31328__$1;
(statearr_31331_31358[(2)] = null);

(statearr_31331_31358[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31329 === (4))){
var inst_31292 = (state_31328[(7)]);
var inst_31294 = (inst_31292 < cnt);
var state_31328__$1 = state_31328;
if(cljs.core.truth_(inst_31294)){
var statearr_31332_31359 = state_31328__$1;
(statearr_31332_31359[(1)] = (6));

} else {
var statearr_31333_31360 = state_31328__$1;
(statearr_31333_31360[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31329 === (15))){
var inst_31324 = (state_31328[(2)]);
var state_31328__$1 = state_31328;
var statearr_31334_31361 = state_31328__$1;
(statearr_31334_31361[(2)] = inst_31324);

(statearr_31334_31361[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31329 === (13))){
var inst_31317 = cljs.core.async.close_BANG_.call(null,out);
var state_31328__$1 = state_31328;
var statearr_31335_31362 = state_31328__$1;
(statearr_31335_31362[(2)] = inst_31317);

(statearr_31335_31362[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31329 === (6))){
var state_31328__$1 = state_31328;
var statearr_31336_31363 = state_31328__$1;
(statearr_31336_31363[(2)] = null);

(statearr_31336_31363[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31329 === (3))){
var inst_31326 = (state_31328[(2)]);
var state_31328__$1 = state_31328;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31328__$1,inst_31326);
} else {
if((state_val_31329 === (12))){
var inst_31314 = (state_31328[(8)]);
var inst_31314__$1 = (state_31328[(2)]);
var inst_31315 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_31314__$1);
var state_31328__$1 = (function (){var statearr_31337 = state_31328;
(statearr_31337[(8)] = inst_31314__$1);

return statearr_31337;
})();
if(cljs.core.truth_(inst_31315)){
var statearr_31338_31364 = state_31328__$1;
(statearr_31338_31364[(1)] = (13));

} else {
var statearr_31339_31365 = state_31328__$1;
(statearr_31339_31365[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31329 === (2))){
var inst_31291 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_31292 = (0);
var state_31328__$1 = (function (){var statearr_31340 = state_31328;
(statearr_31340[(7)] = inst_31292);

(statearr_31340[(9)] = inst_31291);

return statearr_31340;
})();
var statearr_31341_31366 = state_31328__$1;
(statearr_31341_31366[(2)] = null);

(statearr_31341_31366[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31329 === (11))){
var inst_31292 = (state_31328[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_31328,(10),Object,null,(9));
var inst_31301 = chs__$1.call(null,inst_31292);
var inst_31302 = done.call(null,inst_31292);
var inst_31303 = cljs.core.async.take_BANG_.call(null,inst_31301,inst_31302);
var state_31328__$1 = state_31328;
var statearr_31342_31367 = state_31328__$1;
(statearr_31342_31367[(2)] = inst_31303);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31328__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31329 === (9))){
var inst_31292 = (state_31328[(7)]);
var inst_31305 = (state_31328[(2)]);
var inst_31306 = (inst_31292 + (1));
var inst_31292__$1 = inst_31306;
var state_31328__$1 = (function (){var statearr_31343 = state_31328;
(statearr_31343[(7)] = inst_31292__$1);

(statearr_31343[(10)] = inst_31305);

return statearr_31343;
})();
var statearr_31344_31368 = state_31328__$1;
(statearr_31344_31368[(2)] = null);

(statearr_31344_31368[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31329 === (5))){
var inst_31312 = (state_31328[(2)]);
var state_31328__$1 = (function (){var statearr_31345 = state_31328;
(statearr_31345[(11)] = inst_31312);

return statearr_31345;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31328__$1,(12),dchan);
} else {
if((state_val_31329 === (14))){
var inst_31314 = (state_31328[(8)]);
var inst_31319 = cljs.core.apply.call(null,f,inst_31314);
var state_31328__$1 = state_31328;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31328__$1,(16),out,inst_31319);
} else {
if((state_val_31329 === (16))){
var inst_31321 = (state_31328[(2)]);
var state_31328__$1 = (function (){var statearr_31346 = state_31328;
(statearr_31346[(12)] = inst_31321);

return statearr_31346;
})();
var statearr_31347_31369 = state_31328__$1;
(statearr_31347_31369[(2)] = null);

(statearr_31347_31369[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31329 === (10))){
var inst_31296 = (state_31328[(2)]);
var inst_31297 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_31328__$1 = (function (){var statearr_31348 = state_31328;
(statearr_31348[(13)] = inst_31296);

return statearr_31348;
})();
var statearr_31349_31370 = state_31328__$1;
(statearr_31349_31370[(2)] = inst_31297);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31328__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31329 === (8))){
var inst_31310 = (state_31328[(2)]);
var state_31328__$1 = state_31328;
var statearr_31350_31371 = state_31328__$1;
(statearr_31350_31371[(2)] = inst_31310);

(statearr_31350_31371[(1)] = (5));


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
});})(c__28153__auto___31356,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__27996__auto__,c__28153__auto___31356,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__27997__auto__ = null;
var cljs$core$async$state_machine__27997__auto____0 = (function (){
var statearr_31351 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31351[(0)] = cljs$core$async$state_machine__27997__auto__);

(statearr_31351[(1)] = (1));

return statearr_31351;
});
var cljs$core$async$state_machine__27997__auto____1 = (function (state_31328){
while(true){
var ret_value__27998__auto__ = (function (){try{while(true){
var result__27999__auto__ = switch__27996__auto__.call(null,state_31328);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27999__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27999__auto__;
}
break;
}
}catch (e31352){if((e31352 instanceof Object)){
var ex__28000__auto__ = e31352;
var statearr_31353_31372 = state_31328;
(statearr_31353_31372[(5)] = ex__28000__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31328);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31352;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27998__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31373 = state_31328;
state_31328 = G__31373;
continue;
} else {
return ret_value__27998__auto__;
}
break;
}
});
cljs$core$async$state_machine__27997__auto__ = function(state_31328){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27997__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27997__auto____1.call(this,state_31328);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__27997__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27997__auto____0;
cljs$core$async$state_machine__27997__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27997__auto____1;
return cljs$core$async$state_machine__27997__auto__;
})()
;})(switch__27996__auto__,c__28153__auto___31356,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__28155__auto__ = (function (){var statearr_31354 = f__28154__auto__.call(null);
(statearr_31354[(6)] = c__28153__auto___31356);

return statearr_31354;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28155__auto__);
});})(c__28153__auto___31356,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__31376 = arguments.length;
switch (G__31376) {
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

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28153__auto___31430 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28153__auto___31430,out){
return (function (){
var f__28154__auto__ = (function (){var switch__27996__auto__ = ((function (c__28153__auto___31430,out){
return (function (state_31408){
var state_val_31409 = (state_31408[(1)]);
if((state_val_31409 === (7))){
var inst_31387 = (state_31408[(7)]);
var inst_31388 = (state_31408[(8)]);
var inst_31387__$1 = (state_31408[(2)]);
var inst_31388__$1 = cljs.core.nth.call(null,inst_31387__$1,(0),null);
var inst_31389 = cljs.core.nth.call(null,inst_31387__$1,(1),null);
var inst_31390 = (inst_31388__$1 == null);
var state_31408__$1 = (function (){var statearr_31410 = state_31408;
(statearr_31410[(7)] = inst_31387__$1);

(statearr_31410[(8)] = inst_31388__$1);

(statearr_31410[(9)] = inst_31389);

return statearr_31410;
})();
if(cljs.core.truth_(inst_31390)){
var statearr_31411_31431 = state_31408__$1;
(statearr_31411_31431[(1)] = (8));

} else {
var statearr_31412_31432 = state_31408__$1;
(statearr_31412_31432[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31409 === (1))){
var inst_31377 = cljs.core.vec.call(null,chs);
var inst_31378 = inst_31377;
var state_31408__$1 = (function (){var statearr_31413 = state_31408;
(statearr_31413[(10)] = inst_31378);

return statearr_31413;
})();
var statearr_31414_31433 = state_31408__$1;
(statearr_31414_31433[(2)] = null);

(statearr_31414_31433[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31409 === (4))){
var inst_31378 = (state_31408[(10)]);
var state_31408__$1 = state_31408;
return cljs.core.async.ioc_alts_BANG_.call(null,state_31408__$1,(7),inst_31378);
} else {
if((state_val_31409 === (6))){
var inst_31404 = (state_31408[(2)]);
var state_31408__$1 = state_31408;
var statearr_31415_31434 = state_31408__$1;
(statearr_31415_31434[(2)] = inst_31404);

(statearr_31415_31434[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31409 === (3))){
var inst_31406 = (state_31408[(2)]);
var state_31408__$1 = state_31408;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31408__$1,inst_31406);
} else {
if((state_val_31409 === (2))){
var inst_31378 = (state_31408[(10)]);
var inst_31380 = cljs.core.count.call(null,inst_31378);
var inst_31381 = (inst_31380 > (0));
var state_31408__$1 = state_31408;
if(cljs.core.truth_(inst_31381)){
var statearr_31417_31435 = state_31408__$1;
(statearr_31417_31435[(1)] = (4));

} else {
var statearr_31418_31436 = state_31408__$1;
(statearr_31418_31436[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31409 === (11))){
var inst_31378 = (state_31408[(10)]);
var inst_31397 = (state_31408[(2)]);
var tmp31416 = inst_31378;
var inst_31378__$1 = tmp31416;
var state_31408__$1 = (function (){var statearr_31419 = state_31408;
(statearr_31419[(11)] = inst_31397);

(statearr_31419[(10)] = inst_31378__$1);

return statearr_31419;
})();
var statearr_31420_31437 = state_31408__$1;
(statearr_31420_31437[(2)] = null);

(statearr_31420_31437[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31409 === (9))){
var inst_31388 = (state_31408[(8)]);
var state_31408__$1 = state_31408;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31408__$1,(11),out,inst_31388);
} else {
if((state_val_31409 === (5))){
var inst_31402 = cljs.core.async.close_BANG_.call(null,out);
var state_31408__$1 = state_31408;
var statearr_31421_31438 = state_31408__$1;
(statearr_31421_31438[(2)] = inst_31402);

(statearr_31421_31438[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31409 === (10))){
var inst_31400 = (state_31408[(2)]);
var state_31408__$1 = state_31408;
var statearr_31422_31439 = state_31408__$1;
(statearr_31422_31439[(2)] = inst_31400);

(statearr_31422_31439[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31409 === (8))){
var inst_31387 = (state_31408[(7)]);
var inst_31378 = (state_31408[(10)]);
var inst_31388 = (state_31408[(8)]);
var inst_31389 = (state_31408[(9)]);
var inst_31392 = (function (){var cs = inst_31378;
var vec__31383 = inst_31387;
var v = inst_31388;
var c = inst_31389;
return ((function (cs,vec__31383,v,c,inst_31387,inst_31378,inst_31388,inst_31389,state_val_31409,c__28153__auto___31430,out){
return (function (p1__31374_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__31374_SHARP_);
});
;})(cs,vec__31383,v,c,inst_31387,inst_31378,inst_31388,inst_31389,state_val_31409,c__28153__auto___31430,out))
})();
var inst_31393 = cljs.core.filterv.call(null,inst_31392,inst_31378);
var inst_31378__$1 = inst_31393;
var state_31408__$1 = (function (){var statearr_31423 = state_31408;
(statearr_31423[(10)] = inst_31378__$1);

return statearr_31423;
})();
var statearr_31424_31440 = state_31408__$1;
(statearr_31424_31440[(2)] = null);

(statearr_31424_31440[(1)] = (2));


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
});})(c__28153__auto___31430,out))
;
return ((function (switch__27996__auto__,c__28153__auto___31430,out){
return (function() {
var cljs$core$async$state_machine__27997__auto__ = null;
var cljs$core$async$state_machine__27997__auto____0 = (function (){
var statearr_31425 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31425[(0)] = cljs$core$async$state_machine__27997__auto__);

(statearr_31425[(1)] = (1));

return statearr_31425;
});
var cljs$core$async$state_machine__27997__auto____1 = (function (state_31408){
while(true){
var ret_value__27998__auto__ = (function (){try{while(true){
var result__27999__auto__ = switch__27996__auto__.call(null,state_31408);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27999__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27999__auto__;
}
break;
}
}catch (e31426){if((e31426 instanceof Object)){
var ex__28000__auto__ = e31426;
var statearr_31427_31441 = state_31408;
(statearr_31427_31441[(5)] = ex__28000__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31408);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31426;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27998__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31442 = state_31408;
state_31408 = G__31442;
continue;
} else {
return ret_value__27998__auto__;
}
break;
}
});
cljs$core$async$state_machine__27997__auto__ = function(state_31408){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27997__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27997__auto____1.call(this,state_31408);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__27997__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27997__auto____0;
cljs$core$async$state_machine__27997__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27997__auto____1;
return cljs$core$async$state_machine__27997__auto__;
})()
;})(switch__27996__auto__,c__28153__auto___31430,out))
})();
var state__28155__auto__ = (function (){var statearr_31428 = f__28154__auto__.call(null);
(statearr_31428[(6)] = c__28153__auto___31430);

return statearr_31428;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28155__auto__);
});})(c__28153__auto___31430,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

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
var G__31444 = arguments.length;
switch (G__31444) {
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

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28153__auto___31489 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28153__auto___31489,out){
return (function (){
var f__28154__auto__ = (function (){var switch__27996__auto__ = ((function (c__28153__auto___31489,out){
return (function (state_31468){
var state_val_31469 = (state_31468[(1)]);
if((state_val_31469 === (7))){
var inst_31450 = (state_31468[(7)]);
var inst_31450__$1 = (state_31468[(2)]);
var inst_31451 = (inst_31450__$1 == null);
var inst_31452 = cljs.core.not.call(null,inst_31451);
var state_31468__$1 = (function (){var statearr_31470 = state_31468;
(statearr_31470[(7)] = inst_31450__$1);

return statearr_31470;
})();
if(inst_31452){
var statearr_31471_31490 = state_31468__$1;
(statearr_31471_31490[(1)] = (8));

} else {
var statearr_31472_31491 = state_31468__$1;
(statearr_31472_31491[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31469 === (1))){
var inst_31445 = (0);
var state_31468__$1 = (function (){var statearr_31473 = state_31468;
(statearr_31473[(8)] = inst_31445);

return statearr_31473;
})();
var statearr_31474_31492 = state_31468__$1;
(statearr_31474_31492[(2)] = null);

(statearr_31474_31492[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31469 === (4))){
var state_31468__$1 = state_31468;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31468__$1,(7),ch);
} else {
if((state_val_31469 === (6))){
var inst_31463 = (state_31468[(2)]);
var state_31468__$1 = state_31468;
var statearr_31475_31493 = state_31468__$1;
(statearr_31475_31493[(2)] = inst_31463);

(statearr_31475_31493[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31469 === (3))){
var inst_31465 = (state_31468[(2)]);
var inst_31466 = cljs.core.async.close_BANG_.call(null,out);
var state_31468__$1 = (function (){var statearr_31476 = state_31468;
(statearr_31476[(9)] = inst_31465);

return statearr_31476;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31468__$1,inst_31466);
} else {
if((state_val_31469 === (2))){
var inst_31445 = (state_31468[(8)]);
var inst_31447 = (inst_31445 < n);
var state_31468__$1 = state_31468;
if(cljs.core.truth_(inst_31447)){
var statearr_31477_31494 = state_31468__$1;
(statearr_31477_31494[(1)] = (4));

} else {
var statearr_31478_31495 = state_31468__$1;
(statearr_31478_31495[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31469 === (11))){
var inst_31445 = (state_31468[(8)]);
var inst_31455 = (state_31468[(2)]);
var inst_31456 = (inst_31445 + (1));
var inst_31445__$1 = inst_31456;
var state_31468__$1 = (function (){var statearr_31479 = state_31468;
(statearr_31479[(8)] = inst_31445__$1);

(statearr_31479[(10)] = inst_31455);

return statearr_31479;
})();
var statearr_31480_31496 = state_31468__$1;
(statearr_31480_31496[(2)] = null);

(statearr_31480_31496[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31469 === (9))){
var state_31468__$1 = state_31468;
var statearr_31481_31497 = state_31468__$1;
(statearr_31481_31497[(2)] = null);

(statearr_31481_31497[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31469 === (5))){
var state_31468__$1 = state_31468;
var statearr_31482_31498 = state_31468__$1;
(statearr_31482_31498[(2)] = null);

(statearr_31482_31498[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31469 === (10))){
var inst_31460 = (state_31468[(2)]);
var state_31468__$1 = state_31468;
var statearr_31483_31499 = state_31468__$1;
(statearr_31483_31499[(2)] = inst_31460);

(statearr_31483_31499[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31469 === (8))){
var inst_31450 = (state_31468[(7)]);
var state_31468__$1 = state_31468;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31468__$1,(11),out,inst_31450);
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
});})(c__28153__auto___31489,out))
;
return ((function (switch__27996__auto__,c__28153__auto___31489,out){
return (function() {
var cljs$core$async$state_machine__27997__auto__ = null;
var cljs$core$async$state_machine__27997__auto____0 = (function (){
var statearr_31484 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31484[(0)] = cljs$core$async$state_machine__27997__auto__);

(statearr_31484[(1)] = (1));

return statearr_31484;
});
var cljs$core$async$state_machine__27997__auto____1 = (function (state_31468){
while(true){
var ret_value__27998__auto__ = (function (){try{while(true){
var result__27999__auto__ = switch__27996__auto__.call(null,state_31468);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27999__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27999__auto__;
}
break;
}
}catch (e31485){if((e31485 instanceof Object)){
var ex__28000__auto__ = e31485;
var statearr_31486_31500 = state_31468;
(statearr_31486_31500[(5)] = ex__28000__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31468);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31485;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27998__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31501 = state_31468;
state_31468 = G__31501;
continue;
} else {
return ret_value__27998__auto__;
}
break;
}
});
cljs$core$async$state_machine__27997__auto__ = function(state_31468){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27997__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27997__auto____1.call(this,state_31468);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__27997__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27997__auto____0;
cljs$core$async$state_machine__27997__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27997__auto____1;
return cljs$core$async$state_machine__27997__auto__;
})()
;})(switch__27996__auto__,c__28153__auto___31489,out))
})();
var state__28155__auto__ = (function (){var statearr_31487 = f__28154__auto__.call(null);
(statearr_31487[(6)] = c__28153__auto___31489);

return statearr_31487;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28155__auto__);
});})(c__28153__auto___31489,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async31503 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31503 = (function (f,ch,meta31504){
this.f = f;
this.ch = ch;
this.meta31504 = meta31504;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async31503.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31505,meta31504__$1){
var self__ = this;
var _31505__$1 = this;
return (new cljs.core.async.t_cljs$core$async31503(self__.f,self__.ch,meta31504__$1));
});

cljs.core.async.t_cljs$core$async31503.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31505){
var self__ = this;
var _31505__$1 = this;
return self__.meta31504;
});

cljs.core.async.t_cljs$core$async31503.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31503.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async31503.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async31503.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31503.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async31506 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31506 = (function (f,ch,meta31504,_,fn1,meta31507){
this.f = f;
this.ch = ch;
this.meta31504 = meta31504;
this._ = _;
this.fn1 = fn1;
this.meta31507 = meta31507;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async31506.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_31508,meta31507__$1){
var self__ = this;
var _31508__$1 = this;
return (new cljs.core.async.t_cljs$core$async31506(self__.f,self__.ch,self__.meta31504,self__._,self__.fn1,meta31507__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async31506.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_31508){
var self__ = this;
var _31508__$1 = this;
return self__.meta31507;
});})(___$1))
;

cljs.core.async.t_cljs$core$async31506.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31506.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async31506.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async31506.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__31502_SHARP_){
return f1.call(null,(((p1__31502_SHARP_ == null))?null:self__.f.call(null,p1__31502_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async31506.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31504","meta31504",307888486,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async31503","cljs.core.async/t_cljs$core$async31503",-1786600836,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta31507","meta31507",-2032425587,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async31506.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31506.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31506";

cljs.core.async.t_cljs$core$async31506.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async31506");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31506.
 */
cljs.core.async.__GT_t_cljs$core$async31506 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async31506(f__$1,ch__$1,meta31504__$1,___$2,fn1__$1,meta31507){
return (new cljs.core.async.t_cljs$core$async31506(f__$1,ch__$1,meta31504__$1,___$2,fn1__$1,meta31507));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async31506(self__.f,self__.ch,self__.meta31504,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__3911__auto__ = ret;
if(cljs.core.truth_(and__3911__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__3911__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async31503.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31503.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async31503.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31504","meta31504",307888486,null)], null);
});

cljs.core.async.t_cljs$core$async31503.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31503.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31503";

cljs.core.async.t_cljs$core$async31503.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async31503");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31503.
 */
cljs.core.async.__GT_t_cljs$core$async31503 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async31503(f__$1,ch__$1,meta31504){
return (new cljs.core.async.t_cljs$core$async31503(f__$1,ch__$1,meta31504));
});

}

return (new cljs.core.async.t_cljs$core$async31503(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async31509 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31509 = (function (f,ch,meta31510){
this.f = f;
this.ch = ch;
this.meta31510 = meta31510;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async31509.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31511,meta31510__$1){
var self__ = this;
var _31511__$1 = this;
return (new cljs.core.async.t_cljs$core$async31509(self__.f,self__.ch,meta31510__$1));
});

cljs.core.async.t_cljs$core$async31509.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31511){
var self__ = this;
var _31511__$1 = this;
return self__.meta31510;
});

cljs.core.async.t_cljs$core$async31509.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31509.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async31509.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31509.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async31509.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31509.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async31509.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31510","meta31510",-1613765497,null)], null);
});

cljs.core.async.t_cljs$core$async31509.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31509.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31509";

cljs.core.async.t_cljs$core$async31509.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async31509");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31509.
 */
cljs.core.async.__GT_t_cljs$core$async31509 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async31509(f__$1,ch__$1,meta31510){
return (new cljs.core.async.t_cljs$core$async31509(f__$1,ch__$1,meta31510));
});

}

return (new cljs.core.async.t_cljs$core$async31509(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async31512 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31512 = (function (p,ch,meta31513){
this.p = p;
this.ch = ch;
this.meta31513 = meta31513;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async31512.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31514,meta31513__$1){
var self__ = this;
var _31514__$1 = this;
return (new cljs.core.async.t_cljs$core$async31512(self__.p,self__.ch,meta31513__$1));
});

cljs.core.async.t_cljs$core$async31512.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31514){
var self__ = this;
var _31514__$1 = this;
return self__.meta31513;
});

cljs.core.async.t_cljs$core$async31512.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31512.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async31512.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async31512.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31512.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async31512.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31512.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async31512.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31513","meta31513",-8381436,null)], null);
});

cljs.core.async.t_cljs$core$async31512.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31512.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31512";

cljs.core.async.t_cljs$core$async31512.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async31512");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31512.
 */
cljs.core.async.__GT_t_cljs$core$async31512 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async31512(p__$1,ch__$1,meta31513){
return (new cljs.core.async.t_cljs$core$async31512(p__$1,ch__$1,meta31513));
});

}

return (new cljs.core.async.t_cljs$core$async31512(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__31516 = arguments.length;
switch (G__31516) {
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

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28153__auto___31556 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28153__auto___31556,out){
return (function (){
var f__28154__auto__ = (function (){var switch__27996__auto__ = ((function (c__28153__auto___31556,out){
return (function (state_31537){
var state_val_31538 = (state_31537[(1)]);
if((state_val_31538 === (7))){
var inst_31533 = (state_31537[(2)]);
var state_31537__$1 = state_31537;
var statearr_31539_31557 = state_31537__$1;
(statearr_31539_31557[(2)] = inst_31533);

(statearr_31539_31557[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31538 === (1))){
var state_31537__$1 = state_31537;
var statearr_31540_31558 = state_31537__$1;
(statearr_31540_31558[(2)] = null);

(statearr_31540_31558[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31538 === (4))){
var inst_31519 = (state_31537[(7)]);
var inst_31519__$1 = (state_31537[(2)]);
var inst_31520 = (inst_31519__$1 == null);
var state_31537__$1 = (function (){var statearr_31541 = state_31537;
(statearr_31541[(7)] = inst_31519__$1);

return statearr_31541;
})();
if(cljs.core.truth_(inst_31520)){
var statearr_31542_31559 = state_31537__$1;
(statearr_31542_31559[(1)] = (5));

} else {
var statearr_31543_31560 = state_31537__$1;
(statearr_31543_31560[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31538 === (6))){
var inst_31519 = (state_31537[(7)]);
var inst_31524 = p.call(null,inst_31519);
var state_31537__$1 = state_31537;
if(cljs.core.truth_(inst_31524)){
var statearr_31544_31561 = state_31537__$1;
(statearr_31544_31561[(1)] = (8));

} else {
var statearr_31545_31562 = state_31537__$1;
(statearr_31545_31562[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31538 === (3))){
var inst_31535 = (state_31537[(2)]);
var state_31537__$1 = state_31537;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31537__$1,inst_31535);
} else {
if((state_val_31538 === (2))){
var state_31537__$1 = state_31537;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31537__$1,(4),ch);
} else {
if((state_val_31538 === (11))){
var inst_31527 = (state_31537[(2)]);
var state_31537__$1 = state_31537;
var statearr_31546_31563 = state_31537__$1;
(statearr_31546_31563[(2)] = inst_31527);

(statearr_31546_31563[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31538 === (9))){
var state_31537__$1 = state_31537;
var statearr_31547_31564 = state_31537__$1;
(statearr_31547_31564[(2)] = null);

(statearr_31547_31564[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31538 === (5))){
var inst_31522 = cljs.core.async.close_BANG_.call(null,out);
var state_31537__$1 = state_31537;
var statearr_31548_31565 = state_31537__$1;
(statearr_31548_31565[(2)] = inst_31522);

(statearr_31548_31565[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31538 === (10))){
var inst_31530 = (state_31537[(2)]);
var state_31537__$1 = (function (){var statearr_31549 = state_31537;
(statearr_31549[(8)] = inst_31530);

return statearr_31549;
})();
var statearr_31550_31566 = state_31537__$1;
(statearr_31550_31566[(2)] = null);

(statearr_31550_31566[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31538 === (8))){
var inst_31519 = (state_31537[(7)]);
var state_31537__$1 = state_31537;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31537__$1,(11),out,inst_31519);
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
});})(c__28153__auto___31556,out))
;
return ((function (switch__27996__auto__,c__28153__auto___31556,out){
return (function() {
var cljs$core$async$state_machine__27997__auto__ = null;
var cljs$core$async$state_machine__27997__auto____0 = (function (){
var statearr_31551 = [null,null,null,null,null,null,null,null,null];
(statearr_31551[(0)] = cljs$core$async$state_machine__27997__auto__);

(statearr_31551[(1)] = (1));

return statearr_31551;
});
var cljs$core$async$state_machine__27997__auto____1 = (function (state_31537){
while(true){
var ret_value__27998__auto__ = (function (){try{while(true){
var result__27999__auto__ = switch__27996__auto__.call(null,state_31537);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27999__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27999__auto__;
}
break;
}
}catch (e31552){if((e31552 instanceof Object)){
var ex__28000__auto__ = e31552;
var statearr_31553_31567 = state_31537;
(statearr_31553_31567[(5)] = ex__28000__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31537);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31552;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27998__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31568 = state_31537;
state_31537 = G__31568;
continue;
} else {
return ret_value__27998__auto__;
}
break;
}
});
cljs$core$async$state_machine__27997__auto__ = function(state_31537){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27997__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27997__auto____1.call(this,state_31537);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__27997__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27997__auto____0;
cljs$core$async$state_machine__27997__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27997__auto____1;
return cljs$core$async$state_machine__27997__auto__;
})()
;})(switch__27996__auto__,c__28153__auto___31556,out))
})();
var state__28155__auto__ = (function (){var statearr_31554 = f__28154__auto__.call(null);
(statearr_31554[(6)] = c__28153__auto___31556);

return statearr_31554;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28155__auto__);
});})(c__28153__auto___31556,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__31570 = arguments.length;
switch (G__31570) {
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

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__28153__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28153__auto__){
return (function (){
var f__28154__auto__ = (function (){var switch__27996__auto__ = ((function (c__28153__auto__){
return (function (state_31633){
var state_val_31634 = (state_31633[(1)]);
if((state_val_31634 === (7))){
var inst_31629 = (state_31633[(2)]);
var state_31633__$1 = state_31633;
var statearr_31635_31673 = state_31633__$1;
(statearr_31635_31673[(2)] = inst_31629);

(statearr_31635_31673[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31634 === (20))){
var inst_31599 = (state_31633[(7)]);
var inst_31610 = (state_31633[(2)]);
var inst_31611 = cljs.core.next.call(null,inst_31599);
var inst_31585 = inst_31611;
var inst_31586 = null;
var inst_31587 = (0);
var inst_31588 = (0);
var state_31633__$1 = (function (){var statearr_31636 = state_31633;
(statearr_31636[(8)] = inst_31610);

(statearr_31636[(9)] = inst_31586);

(statearr_31636[(10)] = inst_31587);

(statearr_31636[(11)] = inst_31585);

(statearr_31636[(12)] = inst_31588);

return statearr_31636;
})();
var statearr_31637_31674 = state_31633__$1;
(statearr_31637_31674[(2)] = null);

(statearr_31637_31674[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31634 === (1))){
var state_31633__$1 = state_31633;
var statearr_31638_31675 = state_31633__$1;
(statearr_31638_31675[(2)] = null);

(statearr_31638_31675[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31634 === (4))){
var inst_31574 = (state_31633[(13)]);
var inst_31574__$1 = (state_31633[(2)]);
var inst_31575 = (inst_31574__$1 == null);
var state_31633__$1 = (function (){var statearr_31639 = state_31633;
(statearr_31639[(13)] = inst_31574__$1);

return statearr_31639;
})();
if(cljs.core.truth_(inst_31575)){
var statearr_31640_31676 = state_31633__$1;
(statearr_31640_31676[(1)] = (5));

} else {
var statearr_31641_31677 = state_31633__$1;
(statearr_31641_31677[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31634 === (15))){
var state_31633__$1 = state_31633;
var statearr_31645_31678 = state_31633__$1;
(statearr_31645_31678[(2)] = null);

(statearr_31645_31678[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31634 === (21))){
var state_31633__$1 = state_31633;
var statearr_31646_31679 = state_31633__$1;
(statearr_31646_31679[(2)] = null);

(statearr_31646_31679[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31634 === (13))){
var inst_31586 = (state_31633[(9)]);
var inst_31587 = (state_31633[(10)]);
var inst_31585 = (state_31633[(11)]);
var inst_31588 = (state_31633[(12)]);
var inst_31595 = (state_31633[(2)]);
var inst_31596 = (inst_31588 + (1));
var tmp31642 = inst_31586;
var tmp31643 = inst_31587;
var tmp31644 = inst_31585;
var inst_31585__$1 = tmp31644;
var inst_31586__$1 = tmp31642;
var inst_31587__$1 = tmp31643;
var inst_31588__$1 = inst_31596;
var state_31633__$1 = (function (){var statearr_31647 = state_31633;
(statearr_31647[(9)] = inst_31586__$1);

(statearr_31647[(14)] = inst_31595);

(statearr_31647[(10)] = inst_31587__$1);

(statearr_31647[(11)] = inst_31585__$1);

(statearr_31647[(12)] = inst_31588__$1);

return statearr_31647;
})();
var statearr_31648_31680 = state_31633__$1;
(statearr_31648_31680[(2)] = null);

(statearr_31648_31680[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31634 === (22))){
var state_31633__$1 = state_31633;
var statearr_31649_31681 = state_31633__$1;
(statearr_31649_31681[(2)] = null);

(statearr_31649_31681[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31634 === (6))){
var inst_31574 = (state_31633[(13)]);
var inst_31583 = f.call(null,inst_31574);
var inst_31584 = cljs.core.seq.call(null,inst_31583);
var inst_31585 = inst_31584;
var inst_31586 = null;
var inst_31587 = (0);
var inst_31588 = (0);
var state_31633__$1 = (function (){var statearr_31650 = state_31633;
(statearr_31650[(9)] = inst_31586);

(statearr_31650[(10)] = inst_31587);

(statearr_31650[(11)] = inst_31585);

(statearr_31650[(12)] = inst_31588);

return statearr_31650;
})();
var statearr_31651_31682 = state_31633__$1;
(statearr_31651_31682[(2)] = null);

(statearr_31651_31682[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31634 === (17))){
var inst_31599 = (state_31633[(7)]);
var inst_31603 = cljs.core.chunk_first.call(null,inst_31599);
var inst_31604 = cljs.core.chunk_rest.call(null,inst_31599);
var inst_31605 = cljs.core.count.call(null,inst_31603);
var inst_31585 = inst_31604;
var inst_31586 = inst_31603;
var inst_31587 = inst_31605;
var inst_31588 = (0);
var state_31633__$1 = (function (){var statearr_31652 = state_31633;
(statearr_31652[(9)] = inst_31586);

(statearr_31652[(10)] = inst_31587);

(statearr_31652[(11)] = inst_31585);

(statearr_31652[(12)] = inst_31588);

return statearr_31652;
})();
var statearr_31653_31683 = state_31633__$1;
(statearr_31653_31683[(2)] = null);

(statearr_31653_31683[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31634 === (3))){
var inst_31631 = (state_31633[(2)]);
var state_31633__$1 = state_31633;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31633__$1,inst_31631);
} else {
if((state_val_31634 === (12))){
var inst_31619 = (state_31633[(2)]);
var state_31633__$1 = state_31633;
var statearr_31654_31684 = state_31633__$1;
(statearr_31654_31684[(2)] = inst_31619);

(statearr_31654_31684[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31634 === (2))){
var state_31633__$1 = state_31633;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31633__$1,(4),in$);
} else {
if((state_val_31634 === (23))){
var inst_31627 = (state_31633[(2)]);
var state_31633__$1 = state_31633;
var statearr_31655_31685 = state_31633__$1;
(statearr_31655_31685[(2)] = inst_31627);

(statearr_31655_31685[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31634 === (19))){
var inst_31614 = (state_31633[(2)]);
var state_31633__$1 = state_31633;
var statearr_31656_31686 = state_31633__$1;
(statearr_31656_31686[(2)] = inst_31614);

(statearr_31656_31686[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31634 === (11))){
var inst_31599 = (state_31633[(7)]);
var inst_31585 = (state_31633[(11)]);
var inst_31599__$1 = cljs.core.seq.call(null,inst_31585);
var state_31633__$1 = (function (){var statearr_31657 = state_31633;
(statearr_31657[(7)] = inst_31599__$1);

return statearr_31657;
})();
if(inst_31599__$1){
var statearr_31658_31687 = state_31633__$1;
(statearr_31658_31687[(1)] = (14));

} else {
var statearr_31659_31688 = state_31633__$1;
(statearr_31659_31688[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31634 === (9))){
var inst_31621 = (state_31633[(2)]);
var inst_31622 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_31633__$1 = (function (){var statearr_31660 = state_31633;
(statearr_31660[(15)] = inst_31621);

return statearr_31660;
})();
if(cljs.core.truth_(inst_31622)){
var statearr_31661_31689 = state_31633__$1;
(statearr_31661_31689[(1)] = (21));

} else {
var statearr_31662_31690 = state_31633__$1;
(statearr_31662_31690[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31634 === (5))){
var inst_31577 = cljs.core.async.close_BANG_.call(null,out);
var state_31633__$1 = state_31633;
var statearr_31663_31691 = state_31633__$1;
(statearr_31663_31691[(2)] = inst_31577);

(statearr_31663_31691[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31634 === (14))){
var inst_31599 = (state_31633[(7)]);
var inst_31601 = cljs.core.chunked_seq_QMARK_.call(null,inst_31599);
var state_31633__$1 = state_31633;
if(inst_31601){
var statearr_31664_31692 = state_31633__$1;
(statearr_31664_31692[(1)] = (17));

} else {
var statearr_31665_31693 = state_31633__$1;
(statearr_31665_31693[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31634 === (16))){
var inst_31617 = (state_31633[(2)]);
var state_31633__$1 = state_31633;
var statearr_31666_31694 = state_31633__$1;
(statearr_31666_31694[(2)] = inst_31617);

(statearr_31666_31694[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31634 === (10))){
var inst_31586 = (state_31633[(9)]);
var inst_31588 = (state_31633[(12)]);
var inst_31593 = cljs.core._nth.call(null,inst_31586,inst_31588);
var state_31633__$1 = state_31633;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31633__$1,(13),out,inst_31593);
} else {
if((state_val_31634 === (18))){
var inst_31599 = (state_31633[(7)]);
var inst_31608 = cljs.core.first.call(null,inst_31599);
var state_31633__$1 = state_31633;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31633__$1,(20),out,inst_31608);
} else {
if((state_val_31634 === (8))){
var inst_31587 = (state_31633[(10)]);
var inst_31588 = (state_31633[(12)]);
var inst_31590 = (inst_31588 < inst_31587);
var inst_31591 = inst_31590;
var state_31633__$1 = state_31633;
if(cljs.core.truth_(inst_31591)){
var statearr_31667_31695 = state_31633__$1;
(statearr_31667_31695[(1)] = (10));

} else {
var statearr_31668_31696 = state_31633__$1;
(statearr_31668_31696[(1)] = (11));

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
});})(c__28153__auto__))
;
return ((function (switch__27996__auto__,c__28153__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__27997__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__27997__auto____0 = (function (){
var statearr_31669 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31669[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__27997__auto__);

(statearr_31669[(1)] = (1));

return statearr_31669;
});
var cljs$core$async$mapcat_STAR__$_state_machine__27997__auto____1 = (function (state_31633){
while(true){
var ret_value__27998__auto__ = (function (){try{while(true){
var result__27999__auto__ = switch__27996__auto__.call(null,state_31633);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27999__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27999__auto__;
}
break;
}
}catch (e31670){if((e31670 instanceof Object)){
var ex__28000__auto__ = e31670;
var statearr_31671_31697 = state_31633;
(statearr_31671_31697[(5)] = ex__28000__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31633);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31670;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27998__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31698 = state_31633;
state_31633 = G__31698;
continue;
} else {
return ret_value__27998__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__27997__auto__ = function(state_31633){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__27997__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__27997__auto____1.call(this,state_31633);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__27997__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__27997__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__27997__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__27997__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__27997__auto__;
})()
;})(switch__27996__auto__,c__28153__auto__))
})();
var state__28155__auto__ = (function (){var statearr_31672 = f__28154__auto__.call(null);
(statearr_31672[(6)] = c__28153__auto__);

return statearr_31672;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28155__auto__);
});})(c__28153__auto__))
);

return c__28153__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__31700 = arguments.length;
switch (G__31700) {
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

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__31703 = arguments.length;
switch (G__31703) {
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

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__31706 = arguments.length;
switch (G__31706) {
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

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28153__auto___31753 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28153__auto___31753,out){
return (function (){
var f__28154__auto__ = (function (){var switch__27996__auto__ = ((function (c__28153__auto___31753,out){
return (function (state_31730){
var state_val_31731 = (state_31730[(1)]);
if((state_val_31731 === (7))){
var inst_31725 = (state_31730[(2)]);
var state_31730__$1 = state_31730;
var statearr_31732_31754 = state_31730__$1;
(statearr_31732_31754[(2)] = inst_31725);

(statearr_31732_31754[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31731 === (1))){
var inst_31707 = null;
var state_31730__$1 = (function (){var statearr_31733 = state_31730;
(statearr_31733[(7)] = inst_31707);

return statearr_31733;
})();
var statearr_31734_31755 = state_31730__$1;
(statearr_31734_31755[(2)] = null);

(statearr_31734_31755[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31731 === (4))){
var inst_31710 = (state_31730[(8)]);
var inst_31710__$1 = (state_31730[(2)]);
var inst_31711 = (inst_31710__$1 == null);
var inst_31712 = cljs.core.not.call(null,inst_31711);
var state_31730__$1 = (function (){var statearr_31735 = state_31730;
(statearr_31735[(8)] = inst_31710__$1);

return statearr_31735;
})();
if(inst_31712){
var statearr_31736_31756 = state_31730__$1;
(statearr_31736_31756[(1)] = (5));

} else {
var statearr_31737_31757 = state_31730__$1;
(statearr_31737_31757[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31731 === (6))){
var state_31730__$1 = state_31730;
var statearr_31738_31758 = state_31730__$1;
(statearr_31738_31758[(2)] = null);

(statearr_31738_31758[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31731 === (3))){
var inst_31727 = (state_31730[(2)]);
var inst_31728 = cljs.core.async.close_BANG_.call(null,out);
var state_31730__$1 = (function (){var statearr_31739 = state_31730;
(statearr_31739[(9)] = inst_31727);

return statearr_31739;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31730__$1,inst_31728);
} else {
if((state_val_31731 === (2))){
var state_31730__$1 = state_31730;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31730__$1,(4),ch);
} else {
if((state_val_31731 === (11))){
var inst_31710 = (state_31730[(8)]);
var inst_31719 = (state_31730[(2)]);
var inst_31707 = inst_31710;
var state_31730__$1 = (function (){var statearr_31740 = state_31730;
(statearr_31740[(7)] = inst_31707);

(statearr_31740[(10)] = inst_31719);

return statearr_31740;
})();
var statearr_31741_31759 = state_31730__$1;
(statearr_31741_31759[(2)] = null);

(statearr_31741_31759[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31731 === (9))){
var inst_31710 = (state_31730[(8)]);
var state_31730__$1 = state_31730;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31730__$1,(11),out,inst_31710);
} else {
if((state_val_31731 === (5))){
var inst_31707 = (state_31730[(7)]);
var inst_31710 = (state_31730[(8)]);
var inst_31714 = cljs.core._EQ_.call(null,inst_31710,inst_31707);
var state_31730__$1 = state_31730;
if(inst_31714){
var statearr_31743_31760 = state_31730__$1;
(statearr_31743_31760[(1)] = (8));

} else {
var statearr_31744_31761 = state_31730__$1;
(statearr_31744_31761[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31731 === (10))){
var inst_31722 = (state_31730[(2)]);
var state_31730__$1 = state_31730;
var statearr_31745_31762 = state_31730__$1;
(statearr_31745_31762[(2)] = inst_31722);

(statearr_31745_31762[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31731 === (8))){
var inst_31707 = (state_31730[(7)]);
var tmp31742 = inst_31707;
var inst_31707__$1 = tmp31742;
var state_31730__$1 = (function (){var statearr_31746 = state_31730;
(statearr_31746[(7)] = inst_31707__$1);

return statearr_31746;
})();
var statearr_31747_31763 = state_31730__$1;
(statearr_31747_31763[(2)] = null);

(statearr_31747_31763[(1)] = (2));


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
});})(c__28153__auto___31753,out))
;
return ((function (switch__27996__auto__,c__28153__auto___31753,out){
return (function() {
var cljs$core$async$state_machine__27997__auto__ = null;
var cljs$core$async$state_machine__27997__auto____0 = (function (){
var statearr_31748 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31748[(0)] = cljs$core$async$state_machine__27997__auto__);

(statearr_31748[(1)] = (1));

return statearr_31748;
});
var cljs$core$async$state_machine__27997__auto____1 = (function (state_31730){
while(true){
var ret_value__27998__auto__ = (function (){try{while(true){
var result__27999__auto__ = switch__27996__auto__.call(null,state_31730);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27999__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27999__auto__;
}
break;
}
}catch (e31749){if((e31749 instanceof Object)){
var ex__28000__auto__ = e31749;
var statearr_31750_31764 = state_31730;
(statearr_31750_31764[(5)] = ex__28000__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31730);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31749;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27998__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31765 = state_31730;
state_31730 = G__31765;
continue;
} else {
return ret_value__27998__auto__;
}
break;
}
});
cljs$core$async$state_machine__27997__auto__ = function(state_31730){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27997__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27997__auto____1.call(this,state_31730);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__27997__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27997__auto____0;
cljs$core$async$state_machine__27997__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27997__auto____1;
return cljs$core$async$state_machine__27997__auto__;
})()
;})(switch__27996__auto__,c__28153__auto___31753,out))
})();
var state__28155__auto__ = (function (){var statearr_31751 = f__28154__auto__.call(null);
(statearr_31751[(6)] = c__28153__auto___31753);

return statearr_31751;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28155__auto__);
});})(c__28153__auto___31753,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__31767 = arguments.length;
switch (G__31767) {
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

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28153__auto___31833 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28153__auto___31833,out){
return (function (){
var f__28154__auto__ = (function (){var switch__27996__auto__ = ((function (c__28153__auto___31833,out){
return (function (state_31805){
var state_val_31806 = (state_31805[(1)]);
if((state_val_31806 === (7))){
var inst_31801 = (state_31805[(2)]);
var state_31805__$1 = state_31805;
var statearr_31807_31834 = state_31805__$1;
(statearr_31807_31834[(2)] = inst_31801);

(statearr_31807_31834[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31806 === (1))){
var inst_31768 = (new Array(n));
var inst_31769 = inst_31768;
var inst_31770 = (0);
var state_31805__$1 = (function (){var statearr_31808 = state_31805;
(statearr_31808[(7)] = inst_31770);

(statearr_31808[(8)] = inst_31769);

return statearr_31808;
})();
var statearr_31809_31835 = state_31805__$1;
(statearr_31809_31835[(2)] = null);

(statearr_31809_31835[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31806 === (4))){
var inst_31773 = (state_31805[(9)]);
var inst_31773__$1 = (state_31805[(2)]);
var inst_31774 = (inst_31773__$1 == null);
var inst_31775 = cljs.core.not.call(null,inst_31774);
var state_31805__$1 = (function (){var statearr_31810 = state_31805;
(statearr_31810[(9)] = inst_31773__$1);

return statearr_31810;
})();
if(inst_31775){
var statearr_31811_31836 = state_31805__$1;
(statearr_31811_31836[(1)] = (5));

} else {
var statearr_31812_31837 = state_31805__$1;
(statearr_31812_31837[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31806 === (15))){
var inst_31795 = (state_31805[(2)]);
var state_31805__$1 = state_31805;
var statearr_31813_31838 = state_31805__$1;
(statearr_31813_31838[(2)] = inst_31795);

(statearr_31813_31838[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31806 === (13))){
var state_31805__$1 = state_31805;
var statearr_31814_31839 = state_31805__$1;
(statearr_31814_31839[(2)] = null);

(statearr_31814_31839[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31806 === (6))){
var inst_31770 = (state_31805[(7)]);
var inst_31791 = (inst_31770 > (0));
var state_31805__$1 = state_31805;
if(cljs.core.truth_(inst_31791)){
var statearr_31815_31840 = state_31805__$1;
(statearr_31815_31840[(1)] = (12));

} else {
var statearr_31816_31841 = state_31805__$1;
(statearr_31816_31841[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31806 === (3))){
var inst_31803 = (state_31805[(2)]);
var state_31805__$1 = state_31805;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31805__$1,inst_31803);
} else {
if((state_val_31806 === (12))){
var inst_31769 = (state_31805[(8)]);
var inst_31793 = cljs.core.vec.call(null,inst_31769);
var state_31805__$1 = state_31805;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31805__$1,(15),out,inst_31793);
} else {
if((state_val_31806 === (2))){
var state_31805__$1 = state_31805;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31805__$1,(4),ch);
} else {
if((state_val_31806 === (11))){
var inst_31785 = (state_31805[(2)]);
var inst_31786 = (new Array(n));
var inst_31769 = inst_31786;
var inst_31770 = (0);
var state_31805__$1 = (function (){var statearr_31817 = state_31805;
(statearr_31817[(7)] = inst_31770);

(statearr_31817[(10)] = inst_31785);

(statearr_31817[(8)] = inst_31769);

return statearr_31817;
})();
var statearr_31818_31842 = state_31805__$1;
(statearr_31818_31842[(2)] = null);

(statearr_31818_31842[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31806 === (9))){
var inst_31769 = (state_31805[(8)]);
var inst_31783 = cljs.core.vec.call(null,inst_31769);
var state_31805__$1 = state_31805;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31805__$1,(11),out,inst_31783);
} else {
if((state_val_31806 === (5))){
var inst_31770 = (state_31805[(7)]);
var inst_31773 = (state_31805[(9)]);
var inst_31778 = (state_31805[(11)]);
var inst_31769 = (state_31805[(8)]);
var inst_31777 = (inst_31769[inst_31770] = inst_31773);
var inst_31778__$1 = (inst_31770 + (1));
var inst_31779 = (inst_31778__$1 < n);
var state_31805__$1 = (function (){var statearr_31819 = state_31805;
(statearr_31819[(11)] = inst_31778__$1);

(statearr_31819[(12)] = inst_31777);

return statearr_31819;
})();
if(cljs.core.truth_(inst_31779)){
var statearr_31820_31843 = state_31805__$1;
(statearr_31820_31843[(1)] = (8));

} else {
var statearr_31821_31844 = state_31805__$1;
(statearr_31821_31844[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31806 === (14))){
var inst_31798 = (state_31805[(2)]);
var inst_31799 = cljs.core.async.close_BANG_.call(null,out);
var state_31805__$1 = (function (){var statearr_31823 = state_31805;
(statearr_31823[(13)] = inst_31798);

return statearr_31823;
})();
var statearr_31824_31845 = state_31805__$1;
(statearr_31824_31845[(2)] = inst_31799);

(statearr_31824_31845[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31806 === (10))){
var inst_31789 = (state_31805[(2)]);
var state_31805__$1 = state_31805;
var statearr_31825_31846 = state_31805__$1;
(statearr_31825_31846[(2)] = inst_31789);

(statearr_31825_31846[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31806 === (8))){
var inst_31778 = (state_31805[(11)]);
var inst_31769 = (state_31805[(8)]);
var tmp31822 = inst_31769;
var inst_31769__$1 = tmp31822;
var inst_31770 = inst_31778;
var state_31805__$1 = (function (){var statearr_31826 = state_31805;
(statearr_31826[(7)] = inst_31770);

(statearr_31826[(8)] = inst_31769__$1);

return statearr_31826;
})();
var statearr_31827_31847 = state_31805__$1;
(statearr_31827_31847[(2)] = null);

(statearr_31827_31847[(1)] = (2));


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
});})(c__28153__auto___31833,out))
;
return ((function (switch__27996__auto__,c__28153__auto___31833,out){
return (function() {
var cljs$core$async$state_machine__27997__auto__ = null;
var cljs$core$async$state_machine__27997__auto____0 = (function (){
var statearr_31828 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31828[(0)] = cljs$core$async$state_machine__27997__auto__);

(statearr_31828[(1)] = (1));

return statearr_31828;
});
var cljs$core$async$state_machine__27997__auto____1 = (function (state_31805){
while(true){
var ret_value__27998__auto__ = (function (){try{while(true){
var result__27999__auto__ = switch__27996__auto__.call(null,state_31805);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27999__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27999__auto__;
}
break;
}
}catch (e31829){if((e31829 instanceof Object)){
var ex__28000__auto__ = e31829;
var statearr_31830_31848 = state_31805;
(statearr_31830_31848[(5)] = ex__28000__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31805);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31829;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27998__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31849 = state_31805;
state_31805 = G__31849;
continue;
} else {
return ret_value__27998__auto__;
}
break;
}
});
cljs$core$async$state_machine__27997__auto__ = function(state_31805){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27997__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27997__auto____1.call(this,state_31805);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__27997__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27997__auto____0;
cljs$core$async$state_machine__27997__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27997__auto____1;
return cljs$core$async$state_machine__27997__auto__;
})()
;})(switch__27996__auto__,c__28153__auto___31833,out))
})();
var state__28155__auto__ = (function (){var statearr_31831 = f__28154__auto__.call(null);
(statearr_31831[(6)] = c__28153__auto___31833);

return statearr_31831;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28155__auto__);
});})(c__28153__auto___31833,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__31851 = arguments.length;
switch (G__31851) {
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

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28153__auto___31921 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28153__auto___31921,out){
return (function (){
var f__28154__auto__ = (function (){var switch__27996__auto__ = ((function (c__28153__auto___31921,out){
return (function (state_31893){
var state_val_31894 = (state_31893[(1)]);
if((state_val_31894 === (7))){
var inst_31889 = (state_31893[(2)]);
var state_31893__$1 = state_31893;
var statearr_31895_31922 = state_31893__$1;
(statearr_31895_31922[(2)] = inst_31889);

(statearr_31895_31922[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31894 === (1))){
var inst_31852 = [];
var inst_31853 = inst_31852;
var inst_31854 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_31893__$1 = (function (){var statearr_31896 = state_31893;
(statearr_31896[(7)] = inst_31853);

(statearr_31896[(8)] = inst_31854);

return statearr_31896;
})();
var statearr_31897_31923 = state_31893__$1;
(statearr_31897_31923[(2)] = null);

(statearr_31897_31923[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31894 === (4))){
var inst_31857 = (state_31893[(9)]);
var inst_31857__$1 = (state_31893[(2)]);
var inst_31858 = (inst_31857__$1 == null);
var inst_31859 = cljs.core.not.call(null,inst_31858);
var state_31893__$1 = (function (){var statearr_31898 = state_31893;
(statearr_31898[(9)] = inst_31857__$1);

return statearr_31898;
})();
if(inst_31859){
var statearr_31899_31924 = state_31893__$1;
(statearr_31899_31924[(1)] = (5));

} else {
var statearr_31900_31925 = state_31893__$1;
(statearr_31900_31925[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31894 === (15))){
var inst_31883 = (state_31893[(2)]);
var state_31893__$1 = state_31893;
var statearr_31901_31926 = state_31893__$1;
(statearr_31901_31926[(2)] = inst_31883);

(statearr_31901_31926[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31894 === (13))){
var state_31893__$1 = state_31893;
var statearr_31902_31927 = state_31893__$1;
(statearr_31902_31927[(2)] = null);

(statearr_31902_31927[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31894 === (6))){
var inst_31853 = (state_31893[(7)]);
var inst_31878 = inst_31853.length;
var inst_31879 = (inst_31878 > (0));
var state_31893__$1 = state_31893;
if(cljs.core.truth_(inst_31879)){
var statearr_31903_31928 = state_31893__$1;
(statearr_31903_31928[(1)] = (12));

} else {
var statearr_31904_31929 = state_31893__$1;
(statearr_31904_31929[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31894 === (3))){
var inst_31891 = (state_31893[(2)]);
var state_31893__$1 = state_31893;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31893__$1,inst_31891);
} else {
if((state_val_31894 === (12))){
var inst_31853 = (state_31893[(7)]);
var inst_31881 = cljs.core.vec.call(null,inst_31853);
var state_31893__$1 = state_31893;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31893__$1,(15),out,inst_31881);
} else {
if((state_val_31894 === (2))){
var state_31893__$1 = state_31893;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31893__$1,(4),ch);
} else {
if((state_val_31894 === (11))){
var inst_31857 = (state_31893[(9)]);
var inst_31861 = (state_31893[(10)]);
var inst_31871 = (state_31893[(2)]);
var inst_31872 = [];
var inst_31873 = inst_31872.push(inst_31857);
var inst_31853 = inst_31872;
var inst_31854 = inst_31861;
var state_31893__$1 = (function (){var statearr_31905 = state_31893;
(statearr_31905[(11)] = inst_31873);

(statearr_31905[(12)] = inst_31871);

(statearr_31905[(7)] = inst_31853);

(statearr_31905[(8)] = inst_31854);

return statearr_31905;
})();
var statearr_31906_31930 = state_31893__$1;
(statearr_31906_31930[(2)] = null);

(statearr_31906_31930[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31894 === (9))){
var inst_31853 = (state_31893[(7)]);
var inst_31869 = cljs.core.vec.call(null,inst_31853);
var state_31893__$1 = state_31893;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31893__$1,(11),out,inst_31869);
} else {
if((state_val_31894 === (5))){
var inst_31857 = (state_31893[(9)]);
var inst_31861 = (state_31893[(10)]);
var inst_31854 = (state_31893[(8)]);
var inst_31861__$1 = f.call(null,inst_31857);
var inst_31862 = cljs.core._EQ_.call(null,inst_31861__$1,inst_31854);
var inst_31863 = cljs.core.keyword_identical_QMARK_.call(null,inst_31854,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_31864 = ((inst_31862) || (inst_31863));
var state_31893__$1 = (function (){var statearr_31907 = state_31893;
(statearr_31907[(10)] = inst_31861__$1);

return statearr_31907;
})();
if(cljs.core.truth_(inst_31864)){
var statearr_31908_31931 = state_31893__$1;
(statearr_31908_31931[(1)] = (8));

} else {
var statearr_31909_31932 = state_31893__$1;
(statearr_31909_31932[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31894 === (14))){
var inst_31886 = (state_31893[(2)]);
var inst_31887 = cljs.core.async.close_BANG_.call(null,out);
var state_31893__$1 = (function (){var statearr_31911 = state_31893;
(statearr_31911[(13)] = inst_31886);

return statearr_31911;
})();
var statearr_31912_31933 = state_31893__$1;
(statearr_31912_31933[(2)] = inst_31887);

(statearr_31912_31933[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31894 === (10))){
var inst_31876 = (state_31893[(2)]);
var state_31893__$1 = state_31893;
var statearr_31913_31934 = state_31893__$1;
(statearr_31913_31934[(2)] = inst_31876);

(statearr_31913_31934[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31894 === (8))){
var inst_31857 = (state_31893[(9)]);
var inst_31861 = (state_31893[(10)]);
var inst_31853 = (state_31893[(7)]);
var inst_31866 = inst_31853.push(inst_31857);
var tmp31910 = inst_31853;
var inst_31853__$1 = tmp31910;
var inst_31854 = inst_31861;
var state_31893__$1 = (function (){var statearr_31914 = state_31893;
(statearr_31914[(14)] = inst_31866);

(statearr_31914[(7)] = inst_31853__$1);

(statearr_31914[(8)] = inst_31854);

return statearr_31914;
})();
var statearr_31915_31935 = state_31893__$1;
(statearr_31915_31935[(2)] = null);

(statearr_31915_31935[(1)] = (2));


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
});})(c__28153__auto___31921,out))
;
return ((function (switch__27996__auto__,c__28153__auto___31921,out){
return (function() {
var cljs$core$async$state_machine__27997__auto__ = null;
var cljs$core$async$state_machine__27997__auto____0 = (function (){
var statearr_31916 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31916[(0)] = cljs$core$async$state_machine__27997__auto__);

(statearr_31916[(1)] = (1));

return statearr_31916;
});
var cljs$core$async$state_machine__27997__auto____1 = (function (state_31893){
while(true){
var ret_value__27998__auto__ = (function (){try{while(true){
var result__27999__auto__ = switch__27996__auto__.call(null,state_31893);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27999__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27999__auto__;
}
break;
}
}catch (e31917){if((e31917 instanceof Object)){
var ex__28000__auto__ = e31917;
var statearr_31918_31936 = state_31893;
(statearr_31918_31936[(5)] = ex__28000__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31893);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31917;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27998__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31937 = state_31893;
state_31893 = G__31937;
continue;
} else {
return ret_value__27998__auto__;
}
break;
}
});
cljs$core$async$state_machine__27997__auto__ = function(state_31893){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27997__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27997__auto____1.call(this,state_31893);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__27997__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27997__auto____0;
cljs$core$async$state_machine__27997__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27997__auto____1;
return cljs$core$async$state_machine__27997__auto__;
})()
;})(switch__27996__auto__,c__28153__auto___31921,out))
})();
var state__28155__auto__ = (function (){var statearr_31919 = f__28154__auto__.call(null);
(statearr_31919[(6)] = c__28153__auto___31921);

return statearr_31919;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28155__auto__);
});})(c__28153__auto___31921,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1523640166155
