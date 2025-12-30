(function ($) {
"use strict";

// blog-slider with center mode - always LTR for compatibility
var blogSliderInitialized = false;

function initBlogSlider() {
var $slider = $("#blog-slider");

// Only initialize if slider exists
if ($slider.length === 0) {
return;
}

// Destroy if already initialized
if (blogSliderInitialized && $slider.data('owlCarousel')) {
$slider.data('owlCarousel').destroy();
blogSliderInitialized = false;
}

// Force LTR for carousel to work properly
$slider.attr('dir', 'ltr');

// Initialize carousel
$slider.owlCarousel({
items: 3,
itemsDesktop: [1199, 3],
itemsDesktopSmall: [1000, 3],
itemsTablet: [768, 1],
itemsMobile: [650, 1],
autoPlay: 4000,
stopOnHover: true,
navigation: false,
pagination: true,
center: true,
loop: true
});

blogSliderInitialized = true;
}

// Make function globally accessible
window.initBlogSlider = initBlogSlider;

// testimonials-slider
$("#testimonials-slider").owlCarousel({
items:1,
itemsDesktop:[1199,1],
itemsDesktopSmall:[1000,1],
itemsMobile : [650,1],
navigationText:false,
autoPlay:true
});

// customers-slider - always LTR for compatibility
var customersSliderInitialized = false;

function initCustomersSlider() {
var $slider = $("#customers-slider");

// Only initialize if slider exists
if ($slider.length === 0) {
return;
}

// Destroy if already initialized
if (customersSliderInitialized && $slider.data('owlCarousel')) {
$slider.data('owlCarousel').destroy();
customersSliderInitialized = false;
}

// Force LTR for carousel to work properly (common practice for image carousels)
$slider.attr('dir', 'ltr');

// Initialize carousel
$slider.owlCarousel({
items: 5,
itemsDesktop: [1199, 5],
itemsDesktopSmall: [1000, 3],
itemsMobile: [650, 2],
navigation: false,
autoPlay: true,
loop: true
});

customersSliderInitialized = true;
}

// Make function globally accessible
window.initCustomersSlider = initCustomersSlider;

// Initialize on document ready
$(document).ready(function() {
setTimeout(function() {
initBlogSlider();
initCustomersSlider();
}, 100);
});

// Reinitialize on language change
document.addEventListener('languageChanged', function() {
setTimeout(function() {
initBlogSlider();
initCustomersSlider();
}, 300);
});

})(window.jQuery);
