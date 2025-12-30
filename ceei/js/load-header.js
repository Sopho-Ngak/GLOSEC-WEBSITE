// Load header and footer dynamically
(function() {
    // Create a function to load the header
    function loadHeader() {
        fetch('includes/header.html')
            .then(response => response.text())
            .then(data => {
                // Insert header content
                const headerContainer = document.getElementById('header-placeholder');
                if (headerContainer) {
                    headerContainer.innerHTML = data;
                    
                    // Highlight active page in navigation
                    highlightActivePage();
                    
                    // Re-initialize translations after header is loaded
                    if (typeof updatePageContent === 'function') {
                        updatePageContent();
                    }
                    if (typeof updateLanguageButtons === 'function') {
                        updateLanguageButtons();
                    }
                    
                    // Re-attach language switcher event listeners
                    attachLanguageSwitcherEvents();
                }
            })
            .catch(error => console.error('Error loading header:', error));
    }
    
    // Create a function to load the footer
    function loadFooter() {
        fetch('includes/footer.html')
            .then(response => response.text())
            .then(data => {
                // Insert footer content
                const footerContainer = document.getElementById('footer-placeholder');
                if (footerContainer) {
                    footerContainer.innerHTML = data;
                    
                    // Update current year
                    const yearElements = document.querySelectorAll('.current-year');
                    yearElements.forEach(el => {
                        el.textContent = new Date().getFullYear();
                    });
                    
                    // Re-initialize translations after footer is loaded
                    if (typeof updatePageContent === 'function') {
                        updatePageContent();
                    }
                }
            })
            .catch(error => console.error('Error loading footer:', error));
    }
    
    // Create a function to load the contact section
    function loadContactSection() {
        fetch('includes/contact-section.html')
            .then(response => response.text())
            .then(data => {
                // Insert contact section content
                const contactContainer = document.getElementById('contact-section-placeholder');
                if (contactContainer) {
                    contactContainer.innerHTML = data;
                    
                    // Re-initialize translations after contact section is loaded
                    if (typeof updatePageContent === 'function') {
                        updatePageContent();
                    }
                }
            })
            .catch(error => console.error('Error loading contact section:', error));
    }
    
    // Create a function to load the customers section
    function loadCustomersSection() {
        fetch('includes/customers-section.html')
            .then(response => response.text())
            .then(data => {
                const customersContainer = document.getElementById('customers-section-placeholder');
                if (customersContainer) {
                    customersContainer.innerHTML = data;
                    
                    // Re-initialize translations
                    if (typeof updatePageContent === 'function') {
                        updatePageContent();
                    }
                    
                    // Re-initialize carousel after loading
                    setTimeout(function() {
                        if (typeof initCustomersSlider === 'function') {
                            initCustomersSlider();
                        }
                    }, 200);
                }
            })
            .catch(error => console.error('Error loading customers section:', error));
    }
    
    // Function to highlight active page
    function highlightActivePage() {
        const currentPage = window.location.pathname.split('/').pop() || 'index.html';
        const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
        
        navLinks.forEach(link => {
            const href = link.getAttribute('href');
            if (href === currentPage) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    }
    
    // Function to attach language switcher events
    function attachLanguageSwitcherEvents() {
        document.querySelectorAll('.lang-option').forEach(option => {
            option.addEventListener('click', function(e) {
                e.preventDefault();
                const lang = this.getAttribute('data-lang');
                if (typeof setLanguage === 'function') {
                    setLanguage(lang);
                }
            });
        });
    }
    
    // Load header, footer, contact section, and customers section when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function() {
            loadHeader();
            loadFooter();
            loadContactSection();
            loadCustomersSection();
        });
    } else {
        loadHeader();
        loadFooter();
        loadContactSection();
        loadCustomersSection();
    }
})();
