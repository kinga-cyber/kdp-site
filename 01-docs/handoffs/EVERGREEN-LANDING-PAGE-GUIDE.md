# Evergreen Lead Magnet Landing Page — Guide

## Overview
A simple, reusable landing page for sharing lead magnets (SOPs, guides, checklists, etc.) on LinkedIn and other platforms. Visitors enter their email via a Klaviyo form, then get redirected to the PDF/resource.

## How It Works
1. You share a link on LinkedIn (e.g., `kingadow.com/resource`)
2. Visitor lands on a simple page with a short description + Klaviyo email form
3. They enter their email → Klaviyo captures it to the main list
4. Klaviyo redirects them to the PDF/lead magnet URL

## Klaviyo Form
- **Form ID:** `T3gH6z`
- **Embed code:** `<div class="klaviyo-form-T3gH6z"></div>`
- **List:** Main list (W3XhAb) — all submissions go here
- **Redirect:** Set in Klaviyo form builder (Settings → After Submit → Redirect to URL)

## Page Location
- **File:** `/src/pages/resource.astro`
- **URL:** `kingadow.com/resource`

## What to Update Each Time

### 1. In the Astro file (`resource.astro`):
Update these 3 things:
- **Headline** — What the resource is (e.g., "The Email Flow SOP")
- **Description** — 1-2 sentences about what they'll get
- **PDF link** — Update the backup/direct download link if used

### 2. In Klaviyo Form Builder:
- **Custom source** — Change to reflect the current resource (e.g., "LinkedIn SOP - Email Flow Checklist Feb 2026")
- **Redirect URL** — Point to the new PDF (e.g., `https://www.kingadow.com/downloads/sop-email-flows.pdf`)
- The form fields stay the same (just email)

## Step-by-Step: Swapping to a New Resource

### Quick version:
1. Upload new PDF to `/public/downloads/`
2. Edit `resource.astro` — change headline + description
3. In Klaviyo → Forms → Edit "T3gH6z" form:
   - Update the custom source property
   - Update the redirect URL to the new PDF
   - Save & publish
4. Push to GitHub (or just update Klaviyo if only the source/redirect changed)

### Detailed version:

**Step 1: Upload the PDF**
Save the PDF file to: `/public/downloads/your-resource-name.pdf`
This makes it available at: `kingadow.com/downloads/your-resource-name.pdf`

**Step 2: Update the landing page text**
Open `/src/pages/resource.astro` and update:
```
- Headline: Change the <h1> text
- Description: Change the <p> text below the headline
```

**Step 3: Update Klaviyo form**
1. Go to Klaviyo → Sign-up Forms & Pages
2. Find form "T3gH6z" and click Edit
3. In form settings:
   - **Custom source:** Change to describe the current resource
     (e.g., `LinkedIn Lead Magnet - [Resource Name] [Month Year]`)
   - **After submit → Redirect URL:** Change to new PDF URL
     (e.g., `https://www.kingadow.com/downloads/your-resource-name.pdf`)
4. Save and Publish the form

**Step 4: Push changes (if page text changed)**
```
git add src/pages/resource.astro public/downloads/your-resource-name.pdf
git commit -m "Update evergreen landing page: [Resource Name]"
git push
```

## Template Copy Structure
The landing page is intentionally minimal:

```
[Gold label: "FREE RESOURCE"]

[Headline — what the resource is]
Example: "The Complete Email Flow Audit Checklist"

[1-2 sentence description]
Example: "A step-by-step SOP for auditing all your Klaviyo flows
in under 30 minutes. Used by our team on every client account."

[Klaviyo email form]

[Small text: "Enter your email and get instant access."]
```

## Notes
- The Klaviyo form handles all email capture — no custom JS needed
- The form won't render on localhost (needs Klaviyo's onsite script on the live site)
- All leads go to the same main list (W3XhAb) — the custom source property lets you segment by which resource they downloaded
- You can track downloads per resource in Klaviyo by filtering on the custom source property
- The PDF redirect happens via Klaviyo, so the PDF URL doesn't need to be on the page itself
