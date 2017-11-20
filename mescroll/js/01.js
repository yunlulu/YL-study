var pageMain={
	downCallback:function () {
		alert("下拉");
	},
	upCallback:function () {
		alert("上拉");
	}
};
 var mescroll = new MeScroll("mescroll", { //第一个参数"mescroll"对应上面布局结构div的id
 	down: {
			callback: pageMain.downCallback 
			//下拉刷新的回调,别写成downCallback(),多了括号就自动执行方法了
		},
		up: {
			callback: pageMain.upCallback //上拉加载回调,简写callback:function(page){upCallback(page);}
}});