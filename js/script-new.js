(function ($) {
	"use strict";
		
		// blog-slider
		$("#blog-slider").owlCarousel({
			autoPlay: 4000,
			stopOnHover: true,
			navigation:false,
			paginationSpeed:1000,
			goToFirstSpeed:2000,
			singleItem:true,
			autoHeight:true
		});
		
		// testimonials-slider
		$("#testimonials-slider").owlCarousel({
			items:1,
			itemsDesktop:[1199,1],
			itemsDesktopSmall:[1000,1],
			itemsMobile : [650,1],
			navigationText:false,
			autoPlay:true
		});
		
		// customers-slider with RTL support
		function initCustomersSlider() {
			var $slider = $("#customers-slider");
			var isRTL = document.documentElement.dir === 'rtl';
			
		// Completely destroy existing carousel if it exists
		if ($slider.data('owlCarousel')) {
			$slider.trigger('destroy.owl.carousel');
			$slider.find('.owl-stage-outer').children().unwrap();
			$slider.removeClass("owl-center owl-loaded owl-text-select-on");
		}
		
		// Clear any inline styles that might interfere
		$slider.removeAttr('style');
		$slider.find('.owl-item').removeAttr('style');
		
		// Initialize carousel with RTL support
		$slider.owlCarousel({
			items:5,
			itemsDesktop:[1199,5],
			itemsDesktopSmall:[1000,3],
			itemsMobile : [650,2],
			navigationText:false,
			autoPlay:true,
			rtl: isRTL,
			loop: false
		});
	}
	
	// Initialize customers slider
	initCustomersSlider();
	
	// Reinitialize on language change
	document.addEventListener('languageChanged', function() {
		setTimeout(function() {
			initCustomersSlider();
		}, 200);
