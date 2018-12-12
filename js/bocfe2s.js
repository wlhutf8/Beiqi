/*! modernizr 3.1.0 (Custom Build) | MIT *
 * http://modernizr.com/download/?-backgroundsize-bgsizecover-borderradius-boxshadow-cssanimations-csstransforms-csstransforms3d-csstransitions-touchevents !*/
!function(e,n,t){function s(e){var n=C.className,t=Modernizr._config.classPrefix||"";if(S&&(n=n.baseVal),Modernizr._config.enableJSClass){var s=new RegExp("(^|\\s)"+t+"no-js(\\s|$)");n=n.replace(s,"$1"+t+"js$2")}Modernizr._config.enableClasses&&(n+=" "+t+e.join(" "+t),S?C.className.baseVal=n:C.className=n)}function o(e,n){return typeof e===n}function r(){var e,n,t,s,r,i,a;for(var f in x){if(e=[],n=x[f],n.name&&(e.push(n.name.toLowerCase()),n.options&&n.options.aliases&&n.options.aliases.length))for(t=0;t<n.options.aliases.length;t++)e.push(n.options.aliases[t].toLowerCase());for(s=o(n.fn,"function")?n.fn():n.fn,r=0;r<e.length;r++)i=e[r],a=i.split("."),1===a.length?Modernizr[a[0]]=s:(!Modernizr[a[0]]||Modernizr[a[0]]instanceof Boolean||(Modernizr[a[0]]=new Boolean(Modernizr[a[0]])),Modernizr[a[0]][a[1]]=s),y.push((s?"":"no-")+a.join("-"))}}function i(){return"function"!=typeof n.createElement?n.createElement(arguments[0]):S?n.createElementNS.call(n,"http://www.w3.org/2000/svg",arguments[0]):n.createElement.apply(n,arguments)}function a(){var e=n.body;return e||(e=i(S?"svg":"body"),e.fake=!0),e}function f(e,t,s,o){var r,f,u,l,d="modernizr",p=i("div"),c=a();if(parseInt(s,10))for(;s--;)u=i("div"),u.id=o?o[s]:d+(s+1),p.appendChild(u);return r=i("style"),r.type="text/css",r.id="s"+d,(c.fake?c:p).appendChild(r),c.appendChild(p),r.styleSheet?r.styleSheet.cssText=e:r.appendChild(n.createTextNode(e)),p.id=d,c.fake&&(c.style.background="",c.style.overflow="hidden",l=C.style.overflow,C.style.overflow="hidden",C.appendChild(c)),f=t(p,e),c.fake?(c.parentNode.removeChild(c),C.style.overflow=l,C.offsetHeight):p.parentNode.removeChild(p),!!f}function u(e,n){return!!~(""+e).indexOf(n)}function l(e){return e.replace(/([a-z])-([a-z])/g,function(e,n,t){return n+t.toUpperCase()}).replace(/^-/,"")}function d(e,n){return function(){return e.apply(n,arguments)}}function p(e,n,t){var s;for(var r in e)if(e[r]in n)return t===!1?e[r]:(s=n[e[r]],o(s,"function")?d(s,t||n):s);return!1}function c(e){return e.replace(/([A-Z])/g,function(e,n){return"-"+n.toLowerCase()}).replace(/^ms-/,"-ms-")}function m(n,s){var o=n.length;if("CSS"in e&&"supports"in e.CSS){for(;o--;)if(e.CSS.supports(c(n[o]),s))return!0;return!1}if("CSSSupportsRule"in e){for(var r=[];o--;)r.push("("+c(n[o])+":"+s+")");return r=r.join(" or "),f("@supports ("+r+") { #modernizr { position: absolute; } }",function(e){return"absolute"==getComputedStyle(e,null).position})}return t}function v(e,n,s,r){function a(){d&&(delete j.style,delete j.modElem)}if(r=o(r,"undefined")?!1:r,!o(s,"undefined")){var f=m(e,s);if(!o(f,"undefined"))return f}for(var d,p,c,v,h,g=["modernizr","tspan"];!j.style;)d=!0,j.modElem=i(g.shift()),j.style=j.modElem.style;for(c=e.length,p=0;c>p;p++)if(v=e[p],h=j.style[v],u(v,"-")&&(v=l(v)),j.style[v]!==t){if(r||o(s,"undefined"))return a(),"pfx"==n?v:!0;try{j.style[v]=s}catch(y){}if(j.style[v]!=h)return a(),"pfx"==n?v:!0}return a(),!1}function h(e,n,t,s,r){var i=e.charAt(0).toUpperCase()+e.slice(1),a=(e+" "+P.join(i+" ")+i).split(" ");return o(n,"string")||o(n,"undefined")?v(a,n,s,r):(a=(e+" "+E.join(i+" ")+i).split(" "),p(a,n,t))}function g(e,n,s){return h(e,t,t,n,s)}var y=[],x=[],b={_version:"3.1.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,n){var t=this;setTimeout(function(){n(t[e])},0)},addTest:function(e,n,t){x.push({name:e,fn:n,options:t})},addAsyncTest:function(e){x.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=b,Modernizr=new Modernizr;var C=n.documentElement,S="svg"===C.nodeName.toLowerCase(),w=b._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):[];b._prefixes=w;var _="CSS"in e&&"supports"in e.CSS,T="supportsCSS"in e;Modernizr.addTest("supports",_||T);var z=b.testStyles=f;Modernizr.addTest("touchevents",function(){var t;if("ontouchstart"in e||e.DocumentTouch&&n instanceof DocumentTouch)t=!0;else{var s=["@media (",w.join("touch-enabled),("),"heartz",")","{#modernizr{top:9px;position:absolute}}"].join("");z(s,function(e){t=9===e.offsetTop})}return t});var k="Moz O ms Webkit",P=b._config.usePrefixes?k.split(" "):[];b._cssomPrefixes=P;var E=b._config.usePrefixes?k.toLowerCase().split(" "):[];b._domPrefixes=E;var N={elem:i("modernizr")};Modernizr._q.push(function(){delete N.elem});var j={style:N.elem.style};Modernizr._q.unshift(function(){delete j.style}),b.testAllProps=h,b.testAllProps=g,Modernizr.addTest("cssanimations",g("animationName","a",!0)),Modernizr.addTest("backgroundsize",g("backgroundSize","100%",!0)),Modernizr.addTest("csstransitions",g("transition","all",!0)),Modernizr.addTest("csstransforms3d",function(){var e=!!g("perspective","1px",!0),n=Modernizr._config.usePrefixes;if(e&&(!n||"webkitPerspective"in C.style)){var t;Modernizr.supports?t="@supports (perspective: 1px)":(t="@media (transform-3d)",n&&(t+=",(-webkit-transform-3d)")),t+="{#modernizr{left:9px;position:absolute;height:5px;margin:0;padding:0;border:0}}",z(t,function(n){e=9===n.offsetLeft&&5===n.offsetHeight})}return e}),Modernizr.addTest("bgsizecover",g("backgroundSize","cover")),Modernizr.addTest("borderradius",g("borderRadius","0px",!0)),Modernizr.addTest("boxshadow",g("boxShadow","1px 1px",!0)),Modernizr.addTest("csstransforms",function(){return-1===navigator.userAgent.indexOf("Android 2.")&&g("transform","scale(1)",!0)}),r(),s(y),delete b.addTest,delete b.addAsyncTest;for(var A=0;A<Modernizr._q.length;A++)Modernizr._q[A]();e.Modernizr=Modernizr}(window,document);
/*
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 *
 */
//Smooth scroll chrome
!function(a){a(document).ready(function(){function q(){if(document.URL.indexOf("google.com/reader/view")>-1&&(g=!0),i)for(var a=i.split(/[,\n] ?/),b=a.length;b--;)if(document.URL.indexOf(a[b])>-1){D("mousewheel",v),g=!0;break}}function r(){if(document.body){var a=document.body,b=document.documentElement,c=window.innerHeight,d=a.scrollHeight;if(o=document.compatMode.indexOf("CSS")>=0?b:a,n=a,q(),l=!0,top!=self)j=!0;else if(d>c&&(a.offsetHeight<=c||b.offsetHeight<=c)&&(o.style.height="auto",o.offsetHeight<=c)){var e=document.createElement("div");e.style.clear="both",a.appendChild(e)}if(document.URL.indexOf("mail.google.com")>-1){var f=document.createElement("style");f.innerHTML=".iu { visibility: hidden }",(document.getElementsByTagName("head")[0]||b).appendChild(f)}m||(a.style.backgroundAttachment="scroll"),g&&D("keydown",w)}}function u(c,e,f,g){if(g||(g=1e3),F(e,f),s.push({x:e,y:f,lastX:0>e?.99:-.99,lastY:0>f?.99:-.99,start:+new Date}),!t){var h=function(){for(var i=+new Date,j=0,k=0,l=0;l<s.length;l++){var m=s[l],n=i-m.start,o=n>=b,p=o?1:n/b;d&&(p=H(p));var q=m.x*p-m.lastX>>0,r=m.y*p-m.lastY>>0;j+=q,k+=r,m.lastX+=q,m.lastY+=r,o&&(s.splice(l,1),l--)}if(e){var u=c.scrollLeft;c.scrollLeft+=j,j&&c.scrollLeft===u&&(e=0)}if(f){var v=c.scrollTop;c.scrollTop+=k,k&&c.scrollTop===v&&(f=0)}e||f||(s=[]),s.length?setTimeout(h,g/a+1):t=!1};setTimeout(h,0),t=!0}}function v(a){l||r();var b=a.target,d=B(b);if(!d||a.defaultPrevented||E(n,"embed")||E(b,"embed")&&/\.pdf/i.test(b.src))return!0;var e=a.wheelDeltaX||0,f=a.wheelDeltaY||0;e||f||(f=a.wheelDelta||0),Math.abs(e)>1.2&&(e*=c/120),Math.abs(f)>1.2&&(f*=c/120),u(d,-e,-f),a.preventDefault()}function w(a){var b=a.target,c=a.ctrlKey||a.altKey||a.metaKey;if(/input|textarea|embed/i.test(b.nodeName)||b.isContentEditable||a.defaultPrevented||c)return!0;if(E(b,"button")&&a.keyCode===p.spacebar)return!0;var d,e=0,f=0,g=B(n),i=g.clientHeight;switch(g==document.body&&(i=window.innerHeight),a.keyCode){case p.up:f=-h;break;case p.down:f=h;break;case p.spacebar:d=a.shiftKey?1:-1,f=.9*-d*i;break;case p.pageup:f=.9*-i;break;case p.pagedown:f=.9*i;break;case p.home:f=-g.scrollTop;break;case p.end:var j=g.scrollHeight-g.scrollTop-i;f=j>0?j+10:0;break;case p.left:e=-h;break;case p.right:e=h;break;default:return!0}u(g,e,f),a.preventDefault()}function x(a){n=a.target}function A(a,b){for(var c=a.length;c--;)y[z(a[c])]=b;return b}function B(a){var b=[],c=o.scrollHeight;do{var d=y[z(a)];if(d)return A(b,d);if(b.push(a),c===a.scrollHeight){if(!j||o.clientHeight+10<c)return A(b,document.body)}else if(a.clientHeight+10<a.scrollHeight&&(overflow=getComputedStyle(a,"").getPropertyValue("overflow"),"scroll"===overflow||"auto"===overflow))return A(b,a)}while(a=a.parentNode)}function C(a,b,c){window.addEventListener(a,b,c||!1)}function D(a,b,c){window.removeEventListener(a,b,c||!1)}function E(a,b){return a.nodeName.toLowerCase()===b.toLowerCase()}function F(a,b){a=a>0?1:-1,b=b>0?1:-1,(k.x!==a||k.y!==b)&&(k.x=a,k.y=b,s=[])}function G(a){var b,c,d;return a*=e,1>a?b=a-(1-Math.exp(-a)):(c=Math.exp(-1),a-=1,d=1-Math.exp(-a),b=c+d*(1-c)),b*f}function H(a){return a>=1?1:0>=a?0:(1==f&&(f/=G(1)),G(a))}var n,o,a=150,b=600,c=150,d=!0,e=5,f=1,g=!1,h=50,i="",j=!1,k={x:0,y:0},l=!1,m=!0,p={left:37,up:38,right:39,down:40,spacebar:32,pageup:33,pagedown:34,end:35,home:36},s=[],t=!1,y={};setInterval(function(){y={}},1e4);var z=function(){var a=0;return function(b){return b.uniqueID||(b.uniqueID=a++)}}();/chrome/.test(navigator.userAgent.toLowerCase())&&(C("mousedown",x),C("mousewheel",v),C("keydown",w),C("load",r))})}(jQuery);

/*********************************************************************************************/
// 渐入效果
/*********************************************************************************************/
(function(jQuery){
    $.fn.scrollClass = function(config){
        var defaults = {};
        var config = jQuery.extend(defaults, config);
        var target = this;

        function addAction(){
            var length = target.length;
            for(var i=0; i<length; i++){
                if(target.eq(i).hasClass('articleShow')) continue;

                var in_position = target.eq(i).offset().top + 100;
                var window_bottom_position = jQuery(window).scrollTop() + jQuery(window).height();
                if(in_position < window_bottom_position){
                    target.eq(i).addClass('articleShow');
                }
            }
        }
        addAction();

        jQuery(window).on('scroll', function(){
            addAction();
        });
        return target;
    };
} )(jQuery);
/*********************************************************************************************/

$(function(){
    if(!placeholderSupport()){   // 判断浏览器是否支持 placeholder
        $('[placeholder]').focus(function() {
            var input = $(this);
            if (input.val() == input.attr('placeholder')) {
                input.val('');
                input.removeClass('placeholder');
            }
        }).blur(function() {
            var input = $(this);
            if (input.val() == '' || input.val() == input.attr('placeholder')) {
                input.addClass('placeholder');
                input.val(input.attr('placeholder'));
            }
        }).blur();
    };
})
function placeholderSupport() {
    return 'placeholder' in document.createElement('input');
}


