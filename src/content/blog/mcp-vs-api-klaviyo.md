---
title: "MCP or the API: What Each One Can Actually Do"
date: 2026-09-17
author: "Kinga Dow"
category: "AI Systems"
excerpt: "There are two ways to build in Klaviyo with Claude: the MCP connector and the API underneath it. What each one is for, when to reach for which, and why I keep both open at once."
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
metaDescription: "The Klaviyo MCP connector and the Klaviyo API are two routes into the same account. What each one does, when to use which, and how to run both together in Claude Code."
---

There are two ways to build in Klaviyo with Claude, and telling them apart is the first thing worth knowing. One is the MCP connector: a link you switch on so Claude can read and act on your account. The other is the API underneath it: the developer route, which needs a key and someone comfortable with code. Most people meet the connector and never learn there is a second door behind it. Knowing both, and when each is the right one, is the actual skill.

Which one you reach for depends on what you are doing. The connector handles the bulk of the work. It reads everything in the account and builds most of what you would want to build, campaigns, flows, segments, templates. The API handles the few things the connector leaves out, and the case where you are running the same build across a roster of accounts rather than one.

I keep both open at once, which is the honest answer to how I work. Most of my work now happens in Claude Code, the version of Claude that runs on my computer rather than in a chat window, because it holds the connector and an API key in the same place. When I build a flow, I start with the connector for everything it will do, and drop to the API only for the piece it will not. There is no switching tools and no stopping to decide which is which.

Using both well comes down to knowing where the connector stops and why it stops there. The rest of this post is that map.

## A Connector Is a Keycard

Think of an MCP connector as the keycard a hotel gives you. It opens your room, the gym and the pool. It does not open the plant room, not because that door is special, but because somebody decided which doors you get.

That is what an [MCP connector](/blog/mcp-stack-ecommerce-retention/) is. The company picks which actions to hand out, wraps them up, and puts a login in front. That curation is exactly why setting one up takes two minutes and involves no keys, no permission settings and no documentation to read.

It also means every connector has an edge that a person chose. It is a decision rather than a technical limit, which is the single most useful thing to understand about it. The doors you cannot open are not locked by nature. Somebody decided not to hand them over, and those same doors are usually open on the API.

## What Klaviyo Will and Will Not Make

Klaviyo's connector is genuinely capable. It will create campaigns, email templates, flows, segments, forms, lists, customer profiles, coupons and codes, catalog items, tags and images, and it reads essentially everything.

Two things are still off the card.

| It will make | It will not do |
|---|---|
| Campaigns and email templates | Create a webhook, the automatic notice Klaviyo sends to another app when something happens. It can list and delete webhooks, but not make one. |
| Flows, segments, forms and lists | Rebuild a flow that already exists. It can switch a flow's status, edit a single step, or delete the flow. It cannot rewrite the whole thing. |
| Profiles, coupons, catalog items | |

That list is current as of writing and tends to grow, so a glance at Klaviyo's connector documentation is worth it before you assume something is missing.

There are also two settings worth knowing about, because they put part of the curation in your hands. A read-only mode switches off every action that changes the account, which is the right setting for anyone who only wants questions answered. And a core-tools mode trims the connector to around forty actions, for tools with less room to hold them all.

## Why the Line Is Where It Is

The line has a logic, and understanding it tells you what to expect from any connector, not only this one. Most of what the connector builds is something that happens once. A campaign goes out and it is done. A template sits there until someone uses it. A coupon does nothing until it is redeemed. The things it holds back, or hedges, tend to be the ones that keep running after you walk away.

A webhook fires every time something happens. A live flow keeps sending. If the AI misreads a campaign, one bad email goes out and you apologize. If it misreads a live flow, bad email keeps going out until a person happens to notice. That difference is the whole reason the two remaining exceptions are a webhook and the wholesale rewrite of an existing flow.

Klaviyo pairs flow building with a caution in its own developer notes: **"Klaviyo does not recommend pre-creation of flows in customer accounts."** They built the ability, on both routes, and told people to use it carefully. The read-only setting is the same instinct handed to you, a way to draw the line tighter than they did.

## When You Do Hit the Wall

The important thing is that the wall is a curation decision, not a technical one. Underneath every connector is the company's full API, and the full API has the thing the connector withheld.

Klaviyo's does. Webhooks can be created through the developer route. Flow creation became a fully supported feature in January 2025, after a spell as a test feature. Form creation followed in October 2025. Segment creation has been there all along.

The practical difference is what it costs you to get at them:

| | Connector | API |
|---|---|---|
| Setting it up | a couple of minutes, log in and go | make a key, choose what it can touch, store it somewhere safe |
| What it can reach | the doors on the card | everything |
| Several accounts | needs a paid Claude plan | a key per account |
| Who it suits | anyone | someone comfortable being handed a key |

One safety note if you go and make a key. Klaviyo's default when you create one is **full permission on everything**, rather than permission to look and nothing else. Narrow it deliberately, the same way you would switch the connector to read-only if all you want is answers.

## How I Actually Decide

Connector first, every time. It answers most of what I want to know, it costs nothing, and honestly most of the work is questions rather than actions. What is the repeat rate on this segment. Which flows have not been touched in a year. What did this campaign really earn once you strip out the people who were buying anyway.

Building things follows the same order. The six segments of an [RFM grid](/blog/klaviyo-rfm-segmentation/) are a connector job, so I let Claude build them there. The API key only comes out when the connector has no door for the thing, which means a webhook or rebuilding an existing flow from scratch. Most days it stays in the drawer.

The deciding factor is usually repetition rather than capability. Doing something once, for one brand, I ask the connector, and it is done in a few minutes. Doing the same thing across eight brands is where writing the instructions once and running them per account starts to pay, and where asking eight times becomes the expensive way.

What makes any of this comfortable is having both to hand in the same place. That is the whole reason I moved out of chat, and it is the practical version of the [difference between using AI and having AI workflows](/blog/gap-between-using-ai-and-having-ai-workflows/).

## The Bit Worth Remembering

When a connector will not do something, it is usually because someone chose not to expose it, not because it cannot be done. So the useful question is "is this off the card, or just off my card," and the answer is nearly always sitting in the vendor's API documentation.

The connector is the fast path. The API is the whole path. Knowing which one you are standing on is most of the skill.

*If you are working out how much of your stack is worth wiring up this way, [book a strategy session](/consultation/).*
