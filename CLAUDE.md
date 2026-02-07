# KDP Website — Project Context

## Project Overview
Website for **Kinga Dow Productions** (kingadow.com), an AI-native retention marketing agency for e-commerce brands.

## Tech Stack
- **Framework:** Astro 5.x (static site generator)
- **Styling:** Tailwind CSS 4.x (via Vite plugin)
- **Language:** TypeScript (strict mode)
- **Hosting:** Netlify (auto-deploys from GitHub on push to `main`)
- **Repo:** github.com/kinga-cyber/kdp-site

## Deployment
- Push to `main` branch triggers auto-deploy on Netlify
- Build command: `npm run build`
- Output directory: `dist/`
- No server-side rendering — fully static

## Project Structure
```
kdp-site/
├── src/
│   ├── components/     # Header, Footer, ConsultationCTA, AnimationObserver
│   ├── layouts/        # Layout.astro (main wrapper with SEO, analytics, schema)
│   ├── pages/          # File-based routing (index, about, services, etc.)
│   └── styles/         # global.css (Tailwind + custom design tokens)
├── public/             # Static assets (fonts, images, favicon, robots.txt)
├── astro.config.mjs    # Astro config (sitemap integration, site URL)
├── TODO-FINALIZATION.md # Outstanding tasks tracker
└── package.json
```

## Pages
| Route | File | Description |
|-------|------|-------------|
| `/` | index.astro | Home — hero, lead magnet, services overview, testimonials |
| `/services` | services.astro | Full service offerings with Service schema |
| `/about` | about.astro | About Kinga, credentials, featured in |
| `/case-studies` | case-studies.astro | Case study listing (5 studies) |
| `/case-studies/[slug]` | case-studies/[slug].astro | Individual case study pages |
| `/blog` | blog.astro | Blog listing (10 posts) |
| `/blog/[slug]` | blog/[slug].astro | Individual blog posts |
| `/calculator` | calculator.astro | Retention maturity assessment tool |
| `/contact` | contact.astro | Contact form + info |
| `/consultation` | consultation.astro | Paid AI Strategy Session ($275) with FAQ schema |
| `/privacy` | privacy.astro | Privacy policy (GDPR, CCPA, third-party disclosures) |

## Brand
- **Colors:** Navy `#3F455D`, Gold `#BA9200`, Cream `#F6EFE6`, Grey `#333333`, Sage `#59A56D`
- **Fonts:** Aktiv Grotesk (headlines), Montserrat (body), Silver South Script (accents)
- **Social:** LinkedIn, Instagram, Substack, YouTube (all in footer + JSON-LD schema)

## Integrations
- **Google Analytics 4:** G-D1HSSBWRMM (in Layout.astro)
- **Klaviyo:** Company ID `SqUgaK`, List `W3XhAb` (tracking + 4 forms)
- **Sitemap:** Auto-generated via @astrojs/sitemap → sitemap-index.xml

## Klaviyo Forms (all connected, all using list W3XhAb)
| Form | File | Endpoint | Data |
|------|------|----------|------|
| Contact | contact.astro | `client/subscriptions/` | Name, email, phone, message, services |
| Consultation CTA | ConsultationCTA.astro | `client/profiles/` + `client/subscriptions/` | Name, email, message, newsletter opt-in |
| Lead Magnet | index.astro | `client/subscriptions/` | Name, email |
| Calculator | calculator.astro | `client/subscriptions/` | Email, score, maturity level |

See `01-docs/planning/FORMS-REFERENCE.md` for full technical details.

## SEO Status
All pages have: page titles, meta descriptions, canonical URLs, OG tags, Twitter cards.
Schema markup: Organization (global), Service (services page), FAQ (consultation page).
Social sameAs: LinkedIn, Instagram, Substack, YouTube.

## Outstanding Tasks
See `TODO-FINALIZATION.md` for the full list. Key remaining items:
- [ ] Stripe payment link for consultation page
- [ ] Calendly widget embed for consultation page
- [ ] Per-page OG share images (1200x630px) — need design creatives
- [ ] Update contact form service pill options (currently: Email Marketing, SMS Marketing, Loyalty Program)

## Documentation
Project docs live in `/Users/kingadow/Desktop/files/KDP-Website-Redesign/01-docs/`:
- `planning/` — Sitemap, SEO checklist, asset inventory
- `design/` — Style guide, typography reference
- `content/` — Website copy, testimonials
- `handoffs/` — Session handoff documents
