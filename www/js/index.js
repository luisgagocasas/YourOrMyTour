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
    }), $("#personaID").on("change", function() {
        var cantidad = $("#personaID").val(), dolares = $("#valorDolares").attr("data-dolares"), soles = $("#valorSoles").attr("data-soles");
        $("#valorDolares").text("$" + cantidad * dolares), $("#valorSoles").text("S/. " + cantidad * soles);
    });
});