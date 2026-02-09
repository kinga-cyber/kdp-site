# Portfolio Page — Image Guide

## Image Specs
- **Folder:** `/public/images/portfolio/`
- **Width:** ~700px wide (minimum), taller is better — these are full-length email screenshots
- **Format:** JPG or PNG
- **Naming:** Use descriptive names like `welcome-flow-skincare.jpg`, `winback-campaign-fashion.jpg`, etc.

## How It Displays
- The grid shows the **top portion** of each email (3:4 crop preview)
- Clicking a card opens a **lightbox** showing the full-length email (scrollable)
- Hover shows a "View Full Email" overlay

## How to Add/Update Images

### Step 1: Save images
Drop email screenshot files into `/public/images/portfolio/`

### Step 2: Update the data array
Edit `/src/pages/portfolio.astro` — find the `portfolioItems` array at the top:

```js
const portfolioItems = [
  {
    id: "sample-1",                              // unique ID
    image: "/images/portfolio/sample-1.jpg",     // path to image
    title: "Welcome Flow — Discount Offer",      // display title
    category: "flows",                           // filter category (see below)
    client: "Retail / Sports",                   // industry tag shown below title
  },
  // ... add more items here
];
```

### Step 3: Build & preview
Run `npm run dev` and check `http://localhost:4321/portfolio`

## Filter Categories
These are the available filter tabs. Use the `value` in the `category` field:

| Tab Label     | Category Value  |
|---------------|-----------------|
| All           | `all` (auto)    |
| Flows         | `flows`         |
| Campaigns     | `campaigns`     |
| Welcome Series| `welcome`       |
| Win-Back      | `winback`       |
| Abandonment   | `abandonment`   |

To add new categories, edit the `categories` array in `portfolio.astro`.

## Recommended Portfolio Mix (8-12 images)
For best variety, aim for a mix like:
- 2-3 Welcome Series emails
- 2-3 Automated Flow emails (abandoned cart, post-purchase, win-back)
- 2-3 Campaign emails (seasonal, promotional, product launch)
- 1-2 Browse/Cart Abandonment emails

## Current Placeholders
The page currently has 4 placeholder images (`sample-1.jpg` through `sample-4.jpg`) from the old WordPress site. Replace these with new screenshots when ready.
