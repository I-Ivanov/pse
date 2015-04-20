"use strict";

function CityWeatherCtrl($scope, $routeParams, $location, $http) {
	$scope.weatherInfo = [];

	$scope.search = function() {
		if ($scope.searchTerm.length > 0) {
			var url = 'http://api.openweathermap.org/data/2.5/weather';
	    	$http.jsonp(url, { params : {
		        "q" : $scope.searchTerm,
		        "units" : "metric",
		        "callback": 'JSON_CALLBACK'
		      }}).
	      	success(function(data, status, headers, config) {
	      		if (data.name) {
		      		var cityWeather = {
		      			"city":data.name,
		      			"temp":data.main.temp
		      		};
		      		$scope.weatherInfo.push(cityWeather);
		      		$scope.errorMsg = null;
	      		} else {
	      			$scope.errorMsg = data.message;
	      		}
	      	}).
			error(function(data, status, headers, config) {
				$scope.errorMsg = "Failed performing the request";
			});
		}
	}

	$scope.goToImpressum = function() {
		$location.path('/impressum');
	}

	$scope.searchTerm = "Darmstadt";
	$scope.search();
	$scope.searchTerm = null;
}
