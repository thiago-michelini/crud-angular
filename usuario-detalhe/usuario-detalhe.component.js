angular.
  module('usuarioDetalhe').
  component('usuarioDetalhe', {
    //template: 'TBD: Detail view for <span>{{$ctrl.phoneId}}</span>',
    templateUrl: 'usuario-detalhe/usuario-detalhe.template.html',
    controller: ['$routeParams', '$http',
      function UsuarioDetalheController($routeParams, $http) {
        this.usuarioId = $routeParams.usuarioId;
        if (this.usuarioId != -1) {
          $http.get('phones/phones.json').then(function(response) {
            self.usuarioModel = response.data;
          });
        }
      }
    ]
  });