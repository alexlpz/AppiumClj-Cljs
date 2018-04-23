// Compiled by ClojureScript 1.10.238 {}
goog.provide('re_mdl.components.badge');
goog.require('cljs.core');
re_mdl.components.badge.badge = (function re_mdl$components$badge$badge(var_args){
var args__4502__auto__ = [];
var len__4499__auto___22744 = arguments.length;
var i__4500__auto___22745 = (0);
while(true){
if((i__4500__auto___22745 < len__4499__auto___22744)){
args__4502__auto__.push((arguments[i__4500__auto___22745]));

var G__22746 = (i__4500__auto___22745 + (1));
i__4500__auto___22745 = G__22746;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return re_mdl.components.badge.badge.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

re_mdl.components.badge.badge.cljs$core$IFn$_invoke$arity$variadic = (function (p__22740){
var map__22741 = p__22740;
var map__22741__$1 = ((((!((map__22741 == null)))?(((((map__22741.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22741.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22741):map__22741);
var args = map__22741__$1;
var child = cljs.core.get.call(null,map__22741__$1,new cljs.core.Keyword(null,"child","child",623967545));
var badge_label = cljs.core.get.call(null,map__22741__$1,new cljs.core.Keyword(null,"badge-label","badge-label",479295996));
var attr = cljs.core.get.call(null,map__22741__$1,new cljs.core.Keyword(null,"attr","attr",-604132353));
var no_background_QMARK_ = cljs.core.get.call(null,map__22741__$1,new cljs.core.Keyword(null,"no-background?","no-background?",90240736));
var children = cljs.core.get.call(null,map__22741__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var el = cljs.core.get.call(null,map__22741__$1,new cljs.core.Keyword(null,"el","el",-1618201118),new cljs.core.Keyword(null,"span","span",1394872991));
var overlap_QMARK_ = cljs.core.get.call(null,map__22741__$1,new cljs.core.Keyword(null,"overlap?","overlap?",-24322237));
var icon_QMARK_ = cljs.core.get.call(null,map__22741__$1,new cljs.core.Keyword(null,"icon?","icon?",-1663815703));
var id = cljs.core.get.call(null,map__22741__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var class$ = cljs.core.get.call(null,map__22741__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [el,cljs.core.merge.call(null,(function (){var G__22743 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"class","class",-2030961996),["mdl-badge",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var and__3911__auto__ = class$;
if(cljs.core.truth_(and__3911__auto__)){
return [" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join('');
} else {
return and__3911__auto__;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var and__3911__auto__ = no_background_QMARK_;
if(cljs.core.truth_(and__3911__auto__)){
return " mdl-badge--no-background";
} else {
return and__3911__auto__;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var and__3911__auto__ = overlap_QMARK_;
if(cljs.core.truth_(and__3911__auto__)){
return " mdl-badge--overlap";
} else {
return and__3911__auto__;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var and__3911__auto__ = icon_QMARK_;
if(cljs.core.truth_(and__3911__auto__)){
return " material-icons";
} else {
return and__3911__auto__;
}
})())].join('')], null);
if(cljs.core.truth_(badge_label)){
return cljs.core.assoc.call(null,G__22743,new cljs.core.Keyword(null,"data-badge","data-badge",-2109057848),badge_label);
} else {
return G__22743;
}
})(),attr),child], null),children);
});

re_mdl.components.badge.badge.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
re_mdl.components.badge.badge.cljs$lang$applyTo = (function (seq22739){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22739));
});


//# sourceMappingURL=badge.js.map?rel=1523640155987
