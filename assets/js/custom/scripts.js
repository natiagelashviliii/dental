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

	$('.loader').fadeOut('slow', function() {
		$('body').removeClass('loading');
		$('.loader').remove();
	});

	var wow = new WOW(
		{
			boxClass:     'wow',      // default
			offset:       100,          // default
			mobile:       true,       // default
			live:         true        // default
		}
	)
	new WOW().init();

	// Main Slider Start

	var owl = $('.owl-carousel-main').owlCarousel({
	    loop:true,
	    margin:0,
	    nav:false,
	    dots: false,
	    autoplay:true,
    	autoplayTimeout:5000,
    	autoplaySpeed:1500,
    	animateIn: 'fadeIn',
  		animateOut: 'fadeOut',
	    responsive:{
	        0:{
	            items:1
	        }
	    },
	    onChange: function() {
	    	$('.slider-loader').removeClass('slider-loader-animation');
	    	$('.slider-loader').css('bottom', '100%');
	    },
	    onChanged: function() {
	    	setTimeout(function() {$('.slider-loader').addClass('slider-loader-animation');}, 100);
	    }
	});

	owl.on('changed.owl.carousel', function(e) {
        owl.trigger('stop.owl.autoplay');
        owl.trigger('play.owl.autoplay');
    });

	// Main Slider End




	$('.owl-1').owlCarousel({
	    loop:true,
	    margin:0,
	    nav:false,
	    dots: true,
	    responsive:{
	        0:{
	            items: 1,
	            nav:true
	        },
	        419: {
	        	items: 2,
	        	nav:true
	        },
	        769: {
	        	items: 3,
	        	nav:false
	        },
	        991: {
	        	items: 4,
	        	nav:false
	        }
	    },
	});

	$('.owl-1 .owl-dots').addClass('container');


	$('.owl-carousel-2').owlCarousel({
	    loop:true,
	    margin:0,
	    nav:false,
	    dots: true,
	    responsive:{
	        0:{
	            items: 1,
	            nav:true
	        },
	        419: {
	        	items: 2,
	        	nav:true
	        },
	        769: {
	        	items: 3,
	        	nav:false
	        },
	        991: {
	        	items: 4,
	        	nav:false
	        }
	    },
	});

	//services owl

	$('.owl-carousel-2 .owl-dots').addClass('container');

	$('.owl-service').owlCarousel({
	    loop:true,
	    margin: 15,
	    nav:false,
	    dots: true,
	    responsive:{
	        0:{
	            items: 1,
	            nav:true
	        },
	        419: {
	        	items: 2,
	        	nav:true
	        },
	        769: {
	        	items: 3,
	        	nav:false
	        },
	        991: {
	        	items: 4,
	        	nav:false
	        }
	    },
	});


	$('.animated-thumbnials').lightGallery({
        thumbnail:true
    }); 

    $('.animated-thumbnials-gallery').lightGallery({
        thumbnail:true,
        selector: '.gallery-image'
    }); 


    $('.owl-1 .item').on('click',function(){
      var a = $(this).attr('data-id');
      console.log(a);
      $(this).closest('.stomatology-slider').find('.animated-thumbnials').find('img[data-id="' + a + '"]').trigger('click');
    });

    $('.owl-service .item').on('click',function(){
      var a = $(this).attr('data-id');
      console.log(a);
      $(this).closest('.service-inner-slider').find('.animated-thumbnials').find('img[data-id="' + a + '"]').trigger('click');
    });

    $('.owl-carousel-2 .item').on('click',function(){
      var a = $(this).attr('data-id');
      $(this).closest('.cosmetology-slider').find('.animated-thumbnials').find('img[data-id="' + a + '"]').trigger('click');
    });


    $(".burger-bar").on("click",function(){
        $(".burger-bar, .resp-menu").toggleClass("active");
    });

    $('.resp-menu .sub-menu').on('click', function(event) {
    	event.preventDefault();
    	$(this).find('.mobile-sub-menu').toggleClass('active');
    });

    $('#nav-icon3').click(function(){
		$(this).toggleClass('open');
	});


	$('.service-mobile-menu').on('click', function(event) {
    	event.preventDefault();
    	$(this).find('.sub-menu-titles').toggleClass('active');
    });

});