# CEEI Website - Multi-Language Implementation Guide

## Overview
This document explains the multi-language system implemented for the CEEI website supporting French (default), English, and Arabic.

## Files Created/Modified

### New Files
1. **js/translations.js** - Contains all translations for the three languages
2. **css/language-support.css** - CSS for RTL support and language switcher styling

### Modified Files
1. **index.html** - Fully updated with language switcher and translation attributes
   - All Lorem ipsum text replaced with appropriate French content
   - Language switcher buttons added to navigation
   - All translatable content marked with `data-translate` attributes

## How the System Works

### 1. Translation Data Structure
The `translations.js` file contains a JavaScript object with three language keys: `fr`, `en`, and `ar`. Each language object contains key-value pairs for all translatable content.

### 2. Translation Attributes
Content that needs to be translated uses the `data-translate` attribute:
```html
<h2 data-translate="about_title">Bienvenue chez CEEI</h2>
```

### 3. Language Switcher
Three buttons (FR, EN, AR) allow users to switch languages. The selected language is stored in localStorage and persists across page visits.

### 4. RTL Support
When Arabic is selected, the page automatically switches to right-to-left (RTL) layout using the `dir="rtl"` attribute and CSS rules.

## How to Add Language Support to Other Pages

Follow these steps for each HTML page (about.html, services.html, contact.html, etc.):

### Step 1: Add CSS Link
Add this line in the `<head>` section after style.css:
```html
<link href="css/language-support.css" rel="stylesheet">
```

### Step 2: Update Navigation
Replace the existing navigation with this updated version that includes language switcher:

```html
<div class="collapse navbar-collapse" id="navbarResponsive">
    <ul class="navbar-nav ml-auto">
        <li class="nav-item">
            <a class="nav-link" href="index.html" data-translate="nav_home">Accueil</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="about.html" data-translate="nav_about">À propos</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="services.html" data-translate="nav_services">Services</a>
        </li>
        <li class="nav-item dropdown">
            <a class="nav-link" href="#" id="navbarDropdownBlog" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <span data-translate="nav_pages">Pages</span> <i class="fas fa-sort-down"></i>
            </a>
            <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownBlog">
                <a class="dropdown-item" href="faq.html" data-translate="nav_faq">FAQ</a>
                <a class="dropdown-item" href="404.html" data-translate="nav_404">404</a>
                <a class="dropdown-item" href="pricing.html" data-translate="nav_pricing">Tarification</a>
            </div>
        </li>
        <li class="nav-item dropdown">
            <a class="nav-link" href="#" id="navbarDropdownPortfolio" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <span data-translate="nav_portfolio">Portfolio</span> <i class="fas fa-sort-down"></i>
            </a>
            <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownPortfolio">
                <a class="dropdown-item" href="portfolio-3-col.html" data-translate="nav_portfolio_3col">Portfolio 3 colonnes</a>
                <a class="dropdown-item" href="portfolio-4-col.html" data-translate="nav_portfolio_4col">Portfolio 4 colonnes</a>
                <a class="dropdown-item" href="portfolio-item.html" data-translate="nav_portfolio_item">Élément de portfolio</a>
            </div>
        </li>
        <li class="nav-item dropdown">
            <a class="nav-link" href="#" id="navbarDropdownBlog" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <span data-translate="nav_blog">Blog</span> <i class="fas fa-sort-down"></i>
            </a>
            <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownBlog">
                <a class="dropdown-item" href="blog.html" data-translate="nav_blog">Blog</a>
                <a class="dropdown-item" href="blog-post.html" data-translate="nav_blog_post">Article de blog</a>
            </div>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="contact.html" data-translate="nav_contact">Contact</a>
        </li>
        <li class="nav-item">
            <div class="language-switcher">
                <button class="lang-btn btn btn-sm btn-outline-primary active" data-lang="fr">FR</button>
                <button class="lang-btn btn btn-sm btn-outline-primary" data-lang="en">EN</button>
                <button class="lang-btn btn btn-sm btn-outline-primary" data-lang="ar">AR</button>
            </div>
        </li>
    </ul>
</div>
```

### Step 3: Add Translation Attributes to Content
Add `data-translate` attributes to any text that should be translated. The attribute value should match a key in the translations.js file.

Example:
```html
<h2 data-translate="services_title">Nos Meilleurs Services</h2>
<p data-translate="service1_desc">Études et suivi pour limiter les impacts environnementaux et sociaux.</p>
```

### Step 4: Add Script Before Closing Body Tag
Add this script before the closing `</body>` tag (if not already present):
```html
<script src="js/translations.js"></script>
```

