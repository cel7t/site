// Compiled by ClojureScript 1.10.773 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('figwheel.client.utils');
goog.require('goog.Uri');
goog.require('goog.object');
goog.require('goog.net.jsloader');
goog.require('goog.html.legacyconversions');
goog.require('goog.string');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.core.async');
goog.require('goog.async.Deferred');
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined')){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.debug_loader_QMARK_ = (function figwheel$client$file_reloading$debug_loader_QMARK_(){
return (!((goog.debugLoader_ == null)));
});
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
var or__4126__auto__ = ((cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && ((((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string'))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372))));
if(or__4126__auto__){
return or__4126__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?(function (ns){

return goog.debugLoader_.getPathFromDeps_(ns);
}):(function (ns){

return goog.object.get(goog.dependencies_.nameToPath,ns);
}));
figwheel.client.file_reloading.provided_QMARK_ = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?(function (ns){
return goog.getObjectByName(ns);
}):(function (ns){
return goog.object.get(goog.dependencies_.written,figwheel.client.file_reloading.name__GT_path.call(null,ns));
}));
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(ns){
return ((cljs.core._EQ_.call(null,"goog",ns)) || (cljs.core._EQ_.call(null,"cljs.core",ns)) || (cljs.core._EQ_.call(null,"cljs.nodejs",ns)) || (goog.string.startsWith(ns,"clojure.")) || (goog.string.startsWith(ns,"goog.")));
});
figwheel.client.file_reloading.base_requires_for_ns_path = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?(function (path){
var G__28580 = goog.object.get(goog.debugLoader_.dependencies_,path);
if((G__28580 == null)){
return null;
} else {
return goog.object.get(G__28580,"requires");
}
}):(function (path){
var G__28581 = goog.object.get(goog.dependencies_.requires,path);
if((G__28581 == null)){
return null;
} else {
return goog.object.getKeys(G__28581);
}
}));
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__28582_SHARP_){
return (!(figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__28582_SHARP_)));
}),figwheel.client.file_reloading.base_requires_for_ns_path.call(null,figwheel.client.file_reloading.name__GT_path.call(null,ns))));
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.dependency_data !== 'undefined')){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?(function (_,___$1){
return null;
}):(function (path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([name]));
}));
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?(function (){
return null;
}):(function (){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,(function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
}));
}));
figwheel.client.file_reloading.path__GT_name = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?(function (path){
var G__28583 = goog.object.get(goog.debugLoader_.dependencies_,path);
var G__28583__$1 = (((G__28583 == null))?null:goog.object.get(G__28583,"provides"));
if((G__28583__$1 == null)){
return null;
} else {
return cljs.core.set.call(null,G__28583__$1);
}
}):(function (path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
}));
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),parent_ns);
});
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?(function (){
return goog.object.forEach(goog.object.filter(goog.debugLoader_.dependencies_,(function (dep,path,_){
return cljs.core.not.call(null,cljs.core.some.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_,goog.object.get(dep,"provides")));
})),(function (dep,path,_){
var provides = goog.object.get(dep,"provides");
var requires = goog.object.get(dep,"requires");
var seq__28584 = cljs.core.seq.call(null,provides);
var chunk__28585 = null;
var count__28586 = (0);
var i__28587 = (0);
while(true){
if((i__28587 < count__28586)){
var prov = cljs.core._nth.call(null,chunk__28585,i__28587);
var seq__28596_28608 = cljs.core.seq.call(null,requires);
var chunk__28597_28609 = null;
var count__28598_28610 = (0);
var i__28599_28611 = (0);
while(true){
if((i__28599_28611 < count__28598_28610)){
var req_28612 = cljs.core._nth.call(null,chunk__28597_28609,i__28599_28611);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_28612,prov);


var G__28613 = seq__28596_28608;
var G__28614 = chunk__28597_28609;
var G__28615 = count__28598_28610;
var G__28616 = (i__28599_28611 + (1));
seq__28596_28608 = G__28613;
chunk__28597_28609 = G__28614;
count__28598_28610 = G__28615;
i__28599_28611 = G__28616;
continue;
} else {
var temp__5720__auto___28617 = cljs.core.seq.call(null,seq__28596_28608);
if(temp__5720__auto___28617){
var seq__28596_28618__$1 = temp__5720__auto___28617;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28596_28618__$1)){
var c__4556__auto___28619 = cljs.core.chunk_first.call(null,seq__28596_28618__$1);
var G__28620 = cljs.core.chunk_rest.call(null,seq__28596_28618__$1);
var G__28621 = c__4556__auto___28619;
var G__28622 = cljs.core.count.call(null,c__4556__auto___28619);
var G__28623 = (0);
seq__28596_28608 = G__28620;
chunk__28597_28609 = G__28621;
count__28598_28610 = G__28622;
i__28599_28611 = G__28623;
continue;
} else {
var req_28624 = cljs.core.first.call(null,seq__28596_28618__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_28624,prov);


var G__28625 = cljs.core.next.call(null,seq__28596_28618__$1);
var G__28626 = null;
var G__28627 = (0);
var G__28628 = (0);
seq__28596_28608 = G__28625;
chunk__28597_28609 = G__28626;
count__28598_28610 = G__28627;
i__28599_28611 = G__28628;
continue;
}
} else {
}
}
break;
}


var G__28629 = seq__28584;
var G__28630 = chunk__28585;
var G__28631 = count__28586;
var G__28632 = (i__28587 + (1));
seq__28584 = G__28629;
chunk__28585 = G__28630;
count__28586 = G__28631;
i__28587 = G__28632;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__28584);
if(temp__5720__auto__){
var seq__28584__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28584__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__28584__$1);
var G__28633 = cljs.core.chunk_rest.call(null,seq__28584__$1);
var G__28634 = c__4556__auto__;
var G__28635 = cljs.core.count.call(null,c__4556__auto__);
var G__28636 = (0);
seq__28584 = G__28633;
chunk__28585 = G__28634;
count__28586 = G__28635;
i__28587 = G__28636;
continue;
} else {
var prov = cljs.core.first.call(null,seq__28584__$1);
var seq__28600_28637 = cljs.core.seq.call(null,requires);
var chunk__28601_28638 = null;
var count__28602_28639 = (0);
var i__28603_28640 = (0);
while(true){
if((i__28603_28640 < count__28602_28639)){
var req_28641 = cljs.core._nth.call(null,chunk__28601_28638,i__28603_28640);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_28641,prov);


var G__28642 = seq__28600_28637;
var G__28643 = chunk__28601_28638;
var G__28644 = count__28602_28639;
var G__28645 = (i__28603_28640 + (1));
seq__28600_28637 = G__28642;
chunk__28601_28638 = G__28643;
count__28602_28639 = G__28644;
i__28603_28640 = G__28645;
continue;
} else {
var temp__5720__auto___28646__$1 = cljs.core.seq.call(null,seq__28600_28637);
if(temp__5720__auto___28646__$1){
var seq__28600_28647__$1 = temp__5720__auto___28646__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28600_28647__$1)){
var c__4556__auto___28648 = cljs.core.chunk_first.call(null,seq__28600_28647__$1);
var G__28649 = cljs.core.chunk_rest.call(null,seq__28600_28647__$1);
var G__28650 = c__4556__auto___28648;
var G__28651 = cljs.core.count.call(null,c__4556__auto___28648);
var G__28652 = (0);
seq__28600_28637 = G__28649;
chunk__28601_28638 = G__28650;
count__28602_28639 = G__28651;
i__28603_28640 = G__28652;
continue;
} else {
var req_28653 = cljs.core.first.call(null,seq__28600_28647__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_28653,prov);


var G__28654 = cljs.core.next.call(null,seq__28600_28647__$1);
var G__28655 = null;
var G__28656 = (0);
var G__28657 = (0);
seq__28600_28637 = G__28654;
chunk__28601_28638 = G__28655;
count__28602_28639 = G__28656;
i__28603_28640 = G__28657;
continue;
}
} else {
}
}
break;
}


