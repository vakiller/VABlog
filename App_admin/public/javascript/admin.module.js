angular.module('yesCMS',['ngRoute','ngSanitize'])
.filter('datert',function(){
    return function(date)
    {
        return new Date(date);
    }
})
.filter('markdown',function(){
    var converter = new showdown.Converter({tables:true});
    return converter.makeHtml;
});