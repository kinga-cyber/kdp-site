---
title: "RFM Segmentation in Klaviyo, and How to Build It Without the Paid Tier"
date: 2026-08-20
author: "Kinga Dow"
category: "Klaviyo"
excerpt: "RFM sorts your customers by how recently, how often and how much they buy. Klaviyo has a report for it, most accounts cannot use it, and the version you build yourself is close enough to run a retention program on."
image: "/images/blog/klaviyo-rfm.svg"
imageAlt: "Grid of the six Klaviyo RFM customer groups showing their three digit score combinations, from Champions at 333 down to Inactive at 111"
keywords:
  - "klaviyo rfm segmentation"
  - "rfm analysis ecommerce"
  - "how to calculate rfm score"
  - "rfm segments klaviyo"
  - "customer segmentation klaviyo"
  - "retention segmentation"
featured: false
draft: true
metaTitle: "RFM Segmentation in Klaviyo: A Practical Guide | Kinga Dow"
metaDescription: "How Klaviyo scores RFM, the six customer groups it creates, why most accounts cannot use the report, and how to rebuild it from ordinary segments."
---

You have one list, and most of what you send goes to all of it. The usual fix is to guess. A VIP segment at some round number of orders, a lapsed segment at some round number of days, thresholds picked because they sounded about right when someone suggested them.

RFM is that same idea with the guessing taken out. It sorts customers by three things, how recently they bought, how often they buy and how much they spend, and it sets the cutoffs from your actual data rather than from a number you liked. Klaviyo scores each on a 1 to 3 scale and sorts everyone into six groups, where 333 is your best customer and 111 is someone effectively gone.

Klaviyo also has a report that does this for you, and most accounts cannot use it, for two separate reasons neither of which is obvious until you go looking. The version you build by hand is close enough to run a real retention program on, and building it teaches you more about your list than the report would have.

## What RFM Actually Measures

Three questions, asked about every customer you have.

**Recency.** How long since their last order. Klaviyo measures this in days elapsed since the last purchase in the report's time frame.

**Frequency.** How often they buy inside that window.

**Monetary.** How much they have spent with you in total.

Each one is scored 1, 2 or 3. Note that it is 1 to 3, not the 1 to 5 scale most articles on RFM assume, and that difference matters the moment you try to reproduce it.

Here is how Klaviyo assigns the scores.

| | Score 3 | Score 2 | Score 1 |
|---|---|---|---|
| **Recency** | bought in the last 180 days | last 365 days | longer ago than that |
| **Frequency** | top third, usually 3+ orders | middle third, usually 2 | bottom third, usually 1 |
| **Monetary** | top third of spend | middle third | bottom third |

There is an asymmetry in that table worth pausing on. **Recency uses fixed boundaries. Frequency and monetary are percentiles of your own list.** So your recency bar sits at 180 days regardless of what your business does, while the bar for being a top spender moves every time your customer base changes. Two brands with identical customers can have different Champions counts, and your own Champions count can shift without a single customer changing behavior.

## The Six Groups

Klaviyo combines the three scores into one number and sorts everyone into six groups. These are the exact combinations.

| Group | Scores | What it means |
|---|---|---|
| **Champions** | 333, 332, 323 | Bought recently, buy often, spend the most |
| **Loyal** | 321, 322, 331, 232, 233 | Reliable and engaged, a rung below Champions |
| **Recent** | 312, 313, 311, 222, 223 | Bought recently but have not made a habit of it |
| **Needs Attention** | 213, 221, 123, 132, 133 | Valuable, and has not bought in a while |
| **At Risk** | 231, 212, 122, 131, 211 | Slipping on recency, spend, or both |
| **Inactive** | 111, 112, 113, 121 | Lapsed, infrequent, gone quiet a long time ago |

Read that table as a set of instructions rather than a set of labels. Needs Attention and At Risk are different problems: one is a good customer who has drifted, the other is a marginal customer who is drifting. Sending both the same win-back email is the mistake RFM exists to prevent.

## The Part Almost Nobody Uses

When the report runs, Klaviyo writes three properties onto each profile. Everyone finds the first one. The other two are where the value is.

- `Current RFM group`
- `Previous RFM group`
- `RFM group last changed`

The current group is a state. You can segment on it, and most people stop there. But the previous group and the change date describe **movement**, and movement is the thing you actually want to act on.

A customer sitting in Champions needs nothing from you. A customer who was in Champions last month and is not this month is a different situation entirely, and it is one you can now trigger a flow on. Same for the opposite direction: someone who has just moved up into Loyal is a candidate for the thing that pushes them into Champions.

The properties refresh nightly, so this is close to real time rather than a monthly report you read after the fact.

Segmenting on where people are is fine. Triggering on where they are heading is better, and the data has been sitting there the whole time.

