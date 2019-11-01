console.log('Put custom JS in this file: understrap-child/src/js/custom-javascript.js!');

// preloader JavaScript
// Wait for window load
jQuery(window).load(function() {
	// Animate loader off screen
	jQuery(".se-pre-con").fadeOut("slow");
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

    // script for multi slides per BS carousel
    // $('#carouselExample').on('slide.bs.carousel', function (e) {
    //     /*
    //     CC 2.0 License Iatek LLC 2018
    //     Attribution required
    //     */
    //     var $e = $(e.relatedTarget);
    //     var idx = $e.index();
    //     var itemsPerSlide = 3;
    //     var totalItems = $('.carousel-item').length;
    //
    //     if (idx >= totalItems-(itemsPerSlide-1)) {
    //         var it = itemsPerSlide - (totalItems - idx);
    //         for (var i=0; i<it; i++) {
    //             // append slides to end
    //             if (e.direction=="left") {
    //                 $('.carousel-item').eq(i).appendTo('.carousel-inner');
    //             }
    //             else {
    //                 $('.carousel-item').eq(0).appendTo('.carousel-inner');
    //             }
    //         }
    //     }
    // });
});
