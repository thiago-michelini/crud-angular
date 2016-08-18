'use strict';

var NOME_APLICACAO = 'CRUD Angular com Microservice';
var urlBasePortal = window.location.protocol + '//' + window.location.host + '/portal';
var dadosSessao = null;
var timeoutSessao = null;

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

function checarSessaoUsuario() {
  if (!localStorage.getItem('tnd-user-session')) {
    redirecionarParaLogin();
  } else {
    dadosSessao = JSON.parse(localStorage.getItem('tnd-user-session'));
    if (!timeoutSessao)
      timeoutSessao = setTimeout(function() {
        localStorage.removeItem('tnd-user-session');
        alert('Sua sessão expirou, favor realizar novo login!');
        redirecionarParaLogin();
      }, dadosSessao.minutosSessao * 60000);
  }
}

function redirecionarParaLogin() {
  var urlLogin = urlBasePortal + '?redirect=' + window.location.protocol + '//' + window.location.host + '/crud-angular';
  window.location = urlLogin;
}

$(function(){
  //insere o JS que monta o Header de aplicacoes, que serah comum para todas as APPS
  $('<script src="' + urlBasePortal + '/js/header-apps.js"></script>').insertAfter($('#app-config-js'));
  setTimeout(inserirBotaoCustomizadoNoHeader, 5000);
});

function reloadComponentesMaterializeCSS() {
    Materialize.updateTextFields();
    $('select').material_select();
}

function inserirBotaoCustomizadoNoHeader() {
  var areaHeaderLogo = $('.header-apps-logo');
  $(areaHeaderLogo).css('width', '46.8%');
  $('<div style="width:2.8%;background:red;float:left;height:100%;cursor:pointer">a</div>').insertAfter($(areaHeaderLogo));
  $('<div style="width:2.8%;background:blue;float:left;height:100%;cursor:pointer">b</div>').insertAfter($(areaHeaderLogo));
  $('<div style="width:2.8%;background:green;float:left;height:100%;cursor:pointer">c</div>').insertAfter($(areaHeaderLogo));
}