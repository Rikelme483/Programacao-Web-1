$(document).ready(function(){

    $("#btSoma").click(function(){
        soma();
    });
    $("#btSubt").click(function(){      //quando o documento estiver pronto, chama as funções
        subtrair();
    });
    $("#btMult").click(function(){
        multiplicar();
    });
    $("#btDiv").click(function(){
        dividir();
    });
})


function soma(){
    let num1 = parseFloat($("#num1").val());
    let num2 = parseFloat($("#num2").val());

    let soma = (num1 + num2);

    $("#resultado").text("Resultado do cálculo é: " + soma + "!");
    $("#resultado").fadeIn(1000);
}

function subtrair(){
    let num1 = parseFloat($("#num1").val());
    let num2 = parseFloat($("#num2").val());

    let subt = (num1 - num2);

    $("#resultado").text("Resultado do cálculo é: " + subt + "!");          //cada função afetará cada botão e efetuará os devidos calculos
    $("#resultado").fadeIn(1000);
}

function multiplicar(){
    let num1 = parseFloat($("#num1").val());
    let num2 = parseFloat($("#num2").val());

    let mult = (num1 * num2);

    $("#resultado").text("Resultado do cálculo é: " + mult + "!");
    $("#resultado").fadeIn(1000);
}

function dividir(){
    let num1 = parseFloat($("#num1").val());
    let num2 = parseFloat($("#num2").val());

    let div = (num1 / num2);

    if (num2 == 0) { // se o que foi digitado em num2 for 0, executa o if
        $("#resultado .alert-info").removeClass("alert-info"); //removeClass para retirar a classe alert-info
        $("#resultado").addClass("alert-danger"); // addClass pra adicionar a classe alert-danger e mudar a cor da div
        $("#resultado ").text("Não existe número divisível por 0!!!");
        $("#resultado").fadeIn(1000);
    } else {
        $("#resultado").text("Resultado do cálculo é: " + div.toFixed(2) + "!");
        $("#resultado").fadeIn(1000);
    }
}