"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[536],{47625:function(t,e,r){r.d(e,{h:function(){return y}});var n=r(61994),i=r(98949),o=r(37065),a=r.n(o),c=r(16630),l=r(1175),u=r(82944);function h(t){return(h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function s(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),r.push.apply(r,n)}return r}function d(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?s(Object(r),!0).forEach(function(e){var n,i;n=e,i=r[e],(n=function(t){var e=function(t,e){if("object"!=h(t)||!t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,e||"default");if("object"!=h(n))return n;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"==h(e)?e:e+""}(n))in t?Object.defineProperty(t,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[n]=i}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))})}return t}function f(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=Array(e);r<e;r++)n[r]=t[r];return n}var y=(0,i.forwardRef)(function(t,e){var r,o=t.aspect,h=t.initialDimension,s=void 0===h?{width:-1,height:-1}:h,y=t.width,p=void 0===y?"100%":y,b=t.height,v=void 0===b?"100%":b,m=t.minWidth,g=void 0===m?0:m,w=t.minHeight,O=t.maxHeight,j=t.children,x=t.debounce,A=void 0===x?0:x,S=t.id,k=t.className,P=t.onResize,W=t.style,E=(0,i.useRef)(null),H=(0,i.useRef)();H.current=P,(0,i.useImperativeHandle)(e,function(){return Object.defineProperty(E.current,"current",{get:function(){return console.warn("The usage of ref.current.current is deprecated and will no longer be supported."),E.current},configurable:!0})});var C=function(t){if(Array.isArray(t))return t}(r=(0,i.useState)({containerWidth:s.width,containerHeight:s.height}))||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,i,o,a,c=[],l=!0,u=!1;try{for(o=(r=r.call(t)).next;!(l=(n=o.call(r)).done)&&(c.push(n.value),2!==c.length);l=!0);}catch(t){u=!0,i=t}finally{try{if(!l&&null!=r.return&&(a=r.return(),Object(a)!==a))return}finally{if(u)throw i}}return c}}(r,2)||function(t,e){if(t){if("string"==typeof t)return f(t,2);var r=Object.prototype.toString.call(t).slice(8,-1);if("Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return f(t,2)}}(r,2)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),T=C[0],N=C[1],I=(0,i.useCallback)(function(t,e){N(function(r){var n=Math.round(t),i=Math.round(e);return r.containerWidth===n&&r.containerHeight===i?r:{containerWidth:n,containerHeight:i}})},[]);(0,i.useEffect)(function(){var t=function(t){var e,r=t[0].contentRect,n=r.width,i=r.height;I(n,i),null===(e=H.current)||void 0===e||e.call(H,n,i)};A>0&&(t=a()(t,A,{trailing:!0,leading:!1}));var e=new ResizeObserver(t),r=E.current.getBoundingClientRect();return I(r.width,r.height),e.observe(E.current),function(){e.disconnect()}},[I,A]);var R=(0,i.useMemo)(function(){var t=T.containerWidth,e=T.containerHeight;if(t<0||e<0)return null;(0,l.Z)((0,c.hU)(p)||(0,c.hU)(v),"The width(%s) and height(%s) are both fixed numbers,\n       maybe you don't need to use a ResponsiveContainer.",p,v),(0,l.Z)(!o||o>0,"The aspect(%s) must be greater than zero.",o);var r=(0,c.hU)(p)?t:p,n=(0,c.hU)(v)?e:v;o&&o>0&&(r?n=r/o:n&&(r=n*o),O&&n>O&&(n=O)),(0,l.Z)(r>0||n>0,"The width(%s) and height(%s) of chart should be greater than 0,\n       please check the style of container, or the props width(%s) and height(%s),\n       or add a minWidth(%s) or minHeight(%s) or use aspect(%s) to control the\n       height and width.",r,n,p,v,g,w,o);var a=!Array.isArray(j)&&(0,u.Gf)(j.type).endsWith("Chart");return i.default.Children.map(j,function(t){return i.default.isValidElement(t)?(0,i.cloneElement)(t,d({width:r,height:n},a?{style:d({height:"100%",width:"100%",maxHeight:n,maxWidth:r},t.props.style)}:{})):t})},[o,j,v,O,w,g,T,p]);return i.default.createElement("div",{id:S?"".concat(S):void 0,className:(0,n.Z)("recharts-responsive-container",k),style:d(d({},void 0===W?{}:W),{},{width:p,height:v,minWidth:g,minHeight:w,maxHeight:O}),ref:E},R)})},40946:function(t,e,r){r.d(e,{x:function(){return A}});var n=r(98949),i=r(77571),o=r.n(i),a=r(61994),c=r(16630),l=r(34067),u=r(82944),h=r(4094),s=r(20815),d=["x","y","lineHeight","capHeight","scaleToFit","textAnchor","verticalAnchor","fill"],f=["dx","dy","angle","className","breakAll"];function y(){return(y=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t}).apply(this,arguments)}function p(t,e){if(null==t)return{};var r,n,i=function(t,e){if(null==t)return{};var r={};for(var n in t)if(Object.prototype.hasOwnProperty.call(t,n)){if(e.indexOf(n)>=0)continue;r[n]=t[n]}return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)r=o[n],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(i[r]=t[r])}return i}function b(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,i,o,a,c=[],l=!0,u=!1;try{if(o=(r=r.call(t)).next,0===e){if(Object(r)!==r)return;l=!1}else for(;!(l=(n=o.call(r)).done)&&(c.push(n.value),c.length!==e);l=!0);}catch(t){u=!0,i=t}finally{try{if(!l&&null!=r.return&&(a=r.return(),Object(a)!==a))return}finally{if(u)throw i}}return c}}(t,e)||function(t,e){if(t){if("string"==typeof t)return v(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);if("Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return v(t,e)}}(t,e)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function v(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=Array(e);r<e;r++)n[r]=t[r];return n}var m=/[ \f\n\r\t\v\u2028\u2029]+/,g=function(t){var e=t.children,r=t.breakAll,n=t.style;try{var i=[];o()(e)||(i=r?e.toString().split(""):e.toString().split(m));var a=i.map(function(t){return{word:t,width:(0,h.xE)(t,n).width}}),c=r?0:(0,h.xE)("\xa0",n).width;return{wordsWithComputedWidth:a,spaceWidth:c}}catch(t){return null}},w=function(t,e,r,n,i){var o,a=t.maxLines,l=t.children,u=t.style,h=t.breakAll,s=(0,c.hj)(a),d=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return t.reduce(function(t,e){var o=e.word,a=e.width,c=t[t.length-1];return c&&(null==n||i||c.width+a+r<Number(n))?(c.words.push(o),c.width+=a+r):t.push({words:[o],width:a}),t},[])},f=d(e);if(!s)return f;for(var y=function(t){var e=d(g({breakAll:h,style:u,children:l.slice(0,t)+"…"}).wordsWithComputedWidth);return[e.length>a||e.reduce(function(t,e){return t.width>e.width?t:e}).width>Number(n),e]},p=0,v=l.length-1,m=0;p<=v&&m<=l.length-1;){var w=Math.floor((p+v)/2),O=b(y(w-1),2),j=O[0],x=O[1],A=b(y(w),1)[0];if(j||A||(p=w+1),j&&A&&(v=w-1),!j&&A){o=x;break}m++}return o||f},O=function(t){return[{words:o()(t)?[]:t.toString().split(m)}]},j=function(t){var e=t.width,r=t.scaleToFit,n=t.children,i=t.style,o=t.breakAll,a=t.maxLines;if((e||r)&&!l.x.isSsr){var c=g({breakAll:o,children:n,style:i});return c?w({breakAll:o,children:n,maxLines:a,style:i},c.wordsWithComputedWidth,c.spaceWidth,e,r):O(n)}return O(n)},x="#808080",A=function(t){var e,r=t.x,i=void 0===r?0:r,o=t.y,l=void 0===o?0:o,h=t.lineHeight,b=void 0===h?"1em":h,v=t.capHeight,m=void 0===v?"0.71em":v,g=t.scaleToFit,w=void 0!==g&&g,O=t.textAnchor,A=t.verticalAnchor,S=t.fill,k=void 0===S?x:S,P=p(t,d),W=(0,n.useMemo)(function(){return j({breakAll:P.breakAll,children:P.children,maxLines:P.maxLines,scaleToFit:w,style:P.style,width:P.width})},[P.breakAll,P.children,P.maxLines,w,P.style,P.width]),E=P.dx,H=P.dy,C=P.angle,T=P.className,N=P.breakAll,I=p(P,f);if(!(0,c.P2)(i)||!(0,c.P2)(l))return null;var R=i+((0,c.hj)(E)?E:0),L=l+((0,c.hj)(H)?H:0);switch(void 0===A?"end":A){case"start":e=(0,s.w)("calc(".concat(m,")"));break;case"middle":e=(0,s.w)("calc(".concat((W.length-1)/2," * -").concat(b," + (").concat(m," / 2))"));break;default:e=(0,s.w)("calc(".concat(W.length-1," * -").concat(b,")"))}var M=[];if(w){var U=W[0].width,D=P.width;M.push("scale(".concat(((0,c.hj)(D)?D/U:1)/U,")"))}return C&&M.push("rotate(".concat(C,", ").concat(R,", ").concat(L,")")),M.length&&(I.transform=M.join(" ")),n.default.createElement("text",y({},(0,u.L6)(I,!0),{x:R,y:L,className:(0,a.Z)("recharts-text",T),textAnchor:void 0===O?"start":O,fill:k.includes("url")?x:k}),W.map(function(t,r){var i=t.words.join(N?"":" ");return n.default.createElement("tspan",{x:R,dy:0===r?e:b,key:"".concat(i,"-").concat(r)},i)}))}}}]);