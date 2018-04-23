// Compiled by ClojureScript 1.10.238 {}
goog.provide('re_mdl.components.toggle');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('re_mdl.util');
re_mdl.components.toggle.checkbox_STAR_ = (function re_mdl$components$toggle$checkbox_STAR_(var_args){
var args__4502__auto__ = [];
var len__4499__auto___22668 = arguments.length;
var i__4500__auto___22669 = (0);
while(true){
if((i__4500__auto___22669 < len__4499__auto___22668)){
args__4502__auto__.push((arguments[i__4500__auto___22669]));

var G__22670 = (i__4500__auto___22669 + (1));
i__4500__auto___22669 = G__22670;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return re_mdl.components.toggle.checkbox_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

re_mdl.components.toggle.checkbox_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (p__22664){
var map__22665 = p__22664;
var map__22665__$1 = ((((!((map__22665 == null)))?(((((map__22665.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22665.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22665):map__22665);
var args = map__22665__$1;
var disabled_QMARK_ = cljs.core.get.call(null,map__22665__$1,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181));
var ripple_effect_QMARK_ = cljs.core.get.call(null,map__22665__$1,new cljs.core.Keyword(null,"ripple-effect?","ripple-effect?",1342045356));
var model = cljs.core.get.call(null,map__22665__$1,new cljs.core.Keyword(null,"model","model",331153215));
var label = cljs.core.get.call(null,map__22665__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var handler_fn = cljs.core.get.call(null,map__22665__$1,new cljs.core.Keyword(null,"handler-fn","handler-fn",-799387730),cljs.core.constantly.call(null,null));
var children = cljs.core.get.call(null,map__22665__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var id = cljs.core.get.call(null,map__22665__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var class$ = cljs.core.get.call(null,map__22665__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var attr = cljs.core.get.call(null,map__22665__$1,new cljs.core.Keyword(null,"attr","attr",-604132353));
var _ = re_mdl.util.mdl_get_value.call(null,model);
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"for","for",-1323786319),id,new cljs.core.Keyword(null,"class","class",-2030961996),["mdl-checkbox mdl-js-checkbox",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var and__3911__auto__ = class$;
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
})())].join('')], null),attr),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.mdl-checkbox__input","input.mdl-checkbox__input",959709492),cljs.core.merge.call(null,(function (){var G__22667 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"defaultChecked","defaultChecked",-834047344),re_mdl.util.mdl_get_value.call(null,model),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (_,map__22665,map__22665__$1,args,disabled_QMARK_,ripple_effect_QMARK_,model,label,handler_fn,children,id,class$,attr){
return (function (p1__22662_SHARP_){
return handler_fn.call(null,p1__22662_SHARP_.target.checked);
});})(_,map__22665,map__22665__$1,args,disabled_QMARK_,ripple_effect_QMARK_,model,label,handler_fn,children,id,class$,attr))
], null);
if(cljs.core.truth_(disabled_QMARK_)){
return cljs.core.assoc.call(null,G__22667,new cljs.core.Keyword(null,"disabled","disabled",-1529784218),true);
} else {
return G__22667;
}
})(),attr)], null),(cljs.core.truth_(label)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.mdl-checkbox__label","span.mdl-checkbox__label",-1507993629),label], null):null)], null),children);
});

re_mdl.components.toggle.checkbox_STAR_.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
re_mdl.components.toggle.checkbox_STAR_.cljs$lang$applyTo = (function (seq22663){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22663));
});

