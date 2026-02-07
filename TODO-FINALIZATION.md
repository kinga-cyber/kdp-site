# TODO - Site Finalization Tasks

## Forms & Pages to Create
- [x] Create /contact page (DONE - hero with contact info + form with Klaviyo integration)
- [x] Create /case-studies page (DONE - listing page with 5 real case studies)
- [x] Create case study detail pages (DONE - /case-studies/[slug].astro with 5 case studies)
- [x] Create /blog page (DONE - listing page created)
- [x] Create blog post template (DONE - /blog/[slug].astro created)
- [x] Create /consultation page (DONE - AI Strategy Session, $275)
- [x] Create /privacy page (DONE - full privacy policy with GDPR, CCPA, third-party services)

## Paid Consultation Page - Action Items
- [ ] Add Stripe payment link (if needed — "Book Your Session" button currently scrolls to Calendly)
- [x] Add Calendly widget embed (DONE — calendly.com/kingadow/60min embedded in booking section)

## Blog Content Migration
The blog listing page and individual post template are ready. Posts have placeholder content that needs to be migrated from the current website:

**Posts to migrate content from kingadow.com:**
- [x] Boosting Your Food Brand's Success with Advanced Email Marketing Strategies Using Klaviyo
- [x] Strategies for Capitalizing on Traffic and Growth: Gamification, Social Engagement and Email Acquisition
- [x] Act Now: Navigating Google and Yahoo's Urgent Sender Requirements for 2024
- [x] The Crucial Difference Between Copywriters and Email Marketing Copywriters
- [x] The Best Ecommerce Partners for Email Marketing: A KDP Guide
- [x] The Power of Technology in Beauty: Geske at Cosmoprof Show
- [x] How Davines Nailed Their Email Marketing Strategy at Cosmoprof Bologna!
- [x] Boost Your Email Marketing Strategy with Klaviyo and Google Ads
- [x] Discover How The Role of AI Is Growing In Business And How You Can Leverage It!
- [x] Funnel Retail Traffic To Your Online Store & Boost Sales

**Blog images:**
- [x] Add featured images for each blog post to /public/images/blog/ (migrated from kingadow.com)

## Klaviyo Integration
- [x] All 4 site forms connected to Klaviyo (Company ID: SqUgaK, List: W3XhAb)
- [x] Contact form (contact.astro) — sends name, email, phone, message, services
- [x] ConsultationCTA form (ConsultationCTA.astro) — sends name, email, message + optional newsletter subscribe
- [x] Lead magnet form (index.astro) — sends name, email, lead_magnet property
- [x] Calculator email capture (calculator.astro) — sends email, score, maturity level
- See `01-docs/planning/FORMS-REFERENCE.md` for full technical details

## Buttons Currently Linking to /contact (NOW WORKING ✓)
- Home page hero: 'Schedule a Free Consultation' button ✓
- Services page hero: 'Schedule a Consultation' button ✓
- Footer nav: 'CONTACT US' link ✓

## Contact Form Adjustments
- [x] Remove the 3 service pill buttons (DONE — Email Marketing, SMS Marketing, Loyalty Program removed)
- [x] ConsultationCTA: Remove newsletter checkbox, always subscribe to list (DONE)

## SEO & Structured Data
- [x] Page titles and meta descriptions on all pages
- [x] Open Graph + Twitter Card tags (via Layout.astro)
- [x] Canonical URLs (auto-generated)
- [x] Organization schema (JSON-LD) in Layout.astro
- [x] Social profile URLs in schema sameAs (LinkedIn, Instagram, Substack, YouTube)
- [x] Service schema (JSON-LD) on services page
- [x] FAQ schema (JSON-LD) on consultation page
- [x] Sitemap generation (@astrojs/sitemap installed + configured)
- [x] robots.txt with sitemap reference
- [x] Favicon (.ico + .svg)
- [ ] Create per-page OG share images (1200x630px) — need design creatives
- [x] Set up Google Analytics 4 (G-D1HSSBWRMM)
- [x] Google Search Console (already verified — property since 2014)
- [x] Image alt text audit across all pages (21 bullet.png + footer logo fixed)

## Notes
- All Klaviyo forms use the same list (W3XhAb) — confirmed by client as intentional
- Onsite Klaviyo tracking script (SqUgaK) runs globally via Layout.astro

