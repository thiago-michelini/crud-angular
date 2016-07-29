'use strict';

angular.
	module('crudAngularApp').
	config(['$locationProvider', '$routeProvider',
		function config($locationProvider, $routeProvider) {
			$locationProvider.hashPrefix('!');

			$routeProvider.
				when('/usuario', {
					template: '<usuario-lista></usuario-lista>'
				}).
				otherwise('/usuario');
		}
	]);