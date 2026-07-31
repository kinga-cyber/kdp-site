---
title: "Abandoned Cart Emails: What Actually Recovers Revenue"
date: 2026-08-20
author: "Kinga Dow"
category: "Klaviyo"
excerpt: "Abandoned cart is the most over-credited number in ecommerce email, and knowing that changes how you build the flow. What the sequence should do, what to segment on, and how to find out what it is genuinely earning."
image: "/images/blog/abandoned-cart.svg"
imageAlt: "Diagram of an abandoned cart sequence branching by cart value and customer history rather than sending one identical email to everyone"
keywords:
  - "abandoned cart email"
  - "abandoned cart flow"
  - "klaviyo abandoned cart"
  - "cart abandonment strategy"
  - "abandoned cart sequence"
  - "ecommerce email flows"
metaTitle: "Abandoned Cart Emails: What Actually Works | Kinga Dow"
metaDescription: "Why abandoned cart revenue is over-credited, what the sequence should actually do, and how to find out what your flow is genuinely earning."
featured: false
draft: true
---

Abandoned cart is usually the best performing flow in the account, and everybody knows it. It is the number that gets quoted when somebody asks how the email program is doing.

It is also the number most likely to be flattering itself.

Your abandoned cart flow is earning less than the dashboard says. That is not a criticism of the flow, it is how attribution works, and understanding it changes what you build.

Someone puts items in a cart, leaves, gets your email, comes back and buys. The flow gets credited. But a share of those people were coming back regardless, because they were interrupted, or comparing, or waiting for payday. The email arrived during a purchase they had already decided to make.

Every abandoned cart flow carries some of this. The question is how much, and almost nobody measures it.

## Why This Matters Before You Build Anything

If you believe the flow is responsible for all of the revenue attributed to it, the obvious conclusion is to send more of them. More emails, more urgency, bigger discounts, because look how well it converts.

That reasoning is how brands end up discounting purchases that were already going to happen. You are not recovering a lost sale, you are paying fifteen percent for one you had.

Assume some of the credit is borrowed and you build differently. You spend less effort pushing the people who were always coming back, and more on the ones who genuinely were not.

## What the Sequence Should Actually Do

Most brands send one email. Some send two identical ones with a discount bolted onto the second.

Three emails is a reasonable default, but the count matters far less than each one having a distinct job.

**The first is a reminder, and it should be boring.** No discount, no urgency. Someone's checkout got interrupted by a phone call and they need a link back. Discounting here is the single most expensive habit in ecommerce email, because it hands margin to people who needed nothing but a link.

**The second handles the objection.** By now the interrupted shoppers have converted, so who is left is people with a reason. Shipping cost, sizing doubt, whether it is worth it, whether it will arrive in time. This is where reviews, return policy, delivery timing and sizing guidance belong. It is also the email most brands skip entirely, going straight from reminder to discount and never addressing why anyone hesitated.

**The third can carry an incentive**, if you use one at all. By this point you are talking to people who saw two emails and did not act, which is the only group where a discount is buying something rather than giving it away.

## What to Segment On

A single flow sending the same thing to everyone is the default, and it is where the easiest improvements are.

**Cart value.** A $40 cart and a $400 cart are different conversations. The larger one deserves more reassurance and almost never deserves a discount, because the margin you hand over is proportionally larger and the hesitation is usually about confidence rather than price.

**Customer history.** Someone who has bought four times does not need convincing that you are legitimate. A first-time visitor might. Sending the trust-building email to a loyal customer is mildly insulting and definitely wasted. Splitting on whether somebody has ever bought is the crude version and still worth doing. Grouping people properly, by how recently and how often they buy, is the better one, and it deserves its own post.

**What is in the cart.** A consumable being repurchased and a considered one-off purchase abandon for entirely different reasons.

None of this requires new tooling. It is conditional splits on data already sitting in the account.

![Abandoned cart flow split by purchase history, showing a buyer path and a non-buyer path sharing the same timing, with only the middle email differing between them](/images/blog/abandoned-cart-flow-structure.svg)

Put together, the whole structure is smaller than people expect. One trigger, one split on purchase history, three emails on each side, and only the middle one genuinely differing.

## Timing

The convention is roughly one hour, then a day, then three days. It is fine as a starting point and it is worth knowing it is a convention rather than a finding.

The first email genuinely should be quick, because the interrupted-checkout case decays fast. Beyond that, the right spacing depends on your considered purchase cycle. A brand selling a $15 consumable and one selling a $900 sofa should not be on the same schedule, and both usually are. Your own order data already knows [roughly when your customers come back](/blog/predict-when-your-customers-will-reorder/), which beats borrowing an interval from a template.

One thing worth more attention than the intervals: **make sure the flow stops when someone buys.** Sounds obvious. It is one of the most common broken things I find in accounts, and the failure mode is emailing a customer about the cart they just checked out, which reads as incompetence at exactly the moment you wanted to look reliable.

## Finding Out What It Is Really Earning

Back to attribution, because there is a way to answer it.

**Hold out a portion of the audience.** Exclude a random slice from the flow entirely, then compare their purchase rate against everyone else over the same window. The gap is what the flow is actually contributing. Everything above that gap was revenue you were getting anyway.

The result is usually humbling and always useful. It tells you whether to invest more here or somewhere else, and it is the only way to have that conversation with a number rather than an opinion.

Two honest caveats. It needs enough volume for the comparison to mean anything, so on a small list you will be waiting a while. And it means deliberately not emailing a group of people who might have bought, which feels wrong and is the actual reason most brands never do it.

It is worth doing once a year on your highest-volume flows. Not as an ongoing practice, just often enough to know whether what you believe about them is still true.

## The Order I Would Fix Things

1. **Check the flow stops on purchase.** If it does not, nothing else matters.
2. **Remove the discount from the first email**, if there is one.
3. **Add the objection-handling email**, because it is usually missing entirely.
4. **Split by cart value**, since it is the highest-value segmentation and the easiest to implement.
5. **Run a holdout** once the rest is stable, so you know what you are actually working with.

Most abandoned cart work goes into subject lines and countdown timers. Neither one appears on that list, which is rather the point. Almost all of the improvement available to you sits in the five things that do.

*If you want a second opinion on what your flows are genuinely contributing before you invest more in them, [book a strategy session](/consultation/).*
