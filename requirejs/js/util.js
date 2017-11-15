// define(依赖的模块，回调)
define(["jquery"],function ($) {
	var obj={
		// 判断类型
		dataType:function (a) {
			return typeof a;
		},
		// 俩数字是否相等
		isEqual:function (str1,str2) {
			return str1==str2;
		},
		// 让文字变成指定颜色
		beRed:function (obj,color,callbackobj) {
			$(obj).css({"color":color});
			if(callbackobj.success){
				callbackobj.success();
			}
		}
	};
	return obj;
})