## How We Use It

The most useful thing I have done with RFM is not a campaign, it is a tier.

The top RFM group becomes a genuine VIP tier, with perks that are actually different, and its own landing page built to feel like a different place rather than the same store with a discount code stapled on. The segment defines who gets in. The experience is what makes it worth being in.

That distinction matters more than it sounds. Most VIP programs are a bigger discount sent to a smaller list, which trains your best customers to expect a bigger discount. Giving them early access, or a better page, or something the general list does not get, costs less and does not erode the thing that made them valuable.

RFM is what makes the tier defensible. You are not guessing who belongs in it.

## Building It Without the Paid Tier

Here are the two barriers, because you will hit them in this order.

**It is a paid add-on.** The RFM report lives inside Advanced KDP or Marketing Analytics, and Klaviyo states plainly that these "are not included in Klaviyo's standard marketing application, and a subscription is required to access the associated functionality."

**It also needs data you may not have.** Even with the subscription, the report will not run unless you have at least 500 customers who have placed an order, at least 180 days of order history with orders in the last 30 days, and at least some customers with three or more orders.

That second barrier is the one nobody mentions, and it excludes a lot of the brands with the most to gain. If you are under 500 purchasing customers, this feature is unavailable to you at any price.

So build it yourself. All three axes exist in the ordinary segment builder.

**Recency** is exact, not an approximation. Use `What someone has done (or not done)`, Placed Order, zero times in the last 180 days, and again for 365. Those are the same boundaries Klaviyo uses, so this axis reproduces the real thing.

**Frequency** is close. Placed Order at least three times over all time is a 3, twice is a 2, once is a 1. Klaviyo's own bands are typically the same, it just derives them from your percentiles rather than fixing them.

**Monetary** is where it gets awkward. The clean route is Historic CLV under `Predictive analytics about someone`, which is the total value of a customer's previous orders after refunds and returns. But predictive analytics carries the same 500 customer and 180 day thresholds, so if you failed the first test you fail this one too.

If that applies to you, one option is to drop the axis and **run RF instead of RFM**. Recency and frequency carry most of the signal, order count correlates with spend in most catalogs anyway, and a two axis grid you actually use beats a three axis one you cannot build. The better option is to calculate the spend yourself, which is the next section.

Build the six groups as six saved segments using the score combinations in the table above. It takes an afternoon. After that they maintain themselves.

## Doing the Arithmetic With Claude

The hard part of building this by hand is not creating the segments. It is knowing where the thresholds go, because two of Klaviyo's three axes are percentiles of your own list, and almost nobody knows their own percentiles.

That is the part worth connecting an assistant to.

With the [Klaviyo MCP connector](/blog/mcp-stack-ecommerce-retention/), Claude can query your metric aggregates directly. What the distribution of order counts actually looks like, where the spend cutoff falls at the top and bottom third. One question each, instead of an export and an afternoon in a spreadsheet.

The Shopify connector is the one that matters more than it first appears, because it solves the monetary problem from the section above. Klaviyo will not calculate lifetime spend for an account under its thresholds. Shopify has every order regardless. So you pull the order history, group it by customer, and take the cutoffs from source. The axis Klaviyo declined to give you was sitting in the other system the whole time, and joining the two is the entire trick.

One limit worth knowing before you plan around it. **The Klaviyo connector reads segments and deletes them. It does not create them.** You can pull an existing segment's exact definition, which is genuinely useful for checking your work against something that already behaves the way you want, but the six groups still get built by hand in the interface.

So the assistant does the analysis and you do the clicking. That split is about right at the moment. Working out the thresholds is the part that needs judgment and the part almost nobody does properly. Entering six segment definitions once you know the numbers is twenty minutes.

## What It Is Actually Worth

Three things, in the order you will notice them.

**You stop sending everything to everyone.** Six groups that need six different things replaces one list that gets one message. Smaller sends, better engagement, and less of the list fatigue that quietly erodes deliverability.

**You stop discounting people who were going to buy anyway.** This is the same argument as the one in the [abandoned cart post](/blog/abandoned-cart-flow/). A discount to Champions buys nothing. A discount to At Risk might buy back a customer. Same code, completely different economics, and RFM is what tells you which one you are looking at.

**It is a diagnostic before it is a tool.** The shape of your six groups is a description of your business. A large Recent group and a small Loyal group means you acquire well and retain badly. A large Needs Attention group means you had something good and stopped tending it. Most brands have never seen that picture, and it usually answers a question they have been arguing about for months.

If you want the picture without building it first, the [reorder timing post](/blog/predict-when-your-customers-will-reorder/) covers the recency half in more depth.

*If you want a second opinion on what your customer base actually looks like before you build the segments, [book a strategy session](/consultation/).*
