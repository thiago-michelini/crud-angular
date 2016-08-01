'use strict';

angular.
  module('crudUsuarioApp').
  config(['$locationProvider', '$routeProvider',
    function config($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');

      $routeProvider.
        when('/usuario', {
          template: '<usuario-lista></usuario-lista>'
        }).
        //when('/phones/:phoneId', {
        when('/usuario/:usuarioId', {
          template: '<usuario-detalhe></usuario-detalhe>'
        }).
        otherwise('/usuario');
    }
  ]);