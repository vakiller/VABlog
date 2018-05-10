angular.module('vaBlog')
.config(function($routeProvider){
    $routeProvider
    .when("/",{
        templateUrl : "/views/program.html",
        controller : "program_ctl"
    })
    .when("/program",{
        templateUrl : "/views/program.html",
        controller : "program_ctl"
    })
    .when("/texts",{
        templateUrl : "/views/texts.html",
        controller : "texts_ctl"
    })
    .when("/packback",{
        templateUrl : "/views/packback.html",
        controller : "packback_ctl.js"
    })
});
