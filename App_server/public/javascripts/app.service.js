angular.module("vaBlog")
.factory('loadPost',['$http',function($http){
    // var id = req.params.postID;
    var baseUrl = '/api/Posts';
    var loadPost = {};
    loadPost.getAllPost = function() {
        return $http.get(baseUrl);
    };
    loadPost.getLast = function() {
        return $http.get(baseUrl+'/new');
    };
    loadPost.getPostById = function(id) {
        return $http.get(baseUrl+"/"+id);
    }
    return loadPost;
}]);