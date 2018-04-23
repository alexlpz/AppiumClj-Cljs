// Compiled by ClojureScript 1.10.238 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.userAgent.product');
goog.require('goog.object');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('figwheel.client.heads_up');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('cljs.repl');
figwheel.client._figwheel_version_ = "0.5.15";
figwheel.client.js_stringify = ((((typeof JSON !== 'undefined') && (!((JSON.stringify == null)))))?(function (x){
return ["#js ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(x,null," "))].join('');
}):(function (x){
try{return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join('');
}catch (e35762){if((e35762 instanceof Error)){
var e = e35762;
return "Error: Unable to stringify";
} else {
throw e35762;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__35765 = arguments.length;
switch (G__35765) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__35763_SHARP_){
if(typeof p1__35763_SHARP_ === 'string'){
return p1__35763_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__35763_SHARP_);
}
}),args)], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__4502__auto__ = [];
var len__4499__auto___35768 = arguments.length;
var i__4500__auto___35769 = (0);
while(true){
if((i__4500__auto___35769 < len__4499__auto___35768)){
args__4502__auto__.push((arguments[i__4500__auto___35769]));

var G__35770 = (i__4500__auto___35769 + (1));
i__4500__auto___35769 = G__35770;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq35767){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35767));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__4502__auto__ = [];
var len__4499__auto___35772 = arguments.length;
var i__4500__auto___35773 = (0);
while(true){
if((i__4500__auto___35773 < len__4499__auto___35772)){
args__4502__auto__.push((arguments[i__4500__auto___35773]));

var G__35774 = (i__4500__auto___35773 + (1));
i__4500__auto___35773 = G__35774;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq35771){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35771));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (function figwheel$client$autoload_QMARK_(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),true);
});
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
var res = figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)"].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Figwheel autoloading ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));