re_mdl.components.toggle.checkbox = (function re_mdl$components$toggle$checkbox(var_args){
var args__4502__auto__ = [];
var len__4499__auto___22675 = arguments.length;
var i__4500__auto___22676 = (0);
while(true){
if((i__4500__auto___22676 < len__4499__auto___22675)){
args__4502__auto__.push((arguments[i__4500__auto___22676]));

var G__22677 = (i__4500__auto___22676 + (1));
i__4500__auto___22676 = G__22677;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return re_mdl.components.toggle.checkbox.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

re_mdl.components.toggle.checkbox.cljs$core$IFn$_invoke$arity$variadic = (function (p__22672){
var map__22673 = p__22672;
var map__22673__$1 = ((((!((map__22673 == null)))?(((((map__22673.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22673.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22673):map__22673);
var args = map__22673__$1;
var model = cljs.core.get.call(null,map__22673__$1,new cljs.core.Keyword(null,"model","model",331153215));
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),re_mdl.util.mdl_init_mount,new cljs.core.Keyword(null,"component-did-update","component-did-update",-1468549173),((function (map__22673,map__22673__$1,args,model){
return (function (this$,_){
var elem = reagent.core.dom_node.call(null,this$).MaterialCheckbox;
if(cljs.core.truth_(re_mdl.util.mdl_get_value.call(null,new cljs.core.Keyword(null,"model","model",331153215).cljs$core$IFn$_invoke$arity$1(re_mdl.util.mdl_get_props.call(null,reagent.core.argv.call(null,this$)))))){
return elem.check();
} else {
return elem.uncheck();
}
});})(map__22673,map__22673__$1,args,model))
,new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),re_mdl.components.toggle.checkbox_STAR_], null));
});

re_mdl.components.toggle.checkbox.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
re_mdl.components.toggle.checkbox.cljs$lang$applyTo = (function (seq22671){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22671));
});

re_mdl.components.toggle.radio_STAR_ = (function re_mdl$components$toggle$radio_STAR_(var_args){
var args__4502__auto__ = [];
var len__4499__auto___22684 = arguments.length;
var i__4500__auto___22685 = (0);
while(true){
if((i__4500__auto___22685 < len__4499__auto___22684)){
args__4502__auto__.push((arguments[i__4500__auto___22685]));

var G__22686 = (i__4500__auto___22685 + (1));
i__4500__auto___22685 = G__22686;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return re_mdl.components.toggle.radio_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

re_mdl.components.toggle.radio_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (p__22680){
var map__22681 = p__22680;
var map__22681__$1 = ((((!((map__22681 == null)))?(((((map__22681.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22681.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22681):map__22681);
var args = map__22681__$1;
var disabled_QMARK_ = cljs.core.get.call(null,map__22681__$1,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181));
var model = cljs.core.get.call(null,map__22681__$1,new cljs.core.Keyword(null,"model","model",331153215));
var attr = cljs.core.get.call(null,map__22681__$1,new cljs.core.Keyword(null,"attr","attr",-604132353));
var children = cljs.core.get.call(null,map__22681__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var value = cljs.core.get.call(null,map__22681__$1,new cljs.core.Keyword(null,"value","value",305978217));
var name = cljs.core.get.call(null,map__22681__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var ripple_effect_QMARK_ = cljs.core.get.call(null,map__22681__$1,new cljs.core.Keyword(null,"ripple-effect?","ripple-effect?",1342045356));
var handler_fn = cljs.core.get.call(null,map__22681__$1,new cljs.core.Keyword(null,"handler-fn","handler-fn",-799387730),cljs.core.constantly.call(null,null));
var label = cljs.core.get.call(null,map__22681__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var id = cljs.core.get.call(null,map__22681__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var class$ = cljs.core.get.call(null,map__22681__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var _ = re_mdl.util.mdl_get_value.call(null,model);
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"for","for",-1323786319),id,new cljs.core.Keyword(null,"class","class",-2030961996),["mdl-radio mdl-js-radio",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var and__3911__auto__ = class$;
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
})())].join('')], null),attr),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.mdl-radio__button","input.mdl-radio__button",-558204412),(function (){var G__22683 = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"name","name",1843675177),name,new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"defaultChecked","defaultChecked",-834047344),re_mdl.util.mdl_get_value.call(null,model),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (_,map__22681,map__22681__$1,args,disabled_QMARK_,model,attr,children,value,name,ripple_effect_QMARK_,handler_fn,label,id,class$){
return (function (p1__22678_SHARP_){
return handler_fn.call(null,p1__22678_SHARP_.target.value);
});})(_,map__22681,map__22681__$1,args,disabled_QMARK_,model,attr,children,value,name,ripple_effect_QMARK_,handler_fn,label,id,class$))
], null);
if(cljs.core.truth_(disabled_QMARK_)){
return cljs.core.assoc.call(null,G__22683,new cljs.core.Keyword(null,"disabled","disabled",-1529784218),true);
} else {
return G__22683;
}
})()], null),(cljs.core.truth_(label)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.mdl-radio__label","span.mdl-radio__label",365249656),label], null):null)], null),children);
});

re_mdl.components.toggle.radio_STAR_.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
re_mdl.components.toggle.radio_STAR_.cljs$lang$applyTo = (function (seq22679){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22679));
});

