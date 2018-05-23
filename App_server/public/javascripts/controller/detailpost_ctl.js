angular.module("vaBlog").controller("detailpost_ctl",['$scope','$routeParams','$http','loadPost','$sce',function($scope,$routeParams,$http,loadPost,$sce){
    var param = $routeParams.id;
    console.log(param);
    getbyid();
    function getbyid()
    {
        loadPost.getPostById(param)
        .then(function(response){
            $scope.post = response.data;
            var converter = new showdown.Converter({tables: true});
            $scope.contenthtml = $sce.trustAsHtml(converter.makeHtml($scope.post.Content));
            console.log($scope.contenthtml);
            console.log($scope.post);
        },function(err){
            console.log(err);
        })
    }
}]);