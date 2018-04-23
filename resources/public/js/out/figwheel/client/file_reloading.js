// Compiled by ClojureScript 1.10.238 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('figwheel.client.utils');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.object');
goog.require('goog.net.jsloader');
goog.require('goog.html.legacyconversions');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.core.async');
goog.require('goog.async.Deferred');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__3922__auto__ = ((cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && ((((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string'))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372))));
if(or__3922__auto__){
return or__3922__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return goog.object.get(goog.dependencies_.nameToPath,ns);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return goog.object.get(goog.dependencies_.written,figwheel.client.file_reloading.name__GT_path.call(null,ns));
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__3922__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["cljs.nodejs",null,"goog",null,"cljs.core",null], null), null).call(null,name);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
var or__3922__auto____$1 = goog.string.startsWith("clojure.",name);
if(cljs.core.truth_(or__3922__auto____$1)){
return or__3922__auto____$1;
} else {
return goog.string.startsWith("goog.",name);
}
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__32663_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__32663_SHARP_));
}),goog.object.getKeys(goog.object.get(goog.dependencies_.requires,figwheel.client.file_reloading.name__GT_path.call(null,ns)))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([name]));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([parent_ns]));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__32664 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__32665 = null;
var count__32666 = (0);
var i__32667 = (0);
while(true){
if((i__32667 < count__32666)){
var n = cljs.core._nth.call(null,chunk__32665,i__32667);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__32668 = seq__32664;
var G__32669 = chunk__32665;
var G__32670 = count__32666;
var G__32671 = (i__32667 + (1));
seq__32664 = G__32668;
chunk__32665 = G__32669;
count__32666 = G__32670;
i__32667 = G__32671;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__32664);
if(temp__5457__auto__){
var seq__32664__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32664__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__32664__$1);
var G__32672 = cljs.core.chunk_rest.call(null,seq__32664__$1);
var G__32673 = c__4319__auto__;
var G__32674 = cljs.core.count.call(null,c__4319__auto__);
var G__32675 = (0);
seq__32664 = G__32672;
chunk__32665 = G__32673;
count__32666 = G__32674;
i__32667 = G__32675;
continue;
} else {
var n = cljs.core.first.call(null,seq__32664__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__32676 = cljs.core.next.call(null,seq__32664__$1);
var G__32677 = null;
var G__32678 = (0);
var G__32679 = (0);
seq__32664 = G__32676;
chunk__32665 = G__32677;
count__32666 = G__32678;
i__32667 = G__32679;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.in_upper_level_QMARK_ = (function figwheel$client$file_reloading$in_upper_level_QMARK_(topo_state,current_depth,dep){
return cljs.core.some.call(null,(function (p__32680){
var vec__32681 = p__32680;
var _ = cljs.core.nth.call(null,vec__32681,(0),null);
var v = cljs.core.nth.call(null,vec__32681,(1),null);
var and__3911__auto__ = v;
if(cljs.core.truth_(and__3911__auto__)){
return v.call(null,dep);
} else {
return and__3911__auto__;
}
}),cljs.core.filter.call(null,(function (p__32684){
var vec__32685 = p__32684;
var k = cljs.core.nth.call(null,vec__32685,(0),null);
var v = cljs.core.nth.call(null,vec__32685,(1),null);
return (k > current_depth);
}),topo_state));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__32697_32705 = cljs.core.seq.call(null,deps);
var chunk__32698_32706 = null;
var count__32699_32707 = (0);
var i__32700_32708 = (0);
while(true){
if((i__32700_32708 < count__32699_32707)){
var dep_32709 = cljs.core._nth.call(null,chunk__32698_32706,i__32700_32708);
if(cljs.core.truth_((function (){var and__3911__auto__ = dep_32709;
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_32709));
} else {
return and__3911__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_32709,(depth + (1)),state);
} else {
}


var G__32710 = seq__32697_32705;
var G__32711 = chunk__32698_32706;
var G__32712 = count__32699_32707;
var G__32713 = (i__32700_32708 + (1));
seq__32697_32705 = G__32710;
chunk__32698_32706 = G__32711;
count__32699_32707 = G__32712;
i__32700_32708 = G__32713;
continue;
} else {
var temp__5457__auto___32714 = cljs.core.seq.call(null,seq__32697_32705);
if(temp__5457__auto___32714){
var seq__32697_32715__$1 = temp__5457__auto___32714;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32697_32715__$1)){
var c__4319__auto___32716 = cljs.core.chunk_first.call(null,seq__32697_32715__$1);
var G__32717 = cljs.core.chunk_rest.call(null,seq__32697_32715__$1);
var G__32718 = c__4319__auto___32716;
var G__32719 = cljs.core.count.call(null,c__4319__auto___32716);
var G__32720 = (0);
seq__32697_32705 = G__32717;
chunk__32698_32706 = G__32718;
count__32699_32707 = G__32719;
i__32700_32708 = G__32720;
continue;
} else {
var dep_32721 = cljs.core.first.call(null,seq__32697_32715__$1);
if(cljs.core.truth_((function (){var and__3911__auto__ = dep_32721;
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_32721));
} else {
return and__3911__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_32721,(depth + (1)),state);
} else {
}


var G__32722 = cljs.core.next.call(null,seq__32697_32715__$1);
var G__32723 = null;
var G__32724 = (0);
var G__32725 = (0);
seq__32697_32705 = G__32722;
chunk__32698_32706 = G__32723;
count__32699_32707 = G__32724;
i__32700_32708 = G__32725;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__32701){
var vec__32702 = p__32701;
var seq__32703 = cljs.core.seq.call(null,vec__32702);
var first__32704 = cljs.core.first.call(null,seq__32703);
var seq__32703__$1 = cljs.core.next.call(null,seq__32703);
var x = first__32704;
var xs = seq__32703__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__32702,seq__32703,first__32704,seq__32703__$1,x,xs,get_deps__$1){
return (function (p1__32688_SHARP_){
return clojure.set.difference.call(null,p1__32688_SHARP_,x);
});})(vec__32702,seq__32703,first__32704,seq__32703__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,figwheel.client.file_reloading.immutable_ns_QMARK_),cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss)))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__32726 = cljs.core.seq.call(null,provides);
var chunk__32727 = null;
var count__32728 = (0);
var i__32729 = (0);
while(true){
if((i__32729 < count__32728)){
var prov = cljs.core._nth.call(null,chunk__32727,i__32729);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__32730_32738 = cljs.core.seq.call(null,requires);
var chunk__32731_32739 = null;
var count__32732_32740 = (0);
var i__32733_32741 = (0);
while(true){
if((i__32733_32741 < count__32732_32740)){
var req_32742 = cljs.core._nth.call(null,chunk__32731_32739,i__32733_32741);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_32742,prov);


var G__32743 = seq__32730_32738;
var G__32744 = chunk__32731_32739;
var G__32745 = count__32732_32740;
var G__32746 = (i__32733_32741 + (1));
seq__32730_32738 = G__32743;
chunk__32731_32739 = G__32744;
count__32732_32740 = G__32745;
i__32733_32741 = G__32746;
continue;
} else {
var temp__5457__auto___32747 = cljs.core.seq.call(null,seq__32730_32738);
if(temp__5457__auto___32747){
var seq__32730_32748__$1 = temp__5457__auto___32747;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32730_32748__$1)){
var c__4319__auto___32749 = cljs.core.chunk_first.call(null,seq__32730_32748__$1);
var G__32750 = cljs.core.chunk_rest.call(null,seq__32730_32748__$1);
var G__32751 = c__4319__auto___32749;
var G__32752 = cljs.core.count.call(null,c__4319__auto___32749);
var G__32753 = (0);
seq__32730_32738 = G__32750;
chunk__32731_32739 = G__32751;
count__32732_32740 = G__32752;
i__32733_32741 = G__32753;
continue;
} else {
var req_32754 = cljs.core.first.call(null,seq__32730_32748__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_32754,prov);


var G__32755 = cljs.core.next.call(null,seq__32730_32748__$1);
var G__32756 = null;
var G__32757 = (0);
var G__32758 = (0);
seq__32730_32738 = G__32755;
chunk__32731_32739 = G__32756;
count__32732_32740 = G__32757;
i__32733_32741 = G__32758;
continue;
}
} else {
}
}
break;
}


