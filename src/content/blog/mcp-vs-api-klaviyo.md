---
title: "MCP or the API: What Each One Can Actually Do"
date: 2026-09-10
author: "Kinga Dow"
category: "AI Systems"
excerpt: "A connector is a keycard, not the master key. Klaviyo's will delete a flow it cannot build, and once you see why, you know exactly when to stop reaching for it."
image: "/images/blog/mcp-vs-api.svg"
imageAlt: "Comparison showing the MCP connector as a small curated subset of tools sitting inside the much larger surface of the full REST API"
keywords:
  - "mcp vs api"
  - "klaviyo mcp server"
  - "klaviyo api"
  - "model context protocol limitations"
  - "claude code marketing"
  - "mcp connector capabilities"
featured: false
draft: true
metaTitle: "MCP or the API: What Each Can Actually Do | Kinga Dow"
metaDescription: "An MCP connector is a curated slice of an API. Where Klaviyo draws the line, why it draws it there, and how to know when you have hit it."
---

I do almost no technical work in a chat window any more. It all happens in Claude Code now, and the reason has nothing to do with the interface. It is that one place holds both the connectors and the keys, so when a connector runs out of road I do not have to stop and go and be somewhere else.

That happens more often than the enthusiasm around connectors suggests. It also happens in a pattern, and the pattern is worth knowing before you plan a workflow around one.

## A Connector Is a Keycard

Think of an MCP connector as the keycard a hotel gives you. It opens your room, the gym and the pool. It does not open the plant room, not because that door is special, but because somebody decided which doors you get.

That is what an [MCP connector](/blog/mcp-stack-ecommerce-retention/) is. The company picks which operations to hand out, wraps them up, and puts a login in front. That curation is exactly why setting one up takes two minutes and involves no keys, no scopes and no documentation.

It also means every connector has an edge that a person chose. Not a technical limit. A decision. And you can learn a lot about how a company thinks by looking at which doors they left off the card.

## What Klaviyo Will and Will Not Make

Klaviyo's connector is genuinely capable. It will create campaigns, email templates, coupons, catalog items, customer profiles and lists, and it will read essentially everything.

There are four things it will not create.

| It will happily make | It will not make |
|---|---|
| Campaigns | Flows |
| Email templates | Segments |
| Coupons and codes | Forms |
| Catalog items, profiles, lists | Webhooks |

Here is the part that gave the game away for me. The connector will **delete** a flow. It will delete a segment, a form and a webhook too. It simply will not create any of them.

You can knock the door down. You cannot build it.

## Why That Line Is There

Once you notice it, the logic is hard to unsee, and it is not about reading versus writing at all.

Everything on the left of that table is **something that gets sent**. A campaign goes out and it is done. A template sits there until someone uses it. A coupon does nothing until it is redeemed.

Everything on the right is **something that runs on its own**. A flow keeps sending after you walk away. A segment keeps re-evaluating who belongs in it. A webhook keeps firing.

The clearest tell is the pairs sitting next to each other. It will make a list but not a segment, and the difference between those is that a list is a fixed set of people while a segment is a rule that keeps deciding. It will make a campaign but not a flow, and the difference there is one send against an indefinite number of them.

Which comes down to something quite reasonable. If a model misunderstands a campaign, one bad email goes out and you apologize. If a model misunderstands a flow, bad email keeps going out until a human happens to notice.

Klaviyo's own developer notes say it out loud: **"Klaviyo does not recommend pre-creation of flows in customer accounts."** They built the ability and then told people to be careful with it. That is a fair position and mostly worth respecting rather than engineering around.

## When You Do Hit the Wall

The important thing is that the wall is a curation decision, not a technical one. Underneath every connector is the company's full API, and the full API generally has the thing the connector withheld.

Klaviyo's does. Both segment creation and flow creation exist there as ordinary, supported, generally available operations. Flow creation was in beta for a while and is not any more.

The practical difference is what it costs you to get at them:

| | Connector | API |
|---|---|---|
| Setting it up | a couple of minutes, log in and go | make a key, choose what it can touch, store it somewhere safe |
| What it can reach | the doors on the card | everything |
| Several accounts | needs a paid Claude plan | a key per account |
| Who it suits | anyone | someone comfortable being handed a key |

One safety note if you go and make a key. Klaviyo's default when you create one is **full permission on everything**, not read-only. Narrow it deliberately.

## How I Actually Decide

Connector first, every time. It answers most of what I want to know, it costs nothing, and honestly most of the work is questions rather than actions. What is the repeat rate on this segment. Which flows have not been touched in a year. What did this campaign really earn once you strip out the people who were buying anyway.

The key comes out when the connector has no door for the thing. Building the six segments of an [RFM grid](/blog/klaviyo-rfm-segmentation/) is a good example, since that is one of the four it will not make.

But the deciding factor is usually repetition rather than capability. Doing something once, for one brand, click it in. It is twenty minutes and you are done. Doing the same thing across eight brands is where writing it once and running it per account starts to pay, and where clicking becomes the expensive option.

What makes any of this comfortable is having both to hand in the same place. That is the whole reason I moved out of chat, and it is the practical version of the [difference between using AI and having AI workflows](/blog/gap-between-using-ai-and-having-ai-workflows/).

## The Bit Worth Remembering

When a connector will not do something, it is usually because someone decided you should not, rather than because it cannot be done.

So the useful question is not "what other tool could do this." It is "is this actually off the card, or just off my card." Most of the time the operation exists, it is documented, and getting to it costs one key and about a minute.

The connector is the fast path. The API is the whole path. Knowing which one you are standing on is most of the skill.

*If you are working out how much of your stack is worth wiring up this way, [book a strategy session](/consultation/).*
