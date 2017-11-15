require.config({
    paths:{
    	// 别名：[路径1，路径2]
        'jquery':["http://libs.baidu.com/jquery/2.0.3/jquery","jquery"],
        'utils':['util']
    }
});
// require(引入的模块路径数组，fun(依次用变量表示前面的引入的模块路径中的模块)
require(["jquery",'utils'],function($,util){
            $(function(){
                console.log(util.isEqual(1,2));  
                console.log(util.dataType("hahah"));
                util.beRed(".box1","#0f0",
                	{success:function () {
                		$(".box1").fadeOut(3000);	
                	},fail:function () {
                		console.log("fail");
                	}
            });
            });
            // 模块化
})