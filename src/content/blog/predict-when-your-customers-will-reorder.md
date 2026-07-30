---
title: "How to Predict When a Customer Will Reorder"
date: 2026-07-30
author: "Kinga Dow"
category: "Klaviyo"
excerpt: "Klaviyo predicts this per customer, and the feature has hard requirements a lot of accounts do not meet. Here is how it works, what to do when the box is empty, and why a per-customer date still will not tell you when to send the win-back."
image: "/images/blog/predict-reorder.svg"
imageAlt: "A distribution chart of days between orders, showing most repeat purchases clustered early with a long tail, and the point where repurchase drops off"
keywords:
  - "predict when customers will reorder"
  - "klaviyo expected date of next order"
  - "repeat purchase prediction"
  - "average time between orders"
  - "win-back window"
  - "klaviyo predictive analytics"
metaTitle: "How to Predict When a Customer Will Reorder | Kinga Dow"
metaDescription: "Klaviyo's Expected Date of Next Order, the requirements most guides skip, and how to find your brand's real repurchase interval when the box is empty."
featured: false
draft: false
---

Klaviyo predicts this for you. The field is called Expected Date of Next Order, it sits in the Predictive Analytics box on a customer profile, and it updates as new orders come in.

Two things that most explanations of it leave out. It has hard account-level requirements, and a lot of stores do not meet them. And even when it works perfectly, it answers a different question from the one you probably need answered.

## What Klaviyo Actually Predicts

Four things: predicted customer lifetime value, churn risk, expected date of next order, and predicted gender.

For reorder timing, the two that matter are **expected date of next order** and **churn risk**, and they are only useful together.

A date on its own is misleading. Klaviyo can tell you a customer is expected to order on the fourteenth of next month, but that says nothing about whether they are likely to order at all. A customer with a steady three-month rhythm and a customer who bought twice in 2024 and vanished can both carry a predicted date. Churn risk is what separates them.

So the pairing is: **the date tells you when to send, churn risk tells you whether it is worth sending and what to send.** A low-risk customer near their expected date gets a nudge. A high-risk customer near theirs is a win-back, and it is a different email.

## The Requirements, and the Empty Box

This is where a lot of people stop, because the box is not there.

Klaviyo's stated requirements for predictive analytics:

- **"At least 500 customers have placed an order"**, meaning non-cancelled, non-refunded, non-zero value
- **"An ecommerce integration (e.g., Shopify, BigCommerce, Magento, or WooCommerce) or use our API to send placed orders"**
- **"At least 180 days of order history and have orders within the last 30 days"**
- **"At least some customers who have placed 3 or more orders"**

The model retrains at least weekly, so predictions move as your data does.

Read those together and the exclusions become obvious. A brand in its first year misses the history requirement. A brand with 400 customers misses the threshold regardless of how good its data is. A brand with a genuinely long purchase cycle, furniture, mattresses, anything annual, may have plenty of customers and almost nobody with three orders.

**If you do not qualify, you have not lost access to the answer.** You have lost access to Klaviyo's convenience layer. The underlying question is a property of your order data, and your order data exists whether or not a model has been trained on it.

## What the Prediction Does Not Tell You

Here is the part that matters even if you do qualify.

Expected Date of Next Order is calculated **per customer**. That is the right shape for a flow trigger: this person, this date, send now.

It is the wrong shape for almost every planning decision you actually make. When should the win-back flow fire? What does "lapsed" mean for this brand? How long is the replenishment window? Those are questions about the **whole customer base**, and a per-profile field does not answer them.

The instinct is to reach for the average time between orders. Resist it, because the average is usually a number that describes nobody.

Suppose half your customers reorder around three weeks and the other half around five months. The average lands somewhere near three months, which is a point where almost nobody buys. Build your win-back window on that number and you are late for one group and early for the other, and both emails underperform for reasons that will look like a copy problem.

**You need the distribution, not the average.** Where does repurchase actually cluster, and where does it fall off? Those two points are your flow timing and your lapsed definition, and neither is visible from a mean.

## Finding Your Real Repurchase Interval

This is the work, and it is the part that gets skipped because it is tedious rather than difficult.

You need the gap, in days, between consecutive orders for every customer who has ordered more than once, plotted as a distribution. Then you look for two things: the cluster, which tells you the normal rhythm, and the point where the curve flattens, which is where a customer stops being between purchases and starts being gone.

That is an afternoon in a spreadsheet, which is why almost nobody does it and the ninety-day window survives as a convention nobody has checked.

With the account connected to an AI layer through MCP, it stops being an afternoon. You can ask the account directly: pull the interval distribution, find the drop-off, split it by first product purchased, and check whether the pattern differs for customers acquired on discount versus full price. That last one usually does differ, and it changes what you send.

The point is not that a model produces the number. The point is that the number comes out of the account instead of out of habit.

**And it moves.** Assortment changes, a subscription launch, seasonality, a shift in acquisition mix. An interval computed once and hardcoded into a flow quietly stops being true, and nothing breaks loudly enough to tell you. That is a scheduled check, not a one-off analysis.

This is the difference between using AI and having an AI workflow. Asking a model what a good win-back window is gets you the same ninety days everyone else has, because that is what is written on the internet. Having it read your account, compute the interval from your orders, and re-check quarterly is a different thing entirely.

## What to Do With the Number

Three decisions it settles:

**Win-back timing.** Fire at the drop-off point, not at a round number. If your curve flattens at fifty-two days, a ninety-day flow is reaching people a month after they mentally moved on.

**Replenishment.** For consumables the cluster is your product's actual consumption rate. Send slightly before it, not after. The whole value of a replenishment email is arriving while the customer still has some left and no reason to shop around.

**What "lapsed" means.** Segments built on a guessed threshold produce audiences that are too big to be relevant or too small to be worth sending to. Anchoring the definition to your real distribution fixes both.

And once you have all three anchored to the same number, they stop contradicting each other, which is a problem most accounts have and nobody notices because each flow was built at a different time by a different person.

*If you want a second opinion on your lifecycle timing before you rebuild the flows around it, [book a strategy session](/consultation/).*
