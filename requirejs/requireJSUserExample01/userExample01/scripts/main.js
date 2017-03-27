//1，about require js config
;
require.config({
	//define all js file path base on this base path
	//actually this can setting same to data-main attribute in script tag
	//定义所有JS文件的基本路径,实际这可跟script标签的data-main有相同的根路径
	baseUrl:"./scripts" 

	//define each js frame path, not need to add .js suffix name
	//定义各个JS框架路径名,不用加后缀 .js
	,paths:{ 
		"jquery":["http://libs.baidu.com/jquery/2.0.3/jquery", "lib/jquery/jquery-1.9.1.min"]
		,"workjs01":"work/workjs01" 
		,"workjs02":"work/workjs02"
		,"underscore":"http://www.css88.com/doc/underscore/underscore-min"
	}
	
	//include NOT AMD specification js frame code
	//包含其它非AMD规范的JS框架
	,shim:{ 
		"underscore":{
			"exports":"_"
		}
	}
	
});

//2，about load each js code basing on different dependency
//按不同先后的依赖关系加载各个JS文件
require(["jquery","workjs01","underscore"],function($,w1,_){
    console.log(w1.version);
    require(['workjs02']);
    w1.loadTip("hahahhaah","h2");
    _.map({one: 1, two: 2, three: 3}, function(num, key){ console.log(num * 3); });
});

/*
//------------------------------------------
//项目目录结构

userExample01
    |---- *.html 
    |----scripts    
    |       |---- *.js 
            |----lib
            |     |----jquery
            |            |---- *.js
            |----work
                   |---- *.js

//------------------------------------------
*/