---
title: "MCP or the API: What Each One Can Actually Do"
date: 2026-09-10
author: "Kinga Dow"
category: "AI Systems"
excerpt: "A connector is a curated slice of an API, and the vendor chose the slice. Klaviyo's will delete a flow it cannot build. Here is where the line sits, why it sits there, and what to do when you hit it."
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
metaDescription: "An MCP connector is a curated subset of an API. Where Klaviyo draws the line, why it draws it there, and how to work when the connector runs out."
---

I do almost no technical work in a chat window any more. It all happens in Claude Code, and the reason is not the interface. It is that the same environment holds both the MCP connectors and the API keys, so when a connector runs out of road I do not have to stop and go somewhere else.

That happens more often than the marketing around connectors suggests, and the shape of when it happens turns out to be predictable.

## A Connector Is a Slice, Not the Thing

An MCP server is a **curated subset of an API**. The vendor picks which operations to expose, wraps them in the protocol, and puts an OAuth login in front. That curation is the whole reason connecting takes two minutes and involves no key management.

It also means every connector has a boundary someone chose. Not a technical limit. A decision.

Klaviyo's connector carries around forty tools across accounts, campaigns, catalogs, events, flows, profiles, reporting and templates. It is genuinely capable. And there is a specific, consistent line running through it.

## Where Klaviyo Draws the Line

The connector creates plenty of things. Campaigns, email templates, coupons and coupon codes, catalog items and variants, custom metrics, profiles, lists, tags, translations.

Now the four it will not create.

| Object | Read | Update | Delete | Create |
|---|---|---|---|---|
| **Flow** | yes | yes | yes | **no** |
| **Segment** | yes | no | yes | **no** |
| **Form** | yes | no | yes | **no** |
| **Webhook** | yes | no | yes | **no** |

Read that column again. The connector will **delete a flow it cannot build**.

That is not an oversight, and once you see it the logic is obvious. The line is not reads against writes. It is **content against infrastructure**.

Everything creatable is something that gets sent or something that sits in a catalog. Everything blocked is something that runs on its own once it exists. The neighbouring pairs make it plain. `create_list` exists and `create_segment` does not, because a list is a static membership and a segment is a live definition that keeps evaluating. `create_campaign` exists and `create_flow` does not, because a campaign goes out once and a flow keeps going out.

A model that misunderstands a campaign sends one bad email. A model that misunderstands a flow sends bad email until somebody notices.

Klaviyo's own developer guidance says the quiet part directly: **"Klaviyo does not recommend pre-creation of flows in customer accounts."** They built the endpoint and then told you to be careful with it, which is a reasonable position and worth respecting rather than routing around.

## What the API Adds

The REST API underneath is the full surface, and it has both of the endpoints the connector withholds.

| | MCP connector | REST API |
|---|---|---|
| Read campaigns, flows, segments, metrics, profiles | yes | yes |
| Create campaigns, templates, coupons, catalog items | yes | yes |
| **Create a segment** | no | `POST /api/segments`, scope `segments:write` |
| **Create a flow** | no | `POST /api/flows`, scope `flows:write` |
| Delete flows, segments, forms, webhooks | yes | yes |
| Auth | OAuth, no keys | private key with per-scope permissions |
| Setup | minutes | generate a key, choose scopes, store it safely |
| Several accounts | custom connector, needs a paid Claude plan | one key per account |
| Version pinning | not exposed | revision header, currently `2026-07-15` |
| Rate limits | handled for you | 1/sec, 15/min, 100/day on these endpoints |

Both creation endpoints are generally available. Flow creation carried a beta warning on an older revision and no longer does.

Two practical notes if you go this way. Objects inside a new flow definition use a `temporary_id`, which Klaviyo swaps for real IDs on save and hands back in the response. And Klaviyo's private keys default to **full** permissions rather than read-only, so scope them down deliberately rather than accepting the default.

## How I Actually Work

Connector first, always. It answers most of what I want to know, it costs nothing to set up, and questions are the majority of the work. What is the repeat rate on this segment. Which flows have not been touched in a year. What did this campaign actually earn.

The API comes out when the connector has no tool for the thing. Building the six segments of an RFM grid, for instance, or standing up a flow structure across a roster of accounts rather than clicking it once.

The judgment is about repetition more than capability. Doing something once for one brand, use the interface. Doing it for eight brands, write it once against the API and run it per account. Doing it for one brand and never again, an API script is over-engineering.

What makes this workable is having both in the same place. In Claude Code the connectors are configured and the per-client keys sit in a secrets file the shell can source, so moving from one to the other is a change of method rather than a change of tool. That is the entire reason I stopped working in chat.

## The Rule Worth Keeping

When a connector says no, it is usually a curation decision rather than a technical limit.

So the question to ask is not "what other tool can do this." It is "what does the API call for this look like." Nine times in ten the endpoint exists, it is documented, and it needs a key and a scope you can create in about a minute.

The connector is the fast path. The API is the whole path. Knowing which one you are on is most of the skill.

*If you are working out how much of your stack is worth wiring up this way, [book a strategy session](/consultation/).*
