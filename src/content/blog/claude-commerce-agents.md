---
title: "Claude Commerce Agents: What They Need From Your Store"
date: 2026-10-08
author: "Kinga Dow"
category: "AI Systems"
excerpt: "Anthropic announced AI shopping agents, and the coverage stopped at two numbers. What was actually released, which of the two agents is within reach this year, and the catalog problem sitting underneath both of them."
image: "/images/blog/claude-commerce-agents.svg"
imageAlt: "Diagram comparing the shopping agent and the merchant agent, showing both drawing on the same catalog, inventory and policy data, with the merchant agent's changes passing through a human approval gate"
keywords:
  - "claude commerce agents"
  - "claude for commerce"
  - "ai shopping agent ecommerce"
  - "ai agents for ecommerce"
  - "agentic commerce"
  - "shopify ai agent"
  - "ecommerce ai strategy"
featured: false
draft: true
metaTitle: "Claude Commerce Agents: What They Need | Kinga Dow"
metaDescription: "Anthropic announced AI shopping agents. What was actually released, which agent to start with, and the catalog problem underneath both of them."
---

Anthropic announced Claude Commerce Agents on September 2. Most of the coverage since has repeated the same two numbers from the announcement and stopped there, which leaves the only question an operator actually has unanswered: whether this is something you need to act on, and what acting would cost you.

The short version. There is nothing here you can buy or switch on. It is a set of plans, published free, that someone still has to build against your store. Of the two agents described, only one is realistically within reach of a mid-market brand this year, and it is not the one facing your customers.

What decides whether either of them works is not the technology. It is your product catalog.

## What Was Actually Announced

Plans, not a product.

Anthropic published a worked design for two kinds of AI agent, along with four example versions covering retail, travel, telecom and entertainment. Every one of those examples runs on an invented store selling invented products. You can watch a demo agent hold a genuinely good conversation about camping equipment, help you compare options and fill a cart, and none of the tents exist.

What is missing from those plans is the part that connects them to a real business. They do not plug into Shopify, or into any other ecommerce platform. Getting from the demo to something that knows your actual products, prices and orders is work that someone has to do for you.

So what Anthropic gave away is the hard thinking rather than the finished thing. How the conversation should be shaped. Where the limits belong. What the agent must never be allowed to do on its own. That is the genuinely difficult part, and it is the part most teams building this alone get wrong. It is also not something you can put in a cart.

## Two Agents, and They Are Not Equally Yours

The distance between the two is much larger than the announcement suggests.

The **shopping agent** faces your customer. It searches your catalog, compares products, plans a multi-item purchase, fills a cart, answers questions about orders and policies, and remembers what someone told it three messages ago. It hands over to your existing checkout. It does not take payment.

The **merchant agent** faces your team. It explains what happened to sales last week, flags inventory problems before anyone notices them, keeps listings current, suggests pricing and promotions, and drafts campaigns. Every change it wants to make waits for a person to approve it.

For most brands reading this, the second one is the reachable one, and the announcement does not make enough of why.

The merchant agent can be run in a look-only mode. It reads your account and answers questions, with its ability to change anything switched off entirely. Nobody outside your team ever sees it. That is a real starting position with a real floor on the risk, and it is a supported way to run the thing rather than a workaround.

The shopping agent has no equivalent. Before it can speak to a customer you have to settle logins, permissions, legal and compliance questions, and a handover to checkout that works every time. The demos skip all of it on purpose.

One of these is a project you can scope in a quarter. The other is a build.

## What Shopify Added on Top

This is the part almost nobody covering the announcement mentioned, and it is the part that changes the math if you are on Shopify.

Shopify published its own version, built for Shopify stores.

Their shopping agent works against a real store with a real catalog, a real cart and a real checkout. It even styles itself from your store: your name, your logo, your colors, your bestsellers. It hands the customer over to your normal checkout, and Shopify is direct about the boundary. Nothing in it places an order or takes payment.

Their merchant agent reads your products, orders and inventory, proposes changes, and writes back only the ones a person has signed off.

That shortens the distance considerably. It does not close it. Shopify is clear that these are reference versions built for development, not something to put in front of customers as they stand. You still need someone technical to build it, and the questions about logins, permissions and compliance are still yours to answer.

If you already have a development partner, this is now a scoped project rather than an open-ended one. If you do not, it is still a hiring decision.

## Your Catalog Decides Whether It Works

