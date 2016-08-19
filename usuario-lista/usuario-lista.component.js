angular.
  module('usuarioLista').
  component('usuarioLista', {
    templateUrl: 'usuario-lista/usuario-lista.template.html',
    controller: ['$http','$location',
      function UsuarioListaController($http, $location) {
        var self = this;
        //self.orderProp = 'age';
        //self.tx_filtro = 'lalala 123';

        self.loadInicial = function() {
          $http.get(URL_RESOURCE_USUARIO + '?nocache=' + new Date().getTime()).success(function(response) {
            self.dados = response;
          });
        }

        self.loadInicial();

        self.excluir = function excluir(codigo) {
          $http({
            method: 'DELETE',
            url: URL_RESOURCE_USUARIO,
            data: {CODIGO: codigo},
            headers: {
              'Content-Type': 'application/json'
            }
          })
          .success(function(response) {
            self.loadInicial();
          })
          .error(function(erro) {
            alert('erro: ' + erro);
          })
        }

        self.novo = function() {
          window.location = '#!/usuario/-1';
        }

        self.editar = function(codigo) {
          window.location = '#!/usuario/' + codigo;
          //$location.url('#!/usuario/' + codigo);
        }
      }
    ]
  });