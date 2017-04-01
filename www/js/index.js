$(document).ready(function() {
    function validate1(formData, jqForm, options) {
        var nombreValue = $("input[name=nombre]").fieldValue(), correoValue = $("input[name=correo]").fieldValue();
        if (!nombreValue[0] || !correoValue[0]) return alert("Es requerido los campos Nombre y Correo"), 
        !1;
        $("#mensaje-stado").show();
    }
    function validate2(formData, jqForm, options) {
        var nombreValue = $("input[name=nombre]").fieldValue(), correoValue = $("input[name=correo]").fieldValue();
        $("input[name=dni]").fieldValue();
        if (!nombreValue[0] || !correoValue[0]) return alert("Es requerido los campos Nombre, Correo y DNI"), 
        !1;
        $("#mensaje-stado").show();
    }
    $("#personaID").on("change", function() {
        var cantidad = $("#personaID").val(), dolares = $("#valorDolares").attr("data-dolares"), soles = $("#valorSoles").attr("data-soles"), valFinalDolares = "$ " + cantidad * dolares, valFinalSoles = "S/. " + cantidad * soles;
        $("[name=dolares]").val(valFinalDolares), $("[name=soles]").val(valFinalSoles), 
        $("#valorDolares").text(valFinalDolares), $("#valorSoles").text(valFinalSoles);
    }), $("#paquete").ajaxForm({
        beforeSubmit: validate2,
        success: function() {
            console.log("enviando"), $("#paquete")[0].reset(), $("#mensaje-stado .form-mensaje-text").text("Mensaje Enviado :)"), 
            setTimeout(function() {
                $("#mensaje-stado").hide();
            }, 3e3);
        }
    }), $("#escribenos").ajaxForm({
        beforeSubmit: validate1,
        success: function() {
            $("#escribenos")[0].reset(), $("#mensaje-stado .form-mensaje-text").text("Mensaje Enviado :)"), 
            setTimeout(function() {
                $("#mensaje-stado").hide();
            }, 3e3);
        }
    });
});