Anthropic published engineering notes alongside the announcement, and one line in them should concern an operator more than anything in the announcement itself:

> Agents expose weaknesses in data quality.

What the system needs is unglamorous. Product codes that are consistent and come from your store rather than being guessed at. Product information that is clean rather than stuffed with repeated fields. Search results that come back already sorted by relevance instead of dumped in a pile.

The safety design follows from the same worry. The agent can only discuss products your own systems have handed it, which is how it is stopped from inventing a product or a price. And nothing it proposes touches money or inventory until a person approves it.

Read that back as an operator and the conclusion is uncomfortable. If your product titles are inconsistent, your variants half-filled, your availability lagging, or your shipping and returns policies living in three places that disagree, an agent does not smooth any of that over. It reads what is there and repeats it to a customer, in a conversation, with your name on it.

It is the same failure you already know from shopping feeds. Point a messy catalog at Google Merchant Center and the row gets rejected, so you find out immediately and go fix it. An agent does not reject the row. It answers the question anyway.

## You Have Met This Problem Before

Here is the part that matters most if you run a retention program, and it is the reason I would not treat this announcement as a reason to panic.

The data an agent needs is the data your email program already needed.

Dynamic product blocks in Klaviyo read the same fields: codes, titles, prices, images, availability. Product feeds read them. On-site search reads them. When those fields drift, the email goes out showing something out of stock, or a price that is wrong, or an image belonging to a different variant. That failure is visible, and being visible is why brands who take email seriously have usually already fixed it. [The way we check against live store data while a campaign is being built](/blog/mcp-stack-ecommerce-retention/) exists for exactly this reason.

So there is a split forming, and it does not track brand size.

Brands that cleaned up their catalog because their emails kept rendering wrong are most of the way to being ready for this, and they did not do it for this. Brands that never had to confront it, because a person was always in the loop quietly translating messy data into a decent customer experience, are going to meet the whole bill at once.

That is worth sitting with, because it reframes what the work actually is. Getting ready for commerce agents is not an AI project. It is catalog hygiene, written policies and properly structured product information. Unglamorous, nobody wants to own it, and it pays for itself in email and on-site search whether or not you ever launch an agent.

It is the same distinction I keep coming back to. Asking a model to write you some product descriptions is the [chatbot phase](/blog/gap-between-using-ai-and-having-ai-workflows/). Having your catalog, your inventory and your policies in a state where a system can read all of them and be trusted with the answer is the workflow phase. The announcement did not change which phase you are in.

## About Those Two Numbers

The announcement says carts up to 35% larger and shoppers 60% more likely to complete a purchase. Nearly every article about it repeats both.

They are worth exactly what they are. Figures published by the vendor, drawn from large deployments by companies with engineering teams. The named early customers include Shopify, Priceline, Intuit, Square, Wix and Klaviyo. None of them is a useful comparison for a brand doing seven figures with a three-person marketing team.

Do not plan against those numbers, and be wary of anyone quoting them at you as a forecast. The underlying idea is reasonable enough. A shopper who can ask for a two-person tent under $250 and get a real answer probably does buy more than one clicking through a category page. The size of that effect at your scale is unknown, and nobody currently selling this to you knows it either.

## What to Do This Quarter

Three options, in order of cost, and the first one is legitimate.

**Do nothing, on purpose.** The plans are weeks old, building on them takes real engineering, and nothing about your business gets worse while you wait. Most brands should choose this and look again in six months, once the platforms have absorbed it. Choosing that deliberately is a different thing from missing it.

**Fix the catalog.** No engineering required, and it is the only item on this list that pays off whether or not agents turn out to matter. Consistent product codes, complete variant information, accurate availability, and your shipping, returns and sizing policies written once in a form anything can quote. Your emails improve immediately. So does your on-site search. And if you do build later, you skip the part that would have stalled it.

**Run a look-only merchant pilot.** Internal, no customer exposure, nothing it can change. An agent that reads your store and answers the questions your team currently puts to an analyst, or to nobody. Shopify's version is the shortest route to a working one. If it earns its keep, you extend it later to proposing changes, with the approval step already built in.

The middle option is the one I would push almost every brand toward first, and it is the least interesting thing on this page. That is usually how it goes. The announcement is about agents. The work is about your product data, which was true last year, and would have been worth doing then.

*If you want to work out which of the three fits your brand, and what your catalog would need before any of it is worth building, [book a consultation](/consultation).*
