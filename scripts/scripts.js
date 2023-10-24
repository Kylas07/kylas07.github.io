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