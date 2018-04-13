


$(function(){
    console.log('page2');
    /*
        浏览器内存传参
        优点：安全
        优点：刷新失效 


    //隐式向 home 页面传递参数
    //vipspa.getMessage('传参页面所指定的id名')
    */
    var param = vipspa.getMessage('home');
    console.log(param);
        if (param.content) {
            if(param.content.tel){
                $("#telbox").html("我的电话是：" + param.content.tel);
            }
        } else{
            $("#telbox").html("我的电话是：" + '保密啦');

        }



    /*delMessage(messageId)    作用：删除指定消息
      clearMessage()           作用：清除消息队列*/
})
