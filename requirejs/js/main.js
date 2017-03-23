require.config({
    paths:{
        'jquery':["http://libs.baidu.com/jquery/2.0.3/jquery","js/jquery"]
    }
});
// require(引入的模块路径数组，fun(依次用变量表示前面的引入的模块路径中的模块)
require(["jquery",'form'],function($,form){
            $(function(){
                console.log(form.isEqual(1,1));  
            });
            // 模块化
})