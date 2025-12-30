# Quick Reference: Adding Language Support to Other Pages

## Step-by-Step Checklist

### ☐ Step 1: Add CSS Link (in `<head>` section)
```html
<!-- After style.css, add: -->
<link href="css/language-support.css" rel="stylesheet">
```

### ☐ Step 2: Update Logo Path (if needed)
```html
<a class="navbar-brand" href="index.html">
    <img src="images/logo-v.png" alt="logo" width="150"/>
</a>
```

### ☐ Step 3: Update Contact Info in Top Bar
```html
<li><i class="fas fa-phone fa-rotate-90"></i> +250 790 040 651 / +235 664 012 76</li>
<li><i class="fas fa-map-marker-alt"></i> Kigali, RW</li>
```

### ☐ Step 4: Replace Navigation with Language Switcher

**Find the closing `</ul>` tag of navbar-nav and ADD before it:**
```html
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

### ☐ Step 5: Add data-translate to Navigation Items

**Update each nav link:**
```html
<!-- Before: -->
<a class="nav-link" href="index.html">Home</a>

<!-- After: -->
<a class="nav-link" href="index.html" data-translate="nav_home">Accueil</a>
```

**All nav items to update:**
- `nav_home` → Accueil
- `nav_about` → À propos  
- `nav_services` → Services
- `nav_pages` → Pages
- `nav_faq` → FAQ
- `nav_404` → 404
- `nav_pricing` → Tarification
- `nav_portfolio` → Portfolio
- `nav_contact` → Contact
- `nav_blog` → Blog

### ☐ Step 6: Add data-translate to Page Content

**For headings:**
```html
<h2 data-translate="services_title">Nos Meilleurs Services</h2>
```

**For paragraphs:**
```html
<p data-translate="about_text1">Global Safety and Environment...</p>
```

**For buttons:**
```html
<button data-translate="portfolio_all">Tout</button>
```

### ☐ Step 7: Replace Lorem Ipsum Text

Find and replace all instances of:
- "Lorem ipsum dolor sit amet..." with real French content
- "Neque porro quisquam..." with real French content

### ☐ Step 8: Add Script Before `</body>`

```html
<!-- Add before closing body tag if not present: -->
<script src="js/translations.js"></script>
```

---

## Common Translation Keys

### Navigation
```
nav_home, nav_about, nav_services, nav_contact,
nav_pages, nav_faq, nav_pricing, nav_portfolio, nav_blog
```

### Services  
```
services_title
service1_title, service1_desc
service2_title, service2_desc
service3_title, service3_desc
service4_title, service4_desc
service5_title, service5_desc
service6_title, service6_desc
```

### About
```
about_title, about_text1, about_text2,
about_approach,
approach_item1, approach_item2, approach_item3
```

### Contact
```
contact_title, contact_desc, contact_info,
contact_name, contact_email_field, contact_subject,
contact_message, contact_send
```

### Footer
```
footer_about, footer_about_text, footer_links,
footer_latest_posts,
footer_post1, footer_post2, footer_post3
```

---

## Testing Checklist

After updating each page:

- ☐ Page loads without errors
- ☐ Language buttons visible in navigation
- ☐ Clicking FR shows French content
- ☐ Clicking EN shows English content  
- ☐ Clicking AR shows Arabic content (RTL layout)
- ☐ Active language button is highlighted
- ☐ Language persists on page reload
- ☐ All Lorem ipsum text is replaced

---

## Example: Complete Navigation Block

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
            <a class="nav-link" href="#" data-toggle="dropdown">
                <span data-translate="nav_pages">Pages</span> <i class="fas fa-sort-down"></i>
            </a>
            <div class="dropdown-menu dropdown-menu-right">
                <a class="dropdown-item" href="faq.html" data-translate="nav_faq">FAQ</a>
                <a class="dropdown-item" href="404.html">404</a>
                <a class="dropdown-item" href="pricing.html" data-translate="nav_pricing">Tarification</a>
            </div>
        </li>
        <li class="nav-item dropdown">
            <a class="nav-link" href="#" data-toggle="dropdown">
                <span data-translate="nav_portfolio">Portfolio</span> <i class="fas fa-sort-down"></i>
            </a>
            <div class="dropdown-menu dropdown-menu-right">
                <a class="dropdown-item" href="portfolio-3-col.html" data-translate="nav_portfolio_3col">Portfolio 3 colonnes</a>
                <a class="dropdown-item" href="portfolio-4-col.html" data-translate="nav_portfolio_4col">Portfolio 4 colonnes</a>
                <a class="dropdown-item" href="portfolio-item.html" data-translate="nav_portfolio_item">Élément de portfolio</a>
            </div>
        </li>
        <li class="nav-item dropdown">
            <a class="nav-link" href="#" data-toggle="dropdown">
                <span data-translate="nav_blog">Blog</span> <i class="fas fa-sort-down"></i>
            </a>
            <div class="dropdown-menu dropdown-menu-right">
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

---

## Need to Add New Translations?

1. Open `js/translations.js`
2. Add your key to all three language objects (fr, en, ar)
3. Use the key in your HTML with `data-translate="your_key"`

```javascript
// In translations.js:
fr: {
    your_key: "Votre texte en français",
    // ...
},
en: {
    your_key: "Your text in English",
    // ...
},
ar: {
    your_key: "النص الخاص بك بالعربية",
    // ...
}
```

---

**Pro Tip**: Copy the entire navigation block from [index.html](index.html) and paste it into other pages to save time!
