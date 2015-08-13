/*!CK:1273230971!*//*1431324060,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["d7V4X"]); }

__d("DetectBrokenProxyCache",["AsyncSignal","Cookie","URI"],function(a,b,c,d,e,f,g,h,i){b.__markCompiled&&b.__markCompiled();function j(k,l){var m=h.get(l);if((m!=k)&&(m!=null)&&(k!='0')){var n={c:'si_detect_broken_proxy_cache',m:l+' '+k+' '+m},o=new i('/common/scribe_endpoint.php').getQualifiedURI().toString();new g(o,n).send();}}e.exports={run:j};},null);
__d("DimensionLogging",["BanzaiNectar","DOMDimensions"],function(a,b,c,d,e,f,g,h){b.__markCompiled&&b.__markCompiled();var i=h.getViewportDimensions();g.log('browser_dimension','homeload',{x:i.width,y:i.height,sw:window.screen.width,sh:window.screen.height,aw:window.screen.availWidth,ah:window.screen.availHeight,at:window.screen.availTop,al:window.screen.availLeft});},null);
__d("DimensionTracking",["Cookie","DOMDimensions","Event","debounce","isInIframe"],function(a,b,c,d,e,f,g,h,i,j,k){b.__markCompiled&&b.__markCompiled();function l(){var m=h.getViewportDimensions();g.set('wd',m.width+'x'+m.height);}if(!k()){setTimeout(l,100);i.listen(window,'resize',j(l,250));i.listen(window,'focus',l);}},null);
__d("HighContrastMode",["AccessibilityLogger","CSS","CurrentUser","DOM","Style","URI","emptyFunction"],function(a,b,c,d,e,f,g,h,i,j,k,l,m){b.__markCompiled&&b.__markCompiled();var n={init:function(o){var p=new l(window.location.href);if(p.getPath().indexOf('/intern/')===0)return;if(window.top!==window.self)return;var q=j.create('div');j.appendContent(document.body,q);q.style.cssText='border: 1px solid !important;'+'border-color: red green !important;'+'position: fixed;'+'height: 5px;'+'top: -999px;'+'background-image: url('+o.spacerImage+') !important;';var r=k.get(q,'background-image'),s=k.get(q,'border-top-color'),t=k.get(q,'border-right-color'),u=s==t&&(r&&(r=='none'||r=='url(invalid-url:)'));if(u){h.conditionClass(document.documentElement,'highContrast',u);if(i.getID())g.logHCM();}j.remove(q);n.init=m;}};e.exports=n;},null);
__d("Live",["Arbiter","AsyncDOM","AsyncSignal","ChannelConstants","DataStore","DOM","ServerJS","createArrayFromMixed","emptyFunction"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){b.__markCompiled&&b.__markCompiled();function p(r,s){s=JSON.parse(JSON.stringify(s));new m().setRelativeTo(r).handle(s);}var q={logAll:false,startup:function(r){q.logAll=r;q.startup=o;g.subscribe(j.getArbiterType('live'),q.handleMessage.bind(q));},lookupLiveNode:function(r,s){var t=l.scry(document.body,'.live_'+r+'_'+s);t.forEach(function(u){if(k.get(u,'seqnum')===(void 0)){var v=JSON.parse(u.getAttribute('data-live'));k.set(u,'seqnum',v.seq);}});return t;},handleMessage:function(r,s){var t=s.obj,u=t.fbid,v=t.assoc,w=this.lookupLiveNode(u,v);if(!w)return false;w.forEach(function(x){h.invoke(t.updates,x);if(t.js)p(x,t.js);});},log:function(){if(q.logAll){var r=n(arguments).join(':');new i('/common/scribe_endpoint.php',{c:'live_sequence',m:r}).send();}}};e.exports=q;},null);
__d("UFITracking",["Bootloader"],function(a,b,c,d,e,f,g){b.__markCompiled&&b.__markCompiled();function h(j){g.loadModules(["DOM","collectDataAttributes"],function(k,l){j.forEach(function(m){var n=k.scry(document.body,m);if(!n||n.link_data)return;var o=l(n,['ft']).ft;if(Object.keys(o).length){var p=k.create('input',{type:'hidden',name:'link_data',value:JSON.stringify(o)});n.appendChild(p);}});});}var i={addAllLinkData:function(){h(['form.commentable_item']);},addAllLinkDataForQuestion:function(){h(['form.fbEigenpollForm','form.fbQuestionPollForm']);}};e.exports=i;},null);