$(document).ready(Inicio)

function Inicio(){
    $("#burger").click(function (){
        $("nav").toggleClass("open");
        $(this).toggleClass("cruz");
        $("#fondoObscuro").toggleClass("open")
    });
    $("nav a").click(function (){
        $("nav").toggleClass("open");
        $("#burger").toggleClass("cruz");
        $("#fondoObscuro").toggleClass("open")
    });
}