var G__28658 = cljs.core.next.call(null,seq__28584__$1);
var G__28659 = null;
var G__28660 = (0);
var G__28661 = (0);
seq__28584 = G__28658;
chunk__28585 = G__28659;
count__28586 = G__28660;
i__28587 = G__28661;
continue;
}
} else {
return null;
}
}
break;
}
}));
}):(function (){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,(function (deps,path,_){
var seq__28604 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,path));
var chunk__28605 = null;
var count__28606 = (0);
var i__28607 = (0);
while(true){
if((i__28607 < count__28606)){
var prov = cljs.core._nth.call(null,chunk__28605,i__28607);
goog.object.forEach(deps,((function (seq__28604,chunk__28605,count__28606,i__28607,prov,requires){
return (function (___$1,req,___$2){
return figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req,prov);
});})(seq__28604,chunk__28605,count__28606,i__28607,prov,requires))
);


var G__28662 = seq__28604;
var G__28663 = chunk__28605;
var G__28664 = count__28606;
var G__28665 = (i__28607 + (1));
seq__28604 = G__28662;
chunk__28605 = G__28663;
count__28606 = G__28664;
i__28607 = G__28665;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__28604);
if(temp__5720__auto__){
var seq__28604__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28604__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__28604__$1);
var G__28666 = cljs.core.chunk_rest.call(null,seq__28604__$1);
var G__28667 = c__4556__auto__;
var G__28668 = cljs.core.count.call(null,c__4556__auto__);
var G__28669 = (0);
seq__28604 = G__28666;
chunk__28605 = G__28667;
count__28606 = G__28668;
i__28607 = G__28669;
continue;
} else {
var prov = cljs.core.first.call(null,seq__28604__$1);
goog.object.forEach(deps,((function (seq__28604,chunk__28605,count__28606,i__28607,prov,seq__28604__$1,temp__5720__auto__,requires){
return (function (___$1,req,___$2){
return figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req,prov);
});})(seq__28604,chunk__28605,count__28606,i__28607,prov,seq__28604__$1,temp__5720__auto__,requires))
);


var G__28670 = cljs.core.next.call(null,seq__28604__$1);
var G__28671 = null;
var G__28672 = (0);
var G__28673 = (0);
seq__28604 = G__28670;
chunk__28605 = G__28671;
count__28606 = G__28672;
i__28607 = G__28673;
continue;
}
} else {
return null;
}
}
break;
}
}));
}));
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.in_upper_level_QMARK_ = (function figwheel$client$file_reloading$in_upper_level_QMARK_(topo_state,current_depth,dep){
return cljs.core.some.call(null,(function (p__28674){
var vec__28675 = p__28674;
var _ = cljs.core.nth.call(null,vec__28675,(0),null);
var v = cljs.core.nth.call(null,vec__28675,(1),null);
var and__4115__auto__ = v;
if(cljs.core.truth_(and__4115__auto__)){
return v.call(null,dep);
} else {
return and__4115__auto__;
}
}),cljs.core.filter.call(null,(function (p__28678){
var vec__28679 = p__28678;
var k = cljs.core.nth.call(null,vec__28679,(0),null);
var v = cljs.core.nth.call(null,vec__28679,(1),null);
return (k > current_depth);
}),topo_state));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});
var topo_sort_STAR_ = (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__28691_28699 = cljs.core.seq.call(null,deps);
var chunk__28692_28700 = null;
var count__28693_28701 = (0);
var i__28694_28702 = (0);
while(true){
if((i__28694_28702 < count__28693_28701)){
var dep_28703 = cljs.core._nth.call(null,chunk__28692_28700,i__28694_28702);
if(cljs.core.truth_((function (){var and__4115__auto__ = dep_28703;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_28703));
} else {
return and__4115__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_28703,(depth + (1)),state);
} else {
}


var G__28704 = seq__28691_28699;
var G__28705 = chunk__28692_28700;
var G__28706 = count__28693_28701;
var G__28707 = (i__28694_28702 + (1));
seq__28691_28699 = G__28704;
chunk__28692_28700 = G__28705;
count__28693_28701 = G__28706;
i__28694_28702 = G__28707;
continue;
} else {
var temp__5720__auto___28708 = cljs.core.seq.call(null,seq__28691_28699);
if(temp__5720__auto___28708){
var seq__28691_28709__$1 = temp__5720__auto___28708;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28691_28709__$1)){
var c__4556__auto___28710 = cljs.core.chunk_first.call(null,seq__28691_28709__$1);
var G__28711 = cljs.core.chunk_rest.call(null,seq__28691_28709__$1);
var G__28712 = c__4556__auto___28710;
var G__28713 = cljs.core.count.call(null,c__4556__auto___28710);
var G__28714 = (0);
seq__28691_28699 = G__28711;
chunk__28692_28700 = G__28712;
count__28693_28701 = G__28713;
i__28694_28702 = G__28714;
continue;
} else {
var dep_28715 = cljs.core.first.call(null,seq__28691_28709__$1);
if(cljs.core.truth_((function (){var and__4115__auto__ = dep_28715;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_28715));
} else {
return and__4115__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_28715,(depth + (1)),state);
} else {
}


var G__28716 = cljs.core.next.call(null,seq__28691_28709__$1);
var G__28717 = null;
var G__28718 = (0);
var G__28719 = (0);
seq__28691_28699 = G__28716;
chunk__28692_28700 = G__28717;
count__28693_28701 = G__28718;
i__28694_28702 = G__28719;
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
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;
var elim_dups_STAR_ = (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__28695){
var vec__28696 = p__28695;
var seq__28697 = cljs.core.seq.call(null,vec__28696);
var first__28698 = cljs.core.first.call(null,seq__28697);
var seq__28697__$1 = cljs.core.next.call(null,seq__28697);
var x = first__28698;
var xs = seq__28697__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,(function (p1__28682_SHARP_){
return clojure.set.difference.call(null,p1__28682_SHARP_,x);
}),xs)));
}
});
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
figwheel.client.file_reloading.unprovide_BANG_ = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?(function (ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.debugLoader_.written_,path);

return goog.object.remove(goog.debugLoader_.written_,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
}):(function (ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
}));
figwheel.client.file_reloading.resolve_ns = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?figwheel.client.file_reloading.name__GT_path:(function (p1__28720_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,p1__28720_SHARP_))].join('');
}));
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__28721 = cljs.core.seq.call(null,provides);
var chunk__28722 = null;
var count__28723 = (0);
var i__28724 = (0);
while(true){
if((i__28724 < count__28723)){
var prov = cljs.core._nth.call(null,chunk__28722,i__28724);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__28733_28741 = cljs.core.seq.call(null,requires);
var chunk__28734_28742 = null;
var count__28735_28743 = (0);
var i__28736_28744 = (0);
while(true){
if((i__28736_28744 < count__28735_28743)){
var req_28745 = cljs.core._nth.call(null,chunk__28734_28742,i__28736_28744);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_28745,prov);


var G__28746 = seq__28733_28741;
var G__28747 = chunk__28734_28742;
var G__28748 = count__28735_28743;
var G__28749 = (i__28736_28744 + (1));
seq__28733_28741 = G__28746;
chunk__28734_28742 = G__28747;
count__28735_28743 = G__28748;
i__28736_28744 = G__28749;
continue;
} else {
var temp__5720__auto___28750 = cljs.core.seq.call(null,seq__28733_28741);
if(temp__5720__auto___28750){
var seq__28733_28751__$1 = temp__5720__auto___28750;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28733_28751__$1)){
var c__4556__auto___28752 = cljs.core.chunk_first.call(null,seq__28733_28751__$1);
var G__28753 = cljs.core.chunk_rest.call(null,seq__28733_28751__$1);
var G__28754 = c__4556__auto___28752;
var G__28755 = cljs.core.count.call(null,c__4556__auto___28752);
var G__28756 = (0);
seq__28733_28741 = G__28753;
chunk__28734_28742 = G__28754;
count__28735_28743 = G__28755;
i__28736_28744 = G__28756;
continue;
} else {
var req_28757 = cljs.core.first.call(null,seq__28733_28751__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_28757,prov);


var G__28758 = cljs.core.next.call(null,seq__28733_28751__$1);
var G__28759 = null;
var G__28760 = (0);
var G__28761 = (0);
seq__28733_28741 = G__28758;
chunk__28734_28742 = G__28759;
count__28735_28743 = G__28760;
i__28736_28744 = G__28761;
continue;
}
} else {
}
}
break;
}


