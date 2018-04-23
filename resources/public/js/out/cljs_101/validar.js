// Compiled by ClojureScript 1.10.238 {}
goog.provide('cljs_101.validar');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('re_mdl.core');
goog.require('cljs_http.client');
goog.require('clojure.string');
goog.require('cljs.core.async');
if(typeof cljs_101.validar.aresponse !== 'undefined'){
} else {
cljs_101.validar.aresponse = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"response","response",-1068424192),"........."], null));
}
cljs_101.validar.http_client = (function cljs_101$validar$http_client(data_user){
var c__23221__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23221__auto__){
return (function (){
var f__23222__auto__ = (function (){var switch__23198__auto__ = ((function (c__23221__auto__){
return (function (state_23538){
var state_val_23539 = (state_23538[(1)]);
if((state_val_23539 === (1))){
var inst_23514 = [new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.Keyword(null,"headers","headers",-835030129)];
var inst_23515 = cljs.core.deref.call(null,data_user);
var inst_23516 = ["Content-Type"];
var inst_23517 = ["text/plain"];
var inst_23518 = cljs.core.PersistentHashMap.fromArrays(inst_23516,inst_23517);
var inst_23519 = [inst_23515,inst_23518];
var inst_23520 = cljs.core.PersistentHashMap.fromArrays(inst_23514,inst_23519);
var inst_23521 = cljs_http.client.post.call(null,"http://localhost:3000/appium",inst_23520);
var state_23538__$1 = state_23538;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23538__$1,(2),inst_23521);
} else {
if((state_val_23539 === (2))){
var inst_23523 = (state_23538[(2)]);
var inst_23524 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_23525 = [new cljs.core.Keyword(null,"body","body",-2049205669)];
var inst_23526 = (new cljs.core.PersistentVector(null,1,(5),inst_23524,inst_23525,null));
var inst_23527 = cljs.core.get_in.call(null,inst_23523,inst_23526);
var inst_23528 = cljs.core.last.call(null,inst_23527);
var inst_23529 = cljs.core.swap_BANG_.call(null,cljs_101.validar.aresponse,cljs.core.assoc,new cljs.core.Keyword(null,"image","image",-58725096),inst_23528);
var inst_23530 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_23531 = [new cljs.core.Keyword(null,"body","body",-2049205669)];
var inst_23532 = (new cljs.core.PersistentVector(null,1,(5),inst_23530,inst_23531,null));
var inst_23533 = cljs.core.get_in.call(null,inst_23523,inst_23532);
var inst_23534 = cljs.core.drop_last.call(null,inst_23533);
var inst_23535 = clojure.string.join.call(null,"\n",inst_23534);
var inst_23536 = cljs.core.swap_BANG_.call(null,cljs_101.validar.aresponse,cljs.core.assoc,new cljs.core.Keyword(null,"response","response",-1068424192),inst_23535);
var state_23538__$1 = (function (){var statearr_23540 = state_23538;
(statearr_23540[(7)] = inst_23529);

return statearr_23540;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23538__$1,inst_23536);
} else {
return null;
}
}
});})(c__23221__auto__))
;
return ((function (switch__23198__auto__,c__23221__auto__){
return (function() {
var cljs_101$validar$http_client_$_state_machine__23199__auto__ = null;
var cljs_101$validar$http_client_$_state_machine__23199__auto____0 = (function (){
var statearr_23541 = [null,null,null,null,null,null,null,null];
(statearr_23541[(0)] = cljs_101$validar$http_client_$_state_machine__23199__auto__);

(statearr_23541[(1)] = (1));

return statearr_23541;
});
var cljs_101$validar$http_client_$_state_machine__23199__auto____1 = (function (state_23538){
while(true){
var ret_value__23200__auto__ = (function (){try{while(true){
var result__23201__auto__ = switch__23198__auto__.call(null,state_23538);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23201__auto__;
}
break;
}
}catch (e23542){if((e23542 instanceof Object)){
var ex__23202__auto__ = e23542;
var statearr_23543_23545 = state_23538;
(statearr_23543_23545[(5)] = ex__23202__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23538);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23542;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23200__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23546 = state_23538;
state_23538 = G__23546;
continue;
} else {
return ret_value__23200__auto__;
}
break;
}
});
cljs_101$validar$http_client_$_state_machine__23199__auto__ = function(state_23538){
switch(arguments.length){
case 0:
return cljs_101$validar$http_client_$_state_machine__23199__auto____0.call(this);
case 1:
return cljs_101$validar$http_client_$_state_machine__23199__auto____1.call(this,state_23538);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs_101$validar$http_client_$_state_machine__23199__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_101$validar$http_client_$_state_machine__23199__auto____0;
cljs_101$validar$http_client_$_state_machine__23199__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_101$validar$http_client_$_state_machine__23199__auto____1;
return cljs_101$validar$http_client_$_state_machine__23199__auto__;
})()
;})(switch__23198__auto__,c__23221__auto__))
})();
var state__23223__auto__ = (function (){var statearr_23544 = f__23222__auto__.call(null);
(statearr_23544[(6)] = c__23221__auto__);

return statearr_23544;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23223__auto__);
});})(c__23221__auto__))
);

return c__23221__auto__;
});
cljs_101.validar.validate = (function cljs_101$validar$validate(valida){
if((((cljs.core.count.call(null,cljs.core.get.call(null,cljs.core.deref.call(null,valida),new cljs.core.Keyword(null,"ip","ip",58378915))) > (0))) && ((cljs.core.count.call(null,cljs.core.get.call(null,cljs.core.deref.call(null,valida),new cljs.core.Keyword(null,"port","port",1534937262))) > (0))) && ((cljs.core.count.call(null,cljs.core.get.call(null,cljs.core.deref.call(null,valida),new cljs.core.Keyword(null,"marca","marca",-1910184232))) > (0))) && ((cljs.core.count.call(null,cljs.core.get.call(null,cljs.core.deref.call(null,valida),new cljs.core.Keyword(null,"version","version",425292698))) > (0))) && ((cljs.core.count.call(null,cljs.core.get.call(null,cljs.core.deref.call(null,valida),new cljs.core.Keyword(null,"udid","udid",-887957788))) > (0))) && ((cljs.core.count.call(null,cljs.core.get.call(null,cljs.core.deref.call(null,valida),new cljs.core.Keyword(null,"paquete","paquete",648592092))) > (0))) && ((cljs.core.count.call(null,cljs.core.get.call(null,cljs.core.deref.call(null,valida),new cljs.core.Keyword(null,"actividad","actividad",780178470))) > (0))) && ((cljs.core.count.call(null,cljs.core.get.call(null,cljs.core.deref.call(null,valida),new cljs.core.Keyword(null,"buscar","buscar",-658889670))) > (0))))){
return cljs_101.validar.http_client.call(null,valida);
} else {
return alert("Por favor, complete el formulario!");
}
});

//# sourceMappingURL=validar.js.map?rel=1524237433447
