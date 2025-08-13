function getItemsCount(itemsCount, maxCount) {
	if (itemsCount > maxCount)
		return maxCount;
	
	if (itemsCount % 2 === 0)
		return itemsCount - 1;
	
	return itemsCount;
}

(function ($) {
    "use strict";
    
    // Dropdown on mouse hover
    $(document).ready(function () {
        function toggleNavbarMethod() {
            if ($(window).width() > 992) {
                $('.navbar .dropdown').on('mouseover', function () {
                    $('.dropdown-toggle', this).trigger('click');
                }).on('mouseout', function () {
                    $('.dropdown-toggle', this).trigger('click').blur();
                });
            } else {
                $('.navbar .dropdown').off('mouseover').off('mouseout');
            }
        }
        toggleNavbarMethod();
        $(window).resize(toggleNavbarMethod);
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });
	
	    
	// Counter up
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 750
    });


    // Date and time picker
    $('#date').datetimepicker({
        format: 'L'
    });
    $('#time').datetimepicker({
        format: 'LT'
    });


    // Service carousel
    $(".service-carousel").owlCarousel({
        margin: 30,
        dots: false,
        nav : true,
        navText : [
            '<i class="fa fa-angle-left" aria-hidden="true"></i>',
            '<i class="fa fa-angle-right" aria-hidden="true"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });


    // Team carousel
    $(".team-carousel").owlCarousel({
        margin: 30,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="fa fa-angle-left" aria-hidden="true"></i>',
            '<i class="fa fa-angle-right" aria-hidden="true"></i>'
        ],
        responsive: {
            0:{items:1 }
        }
    });
	
	    
	// Team Active carousel
    $(".team-active-carousel").owlCarousel({
		autoplay: true,
        margin: 30,
		smartSpeed: 1000,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="fa fa-angle-left" aria-hidden="true"></i>',
            '<i class="fa fa-angle-right" aria-hidden="true"></i>'
        ],
        responsive: {
            0:{items:1 }
        }
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
		autoplay: true,
        center: true,
        smartSpeed: 1000,
        margin: 30,
        dots: true,
        loop: true,
        responsive: {
            0:{
                items: getItemsCount($(".testimonial-carousel").children().length, 1)
            },
            576:{
                items: getItemsCount($(".testimonial-carousel").children().length, 1)
            },
            768:{
                items: getItemsCount($(".testimonial-carousel").children().length, 3)
            },
            992:{
                items: getItemsCount($(".testimonial-carousel").children().length, 5)
            }
        }
    });
    
})(jQuery);

	<!-- Update commit message -->

