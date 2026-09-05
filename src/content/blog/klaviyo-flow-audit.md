---
title: "How to Audit Your Klaviyo Flows"
date: 2026-09-24
author: "Kinga Dow"
category: "Klaviyo"
excerpt: "The flow audit is the deepest part of a Klaviyo account audit. The order it runs in, how to score every flow the same way, and the one number that decides whether a flow is worth keeping."
image: "/images/blog/klaviyo-flow-audit.svg"
imageAlt: "Stacked stages of a Klaviyo flow audit, from mapping how flows overlap up to a prioritized list of fixes"
keywords:
  - "klaviyo flow audit"
  - "how to audit klaviyo flows"
  - "klaviyo flow audit checklist"
  - "klaviyo flow analysis"
  - "email flow audit"
  - "klaviyo account audit"
featured: false
draft: true
metaTitle: "How to Audit Your Klaviyo Flows | Kinga Dow"
metaDescription: "How to audit your Klaviyo flows the way it actually gets done: map flow overlap first, score every flow against your own benchmarks, and rank fixes by revenue, list cost and effort."
---

A full audit of a Klaviyo account covers a few things: deliverability and list health, the capture forms, the campaigns, attribution, and the flows. This is about the flows. They hold the most revenue and the most hidden waste, they take the longest to check by hand, and they are the part I have turned into a repeatable system.

A flow audit done properly takes the better part of a day. Pull every flow, read ninety days of numbers, compare each one to the right benchmark, write it all up. Across a roster of accounts that afternoon never quite happens, so it gets done once a year, or once, and the problems it would have caught run for months in the meantime.

The audit I run is a system instead, and it fits in about an hour. Same steps every time, same scoring, same output. What follows is the framework behind it. The prompts that make it run are the part I build with people directly, and the framework stands on its own without them.

Most flow reviews are a spot-check: open the welcome series, skim the copy, move on. A real audit does something harder. It looks at every flow the same way, scores each against the right benchmark, and ranks what to fix by what it is actually worth. Here is the order it runs in.

## Start Above the Flows, With How They Interact

Before judging a single flow, map how they fit together. The question is where the same customer lands in more than one flow at once. A first-time buyer can trigger a post-purchase series, a cross-sell, a review request and a survey on the same order, all firing in the same few days with nothing telling them to take turns.

That is the finding performance data alone will never hand you. A flow can look like it is underperforming when the real problem is that three others are talking over it. So the first pass sorts overlap by risk: high where flows compete for the same customer at the same moment, medium where overlap is likely, low where it is only theoretical. Everything after this reads more honestly once you know which flows are stepping on each other.

This is also where duplicates surface, the second copy of a flow someone rebuilt last year and left running next to the original, both firing on the same trigger, both landing on the same person.

## Sort Every Flow Before You Score It

Group the flows by where they sit in the customer journey. I use nine categories: pre-sale, welcome, post-purchase and cross-sell, reviews and surveys, [RFM and lifecycle](/blog/klaviyo-rfm-segmentation/), winback and retention, special occasions, profile enrichment, and transactional.

Two things come out of sorting first. Coverage becomes visible at a glance, the categories crowded with flows and the ones sitting empty. Most accounts are busy before the first purchase and thin after it, heavy on welcome and cart, light on the second-purchase and winback sequences that fire on the [interval your own order data actually shows](/blog/predict-when-your-customers-will-reorder/). And because the categories stay the same every audit, the output is comparable, across accounts and over time.

## Pull the Real Numbers, Against the Right Benchmark

Ninety days of performance, pulled per flow and then per message. Each email and each SMS inside a flow gets its own read, not just the flow-level total: who received it, who opened, who clicked, who bought, who unsubscribed.

