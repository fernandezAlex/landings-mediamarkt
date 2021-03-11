
var validarCompania = function () {
    var compania_input = $("#company"),
        compania_value = $("#company").val();
    // if ( compania_value == null || compania_value == "" ) {
    if ( compania_value == null || compania_value == "" || /^[a-zA-Z Ã¡Ã Ã©Ã¨Ã­Ã²Ã³ÃºÃ±Ã¼Ã¯Ã§ÃÃ€Ã‰ÃˆÃÃ’Ã“ÃšÃ‘ÃœÃÃ‡.-]*$/.test(compania_value) == false ) {
        $("<div class='form-error'>Introduce un nombre vÃ¡lido</div>").insertAfter( compania_input );
        compania_input.addClass( "input-error" );
        return false;
    }
    else {
        compania_input.removeClass( "input-error" );
        return true;
    };
};
 
var validarContacto = function() {
    var contacto_input = $( "#contact" ),
        contacto_value = $( "#contact" ).val();
    if ( contacto_value == null || contacto_value == "" || /^[a-zA-Z Ã¡Ã Ã©Ã¨Ã­Ã²Ã³ÃºÃ±Ã¼Ã¯Ã§ÃÃ€Ã‰ÃˆÃÃ’Ã“ÃšÃ‘ÃœÃÃ‡ .-]*$/.test(contacto_value) == false ) {
        $( "<div class='form-error'>Introduce un nombre vÃ¡lido</div>" ).insertAfter( contacto_input );
        contacto_input.addClass( "input-error" );
        return false;
    }
    else {
        contacto_input.removeClass( "input-error" );
        return true;
    };
};
 
var validarCargo = function() {
    var cargo_input = $( "#position" ),
        cargo_value = $( "#position" ).val();
    if ( cargo_value == null || cargo_value == "" || /^[a-zA-Z Ã¡Ã Ã©Ã¨Ã­Ã²Ã³ÃºÃ±Ã¼Ã¯Ã§ÃÃ€Ã‰ÃˆÃÃ’Ã“ÃšÃ‘ÃœÃÃ‡ .-]*$/.test(cargo_value) == false ) {
        $( "<div class='form-error'>Introduce un cargo vÃ¡lido</div>" ).insertAfter( cargo_input );
        cargo_input.addClass( "input-error" );
        return false;
    }
    else {
        cargo_input.removeClass( "input-error" );
        return true;
    };
};
 
var validarTelefono = function() {
    var telefono_input = $( "#phone" ),
        telefono_value = $( "#phone" ).val(),
        format = /^([0-9]+){9}$/;
    if ( telefono_value == null || telefono_value == "" || format.test( telefono_value ) == false ) {
        $( "<div class='form-error'>Introduce un telÃ©fono vÃ¡lido</div>" ).insertAfter( telefono_input );
        telefono_input.addClass( "input-error" );
        return false;
    }
    else {
        telefono_input.removeClass( "input-error" );
        return true;
    };
};
 
var validarEmail = function (){
    var email_input = $( "#email" ),
        email_value = $( "#email" ).val(),
        format = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if ( email_value == null || email_value == "" || format.test( email_value ) == false ) {
        $( "<div class='form-error'>Introduce un email vÃ¡lido</div>" ).insertAfter( email_input );
        email_input.addClass( "input-error" );
        return false;
    }
    else {
        email_input.removeClass( "input-error" );
        return true;
    };
};
 
var validarNIF = function() {
    var nif_input = $( "#nif" ),
        nif_value = $( "#nif" ).val(),
        validacion = ValidateSpanishID(nif_value),
        tipo = '';
    // console.info(validacion);
    if (validacion.valid) {
        tipo = validacion.type;
        nif_input.removeClass( "input-error" );
        return true;
    } else {
        tipo = 'nÃºmero de documento';
        // tipo = tipo.toUpperCase();
        $("<div class='form-error'>Introduce un nÃºmero de documento vÃ¡lido</div>").insertAfter(nif_input);
        nif_input.addClass("input-error");
        return false;
    }
}
 
var validarNewsletter = function (news) {
    var newsletter_value = document.getElementById(news).checked;
 
    if (newsletter_value == true) {
 
        var correo = document.getElementById("email").value;
 
        $.post("https://specials.mediamarkt.es/tools/emarsys/index.php/es/customers",
            {
                email: correo
            },
            function (data, status) {
                $.post("https://specials.mediamarkt.es/tools/emarsys/index.php/es/events/1368/trigger",
                    {
                        uid: data.uid
                    },
                    function (data2, status2) {
 
                    });
            });
 
    }
    return true;
}
 
var validarLegal = function (terms, error) {
 
    var suscripcion_value = document.getElementById(terms).checked;
    var suscripcion_input = document.getElementById(terms);
    if ($(suscripcion_input).siblings('.form-error')) {
        $(suscripcion_input).siblings('.form-error').remove();
    }
 
    if (suscripcion_value == false) {
        var message = document.createElement('div');
        message.className = 'form-error';
        message.innerHTML = error;
        suscripcion_input.parentNode.appendChild(message);
        suscripcion_input.classList.add("input-error");
 
        return false;
    }
    else {
        return true;
    }
};
 
 
 
   
// Captcha
 
