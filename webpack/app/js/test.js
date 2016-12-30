!function(t){function n(o){if(e[o])return e[o].exports;var r=e[o]={exports:{},id:o,loaded:!1};return t[o].call(r.exports,r,r.exports,n),r.loaded=!0,r.exports}var e={};return n.m=t,n.c=e,n.p="",n(0)}([/*!************************!*\
  !*** ./public/main.js ***!
  \************************/
function(t,n,e){var o=e(/*! ./greet.js */4);document.getElementById("root").appendChild(o()),document.write(e(/*! ./content.js */1)),document.write(e(/*! ./content2.js */2));var r=e(/*! ./content3.js */3);console.log(r.a),r.b(),console.log(r.c(3,555));var c=e(!function(){var t=new Error('Cannot find module "./a.css"');throw t.code="MODULE_NOT_FOUND",t}());document.getElementsByTagName("head")[0].appendChild(c)},/*!***************************!*\
  !*** ./public/content.js ***!
  \***************************/
function(t,n){t.exports="现在是来自content.js的文件1111！"},/*!****************************!*\
  !*** ./public/content2.js ***!
  \****************************/
function(t,n){t.exports="现在是来自content.js的文件2222！"},/*!****************************!*\
  !*** ./public/content3.js ***!
  \****************************/
function(t,n){t.exports={a:"hahahahaha",b:function(){console.log("bbbbbbbbbbbbb")},c:function(t,n){return t*n}}},/*!*************************!*\
  !*** ./public/greet.js ***!
  \*************************/
function(t,n){t.exports=function(){var t=document.createElement("div");return t.textContent="Hi,this is first weppack demo!",t}}]);
//# sourceMappingURL=test.js.map