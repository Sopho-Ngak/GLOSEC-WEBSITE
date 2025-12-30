// Sticky Header on Scroll
(function() {
    'use strict';
    
    let lastScrollTop = 0;
    const headerPlaceholder = document.getElementById('header-placeholder');
    
    window.addEventListener('scroll', function() {
        if (!headerPlaceholder) return;
        
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const header = headerPlaceholder.querySelector('nav.top-nav');
        const topBar = headerPlaceholder.querySelector('.top-bar');
        
        if (!header) return;
        
        // Add fixed class when scrolling down
        if (scrollTop > 100) {
            if (topBar) {
                topBar.style.display = 'none';
            }
            header.style.position = 'fixed';
            header.style.top = '0';
            header.style.left = '0';
            header.style.right = '0';
            header.style.width = '100%';
            header.style.zIndex = '1000';
            header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.15)';
        } else {
            if (topBar) {
                topBar.style.display = 'block';
            }
            header.style.position = 'sticky';
            header.style.top = '36px';
        }
        
        lastScrollTop = scrollTop;
    });
})();
