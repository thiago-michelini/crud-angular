angular.
  module('usuarioLista').
  component('usuarioLista', {
    templateUrl: 'usuario-lista/usuario-lista.template.html',
    controller: ['$http','$location',
      function UsuarioListaController($http, $location) {
        var self = this;
        self.orderProp = 'age';
        self.tx_teste = 'lalala 123';

        /*$http.get('phones/phones.json').then(function(response) {
          self.phones = response.data;
        });*/

        self.paginaDetalheUsuario = function() {
          window.location = '#!/usuario/-2';
        }
      }
    ]
  });