$(function(){
	console.log('首页');
	$('#submit').click(function(){
		var name = $('#name').val();
		if(name===''){
			alert('请输入名称')
		}
		var param = {
			name : name,
			hello:"hello yunlulu"
		};
		//跳转到 home 页面，同时像 home传递参数 {name:'Jack'}
		location.hash = vipspa.stringify('page1',param);
	});

	$('#submit1').click(function(){
		var tel = $('#telno').val();
		if(!tel){
			alert('请输入手机号码');
			return;
		}
		console.log(tel);
		// id必须得指定 用于标识这个传参
		var msg = {
			id : "home",
			content:{
				tel:tel
			}
		}
		/*
		隐式传参
		setMessage(param) 作用：向消息队列中加入一条消息。
						  参数：消息体的格式*/
		vipspa.setMessage(msg);
		location.hash = 'page2';
	})
})