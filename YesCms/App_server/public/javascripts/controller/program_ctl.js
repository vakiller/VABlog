angular.module('vaBlog')
.controller('program_ctl',['$scope','$http','loadPost','$sce',function($scope,$http,loadPost,$sce){
        //import { markdown } from "markdown";
        $scope.posts;
        $scope.last;
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
                $scope.last = response.data[0];
                $scope.content =  response.data[0].Content;
                var converter = new showdown.Converter();
                $scope.contenthtml = $sce.trustAsHtml(converter.makeHtml($scope.content));
                console.log($scope.contenthtml);
            },function (error){
                $scope.err = error;
            });
        };
        //function getbyid();
}]);