var G__28762 = seq__28721;
var G__28763 = chunk__28722;
var G__28764 = count__28723;
var G__28765 = (i__28724 + (1));
seq__28721 = G__28762;
chunk__28722 = G__28763;
count__28723 = G__28764;
i__28724 = G__28765;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__28721);
if(temp__5720__auto__){
var seq__28721__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28721__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__28721__$1);
var G__28766 = cljs.core.chunk_rest.call(null,seq__28721__$1);
var G__28767 = c__4556__auto__;
var G__28768 = cljs.core.count.call(null,c__4556__auto__);
var G__28769 = (0);
seq__28721 = G__28766;
chunk__28722 = G__28767;
count__28723 = G__28768;
i__28724 = G__28769;
continue;
} else {
var prov = cljs.core.first.call(null,seq__28721__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__28737_28770 = cljs.core.seq.call(null,requires);
var chunk__28738_28771 = null;
var count__28739_28772 = (0);
var i__28740_28773 = (0);
while(true){
if((i__28740_28773 < count__28739_28772)){
var req_28774 = cljs.core._nth.call(null,chunk__28738_28771,i__28740_28773);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_28774,prov);


var G__28775 = seq__28737_28770;
var G__28776 = chunk__28738_28771;
var G__28777 = count__28739_28772;
var G__28778 = (i__28740_28773 + (1));
seq__28737_28770 = G__28775;
chunk__28738_28771 = G__28776;
count__28739_28772 = G__28777;
i__28740_28773 = G__28778;
continue;
} else {
var temp__5720__auto___28779__$1 = cljs.core.seq.call(null,seq__28737_28770);
if(temp__5720__auto___28779__$1){
var seq__28737_28780__$1 = temp__5720__auto___28779__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28737_28780__$1)){
var c__4556__auto___28781 = cljs.core.chunk_first.call(null,seq__28737_28780__$1);
var G__28782 = cljs.core.chunk_rest.call(null,seq__28737_28780__$1);
var G__28783 = c__4556__auto___28781;
var G__28784 = cljs.core.count.call(null,c__4556__auto___28781);
var G__28785 = (0);
seq__28737_28770 = G__28782;
chunk__28738_28771 = G__28783;
count__28739_28772 = G__28784;
i__28740_28773 = G__28785;
continue;
} else {
var req_28786 = cljs.core.first.call(null,seq__28737_28780__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_28786,prov);


var G__28787 = cljs.core.next.call(null,seq__28737_28780__$1);
var G__28788 = null;
var G__28789 = (0);
var G__28790 = (0);
seq__28737_28770 = G__28787;
chunk__28738_28771 = G__28788;
count__28739_28772 = G__28789;
i__28740_28773 = G__28790;
continue;
}
} else {
}
}
break;
}


var G__28791 = cljs.core.next.call(null,seq__28721__$1);
var G__28792 = null;
var G__28793 = (0);
var G__28794 = (0);
seq__28721 = G__28791;
chunk__28722 = G__28792;
count__28723 = G__28793;
i__28724 = G__28794;
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
(goog.require = figwheel.client.file_reloading.figwheel_require);

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__28795_28799 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__28796_28800 = null;
var count__28797_28801 = (0);
var i__28798_28802 = (0);
while(true){
if((i__28798_28802 < count__28797_28801)){
var ns_28803 = cljs.core._nth.call(null,chunk__28796_28800,i__28798_28802);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_28803);


var G__28804 = seq__28795_28799;
var G__28805 = chunk__28796_28800;
var G__28806 = count__28797_28801;
var G__28807 = (i__28798_28802 + (1));
seq__28795_28799 = G__28804;
chunk__28796_28800 = G__28805;
count__28797_28801 = G__28806;
i__28798_28802 = G__28807;
continue;
} else {
var temp__5720__auto___28808 = cljs.core.seq.call(null,seq__28795_28799);
if(temp__5720__auto___28808){
var seq__28795_28809__$1 = temp__5720__auto___28808;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28795_28809__$1)){
var c__4556__auto___28810 = cljs.core.chunk_first.call(null,seq__28795_28809__$1);
var G__28811 = cljs.core.chunk_rest.call(null,seq__28795_28809__$1);
var G__28812 = c__4556__auto___28810;
var G__28813 = cljs.core.count.call(null,c__4556__auto___28810);
var G__28814 = (0);
seq__28795_28799 = G__28811;
chunk__28796_28800 = G__28812;
count__28797_28801 = G__28813;
i__28798_28802 = G__28814;
continue;
} else {
var ns_28815 = cljs.core.first.call(null,seq__28795_28809__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_28815);


var G__28816 = cljs.core.next.call(null,seq__28795_28809__$1);
var G__28817 = null;
var G__28818 = (0);
var G__28819 = (0);
seq__28795_28799 = G__28816;
chunk__28796_28800 = G__28817;
count__28797_28801 = G__28818;
i__28798_28802 = G__28819;
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
(goog.require_figwheel_backup_ = (function (){var or__4126__auto__ = goog.require__;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return goog.require;
}
})());

(goog.isProvided_ = (function (name){
return false;
}));

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

(goog.addDependency_figwheel_backup_ = goog.addDependency);

(goog.addDependency = (function() { 
var G__28820__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__28820 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28821__i = 0, G__28821__a = new Array(arguments.length -  0);
while (G__28821__i < G__28821__a.length) {G__28821__a[G__28821__i] = arguments[G__28821__i + 0]; ++G__28821__i;}
  args = new cljs.core.IndexedSeq(G__28821__a,0,null);
} 
return G__28820__delegate.call(this,args);};
G__28820.cljs$lang$maxFixedArity = 0;
G__28820.cljs$lang$applyTo = (function (arglist__28822){
var args = cljs.core.seq(arglist__28822);
return G__28820__delegate(args);
});
G__28820.cljs$core$IFn$_invoke$arity$variadic = G__28820__delegate;
return G__28820;
})()
);

goog.constructNamespace_("cljs.user");

(goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload);

return (goog.require = figwheel.client.file_reloading.figwheel_require);
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined')){
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
figwheel.client.file_reloading.gloader = (((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.safeLoad !== 'undefined'))?(function (p1__28823_SHARP_,p2__28824_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__28823_SHARP_)),p2__28824_SHARP_);
}):(((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.load !== 'undefined'))?(function (p1__28825_SHARP_,p2__28826_SHARP_){
return goog.net.jsloader.load(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__28825_SHARP_),p2__28826_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__28827 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__28827.addCallback((function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
}));

G__28827.addErrback((function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
}));

return G__28827;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e28828){if((e28828 instanceof Error)){
var e = e28828;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e28828;

}
}})());
});
goog.exportSymbol('figwheel.client.file_reloading.worker_import_script', figwheel.client.file_reloading.worker_import_script);
figwheel.client.file_reloading.create_node_script_import_fn = (function figwheel$client$file_reloading$create_node_script_import_fn(){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,(function (v,k,o){
return goog.string.endsWith(k,util_pattern);
}));
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e28829){if((e28829 instanceof Error)){
var e = e28829;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e28829;

}
}})());
});
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__28830 = cljs.core._EQ_;
var expr__28831 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__28830.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__28831))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__28830.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__28831))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__28830.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__28831))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return (function (a,b){
throw "Reload not defined for this platform";
});
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__28833,callback){
var map__28834 = p__28833;
var map__28834__$1 = (((((!((map__28834 == null))))?(((((map__28834.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28834.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28834):map__28834);
var file_msg = map__28834__$1;
var request_url = cljs.core.get.call(null,map__28834__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__4126__auto__ = goog.object.get(goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return figwheel.client.file_reloading.reload_file_STAR_;
}
})().call(null,request_url,(function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
}));
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reload_chan !== 'undefined')){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined')){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined')){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),(function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
}));

