// Compiled by ClojureScript 1.10.238 {}
goog.provide('re_mdl.components.tooltip');
goog.require('cljs.core');
goog.require('re_mdl.util');
re_mdl.components.tooltip.tooltip_STAR_ = (function re_mdl$components$tooltip$tooltip_STAR_(var_args){
var args__4502__auto__ = [];
var len__4499__auto___23374 = arguments.length;
var i__4500__auto___23375 = (0);
while(true){
if((i__4500__auto___23375 < len__4499__auto___23374)){
args__4502__auto__.push((arguments[i__4500__auto___23375]));

var G__23376 = (i__4500__auto___23375 + (1));
i__4500__auto___23375 = G__23376;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return re_mdl.components.tooltip.tooltip_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

re_mdl.components.tooltip.tooltip_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (p__23371){
var map__23372 = p__23371;
var map__23372__$1 = ((((!((map__23372 == null)))?(((((map__23372.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23372.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23372):map__23372);
var args = map__23372__$1;
var attr = cljs.core.get.call(null,map__23372__$1,new cljs.core.Keyword(null,"attr","attr",-604132353));
var children = cljs.core.get.call(null,map__23372__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var el = cljs.core.get.call(null,map__23372__$1,new cljs.core.Keyword(null,"el","el",-1618201118),new cljs.core.Keyword(null,"span","span",1394872991));
var bottom_QMARK_ = cljs.core.get.call(null,map__23372__$1,new cljs.core.Keyword(null,"bottom?","bottom?",-1926481628));
var top_QMARK_ = cljs.core.get.call(null,map__23372__$1,new cljs.core.Keyword(null,"top?","top?",-1883283796));
var right_QMARK_ = cljs.core.get.call(null,map__23372__$1,new cljs.core.Keyword(null,"right?","right?",380310444));
var large_QMARK_ = cljs.core.get.call(null,map__23372__$1,new cljs.core.Keyword(null,"large?","large?",1460879088));
var for$ = cljs.core.get.call(null,map__23372__$1,new cljs.core.Keyword(null,"for","for",-1323786319));
var left_QMARK_ = cljs.core.get.call(null,map__23372__$1,new cljs.core.Keyword(null,"left?","left?",1009526930));
var id = cljs.core.get.call(null,map__23372__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var class$ = cljs.core.get.call(null,map__23372__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [el,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"for","for",-1323786319),for$,new cljs.core.Keyword(null,"class","class",-2030961996),["mdl-tooltip",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var and__3911__auto__ = class$;
if(cljs.core.truth_(and__3911__auto__)){
return [" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join('');
} else {
return and__3911__auto__;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var and__3911__auto__ = large_QMARK_;
if(cljs.core.truth_(and__3911__auto__)){
return " mdl-tooltip--large";
} else {
return and__3911__auto__;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var and__3911__auto__ = left_QMARK_;
if(cljs.core.truth_(and__3911__auto__)){
return " mdl-tooltip--left";
} else {
return and__3911__auto__;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var and__3911__auto__ = right_QMARK_;
if(cljs.core.truth_(and__3911__auto__)){
return " mdl-tooltip--right";
} else {
return and__3911__auto__;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var and__3911__auto__ = top_QMARK_;
if(cljs.core.truth_(and__3911__auto__)){
return " mdl-tooltip--top";
} else {
return and__3911__auto__;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var and__3911__auto__ = bottom_QMARK_;
if(cljs.core.truth_(and__3911__auto__)){
return " mdl-tooltip--bottom";
} else {
return and__3911__auto__;
}
})())].join('')], null),attr)], null),children);
});

re_mdl.components.tooltip.tooltip_STAR_.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
re_mdl.components.tooltip.tooltip_STAR_.cljs$lang$applyTo = (function (seq23370){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23370));
});

re_mdl.components.tooltip.tooltip = re_mdl.util.wrap_mdl.call(null,re_mdl.components.tooltip.tooltip_STAR_);

//# sourceMappingURL=tooltip.js.map?rel=1523640157027
