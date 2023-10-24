$(document).ready(function() {
    var navbar = $('.navbar');

    $('.trigger_nav').click(function() {
        navbar.toggleClass('open'); 
    });
});

$(document).ready(function() {
    $(window).on('scroll', function() {
        var windowHeight = $(window).height();
        var scrollTop = $(window).scrollTop();
        var threshold = 0.7;
        $('.slideruno, .sliderduo, .slidertrio, .sliderduo.last').each(function() {
            var elementOffset = $(this).offset().top;
            if (elementOffset < (scrollTop + windowHeight * threshold)) {
                $(this).css('transform', 'scale(1)');
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    var links = document.querySelectorAll(".navbar_wrapper li a");

    for (var i = 0; i < links.length; i++) {
        links[i].addEventListener("mouseover", function() {
            for (var j = 0; j < links.length; j++) {
                if (links[j] !== this) {
                    links[j].style.filter = "blur(5px)";
                }
            }
        });

        links[i].addEventListener("mouseout", function() {
            for (var j = 0; j < links.length; j++) {
                links[j].style.filter = "none";
            }
        });
    }
});