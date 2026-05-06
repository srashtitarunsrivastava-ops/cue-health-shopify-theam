# CueHealth — Shopify Theme Build: Master Reference

> Single source of truth. Read this before resuming work in any session.

---

## STORE & BRAND DETAILS

| Field | Value |
|---|---|
| **Brand Name** | CueHealth |
| **Tagline** | Your Cue to Healthy Life |
| **Legal Entity** | VOXPLY LIFE SCIENCES LLP |
| **GSTIN** | 09ABBFV9747M1Z9 |
| **GST State** | Uttar Pradesh |
| **GST Effective** | 17/04/2026 |
| **Shopify Store** | ayura-9977.myshopify.com |
| **Shopify Admin** | https://admin.shopify.com/store/ayura-9977 |
| **Theme** | Dawn (active, ID pulled via `shopify theme pull`) |
| **Domain** | cuehealth.in (connected) |
| **Account Email** | srashti.tarun.srivastava@gmail.com |

---

## CONTACT INFORMATION

| Channel | Value |
|---|---|
| **Email** | hello@cuehealth.in |
| **WhatsApp** | 7455918832 |
| **WhatsApp Link** | https://wa.me/917455918832 |
| **Address** | Upper Ground Floor, 003, Kh No 485/Marwah Homes, Sector 73, Sarfabad, Noida, Gautambuddha Nagar, UP - 201301 |

---

## TEAM / PARTNERS

| Name | Role |
|---|---|
| Tarun Srivastava | Designated Partner |
| Srashti Khare | Designated Partner |
| Ashutosh | Designated Partner |

---

## BRAND COLORS

| Token | HEX | Usage |
|---|---|---|
| `--ch-primary` | `#1B4332` | Logo green, headers, primary buttons |
| `--ch-primary-light` | `#2D6A4F` | Hover states, links |
| `--ch-primary-dark` | `#0D2818` | Dark backgrounds, footer |
| `--ch-accent` | `#40916C` | CTAs, highlights, badges |
| `--ch-bg` | `#FFFFFF` | Main background |
| `--ch-surface` | `#F8FAF9` | Alternate section backgrounds |
| `--ch-text` | `#1A1A1A` | Body text |
| `--ch-text-muted` | `#6B7280` | Descriptions, secondary text |
| `--ch-success` | `#059669` | Success states |
| `--ch-warning` | `#D97706` | Warning/sale badges |
| `--ch-border` | `#E5E7EB` | Dividers, card borders |

---

## TECH STACK

| Component | Status | Notes |
|---|---|---|
| Shopify Store | ✅ Live | ayura-9977.myshopify.com |
| Dawn Theme | ✅ Active | Customized with CueHealth branding |
| Domain (cuehealth.in) | ✅ Connected | SSL auto-provisioned |
| ShipRocket | ✅ Connected | Pan-India shipping |
| Razorpay | ⏳ In Progress | Use Shopify Payments in the interim |
| FSSAI | ⏳ In Progress | Add license number to footer when received |
| Social Media | ⏳ Pending | Update links when handles are ready |
| Products | 5 created | Need 4–5 images each + full descriptions |
| Judge.me Reviews | ⏳ Install | From Shopify App Store (free plan) |
| Klaviyo / Privy | ⏳ Install | Email capture popup |
| GA4 Tracking | ⏳ Add | Measurement ID needed |
| Meta Pixel | ⏳ Add | Pixel ID needed |

---

## HOMEPAGE SECTION ORDER (miduty.in structure)

```
1. Announcement Bar      ← Header Group (built-in Dawn)
2. Sticky Header         ← Header Group (built-in Dawn)
3. Custom Hero Banner    ← sections/custom-hero-banner.liquid  ✅
4. Trust Badges Row      ← sections/trust-badges-row.liquid    ✅
5. Featured Products     ← sections/featured-collection        ✅
6. Shop by Concern       ← sections/shop-by-concern.liquid     ✅
7. Why Choose CueHealth  ← sections/why-choose-us.liquid       ✅
8. Customer Testimonials ← sections/customer-testimonials.liquid ✅
9. Blog Preview          ← sections/featured-blog              ✅
10. Newsletter Signup    ← sections/newsletter                 ✅
```

---

## PRODUCT PAGE FEATURES

```
✅ Product image gallery
✅ Title, price (MRP strikethrough), variant picker
✅ Quantity + Add to Cart + Buy Now
✅ Trust badges: FSSAI / Lab Tested / Free Shipping / Secure Payment
✅ Accordion tabs: Description / Ingredients / How to Use / FAQ
✅ Sticky Add-to-Cart bar (shows on scroll past ATC button)
⏳ Related Products section (Dawn's built-in related-products section)
⏳ Judge.me Reviews widget (after app install)
```

---

## COLLECTION PAGE FEATURES

```
✅ Product grid (4 col desktop, 2 col mobile)
✅ Show ratings enabled
✅ Quick add enabled
⏳ Filter sidebar (needs Shopify Search & Discovery app)
```

---

## STATIC PAGES STATUS

