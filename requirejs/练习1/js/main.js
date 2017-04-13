require.config({
	paths:{
		// 默认根目录是main.js所在的文件夹，通过baseUrl可以改变根目录
		"baseUrl":"lib",
		"jquery":"jquery",
		"math":"my/math",
		"outer":"my/outer"
	}
});
console.log("main加载成功！");

// require  数组里面是模块地址，前提是和main.js在同一个目录下
// 当不在同一个目录下的时候，需要使用require.config 来指定
/*require(['jquery'],function ($) {
	console.log($(window).height());
})*/


require(['jquery','math','outer'],function ($,math,outer) {
	console.log($(window).height());
	console.log(math.add(10,20));
	console.log(math.reduce(10,20));
	outer.tip1("哈哈哈哈哈");
});