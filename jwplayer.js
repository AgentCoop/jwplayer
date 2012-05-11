if(typeof jwplayer=="undefined"){jwplayer=function(a){if(jwplayer.api){return jwplayer.api.selectPlayer(a)}};var $jw=jwplayer;jwplayer.version="6.0.2192";jwplayer.vid=document.createElement("video");jwplayer.audio=document.createElement("audio");jwplayer.source=document.createElement("source");(function(h){var d=document;var o=window;var n=h.utils=function(){};n.exists=function(s){switch(typeof(s)){case"string":return(s.length>0);break;case"object":return(s!==null);case"undefined":return false}return true};var b={},q,a={};function p(){var s=d.createElement("style");s.type="text/css";d.getElementsByTagName("head")[0].appendChild(s);return s}n.css=function(s,v,t){if(!n.exists(t)){t=false}if(n.isIE()){if(!q){q=p()}}else{if(!b[s]){b[s]=p()}}if(!a[s]){a[s]={}}for(var u in v){var w=g(u,v[u],t);if(n.exists(a[s][u])&&!n.exists(w)){delete a[s][u]}else{a[s][u]=w}}if(n.isIE()){i()}else{e(s,b[s])}};function g(u,v,s){if(typeof v==="undefined"){return undefined}var t=s?" !important":"";if(typeof v=="number"){if(isNaN(v)){return undefined}switch(u){case"z-index":case"opacity":return v+t;break;default:if(u.match(/color/i)){return"#"+n.pad(v.toString(16),6)}else{return Math.ceil(v)+"px"+t}break}}else{return v+t}}function i(){var s="\n";for(var t in a){s+=r(t)}q.innerHTML=s}function e(s,t){if(t){t.innerHTML=r(s)}}function r(s){var t=s+"{\n";var v=a[s];for(var u in v){t+="  "+u+": "+v[u]+";\n"}t+="}\n";return t}n.clearCss=function(t){for(var u in a){if(u.indexOf(t)>=0){delete a[u]}}for(var s in b){if(s.indexOf(t)>=0){b[s].innerHTML=""}}};n.getAbsolutePath=function(y,x){if(!n.exists(x)){x=d.location.href}if(!n.exists(y)){return undefined}if(j(y)){return y}var z=x.substring(0,x.indexOf("://")+3);var w=x.substring(z.length,x.indexOf("/",z.length+1));var t;if(y.indexOf("/")===0){t=y.split("/")}else{var u=x.split("?")[0];u=u.substring(z.length+w.length+1,u.lastIndexOf("/"));t=u.split("/").concat(y.split("/"))}var s=[];for(var v=0;v<t.length;v++){if(!t[v]||!n.exists(t[v])||t[v]=="."){continue}else{if(t[v]==".."){s.pop()}else{s.push(t[v])}}}return z+w+"/"+s.join("/")};function j(t){if(!n.exists(t)){return}var u=t.indexOf("://");var s=t.indexOf("?");return(u>0&&(s<0||(s>u)))}n.extend=function(){var s=n.extend["arguments"];if(s.length>1){for(var u=1;u<s.length;u++){for(var t in s[u]){s[0][t]=s[u][t]}}return s[0]}return null};n.parseDimension=function(s){if(typeof s=="string"){if(s===""){return 0}else{if(s.lastIndexOf("%")>-1){return s}else{return parseInt(s.replace("px",""),10)}}}return s};n.timeFormat=function(s){if(s>0){var t=Math.floor(s/60)<10?"0"+Math.floor(s/60)+":":Math.floor(s/60)+":";t+=Math.floor(s%60)<10?"0"+Math.floor(s%60):Math.floor(s%60);return t}else{return"00:00"}};n.log=function(t,s){if(typeof console!="undefined"&&typeof console.log!="undefined"){if(s){console.log(t,s)}else{console.log(t)}}};n.getBoundingClientRect=function(s){if(typeof s.getBoundingClientRect=="function"){return s.getBoundingClientRect()}else{return{left:s.offsetLeft+d.body.scrollLeft,top:s.offsetTop+d.body.scrollTop,width:s.offsetWidth,height:s.offsetHeight}}};var k=n.userAgentMatch=function(t){var s=navigator.userAgent.toLowerCase();return(s.match(t)!==null)};n.isIE=function(){return k(/msie/i)};n.isMobile=function(){return k(/(iP(hone|ad|od))|android/i)};n.isIOS=function(){return k(/iP(hone|ad|od)/i)};n.isIPod=function(){return k(/iP(hone|od)/i)};n.isIPad=function(){return k(/iPad/i)};n.saveCookie=function(s,t){d.cookie="jwplayer."+s+"="+t+"; path=/"};n.getCookies=function(){var v={};var u=d.cookie.split("; ");for(var t=0;t<u.length;t++){var s=u[t].split("=");if(s[0].indexOf("jwplayer.")==0){v[s[0].substring(9,s[0].length)]=n.serialize(s[1])}}return v};n.ajax=function(w,v,s){var u;if(l(w)&&n.exists(o.XDomainRequest)){u=new XDomainRequest();u.onload=m(u,w,v,s);u.onerror=f(s,w,u)}else{if(n.exists(o.XMLHttpRequest)){u=new XMLHttpRequest();u.onreadystatechange=c(u,w,v,s);u.onerror=f(s,w)}else{if(s){s()}}}try{u.open("GET",w,true);u.send(null)}catch(t){if(s){s(w)}}return u};function l(s){if(s&&s.indexOf("://")>=0){if(s.split("/")[2]!=o.location.href.split("/")[2]){return true}}return false}function f(s,u,t){return function(){s(u)}}function c(t,v,u,s){return function(){if(t.readyState===4){if(t.status==200){m(t,v,u,s)()}else{if(s){s(v)}}}}}function m(t,v,u,s){return function(){if(!n.exists(t.responseXML)){try{var w;if(o.DOMParser){w=(new DOMParser()).parseFromString(t.responseText,"text/xml")}else{w=new ActiveXObject("Microsoft.XMLDOM");w.async="false";w.loadXML(t.responseText)}if(w){t=n.extend({},t,{responseXML:w})}}catch(x){if(s){s(v)}return}}u(t)}}n.typeOf=function(t){var s=typeof t;if(s==="object"){if(!t){return"null"}return(t instanceof Array)?"array":s}else{return s}};n.translateEventResponse=function(u,s){var w=n.extend({},s);if(u==h.events.JWPLAYER_FULLSCREEN&&!w.fullscreen){w.fullscreen=w.message=="true"?true:false;delete w.message}else{if(typeof w.data=="object"){w=n.extend(w,w.data);delete w.data}else{if(typeof w.metadata=="object"){n.deepReplaceKeyName(w.metadata,["__dot__","__spc__","__dsh__"],["."," ","-"])}}}var t=["position","duration","offset"];for(var v in t){if(w[t[v]]){w[t[v]]=Math.round(w[t[v]]*1000)/1000}}return w};n.hasFlash=function(){if(typeof navigator.plugins!="undefined"&&typeof navigator.plugins["Shockwave Flash"]!="undefined"){return true}if(typeof o.ActiveXObject!="undefined"){try{new ActiveXObject("ShockwaveFlash.ShockwaveFlash");return true}catch(s){}}return false};n.wrap=function(s,t){if(s.parentNode){s.parentNode.replaceChild(t,s)}t.appendChild(s)};n.getScriptPath=function(u){var s=d.getElementsByTagName("script");for(var t=0;t<s.length;t++){var v=s[t].src;if(v&&v.indexOf(u)>=0){return v.substr(0,v.indexOf(u))}}return""};h.utils.deepReplaceKeyName=function(z,u,s){switch(h.utils.typeOf(z)){case"array":for(var w=0;w<z.length;w++){z[w]=h.utils.deepReplaceKeyName(z[w],u,s)}break;case"object":for(var v in z){var y,x;if(u instanceof Array&&s instanceof Array){if(u.length!=s.length){continue}else{y=u;x=s}}else{y=[u];x=[s]}var t=v;for(var w=0;w<y.length;w++){t=t.replace(new RegExp(u[w],"g"),s[w])}z[t]=h.utils.deepReplaceKeyName(z[v],u,s);if(v!=t){delete z[v]}}break}return z}})(jwplayer);(function(i){var b="video/",g="audio/",e="image",h="mp4",f={f4a:g+h,f4b:g+h,f4v:b+h,mov:b+"quicktime",m4a:g+h,m4b:g+h,m4p:g+h,m4v:b+h,mp4:b+h,aac:g+"aac",mp3:g+"mp3",ogg:g+"ogg",oga:g+"ogg",ogv:b+"ogg",webm:b+"webm",m3u8:g+"x-mpegurl",wav:g+"x-wav"},b="video",d={flv:b,f4b:b,f4v:b,mov:b,m4a:b,m4v:b,mp4:b,aac:b,mp3:"sound",gif:e,jpeg:e,jpg:e,swf:e,png:e,rtmp:"rtmp",hls:"hls"};var a=i.extensionmap={};for(var c in f){a[c]={html5:f[c]}}for(c in d){if(!a[c]){a[c]={}}a[c].flash=d[c]}})(jwplayer.utils);(function(b){var a=b.loaderstatus={NEW:0,LOADING:1,ERROR:2,COMPLETE:3},c=document;b.scriptloader=function(e){var f=a.NEW,g=jwplayer.events,d=new g.eventdispatcher();b.extend(this,d);this.load=function(){if(f==a.NEW){f=a.LOADING;var h=c.createElement("script");h.onload=function(i){f=a.COMPLETE;d.sendEvent(g.COMPLETE)};h.onerror=function(i){f=a.ERROR;d.sendEvent(g.ERROR)};h.onreadystatechange=function(){if(h.readyState=="loaded"||h.readyState=="complete"){f=a.COMPLETE;d.sendEvent(g.COMPLETE)}};c.getElementsByTagName("head")[0].appendChild(h);h.src=e}};this.getStatus=function(){return f}}})(jwplayer.utils);(function(a){var b=a.exists;a.scale=function(f,e,d,h,i){var g;if(!b(e)){e=1}if(!b(d)){d=1}if(!b(h)){h=0}if(!b(i)){i=0}if(e==1&&d==1&&h==0&&i==0){g=""}else{g="scale("+e+","+d+") translate("+h+"px,"+i+"px)"}};a.transform=function(d,f){var e=d.style;if(b(f)){e.webkitTransform=f;e.MozTransform=f;e.msTransform=f;e.OTransform=f}};a.stretch=function(l,q,p,i,n,j){if(!q){return}if(!p||!i||!n||!j){return}var e=p/n,h=i/j,o=0,k=0,d={},f=(q.tagName.toLowerCase()=="video"),g=false,m;if(f){a.transform(q)}m="jw"+l.toLowerCase();switch(l.toLowerCase()){case c.FILL:if(e>h){n=n*e;j=j*e}else{n=n*h;j=j*h}case c.NONE:e=h=1;case c.EXACTFIT:g=true;break;case c.UNIFORM:if(e>h){n=n*h;j=j*h;if(n/p>0.95){g=true;m="jwexactfit";e=Math.ceil(100*p/n)/100;h=1}}else{n=n*e;j=j*e;if(j/i>0.95){g=true;m="jwexactfit";h=Math.ceil(100*i/j)/100;e=1}}break;default:return;break}if(f){if(g){q.style.width=n+"px";q.style.height=j+"px";o=((p-n)/2)/e;k=((i-j)/2)/h;a.scale(q,e,h,o,k)}else{q.style.width="";q.style.height=""}}else{q.className=q.className.replace(/\s*jw(none|exactfit|uniform|fill)/g,"");q.className+=" "+m}};var c=a.stretching={NONE:"none",FILL:"fill",UNIFORM:"uniform",EXACTFIT:"exactfit"}})(jwplayer.utils);(function(a){a.trim=function(b){return b.replace(/^\s*/,"").replace(/\s*$/,"")};a.pad=function(c,d,b){if(!b){b="0"}while(c.length<d){c=b+c}return c};a.serialize=function(b){if(b==null){return null}else{if(b=="true"){return true}else{if(b=="false"){return false}else{if(isNaN(Number(b))||b.length>5||b.length==0){return b}else{return Number(b)}}}}};a.seconds=function(d){d=d.replace(",",".");var b=d.split(":");var c=0;if(d.substr(-1)=="s"){c=Number(d.substr(0,d.length-1))}else{if(d.substr(-1)=="m"){c=Number(d.substr(0,d.length-1))*60}else{if(d.substr(-1)=="h"){c=Number(d.substr(0,d.length-1))*3600}else{if(b.length>1){c=Number(b[b.length-1]);c+=Number(b[b.length-2])*60;if(b.length==3){c+=Number(b[b.length-3])*3600}}else{c=Number(d)}}}}return c};a.xmlAttribute=function(b,c){for(var d=0;d<b.attributes.length;d++){if(b.attributes[d].name&&b.attributes[d].name.toLowerCase()==c.toLowerCase()){return b.attributes[d].value.toString()}}return""};a.jsonToString=function(f){var h=h||{};if(h&&h.stringify){return h.stringify(f)}var c=typeof(f);if(c!="object"||f===null){if(c=="string"){f='"'+f.replace(/"/g,'\\"')+'"'}else{return String(f)}}else{var g=[],b=(f&&f.constructor==Array);for(var d in f){var e=f[d];switch(typeof(e)){case"string":e='"'+e.replace(/"/g,'\\"')+'"';break;case"object":if(a.exists(e)){e=a.jsonToString(e)}break}if(b){if(typeof(e)!="function"){g.push(String(e))}}else{if(typeof(e)!="function"){g.push('"'+d+'":'+String(e))}}}if(b){return"["+String(g)+"]"}else{return"{"+String(g)+"}"}}};a.extension=function(b){if(!b){return""}b=b.substring(b.lastIndexOf("/")+1,b.length).split("?")[0];if(b.lastIndexOf(".")>-1){return b.substr(b.lastIndexOf(".")+1,b.length).toLowerCase()}}})(jwplayer.utils);(function(b){var d=new RegExp(/^(#|0x)[0-9a-fA-F]{3,6}/);b.typechecker=function(g,f){f=!b.exists(f)?c(g):f;return e(g,f)};function c(f){var g=["true","false","t","f"];if(g.toString().indexOf(f.toLowerCase().replace(" ",""))>=0){return"boolean"}else{if(d.test(f)){return"color"}else{if(!isNaN(parseInt(f,10))&&parseInt(f,10).toString().length==f.length){return"integer"}else{if(!isNaN(parseFloat(f))&&parseFloat(f).toString().length==f.length){return"float"}}}}return"string"}function e(g,f){if(!b.exists(f)){return g}switch(f){case"color":if(g.length>0){return a(g)}return null;case"integer":return parseInt(g,10);case"float":return parseFloat(g);case"boolean":if(g.toLowerCase()=="true"){return true}else{if(g=="1"){return true}}return false}return g}function a(f){f=f.replace(/(#|0x)?([0-9A-F]{3,6})$/gi,"$2");if(f.length==3){f=f.charAt(0)+f.charAt(0)+f.charAt(1)+f.charAt(1)+f.charAt(2)+f.charAt(2)}return parseInt(f,16)}})(jwplayer.utils);(function(a){a.events={COMPLETE:"COMPLETE",ERROR:"ERROR",API_READY:"jwplayerAPIReady",JWPLAYER_READY:"jwplayerReady",JWPLAYER_FULLSCREEN:"jwplayerFullscreen",JWPLAYER_RESIZE:"jwplayerResize",JWPLAYER_ERROR:"jwplayerError",JWPLAYER_MEDIA_BEFOREPLAY:"jwplayerMediaBeforePlay",JWPLAYER_MEDIA_BEFORECOMPLETE:"jwplayerMediaBeforeComplete",JWPLAYER_COMPONENT_SHOW:"jwplayerComponentShow",JWPLAYER_COMPONENT_HIDE:"jwplayerComponentHide",JWPLAYER_MEDIA_BUFFER:"jwplayerMediaBuffer",JWPLAYER_MEDIA_BUFFER_FULL:"jwplayerMediaBufferFull",JWPLAYER_MEDIA_ERROR:"jwplayerMediaError",JWPLAYER_MEDIA_LOADED:"jwplayerMediaLoaded",JWPLAYER_MEDIA_COMPLETE:"jwplayerMediaComplete",JWPLAYER_MEDIA_SEEK:"jwplayerMediaSeek",JWPLAYER_MEDIA_TIME:"jwplayerMediaTime",JWPLAYER_MEDIA_VOLUME:"jwplayerMediaVolume",JWPLAYER_MEDIA_META:"jwplayerMediaMeta",JWPLAYER_MEDIA_MUTE:"jwplayerMediaMute",JWPLAYER_PLAYER_STATE:"jwplayerPlayerState",state:{BUFFERING:"BUFFERING",IDLE:"IDLE",PAUSED:"PAUSED",PLAYING:"PLAYING",COMPLETED:"COMPLETED"},JWPLAYER_PLAYLIST_LOADED:"jwplayerPlaylistLoaded",JWPLAYER_PLAYLIST_ITEM:"jwplayerPlaylistItem",JWPLAYER_INSTREAM_CLICK:"jwplayerInstreamClicked",JWPLAYER_INSTREAM_DESTROYED:"jwplayerInstreamDestroyed"}})(jwplayer);(function(a){var b=jwplayer.utils;a.eventdispatcher=function(h,c){var e=h,g=c,f,d;this.resetEventListeners=function(){f={};d=[]};this.resetEventListeners();this.addEventListener=function(i,l,k){try{if(!b.exists(f[i])){f[i]=[]}if(b.typeOf(l)=="string"){l=(new Function("return "+l))()}f[i].push({listener:l,count:k})}catch(j){b.log("error",j)}return false};this.removeEventListener=function(j,l){if(!f[j]){return}try{for(var i=0;i<f[j].length;i++){if(f[j][i].listener.toString()==l.toString()){f[j].splice(i,1);break}}}catch(k){b.log("error",k)}return false};this.addGlobalListener=function(k,j){try{if(b.typeOf(k)=="string"){k=(new Function("return "+k))()}d.push({listener:k,count:j})}catch(i){b.log("error",i)}return false};this.removeGlobalListener=function(k){if(!k){return}try{for(var i=0;i<d.length;i++){if(d[i].listener.toString()==k.toString()){d.splice(i,1);break}}}catch(j){b.log("error",j)}return false};this.sendEvent=function(k,m){if(!b.exists(m)){m={}}b.extend(m,{id:e,version:jwplayer.version,type:k});if(g){b.log(k,m)}if(b.typeOf(f[k])!="undefined"){for(var j=0;j<f[k].length;j++){try{f[k][j].listener(m)}catch(l){b.log("There was an error while handling a listener: "+l.toString(),f[k][j].listener)}if(f[k][j]){if(f[k][j].count===1){delete f[k][j]}else{if(f[k][j].count>0){f[k][j].count=f[k][j].count-1}}}}}var i;for(i=0;i<d.length;i++){try{d[i].listener(m)}catch(l){b.log("There was an error while handling a listener: "+l.toString(),d[i].listener)}if(d[i]){if(d[i].count===1){delete d[i]}else{if(d[i].count>0){d[i].count=d[i].count-1}}}}}}})(jwplayer.events);(function(a){var c={};var b={};a.plugins=function(){};a.plugins.loadPlugins=function(e,d){b[e]=new a.plugins.pluginloader(new a.plugins.model(c),d);return b[e]};a.plugins.registerPlugin=function(h,f,e){var d=a.utils.getPluginName(h);if(c[d]){c[d].registerPlugin(h,f,e)}else{a.utils.log("A plugin ("+h+") was registered with the player that was not loaded. Please check your configuration.");for(var g in b){b[g].pluginFailed()}}}})(jwplayer);(function(a){a.plugins.model=function(b){this.addPlugin=function(c){var d=a.utils.getPluginName(c);if(!b[d]){b[d]=new a.plugins.plugin(c)}return b[d]}}})(jwplayer);(function(a){a.plugins.pluginmodes={FLASH:"FLASH",JAVASCRIPT:"JAVASCRIPT",HYBRID:"HYBRID"};a.plugins.plugin=function(b){var d="http://plugins.longtailvideo.com";var i=a.utils.loaderstatus.NEW;var j;var h;var k;var c=new a.events.eventdispatcher();a.utils.extend(this,c);function e(){switch(a.utils.getPluginPathType(b)){case a.utils.pluginPathType.ABSOLUTE:return b;case a.utils.pluginPathType.RELATIVE:return a.utils.getAbsolutePath(b,window.location.href);case a.utils.pluginPathType.CDN:var n=a.utils.getPluginName(b);var m=a.utils.getPluginVersion(b);var l=(window.location.href.indexOf("https://")==0)?d.replace("http://","https://secure"):d;return l+"/"+a.version.split(".")[0]+"/"+n+"/"+n+(m!==""?("-"+m):"")+".js"}}function g(l){k=setTimeout(function(){i=a.utils.loaderstatus.COMPLETE;c.sendEvent(a.events.COMPLETE)},1000)}function f(l){i=a.utils.loaderstatus.ERROR;c.sendEvent(a.events.ERROR)}this.load=function(){if(i==a.utils.loaderstatus.NEW){if(b.lastIndexOf(".swf")>0){j=b;i=a.utils.loaderstatus.COMPLETE;c.sendEvent(a.events.COMPLETE);return}i=a.utils.loaderstatus.LOADING;var l=new a.utils.scriptloader(e());l.addEventListener(a.events.COMPLETE,g);l.addEventListener(a.events.ERROR,f);l.load()}};this.registerPlugin=function(n,m,l){if(k){clearTimeout(k);k=undefined}if(m&&l){j=l;h=m}else{if(typeof m=="string"){j=m}else{if(typeof m=="function"){h=m}else{if(!m&&!l){j=n}}}}i=a.utils.loaderstatus.COMPLETE;c.sendEvent(a.events.COMPLETE)};this.getStatus=function(){return i};this.getPluginName=function(){return a.utils.getPluginName(b)};this.getFlashPath=function(){if(j){switch(a.utils.getPluginPathType(j)){case a.utils.pluginPathType.ABSOLUTE:return j;case a.utils.pluginPathType.RELATIVE:if(b.lastIndexOf(".swf")>0){return a.utils.getAbsolutePath(j,window.location.href)}return a.utils.getAbsolutePath(j,e());case a.utils.pluginPathType.CDN:if(j.indexOf("-")>-1){return j+"h"}return j+"-h"}}return null};this.getJS=function(){return h};this.getPluginmode=function(){if(typeof j!="undefined"&&typeof h!="undefined"){return a.plugins.pluginmodes.HYBRID}else{if(typeof j!="undefined"){return a.plugins.pluginmodes.FLASH}else{if(typeof h!="undefined"){return a.plugins.pluginmodes.JAVASCRIPT}}}};this.getNewInstance=function(m,l,n){return new h(m,l,n)};this.getURL=function(){return b}}})(jwplayer);(function(a){a.plugins.pluginloader=function(h,e){var g={};var j=a.utils.loaderstatus.NEW;var d=false;var b=false;var c=new a.events.eventdispatcher();a.utils.extend(this,c);function f(){if(!b){b=true;j=a.utils.loaderstatus.COMPLETE;c.sendEvent(a.events.COMPLETE)}}function i(){if(!b){var l=0;for(plugin in g){var k=g[plugin].getStatus();if(k==a.utils.loaderstatus.LOADING||k==a.utils.loaderstatus.NEW){l++}}if(l==0){f()}}}this.setupPlugins=function(m,k,r){var l={length:0,plugins:{}};var o={length:0,plugins:{}};for(var n in g){var p=g[n].getPluginName();if(g[n].getFlashPath()){l.plugins[g[n].getFlashPath()]=k.plugins[n];l.plugins[g[n].getFlashPath()].pluginmode=g[n].getPluginmode();l.length++}if(g[n].getJS()){var q=document.createElement("div");q.id=m.id+"_"+p;q.style.position="absolute";q.style.zIndex=o.length+10;o.plugins[p]=g[n].getNewInstance(m,k.plugins[n],q);o.length++;if(typeof o.plugins[p].resize!="undefined"){m.onReady(r(o.plugins[p],q,true));m.onResize(r(o.plugins[p],q))}}}m.plugins=o.plugins;return l};this.load=function(){j=a.utils.loaderstatus.LOADING;d=true;for(var k in e){if(a.utils.exists(k)){g[k]=h.addPlugin(k);g[k].addEventListener(a.events.COMPLETE,i);g[k].addEventListener(a.events.ERROR,i)}}for(k in g){g[k].load()}d=false;i()};this.pluginFailed=function(){f()};this.getStatus=function(){return j}}})(jwplayer);(function(a){a.playlist=function(c){var d=[];if(a.utils.typeOf(c)=="array"){for(var b=0;b<c.length;b++){d.push(new a.playlist.item(c[b]))}}else{d.push(new a.playlist.item(c))}return d}})(jwplayer);(function(a){a.item=function(c){var d={description:"",image:"",mediaid:"",title:"",duration:-1,sources:[]};var b=jwplayer.utils.extend({},d,c);if(b.sources.length==0){b.sources[0]=new a.source(b)}return b}})(jwplayer.playlist);(function(a){a.source=function(c){var b={file:"",width:0,label:undefined,type:undefined};for(var d in b){if(jwplayer.utils.exists(c[d])){b[d]=c[d]}}return b}})(jwplayer.playlist);(function(a){var b=a.utils,c=a.events;var d=a.embed=function(h){var g=new d.config(h.config);g.id=h.id;var i=a.plugins.loadPlugins(h.id,g.plugins);function e(l,k){for(var j in k){if(typeof l[j]=="function"){(l[j]).call(l,k[j])}}}function f(){var k=document.getElementById(h.id);if(i.getStatus()==b.loaderstatus.COMPLETE){for(var n=0;n<g.modes.length;n++){if(g.modes[n].type&&d[g.modes[n].type]){var p=g.modes[n].config;var t=g;if(p){t=b.extend(b.clone(g),p);var s=["file","levels","playlist"];for(var m=0;m<s.length;m++){var q=s[m];if(b.exists(p[q])){for(var l=0;l<s.length;l++){if(l!=m){var o=s[l];if(b.exists(t[o])&&!b.exists(p[o])){delete t[o]}}}}}}var r=new d[g.modes[n].type](k,g.modes[n],t,i,h);if(r.supportsConfig()){r.embed();e(h,g.events);return h}}}if(g.fallback){b.log("No suitable players found and fallback enabled");new d.download(k,g)}else{b.log("No suitable players found and fallback disabled")}}}i.addEventListener(c.COMPLETE,f);i.addEventListener(c.ERROR,f);i.load();return h}})(jwplayer);(function(b){var a=b.utils;function c(d,g,e,h){var f={html5:{type:"html5",src:e?e:g+"jwplayer.html5.js"},flash:{type:"flash",src:h?h:g+"jwplayer.flash.swf"}};if(d=="html5"){return[f.html5,f.flash]}else{return[f.flash,f.html5]}}b.embed.config=function(d){var e={fallback:true,height:300,primary:"html5",width:400,base:undefined},f=a.extend(e,d);if(!f.base){f.base=a.getScriptPath("jwplayer.js")}if(!f.modes){f.modes=c(f.primary,f.base,f.html5player,f.flashplayer)}return f}})(jwplayer);(function(d){var f=d.embed,i=d.utils,g=i.css,h="pointer",c="none",a="block",e="100%",b="absolute";f.download=function(k,u){var n=i.extend({},u),r,l=n.width?n.width:480,o=n.height?n.height:320,v,p,j=u.logo?u.logo:{prefix:"http://l.longtailvideo.com/download/",file:"logo.png",margin:10};function t(){if(n.playlist&&n.playlist.length){try{v=n.playlist[0].sources[0].file;p=n.playlist[0].image}catch(w){return}}else{return}if(j.prefix){j.prefix+=d.version.split(/\W/).splice(0,2).join("/")+"/"}m();q()}function q(){if(k){r=s("a","display",k);s("div","iconbackground",r);s("div","icon",r);s("div","logo",r);if(v){r.setAttribute("href",i.getAbsolutePath(v))}}}function m(){var w="#"+k.id+" .jwdownload";g(w+"display",{width:l,height:o,background:"black center no-repeat "+(p?"url("+p+")":""),"background-size":"contain",position:b,border:c,display:a});g(w+"display div",{position:b,width:e,height:e});g(w+"logo",{bottom:j.margin,left:j.margin,background:"bottom left no-repeat url("+j.prefix+j.file+")"});g(w+"icon",{background:"center no-repeat url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAALdJREFUeNrs18ENgjAYhmFouDOCcQJGcARHgE10BDcgTOIosAGwQOuPwaQeuFRi2p/3Sb6EC5L3QCxZBgAAAOCorLW1zMn65TrlkH4NcV7QNcUQt7Gn7KIhxA+qNIR81spOGkL8oFJDyLJRdosqKDDkK+iX5+d7huzwM40xptMQMkjIOeRGo+VkEVvIPfTGIpKASfYIfT9iCHkHrBEzf4gcUQ56aEzuGK/mw0rHpy4AAACAf3kJMACBxjAQNRckhwAAAABJRU5ErkJggg==)"});g(w+"iconbackground",{background:"center no-repeat url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAEpJREFUeNrszwENADAIA7DhX8ENoBMZ5KR10EryckCJiIiIiIiIiIiIiIiIiIiIiIh8GmkRERERERERERERERERERERERGRHSPAAPlXH1phYpYaAAAAAElFTkSuQmCC)"})}function s(w,z,y){var x=document.createElement(w);x.className="jwdownload"+z;if(y){y.appendChild(x)}return x}t()}})(jwplayer);(function(b){var a=b.utils;b.embed.flash=function(h,i,m,g,k){function n(p,o,q){var r=document.createElement("param");r.setAttribute("name",o);r.setAttribute("value",q);p.appendChild(r)}function l(p,q,o){return function(r){if(o){document.getElementById(k.id+"_wrapper").appendChild(q)}var t=document.getElementById(k.id).getPluginConfig("display");p.resize(t.width,t.height);var s={left:t.x,top:t.y};a.css(q,s)}}function f(q){if(!q){return{}}var s={};for(var p in q){var o=q[p];for(var r in o){s[p+"."+r]=o[r]}}return s}function j(r,q){if(r[q]){var t=r[q];for(var p in t){var o=t[p];if(typeof o=="string"){if(!r[p]){r[p]=o}}else{for(var s in o){if(!r[p+"."+s]){r[p+"."+s]=o[s]}}}}delete r[q]}}function d(r){if(!r){return{}}var u={},t=[];for(var o in r){var q=a.getPluginName(o);var p=r[o];t.push(o);for(var s in p){u[q+"."+s]=p[s]}}u.plugins=t.join(",");return u}function e(q){var o="";for(var p in q){if(typeof(q[p])=="object"){o+=p+"="+encodeURIComponent("[[JSON]]"+a.jsonToString(q[p]))+"&"}else{o+=p+"="+encodeURIComponent(q[p])+"&"}}return o.substring(0,o.length-1)}this.embed=function(){m.id=k.id;var C;var t=a.extend({},m);var p=t.width;var A=t.height;if(h.id+"_wrapper"==h.parentNode.id){C=document.getElementById(h.id+"_wrapper")}else{C=document.createElement("div");C.id=h.id+"_wrapper";a.wrap(h,C);a.css("#"+C.id,{position:"relative",width:p,height:A})}var q=g.setupPlugins(k,t,l);if(q.length>0){a.extend(t,d(q.plugins))}else{delete t.plugins}var u=["height","width","modes","events","primary","base","fallback"];for(var x=0;x<u.length;x++){delete t[u[x]]}var r="opaque";if(t.wmode){r=t.wmode}j(t,"components");j(t,"providers");if(typeof t["dock.position"]!="undefined"){if(t["dock.position"].toString().toLowerCase()=="false"){t.dock=t["dock.position"];delete t["dock.position"]}}var z=a.getCookies();for(var o in z){if(typeof(t[o])=="undefined"){t[o]=z[o]}}var B="#000000",w,s=e(t);if(a.isIE()){var y='<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" bgcolor="'+B+'" width="100%" height="100%" id="'+h.id+'" name="'+h.id+'" tabindex=0"">';y+='<param name="movie" value="'+i.src+'">';y+='<param name="allowfullscreen" value="true">';y+='<param name="allowscriptaccess" value="always">';y+='<param name="seamlesstabbing" value="true">';y+='<param name="wmode" value="'+r+'">';y+='<param name="flashvars" value="'+s+'">';y+="</object>";a.setOuterHTML(h,y);w=document.getElementById(h.id)}else{var v=document.createElement("object");v.setAttribute("type","application/x-shockwave-flash");v.setAttribute("data",i.src);v.setAttribute("width","100%");v.setAttribute("height","100%");v.setAttribute("bgcolor","#000000");v.setAttribute("id",h.id);v.setAttribute("name",h.id);v.setAttribute("tabindex",0);n(v,"allowfullscreen","true");n(v,"allowscriptaccess","always");n(v,"seamlesstabbing","true");n(v,"wmode",r);n(v,"flashvars",s);h.parentNode.replaceChild(v,h);w=v}k.container=w;k.setPlayer(w,"flash")};this.supportsConfig=function(){if(a.hasFlash()){if(m){try{var q=m.playlist[0],o=q.sources;if(typeof o=="undefined"){return true}else{for(var p=0;p<o.length;p++){if(o[p].file&&c(o[p].file,q.type)){return true}}}}catch(r){return false}}else{return true}}return false};function c(p,q){var o=["mp4","flv","aac","mp3","hls","rtmp","youtube"];if(q&&(o.toString().indexOf(q)<0)){return true}var r=a.extension(p);if(!q){q=r}if(!r){return true}if(a.exists(a.extensionmap[r])&&!a.exists(a.extensionmap[r].flash)){return false}return true}}})(jwplayer);(function(c){var a=c.utils,b=a.extensionmap;c.embed.html5=function(e,k,d,f,i){function h(m,n,l){return function(o){var p=document.getElementById(e.id+"_displayarea");if(l){p.appendChild(n)}m.resize(p.clientWidth,p.clientHeight);n.left=p.style.left;n.top=p.style.top}}this.embed=function(){if(c.html5){f.setupPlugins(i,d,h);e.innerHTML="";var l=c.utils.extend({},d);if(l.skin&&l.skin.toLowerCase().indexOf(".zip")>0){l.skin=l.skin.replace(/\.zip/i,".xml")}var m=new c.html5.player(l);i.container=document.getElementById(i.id);i.setPlayer(m,"html5")}else{var n=new a.scriptloader(k.src);n.addEventListener(c.events.COMPLETE,this.embed);n.load()}};this.supportsConfig=function(){if(!!c.vid.canPlayType){try{if(a.typeOf(d.playlist)=="string"){return true}else{var l=d.playlist[0].sources;for(var n=0;n<l.length;n++){var m=l[n].file,o=l[n].type;if(j(m,o)){return true}}}}catch(p){return false}}return false};function j(l,m){if(navigator.userAgent.match(/BlackBerry/i)!==null){return false}var n=a.extension(l);m=m?m:n;if((!m)||!b[m]){return true}return g(b[m].html5)}function g(l){var m=c.vid;if(!l){return true}if(m.canPlayType(l)){return true}else{if(l=="audio/mp3"&&navigator.userAgent.match(/safari/i)){return m.canPlayType("audio/mpeg")}else{return false}}}}})(jwplayer);(function(d){var c=[],a=d.utils,e=d.events,b=e.state;var f=d.api=function(h){this.container=h;this.id=h.id;var p={};var v={};var r={};var g=[];var k=undefined;var n=false;var l=[];var t=undefined;var u={};var m={};this.getBuffer=function(){return this.callInternal("jwGetBuffer")};this.getContainer=function(){return this.container};function i(x,w){return function(C,y,z,A){if(x.renderingMode=="flash"||x.renderingMode=="html5"){var B;if(y){m[C]=y;B="jwplayer('"+x.id+"').callback('"+C+"')"}else{if(!y&&m[C]){delete m[C]}}k.jwDockSetButton(C,B,z,A)}return w}}this.getPlugin=function(w){var y=this;var x={};if(w=="dock"){return a.extend(x,{setButton:i(y,x),show:function(){y.callInternal("jwDockShow");return x},hide:function(){y.callInternal("jwDockHide");return x},onShow:function(z){y.componentListener("dock",e.JWPLAYER_COMPONENT_SHOW,z);return x},onHide:function(z){y.componentListener("dock",e.JWPLAYER_COMPONENT_HIDE,z);return x}})}else{if(w=="controlbar"){return a.extend(x,{show:function(){y.callInternal("jwControlbarShow");return x},hide:function(){y.callInternal("jwControlbarHide");return x},onShow:function(z){y.componentListener("controlbar",e.JWPLAYER_COMPONENT_SHOW,z);return x},onHide:function(z){y.componentListener("controlbar",e.JWPLAYER_COMPONENT_HIDE,z);return x}})}else{if(w=="display"){return a.extend(x,{show:function(){y.callInternal("jwDisplayShow");return x},hide:function(){y.callInternal("jwDisplayHide");return x},onShow:function(z){y.componentListener("display",e.JWPLAYER_COMPONENT_SHOW,z);return x},onHide:function(z){y.componentListener("display",e.JWPLAYER_COMPONENT_HIDE,z);return x}})}else{return this.plugins[w]}}}};this.callback=function(w){if(m[w]){return m[w]()}};this.getDuration=function(){return this.callInternal("jwGetDuration")};this.getFullscreen=function(){return this.callInternal("jwGetFullscreen")};this.getHeight=function(){return this.callInternal("jwGetHeight")};this.getLockState=function(){return this.callInternal("jwGetLockState")};this.getMeta=function(){return this.getItemMeta()};this.getMute=function(){return this.callInternal("jwGetMute")};this.getPlaylist=function(){var x=this.callInternal("jwGetPlaylist");if(this.renderingMode=="flash"){a.deepReplaceKeyName(x,["__dot__","__spc__","__dsh__"],["."," ","-"])}for(var w=0;w<x.length;w++){if(!a.exists(x[w].index)){x[w].index=w}}return x};this.getPlaylistItem=function(w){if(!a.exists(w)){w=this.getCurrentItem()}return this.getPlaylist()[w]};this.getPosition=function(){return this.callInternal("jwGetPosition")};this.getRenderingMode=function(){return this.renderingMode};this.getState=function(){return this.callInternal("jwGetState")};this.getVolume=function(){return this.callInternal("jwGetVolume")};this.getWidth=function(){return this.callInternal("jwGetWidth")};this.setFullscreen=function(w){if(!a.exists(w)){this.callInternal("jwSetFullscreen",!this.callInternal("jwGetFullscreen"))}else{this.callInternal("jwSetFullscreen",w)}return this};this.setMute=function(w){if(!a.exists(w)){this.callInternal("jwSetMute",!this.callInternal("jwGetMute"))}else{this.callInternal("jwSetMute",w)}return this};this.lock=function(){return this};this.unlock=function(){return this};this.load=function(w){this.callInternal("jwLoad",w);return this};this.playlistItem=function(w){this.callInternal("jwPlaylistItem",w);return this};this.playlistPrev=function(){this.callInternal("jwPlaylistPrev");return this};this.playlistNext=function(){this.callInternal("jwPlaylistNext");return this};this.resize=function(x,w){if(this.renderingMode=="html5"){k.jwResize(x,w)}else{this.container.width=x;this.container.height=w;var y=document.getElementById(this.id+"_wrapper");if(y){y.style.width=x+"px";y.style.height=w+"px"}}return this};this.play=function(w){if(typeof w=="undefined"){w=this.getState();if(w==b.PLAYING||w==b.BUFFERING){this.callInternal("jwPause")}else{this.callInternal("jwPlay")}}else{this.callInternal("jwPlay",w)}return this};this.pause=function(w){if(typeof w=="undefined"){w=this.getState();if(w==b.PLAYING||w==b.BUFFERING){this.callInternal("jwPause")}else{this.callInternal("jwPlay")}}else{this.callInternal("jwPause",w)}return this};this.stop=function(){this.callInternal("jwStop");return this};this.seek=function(w){this.callInternal("jwSeek",w);return this};this.setVolume=function(w){this.callInternal("jwSetVolume",w);return this};this.loadInstream=function(x,w){t=new f.instream(this,k,x,w);return t};this.onBufferChange=function(w){return this.eventListener(e.JWPLAYER_MEDIA_BUFFER,w)};this.onBufferFull=function(w){return this.eventListener(e.JWPLAYER_MEDIA_BUFFER_FULL,w)};this.onError=function(w){return this.eventListener(e.JWPLAYER_ERROR,w)};this.onFullscreen=function(w){return this.eventListener(e.JWPLAYER_FULLSCREEN,w)};this.onMeta=function(w){return this.eventListener(e.JWPLAYER_MEDIA_META,w)};this.onMute=function(w){return this.eventListener(e.JWPLAYER_MEDIA_MUTE,w)};this.onPlaylist=function(w){return this.eventListener(e.JWPLAYER_PLAYLIST_LOADED,w)};this.onPlaylistItem=function(w){return this.eventListener(e.JWPLAYER_PLAYLIST_ITEM,w)};this.onReady=function(w){return this.eventListener(e.API_READY,w)};this.onResize=function(w){return this.eventListener(e.JWPLAYER_RESIZE,w)};this.onComplete=function(w){return this.eventListener(e.JWPLAYER_MEDIA_COMPLETE,w)};this.onSeek=function(w){return this.eventListener(e.JWPLAYER_MEDIA_SEEK,w)};this.onTime=function(w){return this.eventListener(e.JWPLAYER_MEDIA_TIME,w)};this.onVolume=function(w){return this.eventListener(e.JWPLAYER_MEDIA_VOLUME,w)};this.onBeforePlay=function(w){return this.eventListener(e.JWPLAYER_MEDIA_BEFOREPLAY,w)};this.onBeforeComplete=function(w){return this.eventListener(e.JWPLAYER_MEDIA_BEFORECOMPLETE,w)};this.onBuffer=function(w){return this.stateListener(b.BUFFERING,w)};this.onPause=function(w){return this.stateListener(b.PAUSED,w)};this.onPlay=function(w){return this.stateListener(b.PLAYING,w)};this.onIdle=function(w){return this.stateListener(b.IDLE,w)};this.remove=function(){if(!n){throw"Cannot call remove() before player is ready";return}s(this)};function s(w){l=[];f.destroyPlayer(w.id)}this.setup=function(x){if(d.embed){var w=this.id;s(this);var y=d(w);y.config=x;return new d.embed(y)}return this};this.registerPlugin=function(y,x,w){d.plugins.registerPlugin(y,x,w)};this.setPlayer=function(w,x){k=w;this.renderingMode=x};this.stateListener=function(w,x){if(!v[w]){v[w]=[];this.eventListener(e.JWPLAYER_PLAYER_STATE,j(w))}v[w].push(x);return this};this.detachMedia=function(){if(this.renderingMode=="html5"){return this.callInternal("jwDetachMedia")}};this.attachMedia=function(){if(this.renderingMode=="html5"){return this.callInternal("jwAttachMedia")}};function j(w){return function(y){var x=y.newstate,A=y.oldstate;if(x==w){var z=v[x];if(z){for(var B=0;B<z.length;B++){if(typeof z[B]=="function"){z[B].call(this,{oldstate:A,newstate:x})}}}}}}this.componentListener=function(w,x,y){if(!r[w]){r[w]={}}if(!r[w][x]){r[w][x]=[];this.eventListener(x,o(w,x))}r[w][x].push(y);return this};function o(w,x){return function(z){if(w==z.component){var y=r[w][x];if(y){for(var A=0;A<y.length;A++){if(typeof y[A]=="function"){y[A].call(this,z)}}}}}}this.addInternalListener=function(w,x){try{w.jwAddEventListener(x,'function(dat) { jwplayer("'+this.id+'").dispatchEvent("'+x+'", dat); }')}catch(y){a.log("Could not add internal listener")}};this.eventListener=function(w,x){if(!p[w]){p[w]=[];if(k&&n){this.addInternalListener(k,w)}}p[w].push(x);return this};this.dispatchEvent=function(y){if(p[y]){var x=a.translateEventResponse(y,arguments[1]);for(var w=0;w<p[y].length;w++){if(typeof p[y][w]=="function"){p[y][w].call(this,x)}}}};this.dispatchInstreamEvent=function(w){if(t){t.dispatchEvent(w,arguments)}};this.callInternal=function(){if(n){var y=arguments[0],w=[];for(var x=1;x<arguments.length;x++){w.push(arguments[x])}if(typeof k!="undefined"&&typeof k[y]=="function"){if(w.length==2){return(k[y])(w[0],w[1])}else{if(w.length==1){return(k[y])(w[0])}else{return(k[y])()}}}return null}else{l.push(arguments)}};this.playerReady=function(x){n=true;if(!k){this.setPlayer(document.getElementById(x.id))}this.container=document.getElementById(this.id);for(var w in p){this.addInternalListener(k,w)}this.eventListener(e.JWPLAYER_PLAYLIST_ITEM,function(y){u={}});this.eventListener(e.JWPLAYER_MEDIA_META,function(y){a.extend(u,y.metadata)});this.dispatchEvent(e.API_READY);while(l.length>0){this.callInternal.apply(this,l.shift())}};this.getItemMeta=function(){return u};this.getCurrentItem=function(){return this.callInternal("jwGetPlaylistIndex")};function q(y,A,z){var w=[];if(!A){A=0}if(!z){z=y.length-1}for(var x=A;x<=z;x++){w.push(y[x])}return w}return this};f.selectPlayer=function(h){var g;if(!a.exists(h)){h=0}if(h.nodeType){g=h}else{if(typeof h=="string"){g=document.getElementById(h)}}if(g){var i=f.playerById(g.id);if(i){return i}else{return f.addPlayer(new f(g))}}else{if(typeof h=="number"){return c[h]}}return null};f.playerById=function(h){for(var g=0;g<c.length;g++){if(c[g].id==h){return c[g]}}return null};f.addPlayer=function(g){for(var h=0;h<c.length;h++){if(c[h]==g){return g}}c.push(g);return g};f.destroyPlayer=function(j){var i=-1;for(var l=0;l<c.length;l++){if(c[l].id==j){i=l;continue}}if(i>=0){var g=document.getElementById(c[i].id);if(document.getElementById(c[i].id+"_wrapper")){g=document.getElementById(c[i].id+"_wrapper")}if(g){var k=document.createElement("div");var h=g.id;if(g.id.indexOf("_wrapper")==g.id.length-8){newID=g.id.substring(0,g.id.length-8)}k.setAttribute("id",h);g.parentNode.replaceChild(k,g)}c.splice(i,1)}return null}})(jwplayer);var _userPlayerReady=(typeof playerReady=="function")?playerReady:undefined;playerReady=function(b){var a=jwplayer.api.playerById(b.id);if(a){a.playerReady(b)}else{jwplayer.api.selectPlayer(b.id).playerReady(b)}if(_userPlayerReady){_userPlayerReady.call(this,b)}};(function(b){var c=b.events,a=c.state;b.api.instream=function(e,k,o,r){var j=e,d=k,i=o,l=r,g={},q={};function h(){j.callInternal("jwLoadInstream",o,r)}function n(s,t){d.jwInstreamAddEventListener(t,'function(dat) { jwplayer("'+j.id+'").dispatchInstreamEvent("'+t+'", dat); }')}function f(s,t){if(!g[s]){g[s]=[];n(d,s)}g[s].push(t);return this}function p(s,t){if(!q[s]){q[s]=[];f(c.JWPLAYER_PLAYER_STATE,m(s))}q[s].push(t);return this}function m(s){return function(u){var t=u.newstate,w=u.oldstate;if(t==s){var v=q[t];if(v){for(var x=0;x<v.length;x++){if(typeof v[x]=="function"){v[x].call(this,{oldstate:w,newstate:t,type:u.type})}}}}}}this.dispatchEvent=function(v,u){if(g[v]){var t=_utils.translateEventResponse(v,u[1]);for(var s=0;s<g[v].length;s++){if(typeof g[v][s]=="function"){g[v][s].call(this,t)}}}};this.onError=function(s){return f(c.JWPLAYER_ERROR,s)};this.onFullscreen=function(s){return f(c.JWPLAYER_FULLSCREEN,s)};this.onMeta=function(s){return f(c.JWPLAYER_MEDIA_META,s)};this.onMute=function(s){return f(c.JWPLAYER_MEDIA_MUTE,s)};this.onComplete=function(s){return f(c.JWPLAYER_MEDIA_COMPLETE,s)};this.onSeek=function(s){return f(c.JWPLAYER_MEDIA_SEEK,s)};this.onTime=function(s){return f(c.JWPLAYER_MEDIA_TIME,s)};this.onVolume=function(s){return f(c.JWPLAYER_MEDIA_VOLUME,s)};this.onBuffer=function(s){return p(a.BUFFERING,s)};this.onPause=function(s){return p(a.PAUSED,s)};this.onPlay=function(s){return p(a.PLAYING,s)};this.onIdle=function(s){return p(a.IDLE,s)};this.onInstreamClick=function(s){return f(c.JWPLAYER_INSTREAM_CLICK,s)};this.onInstreamDestroyed=function(s){return f(c.JWPLAYER_INSTREAM_DESTROYED,s)};this.play=function(s){d.jwInstreamPlay(s)};this.pause=function(s){d.jwInstreamPause(s)};this.seek=function(s){d.jwInstreamSeek(s)};this.destroy=function(){d.jwInstreamDestroy()};this.getState=function(){return d.jwInstreamGetState()};this.getDuration=function(){return d.jwInstreamGetDuration()};this.getPosition=function(){return d.jwInstreamGetPosition()};h()}})(jwplayer)};