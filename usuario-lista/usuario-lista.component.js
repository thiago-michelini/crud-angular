angular.
  module('usuarioLista').
  component('usuarioLista', {
    templateUrl: 'usuario-lista/usuario-lista.template.html',
    controller: ['$http','$location',
      function UsuarioListaController($http, $location) {
        var self = this;
        self.orderProp = 'age';
        self.tx_teste = 'lalala 123';

        $http.get('http://localhost:8080/rest-API/usuario').then(function(response) {
          self.dados = response.data;
        });

        self.paginaDetalheUsuario = function() {
          window.location = '#!/usuario/-2';
        }
      }
    ]
  });