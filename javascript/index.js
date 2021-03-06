$(document).ready(function(){
    //Paquete personalizado
    $("#personaID").on( "change", function() {
        var cantidad = $("#personaID").val();
        var dolares = $("#valorDolares").attr("data-dolares");
        var soles = $("#valorSoles").attr("data-soles");
        var valFinalDolares = "$ " + cantidad * dolares;
        var valFinalSoles = "S/. " + cantidad * soles;
        
        $("[name=dolares]").val(valFinalDolares);
        $("[name=soles]").val(valFinalSoles);
        
        $("#valorDolares").text(valFinalDolares);
        $("#valorSoles").text(valFinalSoles);
    });
    
    function validate1(formData, jqForm, options) {
        var nombreValue = $('input[name=nombre]').fieldValue();
        var correoValue = $('input[name=correo]').fieldValue();
        if (!nombreValue[0] || !correoValue[0]) {
            alert('Es requerido los campos Nombre y Correo');
            return false;
        }
        else {
            $("#mensaje-stado").show();
        }
    }
    function validate2(formData, jqForm, options) {
        var nombreValue = $('input[name=nombre]').fieldValue();
        var correoValue = $('input[name=correo]').fieldValue();
        var dniValue = $('input[name=dni]').fieldValue();
        if (!nombreValue[0] || !correoValue[0]) {
            alert('Es requerido los campos Nombre, Correo y DNI');
            return false;
        }
        else {
            $("#mensaje-stado").show();
        }
    }
    
    $('#paquete').ajaxForm({
        beforeSubmit: validate2,
        success: function() {
            console.log("enviando");
            $("#paquete")[0].reset();
            $("#mensaje-stado .form-mensaje-text").text("Mensaje Enviado :)");
            setTimeout(function(){
                $("#mensaje-stado").hide();
            }, 3000);
        }
    });
    //Escribenos
    $('#escribenos').ajaxForm({
        beforeSubmit: validate1,
        success: function() {
            $("#escribenos")[0].reset();
            $("#mensaje-stado .form-mensaje-text").text("Mensaje Enviado :)");
            setTimeout(function(){
                $("#mensaje-stado").hide();
            }, 3000);
        }
    });
    $("#parteUno").show();
    $("#parteDos").hide();
    $("#parteTres").hide();
    var precioHotel = 0;
    var precioLugar = 0;
    var PrecioFinal = 0;
    $(".opcionCheck").on( "click", function() {
        $("#parteUno").hide();
        $("#parteDos").show();
        $("#parteTres").hide();
        precioHotel = $(this).attr("data-precio");
        console.log(precioHotel);
    });
    $(".opcionCheckLugar").on( "click", function() {
        precioLugar = $(this).attr("data-preciolugar");
        PrecioFinal = parseInt(precioLugar) + parseInt(precioHotel)
        $("#valorDolares").attr("data-dolares", PrecioFinal)
        $("#valorDolares").text("$ " + PrecioFinal)
        $("#parteUno").hide();
        $("#parteDos").hide();
        $("#parteTres").show();
        console.log(precioHotel);
    });
});