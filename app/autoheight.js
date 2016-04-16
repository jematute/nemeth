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