// Compiled by ClojureScript 1.10.238 {}
goog.provide('re_mdl.components.layout');
goog.require('cljs.core');
goog.require('re_mdl.util');
re_mdl.components.layout.layout_STAR_ = (function re_mdl$components$layout$layout_STAR_(var_args){
var args__4502__auto__ = [];
var len__4499__auto___23022 = arguments.length;
var i__4500__auto___23023 = (0);
while(true){
if((i__4500__auto___23023 < len__4499__auto___23022)){
args__4502__auto__.push((arguments[i__4500__auto___23023]));

var G__23024 = (i__4500__auto___23023 + (1));
i__4500__auto___23023 = G__23024;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return re_mdl.components.layout.layout_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

re_mdl.components.layout.layout_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (p__23019){
var map__23020 = p__23019;
var map__23020__$1 = ((((!((map__23020 == null)))?(((((map__23020.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23020.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23020):map__23020);
var args = map__23020__$1;
var fixed_drawer_QMARK_ = cljs.core.get.call(null,map__23020__$1,new cljs.core.Keyword(null,"fixed-drawer?","fixed-drawer?",-1209955123));
var fixed_header_QMARK_ = cljs.core.get.call(null,map__23020__$1,new cljs.core.Keyword(null,"fixed-header?","fixed-header?",-619624567));
var fixed_tabs_QMARK_ = cljs.core.get.call(null,map__23020__$1,new cljs.core.Keyword(null,"fixed-tabs?","fixed-tabs?",1226277538));
var no_drawer_button_QMARK_ = cljs.core.get.call(null,map__23020__$1,new cljs.core.Keyword(null,"no-drawer-button?","no-drawer-button?",-1096066801));
var no_desktop_drawer_button_QMARK_ = cljs.core.get.call(null,map__23020__$1,new cljs.core.Keyword(null,"no-desktop-drawer-button?","no-desktop-drawer-button?",-574341240));
var children = cljs.core.get.call(null,map__23020__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var id = cljs.core.get.call(null,map__23020__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var class$ = cljs.core.get.call(null,map__23020__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var attr = cljs.core.get.call(null,map__23020__$1,new cljs.core.Keyword(null,"attr","attr",-604132353));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"class","class",-2030961996),["mdl-layout mdl-js-layout",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var and__3911__auto__ = class$;
if(cljs.core.truth_(and__3911__auto__)){
return [" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join('');
} else {
return and__3911__auto__;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var and__3911__auto__ = fixed_drawer_QMARK_;
if(cljs.core.truth_(and__3911__auto__)){
return " mdl-layout--fixed-drawer";
} else {
return and__3911__auto__;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var and__3911__auto__ = fixed_header_QMARK_;
if(cljs.core.truth_(and__3911__auto__)){
return " mdl-layout--fixed-header";
} else {
return and__3911__auto__;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var and__3911__auto__ = fixed_tabs_QMARK_;
if(cljs.core.truth_(and__3911__auto__)){
return " mdl-layout--fixed-tabs";
} else {
return and__3911__auto__;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var and__3911__auto__ = no_drawer_button_QMARK_;
if(cljs.core.truth_(and__3911__auto__)){
return " mdl-layout--no-drawer-button";
} else {
return and__3911__auto__;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var and__3911__auto__ = no_desktop_drawer_button_QMARK_;
if(cljs.core.truth_(and__3911__auto__)){
return " mdl-layout--no-desktop-drawer-button";
} else {
return and__3911__auto__;
}
})())].join('')], null),attr)], null),children)], null);
});

re_mdl.components.layout.layout_STAR_.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
re_mdl.components.layout.layout_STAR_.cljs$lang$applyTo = (function (seq23018){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23018));
});

re_mdl.components.layout.layout = re_mdl.util.wrap_mdl.call(null,re_mdl.components.layout.layout_STAR_);
re_mdl.components.layout.title = (function re_mdl$components$layout$title(var_args){
var args__4502__auto__ = [];
var len__4499__auto___23029 = arguments.length;
var i__4500__auto___23030 = (0);
while(true){
if((i__4500__auto___23030 < len__4499__auto___23029)){
args__4502__auto__.push((arguments[i__4500__auto___23030]));

var G__23031 = (i__4500__auto___23030 + (1));
i__4500__auto___23030 = G__23031;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return re_mdl.components.layout.title.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

re_mdl.components.layout.title.cljs$core$IFn$_invoke$arity$variadic = (function (p__23026){
var map__23027 = p__23026;
var map__23027__$1 = ((((!((map__23027 == null)))?(((((map__23027.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23027.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23027):map__23027);
var args = map__23027__$1;
var large_screen_only_QMARK_ = cljs.core.get.call(null,map__23027__$1,new cljs.core.Keyword(null,"large-screen-only?","large-screen-only?",-1040583386));
var small_screen_only_QMARK_ = cljs.core.get.call(null,map__23027__$1,new cljs.core.Keyword(null,"small-screen-only?","small-screen-only?",2036719660));
var label = cljs.core.get.call(null,map__23027__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var children = cljs.core.get.call(null,map__23027__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var id = cljs.core.get.call(null,map__23027__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var class$ = cljs.core.get.call(null,map__23027__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var attr = cljs.core.get.call(null,map__23027__$1,new cljs.core.Keyword(null,"attr","attr",-604132353));
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"class","class",-2030961996),["mdl-layout-title",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var and__3911__auto__ = class$;
if(cljs.core.truth_(and__3911__auto__)){
return [" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join('');
} else {
return and__3911__auto__;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var and__3911__auto__ = large_screen_only_QMARK_;
if(cljs.core.truth_(and__3911__auto__)){
return " mdl-layout--large-screen-only";
} else {
return and__3911__auto__;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var and__3911__auto__ = small_screen_only_QMARK_;
if(cljs.core.truth_(and__3911__auto__)){
return " mdl-layout--small-screen-only";
} else {
return and__3911__auto__;
}
})())].join('')], null),attr),label], null),children);
});

re_mdl.components.layout.title.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
re_mdl.components.layout.title.cljs$lang$applyTo = (function (seq23025){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23025));
});

re_mdl.components.layout.spacer = (function re_mdl$components$layout$spacer(var_args){
var args__4502__auto__ = [];
var len__4499__auto___23036 = arguments.length;
var i__4500__auto___23037 = (0);
while(true){
if((i__4500__auto___23037 < len__4499__auto___23036)){
args__4502__auto__.push((arguments[i__4500__auto___23037]));

var G__23038 = (i__4500__auto___23037 + (1));
i__4500__auto___23037 = G__23038;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return re_mdl.components.layout.spacer.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

re_mdl.components.layout.spacer.cljs$core$IFn$_invoke$arity$variadic = (function (p__23033){
var map__23034 = p__23033;
var map__23034__$1 = ((((!((map__23034 == null)))?(((((map__23034.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23034.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23034):map__23034);
var args = map__23034__$1;
var large_screen_only_QMARK_ = cljs.core.get.call(null,map__23034__$1,new cljs.core.Keyword(null,"large-screen-only?","large-screen-only?",-1040583386));
var small_screen_only_QMARK_ = cljs.core.get.call(null,map__23034__$1,new cljs.core.Keyword(null,"small-screen-only?","small-screen-only?",2036719660));
var children = cljs.core.get.call(null,map__23034__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var id = cljs.core.get.call(null,map__23034__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var class$ = cljs.core.get.call(null,map__23034__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var attr = cljs.core.get.call(null,map__23034__$1,new cljs.core.Keyword(null,"attr","attr",-604132353));
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"class","class",-2030961996),["mdl-layout-spacer",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var and__3911__auto__ = class$;
if(cljs.core.truth_(and__3911__auto__)){
return [" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join('');
} else {
return and__3911__auto__;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var and__3911__auto__ = large_screen_only_QMARK_;
if(cljs.core.truth_(and__3911__auto__)){
return " mdl-layout--large-screen-only";
} else {
return and__3911__auto__;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var and__3911__auto__ = small_screen_only_QMARK_;
if(cljs.core.truth_(and__3911__auto__)){
return " mdl-layout--small-screen-only";
} else {
return and__3911__auto__;
}
})())].join('')], null),attr)], null),children);
});

re_mdl.components.layout.spacer.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
re_mdl.components.layout.spacer.cljs$lang$applyTo = (function (seq23032){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23032));
});

re_mdl.components.layout.header = (function re_mdl$components$layout$header(var_args){
var args__4502__auto__ = [];
var len__4499__auto___23043 = arguments.length;
var i__4500__auto___23044 = (0);
while(true){
if((i__4500__auto___23044 < len__4499__auto___23043)){
args__4502__auto__.push((arguments[i__4500__auto___23044]));

var G__23045 = (i__4500__auto___23044 + (1));
i__4500__auto___23044 = G__23045;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return re_mdl.components.layout.header.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

re_mdl.components.layout.header.cljs$core$IFn$_invoke$arity$variadic = (function (p__23040){
var map__23041 = p__23040;
var map__23041__$1 = ((((!((map__23041 == null)))?(((((map__23041.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23041.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23041):map__23041);
var args = map__23041__$1;
var waterfall_QMARK_ = cljs.core.get.call(null,map__23041__$1,new cljs.core.Keyword(null,"waterfall?","waterfall?",2126834777));
var seamed_QMARK_ = cljs.core.get.call(null,map__23041__$1,new cljs.core.Keyword(null,"seamed?","seamed?",1695119326));
var attr = cljs.core.get.call(null,map__23041__$1,new cljs.core.Keyword(null,"attr","attr",-604132353));
var waterfall_hide_top_QMARK_ = cljs.core.get.call(null,map__23041__$1,new cljs.core.Keyword(null,"waterfall-hide-top?","waterfall-hide-top?",1909145440));
var scroll_QMARK_ = cljs.core.get.call(null,map__23041__$1,new cljs.core.Keyword(null,"scroll?","scroll?",-1393045951));
var children = cljs.core.get.call(null,map__23041__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var large_screen_only_QMARK_ = cljs.core.get.call(null,map__23041__$1,new cljs.core.Keyword(null,"large-screen-only?","large-screen-only?",-1040583386));
var small_screen_only_QMARK_ = cljs.core.get.call(null,map__23041__$1,new cljs.core.Keyword(null,"small-screen-only?","small-screen-only?",2036719660));
var transparent_QMARK_ = cljs.core.get.call(null,map__23041__$1,new cljs.core.Keyword(null,"transparent?","transparent?",-1446050548));
var id = cljs.core.get.call(null,map__23041__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var class$ = cljs.core.get.call(null,map__23041__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"header","header",119441134),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"class","class",-2030961996),["mdl-layout__header",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var and__3911__auto__ = class$;
if(cljs.core.truth_(and__3911__auto__)){
return [" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join('');
} else {
return and__3911__auto__;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var and__3911__auto__ = large_screen_only_QMARK_;
if(cljs.core.truth_(and__3911__auto__)){
return " mdl-layout--large-screen-only";
} else {
return and__3911__auto__;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var and__3911__auto__ = small_screen_only_QMARK_;
if(cljs.core.truth_(and__3911__auto__)){
return " mdl-layout--small-screen-only";
} else {
return and__3911__auto__;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var and__3911__auto__ = waterfall_QMARK_;
if(cljs.core.truth_(and__3911__auto__)){
return " mdl-layout__header--waterfall";
} else {
return and__3911__auto__;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var and__3911__auto__ = waterfall_hide_top_QMARK_;
if(cljs.core.truth_(and__3911__auto__)){
return " mdl-layout__header--waterfall-hide-top";
} else {
return and__3911__auto__;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var and__3911__auto__ = transparent_QMARK_;
if(cljs.core.truth_(and__3911__auto__)){
return " mdl-layout__header--transparent";
} else {
return and__3911__auto__;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var and__3911__auto__ = seamed_QMARK_;
if(cljs.core.truth_(and__3911__auto__)){
return " mdl-layout__header--seamed";
} else {
return and__3911__auto__;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var and__3911__auto__ = scroll_QMARK_;
if(cljs.core.truth_(and__3911__auto__)){
return " mdl-layout__header--scroll";
} else {
return and__3911__auto__;
}
})())].join('')], null),attr)], null),children);
});

re_mdl.components.layout.header.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
re_mdl.components.layout.header.cljs$lang$applyTo = (function (seq23039){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23039));
});

re_mdl.components.layout.icon = (function re_mdl$components$layout$icon(var_args){
var args__4502__auto__ = [];
var len__4499__auto___23050 = arguments.length;
var i__4500__auto___23051 = (0);
while(true){
if((i__4500__auto___23051 < len__4499__auto___23050)){
args__4502__auto__.push((arguments[i__4500__auto___23051]));

var G__23052 = (i__4500__auto___23051 + (1));
i__4500__auto___23051 = G__23052;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return re_mdl.components.layout.icon.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

re_mdl.components.layout.icon.cljs$core$IFn$_invoke$arity$variadic = (function (p__23047){
var map__23048 = p__23047;
var map__23048__$1 = ((((!((map__23048 == null)))?(((((map__23048.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23048.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23048):map__23048);
var args = map__23048__$1;
var large_screen_only_QMARK_ = cljs.core.get.call(null,map__23048__$1,new cljs.core.Keyword(null,"large-screen-only?","large-screen-only?",-1040583386));
var small_screen_only_QMARK_ = cljs.core.get.call(null,map__23048__$1,new cljs.core.Keyword(null,"small-screen-only?","small-screen-only?",2036719660));
var id = cljs.core.get.call(null,map__23048__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var class$ = cljs.core.get.call(null,map__23048__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var attr = cljs.core.get.call(null,map__23048__$1,new cljs.core.Keyword(null,"attr","attr",-604132353));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"class","class",-2030961996),["mdl-layout-icon",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var and__3911__auto__ = class$;
if(cljs.core.truth_(and__3911__auto__)){
return [" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join('');
} else {
return and__3911__auto__;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var and__3911__auto__ = large_screen_only_QMARK_;
if(cljs.core.truth_(and__3911__auto__)){
return " mdl-layout--large-screen-only";
} else {
return and__3911__auto__;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var and__3911__auto__ = small_screen_only_QMARK_;
if(cljs.core.truth_(and__3911__auto__)){
return " mdl-layout--small-screen-only";
} else {
return and__3911__auto__;
}
})())].join('')], null),attr)], null);
});

re_mdl.components.layout.icon.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
re_mdl.components.layout.icon.cljs$lang$applyTo = (function (seq23046){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23046));
});

re_mdl.components.layout.header_row = (function re_mdl$components$layout$header_row(var_args){
var args__4502__auto__ = [];
var len__4499__auto___23057 = arguments.length;
var i__4500__auto___23058 = (0);
while(true){
if((i__4500__auto___23058 < len__4499__auto___23057)){
args__4502__auto__.push((arguments[i__4500__auto___23058]));

var G__23059 = (i__4500__auto___23058 + (1));
i__4500__auto___23058 = G__23059;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return re_mdl.components.layout.header_row.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

re_mdl.components.layout.header_row.cljs$core$IFn$_invoke$arity$variadic = (function (p__23054){
var map__23055 = p__23054;
var map__23055__$1 = ((((!((map__23055 == null)))?(((((map__23055.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23055.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23055):map__23055);
var args = map__23055__$1;
var large_screen_only_QMARK_ = cljs.core.get.call(null,map__23055__$1,new cljs.core.Keyword(null,"large-screen-only?","large-screen-only?",-1040583386));
var small_screen_only_QMARK_ = cljs.core.get.call(null,map__23055__$1,new cljs.core.Keyword(null,"small-screen-only?","small-screen-only?",2036719660));
var children = cljs.core.get.call(null,map__23055__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var id = cljs.core.get.call(null,map__23055__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var class$ = cljs.core.get.call(null,map__23055__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var attr = cljs.core.get.call(null,map__23055__$1,new cljs.core.Keyword(null,"attr","attr",-604132353));
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"class","class",-2030961996),["mdl-layout__header-row",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var and__3911__auto__ = class$;
if(cljs.core.truth_(and__3911__auto__)){
return [" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join('');
} else {
return and__3911__auto__;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var and__3911__auto__ = large_screen_only_QMARK_;
if(cljs.core.truth_(and__3911__auto__)){
return " mdl-layout--large-screen-only";
} else {
return and__3911__auto__;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var and__3911__auto__ = small_screen_only_QMARK_;
if(cljs.core.truth_(and__3911__auto__)){
return " mdl-layout--small-screen-only";
} else {
return and__3911__auto__;
}
})())].join('')], null),attr)], null),children);
});

re_mdl.components.layout.header_row.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
re_mdl.components.layout.header_row.cljs$lang$applyTo = (function (seq23053){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23053));
});

re_mdl.components.layout.drawer = (function re_mdl$components$layout$drawer(var_args){
var args__4502__auto__ = [];
var len__4499__auto___23064 = arguments.length;
var i__4500__auto___23065 = (0);
while(true){
if((i__4500__auto___23065 < len__4499__auto___23064)){
args__4502__auto__.push((arguments[i__4500__auto___23065]));

var G__23066 = (i__4500__auto___23065 + (1));
i__4500__auto___23065 = G__23066;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return re_mdl.components.layout.drawer.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

re_mdl.components.layout.drawer.cljs$core$IFn$_invoke$arity$variadic = (function (p__23061){
var map__23062 = p__23061;
var map__23062__$1 = ((((!((map__23062 == null)))?(((((map__23062.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23062.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23062):map__23062);
var args = map__23062__$1;
var large_screen_only_QMARK_ = cljs.core.get.call(null,map__23062__$1,new cljs.core.Keyword(null,"large-screen-only?","large-screen-only?",-1040583386));
var small_screen_only_QMARK_ = cljs.core.get.call(null,map__23062__$1,new cljs.core.Keyword(null,"small-screen-only?","small-screen-only?",2036719660));
var children = cljs.core.get.call(null,map__23062__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var id = cljs.core.get.call(null,map__23062__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var class$ = cljs.core.get.call(null,map__23062__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var attr = cljs.core.get.call(null,map__23062__$1,new cljs.core.Keyword(null,"attr","attr",-604132353));
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"class","class",-2030961996),["mdl-layout__drawer",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var and__3911__auto__ = class$;
if(cljs.core.truth_(and__3911__auto__)){
return [" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join('');
} else {
return and__3911__auto__;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var and__3911__auto__ = large_screen_only_QMARK_;
if(cljs.core.truth_(and__3911__auto__)){
return " mdl-layout--large-screen-only";
} else {
return and__3911__auto__;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var and__3911__auto__ = small_screen_only_QMARK_;
if(cljs.core.truth_(and__3911__auto__)){
return " mdl-layout--small-screen-only";
} else {
return and__3911__auto__;
}
})())].join('')], null),attr)], null),children);
});

re_mdl.components.layout.drawer.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
re_mdl.components.layout.drawer.cljs$lang$applyTo = (function (seq23060){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23060));
});

re_mdl.components.layout.content = (function re_mdl$components$layout$content(var_args){
var args__4502__auto__ = [];
var len__4499__auto___23071 = arguments.length;
var i__4500__auto___23072 = (0);
while(true){
if((i__4500__auto___23072 < len__4499__auto___23071)){
args__4502__auto__.push((arguments[i__4500__auto___23072]));

var G__23073 = (i__4500__auto___23072 + (1));
i__4500__auto___23072 = G__23073;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return re_mdl.components.layout.content.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

re_mdl.components.layout.content.cljs$core$IFn$_invoke$arity$variadic = (function (p__23068){
var map__23069 = p__23068;
var map__23069__$1 = ((((!((map__23069 == null)))?(((((map__23069.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23069.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23069):map__23069);
var args = map__23069__$1;
var large_screen_only_QMARK_ = cljs.core.get.call(null,map__23069__$1,new cljs.core.Keyword(null,"large-screen-only?","large-screen-only?",-1040583386));
var small_screen_only_QMARK_ = cljs.core.get.call(null,map__23069__$1,new cljs.core.Keyword(null,"small-screen-only?","small-screen-only?",2036719660));
var children = cljs.core.get.call(null,map__23069__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var id = cljs.core.get.call(null,map__23069__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var class$ = cljs.core.get.call(null,map__23069__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var attr = cljs.core.get.call(null,map__23069__$1,new cljs.core.Keyword(null,"attr","attr",-604132353));
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"main","main",-2117802661),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"class","class",-2030961996),["mdl-layout__content",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var and__3911__auto__ = class$;
if(cljs.core.truth_(and__3911__auto__)){
return [" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join('');
} else {
return and__3911__auto__;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var and__3911__auto__ = large_screen_only_QMARK_;
if(cljs.core.truth_(and__3911__auto__)){
return " mdl-layout--large-screen-only";
} else {
return and__3911__auto__;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var and__3911__auto__ = small_screen_only_QMARK_;
if(cljs.core.truth_(and__3911__auto__)){
return " mdl-layout--small-screen-only";
} else {
return and__3911__auto__;
}
})())].join('')], null),attr)], null),children);
});

re_mdl.components.layout.content.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
re_mdl.components.layout.content.cljs$lang$applyTo = (function (seq23067){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23067));
});

re_mdl.components.layout.nav = (function re_mdl$components$layout$nav(var_args){
var args__4502__auto__ = [];
var len__4499__auto___23078 = arguments.length;
var i__4500__auto___23079 = (0);
while(true){
if((i__4500__auto___23079 < len__4499__auto___23078)){
args__4502__auto__.push((arguments[i__4500__auto___23079]));

var G__23080 = (i__4500__auto___23079 + (1));
i__4500__auto___23079 = G__23080;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return re_mdl.components.layout.nav.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

re_mdl.components.layout.nav.cljs$core$IFn$_invoke$arity$variadic = (function (p__23075){
var map__23076 = p__23075;
var map__23076__$1 = ((((!((map__23076 == null)))?(((((map__23076.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23076.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23076):map__23076);
var args = map__23076__$1;
var large_screen_only_QMARK_ = cljs.core.get.call(null,map__23076__$1,new cljs.core.Keyword(null,"large-screen-only?","large-screen-only?",-1040583386));
var small_screen_only_QMARK_ = cljs.core.get.call(null,map__23076__$1,new cljs.core.Keyword(null,"small-screen-only?","small-screen-only?",2036719660));
var children = cljs.core.get.call(null,map__23076__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var id = cljs.core.get.call(null,map__23076__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var class$ = cljs.core.get.call(null,map__23076__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var attr = cljs.core.get.call(null,map__23076__$1,new cljs.core.Keyword(null,"attr","attr",-604132353));
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nav","nav",719540477),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"class","class",-2030961996),["mdl-navigation",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var and__3911__auto__ = class$;
if(cljs.core.truth_(and__3911__auto__)){
return [" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join('');
} else {
return and__3911__auto__;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var and__3911__auto__ = large_screen_only_QMARK_;
if(cljs.core.truth_(and__3911__auto__)){
return " mdl-layout--large-screen-only";
} else {
return and__3911__auto__;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var and__3911__auto__ = small_screen_only_QMARK_;
if(cljs.core.truth_(and__3911__auto__)){
return " mdl-layout--small-screen-only";
} else {
return and__3911__auto__;
}
})())].join('')], null),attr)], null),children);
});

re_mdl.components.layout.nav.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
re_mdl.components.layout.nav.cljs$lang$applyTo = (function (seq23074){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23074));
});

re_mdl.components.layout.nav_link = (function re_mdl$components$layout$nav_link(var_args){
var args__4502__auto__ = [];
var len__4499__auto___23086 = arguments.length;
var i__4500__auto___23087 = (0);
while(true){
if((i__4500__auto___23087 < len__4499__auto___23086)){
args__4502__auto__.push((arguments[i__4500__auto___23087]));

var G__23088 = (i__4500__auto___23087 + (1));
i__4500__auto___23087 = G__23088;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return re_mdl.components.layout.nav_link.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

re_mdl.components.layout.nav_link.cljs$core$IFn$_invoke$arity$variadic = (function (p__23082){
var map__23083 = p__23082;
var map__23083__$1 = ((((!((map__23083 == null)))?(((((map__23083.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23083.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23083):map__23083);
var args = map__23083__$1;
var large_screen_only_QMARK_ = cljs.core.get.call(null,map__23083__$1,new cljs.core.Keyword(null,"large-screen-only?","large-screen-only?",-1040583386));
var small_screen_only_QMARK_ = cljs.core.get.call(null,map__23083__$1,new cljs.core.Keyword(null,"small-screen-only?","small-screen-only?",2036719660));
var href = cljs.core.get.call(null,map__23083__$1,new cljs.core.Keyword(null,"href","href",-793805698));
var content = cljs.core.get.call(null,map__23083__$1,new cljs.core.Keyword(null,"content","content",15833224));
var on_click = cljs.core.get.call(null,map__23083__$1,new cljs.core.Keyword(null,"on-click","on-click",1632826543));
var id = cljs.core.get.call(null,map__23083__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var class$ = cljs.core.get.call(null,map__23083__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var attr = cljs.core.get.call(null,map__23083__$1,new cljs.core.Keyword(null,"attr","attr",-604132353));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),cljs.core.merge.call(null,(function (){var G__23085 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"href","href",-793805698),href,new cljs.core.Keyword(null,"class","class",-2030961996),["mdl-navigation__link",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var and__3911__auto__ = class$;
if(cljs.core.truth_(and__3911__auto__)){
return [" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join('');
} else {
return and__3911__auto__;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var and__3911__auto__ = large_screen_only_QMARK_;
if(cljs.core.truth_(and__3911__auto__)){
return " mdl-layout--large-screen-only";
} else {
return and__3911__auto__;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var and__3911__auto__ = small_screen_only_QMARK_;
if(cljs.core.truth_(and__3911__auto__)){
return " mdl-layout--small-screen-only";
} else {
return and__3911__auto__;
}
})())].join('')], null);
if(cljs.core.truth_(on_click)){
return cljs.core.assoc.call(null,G__23085,new cljs.core.Keyword(null,"on-click","on-click",1632826543),on_click);
} else {
return G__23085;
}
})(),attr),content], null);
});

re_mdl.components.layout.nav_link.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
re_mdl.components.layout.nav_link.cljs$lang$applyTo = (function (seq23081){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23081));
});

re_mdl.components.layout.layout_tab_bar = (function re_mdl$components$layout$layout_tab_bar(var_args){
var args__4502__auto__ = [];
var len__4499__auto___23093 = arguments.length;
var i__4500__auto___23094 = (0);
while(true){
if((i__4500__auto___23094 < len__4499__auto___23093)){
args__4502__auto__.push((arguments[i__4500__auto___23094]));

var G__23095 = (i__4500__auto___23094 + (1));
i__4500__auto___23094 = G__23095;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return re_mdl.components.layout.layout_tab_bar.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

re_mdl.components.layout.layout_tab_bar.cljs$core$IFn$_invoke$arity$variadic = (function (p__23090){
var map__23091 = p__23090;
var map__23091__$1 = ((((!((map__23091 == null)))?(((((map__23091.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23091.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23091):map__23091);
var args = map__23091__$1;
var large_screen_only_QMARK_ = cljs.core.get.call(null,map__23091__$1,new cljs.core.Keyword(null,"large-screen-only?","large-screen-only?",-1040583386));
var small_screen_only_QMARK_ = cljs.core.get.call(null,map__23091__$1,new cljs.core.Keyword(null,"small-screen-only?","small-screen-only?",2036719660));
var ripple_effect_QMARK_ = cljs.core.get.call(null,map__23091__$1,new cljs.core.Keyword(null,"ripple-effect?","ripple-effect?",1342045356));
var tab_manual_switch_QMARK_ = cljs.core.get.call(null,map__23091__$1,new cljs.core.Keyword(null,"tab-manual-switch?","tab-manual-switch?",1189314240));
var children = cljs.core.get.call(null,map__23091__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var id = cljs.core.get.call(null,map__23091__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var class$ = cljs.core.get.call(null,map__23091__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var attr = cljs.core.get.call(null,map__23091__$1,new cljs.core.Keyword(null,"attr","attr",-604132353));
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"class","class",-2030961996),["mdl-layout__tab-bar",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var and__3911__auto__ = class$;
if(cljs.core.truth_(and__3911__auto__)){
return [" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join('');
} else {
return and__3911__auto__;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var and__3911__auto__ = ripple_effect_QMARK_;
if(cljs.core.truth_(and__3911__auto__)){
return " mdl-js-ripple-effect";
} else {
return and__3911__auto__;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var and__3911__auto__ = large_screen_only_QMARK_;
if(cljs.core.truth_(and__3911__auto__)){
return " mdl-layout--large-screen-only";
} else {
return and__3911__auto__;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var and__3911__auto__ = small_screen_only_QMARK_;
if(cljs.core.truth_(and__3911__auto__)){
return " mdl-layout--small-screen-only";
} else {
return and__3911__auto__;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var and__3911__auto__ = tab_manual_switch_QMARK_;
if(cljs.core.truth_(and__3911__auto__)){
return " mdl-layout__tab-manual-switch";
} else {
return and__3911__auto__;
}
})())].join('')], null),attr)], null),children);
});

re_mdl.components.layout.layout_tab_bar.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
re_mdl.components.layout.layout_tab_bar.cljs$lang$applyTo = (function (seq23089){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23089));
});

re_mdl.components.layout.layout_tab = (function re_mdl$components$layout$layout_tab(var_args){
var args__4502__auto__ = [];
var len__4499__auto___23100 = arguments.length;
var i__4500__auto___23101 = (0);
while(true){
if((i__4500__auto___23101 < len__4499__auto___23100)){
args__4502__auto__.push((arguments[i__4500__auto___23101]));

var G__23102 = (i__4500__auto___23101 + (1));
i__4500__auto___23101 = G__23102;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return re_mdl.components.layout.layout_tab.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

re_mdl.components.layout.layout_tab.cljs$core$IFn$_invoke$arity$variadic = (function (p__23097){
var map__23098 = p__23097;
var map__23098__$1 = ((((!((map__23098 == null)))?(((((map__23098.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23098.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23098):map__23098);
var args = map__23098__$1;
var large_screen_only_QMARK_ = cljs.core.get.call(null,map__23098__$1,new cljs.core.Keyword(null,"large-screen-only?","large-screen-only?",-1040583386));
var small_screen_only_QMARK_ = cljs.core.get.call(null,map__23098__$1,new cljs.core.Keyword(null,"small-screen-only?","small-screen-only?",2036719660));
var is_active_QMARK_ = cljs.core.get.call(null,map__23098__$1,new cljs.core.Keyword(null,"is-active?","is-active?",-513516250));
var href = cljs.core.get.call(null,map__23098__$1,new cljs.core.Keyword(null,"href","href",-793805698));
var content = cljs.core.get.call(null,map__23098__$1,new cljs.core.Keyword(null,"content","content",15833224));
var id = cljs.core.get.call(null,map__23098__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var class$ = cljs.core.get.call(null,map__23098__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var attr = cljs.core.get.call(null,map__23098__$1,new cljs.core.Keyword(null,"attr","attr",-604132353));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"href","href",-793805698),href,new cljs.core.Keyword(null,"class","class",-2030961996),["mdl-layout__tab",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var and__3911__auto__ = class$;
if(cljs.core.truth_(and__3911__auto__)){
return [" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join('');
} else {
return and__3911__auto__;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var and__3911__auto__ = large_screen_only_QMARK_;
if(cljs.core.truth_(and__3911__auto__)){
return " mdl-layout--large-screen-only";
} else {
return and__3911__auto__;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var and__3911__auto__ = small_screen_only_QMARK_;
if(cljs.core.truth_(and__3911__auto__)){
return " mdl-layout--small-screen-only";
} else {
return and__3911__auto__;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var and__3911__auto__ = is_active_QMARK_;
if(cljs.core.truth_(and__3911__auto__)){
return " is-active";
} else {
return and__3911__auto__;
}
})())].join('')], null),attr),content], null);
});

re_mdl.components.layout.layout_tab.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
re_mdl.components.layout.layout_tab.cljs$lang$applyTo = (function (seq23096){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23096));
});

re_mdl.components.layout.layout_tab_panel = (function re_mdl$components$layout$layout_tab_panel(var_args){
var args__4502__auto__ = [];
var len__4499__auto___23107 = arguments.length;
var i__4500__auto___23108 = (0);
while(true){
if((i__4500__auto___23108 < len__4499__auto___23107)){
args__4502__auto__.push((arguments[i__4500__auto___23108]));

var G__23109 = (i__4500__auto___23108 + (1));
i__4500__auto___23108 = G__23109;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return re_mdl.components.layout.layout_tab_panel.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

re_mdl.components.layout.layout_tab_panel.cljs$core$IFn$_invoke$arity$variadic = (function (p__23104){
var map__23105 = p__23104;
var map__23105__$1 = ((((!((map__23105 == null)))?(((((map__23105.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23105.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23105):map__23105);
var args = map__23105__$1;
var large_screen_only_QMARK_ = cljs.core.get.call(null,map__23105__$1,new cljs.core.Keyword(null,"large-screen-only?","large-screen-only?",-1040583386));
var small_screen_only_QMARK_ = cljs.core.get.call(null,map__23105__$1,new cljs.core.Keyword(null,"small-screen-only?","small-screen-only?",2036719660));
var is_active_QMARK_ = cljs.core.get.call(null,map__23105__$1,new cljs.core.Keyword(null,"is-active?","is-active?",-513516250));
var ripple_effect_QMARK_ = cljs.core.get.call(null,map__23105__$1,new cljs.core.Keyword(null,"ripple-effect?","ripple-effect?",1342045356));
var children = cljs.core.get.call(null,map__23105__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var id = cljs.core.get.call(null,map__23105__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var class$ = cljs.core.get.call(null,map__23105__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var attr = cljs.core.get.call(null,map__23105__$1,new cljs.core.Keyword(null,"attr","attr",-604132353));
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"class","class",-2030961996),["mdl-layout__tab-panel",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var and__3911__auto__ = class$;
if(cljs.core.truth_(and__3911__auto__)){
return [" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join('');
} else {
return and__3911__auto__;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var and__3911__auto__ = large_screen_only_QMARK_;
if(cljs.core.truth_(and__3911__auto__)){
return " mdl-layout--large-screen-only";
} else {
return and__3911__auto__;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var and__3911__auto__ = small_screen_only_QMARK_;
if(cljs.core.truth_(and__3911__auto__)){
return " mdl-layout--small-screen-only";
} else {
return and__3911__auto__;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var and__3911__auto__ = is_active_QMARK_;
if(cljs.core.truth_(and__3911__auto__)){
return " is-active";
} else {
return and__3911__auto__;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var and__3911__auto__ = ripple_effect_QMARK_;
if(cljs.core.truth_(and__3911__auto__)){
return " mdl-js-ripple-effect";
} else {
return and__3911__auto__;
}
})())].join('')], null),attr)], null),children);
});

re_mdl.components.layout.layout_tab_panel.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
re_mdl.components.layout.layout_tab_panel.cljs$lang$applyTo = (function (seq23103){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23103));
});

re_mdl.components.layout.tab_bar = (function re_mdl$components$layout$tab_bar(var_args){
var args__4502__auto__ = [];
var len__4499__auto___23114 = arguments.length;
var i__4500__auto___23115 = (0);
while(true){
if((i__4500__auto___23115 < len__4499__auto___23114)){
args__4502__auto__.push((arguments[i__4500__auto___23115]));

var G__23116 = (i__4500__auto___23115 + (1));
i__4500__auto___23115 = G__23116;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return re_mdl.components.layout.tab_bar.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

re_mdl.components.layout.tab_bar.cljs$core$IFn$_invoke$arity$variadic = (function (p__23111){
var map__23112 = p__23111;
var map__23112__$1 = ((((!((map__23112 == null)))?(((((map__23112.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23112.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23112):map__23112);
var args = map__23112__$1;
var children = cljs.core.get.call(null,map__23112__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var id = cljs.core.get.call(null,map__23112__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var class$ = cljs.core.get.call(null,map__23112__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var attr = cljs.core.get.call(null,map__23112__$1,new cljs.core.Keyword(null,"attr","attr",-604132353));
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"class","class",-2030961996),["mdl-tabs__tab-bar",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var and__3911__auto__ = class$;
if(cljs.core.truth_(and__3911__auto__)){
return [" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join('');
} else {
return and__3911__auto__;
}
})())].join('')], null),attr)], null),children);
});

re_mdl.components.layout.tab_bar.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
re_mdl.components.layout.tab_bar.cljs$lang$applyTo = (function (seq23110){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23110));
});

re_mdl.components.layout.tabs_STAR_ = (function re_mdl$components$layout$tabs_STAR_(var_args){
var args__4502__auto__ = [];
var len__4499__auto___23121 = arguments.length;
var i__4500__auto___23122 = (0);
while(true){
if((i__4500__auto___23122 < len__4499__auto___23121)){
args__4502__auto__.push((arguments[i__4500__auto___23122]));

var G__23123 = (i__4500__auto___23122 + (1));
i__4500__auto___23122 = G__23123;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return re_mdl.components.layout.tabs_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

re_mdl.components.layout.tabs_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (p__23118){
var map__23119 = p__23118;
var map__23119__$1 = ((((!((map__23119 == null)))?(((((map__23119.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23119.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23119):map__23119);
var args = map__23119__$1;
var ripple_effect_QMARK_ = cljs.core.get.call(null,map__23119__$1,new cljs.core.Keyword(null,"ripple-effect?","ripple-effect?",1342045356));
var children = cljs.core.get.call(null,map__23119__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var id = cljs.core.get.call(null,map__23119__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var class$ = cljs.core.get.call(null,map__23119__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var attr = cljs.core.get.call(null,map__23119__$1,new cljs.core.Keyword(null,"attr","attr",-604132353));
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"class","class",-2030961996),["mdl-tabs mdl-js-tabs",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var and__3911__auto__ = class$;
if(cljs.core.truth_(and__3911__auto__)){
return [" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join('');
} else {
return and__3911__auto__;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var and__3911__auto__ = ripple_effect_QMARK_;
if(cljs.core.truth_(and__3911__auto__)){
return " mdl-js-ripple-effect";
} else {
return and__3911__auto__;
}
})())].join('')], null),attr)], null),children);
});

re_mdl.components.layout.tabs_STAR_.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
re_mdl.components.layout.tabs_STAR_.cljs$lang$applyTo = (function (seq23117){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23117));
});

re_mdl.components.layout.tabs = re_mdl.util.wrap_mdl.call(null,re_mdl.components.layout.tabs_STAR_);
re_mdl.components.layout.tab = (function re_mdl$components$layout$tab(var_args){
var args__4502__auto__ = [];
var len__4499__auto___23128 = arguments.length;
var i__4500__auto___23129 = (0);
while(true){
if((i__4500__auto___23129 < len__4499__auto___23128)){
args__4502__auto__.push((arguments[i__4500__auto___23129]));

var G__23130 = (i__4500__auto___23129 + (1));
i__4500__auto___23129 = G__23130;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return re_mdl.components.layout.tab.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

re_mdl.components.layout.tab.cljs$core$IFn$_invoke$arity$variadic = (function (p__23125){
var map__23126 = p__23125;
var map__23126__$1 = ((((!((map__23126 == null)))?(((((map__23126.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23126.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23126):map__23126);
var args = map__23126__$1;
var is_active_QMARK_ = cljs.core.get.call(null,map__23126__$1,new cljs.core.Keyword(null,"is-active?","is-active?",-513516250));
var href = cljs.core.get.call(null,map__23126__$1,new cljs.core.Keyword(null,"href","href",-793805698));
var child = cljs.core.get.call(null,map__23126__$1,new cljs.core.Keyword(null,"child","child",623967545));
var children = cljs.core.get.call(null,map__23126__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var id = cljs.core.get.call(null,map__23126__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var class$ = cljs.core.get.call(null,map__23126__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var attr = cljs.core.get.call(null,map__23126__$1,new cljs.core.Keyword(null,"attr","attr",-604132353));
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"href","href",-793805698),href,new cljs.core.Keyword(null,"class","class",-2030961996),["mdl-tabs__tab",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var and__3911__auto__ = class$;
if(cljs.core.truth_(and__3911__auto__)){
return [" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join('');
} else {
return and__3911__auto__;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var and__3911__auto__ = is_active_QMARK_;
if(cljs.core.truth_(and__3911__auto__)){
return " is-active";
} else {
return and__3911__auto__;
}
})())].join('')], null),attr),child], null),children);
});

re_mdl.components.layout.tab.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
re_mdl.components.layout.tab.cljs$lang$applyTo = (function (seq23124){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23124));
});

re_mdl.components.layout.tabs_panel = (function re_mdl$components$layout$tabs_panel(var_args){
var args__4502__auto__ = [];
var len__4499__auto___23135 = arguments.length;
var i__4500__auto___23136 = (0);
while(true){
if((i__4500__auto___23136 < len__4499__auto___23135)){
args__4502__auto__.push((arguments[i__4500__auto___23136]));

var G__23137 = (i__4500__auto___23136 + (1));
i__4500__auto___23136 = G__23137;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return re_mdl.components.layout.tabs_panel.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

re_mdl.components.layout.tabs_panel.cljs$core$IFn$_invoke$arity$variadic = (function (p__23132){
var map__23133 = p__23132;
var map__23133__$1 = ((((!((map__23133 == null)))?(((((map__23133.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23133.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23133):map__23133);
var args = map__23133__$1;
var el = cljs.core.get.call(null,map__23133__$1,new cljs.core.Keyword(null,"el","el",-1618201118),new cljs.core.Keyword(null,"div","div",1057191632));
var is_active_QMARK_ = cljs.core.get.call(null,map__23133__$1,new cljs.core.Keyword(null,"is-active?","is-active?",-513516250));
var children = cljs.core.get.call(null,map__23133__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var id = cljs.core.get.call(null,map__23133__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var class$ = cljs.core.get.call(null,map__23133__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var attr = cljs.core.get.call(null,map__23133__$1,new cljs.core.Keyword(null,"attr","attr",-604132353));
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [el,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"class","class",-2030961996),["mdl-tabs__panel",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var and__3911__auto__ = class$;
if(cljs.core.truth_(and__3911__auto__)){
return [" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join('');
} else {
return and__3911__auto__;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var and__3911__auto__ = is_active_QMARK_;
if(cljs.core.truth_(and__3911__auto__)){
return " is-active";
} else {
return and__3911__auto__;
}
})())].join('')], null),attr)], null),children);
});

re_mdl.components.layout.tabs_panel.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
re_mdl.components.layout.tabs_panel.cljs$lang$applyTo = (function (seq23131){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23131));
});

re_mdl.components.layout.mega_social_btn = (function re_mdl$components$layout$mega_social_btn(var_args){
var args__4502__auto__ = [];
var len__4499__auto___23142 = arguments.length;
var i__4500__auto___23143 = (0);
while(true){
if((i__4500__auto___23143 < len__4499__auto___23142)){
args__4502__auto__.push((arguments[i__4500__auto___23143]));

var G__23144 = (i__4500__auto___23143 + (1));
i__4500__auto___23143 = G__23144;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return re_mdl.components.layout.mega_social_btn.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

re_mdl.components.layout.mega_social_btn.cljs$core$IFn$_invoke$arity$variadic = (function (p__23139){
var map__23140 = p__23139;
var map__23140__$1 = ((((!((map__23140 == null)))?(((((map__23140.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23140.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23140):map__23140);
var args = map__23140__$1;
var child = cljs.core.get.call(null,map__23140__$1,new cljs.core.Keyword(null,"child","child",623967545));
var children = cljs.core.get.call(null,map__23140__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var id = cljs.core.get.call(null,map__23140__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var class$ = cljs.core.get.call(null,map__23140__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var attr = cljs.core.get.call(null,map__23140__$1,new cljs.core.Keyword(null,"attr","attr",-604132353));
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"class","class",-2030961996),["mdl-mega-footer__social-btn",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var and__3911__auto__ = class$;
if(cljs.core.truth_(and__3911__auto__)){
return [" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join('');
} else {
return and__3911__auto__;
}
})())].join('')], null),attr),child], null),children);
});

re_mdl.components.layout.mega_social_btn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
re_mdl.components.layout.mega_social_btn.cljs$lang$applyTo = (function (seq23138){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23138));
});

re_mdl.components.layout.mega_link_list = (function re_mdl$components$layout$mega_link_list(var_args){
var args__4502__auto__ = [];
var len__4499__auto___23153 = arguments.length;
var i__4500__auto___23154 = (0);
while(true){
if((i__4500__auto___23154 < len__4499__auto___23153)){
args__4502__auto__.push((arguments[i__4500__auto___23154]));

var G__23155 = (i__4500__auto___23154 + (1));
i__4500__auto___23154 = G__23155;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return re_mdl.components.layout.mega_link_list.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

re_mdl.components.layout.mega_link_list.cljs$core$IFn$_invoke$arity$variadic = (function (p__23146){
var map__23147 = p__23146;
var map__23147__$1 = ((((!((map__23147 == null)))?(((((map__23147.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23147.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23147):map__23147);
var args = map__23147__$1;
var children = cljs.core.get.call(null,map__23147__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var id = cljs.core.get.call(null,map__23147__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var class$ = cljs.core.get.call(null,map__23147__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var attr = cljs.core.get.call(null,map__23147__$1,new cljs.core.Keyword(null,"attr","attr",-604132353));
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"class","class",-2030961996),["mdl-mega-footer__link-list",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var and__3911__auto__ = class$;
if(cljs.core.truth_(and__3911__auto__)){
return [" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join('');
} else {
return and__3911__auto__;
}
})())].join('')], null),attr)], null),(function (){var iter__4292__auto__ = ((function (map__23147,map__23147__$1,args,children,id,class$,attr){
return (function re_mdl$components$layout$iter__23149(s__23150){
return (new cljs.core.LazySeq(null,((function (map__23147,map__23147__$1,args,children,id,class$,attr){
return (function (){
var s__23150__$1 = s__23150;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__23150__$1);
if(temp__5457__auto__){
var s__23150__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__23150__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__23150__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__23152 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__23151 = (0);
while(true){
if((i__23151 < size__4291__auto__)){
var child = cljs.core._nth.call(null,c__4290__auto__,i__23151);
cljs.core.chunk_append.call(null,b__23152,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),child], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),child], null)));

var G__23156 = (i__23151 + (1));
i__23151 = G__23156;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23152),re_mdl$components$layout$iter__23149.call(null,cljs.core.chunk_rest.call(null,s__23150__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23152),null);
}
} else {
var child = cljs.core.first.call(null,s__23150__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),child], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),child], null)),re_mdl$components$layout$iter__23149.call(null,cljs.core.rest.call(null,s__23150__$2)));
}
} else {
return null;
}
break;
}
});})(map__23147,map__23147__$1,args,children,id,class$,attr))
,null,null));
});})(map__23147,map__23147__$1,args,children,id,class$,attr))
;
return iter__4292__auto__.call(null,children);
})());
});

re_mdl.components.layout.mega_link_list.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
re_mdl.components.layout.mega_link_list.cljs$lang$applyTo = (function (seq23145){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23145));
});

re_mdl.components.layout.mega_drop_down = (function re_mdl$components$layout$mega_drop_down(var_args){
var args__4502__auto__ = [];
var len__4499__auto___23161 = arguments.length;
var i__4500__auto___23162 = (0);
while(true){
if((i__4500__auto___23162 < len__4499__auto___23161)){
args__4502__auto__.push((arguments[i__4500__auto___23162]));

var G__23163 = (i__4500__auto___23162 + (1));
i__4500__auto___23162 = G__23163;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return re_mdl.components.layout.mega_drop_down.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

re_mdl.components.layout.mega_drop_down.cljs$core$IFn$_invoke$arity$variadic = (function (p__23158){
var map__23159 = p__23158;
var map__23159__$1 = ((((!((map__23159 == null)))?(((((map__23159.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23159.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23159):map__23159);
var args = map__23159__$1;
var heading = cljs.core.get.call(null,map__23159__$1,new cljs.core.Keyword(null,"heading","heading",-1312171873));
var children = cljs.core.get.call(null,map__23159__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var id = cljs.core.get.call(null,map__23159__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var class$ = cljs.core.get.call(null,map__23159__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var attr = cljs.core.get.call(null,map__23159__$1,new cljs.core.Keyword(null,"attr","attr",-604132353));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"class","class",-2030961996),["mdl-mega-footer__drop-down-section",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var and__3911__auto__ = class$;
if(cljs.core.truth_(and__3911__auto__)){
return [" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join('');
} else {
return and__3911__auto__;
}
})())].join('')], null),attr),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1.mdl-mega-footer__heading","h1.mdl-mega-footer__heading",-1739454366),heading], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_mdl.components.layout.mega_link_list,new cljs.core.Keyword(null,"children","children",-940561982),children], null)], null);
});

re_mdl.components.layout.mega_drop_down.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
re_mdl.components.layout.mega_drop_down.cljs$lang$applyTo = (function (seq23157){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23157));
});

re_mdl.components.layout.mega_footer = (function re_mdl$components$layout$mega_footer(var_args){
var args__4502__auto__ = [];
var len__4499__auto___23168 = arguments.length;
var i__4500__auto___23169 = (0);
while(true){
if((i__4500__auto___23169 < len__4499__auto___23168)){
args__4502__auto__.push((arguments[i__4500__auto___23169]));

var G__23170 = (i__4500__auto___23169 + (1));
i__4500__auto___23169 = G__23170;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return re_mdl.components.layout.mega_footer.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

re_mdl.components.layout.mega_footer.cljs$core$IFn$_invoke$arity$variadic = (function (p__23165){
var map__23166 = p__23165;
var map__23166__$1 = ((((!((map__23166 == null)))?(((((map__23166.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23166.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23166):map__23166);
var args = map__23166__$1;
var middle = cljs.core.get.call(null,map__23166__$1,new cljs.core.Keyword(null,"middle","middle",-701029031));
var attr = cljs.core.get.call(null,map__23166__$1,new cljs.core.Keyword(null,"attr","attr",-604132353));
var left = cljs.core.get.call(null,map__23166__$1,new cljs.core.Keyword(null,"left","left",-399115937));
var children = cljs.core.get.call(null,map__23166__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var bottom = cljs.core.get.call(null,map__23166__$1,new cljs.core.Keyword(null,"bottom","bottom",-1550509018));
var logo = cljs.core.get.call(null,map__23166__$1,new cljs.core.Keyword(null,"logo","logo",1237980263));
var top = cljs.core.get.call(null,map__23166__$1,new cljs.core.Keyword(null,"top","top",-1856271961));
var id = cljs.core.get.call(null,map__23166__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var class$ = cljs.core.get.call(null,map__23166__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var right = cljs.core.get.call(null,map__23166__$1,new cljs.core.Keyword(null,"right","right",-452581833));
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"footer","footer",1606445390),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"class","class",-2030961996),["mdl-mega-footer",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var and__3911__auto__ = class$;
if(cljs.core.truth_(and__3911__auto__)){
return [" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join('');
} else {
return and__3911__auto__;
}
})())].join('')], null),attr),(cljs.core.truth_(top)?cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.mdl-mega-footer__top-section","div.mdl-mega-footer__top-section",1720754359)], null),top):null),(cljs.core.truth_(left)?cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.mdl-mega-footer__left-section","div.mdl-mega-footer__left-section",-2092167638)], null),left):null),(cljs.core.truth_(middle)?cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.mdl-mega-footer__middle-section","div.mdl-mega-footer__middle-section",-1664058696)], null),middle):null),(cljs.core.truth_(right)?cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.mdl-mega-footer__right-section","div.mdl-mega-footer__right-section",-242846145)], null),right):null),(cljs.core.truth_(bottom)?cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.mdl-mega-footer__bottom-section","div.mdl-mega-footer__bottom-section",1877823728),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.mdl-logo","div.mdl-logo",419867641),(function (){var or__3922__auto__ = logo;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return "";
}
})()], null)], null),bottom):null)], null),children);
});

re_mdl.components.layout.mega_footer.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
re_mdl.components.layout.mega_footer.cljs$lang$applyTo = (function (seq23164){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23164));
});

re_mdl.components.layout.mini_social_btn = (function re_mdl$components$layout$mini_social_btn(var_args){
var args__4502__auto__ = [];
var len__4499__auto___23175 = arguments.length;
var i__4500__auto___23176 = (0);
while(true){
if((i__4500__auto___23176 < len__4499__auto___23175)){
args__4502__auto__.push((arguments[i__4500__auto___23176]));

var G__23177 = (i__4500__auto___23176 + (1));
i__4500__auto___23176 = G__23177;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return re_mdl.components.layout.mini_social_btn.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

re_mdl.components.layout.mini_social_btn.cljs$core$IFn$_invoke$arity$variadic = (function (p__23172){
var map__23173 = p__23172;
var map__23173__$1 = ((((!((map__23173 == null)))?(((((map__23173.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23173.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23173):map__23173);
var args = map__23173__$1;
var child = cljs.core.get.call(null,map__23173__$1,new cljs.core.Keyword(null,"child","child",623967545));
var children = cljs.core.get.call(null,map__23173__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var id = cljs.core.get.call(null,map__23173__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var class$ = cljs.core.get.call(null,map__23173__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var attr = cljs.core.get.call(null,map__23173__$1,new cljs.core.Keyword(null,"attr","attr",-604132353));
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"class","class",-2030961996),["mdl-mega-footer__social-btn",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var and__3911__auto__ = class$;
if(cljs.core.truth_(and__3911__auto__)){
return [" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join('');
} else {
return and__3911__auto__;
}
})())].join('')], null),attr),child], null),children);
});

re_mdl.components.layout.mini_social_btn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
re_mdl.components.layout.mini_social_btn.cljs$lang$applyTo = (function (seq23171){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23171));
});

re_mdl.components.layout.mini_link_list = (function re_mdl$components$layout$mini_link_list(var_args){
var args__4502__auto__ = [];
var len__4499__auto___23186 = arguments.length;
var i__4500__auto___23187 = (0);
while(true){
if((i__4500__auto___23187 < len__4499__auto___23186)){
args__4502__auto__.push((arguments[i__4500__auto___23187]));

var G__23188 = (i__4500__auto___23187 + (1));
i__4500__auto___23187 = G__23188;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return re_mdl.components.layout.mini_link_list.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

re_mdl.components.layout.mini_link_list.cljs$core$IFn$_invoke$arity$variadic = (function (p__23179){
var map__23180 = p__23179;
var map__23180__$1 = ((((!((map__23180 == null)))?(((((map__23180.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23180.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23180):map__23180);
var args = map__23180__$1;
var children = cljs.core.get.call(null,map__23180__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var id = cljs.core.get.call(null,map__23180__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var class$ = cljs.core.get.call(null,map__23180__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var attr = cljs.core.get.call(null,map__23180__$1,new cljs.core.Keyword(null,"attr","attr",-604132353));
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"class","class",-2030961996),["mdl-mini-footer__link-list",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var and__3911__auto__ = class$;
if(cljs.core.truth_(and__3911__auto__)){
return [" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join('');
} else {
return and__3911__auto__;
}
})())].join('')], null),attr)], null),(function (){var iter__4292__auto__ = ((function (map__23180,map__23180__$1,args,children,id,class$,attr){
return (function re_mdl$components$layout$iter__23182(s__23183){
return (new cljs.core.LazySeq(null,((function (map__23180,map__23180__$1,args,children,id,class$,attr){
return (function (){
var s__23183__$1 = s__23183;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__23183__$1);
if(temp__5457__auto__){
var s__23183__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__23183__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__23183__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__23185 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__23184 = (0);
while(true){
if((i__23184 < size__4291__auto__)){
var child = cljs.core._nth.call(null,c__4290__auto__,i__23184);
cljs.core.chunk_append.call(null,b__23185,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),child], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),child], null)));

var G__23189 = (i__23184 + (1));
i__23184 = G__23189;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23185),re_mdl$components$layout$iter__23182.call(null,cljs.core.chunk_rest.call(null,s__23183__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23185),null);
}
} else {
var child = cljs.core.first.call(null,s__23183__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),child], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),child], null)),re_mdl$components$layout$iter__23182.call(null,cljs.core.rest.call(null,s__23183__$2)));
}
} else {
return null;
}
break;
}
});})(map__23180,map__23180__$1,args,children,id,class$,attr))
,null,null));
});})(map__23180,map__23180__$1,args,children,id,class$,attr))
;
return iter__4292__auto__.call(null,children);
})());
});

re_mdl.components.layout.mini_link_list.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
re_mdl.components.layout.mini_link_list.cljs$lang$applyTo = (function (seq23178){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23178));
});

re_mdl.components.layout.mini_footer = (function re_mdl$components$layout$mini_footer(var_args){
var args__4502__auto__ = [];
var len__4499__auto___23194 = arguments.length;
var i__4500__auto___23195 = (0);
while(true){
if((i__4500__auto___23195 < len__4499__auto___23194)){
args__4502__auto__.push((arguments[i__4500__auto___23195]));

var G__23196 = (i__4500__auto___23195 + (1));
i__4500__auto___23195 = G__23196;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return re_mdl.components.layout.mini_footer.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

re_mdl.components.layout.mini_footer.cljs$core$IFn$_invoke$arity$variadic = (function (p__23191){
var map__23192 = p__23191;
var map__23192__$1 = ((((!((map__23192 == null)))?(((((map__23192.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23192.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23192):map__23192);
var args = map__23192__$1;
var left = cljs.core.get.call(null,map__23192__$1,new cljs.core.Keyword(null,"left","left",-399115937));
var right = cljs.core.get.call(null,map__23192__$1,new cljs.core.Keyword(null,"right","right",-452581833));
var logo = cljs.core.get.call(null,map__23192__$1,new cljs.core.Keyword(null,"logo","logo",1237980263));
var children = cljs.core.get.call(null,map__23192__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var id = cljs.core.get.call(null,map__23192__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var class$ = cljs.core.get.call(null,map__23192__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var attr = cljs.core.get.call(null,map__23192__$1,new cljs.core.Keyword(null,"attr","attr",-604132353));
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"footer","footer",1606445390),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"class","class",-2030961996),["mdl-mini-footer",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var and__3911__auto__ = class$;
if(cljs.core.truth_(and__3911__auto__)){
return [" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join('');
} else {
return and__3911__auto__;
}
})())].join('')], null),attr),(cljs.core.truth_(left)?cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.mdl-mini-footer__left-section","div.mdl-mini-footer__left-section",615236179),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.mdl-logo","div.mdl-logo",419867641),(function (){var or__3922__auto__ = logo;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return "";
}
})()], null)], null),left):null),(cljs.core.truth_(right)?cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.mdl-mini-footer__right-section","div.mdl-mini-footer__right-section",1143857625)], null),right):null)], null),children);
});

re_mdl.components.layout.mini_footer.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
re_mdl.components.layout.mini_footer.cljs$lang$applyTo = (function (seq23190){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23190));
});


//# sourceMappingURL=layout.js.map?rel=1523640156675
