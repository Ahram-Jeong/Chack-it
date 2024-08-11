(function(){"use strict";var e={1404:function(e,t,o){var r=o(5130),n=o(6768),a=o(6450),s=o(3367),l=o(6990),i=o(9728),d=o(8477);const u=(0,n.Lk)("span",null,"© 2024 Chackit from Jeong-Ahram",-1);function c(e,t,o,r,c,y){const f=(0,n.g2)("AccountForm"),m=(0,n.g2)("BookReviews");return(0,n.uX)(),(0,n.Wv)(a.E,{id:"inspire"},{default:(0,n.k6)((()=>[(0,n.bF)(s.z,{app:"","clipped-left":"",class:"custom-app-bar"},{default:(0,n.k6)((()=>[(0,n.bF)(l.l,{class:"custom-app-bar-title"},{default:(0,n.k6)((()=>[(0,n.eW)("📖 Chackit")])),_:1})])),_:1}),(0,n.bF)(d.Y,null,{default:(0,n.k6)((()=>[null==e.me.username?((0,n.uX)(),(0,n.Wv)(f,{key:0})):((0,n.uX)(),(0,n.Wv)(m,{key:1}))])),_:1}),(0,n.bF)(i.O,{app:""},{default:(0,n.k6)((()=>[u])),_:1})])),_:1})}var y=o(8088),f=o(4450),m=o(697),p=o(3833),v=o(1560),b=o(5381),h=o(3273);const g=(0,n.Lk)("h1",{class:"display-1 my-5",align:"center"},"Chackit",-1),k=(0,n.Lk)("br",null,null,-1),w=(0,n.Lk)("h1",{class:"display-1 my-5",align:"center"},"Join Us",-1),x=(0,n.Lk)("br",null,null,-1);function F(e,t,o,a,s,l){return(0,n.uX)(),(0,n.CE)(n.FK,null,[(0,n.bF)(b.I,null,{default:(0,n.k6)((()=>[(0,n.bF)(f.J,{class:"mx-auto px-5 py-10 mt-10","max-width":"500"},{default:(0,n.k6)((()=>[g,(0,n.bF)(v.n,{modelValue:e.form,"onUpdate:modelValue":t[3]||(t[3]=t=>e.form=t),onSubmit:(0,r.D$)(l.onSubmit,["prevent"]),id:"login-form"},{default:(0,n.k6)((()=>[(0,n.bF)(h.W,{modelValue:e.username,"onUpdate:modelValue":t[0]||(t[0]=t=>e.username=t),name:"username",readonly:e.loading,rules:[l.required],class:"mb-2",label:"아이디",clearable:""},null,8,["modelValue","readonly","rules"]),(0,n.bF)(h.W,{modelValue:e.password,"onUpdate:modelValue":t[1]||(t[1]=t=>e.password=t),name:"password",readonly:e.loading,rules:[l.required],label:"비밀번호",placeholder:"Enter your password",type:"password",clearable:""},null,8,["modelValue","readonly","rules"]),k,(0,n.bF)(y.D,{disabled:!e.form,loading:e.loading,color:"black white--text",size:"large",type:"submit",variant:"elevated",block:"",onClick:t[2]||(t[2]=e=>l.login())},{default:(0,n.k6)((()=>[(0,n.eW)(" 로그인 ")])),_:1},8,["disabled","loading"])])),_:1},8,["modelValue","onSubmit"]),(0,n.bF)(m.O,{class:"text-center"},{default:(0,n.k6)((()=>[(0,n.Lk)("button",{class:"text-grey text-decoration-none",onClick:t[4]||(t[4]=(0,r.D$)((t=>e.dialog=!0),["stop"]))}," 회원가입 ")])),_:1})])),_:1})])),_:1}),(0,n.bF)(p.p,{modelValue:e.dialog,"onUpdate:modelValue":t[7]||(t[7]=t=>e.dialog=t),"max-width":"500"},{default:(0,n.k6)((()=>[(0,n.bF)(f.J,{class:"text-center pa-4"},{default:(0,n.k6)((()=>[w,(0,n.bF)(v.n,{onSubmit:(0,r.D$)(l.onSubmit,["prevent"]),id:"register-form",ref:"registerForm"},{default:(0,n.k6)((()=>[(0,n.bF)(h.W,{name:"username",readonly:e.loading,rules:[l.required],class:"mb-2",label:"아이디",placeholder:"Enter your id",clearable:"","error-messages":e.errors.username},null,8,["readonly","rules","error-messages"]),(0,n.bF)(h.W,{name:"password1",readonly:e.loading,rules:[l.required],label:"비밀번호",placeholder:"Enter your password",type:"password",clearable:"","error-messages":e.errors.password1},null,8,["readonly","rules","error-messages"]),(0,n.bF)(h.W,{name:"password2",readonly:e.loading,rules:[l.required],label:"비밀번호 확인",placeholder:"Enter your password",type:"password",clearable:"","error-messages":e.errors.password2},null,8,["readonly","rules","error-messages"]),(0,n.bF)(h.W,{name:"email",readonly:e.loading,rules:[l.required],label:"이메일",placeholder:"Enter your email",type:"email",clearable:"","error-messages":e.errors.email},null,8,["readonly","rules","error-messages"]),x,(0,n.bF)(y.D,{loading:e.loading,color:"black white--text",size:"large",type:"submit",variant:"elevated",block:"",onClick:t[5]||(t[5]=e=>l.register())},{default:(0,n.k6)((()=>[(0,n.eW)(" 회원가입 ")])),_:1},8,["loading"]),(0,n.bF)(m.O,{class:"text-center"},{default:(0,n.k6)((()=>[(0,n.Lk)("button",{class:"text-grey text-decoration-none",onClick:t[6]||(t[6]=t=>e.dialog=!1)}," 취소 ")])),_:1})])),_:1},8,["onSubmit"])])),_:1})])),_:1},8,["modelValue"])],64)}var _=o(4373);_.A.defaults.xsrfCookieName="csrftoken",_.A.defaults.xsrfHeaderName="X-CSRFToken";var A={data:()=>({form:!1,username:null,password:null,loading:!1,dialog:!1,me:{},errors:{}}),methods:{onSubmit(){this.form&&(this.loading=!0,setTimeout((()=>this.loading=!1),2e3))},required(e){return!!e||"Field is required"},login(){console.log("login() 호출");const e=new FormData(document.getElementById("login-form"));_.A.post("/api/login/",e).then((e=>{console.log("login() 성공",e),this.me=e.data,window.location.href="/"})).catch((e=>{console.log("login() 실패",e),alert("아이디, 비밀번호를 확인하세요.")}))},register(){console.log("register() 호출"),this.errors={};const e=new FormData(document.getElementById("register-form"));_.A.post("/api/account/create/",e,{headers:{"X-CSRFToken":this.csrfToken}}).then((e=>{console.log("register() 성공",e),console.log("username >> ",e.data.username),this.dialog=!1})).catch((e=>{if(console.log("register() 실패",e),e.response&&e.response.data.errors){const t=e.response.data.errors;this.errors.username=t.username?t.username.map((e=>e.message)):[],this.errors.password1=t.password1?t.password1.map((e=>e.message)):[],this.errors.password2=t.password2?t.password2.map((e=>e.message)):[],this.errors.email=t.email?t.email.map((e=>e.message)):[]}else alert("회원가입 실패:(")}))}}},T=o(1241);const O=(0,T.A)(A,[["render",F]]);var C=O,q=o(4232);const E=e=>((0,n.Qi)("data-v-3fa22ea9"),e=e(),(0,n.jt)(),e),B={class:"review-section"},j={class:"header-container"},L=E((()=>(0,n.Lk)("div",null,[(0,n.Lk)("h2",null,"내 서재"),(0,n.Lk)("h4",null,"Review")],-1))),S={class:"reviews-container"},V={class:"btn-more-div"};function W(e,t,o,r,a,s){return(0,n.uX)(),(0,n.CE)("div",B,[(0,n.Lk)("div",j,[L,(0,n.Lk)("button",{onClick:t[0]||(t[0]=e=>a.isOpen=!0),class:"btn btn-basic",type:"button"},"글쓰기")]),(0,n.Lk)("div",S,[((0,n.uX)(!0),(0,n.CE)(n.FK,null,(0,n.pI)(s.displayedReviews,(e=>((0,n.uX)(),(0,n.CE)("div",{class:"review",key:e.title},[(0,n.Lk)("h3",null,(0,q.v_)(e.title),1),(0,n.Lk)("p",null,(0,q.v_)(e.body),1)])))),128))]),(0,n.Lk)("div",V,[a.reviews.length>s.displayedReviews.length?((0,n.uX)(),(0,n.CE)("button",{key:0,onClick:t[1]||(t[1]=(...e)=>s.loadMore&&s.loadMore(...e)),class:"btn-more",type:"button"},"더보기")):(0,n.Q3)("",!0)])])}var I={data(){return{reviews:[{title:"Title 1",body:"Body text for whatever you’d like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story."},{title:"Title 2",body:"Body text for whatever you’d like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story."},{title:"Title 3",body:"Body text for whatever you’d like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story."},{title:"Title 4",body:"Body text for whatever you’d like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story."},{title:"Title 5",body:"Body text for whatever you’d like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story."},{title:"Title 6",body:"Body text for whatever you’d like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story."},{title:"Title 7",body:"Body text for whatever you’d like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story."},{title:"Title 8",body:"Body text for whatever you’d like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story."},{title:"Title 9",body:"Body text for whatever you’d like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story."},{title:"Title 10",body:"Body text for whatever you’d like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story."},{title:"Title 11",body:"Body text for whatever you’d like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story."},{title:"Title 12",body:"Body text for whatever you’d like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story."},{title:"Title 13",body:"Body text for whatever you’d like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story."},{title:"Title 14",body:"Body text for whatever you’d like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story."}],cnt:0,showCount:5,isOpen:!1}},computed:{displayedReviews(){return this.reviews.slice(0,this.showCount)}},methods:{loadMore(){this.showCount+=5}}};const U=(0,T.A)(I,[["render",W],["__scopeId","data-v-3fa22ea9"]]);var X=U,P={components:{AccountForm:C,BookReviews:X},data:()=>({me:{},csrfToken:""}),created(){this.getUserInfo()},mounted(){this.csrfToken=document.getElementById("csrf_token").value},methods:{getUserInfo(){console.log("getUserInfo() 호출"),_.A.get("/api/me").then((e=>{console.log("getUserInfo() 성공",e),this.me=e.data,console.log("me 데이터",this.me)})).catch((e=>{console.log("getUserInfo() 실패",e),alert(e.response.status+" : "+e.response.statusText)}))}}};const R=(0,T.A)(P,[["render",c]]);var D=R,M=(o(5524),o(1036)),N=(0,M.$N)();async function J(){const e=await o.e(53).then(o.t.bind(o,8874,23));e.load({google:{families:["Roboto:100,300,400,500,700,900&display=swap"]}})}J(),(0,r.Ef)(D).use(N).mount("#app")}},t={};function o(r){var n=t[r];if(void 0!==n)return n.exports;var a=t[r]={exports:{}};return e[r].call(a.exports,a,a.exports,o),a.exports}o.m=e,function(){var e=[];o.O=function(t,r,n,a){if(!r){var s=1/0;for(u=0;u<e.length;u++){r=e[u][0],n=e[u][1],a=e[u][2];for(var l=!0,i=0;i<r.length;i++)(!1&a||s>=a)&&Object.keys(o.O).every((function(e){return o.O[e](r[i])}))?r.splice(i--,1):(l=!1,a<s&&(s=a));if(l){e.splice(u--,1);var d=n();void 0!==d&&(t=d)}}return t}a=a||0;for(var u=e.length;u>0&&e[u-1][2]>a;u--)e[u]=e[u-1];e[u]=[r,n,a]}}(),function(){o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,{a:t}),t}}(),function(){var e,t=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__};o.t=function(r,n){if(1&n&&(r=this(r)),8&n)return r;if("object"===typeof r&&r){if(4&n&&r.__esModule)return r;if(16&n&&"function"===typeof r.then)return r}var a=Object.create(null);o.r(a);var s={};e=e||[null,t({}),t([]),t(t)];for(var l=2&n&&r;"object"==typeof l&&!~e.indexOf(l);l=t(l))Object.getOwnPropertyNames(l).forEach((function(e){s[e]=function(){return r[e]}}));return s["default"]=function(){return r},o.d(a,s),a}}(),function(){o.d=function(e,t){for(var r in t)o.o(t,r)&&!o.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){o.f={},o.e=function(e){return Promise.all(Object.keys(o.f).reduce((function(t,r){return o.f[r](e,t),t}),[]))}}(),function(){o.u=function(e){return"static/js/webfontloader.431c6ff7.js"}}(),function(){o.miniCssF=function(e){}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="frontend:";o.l=function(r,n,a,s){if(e[r])e[r].push(n);else{var l,i;if(void 0!==a)for(var d=document.getElementsByTagName("script"),u=0;u<d.length;u++){var c=d[u];if(c.getAttribute("src")==r||c.getAttribute("data-webpack")==t+a){l=c;break}}l||(i=!0,l=document.createElement("script"),l.charset="utf-8",l.timeout=120,o.nc&&l.setAttribute("nonce",o.nc),l.setAttribute("data-webpack",t+a),l.src=r),e[r]=[n];var y=function(t,o){l.onerror=l.onload=null,clearTimeout(f);var n=e[r];if(delete e[r],l.parentNode&&l.parentNode.removeChild(l),n&&n.forEach((function(e){return e(o)})),t)return t(o)},f=setTimeout(y.bind(null,void 0,{type:"timeout",target:l}),12e4);l.onerror=y.bind(null,l.onerror),l.onload=y.bind(null,l.onload),i&&document.head.appendChild(l)}}}(),function(){o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){o.p="/"}(),function(){var e={524:0};o.f.j=function(t,r){var n=o.o(e,t)?e[t]:void 0;if(0!==n)if(n)r.push(n[2]);else{var a=new Promise((function(o,r){n=e[t]=[o,r]}));r.push(n[2]=a);var s=o.p+o.u(t),l=new Error,i=function(r){if(o.o(e,t)&&(n=e[t],0!==n&&(e[t]=void 0),n)){var a=r&&("load"===r.type?"missing":r.type),s=r&&r.target&&r.target.src;l.message="Loading chunk "+t+" failed.\n("+a+": "+s+")",l.name="ChunkLoadError",l.type=a,l.request=s,n[1](l)}};o.l(s,i,"chunk-"+t,t)}},o.O.j=function(t){return 0===e[t]};var t=function(t,r){var n,a,s=r[0],l=r[1],i=r[2],d=0;if(s.some((function(t){return 0!==e[t]}))){for(n in l)o.o(l,n)&&(o.m[n]=l[n]);if(i)var u=i(o)}for(t&&t(r);d<s.length;d++)a=s[d],o.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return o.O(u)},r=self["webpackChunkfrontend"]=self["webpackChunkfrontend"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=o.O(void 0,[504],(function(){return o(1404)}));r=o.O(r)})();
//# sourceMappingURL=app.c791fe22.js.map