console.log('Put custom JS in this file: understrap-child/src/js/custom-javascript.js!');

// preloader JavaScript
// Wait for window load
jQuery(window).load(function() {
	// Animate loader off screen
	jQuery(".se-pre-con").fadeOut("slow");
	// Stop carousel from autoplaying
	jQuery('#carousel-testimonials.carousel').carousel('pause');
});

jQuery(document).ready(function($) {
    // script to shrink header
	$(window).scroll(function () {
		if ($(window).scrollTop() > 100) {
			$('.navbar').addClass('shrink');
		}

		else{
			$('.navbar').removeClass('shrink');
		}
	});

    // script to scroll to each section by id using https://github.com/cferdinandi/smooth-scroll
    var scroll = new SmoothScroll('a[href*="#"]');

	// delay showing content until scrolled into view
	ScrollReveal().reveal('.section-about', { delay: 500 });
	ScrollReveal().reveal('.footer-widget', { delay: 500 });

    // $(document).on('click', 'a[href*="#"]:not([href="#"])', function(e) {
    //     if (location.pathname.replace(/^\//,'') === this.pathname.replace(/^\//,'') && location.hostname === this.hostname) {
    //         var hashStr = this.hash.slice(1);
    //         var target = $(this.hash);
    //         target = target.length ? target : $('[name=' + hashStr +']');
    //         if (target.length) {
    //             $('html, body').animate({ scrollTop: target.offset().top }, 1000);
    //             window.location.hash = hashStr;
    //             return false;
    //             e.preventDefault();
    //         }
    //     }
    // });

    // script for multi slides per BS carousel. From https://www.codeply.com/go/3EQkUOhhZz
	$('#carousel-films').carousel({
		interval: 6000
	})

	$('.carousel-multi-item .carousel-item').each(function(){
		var next = $(this).next();
		if (!next.length) {
			next = $(this).siblings(':first');
		}
		next.children(':first-child').clone().appendTo($(this));

		for (var i=0;i<2;i++) {
			next=next.next();
			if (!next.length) {
				next = $(this).siblings(':first');
			}

			next.children(':first-child').clone().appendTo($(this));
		}
	});

});
