// Compiled by ClojureScript 1.10.238 {}
goog.provide('re_mdl.components.dialog');
goog.require('cljs.core');
goog.require('re_mdl.util');
re_mdl.components.dialog.title = (function re_mdl$components$dialog$title(var_args){
var args__4502__auto__ = [];
var len__4499__auto___23233 = arguments.length;
var i__4500__auto___23234 = (0);
while(true){
if((i__4500__auto___23234 < len__4499__auto___23233)){
args__4502__auto__.push((arguments[i__4500__auto___23234]));

var G__23235 = (i__4500__auto___23234 + (1));
i__4500__auto___23234 = G__23235;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return re_mdl.components.dialog.title.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

re_mdl.components.dialog.title.cljs$core$IFn$_invoke$arity$variadic = (function (p__23230){
var map__23231 = p__23230;
var map__23231__$1 = ((((!((map__23231 == null)))?(((((map__23231.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23231.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23231):map__23231);
var args = map__23231__$1;
var child = cljs.core.get.call(null,map__23231__$1,new cljs.core.Keyword(null,"child","child",623967545));
var el = cljs.core.get.call(null,map__23231__$1,new cljs.core.Keyword(null,"el","el",-1618201118),new cljs.core.Keyword(null,"h3","h3",2067611163));
var children = cljs.core.get.call(null,map__23231__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var id = cljs.core.get.call(null,map__23231__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var class$ = cljs.core.get.call(null,map__23231__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var attr = cljs.core.get.call(null,map__23231__$1,new cljs.core.Keyword(null,"attr","attr",-604132353));
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [el,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"class","class",-2030961996),["mdl-dialog__title",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var and__3911__auto__ = class$;
if(cljs.core.truth_(and__3911__auto__)){
return [" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join('');
} else {
return and__3911__auto__;
}
})())].join('')], null),attr),child], null),children);
});

re_mdl.components.dialog.title.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
re_mdl.components.dialog.title.cljs$lang$applyTo = (function (seq23229){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23229));
});

re_mdl.components.dialog.content = (function re_mdl$components$dialog$content(var_args){
var args__4502__auto__ = [];
var len__4499__auto___23240 = arguments.length;
var i__4500__auto___23241 = (0);
while(true){
if((i__4500__auto___23241 < len__4499__auto___23240)){
args__4502__auto__.push((arguments[i__4500__auto___23241]));

var G__23242 = (i__4500__auto___23241 + (1));
i__4500__auto___23241 = G__23242;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return re_mdl.components.dialog.content.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

re_mdl.components.dialog.content.cljs$core$IFn$_invoke$arity$variadic = (function (p__23237){
var map__23238 = p__23237;
var map__23238__$1 = ((((!((map__23238 == null)))?(((((map__23238.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23238.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23238):map__23238);
var args = map__23238__$1;
var el = cljs.core.get.call(null,map__23238__$1,new cljs.core.Keyword(null,"el","el",-1618201118),new cljs.core.Keyword(null,"div","div",1057191632));
var children = cljs.core.get.call(null,map__23238__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var id = cljs.core.get.call(null,map__23238__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var class$ = cljs.core.get.call(null,map__23238__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var attr = cljs.core.get.call(null,map__23238__$1,new cljs.core.Keyword(null,"attr","attr",-604132353));
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [el,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"class","class",-2030961996),["mdl-dialog__content",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var and__3911__auto__ = class$;
if(cljs.core.truth_(and__3911__auto__)){
return [" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join('');
} else {
return and__3911__auto__;
}
})())].join('')], null),attr)], null),children);
});

re_mdl.components.dialog.content.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
re_mdl.components.dialog.content.cljs$lang$applyTo = (function (seq23236){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23236));
});

re_mdl.components.dialog.actions = (function re_mdl$components$dialog$actions(var_args){
var args__4502__auto__ = [];
var len__4499__auto___23247 = arguments.length;
var i__4500__auto___23248 = (0);
while(true){
if((i__4500__auto___23248 < len__4499__auto___23247)){
args__4502__auto__.push((arguments[i__4500__auto___23248]));

var G__23249 = (i__4500__auto___23248 + (1));
i__4500__auto___23248 = G__23249;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return re_mdl.components.dialog.actions.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

re_mdl.components.dialog.actions.cljs$core$IFn$_invoke$arity$variadic = (function (p__23244){
var map__23245 = p__23244;
var map__23245__$1 = ((((!((map__23245 == null)))?(((((map__23245.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23245.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23245):map__23245);
var args = map__23245__$1;
var el = cljs.core.get.call(null,map__23245__$1,new cljs.core.Keyword(null,"el","el",-1618201118),new cljs.core.Keyword(null,"div","div",1057191632));
var full_width_QMARK_ = cljs.core.get.call(null,map__23245__$1,new cljs.core.Keyword(null,"full-width?","full-width?",1477288349));
var children = cljs.core.get.call(null,map__23245__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var id = cljs.core.get.call(null,map__23245__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var class$ = cljs.core.get.call(null,map__23245__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var attr = cljs.core.get.call(null,map__23245__$1,new cljs.core.Keyword(null,"attr","attr",-604132353));
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [el,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"class","class",-2030961996),["mdl-dialog__actions",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var and__3911__auto__ = class$;
if(cljs.core.truth_(and__3911__auto__)){
return [" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join('');
} else {
return and__3911__auto__;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var and__3911__auto__ = full_width_QMARK_;
if(cljs.core.truth_(and__3911__auto__)){
return " mdl-dialog__actions--full-width";
} else {
return and__3911__auto__;
}
})())].join('')], null),attr)], null),children);
});

re_mdl.components.dialog.actions.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
re_mdl.components.dialog.actions.cljs$lang$applyTo = (function (seq23243){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23243));
});

re_mdl.components.dialog.dialog_STAR_ = (function re_mdl$components$dialog$dialog_STAR_(var_args){
var args__4502__auto__ = [];
var len__4499__auto___23254 = arguments.length;
var i__4500__auto___23255 = (0);
while(true){
if((i__4500__auto___23255 < len__4499__auto___23254)){
args__4502__auto__.push((arguments[i__4500__auto___23255]));

var G__23256 = (i__4500__auto___23255 + (1));
i__4500__auto___23255 = G__23256;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return re_mdl.components.dialog.dialog_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

re_mdl.components.dialog.dialog_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (p__23251){
var map__23252 = p__23251;
var map__23252__$1 = ((((!((map__23252 == null)))?(((((map__23252.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23252.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23252):map__23252);
var args = map__23252__$1;
var children = cljs.core.get.call(null,map__23252__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var id = cljs.core.get.call(null,map__23252__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var class$ = cljs.core.get.call(null,map__23252__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var attr = cljs.core.get.call(null,map__23252__$1,new cljs.core.Keyword(null,"attr","attr",-604132353));
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dialog","dialog",1415150135),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"class","class",-2030961996),["mdl-dialog",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var and__3911__auto__ = class$;
if(cljs.core.truth_(and__3911__auto__)){
return [" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join('');
} else {
return and__3911__auto__;
}
})())].join('')], null),attr)], null),children);
});

re_mdl.components.dialog.dialog_STAR_.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
re_mdl.components.dialog.dialog_STAR_.cljs$lang$applyTo = (function (seq23250){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23250));
});

re_mdl.components.dialog.dialog = re_mdl.util.wrap_dialog_polyfill.call(null,re_mdl.components.dialog.dialog_STAR_);

//# sourceMappingURL=dialog.js.map?rel=1523640156790
