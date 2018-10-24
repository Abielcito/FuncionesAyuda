$('.letters_only').keyup(function () {
    this.value = this.value.replace(/[^0-9a-zA-Z\_\-\.\,\/]/g, '');
});

//VALIDA CARACTERES Y PERMITE ESPACIOS
$('.letters_space').keyup(function () {
    this.value = this.value.replace(/[^0-9a-zA-Z\_\-\.\,\/\ ]/g, '');
});

//VALIDA CARACTERES Y PERMITE ESPACIOS
$('.letters_space_oc').keyup(function () {
    this.value = this.value.replace(/[^0-9a-zA-Z\_\-\.\,\/\&\ ]/g, '');
});

//VALIDA SOLO NUMEROS EN UN CAMPO
$('.numeros').keyup(function () {
    this.value = this.value.replace(/[^0-9]/g, '');
});

//VALIDAR CORREO
function isValidEmail(emailText) {
    var pattern = new RegExp(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i);
    return pattern.test(emailText);
}//FIN FUNCION isValidEmail


function disabledTrue(BOTON) {
    BOTON.prop("disabled", true);
    BOTON.addClass("disabled");
}//FIN FUNCION disabledTrue

function disabledFalse(BOTON) {
    BOTON.prop("disabled", false);
    BOTON.removeClass("disabled");
}//FIN FUNCION disabledFalse

function addClass(BOTON) {
    BOTON.prop("disabled", true);
}//FIN FUNCION disabledTrue

function openModalWindow(idTag) {
    $('#' + idTag).modal('show');
}//FIN FUNCION openModalWindow


function hideModalWindow(idTag) {
    $('#' + idTag).modal('hide');
}//FIN FUNCION openModalWindow

//-------------------VERBO GET--------------------------------------------------
//SOLICITUD ESTANDAR AJAX VERBO GET
function requestGetApi(url, jsonData) {
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": BASE_URL_API + url,
        "method": "GET",
        "data": jsonData
    };
    return $.ajax(settings);
}//FIN FUNCION requestGetApiRoute
//------------------------------------------------------------------------------


//-------------------VERBO POST-------------------------------------------------
//SOLICITUD ESTANDAR AJAX VERBO POST
function requestPostApi(url, jsonData, cabecera) {
    var cabecera = cabecera || false;

    var settings = {
        "async": true,
        "crossDomain": true,
        "url": BASE_URL_API + url,
        "method": "POST",
        "data": jsonData
    };

    if (cabecera) {
        settings.headers = {"content-type": "application/json"};
    }

    return $.ajax(settings);
}//FIN FUNCION requestPostApiRoute
//------------------------------------------------------------------------------


//-------------------VERBO PUT--------------------------------------------------
//SOLICITUD ESTANDAR AJAX VERBO PUT
function requestPutApi(url, jsonData, cabecera) {
    var cabecera = cabecera || false;

    var settings = {
        "async": true,
        "crossDomain": true,
        "url": BASE_URL_API + url,
        "method": "PUT",
        "data": jsonData
    };
    if (cabecera) {
        settings.headers = {"content-type": "application/json"};
    }

    return $.ajax(settings);
}//FIN FUNCION requestPutApiRoute
//------------------------------------------------------------------------------


//-------------------VERBO DELETE-----------------------------------------------
//SOLICITUD ESTANDAR AJAX VERBO DELETE
function requestDeleteApi(url, jsonData) {
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": BASE_URL_API + url,
        "method": "DELETE",
        "data": jsonData
    };
    return $.ajax(settings);
}//FIN FUNCION requestDeleteApiRoute
//------------------------------------------------------------------------------


//USO
/*requestGetApi(url, dataJson).done(function (response) {
        
}).fail(function (response) {

});*/

function playSoundException() {
    new Audio(BASE_URL + 'sounds/sound1.wav').play();
}//FIN FUNCION playSoundException