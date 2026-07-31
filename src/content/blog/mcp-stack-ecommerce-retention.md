---
title: "The MCP Stack for Ecommerce Retention Marketing"
date: 2026-08-13
author: "Kinga Dow"
category: "AI Systems"
excerpt: "Six MCP connectors I use daily, and what each one actually exposes. What you can ask it, what it can change, and where each one bites. Written from using them, not from reading their marketing pages."
image: "/images/blog/mcp-stack.svg"
imageAlt: "Diagram of a campaign moving through connected MCP servers: context from Fireflies and Drive, brief in Asana, design in Figma, build in Klaviyo, verified against Shopify"
keywords:
  - "mcp servers ecommerce"
  - "klaviyo mcp"
  - "model context protocol marketing"
  - "shopify mcp"
  - "figma mcp"
  - "fireflies mcp"
metaTitle: "MCP Servers for Ecommerce: What Each One Does | Kinga Dow"
metaDescription: "Six MCP connectors for retention marketing, what each actually exposes, what it makes cheap to ask, and the limits worth knowing before you set them up."
featured: false
draft: false
---

An MCP connection is the difference between an assistant that can describe your Klaviyo account and one that can read it.

Model Context Protocol is an open standard for how an AI assistant connects to an outside tool. Before it, connecting a model to Klaviyo meant someone building a custom integration for that specific pairing. MCP standardizes the socket, so a tool builds one server and any assistant that speaks the protocol can use it.

That is the whole concept. What follows is the part that is harder to find: what each connector actually exposes, what it makes cheap to ask, and where each one bites. Written from using them daily rather than from their marketing pages.

## Klaviyo

**What it exposes.** Campaigns, flows, segments, lists, templates, metrics, profiles, catalogs, coupons, forms, reviews, tags, images. Reads and writes both. You can pull a campaign report, query metric aggregates over a date range, get flow performance broken down by message, create or update a segment, clone a template, and render one to check it.

**What it makes cheap.** Comparative questions. Klaviyo's dashboards answer the questions Klaviyo anticipated, which are mostly "how did this perform". The expensive ones are comparative and awkward: how does this segment's repeat rate compare to that one, what share of a flow's revenue comes from the first email versus the rest, which flows have not been edited in a year, what percentage of a list has engaged with anything in six months.

Those are all answerable from the API and none are one click in the interface, which is why they mostly go unasked.

**A real one.** I checked a pop-up's actual numbers rather than trusting a summary. The old forms were converting at 2.26% and 3.93%. The replacement, a multi-step form collecting zero-party data on the way in, came in at 9.11% from 3,947 views and 420 submits. Roughly four times better on mobile, and the winning mechanic was not a bigger discount, it was asking a question during signup. That comparison took about a minute.

**Where it bites.** The hosted connector runs an OAuth flow and, on Claude, needs a paid plan. There is also a local server you run yourself against a private API key, which is worth knowing if you manage several client accounts and want them separated. You need an Owner, Admin or Manager role on the account either way.

## Shopify

**What it exposes.** Products, variants, collections, orders, customers, inventory levels by location, discounts, and analytics through ShopifyQL. There is also a general GraphQL escape hatch, which matters more than it sounds: the Admin API covers hundreds of resources and the convenience tools only wrap the common ones. Metafields, pages, markets, gift cards and the rest are all reachable through raw GraphQL.

**What it makes cheap.** Anything that requires knowing what is actually true about the catalog right now. Prices, variant names, what is in a collection, what is in stock and where.

**A real one.** Every campaign brief I build pulls live per-SKU stock at build time. If a featured product is under roughly fifty units and the send is going to a whole list, that gets raised as a blocker before the design is approved rather than after the email lands. Promoting something into a sellout is expensive, specific and entirely preventable, and preventing it needs exactly one thing: the stock number being present at the moment the decision gets made.

**Where it bites.** Inventory is per location, so a single "in stock" number can be misleading for a brand with multiple warehouses or retail stock. Check the location breakdown, not just the total.

## Figma

**What it exposes.** Design context for a selected frame, component and variable definitions, screenshots, file metadata, Code Connect mappings, and writes to the canvas.

**What it makes cheap.** Turning a design into something buildable without a human interpreting it. When the assistant can read the actual component structure and the variable definitions, a frame stops being a picture and becomes a specification. It also means design tokens can be read from the file rather than restated in a prompt, which is what stops colors and spacing drifting between emails.

