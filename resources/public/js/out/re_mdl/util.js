// Compiled by ClojureScript 1.10.238 {}
goog.provide('re_mdl.util');
goog.require('cljs.core');
goog.require('reagent.core');
/**
 * This will get the content of a model, be it atom or value.
 */
re_mdl.util.mdl_get_value = (function re_mdl$util$mdl_get_value(model){
if(((!((model == null)))?(((((model.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === model.cljs$core$IDeref$))))?true:(((!model.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,model):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,model))){
return cljs.core.deref.call(null,model);
} else {
return model;
}
});
/**
 * This will read in the new props to a componenet and return a map of them.
 */
re_mdl.util.mdl_get_props = (function re_mdl$util$mdl_get_props(props){
return cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.rest.call(null,props));
});
re_mdl.util.mdl_init_BANG_ = (function re_mdl$util$mdl_init_BANG_(elem){
return componentHandler.upgradeElement(elem);
});
re_mdl.util.mdl_init_mount = (function re_mdl$util$mdl_init_mount(this_component){
return re_mdl.util.mdl_init_BANG_.call(null,reagent.core.dom_node.call(null,this_component));
});
re_mdl.util.wrap_mdl = (function re_mdl$util$wrap_mdl(component){
return cljs.core.vary_meta.call(null,component,(function (meta_m){
return cljs.core.merge_with.call(null,cljs.core.juxt,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),re_mdl.util.mdl_init_mount,new cljs.core.Keyword(null,"component-did-update","component-did-update",-1468549173),re_mdl.util.mdl_init_mount], null));
}));
});
re_mdl.util.wrap_dialog_polyfill = (function re_mdl$util$wrap_dialog_polyfill(component){
return (function() { 
var G__22545__delegate = function (args){
var map__22543 = args;
var map__22543__$1 = ((((!((map__22543 == null)))?(((((map__22543.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22543.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22543):map__22543);
var cancel_fn = cljs.core.get.call(null,map__22543__$1,new cljs.core.Keyword(null,"cancel-fn","cancel-fn",-1063546886));
var cancel_fn__$1 = (function (){var or__3922__auto__ = cancel_fn;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return ((function (or__3922__auto__,map__22543,map__22543__$1,cancel_fn){
return (function (){
return console.warn("Unhandled cancel event for dialog.");
});
;})(or__3922__auto__,map__22543,map__22543__$1,cancel_fn))
}
})();
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.vary_meta.call(null,component,((function (map__22543,map__22543__$1,cancel_fn,cancel_fn__$1){
return (function (meta_m){
return cljs.core.merge_with.call(null,cljs.core.juxt,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),((function (map__22543,map__22543__$1,cancel_fn,cancel_fn__$1){
return (function (this$){
var node = reagent.core.dom_node.call(null,this$);
dialogPolyfill.registerDialog(node);

node.addEventListener("cancel",((function (node,map__22543,map__22543__$1,cancel_fn,cancel_fn__$1){
return (function (e){
e.preventDefault();

return cancel_fn__$1.call(null,e);
});})(node,map__22543,map__22543__$1,cancel_fn,cancel_fn__$1))
);

return node.showModal();
});})(map__22543,map__22543__$1,cancel_fn,cancel_fn__$1))
,new cljs.core.Keyword(null,"component-will-unmount","component-will-unmount",-2058314698),((function (map__22543,map__22543__$1,cancel_fn,cancel_fn__$1){
return (function (this$){
return reagent.core.dom_node.call(null,this$).close();
});})(map__22543,map__22543__$1,cancel_fn,cancel_fn__$1))
], null));
});})(map__22543,map__22543__$1,cancel_fn,cancel_fn__$1))
)], null),args);
};
var G__22545 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22546__i = 0, G__22546__a = new Array(arguments.length -  0);
while (G__22546__i < G__22546__a.length) {G__22546__a[G__22546__i] = arguments[G__22546__i + 0]; ++G__22546__i;}
  args = new cljs.core.IndexedSeq(G__22546__a,0,null);
} 
return G__22545__delegate.call(this,args);};
G__22545.cljs$lang$maxFixedArity = 0;
G__22545.cljs$lang$applyTo = (function (arglist__22547){
var args = cljs.core.seq(arglist__22547);
return G__22545__delegate(args);
});
G__22545.cljs$core$IFn$_invoke$arity$variadic = G__22545__delegate;
return G__22545;
})()
;
});

//# sourceMappingURL=util.js.map?rel=1523640155713
