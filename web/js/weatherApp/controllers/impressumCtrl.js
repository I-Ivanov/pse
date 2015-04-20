function ImpressumCtrl($scope, $routeParams, $location) {
	$scope.goToIndex = function() {
		$location.path('/');
	}
}