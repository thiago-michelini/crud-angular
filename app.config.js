'use strict';

var NOME_APLICACAO = 'CRUD Angular com Microservice';
var urlBasePortal = window.location.protocol + '//' + window.location.host + '/portal';

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
    var urlLogin = urlBasePortal + '?redirect=' + window.location.protocol + '//' + window.location.host + '/crud-angular';
    window.location = urlLogin;
  }
}

$(function(){
  //insere o JS que monta o Header de aplicacoes, que serah comum para todas as APPS
  $('<script src="' + urlBasePortal + '/js/header-apps.js"></script>').insertAfter($('#app-config-js'));
});