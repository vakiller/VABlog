var baseUrl = 'http://localhost:3000/api';
angular.module('yesCMS')
.factory('loadpost',['$http',function($http){
    var loadpost = {};
    loadpost.getallPost = function(){
        return $http.get(baseUrl+'/Posts');
    }
    return loadpost; 
}]);