The comparison matters as much as the number. Generic e-commerce benchmarks put a small brand next to Amazon and hand back something meaningless. Klaviyo already builds a better set for every account: a peer group of around a hundred similar companies, plus an industry benchmark for your vertical. A forty percent open rate reads as weak against the whole internet and strong against the cohort that actually looks like you. The audit measures each metric against that, rather than a number from a blog post.

One gate makes this work. The benchmarks are tied to the account's industry classification, so a sporting goods brand filed under apparel gets compared to the wrong crowd. Confirm the classification is right before anything else, and the comparison stays honest.

## Score Every Flow the Same Way

Each flow gets one of five marks, and so does each metric inside it: best performer, strong, needs attention, immediate action, and not enough data to say. The grammar stays identical across every flow, so you can scan a whole account and see where the trouble sits.

The number that decides most of it is the one people skip: list cost. A flow that earns revenue is not automatically a flow worth keeping. Read the revenue next to what it costs you in unsubscribes and spam complaints. A sequence that brings in a little money while shedding list members at scale is running at a loss, even with a positive revenue line. Every conversion it wins can cost you twenty engaged people you will never reach again.

Which is why the ranking is by revenue per recipient, not by volume. The biggest-audience flow is rarely the most efficient one. Time and again the lowest-volume flow in an account earns many times more per person than the one everyone watches.

## Rank the Fixes by What They Are Worth

A list of problems is not a plan. The last step turns the findings into an order. Three things set priority: how much revenue a flow contributes, what it costs the list, and how much effort the fix takes. A flow that is burning the list at scale and takes an afternoon to repair goes to the top. The tenth nice-to-have flow nobody asked for goes to the bottom. The team works the list in order, rather than by whatever caught someone's eye that morning.

## What It Catches Almost Every Time

The same handful of things turn up in nearly every account. This is not carelessness. Flows get added one at a time, for a new product or a new integration, and rarely get reviewed as a system.

1. **Emails added where subtraction would help.** A flow runs to six or seven emails on the theory that more touchpoints earn more. The first converts, the middle two barely, and the tail earns almost nothing while collecting the unsubscribes.
2. **Copy reviewed, buttons never clicked.** High opens, near-zero clicks, no conversions. The button is broken, the code expired, or it disappears on mobile. The gap between opened and clicked stops looking like normal funnel decay and starts looking like a wall.
3. **Revenue watched, list cost ignored.** A flow is called a winner because it makes money, and the unsubscribe rate is treated as a separate problem. Read together, it is often net-negative.
4. **SMS treated as a separate program.** Email flows and SMS flows planned apart, so the flows that clearly want a text variant never get one.
5. **Flows competing instead of arranged.** The overlap from the first step, four flows firing on one order and drowning each other out.
6. **New versions built without retiring the old.** Two near-identical flows, years apart, both live, same audience.
7. **Volume mistaken for performance.** The largest-audience flow assumed to be the most important, when per recipient it is often the weakest.

None of these show up in a spot-check of one flow. They surface when every flow is scored the same way and read alongside its cost.

## Doing It Yourself, and Where Claude Speeds It Up

The first passes you can do by hand in an afternoon. The architecture map and a flow-by-flow status check need patience more than expertise, and the patience is the scarce part. The scored, benchmarked, per-message analysis across thirty or forty flows is where the hours go, and it is mostly fetching and formatting rather than judgment.

That is the part I hand to Claude. Connected to the account through the Klaviyo connector, it reads every flow and every message, applies the account's own benchmarks, and writes one structured brief per flow into the project tool the team already works in. The day-long version fits in about an hour. The thinking takes as long as ever, and the pulling and the writing are what collapsed.

The judgment stays with a person, which is where it belongs: confirming the right account and the right industry benchmark, catching when the wrong conversion metric got picked, deciding which of five broken flows to fix first. The framework here is the whole map. The prompts that make Claude run it, and adapt it from one account to the next, are the part I build with people one to one.

*If you would rather have it run on your account with you, [book a strategy session](/consultation/) and we will set it up together.*
