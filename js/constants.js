var NOME_APLICACAO = 'CRUD Angular com Microservice';
var URL_BASE_PORTAL = criarUrl('portal', '/portal');
var URL_RESOURCE_USUARIO = window.location.protocol + '//' + '192.168.41.65:8080/rest-API/usuario';

var ambientes = ['dev','int','sit','uat'];

function criarUrl(app, uri) {
	if (urlEhIp())//usuario estah usando ip para acesso a aplicacao
		return window.location.protocol + '//' + window.location.host + uri;
	
	//usuario estah usando DNS para acesso a aplicacao
	var amb = window.location.host;
	amb = amb.substring(0, amb.indexOf('.'));
	$(ambientes).each(function(i, v) {
		if (amb.indexOf(v) > -1) {
			app = app + '-' + v + '.';
		}
	});

	return window.location.protocol + '//' + app + obterDomain();
}

function urlEhIp() {
	var h = window.location.host;
	var ehIp = Number(h.substring(0, h.indexOf('.')));
    if (!isNaN(ehIp))
        return true;

    return false;
}

function obterDomain() {
    var result = window.location.host;
    var ehIp = Number(result.substring(0, result.indexOf('.')));
    if (!isNaN(ehIp))
        return result;

    result = result.substring(result.indexOf('.'), result.length);
    return result;
}