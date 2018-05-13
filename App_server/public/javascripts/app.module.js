 angular.module('vaBlog',['ngRoute'])
 .filter('datert',function(){
     return function(date)
     {
         return new Date(date);
     }
 });
