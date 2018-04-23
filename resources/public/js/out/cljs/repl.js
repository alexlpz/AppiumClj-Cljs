// Compiled by ClojureScript 1.10.238 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__34796){
var map__34797 = p__34796;
var map__34797__$1 = ((((!((map__34797 == null)))?(((((map__34797.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34797.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34797):map__34797);
var m = map__34797__$1;
var n = cljs.core.get.call(null,map__34797__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__34797__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5457__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5457__auto__)){
var ns = temp__5457__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__34799_34821 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__34800_34822 = null;
var count__34801_34823 = (0);
var i__34802_34824 = (0);
while(true){
if((i__34802_34824 < count__34801_34823)){
var f_34825 = cljs.core._nth.call(null,chunk__34800_34822,i__34802_34824);
cljs.core.println.call(null,"  ",f_34825);


var G__34826 = seq__34799_34821;
var G__34827 = chunk__34800_34822;
var G__34828 = count__34801_34823;
var G__34829 = (i__34802_34824 + (1));
seq__34799_34821 = G__34826;
chunk__34800_34822 = G__34827;
count__34801_34823 = G__34828;
i__34802_34824 = G__34829;
continue;
} else {
var temp__5457__auto___34830 = cljs.core.seq.call(null,seq__34799_34821);
if(temp__5457__auto___34830){
var seq__34799_34831__$1 = temp__5457__auto___34830;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34799_34831__$1)){
var c__4319__auto___34832 = cljs.core.chunk_first.call(null,seq__34799_34831__$1);
var G__34833 = cljs.core.chunk_rest.call(null,seq__34799_34831__$1);
var G__34834 = c__4319__auto___34832;
var G__34835 = cljs.core.count.call(null,c__4319__auto___34832);
var G__34836 = (0);
seq__34799_34821 = G__34833;
chunk__34800_34822 = G__34834;
count__34801_34823 = G__34835;
i__34802_34824 = G__34836;
continue;
} else {
var f_34837 = cljs.core.first.call(null,seq__34799_34831__$1);
cljs.core.println.call(null,"  ",f_34837);


var G__34838 = cljs.core.next.call(null,seq__34799_34831__$1);
var G__34839 = null;
var G__34840 = (0);
var G__34841 = (0);
seq__34799_34821 = G__34838;
chunk__34800_34822 = G__34839;
count__34801_34823 = G__34840;
i__34802_34824 = G__34841;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_34842 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__3922__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_34842);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_34842)))?cljs.core.second.call(null,arglists_34842):arglists_34842));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__34803_34843 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__34804_34844 = null;
var count__34805_34845 = (0);
var i__34806_34846 = (0);
while(true){
if((i__34806_34846 < count__34805_34845)){
var vec__34807_34847 = cljs.core._nth.call(null,chunk__34804_34844,i__34806_34846);
var name_34848 = cljs.core.nth.call(null,vec__34807_34847,(0),null);
var map__34810_34849 = cljs.core.nth.call(null,vec__34807_34847,(1),null);
var map__34810_34850__$1 = ((((!((map__34810_34849 == null)))?(((((map__34810_34849.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34810_34849.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34810_34849):map__34810_34849);
var doc_34851 = cljs.core.get.call(null,map__34810_34850__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_34852 = cljs.core.get.call(null,map__34810_34850__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_34848);

cljs.core.println.call(null," ",arglists_34852);

if(cljs.core.truth_(doc_34851)){
cljs.core.println.call(null," ",doc_34851);
} else {
}


var G__34853 = seq__34803_34843;
var G__34854 = chunk__34804_34844;
var G__34855 = count__34805_34845;
var G__34856 = (i__34806_34846 + (1));
seq__34803_34843 = G__34853;
chunk__34804_34844 = G__34854;
count__34805_34845 = G__34855;
i__34806_34846 = G__34856;
continue;
} else {
var temp__5457__auto___34857 = cljs.core.seq.call(null,seq__34803_34843);
if(temp__5457__auto___34857){
var seq__34803_34858__$1 = temp__5457__auto___34857;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34803_34858__$1)){
var c__4319__auto___34859 = cljs.core.chunk_first.call(null,seq__34803_34858__$1);
var G__34860 = cljs.core.chunk_rest.call(null,seq__34803_34858__$1);
var G__34861 = c__4319__auto___34859;
var G__34862 = cljs.core.count.call(null,c__4319__auto___34859);
var G__34863 = (0);
seq__34803_34843 = G__34860;
chunk__34804_34844 = G__34861;
count__34805_34845 = G__34862;
i__34806_34846 = G__34863;
continue;
} else {
var vec__34812_34864 = cljs.core.first.call(null,seq__34803_34858__$1);
var name_34865 = cljs.core.nth.call(null,vec__34812_34864,(0),null);
var map__34815_34866 = cljs.core.nth.call(null,vec__34812_34864,(1),null);
var map__34815_34867__$1 = ((((!((map__34815_34866 == null)))?(((((map__34815_34866.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34815_34866.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34815_34866):map__34815_34866);
var doc_34868 = cljs.core.get.call(null,map__34815_34867__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_34869 = cljs.core.get.call(null,map__34815_34867__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_34865);

cljs.core.println.call(null," ",arglists_34869);

if(cljs.core.truth_(doc_34868)){
cljs.core.println.call(null," ",doc_34868);
} else {
}


var G__34870 = cljs.core.next.call(null,seq__34803_34858__$1);
var G__34871 = null;
var G__34872 = (0);
var G__34873 = (0);
seq__34803_34843 = G__34870;
chunk__34804_34844 = G__34871;
count__34805_34845 = G__34872;
i__34806_34846 = G__34873;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5457__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5457__auto__)){
var fnspec = temp__5457__auto__;
cljs.core.print.call(null,"Spec");

var seq__34817 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__34818 = null;
var count__34819 = (0);
var i__34820 = (0);
while(true){
if((i__34820 < count__34819)){
var role = cljs.core._nth.call(null,chunk__34818,i__34820);
var temp__5457__auto___34874__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___34874__$1)){
var spec_34875 = temp__5457__auto___34874__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_34875));
} else {
}


var G__34876 = seq__34817;
var G__34877 = chunk__34818;
var G__34878 = count__34819;
var G__34879 = (i__34820 + (1));
seq__34817 = G__34876;
chunk__34818 = G__34877;
count__34819 = G__34878;
i__34820 = G__34879;
continue;
} else {
var temp__5457__auto____$1 = cljs.core.seq.call(null,seq__34817);
if(temp__5457__auto____$1){
var seq__34817__$1 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34817__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__34817__$1);
var G__34880 = cljs.core.chunk_rest.call(null,seq__34817__$1);
var G__34881 = c__4319__auto__;
var G__34882 = cljs.core.count.call(null,c__4319__auto__);
var G__34883 = (0);
seq__34817 = G__34880;
chunk__34818 = G__34881;
count__34819 = G__34882;
i__34820 = G__34883;
continue;
} else {
var role = cljs.core.first.call(null,seq__34817__$1);
var temp__5457__auto___34884__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___34884__$2)){
var spec_34885 = temp__5457__auto___34884__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_34885));
} else {
}


var G__34886 = cljs.core.next.call(null,seq__34817__$1);
var G__34887 = null;
var G__34888 = (0);
var G__34889 = (0);
seq__34817 = G__34886;
chunk__34818 = G__34887;
count__34819 = G__34888;
i__34820 = G__34889;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1523640169618
