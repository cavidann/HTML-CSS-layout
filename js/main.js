$(window).on("load", function () {

    $("#loading").fadeOut(1000)
})
$(document).ready(function () {
    $("#mw-count").on("click", function () {
        $('.progress').each(function () {
            var a = $(this).text();
            var b = $(this).parent().parent().last().find(".progress_main").css({ "width": a });
        })
    })

    // voice reader added
    $(".fa-pause").on("click", function () {
        EndCallback();
        responsiveVoice.speak("", "UK English Male", { onstart: StartCallback, onend: EndCallback });
    })

    $(".fa-play").on("click", function () {
        $(".fa-play").css({ "display": "none" })
        $(".fa-pause").css({ "display": "inline-block", "transform": "scale(1.8)" })
        responsiveVoice.setDefaultVoice("US English Male");
        responsiveVoice.speak("Hi, I am Talibov Javidan. I can handle uninterrupted programming for 10-12 hours. I think I`m lazy because I am looking for solutions to problems in shorter and durable ways. I like playing chess and comedy. I studied at National Aviation Academy in Physics Technology Faculty in Computer Engineering from 2015 september to 2019 july. I improved my programming skills at Code Academy in 2017 from january to june.My skills is these. Html 95%, bootstrap 90%, css 95%, sass 95%, javascript 83%, jquery 95%, react 40%, mssql 89%, c-sharp and asp dot net 70%, entity framework 80%, git and github 90%. I am working at Code Academy Lab now. You can connect with me using informations at contact section, Thank you for listenning.", "UK English Male", { onstart: StartCallback, onend: EndCallback });

    });

    function StartCallback() { }

    function EndCallback() {
        $(".fa-play").css({ "display": "inline-block" })
        $(".fa-pause").css({ "display": "none" })
    }
    // voice reader added

    // contact added to tab menu with animation
    $(".pos").on("click", function () {
        $("#menu5").css({ "height": "auto", "opacity": "1" }).siblings().removeClass("active");
        $(".tab-item").removeClass("active")
        $(this).addClass("active");
    })

    $(".tab-item").on("click", function () {
        $("#menu5").removeClass("active").css({ "opacity": "0", "height": "0px" });
        $(".pos").removeClass("active");

    })
    // contact added to tab menu with animation
    // $(document).ready(function () {
        // $(window).on('load resize', function () {
        //     var win = $(this);
        //     if (win.width() <= 736) {
        //         $(".right").fadeOut();
        //     }
        // })
    // });

    // var count = false;

    $(".responsive-portfolio-show").on("click", function () {
        // if (count == false) {
            // $(".right").addClass("height-100").css({ "z-index": "3", "opacity": "1" });
            $(".responsive-portfolio-show i").toggleClass("fa-briefcase").toggleClass("fa-info");
            $(".responsive-portfolio-show").toggleClass("mt");
            $(".right").fadeToggle();
            $(".left").fadeToggle();
            // count = true;
        // } else {
            // $(".right").removeClass("height-100").css({ "opacity": "0","z-index": "1" });
            // $(".responsive-portfolio-show i").removeClass("fa-info").addClass("fa-briefcase");
            // $(".responsive-portfolio-show").css({ "margin-top": "0px" });
            // count = false;
        // }
    });
});