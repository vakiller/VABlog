angular.module('yesCMS')
.config(function($routeProvider){
    $routeProvider
    .when('/quanli',{
        templateUrl : 'static/views/quanli.html',
        controller : 'quanli_Ctl'
    })
    .when('/chinhsuabaiviet/:id',{
        templateUrl : 'static/views/markdownEditor.html',
        controller : 'markdownEditor_Ctl'
    })
    .when('/taobaiviet',{
        templateUrl : 'static/views/markdownEditor.html',
        controller : 'createnew_Ctl.js'
    })
    .when('/thongke',{
        templateUrl : 'static/views/thongke.html',
        controller : 'thongke_Ctl.js'
    })
    .when('/editUi',{
        templateUrl : 'static/views/editUi.html',
        controller : 'editUi_Ctl.js'
    })
    .when('/account',{
        templateUrl : 'static/views/account.html',
        controller : 'account_Ctl.js'
    })
    .when('/about',{
        templateUrl : 'static/views/about.html'
    })
});