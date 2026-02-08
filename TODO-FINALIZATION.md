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

## 🔲 REMAINING — Kinga's Action Items

### 1. Webinar Page — Finalize & Push
- [ ] Add headshot image: `kinga-headshot.jpg` (680×680px square) → `/public/images/about/`
- [ ] Confirm webinar dates → Update placeholders in `webinar.astro` (search for `PLACEHOLDER`)
- [ ] Optional: Create separate Klaviyo list for webinar registrants
- [ ] Set up Klaviyo notification flow (trigger: Added to List, filter: webinar_registered = true)
- [ ] Push to GitHub once finalized

### 2. "Featured In" Images — About Page
- [ ] Provide new Featured In logos/screenshots to add to the carousel
- [ ] Current items: Women Talk eCommerce, LoyaltyLion
- [ ] Unused images already in folder: featured-moxielash-winner.png, featured-kinga-dow-productions.png
- [ ] Image specs: PNG, ~350px wide, save to `/public/images/about/featured-[name].png`

### 3. Certification Images — About Page
- [ ] Provide new/updated certification images
- [ ] Current: AI Fluency (Anthropic), Klaviyo Product, CXL
- [ ] Image specs: PNG, ~237px tall, save to `/public/images/about/cert-[name].png`

### 4. New Lead Magnet — ✅ Copy & Pages Done
- [x] Homepage section updated: "Get The A/B Testing Agent Blueprint"
- [x] Dedicated landing page built: `/blueprint`
- [x] Klaviyo properties updated to 'A/B Testing Agent Blueprint'
- [ ] Provide the actual PDF file → save to `/public/downloads/ab-testing-agent-blueprint.pdf`
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
