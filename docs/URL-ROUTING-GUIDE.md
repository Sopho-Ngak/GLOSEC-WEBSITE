# URL Routing Solution

## Overview
This solution provides clean URLs in production while maintaining compatibility with local development.

## How It Works

### Both Local and Production
- All internal links use `.html` extensions (e.g., `index.html`, `about.html`, `contact.html`)
- This ensures pages work correctly in local development without server configuration
- The `.htaccess` file in production automatically redirects `.html` URLs to clean URLs

### Production (cPanel) - Clean URLs
When deployed to cPanel:
- Users access: `/home`, `/a-propos`, `/nos-services`, `/contact`
- `.htaccess` handles the URL rewriting
- If someone visits `/about.html`, they're redirected to `/a-propos` (301 redirect)
- All links work with clean, SEO-friendly URLs

### Local Development
- Use `.html` extensions directly: `index.html`, `about.html`, etc.
- No server configuration needed
- Works with any local server (Live Server, Five Server, etc.)

## Implementation Details

### 1. .htaccess File
Located in the root directory, this file:
- Enables URL rewriting (`RewriteEngine On`)
- Maps clean URLs to .html files (e.g., `/home` → `index.html`)
- Redirects .html URLs to clean URLs (301 redirects for SEO)
  - Example: `/index.html` → `/home`
  - Example: `/about.html` → `/a-propos`
- Handles browser caching and GZIP compression

### 2. HTML Files Structure
All HTML files (header, footer, and main pages) use `.html` extensions in links:
```html
<a href="index.html">Home</a>
<a href="about.html">About</a>
<a href="services.html">Services</a>
```

This works because:
- **Local**: Links work directly
- **Production**: `.htaccess` redirects to clean URLs automatically

## URL Mappings

| Clean URL      | HTML File              |
|---------------|------------------------|
| /home         | index.html            |
| /accueil      | index.html            |
| /a-propos     | about.html            |
| /nos-services | services.html         |
| /contact      | contact.html          |
| /faq          | faq.html              |
| /blog         | blog.html             |
| /article      | blog-post.html        |
| /portfolio    | portfolio-3-col.html  |
| /projets      | portfolio-3-col.html  |
| /portfolio-4  | portfolio-4-col.html  |
| /projet-detail| portfolio-item.html   |
| /tarifs       | pricing.html          |

## Testing

### Local Development
1. Start your local server (e.g., Live Server, Five Server)
2. Open the site (e.g., `http://localhost:5500/index.html`)
3. Click on navigation links - they work with `.html` extensions
4. All pages load correctly without any 404 errors

### Production (cPanel)
1. Upload all files to your cPanel hosting (including `.htaccess`)
2. Ensure `.htaccess` is in the root directory
3. Access your site via the domain (e.g., `https://www.ceei-glosec.com`)
4. URLs appear clean in the browser (e.g., `/home`, `/a-propos`)
5. If someone visits `index.html` directly, they're redirected to `/home`
6. All navigation works with clean URLs

## Adding New Pages

When adding new pages:

1. **Create the HTML file** (e.g., `new-page.html`)

2. **Add URL mapping to `.htaccess`**:
   ```apache
   # Map clean URL to HTML file
   RewriteRule ^new-page$ new-page.html [L]
   
   # Redirect .html to clean URL (for SEO)
   RewriteCond %{THE_REQUEST} /new-page\.html [NC]
   RewriteRule ^new-page\.html$ /new-page [R=301,L]
   ```

3. **Use `.html` extension in all links**:
   ```html
   <a href="new-page.html">New Page</a>
   ```

That's it! The page will work locally with `.html` and show clean URLs in production.

## Benefits

✅ **Works locally** - No server configuration needed
✅ **Clean URLs in production** - Better for SEO and user experience
✅ **Simple maintenance** - Just use `.html` in all links
✅ **SEO friendly** - 301 redirects preserve search rankings
✅ **Automatic** - .htaccess handles everything in production

## Troubleshooting

### Links not working locally
- Ensure you're using `.html` extensions in links
- Check that files exist in the correct location
- Clear browser cache and try again

### Clean URLs not working in production
- Verify `.htaccess` file is uploaded to the root directory
- Check that mod_rewrite is enabled on your server (most cPanel hosts have it enabled)
- Review cPanel error logs for any issues
- Test by accessing a page directly: `yourdomain.com/home`

### 404 errors in production
- Ensure the `.htaccess` file is properly formatted
- Check file permissions (should be 644 for .htaccess)
- Verify all HTML files are uploaded
- Check server error logs in cPanel
