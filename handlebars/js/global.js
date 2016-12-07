// jquery handlebars方法

(function($) {
    var compiled = {};
    $.fn.handlebars = function(template, data) {
        if (template instanceof jQuery) {
            template = $(template).html();
        }
            console.log($(template));
            console.log(template);
    compiled[template] = Handlebars.compile(template);
    this.html(compiled[template](data));

    };
})(jQuery);


// 
var datas = {
    data1:[
        {
         name: "张三",
         sex: "男",
         age: 30 
         },
         {
         name: "李四",
         sex: "男",
         age: 23
       },{
         name: "甜妞",
         sex: "女",
        age: 18
       }
       ]

   };
$(".box1").handlebars("#temp1",datas);
