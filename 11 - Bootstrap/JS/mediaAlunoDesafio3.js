$(document).ready(function(){

    $("#btMedia").click(function(){
        media();
    })
    $("#btReset").click(function(){
        reset();
    })
})


function media(){
    let nome = $("#nome").val();
    let n1 = parseFloat($("#num1").val());
    let n2 = parseFloat($("#num2").val());
    let n3 = parseFloat($("#num3").val());
    let n4 = parseFloat($("#num4").val());

    let media = (n1 + n2 + n3 + n4) / (4);

    let atual;

    if (media >= 7) {
        $("#resultado").hide();

        $("#resultado").addClass("alert-success");
        $("#resultado").text("Parabéns " + nome + " sua média foi " + media.toFixed(2) + ". Portanto está aprovado!!")
        $("#resultado").fadeIn(1000);
    } else if (media < 5) {
        $("#resultado").hide();


        $("#resultado").addClass("alert-danger");
        $("#resultado").text(nome + ", sinto muito, mas sua média foi " + media + ". Portanto está reprovado." )
        $("#resultado").fadeIn(1000);

    } else {
        $("#resultado").hide();
        $("#resultado").addClass("alert-warning");
        $("#resultado").text(nome + " atenção!! sua média foi " + media + ". Está de recuperação.");
        $("#resultado").fadeIn(1000);
    }
}


function reset(){
    let nome = $("#nome").val(" ");
    let n1 = parseFloat($("#num1").val( " " ));
    let n2 = parseFloat($("#num2").val( " " ));
    let n3 = parseFloat($("#num3").val( " " ));
    let n4 = parseFloat($("#num4").val( " " ));

    $("#resultado").fadeOut(500);
    $("#resultado").text(" ");

}