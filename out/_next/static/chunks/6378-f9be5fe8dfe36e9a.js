"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6378],{34277:function(t,e,n){n.d(e,{I:function(){return i}});function i(t){window.MotionDebug&&window.MotionDebug.record(t)}},26378:function(t,e,n){n.d(e,{Bn:function(){return o},X7:function(){return a},Z7:function(){return r}});var i=n(87457),s=n(63627);let r=t=>1-Math.sin(Math.acos(t)),o=(0,s.M)(r),a=(0,i.o)(r)},65095:function(t,e,n){n.d(e,{_:function(){return r}});var i=n(44439);let s=(t,e,n)=>(((1-3*n+3*e)*t+(3*n-6*e))*t+3*e)*t;function r(t,e,n,r){if(t===e&&n===r)return i.Z;let o=e=>(function(t,e,n,i,r){let o,a;let u=0;do(o=s(a=e+(n-e)/2,i,r)-t)>0?n=a:e=a;while(Math.abs(o)>1e-7&&++u<12);return a})(e,0,1,t,n);return t=>0===t||1===t?t:s(o(t),e,r)}},50314:function(t,e,n){n.d(e,{Vv:function(){return r},YQ:function(){return s},mZ:function(){return o}});var i=n(65095);let s=(0,i._)(.42,0,1,1),r=(0,i._)(0,0,.58,1),o=(0,i._)(.42,0,.58,1)},87457:function(t,e,n){n.d(e,{o:function(){return i}});let i=t=>e=>e<=.5?t(2*e)/2:(2-t(2*(1-e)))/2},63627:function(t,e,n){n.d(e,{M:function(){return i}});let i=t=>e=>1-t(1-e)},56202:function(t,e,n){n.d(e,{q:function(){return i}});let i=t=>Array.isArray(t)&&"number"==typeof t[0]},81477:function(t,e,n){n.d(e,{N:function(){return i}});let i=t=>Array.isArray(t)&&"number"!=typeof t[0]},24775:function(t,e,n){n.d(e,{R:function(){return p}});var i=n(13223),s=n(65095),r=n(44439),o=n(50314),a=n(26378),u=n(87457),l=n(63627);let h=(0,s._)(.33,1.53,.69,.99),c=(0,l.M)(h),d=(0,u.o)(c),m={linear:r.Z,easeIn:o.YQ,easeInOut:o.mZ,easeOut:o.Vv,circIn:a.Z7,circInOut:a.X7,circOut:a.Bn,backIn:c,backInOut:d,backOut:h,anticipate:t=>(t*=2)<1?.5*c(t):.5*(2-Math.pow(2,-10*(t-1)))},p=t=>{if(Array.isArray(t)){(0,i.k)(4===t.length,"Cubic bezier arrays must contain four numerical values.");let[e,n,r,o]=t;return(0,s._)(e,n,r,o)}return"string"==typeof t?((0,i.k)(void 0!==m[t],"Invalid easing type '".concat(t,"'")),m[t]):t}},34969:function(t,e,n){n.d(e,{E:function(){return i}});function i(t,e,n){let i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{passive:!0};return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n)}},97883:function(t,e,n){n.d(e,{a:function(){return r}});var i=n(34969),s=n(43490);function r(t,e,n,r){return(0,i.E)(t,e,(0,s.s)(n),r)}},43490:function(t,e,n){n.d(e,{Q:function(){return s},s:function(){return r}});var i=n(92503);function s(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"page";return{point:{x:t[e+"X"],y:t[e+"Y"]}}}let r=t=>e=>(0,i.D)(e)&&t(e,s(e))},92503:function(t,e,n){n.d(e,{D:function(){return i}});let i=t=>"mouse"===t.pointerType?"number"!=typeof t.button||t.button<=0:!1!==t.isPrimary},58345:function(t,e,n){n.d(e,{Pn:function(){return a},Wi:function(){return o},frameData:function(){return u},S6:function(){return l}});var i=n(44439);class s{add(t){if(!this.scheduled.has(t))return this.scheduled.add(t),this.order.push(t),!0}remove(t){let e=this.order.indexOf(t);-1!==e&&(this.order.splice(e,1),this.scheduled.delete(t))}clear(){this.order.length=0,this.scheduled.clear()}constructor(){this.order=[],this.scheduled=new Set}}let r=["prepare","read","update","preRender","render","postRender"],{schedule:o,cancel:a,state:u,steps:l}=function(t,e){let n=!1,i=!0,o={delta:0,timestamp:0,isProcessing:!1},a=r.reduce((t,e)=>(t[e]=function(t){let e=new s,n=new s,i=0,r=!1,o=!1,a=new WeakSet,u={schedule:function(t){let s=arguments.length>1&&void 0!==arguments[1]&&arguments[1],o=arguments.length>2&&void 0!==arguments[2]&&arguments[2],u=o&&r,l=u?e:n;return s&&a.add(t),l.add(t)&&u&&r&&(i=e.order.length),t},cancel:t=>{n.remove(t),a.delete(t)},process:s=>{if(r){o=!0;return}if(r=!0,[e,n]=[n,e],n.clear(),i=e.order.length)for(let n=0;n<i;n++){let i=e.order[n];i(s),a.has(i)&&(u.schedule(i),t())}r=!1,o&&(o=!1,u.process(s))}};return u}(()=>n=!0),t),{}),u=t=>a[t].process(o),l=()=>{let s=performance.now();n=!1,o.delta=i?1e3/60:Math.max(Math.min(s-o.timestamp,40),1),o.timestamp=s,o.isProcessing=!0,r.forEach(u),o.isProcessing=!1,n&&e&&(i=!1,t(l))},h=()=>{n=!0,i=!0,o.isProcessing||t(l)};return{schedule:r.reduce((t,e)=>{let i=a[e];return t[e]=function(t){let e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],s=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return n||h(),i.schedule(t,e,s)},t},{}),cancel:t=>r.forEach(e=>a[e].cancel(t)),state:o,steps:a}}("undefined"!=typeof requestAnimationFrame?requestAnimationFrame:i.Z,!0)},81318:function(t,e,n){n.d(e,{h:function(){return W}});var i=n(80063),s=n(44439),r=n(13223),o=n(40290),a=n(9797),u=n(34006),l=n(97883),h=n(76376),c=n(25549),d=n(59111),m=n(38090);function p(t,e,n){return{min:void 0!==e?t.min+e:void 0,max:void 0!==n?t.max+n-(t.max-t.min):void 0}}function v(t,e){let n=e.min-t.min,i=e.max-t.max;return e.max-e.min<t.max-t.min&&([n,i]=[i,n]),{min:n,max:i}}function f(t,e,n){return{min:g(t,e),max:g(t,n)}}function g(t,e){return"number"==typeof t?t:t[e]||0}var P=n(96674),E=n(65255),x=n(50813),y=n(43490),w=n(82063),A=n(34969),M=n(27492),L=n(54111),b=n(11750),S=n(58345);let D=new WeakMap;class k{start(t){let{snapToCursor:e=!1}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},{presenceContext:n}=this.visualElement;if(n&&!1===n.isPresent)return;let{dragSnapToOrigin:i}=this.getProps();this.panSession=new o.H(t,{onSessionStart:t=>{let{dragSnapToOrigin:n}=this.getProps();n?this.pauseAnimation():this.stopAnimation(),e&&this.snapToCursor((0,y.Q)(t,"page").point)},onStart:(t,e)=>{let{drag:n,dragPropagation:i,onDragStart:s}=this.getProps();if(n&&!i&&(this.openGlobalLock&&this.openGlobalLock(),this.openGlobalLock=(0,a.fJ)(n),!this.openGlobalLock))return;this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),(0,E.U)(t=>{let e=this.getAxisMotionValue(t).get()||0;if(M.aQ.test(e)){let{projection:n}=this.visualElement;if(n&&n.layout){let i=n.layout.layoutBox[t];if(i){let t=(0,c.JO)(i);e=parseFloat(e)/100*t}}}this.originPoint[t]=e}),s&&S.Wi.update(()=>s(t,e),!1,!0);let{animationState:r}=this.visualElement;r&&r.setActive("whileDrag",!0)},onMove:(t,e)=>{let{dragPropagation:n,dragDirectionLock:i,onDirectionLock:s,onDrag:r}=this.getProps();if(!n&&!this.openGlobalLock)return;let{offset:o}=e;if(i&&null===this.currentDirection){this.currentDirection=function(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10,n=null;return Math.abs(t.y)>e?n="y":Math.abs(t.x)>e&&(n="x"),n}(o),null!==this.currentDirection&&s&&s(this.currentDirection);return}this.updateAxis("x",e.point,o),this.updateAxis("y",e.point,o),this.visualElement.render(),r&&r(t,e)},onSessionEnd:(t,e)=>this.stop(t,e),resumeAnimation:()=>(0,E.U)(t=>{var e;return"paused"===this.getAnimationState(t)&&(null===(e=this.getAxisMotionValue(t).animation)||void 0===e?void 0:e.play())})},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:i,contextWindow:(0,b.l)(this.visualElement)})}stop(t,e){let n=this.isDragging;if(this.cancel(),!n)return;let{velocity:i}=e;this.startAnimation(i);let{onDragEnd:s}=this.getProps();s&&S.Wi.update(()=>s(t,e))}cancel(){this.isDragging=!1;let{projection:t,animationState:e}=this.visualElement;t&&(t.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;let{dragPropagation:n}=this.getProps();!n&&this.openGlobalLock&&(this.openGlobalLock(),this.openGlobalLock=null),e&&e.setActive("whileDrag",!1)}updateAxis(t,e,n){let{drag:i}=this.getProps();if(!n||!C(t,i,this.currentDirection))return;let s=this.getAxisMotionValue(t),r=this.originPoint[t]+n[t];this.constraints&&this.constraints[t]&&(r=function(t,e,n){let{min:i,max:s}=e;return void 0!==i&&t<i?t=n?(0,m.C)(i,t,n.min):Math.max(t,i):void 0!==s&&t>s&&(t=n?(0,m.C)(s,t,n.max):Math.min(t,s)),t}(r,this.constraints[t],this.elastic[t])),s.set(r)}resolveConstraints(){var t;let{dragConstraints:e,dragElastic:n}=this.getProps(),i=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):null===(t=this.visualElement.projection)||void 0===t?void 0:t.layout,s=this.constraints;e&&(0,u.I)(e)?this.constraints||(this.constraints=this.resolveRefConstraints()):e&&i?this.constraints=function(t,e){let{top:n,left:i,bottom:s,right:r}=e;return{x:p(t.x,i,r),y:p(t.y,n,s)}}(i.layoutBox,e):this.constraints=!1,this.elastic=function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:.35;return!1===t?t=0:!0===t&&(t=.35),{x:f(t,"left","right"),y:f(t,"top","bottom")}}(n),s!==this.constraints&&i&&this.constraints&&!this.hasMutatedConstraints&&(0,E.U)(t=>{this.getAxisMotionValue(t)&&(this.constraints[t]=function(t,e){let n={};return void 0!==e.min&&(n.min=e.min-t.min),void 0!==e.max&&(n.max=e.max-t.min),n}(i.layoutBox[t],this.constraints[t]))})}resolveRefConstraints(){var t;let{dragConstraints:e,onMeasureDragConstraints:n}=this.getProps();if(!e||!(0,u.I)(e))return!1;let i=e.current;(0,r.k)(null!==i,"If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.");let{projection:s}=this.visualElement;if(!s||!s.layout)return!1;let o=(0,x.z)(i,s.root,this.visualElement.getTransformPagePoint()),a={x:v((t=s.layout.layoutBox).x,o.x),y:v(t.y,o.y)};if(n){let t=n((0,w.z2)(a));this.hasMutatedConstraints=!!t,t&&(a=(0,w.i8)(t))}return a}startAnimation(t){let{drag:e,dragMomentum:n,dragElastic:i,dragTransition:s,dragSnapToOrigin:r,onDragTransitionEnd:o}=this.getProps(),a=this.constraints||{};return Promise.all((0,E.U)(o=>{if(!C(o,e,this.currentDirection))return;let u=a&&a[o]||{};r&&(u={min:0,max:0});let l={type:"inertia",velocity:n?t[o]:0,bounceStiffness:i?200:1e6,bounceDamping:i?40:1e7,timeConstant:750,restDelta:1,restSpeed:10,...s,...u};return this.startAxisValueAnimation(o,l)})).then(o)}startAxisValueAnimation(t,e){let n=this.getAxisMotionValue(t);return n.start((0,L.v)(t,n,0,e))}stopAnimation(){(0,E.U)(t=>this.getAxisMotionValue(t).stop())}pauseAnimation(){(0,E.U)(t=>{var e;return null===(e=this.getAxisMotionValue(t).animation)||void 0===e?void 0:e.pause()})}getAnimationState(t){var e;return null===(e=this.getAxisMotionValue(t).animation)||void 0===e?void 0:e.state}getAxisMotionValue(t){let e="_drag"+t.toUpperCase(),n=this.visualElement.getProps();return n[e]||this.visualElement.getValue(t,(n.initial?n.initial[t]:void 0)||0)}snapToCursor(t){(0,E.U)(e=>{let{drag:n}=this.getProps();if(!C(e,n,this.currentDirection))return;let{projection:i}=this.visualElement,s=this.getAxisMotionValue(e);if(i&&i.layout){let{min:n,max:r}=i.layout.layoutBox[e];s.set(t[e]-(0,m.C)(n,r,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;let{drag:t,dragConstraints:e}=this.getProps(),{projection:n}=this.visualElement;if(!(0,u.I)(e)||!n||!this.constraints)return;this.stopAnimation();let i={x:0,y:0};(0,E.U)(t=>{let e=this.getAxisMotionValue(t);if(e){let n=e.get();i[t]=function(t,e){let n=.5,i=(0,c.JO)(t),s=(0,c.JO)(e);return s>i?n=(0,h.Y)(e.min,e.max-i,t.min):i>s&&(n=(0,h.Y)(t.min,t.max-s,e.min)),(0,d.u)(0,1,n)}({min:n,max:n},this.constraints[t])}});let{transformTemplate:s}=this.visualElement.getProps();this.visualElement.current.style.transform=s?s({},""):"none",n.root&&n.root.updateScroll(),n.updateLayout(),this.resolveConstraints(),(0,E.U)(e=>{if(!C(e,t,null))return;let n=this.getAxisMotionValue(e),{min:s,max:r}=this.constraints[e];n.set((0,m.C)(s,r,i[e]))})}addListeners(){if(!this.visualElement.current)return;D.set(this.visualElement,this);let t=this.visualElement.current,e=(0,l.a)(t,"pointerdown",t=>{let{drag:e,dragListener:n=!0}=this.getProps();e&&n&&this.start(t)}),n=()=>{let{dragConstraints:t}=this.getProps();(0,u.I)(t)&&(this.constraints=this.resolveRefConstraints())},{projection:i}=this.visualElement,s=i.addEventListener("measure",n);i&&!i.layout&&(i.root&&i.root.updateScroll(),i.updateLayout()),n();let r=(0,A.E)(window,"resize",()=>this.scalePositionWithinConstraints()),o=i.addEventListener("didUpdate",t=>{let{delta:e,hasLayoutChanged:n}=t;this.isDragging&&n&&((0,E.U)(t=>{let n=this.getAxisMotionValue(t);n&&(this.originPoint[t]+=e[t].translate,n.set(n.get()+e[t].translate))}),this.visualElement.render())});return()=>{r(),e(),s(),o&&o()}}getProps(){let t=this.visualElement.getProps(),{drag:e=!1,dragDirectionLock:n=!1,dragPropagation:i=!1,dragConstraints:s=!1,dragElastic:r=.35,dragMomentum:o=!0}=t;return{...t,drag:e,dragDirectionLock:n,dragPropagation:i,dragConstraints:s,dragElastic:r,dragMomentum:o}}constructor(t){this.openGlobalLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=(0,P.dO)(),this.visualElement=t}}function C(t,e,n){return(!0===e||e===t)&&(null===n||n===t)}class W extends i.L{mount(){let{dragControls:t}=this.node.getProps();t&&(this.removeGroupControls=t.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||s.Z}unmount(){this.removeGroupControls(),this.removeListeners()}constructor(t){super(t),this.removeGroupControls=s.Z,this.removeListeners=s.Z,this.controls=new k(t)}}},9797:function(t,e,n){function i(t){let e=null;return()=>null===e&&(e=t,()=>{e=null})}n.d(e,{fJ:function(){return o},gD:function(){return a}});let s=i("dragHorizontal"),r=i("dragVertical");function o(t){let e=!1;if("y"===t)e=r();else if("x"===t)e=s();else{let t=s(),n=r();t&&n?e=()=>{t(),n()}:(t&&t(),n&&n())}return e}function a(){let t=o(!0);return!t||(t(),!1)}},67369:function(t,e,n){n.d(e,{f:function(){return o}});var i=n(34969),s=n(80063),r=n(56920);class o extends s.L{onFocus(){let t=!1;try{t=this.node.current.matches(":focus-visible")}catch(e){t=!0}t&&this.node.animationState&&(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){this.isActive&&this.node.animationState&&(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=(0,r.z)((0,i.E)(this.node.current,"focus",()=>this.onFocus()),(0,i.E)(this.node.current,"blur",()=>this.onBlur()))}unmount(){}constructor(){super(...arguments),this.isActive=!1}}},83022:function(t,e,n){n.d(e,{a:function(){return l}});var i=n(97883),s=n(56920),r=n(9797),o=n(80063),a=n(58345);function u(t,e){let n="onHover"+(e?"Start":"End");return(0,i.a)(t.current,"pointer"+(e?"enter":"leave"),(i,s)=>{if("touch"===i.pointerType||(0,r.gD)())return;let o=t.getProps();t.animationState&&o.whileHover&&t.animationState.setActive("whileHover",e),o[n]&&a.Wi.update(()=>o[n](i,s))},{passive:!t.getProps()[n]})}class l extends o.L{mount(){this.unmount=(0,s.z)(u(this.node,!0),u(this.node,!1))}unmount(){}}},40290:function(t,e,n){n.d(e,{H:function(){return h}});var i=n(43490),s=n(56717),r=n(97883),o=n(56920),a=n(41440),u=n(92503),l=n(58345);class h{updateHandlers(t){this.handlers=t}end(){this.removeListeners&&this.removeListeners(),(0,l.Pn)(this.updatePoint)}constructor(t,e,{transformPagePoint:n,contextWindow:s,dragSnapToOrigin:h=!1}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;let t=m(this.lastMoveEventInfo,this.history),e=null!==this.startEvent,n=(0,a.y)(t.offset,{x:0,y:0})>=3;if(!e&&!n)return;let{point:i}=t,{timestamp:s}=l.frameData;this.history.push({...i,timestamp:s});let{onStart:r,onMove:o}=this.handlers;e||(r&&r(this.lastMoveEvent,t),this.startEvent=this.lastMoveEvent),o&&o(this.lastMoveEvent,t)},this.handlePointerMove=(t,e)=>{this.lastMoveEvent=t,this.lastMoveEventInfo=c(e,this.transformPagePoint),l.Wi.update(this.updatePoint,!0)},this.handlePointerUp=(t,e)=>{this.end();let{onEnd:n,onSessionEnd:i,resumeAnimation:s}=this.handlers;if(this.dragSnapToOrigin&&s&&s(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;let r=m("pointercancel"===t.type?this.lastMoveEventInfo:c(e,this.transformPagePoint),this.history);this.startEvent&&n&&n(t,r),i&&i(t,r)},!(0,u.D)(t))return;this.dragSnapToOrigin=h,this.handlers=e,this.transformPagePoint=n,this.contextWindow=s||window;let d=c((0,i.Q)(t),this.transformPagePoint),{point:p}=d,{timestamp:v}=l.frameData;this.history=[{...p,timestamp:v}];let{onSessionStart:f}=e;f&&f(t,m(d,this.history)),this.removeListeners=(0,o.z)((0,r.a)(this.contextWindow,"pointermove",this.handlePointerMove),(0,r.a)(this.contextWindow,"pointerup",this.handlePointerUp),(0,r.a)(this.contextWindow,"pointercancel",this.handlePointerUp))}}function c(t,e){return e?{point:e(t.point)}:t}function d(t,e){return{x:t.x-e.x,y:t.y-e.y}}function m(t,e){let{point:n}=t;return{point:n,delta:d(n,p(e)),offset:d(n,e[0]),velocity:function(t,e){if(t.length<2)return{x:0,y:0};let n=t.length-1,i=null,r=p(t);for(;n>=0&&(i=t[n],!(r.timestamp-i.timestamp>(0,s.w)(.1)));)n--;if(!i)return{x:0,y:0};let o=(0,s.X)(r.timestamp-i.timestamp);if(0===o)return{x:0,y:0};let a={x:(r.x-i.x)/o,y:(r.y-i.y)/o};return a.x===1/0&&(a.x=0),a.y===1/0&&(a.y=0),a}(e,0)}}function p(t){return t[t.length-1]}},51886:function(t,e,n){n.d(e,{q:function(){return h}});var i=n(40290),s=n(97883),r=n(80063),o=n(44439),a=n(11750),u=n(58345);let l=t=>(e,n)=>{t&&u.Wi.update(()=>t(e,n))};class h extends r.L{onPointerDown(t){this.session=new i.H(t,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:(0,a.l)(this.node)})}createPanHandlers(){let{onPanSessionStart:t,onPanStart:e,onPan:n,onPanEnd:i}=this.node.getProps();return{onSessionStart:l(t),onStart:l(e),onMove:n,onEnd:(t,e)=>{delete this.session,i&&u.Wi.update(()=>i(t,e))}}}mount(){this.removePointerDownListener=(0,s.a)(this.node.current,"pointerdown",t=>this.onPointerDown(t))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}constructor(){super(...arguments),this.removePointerDownListener=o.Z}}},66429:function(t,e,n){n.d(e,{Q:function(){return m}});var i=n(43490),s=n(34969),r=n(97883),o=n(80063),a=n(56920),u=n(9797);let l=(t,e)=>!!e&&(t===e||l(t,e.parentElement));var h=n(44439),c=n(58345);function d(t,e){if(!e)return;let n=new PointerEvent("pointer"+t);e(n,(0,i.Q)(n))}class m extends o.L{startPress(t,e){this.isPressing=!0;let{onTapStart:n,whileTap:i}=this.node.getProps();i&&this.node.animationState&&this.node.animationState.setActive("whileTap",!0),n&&c.Wi.update(()=>n(t,e))}checkPressEnd(){return this.removeEndListeners(),this.isPressing=!1,this.node.getProps().whileTap&&this.node.animationState&&this.node.animationState.setActive("whileTap",!1),!(0,u.gD)()}cancelPress(t,e){if(!this.checkPressEnd())return;let{onTapCancel:n}=this.node.getProps();n&&c.Wi.update(()=>n(t,e))}mount(){let t=this.node.getProps(),e=(0,r.a)(t.globalTapTarget?window:this.node.current,"pointerdown",this.startPointerPress,{passive:!(t.onTapStart||t.onPointerStart)}),n=(0,s.E)(this.node.current,"focus",this.startAccessiblePress);this.removeStartListeners=(0,a.z)(e,n)}unmount(){this.removeStartListeners(),this.removeEndListeners(),this.removeAccessibleListeners()}constructor(){super(...arguments),this.removeStartListeners=h.Z,this.removeEndListeners=h.Z,this.removeAccessibleListeners=h.Z,this.startPointerPress=(t,e)=>{if(this.isPressing)return;this.removeEndListeners();let n=this.node.getProps(),i=(0,r.a)(window,"pointerup",(t,e)=>{if(!this.checkPressEnd())return;let{onTap:n,onTapCancel:i,globalTapTarget:s}=this.node.getProps();c.Wi.update(()=>{s||l(this.node.current,t.target)?n&&n(t,e):i&&i(t,e)})},{passive:!(n.onTap||n.onPointerUp)}),s=(0,r.a)(window,"pointercancel",(t,e)=>this.cancelPress(t,e),{passive:!(n.onTapCancel||n.onPointerCancel)});this.removeEndListeners=(0,a.z)(i,s),this.startPress(t,e)},this.startAccessiblePress=()=>{let t=(0,s.E)(this.node.current,"keydown",t=>{"Enter"!==t.key||this.isPressing||(this.removeEndListeners(),this.removeEndListeners=(0,s.E)(this.node.current,"keyup",t=>{"Enter"===t.key&&this.checkPressEnd()&&d("up",(t,e)=>{let{onTap:n}=this.node.getProps();n&&c.Wi.update(()=>n(t,e))})}),d("down",(t,e)=>{this.startPress(t,e)}))}),e=(0,s.E)(this.node.current,"blur",()=>{this.isPressing&&d("cancel",(t,e)=>this.cancelPress(t,e))});this.removeAccessibleListeners=(0,a.z)(t,e)}}}}}]);