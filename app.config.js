'use strict';

var NOME_APLICACAO = 'CRUD Angular com Microservice';

var loc = window.location;

angular.
  module('crudUsuarioApp').
  config(['$locationProvider', '$routeProvider',
    function config($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');

      $routeProvider.
        when('/usuario', {
          resolve: {"check":function(){checarSessaoUsuario()}},
          template: '<usuario-lista></usuario-lista>'
        }).
        when('/usuario/:usuarioId', {
          resolve: {"check":function(){checarSessaoUsuario()}},
          template: '<usuario-detalhe></usuario-detalhe>'
        }).
        otherwise('/usuario');
    }
  ]);

function checarSessaoUsuario() {
  if (!localStorage.getItem('tnd-user-session')) {
    var urlLogin = loc.protocol + '//' + loc.host + '/portal?redirect=' + loc.protocol + '//' + loc.host + '/crud-angular';
    window.location = urlLogin;
  }
}

$(function(){
  $('<script src="' + loc.protocol + '//' + loc.host + '/portal/js/header-apps.js"></script>').insertAfter($('#app-config-js'));
});