return out;
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reloader_loop !== 'undefined')){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__26455__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__26456__auto__ = (function (){var switch__26360__auto__ = (function (state_28872){
var state_val_28873 = (state_28872[(1)]);
if((state_val_28873 === (7))){
var inst_28868 = (state_28872[(2)]);
var state_28872__$1 = state_28872;
var statearr_28874_28900 = state_28872__$1;
(statearr_28874_28900[(2)] = inst_28868);

(statearr_28874_28900[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28873 === (1))){
var state_28872__$1 = state_28872;
var statearr_28875_28901 = state_28872__$1;
(statearr_28875_28901[(2)] = null);

(statearr_28875_28901[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28873 === (4))){
var inst_28838 = (state_28872[(7)]);
var inst_28838__$1 = (state_28872[(2)]);
var state_28872__$1 = (function (){var statearr_28876 = state_28872;
(statearr_28876[(7)] = inst_28838__$1);

return statearr_28876;
})();
if(cljs.core.truth_(inst_28838__$1)){
var statearr_28877_28902 = state_28872__$1;
(statearr_28877_28902[(1)] = (5));

} else {
var statearr_28878_28903 = state_28872__$1;
(statearr_28878_28903[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28873 === (15))){
var inst_28853 = (state_28872[(8)]);
var inst_28851 = (state_28872[(9)]);
var inst_28855 = inst_28853.call(null,inst_28851);
var state_28872__$1 = state_28872;
var statearr_28879_28904 = state_28872__$1;
(statearr_28879_28904[(2)] = inst_28855);

(statearr_28879_28904[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28873 === (13))){
var inst_28862 = (state_28872[(2)]);
var state_28872__$1 = state_28872;
var statearr_28880_28905 = state_28872__$1;
(statearr_28880_28905[(2)] = inst_28862);

(statearr_28880_28905[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28873 === (6))){
var state_28872__$1 = state_28872;
var statearr_28881_28906 = state_28872__$1;
(statearr_28881_28906[(2)] = null);

(statearr_28881_28906[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28873 === (17))){
var inst_28859 = (state_28872[(2)]);
var state_28872__$1 = state_28872;
var statearr_28882_28907 = state_28872__$1;
(statearr_28882_28907[(2)] = inst_28859);

(statearr_28882_28907[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28873 === (3))){
var inst_28870 = (state_28872[(2)]);
var state_28872__$1 = state_28872;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28872__$1,inst_28870);
} else {
if((state_val_28873 === (12))){
var state_28872__$1 = state_28872;
var statearr_28883_28908 = state_28872__$1;
(statearr_28883_28908[(2)] = null);

(statearr_28883_28908[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28873 === (2))){
var state_28872__$1 = state_28872;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28872__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_28873 === (11))){
var inst_28843 = (state_28872[(10)]);
var inst_28849 = figwheel.client.file_reloading.blocking_load.call(null,inst_28843);
var state_28872__$1 = state_28872;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28872__$1,(14),inst_28849);
} else {
if((state_val_28873 === (9))){
var inst_28843 = (state_28872[(10)]);
var state_28872__$1 = state_28872;
if(cljs.core.truth_(inst_28843)){
var statearr_28884_28909 = state_28872__$1;
(statearr_28884_28909[(1)] = (11));

} else {
var statearr_28885_28910 = state_28872__$1;
(statearr_28885_28910[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28873 === (5))){
var inst_28844 = (state_28872[(11)]);
var inst_28838 = (state_28872[(7)]);
var inst_28843 = cljs.core.nth.call(null,inst_28838,(0),null);
var inst_28844__$1 = cljs.core.nth.call(null,inst_28838,(1),null);
var state_28872__$1 = (function (){var statearr_28886 = state_28872;
(statearr_28886[(11)] = inst_28844__$1);

(statearr_28886[(10)] = inst_28843);

return statearr_28886;
})();
if(cljs.core.truth_(inst_28844__$1)){
var statearr_28887_28911 = state_28872__$1;
(statearr_28887_28911[(1)] = (8));

} else {
var statearr_28888_28912 = state_28872__$1;
(statearr_28888_28912[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28873 === (14))){
var inst_28853 = (state_28872[(8)]);
var inst_28843 = (state_28872[(10)]);
var inst_28851 = (state_28872[(2)]);
var inst_28852 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_28853__$1 = cljs.core.get.call(null,inst_28852,inst_28843);
var state_28872__$1 = (function (){var statearr_28889 = state_28872;
(statearr_28889[(8)] = inst_28853__$1);

(statearr_28889[(9)] = inst_28851);

return statearr_28889;
})();
if(cljs.core.truth_(inst_28853__$1)){
var statearr_28890_28913 = state_28872__$1;
(statearr_28890_28913[(1)] = (15));

} else {
var statearr_28891_28914 = state_28872__$1;
(statearr_28891_28914[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28873 === (16))){
var inst_28851 = (state_28872[(9)]);
var inst_28857 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_28851);
var state_28872__$1 = state_28872;
var statearr_28892_28915 = state_28872__$1;
(statearr_28892_28915[(2)] = inst_28857);

(statearr_28892_28915[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28873 === (10))){
var inst_28864 = (state_28872[(2)]);
var state_28872__$1 = (function (){var statearr_28893 = state_28872;
(statearr_28893[(12)] = inst_28864);

return statearr_28893;
})();
var statearr_28894_28916 = state_28872__$1;
(statearr_28894_28916[(2)] = null);

(statearr_28894_28916[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28873 === (8))){
var inst_28844 = (state_28872[(11)]);
var inst_28846 = eval(inst_28844);
var state_28872__$1 = state_28872;
var statearr_28895_28917 = state_28872__$1;
(statearr_28895_28917[(2)] = inst_28846);

(statearr_28895_28917[(1)] = (10));


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
});
return (function() {
var figwheel$client$file_reloading$state_machine__26361__auto__ = null;
var figwheel$client$file_reloading$state_machine__26361__auto____0 = (function (){
var statearr_28896 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28896[(0)] = figwheel$client$file_reloading$state_machine__26361__auto__);

(statearr_28896[(1)] = (1));

return statearr_28896;
});
var figwheel$client$file_reloading$state_machine__26361__auto____1 = (function (state_28872){
while(true){
var ret_value__26362__auto__ = (function (){try{while(true){
var result__26363__auto__ = switch__26360__auto__.call(null,state_28872);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26363__auto__;
}
break;
}
}catch (e28897){if((e28897 instanceof Object)){
var ex__26364__auto__ = e28897;
var statearr_28898_28918 = state_28872;
(statearr_28898_28918[(5)] = ex__26364__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28872);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28897;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28919 = state_28872;
state_28872 = G__28919;
continue;
} else {
return ret_value__26362__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__26361__auto__ = function(state_28872){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__26361__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__26361__auto____1.call(this,state_28872);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__26361__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__26361__auto____0;
figwheel$client$file_reloading$state_machine__26361__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__26361__auto____1;
return figwheel$client$file_reloading$state_machine__26361__auto__;
})()
})();
var state__26457__auto__ = (function (){var statearr_28899 = f__26456__auto__.call(null);
(statearr_28899[(6)] = c__26455__auto__);

return statearr_28899;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26457__auto__);
}));

return c__26455__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__28921 = arguments.length;
switch (G__28921) {
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

(figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1 = (function (url){
return figwheel.client.file_reloading.queued_file_reload.call(null,url,null);
}));

(figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2 = (function (url,opt_source_text){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [url,opt_source_text], null));
}));

(figwheel.client.file_reloading.queued_file_reload.cljs$lang$maxFixedArity = 2);

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__28923,callback){
var map__28924 = p__28923;
var map__28924__$1 = (((((!((map__28924 == null))))?(((((map__28924.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28924.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28924):map__28924);
var file_msg = map__28924__$1;
var namespace = cljs.core.get.call(null,map__28924__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,(function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
}));

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__28926){
var map__28927 = p__28926;
var map__28927__$1 = (((((!((map__28927 == null))))?(((((map__28927.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28927.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28927):map__28927);
var file_msg = map__28927__$1;
var namespace = cljs.core.get.call(null,map__28927__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.ns_exists_QMARK_ = (function figwheel$client$file_reloading$ns_exists_QMARK_(namespace){
return (!((cljs.core.reduce.call(null,cljs.core.fnil.call(null,goog.object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,namespace),".")) == null)));
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__28929){
var map__28930 = p__28929;
var map__28930__$1 = (((((!((map__28930 == null))))?(((((map__28930.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28930.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28930):map__28930);
var file_msg = map__28930__$1;
var namespace = cljs.core.get.call(null,map__28930__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if(cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg))){
var or__4126__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
var or__4126__auto____$2 = figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
if(cljs.core.truth_(or__4126__auto____$2)){
return or__4126__auto____$2;
} else {
return figwheel.client.file_reloading.ns_exists_QMARK_.call(null,namespace);
}
}
}
} else {
return false;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__28932,callback){
var map__28933 = p__28932;
var map__28933__$1 = (((((!((map__28933 == null))))?(((((map__28933.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28933.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28933):map__28933);
var file_msg = map__28933__$1;
var request_url = cljs.core.get.call(null,map__28933__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__28933__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,["Figwheel: Not trying to load file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,(function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
}));

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__26455__auto___28983 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__26456__auto__ = (function (){var switch__26360__auto__ = (function (state_28968){
var state_val_28969 = (state_28968[(1)]);
if((state_val_28969 === (1))){
var inst_28942 = cljs.core.seq.call(null,files);
var inst_28943 = cljs.core.first.call(null,inst_28942);
var inst_28944 = cljs.core.next.call(null,inst_28942);
var inst_28945 = files;
var state_28968__$1 = (function (){var statearr_28970 = state_28968;
(statearr_28970[(7)] = inst_28943);

(statearr_28970[(8)] = inst_28945);

(statearr_28970[(9)] = inst_28944);

return statearr_28970;
})();
var statearr_28971_28984 = state_28968__$1;
(statearr_28971_28984[(2)] = null);

(statearr_28971_28984[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28969 === (2))){
var inst_28951 = (state_28968[(10)]);
var inst_28945 = (state_28968[(8)]);
var inst_28950 = cljs.core.seq.call(null,inst_28945);
var inst_28951__$1 = cljs.core.first.call(null,inst_28950);
var inst_28952 = cljs.core.next.call(null,inst_28950);
var inst_28953 = (inst_28951__$1 == null);
var inst_28954 = cljs.core.not.call(null,inst_28953);
var state_28968__$1 = (function (){var statearr_28972 = state_28968;
(statearr_28972[(10)] = inst_28951__$1);

(statearr_28972[(11)] = inst_28952);

return statearr_28972;
})();
if(inst_28954){
var statearr_28973_28985 = state_28968__$1;
(statearr_28973_28985[(1)] = (4));

} else {
var statearr_28974_28986 = state_28968__$1;
(statearr_28974_28986[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28969 === (3))){
var inst_28966 = (state_28968[(2)]);
var state_28968__$1 = state_28968;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28968__$1,inst_28966);
} else {
if((state_val_28969 === (4))){
var inst_28951 = (state_28968[(10)]);
var inst_28956 = figwheel.client.file_reloading.reload_js_file.call(null,inst_28951);
var state_28968__$1 = state_28968;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28968__$1,(7),inst_28956);
} else {
if((state_val_28969 === (5))){
var inst_28962 = cljs.core.async.close_BANG_.call(null,out);
var state_28968__$1 = state_28968;
var statearr_28975_28987 = state_28968__$1;
(statearr_28975_28987[(2)] = inst_28962);

(statearr_28975_28987[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28969 === (6))){
var inst_28964 = (state_28968[(2)]);
var state_28968__$1 = state_28968;
var statearr_28976_28988 = state_28968__$1;
(statearr_28976_28988[(2)] = inst_28964);

(statearr_28976_28988[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28969 === (7))){
var inst_28952 = (state_28968[(11)]);
var inst_28958 = (state_28968[(2)]);
var inst_28959 = cljs.core.async.put_BANG_.call(null,out,inst_28958);
var inst_28945 = inst_28952;
var state_28968__$1 = (function (){var statearr_28977 = state_28968;
(statearr_28977[(12)] = inst_28959);

(statearr_28977[(8)] = inst_28945);

return statearr_28977;
})();
var statearr_28978_28989 = state_28968__$1;
(statearr_28978_28989[(2)] = null);

(statearr_28978_28989[(1)] = (2));


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
});
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__26361__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__26361__auto____0 = (function (){
var statearr_28979 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28979[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__26361__auto__);

(statearr_28979[(1)] = (1));

return statearr_28979;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__26361__auto____1 = (function (state_28968){
while(true){
var ret_value__26362__auto__ = (function (){try{while(true){
var result__26363__auto__ = switch__26360__auto__.call(null,state_28968);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26363__auto__;
}
break;
}
}catch (e28980){if((e28980 instanceof Object)){
var ex__26364__auto__ = e28980;
var statearr_28981_28990 = state_28968;
(statearr_28981_28990[(5)] = ex__26364__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28968);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28980;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28991 = state_28968;
state_28968 = G__28991;
continue;
} else {
return ret_value__26362__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__26361__auto__ = function(state_28968){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__26361__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__26361__auto____1.call(this,state_28968);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__26361__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__26361__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__26361__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__26361__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__26361__auto__;
})()
})();
var state__26457__auto__ = (function (){var statearr_28982 = f__26456__auto__.call(null);
(statearr_28982[(6)] = c__26455__auto___28983);

return statearr_28982;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26457__auto__);
}));


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__28992,opts){
var map__28993 = p__28992;
var map__28993__$1 = (((((!((map__28993 == null))))?(((((map__28993.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28993.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28993):map__28993);
var eval_body = cljs.core.get.call(null,map__28993__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__28993__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__4115__auto__ = eval_body;
if(cljs.core.truth_(and__4115__auto__)){
return typeof eval_body === 'string';
} else {
return and__4115__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,["Evaling file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e28995){var e = e28995;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Unable to evaluate ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,(function (n){
var temp__5718__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__28996_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__28996_SHARP_),n);
}),files));
if(cljs.core.truth_(temp__5718__auto__)){
var file_msg = temp__5718__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
}),deps));
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
return cljs.core.map.call(null,(function (p__28997){
var vec__28998 = p__28997;
var k = cljs.core.nth.call(null,vec__28998,(0),null);
var v = cljs.core.nth.call(null,vec__28998,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__29001){
var vec__29002 = p__29001;
var k = cljs.core.nth.call(null,vec__29002,(0),null);
var v = cljs.core.nth.call(null,vec__29002,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__29008,p__29009){
var map__29010 = p__29008;
var map__29010__$1 = (((((!((map__29010 == null))))?(((((map__29010.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29010.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29010):map__29010);
var opts = map__29010__$1;
var before_jsload = cljs.core.get.call(null,map__29010__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__29010__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__29010__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__29011 = p__29009;
var map__29011__$1 = (((((!((map__29011 == null))))?(((((map__29011.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29011.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29011):map__29011);
var msg = map__29011__$1;
var files = cljs.core.get.call(null,map__29011__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__29011__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__29011__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__26455__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__26456__auto__ = (function (){var switch__26360__auto__ = (function (state_29165){
var state_val_29166 = (state_29165[(1)]);
if((state_val_29166 === (7))){
var inst_29027 = (state_29165[(7)]);
var inst_29026 = (state_29165[(8)]);
var inst_29025 = (state_29165[(9)]);
var inst_29028 = (state_29165[(10)]);
var inst_29033 = cljs.core._nth.call(null,inst_29026,inst_29028);
var inst_29034 = figwheel.client.file_reloading.eval_body.call(null,inst_29033,opts);
var inst_29035 = (inst_29028 + (1));
var tmp29167 = inst_29027;
var tmp29168 = inst_29026;
var tmp29169 = inst_29025;
var inst_29025__$1 = tmp29169;
var inst_29026__$1 = tmp29168;
var inst_29027__$1 = tmp29167;
var inst_29028__$1 = inst_29035;
var state_29165__$1 = (function (){var statearr_29170 = state_29165;
(statearr_29170[(11)] = inst_29034);

(statearr_29170[(7)] = inst_29027__$1);

(statearr_29170[(8)] = inst_29026__$1);

(statearr_29170[(9)] = inst_29025__$1);

(statearr_29170[(10)] = inst_29028__$1);

return statearr_29170;
})();
var statearr_29171_29254 = state_29165__$1;
(statearr_29171_29254[(2)] = null);

(statearr_29171_29254[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29166 === (20))){
var inst_29068 = (state_29165[(12)]);
var inst_29076 = figwheel.client.file_reloading.sort_files.call(null,inst_29068);
var state_29165__$1 = state_29165;
var statearr_29172_29255 = state_29165__$1;
(statearr_29172_29255[(2)] = inst_29076);

(statearr_29172_29255[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29166 === (27))){
var state_29165__$1 = state_29165;
var statearr_29173_29256 = state_29165__$1;
(statearr_29173_29256[(2)] = null);

(statearr_29173_29256[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29166 === (1))){
var inst_29017 = (state_29165[(13)]);
var inst_29014 = before_jsload.call(null,files);
var inst_29015 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_29016 = (function (){return (function (p1__29005_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__29005_SHARP_);
});
})();
var inst_29017__$1 = cljs.core.filter.call(null,inst_29016,files);
var inst_29018 = cljs.core.not_empty.call(null,inst_29017__$1);
var state_29165__$1 = (function (){var statearr_29174 = state_29165;
(statearr_29174[(14)] = inst_29015);

(statearr_29174[(15)] = inst_29014);

(statearr_29174[(13)] = inst_29017__$1);

return statearr_29174;
})();
if(cljs.core.truth_(inst_29018)){
var statearr_29175_29257 = state_29165__$1;
(statearr_29175_29257[(1)] = (2));

} else {
var statearr_29176_29258 = state_29165__$1;
(statearr_29176_29258[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29166 === (24))){
var state_29165__$1 = state_29165;
var statearr_29177_29259 = state_29165__$1;
(statearr_29177_29259[(2)] = null);

(statearr_29177_29259[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29166 === (39))){
var inst_29118 = (state_29165[(16)]);
var state_29165__$1 = state_29165;
var statearr_29178_29260 = state_29165__$1;
(statearr_29178_29260[(2)] = inst_29118);

(statearr_29178_29260[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29166 === (46))){
var inst_29160 = (state_29165[(2)]);
var state_29165__$1 = state_29165;
var statearr_29179_29261 = state_29165__$1;
(statearr_29179_29261[(2)] = inst_29160);

(statearr_29179_29261[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29166 === (4))){
var inst_29062 = (state_29165[(2)]);
var inst_29063 = cljs.core.List.EMPTY;
var inst_29064 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_29063);
var inst_29065 = (function (){return (function (p1__29006_SHARP_){
var and__4115__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__29006_SHARP_);
if(cljs.core.truth_(and__4115__auto__)){
return ((cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__29006_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__29006_SHARP_))));
} else {
return and__4115__auto__;
}
});
})();
var inst_29066 = cljs.core.filter.call(null,inst_29065,files);
var inst_29067 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_29068 = cljs.core.concat.call(null,inst_29066,inst_29067);
var state_29165__$1 = (function (){var statearr_29180 = state_29165;
(statearr_29180[(17)] = inst_29064);

(statearr_29180[(18)] = inst_29062);

(statearr_29180[(12)] = inst_29068);

return statearr_29180;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_29181_29262 = state_29165__$1;
(statearr_29181_29262[(1)] = (16));

} else {
var statearr_29182_29263 = state_29165__$1;
(statearr_29182_29263[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29166 === (15))){
var inst_29052 = (state_29165[(2)]);
var state_29165__$1 = state_29165;
var statearr_29183_29264 = state_29165__$1;
(statearr_29183_29264[(2)] = inst_29052);

(statearr_29183_29264[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29166 === (21))){
var inst_29078 = (state_29165[(19)]);
var inst_29078__$1 = (state_29165[(2)]);
var inst_29079 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_29078__$1);
var state_29165__$1 = (function (){var statearr_29184 = state_29165;
(statearr_29184[(19)] = inst_29078__$1);

return statearr_29184;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29165__$1,(22),inst_29079);
} else {
if((state_val_29166 === (31))){
var inst_29163 = (state_29165[(2)]);
var state_29165__$1 = state_29165;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29165__$1,inst_29163);
} else {
if((state_val_29166 === (32))){
var inst_29118 = (state_29165[(16)]);
var inst_29123 = inst_29118.cljs$lang$protocol_mask$partition0$;
var inst_29124 = (inst_29123 & (64));
var inst_29125 = inst_29118.cljs$core$ISeq$;
var inst_29126 = (cljs.core.PROTOCOL_SENTINEL === inst_29125);
var inst_29127 = ((inst_29124) || (inst_29126));
var state_29165__$1 = state_29165;
if(cljs.core.truth_(inst_29127)){
var statearr_29185_29265 = state_29165__$1;
(statearr_29185_29265[(1)] = (35));

} else {
var statearr_29186_29266 = state_29165__$1;
(statearr_29186_29266[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29166 === (40))){
var inst_29140 = (state_29165[(20)]);
var inst_29139 = (state_29165[(2)]);
var inst_29140__$1 = cljs.core.get.call(null,inst_29139,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_29141 = cljs.core.get.call(null,inst_29139,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_29142 = cljs.core.not_empty.call(null,inst_29140__$1);
var state_29165__$1 = (function (){var statearr_29187 = state_29165;
(statearr_29187[(20)] = inst_29140__$1);

(statearr_29187[(21)] = inst_29141);

return statearr_29187;
})();
if(cljs.core.truth_(inst_29142)){
var statearr_29188_29267 = state_29165__$1;
(statearr_29188_29267[(1)] = (41));

} else {
var statearr_29189_29268 = state_29165__$1;
(statearr_29189_29268[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29166 === (33))){
var state_29165__$1 = state_29165;
var statearr_29190_29269 = state_29165__$1;
(statearr_29190_29269[(2)] = false);

(statearr_29190_29269[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29166 === (13))){
var inst_29038 = (state_29165[(22)]);
var inst_29042 = cljs.core.chunk_first.call(null,inst_29038);
var inst_29043 = cljs.core.chunk_rest.call(null,inst_29038);
var inst_29044 = cljs.core.count.call(null,inst_29042);
var inst_29025 = inst_29043;
var inst_29026 = inst_29042;
var inst_29027 = inst_29044;
var inst_29028 = (0);
var state_29165__$1 = (function (){var statearr_29191 = state_29165;
(statearr_29191[(7)] = inst_29027);

(statearr_29191[(8)] = inst_29026);

(statearr_29191[(9)] = inst_29025);

(statearr_29191[(10)] = inst_29028);

return statearr_29191;
})();
var statearr_29192_29270 = state_29165__$1;
(statearr_29192_29270[(2)] = null);

(statearr_29192_29270[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29166 === (22))){
var inst_29086 = (state_29165[(23)]);
var inst_29082 = (state_29165[(24)]);
var inst_29081 = (state_29165[(25)]);
var inst_29078 = (state_29165[(19)]);
var inst_29081__$1 = (state_29165[(2)]);
var inst_29082__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_29081__$1);
var inst_29083 = (function (){var all_files = inst_29078;
var res_SINGLEQUOTE_ = inst_29081__$1;
var res = inst_29082__$1;
return (function (p1__29007_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__29007_SHARP_));
});
})();
var inst_29084 = cljs.core.filter.call(null,inst_29083,inst_29081__$1);
var inst_29085 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_29086__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_29085);
var inst_29087 = cljs.core.not_empty.call(null,inst_29086__$1);
var state_29165__$1 = (function (){var statearr_29193 = state_29165;
(statearr_29193[(23)] = inst_29086__$1);

(statearr_29193[(24)] = inst_29082__$1);

(statearr_29193[(25)] = inst_29081__$1);

(statearr_29193[(26)] = inst_29084);

return statearr_29193;
})();
if(cljs.core.truth_(inst_29087)){
var statearr_29194_29271 = state_29165__$1;
(statearr_29194_29271[(1)] = (23));

} else {
var statearr_29195_29272 = state_29165__$1;
(statearr_29195_29272[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29166 === (36))){
var state_29165__$1 = state_29165;
var statearr_29196_29273 = state_29165__$1;
(statearr_29196_29273[(2)] = false);

(statearr_29196_29273[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29166 === (41))){
var inst_29140 = (state_29165[(20)]);
var inst_29144 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_29145 = cljs.core.map.call(null,inst_29144,inst_29140);
var inst_29146 = cljs.core.pr_str.call(null,inst_29145);
var inst_29147 = ["figwheel-no-load meta-data: ",inst_29146].join('');
var inst_29148 = figwheel.client.utils.log.call(null,inst_29147);
var state_29165__$1 = state_29165;
var statearr_29197_29274 = state_29165__$1;
(statearr_29197_29274[(2)] = inst_29148);

(statearr_29197_29274[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29166 === (43))){
var inst_29141 = (state_29165[(21)]);
var inst_29151 = (state_29165[(2)]);
var inst_29152 = cljs.core.not_empty.call(null,inst_29141);
var state_29165__$1 = (function (){var statearr_29198 = state_29165;
(statearr_29198[(27)] = inst_29151);

return statearr_29198;
})();
if(cljs.core.truth_(inst_29152)){
var statearr_29199_29275 = state_29165__$1;
(statearr_29199_29275[(1)] = (44));

} else {
var statearr_29200_29276 = state_29165__$1;
(statearr_29200_29276[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29166 === (29))){
var inst_29086 = (state_29165[(23)]);
var inst_29082 = (state_29165[(24)]);
var inst_29118 = (state_29165[(16)]);
var inst_29081 = (state_29165[(25)]);
var inst_29084 = (state_29165[(26)]);
var inst_29078 = (state_29165[(19)]);
var inst_29114 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_29117 = (function (){var all_files = inst_29078;
var res_SINGLEQUOTE_ = inst_29081;
var res = inst_29082;
var files_not_loaded = inst_29084;
var dependencies_that_loaded = inst_29086;
return (function (p__29116){
var map__29201 = p__29116;
var map__29201__$1 = (((((!((map__29201 == null))))?(((((map__29201.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29201.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29201):map__29201);
var namespace = cljs.core.get.call(null,map__29201__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
})();
var inst_29118__$1 = cljs.core.group_by.call(null,inst_29117,inst_29084);
var inst_29120 = (inst_29118__$1 == null);
var inst_29121 = cljs.core.not.call(null,inst_29120);
var state_29165__$1 = (function (){var statearr_29203 = state_29165;
(statearr_29203[(16)] = inst_29118__$1);

(statearr_29203[(28)] = inst_29114);

return statearr_29203;
})();
if(inst_29121){
var statearr_29204_29277 = state_29165__$1;
(statearr_29204_29277[(1)] = (32));

} else {
var statearr_29205_29278 = state_29165__$1;
(statearr_29205_29278[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29166 === (44))){
var inst_29141 = (state_29165[(21)]);
var inst_29154 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_29141);
var inst_29155 = cljs.core.pr_str.call(null,inst_29154);
var inst_29156 = ["not required: ",inst_29155].join('');
var inst_29157 = figwheel.client.utils.log.call(null,inst_29156);
var state_29165__$1 = state_29165;
var statearr_29206_29279 = state_29165__$1;
(statearr_29206_29279[(2)] = inst_29157);

(statearr_29206_29279[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29166 === (6))){
var inst_29059 = (state_29165[(2)]);
var state_29165__$1 = state_29165;
var statearr_29207_29280 = state_29165__$1;
(statearr_29207_29280[(2)] = inst_29059);

(statearr_29207_29280[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29166 === (28))){
var inst_29084 = (state_29165[(26)]);
var inst_29111 = (state_29165[(2)]);
var inst_29112 = cljs.core.not_empty.call(null,inst_29084);
var state_29165__$1 = (function (){var statearr_29208 = state_29165;
(statearr_29208[(29)] = inst_29111);

return statearr_29208;
})();
if(cljs.core.truth_(inst_29112)){
var statearr_29209_29281 = state_29165__$1;
(statearr_29209_29281[(1)] = (29));

} else {
var statearr_29210_29282 = state_29165__$1;
(statearr_29210_29282[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29166 === (25))){
var inst_29082 = (state_29165[(24)]);
var inst_29098 = (state_29165[(2)]);
var inst_29099 = cljs.core.not_empty.call(null,inst_29082);
var state_29165__$1 = (function (){var statearr_29211 = state_29165;
(statearr_29211[(30)] = inst_29098);

return statearr_29211;
})();
if(cljs.core.truth_(inst_29099)){
var statearr_29212_29283 = state_29165__$1;
(statearr_29212_29283[(1)] = (26));

} else {
var statearr_29213_29284 = state_29165__$1;
(statearr_29213_29284[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29166 === (34))){
var inst_29134 = (state_29165[(2)]);
var state_29165__$1 = state_29165;
if(cljs.core.truth_(inst_29134)){
var statearr_29214_29285 = state_29165__$1;
(statearr_29214_29285[(1)] = (38));

} else {
var statearr_29215_29286 = state_29165__$1;
(statearr_29215_29286[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29166 === (17))){
var state_29165__$1 = state_29165;
var statearr_29216_29287 = state_29165__$1;
(statearr_29216_29287[(2)] = recompile_dependents);

(statearr_29216_29287[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29166 === (3))){
var state_29165__$1 = state_29165;
var statearr_29217_29288 = state_29165__$1;
(statearr_29217_29288[(2)] = null);

(statearr_29217_29288[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29166 === (12))){
var inst_29055 = (state_29165[(2)]);
var state_29165__$1 = state_29165;
var statearr_29218_29289 = state_29165__$1;
(statearr_29218_29289[(2)] = inst_29055);

(statearr_29218_29289[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29166 === (2))){
var inst_29017 = (state_29165[(13)]);
var inst_29024 = cljs.core.seq.call(null,inst_29017);
var inst_29025 = inst_29024;
var inst_29026 = null;
var inst_29027 = (0);
var inst_29028 = (0);
var state_29165__$1 = (function (){var statearr_29219 = state_29165;
(statearr_29219[(7)] = inst_29027);

(statearr_29219[(8)] = inst_29026);

(statearr_29219[(9)] = inst_29025);

(statearr_29219[(10)] = inst_29028);

return statearr_29219;
})();
var statearr_29220_29290 = state_29165__$1;
(statearr_29220_29290[(2)] = null);

(statearr_29220_29290[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29166 === (23))){
var inst_29086 = (state_29165[(23)]);
var inst_29082 = (state_29165[(24)]);
var inst_29081 = (state_29165[(25)]);
var inst_29084 = (state_29165[(26)]);
var inst_29078 = (state_29165[(19)]);
var inst_29089 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_29091 = (function (){var all_files = inst_29078;
var res_SINGLEQUOTE_ = inst_29081;
var res = inst_29082;
var files_not_loaded = inst_29084;
var dependencies_that_loaded = inst_29086;
return (function (p__29090){
var map__29221 = p__29090;
var map__29221__$1 = (((((!((map__29221 == null))))?(((((map__29221.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29221.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29221):map__29221);
var request_url = cljs.core.get.call(null,map__29221__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
})();
var inst_29092 = cljs.core.reverse.call(null,inst_29086);
var inst_29093 = cljs.core.map.call(null,inst_29091,inst_29092);
var inst_29094 = cljs.core.pr_str.call(null,inst_29093);
var inst_29095 = figwheel.client.utils.log.call(null,inst_29094);
var state_29165__$1 = (function (){var statearr_29223 = state_29165;
(statearr_29223[(31)] = inst_29089);

return statearr_29223;
})();
var statearr_29224_29291 = state_29165__$1;
(statearr_29224_29291[(2)] = inst_29095);

(statearr_29224_29291[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29166 === (35))){
var state_29165__$1 = state_29165;
var statearr_29225_29292 = state_29165__$1;
(statearr_29225_29292[(2)] = true);

(statearr_29225_29292[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29166 === (19))){
var inst_29068 = (state_29165[(12)]);
var inst_29074 = figwheel.client.file_reloading.expand_files.call(null,inst_29068);
var state_29165__$1 = state_29165;
var statearr_29226_29293 = state_29165__$1;
(statearr_29226_29293[(2)] = inst_29074);

(statearr_29226_29293[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29166 === (11))){
var state_29165__$1 = state_29165;
var statearr_29227_29294 = state_29165__$1;
(statearr_29227_29294[(2)] = null);

(statearr_29227_29294[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29166 === (9))){
var inst_29057 = (state_29165[(2)]);
var state_29165__$1 = state_29165;
var statearr_29228_29295 = state_29165__$1;
(statearr_29228_29295[(2)] = inst_29057);

(statearr_29228_29295[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29166 === (5))){
var inst_29027 = (state_29165[(7)]);
var inst_29028 = (state_29165[(10)]);
var inst_29030 = (inst_29028 < inst_29027);
var inst_29031 = inst_29030;
var state_29165__$1 = state_29165;
if(cljs.core.truth_(inst_29031)){
var statearr_29229_29296 = state_29165__$1;
(statearr_29229_29296[(1)] = (7));

} else {
var statearr_29230_29297 = state_29165__$1;
(statearr_29230_29297[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29166 === (14))){
var inst_29038 = (state_29165[(22)]);
var inst_29047 = cljs.core.first.call(null,inst_29038);
var inst_29048 = figwheel.client.file_reloading.eval_body.call(null,inst_29047,opts);
var inst_29049 = cljs.core.next.call(null,inst_29038);
var inst_29025 = inst_29049;
var inst_29026 = null;
var inst_29027 = (0);
var inst_29028 = (0);
var state_29165__$1 = (function (){var statearr_29231 = state_29165;
(statearr_29231[(7)] = inst_29027);

(statearr_29231[(8)] = inst_29026);

(statearr_29231[(9)] = inst_29025);

(statearr_29231[(32)] = inst_29048);

(statearr_29231[(10)] = inst_29028);

return statearr_29231;
})();
var statearr_29232_29298 = state_29165__$1;
(statearr_29232_29298[(2)] = null);

(statearr_29232_29298[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29166 === (45))){
var state_29165__$1 = state_29165;
var statearr_29233_29299 = state_29165__$1;
(statearr_29233_29299[(2)] = null);

(statearr_29233_29299[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29166 === (26))){
var inst_29086 = (state_29165[(23)]);
var inst_29082 = (state_29165[(24)]);
var inst_29081 = (state_29165[(25)]);
var inst_29084 = (state_29165[(26)]);
var inst_29078 = (state_29165[(19)]);
var inst_29101 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_29103 = (function (){var all_files = inst_29078;
var res_SINGLEQUOTE_ = inst_29081;
var res = inst_29082;
var files_not_loaded = inst_29084;
var dependencies_that_loaded = inst_29086;
return (function (p__29102){
var map__29234 = p__29102;
var map__29234__$1 = (((((!((map__29234 == null))))?(((((map__29234.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29234.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29234):map__29234);
var namespace = cljs.core.get.call(null,map__29234__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__29234__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
})();
var inst_29104 = cljs.core.map.call(null,inst_29103,inst_29082);
var inst_29105 = cljs.core.pr_str.call(null,inst_29104);
var inst_29106 = figwheel.client.utils.log.call(null,inst_29105);
var inst_29107 = (function (){var all_files = inst_29078;
var res_SINGLEQUOTE_ = inst_29081;
var res = inst_29082;
var files_not_loaded = inst_29084;
var dependencies_that_loaded = inst_29086;
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
})();
var inst_29108 = setTimeout(inst_29107,(10));
var state_29165__$1 = (function (){var statearr_29236 = state_29165;
(statearr_29236[(33)] = inst_29101);

(statearr_29236[(34)] = inst_29106);

return statearr_29236;
})();
var statearr_29237_29300 = state_29165__$1;
(statearr_29237_29300[(2)] = inst_29108);

(statearr_29237_29300[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29166 === (16))){
var state_29165__$1 = state_29165;
var statearr_29238_29301 = state_29165__$1;
(statearr_29238_29301[(2)] = reload_dependents);

(statearr_29238_29301[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29166 === (38))){
var inst_29118 = (state_29165[(16)]);
var inst_29136 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29118);
var state_29165__$1 = state_29165;
var statearr_29239_29302 = state_29165__$1;
(statearr_29239_29302[(2)] = inst_29136);

(statearr_29239_29302[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29166 === (30))){
var state_29165__$1 = state_29165;
var statearr_29240_29303 = state_29165__$1;
(statearr_29240_29303[(2)] = null);

(statearr_29240_29303[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29166 === (10))){
var inst_29038 = (state_29165[(22)]);
var inst_29040 = cljs.core.chunked_seq_QMARK_.call(null,inst_29038);
var state_29165__$1 = state_29165;
if(inst_29040){
var statearr_29241_29304 = state_29165__$1;
(statearr_29241_29304[(1)] = (13));

} else {
var statearr_29242_29305 = state_29165__$1;
(statearr_29242_29305[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29166 === (18))){
var inst_29072 = (state_29165[(2)]);
var state_29165__$1 = state_29165;
if(cljs.core.truth_(inst_29072)){
var statearr_29243_29306 = state_29165__$1;
(statearr_29243_29306[(1)] = (19));

} else {
var statearr_29244_29307 = state_29165__$1;
(statearr_29244_29307[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29166 === (42))){
var state_29165__$1 = state_29165;
var statearr_29245_29308 = state_29165__$1;
(statearr_29245_29308[(2)] = null);

(statearr_29245_29308[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29166 === (37))){
var inst_29131 = (state_29165[(2)]);
var state_29165__$1 = state_29165;
var statearr_29246_29309 = state_29165__$1;
(statearr_29246_29309[(2)] = inst_29131);

(statearr_29246_29309[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29166 === (8))){
var inst_29025 = (state_29165[(9)]);
var inst_29038 = (state_29165[(22)]);
var inst_29038__$1 = cljs.core.seq.call(null,inst_29025);
var state_29165__$1 = (function (){var statearr_29247 = state_29165;
(statearr_29247[(22)] = inst_29038__$1);

return statearr_29247;
})();
if(inst_29038__$1){
var statearr_29248_29310 = state_29165__$1;
(statearr_29248_29310[(1)] = (10));

} else {
var statearr_29249_29311 = state_29165__$1;
(statearr_29249_29311[(1)] = (11));

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
});
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__26361__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__26361__auto____0 = (function (){
var statearr_29250 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29250[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__26361__auto__);

(statearr_29250[(1)] = (1));

return statearr_29250;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__26361__auto____1 = (function (state_29165){
while(true){
var ret_value__26362__auto__ = (function (){try{while(true){
var result__26363__auto__ = switch__26360__auto__.call(null,state_29165);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26363__auto__;
}
break;
}
}catch (e29251){if((e29251 instanceof Object)){
var ex__26364__auto__ = e29251;
var statearr_29252_29312 = state_29165;
(statearr_29252_29312[(5)] = ex__26364__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29165);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29251;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29313 = state_29165;
state_29165 = G__29313;
continue;
} else {
return ret_value__26362__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__26361__auto__ = function(state_29165){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__26361__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__26361__auto____1.call(this,state_29165);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__26361__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__26361__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__26361__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__26361__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__26361__auto__;
})()
})();
var state__26457__auto__ = (function (){var statearr_29253 = f__26456__auto__.call(null);
(statearr_29253[(6)] = c__26455__auto__);

return statearr_29253;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26457__auto__);
}));

return c__26455__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__29316,link){
var map__29317 = p__29316;
var map__29317__$1 = (((((!((map__29317 == null))))?(((((map__29317.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29317.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29317):map__29317);
var file = cljs.core.get.call(null,map__29317__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5720__auto__ = link.href;
if(cljs.core.truth_(temp__5720__auto__)){
var link_href = temp__5720__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,(function (p1__29314_SHARP_,p2__29315_SHARP_){
if(cljs.core._EQ_.call(null,p1__29314_SHARP_,p2__29315_SHARP_)){
return p1__29314_SHARP_;
} else {
return false;
}
}),cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = ((match).length);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),((figwheel.client.file_reloading.truncate_url.call(null,link_href)).length)], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__5720__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__29320){
var map__29321 = p__29320;
var map__29321__$1 = (((((!((map__29321 == null))))?(((((map__29321.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29321.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29321):map__29321);
var match_length = cljs.core.get.call(null,map__29321__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__29321__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__29319_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__29319_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__5720__auto__)){
var res = temp__5720__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
(clone.rel = "stylesheet");

(clone.media = link.media);

(clone.disabled = link.disabled);

(clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url));

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
(link.rel = "stylesheet");

(link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url));

return link;
});
figwheel.client.file_reloading.distinctify = (function figwheel$client$file_reloading$distinctify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__29323_SHARP_,p2__29324_SHARP_){
return cljs.core.assoc.call(null,p1__29323_SHARP_,cljs.core.get.call(null,p2__29324_SHARP_,key),p2__29324_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.add_link_to_document = (function figwheel$client$file_reloading$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout((function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
}),(300));
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined')){
} else {
figwheel.client.file_reloading.reload_css_deferred_chain = cljs.core.atom.call(null,goog.async.Deferred.succeed());
}
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(f_data,fin){
var temp__5718__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__5718__auto__)){
var link = temp__5718__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),(function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
}));
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_29325 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_29325);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_29325);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__29326,p__29327){
var map__29328 = p__29326;
var map__29328__$1 = (((((!((map__29328 == null))))?(((((map__29328.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29328.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29328):map__29328);
var on_cssload = cljs.core.get.call(null,map__29328__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__29329 = p__29327;
var map__29329__$1 = (((((!((map__29329 == null))))?(((((map__29329.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29329.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29329):map__29329);
var files_msg = map__29329__$1;
var files = cljs.core.get.call(null,map__29329__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(figwheel.client.utils.html_env_QMARK_.call(null)){
var temp__5720__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__5720__auto__)){
var f_datas = temp__5720__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1688157138937
