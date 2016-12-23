$(function(){
	vipspa.start({
        view: '#view',
        errorTemplateId: '#error', // 可选
        router: {
            'home': {
                templateUrl: 'views/home.html',
                controller: 'js/app/home.js'
            },
            'page1': {
                templateUrl: 'views/page1.html',
                controller: 'js/app/page1.js'
            },
            'page2': {
                templateUrl: 'views/page2.html',
                controller: 'js/app/page2.js'
            },
            'defaults': 'home' //默认路由
            // 'errorTemplateId':"#error"
        }
    });

});
