---
title: "RFM Segmentation in Klaviyo, and How to Build It Without the Paid Tier"
date: 2026-08-27
updated: 2026-09-05
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
draft: false
metaTitle: "RFM Segmentation in Klaviyo: A Practical Guide | Kinga Dow"
metaDescription: "How Klaviyo scores RFM, the six customer groups it creates, why most accounts cannot use the report, and how to rebuild it from ordinary segments."
---

Almost every Klaviyo account I look at has the same shape. The sending is careful and the segmentation is not.

The care goes into deliverability. Engaged only, bounced and sunset suppressed, anyone who ordered in the last seven days kept out of the promotional sends. All sensible, all worth doing. None of it says anything about who a message is actually for, and inside that one engaged audience sits somebody who has bought twelve times next to somebody who bought once, eleven months ago, both getting the same email.

The usual attempt at fixing that is a guess. A VIP segment at some round number of orders, a lapsed segment at some round number of days, thresholds chosen because they sounded about right when somebody suggested them.

Let me introduce you to the RFM system, which is the same instinct with the guessing taken out. It sorts customers by three things, how recently they bought, how often they buy and how much they spend, and it takes the cutoffs from your own data rather than from a number you liked. Klaviyo scores each on a 1 to 3 scale and sorts everyone into six groups, where 333 is your best customer and 111 is someone effectively gone.

Klaviyo also has a report that does it for you. Most accounts cannot use it. It sits behind a paid add-on, and even with the subscription it will not run until your store clears a set of data thresholds, which a lot of brands never do. So you build it by hand. That version is close enough to run a real retention program on, and you come out of it knowing more about your list than the report would have told you.

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