| Page | Section File | Template File | Status |
|---|---|---|---|
| About Us | sections/page-about-us.liquid | templates/page.about-us.json | ✅ Created |
| Contact Us | sections/page-contact-cuehealth.liquid | templates/page.contact.json | ✅ Created |
| Shipping Policy | sections/page-shipping-policy.liquid | templates/page.shipping-policy.json | ✅ Created |
| Return & Refund | sections/page-refund-policy.liquid | templates/page.refund-policy.json | ✅ Created |
| Privacy Policy | sections/page-privacy-policy.liquid | templates/page.privacy-policy.json | ✅ Created |
| Terms of Service | sections/page-terms.liquid | templates/page.terms.json | ✅ Created |

---

## FOOTER STRUCTURE (4 Columns)

```
Col 1: CueHealth logo + "Your Cue to Healthy Life" + social icons
Col 2: Quick Links (Shop All, About Us, Blog, Contact)
Col 3: Policies (Shipping, Returns, Privacy, Terms)
Col 4: Contact (Email, WhatsApp, Address)
Bottom Bar: © 2026 CueHealth by Voxply Life Sciences LLP | GSTIN | FSSAI [Pending] | Address
```

---

## CUSTOM FILES CREATED (all in theme root)

### assets/
- `custom-cuehealth.css` — Brand CSS variables + all component styles
- `custom-cuehealth.js` — WhatsApp button, sticky ATC, testimonials carousel, accordion tabs

### sections/ (custom)
- `custom-hero-banner.liquid` — Homepage hero section
- `trust-badges-row.liquid` — FSSAI / Lab Tested / Free Shipping / etc.
- `why-choose-us.liquid` — 6-block USP grid
- `customer-testimonials.liquid` — Auto-playing testimonial carousel
- `shop-by-concern.liquid` — Category circles grid
- `page-about-us.liquid` — About Us page content
- `page-contact-cuehealth.liquid` — Contact Us with form + details
- `page-shipping-policy.liquid` — Shipping policy content
- `page-refund-policy.liquid` — Return & refund policy
- `page-privacy-policy.liquid` — Privacy policy
- `page-terms.liquid` — Terms of Service

### templates/
- `page.about-us.json`
- `page.shipping-policy.json`
- `page.refund-policy.json`
- `page.privacy-policy.json`
- `page.terms.json`

### Modified files
- `layout/theme.liquid` — CSS/JS linked, WhatsApp button, Sticky ATC bar
- `sections/footer.liquid` — GSTIN bar, Voxply copyright
- `sections/footer-group.json` — 4-column footer defaults
- `sections/main-product.liquid` — Trust badges + accordion tabs
- `templates/index.json` — Full homepage section order
- `templates/page.contact.json` — Updated to use enhanced contact section
- `assets/custom-cuehealth.css` — All styles

---

## RESUME PROTOCOL

If session ends, open this file and Claude Code will know exactly where things stand. Then run:

```
cd c:\cue-health-shopify-theam
shopify theme push --store ayura-9977.myshopify.com
```

---

## ACTIONS STILL NEEDED IN SHOPIFY ADMIN

1. **Create Pages** (Shopify Admin > Online Store > Pages):
   - "About Us" → set template to `page.about-us`
   - "Contact Us" → set template to `page.contact` (already exists)
   - "Shipping Policy" → set template to `page.shipping-policy`
   - "Return & Refund Policy" → set template to `page.refund-policy`
   - "Privacy Policy" → set template to `page.privacy-policy`
   - "Terms of Service" → set template to `page.terms`

2. **Create Navigation Menus** (Shopify Admin > Online Store > Navigation):
   - Footer menu with links to all pages above
   - Main menu with: Shop All, About Us, Blog, Contact

3. **Create Collections** (Shopify Admin > Products > Collections):
   - All Products, Bestsellers, Women's Health, Sleep & Recovery, Immunity, Gut Health, Energy & Focus

4. **Install Apps** (Shopify App Store):
   - Judge.me (reviews) — free plan
   - Klaviyo or Privy (email popups)

5. **Add Blog Posts** (Shopify Admin > Online Store > Blog Posts):
   - At least 3 posts for homepage blog preview

6. **Metafields** (Shopify Admin > Settings > Custom data > Products):
   - `custom.ingredients` (Rich text)
   - `custom.how_to_use` (Rich text)
   - `custom.faq` (Multi-line text)

7. **Settings > Policies** — Fill in policy content (Shopify checkout uses these)

8. **Settings > Social media** — Add Instagram, Facebook, YouTube handles

9. **DNS** — If not done:
   - CNAME: www → shops.myshopify.com
   - A record: @ → 23.227.38.65

---

## PRE-LAUNCH CHECKLIST

- [ ] All homepage sections render correctly (desktop + mobile)
- [ ] Product pages: images, price, ATC, accordion tabs working
- [ ] All static pages accessible from footer nav
- [ ] Contact form submits successfully
- [ ] WhatsApp button opens correct chat
- [ ] Sticky ATC bar appears on product page scroll
- [ ] Testimonial carousel auto-plays
- [ ] Footer shows GSTIN and address correctly
- [ ] Mobile responsive (test on actual phone)
- [ ] Google PageSpeed score ≥ 70
- [ ] SSL active at https://cuehealth.in
- [ ] Remove password protection (Settings > Preferences)
- [ ] Test a real order end-to-end
