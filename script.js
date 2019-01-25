
// $(document).ready(function(){
//     $("h1").hide()
// });

// $(document).ready(function(){
//     $(".par1").hide()
// });

// $(document).ready(function(){
//     $("#title1").hide()
// });

// $(document).ready(function(){
//     $("p:nth-child(2)").hide()
// });

// $(function () {
//     $("#p1").click(function () {
//         $("#p5").hide()
//     });

// });

// $(function () {
//     $("#p2").mouseenter(function () {
//         $("#p4").hide()
//     });

// });

// $(function () {
//     $("#p2").mouseleave(function () {
//         $("#p4").show()
//     });

// });
// $(function () {
//     $("#p3").hover(function () {
//         $("#p6").hide();
//     },
//         function () {
//             $("#p6").show();
//         }
//     );

// });
// $(function () {
//     $("#p4").on("click", function () {
//         $("#p7").hide();
//     });
// });
// $(function () {
//     $("#p4").on({
//         mouseenter: function () {
//             $("#p8").hide();
//         },
//         mouseleave: function () {
//             $("#p8").show();
//         }
//     });
// });


$(document).ready(function () {
    $('#pg1').click(function () {
        $('#pg7').hide(3000);
    });
});


$(document).ready(function () {
    $('#pg1').click(function () {
        $('#pg7').hide(5000, function(){
            $("#pg8").hide(50000);
        });
    });
});

$(document).ready(function(){
    $('#pg2').click(function(){
        $("#pg3").toggle();
    });
});

$(document).ready(function(){
    $("#pg4").click(function(){
        $("#pg5").fadeOut(3000);
    });
});

$(document).ready(function(){
    $("#pg10").fadeOut(3000);
    $("#pg9").click(function(){
        $("#pg10").fadeIn(3000);
    });
});

$(document).ready(function(){
    $("#pg11").click(function(){
        $("#pg12").fadeToggle(3000);
    });
});


