(function(){"use strict";var e={3912:function(e,o,t){var r=t(5130),a=t(6768),n=t(6450),l=t(249),s=t(6990),i=t(9728),d=t(8477);const u=(0,a.Lk)("span",null,"© 2024 Chackit from Jeong-Ahram",-1);function c(e,o,t,r,c,y){const f=(0,a.g2)("UserInfo"),m=(0,a.g2)("BookReviews"),p=(0,a.g2)("AccountForm");return(0,a.uX)(),(0,a.Wv)(n.E,{id:"inspire"},{default:(0,a.k6)((()=>[(0,a.bF)(l.z,{app:"","clipped-left":"",class:"custom-app-bar"},{default:(0,a.k6)((()=>[(0,a.bF)(s.l,{class:"custom-app-bar-title"},{default:(0,a.k6)((()=>[(0,a.eW)("📖 Chackit")])),_:1})])),_:1}),(0,a.bF)(d.Y,null,{default:(0,a.k6)((()=>[null!=e.me.username?((0,a.uX)(),(0,a.Wv)(f,{key:0})):(0,a.Q3)("",!0),null!=e.me.username?((0,a.uX)(),(0,a.Wv)(m,{key:1})):((0,a.uX)(),(0,a.Wv)(p,{key:2}))])),_:1}),(0,a.bF)(i.O,{app:""},{default:(0,a.k6)((()=>[u])),_:1})])),_:1})}var y=t(8088),f=t(4593),m=t(697),p=t(3833),b=t(1560),h=t(3813),k=t(3273);const v=(0,a.Lk)("h1",{class:"display-1 my-5",align:"center"},"Chackit",-1),g=(0,a.Lk)("br",null,null,-1),w=(0,a.Lk)("h1",{class:"display-1 my-5",align:"center"},"Join Us",-1),F=(0,a.Lk)("br",null,null,-1);function _(e,o,t,n,l,s){return(0,a.uX)(),(0,a.CE)(a.FK,null,[(0,a.bF)(h.I,null,{default:(0,a.k6)((()=>[(0,a.bF)(f.J,{class:"mx-auto px-5 py-10 mt-10","max-width":"500"},{default:(0,a.k6)((()=>[v,(0,a.bF)(b.n,{modelValue:e.form,"onUpdate:modelValue":o[3]||(o[3]=o=>e.form=o),onSubmit:(0,r.D$)(s.onSubmit,["prevent"]),id:"login-form"},{default:(0,a.k6)((()=>[(0,a.bF)(k.W,{modelValue:e.username,"onUpdate:modelValue":o[0]||(o[0]=o=>e.username=o),name:"username",readonly:e.loading,rules:[s.required],class:"mb-2",label:"아이디",clearable:""},null,8,["modelValue","readonly","rules"]),(0,a.bF)(k.W,{modelValue:e.password,"onUpdate:modelValue":o[1]||(o[1]=o=>e.password=o),name:"password",readonly:e.loading,rules:[s.required],label:"비밀번호",placeholder:"Enter your password",type:"password",clearable:""},null,8,["modelValue","readonly","rules"]),g,(0,a.bF)(y.D,{disabled:!e.form,loading:e.loading,color:"black white--text",size:"large",type:"submit",variant:"elevated",block:"",onClick:o[2]||(o[2]=e=>s.login())},{default:(0,a.k6)((()=>[(0,a.eW)(" 로그인 ")])),_:1},8,["disabled","loading"])])),_:1},8,["modelValue","onSubmit"]),(0,a.bF)(m.O,{class:"text-center"},{default:(0,a.k6)((()=>[(0,a.Lk)("button",{class:"text-grey text-decoration-none",onClick:o[4]||(o[4]=(0,r.D$)((o=>e.dialog=!0),["stop"]))}," 회원가입 ")])),_:1})])),_:1})])),_:1}),(0,a.bF)(p.p,{modelValue:e.dialog,"onUpdate:modelValue":o[7]||(o[7]=o=>e.dialog=o),"max-width":"500"},{default:(0,a.k6)((()=>[(0,a.bF)(f.J,{class:"text-center pa-4"},{default:(0,a.k6)((()=>[w,(0,a.bF)(b.n,{onSubmit:(0,r.D$)(s.onSubmit,["prevent"]),id:"register-form",ref:"registerForm"},{default:(0,a.k6)((()=>[(0,a.bF)(k.W,{name:"username",readonly:e.loading,rules:[s.required],class:"mb-2",label:"아이디",placeholder:"Enter your id",clearable:"","error-messages":e.errors.username},null,8,["readonly","rules","error-messages"]),(0,a.bF)(k.W,{name:"password1",readonly:e.loading,rules:[s.required],label:"비밀번호",placeholder:"Enter your password",type:"password",clearable:"","error-messages":e.errors.password1},null,8,["readonly","rules","error-messages"]),(0,a.bF)(k.W,{name:"password2",readonly:e.loading,rules:[s.required],label:"비밀번호 확인",placeholder:"Enter your password",type:"password",clearable:"","error-messages":e.errors.password2},null,8,["readonly","rules","error-messages"]),(0,a.bF)(k.W,{name:"email",readonly:e.loading,rules:[s.required],label:"이메일",placeholder:"Enter your email",type:"email",clearable:"","error-messages":e.errors.email},null,8,["readonly","rules","error-messages"]),F,(0,a.bF)(y.D,{loading:e.loading,color:"black white--text",size:"large",type:"submit",variant:"elevated",block:"",onClick:o[5]||(o[5]=e=>s.register())},{default:(0,a.k6)((()=>[(0,a.eW)(" 회원가입 ")])),_:1},8,["loading"]),(0,a.bF)(m.O,{class:"text-center"},{default:(0,a.k6)((()=>[(0,a.Lk)("button",{class:"text-grey text-decoration-none",onClick:o[6]||(o[6]=o=>e.dialog=!1)}," 취소 ")])),_:1})])),_:1},8,["onSubmit"])])),_:1})])),_:1},8,["modelValue"])],64)}var x=t(4373);x.A.defaults.xsrfCookieName="csrftoken",x.A.defaults.xsrfHeaderName="X-CSRFToken";var B={data:()=>({form:!1,username:null,password:null,loading:!1,dialog:!1,me:{},errors:{}}),methods:{onSubmit(){this.form&&(this.loading=!0,setTimeout((()=>this.loading=!1),2e3))},required(e){return!!e||"Field is required"},login(){console.log("login() 호출");const e=new FormData(document.getElementById("login-form"));x.A.post("/api/login/",e).then((e=>{console.log("login() 성공",e),this.me=e.data,window.location.href="/"})).catch((e=>{console.log("login() 실패",e),alert("아이디, 비밀번호를 확인하세요.")}))},register(){console.log("register() 호출"),this.errors={};const e=new FormData(document.getElementById("register-form"));x.A.post("/api/account/create/",e,{headers:{"X-CSRFToken":this.csrfToken}}).then((e=>{console.log("register() 성공",e),console.log("username >> ",e.data.username),this.dialog=!1})).catch((e=>{if(console.log("register() 실패",e),e.response&&e.response.data.errors){const o=e.response.data.errors;this.errors.username=o.username?o.username.map((e=>e.message)):[],this.errors.password1=o.password1?o.password1.map((e=>e.message)):[],this.errors.password2=o.password2?o.password2.map((e=>e.message)):[],this.errors.email=o.email?o.email.map((e=>e.message)):[]}else alert("회원가입 실패:(")}))}}},C=t(1241);const A=(0,C.A)(B,[["render",_]]);var T=A,O=t(4232),E=t(9669);function W(e,o,t,r,n,l){return(0,a.uX)(),(0,a.CE)("div",null,[(0,a.Lk)("p",null,[(0,a.eW)(" ☕안녕하세요, "+(0,O.v_)(e.username)+" 님! ",1),(0,a.bF)(y.D,{icon:"",onClick:o[0]||(o[0]=e=>l.logout())},{default:(0,a.k6)((()=>[(0,a.bF)(E.w,null,{default:(0,a.k6)((()=>[(0,a.eW)("mdi-export")])),_:1})])),_:1})])])}var q={data:()=>({username:document.getElementById("username").value}),methods:{logout(){console.log("logout() 호출"),x.A.get("/api/logout/").then((e=>{console.log("logout() 성공",e),this.username=null,window.location.href="/"})).catch((e=>{console.log("logout() 실패",e)}))}}};const L=(0,C.A)(q,[["render",W],["__scopeId","data-v-e49eddbe"]]);var V=L,j=t(1606),I=t(3745),S=t(5832),U=t(7511),X=t(1720),D=t(5126),K=t(6887),R=t(7254),P=t(7294),N=t(7505),J=t(4366),M=t(8050);const $=e=>((0,a.Qi)("data-v-a4f74480"),e=e(),(0,a.jt)(),e),z={class:"review-section"},Q={class:"header-container"},Z=$((()=>(0,a.Lk)("div",null,[(0,a.Lk)("h2",null,"내 서재"),(0,a.Lk)("h4",null,"Review")],-1))),G={class:"reviews-container"},H={class:"btn-more-div"};function Y(e,o,t,n,l,s){return(0,a.uX)(),(0,a.CE)(a.FK,null,[(0,a.Lk)("div",z,[(0,a.Lk)("div",Q,[Z,(0,a.Lk)("button",{onClick:o[0]||(o[0]=o=>e.dialog1=!0),class:"btn btn-basic",type:"button"},"글쓰기")]),(0,a.Lk)("div",G,[((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(s.displayedReviews,(e=>((0,a.uX)(),(0,a.CE)("div",{class:"review",key:e.title},[(0,a.Lk)("h3",null,(0,O.v_)(e.title),1),(0,a.Lk)("p",null,(0,O.v_)(e.body),1)])))),128))]),(0,a.Lk)("div",H,[e.reviews.length>s.displayedReviews.length?((0,a.uX)(),(0,a.CE)("button",{key:0,onClick:o[1]||(o[1]=e=>s.loadMore()),class:"btn-more",type:"button"},"더보기")):(0,a.Q3)("",!0)])]),(0,a.bF)(p.p,{modelValue:e.dialog1,"onUpdate:modelValue":o[6]||(o[6]=o=>e.dialog1=o),class:"mx-auto","max-width":"500"},{default:(0,a.k6)((()=>[(0,a.bF)(f.J,null,{default:(0,a.k6)((()=>[(0,a.bF)(J.u,{color:"white",flat:""},{default:(0,a.k6)((()=>[(0,a.bF)(M.s,null,{default:(0,a.k6)((()=>[(0,a.eW)("도서 검색")])),_:1}),(0,a.bF)(y.D,{icon:"mdi-magnify",onClick:o[2]||(o[2]=e=>s.searchBook())})])),_:1}),(0,a.bF)(j.r,{class:"pb-0"},{default:(0,a.k6)((()=>[(0,a.bF)(k.W,{ref:"searchField",modelValue:e.searchKeyword,"onUpdate:modelValue":o[3]||(o[3]=o=>e.searchKeyword=o),label:"도서명 입력","hide-details":"","single-line":"",class:"white--text",style:{"background-color":"white"},onKeyup:o[4]||(o[4]=(0,r.jR)((e=>s.searchBook()),["enter"]))},null,8,["modelValue"])])),_:1}),(0,a.bF)(K.x8,null,{default:(0,a.k6)((()=>[((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(e.books,(e=>((0,a.uX)(),(0,a.Wv)(R.g,{key:e.title,onClick:o=>s.detailBook(e)},{default:(0,a.k6)((()=>[(0,a.bF)(P.U,{textContent:(0,O.v_)(e.title),style:{"font-weight":"bold"}},null,8,["textContent"]),(0,a.bF)(N.w,null,{default:(0,a.k6)((()=>[(0,a.eW)((0,O.v_)(e.author)+", "+(0,O.v_)(e.publisher),1)])),_:2},1024)])),_:2},1032,["onClick"])))),128))])),_:1}),(0,a.bF)(U.G),(0,a.bF)(I.S,{class:"pa-2",style:{"background-color":"white"}},{default:(0,a.k6)((()=>[(0,a.bF)(X.h),(0,a.Lk)("button",{class:"text-grey text-decoration-none",onClick:o[5]||(o[5]=e=>s.closeDialog())},"취소")])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,a.bF)(p.p,{modelValue:e.dialog2,"onUpdate:modelValue":o[8]||(o[8]=o=>e.dialog2=o),"max-width":"500"},{default:(0,a.k6)((()=>[(0,a.bF)(f.J,{class:"mx-auto"},{default:(0,a.k6)((()=>[(0,a.bF)(D.y,{"aspect-ratio":1,src:e.selectedBook.cover,alt:"book-img",class:"bg-white"},null,8,["src"]),(0,a.bF)(j.r,null,{default:(0,a.k6)((()=>[(0,a.eW)((0,O.v_)(e.selectedBook.title),1)])),_:1}),(0,a.bF)(S.Z,null,{default:(0,a.k6)((()=>[(0,a.eW)((0,O.v_)(e.selectedBook.author),1)])),_:1}),(0,a.bF)(S.Z,null,{default:(0,a.k6)((()=>[(0,a.eW)((0,O.v_)(e.selectedBook.publisher),1)])),_:1}),(0,a.bF)(m.O,null,{default:(0,a.k6)((()=>[(0,a.eW)((0,O.v_)(e.selectedBook.description),1)])),_:1}),(0,a.bF)(I.S,null,{default:(0,a.k6)((()=>[(0,a.bF)(y.D,{class:"text-grey text-decoration-none",onClick:o[7]||(o[7]=e=>s.closeDialog())},{default:(0,a.k6)((()=>[(0,a.eW)("취소")])),_:1})])),_:1})])),_:1})])),_:1},8,["modelValue"])],64)}var ee={data:()=>({reviews:[{title:"Title 1",body:"Body text for whatever you’d like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story."},{title:"Title 2",body:"Body text for whatever you’d like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story."},{title:"Title 3",body:"Body text for whatever you’d like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story."},{title:"Title 4",body:"Body text for whatever you’d like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story."},{title:"Title 5",body:"Body text for whatever you’d like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story."},{title:"Title 6",body:"Body text for whatever you’d like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story."},{title:"Title 7",body:"Body text for whatever you’d like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story."},{title:"Title 8",body:"Body text for whatever you’d like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story."},{title:"Title 9",body:"Body text for whatever you’d like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story."},{title:"Title 10",body:"Body text for whatever you’d like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story."},{title:"Title 11",body:"Body text for whatever you’d like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story."},{title:"Title 12",body:"Body text for whatever you’d like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story."},{title:"Title 13",body:"Body text for whatever you’d like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story."},{title:"Title 14",body:"Body text for whatever you’d like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story."}],showCount:5,searchKeyword:"",books:[],selectedBook:{},dialog1:!1,dialog2:!1}),computed:{displayedReviews(){return this.reviews.slice(0,this.showCount)}},methods:{loadMore(){this.showCount+=5},closeDialog(){this.dialog1=!1,this.dialog2=!1,this.searchKeyword="",this.books=[]},searchBook(){console.log("searchBook() 호출"),x.A.get("/api/book/search/",{params:{keyword:this.searchKeyword}}).then((e=>{console.log("searchBook() 성공",e),this.books=e.data,""==this.books&&alert("검색 결과가 없습니다.")})).catch((e=>{console.log("searchBook() 실패",e)}))},detailBook(e){this.dialog1=!1,this.dialog2=!0,this.selectedBook=e}}};const oe=(0,C.A)(ee,[["render",Y],["__scopeId","data-v-a4f74480"]]);var te=oe,re={components:{AccountForm:T,UserInfo:V,BookReviews:te},data:()=>({me:{},csrfToken:""}),created(){this.getUserInfo()},mounted(){this.csrfToken=document.getElementById("csrf_token").value},methods:{getUserInfo(){console.log("getUserInfo() 호출"),x.A.get("/api/me").then((e=>{console.log("getUserInfo() 성공",e),this.me=e.data,console.log("me 데이터",this.me)})).catch((e=>{console.log("getUserInfo() 실패",e),alert(e.response.status+" : "+e.response.statusText)}))}}};const ae=(0,C.A)(re,[["render",c]]);var ne=ae,le=(t(5524),t(1036)),se=(0,le.$N)();async function ie(){const e=await t.e(53).then(t.t.bind(t,8874,23));e.load({google:{families:["Roboto:100,300,400,500,700,900&display=swap"]}})}ie(),(0,r.Ef)(ne).use(se).mount("#app")}},o={};function t(r){var a=o[r];if(void 0!==a)return a.exports;var n=o[r]={exports:{}};return e[r].call(n.exports,n,n.exports,t),n.exports}t.m=e,function(){var e=[];t.O=function(o,r,a,n){if(!r){var l=1/0;for(u=0;u<e.length;u++){r=e[u][0],a=e[u][1],n=e[u][2];for(var s=!0,i=0;i<r.length;i++)(!1&n||l>=n)&&Object.keys(t.O).every((function(e){return t.O[e](r[i])}))?r.splice(i--,1):(s=!1,n<l&&(l=n));if(s){e.splice(u--,1);var d=a();void 0!==d&&(o=d)}}return o}n=n||0;for(var u=e.length;u>0&&e[u-1][2]>n;u--)e[u]=e[u-1];e[u]=[r,a,n]}}(),function(){t.n=function(e){var o=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(o,{a:o}),o}}(),function(){var e,o=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__};t.t=function(r,a){if(1&a&&(r=this(r)),8&a)return r;if("object"===typeof r&&r){if(4&a&&r.__esModule)return r;if(16&a&&"function"===typeof r.then)return r}var n=Object.create(null);t.r(n);var l={};e=e||[null,o({}),o([]),o(o)];for(var s=2&a&&r;"object"==typeof s&&!~e.indexOf(s);s=o(s))Object.getOwnPropertyNames(s).forEach((function(e){l[e]=function(){return r[e]}}));return l["default"]=function(){return r},t.d(n,l),n}}(),function(){t.d=function(e,o){for(var r in o)t.o(o,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:o[r]})}}(),function(){t.f={},t.e=function(e){return Promise.all(Object.keys(t.f).reduce((function(o,r){return t.f[r](e,o),o}),[]))}}(),function(){t.u=function(e){return"static/js/webfontloader.431c6ff7.js"}}(),function(){t.miniCssF=function(e){}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,o){return Object.prototype.hasOwnProperty.call(e,o)}}(),function(){var e={},o="frontend:";t.l=function(r,a,n,l){if(e[r])e[r].push(a);else{var s,i;if(void 0!==n)for(var d=document.getElementsByTagName("script"),u=0;u<d.length;u++){var c=d[u];if(c.getAttribute("src")==r||c.getAttribute("data-webpack")==o+n){s=c;break}}s||(i=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,t.nc&&s.setAttribute("nonce",t.nc),s.setAttribute("data-webpack",o+n),s.src=r),e[r]=[a];var y=function(o,t){s.onerror=s.onload=null,clearTimeout(f);var a=e[r];if(delete e[r],s.parentNode&&s.parentNode.removeChild(s),a&&a.forEach((function(e){return e(t)})),o)return o(t)},f=setTimeout(y.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=y.bind(null,s.onerror),s.onload=y.bind(null,s.onload),i&&document.head.appendChild(s)}}}(),function(){t.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){t.p="/"}(),function(){var e={524:0};t.f.j=function(o,r){var a=t.o(e,o)?e[o]:void 0;if(0!==a)if(a)r.push(a[2]);else{var n=new Promise((function(t,r){a=e[o]=[t,r]}));r.push(a[2]=n);var l=t.p+t.u(o),s=new Error,i=function(r){if(t.o(e,o)&&(a=e[o],0!==a&&(e[o]=void 0),a)){var n=r&&("load"===r.type?"missing":r.type),l=r&&r.target&&r.target.src;s.message="Loading chunk "+o+" failed.\n("+n+": "+l+")",s.name="ChunkLoadError",s.type=n,s.request=l,a[1](s)}};t.l(l,i,"chunk-"+o,o)}},t.O.j=function(o){return 0===e[o]};var o=function(o,r){var a,n,l=r[0],s=r[1],i=r[2],d=0;if(l.some((function(o){return 0!==e[o]}))){for(a in s)t.o(s,a)&&(t.m[a]=s[a]);if(i)var u=i(t)}for(o&&o(r);d<l.length;d++)n=l[d],t.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return t.O(u)},r=self["webpackChunkfrontend"]=self["webpackChunkfrontend"]||[];r.forEach(o.bind(null,0)),r.push=o.bind(null,r.push.bind(r))}();var r=t.O(void 0,[504],(function(){return t(3912)}));r=t.O(r)})();
//# sourceMappingURL=app.a994ab99.js.map