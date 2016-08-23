var dadosSessao = null;
var timeoutSessao = null;

function checarSessaoUsuario() {
  // if (!localStorage.getItem('tnd-user-session')) {
  if (!getCookie('tnd-user-session')) {
    redirecionarParaLogin();
  } else {
    // dadosSessao = JSON.parse(localStorage.getItem('tnd-user-session'));
    dadosSessao = JSON.parse(getCookie('tnd-user-session'));
    if (!timeoutSessao)
      timeoutSessao = setTimeout(function() {
        // localStorage.removeItem('tnd-user-session');
        document.cookie = "tnd-user-session=; expires=Thu, 01 Jan 1970 00:00:00 UTC";
        alert('Sua sessão expirou, favor realizar novo login!');
        redirecionarParaLogin();
      }, dadosSessao.minutosSessao * 60000);
  }
}

function redirecionarParaLogin() {
  var urlLogin = URL_BASE_PORTAL + '?redirect=' + criarUrl('crud', '/crud-angular');
  window.location = urlLogin;
}

$(function(){
  //insere o JS que monta o Header de aplicacoes, que serah comum para todas as APPS
  $('<script src="' + URL_BASE_PORTAL + '/js/header-apps.js"></script>').insertAfter($('#app-config-js'));
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

/*function atribuirValorDeSelectsAoModel(self) {
	$("select").each(function() {
		var sel = $(this);
		var selectLabelSelecionado = $($(sel).parent()).find('li.selected span').html();

		$($(sel).find('option')).each(function() {
			if ($(this).html() == selectLabelSelecionado) {
				var ngModel = $(sel).attr('ng-model');
				ngModel = ngModel.replace("$ctrl.", "");

				var objsSelf = ngModel.split(".");

				var objSelf = objsSelf[0];
				objSelf = self[objSelf];

				var objToSet = objSelf[objsSelf[1]];

				var valueOption = Number($(this).val());

				if(isNaN(valueOption)){
					valueOption = $(this).val();
				}

				if(typeof objToSet == 'undefined'){
					//cria o atributo no objeto e seta o valor
					objSelf[objsSelf[1]] = valueOption;
				}else{
					objToSet = valueOption;
				}
			}
		});
	});
}*/

function getValorSelecionadoNoSelect(select) {
	var result = null;

	var selectLabelSelecionado = $($(select).parent()).find('li.active span').html();

	$($(select).find('option')).each(function() {
		if ($(this).html() == selectLabelSelecionado) {
			result = $(this).val();
			return false;//equivalente ao break
		}
	});

	return result;
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}