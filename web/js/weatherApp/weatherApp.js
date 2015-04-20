"use strict";


var weatherApp = angular.module('weatherApp', [
    'ngRoute'
]);

weatherApp.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: 'views/partials/cityWeather.html',
        controller: CityWeatherCtrl
    }).when('/impressum', {
        templateUrl: 'views/partials/impressum.html',
        controller: ImpressumCtrl
    }).otherwise({
        redirectTo: '/'
    });

}]);