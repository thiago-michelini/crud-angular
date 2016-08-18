'use strict';

angular.
  module('crudUsuarioApp').
  config(['$locationProvider', '$routeProvider',
    function config($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');

      $routeProvider.
        when('/usuario', {
          resolve: {check:checarSessaoUsuario},
          template: '<usuario-lista></usuario-lista>'
        }).
        when('/usuario/:usuarioId', {
          resolve: {check:checarSessaoUsuario},
          template: '<usuario-detalhe></usuario-detalhe>'
        }).
        otherwise('/usuario');
    }
  ]);