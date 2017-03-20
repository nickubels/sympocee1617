// jQuery to collapse the navbar on scroll
function collapseNavbar() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
}

$(window).scroll(collapseNavbar);
$(document).ready(collapseNavbar);

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $(this).closest('.collapse').collapse('toggle');
});

$("#hacker1").bind("click", function() {
    $("#1").show();
    $("#2").hide();
    $("#3").hide();
    $("#4").hide();
    
});

$("#soundA").bind("click", function() {
    $("#1").hide();
    $("#2").show();
    $("#3").hide();
    $("#4").hide();
});

$("#belsimpel").bind("click", function() {
    $("#1").hide();
    $("#2").hide();
    $("#3").show();
    $("#4").hide();
});

$("#placeholder").bind("click", function() {
    $("#1").hide();
    $("#2").hide();
    $("#3").hide();
    $("#4").show();
});