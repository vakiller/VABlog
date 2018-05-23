angular.module('yesCMS')
.controller('markdownEditor_Ctl',['$sce','$routeParams','$scope','loadpost',function($sce,$routeParams,$scope,loadpost){
    getpost($routeParams.id);
    function getpost(id)
    {
        loadpost.getbyId(id).then(function(response){
            $scope.post = response.data;
            $scope.inputString = response.data.Content;
            console.log($scope.post.h1Post);
        },function(err){
            console.log(err);
        });
    }
    console.log("test");
}]);