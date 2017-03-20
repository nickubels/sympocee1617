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

/*
// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top-50
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});
*/
$(document).on('click','a.page-scroll',function(event){
		var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top-50
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
        return false;
});


// Responsible for closing the navbar on mobile when tapped
$(document).on('click','.navbar-collapse.in',function(e) {
    if( $(e.target).is('a') ) {
        $(this).collapse('hide');   
    }
    e.preventDefault();
});

function whoInfo(e,id) {
	e.preventDefault();
	$(".whoDiv").addClass("whoHidden");
	$("#" + id).removeClass("whoHidden");
	$('html, body').stop().animate({
            scrollTop: $("#whoText").offset().top - 50
        }, 1500, 'easeInOutExpo');
}
