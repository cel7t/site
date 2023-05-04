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
var G__34107 = goog.object.get(goog.debugLoader_.dependencies_,path);
if((G__34107 == null)){
return null;
} else {
return goog.object.get(G__34107,"requires");
}
}):(function (path){
var G__34108 = goog.object.get(goog.dependencies_.requires,path);
if((G__34108 == null)){
return null;
} else {
return goog.object.getKeys(G__34108);
}
}));
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__34109_SHARP_){
return (!(figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__34109_SHARP_)));
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
var G__34110 = goog.object.get(goog.debugLoader_.dependencies_,path);
var G__34110__$1 = (((G__34110 == null))?null:goog.object.get(G__34110,"provides"));
if((G__34110__$1 == null)){
return null;
} else {
return cljs.core.set.call(null,G__34110__$1);
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
var seq__34111 = cljs.core.seq.call(null,provides);
var chunk__34112 = null;
var count__34113 = (0);
var i__34114 = (0);
while(true){
if((i__34114 < count__34113)){
var prov = cljs.core._nth.call(null,chunk__34112,i__34114);
var seq__34123_34135 = cljs.core.seq.call(null,requires);
var chunk__34124_34136 = null;
var count__34125_34137 = (0);
var i__34126_34138 = (0);
while(true){
if((i__34126_34138 < count__34125_34137)){
var req_34139 = cljs.core._nth.call(null,chunk__34124_34136,i__34126_34138);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_34139,prov);


var G__34140 = seq__34123_34135;
var G__34141 = chunk__34124_34136;
var G__34142 = count__34125_34137;
var G__34143 = (i__34126_34138 + (1));
seq__34123_34135 = G__34140;
chunk__34124_34136 = G__34141;
count__34125_34137 = G__34142;
i__34126_34138 = G__34143;
continue;
} else {
var temp__5720__auto___34144 = cljs.core.seq.call(null,seq__34123_34135);
if(temp__5720__auto___34144){
var seq__34123_34145__$1 = temp__5720__auto___34144;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34123_34145__$1)){
var c__4556__auto___34146 = cljs.core.chunk_first.call(null,seq__34123_34145__$1);
var G__34147 = cljs.core.chunk_rest.call(null,seq__34123_34145__$1);
var G__34148 = c__4556__auto___34146;
var G__34149 = cljs.core.count.call(null,c__4556__auto___34146);
var G__34150 = (0);
seq__34123_34135 = G__34147;
chunk__34124_34136 = G__34148;
count__34125_34137 = G__34149;
i__34126_34138 = G__34150;
continue;
} else {
var req_34151 = cljs.core.first.call(null,seq__34123_34145__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_34151,prov);


var G__34152 = cljs.core.next.call(null,seq__34123_34145__$1);
var G__34153 = null;
var G__34154 = (0);
var G__34155 = (0);
seq__34123_34135 = G__34152;
chunk__34124_34136 = G__34153;
count__34125_34137 = G__34154;
i__34126_34138 = G__34155;
continue;
}
} else {
}
}
break;
}


var G__34156 = seq__34111;
var G__34157 = chunk__34112;
var G__34158 = count__34113;
var G__34159 = (i__34114 + (1));
seq__34111 = G__34156;
chunk__34112 = G__34157;
count__34113 = G__34158;
i__34114 = G__34159;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__34111);
if(temp__5720__auto__){
var seq__34111__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34111__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__34111__$1);
var G__34160 = cljs.core.chunk_rest.call(null,seq__34111__$1);
var G__34161 = c__4556__auto__;
var G__34162 = cljs.core.count.call(null,c__4556__auto__);
var G__34163 = (0);
seq__34111 = G__34160;
chunk__34112 = G__34161;
count__34113 = G__34162;
i__34114 = G__34163;
continue;
} else {
var prov = cljs.core.first.call(null,seq__34111__$1);
var seq__34127_34164 = cljs.core.seq.call(null,requires);
var chunk__34128_34165 = null;
var count__34129_34166 = (0);
var i__34130_34167 = (0);
while(true){
if((i__34130_34167 < count__34129_34166)){
var req_34168 = cljs.core._nth.call(null,chunk__34128_34165,i__34130_34167);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_34168,prov);


var G__34169 = seq__34127_34164;
var G__34170 = chunk__34128_34165;
var G__34171 = count__34129_34166;
var G__34172 = (i__34130_34167 + (1));
seq__34127_34164 = G__34169;
chunk__34128_34165 = G__34170;
count__34129_34166 = G__34171;
i__34130_34167 = G__34172;
continue;
} else {
var temp__5720__auto___34173__$1 = cljs.core.seq.call(null,seq__34127_34164);
if(temp__5720__auto___34173__$1){
var seq__34127_34174__$1 = temp__5720__auto___34173__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34127_34174__$1)){
var c__4556__auto___34175 = cljs.core.chunk_first.call(null,seq__34127_34174__$1);
var G__34176 = cljs.core.chunk_rest.call(null,seq__34127_34174__$1);
var G__34177 = c__4556__auto___34175;
var G__34178 = cljs.core.count.call(null,c__4556__auto___34175);
var G__34179 = (0);
seq__34127_34164 = G__34176;
chunk__34128_34165 = G__34177;
count__34129_34166 = G__34178;
i__34130_34167 = G__34179;
continue;
} else {
var req_34180 = cljs.core.first.call(null,seq__34127_34174__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_34180,prov);


var G__34181 = cljs.core.next.call(null,seq__34127_34174__$1);
var G__34182 = null;
var G__34183 = (0);
var G__34184 = (0);
seq__34127_34164 = G__34181;
chunk__34128_34165 = G__34182;
count__34129_34166 = G__34183;
i__34130_34167 = G__34184;
continue;
}
} else {
}
}
break;
}


var G__34185 = cljs.core.next.call(null,seq__34111__$1);
var G__34186 = null;
var G__34187 = (0);
var G__34188 = (0);
seq__34111 = G__34185;
chunk__34112 = G__34186;
count__34113 = G__34187;
i__34114 = G__34188;
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
var seq__34131 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,path));
var chunk__34132 = null;
var count__34133 = (0);
var i__34134 = (0);
while(true){
if((i__34134 < count__34133)){
var prov = cljs.core._nth.call(null,chunk__34132,i__34134);
goog.object.forEach(deps,((function (seq__34131,chunk__34132,count__34133,i__34134,prov,requires){
return (function (___$1,req,___$2){
return figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req,prov);
});})(seq__34131,chunk__34132,count__34133,i__34134,prov,requires))
);


var G__34189 = seq__34131;
var G__34190 = chunk__34132;
var G__34191 = count__34133;
var G__34192 = (i__34134 + (1));
seq__34131 = G__34189;
chunk__34132 = G__34190;
count__34133 = G__34191;
i__34134 = G__34192;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__34131);
if(temp__5720__auto__){
var seq__34131__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34131__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__34131__$1);
var G__34193 = cljs.core.chunk_rest.call(null,seq__34131__$1);
var G__34194 = c__4556__auto__;
var G__34195 = cljs.core.count.call(null,c__4556__auto__);
var G__34196 = (0);
seq__34131 = G__34193;
chunk__34132 = G__34194;
count__34133 = G__34195;
i__34134 = G__34196;
continue;
} else {
var prov = cljs.core.first.call(null,seq__34131__$1);
goog.object.forEach(deps,((function (seq__34131,chunk__34132,count__34133,i__34134,prov,seq__34131__$1,temp__5720__auto__,requires){
return (function (___$1,req,___$2){
return figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req,prov);
});})(seq__34131,chunk__34132,count__34133,i__34134,prov,seq__34131__$1,temp__5720__auto__,requires))
);


