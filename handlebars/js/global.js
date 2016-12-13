// jquery扩展插件----handlebars
  (function($) {
    var compiled = {};
    $.fn.handlebars = function(template, data) {
        if (template instanceof jQuery) {
            template = $(template).html();
        }
    compiled[template] = Handlebars.compile(template);
    this.html(compiled[template](data));
    };
})(jQuery);


// 
var datas = {
    data2:{name:"22222222"},
    data1:[
        {
         name: "张三",
         sex: "男",
         age: 30,
         fav:['apple1111','banna','orange']
         },
         {
         name: "李四",
         sex: "男",
         age: 23,
           fav:['apple','banna22222222222','orange']
       },{
         name: "甜妞",
         sex: "女",
        age: 18,
          fav:['apple','banna','orange333333']
       }
       ]

   };
$(".box1").handlebars($("#temp1"),datas);
