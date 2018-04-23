// Compiled by ClojureScript 1.10.238 {}
goog.provide('re_mdl.components.textfield');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('re_mdl.util');
goog.require('re_mdl.components.button');
re_mdl.components.textfield.textfield_STAR_ = (function re_mdl$components$textfield$textfield_STAR_(this$){
var map__23596 = re_mdl.util.mdl_get_props.call(null,reagent.core.argv.call(null,this$));
var map__23596__$1 = ((((!((map__23596 == null)))?(((((map__23596.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23596.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23596):map__23596);
var args = map__23596__$1;
var invalid_message = cljs.core.get.call(null,map__23596__$1,new cljs.core.Keyword(null,"invalid-message","invalid-message",-1655568326));
var disabled_QMARK_ = cljs.core.get.call(null,map__23596__$1,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181));
var expandable_QMARK_ = cljs.core.get.call(null,map__23596__$1,new cljs.core.Keyword(null,"expandable?","expandable?",1239314171));
var floating_label_QMARK_ = cljs.core.get.call(null,map__23596__$1,new cljs.core.Keyword(null,"floating-label?","floating-label?",-1615247461));
var model = cljs.core.get.call(null,map__23596__$1,new cljs.core.Keyword(null,"model","model",331153215));
var attr = cljs.core.get.call(null,map__23596__$1,new cljs.core.Keyword(null,"attr","attr",-604132353));
var pattern = cljs.core.get.call(null,map__23596__$1,new cljs.core.Keyword(null,"pattern","pattern",242135423));
var children = cljs.core.get.call(null,map__23596__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var input_attr = cljs.core.get.call(null,map__23596__$1,new cljs.core.Keyword(null,"input-attr","input-attr",-1377860152));
var expand_icon = cljs.core.get.call(null,map__23596__$1,new cljs.core.Keyword(null,"expand-icon","expand-icon",563490473));
var type = cljs.core.get.call(null,map__23596__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"text","text",-1790561697));
var handler_fn = cljs.core.get.call(null,map__23596__$1,new cljs.core.Keyword(null,"handler-fn","handler-fn",-799387730),cljs.core.constantly.call(null,null));
var input_type = cljs.core.get.call(null,map__23596__$1,new cljs.core.Keyword(null,"input-type","input-type",856973840),"text");
var rows = cljs.core.get.call(null,map__23596__$1,new cljs.core.Keyword(null,"rows","rows",850049680));
var label = cljs.core.get.call(null,map__23596__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var id = cljs.core.get.call(null,map__23596__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var class$ = cljs.core.get.call(null,map__23596__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
if(cljs.core.truth_(type)){
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),null,new cljs.core.Keyword(null,"text","text",-1790561697),null], null), null).call(null,type))){
} else {
throw (new Error(["Assert failed: ","Invalid type, must be :text or :textarea","\n","(#{:textarea :text} type)"].join('')));
}
} else {
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"textarea","textarea",-650375824),type)){
if(cljs.core.truth_(rows)){
} else {
throw (new Error(["Assert failed: ","Text area must have :rows option","\n","rows"].join('')));
}
} else {
}

if(cljs.core.truth_(expandable_QMARK_)){
if(cljs.core.truth_(expand_icon)){
} else {
throw (new Error(["Assert failed: ","No :expand-icon set!","\n","expand-icon"].join('')));
}
} else {
}

var _ = re_mdl.util.mdl_get_value.call(null,model);
var input_el = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__23598 = type;
var G__23598__$1 = (((G__23598 instanceof cljs.core.Keyword))?G__23598.fqn:null);
switch (G__23598__$1) {
case "text":
return new cljs.core.Keyword(null,"input","input",556931961);

break;
case "textarea":
return new cljs.core.Keyword(null,"textarea","textarea",-650375824);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__23598__$1)].join('')));

}
})(),cljs.core.merge.call(null,(function (){var G__23599 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"class","class",-2030961996),"mdl-textfield__input",new cljs.core.Keyword(null,"type","type",1174270348),input_type,new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (_,map__23596,map__23596__$1,args,invalid_message,disabled_QMARK_,expandable_QMARK_,floating_label_QMARK_,model,attr,pattern,children,input_attr,expand_icon,type,handler_fn,input_type,rows,label,id,class$){
return (function (p1__23595_SHARP_){
reagent.core.set_state.call(null,this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"update","update",1045576396),false], null));

return handler_fn.call(null,p1__23595_SHARP_.target.value);
});})(_,map__23596,map__23596__$1,args,invalid_message,disabled_QMARK_,expandable_QMARK_,floating_label_QMARK_,model,attr,pattern,children,input_attr,expand_icon,type,handler_fn,input_type,rows,label,id,class$))
], null);
var G__23599__$1 = ((cljs.core._EQ_.call(null,type,new cljs.core.Keyword(null,"textarea","textarea",-650375824)))?cljs.core.assoc.call(null,G__23599,new cljs.core.Keyword(null,"rows","rows",850049680),rows):G__23599);
var G__23599__$2 = (cljs.core.truth_(pattern)?cljs.core.assoc.call(null,G__23599__$1,new cljs.core.Keyword(null,"pattern","pattern",242135423),pattern):G__23599__$1);
if(cljs.core.truth_(disabled_QMARK_)){
return cljs.core.assoc.call(null,G__23599__$2,new cljs.core.Keyword(null,"disabled","disabled",-1529784218),true);
} else {
return G__23599__$2;
}
})(),input_attr)], null);
var label_el = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.mdl-textfield__label","label.mdl-textfield__label",-1621295497),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"for","for",-1323786319),id], null),label], null);
var error_el = (cljs.core.truth_(invalid_message)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.mdl-textfield__error","span.mdl-textfield__error",1028160522),invalid_message], null):null);
var body = (cljs.core.truth_(expandable_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_mdl.components.button.button,new cljs.core.Keyword(null,"el","el",-1618201118),new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"icon?","icon?",-1663815703),true,new cljs.core.Keyword(null,"for","for",-1323786319),id,new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.material-icons","i.material-icons",740058269),expand_icon], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.mdl-textfield__expandable-holder","div.mdl-textfield__expandable-holder",1501142439),input_el,label_el,error_el], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_el,label_el,error_el], null));
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["mdl-textfield mdl-js-textfield",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var and__3911__auto__ = class$;
if(cljs.core.truth_(and__3911__auto__)){
return [" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join('');
} else {
return and__3911__auto__;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var and__3911__auto__ = floating_label_QMARK_;
if(cljs.core.truth_(and__3911__auto__)){
return " mdl-textfield--floating-label";
} else {
return and__3911__auto__;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var and__3911__auto__ = expandable_QMARK_;
if(cljs.core.truth_(and__3911__auto__)){
return " mdl-textfield--expandable";
} else {
return and__3911__auto__;
}
})())].join('')], null),attr)], null),body);
});
re_mdl.components.textfield.textfield = (function re_mdl$components$textfield$textfield(var_args){
var args__4502__auto__ = [];
var len__4499__auto___23607 = arguments.length;
var i__4500__auto___23608 = (0);
while(true){
if((i__4500__auto___23608 < len__4499__auto___23607)){
args__4502__auto__.push((arguments[i__4500__auto___23608]));

var G__23609 = (i__4500__auto___23608 + (1));
i__4500__auto___23608 = G__23609;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return re_mdl.components.textfield.textfield.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

re_mdl.components.textfield.textfield.cljs$core$IFn$_invoke$arity$variadic = (function (p__23602){
var map__23603 = p__23602;
var map__23603__$1 = ((((!((map__23603 == null)))?(((((map__23603.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23603.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23603):map__23603);
var args = map__23603__$1;
var model = cljs.core.get.call(null,map__23603__$1,new cljs.core.Keyword(null,"model","model",331153215));
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"get-initial-state","get-initial-state",-4494070),((function (map__23603,map__23603__$1,args,model){
return (function (this$){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"update","update",1045576396),true], null);
});})(map__23603,map__23603__$1,args,model))
,new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),((function (map__23603,map__23603__$1,args,model){
return (function (this$){
var node = reagent.core.dom_node.call(null,this$);
var G__23605 = node;
re_mdl.util.mdl_init_BANG_.call(null,G__23605);

G__23605.MaterialTextfield.change(re_mdl.util.mdl_get_value.call(null,model));

return G__23605;
});})(map__23603,map__23603__$1,args,model))
,new cljs.core.Keyword(null,"component-did-update","component-did-update",-1468549173),((function (map__23603,map__23603__$1,args,model){
return (function (this$,_){
if(cljs.core.truth_(new cljs.core.Keyword(null,"update","update",1045576396).cljs$core$IFn$_invoke$arity$1(reagent.core.state.call(null,this$)))){
var G__23606 = reagent.core.dom_node.call(null,this$);
G__23606.MaterialTextfield.change(re_mdl.util.mdl_get_value.call(null,new cljs.core.Keyword(null,"model","model",331153215).cljs$core$IFn$_invoke$arity$1(re_mdl.util.mdl_get_props.call(null,reagent.core.argv.call(null,this$)))));

return G__23606;
} else {
return reagent.core.set_state.call(null,this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"update","update",1045576396),true], null));
}
});})(map__23603,map__23603__$1,args,model))
,new cljs.core.Keyword(null,"render","render",-1408033454),re_mdl.components.textfield.textfield_STAR_], null));
});

re_mdl.components.textfield.textfield.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
re_mdl.components.textfield.textfield.cljs$lang$applyTo = (function (seq23601){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23601));
});


//# sourceMappingURL=textfield.js.map?rel=1523640157408
