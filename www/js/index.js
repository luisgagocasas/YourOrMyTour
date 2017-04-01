$(document).ready(function() {
    $("#escribenos").ajaxForm(function() {
        var nombreValue = $("input[name=nombre]").fieldValue(), correoValue = $("input[name=correo]").fieldValue();
        if (!nombreValue[0] || !correoValue[0]) return alert("Es requerido los campos Nombre y Correo"), 
        !1;
        console.log("enviando"), $("#escribenos")[0].reset(), $("#mensaje-stado .form-mensaje-text").text("Mensaje Enviado :)"), 
        setTimeout(function() {
            $("#mensaje-stado").hide();
        }, 3e3);
    }), $("#enviarForm").on("click", function() {
        $("#mensaje-stado").show();
    });
});