re_mdl.components.toggle.radio = (function re_mdl$components$toggle$radio(var_args){
var args__4502__auto__ = [];
var len__4499__auto___22691 = arguments.length;
var i__4500__auto___22692 = (0);
while(true){
if((i__4500__auto___22692 < len__4499__auto___22691)){
args__4502__auto__.push((arguments[i__4500__auto___22692]));

var G__22693 = (i__4500__auto___22692 + (1));
i__4500__auto___22692 = G__22693;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return re_mdl.components.toggle.radio.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

re_mdl.components.toggle.radio.cljs$core$IFn$_invoke$arity$variadic = (function (p__22688){
var map__22689 = p__22688;
var map__22689__$1 = ((((!((map__22689 == null)))?(((((map__22689.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22689.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22689):map__22689);
var args = map__22689__$1;
var model = cljs.core.get.call(null,map__22689__$1,new cljs.core.Keyword(null,"model","model",331153215));
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),re_mdl.util.mdl_init_mount,new cljs.core.Keyword(null,"component-did-update","component-did-update",-1468549173),((function (map__22689,map__22689__$1,args,model){
return (function (this$,_){
var elem = reagent.core.dom_node.call(null,this$).MaterialRadio;
if(cljs.core.truth_(re_mdl.util.mdl_get_value.call(null,new cljs.core.Keyword(null,"model","model",331153215).cljs$core$IFn$_invoke$arity$1(re_mdl.util.mdl_get_props.call(null,reagent.core.argv.call(null,this$)))))){
return elem.check();
} else {
return elem.uncheck();
}
});})(map__22689,map__22689__$1,args,model))
,new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),re_mdl.components.toggle.radio_STAR_], null));
});

re_mdl.components.toggle.radio.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
re_mdl.components.toggle.radio.cljs$lang$applyTo = (function (seq22687){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22687));
});

re_mdl.components.toggle.radios = (function re_mdl$components$toggle$radios(var_args){
var args__4502__auto__ = [];
var len__4499__auto___22702 = arguments.length;
var i__4500__auto___22703 = (0);
while(true){
if((i__4500__auto___22703 < len__4499__auto___22702)){
args__4502__auto__.push((arguments[i__4500__auto___22703]));

var G__22704 = (i__4500__auto___22703 + (1));
i__4500__auto___22703 = G__22704;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return re_mdl.components.toggle.radios.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

re_mdl.components.toggle.radios.cljs$core$IFn$_invoke$arity$variadic = (function (p__22695){
var map__22696 = p__22695;
var map__22696__$1 = ((((!((map__22696 == null)))?(((((map__22696.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22696.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22696):map__22696);
var args = map__22696__$1;
var model = cljs.core.get.call(null,map__22696__$1,new cljs.core.Keyword(null,"model","model",331153215));
var attr = cljs.core.get.call(null,map__22696__$1,new cljs.core.Keyword(null,"attr","attr",-604132353));
var children = cljs.core.get.call(null,map__22696__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var disabled = cljs.core.get.call(null,map__22696__$1,new cljs.core.Keyword(null,"disabled","disabled",-1529784218),cljs.core.PersistentHashSet.EMPTY);
var name = cljs.core.get.call(null,map__22696__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var ripple_effect_QMARK_ = cljs.core.get.call(null,map__22696__$1,new cljs.core.Keyword(null,"ripple-effect?","ripple-effect?",1342045356));
var choices = cljs.core.get.call(null,map__22696__$1,new cljs.core.Keyword(null,"choices","choices",1385611597));
var handler_fn = cljs.core.get.call(null,map__22696__$1,new cljs.core.Keyword(null,"handler-fn","handler-fn",-799387730),cljs.core.constantly.call(null,null));
var id = cljs.core.get.call(null,map__22696__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var class$ = cljs.core.get.call(null,map__22696__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"for","for",-1323786319),id,new cljs.core.Keyword(null,"class","class",-2030961996),["re-mdl-radio",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var and__3911__auto__ = class$;
if(cljs.core.truth_(and__3911__auto__)){
return [" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join('');
} else {
return and__3911__auto__;
}
})())].join('')], null),attr)], null),(function (){var or__3922__auto__ = children;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.map_indexed.call(null,((function (or__3922__auto__,map__22696,map__22696__$1,args,model,attr,children,disabled,name,ripple_effect_QMARK_,choices,handler_fn,id,class$){
return (function (idx,p__22698){
var vec__22699 = p__22698;
var val = cljs.core.nth.call(null,vec__22699,(0),null);
var label = cljs.core.nth.call(null,vec__22699,(1),null);
var choice = vec__22699;
return new cljs.core.PersistentVector(null, 17, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_mdl.components.toggle.radio,new cljs.core.Keyword(null,"id","id",-1388402092),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx)].join(''),new cljs.core.Keyword(null,"name","name",1843675177),name,new cljs.core.Keyword(null,"value","value",305978217),val,new cljs.core.Keyword(null,"label","label",1718410804),label,new cljs.core.Keyword(null,"handler-fn","handler-fn",-799387730),handler_fn,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),disabled.call(null,val),new cljs.core.Keyword(null,"model","model",331153215),cljs.core._EQ_.call(null,val,re_mdl.util.mdl_get_value.call(null,model)),new cljs.core.Keyword(null,"ripple-effect?","ripple-effect?",1342045356),ripple_effect_QMARK_], null);
});})(or__3922__auto__,map__22696,map__22696__$1,args,model,attr,children,disabled,name,ripple_effect_QMARK_,choices,handler_fn,id,class$))
,choices);
}
})());
});

re_mdl.components.toggle.radios.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
re_mdl.components.toggle.radios.cljs$lang$applyTo = (function (seq22694){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22694));
});

re_mdl.components.toggle.icon_toggle_STAR_ = (function re_mdl$components$toggle$icon_toggle_STAR_(var_args){
var args__4502__auto__ = [];
var len__4499__auto___22711 = arguments.length;
var i__4500__auto___22712 = (0);
while(true){
if((i__4500__auto___22712 < len__4499__auto___22711)){
args__4502__auto__.push((arguments[i__4500__auto___22712]));

var G__22713 = (i__4500__auto___22712 + (1));
i__4500__auto___22712 = G__22713;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return re_mdl.components.toggle.icon_toggle_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

re_mdl.components.toggle.icon_toggle_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (p__22707){
var map__22708 = p__22707;
var map__22708__$1 = ((((!((map__22708 == null)))?(((((map__22708.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22708.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22708):map__22708);
var args = map__22708__$1;
var handler_fn = cljs.core.get.call(null,map__22708__$1,new cljs.core.Keyword(null,"handler-fn","handler-fn",-799387730),cljs.core.constantly.call(null,null));
var icon = cljs.core.get.call(null,map__22708__$1,new cljs.core.Keyword(null,"icon","icon",1679606541));
var disabled_QMARK_ = cljs.core.get.call(null,map__22708__$1,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181));
var ripple_effect_QMARK_ = cljs.core.get.call(null,map__22708__$1,new cljs.core.Keyword(null,"ripple-effect?","ripple-effect?",1342045356));
var model = cljs.core.get.call(null,map__22708__$1,new cljs.core.Keyword(null,"model","model",331153215));
var children = cljs.core.get.call(null,map__22708__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var id = cljs.core.get.call(null,map__22708__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var class$ = cljs.core.get.call(null,map__22708__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var attr = cljs.core.get.call(null,map__22708__$1,new cljs.core.Keyword(null,"attr","attr",-604132353));
var _ = re_mdl.util.mdl_get_value.call(null,model);
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"for","for",-1323786319),id,new cljs.core.Keyword(null,"class","class",-2030961996),["mdl-icon-toggle mdl-js-icon-toggle",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var and__3911__auto__ = class$;
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
})())].join('')], null),attr),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.mdl-icon-toggle__input","input.mdl-icon-toggle__input",1666799323),cljs.core.merge.call(null,(function (){var G__22710 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"defaultChecked","defaultChecked",-834047344),re_mdl.util.mdl_get_value.call(null,model),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (_,map__22708,map__22708__$1,args,handler_fn,icon,disabled_QMARK_,ripple_effect_QMARK_,model,children,id,class$,attr){
return (function (p1__22705_SHARP_){
return handler_fn.call(null,p1__22705_SHARP_.target.checked);
});})(_,map__22708,map__22708__$1,args,handler_fn,icon,disabled_QMARK_,ripple_effect_QMARK_,model,children,id,class$,attr))
], null);
if(cljs.core.truth_(disabled_QMARK_)){
return cljs.core.assoc.call(null,G__22710,new cljs.core.Keyword(null,"disabled","disabled",-1529784218),true);
} else {
return G__22710;
}
})(),attr)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.mdl-icon-toggle__label.material-icons","i.mdl-icon-toggle__label.material-icons",215649517),icon], null)], null),children);
});

