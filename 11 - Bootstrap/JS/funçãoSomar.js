$(document).ready(function(){
    $("#btSoma").click(function(){
    let num1 = parseFloat($("#num1").val());
    let num2 = parseFloat($("#num2").val());

    let soma = (num1 + num2);

    $("#resultado").text("Resultado da Soma: " + soma + "!");
    $("#resultado").fadeIn(1000);
    })
});