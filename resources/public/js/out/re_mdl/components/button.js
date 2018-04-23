// Compiled by ClojureScript 1.10.238 {}
goog.provide('re_mdl.components.button');
goog.require('cljs.core');
goog.require('re_mdl.util');
re_mdl.components.button.button_STAR_ = (function re_mdl$components$button$button_STAR_(var_args){
var args__4502__auto__ = [];
var len__4499__auto___23573 = arguments.length;
var i__4500__auto___23574 = (0);
while(true){
if((i__4500__auto___23574 < len__4499__auto___23573)){
args__4502__auto__.push((arguments[i__4500__auto___23574]));

var G__23575 = (i__4500__auto___23574 + (1));
i__4500__auto___23574 = G__23575;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return re_mdl.components.button.button_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

re_mdl.components.button.button_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (p__23569){
var map__23570 = p__23569;
var map__23570__$1 = ((((!((map__23570 == null)))?(((((map__23570.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23570.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23570):map__23570);
var args = map__23570__$1;
var child = cljs.core.get.call(null,map__23570__$1,new cljs.core.Keyword(null,"child","child",623967545));
var disabled_QMARK_ = cljs.core.get.call(null,map__23570__$1,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181));
var primary_QMARK_ = cljs.core.get.call(null,map__23570__$1,new cljs.core.Keyword(null,"primary?","primary?",1845519164));
var accent_QMARK_ = cljs.core.get.call(null,map__23570__$1,new cljs.core.Keyword(null,"accent?","accent?",-137975235));
var attr = cljs.core.get.call(null,map__23570__$1,new cljs.core.Keyword(null,"attr","attr",-604132353));
var raised_QMARK_ = cljs.core.get.call(null,map__23570__$1,new cljs.core.Keyword(null,"raised?","raised?",145778912));
var children = cljs.core.get.call(null,map__23570__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var el = cljs.core.get.call(null,map__23570__$1,new cljs.core.Keyword(null,"el","el",-1618201118),new cljs.core.Keyword(null,"button","button",1456579943));
var colored_QMARK_ = cljs.core.get.call(null,map__23570__$1,new cljs.core.Keyword(null,"colored?","colored?",1847962275));
var fab_QMARK_ = cljs.core.get.call(null,map__23570__$1,new cljs.core.Keyword(null,"fab?","fab?",-34394201));
var icon_QMARK_ = cljs.core.get.call(null,map__23570__$1,new cljs.core.Keyword(null,"icon?","icon?",-1663815703));
var ripple_effect_QMARK_ = cljs.core.get.call(null,map__23570__$1,new cljs.core.Keyword(null,"ripple-effect?","ripple-effect?",1342045356));
var on_click = cljs.core.get.call(null,map__23570__$1,new cljs.core.Keyword(null,"on-click","on-click",1632826543));
var mini_fab_QMARK_ = cljs.core.get.call(null,map__23570__$1,new cljs.core.Keyword(null,"mini-fab?","mini-fab?",35245521));
var for$ = cljs.core.get.call(null,map__23570__$1,new cljs.core.Keyword(null,"for","for",-1323786319));
var id = cljs.core.get.call(null,map__23570__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var class$ = cljs.core.get.call(null,map__23570__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [el,cljs.core.merge.call(null,(function (){var G__23572 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),on_click,new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"class","class",-2030961996),["mdl-button mdl-js-button",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var and__3911__auto__ = class$;
if(cljs.core.truth_(and__3911__auto__)){
return [" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join('');
} else {
return and__3911__auto__;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var and__3911__auto__ = raised_QMARK_;
if(cljs.core.truth_(and__3911__auto__)){
return " mdl-button--raised";
} else {
return and__3911__auto__;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var and__3911__auto__ = fab_QMARK_;
if(cljs.core.truth_(and__3911__auto__)){
return " mdl-button--fab";
} else {
return and__3911__auto__;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var and__3911__auto__ = mini_fab_QMARK_;
if(cljs.core.truth_(and__3911__auto__)){
return " mdl-button--fab mdl-button--mini-fab";
} else {
return and__3911__auto__;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var and__3911__auto__ = icon_QMARK_;
if(cljs.core.truth_(and__3911__auto__)){
return " mdl-button--icon";
} else {
return and__3911__auto__;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var and__3911__auto__ = colored_QMARK_;
if(cljs.core.truth_(and__3911__auto__)){
return " mdl-button--colored";
} else {
return and__3911__auto__;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var and__3911__auto__ = primary_QMARK_;
if(cljs.core.truth_(and__3911__auto__)){
return " mdl-button--primary";
} else {
return and__3911__auto__;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var and__3911__auto__ = accent_QMARK_;
if(cljs.core.truth_(and__3911__auto__)){
return " mdl-button--accent";
} else {
return and__3911__auto__;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var and__3911__auto__ = ripple_effect_QMARK_;
if(cljs.core.truth_(and__3911__auto__)){
return " mdl-js-ripple-effect";
} else {
return and__3911__auto__;
}
})())].join('')], null);
var G__23572__$1 = (cljs.core.truth_(disabled_QMARK_)?cljs.core.assoc.call(null,G__23572,new cljs.core.Keyword(null,"disabled","disabled",-1529784218),true):G__23572);
if(cljs.core.truth_(for$)){
return cljs.core.assoc.call(null,G__23572__$1,new cljs.core.Keyword(null,"for","for",-1323786319),for$);
} else {
return G__23572__$1;
}
})(),attr),child], null),children);
});

re_mdl.components.button.button_STAR_.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
re_mdl.components.button.button_STAR_.cljs$lang$applyTo = (function (seq23568){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23568));
});

re_mdl.components.button.button = re_mdl.util.wrap_mdl.call(null,re_mdl.components.button.button_STAR_);

//# sourceMappingURL=button.js.map?rel=1523640157337
