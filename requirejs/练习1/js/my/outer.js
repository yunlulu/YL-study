define(['jquery'],function ($) {
	var tips={
		tip1:function (txt) {
			$("body").append("<h1>"+txt+"</h1>");
		}
	};

	return tips;
})