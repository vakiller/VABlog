angular.module('yesCMS')
.controller('markdownEditor_Ctl',['$scope','$sce','$routeParams','loadpost',function($scope,$sce,$routeParams,loadpost){
    getpost($routeParams.id);
    function getpost(id)
    {
        loadpost.getbyId(id).then(function(response){
            $scope.post = response.data;
            console.log($scope.post.h1Post);
        },function(err){
            console.log(err);
        });
    }
    $scope.convert = function()
    {
        var converter = new showdown.Converter();
        $scope.tohtml = $sce.trustAsHtml(converter.makeHtml($scope.inputString));
    }
    
    console.log("test");
}]);