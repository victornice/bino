/*global $, alert*/

$(document).ready(function () {
    "use strict";
    
    $(".buttons li").click(function () {
        
        $(".slider-item").eq(0).addClass("active").fadeIn().siblings().removeClass("active");
        
    });
    
    $(".buttons li").eq(1).click(function () {
        
        $(".slider-item").eq(1).addClass("active").fadeIn().siblings().removeClass("active");
        
    });
    
    $(".buttons li").eq(2).click(function () {
        
        $(".slider-item").eq(2).addClass("active").show().siblings().removeClass("active");
        
    });
    
    $(".buttons li").click(function () {
        
        $(this).addClass("active").siblings().removeClass("active");
        
    });
    
    // MinItUp
    
    $("#container").mixItUp();
    
    $(".shuffle li").click(function () {
        
        $(this).addClass("active").siblings().removeClass("active");
    });
    
    // Navbar Background
    
    $(window).scroll(function () {
        
        if ($(this).scrollTop() > 0) {
            
            $("nav").addClass("nav-background");
        } else {
            
            $("nav").removeClass("nav-background");
        }
    });
    
    // Nav li
    
    $("nav ul li a").click(function () {
        
        $("body, html").animate({scrollTop : $("#" + $(this).data("value")).offset().top}, 700);
    });
    
    $(window).on("scroll", function () {
        
        $("nav .big-nav li a").each(function () {
            if ($("#" + $(this).data("value")).offset().top <= $(window).scrollTop()) {
                
                $("nav").find('a').removeClass('active');
                $(this).addClass("active");
            }
            
        });
        
    });
    
    // Nav Collapse
    
    $("nav .fa-bars").click(function () {
        
        $(".small-nav").animate({right : "0%"});
    });
    
    $("nav .fa-close").click(function () {
        
        $(".small-nav").animate({right : "-100%"});
    });
    
    $(".small-nav li a").click(function () {
        
        $(".small-nav").animate({right: "-100%"});
    });
    
    // Header Height
    
    $("header").height($(window).height());
    $(window).resize(function () {
        
        $("header").height($(window).height());
    });
    
    $("header .help").click(function () {
        
        $("body, html").animate({scrollTop : $(".about-us").offset().top}, 700);
        
    });
    
    // Scroll To Top
    
    $(".scroll-top").click(function () {
        
        $("body, html").animate({scrollTop : "0"}, 700);
        
    });
    
    // Count To
    
    $(".statistics h3").countTo();
    
    // Animation
    
    $("header").waypoint(function () {
        
        $("header .carousel").css("opacity", "1").addClass("animated fadeIn");
    });
    
    $(".about-us").waypoint(function () {
        
        $(".about-us .about").css("opacity", "1").addClass("animated fadeIn");
    }, {offset: "50%"});
    
    $(".about-us").waypoint(function () {
        
        $(".about-us .our-history").css("opacity", "1").addClass("animated fadeIn");
    }, {offset: "20%"});
    
    $(".our-services").waypoint(function () {
        
        $(".our-services .service").css("opacity", "1").addClass("animated fadeIn");
    }, {offset: "30%"});
    
    $(".our-work").waypoint(function () {
        
        $(".our-work .gallery").css("opacity", "1").addClass("animated fadeIn");
    }, {offset: "30%"});
    
    $(".case-study").waypoint(function () {
        
        $(".case-study .case").css("opacity", "1").addClass("animated fadeIn");
        $(".case-study .case-image").css("opacity", "1").addClass("animated fadeIn");
    }, {offset: "30%"});
    
    $(".statistics").waypoint(function () {
        
        $(".statistics .stat").css("opacity", "1").addClass("animated fadeIn");
    }, {offset: "40%"});
    
    $(".our-price").waypoint(function () {
        
        $(".our-price .pricing").css("opacity", "1").addClass("animated fadeIn");
    }, {offset: "40%"});
    
    $(".our-team").waypoint(function () {
        
        $(".our-team .team").css("opacity", "1").addClass("animated fadeIn");
    }, {offset: "40%"});
    
    $(".our-clients").waypoint(function () {
        
        $(".our-clients .row").css("opacity", "1").addClass("animated fadeIn");
    }, {offset: "40%"});
    
    $(".our-blog").waypoint(function () {
        
        $(".our-blog .row").css("opacity", "1").addClass("animated fadeIn");
    }, {offset: "40%"});
    
    $(".contact-us").waypoint(function () {
        
        $(".contact-us .contact").css("opacity", "1").addClass("animated fadeIn");
    }, {offset: "40%"});
    
    $(".our-blog").waypoint(function () {
        
        $(".our-blog .row").css("opacity", "1").addClass("animated fadeIn");
    }, {offset: "40%"});
    
    // Page Load
    
    $(window).on("load", function () {
        
        $(".load .face, .load .bord").fadeOut(700);
        $(".load").fadeOut(700);
        
    });
    
});