

$(function(){
    console.log('page2');

    /*
    显式传参
vipspa.parse()
可以获取到从首页带过来的参数
浏览器url传参
优点：记录页面历史，刷新页面，参数不丢失
缺点：对外暴漏参数  */
    console.log(vipspa);
    var param = vipspa.parse();
    console.log(param);
    if(!param.param.name){
        param.param.name="";
    }
    $("#introbox").html("我是从首页传过来的内容"+param.param.name);
    
});
