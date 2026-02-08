# Webinar Landing Page - Development Handoff

**Created:** February 8, 2026
**Page URL:** `/webinar` (kingadow.com/webinar)
**File:** `src/pages/webinar.astro`

---

## Overview

Free webinar registration page for "From Doer to Director: AI-Powered Email Marketing with Claude"

---

## What's Done

- [x] Full page built following existing site patterns (based on consultation.astro)
- [x] Hero section with headline, subtitle, CTA
- [x] "What You'll Learn" section (4 items)
- [x] "This Webinar Is For You If..." section (4 items)
- [x] Registration section with 3 time option cards + form
- [x] About Kinga section with headshot, bio, stats
- [x] FAQ section (4 questions with accordion)
- [x] Final CTA section
- [x] SEO: Meta title, description, Open Graph
- [x] Schema.org markup (Event + FAQ)
- [x] All animations (fade-in-up with delays)
- [x] Mobile responsive (matches existing patterns)
- [x] Klaviyo integration (two-step: profile + subscription, company_id in URL)
- [x] Custom form with Name, Email, Preferred Time (radio buttons)
- [x] Time card click interactivity (selects matching radio button)
- [x] Success message (outside form so it stays visible)
- [x] `is:inline` script (no Astro module timing issues)

---

## What Needs To Be Done

### 1. Update Dates (Placeholders)

**Current placeholders to update:**

| Location | Current Value | Update To |
|----------|--------------|-----------|
| Time Option 1 | "Thursday, Feb 12" | Actual date |
| Time Option 2 | "Thursday, Feb 12" | Actual date |
| Time Option 3 | "Friday, Feb 13" | Actual date |
| Event Schema startDate | "2026-02-12T17:00:00+01:00" | Actual ISO date |
| Event Schema endDate | "2026-02-12T18:00:00+01:00" | Actual ISO date |

Search for `PLACEHOLDER` comments in the file.

---

### 2. Klaviyo List

**Current setup:** Form submits to the same list as all other forms (W3XhAb).

**If you want a separate webinar list:**
1. Create a new list in Klaviyo (e.g., "Webinar - Claude Email Marketing")
2. Update `listId` variable in the script (search for `var listId = 'W3XhAb'`)

**Klaviyo properties stored on profile:**
- `webinar_registered` (boolean) — true
- `webinar_name` (string) — "From Doer to Director: AI-Powered Email Marketing with Claude"
- `webinar_preferred_time` (string) — "2:00 PM CET" / "5:00 PM CET" / "7:00 PM CET"
- `source` (string) — "website_webinar_form"
- `custom_source` — "Webinar Registration - Claude Email Marketing"

**Notification flow variables for Klaviyo email:**
```
{{ person|lookup:'first_name' }}
{{ person|lookup:'email' }}
{{ person|lookup:'webinar_preferred_time' }}
{{ person|lookup:'source' }}
```

---

### 3. Kinga's Headshot

**Location:** About Kinga section

**Current:** References `/images/about/kinga-headshot.jpg`

If this image doesn't exist, either:
- Add the image to `/public/images/about/`
- Update the `src` path to an existing photo

The image has an `onerror` fallback so it won't break if missing.

---

## Time Slot Details

Based on European + US audience overlap:

| Option | Europe (CET) | US Eastern | US Pacific |
|--------|-------------|------------|------------|
| 1 | 2:00 PM | 8:00 AM | 5:00 AM |
| 2 | 5:00 PM | 11:00 AM | 8:00 AM |
| 3 | 7:00 PM | 1:00 PM | 10:00 AM |

**Option 2 (5 PM CET)** is marked as "Most Popular" — best overlap for EU + US East.

---

## Page Structure

```
Hero Section
  - "Free Live Webinar" label
  - H1: "From Doer to Director: AI-Powered Email Marketing with Claude"
  - Script: "Stop doing everything manually"
  - Body text + Register Free CTA

What You'll Learn (4 cards)
  1. AI-Powered Flow Building
  2. Campaign Copy at Scale
  3. The Director Mindset
  4. Live Demo & Q&A

This Webinar Is For You If... (4 items)
  1. E-commerce brand owner/marketer
  2. AI-curious for email/SMS
  3. Agency operator or freelancer
  4. Wants to see live AI demo

Registration Section
  - 3 time option cards (2 PM, 5 PM, 7 PM CET)
  - Registration form (name, email, preferred time radio)
  - Success message

About Kinga
  - Headshot (circular)
  - Bio paragraphs
  - Stats: 20+ Years, 8+ Years Klaviyo, AI Native Agency

FAQ (4 items, accordion)
  1. Is this webinar really free?
  2. Do I need to know how to use AI already?
  3. Will there be a replay?
  4. What tools do I need?

Final CTA
  - "Ready to Work Smarter?"
  - Register Free button
```

---

## Technical Notes

- Page follows exact same patterns as `consultation.astro`
- Uses existing CSS classes (btn-navy, hero-gradient, animate-on-scroll, etc.)
- Klaviyo tracking already on site (company_id: SqUgaK)
- Schema markup included: Event (for Google rich results) + FAQ
- Two-step Klaviyo API: POST /client/profiles/ then POST /client/subscriptions/
- `is:inline` script to avoid Astro module timing issues
- Time card clicks sync with radio buttons in the form
- Success message is outside the form element (stays visible when form hides)

---

## Testing Checklist

- [ ] Build passes: `npm run build`
- [ ] Page renders at `/webinar`
- [ ] Form submits correctly to Klaviyo
- [ ] Profile created with webinar properties (name, email, preferred_time)
- [ ] Profile subscribed to list
- [ ] Success message appears after submission
- [ ] All links work (especially #register anchor)
- [ ] Time card clicks select matching radio button
- [ ] Mobile responsive
- [ ] FAQ accordions open/close
- [ ] Animations trigger on scroll
- [ ] Headshot image loads (or graceful fallback)

---

*Handoff created: February 8, 2026*
