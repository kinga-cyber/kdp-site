# TODO - Site Finalization Tasks

## ✅ COMPLETED — Website Is Live

### Forms & Pages
- [x] Create /contact page (DONE - hero with contact info + form with Klaviyo integration)
- [x] Create /case-studies page (DONE - listing page with 5 real case studies)
- [x] Create case study detail pages (DONE - /case-studies/[slug].astro with 5 case studies)
- [x] Create /blog page (DONE - listing page created)
- [x] Create blog post template (DONE - /blog/[slug].astro created)
- [x] Create /consultation page (DONE - AI Strategy Session, $275)
- [x] Create /privacy page (DONE - full privacy policy with GDPR, CCPA, third-party services)
- [x] Create /webinar page (DONE - built locally, needs dates + headshot before push)

### Blog Content Migration
- [x] All 10 blog posts migrated from kingadow.com
- [x] Blog featured images migrated to /public/images/blog/

### Klaviyo Integration
- [x] All 4 site forms fixed and working (two-step API: profiles + subscriptions)
- [x] Contact form (contact.astro) — name, email, phone, message
- [x] ConsultationCTA (ConsultationCTA.astro) — name, email, message, always subscribes
- [x] Lead magnet form (index.astro + blueprint.astro) — name, email, lead_magnet: 'A/B Testing Agent Blueprint'
- [x] Calculator email capture (calculator.astro) — email, score, maturity level
- [x] Webinar form (webinar.astro) — name, email, preferred time (built, not yet pushed)

### Contact Form Adjustments
- [x] Remove the 3 service pill buttons (DONE)
- [x] ConsultationCTA: Remove newsletter checkbox, always subscribe to list (DONE)

### SEO & Search Engines
- [x] Page titles and meta descriptions on all pages
- [x] Open Graph + Twitter Card tags (via Layout.astro)
- [x] Canonical URLs (auto-generated)
- [x] Organization, Service, FAQ, Event schema (JSON-LD)
- [x] Sitemap generated + submitted to Google Search Console
- [x] Google Search Console verified (www.kingadow.com property)
- [x] Google Analytics 4 (G-D1HSSBWRMM) live
- [x] robots.txt + llms.txt
- [x] Favicon (.ico + .svg)
- [x] Image alt text audit

### WordPress Migration
- [x] 60+ 301 redirects in public/_redirects
- [x] Wildcard redirects for /product/*, /projects/*, /career/*, /tag/*

### Calendly
- [x] Calendly widget embed on consultation page

---

## ✅ COMPLETED — Feb 9 Session

- [x] Lead magnet updated to "A/B Testing Agent Blueprint" (homepage + /blueprint page)
- [x] Webinar page live with custom registration form (captures time slot)
- [x] Contact page copy updated
- [x] Kinga photo updated (kinga-paris.jpg) on About page
- [x] Certifications updated (3 new certs in grid layout)
- [x] Featured On section: 4 cards (Mavlers, podcast, WTE, LoyaltyLion)
- [x] Partner logos updated on Services page (uniform 800×300px)
- [x] Site logo updated (600×256px)
- [x] Honeypot spam protection on all 5 forms
- [x] Global OG share image added (global-og-image.jpg)
- [x] Portfolio page built (/portfolio — hidden from nav until images ready)
- [x] Portfolio image guide doc created

---

## 🔲 REMAINING

### 1. Webinar Page — Polish
- [ ] Add headshot image: `kinga-headshot.jpg` (680×680px square) → `/public/images/about/`
- [ ] Confirm webinar dates → Update placeholders in `webinar.astro` (search for `PLACEHOLDER`)
- [ ] Time card selection UX: When a time is selected, show a colored border on the selected card in the form area + darker font for "Selected: ..." text
- [ ] Update "What You'll Learn" section content (Kinga to provide new copy)
- [ ] Optional: Create separate Klaviyo list for webinar registrants
- [ ] Set up Klaviyo notification flow (trigger: Added to List, filter: webinar_registered = true)

### 2. Portfolio Page
- [ ] Provide email screenshots (700px wide, full-length, JPG/PNG)
- [ ] Save to `/public/images/portfolio/`
- [ ] Update `portfolioItems` array in `portfolio.astro` with titles/categories
- [ ] Add Portfolio back to navigation when ready
- [ ] See `01-docs/handoffs/PORTFOLIO-IMAGE-GUIDE.md` for full specs

### 3. About Page — Remaining
- [ ] Remove white backgrounds/drop shadows from certificate images (noted for next push)
- [ ] Certification alt text (update from generic "Certificate 1/2/3" to actual names)

### 4. Lead Magnet Delivery
- [ ] Decide delivery method: Klaviyo email with PDF attached, or direct download?

### 5. OG Share Images (Optional/Low Priority)
- [ ] Create per-page OG share images (1200×630px) for social media previews
- [ ] Save to `/public/images/og/og-[page].jpg`

### 6. Stripe Payment Link (Optional)
- [ ] Add Stripe payment link ($275) if payment step is wanted before Calendly

---

## Notes
- All Klaviyo forms use the same list (W3XhAb) — can be split per form if needed
- Onsite Klaviyo tracking script (SqUgaK) runs globally via Layout.astro
- Netlify auto-deploys from GitHub main branch (~60 seconds)
- See `01-docs/handoffs/HANDOFF-2026-02-08.md` for full handoff documentation
- See `WEBINAR-PAGE-HANDOFF.md` for detailed webinar page documentation