function validarCaptcha(form)
{
    var v = grecaptcha.getResponse();
    var captchaInput = $("#rcaptcha textarea");
 
    if(v.length == 0)
    {
        $( "<div id='errorCaptcha' class='form-error'>Debes aceptar la validaciÃ³n reCaptcha</div>" ).insertAfter(captchaInput);
        captchaInput.addClass( "input-error" );
        return false;
    }
    else
    {   var errorCaptcha = $('#errorCaptcha');
        errorCaptcha.remove();
        return true;
    }
}   
 
// ValidaciÃ³n del formulario
var validarFormulario = function() {
    $( ".form-error" ).remove();
    return (
        validarCompania() &
        validarNIF() &
        validarContacto() &
        validarCargo() &
        validarTelefono() &
        validarEmail() &
        validarLegal('tlegal-terms', 'Debes aceptar la polÃ­tica de privacidad')&
        validarCaptcha());
        // validarNewsletter('subscription') &
};
 
/**
* ValidateSpanishID. Returns the type of document and checks its validity.
*
 * Usage:
*     ValidateSpanishID( str );
*
 *     > ValidateSpanishID( '12345678Z' );
*     // { type: 'dni', valid: true }
*    
 *     > ValidateSpanishID( 'B83375575' );
*     // { type: 'cif', valid: false }
*
 * The algorithm is adapted from other solutions found at:
* - http://www.compartecodigo.com/javascript/validar-nif-cif-nie-segun-ley-vigente-31.html
* - http://es.wikipedia.org/wiki/C%C3%B3digo_de_identificaci%C3%B3n_fiscal
*/
 
ValidateSpanishID = (function () {
    'use strict';
 
    var DNI_REGEX = /^(\d{8})([A-Z])$/;
    var CIF_REGEX = /^([ABCDEFGHJKLMNPQRSUVW])(\d{7})([0-9A-J])$/;
    var NIE_REGEX = /^[XYZ]\d{7,8}[A-Z]$/;
 
    var ValidateSpanishID = function (str) {
 
        // Ensure upcase and remove whitespace
        str = str.toUpperCase().replace(/\s/, '');
 
        var valid = false;
        var type = spainIdType(str);
 
        switch (type) {
            case 'dni':
                valid = validDNI(str);
                break;
            case 'nie':
                valid = validNIE(str);
                break;
            case 'cif':
                valid = validCIF(str);
                break;
        }
 
        return {
            type: type,
            valid: valid
        };
 
    };
 
    var spainIdType = function (str) {
        if (str.match(DNI_REGEX)) {
            return 'dni';
        }
        if (str.match(CIF_REGEX)) {
            return 'cif';
        }
        if (str.match(NIE_REGEX)) {
            return 'nie';
        }
    };
 
    var validDNI = function (dni) {
        var dni_letters = "TRWAGMYFPDXBNJZSQVHLCKE";
        var letter = dni_letters.charAt(parseInt(dni, 10) % 23);
 
        return letter == dni.charAt(8);
    };
 
    var validNIE = function (nie) {
 
        // Change the initial letter for the corresponding number and validate as DNI
        var nie_prefix = nie.charAt(0);
 
        switch (nie_prefix) {
            case 'X':
                nie_prefix = 0;
                break;
            case 'Y':
                nie_prefix = 1;
                break;
            case 'Z':
                nie_prefix = 2;
                break;
        }
 
        return validDNI(nie_prefix + nie.substr(1));
 
    };
 
    var validCIF = function (cif) {
 
        var match = cif.match(CIF_REGEX);
        // console.log('match= '+match);
        var letter = match[1],
            number = match[2],
            control = match[3];
            console.log('control=  '+control);
 
        var even_sum = 0;
        var odd_sum = 0;
        var n;
 
        for (var i = 0; i < number.length; i++) {
            n = parseInt(number[i], 10);
 
            // Odd positions (Even index equals to odd position. i=0 equals first position)
            if (i % 2 === 0) {
                // Odd positions are multiplied first.
                n *= 2;
 
                // If the multiplication is bigger than 10 we need to adjust
                odd_sum += n < 10 ? n : n - 9;
 
                // Even positions
                // Just sum them
            } else {
                even_sum += n;
            }
 
        }
 
        var control_digit = (10 - (even_sum + odd_sum).toString().substr(-1));
        // console.log('controldigit '+control_digit +' even_sum = '+even_sum+' odd_sum='+odd_sum);
 
        if(control_digit== "10"){
            control_letter = "J";
            // console.log('control_letter '+control_letter);
        }else{
            var control_letter = 'JABCDEFGHI'.substr(control_digit, 1);
            // console.log('control_letter '+control_letter);
        }
 
        // Control must be a digit
        if (letter.match(/[ABEH]/)) {
            return control == control_digit;
            // Control must be a letter
        } else if (letter.match(/[KPQSJ]/)) {
            return control == control_letter;
            // Can be either
        } else {
            return control == control_digit || control == control_letter;
        }
 
    };
 
    return ValidateSpanishID;
})();
 
$(document).ready(function () {
    // Add smooth scrolling to all links
    // $("a").on('click', function (event) {
    $("absoluteButton div a").on('click', function (event) {
 
        // Make sure this.hash has a value before overriding default behavior
        // if (this.hash !== "") {
            // console.info(this.hash);
        if (this.hash !== "" && this.hash == "#contacto") {
            // console.log("hash = " + this.hash);
            // Prevent default anchor click behavior
            event.preventDefault();
 
            // Store hash
            var hashh = this.hash;
 
            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hashh).offset().top
            }, 1500, function () {
 
                // Add hash (#) to URL when done scrolling (default click behavior)
                // window.location.hash = hashh;
            });
        } // End if
    });
});