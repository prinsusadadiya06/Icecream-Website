$(document).ready(function () {
    $("#btn1").click(function () {
        // Active
        $(this).removeClass("btn-g")
        $(this).addClass("btn-a")

        // Removing next button
        $("#btn2").removeClass("btn-a")
        $("#btn2").addClass("btn-g")
        $("#btn3").removeClass("btn-a")
        $("#btn3").addClass("btn-g")
        $("#btn4").removeClass("btn-a")
        $("#btn4").addClass("btn-g")

        $('#g1').show(500);
        $('#g2').show(500);
        $('#g3').show(500);
        $('#g4').show(500);
        $('#g5').show(500);
        $('#g6').show(500);
    })
    $("#btn2").click(function () {
        $(this).removeClass("btn-g")
        $(this).addClass("btn-a")

        $("#btn1").removeClass("btn-a")
        $("#btn1").addClass("btn-g")
        $("#btn3").removeClass("btn-a")
        $("#btn3").addClass("btn-g")
        $("#btn4").removeClass("btn-a")
        $("#btn4").addClass("btn-g")

        $("#g1").show(500);
        $("#g4").show(500);

        $("#g2").hide(500);
        $("#g3").hide(500);
        $("#g5").hide(500);
        $("#g6").hide(500);
    })
    $("#btn3").click(function () {
        $(this).removeClass("btn-g")
        $(this).addClass("btn-a")

        $("#btn2").removeClass("btn-a")
        $("#btn2").addClass("btn-g")
        $("#btn4").removeClass("btn-a")
        $("#btn4").addClass("btn-g")
        $("#btn1").removeClass("btn-a")
        $("#btn1").addClass("btn-g")

        $("#g2").show(500);
        $("#g5").show(500);

        $("#g1").hide(500);
        $("#g3").hide(500);
        $("#g4").hide(500);
        $("#g6").hide(500);

    })
    $("#btn4").click(function () {
        $(this).removeClass("btn-g")
        $(this).addClass("btn-a")

        $("#btn2").removeClass("btn-a")
        $("#btn2").addClass("btn-g")
        $("#btn3").removeClass("btn-a")
        $("#btn3").addClass("btn-g")
        $("#btn1").removeClass("btn-a")
        $("#btn1").addClass("btn-g")

        $("#g3").show(500);
        $("#g6").show(500);

        $("#g1").hide(500);
        $("#g2").hide(500);
        $("#g4").hide(500);
        $("#g5").hide(500);

    })

})