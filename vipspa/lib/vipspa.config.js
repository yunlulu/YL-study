$(function(){
	vipspa.start({
        view: '.nav-content-box',
        errorTemplateId: '#error', // 可选
        router: {
            'page1': {
                templateUrl: 'views/page1.html',
                controller: 'js/app/page1.js'
            },
            'page2': {
                templateUrl: 'views/page2.html',
                controller: 'js/app/page2.js'
            },
            'page3': {
                templateUrl: 'views/page3.html',
                controller: 'js/app/page3.js'
            },
            'page4': {
                templateUrl: 'views/page4.html',
                controller: 'js/app/page4.js'
            },
            'page5': {
                templateUrl: 'views/page5.html',
                controller: 'js/app/page5.js'
            },
            'defaults': 'page1' //默认路由
        }
    });

});
