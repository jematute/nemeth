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