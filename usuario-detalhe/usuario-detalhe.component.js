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
        self.tiposUsuarios = {};

        $http({
          method: 'GET',
          url: URL_RESOURCE_USUARIO + '/get-tipos-usuario?nocache=' + new Date().getTime(),
          headers: {
            'Content-Type': 'application/json'
          }
        })
        .success(function(response) {
          self.tiposUsuarios = response;
          setTimeout(reloadComponentesMaterializeCSS, 300);
        })
        .error(function(erro) {
          alert('erro: ' + erro);
        });

        if (self.usuarioId != -1) {
          $http({
            method: 'GET',
            url: URL_RESOURCE_USUARIO + '?id=' + self.usuarioId + '&nocache=' + new Date().getTime(),
            headers: {
              'Content-Type': 'application/json'
            }
          })
          .success(function(response) {
            self.usuarioModel = response[0];
            setTimeout(reloadComponentesMaterializeCSS, 300);
          })
          .error(function(erro) {
            alert('erro: ' + erro);
          })
        }

        self.gravar = function gravar() {
          // atribuirValorDeSelectsAoModel(self);
          self.usuarioModel.tipoUsuario = getValorSelecionadoNoSelect($('#select1'));

          httpMethod = (self.usuarioModel.CODIGO != null) ? 'PUT' : 'POST';
          $http({
            method: httpMethod,
            url: URL_RESOURCE_USUARIO,
            data: self.usuarioModel
          }).success(function(response) {
            window.location = '#!/usuario';
          }).error(function(erro) {
            console.info('Erro: ',erro);
          });
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
xmlhttp.send('{teste:"123"}');
"A quantidade de OSs em aberto não pode ultrapassar a quantidade de Terminais permitidos no
 Estabelecimento do SGV"*/