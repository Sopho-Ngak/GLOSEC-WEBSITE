# CEEI (GLOSEC) - Environmental Consulting Website

Professional multilingual website for CEEI (Cabinet d'Évaluation Environnementale et Ingénierie), formerly known as GLOSEC (Global Safety and Environment Consultancy), Chad's leading environmental consulting firm.

## 🌍 About

CEEI is a Chadian consulting firm specializing in Environmental and Social Impact Assessments (ESIA/EIES), QHSE management, environmental audits, and professional training. Founded in June 2014, the firm brings extensive experience from major oil sites including Komé, Badila, and Mangara.

## ✨ Features

### 🌐 Multilingual Support
- **French** (Default) - Primary business language
- **English** - International clients
- **Arabic** - Regional accessibility
- Full RTL (Right-to-Left) support for Arabic
- Dynamic language switching with localStorage persistence

### 📱 Responsive Design
- Mobile-first approach
- Optimized for all screen sizes
- Sticky navigation header
- Touch-friendly interface

### 🎨 Modern UI/UX
- Clean, professional design
- Owl Carousel for content sliders
- Smooth animations and transitions
- Bootstrap 4 framework
- Font Awesome icons
- Fancy Box image gallery

### 🔍 SEO Optimized
- Comprehensive meta tags
- Open Graph and Twitter Card support
- Structured data (JSON-LD) for rich snippets
- XML sitemap
- robots.txt configuration
- Geographic targeting for Chad and Rwanda
- Optimized for keywords: CEEI, GLOSEC, EIES, QHSE, environmental consulting

### 📄 Pages
- **Home** - Company overview, services showcase, projects portfolio, blog section
- **About** - Company history, mission, vision, team, clients
- **Services** - Detailed service offerings (Environment, Audits, Training, Safety, Hygiene, Consulting)
- **FAQ** - Common questions about EIES, QHSE, audits, and services
- **Contact** - Contact form, office locations (N'Djamena & Kigali), map integration

### 🎯 Key Sections
- Hero slider with company highlights
- Services cards with icons
- Portfolio/Projects grid with filtering
- Blog carousel (3-item center mode)
- Customer logos carousel
- Contact form with validation
- Google Maps integration

## 🛠️ Technology Stack

- **HTML5** - Semantic markup
- **CSS3** - Custom styling + Bootstrap 4
- **JavaScript (ES5/ES6)** - Vanilla JS and jQuery
- **Bootstrap 4** - Responsive framework
- **Owl Carousel** - Content sliders
- **Font Awesome** - Icon library
- **Isotope** - Portfolio filtering
- **Fancy Box** - Image lightbox
- **jQuery Validation** - Form validation

## 📁 Project Structure

```
ceei/
├── index.html              # Homepage
├── about.html              # About page
├── services.html           # Services page
├── contact.html            # Contact page
├── faq.html               # FAQ page
├── css/
│   ├── style.css          # Main styles
│   ├── language-support.css # RTL and language-specific styles
│   ├── all.css            # Font Awesome
│   └── owl.carousel.min.css
├── js/
│   ├── translations.js    # Multilingual content (665+ lines)
│   ├── load-header.js     # Dynamic header/footer loading
│   ├── script.js          # Carousel and interactions
│   ├── sticky-header.js   # Sticky navigation
│   ├── contact_me.js      # Contact form handling
│   └── filter.js          # Portfolio filtering
├── includes/
│   ├── header.html        # Reusable header
│   ├── footer.html        # Reusable footer
│   ├── contact-section.html # Contact section
│   └── customers-section.html # Clients carousel
├── images/                # Image assets
├── mail/
│   └── contact_me.php     # Email handler
├── vendor/
│   ├── bootstrap/         # Bootstrap 4
│   └── jquery/            # jQuery library
├── robots.txt             # Search engine instructions
├── sitemap.xml            # Site structure for SEO
└── SEO-IMPLEMENTATION-GUIDE.md # Comprehensive SEO guide
```

## 🚀 Getting Started

### Prerequisites
- Web server (Apache, Nginx, or local development server)
- PHP 7.0+ (for contact form functionality)
- Modern web browser

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd ceei
```

2. Start a local server:

**Using Python:**
```bash
python -m http.server 8000
# or
python3 -m http.server 8000
```

**Using PHP:**
```bash
php -S localhost:8000
```

**Using Node.js (http-server):**
```bash
npx http-server -p 8000
```

3. Open your browser and navigate to:
```
http://localhost:8000
```

## ⚙️ Configuration

### Contact Form Setup

1. Update email recipient in `mail/contact_me.php`:
```php
$to = 'your-email@yourdomain.com';
```

2. Configure SMTP settings (recommended) or ensure PHP mail() function works on your server

### Domain Configuration

Update the domain in all SEO-related files:
- Update canonical URLs in all HTML files
- Replace `www.ceei-glosec.com` with your actual domain
- Update `sitemap.xml` URLs
- Update Open Graph URLs

### Language Configuration

Default language is French. To change:
1. Edit `js/translations.js` - line ~520
2. Modify `currentLang` variable
3. Update HTML `lang` attribute

## 🎨 Customization

### Adding New Translations

Edit `js/translations.js` and add keys to all three language objects:
```javascript
fr: {
    new_key: "Texte en français"
},
en: {
    new_key: "Text in English"
},
ar: {
    new_key: "النص بالعربية"
}
```

Then use in HTML:
```html
<element data-translate="new_key">Default text</element>
```

### Modifying Services

Edit `index.html` and `services.html` service cards. Don't forget to add translations in `js/translations.js`.

### Changing Colors

Primary colors defined in `css/style.css`:
- Primary Blue: `#1273eb`
- Dark Gray: `#323232`
- Accent Red: `#fd6058`

## 📧 Contact Form

The contact form uses:
- jQuery Bootstrap Validation for client-side validation
- AJAX submission
- PHP backend (`mail/contact_me.php`)

**Note:** For production, consider using:
- PHPMailer with SMTP
- Third-party services (SendGrid, Mailgun)
- Or client-side services (EmailJS)

## 🔍 SEO Best Practices

After deployment:

1. **Google Search Console**
   - Verify ownership
   - Submit sitemap.xml

2. **Google Business Profile**
   - Create listings for both offices

3. **Social Media**
   - Create business pages
   - Link to website

4. **Analytics**
   - Set up Google Analytics
   - Track conversions

See `SEO-IMPLEMENTATION-GUIDE.md` for detailed instructions.

## 🌍 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📝 License

Copyright © 2014-2025 CEEI (GLOSEC). All rights reserved.

## 👥 Contact

**CEEI - Cabinet d'Évaluation Environnementale et Ingénierie**

- **Chad Office:** N'Djamena, Chad
- **Rwanda Office:** Kigali, Rwanda
- **Phone (Chad):** +235 66401276 / 95094700
- **Phone (Rwanda):** +250 790 040 651
- **Email:** mbailassemc@yahoo.fr
- **Hours:** Monday - Friday: 9:00 AM - 5:00 PM

## 🤝 Contributing

This is a proprietary project. For suggestions or issues, please contact the development team.

## 📚 Documentation

- [SEO Implementation Guide](SEO-IMPLEMENTATION-GUIDE.md)
- Translation keys reference in `js/translations.js`
- Component structure in `includes/` folder

## 🏆 Credits

- Built with Bootstrap 4
- Icons by Font Awesome
- Carousel by Owl Carousel
- Image gallery by Fancy Box
- Portfolio filtering by Isotope

---

**Built with ❤️ for environmental sustainability in Chad and Central Africa**
