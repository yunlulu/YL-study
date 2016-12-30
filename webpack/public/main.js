//main.js 
var greet = require('./greet.js');
document.getElementById('root').appendChild(greet());
document.write(require("./content.js"));
document.write(require("./content2.js"));
var content3=require("./content3.js");
console.log(content3.a);
content3.b();
console.log(content3.c(3,555));
var acss=require("./a.css");
document.getElementsByTagName("head")[0].appendChild(acss);