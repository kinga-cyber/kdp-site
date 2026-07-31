---
title: "How to Audit a Klaviyo Account"
date: 2026-09-17
author: "Kinga Dow"
category: "Klaviyo"
excerpt: "Most audits are a settings checklist that finds nothing. A useful one answers two questions: is anything quietly broken, and is the revenue coming from where you think it is. Here is the order to ask them in."
image: "/images/blog/klaviyo-audit.svg"
imageAlt: "The five layers of a Klaviyo audit stacked in order, from consent and deliverability at the base up to attribution honesty at the top"
keywords:
  - "klaviyo audit"
  - "how to audit a klaviyo account"
  - "klaviyo account audit checklist"
  - "klaviyo flow audit"
  - "email marketing audit"
  - "klaviyo account review"
featured: false
draft: true
metaTitle: "How to Audit a Klaviyo Account | Kinga Dow"
metaDescription: "What a Klaviyo audit should actually check, in what order, and the handful of problems that turn up in almost every account."
---

Most Klaviyo audits are a tour of the settings screens. Someone opens the account, notes that the sending domain is authenticated and the welcome flow exists, writes it up, and nobody's revenue changes.

A useful audit answers two questions instead. Is anything quietly broken, and is the money coming from where you think it is. Everything else is decoration.

The order matters, because each layer makes the one above it readable. Checking segmentation before you know whether the list is healthy tells you very little.

## Start With Who You Are Allowed to Email

Not the exciting part, and everything downstream depends on it.

Is the sending domain authenticated. Is there a sunset policy that actually runs, or does the list just accumulate. What proportion of the list has engaged with anything in the last six months, and what is being done about the rest.

The number worth calculating here is not list size. It is the share of the list that has opened or clicked anything this year. Most brands have never worked it out, and it is usually lower than they expect. A list that grows while engagement falls is not growing, it is aging.

If this layer is bad, everything above it is noise, because your good work is landing in spam folders.

## Then Whether the Flows Are On

This is where the easy money is, and it is embarrassing how often it is here.

Go through every flow and check three things. Is it live, or was it switched to manual during a sale two years ago and never switched back. Does it stop when someone buys. And has anyone edited it since it was built.

Flows that do not stop on purchase are the single most common broken thing I find. The failure mode is emailing someone about the cart they just checked out, which reads as incompetence at precisely the moment you wanted to look reliable.

A flow nobody has touched in eighteen months is not stable. It is unattended. Prices moved, products were discontinued, the brand voice changed, and it is still sending January 2025's offer.

## Then Whether They Cover Anything

Different question from whether they work. Most accounts have thirty flows and four customer situations covered.

The gaps that matter are the ones between purchases rather than before the first one. Almost everyone has a welcome series and an abandoned cart. Far fewer have anything for a second-time buyer, or a post-purchase sequence that does more than confirm shipping, or a win-back that fires on the right interval for their actual repurchase cycle rather than a round ninety days.

That last one is worth its own look, because the [right interval is knowable from your own order data](/blog/predict-when-your-customers-will-reorder/) rather than borrowed from a template.

## Then Whether Anyone Is Being Told Apart

Here is the test I use. Look at what went out last month and ask who each send was for.

If the answer is "engaged, minus bounced, minus sunset, minus anyone who bought in the last week" for every single one, the account has a deliverability policy and no segmentation. Those are different things and it is easy to mistake one for the other.

The specific gap I look for first is whether buyers and non-buyers are ever treated differently. An account that sends the same message to someone who has bought four times and someone who has bought nothing has no retention logic in it at all, regardless of how many flows are running.

Sorting that out properly means grouping people by how recently and how often they buy, which is what [RFM segmentation](/blog/klaviyo-rfm-segmentation/) does without guessing at the thresholds.

## Then Whether the Numbers Are Telling the Truth

The last layer, and the one nearly every audit skips.

Klaviyo will happily report that your flows earned a large share of your email revenue. That number is not wrong, but it is generous, and two things hide inside it.

The first is that flows catch people who were already coming back. An [abandoned cart flow gets credit for purchases that were going to happen anyway](/blog/abandoned-cart-flow/), which inflates its apparent contribution and makes discounting look more effective than it is.

The second is a proportion problem. A high flow share can mean the flows are excellent, or it can mean everything else is weak. Those look identical on a dashboard and need completely different responses.

An audit that reports attributed revenue without saying anything about that is repeating the account back to itself.

## What Turns Up Almost Every Time

Five things, in rough order of frequency.

1. A flow that does not stop on purchase
2. A flow switched off during a promotion and never switched back on
3. No difference in treatment between buyers and non-buyers
4. A win-back interval picked because it sounded reasonable
5. Attributed revenue being read as caused revenue

None of those are exotic. All of them are worth more than the tenth flow nobody asked for.

## Doing It Yourself, and When Not To

The first two layers you can genuinely do alone in an afternoon. Deliverability settings and a flow-by-flow status check need patience rather than expertise, and the patience is the scarce part.

The last two are harder, not because the questions are difficult but because answering them means pulling comparisons the interface does not offer in one click. What share of the list has engaged this year. How does this segment's repeat rate compare to that one. What proportion of a flow's revenue comes from its first email versus the rest.

That is the part where having the account connected to an assistant changes the economics. An audit that used to take four hours happens in about thirty minutes, not because the thinking got faster but because the fetching did. Fifty flows across ninety days is a lot of clicking and very little judgment.

The judgment is still the job. Knowing that a win-back interval is wrong is easy once you see the repurchase curve. Getting the curve is the tedious part, and it is the part worth automating.

*If you would rather have someone else go through it, [book a strategy session](/consultation/) and we will look at your account together.*
