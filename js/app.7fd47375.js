(function(t){function e(e){for(var i,o,r=e[0],c=e[1],l=e[2],f=0,d=[];f<r.length;f++)o=r[f],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&d.push(a[o][0]),a[o]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(t[i]=c[i]);u&&u(e);while(d.length)d.shift()();return s.push.apply(s,l||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],i=!0,r=1;r<n.length;r++){var c=n[r];0!==a[c]&&(i=!1)}i&&(s.splice(e--,1),t=o(o.s=n[0]))}return t}var i={},a={app:0},s=[];function o(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=i,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)o.d(n,i,function(e){return t[e]}.bind(null,i));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var l=0;l<r.length;l++)e(r[l]);var u=c;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0c2b":function(t,e,n){"use strict";var i=n("3091"),a=n.n(i);a.a},"13fa":function(t,e,n){},3091:function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},s=[],o=(n("96cf"),n("1da1")),r={name:"LiffMixin",data:function(){return{liffId:"1554258865-JqBmdgd8"}},created:function(){},methods:{initLiff:function(){var t=this;this.$liff.init({liffId:this.liffId}).then(Object(o["a"])(regeneratorRuntime.mark((function e(){var n,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:n=t.$liff.isInClient(),i=t.$liff.isLoggedIn(),t.$store.commit("setLiffInClient",n),t.$store.commit("setLiffLoggedIn",i),i&&t.$liff.getProfile().then((function(e){return t.$store.commit("setLiffUserProfile",e)})).catch((function(t){console.info("getProfileDie error: ",t)})),i||n||t.$liff.login();case 6:case"end":return e.stop()}}),e)})))).catch((function(t){console.info("initLiff error: ",t)}))},liffSendMessage:function(t){this.$liff.isInClient()?this.$liff.sendMessages([{type:"text",text:t}]).then((function(){})).catch((function(t){console.info("sendMessages error: ",t)})):console.info("test",t)}}},c={name:"App",mixins:[r],data:function(){return{}},components:{},created:function(){this.initLiff(),this.$cookie.get("session_key")},methods:{}},l=c,u=(n("9341"),n("2877")),f=Object(u["a"])(l,a,s,!1,null,"043df81c",null),d=f.exports,p=n("8c4f"),m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("Header",{attrs:{items:t.header}}),n("About",{attrs:{items:t.about}}),n("Precautions",{attrs:{items:t.precautions}}),n("Price",{attrs:{items:t.price}}),n(t.contcatComp,{tag:"component"}),n("Footer")],1)},v=[],h=(n("4160"),n("caad"),n("2532"),n("159b"),n("3835")),b=n("5530"),_=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"section values",staticStyle:{"background-image":"url([object Object])"}},[n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[n("div",{staticClass:"column"},[n("h2",[t._v(t._s(t.title))])])])])])},g=[],C={name:"Header",data:function(){return{title:"",bgUrl:"/css/images/flowers-5383054_1920.jpg"}},props:["items"],watch:{items:function(t){var e=this;t.forEach((function(t){var n=Object(h["a"])(t,2),i=n[0],a=n[1];i.includes("名稱")&&(e.title=a),i.includes("設定圖片")&&(e.bgUrl=a)}))}},created:function(){},methods:{}},y=C,w=Object(u["a"])(y,_,g,!1,null,"8abf6f7e",null),x=w.exports,O=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"about"},[n("div",{staticClass:"container"},[n("h3",[t._v(t._s(t.title))]),t._l(t.content,(function(e){return n("p",[t._v(t._s(e))])}))],2)])},k=[],j={name:"About",data:function(){return{title:"",content:[]}},props:["items"],watch:{items:function(t){var e=this;t.forEach((function(t){var n=Object(h["a"])(t,2),i=n[0],a=n[1];i.includes("名稱")&&(e.title=a),i.includes("內容")&&e.content.push(a)}))}}},P=j,$=Object(u["a"])(P,O,k,!1,null,null,null),L=$.exports,E=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"precautions"},[n("div",{staticClass:"container"},[n("h3",[t._v(t._s(t.title))]),t._l(t.content,(function(e){return n("p",[t._v(t._s(e))])}))],2)])},I=[],S={name:"Precautions",data:function(){return{title:"",content:[]}},created:function(){},props:["items"],watch:{items:function(t){var e=this;t.forEach((function(t){var n=Object(h["a"])(t,2),i=n[0],a=n[1];i.includes("名稱")&&(e.title=a),i.includes("內容")&&e.content.push(a)}))}},methods:{setContent:function(){}}},M=S,N=Object(u["a"])(M,E,I,!1,null,null,null),T=N.exports,U=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"price"},[n("div",{staticClass:"container"},[n("div",{staticClass:"row"},t._l(t.price,(function(e){return e?n("div",{staticClass:"one-third column value item"},[n("h2",{staticClass:"value-multiplier"},[t._v(t._s(e.title))]),t._l(e.times,(function(i){return e.times?n("div",{staticClass:"time"},[i.title?n("h5",{staticClass:"value-heading"},[t._v(t._s(i.title))]):t._e(),i.sub?n("h6",[t._v(t._s(i.sub))]):t._e(),n("p",{staticClass:"value-description"},[t._v(t._s(i.price))])]):t._e()}))],2):t._e()})),0),n("div",{staticClass:"row"},[n("div",{staticClass:"column"},t._l(t.tipText,(function(e){return n("p",[t._v(t._s(e))])})),0)])])])},R=[],H=(n("ac1f"),n("1276"),{name:"Price",data:function(){return{tipText:[],price:[]}},props:["items"],watch:{items:function(t){var e=this;t.forEach((function(t){var n=Object(h["a"])(t,2),i=n[0],a=n[1];if(i.includes("備註文字")&&e.tipText.push(a),i.includes("項目")){var s=i.split("-"),o=Object(h["a"])(s,3),r=o[1],c=o[2];if(e.price[r]||(e.price[r]={title:"",times:[]}),"名稱"===c&&(e.price[r]["title"]=a),"內容"===c){var l=a.split(", ");e.price[r]["times"].push({title:l[0],sub:l[1],price:l[2]})}}}))}}}),q=H,J=Object(u["a"])(q,U,R,!1,null,null,null),A=J.exports,D=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"contact"},[t.oid?n("div",{staticClass:"container"},[n("h3",[t._v("謝謝你填寫資料，我會盡快與你連繫")])]):t._e(),t.oid?t._e():n("div",{staticClass:"container"},[n("h3",[t._v("😺🐶聯絡我！🐶😺")]),n("div",{staticClass:"row"},[n("div",{staticClass:"six columns",attrs:{id:"userEmailBox"}},[n("label",{attrs:{for:"userEmail"}},[t._v("Email(必填)")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.user.email,expression:"user.email"}],staticClass:"u-full-width",attrs:{id:"userEmail",type:"email",placeholder:"test@mailbox.com"},domProps:{value:t.user.email},on:{input:function(e){e.target.composing||t.$set(t.user,"email",e.target.value)}}})]),n("div",{staticClass:"six columns"},[n("label",{attrs:{for:"userName"}},[t._v("預約人姓名(必填)")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.user.name,expression:"user.name"}],staticClass:"u-full-width",attrs:{id:"userName",type:"text",placeholder:"林小芳"},domProps:{value:t.user.name},on:{input:function(e){e.target.composing||t.$set(t.user,"name",e.target.value)}}})])]),t._l(t.radioList,(function(e,i){return n("div",{staticClass:"radio-box"},[n("label",[t._v(t._s(e.label))]),t._l(e.options,(function(i,a){return n("div",{staticClass:"radioInput"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.user[e.key],expression:"user[item.key]"}],attrs:{id:""+e.key+a,type:"radio"},domProps:{value:i,checked:t._q(t.user[e.key],i)},on:{change:function(n){return t.$set(t.user,e.key,i)}}}),n("label",{attrs:{for:""+e.key+a}},[t._v(t._s(i))])])}))],2)})),n("label",{attrs:{for:"userContent"}},[t._v("毛小孩資料 / 其他問題(必填)")]),n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.user.content,expression:"user.content"}],staticClass:"u-full-width",attrs:{id:"userContent",placeholder:"毛小孩名字/性別/年齡"},domProps:{value:t.user.content},on:{input:function(e){e.target.composing||t.$set(t.user,"content",e.target.value)}}}),n("input",{staticClass:"button-primary",attrs:{type:"button",value:"立即預約!"},on:{click:function(e){return t.submit()}}})],2)])},F=[],B=(n("b0c0"),n("a15b"),n("d3b7"),n("25f0"),n("5319"),n("bc3a")),W=n.n(B),Q="https://script.google.com/macros/s/AKfycbwnBtdWx7wQQXuWVjMby23PeQwytDmT22V597jWX_-yPoK82kEa/exec",X=W.a.create({baseURL:Q,headers:{"Content-Type":"application/json"}});X.defaults.timeout=2500;var G=function(t){if(!t)return"";var e=[];for(var n in t)if(t.hasOwnProperty(n)&&"function"!==typeof t[n]){var i=t[n].toString();n=encodeURIComponent(n.replace(" ","+")),i=encodeURIComponent(i),e.push(n+"="+i)}return e.join("&")},K=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Q,n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return new Promise((function(i,a){console.log("xhrPost",t);var s=new XMLHttpRequest;if(s.open("POST",e),!n)for(var o in n)s.setRequestHeader(o,n[o]);s.setRequestHeader("Content-type","application/x-www-form-urlencoded; charset=UTF-8"),s.onload=function(){s.status>=200&&s.status<400?i(JSON.parse(s.response)):a(new Error("連結失敗".concat(s.status)))},s.send(G(t))}))},V={name:"Contact",data:function(){return{oid:"",user:{name:"",email:"",content:"",contact:"",talk:"",time:""},radioList:[{key:"contact",label:"語音工具選擇",options:["Line官方","FB Messager","Google Meet"]},{key:"talk",label:"溝通類型",options:["一般","緊急","離世"]},{key:"time",label:"溝通時間",options:["30分鐘","60分鐘"]}]}},watch:{"user.contact":function(t){console.log(t)}},methods:{submit:function(){var t=this,e=this.user,n=e.name,i=e.email,a=e.content;n&&i&&a?(console.log(this.user),K({actions:"POST",table:"預約清單",data:JSON.stringify(this.user)}).then((function(e){t.oid=e.data,console.info("response",e)}))):console.log("content error")}}},z=V,Y=(n("0c2b"),Object(u["a"])(z,D,F,!1,null,"705a0fea",null)),Z=Y.exports,tt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"contact"},[t.oid?n("div",{staticClass:"container"},[n("h3",[t._v("謝謝你填寫資料，我會盡快與你連繫")])]):t._e(),t.oid?t._e():n("div",{staticClass:"container"},[n("h3",[t._v("😺🐶預約溝通！🐶😺")]),n("label",{attrs:{for:"userName"}},[t._v("預約人姓名(必填)")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.user.name,expression:"user.name"}],staticClass:"u-full-width",attrs:{id:"userName",type:"text",placeholder:"林小芳"},domProps:{value:t.user.name},on:{input:function(e){e.target.composing||t.$set(t.user,"name",e.target.value)}}}),t._l(t.radioList,(function(e,i){return n("div",{staticClass:"radio-box"},[n("label",[t._v(t._s(e.label))]),t._l(e.options,(function(i,a){return n("div",{staticClass:"radioInput"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.user[e.key],expression:"user[item.key]"}],attrs:{id:""+e.key+a,type:"radio"},domProps:{value:i,checked:t._q(t.user[e.key],i)},on:{change:function(n){return t.$set(t.user,e.key,i)}}}),n("label",{attrs:{for:""+e.key+a}},[t._v(t._s(i))])])}))],2)})),n("label",{attrs:{for:"userContent"}},[t._v("毛小孩資料 / 其他問題(必填)")]),n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.user.content,expression:"user.content"}],staticClass:"u-full-width",attrs:{id:"userContent",placeholder:"毛小孩名字/性別/年齡"},domProps:{value:t.user.content},on:{input:function(e){e.target.composing||t.$set(t.user,"content",e.target.value)}}}),n("input",{staticClass:"button-primary",attrs:{type:"button",value:"立即預約!"},on:{click:function(e){return t.sendMsg()}}})],2)])},et=[],nt={name:"ContactLine",mixins:[r],data:function(){return{oid:"",user:{name:"",content:"",talk:"",time:""},radioList:[{key:"talk",label:"溝通類型",options:["一般","緊急","離世"]},{key:"time",label:"溝通時間",options:["30分鐘","60分鐘"]}]}},watch:{"user.contact":function(t){console.log(t)}},methods:{submit:function(){var t=this,e=this.user,n=e.name,i=e.email,a=e.content;n&&i&&a?(console.log(this.user),K({actions:"POST",table:"預約清單",data:JSON.stringify(this.user)}).then((function(e){t.oid=e.data,console.info("response",e)}))):console.log("content error")},sendMsg:function(){var t=this.user,e=t.name,n=t.talk,i=t.time,a=t.content,s="預約人姓名: "+e+"\n"+n+" "+i+"\n"+a;this.liffSendMessage(s),this.$liff.closeWindow()}}},it=nt,at=(n("7eca"),Object(u["a"])(it,tt,et,!1,null,"03c4e7e6",null)),st=at.exports,ot=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"footer"},[n("div",{staticClass:"container"},[n("div",{staticClass:"row"},t._l(t.icon,(function(e){return e?n("div",{staticClass:"six columns value item"},[n("h2",{staticClass:"value-multiplier"},[t._v(t._s(e.name))]),n("img",{attrs:{src:e.link}})]):t._e()})),0)])])},rt=[],ct={name:"Footer",data:function(){return{icon:[{name:"Line官方",link:""},{name:"fb 粉絲頁",link:""}]}}},lt=ct,ut=Object(u["a"])(lt,ot,rt,!1,null,null,null),ft=ut.exports,dt=n("2f62"),pt={name:"Home",components:{Header:x,About:L,Precautions:T,Price:A,Contact:Z,ContactLine:st,Footer:ft},data:function(){return{sourceData:[],header:[],about:[],precautions:[],price:[]}},computed:Object(b["a"])(Object(b["a"])({},Object(dt["b"])(["liffInClient"])),{},{contcatComp:function(){return this.liffInClient?"ContactLine":"Contact"}}),created:function(){this.getData()},methods:{getData:function(){var t=this;K({table:"設定內容",actions:"GET"}).then((function(e){var n=e.data;n.length>0&&n.forEach((function(e){var n=Object(h["a"])(e,1),i=n[0];["header","about","precautions","price"].forEach((function(n){i.includes(n)&&t[n].push(e)}))}))}))}}},mt=pt,vt=Object(u["a"])(mt,m,v,!1,null,null,null),ht=vt.exports;i["a"].use(p["a"]);var bt=[{name:"home",path:"/",component:ht}],_t=new p["a"]({mode:"history",routes:bt}),gt=_t,Ct=n("00e7"),yt=n.n(Ct);i["a"].use(dt["a"]);var wt=new dt["a"].Store({state:{liffLoggedIn:!1,liffInClient:!1,liffUserProfile:{},count:0},mutations:{setLiffLoggedIn:function(t,e){t.liffLoggedIn=e},setLiffInClient:function(t,e){t.liffInClient=e},setLiffUserProfile:function(t,e){t.liffUserProfile=e}}}),xt=wt;i["a"].use(yt.a),i["a"].use(dt["a"]),i["a"].prototype.$liff=window.liff,i["a"].config.productionTip=!1,new i["a"]({render:function(t){return t(d)},router:gt,store:xt}).$mount("#app")},"7a5d":function(t,e,n){},"7eca":function(t,e,n){"use strict";var i=n("13fa"),a=n.n(i);a.a},9341:function(t,e,n){"use strict";var i=n("7a5d"),a=n.n(i);a.a}});
//# sourceMappingURL=app.7fd47375.js.map