---
title: "MCP or the API: What Each One Can Actually Do"
date: 2026-09-17
author: "Kinga Dow"
category: "AI Systems"
excerpt: "A connector is a keycard, not the master key. In August Klaviyo's would not build a segment. This month it will. Where the line sits now, why it moves, and how to tell when you have hit it."
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
metaDescription: "An MCP connector is a curated slice of an API, and the slice moves. What Klaviyo's connector creates now, what still needs a key, and how to tell which you have hit."
---

In August I built six RFM segments by hand. I had asked Claude to create them through the Klaviyo connector and it could not, because creating a segment was not one of the actions on offer. So I typed six rule sets into the segment builder, twenty minutes, and moved on.

This month the same connector creates segments. It creates flows and forms too, which it also refused in August. Nothing changed in my account and nothing changed in Klaviyo's underlying system. Somebody at Klaviyo changed the list of doors the connector opens.

That is the whole subject of this post. There are two ways into Klaviyo from Claude. One is the connector (MCP is the technical name for it): the link you switch on so Claude can read and act on your account. The other is the API: the developer route underneath, which needs a key and someone comfortable with code. I do most of my work in Claude Code, the version of Claude that runs on my computer rather than in a chat window, and it holds both. So when the connector cannot do something, I can keep going instead of stopping to switch tools.

Knowing where the connector's edge sits before you plan a workflow saves you finding it halfway through one. Knowing that the edge moves saves you building around a wall that is no longer there.

## A Connector Is a Keycard

Think of an MCP connector as the keycard a hotel gives you. It opens your room, the gym and the pool. It does not open the plant room, not because that door is special, but because somebody decided which doors you get.

That is what an [MCP connector](/blog/mcp-stack-ecommerce-retention/) is. The company picks which actions to hand out, wraps them up, and puts a login in front. That curation is exactly why setting one up takes two minutes and involves no keys, no permission settings and no documentation to read.

It also means every connector has an edge that a person chose. It is a decision rather than a technical limit. And a decision can be revisited, which is what happened between August and September.

## What Klaviyo Will and Will Not Make

Klaviyo's connector has become genuinely capable. Checked against Klaviyo's own documentation for it on 5 September 2026, it will create campaigns, email templates, flows, segments, forms, lists, customer profiles, coupons and codes, catalog items, tags and images, and it will read essentially everything.

Two things are still off the card.

| It will make | It will not do |
|---|---|
| Campaigns and email templates | Create a webhook, the automatic notice Klaviyo sends to another app when something happens. It can list and delete webhooks, but not make one. |
| Flows, segments, forms and lists | Rebuild a flow that already exists. It can switch a flow's status, edit a single step, or delete the flow. It cannot rewrite the whole thing. |
| Profiles, coupons, catalog items | |

There are also two settings worth knowing about, because they put part of the curation in your hands. A read-only mode switches off every action that changes the account, which is the right setting for anyone who only wants questions answered. And a core-tools mode trims the connector to around forty actions, for tools with less room to hold them all.

## Why the Line Is Where It Is

In August the line was easy to explain. Everything the connector would make was something that gets sent once. Everything it refused was something that runs on its own: a flow keeps sending after you walk away, a segment keeps re-evaluating who belongs in it. If the AI misunderstands a campaign, one bad email goes out and you apologize. If it misunderstands a flow, bad email keeps going out until a person happens to notice.

That reasoning still shows in what remains off the card. A webhook is Klaviyo handing your data to another system every time something happens, and it runs on its own. Rewriting a live flow is the riskiest edit in the account. Klaviyo's own developer notes say it out loud: **"Klaviyo does not recommend pre-creation of flows in customer accounts."** They built the ability, on both routes, and then told people to be careful with it. That is a fair position and worth respecting rather than working around.

So what moved in August was not the principle. It was where Klaviyo decided the acceptable risk ends, and the read-only setting is their way of letting you draw that line tighter than they did.

## When You Do Hit the Wall

The important thing is that the wall is a curation decision, not a technical one. Underneath every connector is the company's full API, and the full API has the thing the connector withheld.

Klaviyo's does. Webhooks can be created through the developer route. Flow creation became a fully supported feature in January 2025, after a spell as a test feature. Form creation followed in October 2025. Segment creation has been there all along.

The practical difference is what it costs you to get at them:

| | Connector | API |
|---|---|---|
| Setting it up | a couple of minutes, log in and go | make a key, choose what it can touch, store it somewhere safe |
| What it can reach | the doors on the card, and the card grows | everything |
| Several accounts | needs a paid Claude plan | a key per account |
| Who it suits | anyone | someone comfortable being handed a key |

One safety note if you go and make a key. Klaviyo's default when you create one is **full permission on everything**, rather than permission to look and nothing else. Narrow it deliberately, the same way you would switch the connector to read-only if all you want is answers.

## How I Actually Decide

Connector first, every time. It answers most of what I want to know, it costs nothing, and honestly most of the work is questions rather than actions. What is the repeat rate on this segment. Which flows have not been touched in a year. What did this campaign really earn once you strip out the people who were buying anyway.

The API key comes out when the connector has no door for the thing. Today that means a webhook, or rebuilding a flow from the ground up. In August it also meant the six segments of an [RFM grid](/blog/klaviyo-rfm-segmentation/), and now it does not, which is why I check the card before I reach for the key.

But the deciding factor is usually repetition rather than capability. Doing something once, for one brand, ask the connector. It is a few minutes and you are done. Doing the same thing across eight brands is where writing the instructions once and running them for each account starts to pay, and where clicking through, or asking eight times, becomes the expensive option.

What makes any of this comfortable is having both to hand in the same place. That is the whole reason I moved out of chat, and it is the practical version of the [difference between using AI and having AI workflows](/blog/gap-between-using-ai-and-having-ai-workflows/).

## The Bit Worth Remembering

When a connector will not do something, it is usually because someone decided you should not, rather than because it cannot be done. And that someone can change their mind.

So the useful question is "is this actually off the card, or just off my card, and is it still off the card this month," rather than "what other tool could do this." Most of the time the feature exists, it is documented, and getting to it costs one key and about a minute. Some of the time it has arrived on the card while you were not looking.

The connector is the fast path. The API is the whole path. Knowing which one you are standing on, and checking now and then, is most of the skill.

*If you are working out how much of your stack is worth wiring up this way, [book a strategy session](/consultation/).*
