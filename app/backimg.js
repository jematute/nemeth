angular.module('app').directive('backImg', function(){
    return function(scope, element, attrs){
        var url = attrs.backImg;
        element.css({
            'background': 'linear-gradient(rgba(0,0,0,.4), rgba(0,0,0,.4)), url(' + url +')',
            'background-size' : 'cover'
        });
    };
});