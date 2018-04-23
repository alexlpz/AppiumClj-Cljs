// Compiled by ClojureScript 1.10.238 {}
goog.provide('re_mdl.components.list');
goog.require('cljs.core');
re_mdl.components.list.item_primary_content = (function re_mdl$components$list$item_primary_content(var_args){
var args__4502__auto__ = [];
var len__4499__auto___23501 = arguments.length;
var i__4500__auto___23502 = (0);
while(true){
if((i__4500__auto___23502 < len__4499__auto___23501)){
args__4502__auto__.push((arguments[i__4500__auto___23502]));

var G__23503 = (i__4500__auto___23502 + (1));
i__4500__auto___23502 = G__23503;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return re_mdl.components.list.item_primary_content.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

re_mdl.components.list.item_primary_content.cljs$core$IFn$_invoke$arity$variadic = (function (p__23498){
var map__23499 = p__23498;
var map__23499__$1 = ((((!((map__23499 == null)))?(((((map__23499.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23499.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23499):map__23499);
var args = map__23499__$1;
var el = cljs.core.get.call(null,map__23499__$1,new cljs.core.Keyword(null,"el","el",-1618201118),new cljs.core.Keyword(null,"span","span",1394872991));
var icon = cljs.core.get.call(null,map__23499__$1,new cljs.core.Keyword(null,"icon","icon",1679606541));
var avatar = cljs.core.get.call(null,map__23499__$1,new cljs.core.Keyword(null,"avatar","avatar",-1607499307));
var child = cljs.core.get.call(null,map__23499__$1,new cljs.core.Keyword(null,"child","child",623967545));
var children = cljs.core.get.call(null,map__23499__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var id = cljs.core.get.call(null,map__23499__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var class$ = cljs.core.get.call(null,map__23499__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var attr = cljs.core.get.call(null,map__23499__$1,new cljs.core.Keyword(null,"attr","attr",-604132353));
if(cljs.core.not.call(null,(function (){var and__3911__auto__ = icon;
if(cljs.core.truth_(and__3911__auto__)){
return avatar;
} else {
return and__3911__auto__;
}
})())){
} else {
throw (new Error(["Assert failed: ","Can't have both icon and avatar","\n","(not (and icon avatar))"].join('')));
}

return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [el,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"class","class",-2030961996),["mdl-list__item-primary-content",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var and__3911__auto__ = class$;
if(cljs.core.truth_(and__3911__auto__)){
return [" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join('');
} else {
return and__3911__auto__;
}
})())].join('')], null),attr),(function (){var temp__5457__auto__ = (function (){var or__3922__auto__ = icon;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return avatar;
}
})();
if(cljs.core.truth_(temp__5457__auto__)){
var icon_name = temp__5457__auto__;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.material-icons","i.material-icons",740058269),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(icon)?"mdl-list__item-icon":"mdl-list__item-avatar")], null),icon_name], null);
} else {
return null;
}
})(),child], null),children);
});

re_mdl.components.list.item_primary_content.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
re_mdl.components.list.item_primary_content.cljs$lang$applyTo = (function (seq23497){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23497));
});

re_mdl.components.list.item_secondary_content = (function re_mdl$components$list$item_secondary_content(var_args){
var args__4502__auto__ = [];
var len__4499__auto___23508 = arguments.length;
var i__4500__auto___23509 = (0);
while(true){
if((i__4500__auto___23509 < len__4499__auto___23508)){
args__4502__auto__.push((arguments[i__4500__auto___23509]));

var G__23510 = (i__4500__auto___23509 + (1));
i__4500__auto___23509 = G__23510;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return re_mdl.components.list.item_secondary_content.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

re_mdl.components.list.item_secondary_content.cljs$core$IFn$_invoke$arity$variadic = (function (p__23505){
var map__23506 = p__23505;
var map__23506__$1 = ((((!((map__23506 == null)))?(((((map__23506.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23506.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23506):map__23506);
var args = map__23506__$1;
var el = cljs.core.get.call(null,map__23506__$1,new cljs.core.Keyword(null,"el","el",-1618201118),new cljs.core.Keyword(null,"span","span",1394872991));
var child = cljs.core.get.call(null,map__23506__$1,new cljs.core.Keyword(null,"child","child",623967545));
var children = cljs.core.get.call(null,map__23506__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var id = cljs.core.get.call(null,map__23506__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var class$ = cljs.core.get.call(null,map__23506__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var attr = cljs.core.get.call(null,map__23506__$1,new cljs.core.Keyword(null,"attr","attr",-604132353));
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [el,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"class","class",-2030961996),["mdl-list__item-secondary-content",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var and__3911__auto__ = class$;
if(cljs.core.truth_(and__3911__auto__)){
return [" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join('');
} else {
return and__3911__auto__;
}
})())].join('')], null),attr),child], null),children);
});

re_mdl.components.list.item_secondary_content.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
re_mdl.components.list.item_secondary_content.cljs$lang$applyTo = (function (seq23504){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23504));
});

re_mdl.components.list.item_secondary_action = (function re_mdl$components$list$item_secondary_action(var_args){
var args__4502__auto__ = [];
var len__4499__auto___23516 = arguments.length;
var i__4500__auto___23517 = (0);
while(true){
if((i__4500__auto___23517 < len__4499__auto___23516)){
args__4502__auto__.push((arguments[i__4500__auto___23517]));

var G__23518 = (i__4500__auto___23517 + (1));
i__4500__auto___23517 = G__23518;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return re_mdl.components.list.item_secondary_action.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

re_mdl.components.list.item_secondary_action.cljs$core$IFn$_invoke$arity$variadic = (function (p__23512){
var map__23513 = p__23512;
var map__23513__$1 = ((((!((map__23513 == null)))?(((((map__23513.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23513.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23513):map__23513);
var args = map__23513__$1;
var child = cljs.core.get.call(null,map__23513__$1,new cljs.core.Keyword(null,"child","child",623967545));
var el = cljs.core.get.call(null,map__23513__$1,new cljs.core.Keyword(null,"el","el",-1618201118),new cljs.core.Keyword(null,"span","span",1394872991));
var href = cljs.core.get.call(null,map__23513__$1,new cljs.core.Keyword(null,"href","href",-793805698));
var children = cljs.core.get.call(null,map__23513__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var id = cljs.core.get.call(null,map__23513__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var class$ = cljs.core.get.call(null,map__23513__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var attr = cljs.core.get.call(null,map__23513__$1,new cljs.core.Keyword(null,"attr","attr",-604132353));
if(cljs.core.not.call(null,(cljs.core.truth_(href)?cljs.core.not_EQ_.call(null,el,new cljs.core.Keyword(null,"a","a",-2123407586)):null))){
} else {
throw (new Error(["Assert failed: ","href only valid on <a>","\n","(not (when href (not= el :a)))"].join('')));
}

return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [el,cljs.core.merge.call(null,(function (){var G__23515 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"class","class",-2030961996),["mdl-list__item-secondary-action",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var and__3911__auto__ = class$;
if(cljs.core.truth_(and__3911__auto__)){
return [" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join('');
} else {
return and__3911__auto__;
}
})())].join('')], null);
if(cljs.core.truth_(href)){
return cljs.core.assoc.call(null,G__23515,new cljs.core.Keyword(null,"href","href",-793805698),href);
} else {
return G__23515;
}
})(),attr),child], null),children);
});

re_mdl.components.list.item_secondary_action.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
re_mdl.components.list.item_secondary_action.cljs$lang$applyTo = (function (seq23511){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23511));
});

re_mdl.components.list.item_secondary_info = (function re_mdl$components$list$item_secondary_info(var_args){
var args__4502__auto__ = [];
var len__4499__auto___23523 = arguments.length;
var i__4500__auto___23524 = (0);
while(true){
if((i__4500__auto___23524 < len__4499__auto___23523)){
args__4502__auto__.push((arguments[i__4500__auto___23524]));

var G__23525 = (i__4500__auto___23524 + (1));
i__4500__auto___23524 = G__23525;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return re_mdl.components.list.item_secondary_info.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

re_mdl.components.list.item_secondary_info.cljs$core$IFn$_invoke$arity$variadic = (function (p__23520){
var map__23521 = p__23520;
var map__23521__$1 = ((((!((map__23521 == null)))?(((((map__23521.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23521.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23521):map__23521);
var args = map__23521__$1;
var el = cljs.core.get.call(null,map__23521__$1,new cljs.core.Keyword(null,"el","el",-1618201118),new cljs.core.Keyword(null,"span","span",1394872991));
var child = cljs.core.get.call(null,map__23521__$1,new cljs.core.Keyword(null,"child","child",623967545));
var children = cljs.core.get.call(null,map__23521__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var id = cljs.core.get.call(null,map__23521__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var class$ = cljs.core.get.call(null,map__23521__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var attr = cljs.core.get.call(null,map__23521__$1,new cljs.core.Keyword(null,"attr","attr",-604132353));
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [el,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"class","class",-2030961996),["mdl-list__item-secondary-info",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var and__3911__auto__ = class$;
if(cljs.core.truth_(and__3911__auto__)){
return [" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join('');
} else {
return and__3911__auto__;
}
})())].join('')], null),attr),child], null),children);
});

re_mdl.components.list.item_secondary_info.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
re_mdl.components.list.item_secondary_info.cljs$lang$applyTo = (function (seq23519){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23519));
});

re_mdl.components.list.item_text_body = (function re_mdl$components$list$item_text_body(var_args){
var args__4502__auto__ = [];
var len__4499__auto___23530 = arguments.length;
var i__4500__auto___23531 = (0);
while(true){
if((i__4500__auto___23531 < len__4499__auto___23530)){
args__4502__auto__.push((arguments[i__4500__auto___23531]));

var G__23532 = (i__4500__auto___23531 + (1));
i__4500__auto___23531 = G__23532;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return re_mdl.components.list.item_text_body.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

re_mdl.components.list.item_text_body.cljs$core$IFn$_invoke$arity$variadic = (function (p__23527){
var map__23528 = p__23527;
var map__23528__$1 = ((((!((map__23528 == null)))?(((((map__23528.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23528.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23528):map__23528);
var args = map__23528__$1;
var el = cljs.core.get.call(null,map__23528__$1,new cljs.core.Keyword(null,"el","el",-1618201118),new cljs.core.Keyword(null,"span","span",1394872991));
var child = cljs.core.get.call(null,map__23528__$1,new cljs.core.Keyword(null,"child","child",623967545));
var children = cljs.core.get.call(null,map__23528__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var id = cljs.core.get.call(null,map__23528__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var class$ = cljs.core.get.call(null,map__23528__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var attr = cljs.core.get.call(null,map__23528__$1,new cljs.core.Keyword(null,"attr","attr",-604132353));
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [el,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"class","class",-2030961996),["mdl-list__item-text-body",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var and__3911__auto__ = class$;
if(cljs.core.truth_(and__3911__auto__)){
return [" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join('');
} else {
return and__3911__auto__;
}
})())].join('')], null),attr),child], null),children);
});

re_mdl.components.list.item_text_body.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
re_mdl.components.list.item_text_body.cljs$lang$applyTo = (function (seq23526){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23526));
});

re_mdl.components.list.item_sub_title = (function re_mdl$components$list$item_sub_title(var_args){
var args__4502__auto__ = [];
var len__4499__auto___23537 = arguments.length;
var i__4500__auto___23538 = (0);
while(true){
if((i__4500__auto___23538 < len__4499__auto___23537)){
args__4502__auto__.push((arguments[i__4500__auto___23538]));

var G__23539 = (i__4500__auto___23538 + (1));
i__4500__auto___23538 = G__23539;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return re_mdl.components.list.item_sub_title.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

re_mdl.components.list.item_sub_title.cljs$core$IFn$_invoke$arity$variadic = (function (p__23534){
var map__23535 = p__23534;
var map__23535__$1 = ((((!((map__23535 == null)))?(((((map__23535.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23535.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23535):map__23535);
var args = map__23535__$1;
var el = cljs.core.get.call(null,map__23535__$1,new cljs.core.Keyword(null,"el","el",-1618201118),new cljs.core.Keyword(null,"span","span",1394872991));
var child = cljs.core.get.call(null,map__23535__$1,new cljs.core.Keyword(null,"child","child",623967545));
var children = cljs.core.get.call(null,map__23535__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var id = cljs.core.get.call(null,map__23535__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var class$ = cljs.core.get.call(null,map__23535__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var attr = cljs.core.get.call(null,map__23535__$1,new cljs.core.Keyword(null,"attr","attr",-604132353));
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [el,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"class","class",-2030961996),["mdl-list__item-sub-title",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var and__3911__auto__ = class$;
if(cljs.core.truth_(and__3911__auto__)){
return [" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join('');
} else {
return and__3911__auto__;
}
})())].join('')], null),attr),child], null),children);
});

re_mdl.components.list.item_sub_title.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
re_mdl.components.list.item_sub_title.cljs$lang$applyTo = (function (seq23533){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23533));
});

re_mdl.components.list.item = (function re_mdl$components$list$item(var_args){
var args__4502__auto__ = [];
var len__4499__auto___23545 = arguments.length;
var i__4500__auto___23546 = (0);
while(true){
if((i__4500__auto___23546 < len__4499__auto___23545)){
args__4502__auto__.push((arguments[i__4500__auto___23546]));

var G__23547 = (i__4500__auto___23546 + (1));
i__4500__auto___23546 = G__23547;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return re_mdl.components.list.item.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

re_mdl.components.list.item.cljs$core$IFn$_invoke$arity$variadic = (function (p__23541){
var map__23542 = p__23541;
var map__23542__$1 = ((((!((map__23542 == null)))?(((((map__23542.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23542.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23542):map__23542);
var args = map__23542__$1;
var item_type = cljs.core.get.call(null,map__23542__$1,new cljs.core.Keyword(null,"item-type","item-type",-73995695),new cljs.core.Keyword(null,"one-line","one-line",721238939));
var children = cljs.core.get.call(null,map__23542__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var id = cljs.core.get.call(null,map__23542__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var class$ = cljs.core.get.call(null,map__23542__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var attr = cljs.core.get.call(null,map__23542__$1,new cljs.core.Keyword(null,"attr","attr",-604132353));
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"three-line","three-line",1456173601),null,new cljs.core.Keyword(null,"two-line","two-line",196060392),null,new cljs.core.Keyword(null,"one-line","one-line",721238939),null], null), null).call(null,item_type))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["Invalid item-type :",cljs.core.str.cljs$core$IFn$_invoke$arity$1(item_type)].join('')),"\n","(#{:three-line :two-line :one-line} item-type)"].join('')));
}

return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"class","class",-2030961996),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(["mdl-list__item mdl-list__item",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__23544 = item_type;
var G__23544__$1 = (((G__23544 instanceof cljs.core.Keyword))?G__23544.fqn:null);
switch (G__23544__$1) {
case "two-line":
return "--two-line";

break;
case "three-line":
return "--three-line";

break;
default:
return null;

}
})())].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var and__3911__auto__ = class$;
if(cljs.core.truth_(and__3911__auto__)){
return [" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join('');
} else {
return and__3911__auto__;
}
})())].join('')], null),attr)], null),children);
});

re_mdl.components.list.item.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
re_mdl.components.list.item.cljs$lang$applyTo = (function (seq23540){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23540));
});

re_mdl.components.list.list_coll = (function re_mdl$components$list$list_coll(var_args){
var args__4502__auto__ = [];
var len__4499__auto___23553 = arguments.length;
var i__4500__auto___23554 = (0);
while(true){
if((i__4500__auto___23554 < len__4499__auto___23553)){
args__4502__auto__.push((arguments[i__4500__auto___23554]));

var G__23555 = (i__4500__auto___23554 + (1));
i__4500__auto___23554 = G__23555;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return re_mdl.components.list.list_coll.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

re_mdl.components.list.list_coll.cljs$core$IFn$_invoke$arity$variadic = (function (p__23550){
var map__23551 = p__23550;
var map__23551__$1 = ((((!((map__23551 == null)))?(((((map__23551.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23551.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23551):map__23551);
var args = map__23551__$1;
var children = cljs.core.get.call(null,map__23551__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var id = cljs.core.get.call(null,map__23551__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var class$ = cljs.core.get.call(null,map__23551__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var attr = cljs.core.get.call(null,map__23551__$1,new cljs.core.Keyword(null,"attr","attr",-604132353));
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.mdl-list","ul.mdl-list",1707778310),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"class","class",-2030961996),class$], null),attr)], null),children);
});

re_mdl.components.list.list_coll.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
re_mdl.components.list.list_coll.cljs$lang$applyTo = (function (seq23549){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23549));
});


//# sourceMappingURL=list.js.map?rel=1523640157285