var G__34197 = cljs.core.next.call(null,seq__34131__$1);
var G__34198 = null;
var G__34199 = (0);
var G__34200 = (0);
seq__34131 = G__34197;
chunk__34132 = G__34198;
count__34133 = G__34199;
i__34134 = G__34200;
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
return cljs.core.some.call(null,(function (p__34201){
var vec__34202 = p__34201;
var _ = cljs.core.nth.call(null,vec__34202,(0),null);
var v = cljs.core.nth.call(null,vec__34202,(1),null);
var and__4115__auto__ = v;
if(cljs.core.truth_(and__4115__auto__)){
return v.call(null,dep);
} else {
return and__4115__auto__;
}
}),cljs.core.filter.call(null,(function (p__34205){
var vec__34206 = p__34205;
var k = cljs.core.nth.call(null,vec__34206,(0),null);
var v = cljs.core.nth.call(null,vec__34206,(1),null);
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

var seq__34218_34226 = cljs.core.seq.call(null,deps);
var chunk__34219_34227 = null;
var count__34220_34228 = (0);
var i__34221_34229 = (0);
while(true){
if((i__34221_34229 < count__34220_34228)){
var dep_34230 = cljs.core._nth.call(null,chunk__34219_34227,i__34221_34229);
if(cljs.core.truth_((function (){var and__4115__auto__ = dep_34230;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_34230));
} else {
return and__4115__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_34230,(depth + (1)),state);
} else {
}


var G__34231 = seq__34218_34226;
var G__34232 = chunk__34219_34227;
var G__34233 = count__34220_34228;
var G__34234 = (i__34221_34229 + (1));
seq__34218_34226 = G__34231;
chunk__34219_34227 = G__34232;
count__34220_34228 = G__34233;
i__34221_34229 = G__34234;
continue;
} else {
var temp__5720__auto___34235 = cljs.core.seq.call(null,seq__34218_34226);
if(temp__5720__auto___34235){
var seq__34218_34236__$1 = temp__5720__auto___34235;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34218_34236__$1)){
var c__4556__auto___34237 = cljs.core.chunk_first.call(null,seq__34218_34236__$1);
var G__34238 = cljs.core.chunk_rest.call(null,seq__34218_34236__$1);
var G__34239 = c__4556__auto___34237;
var G__34240 = cljs.core.count.call(null,c__4556__auto___34237);
var G__34241 = (0);
seq__34218_34226 = G__34238;
chunk__34219_34227 = G__34239;
count__34220_34228 = G__34240;
i__34221_34229 = G__34241;
continue;
} else {
var dep_34242 = cljs.core.first.call(null,seq__34218_34236__$1);
if(cljs.core.truth_((function (){var and__4115__auto__ = dep_34242;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_34242));
} else {
return and__4115__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_34242,(depth + (1)),state);
} else {
}


var G__34243 = cljs.core.next.call(null,seq__34218_34236__$1);
var G__34244 = null;
var G__34245 = (0);
var G__34246 = (0);
seq__34218_34226 = G__34243;
chunk__34219_34227 = G__34244;
count__34220_34228 = G__34245;
i__34221_34229 = G__34246;
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
var elim_dups_STAR_ = (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__34222){
var vec__34223 = p__34222;
var seq__34224 = cljs.core.seq.call(null,vec__34223);
var first__34225 = cljs.core.first.call(null,seq__34224);
var seq__34224__$1 = cljs.core.next.call(null,seq__34224);
var x = first__34225;
var xs = seq__34224__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,(function (p1__34209_SHARP_){
return clojure.set.difference.call(null,p1__34209_SHARP_,x);
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
figwheel.client.file_reloading.resolve_ns = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?figwheel.client.file_reloading.name__GT_path:(function (p1__34247_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,p1__34247_SHARP_))].join('');
}));
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__34248 = cljs.core.seq.call(null,provides);
var chunk__34249 = null;
var count__34250 = (0);
var i__34251 = (0);
while(true){
if((i__34251 < count__34250)){
var prov = cljs.core._nth.call(null,chunk__34249,i__34251);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__34260_34268 = cljs.core.seq.call(null,requires);
var chunk__34261_34269 = null;
var count__34262_34270 = (0);
var i__34263_34271 = (0);
while(true){
if((i__34263_34271 < count__34262_34270)){
var req_34272 = cljs.core._nth.call(null,chunk__34261_34269,i__34263_34271);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_34272,prov);


var G__34273 = seq__34260_34268;
var G__34274 = chunk__34261_34269;
var G__34275 = count__34262_34270;
var G__34276 = (i__34263_34271 + (1));
seq__34260_34268 = G__34273;
chunk__34261_34269 = G__34274;
count__34262_34270 = G__34275;
i__34263_34271 = G__34276;
continue;
} else {
var temp__5720__auto___34277 = cljs.core.seq.call(null,seq__34260_34268);
if(temp__5720__auto___34277){
var seq__34260_34278__$1 = temp__5720__auto___34277;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34260_34278__$1)){
var c__4556__auto___34279 = cljs.core.chunk_first.call(null,seq__34260_34278__$1);
var G__34280 = cljs.core.chunk_rest.call(null,seq__34260_34278__$1);
var G__34281 = c__4556__auto___34279;
var G__34282 = cljs.core.count.call(null,c__4556__auto___34279);
var G__34283 = (0);
seq__34260_34268 = G__34280;
chunk__34261_34269 = G__34281;
count__34262_34270 = G__34282;
i__34263_34271 = G__34283;
continue;
} else {
var req_34284 = cljs.core.first.call(null,seq__34260_34278__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_34284,prov);


var G__34285 = cljs.core.next.call(null,seq__34260_34278__$1);
var G__34286 = null;
var G__34287 = (0);
var G__34288 = (0);
seq__34260_34268 = G__34285;
chunk__34261_34269 = G__34286;
count__34262_34270 = G__34287;
i__34263_34271 = G__34288;
continue;
}
} else {
}
}
break;
}


var G__34289 = seq__34248;
var G__34290 = chunk__34249;
var G__34291 = count__34250;
var G__34292 = (i__34251 + (1));
seq__34248 = G__34289;
chunk__34249 = G__34290;
count__34250 = G__34291;
i__34251 = G__34292;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__34248);
if(temp__5720__auto__){
var seq__34248__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34248__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__34248__$1);
var G__34293 = cljs.core.chunk_rest.call(null,seq__34248__$1);
var G__34294 = c__4556__auto__;
var G__34295 = cljs.core.count.call(null,c__4556__auto__);
var G__34296 = (0);
seq__34248 = G__34293;
chunk__34249 = G__34294;
count__34250 = G__34295;
i__34251 = G__34296;
continue;
} else {
var prov = cljs.core.first.call(null,seq__34248__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__34264_34297 = cljs.core.seq.call(null,requires);
var chunk__34265_34298 = null;
var count__34266_34299 = (0);
var i__34267_34300 = (0);
while(true){
if((i__34267_34300 < count__34266_34299)){
var req_34301 = cljs.core._nth.call(null,chunk__34265_34298,i__34267_34300);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_34301,prov);


var G__34302 = seq__34264_34297;
var G__34303 = chunk__34265_34298;
var G__34304 = count__34266_34299;
var G__34305 = (i__34267_34300 + (1));
seq__34264_34297 = G__34302;
chunk__34265_34298 = G__34303;
count__34266_34299 = G__34304;
i__34267_34300 = G__34305;
continue;
} else {
var temp__5720__auto___34306__$1 = cljs.core.seq.call(null,seq__34264_34297);
if(temp__5720__auto___34306__$1){
var seq__34264_34307__$1 = temp__5720__auto___34306__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34264_34307__$1)){
var c__4556__auto___34308 = cljs.core.chunk_first.call(null,seq__34264_34307__$1);
var G__34309 = cljs.core.chunk_rest.call(null,seq__34264_34307__$1);
var G__34310 = c__4556__auto___34308;
var G__34311 = cljs.core.count.call(null,c__4556__auto___34308);
var G__34312 = (0);
seq__34264_34297 = G__34309;
chunk__34265_34298 = G__34310;
count__34266_34299 = G__34311;
i__34267_34300 = G__34312;
continue;
} else {
var req_34313 = cljs.core.first.call(null,seq__34264_34307__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_34313,prov);


var G__34314 = cljs.core.next.call(null,seq__34264_34307__$1);
var G__34315 = null;
var G__34316 = (0);
var G__34317 = (0);
seq__34264_34297 = G__34314;
chunk__34265_34298 = G__34315;
count__34266_34299 = G__34316;
i__34267_34300 = G__34317;
continue;
}
} else {
}
}
break;
}


var G__34318 = cljs.core.next.call(null,seq__34248__$1);
var G__34319 = null;
var G__34320 = (0);
var G__34321 = (0);
seq__34248 = G__34318;
chunk__34249 = G__34319;
count__34250 = G__34320;
i__34251 = G__34321;
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
var seq__34322_34326 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__34323_34327 = null;
var count__34324_34328 = (0);
var i__34325_34329 = (0);
while(true){
if((i__34325_34329 < count__34324_34328)){
var ns_34330 = cljs.core._nth.call(null,chunk__34323_34327,i__34325_34329);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_34330);


var G__34331 = seq__34322_34326;
var G__34332 = chunk__34323_34327;
var G__34333 = count__34324_34328;
var G__34334 = (i__34325_34329 + (1));
seq__34322_34326 = G__34331;
chunk__34323_34327 = G__34332;
count__34324_34328 = G__34333;
i__34325_34329 = G__34334;
continue;
} else {
var temp__5720__auto___34335 = cljs.core.seq.call(null,seq__34322_34326);
if(temp__5720__auto___34335){
var seq__34322_34336__$1 = temp__5720__auto___34335;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34322_34336__$1)){
var c__4556__auto___34337 = cljs.core.chunk_first.call(null,seq__34322_34336__$1);
var G__34338 = cljs.core.chunk_rest.call(null,seq__34322_34336__$1);
var G__34339 = c__4556__auto___34337;
var G__34340 = cljs.core.count.call(null,c__4556__auto___34337);
var G__34341 = (0);
seq__34322_34326 = G__34338;
chunk__34323_34327 = G__34339;
count__34324_34328 = G__34340;
i__34325_34329 = G__34341;
continue;
} else {
var ns_34342 = cljs.core.first.call(null,seq__34322_34336__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_34342);


var G__34343 = cljs.core.next.call(null,seq__34322_34336__$1);
var G__34344 = null;
var G__34345 = (0);
var G__34346 = (0);
seq__34322_34326 = G__34343;
chunk__34323_34327 = G__34344;
count__34324_34328 = G__34345;
i__34325_34329 = G__34346;
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
var G__34347__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__34347 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34348__i = 0, G__34348__a = new Array(arguments.length -  0);
while (G__34348__i < G__34348__a.length) {G__34348__a[G__34348__i] = arguments[G__34348__i + 0]; ++G__34348__i;}
  args = new cljs.core.IndexedSeq(G__34348__a,0,null);
} 
return G__34347__delegate.call(this,args);};
G__34347.cljs$lang$maxFixedArity = 0;
G__34347.cljs$lang$applyTo = (function (arglist__34349){
var args = cljs.core.seq(arglist__34349);
return G__34347__delegate(args);
});
G__34347.cljs$core$IFn$_invoke$arity$variadic = G__34347__delegate;
return G__34347;
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
figwheel.client.file_reloading.gloader = (((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.safeLoad !== 'undefined'))?(function (p1__34350_SHARP_,p2__34351_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__34350_SHARP_)),p2__34351_SHARP_);
}):(((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.load !== 'undefined'))?(function (p1__34352_SHARP_,p2__34353_SHARP_){
return goog.net.jsloader.load(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__34352_SHARP_),p2__34353_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__34354 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__34354.addCallback((function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
}));

G__34354.addErrback((function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
}));

return G__34354;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e34355){if((e34355 instanceof Error)){
var e = e34355;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e34355;

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
}catch (e34356){if((e34356 instanceof Error)){
var e = e34356;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e34356;

}
}})());
});
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__34357 = cljs.core._EQ_;
var expr__34358 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__34357.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__34358))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__34357.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__34358))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__34357.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__34358))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return (function (a,b){
throw "Reload not defined for this platform";
});
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__34360,callback){
var map__34361 = p__34360;
var map__34361__$1 = (((((!((map__34361 == null))))?(((((map__34361.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34361.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34361):map__34361);
var file_msg = map__34361__$1;
var request_url = cljs.core.get.call(null,map__34361__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

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
figwheel.client.file_reloading.reloader_loop = (function (){var c__31982__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__31983__auto__ = (function (){var switch__31887__auto__ = (function (state_34399){
var state_val_34400 = (state_34399[(1)]);
if((state_val_34400 === (7))){
var inst_34395 = (state_34399[(2)]);
var state_34399__$1 = state_34399;
var statearr_34401_34427 = state_34399__$1;
(statearr_34401_34427[(2)] = inst_34395);

(statearr_34401_34427[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34400 === (1))){
var state_34399__$1 = state_34399;
var statearr_34402_34428 = state_34399__$1;
(statearr_34402_34428[(2)] = null);

(statearr_34402_34428[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34400 === (4))){
var inst_34365 = (state_34399[(7)]);
var inst_34365__$1 = (state_34399[(2)]);
var state_34399__$1 = (function (){var statearr_34403 = state_34399;
(statearr_34403[(7)] = inst_34365__$1);

return statearr_34403;
})();
if(cljs.core.truth_(inst_34365__$1)){
var statearr_34404_34429 = state_34399__$1;
(statearr_34404_34429[(1)] = (5));

} else {
var statearr_34405_34430 = state_34399__$1;
(statearr_34405_34430[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34400 === (15))){
var inst_34380 = (state_34399[(8)]);
var inst_34378 = (state_34399[(9)]);
var inst_34382 = inst_34380.call(null,inst_34378);
var state_34399__$1 = state_34399;
var statearr_34406_34431 = state_34399__$1;
(statearr_34406_34431[(2)] = inst_34382);

(statearr_34406_34431[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34400 === (13))){
var inst_34389 = (state_34399[(2)]);
var state_34399__$1 = state_34399;
var statearr_34407_34432 = state_34399__$1;
(statearr_34407_34432[(2)] = inst_34389);

(statearr_34407_34432[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34400 === (6))){
var state_34399__$1 = state_34399;
var statearr_34408_34433 = state_34399__$1;
(statearr_34408_34433[(2)] = null);

(statearr_34408_34433[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34400 === (17))){
var inst_34386 = (state_34399[(2)]);
var state_34399__$1 = state_34399;
var statearr_34409_34434 = state_34399__$1;
(statearr_34409_34434[(2)] = inst_34386);

(statearr_34409_34434[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34400 === (3))){
var inst_34397 = (state_34399[(2)]);
var state_34399__$1 = state_34399;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34399__$1,inst_34397);
} else {
if((state_val_34400 === (12))){
var state_34399__$1 = state_34399;
var statearr_34410_34435 = state_34399__$1;
(statearr_34410_34435[(2)] = null);

(statearr_34410_34435[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34400 === (2))){
var state_34399__$1 = state_34399;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34399__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_34400 === (11))){
var inst_34370 = (state_34399[(10)]);
var inst_34376 = figwheel.client.file_reloading.blocking_load.call(null,inst_34370);
var state_34399__$1 = state_34399;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34399__$1,(14),inst_34376);
} else {
if((state_val_34400 === (9))){
var inst_34370 = (state_34399[(10)]);
var state_34399__$1 = state_34399;
if(cljs.core.truth_(inst_34370)){
var statearr_34411_34436 = state_34399__$1;
(statearr_34411_34436[(1)] = (11));

} else {
var statearr_34412_34437 = state_34399__$1;
(statearr_34412_34437[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34400 === (5))){
var inst_34365 = (state_34399[(7)]);
var inst_34371 = (state_34399[(11)]);
var inst_34370 = cljs.core.nth.call(null,inst_34365,(0),null);
var inst_34371__$1 = cljs.core.nth.call(null,inst_34365,(1),null);
var state_34399__$1 = (function (){var statearr_34413 = state_34399;
(statearr_34413[(10)] = inst_34370);

(statearr_34413[(11)] = inst_34371__$1);

return statearr_34413;
})();
if(cljs.core.truth_(inst_34371__$1)){
var statearr_34414_34438 = state_34399__$1;
(statearr_34414_34438[(1)] = (8));

} else {
var statearr_34415_34439 = state_34399__$1;
(statearr_34415_34439[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34400 === (14))){
var inst_34380 = (state_34399[(8)]);
var inst_34370 = (state_34399[(10)]);
var inst_34378 = (state_34399[(2)]);
var inst_34379 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_34380__$1 = cljs.core.get.call(null,inst_34379,inst_34370);
var state_34399__$1 = (function (){var statearr_34416 = state_34399;
(statearr_34416[(8)] = inst_34380__$1);

(statearr_34416[(9)] = inst_34378);

return statearr_34416;
})();
if(cljs.core.truth_(inst_34380__$1)){
var statearr_34417_34440 = state_34399__$1;
(statearr_34417_34440[(1)] = (15));

} else {
var statearr_34418_34441 = state_34399__$1;
(statearr_34418_34441[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34400 === (16))){
var inst_34378 = (state_34399[(9)]);
var inst_34384 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_34378);
var state_34399__$1 = state_34399;
var statearr_34419_34442 = state_34399__$1;
(statearr_34419_34442[(2)] = inst_34384);

(statearr_34419_34442[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34400 === (10))){
var inst_34391 = (state_34399[(2)]);
var state_34399__$1 = (function (){var statearr_34420 = state_34399;
(statearr_34420[(12)] = inst_34391);

return statearr_34420;
})();
var statearr_34421_34443 = state_34399__$1;
(statearr_34421_34443[(2)] = null);

(statearr_34421_34443[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34400 === (8))){
var inst_34371 = (state_34399[(11)]);
var inst_34373 = eval(inst_34371);
var state_34399__$1 = state_34399;
var statearr_34422_34444 = state_34399__$1;
(statearr_34422_34444[(2)] = inst_34373);

(statearr_34422_34444[(1)] = (10));


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
var figwheel$client$file_reloading$state_machine__31888__auto__ = null;
var figwheel$client$file_reloading$state_machine__31888__auto____0 = (function (){
var statearr_34423 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34423[(0)] = figwheel$client$file_reloading$state_machine__31888__auto__);

(statearr_34423[(1)] = (1));

return statearr_34423;
});
var figwheel$client$file_reloading$state_machine__31888__auto____1 = (function (state_34399){
while(true){
var ret_value__31889__auto__ = (function (){try{while(true){
var result__31890__auto__ = switch__31887__auto__.call(null,state_34399);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31890__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31890__auto__;
}
break;
}
}catch (e34424){if((e34424 instanceof Object)){
var ex__31891__auto__ = e34424;
var statearr_34425_34445 = state_34399;
(statearr_34425_34445[(5)] = ex__31891__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34399);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34424;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31889__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34446 = state_34399;
state_34399 = G__34446;
continue;
} else {
return ret_value__31889__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__31888__auto__ = function(state_34399){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__31888__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__31888__auto____1.call(this,state_34399);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__31888__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__31888__auto____0;
figwheel$client$file_reloading$state_machine__31888__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__31888__auto____1;
return figwheel$client$file_reloading$state_machine__31888__auto__;
})()
})();
var state__31984__auto__ = (function (){var statearr_34426 = f__31983__auto__.call(null);
(statearr_34426[(6)] = c__31982__auto__);

return statearr_34426;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31984__auto__);
}));

return c__31982__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__34448 = arguments.length;
switch (G__34448) {
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

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__34450,callback){
var map__34451 = p__34450;
var map__34451__$1 = (((((!((map__34451 == null))))?(((((map__34451.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34451.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34451):map__34451);
var file_msg = map__34451__$1;
var namespace = cljs.core.get.call(null,map__34451__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,(function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
}));

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__34453){
var map__34454 = p__34453;
var map__34454__$1 = (((((!((map__34454 == null))))?(((((map__34454.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34454.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34454):map__34454);
var file_msg = map__34454__$1;
var namespace = cljs.core.get.call(null,map__34454__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.ns_exists_QMARK_ = (function figwheel$client$file_reloading$ns_exists_QMARK_(namespace){
return (!((cljs.core.reduce.call(null,cljs.core.fnil.call(null,goog.object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,namespace),".")) == null)));
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__34456){
var map__34457 = p__34456;
var map__34457__$1 = (((((!((map__34457 == null))))?(((((map__34457.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34457.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34457):map__34457);
var file_msg = map__34457__$1;
var namespace = cljs.core.get.call(null,map__34457__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__34459,callback){
var map__34460 = p__34459;
var map__34460__$1 = (((((!((map__34460 == null))))?(((((map__34460.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34460.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34460):map__34460);
var file_msg = map__34460__$1;
var request_url = cljs.core.get.call(null,map__34460__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__34460__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__31982__auto___34510 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__31983__auto__ = (function (){var switch__31887__auto__ = (function (state_34495){
var state_val_34496 = (state_34495[(1)]);
if((state_val_34496 === (1))){
var inst_34469 = cljs.core.seq.call(null,files);
var inst_34470 = cljs.core.first.call(null,inst_34469);
var inst_34471 = cljs.core.next.call(null,inst_34469);
var inst_34472 = files;
var state_34495__$1 = (function (){var statearr_34497 = state_34495;
(statearr_34497[(7)] = inst_34470);

(statearr_34497[(8)] = inst_34471);

(statearr_34497[(9)] = inst_34472);

return statearr_34497;
})();
var statearr_34498_34511 = state_34495__$1;
(statearr_34498_34511[(2)] = null);

(statearr_34498_34511[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34496 === (2))){
var inst_34478 = (state_34495[(10)]);
var inst_34472 = (state_34495[(9)]);
var inst_34477 = cljs.core.seq.call(null,inst_34472);
var inst_34478__$1 = cljs.core.first.call(null,inst_34477);
var inst_34479 = cljs.core.next.call(null,inst_34477);
var inst_34480 = (inst_34478__$1 == null);
var inst_34481 = cljs.core.not.call(null,inst_34480);
var state_34495__$1 = (function (){var statearr_34499 = state_34495;
(statearr_34499[(10)] = inst_34478__$1);

(statearr_34499[(11)] = inst_34479);

return statearr_34499;
})();
if(inst_34481){
var statearr_34500_34512 = state_34495__$1;
(statearr_34500_34512[(1)] = (4));

} else {
var statearr_34501_34513 = state_34495__$1;
(statearr_34501_34513[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34496 === (3))){
var inst_34493 = (state_34495[(2)]);
var state_34495__$1 = state_34495;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34495__$1,inst_34493);
} else {
if((state_val_34496 === (4))){
var inst_34478 = (state_34495[(10)]);
var inst_34483 = figwheel.client.file_reloading.reload_js_file.call(null,inst_34478);
var state_34495__$1 = state_34495;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34495__$1,(7),inst_34483);
} else {
if((state_val_34496 === (5))){
var inst_34489 = cljs.core.async.close_BANG_.call(null,out);
var state_34495__$1 = state_34495;
var statearr_34502_34514 = state_34495__$1;
(statearr_34502_34514[(2)] = inst_34489);

(statearr_34502_34514[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34496 === (6))){
var inst_34491 = (state_34495[(2)]);
var state_34495__$1 = state_34495;
var statearr_34503_34515 = state_34495__$1;
(statearr_34503_34515[(2)] = inst_34491);

(statearr_34503_34515[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34496 === (7))){
var inst_34479 = (state_34495[(11)]);
var inst_34485 = (state_34495[(2)]);
var inst_34486 = cljs.core.async.put_BANG_.call(null,out,inst_34485);
var inst_34472 = inst_34479;
var state_34495__$1 = (function (){var statearr_34504 = state_34495;
(statearr_34504[(9)] = inst_34472);

(statearr_34504[(12)] = inst_34486);

return statearr_34504;
})();
var statearr_34505_34516 = state_34495__$1;
(statearr_34505_34516[(2)] = null);

(statearr_34505_34516[(1)] = (2));


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
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__31888__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__31888__auto____0 = (function (){
var statearr_34506 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34506[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__31888__auto__);

(statearr_34506[(1)] = (1));

return statearr_34506;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__31888__auto____1 = (function (state_34495){
while(true){
var ret_value__31889__auto__ = (function (){try{while(true){
var result__31890__auto__ = switch__31887__auto__.call(null,state_34495);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31890__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31890__auto__;
}
break;
}
}catch (e34507){if((e34507 instanceof Object)){
var ex__31891__auto__ = e34507;
var statearr_34508_34517 = state_34495;
(statearr_34508_34517[(5)] = ex__31891__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34495);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34507;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31889__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34518 = state_34495;
state_34495 = G__34518;
continue;
} else {
return ret_value__31889__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__31888__auto__ = function(state_34495){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__31888__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__31888__auto____1.call(this,state_34495);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__31888__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__31888__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__31888__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__31888__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__31888__auto__;
})()
})();
var state__31984__auto__ = (function (){var statearr_34509 = f__31983__auto__.call(null);
(statearr_34509[(6)] = c__31982__auto___34510);

return statearr_34509;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31984__auto__);
}));


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__34519,opts){
var map__34520 = p__34519;
var map__34520__$1 = (((((!((map__34520 == null))))?(((((map__34520.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34520.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34520):map__34520);
var eval_body = cljs.core.get.call(null,map__34520__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__34520__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
}catch (e34522){var e = e34522;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Unable to evaluate ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,(function (n){
var temp__5718__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__34523_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__34523_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__34524){
var vec__34525 = p__34524;
var k = cljs.core.nth.call(null,vec__34525,(0),null);
var v = cljs.core.nth.call(null,vec__34525,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__34528){
var vec__34529 = p__34528;
var k = cljs.core.nth.call(null,vec__34529,(0),null);
var v = cljs.core.nth.call(null,vec__34529,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__34535,p__34536){
var map__34537 = p__34535;
var map__34537__$1 = (((((!((map__34537 == null))))?(((((map__34537.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34537.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34537):map__34537);
var opts = map__34537__$1;
var before_jsload = cljs.core.get.call(null,map__34537__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__34537__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__34537__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__34538 = p__34536;
var map__34538__$1 = (((((!((map__34538 == null))))?(((((map__34538.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34538.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34538):map__34538);
var msg = map__34538__$1;
var files = cljs.core.get.call(null,map__34538__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__34538__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__34538__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__31982__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__31983__auto__ = (function (){var switch__31887__auto__ = (function (state_34692){
var state_val_34693 = (state_34692[(1)]);
if((state_val_34693 === (7))){
var inst_34552 = (state_34692[(7)]);
var inst_34554 = (state_34692[(8)]);
var inst_34553 = (state_34692[(9)]);
var inst_34555 = (state_34692[(10)]);
var inst_34560 = cljs.core._nth.call(null,inst_34553,inst_34555);
var inst_34561 = figwheel.client.file_reloading.eval_body.call(null,inst_34560,opts);
var inst_34562 = (inst_34555 + (1));
var tmp34694 = inst_34552;
var tmp34695 = inst_34554;
var tmp34696 = inst_34553;
var inst_34552__$1 = tmp34694;
var inst_34553__$1 = tmp34696;
var inst_34554__$1 = tmp34695;
var inst_34555__$1 = inst_34562;
var state_34692__$1 = (function (){var statearr_34697 = state_34692;
(statearr_34697[(7)] = inst_34552__$1);

(statearr_34697[(8)] = inst_34554__$1);

(statearr_34697[(9)] = inst_34553__$1);

(statearr_34697[(10)] = inst_34555__$1);

(statearr_34697[(11)] = inst_34561);

return statearr_34697;
})();
var statearr_34698_34781 = state_34692__$1;
(statearr_34698_34781[(2)] = null);

(statearr_34698_34781[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34693 === (20))){
var inst_34595 = (state_34692[(12)]);
var inst_34603 = figwheel.client.file_reloading.sort_files.call(null,inst_34595);
var state_34692__$1 = state_34692;
var statearr_34699_34782 = state_34692__$1;
(statearr_34699_34782[(2)] = inst_34603);

(statearr_34699_34782[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34693 === (27))){
var state_34692__$1 = state_34692;
var statearr_34700_34783 = state_34692__$1;
(statearr_34700_34783[(2)] = null);

(statearr_34700_34783[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34693 === (1))){
var inst_34544 = (state_34692[(13)]);
var inst_34541 = before_jsload.call(null,files);
var inst_34542 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_34543 = (function (){return (function (p1__34532_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__34532_SHARP_);
});
})();
var inst_34544__$1 = cljs.core.filter.call(null,inst_34543,files);
var inst_34545 = cljs.core.not_empty.call(null,inst_34544__$1);
var state_34692__$1 = (function (){var statearr_34701 = state_34692;
(statearr_34701[(14)] = inst_34542);

(statearr_34701[(13)] = inst_34544__$1);

(statearr_34701[(15)] = inst_34541);

return statearr_34701;
})();
if(cljs.core.truth_(inst_34545)){
var statearr_34702_34784 = state_34692__$1;
(statearr_34702_34784[(1)] = (2));

} else {
var statearr_34703_34785 = state_34692__$1;
(statearr_34703_34785[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34693 === (24))){
var state_34692__$1 = state_34692;
var statearr_34704_34786 = state_34692__$1;
(statearr_34704_34786[(2)] = null);

(statearr_34704_34786[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34693 === (39))){
var inst_34645 = (state_34692[(16)]);
var state_34692__$1 = state_34692;
var statearr_34705_34787 = state_34692__$1;
(statearr_34705_34787[(2)] = inst_34645);

(statearr_34705_34787[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34693 === (46))){
var inst_34687 = (state_34692[(2)]);
var state_34692__$1 = state_34692;
var statearr_34706_34788 = state_34692__$1;
(statearr_34706_34788[(2)] = inst_34687);

(statearr_34706_34788[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34693 === (4))){
var inst_34589 = (state_34692[(2)]);
var inst_34590 = cljs.core.List.EMPTY;
var inst_34591 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_34590);
var inst_34592 = (function (){return (function (p1__34533_SHARP_){
var and__4115__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__34533_SHARP_);
if(cljs.core.truth_(and__4115__auto__)){
return ((cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__34533_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__34533_SHARP_))));
} else {
return and__4115__auto__;
}
});
})();
var inst_34593 = cljs.core.filter.call(null,inst_34592,files);
var inst_34594 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_34595 = cljs.core.concat.call(null,inst_34593,inst_34594);
var state_34692__$1 = (function (){var statearr_34707 = state_34692;
(statearr_34707[(17)] = inst_34591);

(statearr_34707[(12)] = inst_34595);

(statearr_34707[(18)] = inst_34589);

return statearr_34707;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_34708_34789 = state_34692__$1;
(statearr_34708_34789[(1)] = (16));

} else {
var statearr_34709_34790 = state_34692__$1;
(statearr_34709_34790[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34693 === (15))){
var inst_34579 = (state_34692[(2)]);
var state_34692__$1 = state_34692;
var statearr_34710_34791 = state_34692__$1;
(statearr_34710_34791[(2)] = inst_34579);

(statearr_34710_34791[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34693 === (21))){
var inst_34605 = (state_34692[(19)]);
var inst_34605__$1 = (state_34692[(2)]);
var inst_34606 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_34605__$1);
var state_34692__$1 = (function (){var statearr_34711 = state_34692;
(statearr_34711[(19)] = inst_34605__$1);

return statearr_34711;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34692__$1,(22),inst_34606);
} else {
if((state_val_34693 === (31))){
var inst_34690 = (state_34692[(2)]);
var state_34692__$1 = state_34692;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34692__$1,inst_34690);
} else {
if((state_val_34693 === (32))){
var inst_34645 = (state_34692[(16)]);
var inst_34650 = inst_34645.cljs$lang$protocol_mask$partition0$;
var inst_34651 = (inst_34650 & (64));
var inst_34652 = inst_34645.cljs$core$ISeq$;
var inst_34653 = (cljs.core.PROTOCOL_SENTINEL === inst_34652);
var inst_34654 = ((inst_34651) || (inst_34653));
var state_34692__$1 = state_34692;
if(cljs.core.truth_(inst_34654)){
var statearr_34712_34792 = state_34692__$1;
(statearr_34712_34792[(1)] = (35));

} else {
var statearr_34713_34793 = state_34692__$1;
(statearr_34713_34793[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34693 === (40))){
var inst_34667 = (state_34692[(20)]);
var inst_34666 = (state_34692[(2)]);
var inst_34667__$1 = cljs.core.get.call(null,inst_34666,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_34668 = cljs.core.get.call(null,inst_34666,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_34669 = cljs.core.not_empty.call(null,inst_34667__$1);
var state_34692__$1 = (function (){var statearr_34714 = state_34692;
(statearr_34714[(21)] = inst_34668);

(statearr_34714[(20)] = inst_34667__$1);

return statearr_34714;
})();
if(cljs.core.truth_(inst_34669)){
var statearr_34715_34794 = state_34692__$1;
(statearr_34715_34794[(1)] = (41));

} else {
var statearr_34716_34795 = state_34692__$1;
(statearr_34716_34795[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34693 === (33))){
var state_34692__$1 = state_34692;
var statearr_34717_34796 = state_34692__$1;
(statearr_34717_34796[(2)] = false);

(statearr_34717_34796[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34693 === (13))){
var inst_34565 = (state_34692[(22)]);
var inst_34569 = cljs.core.chunk_first.call(null,inst_34565);
var inst_34570 = cljs.core.chunk_rest.call(null,inst_34565);
var inst_34571 = cljs.core.count.call(null,inst_34569);
var inst_34552 = inst_34570;
var inst_34553 = inst_34569;
var inst_34554 = inst_34571;
var inst_34555 = (0);
var state_34692__$1 = (function (){var statearr_34718 = state_34692;
(statearr_34718[(7)] = inst_34552);

(statearr_34718[(8)] = inst_34554);

(statearr_34718[(9)] = inst_34553);

(statearr_34718[(10)] = inst_34555);

return statearr_34718;
})();
var statearr_34719_34797 = state_34692__$1;
(statearr_34719_34797[(2)] = null);

(statearr_34719_34797[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34693 === (22))){
var inst_34605 = (state_34692[(19)]);
var inst_34613 = (state_34692[(23)]);
var inst_34608 = (state_34692[(24)]);
var inst_34609 = (state_34692[(25)]);
var inst_34608__$1 = (state_34692[(2)]);
var inst_34609__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_34608__$1);
var inst_34610 = (function (){var all_files = inst_34605;
var res_SINGLEQUOTE_ = inst_34608__$1;
var res = inst_34609__$1;
return (function (p1__34534_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__34534_SHARP_));
});
})();
var inst_34611 = cljs.core.filter.call(null,inst_34610,inst_34608__$1);
var inst_34612 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_34613__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_34612);
var inst_34614 = cljs.core.not_empty.call(null,inst_34613__$1);
var state_34692__$1 = (function (){var statearr_34720 = state_34692;
(statearr_34720[(23)] = inst_34613__$1);

(statearr_34720[(26)] = inst_34611);

(statearr_34720[(24)] = inst_34608__$1);

(statearr_34720[(25)] = inst_34609__$1);

return statearr_34720;
})();
if(cljs.core.truth_(inst_34614)){
var statearr_34721_34798 = state_34692__$1;
(statearr_34721_34798[(1)] = (23));

} else {
var statearr_34722_34799 = state_34692__$1;
(statearr_34722_34799[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34693 === (36))){
var state_34692__$1 = state_34692;
var statearr_34723_34800 = state_34692__$1;
(statearr_34723_34800[(2)] = false);

(statearr_34723_34800[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34693 === (41))){
var inst_34667 = (state_34692[(20)]);
var inst_34671 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_34672 = cljs.core.map.call(null,inst_34671,inst_34667);
var inst_34673 = cljs.core.pr_str.call(null,inst_34672);
var inst_34674 = ["figwheel-no-load meta-data: ",inst_34673].join('');
var inst_34675 = figwheel.client.utils.log.call(null,inst_34674);
var state_34692__$1 = state_34692;
var statearr_34724_34801 = state_34692__$1;
(statearr_34724_34801[(2)] = inst_34675);

(statearr_34724_34801[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34693 === (43))){
var inst_34668 = (state_34692[(21)]);
var inst_34678 = (state_34692[(2)]);
var inst_34679 = cljs.core.not_empty.call(null,inst_34668);
var state_34692__$1 = (function (){var statearr_34725 = state_34692;
(statearr_34725[(27)] = inst_34678);

return statearr_34725;
})();
if(cljs.core.truth_(inst_34679)){
var statearr_34726_34802 = state_34692__$1;
(statearr_34726_34802[(1)] = (44));

} else {
var statearr_34727_34803 = state_34692__$1;
(statearr_34727_34803[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34693 === (29))){
var inst_34605 = (state_34692[(19)]);
var inst_34613 = (state_34692[(23)]);
var inst_34611 = (state_34692[(26)]);
var inst_34608 = (state_34692[(24)]);
var inst_34645 = (state_34692[(16)]);
var inst_34609 = (state_34692[(25)]);
var inst_34641 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_34644 = (function (){var all_files = inst_34605;
var res_SINGLEQUOTE_ = inst_34608;
var res = inst_34609;
var files_not_loaded = inst_34611;
var dependencies_that_loaded = inst_34613;
return (function (p__34643){
var map__34728 = p__34643;
var map__34728__$1 = (((((!((map__34728 == null))))?(((((map__34728.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34728.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34728):map__34728);
var namespace = cljs.core.get.call(null,map__34728__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
var inst_34645__$1 = cljs.core.group_by.call(null,inst_34644,inst_34611);
var inst_34647 = (inst_34645__$1 == null);
var inst_34648 = cljs.core.not.call(null,inst_34647);
var state_34692__$1 = (function (){var statearr_34730 = state_34692;
(statearr_34730[(28)] = inst_34641);

(statearr_34730[(16)] = inst_34645__$1);

return statearr_34730;
})();
if(inst_34648){
var statearr_34731_34804 = state_34692__$1;
(statearr_34731_34804[(1)] = (32));

} else {
var statearr_34732_34805 = state_34692__$1;
(statearr_34732_34805[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34693 === (44))){
var inst_34668 = (state_34692[(21)]);
var inst_34681 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_34668);
var inst_34682 = cljs.core.pr_str.call(null,inst_34681);
var inst_34683 = ["not required: ",inst_34682].join('');
var inst_34684 = figwheel.client.utils.log.call(null,inst_34683);
var state_34692__$1 = state_34692;
var statearr_34733_34806 = state_34692__$1;
(statearr_34733_34806[(2)] = inst_34684);

(statearr_34733_34806[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34693 === (6))){
var inst_34586 = (state_34692[(2)]);
var state_34692__$1 = state_34692;
var statearr_34734_34807 = state_34692__$1;
(statearr_34734_34807[(2)] = inst_34586);

(statearr_34734_34807[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34693 === (28))){
var inst_34611 = (state_34692[(26)]);
var inst_34638 = (state_34692[(2)]);
var inst_34639 = cljs.core.not_empty.call(null,inst_34611);
var state_34692__$1 = (function (){var statearr_34735 = state_34692;
(statearr_34735[(29)] = inst_34638);

return statearr_34735;
})();
if(cljs.core.truth_(inst_34639)){
var statearr_34736_34808 = state_34692__$1;
(statearr_34736_34808[(1)] = (29));

} else {
var statearr_34737_34809 = state_34692__$1;
(statearr_34737_34809[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34693 === (25))){
var inst_34609 = (state_34692[(25)]);
var inst_34625 = (state_34692[(2)]);
var inst_34626 = cljs.core.not_empty.call(null,inst_34609);
var state_34692__$1 = (function (){var statearr_34738 = state_34692;
(statearr_34738[(30)] = inst_34625);

return statearr_34738;
})();
if(cljs.core.truth_(inst_34626)){
var statearr_34739_34810 = state_34692__$1;
(statearr_34739_34810[(1)] = (26));

} else {
var statearr_34740_34811 = state_34692__$1;
(statearr_34740_34811[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34693 === (34))){
var inst_34661 = (state_34692[(2)]);
var state_34692__$1 = state_34692;
if(cljs.core.truth_(inst_34661)){
var statearr_34741_34812 = state_34692__$1;
(statearr_34741_34812[(1)] = (38));

} else {
var statearr_34742_34813 = state_34692__$1;
(statearr_34742_34813[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34693 === (17))){
var state_34692__$1 = state_34692;
var statearr_34743_34814 = state_34692__$1;
(statearr_34743_34814[(2)] = recompile_dependents);

(statearr_34743_34814[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34693 === (3))){
var state_34692__$1 = state_34692;
var statearr_34744_34815 = state_34692__$1;
(statearr_34744_34815[(2)] = null);

(statearr_34744_34815[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34693 === (12))){
var inst_34582 = (state_34692[(2)]);
var state_34692__$1 = state_34692;
var statearr_34745_34816 = state_34692__$1;
(statearr_34745_34816[(2)] = inst_34582);

(statearr_34745_34816[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34693 === (2))){
var inst_34544 = (state_34692[(13)]);
var inst_34551 = cljs.core.seq.call(null,inst_34544);
var inst_34552 = inst_34551;
var inst_34553 = null;
var inst_34554 = (0);
var inst_34555 = (0);
var state_34692__$1 = (function (){var statearr_34746 = state_34692;
(statearr_34746[(7)] = inst_34552);

(statearr_34746[(8)] = inst_34554);

(statearr_34746[(9)] = inst_34553);

(statearr_34746[(10)] = inst_34555);

return statearr_34746;
})();
var statearr_34747_34817 = state_34692__$1;
(statearr_34747_34817[(2)] = null);

(statearr_34747_34817[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34693 === (23))){
var inst_34605 = (state_34692[(19)]);
var inst_34613 = (state_34692[(23)]);
var inst_34611 = (state_34692[(26)]);
var inst_34608 = (state_34692[(24)]);
var inst_34609 = (state_34692[(25)]);
var inst_34616 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_34618 = (function (){var all_files = inst_34605;
var res_SINGLEQUOTE_ = inst_34608;
var res = inst_34609;
var files_not_loaded = inst_34611;
var dependencies_that_loaded = inst_34613;
return (function (p__34617){
var map__34748 = p__34617;
var map__34748__$1 = (((((!((map__34748 == null))))?(((((map__34748.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34748.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34748):map__34748);
var request_url = cljs.core.get.call(null,map__34748__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
})();
var inst_34619 = cljs.core.reverse.call(null,inst_34613);
var inst_34620 = cljs.core.map.call(null,inst_34618,inst_34619);
var inst_34621 = cljs.core.pr_str.call(null,inst_34620);
var inst_34622 = figwheel.client.utils.log.call(null,inst_34621);
var state_34692__$1 = (function (){var statearr_34750 = state_34692;
(statearr_34750[(31)] = inst_34616);

return statearr_34750;
})();
var statearr_34751_34818 = state_34692__$1;
(statearr_34751_34818[(2)] = inst_34622);

(statearr_34751_34818[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34693 === (35))){
var state_34692__$1 = state_34692;
var statearr_34752_34819 = state_34692__$1;
(statearr_34752_34819[(2)] = true);

(statearr_34752_34819[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34693 === (19))){
var inst_34595 = (state_34692[(12)]);
var inst_34601 = figwheel.client.file_reloading.expand_files.call(null,inst_34595);
var state_34692__$1 = state_34692;
var statearr_34753_34820 = state_34692__$1;
(statearr_34753_34820[(2)] = inst_34601);

(statearr_34753_34820[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34693 === (11))){
var state_34692__$1 = state_34692;
var statearr_34754_34821 = state_34692__$1;
(statearr_34754_34821[(2)] = null);

(statearr_34754_34821[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34693 === (9))){
var inst_34584 = (state_34692[(2)]);
var state_34692__$1 = state_34692;
var statearr_34755_34822 = state_34692__$1;
(statearr_34755_34822[(2)] = inst_34584);

(statearr_34755_34822[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34693 === (5))){
var inst_34554 = (state_34692[(8)]);
var inst_34555 = (state_34692[(10)]);
var inst_34557 = (inst_34555 < inst_34554);
var inst_34558 = inst_34557;
var state_34692__$1 = state_34692;
if(cljs.core.truth_(inst_34558)){
var statearr_34756_34823 = state_34692__$1;
(statearr_34756_34823[(1)] = (7));

} else {
var statearr_34757_34824 = state_34692__$1;
(statearr_34757_34824[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34693 === (14))){
var inst_34565 = (state_34692[(22)]);
var inst_34574 = cljs.core.first.call(null,inst_34565);
var inst_34575 = figwheel.client.file_reloading.eval_body.call(null,inst_34574,opts);
var inst_34576 = cljs.core.next.call(null,inst_34565);
var inst_34552 = inst_34576;
var inst_34553 = null;
var inst_34554 = (0);
var inst_34555 = (0);
var state_34692__$1 = (function (){var statearr_34758 = state_34692;
(statearr_34758[(7)] = inst_34552);

(statearr_34758[(8)] = inst_34554);

(statearr_34758[(9)] = inst_34553);

(statearr_34758[(10)] = inst_34555);

(statearr_34758[(32)] = inst_34575);

return statearr_34758;
})();
var statearr_34759_34825 = state_34692__$1;
(statearr_34759_34825[(2)] = null);

(statearr_34759_34825[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34693 === (45))){
var state_34692__$1 = state_34692;
var statearr_34760_34826 = state_34692__$1;
(statearr_34760_34826[(2)] = null);

(statearr_34760_34826[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34693 === (26))){
var inst_34605 = (state_34692[(19)]);
var inst_34613 = (state_34692[(23)]);
var inst_34611 = (state_34692[(26)]);
var inst_34608 = (state_34692[(24)]);
var inst_34609 = (state_34692[(25)]);
var inst_34628 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_34630 = (function (){var all_files = inst_34605;
var res_SINGLEQUOTE_ = inst_34608;
var res = inst_34609;
var files_not_loaded = inst_34611;
var dependencies_that_loaded = inst_34613;
return (function (p__34629){
var map__34761 = p__34629;
var map__34761__$1 = (((((!((map__34761 == null))))?(((((map__34761.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34761.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34761):map__34761);
var namespace = cljs.core.get.call(null,map__34761__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__34761__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
})();
var inst_34631 = cljs.core.map.call(null,inst_34630,inst_34609);
var inst_34632 = cljs.core.pr_str.call(null,inst_34631);
var inst_34633 = figwheel.client.utils.log.call(null,inst_34632);
var inst_34634 = (function (){var all_files = inst_34605;
var res_SINGLEQUOTE_ = inst_34608;
var res = inst_34609;
var files_not_loaded = inst_34611;
var dependencies_that_loaded = inst_34613;
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
})();
var inst_34635 = setTimeout(inst_34634,(10));
var state_34692__$1 = (function (){var statearr_34763 = state_34692;
(statearr_34763[(33)] = inst_34633);

(statearr_34763[(34)] = inst_34628);

return statearr_34763;
})();
var statearr_34764_34827 = state_34692__$1;
(statearr_34764_34827[(2)] = inst_34635);

(statearr_34764_34827[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34693 === (16))){
var state_34692__$1 = state_34692;
var statearr_34765_34828 = state_34692__$1;
(statearr_34765_34828[(2)] = reload_dependents);

(statearr_34765_34828[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34693 === (38))){
var inst_34645 = (state_34692[(16)]);
var inst_34663 = cljs.core.apply.call(null,cljs.core.hash_map,inst_34645);
var state_34692__$1 = state_34692;
var statearr_34766_34829 = state_34692__$1;
(statearr_34766_34829[(2)] = inst_34663);

(statearr_34766_34829[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34693 === (30))){
var state_34692__$1 = state_34692;
var statearr_34767_34830 = state_34692__$1;
(statearr_34767_34830[(2)] = null);

(statearr_34767_34830[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34693 === (10))){
var inst_34565 = (state_34692[(22)]);
var inst_34567 = cljs.core.chunked_seq_QMARK_.call(null,inst_34565);
var state_34692__$1 = state_34692;
if(inst_34567){
var statearr_34768_34831 = state_34692__$1;
(statearr_34768_34831[(1)] = (13));

} else {
var statearr_34769_34832 = state_34692__$1;
(statearr_34769_34832[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34693 === (18))){
var inst_34599 = (state_34692[(2)]);
var state_34692__$1 = state_34692;
if(cljs.core.truth_(inst_34599)){
var statearr_34770_34833 = state_34692__$1;
(statearr_34770_34833[(1)] = (19));

} else {
var statearr_34771_34834 = state_34692__$1;
(statearr_34771_34834[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34693 === (42))){
var state_34692__$1 = state_34692;
var statearr_34772_34835 = state_34692__$1;
(statearr_34772_34835[(2)] = null);

(statearr_34772_34835[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34693 === (37))){
var inst_34658 = (state_34692[(2)]);
var state_34692__$1 = state_34692;
var statearr_34773_34836 = state_34692__$1;
(statearr_34773_34836[(2)] = inst_34658);

(statearr_34773_34836[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34693 === (8))){
var inst_34552 = (state_34692[(7)]);
var inst_34565 = (state_34692[(22)]);
var inst_34565__$1 = cljs.core.seq.call(null,inst_34552);
var state_34692__$1 = (function (){var statearr_34774 = state_34692;
(statearr_34774[(22)] = inst_34565__$1);

return statearr_34774;
})();
if(inst_34565__$1){
var statearr_34775_34837 = state_34692__$1;
(statearr_34775_34837[(1)] = (10));

} else {
var statearr_34776_34838 = state_34692__$1;
(statearr_34776_34838[(1)] = (11));

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
var figwheel$client$file_reloading$reload_js_files_$_state_machine__31888__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__31888__auto____0 = (function (){
var statearr_34777 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34777[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__31888__auto__);

(statearr_34777[(1)] = (1));

return statearr_34777;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__31888__auto____1 = (function (state_34692){
while(true){
var ret_value__31889__auto__ = (function (){try{while(true){
var result__31890__auto__ = switch__31887__auto__.call(null,state_34692);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31890__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31890__auto__;
}
break;
}
}catch (e34778){if((e34778 instanceof Object)){
var ex__31891__auto__ = e34778;
var statearr_34779_34839 = state_34692;
(statearr_34779_34839[(5)] = ex__31891__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34692);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34778;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31889__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34840 = state_34692;
state_34692 = G__34840;
continue;
} else {
return ret_value__31889__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__31888__auto__ = function(state_34692){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__31888__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__31888__auto____1.call(this,state_34692);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__31888__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__31888__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__31888__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__31888__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__31888__auto__;
})()
})();
var state__31984__auto__ = (function (){var statearr_34780 = f__31983__auto__.call(null);
(statearr_34780[(6)] = c__31982__auto__);

return statearr_34780;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31984__auto__);
}));

return c__31982__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__34843,link){
var map__34844 = p__34843;
var map__34844__$1 = (((((!((map__34844 == null))))?(((((map__34844.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34844.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34844):map__34844);
var file = cljs.core.get.call(null,map__34844__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5720__auto__ = link.href;
if(cljs.core.truth_(temp__5720__auto__)){
var link_href = temp__5720__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,(function (p1__34841_SHARP_,p2__34842_SHARP_){
if(cljs.core._EQ_.call(null,p1__34841_SHARP_,p2__34842_SHARP_)){
return p1__34841_SHARP_;
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
var temp__5720__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__34847){
var map__34848 = p__34847;
var map__34848__$1 = (((((!((map__34848 == null))))?(((((map__34848.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34848.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34848):map__34848);
var match_length = cljs.core.get.call(null,map__34848__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__34848__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__34846_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__34846_SHARP_);
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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__34850_SHARP_,p2__34851_SHARP_){
return cljs.core.assoc.call(null,p1__34850_SHARP_,cljs.core.get.call(null,p2__34851_SHARP_,key),p2__34851_SHARP_);
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
var loaded_f_datas_34852 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_34852);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_34852);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__34853,p__34854){
var map__34855 = p__34853;
var map__34855__$1 = (((((!((map__34855 == null))))?(((((map__34855.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34855.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34855):map__34855);
var on_cssload = cljs.core.get.call(null,map__34855__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__34856 = p__34854;
var map__34856__$1 = (((((!((map__34856 == null))))?(((((map__34856.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34856.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34856):map__34856);
var files_msg = map__34856__$1;
var files = cljs.core.get.call(null,map__34856__$1,new cljs.core.Keyword(null,"files","files",-472457450));
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

//# sourceMappingURL=file_reloading.js.map?rel=1683240958139
