/*! For license information please see 763d3647ff948d6655ac36baaca217f30bc3f8cf-27a38a80e6a62c129a5f.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"1SPJ":function(I,e,g){},"4q/3":function(I,e,g){},"62xV":function(I,e,g){"use strict";var t=g("q1tI"),i=g.n(t),a=g("Wbzz"),c=g("ma3e"),A=g("Tgqd"),C=(g("ATNa"),g("8VT2")),M=g("t6JI"),n=g("GuQl"),N=g.n(n),l=g("QXQW"),j=g.n(l),r=g("TSYQ"),u=g.n(r);e.a=function(I){var e=Object(t.useState)(!0),g=e[0],n=e[1],l=Object(t.useState)(!1),r=l[0],s=l[1],o=Object(t.useState)(!1),m=o[0],v=o[1],L=function(){n(!g),s(!r),v(!m)},z=Object(t.useState)({activeLink:null,links:[{id:1,title:"Home"},{id:2,title:"How We Work"},{id:3,title:"What We Do"},{id:4,title:"About Us"},{id:5,title:"Contact Blackbird"},{id:6,title:"Careers"},{id:7,title:"Blog"}]}),D=z[0],b=(z[1],Object(t.useState)({activeLink:null,links:[{id:0,array:{activeLink:null,links:[{id:1,title:"Home",page:"/"}]}},{id:1,array:{activeLink:null,links:[{id:1,title:"Engagement Models",page:"/how-we-work/working-together/"},{id:2,title:"Your IP Protection",page:"/how-we-work/intellectual-property/"}]}},{id:2,array:{activeLink:null,links:[{id:1,title:"All",page:"/what-we-do/"},{id:2,title:"Web development",page:"/what-we-do/web-development/"},{id:3,title:"Cloud services",page:"/what-we-do/cloud-services/"},{id:4,title:"Team extension",page:"/what-we-do/team-extension/"},{id:5,title:"AR & VR",page:"/what-we-do/ar-&-vr/"},{id:6,title:"Retail & E-commerce",page:"/what-we-do/retail-and-e-commerce/"},{id:7,title:"Mobile development",page:"/what-we-do/mobile-development/"}]}},{id:3,array:{activeLink:null,links:[{id:1,title:"Retail & E-commerce"},{id:2,title:"Construction"},{id:3,title:"Finance"},{id:4,title:"Media"}]}},{id:4,array:{activeLink:null,links:[{id:1,title:"SaaS product"},{id:2,title:"Chatbots"},{id:3,title:"AR & VR"},{id:4,title:"Blockchain"},{id:5,title:"Digital enterprise "},{id:6,title:"Drone"},{id:7,title:"R&D"}]}},{id:5,array:{activeLink:null,links:[{id:1,title:"On-demand team extension"},{id:2,title:"Fully managed IT services"}]}},{id:6,array:{activeLink:null,links:[{id:1,title:"Latest"},{id:2,title:"Editorial"},{id:3,title:"Whitepapers"},{id:4,title:"Videos"},{id:5,title:"Resources "},{id:6,title:"Press center"}]}}]})),y=b[0];b[1];return i.a.createElement("header",{"data-testid":"header",className:"header"},i.a.createElement("div",{className:"header__wrapper"},i.a.createElement(a.a,{to:"/",className:"header__logo--link"},i.a.createElement("img",{className:"header__logo",src:N.a,alt:"BlackBird"})),i.a.createElement("div",{className:"header__nav"},i.a.createElement("div",{className:"header__nav-wrapper header__nav-wrapper--end"},i.a.createElement(a.a,{className:"link",activeClassName:"active__border active__border--style"},i.a.createElement("span",{className:u()("header__nav-text",{"active__border--style":I.path})},I.path)),I.path&&i.a.createElement(A.a,{className:"chevron__icon"}),i.a.createElement(a.a,{className:"link",to:"/how-we-work/",activeClassName:"active__border active__border--style"},i.a.createElement("span",{className:u()("header__nav-text",{"header__nav-text--secondary":I.path})},"How We Work"))),i.a.createElement("div",{className:"header__nav-wrapper"},i.a.createElement("button",{onClick:function(){return L()},className:"header__nav-menu"},g&&i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"header__nav-bars"}),i.a.createElement("div",{className:"header__nav-bars"}),i.a.createElement("div",{className:"header__nav-bars"})),r&&i.a.createElement(c.l,{className:"header__nav-times"})),r&&i.a.createElement(M.a,{navLinks:D,navLinksArray:y,language:{activeLink:null,links:[{id:1,title:"EN"},{id:2,title:"UA"}]},border:"border"}),i.a.createElement(a.a,{className:"link",partiallyActive:!0,activeClassName:"active__border active__border--style",to:"/what-we-do/"},i.a.createElement("span",{className:"header__nav-text"},"What We Do")))),i.a.createElement("div",{className:"header__options"},i.a.createElement("div",{className:"header__button"},i.a.createElement(a.a,{className:"link",to:"/contact-us"},i.a.createElement(C.a,{icon:j.a,type:"secondary",className:"button",desc:"Contact us",mobile:"mobile"},"Contact us"))),i.a.createElement("select",{className:"header__options-list",id:"languages"},i.a.createElement("option",{defaultValue:"en"},"EN"),i.a.createElement("option",{value:"ukr"},"UKR"),i.a.createElement("option",{value:"rus"},"RUS")))))}},"8VT2":function(I,e,g){"use strict";var t=g("EAit");g.d(e,"a",(function(){return t.a}))},ATNa:function(I,e,g){},EAit:function(I,e,g){"use strict";var t=g("q1tI"),i=g.n(t),a=(g("EOqN"),g("oADE"),function(I){return i.a.createElement("img",{"data-testid":"button__icon",src:I.icon,className:"button__icon button__icon--"+I.type,alt:I.desc})});e.a=function(I){return i.a.createElement("button",{"data-testid":"button",className:"button button--"+I.type+" button--"+I.mobile+" button--"+I.subtype},I.children,i.a.createElement(a,{type:I.iconType,icon:I.icon,desc:I.desc}))}},EOqN:function(I,e,g){},GuQl:function(I,e){I.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMTYiIGhlaWdodD0iNjMiIHZpZXdCb3g9IjAgMCAxMTYgNTgiPgogICAgPGRlZnM+CiAgICAgICAgPGxpbmVhckdyYWRpZW50IGlkPSJuYnMxY3VobWdhIiB4MT0iODcuMDY0JSIgeDI9Ii0xMjcuNzk2JSIgeTE9IjUzLjEyMyUiIHkyPSI2LjE5JSI+CiAgICAgICAgICAgIDxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiMzODM5MzgiLz4KICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PSIxNCUiIHN0b3AtY29sb3I9IiM0OTQ5NDgiLz4KICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PSI0MiUiIHN0b3AtY29sb3I9IiM2OTY4NjciLz4KICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PSI2NiUiIHN0b3AtY29sb3I9IiM4MjgxODAiLz4KICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PSI4NiUiIHN0b3AtY29sb3I9IiM5MjkxOTEiLz4KICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjOTg5ODk4Ii8+CiAgICAgICAgPC9saW5lYXJHcmFkaWVudD4KICAgICAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImZnMXZlY3VhcGIiIHgxPSIxMTEuMTYlIiB4Mj0iMzQuMzM0JSIgeTE9IjU4LjEzNiUiIHkyPSI0MC40NyUiPgogICAgICAgICAgICA8c3RvcCBvZmZzZXQ9IjAlIiBzdG9wLWNvbG9yPSIjOTg5ODk4Ii8+CiAgICAgICAgICAgIDxzdG9wIG9mZnNldD0iMSUiIHN0b3AtY29sb3I9IiM5NDkzOTMiLz4KICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PSI5JSIgc3RvcC1jb2xvcj0iIzc5Nzg3NyIvPgogICAgICAgICAgICA8c3RvcCBvZmZzZXQ9IjE3JSIgc3RvcC1jb2xvcj0iIzYzNjI2MSIvPgogICAgICAgICAgICA8c3RvcCBvZmZzZXQ9IjI2JSIgc3RvcC1jb2xvcj0iIzUzNTI1MSIvPgogICAgICAgICAgICA8c3RvcCBvZmZzZXQ9IjM3JSIgc3RvcC1jb2xvcj0iIzQ3NDY0NiIvPgogICAgICAgICAgICA8c3RvcCBvZmZzZXQ9IjQ5JSIgc3RvcC1jb2xvcj0iIzNFM0UzRSIvPgogICAgICAgICAgICA8c3RvcCBvZmZzZXQ9IjY2JSIgc3RvcC1jb2xvcj0iIzNBM0EzQSIvPgogICAgICAgICAgICA8c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiMzODM5MzgiLz4KICAgICAgICA8L2xpbmVhckdyYWRpZW50PgogICAgICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iYjRsNm5ua3JrYyIgeDE9IjUuMTU3JSIgeDI9IjY5LjgxNiUiIHkxPSIyOS42NzYlIiB5Mj0iNjAuNTI1JSI+CiAgICAgICAgICAgIDxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiM5ODk4OTgiLz4KICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PSIxNCUiIHN0b3AtY29sb3I9IiM5MjkxOTEiLz4KICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PSIzNCUiIHN0b3AtY29sb3I9IiM4MjgxODAiLz4KICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PSI1OCUiIHN0b3AtY29sb3I9IiM2OTY4NjciLz4KICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PSI4NiUiIHN0b3AtY29sb3I9IiM0OTQ5NDgiLz4KICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjMzgzOTM4Ii8+CiAgICAgICAgPC9saW5lYXJHcmFkaWVudD4KICAgICAgICA8bGluZWFyR3JhZGllbnQgaWQ9Im85bXY0bWtvcmQiIHgxPSIyOS43MzMlIiB4Mj0iMTA5LjMyMyUiIHkxPSI1MC44OTYlIiB5Mj0iNDkuOTE5JSI+CiAgICAgICAgICAgIDxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiMyMzFGMjAiLz4KICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PSIyOSUiIHN0b3AtY29sb3I9IiMyNDIxMjEiLz4KICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PSI0NCUiIHN0b3AtY29sb3I9IiMyOTI1MjYiLz4KICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PSI1NiUiIHN0b3AtY29sb3I9IiMzMTJEMkUiLz4KICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PSI2NiUiIHN0b3AtY29sb3I9IiMzQzM4MzgiLz4KICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PSI3NSUiIHN0b3AtY29sb3I9IiM0QTQ2NDciLz4KICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PSI4MyUiIHN0b3AtY29sb3I9IiM1QzU5NTkiLz4KICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PSI5MSUiIHN0b3AtY29sb3I9IiM3NDcyNzIiLz4KICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PSI5OCUiIHN0b3AtY29sb3I9IiM5MTkwOTAiLz4KICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjOTg5ODk4Ii8+CiAgICAgICAgPC9saW5lYXJHcmFkaWVudD4KICAgICAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImdheHF1dDFwaGUiIHgxPSIwJSIgeDI9IjEwMCUiIHkxPSI1MCUiIHkyPSI1MCUiPgogICAgICAgICAgICA8c3RvcCBvZmZzZXQ9IjAlIiBzdG9wLWNvbG9yPSIjOTg5ODk4Ii8+CiAgICAgICAgICAgIDxzdG9wIG9mZnNldD0iMSUiIHN0b3AtY29sb3I9IiM5MDhGOEYiLz4KICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PSI3JSIgc3RvcC1jb2xvcj0iIzcxNzA3MCIvPgogICAgICAgICAgICA8c3RvcCBvZmZzZXQ9IjEzJSIgc3RvcC1jb2xvcj0iIzU2NTY1NiIvPgogICAgICAgICAgICA8c3RvcCBvZmZzZXQ9IjIwJSIgc3RvcC1jb2xvcj0iIzQyNDI0MSIvPgogICAgICAgICAgICA8c3RvcCBvZmZzZXQ9IjI4JSIgc3RvcC1jb2xvcj0iIzMxMzEzMSIvPgogICAgICAgICAgICA8c3RvcCBvZmZzZXQ9IjM2JSIgc3RvcC1jb2xvcj0iIzIzMjQyMyIvPgogICAgICAgICAgICA8c3RvcCBvZmZzZXQ9IjQ1JSIgc3RvcC1jb2xvcj0iIzE2MTcxNyIvPgogICAgICAgICAgICA8c3RvcCBvZmZzZXQ9IjU2JSIgc3RvcC1jb2xvcj0iIzBCMEMwQyIvPgogICAgICAgICAgICA8c3RvcCBvZmZzZXQ9IjcwJSIgc3RvcC1jb2xvcj0iIzAzMDQwMyIvPgogICAgICAgICAgICA8c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiMwMTAxMDEiLz4KICAgICAgICA8L2xpbmVhckdyYWRpZW50PgogICAgICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iazgyN2gzcnllZiIgeDE9IjMyLjg0NCUiIHgyPSI3MS45MjQlIiB5MT0iNTAuMDEyJSIgeTI9IjUwLjAxMSUiPgogICAgICAgICAgICA8c3RvcCBvZmZzZXQ9IjAlIiBzdG9wLWNvbG9yPSIjODE4Mjg1Ii8+CiAgICAgICAgICAgIDxzdG9wIG9mZnNldD0iMSUiIHN0b3AtY29sb3I9IiM3RTgwODIiLz4KICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PSI5JSIgc3RvcC1jb2xvcj0iIzY1NjQ2NiIvPgogICAgICAgICAgICA8c3RvcCBvZmZzZXQ9IjE3JSIgc3RvcC1jb2xvcj0iIzUwNEU0RiIvPgogICAgICAgICAgICA8c3RvcCBvZmZzZXQ9IjI2JSIgc3RvcC1jb2xvcj0iIzNGM0QzRSIvPgogICAgICAgICAgICA8c3RvcCBvZmZzZXQ9IjM1JSIgc3RvcC1jb2xvcj0iIzMzMzAzMSIvPgogICAgICAgICAgICA8c3RvcCBvZmZzZXQ9IjQ1JSIgc3RvcC1jb2xvcj0iIzJBMjcyOCIvPgogICAgICAgICAgICA8c3RvcCBvZmZzZXQ9IjU1JSIgc3RvcC1jb2xvcj0iIzI1MjEyMiIvPgogICAgICAgICAgICA8c3RvcCBvZmZzZXQ9IjY4JSIgc3RvcC1jb2xvcj0iIzIzMUYyMCIvPgogICAgICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICAgICAgPGxpbmVhckdyYWRpZW50IGlkPSJkMHRlc3g4dnJnIiB4MT0iMTAwLjk4OCUiIHgyPSItNS4yNiUiIHkxPSI3MS43ODIlIiB5Mj0iMzguNTE2JSI+CiAgICAgICAgICAgIDxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiNEMkQzRDQiLz4KICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PSIxJSIgc3RvcC1jb2xvcj0iI0M2QzdDOCIvPgogICAgICAgICAgICA8c3RvcCBvZmZzZXQ9IjEyJSIgc3RvcC1jb2xvcj0iIzhGOEU4RSIvPgogICAgICAgICAgICA8c3RvcCBvZmZzZXQ9IjIzJSIgc3RvcC1jb2xvcj0iIzY1NjQ2NCIvPgogICAgICAgICAgICA8c3RvcCBvZmZzZXQ9IjM0JSIgc3RvcC1jb2xvcj0iIzQ3NDY0NiIvPgogICAgICAgICAgICA8c3RvcCBvZmZzZXQ9IjQ1JSIgc3RvcC1jb2xvcj0iIzMxMzEzMCIvPgogICAgICAgICAgICA8c3RvcCBvZmZzZXQ9IjU3JSIgc3RvcC1jb2xvcj0iIzFGMUYxRiIvPgogICAgICAgICAgICA8c3RvcCBvZmZzZXQ9IjcwJSIgc3RvcC1jb2xvcj0iIzExMSIvPgogICAgICAgICAgICA8c3RvcCBvZmZzZXQ9IjgzJSIgc3RvcC1jb2xvcj0iIzA1MDUwNSIvPgogICAgICAgICAgICA8c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiMwMTAxMDEiLz4KICAgICAgICA8L2xpbmVhckdyYWRpZW50PgogICAgPC9kZWZzPgogICAgPGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8Zz4KICAgICAgICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTMwIC00KSB0cmFuc2xhdGUoMzAgNCkiPgogICAgICAgICAgICAgICAgPHBhdGggZD0iTTAgMEgxMTZWNThIMHoiLz4KICAgICAgICAgICAgICAgIDxjaXJjbGUgY3g9IjI5LjU4MiIgY3k9IjMxLjc2OCIgcj0iMjUuNTgyIiBmaWxsPSIjMzk5Q0NCIiBvcGFjaXR5PSIuMzk2Ii8+CiAgICAgICAgICAgICAgICA8Y2lyY2xlIGN4PSIyNS41ODIiIGN5PSIyNy43NjgiIHI9IjI1LjU4MiIgZmlsbD0iIzM5OUNDQiIgZmlsbC1ydWxlPSJub256ZXJvIi8+CiAgICAgICAgICAgICAgICA8cGF0aCBmaWxsPSIjMDUwNTA1IiBmaWxsLXJ1bGU9Im5vbnplcm8iIGQ9Ik0yNi44ODQgMzkuNzhMMjYuODg0IDM3LjE1NSAzNC4yNTggMzQuMjE4IDM0LjI1OCAzNi44NDIgMjkuNDA3IDM4LjQ1NCAzNC4yNTggNDAuMDcyIDM0LjI1OCA0Mi43MTR6TTM4Ljk5NSA0Mi42OTR2Ljk3OWgtMi44MTlWMzIuODQ0aDIuODE5djMuODc2Yy41NTctLjc5IDEuNDY3LTEuMjU2IDIuNDM0LTEuMjQ4IDEuOTE0IDAgMy41NiAxLjU4OCAzLjU2IDQuMTg2IDAgMi41OTctMS42NDYgNC4yMDItMy41NDYgNC4yMDItLjk1NS4wMi0xLjg2My0uNDEyLTIuNDQ4LTEuMTY2em0zLjIyLTMuMDZjMC0xLjA1NC0uNzI4LTEuODA5LTEuNjQ2LTEuODA5LS45MTggMC0xLjYzMi43NTgtMS42MzIgMS44NCAwIDEuMDguNzI3IDEuODI1IDEuNjMyIDEuODI1LjkwNCAwIDEuNjQ1LS43MzggMS42NDUtMS44NTN2LS4wMDN6TTQ2LjI2NyAzMi44NDRMNDkuMDg2IDMyLjg0NCA0OS4wODYgNDMuNjc2IDQ2LjI2NyA0My42NzZ6TTUwLjI1OSA0MS4zNDRjMC0xLjY2MyAxLjI2MS0yLjUyMyAzLjE0NS0yLjUyMy42NTUuMDAxIDEuMzA2LjEwNyAxLjkyOC4zMTN2LS4xMzNjMC0uODMtLjUyLTEuMzA1LTEuNjAyLTEuMzA1LS43NTktLjAwMi0xLjUxLjE1LTIuMjEuNDQ1bC0uNTc4LTEuOTg5YzEuMDMtLjQzIDIuMTM2LS42NDEgMy4yNS0uNjIyIDEuNDM5IDAgMi40MTguMzQgMy4wNi45OC42NDMuNjM4Ljg2IDEuNDI0Ljg2IDIuNTUzdjQuNjEzaC0yLjc4N3YtLjgzNmMtLjU5Ni42NzQtMS40NiAxLjA0OC0yLjM2IDEuMDItMS41MzcgMC0yLjcwNi0uODg0LTIuNzA2LTIuNTE2em01LjEtLjU3OHYtLjM3Yy0uMzUtLjEzOS0uNzIyLS4yMS0xLjA5OC0uMjA4LS44MTYgMC0xLjI5Mi40MDEtMS4yOTIgMS4wMiAwIC41NDcuNDE0Ljg3NC45OTIuODc0LjM2Ni4wMzIuNzI4LS4wOTMuOTk1LS4zNDUuMjY4LS4yNS40MTUtLjYwNC40MDYtLjk3MWgtLjAwM3pNNTkuMjIxIDM5LjY2OGMtLjAwNC0xLjEzMi40NTItMi4yMTggMS4yNjQtMy4wMDcuODExLS43OSAxLjkwOS0xLjIxNSAzLjA0LTEuMTc5IDEuNjQ2IDAgMi43NDQuNzExIDMuNDI4IDEuNzk2bC0xLjg4NCAxLjM2Yy0uMzE2LS40OTYtLjg2Ny0uNzkzLTEuNDU1LS43ODYtMS4wMiAwLTEuNjQ2LjgwMy0xLjY0NiAxLjgwOSAwIDEuMDA2LjY1MyAxLjgxOSAxLjYxMiAxLjgxOS42OCAwIDEuMDY4LS4zNCAxLjUxMy0uODQ3bDEuOTE0IDEuMzhjLS43NDEgMS4wOTktMS44MDkgMS44NC0zLjU3NyAxLjg0LTEuMTE3LjAxOC0yLjE5NC0uNDE3LTIuOTg3LTEuMjA1LS43OTItLjc4OC0xLjIzMy0xLjg2My0xLjIyMi0yLjk4ek02OCAzMi44NDRMNzAuODE5IDMyLjg0NCA3MC44MTkgMzguMzM1IDczLjAwMSAzNS42NDkgNzYuMTkxIDM1LjY0OSA3My4zOTkgMzguODY5IDc2LjI2MiA0My42NzYgNzMuMTYxIDQzLjY3NiA3MS41NDMgNDAuOTU2IDcwLjgxNSA0MS44MDMgNzAuODE1IDQzLjY4NyA2OCA0My42ODd6TTc5Ljc1NyA0Mi42OTR2Ljk3OUg3Ni45NFYzMi44NDRoMi44MTh2My44NzZjLjU1OC0uNzkgMS40NjgtMS4yNTYgMi40MzUtMS4yNDggMS45MTQgMCAzLjU2IDEuNTg4IDMuNTYgNC4xODYgMCAyLjU5Ny0xLjY0NiA0LjIwMi0zLjU0NyA0LjIwMi0uOTU0LjAyLTEuODYyLS40MTItMi40NDgtMS4xNjZ6bTMuMjItMy4wNmMwLTEuMDU0LS43MjgtMS44MDktMS42NDYtMS44MDktLjkxOCAwLTEuNjMyLjc1OC0xLjYzMiAxLjg0IDAgMS4wOC43MjggMS44MjUgMS42MzIgMS44MjUuOTA1IDAgMS42NDYtLjczOCAxLjY0Ni0xLjg1M3YtLjAwM3pNODYuOTcyIDMyLjg0NGgyLjkzOHYyLjA3N2gtMi45Mzh2LTIuMDc3em0uMDU4IDIuODAyaDIuODE4djguMDI3SDg3LjA0bC0uMDEtOC4wMjd6TTkxLjQyMyAzNS42NDZoMi44MTh2MS42MThjLjQ2LTEuMDk4IDEuMi0xLjgwOSAyLjUzNy0xLjc1MXYyLjk2OGgtLjIzOGMtMS40NyAwLTIuMjk5Ljg0Ny0yLjI5OSAyLjd2Mi40OTJoLTIuODE4di04LjAyN3pNOTcuMzI4IDM5LjY2OGMwLTIuNjExIDEuNjMyLTQuMiAzLjUzMy00LjIuOTU2LS4wMiAxLjg2Ny40MDggMi40NjIgMS4xNTd2LTMuNzgxaDIuODE4djEwLjgzMmgtMi44MThWNDIuNjFjLS41NjQuNzktMS40NzggMS4yNTUtMi40NDggMS4yNDgtMS45MDEuMDAzLTMuNTQ3LTEuNTkyLTMuNTQ3LTQuMTl6bTYuMDM5LS4wM2MwLTEuMDU1LS43MjgtMS44MS0xLjYzMi0xLjgxLS45MDUgMC0xLjY0Ni43NDItMS42NDYgMS44NHMuNzQxIDEuODI2IDEuNjQ2IDEuODI2Yy45MDQgMCAxLjYyNS0uNzU5IDEuNjI1LTEuODU3aC4wMDd6TTEwOC4wNTkgNDAuMDgzTDExMi45MTEgMzguNDY0IDEwOC4wNTkgMzYuODQ2IDEwOC4wNTkgMzQuMjA0IDExNS40MzMgMzcuMTQyIDExNS40MzMgMzkuNzggMTA4LjA1OSA0Mi43MTh6Ii8+CiAgICAgICAgICAgICAgICA8cGF0aCBmaWxsPSJ1cmwoI25iczFjdWhtZ2EpIiBmaWxsLXJ1bGU9Im5vbnplcm8iIGQ9Ik0xNy4xNjMgNC42MDRMMTUuODYxIDIwLjAzNiAxLjk4NiAyLjU1M3oiLz4KICAgICAgICAgICAgICAgIDxwYXRoIGZpbGw9InVybCgjZmcxdmVjdWFwYikiIGZpbGwtcnVsZT0ibm9uemVybyIgZD0iTTQzLjEzNiAxNy43NTVMNDYuNTE5IDIzLjY4MSAzNy4xMTEgMjAuODExeiIvPgogICAgICAgICAgICAgICAgPHBhdGggZmlsbD0idXJsKCNiNGw2bm5rcmtjKSIgZmlsbC1ydWxlPSJub256ZXJvIiBkPSJNMjAuMTAxIDQuOTQ3TDE1LjkxOSAyMS42MSAzLjg1MiAweiIvPgogICAgICAgICAgICAgICAgPHBhdGggZmlsbD0idXJsKCNvOW12NG1rb3JkKSIgZmlsbC1ydWxlPSJub256ZXJvIiBkPSJNMjIuMzM4IDI0LjI5TDM5LjA0NiAxNi4zMyA0My4xMzYgMTcuNzU1IDM4LjY4OSAyOS41Mzl6Ii8+CiAgICAgICAgICAgICAgICA8cGF0aCBmaWxsPSJ1cmwoI2dheHF1dDFwaGUpIiBmaWxsLXJ1bGU9Im5vbnplcm8iIGQ9Ik0xNS4zMDMgMjEuNDRMMjAuMTAxIDQuOTQ3IDMxLjM1NSAyNi45OTN6Ii8+CiAgICAgICAgICAgICAgICA8cGF0aCBmaWxsPSJ1cmwoI2s4MjdoM3J5ZWYpIiBmaWxsLXJ1bGU9Im5vbnplcm8iIGQ9Ik0yNC40OTQgMzguOTcxTDExLjYwMSA0Ni40NjEgMTcuNzM0IDI1Ljg3MXoiLz4KICAgICAgICAgICAgICAgIDxwYXRoIGZpbGw9InVybCgjZDB0ZXN4OHZyZykiIGZpbGwtcnVsZT0ibm9uemVybyIgZD0iTTIzLjI3IDM2LjY1NUwxNS4zMDMgMjEuNDQgMzguNjg5IDI5LjUzOXoiLz4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+Cg=="},JeDc:function(I,e,g){},Lnxd:function(I,e,g){"use strict";g.d(e,"a",(function(){return M}));var t=g("q1tI"),i=g.n(t),a={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},c=i.a.createContext&&i.a.createContext(a),A=function(){return(A=Object.assign||function(I){for(var e,g=1,t=arguments.length;g<t;g++)for(var i in e=arguments[g])Object.prototype.hasOwnProperty.call(e,i)&&(I[i]=e[i]);return I}).apply(this,arguments)},C=function(I,e){var g={};for(var t in I)Object.prototype.hasOwnProperty.call(I,t)&&e.indexOf(t)<0&&(g[t]=I[t]);if(null!=I&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(t=Object.getOwnPropertySymbols(I);i<t.length;i++)e.indexOf(t[i])<0&&Object.prototype.propertyIsEnumerable.call(I,t[i])&&(g[t[i]]=I[t[i]])}return g};function M(I){return function(e){return i.a.createElement(n,A({attr:A({},I.attr)},e),function I(e){return e&&e.map((function(e,g){return i.a.createElement(e.tag,A({key:g},e.attr),I(e.child))}))}(I.child))}}function n(I){var e=function(e){var g,t=I.attr,a=I.size,c=I.title,M=C(I,["attr","size","title"]),n=a||e.size||"1em";return e.className&&(g=e.className),I.className&&(g=(g?g+" ":"")+I.className),i.a.createElement("svg",A({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},e.attr,t,M,{className:g,style:A(A({color:I.color||e.color},e.style),I.style),height:n,width:n,xmlns:"http://www.w3.org/2000/svg"}),c&&i.a.createElement("title",null,c),I.children)};return void 0!==c?i.a.createElement(c.Consumer,null,(function(I){return e(I)})):e(a)}},Nk66:function(I,e,g){"use strict";g.d(e,"a",(function(){return a}));var t=g("q1tI"),i=g.n(t),a=(g("SVEL"),function(I){return i.a.createElement("h2",{"data-testid":"section-title",className:"title title--"+I.type},I.title)})},QXQW:function(I,e){I.exports="data:image/svg+xml;base64,PHN2ZyBhcmlhLWhpZGRlbj0idHJ1ZSIgZm9jdXNhYmxlPSJmYWxzZSIgZGF0YS1wcmVmaXg9ImZhcyIgZGF0YS1pY29uPSJhcnJvdy1yaWdodCIgY2xhc3M9InN2Zy1pbmxpbmUtLWZhIGZhLWFycm93LXJpZ2h0IGZhLXctNyIgcm9sZT0iaW1nIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik0xOTAuNSA2Ni45bDIyLjItMjIuMmM5LjQtOS40IDI0LjYtOS40IDMzLjkgMEw0NDEgMjM5YzkuNCA5LjQgOS40IDI0LjYgMCAzMy45TDI0Ni42IDQ2Ny4zYy05LjQgOS40LTI0LjYgOS40LTMzLjkgMGwtMjIuMi0yMi4yYy05LjUtOS41LTkuMy0yNSAuNC0zNC4zTDMxMS40IDI5NkgyNGMtMTMuMyAwLTI0LTEwLjctMjQtMjR2LTMyYzAtMTMuMyAxMC43LTI0IDI0LTI0aDI4Ny40TDE5MC45IDEwMS4yYy05LjgtOS4zLTEwLTI0LjgtLjQtMzQuM3oiPjwvcGF0aD48L3N2Zz4="},SVEL:function(I,e,g){},TSYQ:function(I,e,g){var t;!function(){"use strict";var g={}.hasOwnProperty;function i(){for(var I=[],e=0;e<arguments.length;e++){var t=arguments[e];if(t){var a=typeof t;if("string"===a||"number"===a)I.push(t);else if(Array.isArray(t)&&t.length){var c=i.apply(null,t);c&&I.push(c)}else if("object"===a)for(var A in t)g.call(t,A)&&t[A]&&I.push(A)}}return I.join(" ")}I.exports?(i.default=i,I.exports=i):void 0===(t=function(){return i}.apply(e,[]))||(I.exports=t)}()},WGyJ:function(I,e,g){"use strict";var t=g("q1tI"),i=g.n(t),a=g("ma3e"),c=g("Wbzz");g("1SPJ");e.a=function(){return i.a.createElement("div",{"data-testid":"secondary-footer",className:"small-footer"},i.a.createElement("div",{className:"small-footer__wrapper"},i.a.createElement("p",{className:"small-footer__rights"},"© Blackbird Lab. 2017-2020. All rights reserved."),i.a.createElement("div",{className:"small-footer__links"},i.a.createElement(c.a,{className:"link",to:"/acknowledgement-and-acceptance"},i.a.createElement("span",{className:"small-footer__privacy"},"Privacy Policy")),i.a.createElement("a",{target:"_blank",href:"https://ua.linkedin.com/company/blackbird-lab",className:"small-footer__link"},i.a.createElement(a.h,null)),i.a.createElement("a",{className:"small-footer__link",target:"_blank",href:"https://jobs.dou.ua/companies/blackbird-lab/"},"DOU"))))}},khYz:function(I,e,g){"use strict";g.d(e,"a",(function(){return c}));var t=g("q1tI"),i=g.n(t),a=g("Wbzz"),c=(g("4q/3"),function(I){var e=I.links,g=I.path,c=I.type,A=Object(t.useState)(e),C=A[0],M=(A[1],Object(t.useRef)()),n=Object(t.useState)(!1);n[0],n[1];return console.log(M),i.a.createElement("ul",{className:"nav nav--"+c},i.a.createElement("div",{className:"nav__container"},C.links.map((function(I,e){return i.a.createElement(a.a,{ref:M,"data-testid":"nav",activeClassName:"active__border--style",to:""+I.page,className:"link__margin  active__border nav__link",state:{choice:g}},I.title)}))))})},oADE:function(I,e,g){},t6JI:function(I,e,g){"use strict";g.d(e,"a",(function(){return c}));var t=g("q1tI"),i=g.n(t),a=(g("JeDc"),g("khYz")),c=function(I){var e=Object(t.useState)(I.navLinks),g=e[0],c=e[1],A=Object(t.useState)(I.navLinksArray),C=A[0],M=A[1],n=function(I){return C.links[I]===C.activeLink?"primary-nav__container primary-nav__container--show":"primary-nav__container"},N=function(I){c(Object.assign({},g,{activeLink:g.links[I]})),function(I){M(Object.assign({},C,{activeLink:C.links[I]}))}(I)},l=function(I){return g.links[I]===g.activeLink?"primary-nav__categories primary-nav__categories--active":"primary-nav__categories"};Object(t.useRef)();return i.a.createElement("div",{className:"primary-nav__section"},i.a.createElement("div",{"data-testid":"primary-nav",className:"primary-nav primary-nav--"+I.type},i.a.createElement("ul",{className:"primary-nav__wrapper"},i.a.createElement("div",{className:"primary-nav__body"},i.a.createElement("div",{className:"primary-nav__items primary-nav__items--"+I.border},I.navLinks.links.map((function(I,e){return i.a.createElement("li",{onClick:function(){N(e)},className:l(e),key:e},I.title)}))),i.a.createElement("div",{className:"primary-nav__subcategories"},I.navLinksArray.links.map((function(I,e,g){return i.a.createElement("div",{key:e,className:n(e)},i.a.createElement(a.a,{type:"mobile",keyValue:I.id,links:I.array,page:I.page}))})))),i.a.createElement("div",{className:"primary-nav__language"},i.a.createElement(a.a,{links:I.language})))))}}}]);
//# sourceMappingURL=763d3647ff948d6655ac36baaca217f30bc3f8cf-27a38a80e6a62c129a5f.js.map