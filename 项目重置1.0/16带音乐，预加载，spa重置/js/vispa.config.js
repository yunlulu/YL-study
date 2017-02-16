// 单页面的配置
    vipspa.start({
        view: '#container',
        errorTemplateId: '#error', // 可选
        router: {
            'index': {
                templateUrl: 'view/index.html',
                controller: 'js/app/index.js'
            },
            'main': {
                templateUrl: 'view/main.html',
                controller: 'js/app/main.js'
            },
            'edit':{
                templateUrl: 'view/edit.html',
                controller: 'js/app/edit.js'
            },
            'defaults': 'main' //默认路由
        }
    });