return res;
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
/**
 * Figwheel by default loads code changes as you work. Sometimes you
 *   just want to work on your code without the ramifications of
 *   autoloading and simply load your code piecemeal in the REPL. You can
 *   turn autoloading on and of with this method.
 * 
 *   (figwheel.client/set-autoload false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_autoload = (function figwheel$client$set_autoload(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),b);
});
goog.exportSymbol('figwheel.client.set_autoload', figwheel.client.set_autoload);
figwheel.client.repl_pprint = (function figwheel$client$repl_pprint(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),true);
});
goog.exportSymbol('figwheel.client.repl_pprint', figwheel.client.repl_pprint);
/**
 * This method gives you the ability to turn the pretty printing of
 *   the REPL's return value on and off.
 * 
 *   (figwheel.client/set-repl-pprint false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_repl_pprint = (function figwheel$client$set_repl_pprint(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),b);
});
goog.exportSymbol('figwheel.client.set_repl_pprint', figwheel.client.set_repl_pprint);
figwheel.client.repl_result_pr_str = (function figwheel$client$repl_result_pr_str(v){
if(cljs.core.truth_(figwheel.client.repl_pprint.call(null))){
return figwheel.client.utils.pprint_to_string.call(null,v);
} else {
return cljs.core.pr_str.call(null,v);
}
});
goog.exportSymbol('figwheel.client.repl_result_pr_str', figwheel.client.repl_result_pr_str);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel.client.get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__35775){
var map__35776 = p__35775;
var map__35776__$1 = ((((!((map__35776 == null)))?(((((map__35776.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35776.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35776):map__35776);
var message = cljs.core.get.call(null,map__35776__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__35776__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)," : ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__3922__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__3911__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__3911__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__3911__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return ((cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts))));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__28153__auto___35855 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28153__auto___35855,ch){
return (function (){
var f__28154__auto__ = (function (){var switch__27996__auto__ = ((function (c__28153__auto___35855,ch){
return (function (state_35827){
var state_val_35828 = (state_35827[(1)]);
if((state_val_35828 === (7))){
var inst_35823 = (state_35827[(2)]);
var state_35827__$1 = state_35827;
var statearr_35829_35856 = state_35827__$1;
(statearr_35829_35856[(2)] = inst_35823);

(statearr_35829_35856[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35828 === (1))){
var state_35827__$1 = state_35827;
var statearr_35830_35857 = state_35827__$1;
(statearr_35830_35857[(2)] = null);

(statearr_35830_35857[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35828 === (4))){
var inst_35780 = (state_35827[(7)]);
var inst_35780__$1 = (state_35827[(2)]);
var state_35827__$1 = (function (){var statearr_35831 = state_35827;
(statearr_35831[(7)] = inst_35780__$1);

return statearr_35831;
})();
if(cljs.core.truth_(inst_35780__$1)){
var statearr_35832_35858 = state_35827__$1;
(statearr_35832_35858[(1)] = (5));

} else {
var statearr_35833_35859 = state_35827__$1;
(statearr_35833_35859[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35828 === (15))){
var inst_35787 = (state_35827[(8)]);
var inst_35802 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_35787);
var inst_35803 = cljs.core.first.call(null,inst_35802);
var inst_35804 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_35803);
var inst_35805 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_35804)].join('');
var inst_35806 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_35805);
var state_35827__$1 = state_35827;
var statearr_35834_35860 = state_35827__$1;
(statearr_35834_35860[(2)] = inst_35806);

(statearr_35834_35860[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35828 === (13))){
var inst_35811 = (state_35827[(2)]);
var state_35827__$1 = state_35827;
var statearr_35835_35861 = state_35827__$1;
(statearr_35835_35861[(2)] = inst_35811);

(statearr_35835_35861[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35828 === (6))){
var state_35827__$1 = state_35827;
var statearr_35836_35862 = state_35827__$1;
(statearr_35836_35862[(2)] = null);

(statearr_35836_35862[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35828 === (17))){
var inst_35809 = (state_35827[(2)]);
var state_35827__$1 = state_35827;
var statearr_35837_35863 = state_35827__$1;
(statearr_35837_35863[(2)] = inst_35809);

(statearr_35837_35863[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35828 === (3))){
var inst_35825 = (state_35827[(2)]);
var state_35827__$1 = state_35827;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35827__$1,inst_35825);
} else {
if((state_val_35828 === (12))){
var inst_35786 = (state_35827[(9)]);
var inst_35800 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_35786,opts);
var state_35827__$1 = state_35827;
if(cljs.core.truth_(inst_35800)){
var statearr_35838_35864 = state_35827__$1;
(statearr_35838_35864[(1)] = (15));

} else {
var statearr_35839_35865 = state_35827__$1;
(statearr_35839_35865[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35828 === (2))){
var state_35827__$1 = state_35827;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35827__$1,(4),ch);
} else {
if((state_val_35828 === (11))){
var inst_35787 = (state_35827[(8)]);
var inst_35792 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_35793 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_35787);
var inst_35794 = cljs.core.async.timeout.call(null,(1000));
var inst_35795 = [inst_35793,inst_35794];
var inst_35796 = (new cljs.core.PersistentVector(null,2,(5),inst_35792,inst_35795,null));
var state_35827__$1 = state_35827;
return cljs.core.async.ioc_alts_BANG_.call(null,state_35827__$1,(14),inst_35796);
} else {
if((state_val_35828 === (9))){
var inst_35787 = (state_35827[(8)]);
var inst_35813 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_35814 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_35787);
var inst_35815 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_35814);
var inst_35816 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_35815)].join('');
var inst_35817 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_35816);
var state_35827__$1 = (function (){var statearr_35840 = state_35827;
(statearr_35840[(10)] = inst_35813);

return statearr_35840;
})();
var statearr_35841_35866 = state_35827__$1;
(statearr_35841_35866[(2)] = inst_35817);

(statearr_35841_35866[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35828 === (5))){
var inst_35780 = (state_35827[(7)]);
var inst_35782 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_35783 = (new cljs.core.PersistentArrayMap(null,2,inst_35782,null));
var inst_35784 = (new cljs.core.PersistentHashSet(null,inst_35783,null));
var inst_35785 = figwheel.client.focus_msgs.call(null,inst_35784,inst_35780);
var inst_35786 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_35785);
var inst_35787 = cljs.core.first.call(null,inst_35785);
var inst_35788 = figwheel.client.autoload_QMARK_.call(null);
var state_35827__$1 = (function (){var statearr_35842 = state_35827;
(statearr_35842[(8)] = inst_35787);

(statearr_35842[(9)] = inst_35786);

return statearr_35842;
})();
if(cljs.core.truth_(inst_35788)){
var statearr_35843_35867 = state_35827__$1;
(statearr_35843_35867[(1)] = (8));

} else {
var statearr_35844_35868 = state_35827__$1;
(statearr_35844_35868[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35828 === (14))){
var inst_35798 = (state_35827[(2)]);
var state_35827__$1 = state_35827;
var statearr_35845_35869 = state_35827__$1;
(statearr_35845_35869[(2)] = inst_35798);

(statearr_35845_35869[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35828 === (16))){
var state_35827__$1 = state_35827;
var statearr_35846_35870 = state_35827__$1;
(statearr_35846_35870[(2)] = null);

(statearr_35846_35870[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35828 === (10))){
var inst_35819 = (state_35827[(2)]);
var state_35827__$1 = (function (){var statearr_35847 = state_35827;
(statearr_35847[(11)] = inst_35819);

return statearr_35847;
})();
var statearr_35848_35871 = state_35827__$1;
(statearr_35848_35871[(2)] = null);

(statearr_35848_35871[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35828 === (8))){
var inst_35786 = (state_35827[(9)]);
var inst_35790 = figwheel.client.reload_file_state_QMARK_.call(null,inst_35786,opts);
var state_35827__$1 = state_35827;
if(cljs.core.truth_(inst_35790)){
var statearr_35849_35872 = state_35827__$1;
(statearr_35849_35872[(1)] = (11));

} else {
var statearr_35850_35873 = state_35827__$1;
(statearr_35850_35873[(1)] = (12));

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
});})(c__28153__auto___35855,ch))
;
return ((function (switch__27996__auto__,c__28153__auto___35855,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__27997__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__27997__auto____0 = (function (){
var statearr_35851 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35851[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__27997__auto__);

(statearr_35851[(1)] = (1));

return statearr_35851;
});
var figwheel$client$file_reloader_plugin_$_state_machine__27997__auto____1 = (function (state_35827){
while(true){
var ret_value__27998__auto__ = (function (){try{while(true){
var result__27999__auto__ = switch__27996__auto__.call(null,state_35827);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27999__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27999__auto__;
}
break;
}
}catch (e35852){if((e35852 instanceof Object)){
var ex__28000__auto__ = e35852;
var statearr_35853_35874 = state_35827;
(statearr_35853_35874[(5)] = ex__28000__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35827);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35852;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27998__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35875 = state_35827;
state_35827 = G__35875;
continue;
} else {
return ret_value__27998__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__27997__auto__ = function(state_35827){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__27997__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__27997__auto____1.call(this,state_35827);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloader_plugin_$_state_machine__27997__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__27997__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__27997__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__27997__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__27997__auto__;
})()
;})(switch__27996__auto__,c__28153__auto___35855,ch))
})();
var state__28155__auto__ = (function (){var statearr_35854 = f__28154__auto__.call(null);
(statearr_35854[(6)] = c__28153__auto___35855);

return statearr_35854;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28155__auto__);
});})(c__28153__auto___35855,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__35876_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__35876_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_35880 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_35880){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var sb = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_35878 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_35879 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_35878,_STAR_print_fn_STAR_35879,sb,base_path_35880){
return (function (x){
return sb.append(x);
});})(_STAR_print_newline_STAR_35878,_STAR_print_fn_STAR_35879,sb,base_path_35880))
;

try{var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"out","out",-910545517),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb)].join(''),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_35879;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_35878;
}}catch (e35877){if((e35877 instanceof Error)){
var e = e35877;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_35880], null));
} else {
var e = e35877;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_35880))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__35881){
var map__35882 = p__35881;
var map__35882__$1 = ((((!((map__35882 == null)))?(((((map__35882.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35882.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35882):map__35882);
var opts = map__35882__$1;
var build_id = cljs.core.get.call(null,map__35882__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__35882,map__35882__$1,opts,build_id){
return (function (p__35884){
var vec__35885 = p__35884;
var seq__35886 = cljs.core.seq.call(null,vec__35885);
var first__35887 = cljs.core.first.call(null,seq__35886);
var seq__35886__$1 = cljs.core.next.call(null,seq__35886);
var map__35888 = first__35887;
var map__35888__$1 = ((((!((map__35888 == null)))?(((((map__35888.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35888.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35888):map__35888);
var msg = map__35888__$1;
var msg_name = cljs.core.get.call(null,map__35888__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__35886__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__35885,seq__35886,first__35887,seq__35886__$1,map__35888,map__35888__$1,msg,msg_name,_,map__35882,map__35882__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__35885,seq__35886,first__35887,seq__35886__$1,map__35888,map__35888__$1,msg,msg_name,_,map__35882,map__35882__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__35882,map__35882__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__35890){
var vec__35891 = p__35890;
var seq__35892 = cljs.core.seq.call(null,vec__35891);
var first__35893 = cljs.core.first.call(null,seq__35892);
var seq__35892__$1 = cljs.core.next.call(null,seq__35892);
var map__35894 = first__35893;
var map__35894__$1 = ((((!((map__35894 == null)))?(((((map__35894.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35894.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35894):map__35894);
var msg = map__35894__$1;
var msg_name = cljs.core.get.call(null,map__35894__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__35892__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__35896){
var map__35897 = p__35896;
var map__35897__$1 = ((((!((map__35897 == null)))?(((((map__35897.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35897.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35897):map__35897);
var on_compile_warning = cljs.core.get.call(null,map__35897__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__35897__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__35897,map__35897__$1,on_compile_warning,on_compile_fail){
return (function (p__35899){
var vec__35900 = p__35899;
var seq__35901 = cljs.core.seq.call(null,vec__35900);
var first__35902 = cljs.core.first.call(null,seq__35901);
var seq__35901__$1 = cljs.core.next.call(null,seq__35901);
var map__35903 = first__35902;
var map__35903__$1 = ((((!((map__35903 == null)))?(((((map__35903.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35903.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35903):map__35903);
var msg = map__35903__$1;
var msg_name = cljs.core.get.call(null,map__35903__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__35901__$1;
var pred__35905 = cljs.core._EQ_;
var expr__35906 = msg_name;
if(cljs.core.truth_(pred__35905.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__35906))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__35905.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__35906))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__35897,map__35897__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__28153__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28153__auto__,msg_hist,msg_names,msg){
return (function (){
var f__28154__auto__ = (function (){var switch__27996__auto__ = ((function (c__28153__auto__,msg_hist,msg_names,msg){
return (function (state_35995){
var state_val_35996 = (state_35995[(1)]);
if((state_val_35996 === (7))){
var inst_35915 = (state_35995[(2)]);
var state_35995__$1 = state_35995;
if(cljs.core.truth_(inst_35915)){
var statearr_35997_36044 = state_35995__$1;
(statearr_35997_36044[(1)] = (8));

} else {
var statearr_35998_36045 = state_35995__$1;
(statearr_35998_36045[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35996 === (20))){
var inst_35989 = (state_35995[(2)]);
var state_35995__$1 = state_35995;
var statearr_35999_36046 = state_35995__$1;
(statearr_35999_36046[(2)] = inst_35989);

(statearr_35999_36046[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35996 === (27))){
var inst_35985 = (state_35995[(2)]);
var state_35995__$1 = state_35995;
var statearr_36000_36047 = state_35995__$1;
(statearr_36000_36047[(2)] = inst_35985);

(statearr_36000_36047[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35996 === (1))){
var inst_35908 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_35995__$1 = state_35995;
if(cljs.core.truth_(inst_35908)){
var statearr_36001_36048 = state_35995__$1;
(statearr_36001_36048[(1)] = (2));

} else {
var statearr_36002_36049 = state_35995__$1;
(statearr_36002_36049[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35996 === (24))){
var inst_35987 = (state_35995[(2)]);
var state_35995__$1 = state_35995;
var statearr_36003_36050 = state_35995__$1;
(statearr_36003_36050[(2)] = inst_35987);

(statearr_36003_36050[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35996 === (4))){
var inst_35993 = (state_35995[(2)]);
var state_35995__$1 = state_35995;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35995__$1,inst_35993);
} else {
if((state_val_35996 === (15))){
var inst_35991 = (state_35995[(2)]);
var state_35995__$1 = state_35995;
var statearr_36004_36051 = state_35995__$1;
(statearr_36004_36051[(2)] = inst_35991);

(statearr_36004_36051[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35996 === (21))){
var inst_35944 = (state_35995[(2)]);
var inst_35945 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35946 = figwheel.client.auto_jump_to_error.call(null,opts,inst_35945);
var state_35995__$1 = (function (){var statearr_36005 = state_35995;
(statearr_36005[(7)] = inst_35944);

return statearr_36005;
})();
var statearr_36006_36052 = state_35995__$1;
(statearr_36006_36052[(2)] = inst_35946);

(statearr_36006_36052[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35996 === (31))){
var inst_35974 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_35995__$1 = state_35995;
if(cljs.core.truth_(inst_35974)){
var statearr_36007_36053 = state_35995__$1;
(statearr_36007_36053[(1)] = (34));

} else {
var statearr_36008_36054 = state_35995__$1;
(statearr_36008_36054[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35996 === (32))){
var inst_35983 = (state_35995[(2)]);
var state_35995__$1 = state_35995;
var statearr_36009_36055 = state_35995__$1;
(statearr_36009_36055[(2)] = inst_35983);

(statearr_36009_36055[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35996 === (33))){
var inst_35970 = (state_35995[(2)]);
var inst_35971 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35972 = figwheel.client.auto_jump_to_error.call(null,opts,inst_35971);
var state_35995__$1 = (function (){var statearr_36010 = state_35995;
(statearr_36010[(8)] = inst_35970);

return statearr_36010;
})();
var statearr_36011_36056 = state_35995__$1;
(statearr_36011_36056[(2)] = inst_35972);

(statearr_36011_36056[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35996 === (13))){
var inst_35929 = figwheel.client.heads_up.clear.call(null);
var state_35995__$1 = state_35995;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35995__$1,(16),inst_35929);
} else {
if((state_val_35996 === (22))){
var inst_35950 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35951 = figwheel.client.heads_up.append_warning_message.call(null,inst_35950);
var state_35995__$1 = state_35995;
var statearr_36012_36057 = state_35995__$1;
(statearr_36012_36057[(2)] = inst_35951);

(statearr_36012_36057[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35996 === (36))){
var inst_35981 = (state_35995[(2)]);
var state_35995__$1 = state_35995;
var statearr_36013_36058 = state_35995__$1;
(statearr_36013_36058[(2)] = inst_35981);

(statearr_36013_36058[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35996 === (29))){
var inst_35961 = (state_35995[(2)]);
var inst_35962 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35963 = figwheel.client.auto_jump_to_error.call(null,opts,inst_35962);
var state_35995__$1 = (function (){var statearr_36014 = state_35995;
(statearr_36014[(9)] = inst_35961);

return statearr_36014;
})();
var statearr_36015_36059 = state_35995__$1;
(statearr_36015_36059[(2)] = inst_35963);

(statearr_36015_36059[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35996 === (6))){
var inst_35910 = (state_35995[(10)]);
var state_35995__$1 = state_35995;
var statearr_36016_36060 = state_35995__$1;
(statearr_36016_36060[(2)] = inst_35910);

(statearr_36016_36060[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35996 === (28))){
var inst_35957 = (state_35995[(2)]);
var inst_35958 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35959 = figwheel.client.heads_up.display_warning.call(null,inst_35958);
var state_35995__$1 = (function (){var statearr_36017 = state_35995;
(statearr_36017[(11)] = inst_35957);

return statearr_36017;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35995__$1,(29),inst_35959);
} else {
if((state_val_35996 === (25))){
var inst_35955 = figwheel.client.heads_up.clear.call(null);
var state_35995__$1 = state_35995;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35995__$1,(28),inst_35955);
} else {
if((state_val_35996 === (34))){
var inst_35976 = figwheel.client.heads_up.flash_loaded.call(null);
var state_35995__$1 = state_35995;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35995__$1,(37),inst_35976);
} else {
if((state_val_35996 === (17))){
var inst_35935 = (state_35995[(2)]);
var inst_35936 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35937 = figwheel.client.auto_jump_to_error.call(null,opts,inst_35936);
var state_35995__$1 = (function (){var statearr_36018 = state_35995;
(statearr_36018[(12)] = inst_35935);

return statearr_36018;
})();
var statearr_36019_36061 = state_35995__$1;
(statearr_36019_36061[(2)] = inst_35937);

(statearr_36019_36061[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35996 === (3))){
var inst_35927 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_35995__$1 = state_35995;
if(cljs.core.truth_(inst_35927)){
var statearr_36020_36062 = state_35995__$1;
(statearr_36020_36062[(1)] = (13));

} else {
var statearr_36021_36063 = state_35995__$1;
(statearr_36021_36063[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35996 === (12))){
var inst_35923 = (state_35995[(2)]);
var state_35995__$1 = state_35995;
var statearr_36022_36064 = state_35995__$1;
(statearr_36022_36064[(2)] = inst_35923);

(statearr_36022_36064[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35996 === (2))){
var inst_35910 = (state_35995[(10)]);
var inst_35910__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_35995__$1 = (function (){var statearr_36023 = state_35995;
(statearr_36023[(10)] = inst_35910__$1);

return statearr_36023;
})();
if(cljs.core.truth_(inst_35910__$1)){
var statearr_36024_36065 = state_35995__$1;
(statearr_36024_36065[(1)] = (5));

} else {
var statearr_36025_36066 = state_35995__$1;
(statearr_36025_36066[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35996 === (23))){
var inst_35953 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_35995__$1 = state_35995;
if(cljs.core.truth_(inst_35953)){
var statearr_36026_36067 = state_35995__$1;
(statearr_36026_36067[(1)] = (25));

} else {
var statearr_36027_36068 = state_35995__$1;
(statearr_36027_36068[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35996 === (35))){
var state_35995__$1 = state_35995;
var statearr_36028_36069 = state_35995__$1;
(statearr_36028_36069[(2)] = null);

(statearr_36028_36069[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35996 === (19))){
var inst_35948 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_35995__$1 = state_35995;
if(cljs.core.truth_(inst_35948)){
var statearr_36029_36070 = state_35995__$1;
(statearr_36029_36070[(1)] = (22));

} else {
var statearr_36030_36071 = state_35995__$1;
(statearr_36030_36071[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35996 === (11))){
var inst_35919 = (state_35995[(2)]);
var state_35995__$1 = state_35995;
var statearr_36031_36072 = state_35995__$1;
(statearr_36031_36072[(2)] = inst_35919);

(statearr_36031_36072[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35996 === (9))){
var inst_35921 = figwheel.client.heads_up.clear.call(null);
var state_35995__$1 = state_35995;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35995__$1,(12),inst_35921);
} else {
if((state_val_35996 === (5))){
var inst_35912 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_35995__$1 = state_35995;
var statearr_36032_36073 = state_35995__$1;
(statearr_36032_36073[(2)] = inst_35912);

(statearr_36032_36073[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35996 === (14))){
var inst_35939 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_35995__$1 = state_35995;
if(cljs.core.truth_(inst_35939)){
var statearr_36033_36074 = state_35995__$1;
(statearr_36033_36074[(1)] = (18));

} else {
var statearr_36034_36075 = state_35995__$1;
(statearr_36034_36075[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35996 === (26))){
var inst_35965 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_35995__$1 = state_35995;
if(cljs.core.truth_(inst_35965)){
var statearr_36035_36076 = state_35995__$1;
(statearr_36035_36076[(1)] = (30));

} else {
var statearr_36036_36077 = state_35995__$1;
(statearr_36036_36077[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35996 === (16))){
var inst_35931 = (state_35995[(2)]);
var inst_35932 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35933 = figwheel.client.heads_up.display_exception.call(null,inst_35932);
var state_35995__$1 = (function (){var statearr_36037 = state_35995;
(statearr_36037[(13)] = inst_35931);

return statearr_36037;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35995__$1,(17),inst_35933);
} else {
if((state_val_35996 === (30))){
var inst_35967 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35968 = figwheel.client.heads_up.display_warning.call(null,inst_35967);
var state_35995__$1 = state_35995;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35995__$1,(33),inst_35968);
} else {
if((state_val_35996 === (10))){
var inst_35925 = (state_35995[(2)]);
var state_35995__$1 = state_35995;
var statearr_36038_36078 = state_35995__$1;
(statearr_36038_36078[(2)] = inst_35925);

(statearr_36038_36078[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35996 === (18))){
var inst_35941 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35942 = figwheel.client.heads_up.display_exception.call(null,inst_35941);
var state_35995__$1 = state_35995;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35995__$1,(21),inst_35942);
} else {
if((state_val_35996 === (37))){
var inst_35978 = (state_35995[(2)]);
var state_35995__$1 = state_35995;
var statearr_36039_36079 = state_35995__$1;
(statearr_36039_36079[(2)] = inst_35978);

(statearr_36039_36079[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35996 === (8))){
var inst_35917 = figwheel.client.heads_up.flash_loaded.call(null);
var state_35995__$1 = state_35995;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35995__$1,(11),inst_35917);
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
});})(c__28153__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__27996__auto__,c__28153__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27997__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27997__auto____0 = (function (){
var statearr_36040 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36040[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27997__auto__);

(statearr_36040[(1)] = (1));

return statearr_36040;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27997__auto____1 = (function (state_35995){
while(true){
var ret_value__27998__auto__ = (function (){try{while(true){
var result__27999__auto__ = switch__27996__auto__.call(null,state_35995);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27999__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27999__auto__;
}
break;
}
}catch (e36041){if((e36041 instanceof Object)){
var ex__28000__auto__ = e36041;
var statearr_36042_36080 = state_35995;
(statearr_36042_36080[(5)] = ex__28000__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35995);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36041;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27998__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36081 = state_35995;
state_35995 = G__36081;
continue;
} else {
return ret_value__27998__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27997__auto__ = function(state_35995){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27997__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27997__auto____1.call(this,state_35995);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27997__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27997__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27997__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27997__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27997__auto__;
})()
;})(switch__27996__auto__,c__28153__auto__,msg_hist,msg_names,msg))
})();
var state__28155__auto__ = (function (){var statearr_36043 = f__28154__auto__.call(null);
(statearr_36043[(6)] = c__28153__auto__);

return statearr_36043;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28155__auto__);
});})(c__28153__auto__,msg_hist,msg_names,msg))
);

return c__28153__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__28153__auto___36110 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28153__auto___36110,ch){
return (function (){
var f__28154__auto__ = (function (){var switch__27996__auto__ = ((function (c__28153__auto___36110,ch){
return (function (state_36096){
var state_val_36097 = (state_36096[(1)]);
if((state_val_36097 === (1))){
var state_36096__$1 = state_36096;
var statearr_36098_36111 = state_36096__$1;
(statearr_36098_36111[(2)] = null);

(statearr_36098_36111[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36097 === (2))){
var state_36096__$1 = state_36096;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36096__$1,(4),ch);
} else {
if((state_val_36097 === (3))){
var inst_36094 = (state_36096[(2)]);
var state_36096__$1 = state_36096;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36096__$1,inst_36094);
} else {
if((state_val_36097 === (4))){
var inst_36084 = (state_36096[(7)]);
var inst_36084__$1 = (state_36096[(2)]);
var state_36096__$1 = (function (){var statearr_36099 = state_36096;
(statearr_36099[(7)] = inst_36084__$1);

return statearr_36099;
})();
if(cljs.core.truth_(inst_36084__$1)){
var statearr_36100_36112 = state_36096__$1;
(statearr_36100_36112[(1)] = (5));

} else {
var statearr_36101_36113 = state_36096__$1;
(statearr_36101_36113[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36097 === (5))){
var inst_36084 = (state_36096[(7)]);
var inst_36086 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_36084);
var state_36096__$1 = state_36096;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36096__$1,(8),inst_36086);
} else {
if((state_val_36097 === (6))){
var state_36096__$1 = state_36096;
var statearr_36102_36114 = state_36096__$1;
(statearr_36102_36114[(2)] = null);

(statearr_36102_36114[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36097 === (7))){
var inst_36092 = (state_36096[(2)]);
var state_36096__$1 = state_36096;
var statearr_36103_36115 = state_36096__$1;
(statearr_36103_36115[(2)] = inst_36092);

(statearr_36103_36115[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36097 === (8))){
var inst_36088 = (state_36096[(2)]);
var state_36096__$1 = (function (){var statearr_36104 = state_36096;
(statearr_36104[(8)] = inst_36088);

return statearr_36104;
})();
var statearr_36105_36116 = state_36096__$1;
(statearr_36105_36116[(2)] = null);

(statearr_36105_36116[(1)] = (2));


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
});})(c__28153__auto___36110,ch))
;
return ((function (switch__27996__auto__,c__28153__auto___36110,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__27997__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__27997__auto____0 = (function (){
var statearr_36106 = [null,null,null,null,null,null,null,null,null];
(statearr_36106[(0)] = figwheel$client$heads_up_plugin_$_state_machine__27997__auto__);

(statearr_36106[(1)] = (1));

return statearr_36106;
});
var figwheel$client$heads_up_plugin_$_state_machine__27997__auto____1 = (function (state_36096){
while(true){
var ret_value__27998__auto__ = (function (){try{while(true){
var result__27999__auto__ = switch__27996__auto__.call(null,state_36096);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27999__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27999__auto__;
}
break;
}
}catch (e36107){if((e36107 instanceof Object)){
var ex__28000__auto__ = e36107;
var statearr_36108_36117 = state_36096;
(statearr_36108_36117[(5)] = ex__28000__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36096);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36107;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27998__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36118 = state_36096;
state_36096 = G__36118;
continue;
} else {
return ret_value__27998__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__27997__auto__ = function(state_36096){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__27997__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__27997__auto____1.call(this,state_36096);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_$_state_machine__27997__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__27997__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__27997__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__27997__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__27997__auto__;
})()
;})(switch__27996__auto__,c__28153__auto___36110,ch))
})();
var state__28155__auto__ = (function (){var statearr_36109 = f__28154__auto__.call(null);
(statearr_36109[(6)] = c__28153__auto___36110);

return statearr_36109;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28155__auto__);
});})(c__28153__auto___36110,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__28153__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28153__auto__){
return (function (){
var f__28154__auto__ = (function (){var switch__27996__auto__ = ((function (c__28153__auto__){
return (function (state_36124){
var state_val_36125 = (state_36124[(1)]);
if((state_val_36125 === (1))){
var inst_36119 = cljs.core.async.timeout.call(null,(3000));
var state_36124__$1 = state_36124;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36124__$1,(2),inst_36119);
} else {
if((state_val_36125 === (2))){
var inst_36121 = (state_36124[(2)]);
var inst_36122 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_36124__$1 = (function (){var statearr_36126 = state_36124;
(statearr_36126[(7)] = inst_36121);

return statearr_36126;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36124__$1,inst_36122);
} else {
return null;
}
}
});})(c__28153__auto__))
;
return ((function (switch__27996__auto__,c__28153__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__27997__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__27997__auto____0 = (function (){
var statearr_36127 = [null,null,null,null,null,null,null,null];
(statearr_36127[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__27997__auto__);

(statearr_36127[(1)] = (1));

return statearr_36127;
});
var figwheel$client$enforce_project_plugin_$_state_machine__27997__auto____1 = (function (state_36124){
while(true){
var ret_value__27998__auto__ = (function (){try{while(true){
var result__27999__auto__ = switch__27996__auto__.call(null,state_36124);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27999__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27999__auto__;
}
break;
}
}catch (e36128){if((e36128 instanceof Object)){
var ex__28000__auto__ = e36128;
var statearr_36129_36131 = state_36124;
(statearr_36129_36131[(5)] = ex__28000__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36124);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36128;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27998__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36132 = state_36124;
state_36124 = G__36132;
continue;
} else {
return ret_value__27998__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__27997__auto__ = function(state_36124){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__27997__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__27997__auto____1.call(this,state_36124);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_project_plugin_$_state_machine__27997__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__27997__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__27997__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__27997__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__27997__auto__;
})()
;})(switch__27996__auto__,c__28153__auto__))
})();
var state__28155__auto__ = (function (){var statearr_36130 = f__28154__auto__.call(null);
(statearr_36130[(6)] = c__28153__auto__);

return statearr_36130;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28155__auto__);
});})(c__28153__auto__))
);

return c__28153__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__5457__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__5457__auto__)){
var figwheel_version = temp__5457__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__28153__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28153__auto__,figwheel_version,temp__5457__auto__){
return (function (){
var f__28154__auto__ = (function (){var switch__27996__auto__ = ((function (c__28153__auto__,figwheel_version,temp__5457__auto__){
return (function (state_36139){
var state_val_36140 = (state_36139[(1)]);
if((state_val_36140 === (1))){
var inst_36133 = cljs.core.async.timeout.call(null,(2000));
var state_36139__$1 = state_36139;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36139__$1,(2),inst_36133);
} else {
if((state_val_36140 === (2))){
var inst_36135 = (state_36139[(2)]);
var inst_36136 = ["Figwheel Client Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_36137 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_36136);
var state_36139__$1 = (function (){var statearr_36141 = state_36139;
(statearr_36141[(7)] = inst_36135);

return statearr_36141;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36139__$1,inst_36137);
} else {
return null;
}
}
});})(c__28153__auto__,figwheel_version,temp__5457__auto__))
;
return ((function (switch__27996__auto__,c__28153__auto__,figwheel_version,temp__5457__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27997__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27997__auto____0 = (function (){
var statearr_36142 = [null,null,null,null,null,null,null,null];
(statearr_36142[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27997__auto__);

(statearr_36142[(1)] = (1));

return statearr_36142;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27997__auto____1 = (function (state_36139){
while(true){
var ret_value__27998__auto__ = (function (){try{while(true){
var result__27999__auto__ = switch__27996__auto__.call(null,state_36139);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27999__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27999__auto__;
}
break;
}
}catch (e36143){if((e36143 instanceof Object)){
var ex__28000__auto__ = e36143;
var statearr_36144_36146 = state_36139;
(statearr_36144_36146[(5)] = ex__28000__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36139);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36143;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27998__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36147 = state_36139;
state_36139 = G__36147;
continue;
} else {
return ret_value__27998__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27997__auto__ = function(state_36139){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27997__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27997__auto____1.call(this,state_36139);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27997__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27997__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27997__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27997__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27997__auto__;
})()
;})(switch__27996__auto__,c__28153__auto__,figwheel_version,temp__5457__auto__))
})();
var state__28155__auto__ = (function (){var statearr_36145 = f__28154__auto__.call(null);
(statearr_36145[(6)] = c__28153__auto__);

return statearr_36145;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28155__auto__);
});})(c__28153__auto__,figwheel_version,temp__5457__auto__))
);

return c__28153__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__36148){
var map__36149 = p__36148;
var map__36149__$1 = ((((!((map__36149 == null)))?(((((map__36149.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36149.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36149):map__36149);
var file = cljs.core.get.call(null,map__36149__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__36149__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__36149__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__36151 = "";
var G__36151__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__36151),"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__36151);
var G__36151__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__36151__$1)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__36151__$1);
if(cljs.core.truth_((function (){var and__3911__auto__ = line;
if(cljs.core.truth_(and__3911__auto__)){
return column;
} else {
return and__3911__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__36151__$2),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__36151__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__36152){
var map__36153 = p__36152;
var map__36153__$1 = ((((!((map__36153 == null)))?(((((map__36153.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36153.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36153):map__36153);
var ed = map__36153__$1;
var formatted_exception = cljs.core.get.call(null,map__36153__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__36153__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__36153__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__36155_36159 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__36156_36160 = null;
var count__36157_36161 = (0);
var i__36158_36162 = (0);
while(true){
if((i__36158_36162 < count__36157_36161)){
var msg_36163 = cljs.core._nth.call(null,chunk__36156_36160,i__36158_36162);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_36163);


var G__36164 = seq__36155_36159;
var G__36165 = chunk__36156_36160;
var G__36166 = count__36157_36161;
var G__36167 = (i__36158_36162 + (1));
seq__36155_36159 = G__36164;
chunk__36156_36160 = G__36165;
count__36157_36161 = G__36166;
i__36158_36162 = G__36167;
continue;
} else {
var temp__5457__auto___36168 = cljs.core.seq.call(null,seq__36155_36159);
if(temp__5457__auto___36168){
var seq__36155_36169__$1 = temp__5457__auto___36168;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36155_36169__$1)){
var c__4319__auto___36170 = cljs.core.chunk_first.call(null,seq__36155_36169__$1);
var G__36171 = cljs.core.chunk_rest.call(null,seq__36155_36169__$1);
var G__36172 = c__4319__auto___36170;
var G__36173 = cljs.core.count.call(null,c__4319__auto___36170);
var G__36174 = (0);
seq__36155_36159 = G__36171;
chunk__36156_36160 = G__36172;
count__36157_36161 = G__36173;
i__36158_36162 = G__36174;
continue;
} else {
var msg_36175 = cljs.core.first.call(null,seq__36155_36169__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_36175);


var G__36176 = cljs.core.next.call(null,seq__36155_36169__$1);
var G__36177 = null;
var G__36178 = (0);
var G__36179 = (0);
seq__36155_36159 = G__36176;
chunk__36156_36160 = G__36177;
count__36157_36161 = G__36178;
i__36158_36162 = G__36179;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Error on ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__36180){
var map__36181 = p__36180;
var map__36181__$1 = ((((!((map__36181 == null)))?(((((map__36181.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36181.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36181):map__36181);
var w = map__36181__$1;
var message = cljs.core.get.call(null,map__36181__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),["Figwheel: Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message))," in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,message))].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources/public/js/out/figwheel/client.cljs",33,1,361,361,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources/public/js/out/figwheel/client.cljs",30,1,353,353,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,["ws://",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),"/figwheel-ws"].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__3911__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__3911__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__3911__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_json_message_watch = (function figwheel$client$add_json_message_watch(key,callback){
return figwheel.client.add_message_watch.call(null,key,cljs.core.comp.call(null,callback,cljs.core.clj__GT_js));
});
goog.exportSymbol('figwheel.client.add_json_message_watch', figwheel.client.add_json_message_watch);
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__36183 = cljs.core.seq.call(null,plugins);
var chunk__36184 = null;
var count__36185 = (0);
var i__36186 = (0);
while(true){
if((i__36186 < count__36185)){
var vec__36187 = cljs.core._nth.call(null,chunk__36184,i__36186);
var k = cljs.core.nth.call(null,vec__36187,(0),null);
var plugin = cljs.core.nth.call(null,vec__36187,(1),null);
if(cljs.core.truth_(plugin)){
var pl_36193 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__36183,chunk__36184,count__36185,i__36186,pl_36193,vec__36187,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_36193.call(null,msg_hist);
});})(seq__36183,chunk__36184,count__36185,i__36186,pl_36193,vec__36187,k,plugin))
);
} else {
}


var G__36194 = seq__36183;
var G__36195 = chunk__36184;
var G__36196 = count__36185;
var G__36197 = (i__36186 + (1));
seq__36183 = G__36194;
chunk__36184 = G__36195;
count__36185 = G__36196;
i__36186 = G__36197;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__36183);
if(temp__5457__auto__){
var seq__36183__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36183__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__36183__$1);
var G__36198 = cljs.core.chunk_rest.call(null,seq__36183__$1);
var G__36199 = c__4319__auto__;
var G__36200 = cljs.core.count.call(null,c__4319__auto__);
var G__36201 = (0);
seq__36183 = G__36198;
chunk__36184 = G__36199;
count__36185 = G__36200;
i__36186 = G__36201;
continue;
} else {
var vec__36190 = cljs.core.first.call(null,seq__36183__$1);
var k = cljs.core.nth.call(null,vec__36190,(0),null);
var plugin = cljs.core.nth.call(null,vec__36190,(1),null);
if(cljs.core.truth_(plugin)){
var pl_36202 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__36183,chunk__36184,count__36185,i__36186,pl_36202,vec__36190,k,plugin,seq__36183__$1,temp__5457__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_36202.call(null,msg_hist);
});})(seq__36183,chunk__36184,count__36185,i__36186,pl_36202,vec__36190,k,plugin,seq__36183__$1,temp__5457__auto__))
);
} else {
}


var G__36203 = cljs.core.next.call(null,seq__36183__$1);
var G__36204 = null;
var G__36205 = (0);
var G__36206 = (0);
seq__36183 = G__36203;
chunk__36184 = G__36204;
count__36185 = G__36205;
i__36186 = G__36206;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var G__36208 = arguments.length;
switch (G__36208) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
return (
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__36209_36214 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__36210_36215 = null;
var count__36211_36216 = (0);
var i__36212_36217 = (0);
while(true){
if((i__36212_36217 < count__36211_36216)){
var msg_36218 = cljs.core._nth.call(null,chunk__36210_36215,i__36212_36217);
figwheel.client.socket.handle_incoming_message.call(null,msg_36218);


var G__36219 = seq__36209_36214;
var G__36220 = chunk__36210_36215;
var G__36221 = count__36211_36216;
var G__36222 = (i__36212_36217 + (1));
seq__36209_36214 = G__36219;
chunk__36210_36215 = G__36220;
count__36211_36216 = G__36221;
i__36212_36217 = G__36222;
continue;
} else {
var temp__5457__auto___36223 = cljs.core.seq.call(null,seq__36209_36214);
if(temp__5457__auto___36223){
var seq__36209_36224__$1 = temp__5457__auto___36223;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36209_36224__$1)){
var c__4319__auto___36225 = cljs.core.chunk_first.call(null,seq__36209_36224__$1);
var G__36226 = cljs.core.chunk_rest.call(null,seq__36209_36224__$1);
var G__36227 = c__4319__auto___36225;
var G__36228 = cljs.core.count.call(null,c__4319__auto___36225);
var G__36229 = (0);
seq__36209_36214 = G__36226;
chunk__36210_36215 = G__36227;
count__36211_36216 = G__36228;
i__36212_36217 = G__36229;
continue;
} else {
var msg_36230 = cljs.core.first.call(null,seq__36209_36224__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_36230);


var G__36231 = cljs.core.next.call(null,seq__36209_36224__$1);
var G__36232 = null;
var G__36233 = (0);
var G__36234 = (0);
seq__36209_36214 = G__36231;
chunk__36210_36215 = G__36232;
count__36211_36216 = G__36233;
i__36212_36217 = G__36234;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
})))
;
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__4502__auto__ = [];
var len__4499__auto___36239 = arguments.length;
var i__4500__auto___36240 = (0);
while(true){
if((i__4500__auto___36240 < len__4499__auto___36239)){
args__4502__auto__.push((arguments[i__4500__auto___36240]));

var G__36241 = (i__4500__auto___36240 + (1));
i__4500__auto___36240 = G__36241;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__36236){
var map__36237 = p__36236;
var map__36237__$1 = ((((!((map__36237 == null)))?(((((map__36237.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36237.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36237):map__36237);
var opts = map__36237__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq36235){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36235));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e36242){if((e36242 instanceof Error)){
var e = e36242;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e36242;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__36243){
var map__36244 = p__36243;
var map__36244__$1 = ((((!((map__36244 == null)))?(((((map__36244.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36244.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36244):map__36244);
var msg_name = cljs.core.get.call(null,map__36244__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1523640170727
