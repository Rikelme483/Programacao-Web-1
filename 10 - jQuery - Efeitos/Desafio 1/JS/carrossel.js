$(document).ready(function(){

    $("#slider li:first").fadeIn(1000);

   window.setInterval("carrossel()",7000);

    
   $("#botao1").click(function(){
    
    var ativo = $("#slider .ativo");

    if($(ativo.prev()).length){
        var anterior = ativo.prev();
    } else {
        var anterior = $("#slider li:last");
    }
        anterior.addClass("ativo").fadeIn(1000);
        ativo.removeClass("ativo").fadeOut(1000);

   })

   $("#botao2").click(function(){
    var ativo = $("#slider .ativo");

    if ($(ativo.next()).length) {
        var proximo = ativo.next();
    } else {
        var proximo = $("#slider li:first");
    }

    proximo.addClass("ativo").fadeIn(1000);

    ativo.removeClass("ativo").fadeOut(1000);
   })

});

function carrossel(){

    var ativo = $("#slider .ativo");

    if ($(ativo.next()).length) {
        var proximo = ativo.next();
    } else {
        var proximo = $("#slider li:first");
    }

    proximo.addClass("ativo").fadeIn(2000);

    ativo.removeClass("ativo").fadeOut(2000);
}

