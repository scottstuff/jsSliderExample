/*! jQuery v1.9.1 | (c) 2005, 2012 jQuery Foundation, Inc. | jquery.org/license
//@ sourceMappingURL=jquery.min.map
*/(function(e,t){var n,r,i=typeof t,o=e.document,a=e.location,s=e.jQuery,u=e.$,l={},c=[],p="1.9.1",f=c.concat,d=c.push,h=c.slice,g=c.indexOf,m=l.toString,y=l.hasOwnProperty,v=p.trim,b=function(e,t){return new b.fn.init(e,t,r)},x=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,w=/\S+/g,T=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,N=/^(?:(<[\w\W]+>)[^>]*|#([\w-]*))$/,C=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,k=/^[\],:{}\s]*$/,E=/(?:^|:|,)(?:\s*\[)+/g,S=/\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,A=/"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,j=/^-ms-/,D=/-([\da-z])/gi,L=function(e,t){return t.toUpperCase()},H=function(e){(o.addEventListener||"load"===e.type||"complete"===o.readyState)&&(q(),b.ready())},q=function(){o.addEventListener?(o.removeEventListener("DOMContentLoaded",H,!1),e.removeEventListener("load",H,!1)):(o.detachEvent("onreadystatechange",H),e.detachEvent("onload",H))};b.fn=b.prototype={jquery:p,constructor:b,init:function(e,n,r){var i,a;if(!e)return this;if("string"==typeof e){if(i="<"===e.charAt(0)&&">"===e.charAt(e.length-1)&&e.length>=3?[null,e,null]:N.exec(e),!i||!i[1]&&n)return!n||n.jquery?(n||r).find(e):this.constructor(n).find(e);if(i[1]){if(n=n instanceof b?n[0]:n,b.merge(this,b.parseHTML(i[1],n&&n.nodeType?n.ownerDocument||n:o,!0)),C.test(i[1])&&b.isPlainObject(n))for(i in n)b.isFunction(this[i])?this[i](n[i]):this.attr(i,n[i]);return this}if(a=o.getElementById(i[2]),a&&a.parentNode){if(a.id!==i[2])return r.find(e);this.length=1,this[0]=a}return this.context=o,this.selector=e,this}return e.nodeType?(this.context=this[0]=e,this.length=1,this):b.isFunction(e)?r.ready(e):(e.selector!==t&&(this.selector=e.selector,this.context=e.context),b.makeArray(e,this))},selector:"",length:0,size:function(){return this.length},toArray:function(){return h.call(this)},get:function(e){return null==e?this.toArray():0>e?this[this.length+e]:this[e]},pushStack:function(e){var t=b.merge(this.constructor(),e);return t.prevObject=this,t.context=this.context,t},each:function(e,t){return b.each(this,e,t)},ready:function(e){return b.ready.promise().done(e),this},slice:function(){return this.pushStack(h.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(0>e?t:0);return this.pushStack(n>=0&&t>n?[this[n]]:[])},map:function(e){return this.pushStack(b.map(this,function(t,n){return e.call(t,n,t)}))},end:function(){return this.prevObject||this.constructor(null)},push:d,sort:[].sort,splice:[].splice},b.fn.init.prototype=b.fn,b.extend=b.fn.extend=function(){var e,n,r,i,o,a,s=arguments[0]||{},u=1,l=arguments.length,c=!1;for("boolean"==typeof s&&(c=s,s=arguments[1]||{},u=2),"object"==typeof s||b.isFunction(s)||(s={}),l===u&&(s=this,--u);l>u;u++)if(null!=(o=arguments[u]))for(i in o)e=s[i],r=o[i],s!==r&&(c&&r&&(b.isPlainObject(r)||(n=b.isArray(r)))?(n?(n=!1,a=e&&b.isArray(e)?e:[]):a=e&&b.isPlainObject(e)?e:{},s[i]=b.extend(c,a,r)):r!==t&&(s[i]=r));return s},b.extend({noConflict:function(t){return e.$===b&&(e.$=u),t&&e.jQuery===b&&(e.jQuery=s),b},isReady:!1,readyWait:1,holdReady:function(e){e?b.readyWait++:b.ready(!0)},ready:function(e){if(e===!0?!--b.readyWait:!b.isReady){if(!o.body)return setTimeout(b.ready);b.isReady=!0,e!==!0&&--b.readyWait>0||(n.resolveWith(o,[b]),b.fn.trigger&&b(o).trigger("ready").off("ready"))}},isFunction:function(e){return"function"===b.type(e)},isArray:Array.isArray||function(e){return"array"===b.type(e)},isWindow:function(e){return null!=e&&e==e.window},isNumeric:function(e){return!isNaN(parseFloat(e))&&isFinite(e)},type:function(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?l[m.call(e)]||"object":typeof e},isPlainObject:function(e){if(!e||"object"!==b.type(e)||e.nodeType||b.isWindow(e))return!1;try{if(e.constructor&&!y.call(e,"constructor")&&!y.call(e.constructor.prototype,"isPrototypeOf"))return!1}catch(n){return!1}var r;for(r in e);return r===t||y.call(e,r)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},error:function(e){throw Error(e)},parseHTML:function(e,t,n){if(!e||"string"!=typeof e)return null;"boolean"==typeof t&&(n=t,t=!1),t=t||o;var r=C.exec(e),i=!n&&[];return r?[t.createElement(r[1])]:(r=b.buildFragment([e],t,i),i&&b(i).remove(),b.merge([],r.childNodes))},parseJSON:function(n){return e.JSON&&e.JSON.parse?e.JSON.parse(n):null===n?n:"string"==typeof n&&(n=b.trim(n),n&&k.test(n.replace(S,"@").replace(A,"]").replace(E,"")))?Function("return "+n)():(b.error("Invalid JSON: "+n),t)},parseXML:function(n){var r,i;if(!n||"string"!=typeof n)return null;try{e.DOMParser?(i=new DOMParser,r=i.parseFromString(n,"text/xml")):(r=new ActiveXObject("Microsoft.XMLDOM"),r.async="false",r.loadXML(n))}catch(o){r=t}return r&&r.documentElement&&!r.getElementsByTagName("parsererror").length||b.error("Invalid XML: "+n),r},noop:function(){},globalEval:function(t){t&&b.trim(t)&&(e.execScript||function(t){e.eval.call(e,t)})(t)},camelCase:function(e){return e.replace(j,"ms-").replace(D,L)},nodeName:function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()},each:function(e,t,n){var r,i=0,o=e.length,a=M(e);if(n){if(a){for(;o>i;i++)if(r=t.apply(e[i],n),r===!1)break}else for(i in e)if(r=t.apply(e[i],n),r===!1)break}else if(a){for(;o>i;i++)if(r=t.call(e[i],i,e[i]),r===!1)break}else for(i in e)if(r=t.call(e[i],i,e[i]),r===!1)break;return e},trim:v&&!v.call("\ufeff\u00a0")?function(e){return null==e?"":v.call(e)}:function(e){return null==e?"":(e+"").replace(T,"")},makeArray:function(e,t){var n=t||[];return null!=e&&(M(Object(e))?b.merge(n,"string"==typeof e?[e]:e):d.call(n,e)),n},inArray:function(e,t,n){var r;if(t){if(g)return g.call(t,e,n);for(r=t.length,n=n?0>n?Math.max(0,r+n):n:0;r>n;n++)if(n in t&&t[n]===e)return n}return-1},merge:function(e,n){var r=n.length,i=e.length,o=0;if("number"==typeof r)for(;r>o;o++)e[i++]=n[o];else while(n[o]!==t)e[i++]=n[o++];return e.length=i,e},grep:function(e,t,n){var r,i=[],o=0,a=e.length;for(n=!!n;a>o;o++)r=!!t(e[o],o),n!==r&&i.push(e[o]);return i},map:function(e,t,n){var r,i=0,o=e.length,a=M(e),s=[];if(a)for(;o>i;i++)r=t(e[i],i,n),null!=r&&(s[s.length]=r);else for(i in e)r=t(e[i],i,n),null!=r&&(s[s.length]=r);return f.apply([],s)},guid:1,proxy:function(e,n){var r,i,o;return"string"==typeof n&&(o=e[n],n=e,e=o),b.isFunction(e)?(r=h.call(arguments,2),i=function(){return e.apply(n||this,r.concat(h.call(arguments)))},i.guid=e.guid=e.guid||b.guid++,i):t},access:function(e,n,r,i,o,a,s){var u=0,l=e.length,c=null==r;if("object"===b.type(r)){o=!0;for(u in r)b.access(e,n,u,r[u],!0,a,s)}else if(i!==t&&(o=!0,b.isFunction(i)||(s=!0),c&&(s?(n.call(e,i),n=null):(c=n,n=function(e,t,n){return c.call(b(e),n)})),n))for(;l>u;u++)n(e[u],r,s?i:i.call(e[u],u,n(e[u],r)));return o?e:c?n.call(e):l?n(e[0],r):a},now:function(){return(new Date).getTime()}}),b.ready.promise=function(t){if(!n)if(n=b.Deferred(),"complete"===o.readyState)setTimeout(b.ready);else if(o.addEventListener)o.addEventListener("DOMContentLoaded",H,!1),e.addEventListener("load",H,!1);else{o.attachEvent("onreadystatechange",H),e.attachEvent("onload",H);var r=!1;try{r=null==e.frameElement&&o.documentElement}catch(i){}r&&r.doScroll&&function a(){if(!b.isReady){try{r.doScroll("left")}catch(e){return setTimeout(a,50)}q(),b.ready()}}()}return n.promise(t)},b.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(e,t){l["[object "+t+"]"]=t.toLowerCase()});function M(e){var t=e.length,n=b.type(e);return b.isWindow(e)?!1:1===e.nodeType&&t?!0:"array"===n||"function"!==n&&(0===t||"number"==typeof t&&t>0&&t-1 in e)}r=b(o);var _={};function F(e){var t=_[e]={};return b.each(e.match(w)||[],function(e,n){t[n]=!0}),t}b.Callbacks=function(e){e="string"==typeof e?_[e]||F(e):b.extend({},e);var n,r,i,o,a,s,u=[],l=!e.once&&[],c=function(t){for(r=e.memory&&t,i=!0,a=s||0,s=0,o=u.length,n=!0;u&&o>a;a++)if(u[a].apply(t[0],t[1])===!1&&e.stopOnFalse){r=!1;break}n=!1,u&&(l?l.length&&c(l.shift()):r?u=[]:p.disable())},p={add:function(){if(u){var t=u.length;(function i(t){b.each(t,function(t,n){var r=b.type(n);"function"===r?e.unique&&p.has(n)||u.push(n):n&&n.length&&"string"!==r&&i(n)})})(arguments),n?o=u.length:r&&(s=t,c(r))}return this},remove:function(){return u&&b.each(arguments,function(e,t){var r;while((r=b.inArray(t,u,r))>-1)u.splice(r,1),n&&(o>=r&&o--,a>=r&&a--)}),this},has:function(e){return e?b.inArray(e,u)>-1:!(!u||!u.length)},empty:function(){return u=[],this},disable:function(){return u=l=r=t,this},disabled:function(){return!u},lock:function(){return l=t,r||p.disable(),this},locked:function(){return!l},fireWith:function(e,t){return t=t||[],t=[e,t.slice?t.slice():t],!u||i&&!l||(n?l.push(t):c(t)),this},fire:function(){return p.fireWith(this,arguments),this},fired:function(){return!!i}};return p},b.extend({Deferred:function(e){var t=[["resolve","done",b.Callbacks("once memory"),"resolved"],["reject","fail",b.Callbacks("once memory"),"rejected"],["notify","progress",b.Callbacks("memory")]],n="pending",r={state:function(){return n},always:function(){return i.done(arguments).fail(arguments),this},then:function(){var e=arguments;return b.Deferred(function(n){b.each(t,function(t,o){var a=o[0],s=b.isFunction(e[t])&&e[t];i[o[1]](function(){var e=s&&s.apply(this,arguments);e&&b.isFunction(e.promise)?e.promise().done(n.resolve).fail(n.reject).progress(n.notify):n[a+"With"](this===r?n.promise():this,s?[e]:arguments)})}),e=null}).promise()},promise:function(e){return null!=e?b.extend(e,r):r}},i={};return r.pipe=r.then,b.each(t,function(e,o){var a=o[2],s=o[3];r[o[1]]=a.add,s&&a.add(function(){n=s},t[1^e][2].disable,t[2][2].lock),i[o[0]]=function(){return i[o[0]+"With"](this===i?r:this,arguments),this},i[o[0]+"With"]=a.fireWith}),r.promise(i),e&&e.call(i,i),i},when:function(e){var t=0,n=h.call(arguments),r=n.length,i=1!==r||e&&b.isFunction(e.promise)?r:0,o=1===i?e:b.Deferred(),a=function(e,t,n){return function(r){t[e]=this,n[e]=arguments.length>1?h.call(arguments):r,n===s?o.notifyWith(t,n):--i||o.resolveWith(t,n)}},s,u,l;if(r>1)for(s=Array(r),u=Array(r),l=Array(r);r>t;t++)n[t]&&b.isFunction(n[t].promise)?n[t].promise().done(a(t,l,n)).fail(o.reject).progress(a(t,u,s)):--i;return i||o.resolveWith(l,n),o.promise()}}),b.support=function(){var t,n,r,a,s,u,l,c,p,f,d=o.createElement("div");if(d.setAttribute("className","t"),d.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",n=d.getElementsByTagName("*"),r=d.getElementsByTagName("a")[0],!n||!r||!n.length)return{};s=o.createElement("select"),l=s.appendChild(o.createElement("option")),a=d.getElementsByTagName("input")[0],r.style.cssText="top:1px;float:left;opacity:.5",t={getSetAttribute:"t"!==d.className,leadingWhitespace:3===d.firstChild.nodeType,tbody:!d.getElementsByTagName("tbody").length,htmlSerialize:!!d.getElementsByTagName("link").length,style:/top/.test(r.getAttribute("style")),hrefNormalized:"/a"===r.getAttribute("href"),opacity:/^0.5/.test(r.style.opacity),cssFloat:!!r.style.cssFloat,checkOn:!!a.value,optSelected:l.selected,enctype:!!o.createElement("form").enctype,html5Clone:"<:nav></:nav>"!==o.createElement("nav").cloneNode(!0).outerHTML,boxModel:"CSS1Compat"===o.compatMode,deleteExpando:!0,noCloneEvent:!0,inlineBlockNeedsLayout:!1,shrinkWrapBlocks:!1,reliableMarginRight:!0,boxSizingReliable:!0,pixelPosition:!1},a.checked=!0,t.noCloneChecked=a.cloneNode(!0).checked,s.disabled=!0,t.optDisabled=!l.disabled;try{delete d.test}catch(h){t.deleteExpando=!1}a=o.createElement("input"),a.setAttribute("value",""),t.input=""===a.getAttribute("value"),a.value="t",a.setAttribute("type","radio"),t.radioValue="t"===a.value,a.setAttribute("checked","t"),a.setAttribute("name","t"),u=o.createDocumentFragment(),u.appendChild(a),t.appendChecked=a.checked,t.checkClone=u.cloneNode(!0).cloneNode(!0).lastChild.checked,d.attachEvent&&(d.attachEvent("onclick",function(){t.noCloneEvent=!1}),d.cloneNode(!0).click());for(f in{submit:!0,change:!0,focusin:!0})d.setAttribute(c="on"+f,"t"),t[f+"Bubbles"]=c in e||d.attributes[c].expando===!1;return d.style.backgroundClip="content-box",d.cloneNode(!0).style.backgroundClip="",t.clearCloneStyle="content-box"===d.style.backgroundClip,b(function(){var n,r,a,s="padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",u=o.getElementsByTagName("body")[0];u&&(n=o.createElement("div"),n.style.cssText="border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px",u.appendChild(n).appendChild(d),d.innerHTML="<table><tr><td></td><td>t</td></tr></table>",a=d.getElementsByTagName("td"),a[0].style.cssText="padding:0;margin:0;border:0;display:none",p=0===a[0].offsetHeight,a[0].style.display="",a[1].style.display="none",t.reliableHiddenOffsets=p&&0===a[0].offsetHeight,d.innerHTML="",d.style.cssText="box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;",t.boxSizing=4===d.offsetWidth,t.doesNotIncludeMarginInBodyOffset=1!==u.offsetTop,e.getComputedStyle&&(t.pixelPosition="1%"!==(e.getComputedStyle(d,null)||{}).top,t.boxSizingReliable="4px"===(e.getComputedStyle(d,null)||{width:"4px"}).width,r=d.appendChild(o.createElement("div")),r.style.cssText=d.style.cssText=s,r.style.marginRight=r.style.width="0",d.style.width="1px",t.reliableMarginRight=!parseFloat((e.getComputedStyle(r,null)||{}).marginRight)),typeof d.style.zoom!==i&&(d.innerHTML="",d.style.cssText=s+"width:1px;padding:1px;display:inline;zoom:1",t.inlineBlockNeedsLayout=3===d.offsetWidth,d.style.display="block",d.innerHTML="<div></div>",d.firstChild.style.width="5px",t.shrinkWrapBlocks=3!==d.offsetWidth,t.inlineBlockNeedsLayout&&(u.style.zoom=1)),u.removeChild(n),n=d=a=r=null)}),n=s=u=l=r=a=null,t}();var O=/(?:\{[\s\S]*\}|\[[\s\S]*\])$/,B=/([A-Z])/g;function P(e,n,r,i){if(b.acceptData(e)){var o,a,s=b.expando,u="string"==typeof n,l=e.nodeType,p=l?b.cache:e,f=l?e[s]:e[s]&&s;if(f&&p[f]&&(i||p[f].data)||!u||r!==t)return f||(l?e[s]=f=c.pop()||b.guid++:f=s),p[f]||(p[f]={},l||(p[f].toJSON=b.noop)),("object"==typeof n||"function"==typeof n)&&(i?p[f]=b.extend(p[f],n):p[f].data=b.extend(p[f].data,n)),o=p[f],i||(o.data||(o.data={}),o=o.data),r!==t&&(o[b.camelCase(n)]=r),u?(a=o[n],null==a&&(a=o[b.camelCase(n)])):a=o,a}}function R(e,t,n){if(b.acceptData(e)){var r,i,o,a=e.nodeType,s=a?b.cache:e,u=a?e[b.expando]:b.expando;if(s[u]){if(t&&(o=n?s[u]:s[u].data)){b.isArray(t)?t=t.concat(b.map(t,b.camelCase)):t in o?t=[t]:(t=b.camelCase(t),t=t in o?[t]:t.split(" "));for(r=0,i=t.length;i>r;r++)delete o[t[r]];if(!(n?$:b.isEmptyObject)(o))return}(n||(delete s[u].data,$(s[u])))&&(a?b.cleanData([e],!0):b.support.deleteExpando||s!=s.window?delete s[u]:s[u]=null)}}}b.extend({cache:{},expando:"jQuery"+(p+Math.random()).replace(/\D/g,""),noData:{embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:!0},hasData:function(e){return e=e.nodeType?b.cache[e[b.expando]]:e[b.expando],!!e&&!$(e)},data:function(e,t,n){return P(e,t,n)},removeData:function(e,t){return R(e,t)},_data:function(e,t,n){return P(e,t,n,!0)},_removeData:function(e,t){return R(e,t,!0)},acceptData:function(e){if(e.nodeType&&1!==e.nodeType&&9!==e.nodeType)return!1;var t=e.nodeName&&b.noData[e.nodeName.toLowerCase()];return!t||t!==!0&&e.getAttribute("classid")===t}}),b.fn.extend({data:function(e,n){var r,i,o=this[0],a=0,s=null;if(e===t){if(this.length&&(s=b.data(o),1===o.nodeType&&!b._data(o,"parsedAttrs"))){for(r=o.attributes;r.length>a;a++)i=r[a].name,i.indexOf("data-")||(i=b.camelCase(i.slice(5)),W(o,i,s[i]));b._data(o,"parsedAttrs",!0)}return s}return"object"==typeof e?this.each(function(){b.data(this,e)}):b.access(this,function(n){return n===t?o?W(o,e,b.data(o,e)):null:(this.each(function(){b.data(this,e,n)}),t)},null,n,arguments.length>1,null,!0)},removeData:function(e){return this.each(function(){b.removeData(this,e)})}});function W(e,n,r){if(r===t&&1===e.nodeType){var i="data-"+n.replace(B,"-$1").toLowerCase();if(r=e.getAttribute(i),"string"==typeof r){try{r="true"===r?!0:"false"===r?!1:"null"===r?null:+r+""===r?+r:O.test(r)?b.parseJSON(r):r}catch(o){}b.data(e,n,r)}else r=t}return r}function $(e){var t;for(t in e)if(("data"!==t||!b.isEmptyObject(e[t]))&&"toJSON"!==t)return!1;return!0}b.extend({queue:function(e,n,r){var i;return e?(n=(n||"fx")+"queue",i=b._data(e,n),r&&(!i||b.isArray(r)?i=b._data(e,n,b.makeArray(r)):i.push(r)),i||[]):t},dequeue:function(e,t){t=t||"fx";var n=b.queue(e,t),r=n.length,i=n.shift(),o=b._queueHooks(e,t),a=function(){b.dequeue(e,t)};"inprogress"===i&&(i=n.shift(),r--),o.cur=i,i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,a,o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return b._data(e,n)||b._data(e,n,{empty:b.Callbacks("once memory").add(function(){b._removeData(e,t+"queue"),b._removeData(e,n)})})}}),b.fn.extend({queue:function(e,n){var r=2;return"string"!=typeof e&&(n=e,e="fx",r--),r>arguments.length?b.queue(this[0],e):n===t?this:this.each(function(){var t=b.queue(this,e,n);b._queueHooks(this,e),"fx"===e&&"inprogress"!==t[0]&&b.dequeue(this,e)})},dequeue:function(e){return this.each(function(){b.dequeue(this,e)})},delay:function(e,t){return e=b.fx?b.fx.speeds[e]||e:e,t=t||"fx",this.queue(t,function(t,n){var r=setTimeout(t,e);n.stop=function(){clearTimeout(r)}})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,n){var r,i=1,o=b.Deferred(),a=this,s=this.length,u=function(){--i||o.resolveWith(a,[a])};"string"!=typeof e&&(n=e,e=t),e=e||"fx";while(s--)r=b._data(a[s],e+"queueHooks"),r&&r.empty&&(i++,r.empty.add(u));return u(),o.promise(n)}});var I,z,X=/[\t\r\n]/g,U=/\r/g,V=/^(?:input|select|textarea|button|object)$/i,Y=/^(?:a|area)$/i,J=/^(?:checked|selected|autofocus|autoplay|async|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped)$/i,G=/^(?:checked|selected)$/i,Q=b.support.getSetAttribute,K=b.support.input;b.fn.extend({attr:function(e,t){return b.access(this,b.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){b.removeAttr(this,e)})},prop:function(e,t){return b.access(this,b.prop,e,t,arguments.length>1)},removeProp:function(e){return e=b.propFix[e]||e,this.each(function(){try{this[e]=t,delete this[e]}catch(n){}})},addClass:function(e){var t,n,r,i,o,a=0,s=this.length,u="string"==typeof e&&e;if(b.isFunction(e))return this.each(function(t){b(this).addClass(e.call(this,t,this.className))});if(u)for(t=(e||"").match(w)||[];s>a;a++)if(n=this[a],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(X," "):" ")){o=0;while(i=t[o++])0>r.indexOf(" "+i+" ")&&(r+=i+" ");n.className=b.trim(r)}return this},removeClass:function(e){var t,n,r,i,o,a=0,s=this.length,u=0===arguments.length||"string"==typeof e&&e;if(b.isFunction(e))return this.each(function(t){b(this).removeClass(e.call(this,t,this.className))});if(u)for(t=(e||"").match(w)||[];s>a;a++)if(n=this[a],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(X," "):"")){o=0;while(i=t[o++])while(r.indexOf(" "+i+" ")>=0)r=r.replace(" "+i+" "," ");n.className=e?b.trim(r):""}return this},toggleClass:function(e,t){var n=typeof e,r="boolean"==typeof t;return b.isFunction(e)?this.each(function(n){b(this).toggleClass(e.call(this,n,this.className,t),t)}):this.each(function(){if("string"===n){var o,a=0,s=b(this),u=t,l=e.match(w)||[];while(o=l[a++])u=r?u:!s.hasClass(o),s[u?"addClass":"removeClass"](o)}else(n===i||"boolean"===n)&&(this.className&&b._data(this,"__className__",this.className),this.className=this.className||e===!1?"":b._data(this,"__className__")||"")})},hasClass:function(e){var t=" "+e+" ",n=0,r=this.length;for(;r>n;n++)if(1===this[n].nodeType&&(" "+this[n].className+" ").replace(X," ").indexOf(t)>=0)return!0;return!1},val:function(e){var n,r,i,o=this[0];{if(arguments.length)return i=b.isFunction(e),this.each(function(n){var o,a=b(this);1===this.nodeType&&(o=i?e.call(this,n,a.val()):e,null==o?o="":"number"==typeof o?o+="":b.isArray(o)&&(o=b.map(o,function(e){return null==e?"":e+""})),r=b.valHooks[this.type]||b.valHooks[this.nodeName.toLowerCase()],r&&"set"in r&&r.set(this,o,"value")!==t||(this.value=o))});if(o)return r=b.valHooks[o.type]||b.valHooks[o.nodeName.toLowerCase()],r&&"get"in r&&(n=r.get(o,"value"))!==t?n:(n=o.value,"string"==typeof n?n.replace(U,""):null==n?"":n)}}}),b.extend({valHooks:{option:{get:function(e){var t=e.attributes.value;return!t||t.specified?e.value:e.text}},select:{get:function(e){var t,n,r=e.options,i=e.selectedIndex,o="select-one"===e.type||0>i,a=o?null:[],s=o?i+1:r.length,u=0>i?s:o?i:0;for(;s>u;u++)if(n=r[u],!(!n.selected&&u!==i||(b.support.optDisabled?n.disabled:null!==n.getAttribute("disabled"))||n.parentNode.disabled&&b.nodeName(n.parentNode,"optgroup"))){if(t=b(n).val(),o)return t;a.push(t)}return a},set:function(e,t){var n=b.makeArray(t);return b(e).find("option").each(function(){this.selected=b.inArray(b(this).val(),n)>=0}),n.length||(e.selectedIndex=-1),n}}},attr:function(e,n,r){var o,a,s,u=e.nodeType;if(e&&3!==u&&8!==u&&2!==u)return typeof e.getAttribute===i?b.prop(e,n,r):(a=1!==u||!b.isXMLDoc(e),a&&(n=n.toLowerCase(),o=b.attrHooks[n]||(J.test(n)?z:I)),r===t?o&&a&&"get"in o&&null!==(s=o.get(e,n))?s:(typeof e.getAttribute!==i&&(s=e.getAttribute(n)),null==s?t:s):null!==r?o&&a&&"set"in o&&(s=o.set(e,r,n))!==t?s:(e.setAttribute(n,r+""),r):(b.removeAttr(e,n),t))},removeAttr:function(e,t){var n,r,i=0,o=t&&t.match(w);if(o&&1===e.nodeType)while(n=o[i++])r=b.propFix[n]||n,J.test(n)?!Q&&G.test(n)?e[b.camelCase("default-"+n)]=e[r]=!1:e[r]=!1:b.attr(e,n,""),e.removeAttribute(Q?n:r)},attrHooks:{type:{set:function(e,t){if(!b.support.radioValue&&"radio"===t&&b.nodeName(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},propFix:{tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},prop:function(e,n,r){var i,o,a,s=e.nodeType;if(e&&3!==s&&8!==s&&2!==s)return a=1!==s||!b.isXMLDoc(e),a&&(n=b.propFix[n]||n,o=b.propHooks[n]),r!==t?o&&"set"in o&&(i=o.set(e,r,n))!==t?i:e[n]=r:o&&"get"in o&&null!==(i=o.get(e,n))?i:e[n]},propHooks:{tabIndex:{get:function(e){var n=e.getAttributeNode("tabindex");return n&&n.specified?parseInt(n.value,10):V.test(e.nodeName)||Y.test(e.nodeName)&&e.href?0:t}}}}),z={get:function(e,n){var r=b.prop(e,n),i="boolean"==typeof r&&e.getAttribute(n),o="boolean"==typeof r?K&&Q?null!=i:G.test(n)?e[b.camelCase("default-"+n)]:!!i:e.getAttributeNode(n);return o&&o.value!==!1?n.toLowerCase():t},set:function(e,t,n){return t===!1?b.removeAttr(e,n):K&&Q||!G.test(n)?e.setAttribute(!Q&&b.propFix[n]||n,n):e[b.camelCase("default-"+n)]=e[n]=!0,n}},K&&Q||(b.attrHooks.value={get:function(e,n){var r=e.getAttributeNode(n);return b.nodeName(e,"input")?e.defaultValue:r&&r.specified?r.value:t},set:function(e,n,r){return b.nodeName(e,"input")?(e.defaultValue=n,t):I&&I.set(e,n,r)}}),Q||(I=b.valHooks.button={get:function(e,n){var r=e.getAttributeNode(n);return r&&("id"===n||"name"===n||"coords"===n?""!==r.value:r.specified)?r.value:t},set:function(e,n,r){var i=e.getAttributeNode(r);return i||e.setAttributeNode(i=e.ownerDocument.createAttribute(r)),i.value=n+="","value"===r||n===e.getAttribute(r)?n:t}},b.attrHooks.contenteditable={get:I.get,set:function(e,t,n){I.set(e,""===t?!1:t,n)}},b.each(["width","height"],function(e,n){b.attrHooks[n]=b.extend(b.attrHooks[n],{set:function(e,r){return""===r?(e.setAttribute(n,"auto"),r):t}})})),b.support.hrefNormalized||(b.each(["href","src","width","height"],function(e,n){b.attrHooks[n]=b.extend(b.attrHooks[n],{get:function(e){var r=e.getAttribute(n,2);return null==r?t:r}})}),b.each(["href","src"],function(e,t){b.propHooks[t]={get:function(e){return e.getAttribute(t,4)}}})),b.support.style||(b.attrHooks.style={get:function(e){return e.style.cssText||t},set:function(e,t){return e.style.cssText=t+""}}),b.support.optSelected||(b.propHooks.selected=b.extend(b.propHooks.selected,{get:function(e){var t=e.parentNode;return t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex),null}})),b.support.enctype||(b.propFix.enctype="encoding"),b.support.checkOn||b.each(["radio","checkbox"],function(){b.valHooks[this]={get:function(e){return null===e.getAttribute("value")?"on":e.value}}}),b.each(["radio","checkbox"],function(){b.valHooks[this]=b.extend(b.valHooks[this],{set:function(e,n){return b.isArray(n)?e.checked=b.inArray(b(e).val(),n)>=0:t}})});var Z=/^(?:input|select|textarea)$/i,et=/^key/,tt=/^(?:mouse|contextmenu)|click/,nt=/^(?:focusinfocus|focusoutblur)$/,rt=/^([^.]*)(?:\.(.+)|)$/;function it(){return!0}function ot(){return!1}b.event={global:{},add:function(e,n,r,o,a){var s,u,l,c,p,f,d,h,g,m,y,v=b._data(e);if(v){r.handler&&(c=r,r=c.handler,a=c.selector),r.guid||(r.guid=b.guid++),(u=v.events)||(u=v.events={}),(f=v.handle)||(f=v.handle=function(e){return typeof b===i||e&&b.event.triggered===e.type?t:b.event.dispatch.apply(f.elem,arguments)},f.elem=e),n=(n||"").match(w)||[""],l=n.length;while(l--)s=rt.exec(n[l])||[],g=y=s[1],m=(s[2]||"").split(".").sort(),p=b.event.special[g]||{},g=(a?p.delegateType:p.bindType)||g,p=b.event.special[g]||{},d=b.extend({type:g,origType:y,data:o,handler:r,guid:r.guid,selector:a,needsContext:a&&b.expr.match.needsContext.test(a),namespace:m.join(".")},c),(h=u[g])||(h=u[g]=[],h.delegateCount=0,p.setup&&p.setup.call(e,o,m,f)!==!1||(e.addEventListener?e.addEventListener(g,f,!1):e.attachEvent&&e.attachEvent("on"+g,f))),p.add&&(p.add.call(e,d),d.handler.guid||(d.handler.guid=r.guid)),a?h.splice(h.delegateCount++,0,d):h.push(d),b.event.global[g]=!0;e=null}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,p,f,d,h,g,m=b.hasData(e)&&b._data(e);if(m&&(c=m.events)){t=(t||"").match(w)||[""],l=t.length;while(l--)if(s=rt.exec(t[l])||[],d=g=s[1],h=(s[2]||"").split(".").sort(),d){p=b.event.special[d]||{},d=(r?p.delegateType:p.bindType)||d,f=c[d]||[],s=s[2]&&RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),u=o=f.length;while(o--)a=f[o],!i&&g!==a.origType||n&&n.guid!==a.guid||s&&!s.test(a.namespace)||r&&r!==a.selector&&("**"!==r||!a.selector)||(f.splice(o,1),a.selector&&f.delegateCount--,p.remove&&p.remove.call(e,a));u&&!f.length&&(p.teardown&&p.teardown.call(e,h,m.handle)!==!1||b.removeEvent(e,d,m.handle),delete c[d])}else for(d in c)b.event.remove(e,d+t[l],n,r,!0);b.isEmptyObject(c)&&(delete m.handle,b._removeData(e,"events"))}},trigger:function(n,r,i,a){var s,u,l,c,p,f,d,h=[i||o],g=y.call(n,"type")?n.type:n,m=y.call(n,"namespace")?n.namespace.split("."):[];if(l=f=i=i||o,3!==i.nodeType&&8!==i.nodeType&&!nt.test(g+b.event.triggered)&&(g.indexOf(".")>=0&&(m=g.split("."),g=m.shift(),m.sort()),u=0>g.indexOf(":")&&"on"+g,n=n[b.expando]?n:new b.Event(g,"object"==typeof n&&n),n.isTrigger=!0,n.namespace=m.join("."),n.namespace_re=n.namespace?RegExp("(^|\\.)"+m.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,n.result=t,n.target||(n.target=i),r=null==r?[n]:b.makeArray(r,[n]),p=b.event.special[g]||{},a||!p.trigger||p.trigger.apply(i,r)!==!1)){if(!a&&!p.noBubble&&!b.isWindow(i)){for(c=p.delegateType||g,nt.test(c+g)||(l=l.parentNode);l;l=l.parentNode)h.push(l),f=l;f===(i.ownerDocument||o)&&h.push(f.defaultView||f.parentWindow||e)}d=0;while((l=h[d++])&&!n.isPropagationStopped())n.type=d>1?c:p.bindType||g,s=(b._data(l,"events")||{})[n.type]&&b._data(l,"handle"),s&&s.apply(l,r),s=u&&l[u],s&&b.acceptData(l)&&s.apply&&s.apply(l,r)===!1&&n.preventDefault();if(n.type=g,!(a||n.isDefaultPrevented()||p._default&&p._default.apply(i.ownerDocument,r)!==!1||"click"===g&&b.nodeName(i,"a")||!b.acceptData(i)||!u||!i[g]||b.isWindow(i))){f=i[u],f&&(i[u]=null),b.event.triggered=g;try{i[g]()}catch(v){}b.event.triggered=t,f&&(i[u]=f)}return n.result}},dispatch:function(e){e=b.event.fix(e);var n,r,i,o,a,s=[],u=h.call(arguments),l=(b._data(this,"events")||{})[e.type]||[],c=b.event.special[e.type]||{};if(u[0]=e,e.delegateTarget=this,!c.preDispatch||c.preDispatch.call(this,e)!==!1){s=b.event.handlers.call(this,e,l),n=0;while((o=s[n++])&&!e.isPropagationStopped()){e.currentTarget=o.elem,a=0;while((i=o.handlers[a++])&&!e.isImmediatePropagationStopped())(!e.namespace_re||e.namespace_re.test(i.namespace))&&(e.handleObj=i,e.data=i.data,r=((b.event.special[i.origType]||{}).handle||i.handler).apply(o.elem,u),r!==t&&(e.result=r)===!1&&(e.preventDefault(),e.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,e),e.result}},handlers:function(e,n){var r,i,o,a,s=[],u=n.delegateCount,l=e.target;if(u&&l.nodeType&&(!e.button||"click"!==e.type))for(;l!=this;l=l.parentNode||this)if(1===l.nodeType&&(l.disabled!==!0||"click"!==e.type)){for(o=[],a=0;u>a;a++)i=n[a],r=i.selector+" ",o[r]===t&&(o[r]=i.needsContext?b(r,this).index(l)>=0:b.find(r,this,null,[l]).length),o[r]&&o.push(i);o.length&&s.push({elem:l,handlers:o})}return n.length>u&&s.push({elem:this,handlers:n.slice(u)}),s},fix:function(e){if(e[b.expando])return e;var t,n,r,i=e.type,a=e,s=this.fixHooks[i];s||(this.fixHooks[i]=s=tt.test(i)?this.mouseHooks:et.test(i)?this.keyHooks:{}),r=s.props?this.props.concat(s.props):this.props,e=new b.Event(a),t=r.length;while(t--)n=r[t],e[n]=a[n];return e.target||(e.target=a.srcElement||o),3===e.target.nodeType&&(e.target=e.target.parentNode),e.metaKey=!!e.metaKey,s.filter?s.filter(e,a):e},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(e,t){return null==e.which&&(e.which=null!=t.charCode?t.charCode:t.keyCode),e}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(e,n){var r,i,a,s=n.button,u=n.fromElement;return null==e.pageX&&null!=n.clientX&&(i=e.target.ownerDocument||o,a=i.documentElement,r=i.body,e.pageX=n.clientX+(a&&a.scrollLeft||r&&r.scrollLeft||0)-(a&&a.clientLeft||r&&r.clientLeft||0),e.pageY=n.clientY+(a&&a.scrollTop||r&&r.scrollTop||0)-(a&&a.clientTop||r&&r.clientTop||0)),!e.relatedTarget&&u&&(e.relatedTarget=u===e.target?n.toElement:u),e.which||s===t||(e.which=1&s?1:2&s?3:4&s?2:0),e}},special:{load:{noBubble:!0},click:{trigger:function(){return b.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):t}},focus:{trigger:function(){if(this!==o.activeElement&&this.focus)try{return this.focus(),!1}catch(e){}},delegateType:"focusin"},blur:{trigger:function(){return this===o.activeElement&&this.blur?(this.blur(),!1):t},delegateType:"focusout"},beforeunload:{postDispatch:function(e){e.result!==t&&(e.originalEvent.returnValue=e.result)}}},simulate:function(e,t,n,r){var i=b.extend(new b.Event,n,{type:e,isSimulated:!0,originalEvent:{}});r?b.event.trigger(i,null,t):b.event.dispatch.call(t,i),i.isDefaultPrevented()&&n.preventDefault()}},b.removeEvent=o.removeEventListener?function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n,!1)}:function(e,t,n){var r="on"+t;e.detachEvent&&(typeof e[r]===i&&(e[r]=null),e.detachEvent(r,n))},b.Event=function(e,n){return this instanceof b.Event?(e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||e.returnValue===!1||e.getPreventDefault&&e.getPreventDefault()?it:ot):this.type=e,n&&b.extend(this,n),this.timeStamp=e&&e.timeStamp||b.now(),this[b.expando]=!0,t):new b.Event(e,n)},b.Event.prototype={isDefaultPrevented:ot,isPropagationStopped:ot,isImmediatePropagationStopped:ot,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=it,e&&(e.preventDefault?e.preventDefault():e.returnValue=!1)},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=it,e&&(e.stopPropagation&&e.stopPropagation(),e.cancelBubble=!0)},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=it,this.stopPropagation()}},b.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(e,t){b.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,o=e.handleObj;
return(!i||i!==r&&!b.contains(r,i))&&(e.type=o.origType,n=o.handler.apply(this,arguments),e.type=t),n}}}),b.support.submitBubbles||(b.event.special.submit={setup:function(){return b.nodeName(this,"form")?!1:(b.event.add(this,"click._submit keypress._submit",function(e){var n=e.target,r=b.nodeName(n,"input")||b.nodeName(n,"button")?n.form:t;r&&!b._data(r,"submitBubbles")&&(b.event.add(r,"submit._submit",function(e){e._submit_bubble=!0}),b._data(r,"submitBubbles",!0))}),t)},postDispatch:function(e){e._submit_bubble&&(delete e._submit_bubble,this.parentNode&&!e.isTrigger&&b.event.simulate("submit",this.parentNode,e,!0))},teardown:function(){return b.nodeName(this,"form")?!1:(b.event.remove(this,"._submit"),t)}}),b.support.changeBubbles||(b.event.special.change={setup:function(){return Z.test(this.nodeName)?(("checkbox"===this.type||"radio"===this.type)&&(b.event.add(this,"propertychange._change",function(e){"checked"===e.originalEvent.propertyName&&(this._just_changed=!0)}),b.event.add(this,"click._change",function(e){this._just_changed&&!e.isTrigger&&(this._just_changed=!1),b.event.simulate("change",this,e,!0)})),!1):(b.event.add(this,"beforeactivate._change",function(e){var t=e.target;Z.test(t.nodeName)&&!b._data(t,"changeBubbles")&&(b.event.add(t,"change._change",function(e){!this.parentNode||e.isSimulated||e.isTrigger||b.event.simulate("change",this.parentNode,e,!0)}),b._data(t,"changeBubbles",!0))}),t)},handle:function(e){var n=e.target;return this!==n||e.isSimulated||e.isTrigger||"radio"!==n.type&&"checkbox"!==n.type?e.handleObj.handler.apply(this,arguments):t},teardown:function(){return b.event.remove(this,"._change"),!Z.test(this.nodeName)}}),b.support.focusinBubbles||b.each({focus:"focusin",blur:"focusout"},function(e,t){var n=0,r=function(e){b.event.simulate(t,e.target,b.event.fix(e),!0)};b.event.special[t]={setup:function(){0===n++&&o.addEventListener(e,r,!0)},teardown:function(){0===--n&&o.removeEventListener(e,r,!0)}}}),b.fn.extend({on:function(e,n,r,i,o){var a,s;if("object"==typeof e){"string"!=typeof n&&(r=r||n,n=t);for(a in e)this.on(a,n,r,e[a],o);return this}if(null==r&&null==i?(i=n,r=n=t):null==i&&("string"==typeof n?(i=r,r=t):(i=r,r=n,n=t)),i===!1)i=ot;else if(!i)return this;return 1===o&&(s=i,i=function(e){return b().off(e),s.apply(this,arguments)},i.guid=s.guid||(s.guid=b.guid++)),this.each(function(){b.event.add(this,e,i,r,n)})},one:function(e,t,n,r){return this.on(e,t,n,r,1)},off:function(e,n,r){var i,o;if(e&&e.preventDefault&&e.handleObj)return i=e.handleObj,b(e.delegateTarget).off(i.namespace?i.origType+"."+i.namespace:i.origType,i.selector,i.handler),this;if("object"==typeof e){for(o in e)this.off(o,n,e[o]);return this}return(n===!1||"function"==typeof n)&&(r=n,n=t),r===!1&&(r=ot),this.each(function(){b.event.remove(this,e,r,n)})},bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)},trigger:function(e,t){return this.each(function(){b.event.trigger(e,t,this)})},triggerHandler:function(e,n){var r=this[0];return r?b.event.trigger(e,n,r,!0):t}}),function(e,t){var n,r,i,o,a,s,u,l,c,p,f,d,h,g,m,y,v,x="sizzle"+-new Date,w=e.document,T={},N=0,C=0,k=it(),E=it(),S=it(),A=typeof t,j=1<<31,D=[],L=D.pop,H=D.push,q=D.slice,M=D.indexOf||function(e){var t=0,n=this.length;for(;n>t;t++)if(this[t]===e)return t;return-1},_="[\\x20\\t\\r\\n\\f]",F="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",O=F.replace("w","w#"),B="([*^$|!~]?=)",P="\\["+_+"*("+F+")"+_+"*(?:"+B+_+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+O+")|)|)"+_+"*\\]",R=":("+F+")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|"+P.replace(3,8)+")*)|.*)\\)|)",W=RegExp("^"+_+"+|((?:^|[^\\\\])(?:\\\\.)*)"+_+"+$","g"),$=RegExp("^"+_+"*,"+_+"*"),I=RegExp("^"+_+"*([\\x20\\t\\r\\n\\f>+~])"+_+"*"),z=RegExp(R),X=RegExp("^"+O+"$"),U={ID:RegExp("^#("+F+")"),CLASS:RegExp("^\\.("+F+")"),NAME:RegExp("^\\[name=['\"]?("+F+")['\"]?\\]"),TAG:RegExp("^("+F.replace("w","w*")+")"),ATTR:RegExp("^"+P),PSEUDO:RegExp("^"+R),CHILD:RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+_+"*(even|odd|(([+-]|)(\\d*)n|)"+_+"*(?:([+-]|)"+_+"*(\\d+)|))"+_+"*\\)|)","i"),needsContext:RegExp("^"+_+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+_+"*((?:-\\d)?\\d*)"+_+"*\\)|)(?=[^-]|$)","i")},V=/[\x20\t\r\n\f]*[+~]/,Y=/^[^{]+\{\s*\[native code/,J=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,G=/^(?:input|select|textarea|button)$/i,Q=/^h\d$/i,K=/'|\\/g,Z=/\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,et=/\\([\da-fA-F]{1,6}[\x20\t\r\n\f]?|.)/g,tt=function(e,t){var n="0x"+t-65536;return n!==n?t:0>n?String.fromCharCode(n+65536):String.fromCharCode(55296|n>>10,56320|1023&n)};try{q.call(w.documentElement.childNodes,0)[0].nodeType}catch(nt){q=function(e){var t,n=[];while(t=this[e++])n.push(t);return n}}function rt(e){return Y.test(e+"")}function it(){var e,t=[];return e=function(n,r){return t.push(n+=" ")>i.cacheLength&&delete e[t.shift()],e[n]=r}}function ot(e){return e[x]=!0,e}function at(e){var t=p.createElement("div");try{return e(t)}catch(n){return!1}finally{t=null}}function st(e,t,n,r){var i,o,a,s,u,l,f,g,m,v;if((t?t.ownerDocument||t:w)!==p&&c(t),t=t||p,n=n||[],!e||"string"!=typeof e)return n;if(1!==(s=t.nodeType)&&9!==s)return[];if(!d&&!r){if(i=J.exec(e))if(a=i[1]){if(9===s){if(o=t.getElementById(a),!o||!o.parentNode)return n;if(o.id===a)return n.push(o),n}else if(t.ownerDocument&&(o=t.ownerDocument.getElementById(a))&&y(t,o)&&o.id===a)return n.push(o),n}else{if(i[2])return H.apply(n,q.call(t.getElementsByTagName(e),0)),n;if((a=i[3])&&T.getByClassName&&t.getElementsByClassName)return H.apply(n,q.call(t.getElementsByClassName(a),0)),n}if(T.qsa&&!h.test(e)){if(f=!0,g=x,m=t,v=9===s&&e,1===s&&"object"!==t.nodeName.toLowerCase()){l=ft(e),(f=t.getAttribute("id"))?g=f.replace(K,"\\$&"):t.setAttribute("id",g),g="[id='"+g+"'] ",u=l.length;while(u--)l[u]=g+dt(l[u]);m=V.test(e)&&t.parentNode||t,v=l.join(",")}if(v)try{return H.apply(n,q.call(m.querySelectorAll(v),0)),n}catch(b){}finally{f||t.removeAttribute("id")}}}return wt(e.replace(W,"$1"),t,n,r)}a=st.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return t?"HTML"!==t.nodeName:!1},c=st.setDocument=function(e){var n=e?e.ownerDocument||e:w;return n!==p&&9===n.nodeType&&n.documentElement?(p=n,f=n.documentElement,d=a(n),T.tagNameNoComments=at(function(e){return e.appendChild(n.createComment("")),!e.getElementsByTagName("*").length}),T.attributes=at(function(e){e.innerHTML="<select></select>";var t=typeof e.lastChild.getAttribute("multiple");return"boolean"!==t&&"string"!==t}),T.getByClassName=at(function(e){return e.innerHTML="<div class='hidden e'></div><div class='hidden'></div>",e.getElementsByClassName&&e.getElementsByClassName("e").length?(e.lastChild.className="e",2===e.getElementsByClassName("e").length):!1}),T.getByName=at(function(e){e.id=x+0,e.innerHTML="<a name='"+x+"'></a><div name='"+x+"'></div>",f.insertBefore(e,f.firstChild);var t=n.getElementsByName&&n.getElementsByName(x).length===2+n.getElementsByName(x+0).length;return T.getIdNotName=!n.getElementById(x),f.removeChild(e),t}),i.attrHandle=at(function(e){return e.innerHTML="<a href='#'></a>",e.firstChild&&typeof e.firstChild.getAttribute!==A&&"#"===e.firstChild.getAttribute("href")})?{}:{href:function(e){return e.getAttribute("href",2)},type:function(e){return e.getAttribute("type")}},T.getIdNotName?(i.find.ID=function(e,t){if(typeof t.getElementById!==A&&!d){var n=t.getElementById(e);return n&&n.parentNode?[n]:[]}},i.filter.ID=function(e){var t=e.replace(et,tt);return function(e){return e.getAttribute("id")===t}}):(i.find.ID=function(e,n){if(typeof n.getElementById!==A&&!d){var r=n.getElementById(e);return r?r.id===e||typeof r.getAttributeNode!==A&&r.getAttributeNode("id").value===e?[r]:t:[]}},i.filter.ID=function(e){var t=e.replace(et,tt);return function(e){var n=typeof e.getAttributeNode!==A&&e.getAttributeNode("id");return n&&n.value===t}}),i.find.TAG=T.tagNameNoComments?function(e,n){return typeof n.getElementsByTagName!==A?n.getElementsByTagName(e):t}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},i.find.NAME=T.getByName&&function(e,n){return typeof n.getElementsByName!==A?n.getElementsByName(name):t},i.find.CLASS=T.getByClassName&&function(e,n){return typeof n.getElementsByClassName===A||d?t:n.getElementsByClassName(e)},g=[],h=[":focus"],(T.qsa=rt(n.querySelectorAll))&&(at(function(e){e.innerHTML="<select><option selected=''></option></select>",e.querySelectorAll("[selected]").length||h.push("\\["+_+"*(?:checked|disabled|ismap|multiple|readonly|selected|value)"),e.querySelectorAll(":checked").length||h.push(":checked")}),at(function(e){e.innerHTML="<input type='hidden' i=''/>",e.querySelectorAll("[i^='']").length&&h.push("[*^$]="+_+"*(?:\"\"|'')"),e.querySelectorAll(":enabled").length||h.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),h.push(",.*:")})),(T.matchesSelector=rt(m=f.matchesSelector||f.mozMatchesSelector||f.webkitMatchesSelector||f.oMatchesSelector||f.msMatchesSelector))&&at(function(e){T.disconnectedMatch=m.call(e,"div"),m.call(e,"[s!='']:x"),g.push("!=",R)}),h=RegExp(h.join("|")),g=RegExp(g.join("|")),y=rt(f.contains)||f.compareDocumentPosition?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},v=f.compareDocumentPosition?function(e,t){var r;return e===t?(u=!0,0):(r=t.compareDocumentPosition&&e.compareDocumentPosition&&e.compareDocumentPosition(t))?1&r||e.parentNode&&11===e.parentNode.nodeType?e===n||y(w,e)?-1:t===n||y(w,t)?1:0:4&r?-1:1:e.compareDocumentPosition?-1:1}:function(e,t){var r,i=0,o=e.parentNode,a=t.parentNode,s=[e],l=[t];if(e===t)return u=!0,0;if(!o||!a)return e===n?-1:t===n?1:o?-1:a?1:0;if(o===a)return ut(e,t);r=e;while(r=r.parentNode)s.unshift(r);r=t;while(r=r.parentNode)l.unshift(r);while(s[i]===l[i])i++;return i?ut(s[i],l[i]):s[i]===w?-1:l[i]===w?1:0},u=!1,[0,0].sort(v),T.detectDuplicates=u,p):p},st.matches=function(e,t){return st(e,null,null,t)},st.matchesSelector=function(e,t){if((e.ownerDocument||e)!==p&&c(e),t=t.replace(Z,"='$1']"),!(!T.matchesSelector||d||g&&g.test(t)||h.test(t)))try{var n=m.call(e,t);if(n||T.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(r){}return st(t,p,null,[e]).length>0},st.contains=function(e,t){return(e.ownerDocument||e)!==p&&c(e),y(e,t)},st.attr=function(e,t){var n;return(e.ownerDocument||e)!==p&&c(e),d||(t=t.toLowerCase()),(n=i.attrHandle[t])?n(e):d||T.attributes?e.getAttribute(t):((n=e.getAttributeNode(t))||e.getAttribute(t))&&e[t]===!0?t:n&&n.specified?n.value:null},st.error=function(e){throw Error("Syntax error, unrecognized expression: "+e)},st.uniqueSort=function(e){var t,n=[],r=1,i=0;if(u=!T.detectDuplicates,e.sort(v),u){for(;t=e[r];r++)t===e[r-1]&&(i=n.push(r));while(i--)e.splice(n[i],1)}return e};function ut(e,t){var n=t&&e,r=n&&(~t.sourceIndex||j)-(~e.sourceIndex||j);if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function lt(e){return function(t){var n=t.nodeName.toLowerCase();return"input"===n&&t.type===e}}function ct(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}function pt(e){return ot(function(t){return t=+t,ot(function(n,r){var i,o=e([],n.length,t),a=o.length;while(a--)n[i=o[a]]&&(n[i]=!(r[i]=n[i]))})})}o=st.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=o(e)}else if(3===i||4===i)return e.nodeValue}else for(;t=e[r];r++)n+=o(t);return n},i=st.selectors={cacheLength:50,createPseudo:ot,match:U,find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(et,tt),e[3]=(e[4]||e[5]||"").replace(et,tt),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||st.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&st.error(e[0]),e},PSEUDO:function(e){var t,n=!e[5]&&e[2];return U.CHILD.test(e[0])?null:(e[4]?e[2]=e[4]:n&&z.test(n)&&(t=ft(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){return"*"===e?function(){return!0}:(e=e.replace(et,tt).toLowerCase(),function(t){return t.nodeName&&t.nodeName.toLowerCase()===e})},CLASS:function(e){var t=k[e+" "];return t||(t=RegExp("(^|"+_+")"+e+"("+_+"|$)"))&&k(e,function(e){return t.test(e.className||typeof e.getAttribute!==A&&e.getAttribute("class")||"")})},ATTR:function(e,t,n){return function(r){var i=st.attr(r,e);return null==i?"!="===t:t?(i+="","="===t?i===n:"!="===t?i!==n:"^="===t?n&&0===i.indexOf(n):"*="===t?n&&i.indexOf(n)>-1:"$="===t?n&&i.slice(-n.length)===n:"~="===t?(" "+i+" ").indexOf(n)>-1:"|="===t?i===n||i.slice(0,n.length+1)===n+"-":!1):!0}},CHILD:function(e,t,n,r,i){var o="nth"!==e.slice(0,3),a="last"!==e.slice(-4),s="of-type"===t;return 1===r&&0===i?function(e){return!!e.parentNode}:function(t,n,u){var l,c,p,f,d,h,g=o!==a?"nextSibling":"previousSibling",m=t.parentNode,y=s&&t.nodeName.toLowerCase(),v=!u&&!s;if(m){if(o){while(g){p=t;while(p=p[g])if(s?p.nodeName.toLowerCase()===y:1===p.nodeType)return!1;h=g="only"===e&&!h&&"nextSibling"}return!0}if(h=[a?m.firstChild:m.lastChild],a&&v){c=m[x]||(m[x]={}),l=c[e]||[],d=l[0]===N&&l[1],f=l[0]===N&&l[2],p=d&&m.childNodes[d];while(p=++d&&p&&p[g]||(f=d=0)||h.pop())if(1===p.nodeType&&++f&&p===t){c[e]=[N,d,f];break}}else if(v&&(l=(t[x]||(t[x]={}))[e])&&l[0]===N)f=l[1];else while(p=++d&&p&&p[g]||(f=d=0)||h.pop())if((s?p.nodeName.toLowerCase()===y:1===p.nodeType)&&++f&&(v&&((p[x]||(p[x]={}))[e]=[N,f]),p===t))break;return f-=i,f===r||0===f%r&&f/r>=0}}},PSEUDO:function(e,t){var n,r=i.pseudos[e]||i.setFilters[e.toLowerCase()]||st.error("unsupported pseudo: "+e);return r[x]?r(t):r.length>1?(n=[e,e,"",t],i.setFilters.hasOwnProperty(e.toLowerCase())?ot(function(e,n){var i,o=r(e,t),a=o.length;while(a--)i=M.call(e,o[a]),e[i]=!(n[i]=o[a])}):function(e){return r(e,0,n)}):r}},pseudos:{not:ot(function(e){var t=[],n=[],r=s(e.replace(W,"$1"));return r[x]?ot(function(e,t,n,i){var o,a=r(e,null,i,[]),s=e.length;while(s--)(o=a[s])&&(e[s]=!(t[s]=o))}):function(e,i,o){return t[0]=e,r(t,null,o,n),!n.pop()}}),has:ot(function(e){return function(t){return st(e,t).length>0}}),contains:ot(function(e){return function(t){return(t.textContent||t.innerText||o(t)).indexOf(e)>-1}}),lang:ot(function(e){return X.test(e||"")||st.error("unsupported lang: "+e),e=e.replace(et,tt).toLowerCase(),function(t){var n;do if(n=d?t.getAttribute("xml:lang")||t.getAttribute("lang"):t.lang)return n=n.toLowerCase(),n===e||0===n.indexOf(e+"-");while((t=t.parentNode)&&1===t.nodeType);return!1}}),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===f},focus:function(e){return e===p.activeElement&&(!p.hasFocus||p.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:function(e){return e.disabled===!1},disabled:function(e){return e.disabled===!0},checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,e.selected===!0},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeName>"@"||3===e.nodeType||4===e.nodeType)return!1;return!0},parent:function(e){return!i.pseudos.empty(e)},header:function(e){return Q.test(e.nodeName)},input:function(e){return G.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||t.toLowerCase()===e.type)},first:pt(function(){return[0]}),last:pt(function(e,t){return[t-1]}),eq:pt(function(e,t,n){return[0>n?n+t:n]}),even:pt(function(e,t){var n=0;for(;t>n;n+=2)e.push(n);return e}),odd:pt(function(e,t){var n=1;for(;t>n;n+=2)e.push(n);return e}),lt:pt(function(e,t,n){var r=0>n?n+t:n;for(;--r>=0;)e.push(r);return e}),gt:pt(function(e,t,n){var r=0>n?n+t:n;for(;t>++r;)e.push(r);return e})}};for(n in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})i.pseudos[n]=lt(n);for(n in{submit:!0,reset:!0})i.pseudos[n]=ct(n);function ft(e,t){var n,r,o,a,s,u,l,c=E[e+" "];if(c)return t?0:c.slice(0);s=e,u=[],l=i.preFilter;while(s){(!n||(r=$.exec(s)))&&(r&&(s=s.slice(r[0].length)||s),u.push(o=[])),n=!1,(r=I.exec(s))&&(n=r.shift(),o.push({value:n,type:r[0].replace(W," ")}),s=s.slice(n.length));for(a in i.filter)!(r=U[a].exec(s))||l[a]&&!(r=l[a](r))||(n=r.shift(),o.push({value:n,type:a,matches:r}),s=s.slice(n.length));if(!n)break}return t?s.length:s?st.error(e):E(e,u).slice(0)}function dt(e){var t=0,n=e.length,r="";for(;n>t;t++)r+=e[t].value;return r}function ht(e,t,n){var i=t.dir,o=n&&"parentNode"===i,a=C++;return t.first?function(t,n,r){while(t=t[i])if(1===t.nodeType||o)return e(t,n,r)}:function(t,n,s){var u,l,c,p=N+" "+a;if(s){while(t=t[i])if((1===t.nodeType||o)&&e(t,n,s))return!0}else while(t=t[i])if(1===t.nodeType||o)if(c=t[x]||(t[x]={}),(l=c[i])&&l[0]===p){if((u=l[1])===!0||u===r)return u===!0}else if(l=c[i]=[p],l[1]=e(t,n,s)||r,l[1]===!0)return!0}}function gt(e){return e.length>1?function(t,n,r){var i=e.length;while(i--)if(!e[i](t,n,r))return!1;return!0}:e[0]}function mt(e,t,n,r,i){var o,a=[],s=0,u=e.length,l=null!=t;for(;u>s;s++)(o=e[s])&&(!n||n(o,r,i))&&(a.push(o),l&&t.push(s));return a}function yt(e,t,n,r,i,o){return r&&!r[x]&&(r=yt(r)),i&&!i[x]&&(i=yt(i,o)),ot(function(o,a,s,u){var l,c,p,f=[],d=[],h=a.length,g=o||xt(t||"*",s.nodeType?[s]:s,[]),m=!e||!o&&t?g:mt(g,f,e,s,u),y=n?i||(o?e:h||r)?[]:a:m;if(n&&n(m,y,s,u),r){l=mt(y,d),r(l,[],s,u),c=l.length;while(c--)(p=l[c])&&(y[d[c]]=!(m[d[c]]=p))}if(o){if(i||e){if(i){l=[],c=y.length;while(c--)(p=y[c])&&l.push(m[c]=p);i(null,y=[],l,u)}c=y.length;while(c--)(p=y[c])&&(l=i?M.call(o,p):f[c])>-1&&(o[l]=!(a[l]=p))}}else y=mt(y===a?y.splice(h,y.length):y),i?i(null,a,y,u):H.apply(a,y)})}function vt(e){var t,n,r,o=e.length,a=i.relative[e[0].type],s=a||i.relative[" "],u=a?1:0,c=ht(function(e){return e===t},s,!0),p=ht(function(e){return M.call(t,e)>-1},s,!0),f=[function(e,n,r){return!a&&(r||n!==l)||((t=n).nodeType?c(e,n,r):p(e,n,r))}];for(;o>u;u++)if(n=i.relative[e[u].type])f=[ht(gt(f),n)];else{if(n=i.filter[e[u].type].apply(null,e[u].matches),n[x]){for(r=++u;o>r;r++)if(i.relative[e[r].type])break;return yt(u>1&&gt(f),u>1&&dt(e.slice(0,u-1)).replace(W,"$1"),n,r>u&&vt(e.slice(u,r)),o>r&&vt(e=e.slice(r)),o>r&&dt(e))}f.push(n)}return gt(f)}function bt(e,t){var n=0,o=t.length>0,a=e.length>0,s=function(s,u,c,f,d){var h,g,m,y=[],v=0,b="0",x=s&&[],w=null!=d,T=l,C=s||a&&i.find.TAG("*",d&&u.parentNode||u),k=N+=null==T?1:Math.random()||.1;for(w&&(l=u!==p&&u,r=n);null!=(h=C[b]);b++){if(a&&h){g=0;while(m=e[g++])if(m(h,u,c)){f.push(h);break}w&&(N=k,r=++n)}o&&((h=!m&&h)&&v--,s&&x.push(h))}if(v+=b,o&&b!==v){g=0;while(m=t[g++])m(x,y,u,c);if(s){if(v>0)while(b--)x[b]||y[b]||(y[b]=L.call(f));y=mt(y)}H.apply(f,y),w&&!s&&y.length>0&&v+t.length>1&&st.uniqueSort(f)}return w&&(N=k,l=T),x};return o?ot(s):s}s=st.compile=function(e,t){var n,r=[],i=[],o=S[e+" "];if(!o){t||(t=ft(e)),n=t.length;while(n--)o=vt(t[n]),o[x]?r.push(o):i.push(o);o=S(e,bt(i,r))}return o};function xt(e,t,n){var r=0,i=t.length;for(;i>r;r++)st(e,t[r],n);return n}function wt(e,t,n,r){var o,a,u,l,c,p=ft(e);if(!r&&1===p.length){if(a=p[0]=p[0].slice(0),a.length>2&&"ID"===(u=a[0]).type&&9===t.nodeType&&!d&&i.relative[a[1].type]){if(t=i.find.ID(u.matches[0].replace(et,tt),t)[0],!t)return n;e=e.slice(a.shift().value.length)}o=U.needsContext.test(e)?0:a.length;while(o--){if(u=a[o],i.relative[l=u.type])break;if((c=i.find[l])&&(r=c(u.matches[0].replace(et,tt),V.test(a[0].type)&&t.parentNode||t))){if(a.splice(o,1),e=r.length&&dt(a),!e)return H.apply(n,q.call(r,0)),n;break}}}return s(e,p)(r,t,d,n,V.test(e)),n}i.pseudos.nth=i.pseudos.eq;function Tt(){}i.filters=Tt.prototype=i.pseudos,i.setFilters=new Tt,c(),st.attr=b.attr,b.find=st,b.expr=st.selectors,b.expr[":"]=b.expr.pseudos,b.unique=st.uniqueSort,b.text=st.getText,b.isXMLDoc=st.isXML,b.contains=st.contains}(e);var at=/Until$/,st=/^(?:parents|prev(?:Until|All))/,ut=/^.[^:#\[\.,]*$/,lt=b.expr.match.needsContext,ct={children:!0,contents:!0,next:!0,prev:!0};b.fn.extend({find:function(e){var t,n,r,i=this.length;if("string"!=typeof e)return r=this,this.pushStack(b(e).filter(function(){for(t=0;i>t;t++)if(b.contains(r[t],this))return!0}));for(n=[],t=0;i>t;t++)b.find(e,this[t],n);return n=this.pushStack(i>1?b.unique(n):n),n.selector=(this.selector?this.selector+" ":"")+e,n},has:function(e){var t,n=b(e,this),r=n.length;return this.filter(function(){for(t=0;r>t;t++)if(b.contains(this,n[t]))return!0})},not:function(e){return this.pushStack(ft(this,e,!1))},filter:function(e){return this.pushStack(ft(this,e,!0))},is:function(e){return!!e&&("string"==typeof e?lt.test(e)?b(e,this.context).index(this[0])>=0:b.filter(e,this).length>0:this.filter(e).length>0)},closest:function(e,t){var n,r=0,i=this.length,o=[],a=lt.test(e)||"string"!=typeof e?b(e,t||this.context):0;for(;i>r;r++){n=this[r];while(n&&n.ownerDocument&&n!==t&&11!==n.nodeType){if(a?a.index(n)>-1:b.find.matchesSelector(n,e)){o.push(n);break}n=n.parentNode}}return this.pushStack(o.length>1?b.unique(o):o)},index:function(e){return e?"string"==typeof e?b.inArray(this[0],b(e)):b.inArray(e.jquery?e[0]:e,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){var n="string"==typeof e?b(e,t):b.makeArray(e&&e.nodeType?[e]:e),r=b.merge(this.get(),n);return this.pushStack(b.unique(r))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),b.fn.andSelf=b.fn.addBack;function pt(e,t){do e=e[t];while(e&&1!==e.nodeType);return e}b.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return b.dir(e,"parentNode")},parentsUntil:function(e,t,n){return b.dir(e,"parentNode",n)},next:function(e){return pt(e,"nextSibling")},prev:function(e){return pt(e,"previousSibling")},nextAll:function(e){return b.dir(e,"nextSibling")},prevAll:function(e){return b.dir(e,"previousSibling")},nextUntil:function(e,t,n){return b.dir(e,"nextSibling",n)},prevUntil:function(e,t,n){return b.dir(e,"previousSibling",n)},siblings:function(e){return b.sibling((e.parentNode||{}).firstChild,e)},children:function(e){return b.sibling(e.firstChild)},contents:function(e){return b.nodeName(e,"iframe")?e.contentDocument||e.contentWindow.document:b.merge([],e.childNodes)}},function(e,t){b.fn[e]=function(n,r){var i=b.map(this,t,n);return at.test(e)||(r=n),r&&"string"==typeof r&&(i=b.filter(r,i)),i=this.length>1&&!ct[e]?b.unique(i):i,this.length>1&&st.test(e)&&(i=i.reverse()),this.pushStack(i)}}),b.extend({filter:function(e,t,n){return n&&(e=":not("+e+")"),1===t.length?b.find.matchesSelector(t[0],e)?[t[0]]:[]:b.find.matches(e,t)},dir:function(e,n,r){var i=[],o=e[n];while(o&&9!==o.nodeType&&(r===t||1!==o.nodeType||!b(o).is(r)))1===o.nodeType&&i.push(o),o=o[n];return i},sibling:function(e,t){var n=[];for(;e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n}});function ft(e,t,n){if(t=t||0,b.isFunction(t))return b.grep(e,function(e,r){var i=!!t.call(e,r,e);return i===n});if(t.nodeType)return b.grep(e,function(e){return e===t===n});if("string"==typeof t){var r=b.grep(e,function(e){return 1===e.nodeType});if(ut.test(t))return b.filter(t,r,!n);t=b.filter(t,r)}return b.grep(e,function(e){return b.inArray(e,t)>=0===n})}function dt(e){var t=ht.split("|"),n=e.createDocumentFragment();if(n.createElement)while(t.length)n.createElement(t.pop());return n}var ht="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",gt=/ jQuery\d+="(?:null|\d+)"/g,mt=RegExp("<(?:"+ht+")[\\s/>]","i"),yt=/^\s+/,vt=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,bt=/<([\w:]+)/,xt=/<tbody/i,wt=/<|&#?\w+;/,Tt=/<(?:script|style|link)/i,Nt=/^(?:checkbox|radio)$/i,Ct=/checked\s*(?:[^=]|=\s*.checked.)/i,kt=/^$|\/(?:java|ecma)script/i,Et=/^true\/(.*)/,St=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,At={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:b.support.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]},jt=dt(o),Dt=jt.appendChild(o.createElement("div"));At.optgroup=At.option,At.tbody=At.tfoot=At.colgroup=At.caption=At.thead,At.th=At.td,b.fn.extend({text:function(e){return b.access(this,function(e){return e===t?b.text(this):this.empty().append((this[0]&&this[0].ownerDocument||o).createTextNode(e))},null,e,arguments.length)},wrapAll:function(e){if(b.isFunction(e))return this.each(function(t){b(this).wrapAll(e.call(this,t))});if(this[0]){var t=b(e,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstChild&&1===e.firstChild.nodeType)e=e.firstChild;return e}).append(this)}return this},wrapInner:function(e){return b.isFunction(e)?this.each(function(t){b(this).wrapInner(e.call(this,t))}):this.each(function(){var t=b(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=b.isFunction(e);return this.each(function(n){b(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(){return this.parent().each(function(){b.nodeName(this,"body")||b(this).replaceWith(this.childNodes)}).end()},append:function(){return this.domManip(arguments,!0,function(e){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&this.appendChild(e)})},prepend:function(){return this.domManip(arguments,!0,function(e){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&this.insertBefore(e,this.firstChild)})},before:function(){return this.domManip(arguments,!1,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return this.domManip(arguments,!1,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},remove:function(e,t){var n,r=0;for(;null!=(n=this[r]);r++)(!e||b.filter(e,[n]).length>0)&&(t||1!==n.nodeType||b.cleanData(Ot(n)),n.parentNode&&(t&&b.contains(n.ownerDocument,n)&&Mt(Ot(n,"script")),n.parentNode.removeChild(n)));return this},empty:function(){var e,t=0;for(;null!=(e=this[t]);t++){1===e.nodeType&&b.cleanData(Ot(e,!1));while(e.firstChild)e.removeChild(e.firstChild);e.options&&b.nodeName(e,"select")&&(e.options.length=0)}return this},clone:function(e,t){return e=null==e?!1:e,t=null==t?e:t,this.map(function(){return b.clone(this,e,t)})},html:function(e){return b.access(this,function(e){var n=this[0]||{},r=0,i=this.length;if(e===t)return 1===n.nodeType?n.innerHTML.replace(gt,""):t;if(!("string"!=typeof e||Tt.test(e)||!b.support.htmlSerialize&&mt.test(e)||!b.support.leadingWhitespace&&yt.test(e)||At[(bt.exec(e)||["",""])[1].toLowerCase()])){e=e.replace(vt,"<$1></$2>");try{for(;i>r;r++)n=this[r]||{},1===n.nodeType&&(b.cleanData(Ot(n,!1)),n.innerHTML=e);n=0}catch(o){}}n&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(e){var t=b.isFunction(e);return t||"string"==typeof e||(e=b(e).not(this).detach()),this.domManip([e],!0,function(e){var t=this.nextSibling,n=this.parentNode;n&&(b(this).remove(),n.insertBefore(e,t))})},detach:function(e){return this.remove(e,!0)},domManip:function(e,n,r){e=f.apply([],e);var i,o,a,s,u,l,c=0,p=this.length,d=this,h=p-1,g=e[0],m=b.isFunction(g);if(m||!(1>=p||"string"!=typeof g||b.support.checkClone)&&Ct.test(g))return this.each(function(i){var o=d.eq(i);m&&(e[0]=g.call(this,i,n?o.html():t)),o.domManip(e,n,r)});if(p&&(l=b.buildFragment(e,this[0].ownerDocument,!1,this),i=l.firstChild,1===l.childNodes.length&&(l=i),i)){for(n=n&&b.nodeName(i,"tr"),s=b.map(Ot(l,"script"),Ht),a=s.length;p>c;c++)o=l,c!==h&&(o=b.clone(o,!0,!0),a&&b.merge(s,Ot(o,"script"))),r.call(n&&b.nodeName(this[c],"table")?Lt(this[c],"tbody"):this[c],o,c);if(a)for(u=s[s.length-1].ownerDocument,b.map(s,qt),c=0;a>c;c++)o=s[c],kt.test(o.type||"")&&!b._data(o,"globalEval")&&b.contains(u,o)&&(o.src?b.ajax({url:o.src,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0}):b.globalEval((o.text||o.textContent||o.innerHTML||"").replace(St,"")));l=i=null}return this}});function Lt(e,t){return e.getElementsByTagName(t)[0]||e.appendChild(e.ownerDocument.createElement(t))}function Ht(e){var t=e.getAttributeNode("type");return e.type=(t&&t.specified)+"/"+e.type,e}function qt(e){var t=Et.exec(e.type);return t?e.type=t[1]:e.removeAttribute("type"),e}function Mt(e,t){var n,r=0;for(;null!=(n=e[r]);r++)b._data(n,"globalEval",!t||b._data(t[r],"globalEval"))}function _t(e,t){if(1===t.nodeType&&b.hasData(e)){var n,r,i,o=b._data(e),a=b._data(t,o),s=o.events;if(s){delete a.handle,a.events={};for(n in s)for(r=0,i=s[n].length;i>r;r++)b.event.add(t,n,s[n][r])}a.data&&(a.data=b.extend({},a.data))}}function Ft(e,t){var n,r,i;if(1===t.nodeType){if(n=t.nodeName.toLowerCase(),!b.support.noCloneEvent&&t[b.expando]){i=b._data(t);for(r in i.events)b.removeEvent(t,r,i.handle);t.removeAttribute(b.expando)}"script"===n&&t.text!==e.text?(Ht(t).text=e.text,qt(t)):"object"===n?(t.parentNode&&(t.outerHTML=e.outerHTML),b.support.html5Clone&&e.innerHTML&&!b.trim(t.innerHTML)&&(t.innerHTML=e.innerHTML)):"input"===n&&Nt.test(e.type)?(t.defaultChecked=t.checked=e.checked,t.value!==e.value&&(t.value=e.value)):"option"===n?t.defaultSelected=t.selected=e.defaultSelected:("input"===n||"textarea"===n)&&(t.defaultValue=e.defaultValue)}}b.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){b.fn[e]=function(e){var n,r=0,i=[],o=b(e),a=o.length-1;for(;a>=r;r++)n=r===a?this:this.clone(!0),b(o[r])[t](n),d.apply(i,n.get());return this.pushStack(i)}});function Ot(e,n){var r,o,a=0,s=typeof e.getElementsByTagName!==i?e.getElementsByTagName(n||"*"):typeof e.querySelectorAll!==i?e.querySelectorAll(n||"*"):t;if(!s)for(s=[],r=e.childNodes||e;null!=(o=r[a]);a++)!n||b.nodeName(o,n)?s.push(o):b.merge(s,Ot(o,n));return n===t||n&&b.nodeName(e,n)?b.merge([e],s):s}function Bt(e){Nt.test(e.type)&&(e.defaultChecked=e.checked)}b.extend({clone:function(e,t,n){var r,i,o,a,s,u=b.contains(e.ownerDocument,e);if(b.support.html5Clone||b.isXMLDoc(e)||!mt.test("<"+e.nodeName+">")?o=e.cloneNode(!0):(Dt.innerHTML=e.outerHTML,Dt.removeChild(o=Dt.firstChild)),!(b.support.noCloneEvent&&b.support.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||b.isXMLDoc(e)))for(r=Ot(o),s=Ot(e),a=0;null!=(i=s[a]);++a)r[a]&&Ft(i,r[a]);if(t)if(n)for(s=s||Ot(e),r=r||Ot(o),a=0;null!=(i=s[a]);a++)_t(i,r[a]);else _t(e,o);return r=Ot(o,"script"),r.length>0&&Mt(r,!u&&Ot(e,"script")),r=s=i=null,o},buildFragment:function(e,t,n,r){var i,o,a,s,u,l,c,p=e.length,f=dt(t),d=[],h=0;for(;p>h;h++)if(o=e[h],o||0===o)if("object"===b.type(o))b.merge(d,o.nodeType?[o]:o);else if(wt.test(o)){s=s||f.appendChild(t.createElement("div")),u=(bt.exec(o)||["",""])[1].toLowerCase(),c=At[u]||At._default,s.innerHTML=c[1]+o.replace(vt,"<$1></$2>")+c[2],i=c[0];while(i--)s=s.lastChild;if(!b.support.leadingWhitespace&&yt.test(o)&&d.push(t.createTextNode(yt.exec(o)[0])),!b.support.tbody){o="table"!==u||xt.test(o)?"<table>"!==c[1]||xt.test(o)?0:s:s.firstChild,i=o&&o.childNodes.length;while(i--)b.nodeName(l=o.childNodes[i],"tbody")&&!l.childNodes.length&&o.removeChild(l)
}b.merge(d,s.childNodes),s.textContent="";while(s.firstChild)s.removeChild(s.firstChild);s=f.lastChild}else d.push(t.createTextNode(o));s&&f.removeChild(s),b.support.appendChecked||b.grep(Ot(d,"input"),Bt),h=0;while(o=d[h++])if((!r||-1===b.inArray(o,r))&&(a=b.contains(o.ownerDocument,o),s=Ot(f.appendChild(o),"script"),a&&Mt(s),n)){i=0;while(o=s[i++])kt.test(o.type||"")&&n.push(o)}return s=null,f},cleanData:function(e,t){var n,r,o,a,s=0,u=b.expando,l=b.cache,p=b.support.deleteExpando,f=b.event.special;for(;null!=(n=e[s]);s++)if((t||b.acceptData(n))&&(o=n[u],a=o&&l[o])){if(a.events)for(r in a.events)f[r]?b.event.remove(n,r):b.removeEvent(n,r,a.handle);l[o]&&(delete l[o],p?delete n[u]:typeof n.removeAttribute!==i?n.removeAttribute(u):n[u]=null,c.push(o))}}});var Pt,Rt,Wt,$t=/alpha\([^)]*\)/i,It=/opacity\s*=\s*([^)]*)/,zt=/^(top|right|bottom|left)$/,Xt=/^(none|table(?!-c[ea]).+)/,Ut=/^margin/,Vt=RegExp("^("+x+")(.*)$","i"),Yt=RegExp("^("+x+")(?!px)[a-z%]+$","i"),Jt=RegExp("^([+-])=("+x+")","i"),Gt={BODY:"block"},Qt={position:"absolute",visibility:"hidden",display:"block"},Kt={letterSpacing:0,fontWeight:400},Zt=["Top","Right","Bottom","Left"],en=["Webkit","O","Moz","ms"];function tn(e,t){if(t in e)return t;var n=t.charAt(0).toUpperCase()+t.slice(1),r=t,i=en.length;while(i--)if(t=en[i]+n,t in e)return t;return r}function nn(e,t){return e=t||e,"none"===b.css(e,"display")||!b.contains(e.ownerDocument,e)}function rn(e,t){var n,r,i,o=[],a=0,s=e.length;for(;s>a;a++)r=e[a],r.style&&(o[a]=b._data(r,"olddisplay"),n=r.style.display,t?(o[a]||"none"!==n||(r.style.display=""),""===r.style.display&&nn(r)&&(o[a]=b._data(r,"olddisplay",un(r.nodeName)))):o[a]||(i=nn(r),(n&&"none"!==n||!i)&&b._data(r,"olddisplay",i?n:b.css(r,"display"))));for(a=0;s>a;a++)r=e[a],r.style&&(t&&"none"!==r.style.display&&""!==r.style.display||(r.style.display=t?o[a]||"":"none"));return e}b.fn.extend({css:function(e,n){return b.access(this,function(e,n,r){var i,o,a={},s=0;if(b.isArray(n)){for(o=Rt(e),i=n.length;i>s;s++)a[n[s]]=b.css(e,n[s],!1,o);return a}return r!==t?b.style(e,n,r):b.css(e,n)},e,n,arguments.length>1)},show:function(){return rn(this,!0)},hide:function(){return rn(this)},toggle:function(e){var t="boolean"==typeof e;return this.each(function(){(t?e:nn(this))?b(this).show():b(this).hide()})}}),b.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Wt(e,"opacity");return""===n?"1":n}}}},cssNumber:{columnCount:!0,fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":b.support.cssFloat?"cssFloat":"styleFloat"},style:function(e,n,r,i){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var o,a,s,u=b.camelCase(n),l=e.style;if(n=b.cssProps[u]||(b.cssProps[u]=tn(l,u)),s=b.cssHooks[n]||b.cssHooks[u],r===t)return s&&"get"in s&&(o=s.get(e,!1,i))!==t?o:l[n];if(a=typeof r,"string"===a&&(o=Jt.exec(r))&&(r=(o[1]+1)*o[2]+parseFloat(b.css(e,n)),a="number"),!(null==r||"number"===a&&isNaN(r)||("number"!==a||b.cssNumber[u]||(r+="px"),b.support.clearCloneStyle||""!==r||0!==n.indexOf("background")||(l[n]="inherit"),s&&"set"in s&&(r=s.set(e,r,i))===t)))try{l[n]=r}catch(c){}}},css:function(e,n,r,i){var o,a,s,u=b.camelCase(n);return n=b.cssProps[u]||(b.cssProps[u]=tn(e.style,u)),s=b.cssHooks[n]||b.cssHooks[u],s&&"get"in s&&(a=s.get(e,!0,r)),a===t&&(a=Wt(e,n,i)),"normal"===a&&n in Kt&&(a=Kt[n]),""===r||r?(o=parseFloat(a),r===!0||b.isNumeric(o)?o||0:a):a},swap:function(e,t,n,r){var i,o,a={};for(o in t)a[o]=e.style[o],e.style[o]=t[o];i=n.apply(e,r||[]);for(o in t)e.style[o]=a[o];return i}}),e.getComputedStyle?(Rt=function(t){return e.getComputedStyle(t,null)},Wt=function(e,n,r){var i,o,a,s=r||Rt(e),u=s?s.getPropertyValue(n)||s[n]:t,l=e.style;return s&&(""!==u||b.contains(e.ownerDocument,e)||(u=b.style(e,n)),Yt.test(u)&&Ut.test(n)&&(i=l.width,o=l.minWidth,a=l.maxWidth,l.minWidth=l.maxWidth=l.width=u,u=s.width,l.width=i,l.minWidth=o,l.maxWidth=a)),u}):o.documentElement.currentStyle&&(Rt=function(e){return e.currentStyle},Wt=function(e,n,r){var i,o,a,s=r||Rt(e),u=s?s[n]:t,l=e.style;return null==u&&l&&l[n]&&(u=l[n]),Yt.test(u)&&!zt.test(n)&&(i=l.left,o=e.runtimeStyle,a=o&&o.left,a&&(o.left=e.currentStyle.left),l.left="fontSize"===n?"1em":u,u=l.pixelLeft+"px",l.left=i,a&&(o.left=a)),""===u?"auto":u});function on(e,t,n){var r=Vt.exec(t);return r?Math.max(0,r[1]-(n||0))+(r[2]||"px"):t}function an(e,t,n,r,i){var o=n===(r?"border":"content")?4:"width"===t?1:0,a=0;for(;4>o;o+=2)"margin"===n&&(a+=b.css(e,n+Zt[o],!0,i)),r?("content"===n&&(a-=b.css(e,"padding"+Zt[o],!0,i)),"margin"!==n&&(a-=b.css(e,"border"+Zt[o]+"Width",!0,i))):(a+=b.css(e,"padding"+Zt[o],!0,i),"padding"!==n&&(a+=b.css(e,"border"+Zt[o]+"Width",!0,i)));return a}function sn(e,t,n){var r=!0,i="width"===t?e.offsetWidth:e.offsetHeight,o=Rt(e),a=b.support.boxSizing&&"border-box"===b.css(e,"boxSizing",!1,o);if(0>=i||null==i){if(i=Wt(e,t,o),(0>i||null==i)&&(i=e.style[t]),Yt.test(i))return i;r=a&&(b.support.boxSizingReliable||i===e.style[t]),i=parseFloat(i)||0}return i+an(e,t,n||(a?"border":"content"),r,o)+"px"}function un(e){var t=o,n=Gt[e];return n||(n=ln(e,t),"none"!==n&&n||(Pt=(Pt||b("<iframe frameborder='0' width='0' height='0'/>").css("cssText","display:block !important")).appendTo(t.documentElement),t=(Pt[0].contentWindow||Pt[0].contentDocument).document,t.write("<!doctype html><html><body>"),t.close(),n=ln(e,t),Pt.detach()),Gt[e]=n),n}function ln(e,t){var n=b(t.createElement(e)).appendTo(t.body),r=b.css(n[0],"display");return n.remove(),r}b.each(["height","width"],function(e,n){b.cssHooks[n]={get:function(e,r,i){return r?0===e.offsetWidth&&Xt.test(b.css(e,"display"))?b.swap(e,Qt,function(){return sn(e,n,i)}):sn(e,n,i):t},set:function(e,t,r){var i=r&&Rt(e);return on(e,t,r?an(e,n,r,b.support.boxSizing&&"border-box"===b.css(e,"boxSizing",!1,i),i):0)}}}),b.support.opacity||(b.cssHooks.opacity={get:function(e,t){return It.test((t&&e.currentStyle?e.currentStyle.filter:e.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":t?"1":""},set:function(e,t){var n=e.style,r=e.currentStyle,i=b.isNumeric(t)?"alpha(opacity="+100*t+")":"",o=r&&r.filter||n.filter||"";n.zoom=1,(t>=1||""===t)&&""===b.trim(o.replace($t,""))&&n.removeAttribute&&(n.removeAttribute("filter"),""===t||r&&!r.filter)||(n.filter=$t.test(o)?o.replace($t,i):o+" "+i)}}),b(function(){b.support.reliableMarginRight||(b.cssHooks.marginRight={get:function(e,n){return n?b.swap(e,{display:"inline-block"},Wt,[e,"marginRight"]):t}}),!b.support.pixelPosition&&b.fn.position&&b.each(["top","left"],function(e,n){b.cssHooks[n]={get:function(e,r){return r?(r=Wt(e,n),Yt.test(r)?b(e).position()[n]+"px":r):t}}})}),b.expr&&b.expr.filters&&(b.expr.filters.hidden=function(e){return 0>=e.offsetWidth&&0>=e.offsetHeight||!b.support.reliableHiddenOffsets&&"none"===(e.style&&e.style.display||b.css(e,"display"))},b.expr.filters.visible=function(e){return!b.expr.filters.hidden(e)}),b.each({margin:"",padding:"",border:"Width"},function(e,t){b.cssHooks[e+t]={expand:function(n){var r=0,i={},o="string"==typeof n?n.split(" "):[n];for(;4>r;r++)i[e+Zt[r]+t]=o[r]||o[r-2]||o[0];return i}},Ut.test(e)||(b.cssHooks[e+t].set=on)});var cn=/%20/g,pn=/\[\]$/,fn=/\r?\n/g,dn=/^(?:submit|button|image|reset|file)$/i,hn=/^(?:input|select|textarea|keygen)/i;b.fn.extend({serialize:function(){return b.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=b.prop(this,"elements");return e?b.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!b(this).is(":disabled")&&hn.test(this.nodeName)&&!dn.test(e)&&(this.checked||!Nt.test(e))}).map(function(e,t){var n=b(this).val();return null==n?null:b.isArray(n)?b.map(n,function(e){return{name:t.name,value:e.replace(fn,"\r\n")}}):{name:t.name,value:n.replace(fn,"\r\n")}}).get()}}),b.param=function(e,n){var r,i=[],o=function(e,t){t=b.isFunction(t)?t():null==t?"":t,i[i.length]=encodeURIComponent(e)+"="+encodeURIComponent(t)};if(n===t&&(n=b.ajaxSettings&&b.ajaxSettings.traditional),b.isArray(e)||e.jquery&&!b.isPlainObject(e))b.each(e,function(){o(this.name,this.value)});else for(r in e)gn(r,e[r],n,o);return i.join("&").replace(cn,"+")};function gn(e,t,n,r){var i;if(b.isArray(t))b.each(t,function(t,i){n||pn.test(e)?r(e,i):gn(e+"["+("object"==typeof i?t:"")+"]",i,n,r)});else if(n||"object"!==b.type(t))r(e,t);else for(i in t)gn(e+"["+i+"]",t[i],n,r)}b.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(e,t){b.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}}),b.fn.hover=function(e,t){return this.mouseenter(e).mouseleave(t||e)};var mn,yn,vn=b.now(),bn=/\?/,xn=/#.*$/,wn=/([?&])_=[^&]*/,Tn=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Nn=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Cn=/^(?:GET|HEAD)$/,kn=/^\/\//,En=/^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,Sn=b.fn.load,An={},jn={},Dn="*/".concat("*");try{yn=a.href}catch(Ln){yn=o.createElement("a"),yn.href="",yn=yn.href}mn=En.exec(yn.toLowerCase())||[];function Hn(e){return function(t,n){"string"!=typeof t&&(n=t,t="*");var r,i=0,o=t.toLowerCase().match(w)||[];if(b.isFunction(n))while(r=o[i++])"+"===r[0]?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n)}}function qn(e,n,r,i){var o={},a=e===jn;function s(u){var l;return o[u]=!0,b.each(e[u]||[],function(e,u){var c=u(n,r,i);return"string"!=typeof c||a||o[c]?a?!(l=c):t:(n.dataTypes.unshift(c),s(c),!1)}),l}return s(n.dataTypes[0])||!o["*"]&&s("*")}function Mn(e,n){var r,i,o=b.ajaxSettings.flatOptions||{};for(i in n)n[i]!==t&&((o[i]?e:r||(r={}))[i]=n[i]);return r&&b.extend(!0,e,r),e}b.fn.load=function(e,n,r){if("string"!=typeof e&&Sn)return Sn.apply(this,arguments);var i,o,a,s=this,u=e.indexOf(" ");return u>=0&&(i=e.slice(u,e.length),e=e.slice(0,u)),b.isFunction(n)?(r=n,n=t):n&&"object"==typeof n&&(a="POST"),s.length>0&&b.ajax({url:e,type:a,dataType:"html",data:n}).done(function(e){o=arguments,s.html(i?b("<div>").append(b.parseHTML(e)).find(i):e)}).complete(r&&function(e,t){s.each(r,o||[e.responseText,t,e])}),this},b.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){b.fn[t]=function(e){return this.on(t,e)}}),b.each(["get","post"],function(e,n){b[n]=function(e,r,i,o){return b.isFunction(r)&&(o=o||i,i=r,r=t),b.ajax({url:e,type:n,dataType:o,data:r,success:i})}}),b.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:yn,type:"GET",isLocal:Nn.test(mn[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Dn,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText"},converters:{"* text":e.String,"text html":!0,"text json":b.parseJSON,"text xml":b.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?Mn(Mn(e,b.ajaxSettings),t):Mn(b.ajaxSettings,e)},ajaxPrefilter:Hn(An),ajaxTransport:Hn(jn),ajax:function(e,n){"object"==typeof e&&(n=e,e=t),n=n||{};var r,i,o,a,s,u,l,c,p=b.ajaxSetup({},n),f=p.context||p,d=p.context&&(f.nodeType||f.jquery)?b(f):b.event,h=b.Deferred(),g=b.Callbacks("once memory"),m=p.statusCode||{},y={},v={},x=0,T="canceled",N={readyState:0,getResponseHeader:function(e){var t;if(2===x){if(!c){c={};while(t=Tn.exec(a))c[t[1].toLowerCase()]=t[2]}t=c[e.toLowerCase()]}return null==t?null:t},getAllResponseHeaders:function(){return 2===x?a:null},setRequestHeader:function(e,t){var n=e.toLowerCase();return x||(e=v[n]=v[n]||e,y[e]=t),this},overrideMimeType:function(e){return x||(p.mimeType=e),this},statusCode:function(e){var t;if(e)if(2>x)for(t in e)m[t]=[m[t],e[t]];else N.always(e[N.status]);return this},abort:function(e){var t=e||T;return l&&l.abort(t),k(0,t),this}};if(h.promise(N).complete=g.add,N.success=N.done,N.error=N.fail,p.url=((e||p.url||yn)+"").replace(xn,"").replace(kn,mn[1]+"//"),p.type=n.method||n.type||p.method||p.type,p.dataTypes=b.trim(p.dataType||"*").toLowerCase().match(w)||[""],null==p.crossDomain&&(r=En.exec(p.url.toLowerCase()),p.crossDomain=!(!r||r[1]===mn[1]&&r[2]===mn[2]&&(r[3]||("http:"===r[1]?80:443))==(mn[3]||("http:"===mn[1]?80:443)))),p.data&&p.processData&&"string"!=typeof p.data&&(p.data=b.param(p.data,p.traditional)),qn(An,p,n,N),2===x)return N;u=p.global,u&&0===b.active++&&b.event.trigger("ajaxStart"),p.type=p.type.toUpperCase(),p.hasContent=!Cn.test(p.type),o=p.url,p.hasContent||(p.data&&(o=p.url+=(bn.test(o)?"&":"?")+p.data,delete p.data),p.cache===!1&&(p.url=wn.test(o)?o.replace(wn,"$1_="+vn++):o+(bn.test(o)?"&":"?")+"_="+vn++)),p.ifModified&&(b.lastModified[o]&&N.setRequestHeader("If-Modified-Since",b.lastModified[o]),b.etag[o]&&N.setRequestHeader("If-None-Match",b.etag[o])),(p.data&&p.hasContent&&p.contentType!==!1||n.contentType)&&N.setRequestHeader("Content-Type",p.contentType),N.setRequestHeader("Accept",p.dataTypes[0]&&p.accepts[p.dataTypes[0]]?p.accepts[p.dataTypes[0]]+("*"!==p.dataTypes[0]?", "+Dn+"; q=0.01":""):p.accepts["*"]);for(i in p.headers)N.setRequestHeader(i,p.headers[i]);if(p.beforeSend&&(p.beforeSend.call(f,N,p)===!1||2===x))return N.abort();T="abort";for(i in{success:1,error:1,complete:1})N[i](p[i]);if(l=qn(jn,p,n,N)){N.readyState=1,u&&d.trigger("ajaxSend",[N,p]),p.async&&p.timeout>0&&(s=setTimeout(function(){N.abort("timeout")},p.timeout));try{x=1,l.send(y,k)}catch(C){if(!(2>x))throw C;k(-1,C)}}else k(-1,"No Transport");function k(e,n,r,i){var c,y,v,w,T,C=n;2!==x&&(x=2,s&&clearTimeout(s),l=t,a=i||"",N.readyState=e>0?4:0,r&&(w=_n(p,N,r)),e>=200&&300>e||304===e?(p.ifModified&&(T=N.getResponseHeader("Last-Modified"),T&&(b.lastModified[o]=T),T=N.getResponseHeader("etag"),T&&(b.etag[o]=T)),204===e?(c=!0,C="nocontent"):304===e?(c=!0,C="notmodified"):(c=Fn(p,w),C=c.state,y=c.data,v=c.error,c=!v)):(v=C,(e||!C)&&(C="error",0>e&&(e=0))),N.status=e,N.statusText=(n||C)+"",c?h.resolveWith(f,[y,C,N]):h.rejectWith(f,[N,C,v]),N.statusCode(m),m=t,u&&d.trigger(c?"ajaxSuccess":"ajaxError",[N,p,c?y:v]),g.fireWith(f,[N,C]),u&&(d.trigger("ajaxComplete",[N,p]),--b.active||b.event.trigger("ajaxStop")))}return N},getScript:function(e,n){return b.get(e,t,n,"script")},getJSON:function(e,t,n){return b.get(e,t,n,"json")}});function _n(e,n,r){var i,o,a,s,u=e.contents,l=e.dataTypes,c=e.responseFields;for(s in c)s in r&&(n[c[s]]=r[s]);while("*"===l[0])l.shift(),o===t&&(o=e.mimeType||n.getResponseHeader("Content-Type"));if(o)for(s in u)if(u[s]&&u[s].test(o)){l.unshift(s);break}if(l[0]in r)a=l[0];else{for(s in r){if(!l[0]||e.converters[s+" "+l[0]]){a=s;break}i||(i=s)}a=a||i}return a?(a!==l[0]&&l.unshift(a),r[a]):t}function Fn(e,t){var n,r,i,o,a={},s=0,u=e.dataTypes.slice(),l=u[0];if(e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u[1])for(i in e.converters)a[i.toLowerCase()]=e.converters[i];for(;r=u[++s];)if("*"!==r){if("*"!==l&&l!==r){if(i=a[l+" "+r]||a["* "+r],!i)for(n in a)if(o=n.split(" "),o[1]===r&&(i=a[l+" "+o[0]]||a["* "+o[0]])){i===!0?i=a[n]:a[n]!==!0&&(r=o[0],u.splice(s--,0,r));break}if(i!==!0)if(i&&e["throws"])t=i(t);else try{t=i(t)}catch(c){return{state:"parsererror",error:i?c:"No conversion from "+l+" to "+r}}}l=r}return{state:"success",data:t}}b.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(e){return b.globalEval(e),e}}}),b.ajaxPrefilter("script",function(e){e.cache===t&&(e.cache=!1),e.crossDomain&&(e.type="GET",e.global=!1)}),b.ajaxTransport("script",function(e){if(e.crossDomain){var n,r=o.head||b("head")[0]||o.documentElement;return{send:function(t,i){n=o.createElement("script"),n.async=!0,e.scriptCharset&&(n.charset=e.scriptCharset),n.src=e.url,n.onload=n.onreadystatechange=function(e,t){(t||!n.readyState||/loaded|complete/.test(n.readyState))&&(n.onload=n.onreadystatechange=null,n.parentNode&&n.parentNode.removeChild(n),n=null,t||i(200,"success"))},r.insertBefore(n,r.firstChild)},abort:function(){n&&n.onload(t,!0)}}}});var On=[],Bn=/(=)\?(?=&|$)|\?\?/;b.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=On.pop()||b.expando+"_"+vn++;return this[e]=!0,e}}),b.ajaxPrefilter("json jsonp",function(n,r,i){var o,a,s,u=n.jsonp!==!1&&(Bn.test(n.url)?"url":"string"==typeof n.data&&!(n.contentType||"").indexOf("application/x-www-form-urlencoded")&&Bn.test(n.data)&&"data");return u||"jsonp"===n.dataTypes[0]?(o=n.jsonpCallback=b.isFunction(n.jsonpCallback)?n.jsonpCallback():n.jsonpCallback,u?n[u]=n[u].replace(Bn,"$1"+o):n.jsonp!==!1&&(n.url+=(bn.test(n.url)?"&":"?")+n.jsonp+"="+o),n.converters["script json"]=function(){return s||b.error(o+" was not called"),s[0]},n.dataTypes[0]="json",a=e[o],e[o]=function(){s=arguments},i.always(function(){e[o]=a,n[o]&&(n.jsonpCallback=r.jsonpCallback,On.push(o)),s&&b.isFunction(a)&&a(s[0]),s=a=t}),"script"):t});var Pn,Rn,Wn=0,$n=e.ActiveXObject&&function(){var e;for(e in Pn)Pn[e](t,!0)};function In(){try{return new e.XMLHttpRequest}catch(t){}}function zn(){try{return new e.ActiveXObject("Microsoft.XMLHTTP")}catch(t){}}b.ajaxSettings.xhr=e.ActiveXObject?function(){return!this.isLocal&&In()||zn()}:In,Rn=b.ajaxSettings.xhr(),b.support.cors=!!Rn&&"withCredentials"in Rn,Rn=b.support.ajax=!!Rn,Rn&&b.ajaxTransport(function(n){if(!n.crossDomain||b.support.cors){var r;return{send:function(i,o){var a,s,u=n.xhr();if(n.username?u.open(n.type,n.url,n.async,n.username,n.password):u.open(n.type,n.url,n.async),n.xhrFields)for(s in n.xhrFields)u[s]=n.xhrFields[s];n.mimeType&&u.overrideMimeType&&u.overrideMimeType(n.mimeType),n.crossDomain||i["X-Requested-With"]||(i["X-Requested-With"]="XMLHttpRequest");try{for(s in i)u.setRequestHeader(s,i[s])}catch(l){}u.send(n.hasContent&&n.data||null),r=function(e,i){var s,l,c,p;try{if(r&&(i||4===u.readyState))if(r=t,a&&(u.onreadystatechange=b.noop,$n&&delete Pn[a]),i)4!==u.readyState&&u.abort();else{p={},s=u.status,l=u.getAllResponseHeaders(),"string"==typeof u.responseText&&(p.text=u.responseText);try{c=u.statusText}catch(f){c=""}s||!n.isLocal||n.crossDomain?1223===s&&(s=204):s=p.text?200:404}}catch(d){i||o(-1,d)}p&&o(s,c,p,l)},n.async?4===u.readyState?setTimeout(r):(a=++Wn,$n&&(Pn||(Pn={},b(e).unload($n)),Pn[a]=r),u.onreadystatechange=r):r()},abort:function(){r&&r(t,!0)}}}});var Xn,Un,Vn=/^(?:toggle|show|hide)$/,Yn=RegExp("^(?:([+-])=|)("+x+")([a-z%]*)$","i"),Jn=/queueHooks$/,Gn=[nr],Qn={"*":[function(e,t){var n,r,i=this.createTween(e,t),o=Yn.exec(t),a=i.cur(),s=+a||0,u=1,l=20;if(o){if(n=+o[2],r=o[3]||(b.cssNumber[e]?"":"px"),"px"!==r&&s){s=b.css(i.elem,e,!0)||n||1;do u=u||".5",s/=u,b.style(i.elem,e,s+r);while(u!==(u=i.cur()/a)&&1!==u&&--l)}i.unit=r,i.start=s,i.end=o[1]?s+(o[1]+1)*n:n}return i}]};function Kn(){return setTimeout(function(){Xn=t}),Xn=b.now()}function Zn(e,t){b.each(t,function(t,n){var r=(Qn[t]||[]).concat(Qn["*"]),i=0,o=r.length;for(;o>i;i++)if(r[i].call(e,t,n))return})}function er(e,t,n){var r,i,o=0,a=Gn.length,s=b.Deferred().always(function(){delete u.elem}),u=function(){if(i)return!1;var t=Xn||Kn(),n=Math.max(0,l.startTime+l.duration-t),r=n/l.duration||0,o=1-r,a=0,u=l.tweens.length;for(;u>a;a++)l.tweens[a].run(o);return s.notifyWith(e,[l,o,n]),1>o&&u?n:(s.resolveWith(e,[l]),!1)},l=s.promise({elem:e,props:b.extend({},t),opts:b.extend(!0,{specialEasing:{}},n),originalProperties:t,originalOptions:n,startTime:Xn||Kn(),duration:n.duration,tweens:[],createTween:function(t,n){var r=b.Tween(e,l.opts,t,n,l.opts.specialEasing[t]||l.opts.easing);return l.tweens.push(r),r},stop:function(t){var n=0,r=t?l.tweens.length:0;if(i)return this;for(i=!0;r>n;n++)l.tweens[n].run(1);return t?s.resolveWith(e,[l,t]):s.rejectWith(e,[l,t]),this}}),c=l.props;for(tr(c,l.opts.specialEasing);a>o;o++)if(r=Gn[o].call(l,e,c,l.opts))return r;return Zn(l,c),b.isFunction(l.opts.start)&&l.opts.start.call(e,l),b.fx.timer(b.extend(u,{elem:e,anim:l,queue:l.opts.queue})),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always)}function tr(e,t){var n,r,i,o,a;for(i in e)if(r=b.camelCase(i),o=t[r],n=e[i],b.isArray(n)&&(o=n[1],n=e[i]=n[0]),i!==r&&(e[r]=n,delete e[i]),a=b.cssHooks[r],a&&"expand"in a){n=a.expand(n),delete e[r];for(i in n)i in e||(e[i]=n[i],t[i]=o)}else t[r]=o}b.Animation=b.extend(er,{tweener:function(e,t){b.isFunction(e)?(t=e,e=["*"]):e=e.split(" ");var n,r=0,i=e.length;for(;i>r;r++)n=e[r],Qn[n]=Qn[n]||[],Qn[n].unshift(t)},prefilter:function(e,t){t?Gn.unshift(e):Gn.push(e)}});function nr(e,t,n){var r,i,o,a,s,u,l,c,p,f=this,d=e.style,h={},g=[],m=e.nodeType&&nn(e);n.queue||(c=b._queueHooks(e,"fx"),null==c.unqueued&&(c.unqueued=0,p=c.empty.fire,c.empty.fire=function(){c.unqueued||p()}),c.unqueued++,f.always(function(){f.always(function(){c.unqueued--,b.queue(e,"fx").length||c.empty.fire()})})),1===e.nodeType&&("height"in t||"width"in t)&&(n.overflow=[d.overflow,d.overflowX,d.overflowY],"inline"===b.css(e,"display")&&"none"===b.css(e,"float")&&(b.support.inlineBlockNeedsLayout&&"inline"!==un(e.nodeName)?d.zoom=1:d.display="inline-block")),n.overflow&&(d.overflow="hidden",b.support.shrinkWrapBlocks||f.always(function(){d.overflow=n.overflow[0],d.overflowX=n.overflow[1],d.overflowY=n.overflow[2]}));for(i in t)if(a=t[i],Vn.exec(a)){if(delete t[i],u=u||"toggle"===a,a===(m?"hide":"show"))continue;g.push(i)}if(o=g.length){s=b._data(e,"fxshow")||b._data(e,"fxshow",{}),"hidden"in s&&(m=s.hidden),u&&(s.hidden=!m),m?b(e).show():f.done(function(){b(e).hide()}),f.done(function(){var t;b._removeData(e,"fxshow");for(t in h)b.style(e,t,h[t])});for(i=0;o>i;i++)r=g[i],l=f.createTween(r,m?s[r]:0),h[r]=s[r]||b.style(e,r),r in s||(s[r]=l.start,m&&(l.end=l.start,l.start="width"===r||"height"===r?1:0))}}function rr(e,t,n,r,i){return new rr.prototype.init(e,t,n,r,i)}b.Tween=rr,rr.prototype={constructor:rr,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||"swing",this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(b.cssNumber[n]?"":"px")},cur:function(){var e=rr.propHooks[this.prop];return e&&e.get?e.get(this):rr.propHooks._default.get(this)},run:function(e){var t,n=rr.propHooks[this.prop];return this.pos=t=this.options.duration?b.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):rr.propHooks._default.set(this),this}},rr.prototype.init.prototype=rr.prototype,rr.propHooks={_default:{get:function(e){var t;return null==e.elem[e.prop]||e.elem.style&&null!=e.elem.style[e.prop]?(t=b.css(e.elem,e.prop,""),t&&"auto"!==t?t:0):e.elem[e.prop]},set:function(e){b.fx.step[e.prop]?b.fx.step[e.prop](e):e.elem.style&&(null!=e.elem.style[b.cssProps[e.prop]]||b.cssHooks[e.prop])?b.style(e.elem,e.prop,e.now+e.unit):e.elem[e.prop]=e.now}}},rr.propHooks.scrollTop=rr.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},b.each(["toggle","show","hide"],function(e,t){var n=b.fn[t];b.fn[t]=function(e,r,i){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(ir(t,!0),e,r,i)}}),b.fn.extend({fadeTo:function(e,t,n,r){return this.filter(nn).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=b.isEmptyObject(e),o=b.speed(t,n,r),a=function(){var t=er(this,b.extend({},e),o);a.finish=function(){t.stop(!0)},(i||b._data(this,"finish"))&&t.stop(!0)};return a.finish=a,i||o.queue===!1?this.each(a):this.queue(o.queue,a)},stop:function(e,n,r){var i=function(e){var t=e.stop;delete e.stop,t(r)};return"string"!=typeof e&&(r=n,n=e,e=t),n&&e!==!1&&this.queue(e||"fx",[]),this.each(function(){var t=!0,n=null!=e&&e+"queueHooks",o=b.timers,a=b._data(this);if(n)a[n]&&a[n].stop&&i(a[n]);else for(n in a)a[n]&&a[n].stop&&Jn.test(n)&&i(a[n]);for(n=o.length;n--;)o[n].elem!==this||null!=e&&o[n].queue!==e||(o[n].anim.stop(r),t=!1,o.splice(n,1));(t||!r)&&b.dequeue(this,e)})},finish:function(e){return e!==!1&&(e=e||"fx"),this.each(function(){var t,n=b._data(this),r=n[e+"queue"],i=n[e+"queueHooks"],o=b.timers,a=r?r.length:0;for(n.finish=!0,b.queue(this,e,[]),i&&i.cur&&i.cur.finish&&i.cur.finish.call(this),t=o.length;t--;)o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1));for(t=0;a>t;t++)r[t]&&r[t].finish&&r[t].finish.call(this);delete n.finish})}});function ir(e,t){var n,r={height:e},i=0;for(t=t?1:0;4>i;i+=2-t)n=Zt[i],r["margin"+n]=r["padding"+n]=e;return t&&(r.opacity=r.width=e),r}b.each({slideDown:ir("show"),slideUp:ir("hide"),slideToggle:ir("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){b.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),b.speed=function(e,t,n){var r=e&&"object"==typeof e?b.extend({},e):{complete:n||!n&&t||b.isFunction(e)&&e,duration:e,easing:n&&t||t&&!b.isFunction(t)&&t};return r.duration=b.fx.off?0:"number"==typeof r.duration?r.duration:r.duration in b.fx.speeds?b.fx.speeds[r.duration]:b.fx.speeds._default,(null==r.queue||r.queue===!0)&&(r.queue="fx"),r.old=r.complete,r.complete=function(){b.isFunction(r.old)&&r.old.call(this),r.queue&&b.dequeue(this,r.queue)},r},b.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2}},b.timers=[],b.fx=rr.prototype.init,b.fx.tick=function(){var e,n=b.timers,r=0;for(Xn=b.now();n.length>r;r++)e=n[r],e()||n[r]!==e||n.splice(r--,1);n.length||b.fx.stop(),Xn=t},b.fx.timer=function(e){e()&&b.timers.push(e)&&b.fx.start()},b.fx.interval=13,b.fx.start=function(){Un||(Un=setInterval(b.fx.tick,b.fx.interval))},b.fx.stop=function(){clearInterval(Un),Un=null},b.fx.speeds={slow:600,fast:200,_default:400},b.fx.step={},b.expr&&b.expr.filters&&(b.expr.filters.animated=function(e){return b.grep(b.timers,function(t){return e===t.elem}).length}),b.fn.offset=function(e){if(arguments.length)return e===t?this:this.each(function(t){b.offset.setOffset(this,e,t)});var n,r,o={top:0,left:0},a=this[0],s=a&&a.ownerDocument;if(s)return n=s.documentElement,b.contains(n,a)?(typeof a.getBoundingClientRect!==i&&(o=a.getBoundingClientRect()),r=or(s),{top:o.top+(r.pageYOffset||n.scrollTop)-(n.clientTop||0),left:o.left+(r.pageXOffset||n.scrollLeft)-(n.clientLeft||0)}):o},b.offset={setOffset:function(e,t,n){var r=b.css(e,"position");"static"===r&&(e.style.position="relative");var i=b(e),o=i.offset(),a=b.css(e,"top"),s=b.css(e,"left"),u=("absolute"===r||"fixed"===r)&&b.inArray("auto",[a,s])>-1,l={},c={},p,f;u?(c=i.position(),p=c.top,f=c.left):(p=parseFloat(a)||0,f=parseFloat(s)||0),b.isFunction(t)&&(t=t.call(e,n,o)),null!=t.top&&(l.top=t.top-o.top+p),null!=t.left&&(l.left=t.left-o.left+f),"using"in t?t.using.call(e,l):i.css(l)}},b.fn.extend({position:function(){if(this[0]){var e,t,n={top:0,left:0},r=this[0];return"fixed"===b.css(r,"position")?t=r.getBoundingClientRect():(e=this.offsetParent(),t=this.offset(),b.nodeName(e[0],"html")||(n=e.offset()),n.top+=b.css(e[0],"borderTopWidth",!0),n.left+=b.css(e[0],"borderLeftWidth",!0)),{top:t.top-n.top-b.css(r,"marginTop",!0),left:t.left-n.left-b.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent||o.documentElement;while(e&&!b.nodeName(e,"html")&&"static"===b.css(e,"position"))e=e.offsetParent;return e||o.documentElement})}}),b.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,n){var r=/Y/.test(n);b.fn[e]=function(i){return b.access(this,function(e,i,o){var a=or(e);return o===t?a?n in a?a[n]:a.document.documentElement[i]:e[i]:(a?a.scrollTo(r?b(a).scrollLeft():o,r?o:b(a).scrollTop()):e[i]=o,t)},e,i,arguments.length,null)}});function or(e){return b.isWindow(e)?e:9===e.nodeType?e.defaultView||e.parentWindow:!1}b.each({Height:"height",Width:"width"},function(e,n){b.each({padding:"inner"+e,content:n,"":"outer"+e},function(r,i){b.fn[i]=function(i,o){var a=arguments.length&&(r||"boolean"!=typeof i),s=r||(i===!0||o===!0?"margin":"border");return b.access(this,function(n,r,i){var o;return b.isWindow(n)?n.document.documentElement["client"+e]:9===n.nodeType?(o=n.documentElement,Math.max(n.body["scroll"+e],o["scroll"+e],n.body["offset"+e],o["offset"+e],o["client"+e])):i===t?b.css(n,r,s):b.style(n,r,i,s)},n,a?i:t,a,null)}})}),e.jQuery=e.$=b,"function"==typeof define&&define.amd&&define.amd.jQuery&&define("jquery",[],function(){return b})})(window);
    if (window.blogoLoaderInstance) {
        window.blogoLoaderInstance.addOnLoadQueue({
         // Mandatory parameter
            'execute': (function() {

                $(document).ready(function(){
                  

                    //Accordion comments on mobile
                    var isCommentOpn = false;


                    $('.comments-cnt').click( function(){
                        if(isCommentOpn && $( window ).width() < 820){
                            $('.all-comments').show();
                            $('#widget-comments-form').show();
                            isCommentOpn = !isCommentOpn;
                        }else{
                            $('.all-comments').hide();
                            $('#widget-comments-form').hide();
                            isCommentOpn = !isCommentOpn;
                        }

                    });


                    /* Social sharing into Detail template */
                    var hidden = true;

                    $('.sharing-rwd-btn').click( function(){
                        if (hidden) {
                            $('.sharing-rwd').find('ul').fadeIn();
                            hidden = false;
                        } else {
                            $('.sharing-rwd').find('ul').fadeOut();
                            hidden = true;
                        }
                    });


                    function bindAnchor(element) {

                        /* Calcoliamo l altezza dell elemento fisso allo scroll */
                        var targetRoot = '.' + $(element).attr('data-src');

                        if ( targetRoot.length > 0 ) {

                            var heightRoot = $(targetRoot).outerHeight();

                        } else {

                            var heightRoot = $('.social-bar').outerHeight();

                        }

                        $(element).click(function(e) {

                            e.preventDefault();

                            var anchorurl = ($(element).attr('href')).replace(/^#/,'');

                            $('html, body').animate({
                                scrollTop: $('a.anchor[name="'+anchorurl+'"]').offset().top - (heightRoot)
                            }, 500);

                        });
                    }

                    $('a.anchor').each(function(i,anchorEl) {

                        var targetString = "#"+($(anchorEl).attr('name'));
                        var targetEl = $('a[href="'+targetString+'"]');

                        bindAnchor(targetEl);
                    }),

                    // Widget: SendToFriend

                    $('.send-email').click(function() {

                        $('.send-form').show("fadein");
                    }),

                    $('.close-send').click(function() {

                        $('.send-form').hide("fadeout");

                    }),

                    /* Filtering: submenu */
                    $('.filter-submenu').hover(
                        function(){
                            $(this).find('ul').show();
                            $(this).find('span').addClass('big-arrow-up');
                        },
                        function(){
                            $(this).find('ul').hide();
                            $(this).find('span').removeClass('big-arrow-up');
                        }
                    ),

                    /* Social sharing: fake buttons */

                    (function(){
                        var hoverTimer = null;

                        if (!$('body').hasClass('detail')) {

                            $('.social-sharing li.auto').hover(
                                function(){
                                    $(this).children('.sharing-box').show();
                                },
                                function(){
                                    $(this).children('.sharing-box').hide();
                                }
                            )

                            /*
                            $('.social-sharing li:first-child a').click(function(e){
                                if(!e) e = window.event;
                                e.preventDefault ? e.preventDefault() : e.returnValue = false;
                                window.open(this.href,'', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=580,width=400,top=10,left=10');
                            })
                            */
                        }

                    })();


                    //open #search on click 
                    $( "#search" ).click(function() {
                        openSearch();
                    });

                    $( "#profile-btn" ).click(function() {
                        if(!menuOpened["nav-profile"]){openMenu("nav-profile")}
                          else{closeMenu("nav-profile");};
                    });

                    $( "#share-btn" ).click(function() {
                        if(!menuOpened["nav-share"]){openMenu("nav-share")}
                          else{closeMenu("nav-share");};      
                    });

                    $('html').click(function() {
                        //Hide the menus and search if visible
                        closeSearch();
                        closeMenu("nav-profile");
                    });

                    $('#search, #nav-profile, #profile-btn').click(function(event){
                        //no action
                        event.stopPropagation();
                    });

                    var h = $(window).height(), w= $(window).width();
                    $(window).resize(onresize); 
                    onresize();
                    
                    //Trigger click body behind other divs (for skin issue)
                    var clickOrTouch = (('ontouchend' in window)) ? 'touchend' : 'click';
                    $("#all-page, #gap-skin-element").on(clickOrTouch, function(e) { 
                        if($(e.target).is(this)){
                          $('body').trigger('click');
                        }
                    });
             
                })

            })
        })
    }


//vars
var nav =  $('nav#nav');
var searchOpened = false;
var menuOpened = new Array();
menuOpened[ "nav-profile" ]  = false; // profile menu id
menuOpened[ "nav-share" ]    = false; // share menu id


//// Functions /////
function openSearch(){
    $("#search").addClass("slideSearch");
    $("#search input").focus();
    $("#nav > ul").animate({opacity:0.3});
    searchOpened=!searchOpened;

    //hide manchette right when slide search is open
    if(isMobile.any()){
      $("#header .manchette-right").fadeOut(100);
    }
}

function closeSearch(){
    $("#search").removeClass("slideSearch");
    $("#nav > ul").animate({opacity:1});
    searchOpened=!searchOpened;

    //show manchette right when slide search is open
    if(isMobile.any()){
      $("#header .manchette-right").delay(300).fadeIn(100);
    }
}

//open menu
function closeMenu(menu){
    $('#'+menu+'.tooltip-menu').removeClass('show-menu');
    setTimeout(function(){ $('#'+menu+'.tooltip-menu').css("display", "none");},200);
    menuOpened[$('#'+menu+'.tooltip-menu').attr("id")]=false;
}

//close menu
function openMenu(menu){
    $("#"+menu+".tooltip-menu").css("display", "block");
    setTimeout(function(){ $("#"+menu+".tooltip-menu").addClass('show-menu');},15);
    menuOpened[menu]=true;
}


//On resize calcs
function onresize(){
    h = $(window).height();
    w = $(window).width();

    if(isMobile.any() && w < 640){
        $('#nav-profile').css('height', h+'px');
    }else{
        $('#nav-profile').css('height', 'auto');
    }
}

//user agent check
var isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function() {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};




function searchBoxSlideEffects() { }

function smoothTo(anchorurl) {
    jQuery('html, body').animate({
        scrollTop: jQuery('a.anchor[name="'+anchorurl+'"]').offset().top - (jQuery('.social-bar').outerHeight())
    }, 500);
}

function checkSkin(){
    var background_image = $("body").css('background-image');
    if(typeof background_image != 'undefined' && background_image != 'none'){ 

        //calculate the height of gap element
        if ($('#header').length > 0) {
            var calc = $('#header').attr( 'style' );
            calc = calc.split('margin-top:');
            calc = calc[1].split(';');
            calc = calc[0].split('px');;
            calc = calc[0];
            $("#gap-skin-dummy").css('padding-top', (parseInt(calc)/10)+'%');
        }

        //Show div
        $("#gap-skin").css('display', 'block');
         
    }
}

function zoomImg(btnClicked){
    $(document).on("click",btnClicked, (function(e) {

        if( $(this).prev().width() > 140){
            $(this).parent().animate({width: '140px'});
            $(this).find("i").removeClass('zoom-icon-r').addClass("zoom-icon");
        }else{
            $(this).parent().animate({width: '100%'});
            $(this).find("i").removeClass('zoom-icon').addClass("zoom-icon-r");
        }
    }));
}


/**
 * Cookie plugin
 *
 * Copyright (c) 2006 Klaus Hartl (stilbuero.de)
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 *
 */
jQuery.cookie = function(name, value, options) {
    if (typeof value != 'undefined') { // name and value given, set cookie
        options = options || {};
        if (value === null) {
            value = '';
            options.expires = -1;
        }
        var expires = '';
        if (options.expires && (typeof options.expires == 'number' || options.expires.toUTCString)) {
            var date;
            if (typeof options.expires == 'number') {
                date = new Date();
                date.setTime(date.getTime() + (options.expires * 24 * 60 * 60 * 1000));
            } else {
                date = options.expires;
            }
            expires = '; expires=' + date.toUTCString(); // use expires attribute, max-age is not supported by IE
        }
        var path = options.path ? '; path=' + (options.path) : '';
        var domain = options.domain ? '; domain=' + (options.domain) : '';
        var secure = options.secure ? '; secure' : '';
        document.cookie = [name, '=', encodeURIComponent(value), expires, path, domain, secure].join('');
    } else { // only name given, get cookie
        var cookieValue = null;
        if (document.cookie && document.cookie != '') {
            var cookies = document.cookie.split(';');
            for (var i = 0; i < cookies.length; i++) {
                var cookie = jQuery.trim(cookies[i]);
                // Does this cookie string begin with the name we want?
                if (cookie.substring(0, name.length + 1) == (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
    }
};

/**
 * extractParamFromUri
 *
 * Common function...
 */

function extractParamFromUri(uri, paramName) {
    if (!uri) {
      return;
    }
    var uri = uri.split('#')[0];  // Remove anchor.
    var parts = uri.split('?');  // Check for query params.
    if (parts.length == 1) {
      return;
    }
    var query = decodeURI(parts[1]);

    // Find url param.
    paramName += '=';
    var params = query.split('&');
    for (var i = 0, param; param = params[i]; ++i) {
      if (param.indexOf(paramName) === 0) {
        return unescape(param.split('=')[1]);
      }
    }
}

/**
 * Pinterest button javascript create
 *
 * Copyright (c) 2012 Giovanni Guarino
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 *
 */

function pint_btn(selector) {
    
    var media = selector.find('p img.post').attr('src');
    var url = selector.find('h1 a').attr('href');
    var title = selector.find('h1 a').html(); 
    var button;
    if(!url){
        url = document.location.href;
    }
    if(!media){
        media = $('.articolo p img.post').first().attr('src') || $('.bigimg').first().attr('src') || '';
    }
    if(!title){
        title = $('#photoTitle').text() || $('title').text() || '';     
    }
    if(media && url && title){
        button = '<a href="http://pinterest.com/pin/create/button/?url=' + encodeURIComponent(url) + '&media=' + media + '&description=' + encodeURIComponent(title) +'" class="pin-it-button" count-layout="horizontal" target="_blank"><img style="border:0px" src="//assets.pinterest.com/images/PinExt.png" title="Pin It" /></a>';
        return button;
    }
}

/**
 * JQuery social buttons lazy load plugin
 *
 * Copyright (c) 2012 Vincenzo D'Amore, Giovanni Guarino
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 *
 */

(function( $ ) {

    $.fn.html5CheckButtonsVisible = function() {
        var selector = '.hidden-' + $.fn.lazySocialButtonRender.classes.join(', .hidden-');
        $.each($(selector), function(key, curcat) { 
            if ($(curcat).isScrolledIntoView()) 
            {
               $(curcat).trigger('beforeShow');
               $(curcat).removeClass('hidden-' + $.fn.lazySocialButtonRender.classes.join(' hidden-'));
            }
        });
    }

    $.fn.isScrolledIntoView = function(_margin)
    {
          // laziness...
          
          var margin = (typeof _margin == 'undefined') ? 300 : _margin;
          var docViewTop = $(window).scrollTop();
          var docViewBottom = docViewTop + $(window).height();

          var elemTop = $(this).offset().top + margin;
          var elemBottom = elemTop + $(this).height() - margin;

          var retval = ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
          return retval;
    };

    $.fn.lazySocialButtonRender = function() {

        var selector = '.' + $.fn.lazySocialButtonRender.classes.join(', .');
        $.each($(selector), function(key, curcat) { 
            if (!$(curcat).isScrolledIntoView()) 
            {
               var curclass = '';
               var nextclass = '';
               var classes = $(curcat).attr('class').split(' ');
               for (var i in classes) {
                   for (var k in $.fn.lazySocialButtonRender.classes) {
                       if (classes[i] == $.fn.lazySocialButtonRender.classes[k]) {
                           $(curcat).addClass('hidden-' + classes[i]);
                           $(curcat).removeClass(classes[i]);
                       }
                   }
               }
               $(curcat).bind('beforeShow', function() {
                   if ($(this).is('.hidden-fb-like')  ) {
                       var btn = '';
                       for (var i=0, attrs=this.attributes, l=attrs.length; i<l; i++){
                           attr = attrs.item(i)
                           nodename = attr.nodeName.replace(/data\-/, '');
                           btn += nodename + '=\"' + attr.nodeValue + '\"';
                       }
                       $(this).addClass('fb-like');
                       $(this).html('<fb:like ' + btn + ' ></fb:like>');
                       if (typeof FB != 'undefined' )
                          FB.XFBML.parse($(this).get(0));
//                     $(this).parent().css({ position : "relative" });
                   } else
                   if ($(this).is('.hidden-g-plusone')) {
                       var btn = {};
                       for (var i=0, attrs=this.attributes, l=attrs.length; i<l; i++){
                           attr = attrs.item(i)
                           btn[attr.nodeName.replace(/data\-/, '')] = attr.nodeValue;
                       }
                       $(this).addClass('g-plusone');
                       if (window.gapi)
                          window.gapi.plusone.render($(this).get(0), btn);
                       // Hack for chrome render
                       $(this).parent().css({ position : "relative" });
                   } else
                   if ($(this).is('.hidden-twitter-share-button') ) {
                       $(this).addClass('twitter-share-button');
                       if (window.twttr && window.twttr.init) {
                           twttr.widgets.load()
                       }
                   } else
                   if ($(this).is('.hidden-pinterest-button') ) {
                       $(this).addClass('pinterest-button');
                       var selector = $(this).parent().parent().parent();
                       $(this).html(pint_btn(selector));
                       

                   }
                   $(this).unbind('beforeShow');
               });
            }
        });
        $(window).scroll(function () { 
          $().html5CheckButtonsVisible();
        });
        $().html5CheckButtonsVisible();
    };

    $.fn.lazySocialButtonRender.classes = ['fb-like', 'g-plusone', 'twitter-share-button', 'pinterest-button'];  
    
  })( jQuery );

/* Comments helper function */

function on_fb_comment_create(response) {

//  Select last 5 comments to current post
    var comments_query = FB.Data.query("SELECT fromid, username, text, post_fbid FROM comment WHERE object_id IN (SELECT comments_fbid FROM link_stat WHERE url ='" + response.href + "') ORDER BY time DESC LIMIT 5");
    var users_query = FB.Data.query("SELECT uid, name, profile_url FROM user WHERE uid IN (SELECT fromid FROM {0})", comments_query);
    var pages_query = FB.Data.query("SELECT page_id, name, page_url FROM page WHERE page_id IN (SELECT fromid FROM {0})", comments_query);

    FB.Data.waitOn([comments_query, users_query, pages_query], function() {
        comment_response = comments_query.value;

        for (var i=0; i<comment_response.length; i++) {
//          Check if Nth comment is the one inserted by current commenter
            if (comment_response[i].post_fbid == response.commentID) {
                var comment_data = {
                    'fb_cid' : response.commentID,
                    'fb_uid' : comment_response[i].fromid,
                    'comment' : encodeURIComponent(comment_response[i].text),
                    'fb_username' : encodeURIComponent(comment_response[i].username),
                    'fb_comment_url' : encodeURIComponent(document.location.href),
                    'url' : '',
                    'author_login' : '',
                    'author' : ''
                }
                
//              Check if the user is NOT anonymous
                if (comment_data.fb_uid != 0) {
                    var user_response = users_query.value;

                    for (var j=0; j<user_response.length; j++) {
                        if (user_response[j].uid == comment_data.fb_uid) {
                            comment_data.author = encodeURIComponent(user_response[j].name);
                            comment_data.url =  encodeURIComponent(user_response[j].profile_url);
                            comment_data.author_login = comment_data.fb_uid + '@facebook.com';
                            break;
                        }
                    }
                    var page_response = pages_query.value;

                    for (var j=0; j<page_response.length; j++) {
                        if (page_response[j].page_id == comment_data.fb_uid) {
                            comment_data.author = page_response[j].name;
                            comment_data.url =  page_response[j].page_url;
                            comment_data.author_login = page_response[j].page_id + '@facebook.com';
                            break;
                        }
                    }
                }

                comment_data['fb_type'] = 'fbgallery';
                if (typeof commentPostId  != "undefined") {
                    galleryPostId = commentPostId;
                    comment_data['fb_type'] = 'fbpost';
                }
                if (typeof galleryPostId != "undefined" ) {
                    comment_data['gallery_post_id'] = galleryPostId;
                    ajax_url = "/wp-content/plugins/lightpress/ajax/fbcomment.php";
                    $.ajax({ url: ajax_url, data: comment_data });
                }

                break;
            }
        }
    });

    return;
}

/*  CPA  */

function getAdServerUrl(cluster) {
    var siteCodes = {
        'www.appblog.it': { c : 'IT', t1:'click', t2:'click' },
        'www.tecnologiablog.com': { c : 'ES', t1:'click', t2:'click' },
        'www.crimeblog.it': { c : 'IT', t1:'click', t2:'click' },
        'www.polisblog.it': { c : 'IT', t1:'click', t2:'click' },
        'www.soldiblog.it': { c : 'IT', t1:'click', t2:'click' },
        'www.finanzablog.it': { c : 'IT', t1:'click', t2:'click' },
        'www.travelblog.it': { c : 'IT', t1:'click', t2:'click' },
        'www.autoblog.it': { c : 'IT', t1:'click', t2:'click' },
        'www.motoblog.it': { c : 'IT', t1:'click', t2:'click' },
        'www.bebeblog.it': { c : 'IT', t1:'click', t2:'click' },
        'www.benessereblog.it': { c : 'IT', t1:'click', t2:'click' },
        'www.pinkblog.it': { c : 'IT', t1:'click', t2:'click' },
        'www.fashionblog.it': { c : 'IT', t1:'click', t2:'click' },
        'www.queerblog.it': { c : 'IT', t1:'click', t2:'click' },
        'www.deluxeblog.it': { c : 'IT', t1:'click', t2:'click' },
        'www.ecoblog.it': { c : 'IT', t1:'click', t2:'click' },
        'www.downloadblog.it': { c : 'IT', t1:'click', t2:'click' },
        'www.blogvoip.it': { c : 'IT', t1:'click', t2:'click' },
        'www.ossblog.it': { c : 'IT', t1:'click', t2:'click' },
        'www.gamesblog.it': { c : 'IT', t1:'click', t2:'click' },
        'www.melablog.it': { c : 'IT', t1:'click', t2:'click' },
        'www.mobileblog.it': { c : 'IT', t1:'click', t2:'click' },
        'www.gadgetblog.it': { c : 'IT', t1:'click', t2:'click' },
        'www.clickblog.it': { c : 'IT', t1:'click', t2:'click' },
        'www.motorsportblog.it': { c : 'IT', t1:'click', t2:'click' },
        'www.outdoorblog.it': { c : 'IT', t1:'click', t2:'click' },
        'www.calcioblog.it': { c : 'IT', t1:'click', t2:'click' },
        'blog.yachtandsail.it': { c : 'IT', t1:'click', t2:'click' },
        'www.betsblog.it': { c : 'IT', t1:'click', t2:'click' },
        'www.tvblog.it': { c : 'IT', t1:'click', t2:'click' },
        'www.gossipblog.it': { c : 'IT', t1:'click', t2:'click' },
        'www.artsblog.it': { c : 'IT', t1:'click', t2:'click' },
        'www.blogapuntate.it': { c : 'IT', t1:'click', t2:'click' },
        'www.cineblog.it': { c : 'IT', t1:'click', t2:'click' },
        'www.soundsblog.it': { c : 'IT', t1:'click', t2:'click' },
        'www.softblog.it': { c : 'IT', t1:'click', t2:'click' },
        'www.06blog.it': { c : 'IT', t1:'click', t2:'click' },
        'www.booksblog.it': { c : 'IT', t1:'click', t2:'click' },
        'www.comicsblog.it': { c : 'IT', t1:'click', t2:'click' },
        'www.designerblog.it': { c : 'IT', t1:'click', t2:'click' },
        'www.gustoblog.it': { c : 'IT', t1:'click', t2:'click' },
        'www.happyblog.it': { c : 'IT', t1:'click', t2:'click' },
        'www.petsblog.it': { c : 'IT', t1:'click', t2:'click' },
        'www.toysblog.it': { c : 'IT', t1:'click', t2:'click' },
        'www.02blog.it': { c : 'IT', t1:'click', t2:'click' },
        'www.cotilleoblog.com': { c : 'ES', t1:'click', t2:'early' },
        'www.ecologiablog.com': { c : 'ES', t1:'click', t2:'early' },
        'www.automocionblog.com': { c : 'ES', t1:'click', t2:'early' },
        'www.videojuegoblog.com': { c : 'ES', t1:'click', t2:'early' },
        'www.cinemaniablog.com': { c : 'ES', t1:'click', t2:'early' },
        'www.seriestvblog.com': { c : 'ES', t1:'click', t2:'early' },
        'www.topmusicablog.com': { c : 'ES', t1:'click', t2:'early' },
        'www.fofocandoblog.com': { c : 'BR', t1:'click', t2:'early' },
        'www.automovelblog.com': { c : 'BR', t1:'click', t2:'early' },
        'www.eletronicoblog.com': { c : 'BR', t1:'click', t2:'early' },
        'www.criadesignblog.com': { c : 'BR', t1:'click', t2:'early' },
        'www.viajandoblog.com': { c : 'BR', t1:'click', t2:'early' },
        'www.blogbelavida.com': { c : 'BR', t1:'click', t2:'early' },
        'www.dasmariasblog.com': { c : 'BR', t1:'click', t2:'early' },
        'www.somnacaixablog.com': { c : 'BR', t1:'click', t2:'early' },
        'www.fliperamablog.com': { c : 'BR', t1:'click', t2:'early' },
        'www.pipocablog.com': { c : 'BR', t1:'click', t2:'early' },
        'www.eurocarblog.com': { c : 'GB', t1:'click', t2:'early' },
        'www.twowheelsblog.com': { c : 'GB', t1:'click', t2:'early' },
        'www.blogdolcevita.com': { c : 'GB', t1:'click', t2:'early' },
        'www.autosblog.fr': { c : 'FR', t1:'click', t2:'early' },
        'www.motosblog.fr': { c : 'FR', t1:'click', t2:'early' },
        'www.ladyblog.fr': { c : 'FR', t1:'click', t2:'early' },
        'www.strassblog.fr': { c : 'FR', t1:'click', t2:'early' },
        'www.sommelierblog.fr': { c : 'FR', t1:'click', t2:'early' }
      },
      c = siteCodes[window.location.hostname] ? siteCodes[window.location.hostname].c : null,
      t1 = siteCodes[window.location.hostname] ? siteCodes[window.location.hostname].t1 : null,
      t2 = siteCodes[window.location.hostname] ? siteCodes[window.location.hostname].t2 : null,
      src = '';
    if (typeof cluster == 'undefined') {
        cluster = 'blogo';
    }
    if (c || cluster == 'blogosfere') {
      var productId = 'blogo';
      var d = new Date();
      var curr_hour = d.getHours();
      var t = t2;
      if (cluster == 'blogosfere') {
          c = 'IT';
          t = 'early';
          if (curr_hour >= 8 && curr_hour <= 19) {
              t = 'click';
          }
          productId = 'blogo';
      } else if (curr_hour >= 8 && curr_hour <= 19) {
          t = t1;
          productId = window.location.hostname.replace(/\.it|\.fr|\.com|www\./g, '');
      }
    //        productId = 'blogo';
    //        t='click';
      src = 'http://extranet.populis.com/cpa/?product='+productId+'&country='+c+'&type='+t;
    }
    return src;
  }


var PStatManager = function(_window) {
    var pub = this;
    var _p = {};
    
    _p.OAS_listpos = "";
    
    _p.window = _window;
    if (!_p.window.console) {
        _p.window.console = { log: function() {} };
    } else if (!_p.window.console.log) {
        _p.window.console.log = function() {};
    }
    
    _p.createElement = function(d, type, id, src){
        var e = d.getElementById(id);
        if (e) { return e; }
        e = d.createElement(type); 
        e.id = id;
        if (type == 'script' && typeof src != 'undefined') {
            e.src = src;
        }
        d.getElementsByTagName('body')[0].appendChild(e);
        return e;
    };

    pub.callback = function (data, prefix) {
        if (typeof prefix == 'undefined')
            prefix = 'pstat';
        if (typeof data != 'undefined' && data.Ad) {
            for(var i in data.Ad) {
                var e = data.Ad[i];
                // _p.window.console.log(e.Text);
                var theFrame = new pub.InnerIFrame(null);
                theFrame.style.visibility = "hidden";
                theFrame.style.display = "none";
                theFrame.doc.open();
                theFrame.doc.write(e.Text);
                theFrame.doc.close();
                var img = _p.createElement(theFrame.doc, 'img', prefix+'-img'+i);
                img.src = e.ImpUrl;
            }
        }
    }
    
    pub.cbtrigger = function(data, prefix) {
        if (typeof prefix == 'undefined')
            prefix = 'pstattrigger';
        
        if (typeof call_populis_adserver != 'undefined' && 
                call_populis_adserver.OAS_query) {

            if (typeof data == 'undefined' || !data)
                data = {};

            if (!data.OAS_listpos)
                _p.OAS_listpos = call_populis_adserver.OAS_listpos;
            else
                _p.OAS_listpos = data.OAS_listpos;

            if (!data.OAS_service)
                data.OAS_service = 'RealMedia/ads/adstream_dx.ads/jsonp/';

            if (!data.OAS_url)
                data.OAS_url = call_populis_adserver.OAS_url;

            if (!data.OAS_sitepage_base)
                data.OAS_sitepage_base = call_populis_adserver.OAS_sitepage_base;

            if (!data.OAS_sitepage_type)
                data.OAS_sitepage_type = call_populis_adserver.OAS_sitepage_type;

            if (!data.OAS_query)
                data.OAS_query = call_populis_adserver.OAS_query;

            if (!data.OAS_url)
                data.OAS_url = call_populis_adserver.OAS_url;
            
            if (!data.OAS_callback)
                data.OAS_callback = '&_RM_HTML_CALLBACK_=pstatManager.cbparser'

            var jsurl = data.OAS_url + data.OAS_service + data.OAS_sitepage_base + '/' + data.OAS_sitepage_type + '@' + _p.OAS_listpos + data.OAS_query + data.OAS_callback;
            _p.jsurl_fallback = data.OAS_url + '4/' + data.OAS_sitepage_base + '/' + data.OAS_sitepage_type + '@' + '{OAS_listpos}' + data.OAS_query;
            var js = _p.createElement(document, 'script', prefix+'script', jsurl);
        }
    }

    pub.InnerIFrame = function(parentElement)
    {
        // Create the iframe which will be returned
        var iframe = null;
        try {if (iframe == null) iframe = document.createElement("<iframe scrolling=\"no\">");} catch (e) {}
        try {if (iframe == null) iframe = document.createElement("iframe");} catch (e) {}
        // iframe.style.overflow = "hidden";

        // If no parent element is specified then use body as the parent element
        if(parentElement == null)
            parentElement = document.body;

        // This is necessary in order to initialize the document inside the iframe
        parentElement.appendChild(iframe);

        // Initiate the iframe's document to null
        iframe.doc = null;

        // Depending on browser platform get the iframe's document, this is only
        // available if the iframe has already been appended to an element which
        // has been added to the document
        if(iframe.contentDocument)
            // Firefox, Opera
            iframe.doc = iframe.contentDocument;
        else if(iframe.contentWindow)
            // Internet Explorer
            iframe.doc = iframe.contentWindow.document;
        else if(iframe.document)
            // Others?
            iframe.doc = iframe.document;

        // If we did not succeed in finding the document then throw an exception
        if(iframe.doc == null)
            throw "Document not found, append the parent element to the DOM before creating the IFrame";

        // Create the script inside the iframe's document which will call the
        iframe.doc.open();
        iframe.doc.close();

        // Return the iframe, now with an extra property iframe.doc containing the
        // iframe's document
        return iframe;
    }    

    _p.getImages = function (html) {
        var re = /(<img[^>]+>)/ig,
            match, params = [];

        while ((match = re.exec(html)) !== null) {
            if (match && match.length > 0)
                params.push(match[0]);
        }
        return params;
      }
    
    pub.cbparser = function (data, prefix) {
        if (typeof prefix == 'undefined')
            prefix = 'pstatparse';
        
        var positions = _p.OAS_listpos.split(",");
        if (typeof data != 'undefined' && data.Ad) {
            for(var i in data.Ad) {
                var theFrame = new pub.InnerIFrame(null);
                theFrame.style.visibility = "hidden";
                theFrame.style.display = "none";
                var e = data.Ad[i];
                
                for (var pi = 0; pi < positions.length; pi++) {
                    if (positions[pi] == e.Pos) {
                        positions.splice(pi, 1);
                        break;
                    }
                }
                // _p.window.console.log(e.Text);
                var images = _p.getImages(e.Text);
                if (typeof images != 'undefined' && images.length > 0) {
                    var images_html = images.join(' ');
                    theFrame.doc.open();
                    theFrame.doc.write(images_html);
                    theFrame.doc.close();
                }
                var img = _p.createElement(theFrame.doc, 'img', prefix+'-img'+i);
                img.src = e.ImpUrl;
            }
            if (positions.length > 0) {
                var mjx_positions = positions.join(',');
                var img = _p.createElement(theFrame.doc, 'img', prefix+'-img_listpostres');
                img.src = _p.jsurl_fallback.replace(/{OAS_listpos}/, mjx_positions);
            }
        }
    }
}


/* End Comments helpers */

  
  
/*
 * @author: Vincenzo D'Amore v.damore@gmail.com
 * @date: 2012/04/23
 * @revision $Id: head_asset.js 118918 2015-01-14 12:05:10Z calignano $
 *
 */

var FBActivities = function(_w, $, FB, _action, _obj, _app_id, _app_scope)
{
    var pub = this;
    var _p = {};
    // Consts

    _p.window = _w;
    _p.FB = FB;

    var debugging = false;

    if (typeof console == "undefined")
        _p.console = { log: function() {} };
    else
        _p.console = console;

    if (!debugging) // So we override only local console.log
        _p.console = { log: function() {} };

    _p.COOKIE_SHARING_STATUS = 'fbASS_';
    pub.ENABLED = 'enabled';
    pub.DISABLED = 'disabled';

    _p.app_id = _app_id;
    _p.action = _action;
    _p.obj = _obj;
    _p.fbapp_status = null;
    _p.fb_pushing = false;
    _p.fb_logged = false;
    _p.fb_connected = false;
    _p.current_fb_me_response= null;
    _p.sharingMessageReminder = 'Abilita condivisione manuale';
    _p.messageLogin = 'Entra';
    _p.messageLogout = 'Logout';
    _p.messageRegister = 'Registrati';
    _p.messageShare = 'Condividi';
    _p.messageEmptyList = "Nessun articolo nel tuo Diario.";
    _p.messageAdd = "Aggiungi questo articolo al tuo Diario.";
    _p.messageRemove = "Rimuovi questo articolo dal tuo Diario.";
    _p.messageRemoveError = "Errore: Impossibile rimuovere l'oggetto dal Diario.";
    _p.messageTabArticles = "Articoli Letti";
    _p.messageSettings = "Impostazioni";
    _p.messageProfile = "Profilo";
    _p.messageSharingOn = "Gli articoli letti verranno condivisi automaticamente su Facebook";
    _p.messageSharingOff = "Dovrai condividere gli articoli manualmente";
    _p.messageBtnOn = "ON";
    _p.messageBtnOff = "OFF";
    _p.messageFewSecondsAgo = "qualche secondo fa";
    _p.messageMinuteAgo = "1 minuto fa";
    _p.messageMinutesAgo = " minuti fa";
    _p.messageHourAgo = "1 ora fa";
    _p.messageHoursAgo = " ore fa";
    _p.messageYesterday = "Ieri";
    _p.messageDaysAgo = " giorni fa";
    _p.messageWeeksAgo = " settimane fa";
    _p.messageBtnComment = "Commenta";
    _p.messageBtnModerate = "Modera";
    _p.messageVoteAuthRequired = "Per votare devi prima autenticarti, tra pochi secondi sarai rediretto alla pagina di login.";
    _p.messageVoteVoting = "Votazione in corso. Attendere prego...";
    _p.messageVoteVoted = "Attenzione: il tuo voto è stato già registrato.";
    _p.messageVoteRegistered = "Grazie, il tuo voto è stato registrato correttamente.";
    _p.messageVoteError = "Attenzione: si è verificato un errore durante la votazione.";
    _p.messageVoteLabelBased = "basato ";
    _p.messageVoteLabelOn = "su ";
    _p.messageVoteLabelVotes = "voti.";
    _p.messageCommunityRegister = "registrati";
    _p.messageCommunityProfile = "profilo/condivisioni";
    _p.messageCommunitySetting = "impostazioni";

    _p.articlesPerPages = 4;
    _p.articlesCurrentPage = 0;
    _p.articles = null;
    _p.maxTitleLength = 8000;
    _p.frictionlessSharingEnabled = false;
    _p.frictionlessSharingTimeout = 10000;
    _p.moderator = false;
    _p.loggedIn  = false;

    if (typeof _w.communityDefaultSettings != "undefined") {
        if (_w.communityDefaultSettings.config)
            for (var propertyName in _w.communityDefaultSettings.config) {
                _p[propertyName] = _w.communityDefaultSettings.config[propertyName];
            }
        if (_w.communityDefaultSettings.eventsHandled)
            for (var callbackFunction in _w.communityDefaultSettings.eventsHandled) {
                _p.callbacks[callbackFunction] = _w.communityDefaultSettings.eventsHandled[callbackFunction];
            }
    }

    if (typeof _app_scope == 'undefined')
        _p.app_scope = 'publish_actions,user_interests,email';
    else
        _p.app_scope = _app_scope;
    _p.app_scope_light = 'email';

    if (!_p.site_address)
        _p.site_address = '';

    var lib = {
        serialize : function(_a) {
            var s = '', enc = encodeURIComponent;
            for (var k in _a) {
                if (s) s += '&';
                s += enc(k) + '=' + ( (typeof _a[k] == 'object') ? '?'+enc(lib.serialize(_a[k])) : enc(_a[k]));
            }
            return s;
        },
        deserialize : function(_s) {
            var a = [], dec = decodeURIComponent;
            var list = _s.split('&');
            for (var c in list) {
                var kv = list[c].split('=');
                var v = kv[1].split('?');
                kv[1] = (v.length > 1) ? lib.deserialize(dec(v[1])) : dec(kv[1]);
                a[dec(kv[0])] = kv[1];
            }
            return a;
        },
        writePersistentCookie : function(_name, _value) {
            var expireDate = new Date ();
            var offset = 15;
            expireDate.setDate(expireDate.getDate() + offset);
            document.cookie = escape(_name) + "=" + escape(_value) + "; expires=" + expireDate.toGMTString() + "; path=/";
        },
        getCookieValue : function(_name) {
            var exp = new RegExp (escape(_name) + "=([^;]+)");
            if (exp.test (document.cookie + ";")) {
              exp.exec (document.cookie + ";");
              return unescape(RegExp.$1);
            }
            else return false;
        }, 
        extractParamFromUri: function(uri, paramName) {
          if (!uri) { return; }
          var uri = uri.split('#')[0];  // Remove anchor.
          var parts = uri.split('?');  // Check for query params.
          if (parts.length == 1) { return;
          }
          var query = decodeURI(parts[1]);
          paramName += '=';
          var params = query.split('&');
          for (var i = 0, param; param = params[i]; ++i) {
            if (param.indexOf(paramName) === 0) {
              return unescape(param.split('=')[1]);
            }
          }
        }
    };

    _p.getSiteAddress = function() {
        return _p.site_address.replace(RegExp("/+$", "g"), '');
    };

    pub.isConnected = function() {
        return _p.fb_connected;
    };
    _p.setConnected = function( _v ) {
        _p.console.log('setConnected ' + _v);
        _p.fb_connected = _v;
    };

    pub.isLogged = function() {
        return _p.fb_logged;
    };
    _p.setLogged = function( _v ) {
        _p.console.log('setLogged ' + _v);
        _p.fb_logged = _v;
    };
    _p.isPushing = function() {
        return _p.fb_pushing;
    };
    _p.setPushing = function( _v ) {
        _p.fb_pushing = _v;
    };

    pub.divFBActionExist = function() {
        return ($('#fbaction_status').length >0);
    };

    pub.isDivFBActionStatusVisible = function() {
        return $('#fbaction_status').length >0 && _p.isScrolledIntoView($('#fbaction_status'));
    };

    pub.fbEventSubscribeEdgeCreate = function (response) {
        $.ajax({url:_p.getSiteAddress()+'/ajax/social/save/facebook/like', dataType: 'json'});
    }

    pub.fbEventSubscribeEdgeRemove = function (response) {
        $.ajax({url:_p.getSiteAddress()+'/ajax/social/save/facebook/unlike', dataType: 'json'});
    }
    
    pub.fbLogout = function () {
        $.ajax({
            url: _p.getSiteAddress()+'/ajax/logout',
            xhrFields: {withCredentials: true},
            dataType: 'json',
            success: function(data) {
                if (data.ret == 'ok' && data.logged == false) {
                    _p.userdata = null;
                    _p.moderator = false;
                }
            },
            complete: function() {
                _p.renderLoggedinBox();
                if (_p.window.location)
                    _p.window.location.reload(true);
            }
        })
    }
    
    _p.clickLogout = function() {
        if (_p.FB && _p.current_fb_login_status && _p.current_fb_login_status.status == 'connected' && _p.frictionlessSharingEnabled && _p.userdata.facebookConnected == 'yes') {
            _p.FB.logout(function(response) {
                _p.current_fb_login_status = null;
                pub.fbLogout();
            });
        } else {
            pub.fbLogout();
        }
    }
    
    _p.handleAuthAndConnected = function (response) {
        if (response.status == 'connected' && typeof _p.userdata !== 'undefined' && typeof _p.userdata.facebookId !== 'undefined')
        {
            if (response.authResponse.userID == _p.userdata.facebookId) {
                _p.COOKIE_SHARING_STATUS = _p.COOKIE_SHARING_STATUS + response.authResponse.userID;
                _p.FB.api('/me/permissions', function(response) {
                    if (!response.error)  {

                        if (response.data && (response.data.length > 0) && response.data[0].publish_actions) {
                            _p.setLogged(true);
                            if (_p.frictionlessSharingEnabled) {
                                _p.fbGetActivitiesHistory(_p.gotActivitiesHistory);
                                // da eseguire con un timer a 10 sec...
                                if (pub.getActivitiesSharingStatus() == pub.ENABLED)
                                    _p.window.setTimeout(pub.postAction, _p.frictionlessSharingTimeout);
                                }
                        } else {
                            _p.frictionlessSharingEnabled = false
                            if (response.error)
                                _p.console.log('/me/permissions publish_actions missing.');
                        }
                    } else {
                        _p.frictionlessSharingEnabled = false;
                        if (response.error)
                            _p.console.log('/me error: ' + response.error );
                    }
                    _p.renderCommentBox();
                });
            } else {
                _p.console.log('user logged on facebook with a different account.');
                _p.frictionlessSharingEnabled = false;
                _p.renderCommentBox();
            }
        }
        else {
            _p.renderCommentBox();
        }
    }

    _p.fbPostedAction = function(_response) {
        _p.FB.api(
            '/'+_response.id,
            'get',
            function(response) {
               if (!response || response.error) {
                   _p.console.log(response.error.message);
               } else {
                   _p.articles.splice(0,0,response);
                   _p.renderTabArticles();
               }
        });
        _p.renderRemoveButton(_response);
    };

    _p.clickLatePostAction = function(_e) {
        _e.stopPropagation();
        _p.setPushing(true);
        $('#fbaction_status_img').attr('src', 'http://static-q.blogo.it/s/sf/img/ajax-loader.gif?v1');
        _p.fbPostAction(_p.fbPostedAction);
        return false;
    };
    
    pub.renderAddButton = function() {
        $('#fbaction_status').html('<img id="fbaction_status_img" src="http://static.blogo.it/i/fb.gif" class="size-thumb_small" />&nbsp;<a href="#" id="postAction" >'+_p.messageAdd+"</a>");
        $('#postAction').bind('click', _p.clickLatePostAction );
    }

    _p.renderAddMessageAndArticlesPaged = function() {
        pub.renderAddButton();
        _p.renderTabArticles();
    }

    pub.postAction = function() {
        if (_p.isPushing()) {
            _p.console.log('pushing in progress...');
            return;
        }
        if (_p.isCurrentArticleAlreadyPushed()) {
            _p.console.log('current article is already pushed...');
            return;
        }
        if (!pub.isLogged()) {
            _p.console.log('user not logged in facebook...');
            return;
        }
        _p.setPushing(true);
        _p.fbPostAction(_p.fbPostedAction);
    };

    _p.isScrolledIntoView = function(elem)
    {
        var docViewTop = $(_p.window).scrollTop();
        var docViewBottom = docViewTop + $(_p.window).height();

        var elemTop = $(elem).offset().top;
        var elemBottom = elemTop + $(elem).height();

        var retval = ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
        return retval;
    };
    
    pub.fbOAuth = function() {
        var path = 'https://www.facebook.com/dialog/oauth?';
        var queryParams = ['client_id=' + _p.app_id,
        'redirect_uri=' + _p.window.location,
        'response_type=token&scope='+_p.app_scope];
        var query = queryParams.join('&');
        var url = path + query;
        top.window.location = url;
    }

    pub.fbLogin = function(){
        if (_p.FB) {
            _p.FB.login(function(response) {

                _p.current_fb_login_status = response;

                if (response.status)
                    _p.fbapp_status = response.status;
                if (response.status == 'connected') {
                        _p.FB.api('/me', function(response) {
                            if (!response.error)  {
                                _p.current_fb_me_response = response;
//                                _p.setLogged(true);
//                                _p.fbGetActivitiesHistory(_p.initInterface);
                                _p.renderCommentBox();
                            }
                        });
                } else {
                    _p.renderCommentBox();
                }
             }, {
                 // scope: 'publish_actions,publish_stream,email'
                 scope: _p.app_scope_light
             });
        } else {
            alert('Facebook non attivo.');
        }
    };
    
    _p.getPermalink = function () {
        var permalink = (_p.permalink) ? _p.permalink : _p.window.location.href;
        var _url = permalink.replace(/#.*/, "");
        return _url;
    }

    _p.getCurrentArticle = function () {
        if (!_p.articles) 
            return false
        var _data = _p.articles;
        var _url = _p.getPermalink();
        var article_url = null;
        for(var n in _data ) {
            article_url = _data[n].data.article.url;
            if (article_url == _url) {
                // Disable 
                return _data[n].data.article;
            }
        }
        return false;
    };
    
    _p.isCurrentArticleAlreadyPushed = function () {
        if (!_p.articles)
            return false;
        var _data = _p.articles;
        var _url = _p.getPermalink();
        var article_url = null;
        for(var n in _data ) {
            article_url = _data[n].data.article.url;
            if (article_url == _url) {
                // Disable 
                return true;
            }
        }
        return false;
    };

    _p.renderRemoveButton = function (_response) {
        if ($('#fbaction_status').length >0) {
            $('#fbaction_status').html('<img id="fbaction_status_img" src="http://static.blogo.it/i/fb.gif" class="size-thumb_small" />&nbsp;<a href="#" id="removeAction" >'+_p.messageRemove+"</a>");
            var article_id = 0;
            if (typeof _response == 'undefined') {
                var article = _p.getCurrentArticle();
                article_id = article.id;
            } else if (_response.id) {
                article_id = _response.id;
            }
            $('#removeAction').bind('click', 
                { id : article_id, callback: _p.renderAddMessageAndArticlesPaged }, 
                _p.clickDeleteAction );
        }
    };

    _p.removeArticlesPaged = function (_response) {
        _p.renderTabArticles();
    };

    _p.clickShowArticlesPaged = function (_e) {
        if (typeof _e != "undefined") {
            _e.preventDefault();
            _p.articlesCurrentPage += _e.data;
        }
        _p.renderTabArticles();
    };

    _p.renderTabArticles = function () {

        var _data = _p.articles;
        if (_data == null)
            return;
        var totalPages = Math.ceil(_data.length/_p.articlesPerPages);
        var itemsCounter = 0;
        if (_p.articlesCurrentPage < 0)
            _p.articlesCurrentPage = 0;
        if (_p.articlesCurrentPage >= totalPages)
            _p.articlesCurrentPage = totalPages-1;

        $('#fbAct_Pages').text((_p.articlesCurrentPage+1)+"/"+totalPages);

        if (_data.length == 0) {
            var tpl ='';
            tpl += '<li id="articletitle">'+_p.messageEmptyList +'</li>';
            $('.readarticles').html(tpl);
            itemsCounter++;
        } 
        else 
        {
            var start = _p.articlesCurrentPage*_p.articlesPerPages;
            var end = Math.min(start+_p.articlesPerPages, _data.length) ;
            $('.readarticles').html('');
            $('.readarticles').append('<li id="articletitle">'+_p.messageTabArticles+'</li>')
            for (var n = start; n < end; n++) {
                _p.console.log(_data[n].data.article.url);
                var title = (_data[n].data.article.title.length >  _p.maxTitleLength ) ? _data[n].data.article.title.slice(0, _p.maxTitleLength - 1)+"..." : _data[n].data.article.title;
                var tpl ='';
                tpl += '<li class="small"><a id="fbAct_ArticleAnchor_' + _data[n].id + '" href="'+_data[n].data.article.url+'"><span>'+title+'</span></a><span id="fbAct_ArticleDelete_' + _data[n].id + '" class="deleteRead"></span></li>';
                $('.readarticles').append(tpl);
                $('#fbAct_ArticleDelete_'+_data[n].id).bind('click',
                     { id : _data[n].id, callback: _p.removeArticlesPaged },
                     _p.clickDeleteAction );
                itemsCounter++;
            }
        }
        while (itemsCounter < _p.articlesPerPages) {
            var tpl ='';
            tpl += '<li class="small"><a href="#"></a></span></li>';
            $('.readarticles').append(tpl);
            itemsCounter++;
        }
    };

    _p.gotActivitiesHistory = function() {
        if (pub.divFBActionExist()) {
            if (_p.isCurrentArticleAlreadyPushed()) {
                _p.renderTabArticles();
                _p.renderRemoveButton();
            }
            else
                _p.renderAddMessageAndArticlesPaged();
        } else {
            _p.renderTabArticles();
        }
    };

    _p.fbGetActivitiesHistory = function (_targetFunct, _offset, _limit) {
        if (typeof _offset == 'undefined') 
            _offset = '0';
        if (typeof _limit == 'undefined') 
            _limit = '100';
        _p.FB.api (
            '/me/'+_p.action,
            { method: 'get', limit: _limit, offset: _offset},
            function(response) {
               if (!response || response.error) {
                   _p.console.log(response.error.message); 
               } else {
                    if ( response.data ) {
                        _p.articles = response.data;
                         _targetFunct();
                        _p.console.log('Read '+_p.articles.length+' articles'); 
                    } 
                    else 
                        _p.console.log('no data found');
               }
        })
    };

    _p.fbPostAction = function(_callback)
    {
        var permalink = _p.getPermalink();
        _p.FB.api(
            '/me/'+_p.action+'?'+_p.obj+'=' + encodeURIComponent( permalink ),
            'post',
            function(response) {
               if (!response || response.error) {
                   if (response.error) {
                       _p.console.log(response.error.message); 
                       if (response.error.code == 200) {
//                           pub.fbLogin();
//                           alert(response.error.message)
                       }
                   }
               } else {
                   _p.current_url_id = response.id;
                   if (typeof _callback != 'undefined')
                       _callback(response);
                   _p.console.log(response.id); 
               }
        });
    }

    _p.deleteArticle = function(_id) {
       for (c in _p.articles) {
           if (_p.articles[c].id == _id) {
               _p.articles.splice(c,1);
               _p.renderTabArticles();
               break;
           }
       }
    };

    _p.clickDeleteAction = function(_e) {
        _e.stopPropagation();
        if (typeof _e != 'undefined' && _e.data.id && _e.data.callback) {
            var achor_id = '#fbAct_ArticleAnchor_'+_e.data.id;
            var span_id = '#fbAct_ArticleDelete_'+_e.data.id;
            $(achor_id).css({ opacity: 0.5 });
            $(span_id).removeClass('deleteRead').addClass('deleteLoad')
            $('#fbaction_status_img').attr('src', 'http://static-q.blogo.it/s/sf/img/ajax-loader.gif?v1');
            _p.fbDeleteAction(_e.data.id, _e.data.callback);
        }
        return false;
    };

    _p.fbDeleteAction = function(_id, _callback){
        _p.FB.api(
            '/'+ _id,
        //    '/'+ _p.current_fb_me_response.id + '_' + _id,
            'delete',
            function(response) {
               if (!response || response.error) {
              //     alert(_p.messageRemoveError + " " + response.error.message);
              // Ugly hack... delete in any case.
                   _p.deleteArticle(_id);
                   if (_callback)
                       _callback(response);
                   _p.console.log(response.error.message); 
               } else {
                   _p.deleteArticle(_id);
                   if (_callback)
                       _callback(response);
                   _p.console.log('delete done successully'); 
                   _p.renderAddMessageAndArticlesPaged();
               }
        });
    };

    _p.getCommunityUrl = function() {
        if (_p.window.location.hostname.match(/\.blogo\.it$/))
            return 'community.blogo.it';
        if (_p.window.location.hostname.substring(0, 3) == 'www')
            return 'community'+_p.window.location.hostname.substring(3);
        if (_p.window.location.hostname.substring(0, 11) == 'staging.www')
            return 'staging.community'+_p.window.location.hostname.substring(11);
        if (_p.window.location.hostname.match(/\.blogosfere\.it$/))
            return 'community.blogosfere.it';
        if (_p.window.location.hostname.match(/^community\./))
            return _p.window.location.hostname;
        return '';
    };

    _p.renderCommentBox = function() {
        if (_p.userdata) {
            $('.avatar_image').attr('title', _p.userdata.displayName )
            // if (_p.frictionlessSharingEnabled && _p.userdata.facebookConnected == 'yes')
            if (_p.userdata && _p.userdata.avatar)
                $('.avatar_image img').attr('src', _p.userdata.avatar)
                
            $('.username').html('<strong>'+ _p.userdata.displayName +'</strong>')
            $('.comment-action').html(
               '<input type="button" class="btn send left cmd_commenta" value="' + _p.messageBtnComment + '">'
            );
            
            if (typeof cmd_commenta != 'undefined')
                $('.cmd_commenta').click(cmd_commenta);
        } else {
            if (_p.fbapp_status == 'connected' && _p.current_fb_me_response) {
                $('.avatar_image img').attr('src', 'https://graph.facebook.com/' + _p.current_fb_me_response.username + '/picture');
                $('.username').html('<strong>'+ _p.current_fb_me_response.name +'</strong>')
                // '<img class="profile" src="https://graph.facebook.com/' + me.username + '/picture" alt="" />'
                $('.comment-action').html(
                        '<input type="button" class="btn send left cmd_commenta" value="' + _p.messageBtnComment + '">'+
                        '<input type="hidden" id="fbAccessToken" name="fbAccessToken" value="'+_p.current_fb_login_status.authResponse.accessToken+'">'
                     );
                if (typeof cmd_commenta != 'undefined')
                    $('.cmd_commenta').click(cmd_commenta);
            } else 
            // if (_p.fbapp_status == 'not_authorized') 
            {
                $('.comment-action').html(
                        '<input type="button" class="btn send left cmd_commenta" value="' + _p.messageBtnComment + '">'+
                        ' con &nbsp;'+
                        '<span class="social-big"><a href="#show_commentform" class="facebook cmd_commentafb" title="facebook"></a></span>'
                        );

                if (typeof cmd_commenta != 'undefined') {
                    $('.cmd_commenta').click(cmd_commenta);
                }
                $('.cmd_commentafb').click(pub.fbLogin);
            }
        }
    };

    _p.ratePost = function(score, callback){

        _p.submit_in_process = true;

        if (_p.loggedIn || (_p.getSiteAddress().match(/\.blogosfere\.it(\.[a-z]+\.web53\.develop)?$/))) {
            // Autenticato
            var data_rate = {
                    'url' : _p.getSiteAddress()+'/ajax/rate/submit',
                    'type' : 'post',
                    'data' : {
                        'nonce_rate' : null,
                        'score': score,
                        '_format' : 'json',
                        'post_id' : _p.post_id
                        },
                    'dataType' : 'json'
                    };
            $.ajax(data_rate).done(function(e) {
                if(e.message == 'unlogged') {
                    $('#stars-description').html(_p.messageVoteAuthRequired);
                    $('#stars-message').html('');
                    var timeoutID = window.setTimeout(function() {
                        _p.window.location = _p.getSiteAddress()+"/user/login?returnUrl=" + encodeURIComponent(_p.getPermalink()+"#goto_stars_rating");
                    }, 4000);
                }
                try {
                    callback(e);
                } catch (e) {}
                _p.submit_in_process = false;
            });
        } else {
            $('#stars-description').html(_p.messageVoteAuthRequired);
            $('#stars-message').html('');
            var timeoutID = window.setTimeout(function() {
                _p.window.location = _p.getSiteAddress()+"/user/login?returnUrl=" + encodeURIComponent(_p.getPermalink()+"#goto_stars_rating");
            }, 4000);
        }

       return false;
    };

    _p.renderModeraButtons = function() {
        _p.console.log(_p.moderator);
        if (_p.userdata && _p.moderator) {
            $('.item-comments li').each(function(index, e) {
                if (_p.post_id) {
                    comment_id = e.id.replace(/comment_/, '');
                    tpl = '<br><a class="cmd_modera" id="modera_'+comment_id+'" comment_id="'+comment_id+'" comment_url="/comment/moderate/'+_p.post_id+'/'+comment_id+'" >'+ _p.messageBtnModerate +'</a>'
                    $(e).append($(tpl));
                }
                if (typeof cmd_modera != 'undefined')
                    $('.cmd_modera').click( cmd_modera );
            });
        }
    }

    _p.renderRateBox = function() {
        _p.ratingHasVoted = false;
        if ($.fn.raty) {
            $('#stars-rating').raty({
                path: 'http://static-q.blogo.it/s/sf/img/raty',
                score: _p.ratingValue,
                click: function(score, evt) {
                    // alert('ID: ' + $(this).attr('id') + "\nscore: " + score + "\nevent: " + evt);
                    if (_p.ratingHasVoted)

                        $('#stars-message').html(_p.messageVoteVoted);
                    else {
                        $('#stars-message').html(_p.messageVoteVoting);
                        var callback = function(data) {
                            data = data || {};
                            if (data.ret && data.ret == 'ok') {
                                _p.ratingHasVoted = true;
                                var newRatingCount = (_p.ratingCount + 1);
                                var newRatingValue = ((_p.ratingValue * _p.ratingCount) + score) / newRatingCount;
                                var template = "<span >"+parseFloat(newRatingValue).toFixed(2)+"</span>" + _p.messageVoteLabelOn +_p.bestRating+" " +  _p.messageVoteLabelBased + _p.messageVoteLabelOn + "<strong>"+ newRatingCount + "</strong>" + _p.messageVoteLabelVotes + ".</span>";
                                $('#stars-description').html(template);
                                $('#stars-message').html(_p.messageVoteRegistered);
                            } else {
                                if (data.message && data.message == 'duplicate') {
                                    _p.ratingHasVoted = true;
                                    $('#stars-message').html(_p.messageVoteVoted);
                                } else
                                    $('#stars-message').html(_p.messageVoteError);
                            }
                        };
                        if (_p.window.fbActivities) {
                            _p.ratePost(score, callback);
                        }
                    }
                }
            });
        } 
    };
    
    _p.renderMainMenuResponsive = function() {
        try {
            if ($('#main-menu-resp').length == 0 && $.fn.mmenu) {

                var main_menu_resp = $("#main-menu").clone().prop('id', 'main-menu-resp'); // .appendTo('body');
                
                //add blogo menu
                var blogo_menu = $('#nav');
                if(blogo_menu.length > 0)
                main_menu_resp.children().append("<li><span>Blogo</span>"+blogo_menu.clone().html()+"</li>");

                var channel = $(".logo-box > .slogan");
                var channelHref = $(".logo-box > .logo");
                var channelText = channel.text();

                if(channel.length > 0 && channelHref.length > 0 && channelText!='extra' && channelText!=''){
                    main_menu_resp.children().prepend("<li class='channel-item-menu'><a href='"+channelHref.attr('href')+"'>"+channelText+"<i class='icon-menu-home'></i></a></li>");
                }

                $("body").prepend(main_menu_resp);
                

                var blogo_pageSelector = null;
                if ($('#blogo_mmenu_container').length > 0)
                    blogo_pageSelector = '#blogo_mmenu_container';


                $('nav#main-menu-resp').mmenu({},{
                     offCanvas: { pageSelector: blogo_pageSelector }
                });
            }
        } catch (e) {
            _p.console.log(e);
        }
    }
    
    _p.renderLoggedinBox = function() {
        var tpl = '';
        if (_p.userdata) {
            tpl += '    <li class="avatar"><a class="profile-btn">';
            if (_p.userdata && _p.userdata.avatar)
                tpl += '        <i style="background-image:url('+ _p.userdata.avatar +')"></i>';
            else
                tpl += '        <i style="background-image:url(http://static.blogo.it/s/sf/img/user_placehold_49_49.png)"></i>';
            tpl += '        <span>' + _p.userdata.displayName+'</span>';
            tpl += '    </a></li>';
            
            if (_p.frictionlessSharingEnabled && _p.userdata.facebookConnected == 'yes' && _p.fbapp_status == 'connected') {
                tpl += '        <li><a href="http://'+_p.getCommunityUrl()+'/'+_p.messageCommunityProfile+'/' + _p.userdata.username + '"><span>'+_p.messageProfile+'</span></a></li>';
            }
            tpl += '        <li><a href="http://'+_p.getCommunityUrl()+'/'+_p.messageCommunitySetting+'"><span>'+_p.messageSettings+'</span></a></li>';
            console.log(_p.fbapp_status);
            if (_p.frictionlessSharingEnabled && _p.userdata.facebookConnected == 'yes' && _p.fbapp_status == 'connected') {
                tpl += '        <li class="shareswitcher">';
                tpl += '            <span class="switcherlabel">'+_p.messageShare+'</span>';
                tpl += '            <span class="switcher">';
                tpl += '                <span class="singleswitch on"><a href="#">' + _p.messageBtnOn + '</a></span>';
                tpl += '                <span class="singleswitch off"><a href="#">' + _p.messageBtnOff + '</a></span>';
                tpl += '            </span>';
                tpl += '            <span class="clearfix"></span>';
                tpl += '            <p class="form-msg-info"></p>';
                tpl += '        </li>';
                tpl += '        <li class="sharedarticles">';
                tpl += '            <ul class="readarticles">';
                tpl += '            </ul>';
                tpl += '    <ul class="dir article">';
                tpl += '      <li id="fbAct_PageTab" class="pag">';
                tpl += '        <a id="fbAct_PagesPrev" class="prev" href="#" title="">&laquo; </a>';
                tpl += '        <span id="fbAct_Pages"></span>';
                tpl += '        <a id="fbAct_PagesNext" class="next" href="#" title=""> &raquo;</a>';
                tpl += '        <span style="clear: both; display: block;"></span>';
                tpl += '      </li>';
                tpl += '    </ul>';
                tpl += '        </li>';
            } else {
                $('#fbaction_status').hide();
            }
            tpl += '        <li><a id="fbAct_Logout" href="#">' + _p.messageLogout + '</a></li>';
            
            
            _p.console.log('_p.renderLoggedinBox for '+_p.userdata.username);
        } else {
            tpl += '<li class="login-lnk"><a href="'+_p.getSiteAddress()+'/user/login?returnUrl='+encodeURIComponent(_p.window.location.href)+'"><span>'+_p.messageLogin+'</span></a></li><li class="login-lnk"><a href="http://'+_p.getCommunityUrl()+'/'+_p.messageCommunityRegister+'?returnUrl='+encodeURIComponent(_p.window.location.href)+'"><span>'+_p.messageRegister+'</span></a></li>';
        }

        $('#connectButton').html(tpl);
        

        if (_p.userdata) {
            
            _p.renderActivitiesSharingStatus(pub.getActivitiesSharingStatus());
            $('.singleswitch.off').click(_p.clickActivitiesSharingOff);
            $('.singleswitch.on').click(_p.clickActivitiesSharingOn);
        
            $('#fbAct_PagesPrev').click(-1, _p.clickShowArticlesPaged);
            $('#fbAct_PagesNext').click(1, _p.clickShowArticlesPaged);
            $('#fbAct_Logout').click(-1, _p.clickLogout);
            $('#fbAct_Logout_resp').click(-1, _p.clickLogout);
    
    
            // FB.XFBML.parse(document.getElementById("fbconnect"));
        }

    };

    pub.getActivitiesSharingStatus = function() {
        var status = lib.getCookieValue(_p.COOKIE_SHARING_STATUS);
        if (!status) {
            lib.writePersistentCookie(_p.COOKIE_SHARING_STATUS, pub.ENABLED);
            return pub.ENABLED;
        }
        _p.console.log('sharing status: '+status);
        return status; 
    };

    _p.renderActivitiesSharingStatus = function(status) {
        if (typeof status == 'undefined')
            status = pub.DISABLED;

        if (status == pub.DISABLED) {
//            $('#cmdActivitiesSharingReminder').attr('disabled', true );
            $('.form-msg-info').text(_p.messageSharingOff);
            $('.singleswitch.on').removeClass('active');
            $('.singleswitch.off').addClass('active');
        } else {
            $('.form-msg-info').text(_p.messageSharingOn);
            $('.singleswitch.off').removeClass('active');
            $('.singleswitch.on').addClass('active');
        }
    }

    _p.clickActivitiesSharingOn = function(e) {
        e.preventDefault();
        e.stopPropagation();
        lib.writePersistentCookie(_p.COOKIE_SHARING_STATUS, pub.ENABLED);
        _p.renderActivitiesSharingStatus(pub.ENABLED);
    };

    _p.clickActivitiesSharingOff = function(e) {
        e.preventDefault();
        e.stopPropagation();
        lib.writePersistentCookie(_p.COOKIE_SHARING_STATUS, pub.DISABLED);
        _p.renderActivitiesSharingStatus(pub.DISABLED);
    };
    
    _p.formatDate = function( _d ) {
        return _p.prettyDate( _p.utcDateConvert( _d ) );
    };

    _p.utcDateConvert = function (input){
        if (!(typeof input === "string")) throw "ISODate, convert: input must be a string";
        var d = input.match(/^(\d{4})-(\d{2})-(\d{2})[T ](\d{2}):(\d{2}):(\d{2}(?:\.\d+)?)(Z|(([+-])(\d{2}):?(\d{2})))$/i);
        if (!d) throw "ISODate, convert: Illegal format";
        return new Date(
            Date.UTC(d[1],d[2]-1,d[3],d[4],d[5],d[6]|0,(d[6]*1000-((d[6]|0)*1000))|0,d[7]) +
            (d[7].toUpperCase() ==="Z" ? 0 : (d[10]*3600 + d[11]*60) * (d[9]==="-" ? 1000 : -1000))
        );
    };

    _p.prettyDate = function(time){
        // var date = new Date((time || "").replace(/-/g,"/").replace(/[TZ]/g," ")),
        var date = time,
            diff = (((new Date()).getTime() - date.getTime()) / 1000),
            day_diff = Math.floor(diff / 86400);
            
        if ( isNaN(day_diff) || day_diff < 0 )
            return;
                
        if ( day_diff >= 31 )
            return date.toLocaleFormat('%d-%m-%Y');
        
                
        return day_diff == 0 && (
                diff < 60 && _p.messageFewSecondsAgo ||
                diff < 120 && _p.messageMinuteAgo ||
                diff < 3600 && Math.floor( diff / 60 ) + _p.messageMinutesAgo ||
                diff < 7200 && _p.messageHourAgo ||
                diff < 86400 && Math.floor( diff / 3600 ) + _p.messageHoursAgo) ||
            day_diff == 1 && _p.messageYesterday ||
            day_diff < 7 && day_diff + _p.messageDaysAgo ||
            day_diff < 31 && Math.ceil( day_diff / 7 ) + _p.messageWeeksAgo;
    };
    


    _p.community_switcher = function (switcher_elem,e) {
        $('.shareswitcher .form-msg-info').hide();
        if($('.switcher .on').hasClass('active')) {
            $('.shareswitcher .form-msg-info:first').show();
        } else {
            $('.shareswitcher .form-msg-info:last').show();
        }
        $(switcher_elem+' a').on('click',function(e) {
            e.preventDefault();
            switcherelem = $(e.target);
            if($(this).parent('span').hasClass('active')) {
                return;
            } else {
                var autoshare;
                if ($(this).parent('span').hasClass('on')) {
                    autoshare="autoshare=1";
                } else {
                    autoshare="autoshare=0";
                }
                /*sostituire con url del servizio
                $.ajax({
                    url: _p.getSiteAddress()+'ajax/share-app-settings',
                    type: 'POST',
                    dataType: 'json',
                    data: autoshare,
                    success: function(data) {
                        if(data.success) {
                            switcherelem.parent('span').siblings('span').removeClass('active');
                            switcherelem.parent('span').addClass('active');
                            $('.shareswitcher .form-msg-info').hide();
                            if($('.switcher .on').hasClass('active')) {
                                $('.shareswitcher .form-msg-info:first').show();
                            } else {
                                $('.shareswitcher .form-msg-info:last').show();
                            }
                        }
                    }
                })
                */
            }
        });
    }

    _p.initInterface = function(data, response, xhr) {
        if (data.logged && data.userdata) {
            _p.userdata = data.userdata;
            if (data.moderator)
                _p.moderator = true;
        } else {
            _p.FB.api('/me', function(res) {
                _p.current_fb_me_response = res;
                _p.renderCommentBox();
            });
        }
        _p.handleAuthAndConnected(response);
        _p.renderLoggedinBox();
        _p.renderModeraButtons();

        // to reload sf toolbar after ajax autologin
        if(data.reloadToolbar && typeof xhr !== "undefined") {
            var xdebugToken = xhr.getResponseHeader('X-Debug-Token');
            // If the Sfjs object exists
            if (typeof Sfjs !== "undefined") {
                // Grab the toolbar element
                var currentElement = $('.sf-toolbar')[0];
                // Load the data of the given xdebug token into the current toolbar wrapper
                Sfjs.load(currentElement.id, '/_wdt/'+ xdebugToken);
            }
        }

    }

    pub.init = function(communitySettings) {
        _p.console.log('pub.init');

        //Print responsive menu 
        _p.renderMainMenuResponsive();

        // Override default settings
        if (typeof communitySettings != "undefined" && communitySettings.config) {
            for (var propertyName in communitySettings.config) {
                _p[propertyName] = communitySettings.config[propertyName];
                // propertyName is what you want
                // you can get the value like this: myObject[propertyName]
             }
            for (var callbackFunction in communitySettings.eventsHandled) {
                _p.callbacks[callbackFunction] = communitySettings.eventsHandled[callbackFunction];
                // propertyName is what you want
                // you can get the value like this: myObject[propertyName]
             }
        }
        if(!_p.getSiteAddress().match(/\.blogosfere\.it(\.[a-z]+\.web53\.develop)?$/)) {
            _p.FB.getLoginStatus(function(response) {

                    _p.console.log('getLoginStatus ' + response.status );
                    _p.current_fb_login_status = response;

                    _p.fbapp_status = response.status;
                    if (response.status === 'connected') {

                        var uid = response.authResponse.userID;
                        var accessToken = response.authResponse.accessToken;

                        $.ajax({
                            url: _p.getSiteAddress()+'/ajax/islogged',
                            xhrFields: {withCredentials: true},
                            dataType: 'json',
                            data: { 'accessToken' :accessToken },
                            success: function(data, status, xhr) {
                                _p.initInterface(data, response, xhr);
                            },
                        });

                    } else {

                        $.ajax({
                            url: _p.getSiteAddress()+'/ajax/islogged',
                            xhrFields: {withCredentials: true},
                            dataType: 'json',
                            success: function(data) {
                                _p.initInterface(data, response);
                            }
                        });
                    }
                    if (response.status == 'connected' || response.status == 'not_authorized')
                    {
                        _p.FB.Event.subscribe('edge.create', pub.fbEventSubscribeEdgeCreate );
                        _p.FB.Event.subscribe('edge.remove', pub.fbEventSubscribeEdgeRemove );
                    }
            });
        }

        _p.renderRateBox();
    };

    return pub;
};
/*
 * Lazy Load - jQuery plugin for lazy loading images
 *
 * Copyright (c) 2007-2013 Mika Tuupola
 *
 * Licensed under the MIT license:
 *   http://www.opensource.org/licenses/mit-license.php
 *
 * Project home:
 *   http://www.appelsiini.net/projects/lazyload
 *
 * Version:  1.9.0
 *
 */
 
(function($, window, document, undefined) {
    var $window = $(window);

    $.fn.lazyload = function(options) {
        var elements = this;
        var $container;
        var settings = {
            threshold       : 0,
            failure_limit   : 0,
            event           : "scroll",
            effect          : "show",
            container       : window,
            data_attribute  : "original",
            skip_invisible  : true,
            appear          : null,
            load            : null,
            placeholder     : src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAARCAIAAABFBIsgAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNS4xIE1hY2ludG9zaCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDozMUUyMDlEQjVBOEUxMUUzQUQzM0E4RTkyOEFBMzQxRSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDozMUUyMDlEQzVBOEUxMUUzQUQzM0E4RTkyOEFBMzQxRSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjMxRTIwOUQ5NUE4RTExRTNBRDMzQThFOTI4QUEzNDFFIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjMxRTIwOURBNUE4RTExRTNBRDMzQThFOTI4QUEzNDFFIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+5aR9KwAAACNJREFUeNpifP/+PQNtABMDzcCo0aNGjxo9avSo0VQEAAEGAFT6Au+wTqSvAAAAAElFTkSuQmCC"
        };

        function update() {
            var counter = 0;
      
            elements.each(function() {
                var $this = $(this);
                if (settings.skip_invisible && !$this.is(":visible")) {
                    return;
                }
                if ($.abovethetop(this, settings) ||
                    $.leftofbegin(this, settings)) {
                        /* Nothing. */
                } else if (!$.belowthefold(this, settings) &&
                    !$.rightoffold(this, settings)) {
                        $this.trigger("appear");
                        /* if we found an image we'll load, reset the counter */
                        counter = 0;
                } else {
                    if (++counter > settings.failure_limit) {
                        return false;
                    }
                }
            });

        }

        if(options) {
            /* Maintain BC for a couple of versions. */
            if (undefined !== options.failurelimit) {
                options.failure_limit = options.failurelimit;
                delete options.failurelimit;
            }
            if (undefined !== options.effectspeed) {
                options.effect_speed = options.effectspeed;
                delete options.effectspeed;
            }

            $.extend(settings, options);
        }

        /* Cache container as jQuery as object. */
        $container = (settings.container === undefined ||
                      settings.container === window) ? $window : $(settings.container);

        /* Fire one scroll event per scroll. Not one scroll event per image. */
        if (0 === settings.event.indexOf("scroll")) {
            $container.bind(settings.event, function() {
                return update();
            });
        }

        this.each(function() {
            var self = this;
            var $self = $(self);

            self.loaded = false;

            /* If no src attribute given use data:uri. */
            if ($self.attr("src") === undefined || $self.attr("src") === false) {
                $self.attr("src", settings.placeholder);
            }
            
            /* When appear is triggered load original image. */
            $self.one("appear", function() {
                if (!this.loaded) {
                    if (settings.appear) {
                        var elements_left = elements.length;
                        settings.appear.call(self, elements_left, settings);
                    }
                    $("<img />")
                        .bind("load", function() {
                            var original = $self.data(settings.data_attribute);
                            $self.hide();
                            if ($self.is("img")) {
                                $self.attr("src", original);
                            } else {
                                $self.css("background-image", "url('" + original + "')");
                            }
                            $self[settings.effect](settings.effect_speed);
                            
                            self.loaded = true;

                            /* Remove image from array so it is not looped next time. */
                            var temp = $.grep(elements, function(element) {
                                return !element.loaded;
                            });
                            elements = $(temp);

                            if (settings.load) {
                                var elements_left = elements.length;
                                settings.load.call(self, elements_left, settings);
                            }
                        })
                        .attr("src", $self.data(settings.data_attribute));
                }
            });

            /* When wanted event is triggered load original image */
            /* by triggering appear.                              */
            if (0 !== settings.event.indexOf("scroll")) {
                $self.bind(settings.event, function() {
                    if (!self.loaded) {
                        $self.trigger("appear");
                    }
                });
            }
        });

        /* Check if something appears when window is resized. */
        $window.bind("resize", function() {
            update();
        });
              
        /* With IOS5 force loading images when navigating with back button. */
        /* Non optimal workaround. */
        if ((/iphone|ipod|ipad.*os 5/gi).test(navigator.appVersion)) {
            $window.bind("pageshow", function(event) {
                if (event.originalEvent && event.originalEvent.persisted) {
                    elements.each(function() {
                        $(this).trigger("appear");
                    });
                }
            });
        }

        /* Force initial check if images should appear. */
        $(document).ready(function() {
            update();
        });
        
        return this;
    };

    /* Convenience methods in jQuery namespace.           */
    /* Use as  $.belowthefold(element, {threshold : 100, container : window}) */

    $.belowthefold = function(element, settings) {
        var fold;
        
        if (settings.container === undefined || settings.container === window) {
            fold = (window.innerHeight ? window.innerHeight : $window.height()) + $window.scrollTop();
        } else {
            fold = $(settings.container).offset().top + $(settings.container).height();
        }

        return fold <= $(element).offset().top - settings.threshold;
    };
    
    $.rightoffold = function(element, settings) {
        var fold;

        if (settings.container === undefined || settings.container === window) {
            fold = $window.width() + $window.scrollLeft();
        } else {
            fold = $(settings.container).offset().left + $(settings.container).width();
        }

        return fold <= $(element).offset().left - settings.threshold;
    };
        
    $.abovethetop = function(element, settings) {
        var fold;
        
        if (settings.container === undefined || settings.container === window) {
            fold = $window.scrollTop();
        } else {
            fold = $(settings.container).offset().top;
        }

        return fold >= $(element).offset().top + settings.threshold  + $(element).height();
    };
    
    $.leftofbegin = function(element, settings) {
        var fold;
        
        if (settings.container === undefined || settings.container === window) {
            fold = $window.scrollLeft();
        } else {
            fold = $(settings.container).offset().left;
        }

        return fold >= $(element).offset().left + settings.threshold + $(element).width();
    };

    $.inviewport = function(element, settings) {
         return !$.rightoffold(element, settings) && !$.leftofbegin(element, settings) &&
                !$.belowthefold(element, settings) && !$.abovethetop(element, settings);
     };

    /* Custom selectors for your convenience.   */
    /* Use as $("img:below-the-fold").something() or */
    /* $("img").filter(":below-the-fold").something() which is faster */

    $.extend($.expr[":"], {
        "below-the-fold" : function(a) { return $.belowthefold(a, {threshold : 0}); },
        "above-the-top"  : function(a) { return !$.belowthefold(a, {threshold : 0}); },
        "right-of-screen": function(a) { return $.rightoffold(a, {threshold : 0}); },
        "left-of-screen" : function(a) { return !$.rightoffold(a, {threshold : 0}); },
        "in-viewport"    : function(a) { return $.inviewport(a, {threshold : 0}); },
        /* Maintain BC for couple of versions. */
        "above-the-fold" : function(a) { return !$.belowthefold(a, {threshold : 0}); },
        "right-of-fold"  : function(a) { return $.rightoffold(a, {threshold : 0}); },
        "left-of-fold"   : function(a) { return !$.rightoffold(a, {threshold : 0}); }
    });

})(jQuery, window, document);
/**
 * BxSlider v4.1.1 - Fully loaded, responsive content slider
 * http://bxslider.com
 *
 * Copyright 2013, Steven Wanderski - http://stevenwanderski.com - http://bxcreative.com
 * Written while drinking Belgian ales and listening to jazz
 *
 * Released under the MIT license - http://opensource.org/licenses/MIT
 */

;(function($){

	var plugin = {};

	var defaults = {

		// GENERAL
		mode: 'horizontal',
		slideSelector: '',
		infiniteLoop: true,
		hideControlOnEnd: false,
		speed: 500,
		easing: null,
		slideMargin: 0,
		startSlide: 0,
		randomStart: false,
		captions: false,
		ticker: false,
		tickerHover: false,
		adaptiveHeight: false,
		adaptiveHeightSpeed: 500,
		video: false,
		useCSS: true,
		preloadImages: 'visible',
		responsive: true,

		// TOUCH
		touchEnabled: true,
		swipeThreshold: 50,
		oneToOneTouch: true,
		preventDefaultSwipeX: true,
		preventDefaultSwipeY: false,

		// PAGER
		pager: true,
		pagerType: 'full',
		pagerShortSeparator: ' / ',
		pagerSelector: null,
		buildPager: null,
		pagerCustom: null,

		// CONTROLS
		controls: true,
		nextText: 'Next',
		prevText: 'Prev',
		nextSelector: null,
		prevSelector: null,
		autoControls: false,
		startText: 'Start',
		stopText: 'Stop',
		autoControlsCombine: false,
		autoControlsSelector: null,

		// AUTO
		auto: false,
		pause: 4000,
		autoStart: true,
		autoDirection: 'next',
		autoHover: false,
		autoDelay: 0,

		// CAROUSEL
		minSlides: 1,
		maxSlides: 1,
		moveSlides: 0,
		slideWidth: 0,

		// CALLBACKS
		onSliderLoad: function() {},
		onSlideBefore: function() {},
		onSlideAfter: function() {},
		onSlideNext: function() {},
		onSlidePrev: function() {}
	}

	$.fn.bxSlider = function(options){

		if(this.length == 0) return this;

		// support mutltiple elements
		if(this.length > 1){
			this.each(function(){$(this).bxSlider(options)});
			return this;
		}

		// create a namespace to be used throughout the plugin
		var slider = {};
		// set a reference to our slider element
		var el = this;
		plugin.el = this;

		/**
		 * Makes slideshow responsive
		 */
		// first get the original window dimens (thanks alot IE)
		var windowWidth = $(window).width();
		var windowHeight = $(window).height();



		/**
		 * ===================================================================================
		 * = PRIVATE FUNCTIONS
		 * ===================================================================================
		 */

		/**
		 * Initializes namespace settings to be used throughout plugin
		 */
		var init = function(){
			// merge user-supplied options with the defaults
			slider.settings = $.extend({}, defaults, options);
			// parse slideWidth setting
			slider.settings.slideWidth = parseInt(slider.settings.slideWidth);
			// store the original children
			slider.children = el.children(slider.settings.slideSelector);
			// check if actual number of slides is less than minSlides / maxSlides
			if(slider.children.length < slider.settings.minSlides) slider.settings.minSlides = slider.children.length;
			if(slider.children.length < slider.settings.maxSlides) slider.settings.maxSlides = slider.children.length;
			// if random start, set the startSlide setting to random number
			if(slider.settings.randomStart) slider.settings.startSlide = Math.floor(Math.random() * slider.children.length);
			// store active slide information
			slider.active = { index: slider.settings.startSlide }
			// store if the slider is in carousel mode (displaying / moving multiple slides)
			slider.carousel = slider.settings.minSlides > 1 || slider.settings.maxSlides > 1;
			// if carousel, force preloadImages = 'all'
			if(slider.carousel) slider.settings.preloadImages = 'all';
			// calculate the min / max width thresholds based on min / max number of slides
			// used to setup and update carousel slides dimensions
			slider.minThreshold = (slider.settings.minSlides * slider.settings.slideWidth) + ((slider.settings.minSlides - 1) * slider.settings.slideMargin);
			slider.maxThreshold = (slider.settings.maxSlides * slider.settings.slideWidth) + ((slider.settings.maxSlides - 1) * slider.settings.slideMargin);
			// store the current state of the slider (if currently animating, working is true)
			slider.working = false;
			// initialize the controls object
			slider.controls = {};
			// initialize an auto interval
			slider.interval = null;
			// determine which property to use for transitions
			slider.animProp = slider.settings.mode == 'vertical' ? 'top' : 'left';
			// determine if hardware acceleration can be used
			slider.usingCSS = slider.settings.useCSS && slider.settings.mode != 'fade' && (function(){
				// create our test div element
				var div = document.createElement('div');
				// css transition properties
				var props = ['WebkitPerspective', 'MozPerspective', 'OPerspective', 'msPerspective'];
				// test for each property
				for(var i in props){
					if(div.style[props[i]] !== undefined){
						slider.cssPrefix = props[i].replace('Perspective', '').toLowerCase();
						slider.animProp = '-' + slider.cssPrefix + '-transform';
						return true;
					}
				}
				return false;
			}());
			// if vertical mode always make maxSlides and minSlides equal
			if(slider.settings.mode == 'vertical') slider.settings.maxSlides = slider.settings.minSlides;
			// save original style data
			el.data("origStyle", el.attr("style"));
			el.children(slider.settings.slideSelector).each(function() {
			  $(this).data("origStyle", $(this).attr("style"));
			});
			// perform all DOM / CSS modifications
			setup();
		}

		/**
		 * Performs all DOM and CSS modifications
		 */
		var setup = function(){
			// wrap el in a wrapper
			el.wrap('<div class="bx-wrapper"><div class="bx-viewport"></div></div>');
			// store a namspace reference to .bx-viewport
			slider.viewport = el.parent();
			// add a loading div to display while images are loading
			slider.loader = $('<div class="bx-loading" />');
			slider.viewport.prepend(slider.loader);
			// set el to a massive width, to hold any needed slides
			// also strip any margin and padding from el
			el.css({
				width: slider.settings.mode == 'horizontal' ? (slider.children.length * 100 + 215) + '%' : 'auto',
				position: 'relative'
			});
			// if using CSS, add the easing property
			if(slider.usingCSS && slider.settings.easing){
				el.css('-' + slider.cssPrefix + '-transition-timing-function', slider.settings.easing);
			// if not using CSS and no easing value was supplied, use the default JS animation easing (swing)
			}else if(!slider.settings.easing){
				slider.settings.easing = 'swing';
			}
			var slidesShowing = getNumberSlidesShowing();
			// make modifications to the viewport (.bx-viewport)
			slider.viewport.css({
				width: '100%',
				overflow: 'hidden',
				position: 'relative'
			});
			slider.viewport.parent().css({
				maxWidth: getViewportMaxWidth()
			});
			// make modification to the wrapper (.bx-wrapper)
			if(!slider.settings.pager) {
				slider.viewport.parent().css({
				margin: '0 auto 0px'
				});
			}
			// apply css to all slider children
			slider.children.css({
				'float': slider.settings.mode == 'horizontal' ? 'left' : 'none',
				listStyle: 'none',
				position: 'relative'
			});
			// apply the calculated width after the float is applied to prevent scrollbar interference
			slider.children.css('width', getSlideWidth());
			// if slideMargin is supplied, add the css
			if(slider.settings.mode == 'horizontal' && slider.settings.slideMargin > 0) slider.children.css('marginRight', slider.settings.slideMargin);
			if(slider.settings.mode == 'vertical' && slider.settings.slideMargin > 0) slider.children.css('marginBottom', slider.settings.slideMargin);
			// if "fade" mode, add positioning and z-index CSS
			if(slider.settings.mode == 'fade'){
				slider.children.css({
					position: 'absolute',
					zIndex: 0,
					display: 'none'
				});
				// prepare the z-index on the showing element
				slider.children.eq(slider.settings.startSlide).css({zIndex: 50, display: 'block'});
			}
			// create an element to contain all slider controls (pager, start / stop, etc)
			slider.controls.el = $('<div class="bx-controls" />');
			// if captions are requested, add them
			if(slider.settings.captions) appendCaptions();
			// check if startSlide is last slide
			slider.active.last = slider.settings.startSlide == getPagerQty() - 1;
			// if video is true, set up the fitVids plugin
			if(slider.settings.video) el.fitVids();
			// set the default preload selector (visible)
			var preloadSelector = slider.children.eq(slider.settings.startSlide);
			if (slider.settings.preloadImages == "all") preloadSelector = slider.children;
			// only check for control addition if not in "ticker" mode
			if(!slider.settings.ticker){
				// if pager is requested, add it
				if(slider.settings.pager) appendPager();
				// if controls are requested, add them
				if(slider.settings.controls) appendControls();
				// if auto is true, and auto controls are requested, add them
				if(slider.settings.auto && slider.settings.autoControls) appendControlsAuto();
				// if any control option is requested, add the controls wrapper
				if(slider.settings.controls || slider.settings.autoControls || slider.settings.pager) slider.viewport.after(slider.controls.el);
			// if ticker mode, do not allow a pager
			}else{
				slider.settings.pager = false;
			}
			// preload all images, then perform final DOM / CSS modifications that depend on images being loaded
			loadElements(preloadSelector, start);
		}

		var loadElements = function(selector, callback){
			var total = selector.find('img, iframe').length;
			if (total == 0){
				callback();
				return;
			}
			var count = 0;
			selector.find('img, iframe').each(function(){
				$(this).one('load', function() {
				  if(++count == total) callback();
				}).each(function() {
				  if(this.complete) $(this).load();
				});
			});
		}

		/**
		 * Start the slider
		 */
		var start = function(){
			// if infinite loop, prepare additional slides
			if(slider.settings.infiniteLoop && slider.settings.mode != 'fade' && !slider.settings.ticker){
				var slice = slider.settings.mode == 'vertical' ? slider.settings.minSlides : slider.settings.maxSlides;
				var sliceAppend = slider.children.slice(0, slice).clone().addClass('bx-clone');
				var slicePrepend = slider.children.slice(-slice).clone().addClass('bx-clone');
				el.append(sliceAppend).prepend(slicePrepend);
			}
			// remove the loading DOM element
			slider.loader.remove();
			// set the left / top position of "el"
			setSlidePosition();
			// if "vertical" mode, always use adaptiveHeight to prevent odd behavior
			if (slider.settings.mode == 'vertical') slider.settings.adaptiveHeight = true;
			// set the viewport height
			slider.viewport.height(getViewportHeight());
			// make sure everything is positioned just right (same as a window resize)
			el.redrawSlider();
			// onSliderLoad callback
			slider.settings.onSliderLoad(slider.active.index);
			// slider has been fully initialized
			slider.initialized = true;
			// bind the resize call to the window
			if (slider.settings.responsive) $(window).bind('resize', resizeWindow);
			// if auto is true, start the show
			if (slider.settings.auto && slider.settings.autoStart) initAuto();
			// if ticker is true, start the ticker
			if (slider.settings.ticker) initTicker();
			// if pager is requested, make the appropriate pager link active
			if (slider.settings.pager) updatePagerActive(slider.settings.startSlide);
			// check for any updates to the controls (like hideControlOnEnd updates)
			if (slider.settings.controls) updateDirectionControls();
			// if touchEnabled is true, setup the touch events
			if (slider.settings.touchEnabled && !slider.settings.ticker) initTouch();
		}

		/**
		 * Returns the calculated height of the viewport, used to determine either adaptiveHeight or the maxHeight value
		 */
		var getViewportHeight = function(){
			var height = 0;
			// first determine which children (slides) should be used in our height calculation
			var children = $();
			// if mode is not "vertical" and adaptiveHeight is false, include all children
			if(slider.settings.mode != 'vertical' && !slider.settings.adaptiveHeight){
				children = slider.children;
			}else{
				// if not carousel, return the single active child
				if(!slider.carousel){
					children = slider.children.eq(slider.active.index);
				// if carousel, return a slice of children
				}else{
					// get the individual slide index
					var currentIndex = slider.settings.moveSlides == 1 ? slider.active.index : slider.active.index * getMoveBy();
					// add the current slide to the children
					children = slider.children.eq(currentIndex);
					// cycle through the remaining "showing" slides
					for (i = 1; i <= slider.settings.maxSlides - 1; i++){
						// if looped back to the start
						if(currentIndex + i >= slider.children.length){
							children = children.add(slider.children.eq(i - 1));
						}else{
							children = children.add(slider.children.eq(currentIndex + i));
						}
					}
				}
			}
			// if "vertical" mode, calculate the sum of the heights of the children
			if(slider.settings.mode == 'vertical'){
				children.each(function(index) {
				  height += $(this).outerHeight();
				});
				// add user-supplied margins
				if(slider.settings.slideMargin > 0){
					height += slider.settings.slideMargin * (slider.settings.minSlides - 1);
				}
			// if not "vertical" mode, calculate the max height of the children
			}else{
				height = Math.max.apply(Math, children.map(function(){
					return $(this).outerHeight(false);
				}).get());
			}
			return height;
		}

		/**
		 * Returns the calculated width to be used for the outer wrapper / viewport
		 */
		var getViewportMaxWidth = function(){
			var width = '100%';
			if(slider.settings.slideWidth > 0){
				if(slider.settings.mode == 'horizontal'){
					width = (slider.settings.maxSlides * slider.settings.slideWidth) + ((slider.settings.maxSlides - 1) * slider.settings.slideMargin);
				}else{
					width = slider.settings.slideWidth;
				}
			}
			return width;
		}

		/**
		 * Returns the calculated width to be applied to each slide
		 */
		var getSlideWidth = function(){
			// start with any user-supplied slide width
			var newElWidth = slider.settings.slideWidth;
			// get the current viewport width
			var wrapWidth = slider.viewport.width();
			// if slide width was not supplied, or is larger than the viewport use the viewport width
			if(slider.settings.slideWidth == 0 ||
				(slider.settings.slideWidth > wrapWidth && !slider.carousel) ||
				slider.settings.mode == 'vertical'){
				newElWidth = wrapWidth;
			// if carousel, use the thresholds to determine the width
			}else if(slider.settings.maxSlides > 1 && slider.settings.mode == 'horizontal'){
				if(wrapWidth > slider.maxThreshold){
					// newElWidth = (wrapWidth - (slider.settings.slideMargin * (slider.settings.maxSlides - 1))) / slider.settings.maxSlides;
				}else if(wrapWidth < slider.minThreshold){
					newElWidth = (wrapWidth - (slider.settings.slideMargin * (slider.settings.minSlides - 1))) / slider.settings.minSlides;
				}
			}
			return newElWidth;
		}

		/**
		 * Returns the number of slides currently visible in the viewport (includes partially visible slides)
		 */
		var getNumberSlidesShowing = function(){
			var slidesShowing = 1;
			if(slider.settings.mode == 'horizontal' && slider.settings.slideWidth > 0){
				// if viewport is smaller than minThreshold, return minSlides
				if(slider.viewport.width() < slider.minThreshold){
					slidesShowing = slider.settings.minSlides;
				// if viewport is larger than minThreshold, return maxSlides
				}else if(slider.viewport.width() > slider.maxThreshold){
					slidesShowing = slider.settings.maxSlides;
				// if viewport is between min / max thresholds, divide viewport width by first child width
				}else{
					var childWidth = slider.children.first().width();
					slidesShowing = Math.floor(slider.viewport.width() / childWidth);
				}
			// if "vertical" mode, slides showing will always be minSlides
			}else if(slider.settings.mode == 'vertical'){
				slidesShowing = slider.settings.minSlides;
			}
			return slidesShowing;
		}

		/**
		 * Returns the number of pages (one full viewport of slides is one "page")
		 */
		var getPagerQty = function(){
			var pagerQty = 0;
			// if moveSlides is specified by the user
			if(slider.settings.moveSlides > 0){
				if(slider.settings.infiniteLoop){
					pagerQty = slider.children.length / getMoveBy();
				}else{
					// use a while loop to determine pages
					var breakPoint = 0;
					var counter = 0
					// when breakpoint goes above children length, counter is the number of pages
					while (breakPoint < slider.children.length){
						++pagerQty;
						breakPoint = counter + getNumberSlidesShowing();
						counter += slider.settings.moveSlides <= getNumberSlidesShowing() ? slider.settings.moveSlides : getNumberSlidesShowing();
					}
				}
			// if moveSlides is 0 (auto) divide children length by sides showing, then round up
			}else{
				pagerQty = Math.ceil(slider.children.length / getNumberSlidesShowing());
			}
			return pagerQty;
		}

		/**
		 * Returns the number of indivual slides by which to shift the slider
		 */
		var getMoveBy = function(){
			// if moveSlides was set by the user and moveSlides is less than number of slides showing
			if(slider.settings.moveSlides > 0 && slider.settings.moveSlides <= getNumberSlidesShowing()){
				return slider.settings.moveSlides;
			}
			// if moveSlides is 0 (auto)
			return getNumberSlidesShowing();
		}

		/**
		 * Sets the slider's (el) left or top position
		 */
		var setSlidePosition = function(){
			// if last slide, not infinite loop, and number of children is larger than specified maxSlides
			if(slider.children.length > slider.settings.maxSlides && slider.active.last && !slider.settings.infiniteLoop){
				if (slider.settings.mode == 'horizontal'){
					// get the last child's position
					var lastChild = slider.children.last();
					var position = lastChild.position();
					// set the left position
					setPositionProperty(-(position.left - (slider.viewport.width() - lastChild.width())), 'reset', 0);
				}else if(slider.settings.mode == 'vertical'){
					// get the last showing index's position
					var lastShowingIndex = slider.children.length - slider.settings.minSlides;
					var position = slider.children.eq(lastShowingIndex).position();
					// set the top position
					setPositionProperty(-position.top, 'reset', 0);
				}
			// if not last slide
			}else{
				// get the position of the first showing slide
				var position = slider.children.eq(slider.active.index * getMoveBy()).position();
				// check for last slide
				if (slider.active.index == getPagerQty() - 1) slider.active.last = true;
				// set the repective position
				if (position != undefined){
					if (slider.settings.mode == 'horizontal') setPositionProperty(-position.left, 'reset', 0);
					else if (slider.settings.mode == 'vertical') setPositionProperty(-position.top, 'reset', 0);
				}
			}
		}

		/**
		 * Sets the el's animating property position (which in turn will sometimes animate el).
		 * If using CSS, sets the transform property. If not using CSS, sets the top / left property.
		 *
		 * @param value (int)
		 *  - the animating property's value
		 *
		 * @param type (string) 'slider', 'reset', 'ticker'
		 *  - the type of instance for which the function is being
		 *
		 * @param duration (int)
		 *  - the amount of time (in ms) the transition should occupy
		 *
		 * @param params (array) optional
		 *  - an optional parameter containing any variables that need to be passed in
		 */
		var setPositionProperty = function(value, type, duration, params){
			// use CSS transform
			if(slider.usingCSS){
				// determine the translate3d value
				var propValue = slider.settings.mode == 'vertical' ? 'translate3d(0, ' + value + 'px, 0)' : 'translate3d(' + value + 'px, 0, 0)';
				// add the CSS transition-duration
				el.css('-' + slider.cssPrefix + '-transition-duration', duration / 1000 + 's');
				if(type == 'slide'){
					// set the property value
					el.css(slider.animProp, propValue);
					// bind a callback method - executes when CSS transition completes
					el.bind('transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd', function(){
						// unbind the callback
						el.unbind('transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd');
						updateAfterSlideTransition();
					});
				}else if(type == 'reset'){
					el.css(slider.animProp, propValue);
				}else if(type == 'ticker'){
					// make the transition use 'linear'
					el.css('-' + slider.cssPrefix + '-transition-timing-function', 'linear');
					el.css(slider.animProp, propValue);
					// bind a callback method - executes when CSS transition completes
					el.bind('transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd', function(){
						// unbind the callback
						el.unbind('transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd');
						// reset the position
						setPositionProperty(params['resetValue'], 'reset', 0);
						// start the loop again
						tickerLoop();
					});
				}
			// use JS animate
			}else{
				var animateObj = {};
				animateObj[slider.animProp] = value;
				if(type == 'slide'){
					el.animate(animateObj, duration, slider.settings.easing, function(){
						updateAfterSlideTransition();
					});
				}else if(type == 'reset'){
					el.css(slider.animProp, value)
				}else if(type == 'ticker'){
					el.animate(animateObj, speed, 'linear', function(){
						setPositionProperty(params['resetValue'], 'reset', 0);
						// run the recursive loop after animation
						tickerLoop();
					});
				}
			}
		}

		/**
		 * Populates the pager with proper amount of pages
		 */
		var populatePager = function(){
			var pagerHtml = '';
			var pagerQty = getPagerQty();
			// loop through each pager item
			for(var i=0; i < pagerQty; i++){
				var linkContent = '';
				// if a buildPager function is supplied, use it to get pager link value, else use index + 1
				if(slider.settings.buildPager && $.isFunction(slider.settings.buildPager)){
					linkContent = slider.settings.buildPager(i);
					slider.pagerEl.addClass('bx-custom-pager');
				}else{
					linkContent = i + 1;
					slider.pagerEl.addClass('bx-default-pager');
				}
				// var linkContent = slider.settings.buildPager && $.isFunction(slider.settings.buildPager) ? slider.settings.buildPager(i) : i + 1;
				// add the markup to the string
				pagerHtml += '<div class="bx-pager-item"><a href="" data-slide-index="' + i + '" class="bx-pager-link">' + linkContent + '</a></div>';
			};
			// populate the pager element with pager links
			slider.pagerEl.html(pagerHtml);
		}

		/**
		 * Appends the pager to the controls element
		 */
		var appendPager = function(){
			if(!slider.settings.pagerCustom){
				// create the pager DOM element
				slider.pagerEl = $('<div class="bx-pager" />');
				// if a pager selector was supplied, populate it with the pager
				if(slider.settings.pagerSelector){
					$(slider.settings.pagerSelector).html(slider.pagerEl);
				// if no pager selector was supplied, add it after the wrapper
				}else{
					slider.controls.el.addClass('bx-has-pager').append(slider.pagerEl);
				}
				// populate the pager
				populatePager();
			}else{
				slider.pagerEl = $(slider.settings.pagerCustom);
			}
			// assign the pager click binding
			slider.pagerEl.delegate('a', 'click', clickPagerBind);
		}

		/**
		 * Appends prev / next controls to the controls element
		 */
		var appendControls = function(){
			slider.controls.next = $('<a class="bx-next" href="">' + slider.settings.nextText + '</a>');
			slider.controls.prev = $('<a class="bx-prev" href="">' + slider.settings.prevText + '</a>');
			// bind click actions to the controls
			slider.controls.next.bind('click', clickNextBind);
			slider.controls.prev.bind('click', clickPrevBind);
			// if nextSlector was supplied, populate it
			if(slider.settings.nextSelector){
				$(slider.settings.nextSelector).append(slider.controls.next);
			}
			// if prevSlector was supplied, populate it
			if(slider.settings.prevSelector){
				$(slider.settings.prevSelector).append(slider.controls.prev);
			}
			// if no custom selectors were supplied
			if(!slider.settings.nextSelector && !slider.settings.prevSelector){
				// add the controls to the DOM
				slider.controls.directionEl = $('<div class="bx-controls-direction" />');
				// add the control elements to the directionEl
				slider.controls.directionEl.append(slider.controls.prev).append(slider.controls.next);
				// slider.viewport.append(slider.controls.directionEl);
				slider.controls.el.addClass('bx-has-controls-direction').append(slider.controls.directionEl);
			}
		}

		/**
		 * Appends start / stop auto controls to the controls element
		 */
		var appendControlsAuto = function(){
			slider.controls.start = $('<div class="bx-controls-auto-item"><a class="bx-start" href="">' + slider.settings.startText + '</a></div>');
			slider.controls.stop = $('<div class="bx-controls-auto-item"><a class="bx-stop" href="">' + slider.settings.stopText + '</a></div>');
			// add the controls to the DOM
			slider.controls.autoEl = $('<div class="bx-controls-auto" />');
			// bind click actions to the controls
			slider.controls.autoEl.delegate('.bx-start', 'click', clickStartBind);
			slider.controls.autoEl.delegate('.bx-stop', 'click', clickStopBind);
			// if autoControlsCombine, insert only the "start" control
			if(slider.settings.autoControlsCombine){
				slider.controls.autoEl.append(slider.controls.start);
			// if autoControlsCombine is false, insert both controls
			}else{
				slider.controls.autoEl.append(slider.controls.start).append(slider.controls.stop);
			}
			// if auto controls selector was supplied, populate it with the controls
			if(slider.settings.autoControlsSelector){
				$(slider.settings.autoControlsSelector).html(slider.controls.autoEl);
			// if auto controls selector was not supplied, add it after the wrapper
			}else{
				slider.controls.el.addClass('bx-has-controls-auto').append(slider.controls.autoEl);
			}
			// update the auto controls
			updateAutoControls(slider.settings.autoStart ? 'stop' : 'start');
		}

		/**
		 * Appends image captions to the DOM
		 */
		var appendCaptions = function(){
			// cycle through each child
			slider.children.each(function(index){
				// get the image title attribute
				var title = $(this).find('img:first').attr('title');
				// append the caption
				if (title != undefined && ('' + title).length) {
                    $(this).append('<div class="bx-caption"><span>' + title + '</span></div>');
                }
			});
		}

		/**
		 * Click next binding
		 *
		 * @param e (event)
		 *  - DOM event object
		 */
		var clickNextBind = function(e){
			// if auto show is running, stop it
			if (slider.settings.auto) el.stopAuto();
			el.goToNextSlide();
			e.preventDefault();
		}

		/**
		 * Click prev binding
		 *
		 * @param e (event)
		 *  - DOM event object
		 */
		var clickPrevBind = function(e){
			// if auto show is running, stop it
			if (slider.settings.auto) el.stopAuto();
			el.goToPrevSlide();
			e.preventDefault();
		}

		/**
		 * Click start binding
		 *
		 * @param e (event)
		 *  - DOM event object
		 */
		var clickStartBind = function(e){
			el.startAuto();
			e.preventDefault();
		}

		/**
		 * Click stop binding
		 *
		 * @param e (event)
		 *  - DOM event object
		 */
		var clickStopBind = function(e){
			el.stopAuto();
			e.preventDefault();
		}

		/**
		 * Click pager binding
		 *
		 * @param e (event)
		 *  - DOM event object
		 */
		var clickPagerBind = function(e){
			// if auto show is running, stop it
			if (slider.settings.auto) el.stopAuto();
			var pagerLink = $(e.currentTarget);
			var pagerIndex = parseInt(pagerLink.attr('data-slide-index'));
			// if clicked pager link is not active, continue with the goToSlide call
			if(pagerIndex != slider.active.index) el.goToSlide(pagerIndex);
			e.preventDefault();
		}

		/**
		 * Updates the pager links with an active class
		 *
		 * @param slideIndex (int)
		 *  - index of slide to make active
		 */
		var updatePagerActive = function(slideIndex){
			// if "short" pager type
			var len = slider.children.length; // nb of children
			if(slider.settings.pagerType == 'short'){
				if(slider.settings.maxSlides > 1) {
					len = Math.ceil(slider.children.length/slider.settings.maxSlides);
				}
				slider.pagerEl.html( (slideIndex + 1) + slider.settings.pagerShortSeparator + len);
				return;
			}
			// remove all pager active classes
			slider.pagerEl.find('a').removeClass('active');
			// apply the active class for all pagers
			slider.pagerEl.each(function(i, el) { $(el).find('a').eq(slideIndex).addClass('active'); });
		}

		/**
		 * Performs needed actions after a slide transition
		 */
		var updateAfterSlideTransition = function(){
			// if infinte loop is true
			if(slider.settings.infiniteLoop){
				var position = '';
				// first slide
				if(slider.active.index == 0){
					// set the new position
					position = slider.children.eq(0).position();
				// carousel, last slide
				}else if(slider.active.index == getPagerQty() - 1 && slider.carousel){
					position = slider.children.eq((getPagerQty() - 1) * getMoveBy()).position();
				// last slide
				}else if(slider.active.index == slider.children.length - 1){
					position = slider.children.eq(slider.children.length - 1).position();
				}
				if (slider.settings.mode == 'horizontal') { setPositionProperty(-position.left, 'reset', 0);; }
				else if (slider.settings.mode == 'vertical') { setPositionProperty(-position.top, 'reset', 0);; }
			}
			// declare that the transition is complete
			slider.working = false;
			// onSlideAfter callback
			slider.settings.onSlideAfter(slider.children.eq(slider.active.index), slider.oldIndex, slider.active.index);
		}

		/**
		 * Updates the auto controls state (either active, or combined switch)
		 *
		 * @param state (string) "start", "stop"
		 *  - the new state of the auto show
		 */
		var updateAutoControls = function(state){
			// if autoControlsCombine is true, replace the current control with the new state
			if(slider.settings.autoControlsCombine){
				slider.controls.autoEl.html(slider.controls[state]);
			// if autoControlsCombine is false, apply the "active" class to the appropriate control
			}else{
				slider.controls.autoEl.find('a').removeClass('active');
				slider.controls.autoEl.find('a:not(.bx-' + state + ')').addClass('active');
			}
		}

		/**
		 * Updates the direction controls (checks if either should be hidden)
		 */
		var updateDirectionControls = function(){
			if(getPagerQty() == 1){
				slider.controls.prev.addClass('disabled');
				slider.controls.next.addClass('disabled');
			}else if(!slider.settings.infiniteLoop && slider.settings.hideControlOnEnd){
				// if first slide
				if (slider.active.index == 0){
					slider.controls.prev.addClass('disabled');
					slider.controls.next.removeClass('disabled');
				// if last slide
				}else if(slider.active.index == getPagerQty() - 1){
					slider.controls.next.addClass('disabled');
					slider.controls.prev.removeClass('disabled');
				// if any slide in the middle
				}else{
					slider.controls.prev.removeClass('disabled');
					slider.controls.next.removeClass('disabled');
				}
			}
		}

		/**
		 * Initialzes the auto process
		 */
		var initAuto = function(){
			// if autoDelay was supplied, launch the auto show using a setTimeout() call
			if(slider.settings.autoDelay > 0){
				var timeout = setTimeout(el.startAuto, slider.settings.autoDelay);
			// if autoDelay was not supplied, start the auto show normally
			}else{
				el.startAuto();
			}
			// if autoHover is requested
			if(slider.settings.autoHover){
				// on el hover
				el.hover(function(){
					// if the auto show is currently playing (has an active interval)
					if(slider.interval){
						// stop the auto show and pass true agument which will prevent control update
						el.stopAuto(true);
						// create a new autoPaused value which will be used by the relative "mouseout" event
						slider.autoPaused = true;
					}
				}, function(){
					// if the autoPaused value was created be the prior "mouseover" event
					if(slider.autoPaused){
						// start the auto show and pass true agument which will prevent control update
						el.startAuto(true);
						// reset the autoPaused value
						slider.autoPaused = null;
					}
				});
			}
		}

		/**
		 * Initialzes the ticker process
		 */
		var initTicker = function(){
			var startPosition = 0;
			// if autoDirection is "next", append a clone of the entire slider
			if(slider.settings.autoDirection == 'next'){
				el.append(slider.children.clone().addClass('bx-clone'));
			// if autoDirection is "prev", prepend a clone of the entire slider, and set the left position
			}else{
				el.prepend(slider.children.clone().addClass('bx-clone'));
				var position = slider.children.first().position();
				startPosition = slider.settings.mode == 'horizontal' ? -position.left : -position.top;
			}
			setPositionProperty(startPosition, 'reset', 0);
			// do not allow controls in ticker mode
			slider.settings.pager = false;
			slider.settings.controls = false;
			slider.settings.autoControls = false;
			// if autoHover is requested
			if(slider.settings.tickerHover && !slider.usingCSS){
				// on el hover
				slider.viewport.hover(function(){
					el.stop();
				}, function(){
					// calculate the total width of children (used to calculate the speed ratio)
					var totalDimens = 0;
					slider.children.each(function(index){
					  totalDimens += slider.settings.mode == 'horizontal' ? $(this).outerWidth(true) : $(this).outerHeight(true);
					});
					// calculate the speed ratio (used to determine the new speed to finish the paused animation)
					var ratio = slider.settings.speed / totalDimens;
					// determine which property to use
					var property = slider.settings.mode == 'horizontal' ? 'left' : 'top';
					// calculate the new speed
					var newSpeed = ratio * (totalDimens - (Math.abs(parseInt(el.css(property)))));
					tickerLoop(newSpeed);
				});
			}
			// start the ticker loop
			tickerLoop();
		}

		/**
		 * Runs a continuous loop, news ticker-style
		 */
		var tickerLoop = function(resumeSpeed){
			speed = resumeSpeed ? resumeSpeed : slider.settings.speed;
			var position = {left: 0, top: 0};
			var reset = {left: 0, top: 0};
			// if "next" animate left position to last child, then reset left to 0
			if(slider.settings.autoDirection == 'next'){
				position = el.find('.bx-clone').first().position();
			// if "prev" animate left position to 0, then reset left to first non-clone child
			}else{
				reset = slider.children.first().position();
			}
			var animateProperty = slider.settings.mode == 'horizontal' ? -position.left : -position.top;
			var resetValue = slider.settings.mode == 'horizontal' ? -reset.left : -reset.top;
			var params = {resetValue: resetValue};
			setPositionProperty(animateProperty, 'ticker', speed, params);
		}

		/**
		 * Initializes touch events
		 */
		var initTouch = function(){
			// initialize object to contain all touch values
			slider.touch = {
				start: {x: 0, y: 0},
				end: {x: 0, y: 0}
			}
			slider.viewport.bind('touchstart', onTouchStart);
		}

		/**
		 * Event handler for "touchstart"
		 *
		 * @param e (event)
		 *  - DOM event object
		 */
		var onTouchStart = function(e){
			if(slider.working){
				e.preventDefault();
			}else{
				// record the original position when touch starts
				slider.touch.originalPos = el.position();
				var orig = e.originalEvent;
				// record the starting touch x, y coordinates
				slider.touch.start.x = orig.changedTouches[0].pageX;
				slider.touch.start.y = orig.changedTouches[0].pageY;
				// bind a "touchmove" event to the viewport
				slider.viewport.bind('touchmove', onTouchMove);
				// bind a "touchend" event to the viewport
				slider.viewport.bind('touchend', onTouchEnd);
			}
		}

		/**
		 * Event handler for "touchmove"
		 *
		 * @param e (event)
		 *  - DOM event object
		 */
		var onTouchMove = function(e){
			var orig = e.originalEvent;
			// if scrolling on y axis, do not prevent default
			var xMovement = Math.abs(orig.changedTouches[0].pageX - slider.touch.start.x);
			var yMovement = Math.abs(orig.changedTouches[0].pageY - slider.touch.start.y);
			// x axis swipe
			if((xMovement * 3) > yMovement && slider.settings.preventDefaultSwipeX){
				e.preventDefault();
			// y axis swipe
			}else if((yMovement * 3) > xMovement && slider.settings.preventDefaultSwipeY){
				e.preventDefault();
			}
			if(slider.settings.mode != 'fade' && slider.settings.oneToOneTouch){
				var value = 0;
				// if horizontal, drag along x axis
				if(slider.settings.mode == 'horizontal'){
					var change = orig.changedTouches[0].pageX - slider.touch.start.x;
					value = slider.touch.originalPos.left + change;
				// if vertical, drag along y axis
				}else{
					var change = orig.changedTouches[0].pageY - slider.touch.start.y;
					value = slider.touch.originalPos.top + change;
				}
				setPositionProperty(value, 'reset', 0);
			}
		}

		/**
		 * Event handler for "touchend"
		 *
		 * @param e (event)
		 *  - DOM event object
		 */
		var onTouchEnd = function(e){
			slider.viewport.unbind('touchmove', onTouchMove);
			var orig = e.originalEvent;
			var value = 0;
			// record end x, y positions
			slider.touch.end.x = orig.changedTouches[0].pageX;
			slider.touch.end.y = orig.changedTouches[0].pageY;
			// if fade mode, check if absolute x distance clears the threshold
			if(slider.settings.mode == 'fade'){
				var distance = Math.abs(slider.touch.start.x - slider.touch.end.x);
				if(distance >= slider.settings.swipeThreshold){
					slider.touch.start.x > slider.touch.end.x ? el.goToNextSlide() : el.goToPrevSlide();
					el.stopAuto();
				}
			// not fade mode
			}else{
				var distance = 0;
				// calculate distance and el's animate property
				if(slider.settings.mode == 'horizontal'){
					distance = slider.touch.end.x - slider.touch.start.x;
					value = slider.touch.originalPos.left;
				}else{
					distance = slider.touch.end.y - slider.touch.start.y;
					value = slider.touch.originalPos.top;
				}
				// if not infinite loop and first / last slide, do not attempt a slide transition
				if(!slider.settings.infiniteLoop && ((slider.active.index == 0 && distance > 0) || (slider.active.last && distance < 0))){
					setPositionProperty(value, 'reset', 200);
				}else{
					// check if distance clears threshold
					if(Math.abs(distance) >= slider.settings.swipeThreshold){
						distance < 0 ? el.goToNextSlide() : el.goToPrevSlide();
						el.stopAuto();
					}else{
						// el.animate(property, 200);
						setPositionProperty(value, 'reset', 200);
					}
				}
			}
			slider.viewport.unbind('touchend', onTouchEnd);
		}

		/**
		 * Window resize event callback
		 */
		var resizeWindow = function(e){
			// get the new window dimens (again, thank you IE)
			var windowWidthNew = $(window).width();
			var windowHeightNew = $(window).height();
			// make sure that it is a true window resize
			// *we must check this because our dinosaur friend IE fires a window resize event when certain DOM elements
			// are resized. Can you just die already?*
			if(windowWidth != windowWidthNew || windowHeight != windowHeightNew){
				// set the new window dimens
				windowWidth = windowWidthNew;
				windowHeight = windowHeightNew;
				// update all dynamic elements
				el.redrawSlider();
			}
		}

		/**
		 * ===================================================================================
		 * = PUBLIC FUNCTIONS
		 * ===================================================================================
		 */

		/**
		 * Performs slide transition to the specified slide
		 *
		 * @param slideIndex (int)
		 *  - the destination slide's index (zero-based)
		 *
		 * @param direction (string)
		 *  - INTERNAL USE ONLY - the direction of travel ("prev" / "next")
		 */
		el.goToSlide = function(slideIndex, direction){
			// if plugin is currently in motion, ignore request
			if(slider.working || slider.active.index == slideIndex) return;
			// declare that plugin is in motion
			slider.working = true;
			// store the old index
			slider.oldIndex = slider.active.index;
			// if slideIndex is less than zero, set active index to last child (this happens during infinite loop)
			if(slideIndex < 0){
				slider.active.index = getPagerQty() - 1;
			// if slideIndex is greater than children length, set active index to 0 (this happens during infinite loop)
			}else if(slideIndex >= getPagerQty()){
				slider.active.index = 0;
			// set active index to requested slide
			}else{
				slider.active.index = slideIndex;
			}
			// onSlideBefore, onSlideNext, onSlidePrev callbacks
			slider.settings.onSlideBefore(slider.children.eq(slider.active.index), slider.oldIndex, slider.active.index);
			if(direction == 'next'){
				slider.settings.onSlideNext(slider.children.eq(slider.active.index), slider.oldIndex, slider.active.index);
			}else if(direction == 'prev'){
				slider.settings.onSlidePrev(slider.children.eq(slider.active.index), slider.oldIndex, slider.active.index);
			}
			// check if last slide
			slider.active.last = slider.active.index >= getPagerQty() - 1;
			// update the pager with active class
			if(slider.settings.pager) updatePagerActive(slider.active.index);
			// // check for direction control update
			if(slider.settings.controls) updateDirectionControls();
			// if slider is set to mode: "fade"
			if(slider.settings.mode == 'fade'){
				// if adaptiveHeight is true and next height is different from current height, animate to the new height
				if(slider.settings.adaptiveHeight && slider.viewport.height() != getViewportHeight()){
					slider.viewport.animate({height: getViewportHeight()}, slider.settings.adaptiveHeightSpeed);
				}
				// fade out the visible child and reset its z-index value
				slider.children.filter(':visible').fadeOut(slider.settings.speed).css({zIndex: 0});
				// fade in the newly requested slide
				slider.children.eq(slider.active.index).css('zIndex', 51).fadeIn(slider.settings.speed, function(){
					$(this).css('zIndex', 50);
					updateAfterSlideTransition();
				});
			// slider mode is not "fade"
			}else{
				// if adaptiveHeight is true and next height is different from current height, animate to the new height
				if(slider.settings.adaptiveHeight && slider.viewport.height() != getViewportHeight()){
					slider.viewport.animate({height: getViewportHeight()}, slider.settings.adaptiveHeightSpeed);
				}
				var moveBy = 0;
				var position = {left: 0, top: 0};
				// if carousel and not infinite loop
				if(!slider.settings.infiniteLoop && slider.carousel && slider.active.last){
					if(slider.settings.mode == 'horizontal'){
						// get the last child position
						var lastChild = slider.children.eq(slider.children.length - 1);
						position = lastChild.position();
						// calculate the position of the last slide
						moveBy = slider.viewport.width() - lastChild.outerWidth();
					}else{
						// get last showing index position
						var lastShowingIndex = slider.children.length - slider.settings.minSlides;
						position = slider.children.eq(lastShowingIndex).position();
					}
					// horizontal carousel, going previous while on first slide (infiniteLoop mode)
				}else if(slider.carousel && slider.active.last && direction == 'prev'){
					// get the last child position
					var eq = slider.settings.moveSlides == 1 ? slider.settings.maxSlides - getMoveBy() : ((getPagerQty() - 1) * getMoveBy()) - (slider.children.length - slider.settings.maxSlides);
					var lastChild = el.children('.bx-clone').eq(eq);
					position = lastChild.position();
				// if infinite loop and "Next" is clicked on the last slide
				}else if(direction == 'next' && slider.active.index == 0){
					// get the last clone position
					position = el.find('> .bx-clone').eq(slider.settings.maxSlides).position();
					slider.active.last = false;
				// normal non-zero requests
				}else if(slideIndex >= 0){
					var requestEl = slideIndex * getMoveBy();
					position = slider.children.eq(requestEl).position();
				}

				/* If the position doesn't exist
				 * (e.g. if you destroy the slider on a next click),
				 * it doesn't throw an error.
				 */
				if ("undefined" !== typeof(position)) {
					var value = slider.settings.mode == 'horizontal' ? -(position.left - moveBy) : -position.top;
					// plugin values to be animated
					setPositionProperty(value, 'slide', slider.settings.speed);
				}
			}
		}

		/**
		 * Transitions to the next slide in the show
		 */
		el.goToNextSlide = function(){
			// if infiniteLoop is false and last page is showing, disregard call
			if (!slider.settings.infiniteLoop && slider.active.last) return;
			var pagerIndex = parseInt(slider.active.index) + 1;
			el.goToSlide(pagerIndex, 'next');
		}

		/**
		 * Transitions to the prev slide in the show
		 */
		el.goToPrevSlide = function(){
			// if infiniteLoop is false and last page is showing, disregard call
			if (!slider.settings.infiniteLoop && slider.active.index == 0) return;
			var pagerIndex = parseInt(slider.active.index) - 1;
			el.goToSlide(pagerIndex, 'prev');
		}

		/**
		 * Starts the auto show
		 *
		 * @param preventControlUpdate (boolean)
		 *  - if true, auto controls state will not be updated
		 */
		el.startAuto = function(preventControlUpdate){
			// if an interval already exists, disregard call
			if(slider.interval) return;
			// create an interval
			slider.interval = setInterval(function(){
				slider.settings.autoDirection == 'next' ? el.goToNextSlide() : el.goToPrevSlide();
			}, slider.settings.pause);
			// if auto controls are displayed and preventControlUpdate is not true
			if (slider.settings.autoControls && preventControlUpdate != true) updateAutoControls('stop');
		}

		/**
		 * Stops the auto show
		 *
		 * @param preventControlUpdate (boolean)
		 *  - if true, auto controls state will not be updated
		 */
		el.stopAuto = function(preventControlUpdate){
			// if no interval exists, disregard call
			if(!slider.interval) return;
			// clear the interval
			clearInterval(slider.interval);
			slider.interval = null;
			// if auto controls are displayed and preventControlUpdate is not true
			if (slider.settings.autoControls && preventControlUpdate != true) updateAutoControls('start');
		}

		/**
		 * Returns current slide index (zero-based)
		 */
		el.getCurrentSlide = function(){
			return slider.active.index;
		}

		/**
		 * Returns number of slides in show
		 */
		el.getSlideCount = function(){
			return slider.children.length;
		}

		/**
		 * Update all dynamic slider elements
		 */
		el.redrawSlider = function(){
			// resize all children in ratio to new screen size
			slider.children.add(el.find('.bx-clone')).outerWidth(getSlideWidth());
			// adjust the height
			slider.viewport.css('height', getViewportHeight());
			// update the slide position
			if(!slider.settings.ticker) setSlidePosition();
			// if active.last was true before the screen resize, we want
			// to keep it last no matter what screen size we end on
			if (slider.active.last) slider.active.index = getPagerQty() - 1;
			// if the active index (page) no longer exists due to the resize, simply set the index as last
			if (slider.active.index >= getPagerQty()) slider.active.last = true;
			// if a pager is being displayed and a custom pager is not being used, update it
			if(slider.settings.pager && !slider.settings.pagerCustom){
				populatePager();
				updatePagerActive(slider.active.index);
			}
		}

		/**
		 * Destroy the current instance of the slider (revert everything back to original state)
		 */
		el.destroySlider = function(){
			// don't do anything if slider has already been destroyed
			if(!slider.initialized) return;
			slider.initialized = false;
			$('.bx-clone', this).remove();
			slider.children.each(function() {
				$(this).data("origStyle") != undefined ? $(this).attr("style", $(this).data("origStyle")) : $(this).removeAttr('style');
			});
			$(this).data("origStyle") != undefined ? this.attr("style", $(this).data("origStyle")) : $(this).removeAttr('style');
			$(this).unwrap().unwrap();
			if(slider.controls.el) slider.controls.el.remove();
			if(slider.controls.next) slider.controls.next.remove();
			if(slider.controls.prev) slider.controls.prev.remove();
			if(slider.pagerEl) slider.pagerEl.remove();
			$('.bx-caption', this).remove();
			if(slider.controls.autoEl) slider.controls.autoEl.remove();
			clearInterval(slider.interval);
			if(slider.settings.responsive) $(window).unbind('resize', resizeWindow);
		}

		/**
		 * Reload the slider (revert all DOM changes, and re-initialize)
		 */
		el.reloadSlider = function(settings){
			if (settings != undefined) options = settings;
			el.destroySlider();
			init();
		}

		init();

		// returns the current jQuery object
		return this;
	}

})(jQuery);
 // Author: Vincenzo D'Amore <v.damore@gmail.com>

// $Id: head_asset.js 118918 2015-01-14 12:05:10Z calignano $

var AdvManager = function(_window, $)
{
    var pub = this;
    var _p = {};

    _p.window = _window;
    window.advManagerWriteBuffer = '';

    _p.debugging = false; // or true
    _p.globalWrite = null;
    _p.globalWriteCounter = 0;
    
    if (!_p.window.console) {
        _p.window.console = { log: function() {} };
    } else if (!_p.window.console.log) {
        _p.window.console.log = function() {};
    }

    _p.console = _p.window.console;

    if (!_p.debugging)
        _p.console = { log: function() {} };

    _p.callbacks = [];

    var lib = {
        parseInt: function(c) {
            return parseInt(c) || 0;
        }
    };

    _p.searchDOM = function(element, start) {
        var items = [];
        items.push(element);
        var j = 0;
        var item;
        try {
            while (item=items.pop())
            {
                j++;
                if (item.id) {
                    nodeDesc = item.nodeName;
                    nodeDesc = nodeDesc + " "+ item.id;
                    nodeDesc = nodeDesc + " "+ items.length;
                    // _p.console.log(nodeDesc);
                    if (item.id.indexOf(start) != -1)
                        return item;
                }
                for (var key in item.childNodes) {
                    var child = item.childNodes[key];
                    // nodeType (1 = Node.ELEMENT_NODE)
                    if (typeof child != 'undefined' && child.nodeType == 1)
                    {
                        items.push(child);
                    }
                }
                if (item.nodeName == "IFRAME") {
                    // _p.console.log("iframe src: " + item.src);
                    if (!item.src)
                        items.push(item.contentDocument.body);
                }
                // just to avoid infinite loop
                if (j>10000)
                    break;
            }
        } catch (e) {
            _p.console.log(e);
        }
        return null;
    };

    pub.write = function(s) {
        window.advManagerWriteBuffer += s;
    }
    
    pub.resetWriteBuffer = function() {
        window.advManagerWriteBuffer = '';
    }

    pub.resetWrite = function() {
        _p.globalWriteCounter --;
        if (_p.globalWriteCounter <= 0)
            document.write = _p.globalWrite;
    }
    
    pub.overrideGlobalWrite = function() {
        if (!_p.globalWrite)
            _p.globalWrite = document.write;
        _p.globalWriteCounter ++;
    }

    pub.reloadPosition = function(adv_anchor, pos){

        var lastexecutionLabel = 'advManager_lastexecution_'+adv_anchor;

        if (typeof call_populis_adserver != 'undefined') {
            
            var sdw = null;
            if (typeof call_populis_adserver.calladserver == 'function') {
                call_populis_adserver.OAS_adstream = 4;
                call_populis_adserver.enableDocumentWrite = false;
                call_populis_adserver.OAS_listpos = pos;
                sdw = call_populis_adserver.calladserver();
            } else {
                sdw = call_populis_adserver(pos);
            }
        }
        
        if ((!_p.window[lastexecutionLabel]) || ((_p.window[lastexecutionLabel]+3000) < (new Date()).getTime()) ) {
            var height = $('#'+adv_anchor).height();
            googleAdv = _p.searchDOM(document.getElementById(adv_anchor), 'google');
    
            if ((googleAdv == null) && 
                (sdw != null)) {
                
                    $('#'+adv_anchor).height(height);
                    $('#'+adv_anchor).empty();
                    _p.globalWrite = document.write;
                    var html = '';
                    if (false && pos != "Position2") {
                        html = $.writeCapture.sanitize(sdw);
                        $('#'+adv_anchor).html(html);
                    }
                    else 
                    {
                        document.write = pub.write;
                        var match = /src\s*=\s*["']([^"']+)["']/gi.exec(sdw);
                        if (match != null && match[1]) {
                            url = match[1];
                            $.getScript(url, function(data) {
                                OAS_RICH(pos);
                                pub.resetWrite();
                                $('#'+adv_anchor).html(window.advManagerWriteBuffer);
                                pub.resetWriteBuffer();
                            });
                        }
                    }
                    _p.window[lastexecutionLabel] = (new Date()).getTime();
            }
        }

    };

    pub.init = function(advManagerSettings) {
        if (typeof advManagerSettings != "undefined" && advManagerSettings.config) {
            for (var propertyName in advManagerSettings.config) {
                _p[propertyName] = advManagerSettings.config[propertyName];
                // propertyName is what you want
                // you can get the value like this: myObject[propertyName]
             }
            for (var callbackFunction in advManagerSettings.eventsHandled) {
                _p.callbacks[callbackFunction] = advManagerSettings.eventsHandled[callbackFunction];
                // propertyName is what you want
                // you can get the value like this: myObject[propertyName]
             }
        }
    };

    pub.reload = function() {
//        pub.reloadPosition("right-1", "TopRight");
        pub.reloadPosition("campain", "Position2");
    };
    
    return pub;
};

 // Author: Vincenzo D'Amore <v.damore@gmail.com>

// $Id: head_asset.js 118918 2015-01-14 12:05:10Z calignano $

var TrackingManager = function(_window)
{
    var pub = this;
    var _p = {};

    _p.window = _window;

    _p.debugging = false; // or true

    if (!_p.window.console) {
        _p.window.console = { log: function() {} };
    } else if (!_p.window.console.log) {
        _p.window.console.log = function() {};
    }

    _p.console = _p.window.console;

    if (!_p.debugging)
        _p.console = { log: function() {} };

    _p.callbacks = [];

    var lib = {
        parseInt: function(c) {
            return parseInt(c) || 0;
        }
    };

    pub.trackEvent = function(trackurl) {
        try {
            pub.call_audiweb(_p.window.document, 'img');
        } catch (e) { }
        
        if (_p.window._gaq) {
        	if(typeof trackurl != "undefined")
        		_p.window._gaq.push( ['gaGlobal._trackPageview', trackurl], ['gaLocal._trackPageview', trackurl], ['gaOld._trackPageview', trackurl] );
        	else
        		_p.window._gaq.push( ['gaGlobal._trackPageview'], ['gaLocal._trackPageview'], ['gaOld._trackPageview'] );
        }

        if (_p.window._baq) {
	        if(typeof trackurl != "undefined")
	        	_p.window._baq.push(['trackPageView', trackurl]);
            else
            	_p.window._baq.push(['trackPageView']);
        }


        if (typeof COMSCORE != "undefined")
            COMSCORE.beacon({ c1: "2", c2: "6035239" });
    };
    
    pub.init = function(trackingManagerSettings) {
        if (typeof trackingManagerSettings != "undefined" && trackingManagerSettings.config) {
            for (var propertyName in trackingManagerSettings.config) {
                _p[propertyName] = trackingManagerSettings.config[propertyName];
                // propertyName is what you want
                // you can get the value like this: myObject[propertyName]
             }
            for (var callbackFunction in trackingManagerSettings.eventsHandled) {
                _p.callbacks[callbackFunction] = trackingManagerSettings.eventsHandled[callbackFunction];
                // propertyName is what you want
                // you can get the value like this: myObject[propertyName]
             }
        }
    };

    pub.call_audiweb = function (d,t,url) {
        var idname = 'call_audiweb';
        var rnd = Math.floor((Math.random() * 10000000000000) + 1);
        var oldi = d.getElementById(idname);
        var s = d.getElementsByTagName('body');
        if (oldi != null) {
         oldi.parentNode.removeChild(oldi);
        }
        var i = d.createElement(t);
        
        if(typeof url == "undefined")
        	url = _p.window.location.href;
        
        var stat_img_url = 'http://secure-it.imrworldwide.com/cgi-bin/m?rnd='+rnd+'&ci=populis-it&cg=0&si='+url.replace(/:/, "%3A")+'%26refresh_ce-awe';
        i.src = stat_img_url;
        i.id = idname;
        i.alt = '';
        i.border = 0;
        i.width = 1;
        i.height = 1;
        if (s.length > 0)
            s[0].appendChild(i);
    } 
    
    return pub;
};

/*
hinclude.js -- HTML Includes (version 0.9.5)

Copyright (c) 2005-2012 Mark Nottingham <mnot@mnot.net>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

------------------------------------------------------------------------------

See http://mnot.github.com/hinclude/ for documentation.
*/

/*jslint indent: 2, browser: true, vars: true, nomen: true */
/*global alert, ActiveXObject */

var hinclude;

(function () {

  "use strict";

  hinclude = {
    classprefix: "include_",

    set_content_async: function (element, req) {
      if (req.readyState === 4) {
        if (req.status === 200 || req.status === 304) {
          element.innerHTML = req.responseText;
        }
        element.className = hinclude.classprefix + req.status;
      }
    },

    buffer: [],
    set_content_buffered: function (element, req) {
      if (req.readyState === 4) {
        hinclude.buffer.push([element, req]);
        hinclude.outstanding -= 1;
        if (hinclude.outstanding === 0) {
          hinclude.show_buffered_content();
        }
      }
    },

    show_buffered_content: function () {
      while (hinclude.buffer.length > 0) {
        var include = hinclude.buffer.pop();
        if (include[1].status === 200 || include[1].status === 304) {
          include[0].innerHTML = include[1].responseText;
        }
        include[0].className = hinclude.classprefix + include[1].status;
      }
    },

    outstanding: 0,
    includes: [],
    run: function () {
      var i = 0;
      var mode = this.get_meta("include_mode", "buffered");
      var callback = function (element, req) {};
      this.includes = document.getElementsByTagName("hx:include");
      if (this.includes.length === 0) { // remove ns for IE
        this.includes = document.getElementsByTagName("include");
      }
      if (mode === "async") {
        callback = this.set_content_async;
      } else if (mode === "buffered") {
        callback = this.set_content_buffered;
        var timeout = this.get_meta("include_timeout", 2.5) * 1000;
        setTimeout(hinclude.show_buffered_content, timeout);
      }

      for (i; i < this.includes.length; i += 1) {
        this.include(this.includes[i], this.includes[i].getAttribute("src"), this.includes[i].getAttribute("media"), callback);
      }
    },

    include: function (element, url, media, incl_cb) {
      if (media && window.matchMedia && !window.matchMedia(media).matches) {
        return;
      }
      var scheme = url.substring(0, url.indexOf(":"));
      if (scheme.toLowerCase() === "data") { // just text/plain for now
        var data = decodeURIComponent(url.substring(url.indexOf(",") + 1, url.length));
        element.innerHTML = data;
      } else {
        var req = false;
        if (window.XMLHttpRequest) {
          try {
            req = new XMLHttpRequest();
          } catch (e1) {
            req = false;
          }
        } else if (window.ActiveXObject) {
          try {
            req = new ActiveXObject("Microsoft.XMLHTTP");
          } catch (e2) {
            req = false;
          }
        }
        if (req) {
          this.outstanding += 1;
          req.onreadystatechange = function () {
            incl_cb(element, req);
          };
          try {
            req.open("GET", url, true);
            req.send("");
          } catch (e3) {
            this.outstanding -= 1;
            alert("Include error: " + url + " (" + e3 + ")");
          }
        }
      }
    },

    refresh: function (element_id) {
      var i = 0;
      var mode = this.get_meta("include_mode", "buffered");
      var callback = function (element, req) {};
      callback = this.set_content_buffered;
      for (i; i < this.includes.length; i += 1) {
        if (this.includes[i].getAttribute("id") === element_id) {
          this.include(this.includes[i], this.includes[i].getAttribute("src"), callback);
        }
      }
    },

    get_meta: function (name, value_default) {
      var m = 0;
      var metas = document.getElementsByTagName("meta");
      for (m; m < metas.length; m += 1) {
        var meta_name = metas[m].getAttribute("name");
        if (meta_name === name) {
          return metas[m].getAttribute("content");
        }
      }
      return value_default;
    },

    /*
     * (c)2006 Dean Edwards/Matthias Miller/John Resig
     * Special thanks to Dan Webb's domready.js Prototype extension
     * and Simon Willison's addLoadEvent
     *
     * For more info, see:
     * http://dean.edwards.name/weblog/2006/06/again/
     *
     * Thrown together by Jesse Skinner (http://www.thefutureoftheweb.com/)
     */
    addDOMLoadEvent: function (func) {
      if (!window.__load_events) {
        var init = function () {
          var i = 0;
          // quit if this function has already been called
          if (hinclude.addDOMLoadEvent.done) {return; }
          hinclude.addDOMLoadEvent.done = true;
          if (window.__load_timer) {
            clearInterval(window.__load_timer);
            window.__load_timer = null;
          }
          for (i; i < window.__load_events.length; i += 1) {
            window.__load_events[i]();
          }
          window.__load_events = null;
          // clean up the __ie_onload event
          /*@cc_on
          document.getElementById("__ie_onload").onreadystatechange = "";
          @*/
        };
        // for Mozilla/Opera9
        if (document.addEventListener) {
          document.addEventListener("DOMContentLoaded", init, false);
        }
        // for Internet Explorer
        /*@cc_on
        document.write(
          "<scr"
            + "ipt id=__ie_onload defer src=javascript:void(0)><\/scr"
            + "ipt>"
        );
        var script = document.getElementById("__ie_onload");
        script.onreadystatechange = function () {
          if (this.readyState === "complete") {
            init(); // call the onload handler
          }
        };
        @*/
        // for Safari
        if (/WebKit/i.test(navigator.userAgent)) { // sniff
          window.__load_timer = setInterval(function () {
            if (/loaded|complete/.test(document.readyState)) {
              init();
            }
          }, 10);
        }
        // for other browsers
        window.onload = init;
        window.__load_events = [];
      }
      window.__load_events.push(func);
    }
  };

//  hinclude.addDOMLoadEvent(function () { hinclude.run(); });
}());
window.ismobile = (function(a,b){return (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4)))})(navigator.userAgent||navigator.vendor||window.opera);

var socialStickyBarManager = function() {

    var socialbar = $('.social-bar'),
    socialbarFixedClass = "social-bar-fixed",

    livebar = $('.live-bar:visible'),
    livebarFixedClass = "live-bar-fixed",
    liverecap = $('.live-recap'),
    liverecapScroll = $('.live-recap-scroll');

    //  console.log("height",window.mainHeight);
    
    /* Check in central page sticky-div */
    if ( socialbar.length ){
        var socialbarPosition = socialbar.offset().top;
    }
    if ( livebar.length ){
        var livebarPosition = livebar.offset().top;
    }
        
    if ( (livebar.length && livebar.html() != '')  || socialbar.length ) {
    
        // add control event on any scroll of window!
        $.event.add(window, "scroll", function() {
    
            var currentPosition = $(window).scrollTop();
    
            /* Main Content */
            if ( livebar.length > 0) {
                if ( currentPosition > livebarPosition ) {
                    //livebar.addClass(livebarFixedClass);
                    if(liverecapScroll.hasClass('newevent')){
                        liverecap.hide();
                        liverecapScroll.show();
                    }
    
    
                    //$('.live-listing').css({paddingTop: '60px'});
                }
                else {
                    //livebar.removeClass(livebarFixedClass);
                    liverecapScroll.hide();
                    liverecap.show();
    
                    //$('.live-listing').css({paddingTop: '0px'});
                }
    
            }else if ( socialbar.length > 0 ) {
                if ( currentPosition > socialbarPosition ) {
                    socialbar.addClass(socialbarFixedClass);
                }
                else socialbar.removeClass(socialbarFixedClass);
            }
    
        });
    }
    
}


var asideStickyBarManager = function () {
	
	if (window.ismobile)
		return;

    var aside = $('.sticky-aside'),
        asideFixedClass = "aside-fixed",
        sidebar = $("#sidebar");
    
    /* Check sidebar div */
    /*
    if ( window.mainHeight > window.sideHeight ) { 
        $('#sidebar').css('height', window.mainHeight );
    }
    */

    if ( aside.length && !window.ismobile ) {

        // add control event on any scroll of window!
        $.event.add(window, "scroll", function() {

            var currentPosition = $(window).scrollTop();

            /* Sidebar */
            if ( aside.length > 0 ) {

                var footerPosition = $('#footer').offset().top,
                asideHeigth = aside.height(),
                asideFinish = footerPosition - asideHeigth,
                sidebarFullFinish = sidebar.offset().top + sidebar.height() - asideHeigth;
                sidebarFinish = sidebar.offset().top + sidebar.height();

            	window.mainHeight = $("#container").height();
                window.sideHeight = $("#sidebar").height();
                
                // console.log('currentPosition: '+ currentPosition + " asideFinish: "+ asideFinish);
                if ( window.mainHeight > window.sideHeight  ) {
                    if (!aside.hasClass(asideFixedClass) && currentPosition > sidebarFullFinish ) {
                        aside.addClass(asideFixedClass);
                    } else if (aside.hasClass(asideFixedClass) && currentPosition < sidebarFinish ) {
                        aside.removeClass(asideFixedClass);
                    }
                    
                    if (aside.is(":visible") && currentPosition > asideFinish) {
                        aside.hide();
                    } else if (!aside.is(":visible") && currentPosition < asideFinish) {
                        aside.show();
                    }
                }
                
            }
        });
    }
}


var stickyBarHandler = function () {
	if (!window.ismobile) {
	    setTimeout(function(){
	        socialStickyBarManager();
	        asideStickyBarManager();
	    }, 5000);
	}
}

if (window.blogoLoaderInstance) {
    window.blogoLoaderInstance.addOnLoadQueue({ 
     // Mandatory parameter
        'execute': stickyBarHandler, 
     // Optional parameter, set the priority order, default priority is 999999
        'priority': 100,
     // Optional parameter, default will be always executed on load
        'context' : ['post', 'video', 'gallery']
    });
}

/*	
 * jQuery mmenu v4.3.4
 * @requires jQuery 1.7.0 or later
 *
 * mmenu.frebsite.nl
 *	
 * Copyright (c) Fred Heusschen
 * www.frebsite.nl
 *
 * Dual licensed under the MIT license:
 * http://en.wikipedia.org/wiki/MIT_License
 */
!function(e){function s(s,n,t){if(t){if("object"!=typeof s&&(s={}),"boolean"!=typeof s.isMenu){var i=t.children();s.isMenu=1==i.length&&i.is(n.panelNodetype)}return s}s=e.extend(!0,{},e[a].defaults,s),("top"==s.position||"bottom"==s.position)&&("back"==s.zposition||"next"==s.zposition)&&(e[a].deprecated('Using position "'+s.position+'" in combination with zposition "'+s.zposition+'"','zposition "front"'),s.zposition="front");for(var o=["position","zposition","modal","moveBackground"],l=0,d=o.length;d>l;l++)"undefined"!=typeof s[o[l]]&&(e[a].deprecated('The option "'+o[l]+'"',"offCanvas."+o[l]),s.offCanvas=s.offCanvas||{},s.offCanvas[o[l]]=s[o[l]]);return s}function n(s){s=e.extend(!0,{},e[a].configuration,s);for(var n=["panel","list","selected","label","spacer"],t=0,i=n.length;i>t;t++)"undefined"!=typeof s[n[t]+"Class"]&&(e[a].deprecated('The configuration option "'+n[t]+'Class"',"classNames."+n[t]),s.classNames[n[t]]=s[n[t]+"Class"]);if("undefined"!=typeof s.counterClass&&(e[a].deprecated('The configuration option "counterClass"',"classNames.counters.counter"),s.classNames.counters=s.classNames.counters||{},s.classNames.counters.counter=s.counterClass),"undefined"!=typeof s.collapsedClass&&(e[a].deprecated('The configuration option "collapsedClass"',"classNames.labels.collapsed"),s.classNames.labels=s.classNames.labels||{},s.classNames.labels.collapsed=s.collapsedClass),"undefined"!=typeof s.header)for(var n=["panelHeader","panelNext","panelPrev"],t=0,i=n.length;i>t;t++)"undefined"!=typeof s.header[n[t]+"Class"]&&(e[a].deprecated('The configuration option "header.'+n[t]+'Class"',"classNames.header."+n[t]),s.classNames.header=s.classNames.header||{},s.classNames.header[n[t]]=s.header[n[t]+"Class"]);for(var n=["pageNodetype","pageSelector","menuWrapperSelector","menuInjectMethod"],t=0,i=n.length;i>t;t++)"undefined"!=typeof s[n[t]]&&(e[a].deprecated('The configuration option "'+n[t]+'"',"offCanvas."+n[t]),s.offCanvas=s.offCanvas||{},s.offCanvas[n[t]]=s[n[t]]);return s}function t(){u=!0,c.$wndw=e(window),c.$html=e("html"),c.$body=e("body"),e.each([l,d,r],function(e,s){s.add=function(e){e=e.split(" ");for(var n in e)s[e[n]]=s.mm(e[n])}}),l.mm=function(e){return"mm-"+e},l.add("wrapper menu ismenu inline panel list subtitle selected label spacer current highest hidden opened subopened subopen fullsubopen subclose"),l.umm=function(e){return"mm-"==e.slice(0,3)&&(e=e.slice(3)),e},d.mm=function(e){return"mm-"+e},d.add("parent"),r.mm=function(e){return e+".mm"},r.add("toggle open close setSelected transitionend webkitTransitionEnd mousedown mouseup touchstart touchmove touchend scroll resize click keydown keyup"),e[a]._c=l,e[a]._d=d,e[a]._e=r,e[a].glbl=c}function i(s,n){if(s.hasClass(l.current))return!1;var t=e("."+l.panel,n),i=t.filter("."+l.current);return t.removeClass(l.highest).removeClass(l.current).not(s).not(i).addClass(l.hidden),s.hasClass(l.opened)?i.addClass(l.highest).removeClass(l.opened).removeClass(l.subopened):(s.addClass(l.highest),i.addClass(l.subopened)),s.removeClass(l.hidden).addClass(l.current),setTimeout(function(){s.removeClass(l.subopened).addClass(l.opened)},25),"open"}var a="mmenu",o="4.3.4";if(!e[a]){var l={},d={},r={},u=!1,c={$wndw:null,$html:null,$body:null};e[a]=function(e,s,n){return this.$menu=e,this.opts=s,this.conf=n,this.vars={},this._init(),this},e[a].uniqueId=0,e[a].prototype={_init:function(){if(this.opts=s(this.opts,this.conf,this.$menu),this._initMenu(),this._initPanels(),this._initLinks(),this._bindCustomEvents(),e[a].addons)for(var n=0;n<e[a].addons.length;n++)"function"==typeof this["_addon_"+e[a].addons[n]]&&this["_addon_"+e[a].addons[n]]()},_bindCustomEvents:function(){var s=this,n=this.$menu.find(this.opts.isMenu&&!this.opts.slidingSubmenus?"ul, ol":"."+l.panel);n.off(r.toggle+" "+r.open+" "+r.close).on(r.toggle+" "+r.open+" "+r.close,function(e){e.stopPropagation()}),this.opts.slidingSubmenus?n.on(r.open,function(){return i(e(this),s.$menu)}):n.on(r.toggle,function(){var s=e(this);return s.triggerHandler(s.parent().hasClass(l.opened)?r.close:r.open)}).on(r.open,function(){return e(this).parent().addClass(l.opened),"open"}).on(r.close,function(){return e(this).parent().removeClass(l.opened),"close"})},_initMenu:function(){this.opts.offCanvas&&this.conf.clone&&(this.$menu=this.$menu.clone(!0),this.$menu.add(this.$menu.find("*")).filter("[id]").each(function(){e(this).attr("id",l.mm(e(this).attr("id")))})),this.$menu.contents().each(function(){3==e(this)[0].nodeType&&e(this).remove()}),this.$menu.parent().addClass(l.wrapper);var s=[l.menu];s.push(l.mm(this.opts.slidingSubmenus?"horizontal":"vertical")),this.opts.classes&&s.push(this.opts.classes),this.opts.isMenu&&s.push(l.ismenu),this.$menu.addClass(s.join(" "))},_initPanels:function(){var s=this;this.__refactorClass(e("."+this.conf.classNames.list,this.$menu),this.conf.classNames.list,"list"),this.opts.isMenu&&e("ul, ol",this.$menu).not(".mm-nolist").addClass(l.list);var n=e("."+l.list+" > li",this.$menu);this.__refactorClass(n,this.conf.classNames.selected,"selected"),this.__refactorClass(n,this.conf.classNames.label,"label"),this.__refactorClass(n,this.conf.classNames.spacer,"spacer"),n.off(r.setSelected).on(r.setSelected,function(s,t){s.stopPropagation(),n.removeClass(l.selected),"boolean"!=typeof t&&(t=!0),t&&e(this).addClass(l.selected)}),this.__refactorClass(e("."+this.conf.classNames.panel,this.$menu),this.conf.classNames.panel,"panel"),this.$menu.children().filter(this.conf.panelNodetype).add(this.$menu.find("."+l.list).children().children().filter(this.conf.panelNodetype)).addClass(l.panel);var t=e("."+l.panel,this.$menu);t.each(function(){var n=e(this),t=n.attr("id")||s.__getUniqueId();n.attr("id",t)}),t.find("."+l.panel).each(function(){var n=e(this),t=n.is("ul, ol")?n:n.find("ul ,ol").first(),i=n.parent(),a=i.find("> a, > span"),o=i.closest("."+l.panel);if(n.data(d.parent,i),i.parent().is("."+l.list)){var r=e('<a class="'+l.subopen+'" href="#'+n.attr("id")+'" />').insertBefore(a);a.is("a")||r.addClass(l.fullsubopen),s.opts.slidingSubmenus&&t.prepend('<li class="'+l.subtitle+'"><a class="'+l.subclose+'" href="#'+o.attr("id")+'">'+a.text()+"</a></li>")}});var i=this.opts.slidingSubmenus?r.open:r.toggle;if(t.each(function(){var n=e(this),t=n.attr("id");e('a[href="#'+t+'"]',s.$menu).off(r.click).on(r.click,function(e){e.preventDefault(),n.trigger(i)})}),this.opts.slidingSubmenus){var a=e("."+l.list+" > li."+l.selected,this.$menu);a.parents("li").removeClass(l.selected).end().add(a.parents("li")).each(function(){var s=e(this),n=s.find("> ."+l.panel);n.length&&(s.parents("."+l.panel).addClass(l.subopened),n.addClass(l.opened))}).closest("."+l.panel).addClass(l.opened).parents("."+l.panel).addClass(l.subopened)}else{var a=e("li."+l.selected,this.$menu);a.parents("li").removeClass(l.selected).end().add(a.parents("li")).addClass(l.opened)}var o=t.filter("."+l.opened);o.length||(o=t.first()),o.addClass(l.opened).last().addClass(l.current),this.opts.slidingSubmenus&&t.not(o.last()).addClass(l.hidden).end().find("."+l.panel).appendTo(this.$menu)},_initLinks:function(){var s=this;e("."+l.list+" > li > a",this.$menu).not("."+l.subopen).not("."+l.subclose).not('[rel="external"]').not('[target="_blank"]').off(r.click).on(r.click,function(n){var t=e(this),i=t.attr("href");s.__valueOrFn(s.opts.onClick.setSelected,t)&&t.parent().trigger(r.setSelected);var a=s.__valueOrFn(s.opts.onClick.preventDefault,t,"#"==i.slice(0,1));a&&n.preventDefault(),s.__valueOrFn(s.opts.onClick.blockUI,t,!a)&&c.$html.addClass(l.blocking),s.__valueOrFn(s.opts.onClick.close,t,a)&&s.$menu.triggerHandler(r.close)})},_update:function(e){if(this.updates||(this.updates=[]),"function"==typeof e)this.updates.push(e);else for(var s=0,n=this.updates.length;n>s;s++)this.updates[s].call(this,e)},__valueOrFn:function(e,s,n){return"function"==typeof e?e.call(s[0]):"undefined"==typeof e&&"undefined"!=typeof n?n:e},__refactorClass:function(e,s,n){e.filter("."+s).removeClass(s).addClass(l[n])},__transitionend:function(e,s,n){var t=!1,i=function(){t||s.call(e[0]),t=!0};e.one(r.transitionend,i),e.one(r.webkitTransitionEnd,i),setTimeout(i,1.1*n)},__getUniqueId:function(){return l.mm(e[a].uniqueId++)}},e.fn[a]=function(i,o){return u||t(),i=s(i,o),o=n(o),this.each(function(){var s=e(this);s.data(a)||s.data(a,new e[a](s,i,o))})},e[a].version=o,e[a].defaults={classes:"",slidingSubmenus:!0,onClick:{setSelected:!0}},e[a].configuration={panelNodetype:"ul, ol, div",transitionDuration:400,classNames:{panel:"Panle",list:"List",selected:"Selected",label:"Label",spacer:"Spacer"}},function(){var s=window.document,n=window.navigator.userAgent,t="ontouchstart"in s,i="WebkitOverflowScrolling"in s.documentElement.style,o=function(){return n.indexOf("Android")>=0?2.4>parseFloat(n.slice(n.indexOf("Android")+8)):!1}();e[a].support={touch:t,oldAndroidBrowser:o,overflowscrolling:function(){return t?i?!0:o?!1:!0:!0}()}}(),e[a].debug=function(){},e[a].deprecated=function(e,s){"undefined"!=typeof console&&"undefined"!=typeof console.warn&&console.warn("MMENU: "+e+" is deprecated, use "+s+" instead.")}}}(jQuery);
/*	
 * jQuery mmenu offCanvas addon
 * mmenu.frebsite.nl
 *	
 * Copyright (c) Fred Heusschen
 * www.frebsite.nl
 */
!function(e){function o(e){return e}function t(e){return"string"!=typeof e.pageSelector&&(e.pageSelector="> "+e.pageNodetype),e}function n(){d=!0,s=e[r]._c,i=e[r]._d,a=e[r]._e,s.add("offcanvas modal background opening blocker page"),i.add("style"),a.add("opening opened closing closed setPage"),p=e[r].glbl,p.$allMenus=(p.$allMenus||e()).add(this.$menu),p.$wndw.on(a.keydown,function(e){return p.$html.hasClass(s.opened)&&9==e.keyCode?(e.preventDefault(),!1):void 0});var o=0;p.$wndw.on(a.resize,function(e,t){if(t||p.$html.hasClass(s.opened)){var n=p.$wndw.height();(t||n!=o)&&(o=n,p.$page.css("minHeight",n))}})}var s,i,a,p,r="mmenu",l="offCanvas",d=!1;e[r].prototype["_addon_"+l]=function(){if(!this.opts[l])return this;d||n(),this.opts[l]=o(this.opts[l]),this.conf[l]=t(this.conf[l]),"boolean"!=typeof this.vars.opened&&(this.vars.opened=!1);var e=this.opts[l],i=this.conf[l],a=[s.offcanvas];"left"!=e.position&&a.push(s.mm(e.position)),"back"!=e.zposition&&a.push(s.mm(e.zposition)),this.$menu.addClass(a.join(" ")).parent().removeClass(s.wrapper),this[l+"_initPage"](p.$page),this[l+"_initBlocker"](),this[l+"_initOpenClose"](),this[l+"_bindCustomEvents"](),this.$menu[i.menuInjectMethod+"To"](i.menuWrapperSelector)},e[r].addons=e[r].addons||[],e[r].addons.push(l),e[r].defaults[l]={position:"left",zposition:"back",modal:!1,moveBackground:!0},e[r].configuration[l]={pageNodetype:"div",pageSelector:null,menuWrapperSelector:"body",menuInjectMethod:"prepend"},e[r].prototype.open=function(){if(this.vars.opened)return!1;var e=this;return this._openSetup(),setTimeout(function(){e._openFinish()},25),"open"},e[r].prototype._openSetup=function(){p.$allMenus.not(this.$menu).trigger(a.close),p.$page.data(i.style,p.$page.attr("style")||""),p.$wndw.trigger(a.resize,[!0]);var e=[s.opened];this.opts[l].modal&&e.push(s.modal),this.opts[l].moveBackground&&e.push(s.background),"left"!=this.opts[l].position&&e.push(s.mm(this.opts[l].position)),"back"!=this.opts[l].zposition&&e.push(s.mm(this.opts[l].zposition)),this.opts.classes&&e.push(this.opts.classes),p.$html.addClass(e.join(" ")),this.$menu.addClass(s.current+" "+s.opened)},e[r].prototype._openFinish=function(){var e=this;this.__transitionend(p.$page,function(){e.$menu.trigger(a.opened)},this.conf.transitionDuration),this.vars.opened=!0,p.$html.addClass(s.opening),this.$menu.trigger(a.opening)},e[r].prototype.close=function(){if(!this.vars.opened)return!1;var e=this;return this.__transitionend(p.$page,function(){e.$menu.removeClass(s.current).removeClass(s.opened),p.$html.removeClass(s.opened).removeClass(s.modal).removeClass(s.background).removeClass(s.mm(e.opts[l].position)).removeClass(s.mm(e.opts[l].zposition)),e.opts.classes&&p.$html.removeClass(e.opts.classes),p.$page.attr("style",p.$page.data(i.style)),e.vars.opened=!1,e.$menu.trigger(a.closed)},this.conf.transitionDuration),p.$html.removeClass(s.opening),this.$menu.trigger(a.closing),"close"},e[r].prototype[l+"_initBlocker"]=function(){var o=this;p.$blck||(p.$blck=e('<div id="'+s.blocker+'" />').appendTo(p.$body)),p.$blck.off(a.touchstart).on(a.touchstart,function(e){e.preventDefault(),e.stopPropagation(),p.$blck.trigger(a.mousedown)}).on(a.mousedown,function(e){e.preventDefault(),p.$html.hasClass(s.modal)||o.close()})},e[r].prototype[l+"_initPage"]=function(o){o||(o=e(this.conf[l].pageSelector,p.$body),o.length>1&&(e[r].debug("Multiple nodes found for the page-node, all nodes are wrapped in one <"+this.conf[l].pageNodetype+">."),o=o.wrapAll("<"+this.conf[l].pageNodetype+" />").parent())),o.addClass(s.page),p.$page=o},e[r].prototype[l+"_initOpenClose"]=function(){var o=this,t=this.$menu.attr("id");t&&t.length&&(this.conf.clone&&(t=s.umm(t)),e('a[href="#'+t+'"]').off(a.click).on(a.click,function(e){e.preventDefault(),o.open()}));var t=p.$page.attr("id");t&&t.length&&e('a[href="#'+t+'"]').on(a.click,function(e){e.preventDefault(),o.close()})},e[r].prototype[l+"_bindCustomEvents"]=function(){var e=this,o=a.open+" "+a.opening+" "+a.opened+" "+a.close+" "+a.closing+" "+a.closed+" "+a.setPage;this.$menu.off(o).on(o,function(e){e.stopPropagation()}),this.$menu.on(a.open,function(){e.open()}).on(a.close,function(){e.close()}).on(a.setPage,function(o,t){e[l+"_initPage"](t),e[l+"_initOpenClose"]()})}}(jQuery);


/*!
 * imagesLoaded PACKAGED v3.0.4
 * $Id: head_asset.js 118918 2015-01-14 12:05:10Z calignano $
 */
(function(){function e(){}function t(e,t){for(var n=e.length;n--;)if(e[n].listener===t)return n;return-1}function n(e){return function(){return this[e].apply(this,arguments)}}var i=e.prototype;i.getListeners=function(e){var t,n,i=this._getEvents();if("object"==typeof e){t={};for(n in i)i.hasOwnProperty(n)&&e.test(n)&&(t[n]=i[n])}else t=i[e]||(i[e]=[]);return t},i.flattenListeners=function(e){var t,n=[];for(t=0;e.length>t;t+=1)n.push(e[t].listener);return n},i.getListenersAsObject=function(e){var t,n=this.getListeners(e);return n instanceof Array&&(t={},t[e]=n),t||n},i.addListener=function(e,n){var i,r=this.getListenersAsObject(e),o="object"==typeof n;for(i in r)r.hasOwnProperty(i)&&-1===t(r[i],n)&&r[i].push(o?n:{listener:n,once:!1});return this},i.on=n("addListener"),i.addOnceListener=function(e,t){return this.addListener(e,{listener:t,once:!0})},i.once=n("addOnceListener"),i.defineEvent=function(e){return this.getListeners(e),this},i.defineEvents=function(e){for(var t=0;e.length>t;t+=1)this.defineEvent(e[t]);return this},i.removeListener=function(e,n){var i,r,o=this.getListenersAsObject(e);for(r in o)o.hasOwnProperty(r)&&(i=t(o[r],n),-1!==i&&o[r].splice(i,1));return this},i.off=n("removeListener"),i.addListeners=function(e,t){return this.manipulateListeners(!1,e,t)},i.removeListeners=function(e,t){return this.manipulateListeners(!0,e,t)},i.manipulateListeners=function(e,t,n){var i,r,o=e?this.removeListener:this.addListener,s=e?this.removeListeners:this.addListeners;if("object"!=typeof t||t instanceof RegExp)for(i=n.length;i--;)o.call(this,t,n[i]);else for(i in t)t.hasOwnProperty(i)&&(r=t[i])&&("function"==typeof r?o.call(this,i,r):s.call(this,i,r));return this},i.removeEvent=function(e){var t,n=typeof e,i=this._getEvents();if("string"===n)delete i[e];else if("object"===n)for(t in i)i.hasOwnProperty(t)&&e.test(t)&&delete i[t];else delete this._events;return this},i.removeAllListeners=n("removeEvent"),i.emitEvent=function(e,t){var n,i,r,o,s=this.getListenersAsObject(e);for(r in s)if(s.hasOwnProperty(r))for(i=s[r].length;i--;)n=s[r][i],n.once===!0&&this.removeListener(e,n.listener),o=n.listener.apply(this,t||[]),o===this._getOnceReturnValue()&&this.removeListener(e,n.listener);return this},i.trigger=n("emitEvent"),i.emit=function(e){var t=Array.prototype.slice.call(arguments,1);return this.emitEvent(e,t)},i.setOnceReturnValue=function(e){return this._onceReturnValue=e,this},i._getOnceReturnValue=function(){return this.hasOwnProperty("_onceReturnValue")?this._onceReturnValue:!0},i._getEvents=function(){return this._events||(this._events={})},"function"==typeof define&&define.amd?define("eventEmitter/EventEmitter",[],function(){return e}):"object"==typeof module&&module.exports?module.exports=e:this.EventEmitter=e}).call(this),function(e){var t=document.documentElement,n=function(){};t.addEventListener?n=function(e,t,n){e.addEventListener(t,n,!1)}:t.attachEvent&&(n=function(t,n,i){t[n+i]=i.handleEvent?function(){var t=e.event;t.target=t.target||t.srcElement,i.handleEvent.call(i,t)}:function(){var n=e.event;n.target=n.target||n.srcElement,i.call(t,n)},t.attachEvent("on"+n,t[n+i])});var i=function(){};t.removeEventListener?i=function(e,t,n){e.removeEventListener(t,n,!1)}:t.detachEvent&&(i=function(e,t,n){e.detachEvent("on"+t,e[t+n]);try{delete e[t+n]}catch(i){e[t+n]=void 0}});var r={bind:n,unbind:i};"function"==typeof define&&define.amd?define("eventie/eventie",r):e.eventie=r}(this),function(e){function t(e,t){for(var n in t)e[n]=t[n];return e}function n(e){return"[object Array]"===c.call(e)}function i(e){var t=[];if(n(e))t=e;else if("number"==typeof e.length)for(var i=0,r=e.length;r>i;i++)t.push(e[i]);else t.push(e);return t}function r(e,n){function r(e,n,s){if(!(this instanceof r))return new r(e,n);"string"==typeof e&&(e=document.querySelectorAll(e)),this.elements=i(e),this.options=t({},this.options),"function"==typeof n?s=n:t(this.options,n),s&&this.on("always",s),this.getImages(),o&&(this.jqDeferred=new o.Deferred);var a=this;setTimeout(function(){a.check()})}function c(e){this.img=e}r.prototype=new e,r.prototype.options={},r.prototype.getImages=function(){this.images=[];for(var e=0,t=this.elements.length;t>e;e++){var n=this.elements[e];"IMG"===n.nodeName&&this.addImage(n);for(var i=n.querySelectorAll("img"),r=0,o=i.length;o>r;r++){var s=i[r];this.addImage(s)}}},r.prototype.addImage=function(e){var t=new c(e);this.images.push(t)},r.prototype.check=function(){function e(e,r){return t.options.debug&&a&&s.log("confirm",e,r),t.progress(e),n++,n===i&&t.complete(),!0}var t=this,n=0,i=this.images.length;if(this.hasAnyBroken=!1,!i)return this.complete(),void 0;for(var r=0;i>r;r++){var o=this.images[r];o.on("confirm",e),o.check()}},r.prototype.progress=function(e){this.hasAnyBroken=this.hasAnyBroken||!e.isLoaded;var t=this;setTimeout(function(){t.emit("progress",t,e),t.jqDeferred&&t.jqDeferred.notify(t,e)})},r.prototype.complete=function(){var e=this.hasAnyBroken?"fail":"done";this.isComplete=!0;var t=this;setTimeout(function(){if(t.emit(e,t),t.emit("always",t),t.jqDeferred){var n=t.hasAnyBroken?"reject":"resolve";t.jqDeferred[n](t)}})},o&&(o.fn.imagesLoaded=function(e,t){var n=new r(this,e,t);return n.jqDeferred.promise(o(this))});var f={};return c.prototype=new e,c.prototype.check=function(){var e=f[this.img.src];if(e)return this.useCached(e),void 0;if(f[this.img.src]=this,this.img.complete&&void 0!==this.img.naturalWidth)return this.confirm(0!==this.img.naturalWidth,"naturalWidth"),void 0;var t=this.proxyImage=new Image;n.bind(t,"load",this),n.bind(t,"error",this),t.src=this.img.src},c.prototype.useCached=function(e){if(e.isConfirmed)this.confirm(e.isLoaded,"cached was confirmed");else{var t=this;e.on("confirm",function(e){return t.confirm(e.isLoaded,"cache emitted confirmed"),!0})}},c.prototype.confirm=function(e,t){this.isConfirmed=!0,this.isLoaded=e,this.emit("confirm",this,t)},c.prototype.handleEvent=function(e){var t="on"+e.type;this[t]&&this[t](e)},c.prototype.onload=function(){this.confirm(!0,"onload"),this.unbindProxyEvents()},c.prototype.onerror=function(){this.confirm(!1,"onerror"),this.unbindProxyEvents()},c.prototype.unbindProxyEvents=function(){n.unbind(this.proxyImage,"load",this),n.unbind(this.proxyImage,"error",this)},r}var o=e.jQuery,s=e.console,a=s!==void 0,c=Object.prototype.toString;"function"==typeof define&&define.amd?define(["eventEmitter/EventEmitter","eventie/eventie"],r):e.imagesLoaded=r(e.EventEmitter,e.eventie)}(window);

/*
 * gallery 2014 v3 start here
 */
    // {{{ var lib
    var lib = {
        extractParamFromUri: function(uri, paramName) {
          if (!uri) { return; }
          var uri = uri.split('#')[0];  // Remove anchor.
          var parts = uri.split('?');  // Check for query params.
          if (parts.length == 1) { return; }
          var query = decodeURI(parts[1]);
          paramName += '=';
          var params = query.split('&');
          for (var i = 0, param; param = params[i]; ++i) {
            if (param.indexOf(paramName) === 0) {
              return unescape(param.split('=')[1]);
            }
          }
        },
        extractAllParamsFromUri: function(uri) {
          if (!uri) { return; }
          var uri = uri.split('#')[0];  // Remove anchor.
          var parts = uri.split('?');  // Check for query params.
          if (parts.length == 1) { return; }
          return parts[1];
        },
        parseInt: function(c) {
            return parseInt(c) || 0;
        }
    };
    // }}}

//$( document ).ready(function() {
function loadGalleryObject(galleryImages) {
    var galleryPager;
    var isFirstSwipe = true;
    //console.log("isFirstSwipe inizializzato= true");
    var heightDevice = $(window).height();
    var highlightGallery = true; //active overlay on scroll if isMobile
    var galleryImages = galleryImages;
    var fullscreenMode = 'undefined';

    //Set up lazyloading
    
    initializeLazyLoad("original", 1);

    //On resize / rotate
    $( window ).resize(function() {
        if(isMobile.any()){reCalcDeviceSize();}
    });

    //event click to close overlayGallery
    $(".close-gallery").click(function() { overlayGallery(0); });
    $(".fullscreen-gallery").click(function() { overlayGallery(2);});

    // {{{ overlayGallery

        //////////////
    
     function initializeLazyLoad(data,first){
        
        if(!first){
            $( ".bigimg" ).each(function( index ) {
                $(this).removeAttr('src');
                //console.log("rimosso src")
            });
        }

        
        
        $('img.bigimg').lazyload({
            data_attribute: data,
            placeholder: "data:image/gif;base64,R0lGODlhEAAQAPIAAAAAAP///zw8PLy8vP///5ycnHx8fGxsbCH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==",
            skip_invisible  : false,
            effect : "fadeIn",
            failure_limit: 999,
            threshold: 500
        });

        //console.log("plugin inizializzato:" + data);

    }



    function overlayGallery(toActive) 
    {
        // toActive = 0 --> Chiudi Overlay
        // toActive = 1 --> Apri Overlay on mobile
        // toActive = 2 --> Apri Overlay on desktop


        if(toActive && isMobile.any() || toActive==2) {
            // on first swipe
            // ========
            // Manipulate DOM
            $('#overlay').addClass('show');
            $('.gallery').addClass('in-overlay');
            
            if(!isMobile.any()){
                fullscreenMode = 'active';
                $('.gallery').addClass('desktop');
                var idImg = location.pathname.replace(/^.*[\\\/]/, '');
                if (isNaN(idImg)) {
                    idImg = 1;
                }

                //Re set up lazyloading with new img
                initializeLazyLoad("big-original",0);
            }
            
            //Inline style
            var styleForOverlay;
            
            styleForOverlay =  '.in-overlay .gallery-wrap{ height:'+(heightDevice-136)+'px; width:'+$(".gallery").width()+'px}';
            styleForOverlay += '.gallery .img-wrap {line-height:'+(heightDevice-136)+'px; }';
            styleForOverlay += '.gallery.in-overlay{height: '+heightDevice+'px;}';
            styleForOverlay += '.gallery .img-wrap img{max-height: '+(heightDevice-136)+'px;}';
            styleForOverlay += 'body{ overflow:hidden }';

            if($('#overlay-style').length == 0) {
                $('<style id="overlay-style">'+styleForOverlay+'</style>').appendTo('head');            
            } else {
                $('#overlay-style').text(styleForOverlay);
            }

            //scroll to center
            $('html, body').animate({ scrollTop: $(".gallery").offset().top - ( heightDevice - $('.gallery').outerHeight(true) ) / 2  }, 200);

            //disable scroll on body
            $('body').bind('touchmove', function(e){ e.preventDefault(); });

            //set variable
            //console.log("isFirstSwipe = false");
            isFirstSwipe = false;
        } else if(toActive==0){
            // on close
            // ========



            if(!isMobile.any()){
                //Re set up lazyloading with new img
                initializeLazyLoad("original",0);
            }


            fullscreenMode = 'undefined';
            // Remove manipulated DOM
            $('.gallery').removeClass('in-overlay');
            $('body').removeClass('overlay-actived');
            $('#overlay').addClass('hide');

            var idImg = location.pathname.replace(/^.*[\\\/]/, '');
            if (isNaN(idImg)) {
                idImg = 1;
            } 
           // $(".bigimg").attr('src', galleryImages[idImg].fileUrl);

            setTimeout(function(){ $('#overlay').removeClass(); },500);

            //remove inline style
            $('#overlay-style').empty();

            //restore scroll on body
            $('body').unbind('touchmove');

            //set variable
            //console.log("isFirstSwipe = true");
            isFirstSwipe = true;
        } 
    }
    // }}}



  



    // {{{ reCalcDeviceSize
    function reCalcDeviceSize()
    { 
        //recalc heightDevice
        heightDevice = $(window).height();
        //if gallery is on overlay
        if(isFirstSwipe==false) {
            //then relunch function to set new heightDevice device
            overlayGallery(1);
        }
    }
    // }}}

    // {{{ onSlideEvent
    function onSlideEvent(newIndex) 
    {
        //galleryPager.goToNextSlide();
        if (typeof galleryPager != 'undefined') {
            galleryPager.goToSlide(newIndex);
        }

        //overlay gallery onfirst swipe
        if(isFirstSwipe && highlightGallery){
            //console.log("entrato");
            overlayGallery(1); 
        }
        imageChanged(newIndex);
    }
    // }}}

    // {{{ bxslider plugin  
    var gallery = $('#gallery').bxSlider({
        pagerCustom: '#gallery-pager',
        infiniteLoop: false,
        speed:200,
        //captions: true,
        startSlide: galleryCurrentIndex - 1,
        hideControlOnEnd: true,
        onSlideNext: function($slideElement, oldIndex, newIndex){
            onSlideEvent(newIndex);
        },
        onSlidePrev: function($slideElement, oldIndex, newIndex){
            onSlideEvent(newIndex);
        },
        onSlideAfter: function(){
            $(window).trigger('scroll');
        },
        onSliderLoad: function(){
            imagesLoaded( '.gallery .gallery-pager-wrap #gallery-pager', function() {
                totalWidth = 0;
                var avaibleSpace = ($('.gallery').width()-100);
                $('.gallery .gallery-pager-wrap #gallery-pager img' ).each(function(index) {
                    totalWidth += parseInt($(this).width(), 10);
                });
                
                //active slider on pager if space isn't enough
                if(totalWidth>avaibleSpace){
                    galleryPager =  $('#gallery-pager').bxSlider({
                        pager: false,
                        minSlides: 2,
                        maxSlides: 5,
                        speed:200,
                        infiniteLoop: false,
                        oneToOneTouch: false,
                        slideMargin: 10,
                        startSlide: galleryCurrentIndex - 1,
                        hideControlOnEnd: true
                    });
                }//end if
    
                $('#gallery-pager a').each(function(index, element) {
                    $(this).click(function(e) {
                        e.preventDefault();
                        var newIndex = lib.parseInt($(this).attr('id').replace('galleryImageThumb_', '')) - 1;
                        imageChanged(newIndex);
                        //go in fullscreen if Mobile
                        if(isFirstSwipe && highlightGallery){ overlayGallery(1); }
                    });
                })
            });
        }
    });  
    // }}}

    //Arrow keyboard support
    $(document).keydown(function(e){
        if (e.keyCode == 37) { 
            gallery.goToPrevSlide();
            return false;
        }else if (e.keyCode == 39) { 
            gallery.goToNextSlide();
            return false;
        }else if(e.keyCode == 27 && isFirstSwipe==false){
            overlayGallery(0);
            return false;
        }
    });

    if(isMobile.any()){
        $('.fullscreen-gallery').css('display', 'none');
        $('#downloadUrl').css('display', 'none');
        $('#gallery').click(function(){ if(isFirstSwipe) overlayGallery(1); });
    }

    // {{{ imageChanged
    function imageChanged(newIndex)
    {
        galleryHistoryUpdate(newIndex);
        var elementIndex = newIndex + 1;
        

        

        /*if (fullscreenMode == 'active' && !isMobile.any()) {
            $(".bigimg").attr('src', galleryImages[elementIndex].fullscreenUrl);
        } else  {
            $(".bigimg").attr('src', galleryImages[elementIndex].fileUrl);    
        } */       
        
        var currentImg = $('#galleryImage_' + elementIndex);
        var description = currentImg.data('description');
        if ( undefined != description && description.length > 0 ) {
            $('#currentImageDescription').html(description);
        }
        var pageTitle = currentImg.attr('title');
        if ( undefined != pageTitle && pageTitle.length > 0 ) {
            document.title = pageTitle;
        }

        //chenge url "Download"
        $('#downloadUrl').attr('href', currentImg.data('big-original'));

        // tracking handling
        if ( 'undefined' != typeof(trackManager) ) {
            trackManager.trackEvent();
        }
        // adv handling
        if ( 'undefined' != typeof(advManager) ) {
            advManager.reload();
        }

    }
    // }}}
    
    // {{{ galleryHistoryUpdate
    function galleryHistoryUpdate(newIndex)
    {
        var currentUrl = getCurrentUrl(newIndex);
        if (window.history.pushState) {
            window.history.pushState("", window.name, currentUrl);
        } else {
            window.location= currentUrl;
        }
    }
    // }}}

    // {{{ getCurrenturl
    function getCurrentUrl(c) 
    {
        var g = '';
        if (typeof galleryUrl != "undefined" ) {
            g = galleryUrl+"/"+(lib.parseInt(c)+1);
            var ref_param = lib.extractAllParamsFromUri(window.location.href);
            if (typeof ref_param != "undefined") {
                g = g+"?"+ref_param;
            }
        }
        return g;
    }
    // }}}

    //imageChanged(galleryCurrentIndex - 1);
}
//}); //end document ready

// {{{ user agent check
var isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function() {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};
// }}} 
// gallery v3 end here

/*!
 * jQuery Raty - A Star Rating Plugin
 * ------------------------------------------------------------------
 *
 * jQuery Raty is a plugin that generates a customizable star rating.
 *
 * Licensed under The MIT License
 *
 * @version        2.5.2
 * @since          2010.06.11
 * @author         Washington Botelho
 * @documentation  wbotelhos.com/raty
 *
 * ------------------------------------------------------------------
 *
 *  <div id="star"></div>
 *
 *  $('#star').raty();
 *
 */

;(function($) {

  var methods = {
    init: function(settings) {
      return this.each(function() {
        methods.destroy.call(this);

        this.opt = $.extend(true, {}, $.fn.raty.defaults, settings);

        var that  = $(this),
            inits = ['number', 'readOnly', 'score', 'scoreName'];

        methods._callback.call(this, inits);

        if (this.opt.precision) {
          methods._adjustPrecision.call(this);
        }

        this.opt.number = methods._between(this.opt.number, 0, this.opt.numberMax)

        this.opt.path = this.opt.path || '';

        if (this.opt.path && this.opt.path.slice(this.opt.path.length - 1, this.opt.path.length) !== '/') {
          this.opt.path += '/';
        }

        this.stars = methods._createStars.call(this);
        this.score = methods._createScore.call(this);

        methods._apply.call(this, this.opt.score);

        var space  = this.opt.space ? 4 : 0,
            width  = this.opt.width || (this.opt.number * this.opt.size + this.opt.number * space);

        if (this.opt.cancel) {
          this.cancel = methods._createCancel.call(this);

          width += (this.opt.size + space);
        }

        if (this.opt.readOnly) {
          methods._lock.call(this);
        } else {
          that.css('cursor', 'pointer');
          methods._binds.call(this);
        }

        if (this.opt.width !== false) {
          that.css('width', width);
        }

        methods._target.call(this, this.opt.score);

        that.data({ 'settings': this.opt, 'raty': true });
      });
    }, _adjustPrecision: function() {
      this.opt.targetType = 'score';
      this.opt.half       = true;
    }, _apply: function(score) {
      if (score && score > 0) {
        score = methods._between(score, 0, this.opt.number);
        this.score.val(score);
      }

      methods._fill.call(this, score);

      if (score) {
        methods._roundStars.call(this, score);
      }
    }, _between: function(value, min, max) {
      return Math.min(Math.max(parseFloat(value), min), max);
    }, _binds: function() {
      if (this.cancel) {
        methods._bindCancel.call(this);
      }

      methods._bindClick.call(this);
      methods._bindOut.call(this);
      methods._bindOver.call(this);
    }, _bindCancel: function() {
      methods._bindClickCancel.call(this);
      methods._bindOutCancel.call(this);
      methods._bindOverCancel.call(this);
    }, _bindClick: function() {
      var self = this,
          that = $(self);

      self.stars.on('click.raty', function(evt) {
        self.score.val((self.opt.half || self.opt.precision) ? that.data('score') : this.alt);

        if (self.opt.click) {
          self.opt.click.call(self, parseFloat(self.score.val()), evt);
        }
      });
    }, _bindClickCancel: function() {
      var self = this;

      self.cancel.on('click.raty', function(evt) {
        self.score.removeAttr('value');

        if (self.opt.click) {
          self.opt.click.call(self, null, evt);
        }
      });
    }, _bindOut: function() {
      var self = this;

      $(this).on('mouseleave.raty', function(evt) {
        var score = parseFloat(self.score.val()) || undefined;

        methods._apply.call(self, score);
        methods._target.call(self, score, evt);

        if (self.opt.mouseout) {
          self.opt.mouseout.call(self, score, evt);
        }
      });
    }, _bindOutCancel: function() {
      var self = this;

      self.cancel.on('mouseleave.raty', function(evt) {
        $(this).attr('src', self.opt.path + self.opt.cancelOff);

        if (self.opt.mouseout) {
          self.opt.mouseout.call(self, self.score.val() || null, evt);
        }
      });
    }, _bindOverCancel: function() {
      var self = this;

      self.cancel.on('mouseover.raty', function(evt) {
        $(this).attr('src', self.opt.path + self.opt.cancelOn);

        self.stars.attr('src', self.opt.path + self.opt.starOff);

        methods._target.call(self, null, evt);

        if (self.opt.mouseover) {
          self.opt.mouseover.call(self, null);
        }
      });
    }, _bindOver: function() {
      var self   = this,
          that   = $(self),
          action = self.opt.half ? 'mousemove.raty' : 'mouseover.raty';

      self.stars.on(action, function(evt) {
        var score = parseInt(this.alt, 10);

        if (self.opt.half) {
          var position = parseFloat((evt.pageX - $(this).offset().left) / self.opt.size),
              plus     = (position > .5) ? 1 : .5;

          score = score - 1 + plus;

          methods._fill.call(self, score);

          if (self.opt.precision) {
            score = score - plus + position;
          }

          methods._roundStars.call(self, score);

          that.data('score', score);
        } else {
          methods._fill.call(self, score);
        }

        methods._target.call(self, score, evt);

        if (self.opt.mouseover) {
          self.opt.mouseover.call(self, score, evt);
        }
      });
    }, _callback: function(options) {
      for (i in options) {
        if (typeof this.opt[options[i]] === 'function') {
          this.opt[options[i]] = this.opt[options[i]].call(this);
        }
      }
    }, _createCancel: function() {
      var that   = $(this),
          icon   = this.opt.path + this.opt.cancelOff,
          cancel = $('<img />', { src: icon, alt: 'x', title: this.opt.cancelHint, 'class': 'raty-cancel' });

      if (this.opt.cancelPlace == 'left') {
        that.prepend('&#160;').prepend(cancel);
      } else {
        that.append('&#160;').append(cancel);
      }

      return cancel;
    }, _createScore: function() {
      return $('<input />', { type: 'hidden', name: this.opt.scoreName }).appendTo(this);
    }, _createStars: function() {
      var that = $(this);

      for (var i = 1; i <= this.opt.number; i++) {
        var title = methods._getHint.call(this, i),
            icon  = (this.opt.score && this.opt.score >= i) ? 'starOn' : 'starOff';

        icon = this.opt.path + this.opt[icon];

        $('<img />', { src : 'http://static-q.blogo.it/s/sf/img/blank.gif'/*icon*/, "alt": i, "title": title, "class": icon }).appendTo(this);

        if (this.opt.space) {
          that.append((i < this.opt.number) ? '&#160;' : '');
        }
      }

      return that.children('img');
    }, _error: function(message) {
      $(this).html(message);

      $.error(message);
    }, _fill: function(score) {
      var self  = this,
          hash  = 0;

      for (var i = 1; i <= self.stars.length; i++) {
        var star   = self.stars.eq(i - 1),
            select = self.opt.single ? (i == score) : (i <= score);

        if (self.opt.iconRange && self.opt.iconRange.length > hash) {
          var irange = self.opt.iconRange[hash],
              on     = irange.on  || self.opt.starOn,
              off    = irange.off || self.opt.starOff,
              icon   = select ? on : off;

          if (i <= irange.range) {
            star.attr('src', 'http://static-q.blogo.it/s/sf/img/blank.gif'/*self.opt.path + icon*/);
            star.attr('class', icon);
          }

          if (i == irange.range) {
            hash++;
          }
        } else {
          var icon = select ? 'starOn' : 'starOff';

          star.attr('src', 'http://static-q.blogo.it/s/sf/img/blank.gif'/*this.opt.path + this.opt[icon]*/);
          star.attr('class', icon);
        }
      }
    }, _getHint: function(score) {
      var hint = this.opt.hints[score - 1];
      return (hint === '') ? '' : (hint || score);
    }, _lock: function() {
      var score = parseInt(this.score.val(), 10), // TODO: 3.1 >> [['1'], ['2'], ['3', '.1', '.2']]
          hint  = score ? methods._getHint.call(this, score) : this.opt.noRatedMsg;

      $(this).data('readonly', true).css('cursor', '').attr('title', hint);

      this.score.attr('readonly', 'readonly');
      this.stars.attr('title', hint);

      if (this.cancel) {
        this.cancel.hide();
      }
    }, _roundStars: function(score) {
      var rest = (score - Math.floor(score)).toFixed(2);

      if (rest > this.opt.round.down) {
        var icon = 'starOn';                                 // Up:   [x.76 .. x.99]

        if (this.opt.halfShow && rest < this.opt.round.up) { // Half: [x.26 .. x.75]
          icon = 'starHalf';
        } else if (rest < this.opt.round.full) {             // Down: [x.00 .. x.5]
          icon = 'starOff';
        }

        this.stars.eq(Math.ceil(score) - 1).attr('src', 'http://static-q.blogo.it/s/sf/img/blank.gif'/*this.opt.path + this.opt[icon]*/);
        this.stars.eq(Math.ceil(score) - 1).attr('class', icon);
      }                              // Full down: [x.00 .. x.25]
    }, _target: function(score, evt) {
      if (this.opt.target) {
        var target = $(this.opt.target);

        if (target.length === 0) {
          methods._error.call(this, 'Target selector invalid or missing!');
        }

        if (this.opt.targetFormat.indexOf('{score}') < 0) {
          methods._error.call(this, 'Template "{score}" missing!');
        }

        var mouseover = evt && evt.type == 'mouseover';

        if (score === undefined) {
          score = this.opt.targetText;
        } else if (score === null) {
          score = mouseover ? this.opt.cancelHint : this.opt.targetText;
        } else {
          if (this.opt.targetType == 'hint') {
            score = methods._getHint.call(this, Math.ceil(score));
          } else if (this.opt.precision) {
            score = parseFloat(score).toFixed(1);
          }

          if (!mouseover && !this.opt.targetKeep) {
            score = this.opt.targetText;
          }
        }

        if (score) {
          score = this.opt.targetFormat.toString().replace('{score}', score);
        }

        if (target.is(':input')) {
          target.val(score);
        } else {
          target.html(score);
        }
      }
    }, _unlock: function() {
      $(this).data('readonly', false).css('cursor', 'pointer').removeAttr('title');

      this.score.removeAttr('readonly', 'readonly');

      for (var i = 0; i < this.opt.number; i++) {
        this.stars.eq(i).attr('title', methods._getHint.call(this, i + 1));
      }

      if (this.cancel) {
        this.cancel.css('display', '');
      }
    }, cancel: function(click) {
      return this.each(function() {
        if ($(this).data('readonly') !== true) {
          methods[click ? 'click' : 'score'].call(this, null);
          this.score.removeAttr('value');
        }
      });
    }, click: function(score) {
      return $(this).each(function() {
        if ($(this).data('readonly') !== true) {
          methods._apply.call(this, score);

          if (!this.opt.click) {
            methods._error.call(this, 'You must add the "click: function(score, evt) { }" callback.');
          }

          this.opt.click.call(this, score, { type: 'click' });

          methods._target.call(this, score);
        }
      });
    }, destroy: function() {
      return $(this).each(function() {
        var that = $(this),
            raw  = that.data('raw');

        if (raw) {
          that.off('.raty').empty().css({ cursor: raw.style.cursor, width: raw.style.width }).removeData('readonly');
        } else {
          that.data('raw', that.clone()[0]);
        }
      });
    }, getScore: function() {
      var score = [],
          value ;

      $(this).each(function() {
        value = this.score.val();

        score.push(value ? parseFloat(value) : undefined);
      });

      return (score.length > 1) ? score : score[0];
    }, readOnly: function(readonly) {
      return this.each(function() {
        var that = $(this);

        if (that.data('readonly') !== readonly) {
          if (readonly) {
            that.off('.raty').children('img').off('.raty');

            methods._lock.call(this);
          } else {
            methods._binds.call(this);
            methods._unlock.call(this);
          }

          that.data('readonly', readonly);
        }
      });
    }, reload: function() {
      return methods.set.call(this, {});
    }, score: function() {
      return arguments.length ? methods.setScore.apply(this, arguments) : methods.getScore.call(this);
    }, set: function(settings) {
      return this.each(function() {
        var that   = $(this),
            actual = that.data('settings'),
            news   = $.extend({}, actual, settings);

        that.raty(news);
      });
    }, setScore: function(score) {
      return $(this).each(function() {
        if ($(this).data('readonly') !== true) {
          methods._apply.call(this, score);
          methods._target.call(this, score);
        }
      });
    }
  };

  $.fn.raty = function(method) {
    if (methods[method]) {
      return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
    } else if (typeof method === 'object' || !method) {
      return methods.init.apply(this, arguments);
    } else {
      $.error('Method ' + method + ' does not exist!');
    }
  };

  $.fn.raty.defaults = {
    cancel        : false,
    cancelHint    : 'Cancel this rating!',
    cancelOff     : 'cancel-off.png',
    cancelOn      : 'cancel-on.png',
    cancelPlace   : 'left',
    click         : undefined,
    half          : false,
    halfShow      : true,
    hints         : ['bad', 'poor', 'regular', 'good', 'gorgeous'],
    iconRange     : undefined,
    mouseout      : undefined,
    mouseover     : undefined,
    noRatedMsg    : 'Not rated yet!',
    number        : 5,
    numberMax     : 20,
    path          : '',
    precision     : false,
    readOnly      : false,
    round         : { down: .25, full: .6, up: .76 },
    score         : undefined,
    scoreName     : 'score',
    single        : false,
    size          : 16,
    space         : true,
    starHalf      : 'star-half.png',
    starOff       : 'star-off.png',
    starOn        : 'star-on.png',
    target        : undefined,
    targetFormat  : '{score}',
    targetKeep    : false,
    targetText    : '',
    targetType    : 'hint',
    width         : undefined
  };

})(jQuery);

/*!
 * @preserve
 * jquery.scrolldepth.js | v0.5
 * Copyright (c) 2014 Rob Flaherty (@robflaherty)
 * Licensed under the MIT and GPL licenses.
 *
 * modified by Alessandro Fiore <alessandro.fiore@populis.com>
 */
 !function(e,t,n){"use strict";var r,l,i,a={minHeight:0,elements:[],percentage:!0,userTiming:!0,pixelDepth:!0,profile:null},o=e(t),c=[],u=0;e.scrollDepth=function(h){function p(e,t,n,a){if(i)dataLayer.push({event:"ScrollDistance",eventCategory:"Scroll Depth",eventAction:e,eventLabel:t,eventValue:1,eventNonInteraction:!0}),h.pixelDepth&&arguments.length>2&&n>u&&(u=n,dataLayer.push({event:"ScrollDistance",eventCategory:"Scroll Depth",eventAction:"Pixel Depth",eventLabel:v(n),eventValue:1,eventNonInteraction:!0})),h.userTiming&&arguments.length>3&&dataLayer.push({event:"ScrollTiming",eventCategory:"Scroll Depth",eventAction:e,eventLabel:t,eventTiming:a});else if(r&&(ga("send","event","Scroll Depth",e,t,1,{nonInteraction:1}),h.pixelDepth&&arguments.length>2&&n>u&&(u=n,ga("send","event","Scroll Depth","Pixel Depth",v(n),1,{nonInteraction:1})),h.userTiming&&arguments.length>3&&ga("send","timing","Scroll Depth",e,a,t)),l){var o=h.profile?h.profile+".":"";_gaq.push([o+"_trackEvent","Scroll Depth",e,t,1,!0]),h.pixelDepth&&arguments.length>2&&n>u&&(u=n,_gaq.push([o+"_trackEvent","Scroll Depth","Pixel Depth",v(n),1,!0])),h.userTiming&&arguments.length>3&&_gaq.push([o+"_trackTiming","Scroll Depth",e,a,t,100])}}function g(e){return{"25%":parseInt(.25*e,10),"50%":parseInt(.5*e,10),"75%":parseInt(.75*e,10),"100%":e-5}}function s(t,n,r){e.each(t,function(t,l){-1===e.inArray(t,c)&&n>=l&&(p("Percentage",t,n,r),c.push(t))})}function f(t,n,r){e.each(t,function(t,l){-1===e.inArray(l,c)&&e(l).length&&n>=e(l).offset().top&&(p("Elements",l,n,r),c.push(l))})}function v(e){return(250*Math.floor(e/250)).toString()}function m(e,t){var n,r,l,i=null,a=0,o=function(){a=new Date,i=null,l=e.apply(n,r)};return function(){var c=new Date;a||(a=c);var u=t-(c-a);return n=this,r=arguments,0>=u?(clearTimeout(i),i=null,a=c,l=e.apply(n,r)):i||(i=setTimeout(o,u)),l}}var D=+new Date;h=e.extend({},a,h),e(n).height()<h.minHeight||("function"==typeof ga&&(r=!0),"undefined"!=typeof _gaq&&"function"==typeof _gaq.push&&(l=!0),"undefined"!=typeof dataLayer&&"function"==typeof dataLayer.push&&(i=!0),p("Percentage","Baseline"),o.on("scroll.scrollDepth",m(function(){var r=e(n).height(),l=t.innerHeight?t.innerHeight:o.height(),i=o.scrollTop()+l,a=g(r),u=+new Date-D;return c.length>=4+h.elements.length?void o.off("scroll.scrollDepth"):(h.elements&&f(h.elements,i,u),void(h.percentage&&s(a,i,u)))},500)))}}(jQuery,window,document);