// Portfolio pagination without page reload
// Portfolio items will be loaded from portfolio-data.js dynamically

// Convert portfolioData object to array format for pagination
let portfolioItems = [];
let totalPages = 1; // Will be calculated after data is loaded

function initializePortfolioData() {
    // Check if portfolioDataMultilang is available
    if (typeof portfolioDataMultilang !== 'undefined') {
        // Get current language
        const currentLang = localStorage.getItem('language') || 'fr';
        
        // Convert object to array with localized data
        portfolioItems = Object.keys(portfolioDataMultilang).map(id => {
            const localized = getLocalizedPortfolioData(id, currentLang);
            return {
                id: parseInt(id),
                title: localized.title,
                category: localized.category,
                image: localized.image
            };
        });
        
        // Calculate total pages based on actual data
        totalPages = Math.ceil(portfolioItems.length / itemsPerPage);
    }
}

const itemsPerPage = 6;
let currentPage = 1;
let previousPage = 1;

// Function to create portfolio card HTML
function createPortfolioCard(item) {
    return `
        <div class="col-lg-4 col-sm-6 portfolio-item">
            <div class="card h-100">
                <a class="hover-box" href="portfolio-item.html?id=${item.id}">
                    <div class="dot-full">
                        <i class="fas fa-link"></i>
                    </div>
                    <img class="card-img-top" src="${item.image}" alt="${item.title}" />
                </a>
                <div class="card-body">
                    <h4><a href="portfolio-item.html?id=${item.id}">${item.title}</a></h4>
                    <p>${item.category}</p>
                </div>
            </div>
        </div>
    `;
}

// Function to render portfolio items for current page with slide animation
function renderPortfolioItems(page, direction = 'next') {
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const itemsToShow = portfolioItems.slice(startIndex, endIndex);
    
    const portfolioContainer = document.querySelector('.portfolio-col .row');
    if (!portfolioContainer) return;
    
    // Determine animation direction
    const isForward = direction === 'next';
    const slideOutClass = isForward ? 'slide-out-left' : 'slide-out-right';
    const slideInClass = isForward ? 'slide-in-right' : 'slide-in-left';
    
    // Remove any existing animation classes
    portfolioContainer.classList.remove('slide-out-left', 'slide-out-right', 'slide-in-left', 'slide-in-right');
    
    // Add slide out animation
    portfolioContainer.classList.add(slideOutClass);
    
    setTimeout(() => {
        portfolioContainer.innerHTML = itemsToShow.map(item => createPortfolioCard(item)).join('');
        
        // Remove slide out class and add slide in class
        portfolioContainer.classList.remove(slideOutClass);
        portfolioContainer.classList.add(slideInClass);
        
        // Remove animation class after animation completes
        setTimeout(() => {
            portfolioContainer.classList.remove(slideInClass);
        }, 400);
    }, 400);
}

// Function to update pagination buttons
function updatePagination() {
    const paginationList = document.querySelector('.pagination');
    if (!paginationList) return;
    
    let paginationHTML = '';
    
    // Previous button
    if (currentPage === 1) {
        paginationHTML += `
            <li class="page-item disabled">
                <a class="page-link" href="#" aria-label="Previous">
                    <span aria-hidden="true">&laquo;</span>
                    <span class="sr-only">Previous</span>
                </a>
            </li>
        `;
    } else {
        paginationHTML += `
            <li class="page-item">
                <a class="page-link" href="#" data-page="${currentPage - 1}" aria-label="Previous">
                    <span aria-hidden="true">&laquo;</span>
                    <span class="sr-only">Previous</span>
                </a>
            </li>
        `;
    }
    
    // Page numbers
    for (let i = 1; i <= totalPages; i++) {
        if (i === currentPage) {
            paginationHTML += `
                <li class="page-item active">
                    <a class="page-link" href="#">${i}</a>
                </li>
            `;
        } else {
            paginationHTML += `
                <li class="page-item">
                    <a class="page-link" href="#" data-page="${i}">${i}</a>
                </li>
            `;
        }
    }
    
    // Next button
    if (currentPage === totalPages) {
        paginationHTML += `
            <li class="page-item disabled">
                <a class="page-link" href="#" aria-label="Next">
                    <span aria-hidden="true">&raquo;</span>
                    <span class="sr-only">Next</span>
                </a>
            </li>
        `;
    } else {
        paginationHTML += `
            <li class="page-item">
                <a class="page-link" href="#" data-page="${currentPage + 1}" aria-label="Next">
                    <span aria-hidden="true">&raquo;</span>
                    <span class="sr-only">Next</span>
                </a>
            </li>
        `;
    }
    
    paginationList.innerHTML = paginationHTML;
    
    // Helper function to get translated text
    function getTranslation(key) {
        const lang = localStorage.getItem('language') || 'fr';
        return (translations[lang] && translations[lang][key]) || key;
    }
    
    // Update page title and breadcrumb dynamically
    const pageHeading = document.querySelector('.full-title h1');
    const breadcrumbActive = document.querySelector('.breadcrumb-item.active');
    
    if (pageHeading) {
        pageHeading.textContent = `${getTranslation('portfolio_page_title')} ${currentPage}`;
    }
    if (breadcrumbActive) {
        breadcrumbActive.textContent = `${getTranslation('portfolio_page_title')} ${currentPage}`;
    }
    
    // Add click event listeners to pagination links
    const paginationLinks = paginationList.querySelectorAll('a[data-page]');
    paginationLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault(); // Prevent page reload
            const page = parseInt(this.getAttribute('data-page'));
            if (page && page !== currentPage) {
                // Determine animation direction
                const direction = page > currentPage ? 'next' : 'prev';
                previousPage = currentPage;
                currentPage = page;
                renderPortfolioItems(currentPage, direction);
                updatePagination();
                
                // Scroll to top of portfolio section smoothly
                const portfolioSection = document.querySelector('.portfolio-col');
                if (portfolioSection) {
                    portfolioSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            }
        });
    });
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    // Check if we're on portfolio page
    const portfolioContainer = document.querySelector('.portfolio-col .row');
    if (!portfolioContainer) return;
    
    // Helper function to get translated text
    function getTranslation(key) {
        const lang = localStorage.getItem('language') || 'fr';
        return (translations[lang] && translations[lang][key]) || key;
    }
    
    // Initialize portfolio data from portfolio-data.js
    initializePortfolioData();
    
    // Render first page
    renderPortfolioItems(currentPage, 'next');
    updatePagination();
    
    // Listen for language changes
    document.addEventListener('languageChanged', function() {
        // Reinitialize portfolio data with new language
        initializePortfolioData();
        
        // Re-render current page
        renderPortfolioItems(currentPage, 'next');
        
        // Update page title with current page number
        const pageHeading = document.querySelector('.full-title h1');
        const breadcrumbActive = document.querySelector('.breadcrumb-item.active');
        
        if (pageHeading) {
            pageHeading.textContent = `${getTranslation('portfolio_page_title')} ${currentPage}`;
        }
        if (breadcrumbActive) {
            breadcrumbActive.textContent = `${getTranslation('portfolio_page_title')} ${currentPage}`;
        }
    });
});