var G__32759 = seq__32726;
var G__32760 = chunk__32727;
var G__32761 = count__32728;
var G__32762 = (i__32729 + (1));
seq__32726 = G__32759;
chunk__32727 = G__32760;
count__32728 = G__32761;
i__32729 = G__32762;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__32726);
if(temp__5457__auto__){
var seq__32726__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32726__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__32726__$1);
var G__32763 = cljs.core.chunk_rest.call(null,seq__32726__$1);
var G__32764 = c__4319__auto__;
var G__32765 = cljs.core.count.call(null,c__4319__auto__);
var G__32766 = (0);
seq__32726 = G__32763;
chunk__32727 = G__32764;
count__32728 = G__32765;
i__32729 = G__32766;
continue;
} else {
var prov = cljs.core.first.call(null,seq__32726__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__32734_32767 = cljs.core.seq.call(null,requires);
var chunk__32735_32768 = null;
var count__32736_32769 = (0);
var i__32737_32770 = (0);
while(true){
if((i__32737_32770 < count__32736_32769)){
var req_32771 = cljs.core._nth.call(null,chunk__32735_32768,i__32737_32770);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_32771,prov);


var G__32772 = seq__32734_32767;
var G__32773 = chunk__32735_32768;
var G__32774 = count__32736_32769;
var G__32775 = (i__32737_32770 + (1));
seq__32734_32767 = G__32772;
chunk__32735_32768 = G__32773;
count__32736_32769 = G__32774;
i__32737_32770 = G__32775;
continue;
} else {
var temp__5457__auto___32776__$1 = cljs.core.seq.call(null,seq__32734_32767);
if(temp__5457__auto___32776__$1){
var seq__32734_32777__$1 = temp__5457__auto___32776__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32734_32777__$1)){
var c__4319__auto___32778 = cljs.core.chunk_first.call(null,seq__32734_32777__$1);
var G__32779 = cljs.core.chunk_rest.call(null,seq__32734_32777__$1);
var G__32780 = c__4319__auto___32778;
var G__32781 = cljs.core.count.call(null,c__4319__auto___32778);
var G__32782 = (0);
seq__32734_32767 = G__32779;
chunk__32735_32768 = G__32780;
count__32736_32769 = G__32781;
i__32737_32770 = G__32782;
continue;
} else {
var req_32783 = cljs.core.first.call(null,seq__32734_32777__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_32783,prov);


var G__32784 = cljs.core.next.call(null,seq__32734_32777__$1);
var G__32785 = null;
var G__32786 = (0);
var G__32787 = (0);
seq__32734_32767 = G__32784;
chunk__32735_32768 = G__32785;
count__32736_32769 = G__32786;
i__32737_32770 = G__32787;
continue;
}
} else {
}
}
break;
}


