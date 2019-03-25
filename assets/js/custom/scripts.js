var easeScroll = function(){
	$("html").easeScroll({
	  frameRate: 60,
	  animationTime: 1000,
	  stepSize: 120,
	  pulseAlgorithm: 2,
	  pulseScale: 8,
	  pulseNormalize: 1,
	  accelerationDelta: 20,
	  accelerationMax: 1,
	  keyboardSupport: true,
	  arrowScroll: 10,
	  touchpadSupport: true,
	  fixedBackground: true
	});
}
easeScroll();


jQuery(document).ready(function($) {

	$('.owl-carousel-main').owlCarousel({
	    loop:true,
	    margin:0,
	    nav:false,
	    dots: false,
	    responsive:{
	        0:{
	            items:1
	        }
	    }
	});

	$('.owl-carousel-1').owlCarousel({
	    loop:true,
	    margin:0,
	    nav:false,
	    dots: true,
	    items:4
	});

	$('.owl-carousel-1 .owl-dots').addClass('container');


	$('.owl-carousel-2').owlCarousel({
	    loop:true,
	    margin:0,
	    nav:false,
	    dots: true,
	    items:4
	});

	$('.owl-carousel-2 .owl-dots').addClass('container');


});