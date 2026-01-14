# Google AdSense Integration Guide for CEEI Website

## Overview
Google AdSense has been integrated into your website to help you earn money through advertising. This guide will help you complete the setup.

## Step 1: Sign Up for Google AdSense

1. Go to **https://www.google.com/adsense/**
2. Click "Get Started" or "Sign Up"
3. You'll need:
   - A Google account (Gmail)
   - Your website URL: `https://www.ceei-glosec.com` (or your actual domain)
   - Your mailing address (for payments)
   - Phone number for verification

4. Submit your application and wait for approval (usually 1-3 days, sometimes up to 2 weeks)

## Step 2: Get Your Publisher ID

Once approved, you'll receive an email from Google. Then:

1. Log into your AdSense account
2. Go to **Account → Account Information**
3. Find your **Publisher ID** (looks like: `ca-pub-1234567890123456`)
4. Copy this ID

## Step 3: Update Your Website

Replace `ca-pub-XXXXXXXXXXXXXXXXX` with your actual Publisher ID in these files:

### Files to Update:
1. `/home/sophonie/Sopho/CEEI/index.html` (Line ~53)
2. `/home/sophonie/Sopho/CEEI/portfolio-item.html` (Line ~20)
3. `/home/sophonie/Sopho/CEEI/portfolio-3-col.html` (Line ~20)
4. `/home/sophonie/Sopho/CEEI/about.html` (Line ~37)

**Find:**
```html
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXXXXXXX"
```

**Replace with:**
```html
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-YOUR_ACTUAL_ID"
```

## Step 4: Add Ad Units to Your Pages

### Auto Ads (Easiest Option)
With the AdSense script in your `<head>`, Google will automatically place ads. No additional code needed!

### Manual Ad Placement (More Control)

Use the ad units from `/home/sophonie/Sopho/CEEI/includes/adsense-units.html`:

#### Recommended Ad Placements:

**1. Homepage (index.html)**
- Add a horizontal banner ad after the header
- Add a content ad between service sections
- Add a multiplex ad before the footer

**2. Portfolio Pages**
- Add a sidebar ad in the details column
- Add a content ad between portfolio items
- Add an in-feed ad in the portfolio grid

**3. About/Services Pages**
- Add a horizontal banner below the page title
- Add a sidebar ad next to content
- Add a content ad in the middle of long text

### Example: Adding a Horizontal Banner Ad

```html
<!-- After opening <body> tag, add: -->
<div class="header-ad ad-container">
    <ins class="adsbygoogle"
         style="display:block"
         data-ad-client="ca-pub-YOUR_PUBLISHER_ID"
         data-ad-slot="YOUR_AD_SLOT_ID"
         data-ad-format="horizontal"
         data-full-width-responsive="true"></ins>
    <script>
         (adsbygoogle = window.adsbygoogle || []).push({});
    </script>
</div>
```

## Step 5: Create Ad Units in AdSense Dashboard

To get ad slot IDs for manual placement:

1. Log into AdSense
2. Go to **Ads → By ad unit → Display ads**
3. Click **"+ New ad unit"**
4. Choose ad type (Responsive, Square, etc.)
5. Name your ad unit (e.g., "Homepage-Header-Banner")
6. Click **"Create"**
7. Copy the generated code - the `data-ad-slot` number is your ad slot ID

Repeat for each ad placement you want.

## Step 6: Verify Installation

1. Upload your updated files to your live server
2. Visit your website
3. Right-click → "Inspect" → Check Console for any AdSense errors
4. In AdSense dashboard, go to **Sites** and verify your site status

## AdSense Policies - IMPORTANT!

To avoid account suspension:

✅ **DO:**
- Create original, valuable content
- Place ads naturally in your layout
- Follow AdSense program policies
- Keep content family-friendly

❌ **DON'T:**
- Click your own ads (NEVER!)
- Ask others to click your ads
- Place ads on pages with prohibited content
- Use misleading ad labels

## Expected Earnings

- **Page Views:** More traffic = more earnings
- **Click-Through Rate (CTR):** Typically 1-3%
- **Cost Per Click (CPC):** Varies by industry ($0.20 - $15+)
- **Estimated:** 1,000 page views might earn $1-$5 (depends on many factors)

**For Tchad/African traffic:** CPCs are typically lower ($0.10-$0.50), but can still generate meaningful income with good traffic.

## Optimization Tips

1. **Place ads above the fold** (visible without scrolling)
2. **Use responsive ad units** (work on all devices)
3. **Don't overdo it** (too many ads hurt user experience)
4. **Test different placements** (use AdSense experiments)
5. **Focus on content quality** (more visitors = more earnings)
6. **Enable auto ads** (let Google optimize placement)

## Payment Information

1. When you reach $10, Google sends a PIN to verify your address
2. Enter the PIN in your AdSense account
3. Add payment method (bank transfer, Western Union, check)
4. Minimum payout: $100
5. Payments sent monthly (around the 21st)

## Recommended Ad Placements for Your Site

### Homepage:
```
Header
↓
[Horizontal Banner Ad]
↓
Services Section
↓
[Responsive Content Ad]
↓
Portfolio Section
↓
Testimonials
↓
[Multiplex Ad]
↓
Footer
```

### Portfolio Detail Page:
```
Breadcrumbs
↓
[Horizontal Banner]
↓
Image | Project Details + [Sidebar Ad]
↓
Description + [Content Ad]
↓
Related Projects
↓
Footer
```

## Files Created/Modified

### New Files:
1. `css/adsense.css` - Styling for ad containers
2. `includes/adsense-units.html` - Ready-to-use ad unit templates
3. `docs/ADSENSE-SETUP-GUIDE.md` - This guide

### Modified Files:
1. `index.html` - Added AdSense script
2. `portfolio-item.html` - Added AdSense script
3. `portfolio-3-col.html` - Added AdSense script
4. `about.html` - Added AdSense script

## Support Resources

- **AdSense Help Center:** https://support.google.com/adsense
- **Policy Center:** https://support.google.com/adsense/answer/48182
- **AdSense Community:** https://support.google.com/adsense/community

## Troubleshooting

**Problem:** Ads not showing
- Wait 24-48 hours after adding code
- Check browser's ad blocker is off
- Verify Publisher ID is correct
- Check AdSense account is active

**Problem:** "Ad serving has been limited"
- Review policy violations in your AdSense account
- Fix any policy issues
- Wait for review (can take weeks)

**Problem:** Low earnings
- Increase website traffic
- Improve content quality
- Optimize ad placement
- Enable auto ads

## Next Steps

1. ✅ AdSense code added to website
2. ⏳ Sign up for AdSense account
3. ⏳ Get approved
4. ⏳ Replace placeholder IDs with real IDs
5. ⏳ Add manual ad units (optional)
6. ⏳ Monitor performance in AdSense dashboard

---

**Questions?** Contact Google AdSense support or refer to their extensive help documentation.

Good luck with monetization! 🎯💰
