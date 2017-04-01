$(document).ready(function(){
    $('#escribenos').ajaxForm(function() {
        //Validacion
        var nombreValue = $('input[name=nombre]').fieldValue();
        var correoValue = $('input[name=correo]').fieldValue();
        if (!nombreValue[0] || !correoValue[0]) {
            alert('Es requerido los campos Nombre y Correo');
            return false;
        }
        else {
            console.log("enviando");
            $("#escribenos")[0].reset();
            $("#mensaje-stado .form-mensaje-text").text("Mensaje Enviado :)");
            setTimeout(function(){
                $("#mensaje-stado").hide();
            }, 3000);
        }
    });
    $("#enviarForm").on( "click", function() {
        $("#mensaje-stado").show();
    });
});