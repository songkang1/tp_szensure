;var swfobject=function(){var D="undefined",r="object",S="Shockwave Flash",W="ShockwaveFlash.ShockwaveFlash",q="application/x-shockwave-flash",R="SWFObjectExprInst",x="onreadystatechange",O=window,j=document,t=navigator,T=false,U=[h],o=[],N=[],I=[],l,Q,E,B,J=false,a=false,n,G,m=true,M=function(){var aa=typeof j.getElementById!=D&&typeof j.getElementsByTagName!=D&&typeof j.createElement!=D,ah=t.userAgent.toLowerCase(),Y=t.platform.toLowerCase(),ae=Y?/win/.test(Y):/win/.test(ah),ac=Y?/mac/.test(Y):/mac/.test(ah),af=/webkit/.test(ah)?parseFloat(ah.replace(/^.*webkit\/(\d+(\.\d+)?).*$/,"$1")):false,X=!+"\v1",ag=[0,0,0],ab=null;
if(typeof t.plugins!=D&&typeof t.plugins[S]==r){ab=t.plugins[S].description;if(ab&&!(typeof t.mimeTypes!=D&&t.mimeTypes[q]&&!t.mimeTypes[q].enabledPlugin)){T=true;
X=false;ab=ab.replace(/^.*\s+(\S+\s+\S+$)/,"$1");ag[0]=parseInt(ab.replace(/^(.*)\..*$/,"$1"),10);ag[1]=parseInt(ab.replace(/^.*\.(.*)\s.*$/,"$1"),10);
ag[2]=/[a-zA-Z]/.test(ab)?parseInt(ab.replace(/^.*[a-zA-Z]+(.*)$/,"$1"),10):0;}}else{if(typeof O.ActiveXObject!=D){try{var ad=new ActiveXObject(W);if(ad){ab=ad.GetVariable("$version");
if(ab){X=true;ab=ab.split(" ")[1].split(",");ag=[parseInt(ab[0],10),parseInt(ab[1],10),parseInt(ab[2],10)];}}}catch(Z){}}}return{w3:aa,pv:ag,wk:af,ie:X,win:ae,mac:ac};
}(),k=function(){if(!M.w3){return;}if((typeof j.readyState!=D&&j.readyState=="complete")||(typeof j.readyState==D&&(j.getElementsByTagName("body")[0]||j.body))){f();
}if(!J){if(typeof j.addEventListener!=D){j.addEventListener("DOMContentLoaded",f,false);}if(M.ie&&M.win){j.attachEvent(x,function(){if(j.readyState=="complete"){j.detachEvent(x,arguments.callee);
f();}});if(O==top){(function(){if(J){return;}try{j.documentElement.doScroll("left");}catch(X){setTimeout(arguments.callee,0);return;}f();})();}}if(M.wk){(function(){if(J){return;
}if(!/loaded|complete/.test(j.readyState)){setTimeout(arguments.callee,0);return;}f();})();}s(f);}}();function f(){if(J){return;}try{var Z=j.getElementsByTagName("body")[0].appendChild(C("span"));
Z.parentNode.removeChild(Z);}catch(aa){return;}J=true;var X=U.length;for(var Y=0;Y<X;Y++){U[Y]();}}function K(X){if(J){X();}else{U[U.length]=X;}}function s(Y){if(typeof O.addEventListener!=D){O.addEventListener("load",Y,false);
}else{if(typeof j.addEventListener!=D){j.addEventListener("load",Y,false);}else{if(typeof O.attachEvent!=D){i(O,"onload",Y);}else{if(typeof O.onload=="function"){var X=O.onload;
O.onload=function(){X();Y();};}else{O.onload=Y;}}}}}function h(){if(T){V();}else{H();}}function V(){var X=j.getElementsByTagName("body")[0];var aa=C(r);
aa.setAttribute("type",q);var Z=X.appendChild(aa);if(Z){var Y=0;(function(){if(typeof Z.GetVariable!=D){var ab=Z.GetVariable("$version");if(ab){ab=ab.split(" ")[1].split(",");
M.pv=[parseInt(ab[0],10),parseInt(ab[1],10),parseInt(ab[2],10)];}}else{if(Y<10){Y++;setTimeout(arguments.callee,10);return;}}X.removeChild(aa);Z=null;H();
})();}else{H();}}function H(){var ag=o.length;if(ag>0){for(var af=0;af<ag;af++){var Y=o[af].id;var ab=o[af].callbackFn;var aa={success:false,id:Y};if(M.pv[0]>0){var ae=c(Y);
if(ae){if(F(o[af].swfVersion)&&!(M.wk&&M.wk<312)){w(Y,true);if(ab){aa.success=true;aa.ref=z(Y);ab(aa);}}else{if(o[af].expressInstall&&A()){var ai={};ai.data=o[af].expressInstall;
ai.width=ae.getAttribute("width")||"0";ai.height=ae.getAttribute("height")||"0";if(ae.getAttribute("class")){ai.styleclass=ae.getAttribute("class");}if(ae.getAttribute("align")){ai.align=ae.getAttribute("align");
}var ah={};var X=ae.getElementsByTagName("param");var ac=X.length;for(var ad=0;ad<ac;ad++){if(X[ad].getAttribute("name").toLowerCase()!="movie"){ah[X[ad].getAttribute("name")]=X[ad].getAttribute("value");
}}P(ai,ah,Y,ab);}else{p(ae);if(ab){ab(aa);}}}}}else{w(Y,true);if(ab){var Z=z(Y);if(Z&&typeof Z.SetVariable!=D){aa.success=true;aa.ref=Z;}ab(aa);}}}}}function z(aa){var X=null;
var Y=c(aa);if(Y&&Y.nodeName=="OBJECT"){if(typeof Y.SetVariable!=D){X=Y;}else{var Z=Y.getElementsByTagName(r)[0];if(Z){X=Z;}}}return X;}function A(){return !a&&F("6.0.65")&&(M.win||M.mac)&&!(M.wk&&M.wk<312);
}function P(aa,ab,X,Z){a=true;E=Z||null;B={success:false,id:X};var ae=c(X);if(ae){if(ae.nodeName=="OBJECT"){l=g(ae);Q=null;}else{l=ae;Q=X;}aa.id=R;if(typeof aa.width==D||(!/%$/.test(aa.width)&&parseInt(aa.width,10)<310)){aa.width="310";
}if(typeof aa.height==D||(!/%$/.test(aa.height)&&parseInt(aa.height,10)<137)){aa.height="137";}j.title=j.title.slice(0,47)+" - Flash Player Installation";
var ad=M.ie&&M.win?"ActiveX":"PlugIn",ac="MMredirectURL="+O.location.toString().replace(/&/g,"%26")+"&MMplayerType="+ad+"&MMdoctitle="+j.title;if(typeof ab.flashvars!=D){ab.flashvars+="&"+ac;
}else{ab.flashvars=ac;}if(M.ie&&M.win&&ae.readyState!=4){var Y=C("div");X+="SWFObjectNew";Y.setAttribute("id",X);ae.parentNode.insertBefore(Y,ae);ae.style.display="none";
(function(){if(ae.readyState==4){ae.parentNode.removeChild(ae);}else{setTimeout(arguments.callee,10);}})();}u(aa,ab,X);}}function p(Y){if(M.ie&&M.win&&Y.readyState!=4){var X=C("div");
Y.parentNode.insertBefore(X,Y);X.parentNode.replaceChild(g(Y),X);Y.style.display="none";(function(){if(Y.readyState==4){Y.parentNode.removeChild(Y);}else{setTimeout(arguments.callee,10);
}})();}else{Y.parentNode.replaceChild(g(Y),Y);}}function g(ab){var aa=C("div");if(M.win&&M.ie){aa.innerHTML=ab.innerHTML;}else{var Y=ab.getElementsByTagName(r)[0];
if(Y){var ad=Y.childNodes;if(ad){var X=ad.length;for(var Z=0;Z<X;Z++){if(!(ad[Z].nodeType==1&&ad[Z].nodeName=="PARAM")&&!(ad[Z].nodeType==8)){aa.appendChild(ad[Z].cloneNode(true));
}}}}}return aa;}function u(ai,ag,Y){var X,aa=c(Y);if(M.wk&&M.wk<312){return X;}if(aa){if(typeof ai.id==D){ai.id=Y;}if(M.ie&&M.win){var ah="";for(var ae in ai){if(ai[ae]!=Object.prototype[ae]){if(ae.toLowerCase()=="data"){ag.movie=ai[ae];
}else{if(ae.toLowerCase()=="styleclass"){ah+=' class="'+ai[ae]+'"';}else{if(ae.toLowerCase()!="classid"){ah+=" "+ae+'="'+ai[ae]+'"';}}}}}var af="";for(var ad in ag){if(ag[ad]!=Object.prototype[ad]){af+='<param name="'+ad+'" value="'+ag[ad]+'" />';
}}aa.outerHTML='<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"'+ah+">"+af+"</object>";N[N.length]=ai.id;X=c(ai.id);}else{var Z=C(r);Z.setAttribute("type",q);
for(var ac in ai){if(ai[ac]!=Object.prototype[ac]){if(ac.toLowerCase()=="styleclass"){Z.setAttribute("class",ai[ac]);}else{if(ac.toLowerCase()!="classid"){Z.setAttribute(ac,ai[ac]);
}}}}for(var ab in ag){if(ag[ab]!=Object.prototype[ab]&&ab.toLowerCase()!="movie"){e(Z,ab,ag[ab]);}}aa.parentNode.replaceChild(Z,aa);X=Z;}}return X;}function e(Z,X,Y){var aa=C("param");
aa.setAttribute("name",X);aa.setAttribute("value",Y);Z.appendChild(aa);}function y(Y){var X=c(Y);if(X&&X.nodeName=="OBJECT"){if(M.ie&&M.win){X.style.display="none";
(function(){if(X.readyState==4){b(Y);}else{setTimeout(arguments.callee,10);}})();}else{X.parentNode.removeChild(X);}}}function b(Z){var Y=c(Z);if(Y){for(var X in Y){if(typeof Y[X]=="function"){Y[X]=null;
}}Y.parentNode.removeChild(Y);}}function c(Z){var X=null;try{X=j.getElementById(Z);}catch(Y){}return X;}function C(X){return j.createElement(X);}function i(Z,X,Y){Z.attachEvent(X,Y);
I[I.length]=[Z,X,Y];}function F(Z){var Y=M.pv,X=Z.split(".");X[0]=parseInt(X[0],10);X[1]=parseInt(X[1],10)||0;X[2]=parseInt(X[2],10)||0;return(Y[0]>X[0]||(Y[0]==X[0]&&Y[1]>X[1])||(Y[0]==X[0]&&Y[1]==X[1]&&Y[2]>=X[2]))?true:false;
}function v(ac,Y,ad,ab){if(M.ie&&M.mac){return;}var aa=j.getElementsByTagName("head")[0];if(!aa){return;}var X=(ad&&typeof ad=="string")?ad:"screen";if(ab){n=null;
G=null;}if(!n||G!=X){var Z=C("style");Z.setAttribute("type","text/css");Z.setAttribute("media",X);n=aa.appendChild(Z);if(M.ie&&M.win&&typeof j.styleSheets!=D&&j.styleSheets.length>0){n=j.styleSheets[j.styleSheets.length-1];
}G=X;}if(M.ie&&M.win){if(n&&typeof n.addRule==r){n.addRule(ac,Y);}}else{if(n&&typeof j.createTextNode!=D){n.appendChild(j.createTextNode(ac+" {"+Y+"}"));
}}}function w(Z,X){if(!m){return;}var Y=X?"visible":"hidden";if(J&&c(Z)){c(Z).style.visibility=Y;}else{v("#"+Z,"visibility:"+Y);}}function L(Y){var Z=/[\\\"<>\.;]/;
var X=Z.exec(Y)!=null;return X&&typeof encodeURIComponent!=D?encodeURIComponent(Y):Y;}var d=function(){if(M.ie&&M.win){window.attachEvent("onunload",function(){var ac=I.length;
for(var ab=0;ab<ac;ab++){I[ab][0].detachEvent(I[ab][1],I[ab][2]);}var Z=N.length;for(var aa=0;aa<Z;aa++){y(N[aa]);}for(var Y in M){M[Y]=null;}M=null;for(var X in swfobject){swfobject[X]=null;
}swfobject=null;});}}();return{registerObject:function(ab,X,aa,Z){if(M.w3&&ab&&X){var Y={};Y.id=ab;Y.swfVersion=X;Y.expressInstall=aa;Y.callbackFn=Z;o[o.length]=Y;
w(ab,false);}else{if(Z){Z({success:false,id:ab});}}},getObjectById:function(X){if(M.w3){return z(X);}},embedSWF:function(ab,ah,ae,ag,Y,aa,Z,ad,af,ac){var X={success:false,id:ah};
if(M.w3&&!(M.wk&&M.wk<312)&&ab&&ah&&ae&&ag&&Y){w(ah,false);K(function(){ae+="";ag+="";var aj={};if(af&&typeof af===r){for(var al in af){aj[al]=af[al];}}aj.data=ab;
aj.width=ae;aj.height=ag;var am={};if(ad&&typeof ad===r){for(var ak in ad){am[ak]=ad[ak];}}if(Z&&typeof Z===r){for(var ai in Z){if(typeof am.flashvars!=D){am.flashvars+="&"+ai+"="+Z[ai];
}else{am.flashvars=ai+"="+Z[ai];}}}if(F(Y)){var an=u(aj,am,ah);if(aj.id==ah){w(ah,true);}X.success=true;X.ref=an;}else{if(aa&&A()){aj.data=aa;P(aj,am,ah,ac);
return;}else{w(ah,true);}}if(ac){ac(X);}});}else{if(ac){ac(X);}}},switchOffAutoHideShow:function(){m=false;},ua:M,getFlashPlayerVersion:function(){return{major:M.pv[0],minor:M.pv[1],release:M.pv[2]};
},hasFlashPlayerVersion:F,createSWF:function(Z,Y,X){if(M.w3){return u(Z,Y,X);}else{return undefined;}},showExpressInstall:function(Z,aa,X,Y){if(M.w3&&A()){P(Z,aa,X,Y);
}},removeSWF:function(X){if(M.w3){y(X);}},createCSS:function(aa,Z,Y,X){if(M.w3){v(aa,Z,Y,X);}},addDomLoadEvent:K,addLoadEvent:s,getQueryParamValue:function(aa){var Z=j.location.search||j.location.hash;
if(Z){if(/\?/.test(Z)){Z=Z.split("?")[1];}if(aa==null){return L(Z);}var Y=Z.split("&");for(var X=0;X<Y.length;X++){if(Y[X].substring(0,Y[X].indexOf("="))==aa){return L(Y[X].substring((Y[X].indexOf("=")+1)));
}}}return"";},expressInstallCallback:function(){if(a){var X=c(R);if(X&&l){X.parentNode.replaceChild(l,X);if(Q){w(Q,true);if(M.ie&&M.win){l.style.display="block";
}}if(E){E(B);}}a=false;}}};}();var SWFUpload;if(SWFUpload==undefined){SWFUpload=function(a){this.initSWFUpload(a)}}SWFUpload.prototype.initSWFUpload=function(b){try{this.customSettings={};this.settings=b;this.eventQueue=[];this.movieName="SWFUpload_"+SWFUpload.movieCount++;this.movieElement=null;SWFUpload.instances[this.movieName]=this;this.initSettings();this.loadFlash();this.displayDebugInfo()}catch(a){delete SWFUpload.instances[this.movieName];throw a}};SWFUpload.instances={};SWFUpload.movieCount=0;SWFUpload.version="2.2.0 2009-03-25";SWFUpload.QUEUE_ERROR={QUEUE_LIMIT_EXCEEDED:-100,FILE_EXCEEDS_SIZE_LIMIT:-110,ZERO_BYTE_FILE:-120,INVALID_FILETYPE:-130};SWFUpload.UPLOAD_ERROR={HTTP_ERROR:-200,MISSING_UPLOAD_URL:-210,IO_ERROR:-220,SECURITY_ERROR:-230,UPLOAD_LIMIT_EXCEEDED:-240,UPLOAD_FAILED:-250,SPECIFIED_FILE_ID_NOT_FOUND:-260,FILE_VALIDATION_FAILED:-270,FILE_CANCELLED:-280,UPLOAD_STOPPED:-290};SWFUpload.FILE_STATUS={QUEUED:-1,IN_PROGRESS:-2,ERROR:-3,COMPLETE:-4,CANCELLED:-5};SWFUpload.BUTTON_ACTION={SELECT_FILE:-100,SELECT_FILES:-110,START_UPLOAD:-120};SWFUpload.CURSOR={ARROW:-1,HAND:-2};SWFUpload.WINDOW_MODE={WINDOW:"window",TRANSPARENT:"transparent",OPAQUE:"opaque"};SWFUpload.completeURL=function(a){if(typeof(a)!=="string"||a.match(/^https?:\/\//i)||a.match(/^\//)){return a}var c=window.location.protocol+"//"+window.location.hostname+(window.location.port?":"+window.location.port:"");var b=window.location.pathname.lastIndexOf("/");if(b<=0){path="/"}else{path=window.location.pathname.substr(0,b)+"/"}return path+a};SWFUpload.prototype.initSettings=function(){this.ensureDefault=function(b,a){this.settings[b]=(this.settings[b]==undefined)?a:this.settings[b]};this.ensureDefault("upload_url","");this.ensureDefault("preserve_relative_urls",false);this.ensureDefault("file_post_name","Filedata");this.ensureDefault("post_params",{});this.ensureDefault("use_query_string",false);this.ensureDefault("requeue_on_error",false);this.ensureDefault("http_success",[]);this.ensureDefault("assume_success_timeout",0);this.ensureDefault("file_types","*.*");this.ensureDefault("file_types_description","All Files");this.ensureDefault("file_size_limit",0);this.ensureDefault("file_upload_limit",0);this.ensureDefault("file_queue_limit",0);this.ensureDefault("flash_url","swfupload.swf");this.ensureDefault("prevent_swf_caching",true);this.ensureDefault("button_image_url","");this.ensureDefault("button_width",1);this.ensureDefault("button_height",1);this.ensureDefault("button_text","");this.ensureDefault("button_text_style","color: #000000; font-size: 16pt;");this.ensureDefault("button_text_top_padding",0);this.ensureDefault("button_text_left_padding",0);this.ensureDefault("button_action",SWFUpload.BUTTON_ACTION.SELECT_FILES);this.ensureDefault("button_disabled",false);this.ensureDefault("button_placeholder_id","");this.ensureDefault("button_placeholder",null);this.ensureDefault("button_cursor",SWFUpload.CURSOR.ARROW);this.ensureDefault("button_window_mode",SWFUpload.WINDOW_MODE.WINDOW);this.ensureDefault("debug",false);this.settings.debug_enabled=this.settings.debug;this.settings.return_upload_start_handler=this.returnUploadStart;this.ensureDefault("swfupload_loaded_handler",null);this.ensureDefault("file_dialog_start_handler",null);this.ensureDefault("file_queued_handler",null);this.ensureDefault("file_queue_error_handler",null);this.ensureDefault("file_dialog_complete_handler",null);this.ensureDefault("upload_start_handler",null);this.ensureDefault("upload_progress_handler",null);this.ensureDefault("upload_error_handler",null);this.ensureDefault("upload_success_handler",null);this.ensureDefault("upload_complete_handler",null);this.ensureDefault("debug_handler",this.debugMessage);this.ensureDefault("custom_settings",{});this.customSettings=this.settings.custom_settings;if(!!this.settings.prevent_swf_caching){this.settings.flash_url=this.settings.flash_url+(this.settings.flash_url.indexOf("?")<0?"?":"&")+"preventswfcaching="+new Date().getTime()}if(!this.settings.preserve_relative_urls){this.settings.upload_url=SWFUpload.completeURL(this.settings.upload_url);this.settings.button_image_url=SWFUpload.completeURL(this.settings.button_image_url)}delete this.ensureDefault};SWFUpload.prototype.loadFlash=function(){var a,b;if(document.getElementById(this.movieName)!==null){throw"ID "+this.movieName+" is already in use. The Flash Object could not be added"}a=document.getElementById(this.settings.button_placeholder_id)||this.settings.button_placeholder;if(a==undefined){throw"Could not find the placeholder element: "+this.settings.button_placeholder_id}b=document.createElement("div");b.innerHTML=this.getFlashHTML();a.parentNode.replaceChild(b.firstChild,a);if(window[this.movieName]==undefined){window[this.movieName]=this.getMovieElement()}};SWFUpload.prototype.getFlashHTML=function(){return['<object id="',this.movieName,'" type="application/x-shockwave-flash" data="',this.settings.flash_url,'" width="',this.settings.button_width,'" height="',this.settings.button_height,'" class="swfupload">','<param name="wmode" value="',this.settings.button_window_mode,'" />','<param name="movie" value="',this.settings.flash_url,'" />','<param name="quality" value="high" />','<param name="menu" value="false" />','<param name="allowScriptAccess" value="always" />','<param name="flashvars" value="'+this.getFlashVars()+'" />',"</object>"].join("")};SWFUpload.prototype.getFlashVars=function(){var b=this.buildParamString();var a=this.settings.http_success.join(",");return["movieName=",encodeURIComponent(this.movieName),"&amp;uploadURL=",encodeURIComponent(this.settings.upload_url),"&amp;useQueryString=",encodeURIComponent(this.settings.use_query_string),"&amp;requeueOnError=",encodeURIComponent(this.settings.requeue_on_error),"&amp;httpSuccess=",encodeURIComponent(a),"&amp;assumeSuccessTimeout=",encodeURIComponent(this.settings.assume_success_timeout),"&amp;params=",encodeURIComponent(b),"&amp;filePostName=",encodeURIComponent(this.settings.file_post_name),"&amp;fileTypes=",encodeURIComponent(this.settings.file_types),"&amp;fileTypesDescription=",encodeURIComponent(this.settings.file_types_description),"&amp;fileSizeLimit=",encodeURIComponent(this.settings.file_size_limit),"&amp;fileUploadLimit=",encodeURIComponent(this.settings.file_upload_limit),"&amp;fileQueueLimit=",encodeURIComponent(this.settings.file_queue_limit),"&amp;debugEnabled=",encodeURIComponent(this.settings.debug_enabled),"&amp;buttonImageURL=",encodeURIComponent(this.settings.button_image_url),"&amp;buttonWidth=",encodeURIComponent(this.settings.button_width),"&amp;buttonHeight=",encodeURIComponent(this.settings.button_height),"&amp;buttonText=",encodeURIComponent(this.settings.button_text),"&amp;buttonTextTopPadding=",encodeURIComponent(this.settings.button_text_top_padding),"&amp;buttonTextLeftPadding=",encodeURIComponent(this.settings.button_text_left_padding),"&amp;buttonTextStyle=",encodeURIComponent(this.settings.button_text_style),"&amp;buttonAction=",encodeURIComponent(this.settings.button_action),"&amp;buttonDisabled=",encodeURIComponent(this.settings.button_disabled),"&amp;buttonCursor=",encodeURIComponent(this.settings.button_cursor)].join("")};SWFUpload.prototype.getMovieElement=function(){if(this.movieElement==undefined){this.movieElement=document.getElementById(this.movieName)}if(this.movieElement===null){throw"Could not find Flash element"}return this.movieElement};SWFUpload.prototype.buildParamString=function(){var c=this.settings.post_params;var b=[];if(typeof(c)==="object"){for(var a in c){if(c.hasOwnProperty(a)){b.push(encodeURIComponent(a.toString())+"="+encodeURIComponent(c[a].toString()))}}}return b.join("&amp;")};SWFUpload.prototype.destroy=function(){try{this.cancelUpload(null,false);var a=null;a=this.getMovieElement();if(a&&typeof(a.CallFunction)==="unknown"){for(var c in a){try{if(typeof(a[c])==="function"){a[c]=null}}catch(e){}}try{a.parentNode.removeChild(a)}catch(b){}}window[this.movieName]=null;SWFUpload.instances[this.movieName]=null;delete SWFUpload.instances[this.movieName];this.movieElement=null;this.settings=null;this.customSettings=null;this.eventQueue=null;this.movieName=null;return true}catch(d){return false}};SWFUpload.prototype.displayDebugInfo=function(){this.debug(["---SWFUpload Instance Info---\n","Version: ",SWFUpload.version,"\n","Movie Name: ",this.movieName,"\n","Settings:\n","\t","upload_url:               ",this.settings.upload_url,"\n","\t","flash_url:                ",this.settings.flash_url,"\n","\t","use_query_string:         ",this.settings.use_query_string.toString(),"\n","\t","requeue_on_error:         ",this.settings.requeue_on_error.toString(),"\n","\t","http_success:             ",this.settings.http_success.join(", "),"\n","\t","assume_success_timeout:   ",this.settings.assume_success_timeout,"\n","\t","file_post_name:           ",this.settings.file_post_name,"\n","\t","post_params:              ",this.settings.post_params.toString(),"\n","\t","file_types:               ",this.settings.file_types,"\n","\t","file_types_description:   ",this.settings.file_types_description,"\n","\t","file_size_limit:          ",this.settings.file_size_limit,"\n","\t","file_upload_limit:        ",this.settings.file_upload_limit,"\n","\t","file_queue_limit:         ",this.settings.file_queue_limit,"\n","\t","debug:                    ",this.settings.debug.toString(),"\n","\t","prevent_swf_caching:      ",this.settings.prevent_swf_caching.toString(),"\n","\t","button_placeholder_id:    ",this.settings.button_placeholder_id.toString(),"\n","\t","button_placeholder:       ",(this.settings.button_placeholder?"Set":"Not Set"),"\n","\t","button_image_url:         ",this.settings.button_image_url.toString(),"\n","\t","button_width:             ",this.settings.button_width.toString(),"\n","\t","button_height:            ",this.settings.button_height.toString(),"\n","\t","button_text:              ",this.settings.button_text.toString(),"\n","\t","button_text_style:        ",this.settings.button_text_style.toString(),"\n","\t","button_text_top_padding:  ",this.settings.button_text_top_padding.toString(),"\n","\t","button_text_left_padding: ",this.settings.button_text_left_padding.toString(),"\n","\t","button_action:            ",this.settings.button_action.toString(),"\n","\t","button_disabled:          ",this.settings.button_disabled.toString(),"\n","\t","custom_settings:          ",this.settings.custom_settings.toString(),"\n","Event Handlers:\n","\t","swfupload_loaded_handler assigned:  ",(typeof this.settings.swfupload_loaded_handler==="function").toString(),"\n","\t","file_dialog_start_handler assigned: ",(typeof this.settings.file_dialog_start_handler==="function").toString(),"\n","\t","file_queued_handler assigned:       ",(typeof this.settings.file_queued_handler==="function").toString(),"\n","\t","file_queue_error_handler assigned:  ",(typeof this.settings.file_queue_error_handler==="function").toString(),"\n","\t","upload_start_handler assigned:      ",(typeof this.settings.upload_start_handler==="function").toString(),"\n","\t","upload_progress_handler assigned:   ",(typeof this.settings.upload_progress_handler==="function").toString(),"\n","\t","upload_error_handler assigned:      ",(typeof this.settings.upload_error_handler==="function").toString(),"\n","\t","upload_success_handler assigned:    ",(typeof this.settings.upload_success_handler==="function").toString(),"\n","\t","upload_complete_handler assigned:   ",(typeof this.settings.upload_complete_handler==="function").toString(),"\n","\t","debug_handler assigned:             ",(typeof this.settings.debug_handler==="function").toString(),"\n"].join(""))};SWFUpload.prototype.addSetting=function(b,c,a){if(c==undefined){return(this.settings[b]=a)}else{return(this.settings[b]=c)}};SWFUpload.prototype.getSetting=function(a){if(this.settings[a]!=undefined){return this.settings[a]}return""};SWFUpload.prototype.callFlash=function(functionName,argumentArray){argumentArray=argumentArray||[];var movieElement=this.getMovieElement();var returnValue,returnString;try{returnString=movieElement.CallFunction('<invoke name="'+functionName+'" returntype="javascript">'+__flash__argumentsToXML(argumentArray,0)+"</invoke>");returnValue=eval(returnString)}catch(ex){throw"调用方法 "+functionName+" 失败"}if(returnValue!=undefined&&typeof returnValue.post==="object"){returnValue=this.unescapeFilePostParams(returnValue)};return returnValue};SWFUpload.prototype.selectFile=function(){this.callFlash("SelectFile")};SWFUpload.prototype.selectFiles=function(){this.callFlash("SelectFiles")};SWFUpload.prototype.startUpload=function(a){this.callFlash("StartUpload",[a])};SWFUpload.prototype.cancelUpload=function(a,b){if(b!==false){b=true}this.callFlash("CancelUpload",[a,b])};SWFUpload.prototype.stopUpload=function(){this.callFlash("StopUpload")};SWFUpload.prototype.getStats=function(){return this.callFlash("GetStats")};SWFUpload.prototype.setStats=function(a){this.callFlash("SetStats",[a])};SWFUpload.prototype.getFile=function(a){if(typeof(a)==="number"){return this.callFlash("GetFileByIndex",[a])}else{return this.callFlash("GetFile",[a])}};SWFUpload.prototype.addFileParam=function(a,b,c){return this.callFlash("AddFileParam",[a,b,c])};SWFUpload.prototype.removeFileParam=function(a,b){this.callFlash("RemoveFileParam",[a,b])};SWFUpload.prototype.setUploadURL=function(a){this.settings.upload_url=a.toString();this.callFlash("SetUploadURL",[a])};SWFUpload.prototype.setPostParams=function(a){this.settings.post_params=a;this.callFlash("SetPostParams",[a])};SWFUpload.prototype.addPostParam=function(a,b){this.settings.post_params[a]=b;this.callFlash("SetPostParams",[this.settings.post_params])};SWFUpload.prototype.removePostParam=function(a){delete this.settings.post_params[a];this.callFlash("SetPostParams",[this.settings.post_params])};SWFUpload.prototype.setFileTypes=function(a,b){this.settings.file_types=a;this.settings.file_types_description=b;this.callFlash("SetFileTypes",[a,b])};SWFUpload.prototype.setFileSizeLimit=function(a){this.settings.file_size_limit=a;this.callFlash("SetFileSizeLimit",[a])};SWFUpload.prototype.setFileUploadLimit=function(a){this.settings.file_upload_limit=a;this.callFlash("SetFileUploadLimit",[a])};SWFUpload.prototype.setFileQueueLimit=function(a){this.settings.file_queue_limit=a;this.callFlash("SetFileQueueLimit",[a])};SWFUpload.prototype.setFilePostName=function(a){this.settings.file_post_name=a;this.callFlash("SetFilePostName",[a])};SWFUpload.prototype.setUseQueryString=function(a){this.settings.use_query_string=a;this.callFlash("SetUseQueryString",[a])};SWFUpload.prototype.setRequeueOnError=function(a){this.settings.requeue_on_error=a;this.callFlash("SetRequeueOnError",[a])};SWFUpload.prototype.setHTTPSuccess=function(a){if(typeof a==="string"){a=a.replace(" ","").split(",")}this.settings.http_success=a;this.callFlash("SetHTTPSuccess",[a])};SWFUpload.prototype.setAssumeSuccessTimeout=function(a){this.settings.assume_success_timeout=a;this.callFlash("SetAssumeSuccessTimeout",[a])};SWFUpload.prototype.setDebugEnabled=function(a){this.settings.debug_enabled=a;this.callFlash("SetDebugEnabled",[a])};SWFUpload.prototype.setButtonImageURL=function(a){if(a==undefined){a=""}this.settings.button_image_url=a;this.callFlash("SetButtonImageURL",[a])};SWFUpload.prototype.setButtonDimensions=function(c,a){this.settings.button_width=c;this.settings.button_height=a;var b=this.getMovieElement();if(b!=undefined){b.style.width=c+"px";b.style.height=a+"px"}this.callFlash("SetButtonDimensions",[c,a])};SWFUpload.prototype.setButtonText=function(a){this.settings.button_text=a;this.callFlash("SetButtonText",[a])};SWFUpload.prototype.setButtonTextPadding=function(b,a){this.settings.button_text_top_padding=a;this.settings.button_text_left_padding=b;this.callFlash("SetButtonTextPadding",[b,a])};SWFUpload.prototype.setButtonTextStyle=function(a){this.settings.button_text_style=a;this.callFlash("SetButtonTextStyle",[a])};SWFUpload.prototype.setButtonDisabled=function(a){this.settings.button_disabled=a;this.callFlash("SetButtonDisabled",[a])};SWFUpload.prototype.setButtonAction=function(a){this.settings.button_action=a;this.callFlash("SetButtonAction",[a])};SWFUpload.prototype.setButtonCursor=function(a){this.settings.button_cursor=a;this.callFlash("SetButtonCursor",[a])};SWFUpload.prototype.queueEvent=function(b,c){if(c==undefined){c=[]}else{if(!(c instanceof Array)){c=[c]}}var a=this;if(typeof this.settings[b]==="function"){this.eventQueue.push(function(){this.settings[b].apply(this,c)});setTimeout(function(){a.executeNextEvent()},0)}else{if(this.settings[b]!==null){throw"Event handler "+b+" is unknown or is not a function"}}};SWFUpload.prototype.executeNextEvent=function(){var a=this.eventQueue?this.eventQueue.shift():null;if(typeof(a)==="function"){a.apply(this)}};SWFUpload.prototype.unescapeFilePostParams=function(c){var e=/[$]([0-9a-f]{4})/i;var f={};var d;if(c!=undefined){for(var a in c.post){if(c.post.hasOwnProperty(a)){d=a;var b;while((b=e.exec(d))!==null){d=d.replace(b[0],String.fromCharCode(parseInt("0x"+b[1],16)))}f[d]=c.post[a]}}c.post=f}return c};SWFUpload.prototype.testExternalInterface=function(){try{return this.callFlash("TestExternalInterface")}catch(a){return false}};SWFUpload.prototype.flashReady=function(){var a=this.getMovieElement();if(!a){this.debug("Flash called back ready but the flash movie can't be found.");return}this.cleanUp(a);this.queueEvent("swfupload_loaded_handler")};SWFUpload.prototype.cleanUp=function(a){try{if(this.movieElement&&typeof(a.CallFunction)==="unknown"){this.debug("Removing Flash functions hooks (this should only run in IE and should prevent memory leaks)");for(var c in a){try{if(typeof(a[c])==="function"){a[c]=null}}catch(b){}}}}catch(d){}window.__flash__removeCallback=function(e,f){try{if(e){e[f]=null}}catch(g){}}};SWFUpload.prototype.fileDialogStart=function(){this.queueEvent("file_dialog_start_handler")};SWFUpload.prototype.fileQueued=function(a){a=this.unescapeFilePostParams(a);this.queueEvent("file_queued_handler",a)};SWFUpload.prototype.fileQueueError=function(a,c,b){a=this.unescapeFilePostParams(a);this.queueEvent("file_queue_error_handler",[a,c,b])};SWFUpload.prototype.fileDialogComplete=function(b,c,a){this.queueEvent("file_dialog_complete_handler",[b,c,a])};SWFUpload.prototype.uploadStart=function(a){a=this.unescapeFilePostParams(a);this.queueEvent("return_upload_start_handler",a)};SWFUpload.prototype.returnUploadStart=function(a){var b;if(typeof this.settings.upload_start_handler==="function"){a=this.unescapeFilePostParams(a);b=this.settings.upload_start_handler.call(this,a)}else{if(this.settings.upload_start_handler!=undefined){throw"upload_start_handler must be a function"}}if(b===undefined){b=true}b=!!b;this.callFlash("ReturnUploadStart",[b])};SWFUpload.prototype.uploadProgress=function(a,c,b){a=this.unescapeFilePostParams(a);this.queueEvent("upload_progress_handler",[a,c,b])};SWFUpload.prototype.uploadError=function(a,c,b){a=this.unescapeFilePostParams(a);this.queueEvent("upload_error_handler",[a,c,b])};SWFUpload.prototype.uploadSuccess=function(b,a,c){b=this.unescapeFilePostParams(b);this.queueEvent("upload_success_handler",[b,a,c])};SWFUpload.prototype.uploadComplete=function(a){a=this.unescapeFilePostParams(a);this.queueEvent("upload_complete_handler",a)};SWFUpload.prototype.debug=function(a){this.queueEvent("debug_handler",a)};SWFUpload.prototype.debugMessage=function(c){if(this.settings.debug){var a,d=[];if(typeof c==="object"&&typeof c.name==="string"&&typeof c.message==="string"){for(var b in c){if(c.hasOwnProperty(b)){d.push(b+": "+c[b])}}a=d.join("\n")||"";d=a.split("\n");a="EXCEPTION: "+d.join("\nEXCEPTION: ");SWFUpload.Console.writeLine(a)}else{SWFUpload.Console.writeLine(c)}}};SWFUpload.Console={};SWFUpload.Console.writeLine=function(d){var b,a;try{b=document.getElementById("SWFUpload_Console");if(!b){a=document.createElement("form");document.getElementsByTagName("body")[0].appendChild(a);b=document.createElement("textarea");b.id="SWFUpload_Console";b.style.fontFamily="monospace";b.setAttribute("wrap","off");b.wrap="off";b.style.overflow="auto";b.style.width="700px";b.style.height="350px";b.style.margin="5px";a.appendChild(b)}b.value+=d+"\n";b.scrollTop=b.scrollHeight-b.clientHeight}catch(c){alert("Exception: "+c.name+" Message: "+c.message)}};

(function($) {
	
	var methods = {

		init : function(options, swfUploadOptions) {
			
			return this.each(function() {

				var $this = $(this);

				var $clone = $this.clone();

				var settings = $.extend({

					id	: $this.attr('id'), //上传对象将以此后缀命名

					method : 'post',//文件上传时传输格式，默认是'post',也可以设为'get'
					
					fileObjName : 'files',//服务端接收文件的键值，相当于<input type="file" name="files" />中name="files"，默认files

					formData : {//需要额外传给服务端的数据，其格式要符合JSON格式，@由于使用flash上传时某些浏览器的session会丢失，所以建议加上SESSIONID参数
					
						//SESSIONID : '56767889463465345'
					
					},

					swf : './js/upload.swf',//上传组件swf地址

					uploader : './upload.php',//处理上传的地址

					checkExisting : false,//检测文件名是否相同的地址，默认是false,您如果需要可以自行配置，如checkExisting : './check-exists.php'

					auto : true,//选择文件后是否自动上传，默认是true,如果是false则不会自动上传，可以手动调用upload方法来开始上传，即Manager.file.upload();
					
					fileSizeLimit : '2MB',//单个文件大小限制，可以填写数字或字符串，默认是2MB,如果是数字，其默认单位是KB,如果是字符串，其末尾带的单位须是B、KB、MB、GB，如fileSizeLimit : '2MB'
					
					fileTypeDesc : 'All Files',//上传的文件类型说明，默认是"All Files"，该字符串会出现在选择文件框的类型说明上面
					
					fileTypeExts : '*.*',//上传的文件类型，默认是任何类型文件('*.*')，你也可以填你需要的文件类型，如果有多个类型的话，中间加上";"即可，如fileTypeExts : '*.gif;*.zip;*.swf'
					
					//选择上传文件后会根据给出的html模板生成相应的html显示在页面上，默认值是false
					itemTemplate : '<li id="${fileID}" class="uploadify-queue-item"><div class="file-panel"><i class="size">${fileSize}</i><span class="cancel" onclick="$(\'#${instanceID}\').uploadify(\'cancel\', \'${fileID}\')">删除</span><span class="rotateRight">向右旋转</span><span class="rotateLeft">向左旋转</span></div><div class="uploadify-progress"><div class="uploadify-progress-bar"></div></div><div class="status success"></div><div class="file file-global file-${fileType}"></div><div class="file-desc">${fileName}</div></li>',

					multi : true,//是否允许同时选择多个文件上传，默认是true，即允许同时上传多个文件

					preventCaching : true,//如果设置为true，则会在页面初始化时swf引入的地址加入一个随机数，其目的是与上一次加载的地址加以区分，避免因为缓存影响程序的正常运行

					progressData : 'percentage',//显示文件上传进度的方式，选项有两种'percentage'(百分比形式)与'speed(进度条形式)'，默认是'percentage'
					
					queueID : 'file_queue',//显示队列的元素id，默认是false,则会动态生成，当把某个元素id设为队列id后，列表的html会自动添加到该元素中
					
					queueSizeLimit : 999,//一次上传文件的最大个数，默认是999，如果你只想单个上传，就可以设置为1

					removeCompleted : false,//是否移除文件列表中已经上传完成的文件，默认是false，即上传完后自动移除，如果文件个数少的话，没必要设为true,设了反而看不到到底上传了哪些文件

					removeTimeout : 3,//如果文件上传完成后，而且设置了自动移除(removeCompleted : true)，文件会在指定时间后移除，单位是秒，默认是3秒
					
					requeueErrors : false,//如果上传中某个文件出现了错误，文件是否会重新添加到队列里面，默认是false，即遇到错误，则自动从列表中删除该文件
					
					successTimeout : 30,//上传完成后，等待服务器响应的时间，如果响应了，则立即判定上传成功，如果没有响应但过了这里设置的时间，也会判定为上传成功，单位是秒，默认30秒
					
					uploadLimit : 999,//对上传文件的总数的限制，即会自动计算所有上传文件的总数，当超过这个数目时，会提示警告并阻止上传
					
					width : 200,//上传按钮的长度，默认200

					height : 45,//上传按钮的高度，默认45

					buttonText : '点击选择文件',//按钮显示的文本

					buttonClass : '',//给按钮添加一个类名，如果你需要额外加一些样式的话，默认是空字符串
					
					buttonCursor : 'hand',//鼠标悬浮在按钮上显示的鼠标形状，默认是手型，如果您定义了其它样式，可能会影响这个设置

					buttonImage : null,//按钮背景图片地址，默认是没有的，您需要把两张图片竖直拼在一起，两张图片中间不要有空隙，且两张图片宽、高要一致，上面一张会在非悬浮时显示，下面一张会在悬浮时显示，如buttonImage : 'images/Manager.png'

					overrideEvents : []//可以重写的事件数组，默认是空的，这里是所有的事件：onCancel,onClearQueue,onDestroy,onDialogClose,onDialogOpen,onDisable,onEnable,onFallback,onInit,onQueueComplete,onSelect,onSelectError,onSWFReady,onUploadComplete,onUploadError,onUploadProgress,onUploadStart,onUploadSuccess

				}, options);

				var swfUploadSettings = {
					assume_success_timeout   : settings.successTimeout,
					button_placeholder_id    : settings.id,
					button_width             : settings.width,
					button_height            : settings.height,
					button_text              : null,
					button_text_style        : null,
					button_text_top_padding  : 0,
					button_text_left_padding : 0,
					button_action            : (settings.multi ? SWFUpload.BUTTON_ACTION.SELECT_FILES : SWFUpload.BUTTON_ACTION.SELECT_FILE),
					button_disabled          : false,
					button_cursor            : (settings.buttonCursor == 'arrow' ? SWFUpload.CURSOR.ARROW : SWFUpload.CURSOR.HAND),
					button_window_mode       : SWFUpload.WINDOW_MODE.TRANSPARENT,
					debug                    : settings.debug,						
					requeue_on_error         : settings.requeueErrors,
					file_post_name           : settings.fileObjName,
					file_size_limit          : settings.fileSizeLimit,
					file_types               : settings.fileTypeExts,
					file_types_description   : settings.fileTypeDesc,
					file_queue_limit         : settings.queueSizeLimit,
					file_upload_limit        : settings.uploadLimit,
					flash_url                : settings.swf,					
					prevent_swf_caching      : settings.preventCaching,
					post_params              : settings.formData,
					upload_url               : settings.uploader,
					use_query_string         : (settings.method == 'get'),
					file_dialog_complete_handler : handlers.onDialogClose,
					file_dialog_start_handler    : handlers.onDialogOpen,
					file_queued_handler          : handlers.onSelect,
					file_queue_error_handler     : handlers.onSelectError,
					swfupload_loaded_handler     : settings.onSWFReady,
					upload_complete_handler      : handlers.onUploadComplete,
					upload_error_handler         : handlers.onUploadError,
					upload_progress_handler      : handlers.onUploadProgress,
					upload_start_handler         : handlers.onUploadStart,
					upload_success_handler       : handlers.onUploadSuccess
				}

				if (swfUploadOptions) {
					swfUploadSettings = $.extend(swfUploadSettings, swfUploadOptions);
				}

				swfUploadSettings = $.extend(swfUploadSettings, settings);

				var playerVersion  = swfobject.getFlashPlayerVersion();
				var flashInstalled = (playerVersion.major >= 9);

				if (flashInstalled) {

					var swfuploadify;

					swfuploadify = new SWFUpload(swfUploadSettings);

					$this.data('uploadify', swfuploadify);

					var $wrapper = $('<div />', {
						'id'    : settings.id,
						'class' : 'uploadify',
						'css'   : {
									'height'   : settings.height + 'px',
									'width'    : settings.width + 'px'
								  }
					});

					$('#' + swfuploadify.movieName).wrap($wrapper);

					$wrapper = $('#' + settings.id);

					$wrapper.data('uploadify', swfuploadify);

					var $button = $('<div />', {
						'id'    : settings.id + '-button',
						'class' : 'uploadify-button ' + settings.buttonClass
					});
					if (settings.buttonImage) {
						$button.css({
							'background-image' : "url('" + settings.buttonImage + "')",
							'text-indent'      : '-9999px'
						});
					}
					$button.html('<span class="uploadify-button-text">' + settings.buttonText + '</span>')
					.css({
						'height'      : settings.height + 'px',
						'line-height' : settings.height + 'px',
						'width'       : settings.width + 'px'
					});

					$wrapper.append($button);

					$('#' + swfuploadify.movieName).css({
						'position' : 'absolute',
						'z-index'  : 1
					});

					if (!settings.queueID) {
						var $queue = $('<div />', {
							'id'    : settings.id + '-queue',
							'class' : 'uploadify-queue'
						});
						$wrapper.after($queue);
						swfuploadify.settings.queueID      = settings.id + '-queue';
						swfuploadify.settings.defaultQueue = true;
					}

					swfuploadify.queueData = {
						files              : {},
						filesSelected      : 0,
						filesQueued        : 0,
						filesReplaced      : 0,
						filesCancelled     : 0,
						filesErrored       : 0,
						uploadsSuccessful  : 0,
						uploadsErrored     : 0,
						averageSpeed       : 0,
						queueLength        : 0,
						queueSize          : 0,
						uploadSize         : 0,
						queueBytesUploaded : 0,
						uploadQueue        : [],
						errorMsg           : '部分文件没有被成功添加到列表中:'
					};

					Manager.swfs.push(swfuploadify);

					swfuploadify.original = $clone;
					swfuploadify.wrapper  = $wrapper;
					swfuploadify.button   = $button;
					swfuploadify.queue    = $queue;

					if (settings.onInit) settings.onInit.call($this, swfuploadify);

				} else {

					if (settings.onFallback) settings.onFallback.call($this);

				}

			});

		},

		cancel : function(fileID, supressEvent) {

			var args = arguments;

			this.each(function() {

				var $this        = $(this),
					swfuploadify = $this.data('uploadify'),
					settings     = swfuploadify.settings,
					delay        = -1;

				if (args[0]) {

					if (args[0] == '*') {
						var queueItemCount = swfuploadify.queueData.queueLength;
						$('#' + settings.queueID).find('.uploadify-queue-item').each(function() {
							delay++;
							if (args[1] === true) {
								swfuploadify.cancelUpload($(this).attr('id'), false);
							} else {
								swfuploadify.cancelUpload($(this).attr('id'));
							}
							$(this).find('.data').removeClass('data').html(' - Cancelled');
							$(this).find('.uploadify-progress-bar').remove();
							$(this).delay(100 * delay).fadeOut(200, function() {
								$(this).remove();
							});
						});
						swfuploadify.queueData.queueSize   = 0;
						swfuploadify.queueData.queueLength = 0;

						if (settings.onClearQueue) settings.onClearQueue.call($this, queueItemCount);
					} else {
						for (var n = 0; n < args.length; n++) {
							swfuploadify.cancelUpload(args[n]);
							$('#' + args[n]).find('.data').removeClass('data').html(' - Cancelled');
							$('#' + args[n]).find('.uploadify-progress-bar').remove();
							$('#' + args[n]).delay(100 * n).fadeOut(200, function() {
								$(this).remove();
							});
						swfuploadify.queueData.queueSize   -= 1;
						swfuploadify.queueData.queueLength -= 1;
						}
					}
				} else {
					var item = $('#' + settings.queueID).find('.uploadify-queue-item').get(0);
					$item = $(item);
					swfuploadify.cancelUpload($item.attr('id'));
					$item.find('.data').removeClass('data').html(' - Cancelled');
					$item.find('.uploadify-progress-bar').remove();
					$item.fadeOut(200, function() {
						$(this).remove();
					});
				}
			});

		},

		destroy : function() {

			this.each(function() {

				var $this        = $(this),
					swfuploadify = $this.data('uploadify'),
					settings     = swfuploadify.settings;

				swfuploadify.destroy();

				if (settings.defaultQueue) {
					$('#' + settings.queueID).remove();
				}

				$('#' + settings.id).replaceWith(swfuploadify.original);

				if (settings.onDestroy) settings.onDestroy.call(this);

				delete swfuploadify;
			});

		},

		disable : function(isDisabled) {
			
			this.each(function() {

				var $this        = $(this),
					swfuploadify = $this.data('uploadify'),
					settings     = swfuploadify.settings;

				if (isDisabled) {
					swfuploadify.button.addClass('disabled');
					if (settings.onDisable) settings.onDisable.call(this);
				} else {
					swfuploadify.button.removeClass('disabled');
					if (settings.onEnable) settings.onEnable.call(this);
				}

				swfuploadify.setButtonDisabled(isDisabled);
			});

		},

		settings : function(name, value, resetObjects) {

			var args        = arguments;
			var returnValue = value;

			this.each(function() {

				var $this        = $(this),
					swfuploadify = $this.data('uploadify'),
					settings     = swfuploadify.settings;

				if (typeof(args[0]) == 'object') {
					for (var n in value) {
						setData(n,value[n]);
					}
				}
				if (args.length === 1) {
					returnValue =  settings[name];
				} else {
					switch (name) {
						case 'uploader':
							swfuploadify.setUploadURL(value);
							break;
						case 'formData':
							if (!resetObjects) {
								value = $.extend(settings.formData, value);
							}
							swfuploadify.setPostParams(settings.formData);
							break;
						case 'method':
							if (value == 'get') {
								swfuploadify.setUseQueryString(true);
							} else {
								swfuploadify.setUseQueryString(false);
							}
							break;
						case 'fileObjName':
							swfuploadify.setFilePostName(value);
							break;
						case 'fileTypeExts':
							swfuploadify.setFileTypes(value, settings.fileTypeDesc);
							break;
						case 'fileTypeDesc':
							swfuploadify.setFileTypes(settings.fileTypeExts, value);
							break;
						case 'fileSizeLimit':
							swfuploadify.setFileSizeLimit(value);
							break;
						case 'uploadLimit':
							swfuploadify.setFileUploadLimit(value);
							break;
						case 'queueSizeLimit':
							swfuploadify.setFileQueueLimit(value);
							break;
						case 'buttonImage':
							swfuploadify.button.css('background-image', settingValue);
							break;
						case 'buttonCursor':
							if (value == 'arrow') {
								swfuploadify.setButtonCursor(SWFUpload.CURSOR.ARROW);
							} else {
								swfuploadify.setButtonCursor(SWFUpload.CURSOR.HAND);
							}
							break;
						case 'buttonText':
							$('#' + settings.id + '-button').find('.uploadify-button-text').html(value);
							break;
						case 'width':
							swfuploadify.setButtonDimensions(value, settings.height);
							break;
						case 'height':
							swfuploadify.setButtonDimensions(settings.width, value);
							break;
						case 'multi':
							if (value) {
								swfuploadify.setButtonAction(SWFUpload.BUTTON_ACTION.SELECT_FILES);
							} else {
								swfuploadify.setButtonAction(SWFUpload.BUTTON_ACTION.SELECT_FILE);
							}
							break;
					}
					settings[name] = value;
				}
			});
			
			if (args.length === 1) {
				return returnValue;
			}

		},

		stop : function() {

			this.each(function() {

				var $this        = $(this),
					swfuploadify = $this.data('uploadify');

				swfuploadify.queueData.averageSpeed  = 0;
				swfuploadify.queueData.uploadSize    = 0;
				swfuploadify.queueData.bytesUploaded = 0;
				swfuploadify.queueData.uploadQueue   = [];

				swfuploadify.stopUpload();
			});

		},

		upload : function() {

			var args = arguments;

			this.each(function() {

				var $this        = $(this),
					swfuploadify = $this.data('uploadify');

				swfuploadify.queueData.averageSpeed  = 0;
				swfuploadify.queueData.uploadSize    = 0;
				swfuploadify.queueData.bytesUploaded = 0;
				swfuploadify.queueData.uploadQueue   = [];

				if (args[0]) {
					if (args[0] == '*') {
						swfuploadify.queueData.uploadSize = swfuploadify.queueData.queueSize;
						swfuploadify.queueData.uploadQueue.push('*');
						swfuploadify.startUpload();
					} else {
						for (var n = 0; n < args.length; n++) {
							swfuploadify.queueData.uploadSize += swfuploadify.queueData.files[args[n]].size;
							swfuploadify.queueData.uploadQueue.push(args[n]);
						}
						swfuploadify.startUpload(swfuploadify.queueData.uploadQueue.shift());
					}
				} else {
					swfuploadify.startUpload();
				}

			});

		}

	}

	var handlers = {

		onDialogOpen : function() {
			var settings = this.settings;
			this.queueData.errorMsg       = '部分文件没有被成功添加到列表中:';
			this.queueData.filesReplaced  = 0;
			this.queueData.filesCancelled = 0;
			if (settings.onDialogOpen) settings.onDialogOpen.call(this);
		},
		onDialogClose :  function(filesSelected, filesQueued, queueLength) {

			var settings = this.settings;
			this.queueData.filesErrored  = filesSelected - filesQueued;
			this.queueData.filesSelected = filesSelected;
			this.queueData.filesQueued   = filesQueued - this.queueData.filesCancelled;

			var swfs = Manager.swfs, temp, files = {};

			for(var i = 0; i < swfs.length; i++){

				temp = swfs[i];
			
				if(this.movieName == temp.movieName) continue;

				for(var f in temp.queueData.files) files[f] = temp.queueData.files[f];
			
			}

			i = 0;

			for(var m in this.queueData.files){

				if(files[m]) delete this.queueData.files[m];

				else i++;

			}
			this.queueData.queueLength = i;
			if ($.inArray('onDialogClose', settings.overrideEvents) < 0) {
				if (this.queueData.filesErrored > 0) {
					alert(this.queueData.errorMsg);
				}
			}
			if (settings.onDialogClose) settings.onDialogClose.call(this, this.queueData);
			if (settings.auto) $('#' + settings.id).uploadify('upload', '*');
		},
		onSelect : function(file) {

			file.swf = this;

			var settings = this.settings, files = Manager.getFiles();

			/*for (var n in files) {

				if (files[n].name == file.name){

					if(this.movieName != files[n].swf.movieName) files[n].swf.cancelUpload(files[n].id);
					
					else this.cancelUpload(file.id);

					return;
				}
			}*/

			var fileSize = getUnit(file.size);

			function getUnit(size){

				var n = 1024;
			
				return size < n ? (size + 'Byte') : size < n * n ? (toDecimal((size / n), 2) + 'KB') : (toDecimal(size / (n * n), 2) + 'MB');

				function toDecimal(x){

					var f = parseFloat(x);              

					if (isNaN(f)) return 0;         

					f = Math.round(x * 100) / 100;              

					return f;          

				}
			
			}

			var fileName = file.name;
			if (fileName.length > 15) {

				fileName.replace(file.type, '');
				
				fileName = fileName.substr(0,8) + '..' + file.type;
			
			}

			itemData = {
				'fileID'     : file.id,
				'instanceID' : settings.id,
				'fileName'   : fileName,
				'fileSize'   : fileSize,
				'fileType'   : file.type.replace('.', '')
			}

			if ($.inArray('onSelect', settings.overrideEvents) < 0) {

				itemHTML = settings.itemTemplate;
				for (var d in itemData) {
					itemHTML = itemHTML.replace(new RegExp('\\$\\{' + d + '\\}', 'g'), itemData[d]);
				}

				$('#' + settings.queueID).append(itemHTML);
			
			}

			this.queueData.queueSize += file.size;
			
			this.queueData.files[file.id] = file;

			if (settings.onSelect) settings.onSelect.apply(this, arguments);
		},

		onSelectError : function(file, errorCode, errorMsg) {

			var settings = this.settings;

			if ($.inArray('onSelectError', settings.overrideEvents) < 0) {
				switch(errorCode) {
					case SWFUpload.QUEUE_ERROR.QUEUE_LIMIT_EXCEEDED:
						if (settings.queueSizeLimit > errorMsg) {
							this.queueData.errorMsg += '\n文件数目已经超过最大限制 (' + errorMsg + ').';
						} else {
							this.queueData.errorMsg += '\n文件队列数目已经超过最大限制 (' + settings.queueSizeLimit + ').';
						}
						break;
					case SWFUpload.QUEUE_ERROR.FILE_EXCEEDS_SIZE_LIMIT:
						this.queueData.errorMsg += '\n文件 "' + file.name + '" 大小超过了最大限制 (' + settings.fileSizeLimit + ').';
						break;
					case SWFUpload.QUEUE_ERROR.ZERO_BYTE_FILE:
						this.queueData.errorMsg += '\n文件 "' + file.name + '" 是空的';
						break;
					case SWFUpload.QUEUE_ERROR.FILE_EXCEEDS_SIZE_LIMIT:
						this.queueData.errorMsg += '\n文件 "' + file.name + '" 不允许被上传 (' + settings.fileTypeDesc + ').';
						break;
				}
			}
			if (errorCode != SWFUpload.QUEUE_ERROR.QUEUE_LIMIT_EXCEEDED) {
				delete this.queueData.files[file.id];
			}

			if (settings.onSelectError) settings.onSelectError.apply(this, arguments);
		},

		onQueueComplete : function() {

			if (this.settings.onQueueComplete) this.settings.onQueueComplete.call(this, this.settings.queueData);

		},

		onUploadComplete : function(file) {

			var settings     = this.settings,
				swfuploadify = this;

			var stats = this.getStats();
			this.queueData.queueLength = stats.files_queued;
			if (this.queueData.uploadQueue[0] == '*') {
				if (this.queueData.queueLength > 0) {
					this.startUpload();
				} else {
					this.queueData.uploadQueue = [];

					if (settings.onQueueComplete) settings.onQueueComplete.call(this, this.queueData);
				}
			} else {
				if (this.queueData.uploadQueue.length > 0) {
					this.startUpload(this.queueData.uploadQueue.shift());
				} else {
					this.queueData.uploadQueue = [];

					if (settings.onQueueComplete) settings.onQueueComplete.call(this, this.queueData);
				}
			}

			if ($.inArray('onUploadComplete', settings.overrideEvents) < 0) {
				if (settings.removeCompleted) {
					switch (file.filestatus) {
						case SWFUpload.FILE_STATUS.COMPLETE:
							setTimeout(function() { 
								if ($('#' + file.id)) {
									swfuploadify.queueData.queueSize   -= file.size;
									swfuploadify.queueData.queueLength -= 1;
									delete swfuploadify.queueData.files[file.id]
									$('#' + file.id).fadeOut(500, function() {
										$(this).remove();
									});
								}
							}, settings.removeTimeout * 1000);
							break;
						case SWFUpload.FILE_STATUS.ERROR:
							if (!settings.requeueErrors) {
								setTimeout(function() {
									if ($('#' + file.id)) {
										swfuploadify.queueData.queueSize   -= file.size;
										swfuploadify.queueData.queueLength -= 1;
										delete swfuploadify.queueData.files[file.id];
										$('#' + file.id).fadeOut(500, function() {
											$(this).remove();
										});
									}
								}, settings.removeTimeout * 1000);
							}
							break;
					}
				} else {
					file.uploaded = true;
				}
			}

			if (settings.onUploadComplete) settings.onUploadComplete.call(this, file);

			Manager.uploadComplete(file);

		},

		onUploadSuccess : function(file, data, response) {

			var settings = this.settings;
			var stats    = this.getStats();
			this.queueData.uploadsSuccessful = stats.successful_uploads;
			this.queueData.queueBytesUploaded += file.size;

			if ($.inArray('onUploadSuccess', settings.overrideEvents) < 0) {

				//$('#' + file.id).find('.data').html(' - Complete');

			}

			if (settings.onUploadSuccess) settings.onUploadSuccess.call(this, file, data, response); 
		},

		onUploadError : function(file, errorCode, errorMsg) {

			var settings = this.settings;

			var errorString = '错误信息';
			switch(errorCode) {
				case SWFUpload.UPLOAD_ERROR.HTTP_ERROR:
					errorString = '网络错误 (' + errorMsg + ')';
					break;
				case SWFUpload.UPLOAD_ERROR.MISSING_UPLOAD_URL:
					errorString = '地址不可访问';
					break;
				case SWFUpload.UPLOAD_ERROR.IO_ERROR:
					errorString = '服务器错误';
					break;
				case SWFUpload.UPLOAD_ERROR.SECURITY_ERROR:
					errorString = '验证错误';
					break;
				case SWFUpload.UPLOAD_ERROR.UPLOAD_LIMIT_EXCEEDED:
					alert('超出了上传限制 (' + errorMsg + ').');
					errorString = '上传限制';
					break;
				case SWFUpload.UPLOAD_ERROR.UPLOAD_FAILED:
					errorString = '失败';
					break;
				case SWFUpload.UPLOAD_ERROR.SPECIFIED_FILE_ID_NOT_FOUND:
					break;
				case SWFUpload.UPLOAD_ERROR.FILE_VALIDATION_FAILED:
					errorString = '验证错误';
					break;
				case SWFUpload.UPLOAD_ERROR.FILE_CANCELLED:
					errorString = '取消';
					this.queueData.queueSize   -= file.size;
					this.queueData.queueLength -= 1;
					if (file.status == SWFUpload.FILE_STATUS.IN_PROGRESS || $.inArray(file.id, this.queueData.uploadQueue) >= 0) {
						this.queueData.uploadSize -= file.size;
					}
					if (settings.onCancel) settings.onCancel.call(this, file);
					delete this.queueData.files[file.id];
					break;
				case SWFUpload.UPLOAD_ERROR.UPLOAD_STOPPED:
					errorString = '停止';
					break;
			}

			if ($.inArray('onUploadError', settings.overrideEvents) < 0) {

				if (errorCode != SWFUpload.UPLOAD_ERROR.FILE_CANCELLED && errorCode != SWFUpload.UPLOAD_ERROR.UPLOAD_STOPPED) {
					$('#' + file.id).addClass('uploadify-error');
				}

				$('#' + file.id).find('.uploadify-progress-bar').css('width','0');

				if (errorCode != SWFUpload.UPLOAD_ERROR.SPECIFIED_FILE_ID_NOT_FOUND && file.status != SWFUpload.FILE_STATUS.COMPLETE) {
					$('#' + file.id).find('.size').html(' - ' + errorString);
				}
			}

			var stats = this.getStats();
			this.queueData.uploadsErrored = stats.upload_errors;

			if (settings.onUploadError) settings.onUploadError.call(this, file, errorCode, errorMsg, errorString);
		},

		onUploadProgress : function(file, fileBytesLoaded, fileTotalBytes) {

			var settings = this.settings;

			var timer            = new Date();
			var newTime          = timer.getTime();
			var lapsedTime       = newTime - this.timer;
			if (lapsedTime > 500) {
				this.timer = newTime;
			}
			var lapsedBytes      = fileBytesLoaded - this.bytesLoaded;
			this.bytesLoaded     = fileBytesLoaded;
			var queueBytesLoaded = this.queueData.queueBytesUploaded + fileBytesLoaded;
			var percentage       = Math.round(fileBytesLoaded / fileTotalBytes * 100);

			var suffix = 'KB/s';
			var mbs = 0;
			var kbs = (lapsedBytes / 1024) / (lapsedTime / 1000);
			    kbs = Math.floor(kbs * 10) / 10;
			if (this.queueData.averageSpeed > 0) {
				this.queueData.averageSpeed = Math.floor((this.queueData.averageSpeed + kbs) / 2);
			} else {
				this.queueData.averageSpeed = Math.floor(kbs);
			}
			if (kbs > 1000) {
				mbs = (kbs * .001);
				this.queueData.averageSpeed = Math.floor(mbs);
				suffix = 'MB/s';
			}

			if ($.inArray('onUploadProgress', settings.overrideEvents) < 0) {
				if (settings.progressData == 'percentage') {
					$('#' + file.id).find('.data').html(' - ' + percentage + '%');
				} else if (settings.progressData == 'speed' && lapsedTime > 500) {
					$('#' + file.id).find('.data').html(' - ' + this.queueData.averageSpeed + suffix);
				}
				$('#' + file.id).find('.uploadify-progress-bar').css('width', percentage + '%');
			}

			if (settings.onUploadProgress) settings.onUploadProgress.call(this, file, fileBytesLoaded, fileTotalBytes, queueBytesLoaded, this.queueData.uploadSize);
		},

		onUploadStart : function(file) {

			var settings = this.settings;

			var timer        = new Date();
			this.timer       = timer.getTime();
			this.bytesLoaded = 0;
			if (this.queueData.uploadQueue.length == 0) {
				this.queueData.uploadSize = file.size;
			}
			if (settings.checkExisting) {
				$.ajax({
					type    : 'POST',
					async   : false,
					url     : settings.checkExisting,
					data    : {filename: file.name},
					success : function(data) {
						if (data == 1) {
							var overwrite = confirm('服务端已有名为 "' + file.name + '" 的文件.\n您要继续上传吗?');
							if (!overwrite) {
								this.cancelUpload(file.id);
								$('#' + file.id).remove();
								if (this.queueData.uploadQueue.length > 0 && this.queueData.queueLength > 0) {
									if (this.queueData.uploadQueue[0] == '*') {
										this.startUpload();
									} else {
										this.startUpload(this.queueData.uploadQueue.shift());
									}
								}
							}
						}
					}
				});
			}

			if (settings.onUploadStart) settings.onUploadStart.call(this, file); 
		}

	}

	$.fn.uploadify = function(method) {

		if (methods[method]) {
			return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
		} else if (typeof method === 'object' || !method) {
			return methods.init.apply(this, arguments);
		} else {
			$.error('方法 ' + method + ' 不可用');
		}

	};

	Manager = {
		
		swfs : [],

		getQueueData : function(){
	
			var i = 0, swfs = Manager.swfs, swf = $.extend({}, swfs[0].queueData), temp;

			for(i = 1; i < swfs.length; i++){
			
				temp = swfs[i].queueData;

				swf.filesCancelled += temp.filesCancelled;

				swf.filesErrored += temp.filesErrored;

				swf.filesQueued += temp.filesQueued;

				swf.filesReplaced += temp.filesReplaced;

				swf.filesSelected += temp.filesSelected;

				swf.queueBytesUploaded += temp.queueBytesUploaded;

				swf.queueLength += temp.queueLength;

				swf.queueSize += temp.queueSize;

				swf.uploadSize += temp.uploadSize;

				swf.uploadsErrored += temp.uploadsErrored;

				swf.uploadsSuccessful += temp.uploadsSuccessful;
			
			}

			return swf;
	
		},

		getFiles : function(){
	
			var i = 0, swfs = Manager.swfs, swf = $.extend({}, swfs[0].queueData.files), temp;

			for(i = 1; i < swfs.length; i++){
			
				temp = swfs[i].queueData.files;

				for(var f in temp) swf[f] = temp[f];
			
			}

			return swf;
	
		},

		//文件类
		file : function(opts){

			var __self = this;

			var defaults = {

				/****事件说明****/
				//当上传插件初始化时调用，参数instance是上传对象
				onInit : function(instance){

					__self.outMsg(0, instance);
				
				},

				//当flash对象载成功、正确载入到页面时调用
				onSWFReady : function(){

					__self.outMsg(1);
				
				},

				//如果初始化flash插件时出错的时候调用
				onFallback : function(){

					__self.outMsg(2);
				
				},

				//当您打开选择文件框的时候调用
				onDialogOpen : function(){
				
					__self.outMsg(3);
				
				},

				//当选择文件完成时调用,file是文件对象
				onSelect : function(file){

					__self.outMsg(4, file);
				
				},

				//当选择文件完成时，但这个文件出现错误时调用,file是文件对象，errorCode的错误对象，{QUEUE_LIMIT_EXCEEDED : 超过设置的队列最大数的个数, FILE_EXCEEDS_SIZE_LIMIT : 超过设置的上传文件大小最大值的值, ZERO_BYTE_FILE : 这个文件没有大小, INVALID_FILETYPE : 与设置的上传文件类型不匹配}，errorMsg是错误消息，指示值超过了设置的值
				onSelectError : function(file, errorCode, errorMsg){
				
					__self.outMsg(5, file, errorCode, errorMsg);
				
				},

				//当您关闭选择文件框的时候调用，参数queueData是一个对象，{filesSelected ：选中的文件个数, filesQueued : 文件列表个数(正常没有报错的),filesReplaced : 被替换的文件个数, filesCancelled : 取消了的文件个数, filesErrored : 出错的文件个数}
				onDialogClose : function(queueData){
				
					__self.outMsg(6, queueData);
				
				},

				//选择文件后取消时的时候调用,file为文件对象
				onCancel : function(file){

					__self.outMsg(7, file);

				},

				//在取消整个列表(cancel('*'))的时候调用,queueItemCount这文件个数
				onClearQueue : function(queueItemCount){
				
					__self.outMsg(8, queueItemCount);
				
				},

				//每个文件开始上传时调用，file是文件对象
				onUploadStart : function(file){
				
					__self.outMsg(9, file);
				
				},

				//每个文件上传过程中实时调用，file是文件对象，bytesUploaded是已经上传的大小，bytesTotal是文件总大小，totalBytesUploaded是列表中所有文件已经上传的总大小，totalBytesTotal是列表中所有文件的总大小
				onUploadProgress : function(file, bytesUploaded, bytesTotal, totalBytesUploaded, totalBytesTotal){
				
					__self.outMsg(10, file);
				
				},

				//当上传列表中的文件上传成功时调用，file是文件对象，data是服务端输出的数据，response是服务端响应结果
				onUploadSuccess : function(file, data, response){
				
					__self.outMsg(11, file, data, response);
				
				},

				//当上传列表中的文件上传失败时调用，errorCode是返回的错误代码，errorMsg是返回的错误信息，errorString是错误字符串
				onUploadError : function(file, errorCode, errorMsg, errorString){
				
					__self.outMsg(12, file, errorCode, errorMsg, errorString);
				
				},

				//当上传列表中的每个文件上传完成时调用，不论是失败还是成功，file是文件对象
				onUploadComplete : function(file){
				
					__self.outMsg(13, file);
				
				},

				//当上传列表中的文件都上传完成时调用，参数queueData为一个对象，{uploadsSuccessful : 上传成功的个数, uploadsErrored : 上传失败的个数}
				onQueueComplete : function(queueData){
				
					__self.outMsg(14, queueData);
				
				},

				//设置上传不可用(disable())的时候调用
				onDisable : function(){
				
					__self.outMsg(15);
				
				},

				//设置上传可用(disable())的时候调用
				onEnable : function(){
				
					__self.outMsg(16);
				
				},

				//在销毁上传插件对象(destroy())的时候调用
				onDestroy : function(){
				
					__self.outMsg(17);
				
				},
				
				debug : false
			
			};

			opts = $.extend(defaults, opts);

			this.opts = opts, par = window.parent, type = this.opts.type;

			if(type == 'Images'){
			
				this.opts.fileTypeDesc = '图片';
				 
				this.opts.fileTypeExts = '*.gif;*.jpg;*.jpeg;*.bmp;*.png';
			
			}else if(type == 'Flash'){

				this.opts.fileTypeDesc = '视频';
				 
				this.opts.fileTypeExts = '*.flash;*.swf';
			
			}else{}

			if(Object.prototype.toString.call(this.opts.formData) != '[object Object]') this.opts.formData = {};

			if(par && par.hidoger && par.hidoger.fileManager && typeof par.hidoger.fileManager.additionalData == 'object'){

				this.opts.formData = $.extend(this.opts.formData, par.hidoger.fileManager.additionalData);
		
			}

			$("#btn_swf").uploadify(opts);

			$("#keep_add").uploadify($.extend(opts, {buttonText : '继续添加', width : 120, height : 40}));

			$('#start_upload').click(function(){

				$("#keep_add").uploadify('upload', '*');

				$("#btn_swf").uploadify('upload', '*');
			
			});

			return {

				settings : function(name, value, resetObjects){
				
					$("#btn_swf").uploadify('settings', name, value, resetObjects);

					$("#keep_add").uploadify('settings', name, value, resetObjects);
				
				},

				upload : function(){
				
					$("#btn_swf").uploadify('upload');

					$("#keep_add").uploadify('upload');
				
				},
			
				cancel : function(fileID, suppressEvent){
				
					$("#btn_swf").uploadify('cancel', fileID, suppressEvent);

					$("#keep_add").uploadify('cancel', fileID, suppressEvent);

				},
				
				disable : function(setDisabled){
				
					$("#btn_swf").uploadify('disable', setDisabled);

					$("#keep_add").uploadify('disable', setDisabled);
				
				},
				
				stop : function(){
				
					$("#btn_swf").uploadify('stop');

					$("#keep_add").uploadify('stop');
				
				},
				
				destroy : function(){
				
					$("#btn_swf").uploadify('destroy');

					$("#keep_add").uploadify('destroy');
				
				}
			
			};

		},

		/*方法说明
		
		settings : function(name, value, resetObjects){} 设置或者获取相关属性，name是设置的键名，value是值，resetObjects是是否删除formData值再更新，如果设置为true则删除后再把值添加上去，否则直接覆盖

		upload : function(fileID){} 上传文件，fileID为文件对象的ID，你也可以使用'*'来上传列表中所有的文件
		
		cancel : function(fileID, suppressEvent){} 取消队列里面的文件，fileID是文件对象的ID，你也可以使用'*'来取消列表中所有的文件，suppressEvent是对事件onUploadCancel的控制，如果设置为true，则不会触发onUploadCancel事件，否则会触发

		disable : function(setDisabled){} 设置上传是否不可用，setDisabled为true则是设置为不可用，false则是可用
		
		stop : function(){} 停止上传操作
		
		destroy : function(){} 销毁上传文件对象，可用于多次、动态生成上传对象的时候使用

		*/

		//输出相关提示	
		outMsg : function(){
		
			var args = arguments, n = args[0], queueData = Manager.getQueueData();

			if(n == 6 || n == 7){

				if(queueData.queueSize > 0){

					showKeepArea();

				}else showChooseFile();

				notice();

			}else if(n == 11){
			
				var file = args[1], $item = $('#' + file.id);

				$item.find('span.cancel').remove();

				$item.find('div.uploadify-progress').hide();

				if(arguments[2] == 1){

					$item.find('div.success').show();
			
				}else{
				
					$('#' + file.id).find('.size').html('上传失败');

					$item.find('div.success').removeClass('success').addClass('error').show();
				
				}

			}else if(n == 13){
			
				notice();
			
			}else if(n == -100){}

			//显示选图区域
			function showChooseFile(){

				$('div.keep-area').hide();
			
				$('div.choose-file').css('top', '0').show();
			
			}

			//显示上传区域
			function showKeepArea(){
			
				$('div.choose-file').css('top', '-10000px');

				$('div.keep-area').show();
			
			}

			//显示文件个数与大小
			function notice(){

				var str = '<b>' + queueData.queueLength + '</b>个文件需要上传，大小<b>' + getUnit(queueData.queueSize) + '</b>，已上传<b>' + getUnit(queueData.queueBytesUploaded) + '</b>。';

				$('#file_notice').html(str);

				function getUnit(size){

					var n = 1024;
				
					return size < n ? (size + 'Byte') : size < n * n ? (toDecimal((size / n), 2) + 'KB') : (toDecimal(size / (n * n), 2) + 'MB');

					function toDecimal(x){

						var f = parseFloat(x);              

						if (isNaN(f)) return 0;         

						f = Math.round(x * 100) / 100;              

						return f;          

					}
				
				}
			
			}

			//显示警告
			function warn(){}

		},

		init : function(){

			var __self = this;

			var $manageArea = $('#manage_area'),
				
				$searchArea = $('#search_area');
		
			$('#upload_tab,#manage_tab,#search_tab').click(function(){
			
				var $this = $(this), 
					
					$par = $this.parent(), 
						
					id = $this.attr('id'),
						
					$curArea = $('div.area-checked'),
						
					$now;

				if($this.hasClass('checked')) return;

				$par.find('li.checked').removeClass('checked');

				$this.addClass('checked');

				if(id == 'upload_tab') $now = $('#upload_area');

				else if(id == 'manage_tab'){

					Manager.showList();
					
					$now = $manageArea;

				}else{
					
					Manager.showSearch();
					
					$now = $searchArea;

				}

				$curArea.fadeOut('fast', function(){

					$curArea.removeClass('area-checked');
				
					$now.fadeIn('fast').addClass('area-checked');
				
				});
			
			});

			$('ul.choose-btns > li.sure').click(function(){
			
				var $checkedFile = $(this).parents('div.area').find('div.file-list li.checked');

				if($checkedFile.length < 1){
				
					alert('请选择文件');
				
				}else __self.sure($checkedFile);
			
			});

			$('ul.choose-btns > li.cancel').click(function(){
			
				__self.cancel();
			
			});

			$searchArea.find('input.submit').click(function(){
			
				var key = $(this).prev('input:text').val();

				__self.showSearch(key);
			
			});

			$searchArea.find('input.key').keyup(function(e){

				if(e.keyCode == 13) $(this).next('input.submit').click();
			
			});
		
		},

		showList : function(){

			if(this.lock1) return;

			this.lock1 = true;

			this.showFiles({type : this.opts.type}, $('#file_all_list'))
		
		},

		showSearch : function(key){

			if(this.lock2) return;

			this.lock2 = true;

			var data = {};

			if(key) data.key = key;

			data.type = this.opts.type;
		
			this.showFiles(data, $('#file_search_list'))
		
		},

		//显示文件列表
		showFiles : function(data, $container){

			var __self = this;

			$container.empty().parents('div.area').addClass('loading');

			data = typeof data == 'object' && data != null ? data : {};

			data = $.extend(data, this.opts.formData);

			$.ajax({
			
				url : __self.opts.filelistPah,

				data : data,

				dataType : 'json',

				success : function(data){
				
					var $html = __self.createFile(data);

					if(typeof $html == 'string') $container.append($html);

					else{
					
						for(var i = 0; i < $html.length; i++) $container.append($html[i]);
					
					}
				
				},

				complete : function(){
				
					__self.lock1 = false;

					__self.lock2 = false;

					$container.parents('div.area').removeClass('loading');

				}

			});
	
		},

		//生成单个文件
		createFile : function(data){

			var __self = this, str = '<li class="nofile">没有文件</li>';
			
			if(data && data.list && data.list.length > 0){

				var arr = [], li, i = 0, t, file, ext;
			
				for(; i < data.list.length; i++){

					t = data.list[i];

					ext = t.name.split('.');

					ext = ext[ext.length - 1];

					file = '<div class="img" title="' + t.name + '"><img width="100%" src="' + t.url + '" /><span class="icon"></span></div>';

					if(!/png|jpg|jpeg|gif|bmp/.test(ext)) file = '<div class="img file-global file-' + ext + '" title="' + t.name + '"><span class="icon"></span></div>';
					
					$li = $('<li class="file"><div class="file-panel"><span class="cancel">删除</span></div>' + file + '<div class="desc">' + t.name + '</div></li>');

					$li.click(function(){
					
						__self.checkFile($(this));
					
					}).data('file', {name : t.name, url : t.url, mtime : t.mtime, list : data.list});

					$li.find('span.cancel').click(function(){
					
						__self.delFile($(this).parents('li'));

						return false;
					
					});

					$li.find('div.img').dblclick(function(){
					
						__self.sure($(this).parent());
					
					});

					arr.push($li);

				}

				return arr;
			
			}
			
			return str;
		
		},

		checkFile : function($file){

			if(this.$curFile) this.cancelFile(this.$curFile);

			$file.addClass('checked');

			this.$curFile = $file;
		
		},

		delFile : function($file){

			if(!confirm('确定删除吗?')) return false;

			var file = $file.data('file');

			var data = {url : file.url, name : file.name, mtime : file.mtime};

			data = $.extend(data, this.opts.formData);

			$file.find('div.file-panel').css('display', 'none');

			$.ajax({
			
				url : this.opts.delPath,

				data : data,

				success : function(data){

					if(data == 1){
					
						$file.fadeOut(function(){
						
							$(this).remove();
						
						});
					
					}else{
					
						alert('删除失败');
					
					}
				
				},

				complete : function(){

					$file.find('div.file-panel').css('display', 'block');

				}
			
			});
		
		},

		cancelFile : function($file){

			if(!$file) $file = this.$curFile;
		
			if($file) $file.removeClass('checked');
		
		},

		//选中文件
		sure : function($file){

			var data = $file.data('file'), par = window.parent;

			if(par && par.hidoger && par.hidoger.fileManager && typeof par.hidoger.fileManager.fileActive == 'function'){
				
				par.hidoger.fileManager.fileActive(data.url, data.name, data.list);
		
			}

		},

		cancel : function(){

			var par = window.parent;

			if(par && par.hidoger && par.hidoger.fileManager && typeof par.hidoger.fileManager.hide == 'function'){
				
				par.hidoger.fileManager.hide();
		
			}

		},

		uploadComplete : function(list){

			var par = window.parent;

			if(par && par.hidoger && par.hidoger.fileManager && typeof par.hidoger.fileManager.complete == 'function'){
				
				par.hidoger.fileManager.complete(list);
		
			}
		
		}

	};

	Manager.init();

})($);