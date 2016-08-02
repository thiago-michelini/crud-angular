angular.
  module('usuarioDetalhe').
  component('usuarioDetalhe', {
    //template: 'TBD: Detail view for <span>{{$ctrl.phoneId}}</span>',
    templateUrl: 'usuario-detalhe/usuario-detalhe.template.html',
    controller: ['$routeParams', '$http',
      function UsuarioDetalheController($routeParams, $http) {
        var self = this;
        self.usuarioId = $routeParams.usuarioId;

        self.usuarioModel = {};

        if (self.usuarioId != -1) {
          $http
            .get('http://localhost:8080/rest-API/usuario?id=' + self.usuarioId)
            .then(function(response) {
              self.usuarioModel = response.data[0];
          });
        }

        self.gravar = function gravar() {
          httpMethod = (self.usuarioModel.CODIGO != null) ? 'PUT' : 'POST';
          $http({
            method: httpMethod,
            url: 'http://localhost:8080/rest-API/usuario',
            data: self.usuarioModel
          })
          .success(function(response) {
            self.usuarioModel.CODIGO = response.CODIGO;
            window.location = '#!/usuario';
          })
          .error(function(erro) {
            alert('erro: ' + erro);
          })
        }
      }
    ]
  });
/*xmlhttp = new XMLHttpRequest();
xmlhttp.open(
    "POST",
    "http://localhost:8080/rest-API/usuario",
    true
  );
xmlhttp.onreadystatechange = function() {
    console.log(xmlhttp.readyState+' | '+xmlhttp.status);
  }
xmlhttp.setRequestHeader('Content-Type','application/json');
xmlhttp.send('{teste:"123"}');*/