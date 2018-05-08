angular.module('vaBlog')
.controller('program_ctl',['$scope','$http','loadPost',function($scope,$http,loadPost){
        $scope.posts;
        $scope.last;
        console.log($scope.last);
        $scope.err;
        getall();
        getLast();
        function getall(){
            loadPost.getAllPost()
            .then(function (response){
                $scope.posts = response.data;
                console.log($scope.posts);
            },function (error){
                $scope.err = error;
            });
        };
        function getLast(){
            loadPost.getLast()
            .then(function (response){
                $scope.last = response.data;
                console.log($scope.last.h1Post);
            },function (error){
                $scope.err = error;
            });
        };
}]);