### Step 5: Update Contact Information
Update phone numbers and addresses to match the real CEEI information:
```html
<li><i class="fas fa-phone fa-rotate-90"></i> +250 790 040 651 / +235 664 012 76</li>
<li><i class="fas fa-map-marker-alt"></i> Kigali, RW</li>
```

### Step 6: Replace Lorem Ipsum Text
Replace all Lorem ipsum placeholder text with appropriate content in French. The translations.js file will handle English and Arabic translations.

## Adding New Translations

To add new translatable content:

1. **Add the French, English, and Arabic text to translations.js:**
```javascript
fr: {
    new_key: "Nouveau texte en français",
    // ...other keys
},
en: {
    new_key: "New text in English",
    // ...other keys
},
ar: {
    new_key: "نص جديد بالعربية",
    // ...other keys
}
```

2. **Add the data-translate attribute to your HTML:**
```html
<p data-translate="new_key">Nouveau texte en français</p>
```

## Translation Keys Reference

### Navigation
- `nav_home` - Home/Accueil
- `nav_about` - About/À propos
- `nav_services` - Services
- `nav_pages` - Pages
- `nav_faq` - FAQ
- `nav_404` - 404
- `nav_pricing` - Pricing/Tarification
- `nav_portfolio` - Portfolio
- `nav_portfolio_3col` - 3 Column Portfolio
- `nav_portfolio_4col` - 4 Column Portfolio
- `nav_portfolio_item` - Portfolio Item
- `nav_blog` - Blog
- `nav_blog_post` - Blog Post
- `nav_contact` - Contact

### Home Page Content
- `slider_title1`, `slider_title2`, `slider_title3` - Slider titles
- `slider_subtitle1`, `slider_subtitle2`, `slider_subtitle3` - Slider subtitles
- `about_title` - About section title
- `about_text1`, `about_text2` - About text paragraphs
- `about_approach` - Our Smart Approach
- `approach_item1`, `approach_item2`, `approach_item3` - Approach list items

### Services
- `services_title` - Our Best Services
- `service1_title` through `service6_title` - Service titles
- `service1_desc` through `service6_desc` - Service descriptions

### Portfolio
- `portfolio_title` - Our Portfolio
- `portfolio_all` - All
- `portfolio_business` - Business
- `portfolio_travel` - Travel
- `portfolio_financial` - Financial
- `portfolio_academic` - Academic
- `portfolio_item_title` - Financial Sustainability

### Contact
- `contact_title` - Contact Us
- `contact_desc` - Contact description
- `contact_info` - Contact Information
- `contact_address` - Address
- `contact_phone` - Phone
- `contact_email` - Email
- `contact_name` - Your Name
- `contact_email_field` - Your Email
- `contact_subject` - Subject
- `contact_message` - Your Message
- `contact_send` - Send Message

### Footer
- `footer_about` - About
- `footer_about_text` - About text
- `footer_links` - Quick Links
- `footer_latest_posts` - Latest Posts
- `footer_post1`, `footer_post2`, `footer_post3` - Post titles
- `footer_gallery` - Gallery
- `footer_copyright` - All rights reserved

## Testing the Implementation

1. Open index.html in a browser
2. Click on the language switcher buttons (FR, EN, AR)
3. Verify that:
   - All content with `data-translate` attributes changes language
   - Arabic layout switches to RTL (right-to-left)
   - Selected language persists when navigating between pages
   - Language preference is saved in localStorage

## Browser Support

The language switching system works in all modern browsers:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

## Notes

- The default language is French
- Language preference is stored in browser's localStorage
- Arabic language automatically triggers RTL layout
- All Lorem ipsum text in index.html has been replaced with appropriate French content
- For pages not yet updated, follow the steps above to add language support

## Maintenance

To update translations:
1. Open `js/translations.js`
2. Find the appropriate section (fr, en, or ar)
3. Add or modify the key-value pairs
4. Save the file

No other changes are needed - the system will automatically use the new translations.

## Current Status

✅ **Completed:**
- index.html - Fully implemented with language switcher and all translations
- translations.js - Complete with FR, EN, AR for all common content
- language-support.css - RTL support and styling
- All Lorem ipsum text replaced in index.html

⏳ **To Do:**
Apply the same pattern to:
- about.html
- services.html
- contact.html
- blog.html
- blog-post.html
- portfolio-3-col.html
- portfolio-4-col.html
- portfolio-item.html
- faq.html
- pricing.html
- 404.html

Follow the steps in this guide to add language support to each page.
