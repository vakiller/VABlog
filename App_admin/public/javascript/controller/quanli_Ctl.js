angular.module('yesCMS')
.controller('quanli_Ctl',['$scope','loadpost',function($scope,loadpost){
    getAll();
    function getAll()
    {
        loadpost.getallPost().then(function(response){
            $scope.posts = response.data;
            console.log($scope.posts);
        },function(err){
            console.log(err);
        });
    }
}]);