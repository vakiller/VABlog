//var Showdown = require('showdown');
angular.module("vaBlog").directive('markDown', function () {
    var converter = new showdown.Converter();
    return {
        restrict: 'E',
        link: function (scope, element, attrs) {
            var htmlText = converter.makeHtml(element.text());
            element.html(htmlText);
        }
    };

});