$(document).ready(function(){

    $("#slide li:first").fadeIn(1000);

    window.setInterval("carrossel()" , 7000)

    $("nav li ul").hide().removeClass("sublista");

    $("nav li").hover(function(){
        $("ul" , this).stop().slideDown(500);
    }, function(){
        $("ul" , this).stop().slideUp(500);

    });

    $("#botao1").click(function(){
    
        var ativo = $("#slide .ativo");
    
        if($(ativo.prev()).length){
            var anterior = ativo.prev();
        } else {
            var anterior = $("#slide li:last");
        }
            anterior.addClass("ativo").fadeIn(1000);
            ativo.removeClass("ativo").fadeOut(1000);
    
       })
    
       $("#botao2").click(function(){
        var ativo = $("#slide .ativo");
    
        if ($(ativo.next()).length) {
            var proximo = ativo.next();
        } else {
            var proximo = $("#slide li:first");
        }
    
        proximo.addClass("ativo").fadeIn(1000);
    
        ativo.removeClass("ativo").fadeOut(1000);
       })

})

function carrossel(){
    let ativo = $("#slide .ativo");

    if ($(ativo.next()).length) {
        var proximo = ativo.next();
    } else {
        var proximo = $("#slide li:first");
    }

    proximo.addClass("ativo").fadeIn(2000);

    ativo.removeClass("ativo").fadeOut(2000);
}
