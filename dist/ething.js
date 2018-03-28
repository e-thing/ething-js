!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:r})},n.r=function(t){Object.defineProperty(t,"__esModule",{value:!0})},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=17)}([function(t,e,n){var r=n(16)||{};function o(t,e,n){var r;if(Array.isArray(e))for(var i in e){var a=e[i];/\[\]$/.test(t)?n(t,a):o(t+"["+("object"==typeof a?i:"")+"]",a,n)}else if("object"==typeof e)for(r in e)o(t+"["+r+"]",e[r],n);else n(t,e)}r.isId=function(t){return"string"==typeof t&&7===t.length&&/^[0-9a-zA-Z\-_]+$/.test(t)},r.parseUrl=function(t){var e=/^((([a-z]+):)?\/\/)?(([^:]*)(:([^@]*))?@)?([^:\/?#]+)?(:([0-9]+))?([^?#]+)?(\?[^#]*)?(#.*)?$/i.exec(t);return!!e&&{scheme:e[3],user:e[5],password:e[7],hostname:e[8],port:e[10],path:e[11],search:e[12],hash:e[13]}},r.getParam=function(t,e){var n=t.indexOf("?"),r=new RegExp("[\\?&]"+encodeURIComponent(e)+"=([^&#]*)"),o=-1!==n?r.exec(t.substr(n)):null;return null===o?"":decodeURIComponent(o[1])},r.getQueryString=function(t,e){var n=t.indexOf("?"),r=new RegExp("[\\?&]"+encodeURIComponent(e)+"=([^&#]*)"),o=-1!==n?r.exec(t.substr(n)):null;return null===o?"":decodeURIComponent(o[1])},r.removeParam=function(t,e){var n=t.split("?");if(n.length>=2){var r=n[1].indexOf("#"),o="";-1!==r&&(o=n[1].substr(r),n[1]=n[1].substr(0,r));for(var i=encodeURIComponent(e)+"=",a=n[1].split(/[&;]/g),s=a.length;s-- >0;)-1!==a[s].lastIndexOf(i,0)&&a.splice(s,1);return t=n[0]+(a.length>0?"?"+a.join("&"):"")+o}return t},r.insertParam=function(t,e,n){var o=(t=r.removeParam(t,e)).indexOf("#"),i="";-1!==o&&(i=t.substr(o),t=t.substr(0,o));var a=t.indexOf("?"),s="";return-1!==a&&(s=t.substr(a),t=t.substr(0,a)),s+=s.length?"&":"?",t+(s+=encodeURIComponent(e)+"="+encodeURIComponent(n))+i},r.param=function(t){var e,n=[],r=function(t,e){e="function"==typeof e?e():null==e?"":e,n[n.length]=encodeURIComponent(t)+"="+encodeURIComponent(e)};for(e in t)null!==t[e]&&void 0!==t[e]&&o(e,t[e],r);return n.join("&").replace(/%20/g,"+")};var i=r.pad=function(t,e,n){return n=n||"0",(t+="").length>=e?t:new Array(e-t.length+1).join(n)+t};r.sizeToString=function(t){if(t=parseInt(t),isNaN(t))return"-";return t>9e8?t=Math.floor(t/1e9*100)/100+" GB":t>9e5?t=Math.floor(t/1e6*100)/100+" MB":t>900?t=Math.floor(t/1e3*100)/100+" KB":t+=" B",t},r.dateToString=function(t){var e=new Date;if("number"==typeof t&&(t=new Date(1e3*t)),t){if(e.getTime()-t.getTime()<864e5)return i(t.getHours(),2)+":"+i(t.getMinutes(),2);var n=t.getFullYear(),r=t.getDate(),o=t.getMonth();return n==e.getFullYear()?r+" "+new Array("Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec")[o]+".":n+"/"+i(o+1,2)+"/"+i(r,2)}return"-"},r.dateDiffToString=function(t){if(t=parseInt(t),isNaN(t))return"-";var e,n=604800,r=86400,o=3600,i=60,a=0,s="";return(e=Math.floor(t/n))>=1&&a<2&&(s+=Math.floor(e)+" week"+(e>1?"s":""),t-=e*n,a++),(e=Math.floor(t/r))>=1&&a<2&&(a&&(s+=" "),s+=Math.floor(e)+" day"+(e>1?"s":""),t-=e*r,a++),(e=Math.floor(t/o))>=1&&a<2&&(a&&(s+=" "),s+=Math.floor(e)+" hour"+(e>1?"s":""),t-=e*o,a++),(e=Math.floor(t/i))>=1&&a<2&&(a&&(s+=" "),s+=Math.floor(e)+" minute"+(e>1?"s":""),t-=e*i,a++),(e=t)>=1&&a<2&&(a&&(s+=" "),s+=Math.floor(e)+" seconde"+(e>1?"s":""),a++),s};var a={};r.createCache=function(t){return function(e,n){return(!a[e]||"function"==typeof a[e].state&&"rejected"===a[e].state())&&(a[e]=t(e)),a[e].done(n)}};var s={},u=s.toString,c=s.hasOwnProperty;"Boolean Number String Function Array Date RegExp Object Error Symbol".split(" ").forEach(function(t){s["[object "+t+"]"]=t.toLowerCase()}),r.type=function(t){return null==t?t+"":"object"==typeof t||"function"==typeof t?s[u.call(t)]||"object":typeof t},r.isPlainObject=function(t){var e;if("object"!==r.type(t)||t.nodeType||null!=t&&t===t.window)return!1;try{if(t.constructor&&!c.call(t,"constructor")&&!c.call(t.constructor.prototype||{},"isPrototypeOf"))return!1}catch(t){return!1}for(e in t);return void 0===e||c.call(t,e)},r.extend=function(){var t,e,n,o,i,a,s=arguments[0]||{},u=1,c=arguments.length,f=!1;for("boolean"==typeof s&&(f=s,s=arguments[1]||{},u=2),"object"!=typeof s&&"function"!=typeof s&&(s={}),c===u&&(s=this,--u);u<c;u++)if(null!=(t=arguments[u]))for(e in t)n=s[e],s!==(o=t[e])&&(f&&o&&(r.isPlainObject(o)||(i=Array.isArray(o)))?(i?(i=!1,a=n&&Array.isArray(n)?n:[]):a=n&&r.isPlainObject(n)?n:{},s[e]=r.extend(f,a,o)):void 0!==o&&(s[e]=o));return s},r.isEqual=function(t,e){"use strict";if(null===t||void 0===t||null===e||void 0===e)return t===e;if(t.constructor!==e.constructor)return!1;if(t instanceof Function)return t===e;if(t instanceof RegExp)return t===e;if(t===e||t.valueOf()===e.valueOf())return!0;if(Array.isArray(t)&&t.length!==e.length)return!1;if(t instanceof Date)return!1;if(!(t instanceof Object))return!1;if(!(e instanceof Object))return!1;var n=Object.keys(t);return Object.keys(e).every(function(t){return-1!==n.indexOf(t)})&&n.every(function(n){return r.isEqual(t[n],e[n])})},r.inherits=function(t,e){t.prototype=new e,t.prototype.constructor=t},t.exports=r},function(t,e,n){var r=n(0),o=n(4),i=n(15),a=n(7),s=n(6),u=n(5),c={},f=r.extend,p=r.isPlainObject,l=r.XMLHttpRequest;c.Event=a,c.Error=i,c.utils=r,c.utils.Deferred=o,c.DeferredObject=u,c.config={apiUrl:"http://localhost:8000/api"};var d=[],h=[],y=[],v=[],g=null;s(c),c.toApiUrl=function(t,e){return/^([a-z]+:)?\/\//.test(t=t||"")||(!/^\//.test(t)&&t&&(t="/"+t),t=c.config.apiUrl+t),e&&m(t)&&(t=_(t),"function"==typeof g&&(t=g(t))),t};var m=function(t){return new RegExp("^([a-z]+:)?//"+c.config.apiUrl.replace(/^([a-z]+:)?\/\//,"")).test(t)};c.apiUrl=function(){return c.toApiUrl()};var b=function(t){var e=new o,n=new l;if("string"==typeof t&&(t={url:t}),"string"!=typeof(t=f({method:"GET",context:null,url:null,data:null,contentType:null,headers:null,dataType:null,converter:null,synchronous:!1},t)).url)return null;var s=c.toApiUrl(t.url),u=m(s);t.method=t.method.toUpperCase();var b=t.context||c,j=!/^(?:GET|HEAD)$/.test(t.method),T=void 0,w=void 0!==t.data&&null!==t.data;!j&&w&&(s+=(/\?/.test(s)?"&":"?")+("string"==typeof t.data?t.data:r.param(t.data))),n.open(t.method,s,!t.synchronous);var x=null;if(p(t.headers))for(var A in t.headers)t.headers.hasOwnProperty(A)&&(/^content-type$/i.test(A)&&(x=t.headers[A]),n.setRequestHeader(A,t.headers[A]));!x&&t.contentType&&n.setRequestHeader("Content-Type",x=t.contentType),j&&w&&(x?(T=t.data,(p(t.data)||Array.isArray(t.data))&&(/json/i.test(x)?T=JSON.stringify(t.data):/application\/x-www-form-urlencoded/i.test(x)&&(T=r.param(t.data)))):t.data instanceof Blob?(n.setRequestHeader("Content-Type",x=t.data.type),T=t.data):t.data instanceof ArrayBuffer||t.data instanceof r.Buffer?(n.setRequestHeader("Content-Type",x="application/octet-stream"),T=t.data):(n.setRequestHeader("Content-Type",x="application/x-www-form-urlencoded; charset=UTF-8"),T="string"==typeof t.data?t.data:r.param(t.data))),u&&(n=_(n),"function"==typeof g&&(n=g(n)));var R=t.dataType;function O(a){var s=n.getResponseHeader("Content-Type")||"",u=null;if(void 0!==a)u=a;else if(/json/.test(s)||/text\/plain/.test(s))switch(n.responseType){case"":case"text":case"json":u=n.response;break;case"blob":if(t.synchronous){if(!r.FileReaderSync)throw new i("FileReaderSync not supported.");var f=new r.FileReaderSync;u=String.fromCharCode.apply(null,new Uint8Array(f.readAsArrayBuffer(n.response)))}else{if(u=o(),!r.FileReader)throw new i("FileReaderSync not supported.");(f=new r.FileReader).onload=function(){u.resolve(String.fromCharCode.apply(null,new Uint8Array(this.result)))},f.readAsArrayBuffer(n.response)}break;case"arraybuffer":u=String.fromCharCode.apply(null,new Uint8Array(n.response));break;case"buffer":u=n.response.toString("utf8");break;default:throw new i(n.responseType+" response type not supported.")}o.when(u).always(function(r){try{r=JSON.parse(r)}catch(t){}var o=[new i(r||(n.status?n.status+" ["+n.statusText+"]":"unknown error")),n,t];c.trigger("ething.request.error",o),y.forEach(function(t){t.apply(b,o)}),c.trigger("ething.request.complete",o),h.forEach(function(t){t.apply(b,o)}),e.rejectWith(b,o)})}R&&"auto"!=R&&(n.responseType=R),n.onload=function(){if(n.status>=200&&n.status<300||304===n.status){var r=n.response;if("auto"==R){if(/json/.test(n.getResponseHeader("Content-Type")||""))try{r=JSON.parse(r)}catch(t){}}else if("json"==R&&"string"==typeof r)try{r=JSON.parse(r)}catch(t){}"function"==typeof t.converter&&(r=t.converter.call(b,r,n,t)),function(r){var o=[r,n,t];c.trigger("ething.request.success",o),d.forEach(function(t){t.apply(b,o)}),c.trigger("ething.request.complete",o),h.forEach(function(t){t.apply(b,o)}),e.resolveWith(b,o)}(r)}else O()},n.onerror=function(t){O(t)},n.onabort=function(){O()},n.onprogress=function(r){e.notifyWith(b,[r,n,t])};var S=a("ething.request.send");return c.trigger(S,[n,t]),S.isDefaultPrevented()?O("Aborded"):(v.forEach(function(t){t.call(b,n)}),n.send(T)),e.promise()};var j=c.getClass=function(t){var e=t.split(/[.\\]/);if(e.length>0&&void 0!==c[e[0]])return c[e[0]]};c.instanciate=function(t){var e=j(t.type);return e||t.extends.indexOf("Device")>=0&&(e=j("Device")),!!e&&new e(t)};c.resourceConverter=function(t){if("object"==typeof t&&null!==t){var e=Array.isArray(t);e||(t=[t]),t=t.map(function(t){return c.instanciate(t)}).filter(function(t){return t}),c.arbo&&(t=c.arbo.update(t).resources),e||(t=t.length?t[0]:null)}return t},c.request=function(t,e){var n=b(t);if("function"==typeof e&&n.always(function(){e.apply(this,Array.prototype.slice.call(arguments))}),t.synchronous){var r=null;return n.always(function(t){r=t}),r}return n},c.apiRequestPrefilter=function(t){g=t},c.ajaxSend=function(t){"function"==typeof t&&v.push(t)},c.ajaxComplete=function(t){"function"==typeof t&&h.push(t)},c.ajaxSuccess=function(t){"function"==typeof t&&d.push(t)},c.ajaxError=function(t){"function"==typeof t&&y.push(t)},c.list=c.find=function(t,e){var n=null,o=null;return 1==arguments.length?"function"==typeof arguments[0]?o=arguments[0]:n=arguments[0]:arguments.length>=2&&(n=arguments[0],o=arguments[1]),c.request({url:"/resources?"+r.param({q:n}),method:"GET",dataType:"json",converter:c.resourceConverter},o)},c.get=function(t,e){var n;if(t instanceof c.Resource)n=t,t=t.id();else if(!r.isId(t))throw"First argument must be a Resource object or a Resource id : "+t;var o=e;return c.request({url:"/resources/"+t,dataType:"json",method:"GET",context:n,converter:c.resourceConverter},o)},c.usage=function(t){var e=t;return c.request({url:"/usage",dataType:"json",method:"GET"},e)};var T=function(t){return t},w=null,x=null,A=null,_=T;c.auth={},c.auth.isAuthenticated=function(){return!!A},c.auth.getApp=function(){return w instanceof c.App?w:null},c.auth.getDevice=function(){return w instanceof c.Device?w:null},c.auth.getResource=function(){return w},c.auth.getScope=function(){return x},c.auth.reset=function(){w=null,A=null,x=null,_=T},c.auth.setApiKey=function(t){c.auth.reset(),_=function(e){return"string"==typeof e?e=c.utils.insertParam(e,"api_key",t):e.setRequestHeader("X-API-KEY",t),e}},c.auth.setBasicAuth=function(t,e){c.auth.reset(),_=function(n){return"string"==typeof n?n=n.replace(/\/\/([^:]+:[^@]+@)?/,"//"+t+":"+e+"@"):n.setRequestHeader("Authorization","Basic "+r.btoa(t+":"+e)),n}},c.initialize=function(t,e,n){return c.auth.reset(),(t=f({apiUrl:null,apiKey:null,login:"ething",password:null},t||{})).apiUrl&&(c.config.apiUrl=t.apiUrl),t.apiKey?c.auth.setApiKey(t.apiKey):t.login&&t.password&&c.auth.setBasicAuth(t.login,t.password),c.request({url:"/auth",dataType:"json",context:c,converter:function(t){A=t.type,t.resource&&(w=c.instanciate(t.resource)),t.scope&&(x=t.scope)}}).done(function(){R.forEach(function(t){t.call(c)}),c.trigger("ething.authenticated")}).done(e).fail(n)};var R=[];c.authenticated=function(t){"function"==typeof t&&(R.push(t),c.auth.isAuthenticated()&&t.call(c))},t.exports=c},function(e,n,r){var o=r(0),i=r(6),a=r(5),s=r(1),u=function(t){a.call(this),i(this),this._fromJson(t,!0)};o.inherits(u,a),u.prototype._fromJson=function(t,e){var n=this._json&&t&&this._json.modifiedDate&&t.modifiedDate&&this._json.modifiedDate!==t.modifiedDate,r=[];return t=o.extend({name:null,id:null,type:null,createdBy:null,createdDate:0,modifiedDate:0,data:null,description:null},t||{}),!e&&n&&Object.keys(t).forEach(function(e){void 0!==this._json[e]&&o.isEqual(t[e],this._json[e])||r.push(e)},this),this._json=t,!e&&n&&(this.trigger("updated",[r]),s.trigger("ething.resource.updated",[this,r])),n},u.prototype.json=function(){return this._json},u.prototype.isTypeof=function(t){return-1!==this._json.extends.indexOf(t)},u.prototype.name=function(){return this._json.name},u.prototype.dirname=function(){return s.Resource.dirname(this._json.name)},u.prototype.basename=function(){return s.Resource.basename(this._json.name)},u.prototype.extension=function(){return s.Resource.extension(this._json.name)},u.prototype.id=function(){return this._json.id},u.prototype.createdBy=function(){return this._json.createdBy},u.prototype.type=function(){return this._json.type},u.prototype.types=function(){return this._json.extends||[]},u.prototype.baseType=function(){return t=this.types(),t[t.length-1]},u.prototype.createdDate=function(){return new Date(this._json.createdDate)},u.prototype.ctime=function(){return this.createdDate()},u.prototype.modifiedDate=function(){return new Date(this._json.modifiedDate)},u.prototype.mtime=function(){return this.modifiedDate()},u.prototype.public=function(){return this._json.public||!1},u.prototype.data=function(t,e){return void 0===t?this._json.data:this._json.data.hasOwnProperty(t)?this._json.data[t]:e},u.prototype.attr=function(t){return void 0===t?this._json:this._json.hasOwnProperty(t)?this._json[t]:null},u.prototype.hasAttr=function(t){return this._json.hasOwnProperty(t)},u.prototype.description=function(){return this._json.description||""},u.prototype.remove=function(t,e){return this.deferred(function(){return u.remove(this,e)})},u.prototype.update=function(t){return this.deferred(function(){return s.get(this,t)})},u.prototype.set=function(t,e){var n=[].slice.call(arguments);return this.deferred(function(){return n.unshift(this),u.set.apply(s,n)})},u.prototype.setData=function(t,e){if("string"==typeof t&&"function"!=typeof e){var n=t,r=e;e=arguments[2];(t={})[n]=r}return this.set({data:t},e)},u.remove=function(t,e,n){var r;if(t instanceof u)r=t,t=t.id();else if(!o.isId(t))throw"First argument must be a Resource object or a Resource id : "+t;return 2==arguments.length&&"function"==typeof e&&(n=e,e=!1),s.request({url:"/resources/"+t+"?"+o.param({children:e}),method:"DELETE",context:r},n).done(function(){s.trigger("ething.resource.removed",[t])})},u.set=function(t,e,n){var r;if(!o.isPlainObject(e)||!e)throw"Second argument must be a unempty object !";if(t instanceof u)r=t,t=t.id();else if(!o.isId(t))throw"First argument must be a Resource object or a Resource id : "+t;var i=n;return s.request({url:"/resources/"+t,dataType:"json",method:"POST",contentType:"application/json; charset=utf-8",data:e,context:r,headers:{"X-HTTP-Method-Override":"PATCH"},converter:s.resourceConverter},i)},u.dirname=function(t){var e=t.replace(/\/[^\/]*\/?$/,"");return e===t?"":e},u.basename=function(t){return t.replace(/.*\//,"")},u.extension=function(t){return t.indexOf(".")>=0?t.split(".").pop():""},u.fnmatch=function(t,e){for(var n,r,o=t.split(" "),i=0;i<o.length;i++)if(""!=o[i]&&(n="^"+(n="^"+o[i].replace(/\//g,"\\/").replace(/\*\*/g,"(\\/[^\\/]+)*").replace(/\*/g,"[^\\/]+").replace(/((?!\\))\?/g,"$1.")+"$")+"$",r=new RegExp(n),null!=e.match(r)))return!0;return!1},s.Resource=u,e.exports=u},function(t,e,n){var r=n(1),o=n(0),i=n(2),a=function(t){i.call(this,t),(this._json.methods||[]).forEach(function(t){if(void 0===this[t]){var e=this;this[t]=function(e,n,o){var i=[].slice.call(arguments);return this.deferred(function(){return i.unshift(t),i.unshift(this),a.execute.apply(r,i)})},this[t].getApi=function(n){return a.getApi(e,t,n)},this[t].executeUrl=function(n){return e.executeUrl(t,n)}}},this)};o.inherits(a,i),a.prototype.location=function(){return this._json.location||null},a.prototype.connected=function(){return!!this._json.connected},a.prototype.lastSeenDate=function(){return"string"==typeof this._json.lastSeenDate?new Date(this._json.lastSeenDate):null},a.prototype.hasBattery=function(){return"number"==typeof this._json.battery&&this._json.battery>=0},a.prototype.battery=function(){return this.hasBattery()?this._json.battery:null},a.prototype.methods=function(){return this._json.methods||[]},a.prototype.interfaces=function(){return this._json.interfaces||[]},a.prototype.execute=function(){var t=[].slice.call(arguments);return this.deferred(function(){return t.unshift(this),a.execute.apply(r,t)})},a.prototype.executeUrl=function(t,e){var n="devices/"+this.id()+"/call/"+t;return isPlainObject(e)&&0!==Object.keys(e).length&&(n+="?"+o.param(e)),r.toApiUrl(n,!0)},a.prototype.getApi=function(t,e){var n=[].slice.call(arguments);return this.deferred(function(){return n.unshift(this),a.getApi.apply(r,n)})},a.execute=function(t,e,n,i,s){var u;if(t instanceof a)u=t,t=t.id();else{if(!o.isId(t))throw"First argument must be a Device object or a Device id !";t=t}return 4==arguments.length?"function"==typeof i&&(s=i,i=void 0):3==arguments.length&&"function"==typeof n&&(s=n,n=void 0),r.request({url:"/devices/"+t+"/call/"+e,method:"POST",contentType:"application/json; charset=utf-8",data:void 0!==n&&null!==n?JSON.stringify(n):void 0,dataType:i?o.isNode?"buffer":"blob":"auto",context:u},s)},a.getApi=function(t,e,n){var i;if("function"==typeof e&&void 0===n&&(n=e,e=void 0),t instanceof a)i=t,t=t.id();else{if(!o.isId(t))throw"First argument must be a Device object or a Device id !";t=t}return r.request({url:"/devices/"+t+"/api"+(e?"/"+e:""),method:"GET",context:i,dataType:"json"},n)},a.create=function(t,e,n){return e.type=t,r.request({url:"/devices",dataType:"json",method:"POST",contentType:"application/json; charset=utf-8",data:e,converter:r.resourceConverter},n).done(function(t){r.trigger("ething.device.created",[t])})},r.Device=a,t.exports=a},function(t,e){function n(t){var e="pending",r=[],o=[],i=[],a=null,s=[["resolve","done"],["reject","fail"],["notify","progress"]],u={done:function(){for(var t=0;t<arguments.length;t++)if(arguments[t])if(Array.isArray(arguments[t]))for(var n=arguments[t],o=0;o<n.length;o++)"resolved"===e&&n[o].apply(this,a),r.push(n[o]);else"resolved"===e&&arguments[t].apply(this,a),r.push(arguments[t]);return this},fail:function(){for(var t=0;t<arguments.length;t++)if(arguments[t])if(Array.isArray(arguments[t]))for(var n=arguments[t],r=0;r<n.length;r++)"rejected"===e&&n[r].apply(this,a),o.push(n[r]);else"rejected"===e&&arguments[t].apply(this,a),o.push(arguments[t]);return this},always:function(){return this.done.apply(this,arguments).fail.apply(this,arguments)},progress:function(){for(var t=0;t<arguments.length;t++)if(arguments[t])if(Array.isArray(arguments[t]))for(var n=arguments[t],r=0;r<n.length;r++)"pending"===e&&i.push(n[r]);else"pending"===e&&i.push(arguments[t]);return this},then:function(){var t=arguments;return n(function(e){s.forEach(function(n,r){var o="function"==typeof t[r]&&t[r];c[n[1]](function(){var t=o&&o.apply(this,arguments);t&&"function"==typeof t.promise?t.promise().progress(e.notify).done(e.resolve).fail(e.reject):e[n[0]+"With"](this===u?e.promise():this,o?[t]:arguments)})}),t=null}).promise()},promise:function(t){if(null==t)return u;for(var e in u)t[e]=u[e];return t},state:function(){return e},debug:function(){console.log("[debug]",r,o,e)},isRejected:function(){return"rejected"===e},isResolved:function(){return"resolved"===e}},c={resolveWith:function(t){if("pending"===e){e="resolved";for(var n=a=arguments.length>1?arguments[1]:[],o=0;o<r.length;o++)r[o].apply(t,n)}return this},rejectWith:function(t){if("pending"===e){e="rejected";for(var n=a=arguments.length>1?arguments[1]:[],r=0;r<o.length;r++)o[r].apply(t,n)}return this},notifyWith:function(t){if("pending"===e)for(var n=a=arguments.length>1?arguments[1]:[],r=0;r<i.length;r++)i[r].apply(t,n);return this},resolve:function(){return this.resolveWith(this,arguments)},reject:function(){return this.rejectWith(this,arguments)},notify:function(){return this.notifyWith(this,arguments)}},f=u.promise(c);return t&&t.apply(f,[f]),f}n.when=function(){if(arguments.length<2){var t=arguments.length?arguments[0]:void 0;return t&&"function"==typeof t.isResolved&&"function"==typeof t.isRejected?t.promise():n().resolve(t).promise()}return function(t){for(var e=n(),r=t.length,o=0,i=new Array(r),a=0;a<t.length;a++)!function(n){var a=null;t[n].done?t[n].done(function(){i[n]=arguments.length<2?arguments[0]:arguments,++o==r&&e.resolve.apply(e,i)}).fail(function(){e.reject(arguments)}):(a=t[n],t[n]=new Deferred,t[n].done(function(){i[n]=arguments.length<2?arguments[0]:arguments,++o==r&&e.resolve.apply(e,i)}).fail(function(){e.reject(arguments)}).resolve(a))}(a);return e.promise()}(arguments)},t.exports=n},function(t,e,n){var r=n(4);t.exports=function(){var t=r().resolve(),e=[],n=this;function o(){for(var t=0;t<e.length;t++){var r=e[t].dfr,o=e[t].pending,i=e[t].fn;if(o)e[t].pending=!1,i.call(n,n).done(function(){var t=Array.prototype.slice.call(arguments);r.resolveWith(n,t)}).fail(function(){r.rejectWith(n,Array.prototype.slice.call(arguments))}).progress(function(){r.notifyWith(n,Array.prototype.slice.call(arguments))});else if(r.isResolved()||r.isRejected()){e.splice(t,1),t--;continue}break}}["done","fail","always","progress","then","state","isRejected","isResolved"].forEach(function(r){this[r]=function(){var o=(e.length?e[e.length-1].dfr:t)[r].apply(n,Array.prototype.slice.call(arguments));return"object"==typeof o&&"then"!==r?n:o}},this),this.promise=function(){return n},this.deferred=function(t){var n=new r;return n.always(function(){o()}),e.push({fn:t,dfr:n,pending:!0}),o(),this}}},function(t,e,n){var r=n(7);t.exports=function(t){var e={};t.on=function(t,n){if("function"==typeof n){t=t.split(" ");for(var r=0;r<t.length;r++){var o=t[r];o.length&&(e[o]||(e[o]=[]),e[o].push(n))}}},t.off=function(t,n){t=t.split(" ");for(var r=0;r<t.length;r++){var o=t[r];if(o.length&&e[o])if("function"==typeof n)for(var i=0;i<e[o].length;i++)e[o][i]===n&&(e[o].splice(i,1),i--);else e[o]=[]}},t.one=function(e,n){"function"==typeof n&&t.on(e,function(){t.off(e,n),n.apply(this,Array.prototype.slice.call(arguments))})},t.trigger=function(n,o){"string"==typeof n&&(n=r(n));for(var i=n.type,a=e[i]||[],s=0;s<a.length;s++){var u=[n];if(Array.isArray(o)&&(u=u.concat(o)),a[s].apply(t,u),n.isImmediatePropagationStopped()||n.isPropagationStopped())break}return n}}},function(t,e,n){var r=n(0);function o(){return!0}function i(){return!1}var a=function(t,e){if(!(this instanceof a))return new a(t,e);this.type=t,e&&r.extend(this,e),this.timeStamp=Date.now()};a.prototype={constructor:a,isDefaultPrevented:i,isPropagationStopped:i,isImmediatePropagationStopped:i,preventDefault:function(){this.isDefaultPrevented=o},stopPropagation:function(){this.isPropagationStopped=o},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=o,this.stopPropagation()}},t.exports=a},function(t,e,n){var r=n(1),o=n(0),i=n(3);i.MQTT={},i.MQTT.getSubscription=function(t,e){var n;if(t instanceof i)n=t,t=t.id();else if(!o.isId(t))throw"First argument must be a Device object or a Device id !";return r.request({url:"/devices/"+t+"/subscription",dataType:"json",context:n,converter:function(t){return n instanceof i&&(n.subscription=t),t}},e)},t.exports=i.MQTT},function(t,e,n){var r=n(1),o=n(0),i=n(3);i.Http={},i.Http.getSpecification=function(t,e){var n;if(t instanceof i)n=t,t=t.id();else if(!o.isId(t))throw"First argument must be a Device object or a Device id !";return r.request({url:"/devices/"+t+"/specification",dataType:"json",context:n,converter:function(t){return n instanceof i&&(n.swaggerSpecification=t),t}},e)},t.exports=i.Http},function(t,e,n){var r=n(1),o=n(0),i=n(2),a=n(4),s=function(t){i.call(this,t)};o.inherits(s,i),s.prototype.size=function(){return this._json.size||0},s.prototype.iconLink=function(t){return this._json.hasIcon?r.toApiUrl("apps/"+this.id()+"/icon",t):null},s.prototype.getContentUrl=function(t){return r.toApiUrl("apps/"+this.id(),t)},s.prototype.contentModifiedDate=function(){return new Date(this._json.contentModifiedDate)},s.prototype.scope=function(){return"string"==typeof this._json.scope?this._json.scope:""},s.prototype.version=function(){return this._json.version||null},s.prototype.read=function(t){var e=[].slice.call(arguments);return this.deferred(function(){return e.unshift(this),s.read.apply(r,e)})},s.prototype.write=function(t,e){var n=[].slice.call(arguments);return this.deferred(function(){return n.unshift(this),s.write.apply(r,n)})},s.create=function(t,e){if(t.content&&(t.content=o.btoa(t.content)),t.icon){if(t.icon instanceof o.Blob){if(!o.FileReader)throw"no FileReader instance found";var n=new o.FileReader,i=a();return n.onloadend=function(){t.icon=n.result.substr(n.result.indexOf(";base64,")+8),r.request({url:"/apps",dataType:"json",method:"POST",contentType:"application/json; charset=utf-8",data:t,converter:r.resourceConverter}).done(function(){i.resolveWith(this,Array.prototype.slice.call(arguments))}).fail(function(){i.rejectWith(this,Array.prototype.slice.call(arguments))})},n.readAsDataURL(t.icon),i.done(e).done(function(){r.trigger("ething.app.created",[this])}).promise()}if(t.icon instanceof ArrayBuffer){for(var s="",u=new Uint8Array(t.icon),c=0;c<u.byteLength;c++)s+=String.fromCharCode(u[c]);t.icon=o.btoa(s)}else if("string"!=t.icon)throw"invalid type for the icon attribute"}return r.request({url:"/apps",dataType:"json",method:"POST",contentType:"application/json; charset=utf-8",data:t,converter:r.resourceConverter},e).done(function(t){r.trigger("ething.app.created",[t])})},s.read=function(t,e){var n,i=null;if(t instanceof s)n=t,i=t.id();else{if(!o.isId(t))throw"First argument must be a File object or a file id !";i=t}var a=e;return r.request({url:"/apps/"+i,method:"GET",dataType:"text",context:n},a)},s.write=function(t,e,n){var i,a=null;if(t instanceof s)i=t,a=t.id();else{if(!o.isId(t))throw"First argument must be a File object or a file id !";a=t}if("string"!=typeof e)throw"Second argument must be a string !";var u=n;return r.request({url:"/apps/"+a,dataType:"json",method:"PUT",contentType:"string"==typeof e?"text/plain":"application/octet-stream",data:e,context:i,converter:r.resourceConverter},u)},s.getIcon=function(t,e){var n,i=null;if(t instanceof s)n=t,i=t.id();else{if(!o.isId(t))throw"First argument must be a File object or a file id !";i=t}var a=e;return r.request({url:"/apps/"+i+"/icon",method:"GET",dataType:o.isNode?"buffer":"blob",context:n},a)},r.App=s,t.exports=s},function(t,e,n){var r=n(1),o=n(0),i=n(2),a=function(t){i.call(this,t)};o.inherits(a,i),a.prototype.length=function(){return this._json.length},a.prototype.maxLength=function(){return this._json.maxLength},a.prototype.expireAfter=function(){return this._json.expireAfter},a.prototype.keys=function(){var t=[];for(var e in this._json.keys)this._json.keys.hasOwnProperty(e)&&t.push(e);return t},a.prototype.contentModifiedDate=function(){return new Date(this._json.contentModifiedDate)},a.prototype.select=function(t,e){var n=[].slice.call(arguments);return this.deferred(function(){return n.unshift(this),a.select.apply(r,n)})},a.prototype.computeStatistics=function(t,e,n){var o=[].slice.call(arguments);return this.deferred(function(){return o.unshift(this),a.computeStatistics.apply(r,o)})},a.prototype.removeRow=function(t,e){var n=[].slice.call(arguments);return this.deferred(function(){return n.unshift(this),a.removeRow.apply(r,n)})},a.prototype.replaceRow=function(t,e){var n=[].slice.call(arguments);return this.deferred(function(){return n.unshift(this),a.replaceRow.apply(r,n)})},a.prototype.findOneAndReplace=function(t,e,n,o){var i=[].slice.call(arguments);return this.deferred(function(){return i.unshift(this),a.findOneAndReplace.apply(r,i)})},a.prototype.insert=function(t,e){var n=[].slice.call(arguments);return this.deferred(function(){return n.unshift(this),a.insert.apply(this,n)})},a.prototype.import=function(t,e){var n=[].slice.call(arguments);return this.deferred(function(){return n.unshift(this),a.import.apply(this,n)})},a.prototype.getContentUrl=function(t){return r.toApiUrl("tables/"+this.id(),t)},a.create=function(t,e){return"string"==typeof t&&(t={name:t}),r.request({url:"/tables",dataType:"json",method:"POST",contentType:"application/json; charset=utf-8",data:t,converter:r.resourceConverter},e).done(function(t){r.trigger("ething.table.created",[t])})},a.select=function(t,e,n){var i,s=null;if(t instanceof a)i=t,s=t.id();else{if(!o.isId(t))throw"First argument must be a Table object or a table id !";s=t}return void 0===n&&"function"==typeof e&&(n=e,e=null),e=e||{},Array.isArray(e.fields)&&(e.fields=e.fields.join(",")),r.request({url:"/tables/"+s+"?"+o.param({start:e.start,length:e.length,sort:e.sort,q:e.query,fields:e.fields,datefmt:e.datefmt}),method:"GET",dataType:"json",context:i},n)},a.computeStatistics=function(t,e,n,i){var s,u=null;if(t instanceof a)s=t,u=t.id();else{if(!o.isId(t))throw"First argument must be a Table object or a table id !";u=t}return void 0===i&&"function"==typeof n&&(i=n,n=null),r.request({url:"/tables/"+u+"/statistics?"+o.param({key:e,q:n}),method:"GET",dataType:"json",context:s},i)},a.removeRow=function(t,e,n){var i,s=null;if(t instanceof a)i=t,s=t.id();else{if(!o.isId(t))throw"First argument must be a Table object or a table id !";s=t}var u=Array.isArray(e)?e:[e],c=n;return r.request({url:"/tables/"+s+"/remove",dataType:"json",method:"POST",contentType:"application/json; charset=utf-8",data:u,context:i,converter:r.resourceConverter},c)},a.replaceRow=function(t,e,n){var i,s=null;if(t instanceof a)i=t,s=t.id();else{if(!o.isId(t))throw"First argument must be a Table object or a table id !";s=t}if("object"==typeof e&&!o.isId(e.id))throw"Second argument must be an object containing at least a document id";var u=e.id,c=n;return r.request({url:"/tables/"+s+"/id/"+u,dataType:"json",method:"POST",contentType:"application/json; charset=utf-8",data:e,context:i,headers:{"X-HTTP-Method-Override":"PATCH"}},c)},a.findOneAndReplace=function(t,e,n,i,s){var u,c=null,f=s,p=!1;if(t instanceof a)u=t,c=t.id();else{if(!o.isId(t))throw"First argument must be a Table object or a table id !";c=t}if("string"!=typeof e)throw"Second argument must be a query string";if("object"!=typeof n)throw"Third argument must be an object";return void 0===s&&"function"==typeof i&&(f=i,p=!1),"boolean"==typeof i&&(p=i),r.request({url:"/tables/"+c+"/replace?"+o.param({q:e,upsert:p}),dataType:"json",method:"POST",contentType:"application/json; charset=utf-8",data:n,context:u,converter:r.resourceConverter},f)},a.insert=function(t,e,n,i){var s,u,c,f=null;if(t instanceof a)u=t,f=t.id();else{if(!o.isId(t))throw"First argument must be a Table object or a table id !";f=t}return"string"==typeof n?(c=n,s=i):s=n,r.request({url:"/tables/"+f+"?"+o.param({invalid_field:c}),dataType:"json",method:"POST",contentType:"application/json; charset=utf-8",data:e,context:u,converter:r.resourceConverter},s)},a.import=function(t,e){var n,i,s,u;if(t instanceof a)n=t,t=t.id();else if(!o.isId(t))throw"First argument must be a Table object or a table id !";if(!Array.isArray(e))throw"The data must be an array of objects";for(var c=2;c<arguments.length;c++)switch(typeof arguments[c]){case"function":u=arguments[c];break;case"boolean":s=arguments[c];break;case"string":i=arguments[c]}return r.request({url:"/tables/"+t+"?"+o.param({skip_error:s,invalid_field:i}),dataType:"json",method:"PUT",contentType:"application/json; charset=utf-8",data:e,context:n,converter:r.resourceConverter},u)},r.Table=a,t.exports=a},function(t,e,n){var r=n(1),o=n(0),i=n(2),a=function(t){i.call(this,t)};o.inherits(a,i),a.prototype.size=function(){return this._json.size},a.prototype.expireAfter=function(){return this._json.expireAfter||null},a.prototype.mime=function(){return this._json.mime},a.prototype.contentModifiedDate=function(){return new Date(this._json.contentModifiedDate)},a.prototype.thumbnailLink=function(t){return this._json.hasThumbnail?r.toApiUrl("files/"+this.id()+"/thumbnail",t):null},a.prototype.getContentUrl=function(t){return r.toApiUrl("files/"+this.id(),t)},a.prototype.isText=function(){return this._json.isText},a.prototype.isScript=function(){return this._json.isText&&"application/javascript"===this._json.mime},a.prototype.execute=function(t,e){t=[].slice.call(arguments);return this.deferred(function(){return t.unshift(this),a.execute.apply(r,t)})},a.prototype.read=function(t,e){var n=[].slice.call(arguments);return this.deferred(function(){return n.unshift(this),a.read.apply(r,n)})},a.prototype.write=function(t,e){var n=[].slice.call(arguments);return this.deferred(function(){return n.unshift(this),a.write.apply(r,n)})},a.create=function(t,e){return"string"==typeof t&&(t={name:t}),r.request({url:"/files",dataType:"json",method:"POST",contentType:"application/json; charset=utf-8",data:t,converter:r.resourceConverter},e).done(function(t){r.trigger("ething.file.created",[t])})},a.read=function(t,e,n){var i;if(t instanceof a)i=t,t=t.id();else if(!o.isId(t))throw"First argument must be a File object or a file id !";return void 0===n&&"function"==typeof e&&(n=e,e=!1),r.request({url:"/files/"+t,method:"GET",dataType:e?o.isNode?"buffer":"blob":"text",context:i},n)},a.execute=function(t,e,n){var i;if(t instanceof a)i=t,t=t.id();else if(!o.isId(t))throw"First argument must be a File object or a file id !";return void 0===n&&"function"==typeof e&&(n=e,e=null),r.request({url:"/files/"+t+"/execute?"+o.param({args:e}),method:"GET",dataType:"json",context:i},n)},a.write=function(t,e,n){var i,s=null;if(t instanceof a)i=t,s=t.id();else{if(!o.isId(t))throw"First argument must be a File object or a file id !";s=t}var u=n;return r.request({url:"/files/"+s,dataType:"json",method:"PUT",contentType:"string"==typeof e?"text/plain":"application/octet-stream",data:e,context:i,converter:r.resourceConverter},u)},r.File=a,t.exports=a},function(t,e,n){var r=n(1),o=function(t,e,n){var o={};if(3==arguments.length)o.body=e,o.subject=t;else if(2==arguments.length)"string"==typeof e?(o.subject=t,o.body=e):(o.body=t,n=e);else{if(1!=arguments.length)throw"Bad arguments!";o.body=t}return r.request({url:"/notification",method:"POST",contentType:"application/json; charset=utf-8",data:o},n)};r.notify=o,t.exports=o},function(t,e,n){var r=n(1),o=n(0),i={get:function(t){return r.request({url:"/settings",dataType:"json",method:"GET"},t)},set:function(t,e){if(!o.isPlainObject(t))throw"First argument must be an object !";return r.request({url:"/settings",dataType:"json",method:"POST",contentType:"application/json; charset=utf-8",data:t,headers:{"X-HTTP-Method-Override":"PATCH"}},e)}};r.settings=i,t.exports=i},function(t,e,n){var r=n(0);t.exports=function(t){this.constructor.prototype.__proto__=Error.prototype,Error.captureStackTrace(this,this.constructor),this.name="EThing.Error","string"==typeof t&&(t={message:t}),t instanceof Error&&(t={message:t.message}),r.extend(this,{message:"unknown error"},t)}},function(t,e){t.exports={isNode:!1,btoa:btoa,atob:atob,XMLHttpRequest:XMLHttpRequest,Blob:Blob,Buffer:function(){},FileReader:FileReader||null,FileReaderSync:FileReaderSync||null}},function(t,e,n){var r=n(1);n(2),n(14),n(13),n(12),n(11),n(10),n(3),n(9),n(8),t.exports=r}]);
//# sourceMappingURL=ething.js.map