var G__32788 = cljs.core.next.call(null,seq__32726__$1);
var G__32789 = null;
var G__32790 = (0);
var G__32791 = (0);
seq__32726 = G__32788;
chunk__32727 = G__32789;
count__32728 = G__32790;
i__32729 = G__32791;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel.client.file_reloading.figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__32792_32796 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__32793_32797 = null;
var count__32794_32798 = (0);
var i__32795_32799 = (0);
while(true){
if((i__32795_32799 < count__32794_32798)){
var ns_32800 = cljs.core._nth.call(null,chunk__32793_32797,i__32795_32799);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_32800);


var G__32801 = seq__32792_32796;
var G__32802 = chunk__32793_32797;
var G__32803 = count__32794_32798;
var G__32804 = (i__32795_32799 + (1));
seq__32792_32796 = G__32801;
chunk__32793_32797 = G__32802;
count__32794_32798 = G__32803;
i__32795_32799 = G__32804;
continue;
} else {
var temp__5457__auto___32805 = cljs.core.seq.call(null,seq__32792_32796);
if(temp__5457__auto___32805){
var seq__32792_32806__$1 = temp__5457__auto___32805;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32792_32806__$1)){
var c__4319__auto___32807 = cljs.core.chunk_first.call(null,seq__32792_32806__$1);
var G__32808 = cljs.core.chunk_rest.call(null,seq__32792_32806__$1);
var G__32809 = c__4319__auto___32807;
var G__32810 = cljs.core.count.call(null,c__4319__auto___32807);
var G__32811 = (0);
seq__32792_32796 = G__32808;
chunk__32793_32797 = G__32809;
count__32794_32798 = G__32810;
i__32795_32799 = G__32811;
continue;
} else {
var ns_32812 = cljs.core.first.call(null,seq__32792_32806__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_32812);


var G__32813 = cljs.core.next.call(null,seq__32792_32806__$1);
var G__32814 = null;
var G__32815 = (0);
var G__32816 = (0);
seq__32792_32796 = G__32813;
chunk__32793_32797 = G__32814;
count__32794_32798 = G__32815;
i__32795_32799 = G__32816;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__3922__auto__ = goog.require__;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__32817__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__32817 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__32818__i = 0, G__32818__a = new Array(arguments.length -  0);
while (G__32818__i < G__32818__a.length) {G__32818__a[G__32818__i] = arguments[G__32818__i + 0]; ++G__32818__i;}
  args = new cljs.core.IndexedSeq(G__32818__a,0,null);
} 
return G__32817__delegate.call(this,args);};
G__32817.cljs$lang$maxFixedArity = 0;
G__32817.cljs$lang$applyTo = (function (arglist__32819){
var args = cljs.core.seq(arglist__32819);
return G__32817__delegate(args);
});
G__32817.cljs$core$IFn$_invoke$arity$variadic = G__32817__delegate;
return G__32817;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
return (
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});
figwheel.client.file_reloading.gloader = ((typeof goog.net.jsloader.safeLoad !== 'undefined')?(function (p1__32820_SHARP_,p2__32821_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__32820_SHARP_)].join('')),p2__32821_SHARP_);
}):((typeof goog.net.jsloader.load !== 'undefined')?(function (p1__32822_SHARP_,p2__32823_SHARP_){
return goog.net.jsloader.load([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__32822_SHARP_)].join(''),p2__32823_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__32824 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__32824.addCallback(((function (G__32824){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__32824))
);

G__32824.addErrback(((function (G__32824){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__32824))
);

return G__32824;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e32825){if((e32825 instanceof Error)){
var e = e32825;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e32825;

}
}})());
});
goog.exportSymbol('figwheel.client.file_reloading.worker_import_script', figwheel.client.file_reloading.worker_import_script);
figwheel.client.file_reloading.create_node_script_import_fn = (function figwheel$client$file_reloading$create_node_script_import_fn(){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e32826){if((e32826 instanceof Error)){
var e = e32826;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e32826;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path))
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__32827 = cljs.core._EQ_;
var expr__32828 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__32827.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__32828))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__32827.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__32828))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__32827.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__32828))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return ((function (pred__32827,expr__32828){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__32827,expr__32828))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__32830,callback){
var map__32831 = p__32830;
var map__32831__$1 = ((((!((map__32831 == null)))?(((((map__32831.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32831.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32831):map__32831);
var file_msg = map__32831__$1;
var request_url = cljs.core.get.call(null,map__32831__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__3922__auto__ = goog.object.get(goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return figwheel.client.file_reloading.reload_file_STAR_;
}
})().call(null,request_url,((function (map__32831,map__32831__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__32831,map__32831__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__28153__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28153__auto__){
return (function (){
var f__28154__auto__ = (function (){var switch__27996__auto__ = ((function (c__28153__auto__){
return (function (state_32869){
var state_val_32870 = (state_32869[(1)]);
if((state_val_32870 === (7))){
var inst_32865 = (state_32869[(2)]);
var state_32869__$1 = state_32869;
var statearr_32871_32897 = state_32869__$1;
(statearr_32871_32897[(2)] = inst_32865);

(statearr_32871_32897[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32870 === (1))){
var state_32869__$1 = state_32869;
var statearr_32872_32898 = state_32869__$1;
(statearr_32872_32898[(2)] = null);

(statearr_32872_32898[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32870 === (4))){
var inst_32835 = (state_32869[(7)]);
var inst_32835__$1 = (state_32869[(2)]);
var state_32869__$1 = (function (){var statearr_32873 = state_32869;
(statearr_32873[(7)] = inst_32835__$1);

return statearr_32873;
})();
if(cljs.core.truth_(inst_32835__$1)){
var statearr_32874_32899 = state_32869__$1;
(statearr_32874_32899[(1)] = (5));

} else {
var statearr_32875_32900 = state_32869__$1;
(statearr_32875_32900[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32870 === (15))){
var inst_32850 = (state_32869[(8)]);
var inst_32848 = (state_32869[(9)]);
var inst_32852 = inst_32850.call(null,inst_32848);
var state_32869__$1 = state_32869;
var statearr_32876_32901 = state_32869__$1;
(statearr_32876_32901[(2)] = inst_32852);

(statearr_32876_32901[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32870 === (13))){
var inst_32859 = (state_32869[(2)]);
var state_32869__$1 = state_32869;
var statearr_32877_32902 = state_32869__$1;
(statearr_32877_32902[(2)] = inst_32859);

(statearr_32877_32902[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32870 === (6))){
var state_32869__$1 = state_32869;
var statearr_32878_32903 = state_32869__$1;
(statearr_32878_32903[(2)] = null);

(statearr_32878_32903[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32870 === (17))){
var inst_32856 = (state_32869[(2)]);
var state_32869__$1 = state_32869;
var statearr_32879_32904 = state_32869__$1;
(statearr_32879_32904[(2)] = inst_32856);

(statearr_32879_32904[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32870 === (3))){
var inst_32867 = (state_32869[(2)]);
var state_32869__$1 = state_32869;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32869__$1,inst_32867);
} else {
if((state_val_32870 === (12))){
var state_32869__$1 = state_32869;
var statearr_32880_32905 = state_32869__$1;
(statearr_32880_32905[(2)] = null);

(statearr_32880_32905[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32870 === (2))){
var state_32869__$1 = state_32869;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32869__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_32870 === (11))){
var inst_32840 = (state_32869[(10)]);
var inst_32846 = figwheel.client.file_reloading.blocking_load.call(null,inst_32840);
var state_32869__$1 = state_32869;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32869__$1,(14),inst_32846);
} else {
if((state_val_32870 === (9))){
var inst_32840 = (state_32869[(10)]);
var state_32869__$1 = state_32869;
if(cljs.core.truth_(inst_32840)){
var statearr_32881_32906 = state_32869__$1;
(statearr_32881_32906[(1)] = (11));

} else {
var statearr_32882_32907 = state_32869__$1;
(statearr_32882_32907[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32870 === (5))){
var inst_32835 = (state_32869[(7)]);
var inst_32841 = (state_32869[(11)]);
var inst_32840 = cljs.core.nth.call(null,inst_32835,(0),null);
var inst_32841__$1 = cljs.core.nth.call(null,inst_32835,(1),null);
var state_32869__$1 = (function (){var statearr_32883 = state_32869;
(statearr_32883[(10)] = inst_32840);

(statearr_32883[(11)] = inst_32841__$1);

return statearr_32883;
})();
if(cljs.core.truth_(inst_32841__$1)){
var statearr_32884_32908 = state_32869__$1;
(statearr_32884_32908[(1)] = (8));

} else {
var statearr_32885_32909 = state_32869__$1;
(statearr_32885_32909[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32870 === (14))){
var inst_32850 = (state_32869[(8)]);
var inst_32840 = (state_32869[(10)]);
var inst_32848 = (state_32869[(2)]);
var inst_32849 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_32850__$1 = cljs.core.get.call(null,inst_32849,inst_32840);
var state_32869__$1 = (function (){var statearr_32886 = state_32869;
(statearr_32886[(8)] = inst_32850__$1);

(statearr_32886[(9)] = inst_32848);

return statearr_32886;
})();
if(cljs.core.truth_(inst_32850__$1)){
var statearr_32887_32910 = state_32869__$1;
(statearr_32887_32910[(1)] = (15));

} else {
var statearr_32888_32911 = state_32869__$1;
(statearr_32888_32911[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32870 === (16))){
var inst_32848 = (state_32869[(9)]);
var inst_32854 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_32848);
var state_32869__$1 = state_32869;
var statearr_32889_32912 = state_32869__$1;
(statearr_32889_32912[(2)] = inst_32854);

(statearr_32889_32912[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32870 === (10))){
var inst_32861 = (state_32869[(2)]);
var state_32869__$1 = (function (){var statearr_32890 = state_32869;
(statearr_32890[(12)] = inst_32861);

return statearr_32890;
})();
var statearr_32891_32913 = state_32869__$1;
(statearr_32891_32913[(2)] = null);

(statearr_32891_32913[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32870 === (8))){
var inst_32841 = (state_32869[(11)]);
var inst_32843 = eval(inst_32841);
var state_32869__$1 = state_32869;
var statearr_32892_32914 = state_32869__$1;
(statearr_32892_32914[(2)] = inst_32843);

(statearr_32892_32914[(1)] = (10));


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
});})(c__28153__auto__))
;
return ((function (switch__27996__auto__,c__28153__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__27997__auto__ = null;
var figwheel$client$file_reloading$state_machine__27997__auto____0 = (function (){
var statearr_32893 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32893[(0)] = figwheel$client$file_reloading$state_machine__27997__auto__);

(statearr_32893[(1)] = (1));

return statearr_32893;
});
var figwheel$client$file_reloading$state_machine__27997__auto____1 = (function (state_32869){
while(true){
var ret_value__27998__auto__ = (function (){try{while(true){
var result__27999__auto__ = switch__27996__auto__.call(null,state_32869);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27999__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27999__auto__;
}
break;
}
}catch (e32894){if((e32894 instanceof Object)){
var ex__28000__auto__ = e32894;
var statearr_32895_32915 = state_32869;
(statearr_32895_32915[(5)] = ex__28000__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32869);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32894;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27998__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32916 = state_32869;
state_32869 = G__32916;
continue;
} else {
return ret_value__27998__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__27997__auto__ = function(state_32869){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__27997__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__27997__auto____1.call(this,state_32869);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$state_machine__27997__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__27997__auto____0;
figwheel$client$file_reloading$state_machine__27997__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__27997__auto____1;
return figwheel$client$file_reloading$state_machine__27997__auto__;
})()
;})(switch__27996__auto__,c__28153__auto__))
})();
var state__28155__auto__ = (function (){var statearr_32896 = f__28154__auto__.call(null);
(statearr_32896[(6)] = c__28153__auto__);

return statearr_32896;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28155__auto__);
});})(c__28153__auto__))
);

return c__28153__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__32918 = arguments.length;
switch (G__32918) {
case 1:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1 = (function (url){
return figwheel.client.file_reloading.queued_file_reload.call(null,url,null);
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2 = (function (url,opt_source_text){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [url,opt_source_text], null));
});

figwheel.client.file_reloading.queued_file_reload.cljs$lang$maxFixedArity = 2;

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__32920,callback){
var map__32921 = p__32920;
var map__32921__$1 = ((((!((map__32921 == null)))?(((((map__32921.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32921.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32921):map__32921);
var file_msg = map__32921__$1;
var namespace = cljs.core.get.call(null,map__32921__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__32921,map__32921__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__32921,map__32921__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__32923){
var map__32924 = p__32923;
var map__32924__$1 = ((((!((map__32924 == null)))?(((((map__32924.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32924.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32924):map__32924);
var file_msg = map__32924__$1;
var namespace = cljs.core.get.call(null,map__32924__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.ns_exists_QMARK_ = (function figwheel$client$file_reloading$ns_exists_QMARK_(namespace){
return !((cljs.core.reduce.call(null,cljs.core.fnil.call(null,goog.object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,namespace),".")) == null));
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__32926){
var map__32927 = p__32926;
var map__32927__$1 = ((((!((map__32927 == null)))?(((((map__32927.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32927.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32927):map__32927);
var file_msg = map__32927__$1;
var namespace = cljs.core.get.call(null,map__32927__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__3911__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__3911__auto__){
var or__3922__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
var or__3922__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__3922__auto____$1)){
return or__3922__auto____$1;
} else {
var or__3922__auto____$2 = figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
if(cljs.core.truth_(or__3922__auto____$2)){
return or__3922__auto____$2;
} else {
return figwheel.client.file_reloading.ns_exists_QMARK_.call(null,namespace);
}
}
}
} else {
return and__3911__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__32929,callback){
var map__32930 = p__32929;
var map__32930__$1 = ((((!((map__32930 == null)))?(((((map__32930.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32930.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32930):map__32930);
var file_msg = map__32930__$1;
var request_url = cljs.core.get.call(null,map__32930__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__32930__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,["Figwheel: Not trying to load file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__28153__auto___32980 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28153__auto___32980,out){
return (function (){
var f__28154__auto__ = (function (){var switch__27996__auto__ = ((function (c__28153__auto___32980,out){
return (function (state_32965){
var state_val_32966 = (state_32965[(1)]);
if((state_val_32966 === (1))){
var inst_32939 = cljs.core.seq.call(null,files);
var inst_32940 = cljs.core.first.call(null,inst_32939);
var inst_32941 = cljs.core.next.call(null,inst_32939);
var inst_32942 = files;
var state_32965__$1 = (function (){var statearr_32967 = state_32965;
(statearr_32967[(7)] = inst_32941);

(statearr_32967[(8)] = inst_32942);

(statearr_32967[(9)] = inst_32940);

return statearr_32967;
})();
var statearr_32968_32981 = state_32965__$1;
(statearr_32968_32981[(2)] = null);

(statearr_32968_32981[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32966 === (2))){
var inst_32942 = (state_32965[(8)]);
var inst_32948 = (state_32965[(10)]);
var inst_32947 = cljs.core.seq.call(null,inst_32942);
var inst_32948__$1 = cljs.core.first.call(null,inst_32947);
var inst_32949 = cljs.core.next.call(null,inst_32947);
var inst_32950 = (inst_32948__$1 == null);
var inst_32951 = cljs.core.not.call(null,inst_32950);
var state_32965__$1 = (function (){var statearr_32969 = state_32965;
(statearr_32969[(10)] = inst_32948__$1);

(statearr_32969[(11)] = inst_32949);

return statearr_32969;
})();
if(inst_32951){
var statearr_32970_32982 = state_32965__$1;
(statearr_32970_32982[(1)] = (4));

} else {
var statearr_32971_32983 = state_32965__$1;
(statearr_32971_32983[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32966 === (3))){
var inst_32963 = (state_32965[(2)]);
var state_32965__$1 = state_32965;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32965__$1,inst_32963);
} else {
if((state_val_32966 === (4))){
var inst_32948 = (state_32965[(10)]);
var inst_32953 = figwheel.client.file_reloading.reload_js_file.call(null,inst_32948);
var state_32965__$1 = state_32965;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32965__$1,(7),inst_32953);
} else {
if((state_val_32966 === (5))){
var inst_32959 = cljs.core.async.close_BANG_.call(null,out);
var state_32965__$1 = state_32965;
var statearr_32972_32984 = state_32965__$1;
(statearr_32972_32984[(2)] = inst_32959);

(statearr_32972_32984[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32966 === (6))){
var inst_32961 = (state_32965[(2)]);
var state_32965__$1 = state_32965;
var statearr_32973_32985 = state_32965__$1;
(statearr_32973_32985[(2)] = inst_32961);

(statearr_32973_32985[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32966 === (7))){
var inst_32949 = (state_32965[(11)]);
var inst_32955 = (state_32965[(2)]);
var inst_32956 = cljs.core.async.put_BANG_.call(null,out,inst_32955);
var inst_32942 = inst_32949;
var state_32965__$1 = (function (){var statearr_32974 = state_32965;
(statearr_32974[(8)] = inst_32942);

(statearr_32974[(12)] = inst_32956);

return statearr_32974;
})();
var statearr_32975_32986 = state_32965__$1;
(statearr_32975_32986[(2)] = null);

(statearr_32975_32986[(1)] = (2));


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
});})(c__28153__auto___32980,out))
;
return ((function (switch__27996__auto__,c__28153__auto___32980,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__27997__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__27997__auto____0 = (function (){
var statearr_32976 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32976[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__27997__auto__);

(statearr_32976[(1)] = (1));

return statearr_32976;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__27997__auto____1 = (function (state_32965){
while(true){
var ret_value__27998__auto__ = (function (){try{while(true){
var result__27999__auto__ = switch__27996__auto__.call(null,state_32965);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27999__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27999__auto__;
}
break;
}
}catch (e32977){if((e32977 instanceof Object)){
var ex__28000__auto__ = e32977;
var statearr_32978_32987 = state_32965;
(statearr_32978_32987[(5)] = ex__28000__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32965);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32977;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27998__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32988 = state_32965;
state_32965 = G__32988;
continue;
} else {
return ret_value__27998__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__27997__auto__ = function(state_32965){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__27997__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__27997__auto____1.call(this,state_32965);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__27997__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__27997__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__27997__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__27997__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__27997__auto__;
})()
;})(switch__27996__auto__,c__28153__auto___32980,out))
})();
var state__28155__auto__ = (function (){var statearr_32979 = f__28154__auto__.call(null);
(statearr_32979[(6)] = c__28153__auto___32980);

return statearr_32979;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28155__auto__);
});})(c__28153__auto___32980,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__32989,opts){
var map__32990 = p__32989;
var map__32990__$1 = ((((!((map__32990 == null)))?(((((map__32990.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32990.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32990):map__32990);
var eval_body = cljs.core.get.call(null,map__32990__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__32990__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__3911__auto__ = eval_body;
if(cljs.core.truth_(and__3911__auto__)){
return typeof eval_body === 'string';
} else {
return and__3911__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,["Evaling file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e32992){var e = e32992;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Unable to evaluate ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__5455__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__32993_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__32993_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__5455__auto__)){
var file_msg = temp__5455__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__32994){
var vec__32995 = p__32994;
var k = cljs.core.nth.call(null,vec__32995,(0),null);
var v = cljs.core.nth.call(null,vec__32995,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__32998){
var vec__32999 = p__32998;
var k = cljs.core.nth.call(null,vec__32999,(0),null);
var v = cljs.core.nth.call(null,vec__32999,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__33005,p__33006){
var map__33007 = p__33005;
var map__33007__$1 = ((((!((map__33007 == null)))?(((((map__33007.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33007.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33007):map__33007);
var opts = map__33007__$1;
var before_jsload = cljs.core.get.call(null,map__33007__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__33007__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__33007__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__33008 = p__33006;
var map__33008__$1 = ((((!((map__33008 == null)))?(((((map__33008.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33008.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33008):map__33008);
var msg = map__33008__$1;
var files = cljs.core.get.call(null,map__33008__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__33008__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__33008__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__28153__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28153__auto__,map__33007,map__33007__$1,opts,before_jsload,on_jsload,reload_dependents,map__33008,map__33008__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__28154__auto__ = (function (){var switch__27996__auto__ = ((function (c__28153__auto__,map__33007,map__33007__$1,opts,before_jsload,on_jsload,reload_dependents,map__33008,map__33008__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_33162){
var state_val_33163 = (state_33162[(1)]);
if((state_val_33163 === (7))){
var inst_33025 = (state_33162[(7)]);
var inst_33022 = (state_33162[(8)]);
var inst_33024 = (state_33162[(9)]);
var inst_33023 = (state_33162[(10)]);
var inst_33030 = cljs.core._nth.call(null,inst_33023,inst_33025);
var inst_33031 = figwheel.client.file_reloading.eval_body.call(null,inst_33030,opts);
var inst_33032 = (inst_33025 + (1));
var tmp33164 = inst_33022;
var tmp33165 = inst_33024;
var tmp33166 = inst_33023;
var inst_33022__$1 = tmp33164;
var inst_33023__$1 = tmp33166;
var inst_33024__$1 = tmp33165;
var inst_33025__$1 = inst_33032;
var state_33162__$1 = (function (){var statearr_33167 = state_33162;
(statearr_33167[(7)] = inst_33025__$1);

(statearr_33167[(11)] = inst_33031);

(statearr_33167[(8)] = inst_33022__$1);

(statearr_33167[(9)] = inst_33024__$1);

(statearr_33167[(10)] = inst_33023__$1);

return statearr_33167;
})();
var statearr_33168_33251 = state_33162__$1;
(statearr_33168_33251[(2)] = null);

(statearr_33168_33251[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33163 === (20))){
var inst_33065 = (state_33162[(12)]);
var inst_33073 = figwheel.client.file_reloading.sort_files.call(null,inst_33065);
var state_33162__$1 = state_33162;
var statearr_33169_33252 = state_33162__$1;
(statearr_33169_33252[(2)] = inst_33073);

(statearr_33169_33252[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33163 === (27))){
var state_33162__$1 = state_33162;
var statearr_33170_33253 = state_33162__$1;
(statearr_33170_33253[(2)] = null);

(statearr_33170_33253[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33163 === (1))){
var inst_33014 = (state_33162[(13)]);
var inst_33011 = before_jsload.call(null,files);
var inst_33012 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_33013 = (function (){return ((function (inst_33014,inst_33011,inst_33012,state_val_33163,c__28153__auto__,map__33007,map__33007__$1,opts,before_jsload,on_jsload,reload_dependents,map__33008,map__33008__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__33002_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__33002_SHARP_);
});
;})(inst_33014,inst_33011,inst_33012,state_val_33163,c__28153__auto__,map__33007,map__33007__$1,opts,before_jsload,on_jsload,reload_dependents,map__33008,map__33008__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_33014__$1 = cljs.core.filter.call(null,inst_33013,files);
var inst_33015 = cljs.core.not_empty.call(null,inst_33014__$1);
var state_33162__$1 = (function (){var statearr_33171 = state_33162;
(statearr_33171[(13)] = inst_33014__$1);

(statearr_33171[(14)] = inst_33012);

(statearr_33171[(15)] = inst_33011);

return statearr_33171;
})();
if(cljs.core.truth_(inst_33015)){
var statearr_33172_33254 = state_33162__$1;
(statearr_33172_33254[(1)] = (2));

} else {
var statearr_33173_33255 = state_33162__$1;
(statearr_33173_33255[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33163 === (24))){
var state_33162__$1 = state_33162;
var statearr_33174_33256 = state_33162__$1;
(statearr_33174_33256[(2)] = null);

(statearr_33174_33256[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33163 === (39))){
var inst_33115 = (state_33162[(16)]);
var state_33162__$1 = state_33162;
var statearr_33175_33257 = state_33162__$1;
(statearr_33175_33257[(2)] = inst_33115);

(statearr_33175_33257[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33163 === (46))){
var inst_33157 = (state_33162[(2)]);
var state_33162__$1 = state_33162;
var statearr_33176_33258 = state_33162__$1;
(statearr_33176_33258[(2)] = inst_33157);

(statearr_33176_33258[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33163 === (4))){
var inst_33059 = (state_33162[(2)]);
var inst_33060 = cljs.core.List.EMPTY;
var inst_33061 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_33060);
var inst_33062 = (function (){return ((function (inst_33059,inst_33060,inst_33061,state_val_33163,c__28153__auto__,map__33007,map__33007__$1,opts,before_jsload,on_jsload,reload_dependents,map__33008,map__33008__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__33003_SHARP_){
var and__3911__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__33003_SHARP_);
if(cljs.core.truth_(and__3911__auto__)){
return ((cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__33003_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__33003_SHARP_))));
} else {
return and__3911__auto__;
}
});
;})(inst_33059,inst_33060,inst_33061,state_val_33163,c__28153__auto__,map__33007,map__33007__$1,opts,before_jsload,on_jsload,reload_dependents,map__33008,map__33008__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_33063 = cljs.core.filter.call(null,inst_33062,files);
var inst_33064 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_33065 = cljs.core.concat.call(null,inst_33063,inst_33064);
var state_33162__$1 = (function (){var statearr_33177 = state_33162;
(statearr_33177[(12)] = inst_33065);

(statearr_33177[(17)] = inst_33061);

(statearr_33177[(18)] = inst_33059);

return statearr_33177;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_33178_33259 = state_33162__$1;
(statearr_33178_33259[(1)] = (16));

} else {
var statearr_33179_33260 = state_33162__$1;
(statearr_33179_33260[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33163 === (15))){
var inst_33049 = (state_33162[(2)]);
var state_33162__$1 = state_33162;
var statearr_33180_33261 = state_33162__$1;
(statearr_33180_33261[(2)] = inst_33049);

(statearr_33180_33261[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33163 === (21))){
var inst_33075 = (state_33162[(19)]);
var inst_33075__$1 = (state_33162[(2)]);
var inst_33076 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_33075__$1);
var state_33162__$1 = (function (){var statearr_33181 = state_33162;
(statearr_33181[(19)] = inst_33075__$1);

return statearr_33181;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33162__$1,(22),inst_33076);
} else {
if((state_val_33163 === (31))){
var inst_33160 = (state_33162[(2)]);
var state_33162__$1 = state_33162;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33162__$1,inst_33160);
} else {
if((state_val_33163 === (32))){
var inst_33115 = (state_33162[(16)]);
var inst_33120 = inst_33115.cljs$lang$protocol_mask$partition0$;
var inst_33121 = (inst_33120 & (64));
var inst_33122 = inst_33115.cljs$core$ISeq$;
var inst_33123 = (cljs.core.PROTOCOL_SENTINEL === inst_33122);
var inst_33124 = ((inst_33121) || (inst_33123));
var state_33162__$1 = state_33162;
if(cljs.core.truth_(inst_33124)){
var statearr_33182_33262 = state_33162__$1;
(statearr_33182_33262[(1)] = (35));

} else {
var statearr_33183_33263 = state_33162__$1;
(statearr_33183_33263[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33163 === (40))){
var inst_33137 = (state_33162[(20)]);
var inst_33136 = (state_33162[(2)]);
var inst_33137__$1 = cljs.core.get.call(null,inst_33136,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_33138 = cljs.core.get.call(null,inst_33136,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_33139 = cljs.core.not_empty.call(null,inst_33137__$1);
var state_33162__$1 = (function (){var statearr_33184 = state_33162;
(statearr_33184[(20)] = inst_33137__$1);

(statearr_33184[(21)] = inst_33138);

return statearr_33184;
})();
if(cljs.core.truth_(inst_33139)){
var statearr_33185_33264 = state_33162__$1;
(statearr_33185_33264[(1)] = (41));

} else {
var statearr_33186_33265 = state_33162__$1;
(statearr_33186_33265[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33163 === (33))){
var state_33162__$1 = state_33162;
var statearr_33187_33266 = state_33162__$1;
(statearr_33187_33266[(2)] = false);

(statearr_33187_33266[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33163 === (13))){
var inst_33035 = (state_33162[(22)]);
var inst_33039 = cljs.core.chunk_first.call(null,inst_33035);
var inst_33040 = cljs.core.chunk_rest.call(null,inst_33035);
var inst_33041 = cljs.core.count.call(null,inst_33039);
var inst_33022 = inst_33040;
var inst_33023 = inst_33039;
var inst_33024 = inst_33041;
var inst_33025 = (0);
var state_33162__$1 = (function (){var statearr_33188 = state_33162;
(statearr_33188[(7)] = inst_33025);

(statearr_33188[(8)] = inst_33022);

(statearr_33188[(9)] = inst_33024);

(statearr_33188[(10)] = inst_33023);

return statearr_33188;
})();
var statearr_33189_33267 = state_33162__$1;
(statearr_33189_33267[(2)] = null);

(statearr_33189_33267[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33163 === (22))){
var inst_33083 = (state_33162[(23)]);
var inst_33078 = (state_33162[(24)]);
var inst_33075 = (state_33162[(19)]);
var inst_33079 = (state_33162[(25)]);
var inst_33078__$1 = (state_33162[(2)]);
var inst_33079__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_33078__$1);
var inst_33080 = (function (){var all_files = inst_33075;
var res_SINGLEQUOTE_ = inst_33078__$1;
var res = inst_33079__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_33083,inst_33078,inst_33075,inst_33079,inst_33078__$1,inst_33079__$1,state_val_33163,c__28153__auto__,map__33007,map__33007__$1,opts,before_jsload,on_jsload,reload_dependents,map__33008,map__33008__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__33004_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__33004_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_33083,inst_33078,inst_33075,inst_33079,inst_33078__$1,inst_33079__$1,state_val_33163,c__28153__auto__,map__33007,map__33007__$1,opts,before_jsload,on_jsload,reload_dependents,map__33008,map__33008__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_33081 = cljs.core.filter.call(null,inst_33080,inst_33078__$1);
var inst_33082 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_33083__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_33082);
var inst_33084 = cljs.core.not_empty.call(null,inst_33083__$1);
var state_33162__$1 = (function (){var statearr_33190 = state_33162;
(statearr_33190[(23)] = inst_33083__$1);

(statearr_33190[(26)] = inst_33081);

(statearr_33190[(24)] = inst_33078__$1);

(statearr_33190[(25)] = inst_33079__$1);

return statearr_33190;
})();
if(cljs.core.truth_(inst_33084)){
var statearr_33191_33268 = state_33162__$1;
(statearr_33191_33268[(1)] = (23));

} else {
var statearr_33192_33269 = state_33162__$1;
(statearr_33192_33269[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33163 === (36))){
var state_33162__$1 = state_33162;
var statearr_33193_33270 = state_33162__$1;
(statearr_33193_33270[(2)] = false);

(statearr_33193_33270[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33163 === (41))){
var inst_33137 = (state_33162[(20)]);
var inst_33141 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_33142 = cljs.core.map.call(null,inst_33141,inst_33137);
var inst_33143 = cljs.core.pr_str.call(null,inst_33142);
var inst_33144 = ["figwheel-no-load meta-data: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_33143)].join('');
var inst_33145 = figwheel.client.utils.log.call(null,inst_33144);
var state_33162__$1 = state_33162;
var statearr_33194_33271 = state_33162__$1;
(statearr_33194_33271[(2)] = inst_33145);

(statearr_33194_33271[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33163 === (43))){
var inst_33138 = (state_33162[(21)]);
var inst_33148 = (state_33162[(2)]);
var inst_33149 = cljs.core.not_empty.call(null,inst_33138);
var state_33162__$1 = (function (){var statearr_33195 = state_33162;
(statearr_33195[(27)] = inst_33148);

return statearr_33195;
})();
if(cljs.core.truth_(inst_33149)){
var statearr_33196_33272 = state_33162__$1;
(statearr_33196_33272[(1)] = (44));

} else {
var statearr_33197_33273 = state_33162__$1;
(statearr_33197_33273[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33163 === (29))){
var inst_33083 = (state_33162[(23)]);
var inst_33081 = (state_33162[(26)]);
var inst_33115 = (state_33162[(16)]);
var inst_33078 = (state_33162[(24)]);
var inst_33075 = (state_33162[(19)]);
var inst_33079 = (state_33162[(25)]);
var inst_33111 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_33114 = (function (){var all_files = inst_33075;
var res_SINGLEQUOTE_ = inst_33078;
var res = inst_33079;
var files_not_loaded = inst_33081;
var dependencies_that_loaded = inst_33083;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_33083,inst_33081,inst_33115,inst_33078,inst_33075,inst_33079,inst_33111,state_val_33163,c__28153__auto__,map__33007,map__33007__$1,opts,before_jsload,on_jsload,reload_dependents,map__33008,map__33008__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__33113){
var map__33198 = p__33113;
var map__33198__$1 = ((((!((map__33198 == null)))?(((((map__33198.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33198.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33198):map__33198);
var namespace = cljs.core.get.call(null,map__33198__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_33083,inst_33081,inst_33115,inst_33078,inst_33075,inst_33079,inst_33111,state_val_33163,c__28153__auto__,map__33007,map__33007__$1,opts,before_jsload,on_jsload,reload_dependents,map__33008,map__33008__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_33115__$1 = cljs.core.group_by.call(null,inst_33114,inst_33081);
var inst_33117 = (inst_33115__$1 == null);
var inst_33118 = cljs.core.not.call(null,inst_33117);
var state_33162__$1 = (function (){var statearr_33200 = state_33162;
(statearr_33200[(16)] = inst_33115__$1);

(statearr_33200[(28)] = inst_33111);

return statearr_33200;
})();
if(inst_33118){
var statearr_33201_33274 = state_33162__$1;
(statearr_33201_33274[(1)] = (32));

} else {
var statearr_33202_33275 = state_33162__$1;
(statearr_33202_33275[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33163 === (44))){
var inst_33138 = (state_33162[(21)]);
var inst_33151 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_33138);
var inst_33152 = cljs.core.pr_str.call(null,inst_33151);
var inst_33153 = ["not required: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_33152)].join('');
var inst_33154 = figwheel.client.utils.log.call(null,inst_33153);
var state_33162__$1 = state_33162;
var statearr_33203_33276 = state_33162__$1;
(statearr_33203_33276[(2)] = inst_33154);

(statearr_33203_33276[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33163 === (6))){
var inst_33056 = (state_33162[(2)]);
var state_33162__$1 = state_33162;
var statearr_33204_33277 = state_33162__$1;
(statearr_33204_33277[(2)] = inst_33056);

(statearr_33204_33277[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33163 === (28))){
var inst_33081 = (state_33162[(26)]);
var inst_33108 = (state_33162[(2)]);
var inst_33109 = cljs.core.not_empty.call(null,inst_33081);
var state_33162__$1 = (function (){var statearr_33205 = state_33162;
(statearr_33205[(29)] = inst_33108);

return statearr_33205;
})();
if(cljs.core.truth_(inst_33109)){
var statearr_33206_33278 = state_33162__$1;
(statearr_33206_33278[(1)] = (29));

} else {
var statearr_33207_33279 = state_33162__$1;
(statearr_33207_33279[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33163 === (25))){
var inst_33079 = (state_33162[(25)]);
var inst_33095 = (state_33162[(2)]);
var inst_33096 = cljs.core.not_empty.call(null,inst_33079);
var state_33162__$1 = (function (){var statearr_33208 = state_33162;
(statearr_33208[(30)] = inst_33095);

return statearr_33208;
})();
if(cljs.core.truth_(inst_33096)){
var statearr_33209_33280 = state_33162__$1;
(statearr_33209_33280[(1)] = (26));

} else {
var statearr_33210_33281 = state_33162__$1;
(statearr_33210_33281[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33163 === (34))){
var inst_33131 = (state_33162[(2)]);
var state_33162__$1 = state_33162;
if(cljs.core.truth_(inst_33131)){
var statearr_33211_33282 = state_33162__$1;
(statearr_33211_33282[(1)] = (38));

} else {
var statearr_33212_33283 = state_33162__$1;
(statearr_33212_33283[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33163 === (17))){
var state_33162__$1 = state_33162;
var statearr_33213_33284 = state_33162__$1;
(statearr_33213_33284[(2)] = recompile_dependents);

(statearr_33213_33284[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33163 === (3))){
var state_33162__$1 = state_33162;
var statearr_33214_33285 = state_33162__$1;
(statearr_33214_33285[(2)] = null);

(statearr_33214_33285[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33163 === (12))){
var inst_33052 = (state_33162[(2)]);
var state_33162__$1 = state_33162;
var statearr_33215_33286 = state_33162__$1;
(statearr_33215_33286[(2)] = inst_33052);

(statearr_33215_33286[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33163 === (2))){
var inst_33014 = (state_33162[(13)]);
var inst_33021 = cljs.core.seq.call(null,inst_33014);
var inst_33022 = inst_33021;
var inst_33023 = null;
var inst_33024 = (0);
var inst_33025 = (0);
var state_33162__$1 = (function (){var statearr_33216 = state_33162;
(statearr_33216[(7)] = inst_33025);

(statearr_33216[(8)] = inst_33022);

(statearr_33216[(9)] = inst_33024);

(statearr_33216[(10)] = inst_33023);

return statearr_33216;
})();
var statearr_33217_33287 = state_33162__$1;
(statearr_33217_33287[(2)] = null);

(statearr_33217_33287[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33163 === (23))){
var inst_33083 = (state_33162[(23)]);
var inst_33081 = (state_33162[(26)]);
var inst_33078 = (state_33162[(24)]);
var inst_33075 = (state_33162[(19)]);
var inst_33079 = (state_33162[(25)]);
var inst_33086 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_33088 = (function (){var all_files = inst_33075;
var res_SINGLEQUOTE_ = inst_33078;
var res = inst_33079;
var files_not_loaded = inst_33081;
var dependencies_that_loaded = inst_33083;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_33083,inst_33081,inst_33078,inst_33075,inst_33079,inst_33086,state_val_33163,c__28153__auto__,map__33007,map__33007__$1,opts,before_jsload,on_jsload,reload_dependents,map__33008,map__33008__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__33087){
var map__33218 = p__33087;
var map__33218__$1 = ((((!((map__33218 == null)))?(((((map__33218.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33218.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33218):map__33218);
var request_url = cljs.core.get.call(null,map__33218__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_33083,inst_33081,inst_33078,inst_33075,inst_33079,inst_33086,state_val_33163,c__28153__auto__,map__33007,map__33007__$1,opts,before_jsload,on_jsload,reload_dependents,map__33008,map__33008__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_33089 = cljs.core.reverse.call(null,inst_33083);
var inst_33090 = cljs.core.map.call(null,inst_33088,inst_33089);
var inst_33091 = cljs.core.pr_str.call(null,inst_33090);
var inst_33092 = figwheel.client.utils.log.call(null,inst_33091);
var state_33162__$1 = (function (){var statearr_33220 = state_33162;
(statearr_33220[(31)] = inst_33086);

return statearr_33220;
})();
var statearr_33221_33288 = state_33162__$1;
(statearr_33221_33288[(2)] = inst_33092);

(statearr_33221_33288[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33163 === (35))){
var state_33162__$1 = state_33162;
var statearr_33222_33289 = state_33162__$1;
(statearr_33222_33289[(2)] = true);

(statearr_33222_33289[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33163 === (19))){
var inst_33065 = (state_33162[(12)]);
var inst_33071 = figwheel.client.file_reloading.expand_files.call(null,inst_33065);
var state_33162__$1 = state_33162;
var statearr_33223_33290 = state_33162__$1;
(statearr_33223_33290[(2)] = inst_33071);

(statearr_33223_33290[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33163 === (11))){
var state_33162__$1 = state_33162;
var statearr_33224_33291 = state_33162__$1;
(statearr_33224_33291[(2)] = null);

(statearr_33224_33291[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33163 === (9))){
var inst_33054 = (state_33162[(2)]);
var state_33162__$1 = state_33162;
var statearr_33225_33292 = state_33162__$1;
(statearr_33225_33292[(2)] = inst_33054);

(statearr_33225_33292[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33163 === (5))){
var inst_33025 = (state_33162[(7)]);
var inst_33024 = (state_33162[(9)]);
var inst_33027 = (inst_33025 < inst_33024);
var inst_33028 = inst_33027;
var state_33162__$1 = state_33162;
if(cljs.core.truth_(inst_33028)){
var statearr_33226_33293 = state_33162__$1;
(statearr_33226_33293[(1)] = (7));

} else {
var statearr_33227_33294 = state_33162__$1;
(statearr_33227_33294[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33163 === (14))){
var inst_33035 = (state_33162[(22)]);
var inst_33044 = cljs.core.first.call(null,inst_33035);
var inst_33045 = figwheel.client.file_reloading.eval_body.call(null,inst_33044,opts);
var inst_33046 = cljs.core.next.call(null,inst_33035);
var inst_33022 = inst_33046;
var inst_33023 = null;
var inst_33024 = (0);
var inst_33025 = (0);
var state_33162__$1 = (function (){var statearr_33228 = state_33162;
(statearr_33228[(7)] = inst_33025);

(statearr_33228[(8)] = inst_33022);

(statearr_33228[(9)] = inst_33024);

(statearr_33228[(10)] = inst_33023);

(statearr_33228[(32)] = inst_33045);

return statearr_33228;
})();
var statearr_33229_33295 = state_33162__$1;
(statearr_33229_33295[(2)] = null);

(statearr_33229_33295[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33163 === (45))){
var state_33162__$1 = state_33162;
var statearr_33230_33296 = state_33162__$1;
(statearr_33230_33296[(2)] = null);

(statearr_33230_33296[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33163 === (26))){
var inst_33083 = (state_33162[(23)]);
var inst_33081 = (state_33162[(26)]);
var inst_33078 = (state_33162[(24)]);
var inst_33075 = (state_33162[(19)]);
var inst_33079 = (state_33162[(25)]);
var inst_33098 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_33100 = (function (){var all_files = inst_33075;
var res_SINGLEQUOTE_ = inst_33078;
var res = inst_33079;
var files_not_loaded = inst_33081;
var dependencies_that_loaded = inst_33083;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_33083,inst_33081,inst_33078,inst_33075,inst_33079,inst_33098,state_val_33163,c__28153__auto__,map__33007,map__33007__$1,opts,before_jsload,on_jsload,reload_dependents,map__33008,map__33008__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__33099){
var map__33231 = p__33099;
var map__33231__$1 = ((((!((map__33231 == null)))?(((((map__33231.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33231.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33231):map__33231);
var namespace = cljs.core.get.call(null,map__33231__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__33231__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_33083,inst_33081,inst_33078,inst_33075,inst_33079,inst_33098,state_val_33163,c__28153__auto__,map__33007,map__33007__$1,opts,before_jsload,on_jsload,reload_dependents,map__33008,map__33008__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_33101 = cljs.core.map.call(null,inst_33100,inst_33079);
var inst_33102 = cljs.core.pr_str.call(null,inst_33101);
var inst_33103 = figwheel.client.utils.log.call(null,inst_33102);
var inst_33104 = (function (){var all_files = inst_33075;
var res_SINGLEQUOTE_ = inst_33078;
var res = inst_33079;
var files_not_loaded = inst_33081;
var dependencies_that_loaded = inst_33083;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_33083,inst_33081,inst_33078,inst_33075,inst_33079,inst_33098,inst_33100,inst_33101,inst_33102,inst_33103,state_val_33163,c__28153__auto__,map__33007,map__33007__$1,opts,before_jsload,on_jsload,reload_dependents,map__33008,map__33008__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_33083,inst_33081,inst_33078,inst_33075,inst_33079,inst_33098,inst_33100,inst_33101,inst_33102,inst_33103,state_val_33163,c__28153__auto__,map__33007,map__33007__$1,opts,before_jsload,on_jsload,reload_dependents,map__33008,map__33008__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_33105 = setTimeout(inst_33104,(10));
var state_33162__$1 = (function (){var statearr_33233 = state_33162;
(statearr_33233[(33)] = inst_33103);

(statearr_33233[(34)] = inst_33098);

return statearr_33233;
})();
var statearr_33234_33297 = state_33162__$1;
(statearr_33234_33297[(2)] = inst_33105);

(statearr_33234_33297[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33163 === (16))){
var state_33162__$1 = state_33162;
var statearr_33235_33298 = state_33162__$1;
(statearr_33235_33298[(2)] = reload_dependents);

(statearr_33235_33298[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33163 === (38))){
var inst_33115 = (state_33162[(16)]);
var inst_33133 = cljs.core.apply.call(null,cljs.core.hash_map,inst_33115);
var state_33162__$1 = state_33162;
var statearr_33236_33299 = state_33162__$1;
(statearr_33236_33299[(2)] = inst_33133);

(statearr_33236_33299[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33163 === (30))){
var state_33162__$1 = state_33162;
var statearr_33237_33300 = state_33162__$1;
(statearr_33237_33300[(2)] = null);

(statearr_33237_33300[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33163 === (10))){
var inst_33035 = (state_33162[(22)]);
var inst_33037 = cljs.core.chunked_seq_QMARK_.call(null,inst_33035);
var state_33162__$1 = state_33162;
if(inst_33037){
var statearr_33238_33301 = state_33162__$1;
(statearr_33238_33301[(1)] = (13));

} else {
var statearr_33239_33302 = state_33162__$1;
(statearr_33239_33302[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33163 === (18))){
var inst_33069 = (state_33162[(2)]);
var state_33162__$1 = state_33162;
if(cljs.core.truth_(inst_33069)){
var statearr_33240_33303 = state_33162__$1;
(statearr_33240_33303[(1)] = (19));

} else {
var statearr_33241_33304 = state_33162__$1;
(statearr_33241_33304[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33163 === (42))){
var state_33162__$1 = state_33162;
var statearr_33242_33305 = state_33162__$1;
(statearr_33242_33305[(2)] = null);

(statearr_33242_33305[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33163 === (37))){
var inst_33128 = (state_33162[(2)]);
var state_33162__$1 = state_33162;
var statearr_33243_33306 = state_33162__$1;
(statearr_33243_33306[(2)] = inst_33128);

(statearr_33243_33306[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33163 === (8))){
var inst_33035 = (state_33162[(22)]);
var inst_33022 = (state_33162[(8)]);
var inst_33035__$1 = cljs.core.seq.call(null,inst_33022);
var state_33162__$1 = (function (){var statearr_33244 = state_33162;
(statearr_33244[(22)] = inst_33035__$1);

return statearr_33244;
})();
if(inst_33035__$1){
var statearr_33245_33307 = state_33162__$1;
(statearr_33245_33307[(1)] = (10));

} else {
var statearr_33246_33308 = state_33162__$1;
(statearr_33246_33308[(1)] = (11));

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
}
});})(c__28153__auto__,map__33007,map__33007__$1,opts,before_jsload,on_jsload,reload_dependents,map__33008,map__33008__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__27996__auto__,c__28153__auto__,map__33007,map__33007__$1,opts,before_jsload,on_jsload,reload_dependents,map__33008,map__33008__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__27997__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__27997__auto____0 = (function (){
var statearr_33247 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33247[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__27997__auto__);

(statearr_33247[(1)] = (1));

return statearr_33247;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__27997__auto____1 = (function (state_33162){
while(true){
var ret_value__27998__auto__ = (function (){try{while(true){
var result__27999__auto__ = switch__27996__auto__.call(null,state_33162);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27999__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27999__auto__;
}
break;
}
}catch (e33248){if((e33248 instanceof Object)){
var ex__28000__auto__ = e33248;
var statearr_33249_33309 = state_33162;
(statearr_33249_33309[(5)] = ex__28000__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33162);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33248;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27998__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33310 = state_33162;
state_33162 = G__33310;
continue;
} else {
return ret_value__27998__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__27997__auto__ = function(state_33162){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__27997__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__27997__auto____1.call(this,state_33162);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__27997__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__27997__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__27997__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__27997__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__27997__auto__;
})()
;})(switch__27996__auto__,c__28153__auto__,map__33007,map__33007__$1,opts,before_jsload,on_jsload,reload_dependents,map__33008,map__33008__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__28155__auto__ = (function (){var statearr_33250 = f__28154__auto__.call(null);
(statearr_33250[(6)] = c__28153__auto__);

return statearr_33250;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28155__auto__);
});})(c__28153__auto__,map__33007,map__33007__$1,opts,before_jsload,on_jsload,reload_dependents,map__33008,map__33008__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__28153__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__33313,link){
var map__33314 = p__33313;
var map__33314__$1 = ((((!((map__33314 == null)))?(((((map__33314.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33314.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33314):map__33314);
var file = cljs.core.get.call(null,map__33314__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5457__auto__ = link.href;
if(cljs.core.truth_(temp__5457__auto__)){
var link_href = temp__5457__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__5457__auto__,map__33314,map__33314__$1,file){
return (function (p1__33311_SHARP_,p2__33312_SHARP_){
if(cljs.core._EQ_.call(null,p1__33311_SHARP_,p2__33312_SHARP_)){
return p1__33311_SHARP_;
} else {
return false;
}
});})(link_href,temp__5457__auto__,map__33314,map__33314__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__5457__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__33317){
var map__33318 = p__33317;
var map__33318__$1 = ((((!((map__33318 == null)))?(((((map__33318.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33318.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33318):map__33318);
var match_length = cljs.core.get.call(null,map__33318__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__33318__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__33316_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__33316_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__5457__auto__)){
var res = temp__5457__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.distinctify = (function figwheel$client$file_reloading$distinctify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__33320_SHARP_,p2__33321_SHARP_){
return cljs.core.assoc.call(null,p1__33320_SHARP_,cljs.core.get.call(null,p2__33321_SHARP_,key),p2__33321_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.add_link_to_document = (function figwheel$client$file_reloading$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
});})(parent))
,(300));
});
if(typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_css_deferred_chain = cljs.core.atom.call(null,goog.async.Deferred.succeed());
}
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(f_data,fin){
var temp__5455__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__5455__auto__)){
var link = temp__5455__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),((function (link,temp__5455__auto__){
return (function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
});})(link,temp__5455__auto__))
);
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_33322 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_33322);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_33322);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__33323,p__33324){
var map__33325 = p__33323;
var map__33325__$1 = ((((!((map__33325 == null)))?(((((map__33325.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33325.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33325):map__33325);
var on_cssload = cljs.core.get.call(null,map__33325__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__33326 = p__33324;
var map__33326__$1 = ((((!((map__33326 == null)))?(((((map__33326.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33326.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33326):map__33326);
var files_msg = map__33326__$1;
var files = cljs.core.get.call(null,map__33326__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var temp__5457__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__5457__auto__)){
var f_datas = temp__5457__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1523640167216
