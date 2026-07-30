---
title: "The MCP Stack for Ecommerce Retention Marketing"
date: 2026-08-13
author: "Kinga Dow"
category: "AI Systems"
excerpt: "An MCP connection is the difference between an assistant that can describe your Klaviyo account and one that can read it. Here are the six I use daily, what each unlocks, and why the value is in the chain rather than any single one."
image: "/images/blog/mcp-stack.svg"
imageAlt: "Diagram of a campaign moving through connected MCP servers: context from Fireflies and Drive, brief in Asana, design in Figma, build in Klaviyo, verified against Shopify"
keywords:
  - "mcp servers ecommerce"
  - "klaviyo mcp"
  - "model context protocol marketing"
  - "shopify mcp"
  - "ai workflows ecommerce"
  - "figma mcp"
metaTitle: "MCP Servers for Ecommerce: The Stack I Use | Kinga Dow"
metaDescription: "The six MCP servers I use daily for retention marketing, what each one unlocks, and why connecting them matters more than any single one."
featured: false
draft: false
---

An MCP connection is the difference between an assistant that can describe your Klaviyo account and one that can read it.

That sounds like a small distinction. It is not. Without a connection, everything you get back is a general answer about how Klaviyo works, dressed up in your context. With one, the answer comes from your flows, your segments, your actual numbers.

Six of these run in my working setup every day. What follows is what each one unlocks, and then the part most write-ups skip: why the value is in connecting them rather than in any single one.

## What an MCP Actually Is

Model Context Protocol is an open standard for how an AI assistant connects to an outside tool. That is genuinely all it is.

Think of it as a socket. Before MCP, connecting a model to Klaviyo meant someone writing a custom integration for that specific pairing. Every tool times every assistant, built separately. MCP standardises the socket, so a tool builds one server and any assistant that speaks the protocol can use it.

For anyone running marketing operations, the practical translation is short: **your tools stop being places you go and become things your assistant can reach.**

## Why It Matters More Than It Sounds

The honest case for this is not that it saves you clicks.

It is that certain questions stop being expensive. "Where does repurchase actually stall for this brand" is a two-hour job with exports and a spreadsheet, which means nobody does it and the ninety-day convention survives unexamined. Connected, it is a question you ask in a sentence.

When the cost of asking drops far enough, you start asking things you previously assumed. That is the actual change, and it shows up as better decisions rather than saved time.

## The Six

### Klaviyo

The centre of the stack for retention work. Campaigns, flows, segments, templates, metrics, profiles.

What it unlocks is interrogation rather than reporting. Klaviyo's own dashboards answer the questions Klaviyo anticipated. A connection answers the ones you actually have, which are usually comparative and awkward: how does this segment's repeat rate compare to that one, what share of a flow's revenue comes from the first email, which flows have not been touched in a year.

Concrete: I checked a pop-up's real performance rather than trusting the dashboard summary. The old forms were converting at 2.26% and 3.93%. The replacement, a multi-step form collecting zero-party data on the way in, came in at 9.11% from 3,947 views. Roughly four times better on mobile, and the mechanism was not a bigger discount. That comparison took a minute to pull and would not have happened otherwise.

### Shopify

Products, inventory, orders, customers, analytics.

The obvious use is product data for campaigns. The one that has actually saved me is inventory.

Every campaign brief I build pulls live per-SKU stock at build time. If a featured product is under roughly fifty units and the send goes to a whole list, that gets flagged as a blocker before the design is approved, not after the email goes out. Promoting something into a sellout is a specific, expensive, entirely preventable mistake, and preventing it requires exactly one thing: the stock number being present at the moment the decision is made.

### Figma

Design context, components, variables, the canvas itself.

This is what makes design-to-build work rather than being a demo. When components map to email blocks and the assistant can read the actual component structure, a Figma frame becomes a buildable specification instead of a picture to interpret.

The prerequisite is real and worth stating: your designs have to be built from components. A file of loose grouped elements arranged to look like an email has no structure to read.

### Asana

Tasks, projects, sections, fields.

Less glamorous than the others and arguably the one holding everything together. Every campaign is a task, and the task carries the copy, the segment, the send time, the inclusions and exclusions, the product links.

That matters because it gives the chain a single source of truth. When campaign information is scattered across an email thread, a spreadsheet and a message, the build stage becomes reassembly, and reassembly is where things go missing.

### Fireflies

Call transcripts, summaries, search.

The one people are most surprised by, because it is not a marketing tool. Every training call, strategy session and client conversation becomes searchable text.

What that unlocks is content and institutional memory. The clearest explanation of your own methodology is almost always something you said out loud to someone who asked a good question, not something you sat down to write. Those explanations are sitting in your call history.

### Google Drive

File search and content.

Brand guidelines, positioning documents, past reports, research. The context that makes output sound like you instead of like generic marketing copy.

On its own it is unremarkable. As the thing the other five draw on for tone and standards, it does a lot of quiet work.

## What Actually Changes

Here is the part the listicles miss. Any one of these is a faster lookup. Several of them connected is a different category of thing.

A campaign moves through all of them without anyone carrying it between tools. Context comes out of Drive and Fireflies. The brief lands in Asana with the segment and the offer decided. The design is read from Figma. The template is built in Klaviyo. Stock is verified against Shopify before it goes anywhere. Nobody copies anything from one window into another, and nothing gets dropped in transit, because there is no transit.

**That is the difference between using AI and having an AI workflow.** Asking a model for subject lines is the chatbot phase. Having it read the account, build from the real design, check the stock and write into the campaign task is the workflow phase. The first saves twenty minutes. The second changes what is possible to run at all.

The compounding is worth naming too. Each connection makes the others more useful. Klaviyo alone tells you a segment's size. Klaviyo plus Shopify tells you whether the products that segment buys are in stock. Add Asana and that check happens automatically as part of building the campaign, rather than being something a careful person remembers.

## What Is Still Missing

The ecosystem is uneven, and it is worth being honest about where.

The platforms are well covered. Klaviyo, Shopify, Figma, the project tools. Those are solved.

The gap is in the **reporting and analytics layer that sits above them**. Agencies run consolidated reporting across many client accounts, and that consolidated view is exactly the thing you would most want to interrogate conversationally. Most of those tools have no MCP server yet. So the raw data is reachable and the synthesised view is not, which is backwards from where the value sits.

That will close. It is a young protocol, and reporting tools have an obvious incentive. But if you are assembling a stack today, expect to reach the platforms directly and to do the cross-account synthesis yourself.

## Where to Start

If you are setting this up from nothing, connect them in this order:

1. **Klaviyo**, because it answers the most questions per unit of effort
2. **Shopify**, because it makes the Klaviyo answers real
3. **Your project tool**, because that is what turns answers into work that actually happens

Figma, call transcripts and document storage are the layer after. Powerful, but only once the first three are producing something worth designing and briefing.

The most common mistake is connecting everything at once and using none of it. One connection you interrogate daily beats six you configured and forgot.

*If you want a second opinion on which parts of your stack are worth connecting first, [book a strategy session](/consultation/).*
