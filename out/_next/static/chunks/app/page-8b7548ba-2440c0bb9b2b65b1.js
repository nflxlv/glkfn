(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3218],{8050:function(e,t,i){"use strict";i.d(t,{LimitedTimeOffer:function(){return l}});var a=i(62810),n=i(98949);function l(){let[e,t]=(0,n.useState)({hours:4,minutes:59,seconds:59});return(0,n.useEffect)(()=>{let e=setInterval(()=>{t(e=>e.seconds>0?{...e,seconds:e.seconds-1}:e.minutes>0?{...e,minutes:e.minutes-1,seconds:59}:e.hours>0?{hours:e.hours-1,minutes:59,seconds:59}:e)},1e3);return()=>clearInterval(e)},[]),(0,a.BX)("div",{className:"bg-yellow-50 p-4 rounded-lg mb-6",children:[(0,a.tZ)("h3",{className:"text-lg font-semibold text-yellow-800 mb-2",children:"Oferta ograniczona czasowo!"}),(0,a.BX)("div",{className:"flex justify-center space-x-4 mb-4",children:[(0,a.BX)("div",{className:"bg-yellow-800 text-white px-3 py-2 rounded-lg",children:[(0,a.tZ)("div",{className:"text-2xl font-bold",children:e.hours.toString().padStart(2,"0")}),(0,a.tZ)("div",{className:"text-xs",children:"godzin"})]}),(0,a.BX)("div",{className:"bg-yellow-800 text-white px-3 py-2 rounded-lg",children:[(0,a.tZ)("div",{className:"text-2xl font-bold",children:e.minutes.toString().padStart(2,"0")}),(0,a.tZ)("div",{className:"text-xs",children:"minut"})]}),(0,a.BX)("div",{className:"bg-yellow-800 text-white px-3 py-2 rounded-lg",children:[(0,a.tZ)("div",{className:"text-2xl font-bold",children:e.seconds.toString().padStart(2,"0")}),(0,a.tZ)("div",{className:"text-xs",children:"sekund"})]})]}),(0,a.BX)("div",{className:"text-center text-yellow-800",children:[(0,a.tZ)("p",{className:"font-semibold",children:"Tylko teraz Glukofin w cenie 3.98 PLN!"}),(0,a.tZ)("p",{className:"text-sm",children:"Normalna cena: 159 PLN"})]})]})}},16195:function(e,t,i){"use strict";i.d(t,{LocalInfo:function(){return r}});var a=i(62810),n=i(43886),l=i(28819);function r(){let{ref:e,inView:t}=(0,l.YD)({triggerOnce:!0,threshold:.1});return(0,a.tZ)("section",{className:"bg-white py-16",ref:e,children:(0,a.tZ)("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:(0,a.BX)(n.E.div,{initial:{opacity:0,y:20},animate:t?{opacity:1,y:0}:{},transition:{duration:.5},children:[(0,a.tZ)("h2",{className:"text-3xl font-bold text-center mb-12",children:"Dostawa i płatność"}),(0,a.tZ)("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-8 mb-12",children:[{name:"Polska Centralna",delivery:"1-2 dni robocze",price:"3.98 PLN",shipping:"15.00 PLN",availability:"Dostępny"},{name:"Polska Południowa",delivery:"1-2 dni robocze",price:"3.98 PLN",shipping:"15.00 PLN",availability:"Dostępny"},{name:"Polska P\xf3łnocna",delivery:"2-3 dni robocze",price:"3.98 PLN",shipping:"15.00 PLN",availability:"Dostępny"}].map((e,i)=>(0,a.BX)(n.E.div,{initial:{opacity:0,y:20},animate:t?{opacity:1,y:0}:{},transition:{duration:.5,delay:.1*i},className:"bg-white p-6 rounded-lg shadow-sm",children:[(0,a.tZ)("h3",{className:"text-xl font-semibold mb-4",children:e.name}),(0,a.BX)("div",{className:"space-y-2",children:[(0,a.tZ)("p",{className:"text-green-600 font-bold text-2xl",children:e.price}),(0,a.BX)("p",{className:"text-gray-600",children:["Dostawa: ",e.shipping]}),(0,a.BX)("p",{className:"text-gray-600",children:["Czas dostawy: ",e.delivery]}),(0,a.tZ)("p",{className:"text-green-600",children:e.availability})]})]},e.name))}),(0,a.BX)("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-8",children:[(0,a.BX)(n.E.div,{initial:{opacity:0,x:-20},animate:t?{opacity:1,x:0}:{},transition:{duration:.5,delay:.3},className:"bg-white p-6 rounded-lg shadow-sm",children:[(0,a.tZ)("h3",{className:"text-xl font-semibold mb-4",children:"Metody dostawy"}),(0,a.tZ)("div",{className:"space-y-4",children:[{name:"Kurier DPD",time:"1-2 dni robocze",price:"15.00 PLN"},{name:"InPost Paczkomaty",time:"1-2 dni robocze",price:"14.00 PLN"},{name:"Poczta Polska",time:"2-3 dni robocze",price:"12.00 PLN"}].map(e=>(0,a.BX)("div",{className:"flex justify-between items-center",children:[(0,a.BX)("div",{children:[(0,a.tZ)("p",{className:"font-medium",children:e.name}),(0,a.tZ)("p",{className:"text-sm text-gray-600",children:e.time})]}),(0,a.tZ)("p",{className:"font-semibold",children:e.price})]},e.name))})]}),(0,a.BX)(n.E.div,{initial:{opacity:0,x:20},animate:t?{opacity:1,x:0}:{},transition:{duration:.5,delay:.3},className:"bg-white p-6 rounded-lg shadow-sm",children:[(0,a.tZ)("h3",{className:"text-xl font-semibold mb-4",children:"Metody płatności"}),(0,a.tZ)("div",{className:"grid grid-cols-2 gap-4",children:[{name:"BLIK",icon:"\uD83D\uDCB3"},{name:"Przelewy24",icon:"\uD83C\uDFE6"},{name:"Karty płatnicze",icon:"\uD83D\uDCB3"},{name:"Płatność przy odbiorze",icon:"\uD83D\uDCB0"}].map(e=>(0,a.BX)("div",{className:"flex items-center space-x-2",children:[(0,a.tZ)("span",{className:"text-2xl",children:e.icon}),(0,a.tZ)("span",{children:e.name})]},e.name))})]})]})]})})})}},77987:function(e,t,i){"use strict";i.d(t,{ProductOverview:function(){return s}});var a=i(62810),n=i(33145),l=i(98949);function r(){return(0,a.tZ)("div",{className:"relative h-[500px] w-full bg-gray-100 animate-pulse rounded-lg"})}function s(){return(0,a.tZ)("section",{className:"bg-white",children:(0,a.tZ)("div",{className:"max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8",children:(0,a.BX)("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-8 items-center",children:[(0,a.BX)("div",{children:[(0,a.tZ)("h1",{className:"text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl",children:"Glukofin - Naturalne wsparcie poziomu cukru"}),(0,a.tZ)("p",{className:"mt-4 text-xl text-gray-700",children:"Skuteczne rozwiązanie oparte na naturalnych składnikach, wspierające prawidłowy poziom cukru we krwi."}),(0,a.BX)("div",{className:"mt-8",children:[(0,a.BX)("div",{className:"flex items-center gap-2 mb-4",children:[(0,a.tZ)("div",{className:"text-yellow-600 text-2xl","aria-label":"5 gwiazdek",children:"★★★★★"}),(0,a.tZ)("span",{className:"text-gray-700",children:"(524 opinie)"})]}),(0,a.BX)("div",{className:"bg-green-700 text-white px-4 py-2 rounded-lg inline-block mb-4",children:[(0,a.tZ)("span",{className:"font-semibold",children:"Super cena:"})," tylko 3.98 PLN"]}),(0,a.tZ)("div",{children:(0,a.tZ)("a",{href:"https://1z1vt.doctortrf.com/l",className:"bg-green-700 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-green-800 transition-colors inline-block","aria-label":"Sprawdź cenę - przekierowanie do sklepu",children:"Sprawdź cenę"})})]})]}),(0,a.tZ)(l.Suspense,{fallback:(0,a.tZ)(r,{}),children:(0,a.tZ)("div",{className:"relative h-[500px] w-full",children:(0,a.tZ)(n.default,{src:"/glukofin.webp",alt:"Glukofin - Suplement diety na poziom cukru",fill:!0,priority:!0,sizes:"(max-width: 768px) 100vw, 50vw",quality:75,className:"object-contain object-center lazy-image"})})})]})})})}},453:function(e,t,i){"use strict";i.d(t,{ProgressTracker:function(){return l}});var a=i(62810),n=i(98949);function l(){let[e,t]=(0,n.useState)([]),[i,l]=(0,n.useState)(""),[r,s]=(0,n.useState)("");return(0,a.BX)("section",{className:"bg-white p-6 rounded-lg shadow-sm",children:[(0,a.tZ)("h2",{className:"text-2xl font-semibold mb-6",children:"Śledzenie poziomu cukru"}),(0,a.BX)("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6 mb-8",children:[(0,a.BX)("div",{children:[(0,a.tZ)("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Poziom cukru (mg/dL)"}),(0,a.tZ)("input",{type:"number",value:i,onChange:e=>l(e.target.value),className:"w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"})]}),(0,a.BX)("div",{children:[(0,a.tZ)("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Data pomiaru"}),(0,a.tZ)("input",{type:"date",value:r,onChange:e=>s(e.target.value),className:"w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"})]})]}),(0,a.tZ)("button",{onClick:()=>{i&&r&&(t([...e,{date:r,value:parseInt(i)}]),l(""),s(""))},className:"w-full bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors mb-8",children:"Dodaj pomiar"}),e.length>0&&(0,a.BX)("div",{className:"mt-8",children:[(0,a.tZ)("h3",{className:"text-xl font-semibold mb-4",children:"Historia pomiar\xf3w"}),(0,a.tZ)("div",{className:"overflow-x-auto",children:(0,a.BX)("table",{className:"min-w-full divide-y divide-gray-200",children:[(0,a.tZ)("thead",{children:(0,a.BX)("tr",{children:[(0,a.tZ)("th",{className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Data"}),(0,a.tZ)("th",{className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Poziom cukru"}),(0,a.tZ)("th",{className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Status"})]})}),(0,a.tZ)("tbody",{className:"bg-white divide-y divide-gray-200",children:e.map((e,t)=>(0,a.BX)("tr",{children:[(0,a.tZ)("td",{className:"px-6 py-4 whitespace-nowrap text-sm text-gray-500",children:e.date}),(0,a.BX)("td",{className:"px-6 py-4 whitespace-nowrap text-sm text-gray-900",children:[e.value," mg/dL"]}),(0,a.tZ)("td",{className:"px-6 py-4 whitespace-nowrap text-sm",children:(0,a.tZ)("span",{className:"px-2 inline-flex text-xs leading-5 font-semibold rounded-full ".concat(e.value<70?"bg-red-100 text-red-800":e.value>140?"bg-yellow-100 text-yellow-800":"bg-green-100 text-green-800"),children:e.value<70?"Za niski":e.value>140?"Za wysoki":"Prawidłowy"})})]},t))})]})})]})]})}},36346:function(e,t,i){"use strict";i.d(t,{ReadingProgress:function(){return l}});var a=i(62810),n=i(98949);function l(){let[e,t]=(0,n.useState)(0);return(0,n.useEffect)(()=>{let e=()=>{let{scrollTop:e,scrollHeight:i,clientHeight:a}=document.documentElement;t(e/(i-a)*100)};return window.addEventListener("scroll",e),()=>window.removeEventListener("scroll",e)},[]),(0,a.tZ)("div",{className:"fixed top-0 left-0 w-full h-1 bg-gray-200 z-50",children:(0,a.tZ)("div",{className:"h-full bg-green-600 transition-all duration-200",style:{width:"".concat(e,"%")}})})}},96170:function(e,t,i){"use strict";i.d(t,{StatisticalData:function(){return x}});var a=i(62810),n=i(43886),l=i(28819),r=i(30498),s=i(47625),c=i(21156),d=i(56940),o=i(97059),m=i(62994),u=i(99258),p=i(67750),h=i(54061);function x(){let{ref:e,inView:t}=(0,l.YD)({triggerOnce:!0,threshold:.1});return(0,a.tZ)("section",{className:"bg-white py-16",ref:e,children:(0,a.tZ)("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:(0,a.BX)(n.E.div,{initial:{opacity:0,y:20},animate:t?{opacity:1,y:0}:{},transition:{duration:.5},children:[(0,a.tZ)("h2",{className:"text-3xl font-bold text-center mb-12",children:"Potwierdzona skuteczność"}),(0,a.tZ)("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-8 mb-12",children:[{value:87,label:"Skuteczność",suffix:"%",description:"pacjent\xf3w potwierdza działanie"},{value:14,label:"Szybkość",suffix:" dni",description:"do pierwszych efekt\xf3w"},{value:25,label:"Redukcja",suffix:"%",description:"średni spadek poziomu cukru"}].map((e,i)=>(0,a.BX)(n.E.div,{initial:{opacity:0,y:20},animate:t?{opacity:1,y:0}:{},transition:{duration:.5,delay:.1*i},className:"bg-white p-6 rounded-lg shadow-sm text-center",children:[(0,a.tZ)("div",{className:"text-4xl font-bold text-green-600 mb-2",children:t&&(0,a.tZ)(r.ZP,{end:e.value,suffix:e.suffix,duration:2})}),(0,a.tZ)("h3",{className:"text-xl font-semibold mb-2",children:e.label}),(0,a.tZ)("p",{className:"text-gray-600",children:e.description})]},e.label))}),(0,a.BX)("div",{className:"bg-white p-6 rounded-lg shadow-sm",children:[(0,a.tZ)("h3",{className:"text-xl font-semibold mb-6 text-center",children:"Średni poziom cukru w czasie stosowania"}),(0,a.tZ)("div",{className:"h-[400px]",children:(0,a.tZ)(s.h,{width:"100%",height:"100%",children:(0,a.BX)(c.w,{data:[{tydzien:"0",poziom:180,srednia:180},{tydzien:"2",poziom:160,srednia:165},{tydzien:"4",poziom:140,srednia:150},{tydzien:"6",poziom:120,srednia:135},{tydzien:"8",poziom:110,srednia:120}],children:[(0,a.tZ)(d.q,{strokeDasharray:"3 3"}),(0,a.tZ)(o.K,{dataKey:"tydzien",label:{value:"Tygodnie stosowania",position:"bottom"}}),(0,a.tZ)(m.B,{label:{value:"Poziom cukru (mg/dL)",angle:-90,position:"insideLeft"}}),(0,a.tZ)(u.u,{}),(0,a.tZ)(p.D,{}),(0,a.tZ)(h.x,{type:"monotone",dataKey:"poziom",stroke:"#15803d",name:"Poziom cukru",strokeWidth:2}),(0,a.tZ)(h.x,{type:"monotone",dataKey:"srednia",stroke:"#9ca3af",name:"Średnia grupa",strokeDasharray:"5 5"})]})})})]})]})})})}},96552:function(e,t,i){"use strict";i.d(t,{StickyCTA:function(){return s}});var a=i(62810),n=i(48131),l=i(43886),r=i(98949);function s(){let[e,t]=(0,r.useState)(!1);return(0,r.useEffect)(()=>{let e=()=>{t(window.scrollY>300)};return window.addEventListener("scroll",e),()=>window.removeEventListener("scroll",e)},[]),(0,a.tZ)(n.M,{children:e&&(0,a.tZ)(l.E.div,{initial:{y:100,opacity:0},animate:{y:0,opacity:1},exit:{y:100,opacity:0},className:"fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 shadow-lg z-50 md:hidden",children:(0,a.BX)("div",{className:"max-w-7xl mx-auto flex justify-between items-center",children:[(0,a.BX)("div",{children:[(0,a.tZ)("p",{className:"text-lg font-bold text-green-800",children:"3.98 PLN"}),(0,a.tZ)("p",{className:"text-sm text-gray-600",children:"Promocyjna cena"})]}),(0,a.BX)("a",{href:"https://1z1vt.doctortrf.com/l",className:"bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors inline-flex items-center",children:["Kup teraz",(0,a.tZ)("svg",{className:"ml-2 h-5 w-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:(0,a.tZ)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M14 5l7 7m0 0l-7 7m7-7H3"})})]})]})})})}},24556:function(e,t,i){"use strict";i.d(t,{StockScarcity:function(){return r}});var a=i(62810),n=i(98949),l=i(43886);function r(){let[e,t]=(0,n.useState)(27),[i,r]=(0,n.useState)([{name:"Anna K.",time:"2 minuty temu"},{name:"Marek W.",time:"5 minut temu"},{name:"Ewa S.",time:"8 minut temu"}]);return(0,n.useEffect)(()=>{let e=setInterval(()=>{t(e=>Math.max(e-1,5))},3e5);return()=>clearInterval(e)},[]),(0,a.BX)("div",{className:"bg-red-50 p-4 rounded-lg mb-6",children:[(0,a.BX)("div",{className:"flex items-center justify-between mb-4",children:[(0,a.BX)("div",{className:"text-red-600 font-semibold",children:["Uwaga: Zostało tylko ",e," sztuk w magazynie!"]}),(0,a.tZ)("div",{className:"text-sm text-gray-500",children:"Aktualizacja: przed chwilą"})]}),(0,a.tZ)("div",{className:"space-y-2",children:i.map((e,t)=>(0,a.BX)(l.E.div,{initial:{opacity:0,x:-20},animate:{opacity:1,x:0},transition:{delay:.2*t},className:"text-sm text-gray-600",children:[e.name," zakupił(a) Glukofin • ",e.time]},t))})]})}},38590:function(e,t,i){"use strict";i.d(t,{TableOfContents:function(){return l}});var a=i(62810),n=i(98949);function l(e){let{className:t=""}=e,[i,l]=(0,n.useState)(""),r=[{id:"overview",title:"Przegląd produktu"},{id:"quick-answer",title:"Szybka odpowiedź"},{id:"benefits",title:"Korzyści"},{id:"ingredients",title:"Składniki"},{id:"comparison",title:"Por\xf3wnanie"},{id:"howto",title:"Jak stosować"},{id:"results",title:"Rezultaty"},{id:"reviews",title:"Opinie"},{id:"research",title:"Badania naukowe"},{id:"medical",title:"Informacje medyczne"},{id:"faq",title:"FAQ"}];return(0,n.useEffect)(()=>{let e=new IntersectionObserver(e=>{e.forEach(e=>{e.isIntersecting&&l(e.target.id)})},{rootMargin:"-20% 0px -80% 0px",threshold:.1});return r.forEach(t=>{let{id:i}=t,a=document.getElementById(i);a&&e.observe(a)}),()=>e.disconnect()},[]),(0,a.BX)("nav",{className:"bg-white rounded-lg shadow-sm p-4 ".concat(t),"aria-label":"Spis treści",children:[(0,a.tZ)("h2",{className:"text-lg font-semibold mb-4",children:"Spis treści"}),(0,a.tZ)("ul",{className:"space-y-2",children:r.map(e=>(0,a.tZ)("li",{children:(0,a.tZ)("a",{href:"#".concat(e.id),className:"block py-1 transition-colors ".concat(i===e.id?"text-green-600 font-medium":"text-gray-600 hover:text-green-600"),children:e.title})},e.id))})]})}},85102:function(e,t,i){"use strict";i.d(t,{VideoTestimonials:function(){return r}});var a=i(62810),n=i(98949),l=i(43886);function r(){let[e,t]=(0,n.useState)(0);return(0,a.tZ)("section",{className:"bg-white py-16",children:(0,a.BX)("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[(0,a.tZ)("h2",{className:"text-3xl font-bold text-center mb-12",children:"Historie sukcesu"}),(0,a.tZ)("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-8",children:[{name:"Anna K.",title:"Historia sukcesu",description:"Po 3 miesiącach stosowania Glukofinu m\xf3j poziom cukru spadł ze 180 do 120 mg/dL",videoId:"VIDEO_ID_1"},{name:"Marek N.",title:"Moja droga do zdrowia",description:"Glukofin pom\xf3gł mi ustabilizować poziom cukru",videoId:"VIDEO_ID_2"}].map((e,t)=>(0,a.BX)(l.E.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.2*t},className:"bg-gray-50 p-6 rounded-lg",children:[(0,a.tZ)("div",{className:"aspect-w-16 aspect-h-9 mb-4",children:(0,a.tZ)("iframe",{src:"https://www.youtube-nocookie.com/embed/".concat(e.videoId),title:e.title,allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0,className:"rounded-lg"})}),(0,a.tZ)("h3",{className:"text-xl font-semibold mb-2",children:e.title}),(0,a.tZ)("p",{className:"text-gray-600 mb-2",children:e.description}),(0,a.BX)("p",{className:"text-sm text-gray-500",children:["- ",e.name]})]},t))})]})})}}},function(e){e.O(0,[9774,3461,314,7675,6262,4629,2234,3380,6378,4683,8893,8441,3598,7839,1501,6418,7034,3475,102,3145,7697,970,2988,8238,8124,7709,4061,1083,3987,4774,4880,536,1879,1686,6293,2424,317,1071,1877,2943,3047,4256,6118,2978,5424,5993,4579,2607,1744],function(){return e(e.s=87349)}),_N_E=e.O()}]);