---
title: "MCP or the API: What Each One Can Actually Do"
date: 2026-09-17
author: "Kinga Dow"
category: "AI Systems"
excerpt: "The MCP connector, the API and the Klaviyo interface are three layers, not two. The connector does almost everything, the API covers a short list beyond it, and some of Klaviyo has no automation at all."
image: "/images/blog/mcp-vs-api.svg"
imageAlt: "Three nested layers: the MCP connector inside the larger API surface, both inside the full Klaviyo interface"
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
metaDescription: "How the Klaviyo MCP connector, the API and the interface relate. What Claude builds directly, the short list that needs a key, and what lives only in the UI."
---

There are two ways to build in Klaviyo with Claude. One is the MCP connector: the link you switch on so Claude can read and act on your account. The other is the API underneath it: the developer route, which needs a key and someone comfortable with code. Which you reach for depends on what you are doing, and most of the time the connector is enough on its own.

I keep both open at once. Most of my work now happens in Claude Code, the version of Claude that runs on my computer rather than in a chat window, because it holds the connector and a key in the same place. When I build a flow, I start with the connector for everything it will do, and drop to the API for the little it will not. There is no switching tools and no stopping to decide which is which.

The rest of this is where each one stops.

## A Connector Is a Keycard

Think of the MCP connector as the keycard a hotel gives you. It opens your room, the gym and the pool. It does not open the plant room, not because that door is special, but because somebody decided which doors you get.

The API is the bigger keyring the staff carry. It opens far more, because the company wrapped more of the building in it. Even that keyring does not open every door, though. A few things only the front desk can do, and no key hands them to you.

Every connector, then, has an edge that a person chose. It is a decision rather than a technical limit, which is the single most useful thing to understand about it. The doors it leaves off the card are usually open on the API.

## What the Connector Actually Does

Start with the connector, because it does far more than people assume. Pulling from Klaviyo, it has full create, update and delete across campaigns, flows, segments, lists, profiles, templates, catalogs, coupons, events and metrics, tags, images, translations, brands, sending domains and text-message senders. It reads essentially everything, and it carries all the reporting. For day-to-day marketing work, the connector is the workhorse, not a stripped-down preview of one.

The list of what it will not do is short:

- **Create or update a webhook**, the automatic notice Klaviyo sends another app when something happens. It reads and deletes webhooks, but will not make one.
- **Edit an existing form.** It creates a form and deletes one, but there is no tool to change a form already in place.
- **Rewrite a whole flow in one move.** It builds a flow, edits individual steps, switches a flow's status and deletes it. There is no single call that swaps the entire flow from top to bottom.

That is close to the whole gap. Notice the shape of it: the things held back are the ones that keep running after you walk away. A webhook fires on its own. A live flow keeps sending. If the AI misreads a campaign, one bad email goes out and you apologize. If it misreads a live flow, bad email keeps going out until a person notices. Klaviyo says as much in its own developer notes, "Klaviyo does not recommend pre-creation of flows in customer accounts," and it builds two settings into the connector so you can hold the line tighter still: a read-only mode that switches off every write, and a core-tools mode that trims it to around forty actions for tools with less room.

## Where the API Adds Something

The connector is a curated wrapper over the API, so most of what the API can do, the connector now does too. That changes what the API is actually for.

It is for the short list the connector leaves out. Creating a webhook, or making an edit the connector cannot, is a developer-route job. Everything else the connector already builds, flows and segments and forms included, so reaching for a key to make one of those is rarely about capability.

The real reason agencies reach for the API is control at scale. A key lets you run the same build across a roster of accounts without clicking through each one, or script Klaviyo into another system with no Claude in the loop at all. One safety note if you make a key: Klaviyo's default is full permission on everything, rather than permission to look and nothing else. Narrow it deliberately, the same way you would set the connector to read-only if all you want is answers.

## Where Neither One Reaches

This is the third place the work can live, and the one people forget. Above the connector and the API sits the Klaviyo interface itself, and a real part of it has no developer route at all. The idea that the API is the whole of Klaviyo is simply wrong. No key, through Claude or otherwise, opens what was never built to be automated.

Designing a sign-up form, its look, its timing, the rules for who sees it, is an interface job. So is the deliverability work: inbox testing, spam checks, sender reputation. So are the benchmarks that compare you against other senders, the AI features that draft subject lines and suggest segments, connecting an integration like Shopify in the first place, and the account, billing and user settings. You can read some of the results of those through the API. You cannot do the work through it.

That matters more than it sounds, because it is exactly where judgment lives. The parts of Klaviyo with no developer route are mostly the parts that need a person deciding something: how a form should feel, whether the list is healthy enough to send, which integration to trust. Automation stops at the edge of judgment, which is a reasonable place for it to stop.

## How I Actually Decide

Connector first, every time. It answers most of what I want to know, it costs nothing, and honestly most of the work is questions rather than actions. What is the repeat rate on this segment. Which flows have not been touched in a year. What did this campaign really earn once you strip out the people who were buying anyway. Building follows the same order: the six segments of an [RFM grid](/blog/klaviyo-rfm-segmentation/) are a connector job, so I let Claude build them there.

The API key comes out for the short list the connector will not touch, and for anything I am running across several accounts at once, where writing the instructions once and running them per account beats doing it by hand eight times.

The interface is where I go for the design and setup work neither route reaches, and where I would rather be a person anyway. Knowing which of the three a task belongs to, before I start, is most of what makes the whole setup fast. It is the practical version of the [difference between using AI and having AI workflows](/blog/gap-between-using-ai-and-having-ai-workflows/).

## The Bit Worth Remembering

The connector is the fast path, and for everyday marketing work it does almost everything. The API is the wider path, for the short list beyond the connector and for running things at scale. The interface is the whole of Klaviyo, and part of it will never be a path at all.

So when someone tells you to "just automate it through the API," the useful question is which layer the task actually lives on. Most of the time the connector already has it. Sometimes it needs a key. And sometimes the honest answer is that this one was built for a person, and it should stay that way.

*If you are working out how much of your stack is worth wiring up this way, [book a strategy session](/consultation/).*
