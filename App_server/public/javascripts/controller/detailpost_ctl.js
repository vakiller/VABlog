angular.module("vaBlog").controller("detailpost_ctl",['$scope','$routeParams','$http','loadPost','$sce',function($scope,$routeParams,$http,loadPost,$sce){
    var param = $routeParams.id;
    console.log(param);
}]);