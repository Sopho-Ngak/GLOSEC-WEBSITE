// Load portfolio details dynamically
document.addEventListener('DOMContentLoaded', function() {
    // Get portfolio ID from URL parameter
    const urlParams = new URLSearchParams(window.location.search);
    const portfolioId = parseInt(urlParams.get('id'));
    
    // Get localized portfolio data
    const portfolio = getLocalizedPortfolioData(portfolioId);
    
    if (!portfolio) {
        console.error('Portfolio item not found');
        return;
    }
    
    // Helper function to get translated text
    function getTranslation(key) {
        const lang = localStorage.getItem('language') || 'fr';
        return (translations[lang] && translations[lang][key]) || key;
    }
    
    // Update page title
    document.title = `${portfolio.title} - CEEI`;
    
    // Update breadcrumb
    const breadcrumbActive = document.querySelector('.breadcrumb-item.active');
    if (breadcrumbActive) {
        breadcrumbActive.textContent = portfolio.title;
    }
    
    // Update page heading
    const pageHeading = document.querySelector('.full-title h1');
    if (pageHeading) {
        pageHeading.textContent = portfolio.title;
    }
    
    // Update main image carousel
    const imageColumn = document.querySelector('.item-pro .col-md-6:first-child');
    if (imageColumn && portfolio.images && portfolio.images.length > 0) {
        const carouselId = 'portfolioCarousel';
        const indicators = portfolio.images.map((img, index) => 
            `<li data-target="#${carouselId}" data-slide-to="${index}" class="${index === 0 ? 'active' : ''}"></li>`
        ).join('');
        
        const slides = portfolio.images.map((img, index) => `
            <div class="carousel-item ${index === 0 ? 'active' : ''}">
                <img class="d-block w-100" src="${img}" alt="${portfolio.title} - Image ${index + 1}">
            </div>
        `).join('');
        
        imageColumn.innerHTML = `
            <div id="${carouselId}" class="carousel slide" data-ride="carousel">
                <ol class="carousel-indicators">
                    ${indicators}
                </ol>
                <div class="carousel-inner">
                    ${slides}
                </div>
                <a class="carousel-control-prev" href="#${carouselId}" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">${getTranslation('previous')}</span>
                </a>
                <a class="carousel-control-next" href="#${carouselId}" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">${getTranslation('next')}</span>
                </a>
            </div>
        `;
    }
    
    // Update project details
    const detailsColumn = document.querySelector('.item-pro .col-md-6:last-child');
    if (detailsColumn) {
        detailsColumn.innerHTML = `
            <h3 class="my-3" style="color: #1273eb;">${portfolio.title}</h3>
            <p>${portfolio.description}</p>
            <h3 class="my-3" style="color: #1273eb;">${getTranslation('portfolio_project_info')}</h3>
            <ul>
                <li><span>${getTranslation('portfolio_category')} :</span><span>${portfolio.category}</span></li>
                <li><span>${getTranslation('portfolio_client')} :</span><span>${portfolio.client}</span></li>
                ${portfolio.consultant ? `<li><span>${getTranslation('portfolio_consultant')} :</span><span>${portfolio.consultant}</span></li>` : ''}
                ${portfolio.promoteur ? `<li><span>${getTranslation('portfolio_promoter')} :</span><span>${portfolio.promoteur}</span></li>` : ''}
                ${portfolio.beneficiaire ? `<li><span>${getTranslation('portfolio_beneficiary')} :</span><span>${portfolio.beneficiaire}</span></li>` : ''}
                ${portfolio.financement ? `<li><span>${getTranslation('portfolio_financing')} :</span><span>${portfolio.financement}</span></li>` : ''}
                ${portfolio.responsable ? `<li><span>${getTranslation('portfolio_responsible')} :</span><span>${portfolio.responsable}</span></li>` : ''}
                ${portfolio.contact ? `<li><span>${getTranslation('portfolio_contact')} :</span><span>${portfolio.contact}</span></li>` : ''}
                ${portfolio.personnelCle ? `<li><span>${getTranslation('portfolio_key_personnel')} :</span><span>${portfolio.personnelCle}</span></li>` : ''}
            </ul>
        `;
    }
    
    // Update full description with inline info above it
    const descriptionContainer = document.querySelector('.item-pro .row:nth-child(2) .col-lg-12');
    if (descriptionContainer) {
        descriptionContainer.innerHTML = `
            <div class="project-inline-info">
                ${portfolio.pays ? `<span><strong>${getTranslation('portfolio_country')} :</strong> ${portfolio.pays}</span>` : ''}
                ${portfolio.dateDebut ? `<span><strong>${getTranslation('portfolio_start_date')} :</strong> ${portfolio.dateDebut}</span>` : ''}
                ${portfolio.dateFin ? `<span><strong>${getTranslation('portfolio_end_date')} :</strong> ${portfolio.dateFin}</span>` : ''}
                ${portfolio.website ? `<span><strong>${getTranslation('portfolio_website')} :</strong> <a href="https://${portfolio.website}" target="_blank" rel="noopener noreferrer" style="color: #1273eb; text-decoration: underline;">${portfolio.website}</a></span>` : ''}
            </div>
            <p class="mt-3">${portfolio.fullDescription}</p>
        `;
    }
    
    // Update related projects
    const relatedProjects = getRelatedProjects(portfolioId);
    const relatedContainer = document.querySelector('.related-projects .row');
    
    if (relatedContainer && relatedProjects.length > 0) {
        relatedContainer.innerHTML = relatedProjects.map(project => `
            <div class="col-md-3 col-sm-6 mb-4">
                <a href="portfolio-item.html?id=${project.id}">
                    <img class="img-fluid" src="${project.image}" alt="${project.title}" />
                    <p class="mt-2">${project.title}</p>
                </a>
            </div>
        `).join('');
    }
    
    // Listen for language changes and reload content
    document.addEventListener('languageChanged', function() {
        location.reload();
    });
});