**A real one.** Components map to email blocks. Hero component, hero block. Product row component, product row block. Once that correspondence exists and can be read, output stops varying between builds because there is no decision left to make.

**Where it bites.** Two things. Your designs have to be built from components. A file of loose grouped elements arranged to look like an email has no structure to read, and no amount of tooling fixes that. And writes to the canvas are considerably fussier than reads, so treat "read the design" and "build the design" as different levels of maturity.

## Asana

**What it exposes.** Tasks, projects, sections, custom fields, comments, attachments, and search. Reads and writes.

**What it makes cheap.** Making the campaign brief the single source of truth, and keeping it there. Every campaign is a task carrying the copy, the segment, the send time, the inclusions and exclusions, the product links. When that information is scattered across an email thread, a spreadsheet and a message, building becomes reassembly, and reassembly is where things get missed.

It also makes the calendar answerable. "What is not scheduled yet this month" is a question, not an audit.

**A real one.** A build session takes two links as input: the Figma frame and the Asana task. Everything else the build needs is already in one of those two places.

**Where it bites.** Advanced task search is a Premium feature. On a free workspace you can list and filter but not full-text search across descriptions and comments, which is a meaningful difference if you are trying to find that campaign from March.

## Fireflies

**What it exposes.** Call transcripts, summaries, soundbites, search across everything with filters for date, participant and keyword scope.

**What it makes cheap.** Retrieval from your own spoken record. Search accepts a proper query grammar, so you can pull every call in a date range where a particular topic came up, filtered to specific participants.

**A real one.** The clearest explanation of your own methodology is almost always something you said out loud to someone who asked a good question, not something you sat down to write. Those explanations already exist in your call history. Being able to search them turns a back catalog of calls into a content pipeline and, more usefully, into institutional memory that survives someone leaving.

**Where it bites.** It only knows about calls that were actually recorded, which sounds obvious and still catches people out. And transcripts contain everything said, including things a client would not expect to see published, so anything mined from them needs a deliberate confidentiality pass before it goes anywhere.

## Google Drive

**What it exposes.** File search using a structured query syntax, file content, metadata, and creation.

**What it makes cheap.** Grounding. Brand guidelines, positioning documents, past reports, research, tone references. This is the layer that makes output sound like you rather than like competent generic marketing.

**Where it bites.** The search syntax is more restrictive than the Drive interface. It supports specific query terms combined with operators, and full-text search behaves differently from what you would expect from the search box. Expect to be more precise than you are used to.

## What Is Still Missing

The platforms are well covered. The gap used to be the **reporting and analytics layer above them**, and that has started to close faster than I expected.

**Triple Whale** now ships an official MCP server, with documentation, a public repository, and OAuth2 connection at read-only access. It is listed in both the Claude and OpenAI connector directories.

**Polar Analytics** has one too, and its design is the more interesting of the two. Rather than exposing raw tables for the model to write SQL against, it exposes a defined metrics layer, so you are querying agreed definitions instead of hoping a generated query means what you think it means. Worth noting that most of what is published about that comparison comes from Polar themselves.

So brand-side analytics is arriving. What has not arrived is the **agency** layer.

The consolidated view across many client accounts is the one I would most want to interrogate conversationally: which clients are trending down, where the same problem shows up in three accounts at once. Those tools are built for agencies rather than brands, and they are still closed. Hiro Analytics, which exists specifically to automate reporting for retention agencies across Klaviyo, Attentive, Postscript, Omnisend, Yotpo and Sendlane, publishes no MCP server and no API at all.

That is the more interesting absence. Cross-client synthesis is the thing an agency cannot get anywhere else, and it is exactly the kind of question a model is good at. Until it opens up, expect to reach each platform directly and do that synthesis yourself.

## Where to Start

Connect them in this order:

1. **Klaviyo**, because it answers the most questions per unit of effort
2. **Shopify**, because it makes the Klaviyo answers real
3. **Your project tool**, because that is what turns answers into work that actually happens

Figma, call transcripts and document storage come after. Powerful, but only once the first three are producing something worth designing and briefing.

The most common mistake is connecting everything at once and using none of it. One connection you interrogate daily beats six you configured and forgot.

*If you want a second opinion on which parts of your stack are worth connecting first, [book a strategy session](/consultation/).*
