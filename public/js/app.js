var app = angular.module("app", ['ngAnimate']);

angular.module('app').directive("autoHeight", function ($window) {
	// body...
	return {
		restrict: "A",
		scope: {
			
		},
		link: function (scope, ele, att) {
			// body...
			var element = ele;
			
			var setSize = function () {
				// body...
				element.css('height', ($window.innerHeight)+"px");
				element.css('padding-top', ($window.innerHeight/2)-100+'px');
			}
					
			angular.element($window).bind('resize', function (e) {
				// body...
				setSize();
				scope.$apply();
			});
			
			setSize();
			
		}
	}
});
angular.module('app').directive('backImg', function(){
    return function(scope, element, attrs){
        var url = attrs.backImg;
        element.css({
            'background': 'linear-gradient(rgba(0,0,0,.4), rgba(0,0,0,.4)), url(' + url +')',
            'background-size' : 'cover'
        });
    };
});
angular.module('app').controller("mainCtrl", ['$scope', '$timeout', function ($scope, $timeout) {
	// body...
	$scope.slides = [{
		image: '/img/_mg_1705.jpg',
	}, {
		image: '/img/_mg_1669.jpg'
	}, {
		image: '/img/_mg_1705.jpg'
	}, {
		image: '/img/_mg_1645.jpg'
	}, {
		image: '/img/_mg_1710.jpg'
	}, {
		image: '/img/_mg_1728.jpg'
	}, {
		image: '/img/_mg_1668_1024.jpg'
	}]
	
	$scope.currentSlide = 0;
	
	$scope.setCurrentSlideIndex = function (index) {
		// body...
		$scope.currentSlide = index;
	}
	$scope.message = "This is a message from angular";
	$scope.changeSlide = function (direction) {
		// body...
		$timeout.cancel(timeOutPromise);
		
		if ($scope.currentSlide + direction == -1) {
			$scope.currentSlide = $scope.slides.length - 1;
			return;
		}
		if ($scope.currentSlide + direction == $scope.slides.length) {
			$scope.currentSlide = 0;
			return;
		}
		
		$scope.currentSlide = $scope.currentSlide + direction;
		
	}
	
	var timeOutPromise = undefined;
	
	var nextSlide = function () {
		// body...
		timeOutPromise = $timeout(function () {
			// body...
			$scope.changeSlide(1);
			nextSlide();
		}, 10000)
	}
	
	nextSlide();
	
	
}]);