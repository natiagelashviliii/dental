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


	$('.animated-thumbnials').lightGallery({
        thumbnail:true
    }); 


    $('.owl-carousel-1 .item').on('click',function(){
      var a = $(this).attr('data-id');
      console.log(a);
      $(this).closest('.stomatology-slider').find('.animated-thumbnials').find('img[data-id="' + a + '"]').trigger('click');
    });

    $('.owl-carousel-2 .item').on('click',function(){
      var a = $(this).attr('data-id');
      console.log(a);
      $(this).closest('.cosmetology-slider').find('.animated-thumbnials').find('img[data-id="' + a + '"]').trigger('click');
    });


});