Klaviyo combines the three scores into one number and sorts everyone into six groups. These are [the exact combinations](https://help.klaviyo.com/hc/en-us/articles/17797937793179), which are worth having in one place because they are what you need to rebuild any of this by hand.

| Group | Scores | What it means |
|---|---|---|
| **Champions** | 333, 332, 323 | Bought recently, buy often, spend the most |
| **Loyal** | 321, 322, 331, 232, 233 | Reliable and engaged, a rung below Champions |
| **Recent** | 312, 313, 311, 222, 223 | Bought recently but have not made a habit of it |
| **Needs Attention** | 213, 221, 123, 132, 133 | Valuable, and has not bought in a while |
| **At Risk** | 231, 212, 122, 131, 211 | Slipping on recency, spend, or both |
| **Inactive** | 111, 112, 113, 121 | Lapsed, infrequent, gone quiet a long time ago |

Read that table as a set of instructions rather than a set of labels. Needs Attention and At Risk are different problems: one is a good customer who has drifted, the other is a marginal customer who is drifting. Sending both the same win-back email is the mistake RFM exists to prevent.

## The Two Properties Worth More Than the Groups

When the report runs, Klaviyo writes three properties onto each profile. The last two are where the value is.

- `Current RFM group`
- `Previous RFM group`
- `RFM group last changed`

The current group is a state. You can segment on it. But the previous group and the change date describe **movement**, and movement is the thing you actually want to act on.

A customer sitting in Champions needs nothing from you. A customer who was in Champions last month and is not this month is a different situation entirely, and it is one you can now trigger a flow on. Same for the opposite direction: someone who has just moved up into Loyal is a candidate for the thing that pushes them into Champions.

The properties refresh nightly, so this is close to real time rather than a monthly report you read after the fact.

Segmenting on where people are is fine. Triggering on where they are heading is better, and the data has been sitting there the whole time.

## How We Use It

The VIP tier is the obvious use, so start there and then get past it.

The top RFM group becomes a genuine VIP tier, with perks that are actually different, and its own landing page built to feel like a different place rather than the same store with a discount code stapled on. The segment defines who gets in. The experience is what makes it worth being in.

That distinction matters more than it sounds. Most VIP programs are a bigger discount sent to a smaller list, which trains your best customers to expect a bigger discount. Giving them early access, or a better page, or something the general list does not get, costs less and does not erode the thing that made them valuable.

RFM is what makes the tier defensible. You are not guessing who belongs in it.

But a tier is a single use of a six-group framework, and if that is all you do with it you have bought a very expensive way to find your best customers. Four others earn their place.

**Every group gets a flow, triggered by arrival.** This is the movement idea from earlier, built. Each group is a segment, and entering that segment is what starts the sequence. Somebody who lands in At Risk gets the At Risk emails the day they land there, not whenever the next campaign happens to go out. The group stops being an audience you send to and becomes an event you respond to.

**One segment exists only to catch people moving up.** Its whole job is to hold customers who have just crossed from Loyal into Champions, with a flow behind it. Klaviyo does not ship that. You define it because you have decided that particular transition is worth marking, and marking it is cheap.

**RFM leaves the inbox entirely.** The groups sync to paid media. Your best two become the seed for lookalike audiences, on the reasoning that people resembling your Champions are a better acquisition target than people resembling everyone who has ever bought. The drifting groups go the other way, into retargeting. Neither of those is email, and both are far better inputs than an undifferentiated customer list.

**Predictive sits on top of it.** RFM tells you which group somebody is in. Klaviyo's predictive properties, expected date of next order and the rest, tell you roughly when they are due back. One gives you a reason to send. The other gives you a time. They are considerably more useful together than apart, and they come from the same data requirements, so if you qualify for one you qualify for both.

None of those four is a bigger discount, which is the point. RFM is worth having because it tells you who somebody is to your business. What you do with that ought to be more imaginative than a coupon.

## Building It Without the Paid Tier

Here are the two barriers, because you will hit them in this order.

**It is a paid add-on.** The RFM report lives inside Advanced KDP or Marketing Analytics, and [Klaviyo states plainly](https://help.klaviyo.com/hc/en-us/articles/17797889315355) that these "are not included in Klaviyo's standard marketing application, and a subscription is required to access the associated functionality."

**It also needs data you may not have.** Even with the subscription, the report will not run unless you have at least 500 customers who have placed an order, at least 180 days of order history with orders in the last 30 days, and at least some customers with three or more orders.

That second barrier is the one nobody mentions, and it excludes a lot of the brands with the most to gain.

So build it yourself. All three axes exist in the ordinary segment builder.

**Recency** is exact, not an approximation. Use `What someone has done (or not done)`, Placed Order, zero times in the last 180 days, and again for 365. Those are the same boundaries Klaviyo uses, so this axis reproduces the real thing.

**Frequency** is close. Placed Order at least three times over all time is a 3, twice is a 2, once is a 1. Klaviyo's own bands are typically the same, it just derives them from your percentiles rather than fixing them.

**Monetary** is where it gets awkward. The clean route is Historic CLV under `Predictive analytics about someone`, which is the total value of a customer's previous orders after refunds and returns. But [predictive analytics carries the same thresholds](https://help.klaviyo.com/hc/en-us/articles/360020919731), 500 customers and 180 days, so if you failed the first test you fail this one too.

If that applies to you, one option is to drop the axis and **run RF instead of RFM**. Recency and frequency carry most of the signal, order count correlates with spend in most catalogs anyway, and a two axis grid you actually use beats a three axis one you cannot build. The better option is to calculate the spend yourself, which is the next section.

Build the six groups as six saved segments using the score combinations in the table above. It takes an afternoon. After that they maintain themselves.

## Doing the Arithmetic With Claude

The hard part of building this by hand is not creating the segments. It is knowing where the thresholds go, because two of Klaviyo's three axes are percentiles of your own list, and the segment builder will not tell you what yours are.

That is the part worth handing to Claude.

With the [Klaviyo MCP connector](/blog/mcp-stack-ecommerce-retention/), which is the link that lets Claude read your account, Claude can look at your order numbers directly. What the spread of order counts actually looks like, where the spend cutoff falls at the top and bottom third. One question each, instead of an export and an afternoon in a spreadsheet.

The Shopify connector is the one that matters more than it first appears, because it solves the monetary problem from the section above. Klaviyo will not calculate lifetime spend for an account under its thresholds. Shopify has every order regardless. So you pull the order history, group it by customer, and take the cutoffs from there. The axis Klaviyo declined to give you was sitting in the other system the whole time, and joining the two is the entire trick.

One thing to check before you start, because it changed after this post first went out. In August the Klaviyo connector could read a segment and delete one but could not create one, so the six groups had to be entered by hand. Klaviyo has since added a create-segment action to the connector. It takes a name and a set of rules, which is exactly what each of the six groups is, so the whole build can now go through Claude. Checked against Klaviyo's connector documentation on 5 September 2026.

## Where MCP Stops and the API Starts

That change is worth understanding properly, because the same thing comes up with every connector you will ever set up.

A connector is a **curated list**. The software company decides which actions Claude is allowed to take, packages them up and puts an ordinary login screen in front, which is why connecting takes two minutes and involves no keys. Klaviyo's list has grown a great deal this year. It also comes with a trimmed version of around forty core actions for tools with less room, and a read-only setting that switches off every action that changes the account.

Underneath the connector sits Klaviyo's developer interface, the API in the heading above, and that is the **full list**. It has always been able to create segments. You give it a name and a set of rules, it needs a key with permission to create segments, and it allows more than enough calls for a one-time build. The connector caught up with it in August.

So the useful rule: **the connector for asking questions and for anything on its list, the developer route for the things the connector does not cover.** Set up the connector first, because it costs nothing and answers most of what you actually want to know. Reach for a key when you hit a wall, and check the wall again every few months, because it moves. The part worth remembering is that the wall is a choice about what to include rather than a technical limit, which means the answer to "the connector cannot do this" is often "the developer route can," and sometimes "it can now."

For this particular job it now splits like this. Finding the thresholds is a question, so it goes through the connector. Building the six segments goes through the connector too, for a single brand. For a roster of accounts the developer route still wins, because you set the build up once and run it for each account.

Either way Claude does the analysis, which is the part that needs judgment. Entering six definitions once you know the numbers is twenty minutes by hand, or one request.

## What It Is Actually Worth

Three things, in the order you will notice them.

**You stop sending everything to everyone.** Six groups that need six different things replaces one list that gets one message. Smaller sends, better engagement, and less of the list fatigue that slowly erodes deliverability.

**You stop discounting people who were going to buy anyway.** This is the same argument as the one in the [abandoned cart post](/blog/abandoned-cart-flow/). A discount to Champions buys nothing. A discount to At Risk might buy back a customer. Same code, completely different economics, and RFM is what tells you which one you are looking at.

**It is a diagnostic before it is a tool.** The shape of your six groups is a description of your business. A large Recent group and a small Loyal group means you acquire well and retain badly. A large Needs Attention group means you had something good and stopped tending it. Most of the brands I work with have never seen that picture, and it usually answers a question they have been arguing about for months.

If you want the picture without building it first, the [reorder timing post](/blog/predict-when-your-customers-will-reorder/) covers the recency half in more depth.

*If you want a second opinion on what your customer base actually looks like before you build the segments, [book a strategy session](/consultation/).*
