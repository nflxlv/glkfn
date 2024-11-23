"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4683],{80063:function(t,e,n){n.d(e,{L:function(){return o}});class o{update(){}constructor(t){this.isMounted=!1,this.node=t}}},37997:function(t,e,n){n.d(e,{s:function(){return l}});var o=n(20569),r=n(86627),i=n(80063);class a extends i.L{updateAnimationControlsSubscription(){let{animate:t}=this.node.getProps();this.unmount(),(0,o.H)(t)&&(this.unmount=t.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){let{animate:t}=this.node.getProps(),{animate:e}=this.node.prevProps||{};t!==e&&this.updateAnimationControlsSubscription()}unmount(){}constructor(t){super(t),t.animationState||(t.animationState=(0,r.M)(t))}}let s=0;class u extends i.L{update(){if(!this.node.presenceContext)return;let{isPresent:t,onExitComplete:e,custom:n}=this.node.presenceContext,{isPresent:o}=this.node.prevPresenceContext||{};if(!this.node.animationState||t===o)return;let r=this.node.animationState.setActive("exit",!t,{custom:null!=n?n:this.node.getProps().custom});e&&!t&&r.then(()=>e(this.id))}mount(){let{register:t}=this.node.presenceContext||{};t&&(this.unmount=t(this.id))}unmount(){}constructor(){super(...arguments),this.id=s++}}let l={animation:{Feature:a},exit:{Feature:u}}},35938:function(t,e,n){n.d(e,{A:function(){return r}});let o={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},r={};for(let t in o)r[t]={isEnabled:e=>o[t].some(t=>!!e[t])}},22279:function(t,e,n){n.d(e,{o:function(){return s}});var o=n(81318),r=n(51886),i=n(24807),a=n(81369);let s={pan:{Feature:r.q},drag:{Feature:o.h,ProjectionNode:a.u,MeasureLayout:i.q}}},47021:function(t,e,n){n.d(e,{E:function(){return h}});var o=n(83022),r=n(67369),i=n(66429),a=n(80063);let s=new WeakMap,u=new WeakMap,l=t=>{let e=s.get(t.target);e&&e(t)},d=t=>{t.forEach(l)},c={some:0,all:1};class p extends a.L{startObserver(){this.unmount();let{viewport:t={}}=this.node.getProps(),{root:e,margin:n,amount:o="some",once:r}=t,i={root:e?e.current:void 0,rootMargin:n,threshold:"number"==typeof o?o:c[o]};return function(t,e,n){let o=function(t){let{root:e,...n}=t,o=e||document;u.has(o)||u.set(o,{});let r=u.get(o),i=JSON.stringify(n);return r[i]||(r[i]=new IntersectionObserver(d,{root:e,...n})),r[i]}(e);return s.set(t,n),o.observe(t),()=>{s.delete(t),o.unobserve(t)}}(this.node.current,i,t=>{let{isIntersecting:e}=t;if(this.isInView===e||(this.isInView=e,r&&!e&&this.hasEnteredView))return;e&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",e);let{onViewportEnter:n,onViewportLeave:o}=this.node.getProps(),i=e?n:o;i&&i(t)})}mount(){this.startObserver()}update(){if("undefined"==typeof IntersectionObserver)return;let{props:t,prevProps:e}=this.node;["amount","margin","root"].some(function(t){let{viewport:e={}}=t,{viewport:n={}}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return t=>e[t]!==n[t]}(t,e))&&this.startObserver()}unmount(){}constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}}let h={inView:{Feature:p},tap:{Feature:i.Q},focus:{Feature:r.f},hover:{Feature:o.a}}},82760:function(t,e,n){n.d(e,{b:function(){return i}});var o=n(81369),r=n(24807);let i={layout:{ProjectionNode:o.u,MeasureLayout:r.q}}},24807:function(t,e,n){n.d(e,{q:function(){return h}});var o=n(98949),r=n(49637),i=n(58881),a=n(29913),s=n(50215),u=n(22483),l=n(60938),d=n(98639),c=n(58345);class p extends o.default.Component{componentDidMount(){let{visualElement:t,layoutGroup:e,switchLayoutGroup:n,layoutId:o}=this.props,{projection:r}=t;(0,d.B)(m),r&&(e.group&&e.group.add(r),n&&n.register&&o&&n.register(r),r.root.didUpdate(),r.addEventListener("animationComplete",()=>{this.safeToRemove()}),r.setOptions({...r.options,onExitComplete:()=>this.safeToRemove()})),s.V.hasEverUpdated=!0}getSnapshotBeforeUpdate(t){let{layoutDependency:e,visualElement:n,drag:o,isPresent:r}=this.props,i=n.projection;return i&&(i.isPresent=r,o||t.layoutDependency!==e||void 0===e?i.willUpdate():this.safeToRemove(),t.isPresent===r||(r?i.promote():i.relegate()||c.Wi.postRender(()=>{let t=i.getStack();t&&t.members.length||this.safeToRemove()}))),null}componentDidUpdate(){let{projection:t}=this.props.visualElement;t&&(t.root.didUpdate(),queueMicrotask(()=>{!t.currentAnimation&&t.isLead()&&this.safeToRemove()}))}componentWillUnmount(){let{visualElement:t,layoutGroup:e,switchLayoutGroup:n}=this.props,{projection:o}=t;o&&(o.scheduleCheckAfterUnmount(),e&&e.group&&e.group.remove(o),n&&n.deregister&&n.deregister(o))}safeToRemove(){let{safeToRemove:t}=this.props;t&&t()}render(){return null}}function h(t){let[e,n]=(0,r.oO)(),s=(0,o.useContext)(i.p);return o.default.createElement(p,{...t,layoutGroup:s,switchLayoutGroup:(0,o.useContext)(a.g),isPresent:e,safeToRemove:n})}let m={borderRadius:{...u.J,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:u.J,borderTopRightRadius:u.J,borderBottomLeftRadius:u.J,borderBottomRightRadius:u.J,boxShadow:l.M}},51765:function(t,e,n){n.d(e,{F:function(){return g}});var o=n(98949),r=n(45750),i=n(56961),a=n(64252),s=n(11534),u=n(47337),l=n(61750),d=n(34006),c=n(82349),p=n(35938),h=n(44563),m=n(58881),f=n(29913);let v=Symbol.for("motionComponentSymbol");function g(t){let{preloadedFeatures:e,createVisualElement:n,useRender:g,useVisualState:w,Component:b}=t;e&&function(t){for(let e in t)p.A[e]={...p.A[e],...t[e]}}(e);let C=(0,o.forwardRef)(function(t,p){var v;let C;let E={...(0,o.useContext)(r._),...t,layoutId:function(t){let{layoutId:e}=t,n=(0,o.useContext)(m.p).id;return n&&void 0!==e?n+"-"+e:e}(t)},{isStatic:S}=E,y=(0,c.H)(t),x=w(t,S);if(!S&&h.j){y.visualElement=function(t,e,n,d){let{visualElement:c}=(0,o.useContext)(i.v),p=(0,o.useContext)(u.u),h=(0,o.useContext)(a.O),m=(0,o.useContext)(r._).reducedMotion,f=(0,o.useRef)();d=d||p.renderer,!f.current&&d&&(f.current=d(t,{visualState:e,parent:c,props:n,presenceContext:h,blockInitialAnimation:!!h&&!1===h.initial,reducedMotionConfig:m}));let v=f.current;(0,o.useInsertionEffect)(()=>{v&&v.update(n,h)});let g=(0,o.useRef)(!!(n[l.M]&&!window.HandoffComplete));return(0,s.L)(()=>{v&&(v.render(),g.current&&v.animationState&&v.animationState.animateChanges())}),(0,o.useEffect)(()=>{v&&(v.updateFeatures(),!g.current&&v.animationState&&v.animationState.animateChanges(),g.current&&(g.current=!1,window.HandoffComplete=!0))}),v}(b,x,E,n);let t=(0,o.useContext)(f.g),d=(0,o.useContext)(u.u).strict;y.visualElement&&(C=y.visualElement.loadFeatures(E,d,e,t))}return o.createElement(i.v.Provider,{value:y},C&&y.visualElement?o.createElement(C,{visualElement:y.visualElement,...E}):null,g(b,t,(v=y.visualElement,(0,o.useCallback)(t=>{t&&x.mount&&x.mount(t),v&&(t?v.mount(t):v.unmount()),p&&("function"==typeof p?p(t):(0,d.I)(p)&&(p.current=t))},[v])),x,S,y.visualElement))});return C[v]=b,C}},77556:function(t,e,n){n.d(e,{j:function(){return i}});var o=n(98639),r=n(8834);function i(t,e){let{layout:n,layoutId:i}=e;return r.G.has(t)||t.startsWith("origin")||(n||void 0!==i)&&(!!o.P[t]||"opacity"===t)}},74935:function(t,e,n){n.d(e,{t:function(){return c}});var o=n(98949),r=n(20569),i=n(64252),a=n(31297),s=n(53576),u=n(84364),l=n(56961),d=n(17743);let c=t=>(e,n)=>{let c=(0,o.useContext)(l.v),p=(0,o.useContext)(i.O),h=()=>(function(t,e,n,o){let{scrapeMotionValuesFromProps:i,createRenderState:s,onMount:l}=t,c={latestValues:function(t,e,n,o){let i={},s=o(t,{});for(let t in s)i[t]=(0,u.b)(s[t]);let{initial:l,animate:c}=t,p=(0,d.G)(t),h=(0,d.M)(t);e&&h&&!p&&!1!==t.inherit&&(void 0===l&&(l=e.initial),void 0===c&&(c=e.animate));let m=!!n&&!1===n.initial,f=(m=m||!1===l)?c:l;return f&&"boolean"!=typeof f&&!(0,r.H)(f)&&(Array.isArray(f)?f:[f]).forEach(e=>{let n=(0,a.o)(t,e);if(!n)return;let{transitionEnd:o,transition:r,...s}=n;for(let t in s){let e=s[t];if(Array.isArray(e)){let t=m?e.length-1:0;e=e[t]}null!==e&&(i[t]=e)}for(let t in o)i[t]=o[t]}),i}(e,n,o,i),renderState:s()};return l&&(c.mount=t=>l(e,t,c)),c})(t,e,c,p);return n?h():(0,s.h)(h)}},35998:function(t,e,n){n.d(e,{Z:function(){return r}});let o=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","transformValues","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function r(t){return t.startsWith("while")||t.startsWith("drag")&&"draggable"!==t||t.startsWith("layout")||t.startsWith("onTap")||t.startsWith("onPan")||t.startsWith("onLayout")||o.has(t)}}}]);