re_mdl.components.toggle.icon_toggle_STAR_.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
re_mdl.components.toggle.icon_toggle_STAR_.cljs$lang$applyTo = (function (seq22706){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22706));
});

re_mdl.components.toggle.icon_toggle = (function re_mdl$components$toggle$icon_toggle(var_args){
var args__4502__auto__ = [];
var len__4499__auto___22718 = arguments.length;
var i__4500__auto___22719 = (0);
while(true){
if((i__4500__auto___22719 < len__4499__auto___22718)){
args__4502__auto__.push((arguments[i__4500__auto___22719]));

var G__22720 = (i__4500__auto___22719 + (1));
i__4500__auto___22719 = G__22720;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return re_mdl.components.toggle.icon_toggle.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

re_mdl.components.toggle.icon_toggle.cljs$core$IFn$_invoke$arity$variadic = (function (p__22715){
var map__22716 = p__22715;
var map__22716__$1 = ((((!((map__22716 == null)))?(((((map__22716.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22716.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22716):map__22716);
var args = map__22716__$1;
var model = cljs.core.get.call(null,map__22716__$1,new cljs.core.Keyword(null,"model","model",331153215));
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),re_mdl.util.mdl_init_mount,new cljs.core.Keyword(null,"component-did-update","component-did-update",-1468549173),((function (map__22716,map__22716__$1,args,model){
return (function (this$,_){
var elem = reagent.core.dom_node.call(null,this$).MaterialIconToggle;
if(cljs.core.truth_(re_mdl.util.mdl_get_value.call(null,new cljs.core.Keyword(null,"model","model",331153215).cljs$core$IFn$_invoke$arity$1(re_mdl.util.mdl_get_props.call(null,reagent.core.argv.call(null,this$)))))){
return elem.check();
} else {
return elem.uncheck();
}
});})(map__22716,map__22716__$1,args,model))
,new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),re_mdl.components.toggle.icon_toggle_STAR_], null));
});

re_mdl.components.toggle.icon_toggle.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
re_mdl.components.toggle.icon_toggle.cljs$lang$applyTo = (function (seq22714){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22714));
});

re_mdl.components.toggle.switch_STAR_ = (function re_mdl$components$toggle$switch_STAR_(var_args){
var args__4502__auto__ = [];
var len__4499__auto___22727 = arguments.length;
var i__4500__auto___22728 = (0);
while(true){
if((i__4500__auto___22728 < len__4499__auto___22727)){
args__4502__auto__.push((arguments[i__4500__auto___22728]));

var G__22729 = (i__4500__auto___22728 + (1));
i__4500__auto___22728 = G__22729;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return re_mdl.components.toggle.switch_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

re_mdl.components.toggle.switch_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (p__22723){
var map__22724 = p__22723;
var map__22724__$1 = ((((!((map__22724 == null)))?(((((map__22724.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22724.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22724):map__22724);
var args = map__22724__$1;
var handler_fn = cljs.core.get.call(null,map__22724__$1,new cljs.core.Keyword(null,"handler-fn","handler-fn",-799387730),cljs.core.constantly.call(null,null));
var model = cljs.core.get.call(null,map__22724__$1,new cljs.core.Keyword(null,"model","model",331153215));
var disabled_QMARK_ = cljs.core.get.call(null,map__22724__$1,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181));
var ripple_effect_QMARK_ = cljs.core.get.call(null,map__22724__$1,new cljs.core.Keyword(null,"ripple-effect?","ripple-effect?",1342045356));
var label = cljs.core.get.call(null,map__22724__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var children = cljs.core.get.call(null,map__22724__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var id = cljs.core.get.call(null,map__22724__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var class$ = cljs.core.get.call(null,map__22724__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var attr = cljs.core.get.call(null,map__22724__$1,new cljs.core.Keyword(null,"attr","attr",-604132353));
var _ = re_mdl.util.mdl_get_value.call(null,model);
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"for","for",-1323786319),id,new cljs.core.Keyword(null,"class","class",-2030961996),["mdl-switch mdl-js-switch",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var and__3911__auto__ = class$;
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
})())].join('')], null),attr),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.mdl-switch__input","input.mdl-switch__input",-679965372),cljs.core.merge.call(null,(function (){var G__22726 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"defaultChecked","defaultChecked",-834047344),re_mdl.util.mdl_get_value.call(null,model),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (_,map__22724,map__22724__$1,args,handler_fn,model,disabled_QMARK_,ripple_effect_QMARK_,label,children,id,class$,attr){
return (function (p1__22721_SHARP_){
return handler_fn.call(null,p1__22721_SHARP_.target.checked);
});})(_,map__22724,map__22724__$1,args,handler_fn,model,disabled_QMARK_,ripple_effect_QMARK_,label,children,id,class$,attr))
], null);
if(cljs.core.truth_(disabled_QMARK_)){
return cljs.core.assoc.call(null,G__22726,new cljs.core.Keyword(null,"disabled","disabled",-1529784218),true);
} else {
return G__22726;
}
})(),attr)], null),(cljs.core.truth_(label)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.mdl-switch__label","span.mdl-switch__label",685742243),label], null):null)], null),children);
});

