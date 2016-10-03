var cont = 0;
var ini, fin;
$(document).ready(function () {
    $("#btnVer").on('click', function () {
        cont++;
        ini = (cont - 1) * 5;
        fin = cont * 5;
        $("#resultado1").html("");
        $.getJSON("http://pymesv.com/datos05w/gamestoreapi/productos/lista").done(function (datos_del_ws) {
            $.each($(datos_del_ws).slice(ini, fin), function (indice, valor) {
                var apendice = '<img src="http://pymesv.com/datos05w/' + valor.imagen + '"></br><a href="#page3"  id="btnproducto' + indice + '" onClick="opena(' + indice + ');" class="ui-link ui-btn ui-shadow ui-corner-all" data-role="button">Ver</a></br>';
                $("#resultado1").append(apendice);
            })
            document.getElementById("btnMas").href="#"; 
        });
        $("#btnMas").html('Ver mas');
    });
    $("#btnMas").on('click', function () {
        cont++;
        ini = (cont - 1) * 5;
        fin = cont * 5;
        if (cont < 4) {
            $("#resultado1").html("");
            $.getJSON("http://pymesv.com/datos05w/gamestoreapi/productos/lista").done(function (datos_del_ws) {
                $.each($(datos_del_ws).slice(ini, fin), function (indice, valor) {
                    var apendice1 = '<img src="http://pymesv.com/datos05w/' + valor.imagen + '"></br><a href="#page3"  id="btnproducto' + indice + '" onClick="opena(' + indice + ');" class="ui-link ui-btn ui-shadow ui-corner-all" data-role="button">Ver</a></br>';
                    $("#resultado1").append(apendice1);
                })
            });
            $("#btnMas").html('Ver mas');
        }
        else {
            $("#resultado1").html("");
            $.getJSON("http://pymesv.com/datos05w/gamestoreapi/productos/lista").done(function (datos_del_ws) {
                $.each($(datos_del_ws).slice(ini, fin), function (indice, valor) {
                    var apendice1 = '<img src="http://pymesv.com/datos05w/' + valor.imagen + '"></br><a href="#page3"  id="btnproducto' + indice + '" onClick="opena(' + indice + ');" class="ui-link ui-btn ui-shadow ui-corner-all" data-role="button">Ver</a></br>';
                    $("#resultado1").append(apendice1);
                })
                $("#resultado1").append("<h3>No hay mas elementos que mostrar</h3>");
                document.getElementById("btnMas").href="#page1"; 
            });
            $("#btnMas").html('Regresar');
            cont = -1;
        }

    });
    $("#btnProductos").on('click', function () {
        $.getJSON("http://pymesv.com/datos05w/gamestoreapi/productos/lista").done(function (datos_del_ws) {
            $.each(datos_del_ws, function (indice, valor) {
                $("#resultado1").append("<li>" + valor.nombre + "</li>");
            });
        });
    });
});
function opena(algo) {
    var temp = (parseInt(algo) + 1) + ((cont - 1) * 5);
    var dir = "http://pymesv.com/datos05w/gamestoreapi/productos/" + temp + "/";
    $.getJSON(dir).done(function (datos_del_ws) {
        $.each(datos_del_ws, function (indice, valor) {
            $("#resultado2").html("");
            $("#resultado2").append("<h2>" + valor.nombre + "</h2>");
            $('#resultado2').append("<h3>" + valor.precio + "</h3>");
            $("#resultado2").append("</br><img src='http://pymesv.com/datos05w/" + valor.imagen + "'>");
            $("#resultado2").append("</br>" + valor.descripcion + "</br>");
            $("#resultado2").append("<a href='#page2' class='ui-link ui-btn ui-shadow ui-corner-all' style='color:red'>Regresar </a>");
        });
    });
}
function validar(usuario, pass){
    alert(usuario + pass);
    var dir = "http://pymesv.com/datos05w/gamestoreapi/productos/" + temp + "/";
}