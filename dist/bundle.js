!function(d){function n(n){for(var r,e,i=n[0],t=n[1],o=n[2],a=0,p=[];a<i.length;a++)e=i[a],Object.prototype.hasOwnProperty.call(l,e)&&l[e]&&p.push(l[e][0]),l[e]=0;for(r in t)Object.prototype.hasOwnProperty.call(t,r)&&(d[r]=t[r]);for(g&&g(n);p.length;)p.shift()();return s.push.apply(s,o||[]),m()}function m(){for(var n,r=0;r<s.length;r++){for(var e=s[r],i=!0,t=1;t<e.length;t++){var o=e[t];0!==l[o]&&(i=!1)}i&&(s.splice(r--,1),n=a(a.s=e[0]))}return n}var e={},l={2:0},s=[];function a(n){if(e[n])return e[n].exports;var r=e[n]={i:n,l:!1,exports:{}};return d[n].call(r.exports,r,r.exports,a),r.l=!0,r.exports}a.m=d,a.c=e,a.d=function(n,r,e){a.o(n,r)||Object.defineProperty(n,r,{enumerable:!0,get:e})},a.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},a.t=function(r,n){if(1&n&&(r=a(r)),8&n)return r;if(4&n&&"object"==typeof r&&r&&r.__esModule)return r;var e=Object.create(null);if(a.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:r}),2&n&&"string"!=typeof r)for(var i in r)a.d(e,i,function(n){return r[n]}.bind(null,i));return e},a.n=function(n){var r=n&&n.__esModule?function(){return n.default}:function(){return n};return a.d(r,"a",r),r},a.o=function(n,r){return Object.prototype.hasOwnProperty.call(n,r)},a.p="";var r=(i=window.webpackJsonp=window.webpackJsonp||[]).push.bind(i);i.push=n;for(var i=i.slice(),t=0;t<i.length;t++)n(i[t]);var g=r;s.push([37,1,0,4,3]),m()}({24:function(n,r,e){var i=e(6),t=e(25),e={insert:"head",singleton:!1};i(t="string"==typeof(t=t.__esModule?t.default:t)?[[n.i,t,""]]:t,e);n.exports=t.locals||{}},25:function(n,r,e){"use strict";e.r(r);var i=e(3),i=e.n(i)()(function(n){return n[1]});i.push([n.i,"* {\n    box-sizing:border-box;\n    padding: 0;\n    margin: 0;\n}\n\nbody {\n    font-family: 'Poppins', Verdana;\n    background-color: white;\n    min-height: 100vh;\n    display: flex;\n    flex-direction: column;\n}\n\n\nhtml {\n    scroll-behavior: smooth;\n  }\n\n\n/*\n  AppBar\n*/\n\n.app-bar {\n    padding: 8px 16px;\n    margin:0;\n    background-color: white;\n    display: grid;\n    grid-template-columns: auto 1fr auto;\n    gap: 10px;\n    position: sticky;\n    top: 0;\n    z-index: 99;\n    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);\n}\n\n.app-bar .app-bar__menu {\n    display: flex;\n    align-items: center;\n}\n\n.app-bar .app-bar__menu button {\n    background-color: transparent;\n    border: none;\n    font-size: 18px;\n    padding: 8px;\n    cursor: pointer;\n}\n\n.app-bar .app-bar__brand {\n    display: flex;\n    align-items: center;\n}\n\n.app-bar .app-bar__brand h1 {\n    color: #db0000;\n    text-transform: uppercase;\n    font-size: 22px;\n    user-select: none;\n}\n\n.app-bar .app-bar__navigation {\n    position: absolute;\n    top: 50px;\n    left: -180px;\n    width: 150px;\n    transition: all 0.3s;\n    padding: 8px;\n    background-color: white;\n    overflow: hidden;\n}\n\n.app-bar .app-bar__navigation.open {\n    left: 0;\n}\n\n.app-bar .app-bar__navigation ul li a {\n    display: inline-block;\n    text-decoration: none;\n    color: black;\n    padding: 8px;\n    margin-bottom: 5px;\n    width: 100%;\n}\n\n/*\n  Main Content\n*/\n\nmain {\n    padding: 32px;\n    flex: 1;\n}\n\n.content {\n    margin: 0 auto;\n    min-height: 100%;\n}\n\n.content .content__heading {\n    position: relative;\n    font-weight: normal;\n    margin:25px 0 0 0;\n\n}\n\n.content .content__headline{\n\n    margin:20px 0 0 0;\n\n    align-items: center;\n    justify-content: center;\n    align-content: center;\n    text-align: center;\n  \n  }\n\n  \n.picture{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    align-content: center;\n    text-align: center;\n  \n  }\n\n/*\n  Movies\n*/\n\n.movies {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    gap: 16px;\n    margin: 32px 0;\n}\n\n\n.review {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    gap: 16px;\n    margin: 32px 0;\n}\n\n/*\n  Movie Item global\n*/\n\n.movie-item{\n    width: 100%;\n    min-height: 560px;\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n    border-radius: 8px;\n    margin-top: 10px;\n   \n}\n\n.review-item {\n    width: 100%;\n    min-width:50%;\n    min-height: auto;\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n    border-radius: 8px;\n    margin-top: 10px;\n    padding:10px;  \n}\n\n.review-item__content{\n\n    width: 100%;\n    min-height: auto;\n    min-width:50%;\n}\n\n.review-item__content .description{\n    padding:10px 0 15px 0;\n}\n\n.movie-item__header {\n    position: relative;\n}\n\n .movie-item__header__poster {\n    width: 100%;\n    min-height:250px;\n    max-height:250px;\n    background-color:transparent;\n    object-fit:fill;\n    object-position: center;\n    position: relative;\n }\n\n.movie-item__header__poster:hover{\n    position:sticky;\n    top: 50%;\n    left: 50%;\n    width: 110%;\n    height:130%;\n    min-height:110%;\n    z-index:100;\n    transform: scale(1.8);    \n}\n\n.movie-item__header__city, .movie-item__header__rating{\n    margin: 3px 0 0 10px;\n    padding:0 px;\n    align-items: left;\n    justify-content: left;\n    align-content: left;\n    text-align: left;\n}\n\n.movie-item .movie-item__content {\n    padding: 10px;\n    height: auto;\n}\n\n.movie__info  a,\n.movie-item .movie-item__content h3,\n.movie-item .movie-item__content a {\n    color: #db0000;\n    text-decoration: none;\n    font-weight:bold;  \n}\n\n.movie-item .movie-item__content h3 {\n    margin: 0 0 10px 0;  \n}\n\n.movie__info  a {     \n    margin: 8px 0;  \n}\n\na{\n    display: inline-block;\n    width:100%;\n}\n\n.description,.movie-item .movie-item__content p {\n    padding:3px;\n    text-align: justify; \n    width: 100%;\n}\n\n/*\n  Movie detail\n*/\n\n.movie {\n    margin: 0 auto;\n    width: 100%;\n    max-width: 800px;\n    display: grid;\n    grid-template-columns: 1fr;\n    gap: 18px 16px;\n}\n\n .movie__poster {\n    width: 100%;\n    max-height:700px;   \n    min-width: 250px;\n    background-color:transparent;\n    object-fit:fill;\n    object-position: center;\n}\n\n.movie__header {\n    margin:10px 20px 10px 5px;\n    width:100%;\n    max-width: 325px;\n    min-height: auto;\n    min-width: auto; \n}\n\n.movie__info{\n  width:100%;\n  max-width:300px;\n  min-width: auto;\n  min-height: auto;  \n}\n\n.movie .movie__info h3 {\n   width:100%;\n   max-width: 300px;\n   min-width: auto;\n}\n\n.movie .movie__info ul {\npadding:0 10px;\nmargin:0 15px 5px 0;\n}\n\nul li a:hover{\ncolor:rgb(29, 29, 31); \nfont-size: 1.125em;\nfont-weight:bold;\ntext-decoration:none;\n}\n\n.movie-item .movie-item__content  a:hover,\n.movie .movie__info a:hover {\n    color:rgb(14, 14, 223); \n    font-size: 1.0625em;\n    font-weight:bold;\n    text-decoration:none;\n    height:52px;\n}\n\n/*\n  Footer\n*/\n\nfooter,.footer {\n    display:flex;\n    flex-grow: 1;\n    flex-wrap: wrap;\n    flex-direction: column;\n    padding: 16px;\n    align-items: center;\n    justify-content: center;\n    align-content:center;\n    text-align: center;\n}\n\nfooter p {\n    \n    color: #333131;\n   \n}\n\nfooter p a {\n    color: #db0000;\n    text-decoration: none;\n}\n \n    .copyright{\n\n        display: flex;\n        flex-grow: 1;\n        flex-direction: column;\n        flex-wrap: wrap;\n        align-items: center;\n        justify-content: center;\n        align-content:center;\n        text-align: center;\n        width:100%;\n    }\n   \n    .box-satu,.box-dua,.box-tiga,.box-empat,.box-lima{     \n        position:sticky;\n        top:50%;\n        left:50%;\n        background-color: transparent;   \n    }\n\n    .posisi{\n      display: none;\n    }\n\n/*\n   Like\n*/\n\n.like {\n    font-size: 18px;\n    position: fixed;\n    bottom: 16px;\n    right: 16px;\n    background-color: #db0000;\n    color: white;\n    border: 0;\n    border-radius:50%;\n    width: 55px;\n    height: 55px;\n    cursor: pointer;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n article.category,article-food,article.drink,article-review {\n    overflow-y:scroll;\n    overflow-x:hidden;\n    -webkit-overflow-scrolling: vertical;\n    max-height:100px;\n    max-width:25%;\n}\n\n  ::-webkit-scrollbar {\n    width: 10px;\n  }\n  \n  ::-webkit-scrollbar-track {\n    box-shadow: inset 0 0 2px rgba(37, 37, 37, 0.267); \n    border-radius: 10px;\n    background:transparent; \n  }\n\n  ::-webkit-scrollbar-thumb {\n    background:  rgba(88, 88, 88, 0.253);\n    border-radius: 10px;\n  }\n\n  .id{\n      display:none;\n  }\n\n  .skip-link{\n    display:inline-block;\n    height:1px;\n    color:white;\n    font-size: 1px;\n    margin:0;\n    top:-40;\n    left:-10;\n    z-index:100;\n  }\n\n  .satu,.dua,.tiga,.empat,.lima{\n    font-size: 9px;\n    margin: 0;\n  }\n  ",""]),r.default=i},26:function(n,r,e){var i=e(6),t=e(27),e={insert:"head",singleton:!1};i(t="string"==typeof(t=t.__esModule?t.default:t)?[[n.i,t,""]]:t,e);n.exports=t.locals||{}},27:function(n,r,e){"use strict";e.r(r);var i=e(3),i=e.n(i)()(function(n){return n[1]});i.push([n.i,"* {\r\n  box-sizing:border-box;\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\n\r\na,input,button {\r\n  box-sizing: border-box;\r\n  min-width: 44px;\r\n  min-height: 44px;   \r\n  display: inline-block;\r\n }\r\n\r\n.jumbotron {\r\n    background-image: \r\n        linear-gradient(rgba(0, 0, 0, 0.342),rgba(0, 0, 0, 0.342)),\r\n        url('../public/images/jumbotron-exLarge.jpg');\r\n    background-size:100% 100%;\r\n    background-position:center center;\r\n    background-color: transparent;\r\n    width: 100%;\r\n    height:90%;\r\n    min-height:500px;\r\n    max-height:800px;\r\n    margin: 10px 0 0 0; \r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    align-content: center;\r\n    text-align: center;\r\n    left:0;\r\n    right:0;\r\n    \r\n}\r\n\r\n.jumbotron__title{\r\n    font-size: 3rem;\r\n    color:white;\r\n    font-weight: 400;    \r\n    justify-content: center;\r\n}\r\n",""]),r.default=i},28:function(n,r,e){var i=e(6),t=e(29),e={insert:"head",singleton:!1};i(t="string"==typeof(t=t.__esModule?t.default:t)?[[n.i,t,""]]:t,e);n.exports=t.locals||{}},29:function(n,r,e){"use strict";e.r(r);var i=e(3),i=e.n(i)()(function(n){return n[1]});i.push([n.i,"* {\n    box-sizing:border-box;\n    padding: 0;\n    margin: 0;\n}\n\n\n@media screen and (min-width: 100px) {\n\n       \n     a, input {\n    box-sizing: border-box;\n    min-width: 44px;\n    min-height: 44px; \n    display: inline-block;\n    width:100%;\n   }\n\n    \n    \n    .movies {\n        grid-template-columns: auto;\n\n    }\n\n    .review {\n        grid-template-columns: auto;\n\n    }\n\n    .movie {\n        grid-template-columns: auto;\n    }\n\n    .name{\n        max-width:80%;\n        size:30;\n    }\n\n    .movie__poster {\n        max-height:700px; \n        min-height:500px;    \n        }\n\n        .movie-item__header__poster {\n            min-height:250px;\n            max-height:250px;\n\n        }\n}\n\n\n\n@media screen and (min-width: 650px) {\n    .app-bar {\n        grid-template-columns: 1fr auto;\n        padding: 8px 32px;\n    }\n\n    .app-bar .app-bar__brand h1 {\n        font-size: 1.5em;\n    }\n\n    .app-bar .app-bar__menu {\n        display: none;\n    }\n\n    .app-bar .app-bar__navigation {\n        position: static;\n        width: 100%;\n    }\n\n    .app-bar .app-bar__navigation ul li {\n        display: inline-block;\n    }\n\n    .app-bar .app-bar__navigation ul li a {\n        display: inline-block;\n        width: 120px;\n        text-align: center;\n        margin: 0;\n    }\n\n    .movies {\n        grid-template-columns: 1fr 1fr;\n\n    }\n\n    .review {\n        grid-template-columns: 1fr 1fr;\n\n    }\n\n    .movie {\n        grid-template-columns: auto 1fr;\n    }\n\n    .movie .movie__title {\n        grid-column-start: 1;\n        grid-column-end: 3;\n    }\n\n    .movie .movie__overview {\n        grid-column-start: 1;\n        grid-column-end: 3;\n    }\n\n    .name{\n        max-width:100%;\n        size:30;\n    }\n\n    .movie__poster {\n        min-height:560px;   \n        }\n\n        .movie-item__header__poster {\n            min-height:350px;\n            max-height:350px;\n\n        }\n\n   \n}\n\n@media screen and (min-width: 800px) {\n    .app-bar .app-bar__brand h1 {\n        font-size: 2em;\n    }\n}\n\n@media screen and (min-width: 850px) {\n    .movies {\n        grid-template-columns: repeat(3, 1fr);\n    }\n\n    .review {\n        grid-template-columns: repeat(2, 1fr);\n    }\n\n    .name{\n        max-width:100%;\n        size:50;\n    }\n\n    .movie-item__header__poster {\n        min-height:300px;\n        max-height:300px;\n\n    }\n\n   \n\n}\n\n@media screen and (min-width: 1200px) {\n    .movies {\n        grid-template-columns: repeat(4, 1fr);\n    }\n\n    .review {\n        grid-template-columns: repeat(3, 1fr);\n    }\n\n    .movie__poster {\n        min-height:700px;   \n    }\n\n    .movie-item__header__poster {\n        min-height:250px;\n        max-height:250px;\n\n    }\n\n    .name{\n        max-width:100%;\n        size:50;\n    }\n\n    \n\n}\n\n@media screen and (min-width: 1600px) {\n    .movies {\n        grid-template-columns: repeat(5, 1fr);\n    }\n\n    .review {\n        grid-template-columns: repeat(4, 1fr);\n    }\n\n    .movie-item__header__poster {\n        min-height:250px;\n        max-height:250px;\n\n    }\n    \n}\n\n\n\n@media screen and (max-width: 1600px) {\n\n    a,input {\n        box-sizing: border-box;\n        min-width: 44px;\n        min-height: 44px;   \n        display: inline-block;\n       }\n\n       .name{\n        max-width:100%;\n        size:50;\n    }\n       \n}\n\n\n@media screen and (max-width: 350px) {\n\n    .movie__poster {\n        max-height:700px; \n        min-height:500px; \n        max-width: 250px;  \n        }\n\n        .movie-item__header__poster {\n            min-height:250px;\n            max-height:250px;\n\n        }\n            \n    .movie__header {\n        margin:5px 5px 5px 5px;\n        width:100%;\n        max-width: 280px;\n        min-height: auto;\n        min-width: 200px;  \n    }\n\n\n    a {\n        box-sizing: border-box;\n        min-width: 44px;\n        min-height: 44px;    \n        display: inline-block;\n        width:100%;\n    }\n\n    .jumbotron{\n        width: 100%;\n        height:100%;\n    }\n}\n\n\n",""]),r.default=i},30:function(n,r,e){var i=e(6),t=e(31),e={insert:"head",singleton:!1};i(t="string"==typeof(t=t.__esModule?t.default:t)?[[n.i,t,""]]:t,e);n.exports=t.locals||{}},31:function(n,r,e){"use strict";e.r(r);var i=e(3),i=e.n(i)()(function(n){return n[1]});i.push([n.i,"\r\n@media screen and (min-width: 100px) and (max-width: 320px) {  \r\n\r\n    .jumbotron {\r\n\r\n        background-image: \r\n        linear-gradient(rgba(0, 0, 0, 0.342),rgba(0, 0, 0, 0.342)),\r\n        url('../public/images/jumbotron-exSmall.jpg');\r\n        \r\n        min-height:213px;\r\n        max-height:213px;\r\n       \r\n    }\r\n    \r\n    .jumbotron__title{\r\n\r\n        font-size: 1.125em;\r\n\r\n    }\r\n\r\n}\r\n\r\n/* pakai 320 */\r\n\r\n@media screen and (min-width: 321px) and (max-width: 468px) {\r\n        \r\n    .jumbotron {\r\n\r\n        background-image: \r\n        linear-gradient(rgba(0, 0, 0, 0.342),rgba(0, 0, 0, 0.342)),\r\n        url('../public/images/jumbotron-Small.jpg');\r\n       \r\n        min-height:312px;\r\n        max-height:440px;\r\n        \r\n    }\r\n    \r\n    .jumbotron__title{\r\n\r\n        font-size: 1.25em;\r\n\r\n    }\r\n\r\n}\r\n\r\n/* pakai 468 */\r\n\r\n@media screen and (min-width: 469px) and (max-width: 660px) {\r\n    \r\n    .jumbotron {\r\n\r\n        background-image: \r\n        linear-gradient(rgba(0, 0, 0, 0.342),rgba(0, 0, 0, 0.342)),\r\n        url('../public/images/jumbotron-Middle.jpg');\r\n       \r\n        min-height:440px;\r\n        max-height:512px;\r\n       \r\n    }\r\n        \r\n    .jumbotron__title{\r\n\r\n        font-size: 1.375em;\r\n\r\n    }\r\n\r\n}\r\n\r\n/* pakai 660 */\r\n\r\n\r\n@media screen and (min-width: 768px) and (max-width: 899px) {\r\n\r\n    \r\n    .jumbotron {\r\n    \r\n        background-image: \r\n        linear-gradient(rgba(0, 0, 0, 0.342),rgba(0, 0, 0, 0.342)),\r\n          url('../public/images/jumbotron-Medium.jpg');\r\n         \r\n          min-height:512px;\r\n          max-height:660px;\r\n            \r\n    }\r\n\r\n    \r\n    .jumbotron__title{\r\n\r\n        font-size: 3rem;\r\n    }\r\n\r\n\r\n}\r\n    \r\n/* pakai 768 */\r\n\r\n@media screen and (min-width: 990px) and (max-width: 1023px) {\r\n    \r\n    .jumbotron {\r\n\r\n        background-image: \r\n        linear-gradient(rgba(0, 0, 0, 0.342),rgba(0, 0, 0, 0.342)),\r\n        url('../public/images/jumbotron-exMedium.jpg');\r\n        \r\n        min-height:660px;\r\n        max-height:682px;\r\n       \r\n    }\r\n\r\n    \r\n    .jumbotron__title{\r\n\r\n        font-size: 3rem;\r\n    }\r\n\r\n\r\n}\r\n\r\n/* pakai 990 */\r\n\r\n@media screen and (min-width: 1024px) and (max-width: 1200px) {\r\n        \r\n    .jumbotron {\r\n\r\n        background-image: \r\n        linear-gradient(rgba(0, 0, 0, 0.342),rgba(0, 0, 0, 0.342)),\r\n        url('../public/images/jumbotron-Large.jpg');\r\n       \r\n        min-height:682px;\r\n        max-height:800px;\r\n       \r\n    }\r\n    \r\n    .jumbotron__title{\r\n\r\n        font-size: 3rem;\r\n    }\r\n\r\n\r\n}\r\n\r\n/* pakai 1024 */\r\n\r\n@media screen and (min-width: 1201px) and (max-width: 1600px) {\r\n    \r\n    .jumbotron {\r\n\r\n        background-image: \r\n        linear-gradient(rgba(0, 0, 0, 0.342),rgba(0, 0, 0, 0.342)),\r\n        url('../public/images/jumbotron-exLarge.jpg');\r\n        \r\n        min-height:800px;\r\n        max-height:800px;\r\n       \r\n    }\r\n    \r\n    .jumbotron__title{\r\n\r\n        font-size: 3rem;\r\n    }\r\n\r\n\r\n}\r\n\r\n/* pakai 1600 */",""]),r.default=i},32:function(n,r,e){var i=e(6),t=e(33),e={insert:"head",singleton:!1};i(t="string"==typeof(t=t.__esModule?t.default:t)?[[n.i,t,""]]:t,e);n.exports=t.locals||{}},33:function(n,r,e){"use strict";e.r(r);var i=e(3),i=e.n(i)()(function(n){return n[1]});i.push([n.i,".loader {\r\n    background-color: transparent;\r\n    border: 8px solid #f3f3f3;\r\n    border-radius: 50%;\r\n    border-top: 8px solid #3498db;\r\n    width: 50px;\r\n    height: 50px;\r\n    -webkit-animation: spin 0.5s linear infinite; /* Safari */\r\n    -webkit-animation-duration: 0.5s ;\r\n    animation: spin 0.5s linear infinite;\r\n    animation-duration: 0.5s ;   \r\n\r\n    \r\n  }\r\n  \r\n  /* Safari */\r\n  @-webkit-keyframes spin {\r\n    0% { -webkit-transform: rotate(0deg); }\r\n    100% { -webkit-transform: rotate(360deg); }\r\n  }\r\n  \r\n  @keyframes spin {\r\n    0% { transform: rotate(0deg); }\r\n    100% { transform: rotate(360deg); }\r\n  }\r\n\r\na {\r\n  box-sizing: border-box;\r\n  min-width: 44px;\r\n  min-height: 44px;  \r\n  display: inline-block;\r\n  }",""]),r.default=i},34:function(n,r,e){var i=e(6),t=e(35),e={insert:"head",singleton:!1};i(t="string"==typeof(t=t.__esModule?t.default:t)?[[n.i,t,""]]:t,e);n.exports=t.locals||{}},35:function(n,r,e){"use strict";e.r(r);var i=e(3),i=e.n(i)()(function(n){return n[1]});i.push([n.i,".lazyload,\r\n.lazyloading {\r\nopacity: 0;\r\n}\r\n.lazyloaded {\r\nopacity: 1;\r\ntransition: opacity 60ms;\r\n}",""]),r.default=i}});