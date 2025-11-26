/* JavaScript Document */
jQuery(document).ready(function() {
    'use strict';

	/*  Clients Carousel = owl.carousel.js */
	jQuery('.clients-carousel').owlCarousel({
		loop:true,
		margin:30,
		nav:true,
		autoplaySpeed: 3000,
		navSpeed: 3000,
		paginationSpeed: 3000,
		slideSpeed: 3000,
		smartSpeed: 3000,
        autoplay: true,
		dots: true,
		navText: ['<i class="fa fa-arrow-left"></i>', '<i class="fa fa-arrow-right"></i>'],
		responsive:{
			0:{
				items:2
			},
			600:{
				items:3
			},
			767:{
				items:4
			},
			991:{
				items:5
			},
			1200:{
				items:6
			}
		}
	})
	

	/*  Testimonials Carousel = owl.carousel.js */
	jQuery('.testimonials-carousel3').owlCarousel({
		loop:true,
		nav:true,
		autoplaySpeed: 3000,
		navSpeed: 3000,
		paginationSpeed: 3000,
		slideSpeed: 3000,
		smartSpeed: 3000,
		autoplay: true,
		dots: true,
		navText: ['<i class="fa fa-arrow-left"></i>', '<i class="fa fa-arrow-right"></i>'],
		responsive:{
			0:{
				items:1
			},
			600:{
				items:1
			},			
			
			991:{
				items:2
			},
			1200:{
				items:2
			}
		}
	})
	
});
/* Document .ready END */