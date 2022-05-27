!function(e){"function"==typeof define&&define.amd&&define.amd.jQuery?define(["jquery"],e):e(jQuery)}(function(e){"use strict";var t="left",n="right",r="up",i="down",o="in",l="out",a="none",u="auto",s="swipe",c="pinch",h="tap",p="doubletap",f="longtap",g="horizontal",d="vertical",w="all",v=10,T="start",S="move",E="end",b="cancel",m="ontouchstart"in window,y=window.navigator.msPointerEnabled&&!window.navigator.pointerEnabled,O=window.navigator.pointerEnabled||window.navigator.msPointerEnabled,x="TouchSwipe";e.fn.swipe=function(M){var P=e(this),L=P.data(x);if(L&&"string"==typeof M){if(L[M])return L[M].apply(this,Array.prototype.slice.call(arguments,1));e.error("Method "+M+" does not exist on jQuery.swipe")}else if(!(L||"object"!=typeof M&&M))return function(M){!M||void 0!==M.allowPageScroll||void 0===M.swipe&&void 0===M.swipeStatus||(M.allowPageScroll=a);void 0!==M.click&&void 0===M.tap&&(M.tap=M.click);M||(M={});return M=e.extend({},e.fn.swipe.defaults,M),this.each(function(){var P=e(this),L=P.data(x);L||(L=new function(M,P){var L=m||O||!P.fallbackToMouseEvents,D=L?O?y?"MSPointerDown":"pointerdown":"touchstart":"mousedown",R=L?O?y?"MSPointerMove":"pointermove":"touchmove":"mousemove",k=L?O?y?"MSPointerUp":"pointerup":"touchend":"mouseup",A=L?null:"mouseleave",I=O?y?"MSPointerCancel":"pointercancel":"touchcancel",N=0,U=null,H=0,j=0,_=0,Q=1,C=0,X=0,Y=null,q=e(M),W="start",F=0,V=null,z=0,G=0,Z=0,B=0,J=0,K=null,$=null;try{q.on(D,ee),q.on(I,re)}catch(t){e.error("events not supported "+D+","+I+" on jQuery.swipe")}function ee(o){if(!0!==q.data(x+"_intouch")&&!(e(o.target).closest(P.excludedElements,q).length>0)){var l,a,u=o.originalEvent?o.originalEvent:o,s=m?u.touches[0]:u;return W=T,m?F=u.touches.length:o.preventDefault(),N=0,U=null,X=null,H=0,j=0,_=0,Q=1,C=0,V=function(){for(var e=[],t=0;t<=5;t++)e.push({start:{x:0,y:0},end:{x:0,y:0},identifier:0});return e}(),(a={})[t]=Le(t),a[n]=Le(n),a[r]=Le(r),a[i]=Le(i),Y=a,me(),!m||F===P.fingers||P.fingers===w||fe()?(xe(0,s),z=ke(),2==F&&(xe(1,u.touches[1]),j=_=Re(V[0].start,V[1].start)),(P.swipeStatus||P.pinchStatus)&&(l=ae(u,W))):l=!1,!1===l?(ae(u,W=b),l):(P.hold&&($=setTimeout(e.proxy(function(){q.trigger("hold",[u.target]),P.hold&&(l=P.hold.call(q,u,u.target))},this),P.longTapThreshold)),Oe(!0),null)}}function te(s){var c=s.originalEvent?s.originalEvent:s;if(W!==E&&W!==b&&!ye()){var h,p,f,v,T,y,O=m?c.touches[0]:c,x=Me(O);if(G=ke(),m&&(F=c.touches.length),P.hold&&clearTimeout($),W=S,2==F&&(0==j?(xe(1,c.touches[1]),j=_=Re(V[0].start,V[1].start)):(Me(c.touches[1]),_=Re(V[0].end,V[1].end),V[0].end,V[1].end,X=Q<1?l:o),Q=(_/j*1).toFixed(2),C=Math.abs(j-_)),F===P.fingers||P.fingers===w||!m||fe()){if(v=x.start,T=x.end,y=function(e,t){var n=e.x-t.x,r=t.y-e.y,i=Math.atan2(r,n),o=Math.round(180*i/Math.PI);return o<0&&(o=360-Math.abs(o)),o}(v,T),function(e,o){if(P.allowPageScroll===a||fe())e.preventDefault();else{var l=P.allowPageScroll===u;switch(o){case t:(P.swipeLeft&&l||!l&&P.allowPageScroll!=g)&&e.preventDefault();break;case n:(P.swipeRight&&l||!l&&P.allowPageScroll!=g)&&e.preventDefault();break;case r:(P.swipeUp&&l||!l&&P.allowPageScroll!=d)&&e.preventDefault();break;case i:(P.swipeDown&&l||!l&&P.allowPageScroll!=d)&&e.preventDefault()}}}(s,U=y<=45&&y>=0?t:y<=360&&y>=315?t:y>=135&&y<=225?n:y>45&&y<135?i:r),N=function(e,t){return Math.round(Math.sqrt(Math.pow(t.x-e.x,2)+Math.pow(t.y-e.y,2)))}(x.start,x.end),H=De(),function(e,t){t=Math.max(t,Pe(e)),Y[e].distance=t}(U,N),(P.swipeStatus||P.pinchStatus)&&(h=ae(c,W)),!P.triggerOnTouchEnd||P.triggerOnTouchLeave){var M=!0;if(P.triggerOnTouchLeave){var L={left:(f=(p=e(p=this)).offset()).left,right:f.left+p.outerWidth(),top:f.top,bottom:f.top+p.outerHeight()};M=function(e,t){return e.x>t.left&&e.x<t.right&&e.y>t.top&&e.y<t.bottom}(x.end,L)}!P.triggerOnTouchEnd&&M?W=le(S):P.triggerOnTouchLeave&&!M&&(W=le(E)),W!=b&&W!=E||ae(c,W)}}else ae(c,W=b);!1===h&&ae(c,W=b)}}function ne(e){var t=e.originalEvent;return m&&t.touches.length>0?(be(),!0):(ye()&&(F=B),G=ke(),H=De(),ce()||!se()?ae(t,W=b):P.triggerOnTouchEnd||0==P.triggerOnTouchEnd&&W===S?(e.preventDefault(),ae(t,W=E)):!P.triggerOnTouchEnd&&Te()?ue(t,W=E,h):W===S&&ae(t,W=b),Oe(!1),null)}function re(){F=0,G=0,z=0,j=0,_=0,Q=1,me(),Oe(!1)}function ie(e){var t=e.originalEvent;P.triggerOnTouchLeave&&(W=le(E),ae(t,W))}function oe(){q.off(D,ee),q.off(I,re),q.off(R,te),q.off(k,ne),A&&q.off(A,ie),Oe(!1)}function le(e){var t=e,n=he(),r=se(),i=ce();return!n||i?t=b:!r||e!=S||P.triggerOnTouchEnd&&!P.triggerOnTouchLeave?!r&&e==E&&P.triggerOnTouchLeave&&(t=b):t=E,t}function ae(e,t){var n=void 0;return ge()&&de()||de()?n=ue(e,t,s):(pe()&&fe()||fe())&&!1!==n&&(n=ue(e,t,c)),Ee()&&Se()&&!1!==n?n=ue(e,t,p):H>P.longTapThreshold&&N<v&&P.longTap&&!1!==n?n=ue(e,t,f):1!==F&&m||!(isNaN(N)||N<P.threshold)||!Te()||!1===n||(n=ue(e,t,h)),t===b&&re(),t===E&&(m?0==e.touches.length&&re():re()),n}function ue(a,u,g){var d=void 0;if(g==s){if(q.trigger("swipeStatus",[u,U||null,N||0,H||0,F,V]),P.swipeStatus&&!1===(d=P.swipeStatus.call(q,a,u,U||null,N||0,H||0,F,V)))return!1;if(u==E&&ge()){if(q.trigger("swipe",[U,N,H,F,V]),P.swipe&&!1===(d=P.swipe.call(q,a,U,N,H,F,V)))return!1;switch(U){case t:q.trigger("swipeLeft",[U,N,H,F,V]),P.swipeLeft&&(d=P.swipeLeft.call(q,a,U,N,H,F,V));break;case n:q.trigger("swipeRight",[U,N,H,F,V]),P.swipeRight&&(d=P.swipeRight.call(q,a,U,N,H,F,V));break;case r:q.trigger("swipeUp",[U,N,H,F,V]),P.swipeUp&&(d=P.swipeUp.call(q,a,U,N,H,F,V));break;case i:q.trigger("swipeDown",[U,N,H,F,V]),P.swipeDown&&(d=P.swipeDown.call(q,a,U,N,H,F,V))}}}if(g==c){if(q.trigger("pinchStatus",[u,X||null,C||0,H||0,F,Q,V]),P.pinchStatus&&!1===(d=P.pinchStatus.call(q,a,u,X||null,C||0,H||0,F,Q,V)))return!1;if(u==E&&pe())switch(X){case o:q.trigger("pinchIn",[X||null,C||0,H||0,F,Q,V]),P.pinchIn&&(d=P.pinchIn.call(q,a,X||null,C||0,H||0,F,Q,V));break;case l:q.trigger("pinchOut",[X||null,C||0,H||0,F,Q,V]),P.pinchOut&&(d=P.pinchOut.call(q,a,X||null,C||0,H||0,F,Q,V))}}return g==h?u!==b&&u!==E||(clearTimeout(K),clearTimeout($),Se()&&!Ee()?(J=ke(),K=setTimeout(e.proxy(function(){J=null,q.trigger("tap",[a.target]),P.tap&&(d=P.tap.call(q,a,a.target))},this),P.doubleTapThreshold)):(J=null,q.trigger("tap",[a.target]),P.tap&&(d=P.tap.call(q,a,a.target)))):g==p?u!==b&&u!==E||(clearTimeout(K),J=null,q.trigger("doubletap",[a.target]),P.doubleTap&&(d=P.doubleTap.call(q,a,a.target))):g==f&&(u!==b&&u!==E||(clearTimeout(K),J=null,q.trigger("longtap",[a.target]),P.longTap&&(d=P.longTap.call(q,a,a.target)))),d}function se(){var e=!0;return null!==P.threshold&&(e=N>=P.threshold),e}function ce(){var e=!1;return null!==P.cancelThreshold&&null!==U&&(e=Pe(U)-N>=P.cancelThreshold),e}function he(){return!(P.maxTimeThreshold&&H>=P.maxTimeThreshold)}function pe(){var e=we(),t=ve(),n=null===P.pinchThreshold||C>=P.pinchThreshold;return e&&t&&n}function fe(){return!!(P.pinchStatus||P.pinchIn||P.pinchOut)}function ge(){var e=he(),t=se(),n=we(),r=ve(),i=ce(),o=!i&&r&&n&&t&&e;return o}function de(){return!!(P.swipe||P.swipeStatus||P.swipeLeft||P.swipeRight||P.swipeUp||P.swipeDown)}function we(){return F===P.fingers||P.fingers===w||!m}function ve(){return 0!==V[0].end.x}function Te(){return!!P.tap}function Se(){return!!P.doubleTap}function Ee(){if(null==J)return!1;var e=ke();return Se()&&e-J<=P.doubleTapThreshold}function be(){Z=ke(),B=event.touches.length+1}function me(){Z=0,B=0}function ye(){var e=!1;if(Z){var t=ke()-Z;t<=P.fingerReleaseThreshold&&(e=!0)}return e}function Oe(e){!0===e?(q.on(R,te),q.on(k,ne),A&&q.on(A,ie)):(q.off(R,te,!1),q.off(k,ne,!1),A&&q.off(A,ie,!1)),q.data(x+"_intouch",!0===e)}function xe(e,t){var n=void 0!==t.identifier?t.identifier:0;return V[e].identifier=n,V[e].start.x=V[e].end.x=t.pageX||t.clientX,V[e].start.y=V[e].end.y=t.pageY||t.clientY,V[e]}function Me(e){var t=void 0!==e.identifier?e.identifier:0,n=function(e){for(var t=0;t<V.length;t++)if(V[t].identifier==e)return V[t]}(t);return n.end.x=e.pageX||e.clientX,n.end.y=e.pageY||e.clientY,n}function Pe(e){if(Y[e])return Y[e].distance}function Le(e){return{direction:e,distance:0}}function De(){return G-z}function Re(e,t){var n=Math.abs(e.x-t.x),r=Math.abs(e.y-t.y);return Math.round(Math.sqrt(n*n+r*r))}function ke(){var e=new Date;return e.getTime()}this.enable=function(){return q.on(D,ee),q.on(I,re),q},this.disable=function(){return oe(),q},this.destroy=function(){return oe(),q.data(x,null),q},this.option=function(t,n){if(void 0!==P[t]){if(void 0===n)return P[t];P[t]=n}else e.error("Option "+t+" does not exist on jQuery.swipe.options");return null}}(this,M),P.data(x,L))})}.apply(this,arguments);return P},e.fn.swipe.defaults={fingers:1,threshold:75,cancelThreshold:null,pinchThreshold:20,maxTimeThreshold:null,fingerReleaseThreshold:250,longTapThreshold:500,doubleTapThreshold:200,swipe:null,swipeLeft:null,swipeRight:null,swipeUp:null,swipeDown:null,swipeStatus:null,pinchIn:null,pinchOut:null,pinchStatus:null,click:null,tap:null,doubleTap:null,longTap:null,hold:null,triggerOnTouchEnd:!0,triggerOnTouchLeave:!1,allowPageScroll:"auto",fallbackToMouseEvents:!0,excludedElements:"label, button, input, select, textarea, a, .noSwipe"},e.fn.swipe.phases={PHASE_START:T,PHASE_MOVE:S,PHASE_END:E,PHASE_CANCEL:b},e.fn.swipe.directions={LEFT:t,RIGHT:n,UP:r,DOWN:i,IN:o,OUT:l},e.fn.swipe.pageScroll={NONE:a,HORIZONTAL:g,VERTICAL:d,AUTO:u},e.fn.swipe.fingers={ONE:1,TWO:2,THREE:3,ALL:w}});