re_mdl.components.toggle.switch_STAR_.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
re_mdl.components.toggle.switch_STAR_.cljs$lang$applyTo = (function (seq22722){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22722));
});

re_mdl.components.toggle.switch$ = (function re_mdl$components$toggle$switch(var_args){
var args__4502__auto__ = [];
var len__4499__auto___22734 = arguments.length;
var i__4500__auto___22735 = (0);
while(true){
if((i__4500__auto___22735 < len__4499__auto___22734)){
args__4502__auto__.push((arguments[i__4500__auto___22735]));

var G__22736 = (i__4500__auto___22735 + (1));
i__4500__auto___22735 = G__22736;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return re_mdl.components.toggle.switch$.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

re_mdl.components.toggle.switch$.cljs$core$IFn$_invoke$arity$variadic = (function (p__22731){
var map__22732 = p__22731;
var map__22732__$1 = ((((!((map__22732 == null)))?(((((map__22732.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22732.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22732):map__22732);
var args = map__22732__$1;
var model = cljs.core.get.call(null,map__22732__$1,new cljs.core.Keyword(null,"model","model",331153215));
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),re_mdl.util.mdl_init_mount,new cljs.core.Keyword(null,"component-did-update","component-did-update",-1468549173),((function (map__22732,map__22732__$1,args,model){
return (function (this$,_){
var elem = reagent.core.dom_node.call(null,this$).MaterialSwitch;
if(cljs.core.truth_(re_mdl.util.mdl_get_value.call(null,new cljs.core.Keyword(null,"model","model",331153215).cljs$core$IFn$_invoke$arity$1(re_mdl.util.mdl_get_props.call(null,reagent.core.argv.call(null,this$)))))){
return elem.on();
} else {
return elem.off();
}
});})(map__22732,map__22732__$1,args,model))
,new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),re_mdl.components.toggle.switch_STAR_], null));
});

re_mdl.components.toggle.switch$.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
re_mdl.components.toggle.switch$.cljs$lang$applyTo = (function (seq22730){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22730));
});


//# sourceMappingURL=toggle.js.map?rel=1523640155953
