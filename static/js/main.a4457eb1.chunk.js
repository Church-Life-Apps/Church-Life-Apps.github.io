(this["webpackJsonphymnal-app"]=this["webpackJsonphymnal-app"]||[]).push([[1],{127:function(e,n,t){},129:function(e,n,t){"use strict";t.r(n);var r=t(0),c=t(38),o=t.n(c),s=t(41),i=t(10),a=(t(78),t(79),t(80),t(81),t(82),t(83),t(84),t(85),t(86),t(87),t(88),t(6)),u=t(3),j=(t(33),t(18)),l=t(47),b=t.n(l);var d,f=t(71),h=t(1),O=function(){var e,n,t=new f.a({auth:(e="U2FsdGVkX1+bPnD7qF/W1r3lCIYIwy88qJ1SO+d9HiCkYac2WeRs2MOpFHVq5TjdPNV0vrizHfRlMCgxInEAIQ==",n="jesus private key",b.a.AES.decrypt(e,n).toString(b.a.enc.Utf8))}),c=Object(r.useState)(""),o=Object(a.a)(c,2),s=o[0],i=o[1],j=Object(r.useState)(""),l=Object(a.a)(j,2),d=l[0],O=l[1],p=Object(r.useState)(""),g=Object(a.a)(p,2),x=g[0],y=g[1],m=Object(r.useState)(""),v=Object(a.a)(m,2),k=v[0],S=v[1],w=Object(r.useState)(!1),N=Object(a.a)(w,2),C=N[0],I=N[1];return Object(h.jsxs)("div",{id:"feedbackFormDiv",children:[Object(h.jsxs)(u.r,{children:[Object(h.jsx)(u.s,{position:"floating",children:"Name (Optional)"}),Object(h.jsx)(u.q,{type:"text",value:s,placeholder:"Enter your name",onIonChange:function(e){return i(e.detail.value)}})]}),Object(h.jsxs)(u.r,{children:[Object(h.jsx)(u.s,{position:"floating",children:"Subject/Title"}),Object(h.jsx)(u.q,{type:"text",value:x,placeholder:"Enter Subject/Title",onIonChange:function(e){return y(e.detail.value)}})]}),Object(h.jsxs)(u.r,{children:[Object(h.jsx)(u.s,{position:"floating",children:"What do you think?"}),Object(h.jsx)(u.y,{rows:7,value:d,placeholder:"Enter feedback",onIonChange:function(e){return O(e.detail.value)}})]}),Object(h.jsx)(u.a,{expand:"full",onClick:function(){if(""===x||""===d)S("Please include a title/subject and a feedback message!");else{var e=s||"anonymous";t.rest.issues.create({owner:"Church-Life-Apps",repo:"Songs",title:x,body:"> ".concat(d,"\n\n\u2014 ").concat(e)}).then((function(e){console.debug("GitHub issue created successfully.",e.status,e.data.body),S("Feedback Submitted Sucessfully, Thanks!")}),(function(e){S("Error Submitting Feedback: ".concat(e)),console.error("Error making GitHub issue: ",e)})),i(""),O(""),y("")}I(!0)},children:"Submit Feedback"}),Object(h.jsxs)(u.u,{id:"feedbackResponseModal",isOpen:C,onDidDismiss:_,children:[Object(h.jsx)("h1",{className:"center",children:k}),Object(h.jsx)(u.a,{id:"feedbackResponseOKButton",onClick:_,children:"OK"})]})]});function _(){S(""),I(!1)}},p=function(){var e=Object(r.useState)(""),n=Object(a.a)(e,2),t=n[0],c=n[1];return Object(h.jsxs)(u.i,{children:[""===t?Object(h.jsxs)(u.t,{children:[Object(h.jsx)(u.r,{id:"settingsTitle",children:Object(h.jsx)(u.s,{children:"Settings"})}),Object(h.jsx)(u.r,{children:Object(h.jsx)(u.a,{onClick:function(){return c("feedback")},children:"Submit Feedback"})})]}):null,"feedback"===t?Object(h.jsx)(O,{}):null,""!==t?Object(h.jsx)(u.a,{color:"light",expand:"full",id:"backToSettingsButton",onClick:function(){return c("")},children:"Return to Settings"}):null]})},g=t(4),x=t.n(g),y=t(13);!function(e){e[e.Music=0]="Music",e[e.Lyrics=1]="Lyrics"}(d||(d={}));var m={title:"",author:"",songNumber:0,lyrics:new Map},v="https://raw.githubusercontent.com/Church-Life-Apps/Resources/master/resources/songbooks.json",k=[{name:"Songs and Hymns of Life",bookId:"shl",lyricsUrl:"https://raw.githubusercontent.com/Church-Life-Apps/Resources/master/resources/metadata/shl.json",musicUrl:"https://raw.githubusercontent.com/Church-Life-Apps/Resources/master/resources/images/shl/SHL_"}],S=k,w=!1;function N(){return C.apply(this,arguments)}function C(){return(C=Object(y.a)(x.a.mark((function e(){var n,t,r,c;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!w){e.next=2;break}return e.abrupt("return",S);case 2:return e.next=4,fetch(v);case 4:if(!(n=e.sent)){e.next=17;break}return e.next=8,n.json();case 8:return t=e.sent,r=t.songbooks,t.testing,S=c=r,w=!0,e.abrupt("return",c);case 17:return e.abrupt("return",k);case 18:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function I(e){return _.apply(this,arguments)}function _(){return(_=Object(y.a)(x.a.mark((function e(n){var t;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N();case 2:return t=e.sent,e.abrupt("return",t.find((function(e){return e.bookId===n})));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var E=function(e){var n=Object(r.useState)(!1),t=Object(a.a)(n,2),c=t[0],o=t[1],s=Object(r.useState)("Choose a Songbook!"),l=Object(a.a)(s,2),b=l[0],d=l[1],f=Object(i.g)().bookId;return Object(r.useEffect)((function(){I(f).then((function(e){e&&d(e.name)}))}),[f]),Object(h.jsxs)(u.B,{children:[Object(h.jsx)(u.z,{id:"appName",children:b}),Object(h.jsx)(u.b,{slot:"start",children:function(){if(!e.backButtonOnClick)return null;return Object(h.jsx)(u.a,{onClick:e.backButtonOnClick,children:Object(h.jsx)(u.n,{icon:j.k})})}()}),Object(h.jsxs)(u.b,{slot:"primary",children:[function(){if(!e.toggleSongModeOnClick)return null;return Object(h.jsxs)(u.a,{id:"songViewToggler",onClick:e.toggleSongModeOnClick,children:[Object(h.jsx)(u.n,{icon:j.n}),Object(h.jsx)(u.n,{icon:j.t}),Object(h.jsx)(u.n,{icon:j.j})]})}(),Object(h.jsx)(u.a,{onClick:function(){return o(!0)},children:Object(h.jsx)(u.n,{icon:j.s})})]}),Object(h.jsxs)(u.u,{id:"settingsModal",isOpen:c,onDidDismiss:function(){return o(!1)},children:[Object(h.jsx)(p,{}),Object(h.jsx)(u.a,{id:"returnToHymnalButton",onClick:function(){return o(!1)},children:"Back to Hymnal"})]})]})},T=(t(127),function(){var e=Object(i.f)(),n=Object(r.useState)(k),t=Object(a.a)(n,2),c=t[0],o=t[1];return Object(r.useEffect)((function(){N().then((function(e){o(e)}))}),[]),Object(h.jsxs)(u.v,{children:[Object(h.jsx)(u.m,{children:Object(h.jsx)(E,{})}),Object(h.jsx)(u.i,{children:Object(h.jsx)(u.t,{children:c.map((function(n){return t=n,Object(h.jsx)(u.c,{onClick:function(){e.push(t.bookId)},className:"songbookCardView",id:t.bookId,children:Object(h.jsx)(u.g,{children:t.name})},t.name);var t}))})})]})}),M=function(e){var n=Object(i.g)().bookId,t=Object(r.useState)([]),c=Object(a.a)(t,2),o=c[0],s=c[1],j=Object(r.useState)(e.songs.entries()),l=Object(a.a)(j,1)[0],b=Object(i.f)();return 0===o.length&&d(l,20),o.length>0?Object(h.jsxs)("div",{children:[Object(h.jsx)(u.t,{id:"searchViewSongList",children:o}),Object(h.jsx)(u.o,{onIonInfinite:function(e){var n=e.target;d(l,10)||(n.disabled=!0);s(Array.from(o)),n.complete()},children:Object(h.jsx)(u.p,{loadingSpinner:"bubbles",loadingText:"Loading more songs..."})})]}):Object(h.jsx)(u.r,{children:Object(h.jsx)(u.s,{children:"No results found"})});function d(e,n){for(;n>0;){var t=e.next();if(t.done)return!1;var r=t.value[1];o.push(f(r)),n--}return!0}function f(e){return Object(h.jsxs)(u.c,{onClick:function(){b.push("/".concat(n,"/").concat(e.songNumber))},className:"hymnalListView",children:[Object(h.jsxs)(u.g,{children:[e.songNumber,". ",e.title]}),Object(h.jsx)(u.f,{children:e.author})]},e.songNumber)}},L=t(28);function B(e){return e.replace(/[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g,"")}var F=t(128);function D(e,n){return F.compareTwoStrings(B(e.toString().toLowerCase()),n)}function A(e){return e.split(" ")}function R(e){return B(e).toLowerCase().trim()}function U(e){return!isNaN(+e)}var V=new Map,H=new Map,z=new Map;function P(e){return q.apply(this,arguments)}function q(){return(q=Object(y.a)(x.a.mark((function e(n){var t,r,c,o,s;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(void 0!==(t=V.get(n))){e.next=20;break}return e.next=4,I(n);case 4:if(r=e.sent){e.next=8;break}return console.error("No songbook found for id "+n),e.abrupt("return",[]);case 8:return e.next=10,fetch(r.lyricsUrl);case 10:return c=e.sent,e.next=13,c.json();case 13:return o=e.sent,s=o[r.name],V.set(n,s),console.log("Fetching lyrics for book "+n),e.abrupt("return",s);case 20:return console.debug("Returning stored lyrics for book "+n),e.abrupt("return",t);case 22:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function W(){return(W=Object(y.a)(x.a.mark((function e(n){var t;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P(n);case 2:return t=e.sent,e.abrupt("return",t.length);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function J(){return(J=Object(y.a)(x.a.mark((function e(n,t){var r;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P(t);case 2:if(r=e.sent,!(n<0||n>=r.length)){e.next=7;break}return e.abrupt("return",{title:"",author:"",songNumber:-1,lyrics:JSON.parse("{}")});case 7:return e.abrupt("return",r[n-1]);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function G(){return(G=Object(y.a)(x.a.mark((function e(n,t){var r,c;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P(t);case 2:if(r=e.sent,""!==n){e.next=7;break}return e.abrupt("return",r);case 7:if(!U(n)){e.next=11;break}return e.abrupt("return",r.filter((function(e){return e.songNumber.toString().startsWith(n)})));case 11:return c=new Map,r.forEach((function(e){c.set(e.songNumber,K(e,n))})),console.log(c),e.abrupt("return",r.filter((function(e){return c.get(e.songNumber)>0})).sort((function(e,n){return c.get(n.songNumber)-c.get(e.songNumber)})));case 15:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function K(e,n){var t=0,r=R(n),c=A(r),o=R(e.title),s=A(o),i=R(e.author),a=A(i);if(o.includes(r))t+=1e3;else{var u,j=Object(L.a)(s);try{for(j.s();!(u=j.n()).done;){var l,b=u.value,d=Object(L.a)(c);try{for(d.s();!(l=d.n()).done;){D(b,l.value)>.9&&(t+=100)}}catch(S){d.e(S)}finally{d.f()}}}catch(S){j.e(S)}finally{j.f()}}if(i.includes(r))t+=900;else{var f,h=Object(L.a)(a);try{for(h.s();!(f=h.n()).done;){var O,p=f.value,g=Object(L.a)(c);try{for(g.s();!(O=g.n()).done;){D(p,O.value)>.9&&(t+=90)}}catch(S){g.e(S)}finally{g.f()}}}catch(S){h.e(S)}finally{h.f()}}if(H.has(e.songNumber)||H.set(e.songNumber,Object.values(e.lyrics).map((function(e){return R(String(e))})).join(" ")),z.has(e.songNumber)||z.set(e.songNumber,A(H.get(e.songNumber))),H.get(e.songNumber).includes(r))t+=500;else{var x,y=Object(L.a)(z.get(e.songNumber));try{for(y.s();!(x=y.n()).done;){var m,v=x.value,k=Object(L.a)(c);try{for(k.s();!(m=k.n()).done;){D(v,m.value)>.9&&(t+=1)}}catch(S){k.e(S)}finally{k.f()}}}catch(S){y.e(S)}finally{y.f()}}return t}var Y=function(){var e=Object(r.useState)(""),n=Object(a.a)(e,2),t=n[0],c=n[1],o=Object(r.useState)([]),s=Object(a.a)(o,2),j=s[0],l=s[1],b=Object(i.g)().bookId;Object(r.useEffect)((function(){var e=setTimeout((function(){(function(e,n){return G.apply(this,arguments)})(t,b).then((function(e){l(e)})).catch((function(e){return console.error(e)}))}),200);return function(){return clearTimeout(e)}}),[t]);var d=Object(i.f)();return Object(h.jsxs)(u.v,{children:[Object(h.jsx)(u.m,{children:Object(h.jsx)(E,{backButtonOnClick:function(){return d.push("/")}})}),Object(h.jsx)(u.r,{children:Object(h.jsx)(u.q,{id:"searchBar",type:"search",value:t,placeholder:"Search for a song",onIonChange:function(e){return c(e.detail.value)}})}),Object(h.jsx)(u.i,{children:Object(h.jsx)(M,{songs:j},t+j.length)})]})};function Q(){return Object(u.D)("desktop")}var X=t(48),$=function(e,n,t){X.a.event({category:e,action:n,label:t})};function Z(e,n){try{$("INTERACTION","Song viewed(".concat(d[n],")"),e.toString()),console.debug("Song number: ".concat(String(e)," viewed in ").concat(d[n]," mode"))}catch(t){console.error(t)}}var ee=function(e){var n=Object(r.useState)(m),t=Object(a.a)(n,2),c=t[0],o=t[1],s=Object(i.g)(),j=s.bookId,l=s.songId;return Object(r.useEffect)((function(){Z(e.songNumber,d.Lyrics),function(e,n){return J.apply(this,arguments)}(e.songNumber,j).then((function(e){o(e)}))}),[l]),Object(h.jsx)(u.l,{children:Object(h.jsx)(u.w,{class:"ion-justify-content-center",children:Object(h.jsx)(u.h,{size:"12","size-lg":"8","size-xl":"6",children:Object(h.jsxs)(u.c,{id:"lyricViewCard",className:"ion-padding",children:[Object(h.jsxs)(u.e,{className:"ion-text-center",children:[Object(h.jsx)(u.g,{children:null===c||void 0===c?void 0:c.title},"title"),Object(h.jsxs)(u.f,{children:["By ",null===c||void 0===c?void 0:c.author]},"author")]}),Object(h.jsx)(u.d,{children:c?function(e){for(var n=[],t=0,c=e.lyrics,o=Object.keys(c),s=Object.values(c),i=0;i<o.length;++i){var a=o[i],j=s[i];n.push(Object(h.jsx)(r.Fragment,{children:Object(h.jsx)("div",{className:"ion-margin-vertical"})},t++)),n.push(Object(h.jsx)("h5",{className:"ion-margin-top",children:(l=a,l.toLowerCase().replace("v","Verse ").replace("c","Chorus ").replace("b","Bridge ").replace("p","Pre-Chorus "))},t++)),j.forEach((function(e){n.push(Object(h.jsx)(u.x,{className:"lyricVerse",color:"dark",children:Object(h.jsx)("p",{children:e})},t++))}))}var l;return n}(c):c},"lyrics")]})})})})},ne=[156,216,278,478],te=function(e){var n,t=Q()?window.innerWidth/2:window.innerWidth,c=Object(r.useState)(!1),o=Object(a.a)(c,2),s=o[0],j=o[1],l=Object(r.useState)(t),b=Object(a.a)(l,2),f=b[0],O=b[1],p=Object(r.useState)(!1),g=Object(a.a)(p,2),x=g[0],y=g[1],m=Object(r.useState)(),v=Object(a.a)(m,2),k=v[0],S=v[1],w=Object(i.g)().bookId,N=ne.includes(e.songNumber)&&"shl"===w,C=N&&s?"-B":"",_=(null===k||void 0===k?void 0:k.musicUrl)+((n=e.songNumber)<10?"00".concat(n):n<100?"0".concat(n):"".concat(n))+C+".png";return Object(r.useEffect)((function(){Z(e.songNumber,d.Music)}),[e.songNumber]),Object(r.useEffect)((function(){I(w).then((function(e){S(e)}))}),[w]),Object(h.jsxs)("div",{children:[N&&Object(h.jsx)("div",{id:"songToggler",children:Object(h.jsx)(u.A,{checked:s,onIonChange:function(){return j(!s)}})}),Object(h.jsx)("img",{style:{width:f},id:"musicView",onDoubleClick:function(){O(x?t:2*t),y(!x)},src:_,alt:"No Song Found"})]})},re=function(){var e,n=Object(i.g)(),t=n.bookId,c=n.songId,o=Object(i.f)(),s=Object(r.useState)(d.Lyrics),l=Object(a.a)(s,2),b=l[0],f=l[1],O=Object(r.useState)(0),p=Object(a.a)(O,2),g=p[0],x=p[1];return Object(r.useEffect)((function(){(function(e){return W.apply(this,arguments)})(t).then((function(e){return x(e)}))}),[t]),Object(h.jsxs)(u.v,{children:[Object(h.jsx)(u.m,{children:Object(h.jsx)(E,{backButtonOnClick:function(){o.push("/".concat(t))},toggleSongModeOnClick:function(){b===d.Music?f(d.Lyrics):f(d.Music);try{$("INTERACTION","Songmode is toggled","SongMode_Toggle")}catch(e){console.error(e)}}})}),Object(h.jsxs)(u.i,{children:[Q()&&function(e){if(e>1)return Object(h.jsx)(u.j,{id:"prevButton",vertical:"center",horizontal:"start",slot:"fixed",children:Object(h.jsx)(u.k,{color:"medium",onClick:function(){o.push("/".concat(t,"/").concat(e-1))},children:Object(h.jsx)(u.n,{class:"pageTurnButton",icon:j.a})})})}(+c),(e=+c,b===d.Music?Object(h.jsx)(te,{songNumber:e}):Object(h.jsx)(ee,{songNumber:e})),Q()&&function(e){if(e<g)return Object(h.jsx)(u.j,{id:"nextButton",vertical:"center",horizontal:"end",slot:"fixed",children:Object(h.jsx)(u.k,{color:"medium",onClick:function(){o.push("/".concat(t,"/").concat(e+1))},children:Object(h.jsx)(u.n,{class:"pageTurnButton",icon:j.c})})})}(+c)]})]})};try{X.a.initialize("UA-183902236-1"),X.a.pageview(window.location.pathname+window.location.search),console.debug("Page viewed")}catch(oe){console.error(oe)}var ce=function(){return console.debug("Current platforms: "+Object(u.C)()),Object(h.jsx)(s.a,{children:Object(h.jsxs)(i.c,{children:[Object(h.jsx)(i.a,{path:"/",component:T,exact:!0}),Object(h.jsx)(i.a,{path:"/:bookId",component:Y,exact:!0}),Object(h.jsx)(i.a,{path:"/:bookId/:songId",component:re,exact:!0})]})})};o.a.render(Object(h.jsx)(ce,{}),document.getElementById("root"))},33:function(e,n,t){},88:function(e,n,t){},90:function(e,n,t){var r={"./ion-action-sheet.entry.js":[131,5],"./ion-alert.entry.js":[132,6],"./ion-app_8.entry.js":[133,7],"./ion-avatar_3.entry.js":[134,17],"./ion-back-button.entry.js":[135,18],"./ion-backdrop.entry.js":[136,43],"./ion-button_2.entry.js":[137,19],"./ion-card_5.entry.js":[138,20],"./ion-checkbox.entry.js":[139,21],"./ion-chip.entry.js":[140,22],"./ion-col_3.entry.js":[141,44],"./ion-datetime_3.entry.js":[142,10],"./ion-fab_3.entry.js":[143,23],"./ion-img.entry.js":[144,45],"./ion-infinite-scroll_2.entry.js":[145,46],"./ion-input.entry.js":[146,24],"./ion-item-option_3.entry.js":[147,25],"./ion-item_8.entry.js":[148,26],"./ion-loading.entry.js":[149,27],"./ion-menu_3.entry.js":[150,28],"./ion-modal.entry.js":[151,8],"./ion-nav_2.entry.js":[152,14],"./ion-popover.entry.js":[153,9],"./ion-progress-bar.entry.js":[154,29],"./ion-radio_2.entry.js":[155,30],"./ion-range.entry.js":[156,31],"./ion-refresher_2.entry.js":[157,11],"./ion-reorder_2.entry.js":[158,16],"./ion-ripple-effect.entry.js":[159,47],"./ion-route_4.entry.js":[160,32],"./ion-searchbar.entry.js":[161,33],"./ion-segment_2.entry.js":[162,34],"./ion-select_3.entry.js":[163,35],"./ion-slide_2.entry.js":[164,48],"./ion-spinner.entry.js":[165,13],"./ion-split-pane.entry.js":[166,49],"./ion-tab-bar_2.entry.js":[167,36],"./ion-tab_2.entry.js":[168,15],"./ion-text.entry.js":[169,37],"./ion-textarea.entry.js":[170,38],"./ion-toast.entry.js":[171,39],"./ion-toggle.entry.js":[172,12],"./ion-virtual-scroll.entry.js":[173,50]};function c(e){if(!t.o(r,e))return Promise.resolve().then((function(){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}));var n=r[e],c=n[0];return t.e(n[1]).then((function(){return t(c)}))}c.keys=function(){return Object.keys(r)},c.id=90,e.exports=c},92:function(e,n,t){var r={"./ion-icon.entry.js":[174,57]};function c(e){if(!t.o(r,e))return Promise.resolve().then((function(){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}));var n=r[e],c=n[0];return t.e(n[1]).then((function(){return t(c)}))}c.keys=function(){return Object.keys(r)},c.id=92,e.exports=c},93:function(e,n){}},[[129,3,4]]]);
//# sourceMappingURL=main.a4457eb1.chunk.js.map