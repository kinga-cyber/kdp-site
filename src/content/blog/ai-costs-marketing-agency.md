---
title: "What AI Actually Costs to Run in an Agency"
date: 2026-09-03
author: "Kinga Dow"
category: "AI Systems"
excerpt: "The bill does not track how hard the work was. It tracks how many turns the conversation took. Which means the cost of running AI on client work is set by your setup, not by the AI."
image: "/images/blog/ai-costs-agency.svg"
imageAlt: "Chart comparing a straight line cost estimate against the steeper curve of what an AI build is actually billed across twenty turns"
keywords:
  - "ai costs for marketing agency"
  - "how much does ai cost for client work"
  - "ai api costs"
  - "agency ai workflow cost"
  - "does ai save agencies money"
  - "ai automation agency margin"
featured: false
draft: false
metaTitle: "What AI Actually Costs to Run in an Agency | Kinga Dow"
metaDescription: "AI bills you for the conversation, not the work. Why agency AI costs grow faster than expected, and the setup change that flattens them."
---

Writing is cheap. Set this headline to that. Swap this price. Change this link. When Claude builds an email from a Figma design, those instructions are a sentence each, and they are the actual work.

Reading is where the money goes. Asking the AI to look at the design file and understand it pulls the whole structure of that file into the conversation, every layer, every property, every nested component. One read can cost more than the entire build that follows it.

I learned that in June, in a single session where I built the same email five different ways. The brief never changed. Nothing in my setup told the AI how my Figma file worked, so every attempt started by reading it again and guessing again. The design was never the expensive part.

AI does not bill you for the work. It bills you for the conversation. Every time you send a message, the tool sends the whole conversation so far back to the AI, and you pay for all of it again. So the cost of running AI on client work tracks how many back and forth turns a task took, not how complicated the deliverable was. That means the bill is set by your setup, not by the AI, and it is the one part of this most agency owners never budget for.


## Why the Bill Does Not Match the Work

The AI has no memory between messages. Each time you say "now change the headline," the tool re-sends everything that came before it, and nothing on screen shows that happening.

So cost does not grow in a straight line. It grows on a curve.

Say every turn adds a thousand tokens. A token is the unit AI is priced in, roughly three quarters of a word, so a thousand of them is a long paragraph. Turn one costs you a thousand. Turn two costs two thousand, because it carries turn one with it. By turn twenty you are paying twenty thousand for that single instruction, and the running total is not twenty thousand. It is 210,000.

It works like a taxi that charges you for the whole journey so far every time you speak to the driver. The last question costs more than the first mile.

[Augment Code ran this on a real agent loop](https://www.augmentcode.com/guides/ai-agent-loop-token-cost-context-constraints) and published the numbers. Their ten-step file-reading process burned 472,500 tokens. The same work done in a single pass took 9,000. That is their benchmark on their task, not a measurement of email production, but the shape holds anywhere.

Which reorders what expensive means. A complicated deliverable is not expensive. A long conversation about a simple one is expensive.

## The Two Kinds of Turns

Once turns are the unit of cost, the question becomes which turns you can delete. They split into the two types from the opening, and they do not cost remotely the same.

**Writing turns** are a handful of tokens each. There is nothing to save there.

**Reading turns** are the expensive ones, and they get more expensive as the file grows. Everything the AI reads lands in the conversation, which is what people mean when they say context, and it gets re-sent on every turn after. [Figma's own documentation](https://help.figma.com/hc/en-us/articles/32132100833559-Guide-to-the-Figma-MCP-server) warns that without tight scoping, requests get slower and more token-consuming as the file grows. The same is true of every connector you attach, which is worth knowing before you [wire up six of them](/blog/mcp-stack-ecommerce-retention/).

The read is the turn to delete.

## What Rediscovery Costs Every Month

Here is the part that should bother anyone running this across a client roster.

Without a written system, that expensive read happens at the start of every single build. Every month, on every brand, you pay full price to teach the AI things it already worked out last month. The knowledge evaporates when the session ends.

There is a third cost underneath it, and in my June session it was the largest one. Being wrong. A bad guess costs you the turn where you do the wrong thing, the turn where you notice, and the turn where you fix it. Then all three get re-billed by every turn after them for the rest of the session. Without a system you do not only take more turns. You take more wrong ones.

This is the same problem as an account manager leaving and taking the client's history with them. The work was done. Nobody wrote it down, so it has to be done again.

## Where the Tokens Sit

This part took me a while to appreciate, and it widens the gap considerably.

Anthropic, the company behind Claude, caches part of what you send. That means it keeps a processed copy ready instead of working through it again. [Per their documentation](https://platform.claude.com/docs/en/docs/build-with-claude/prompt-caching), re-reading cached content costs **0.1x** the normal input price. One tenth.

But there is a condition, and the condition is everything. The cached content has to sit at the top of the conversation and be identical every time. Anthropic calls this a **stable prefix**. Anything that changes invalidates the cache at that level and everything after it.

Now compare the two ways of working.

A written system file is stable by definition. It is a document. It loads once at the top and every turn after re-reads it at a tenth of price.

Discovery is the exact opposite. It is different every run, it lands in the middle of the conversation rather than the top, and when it changes it takes the cacheability of everything after it down with it.

So a system does not only use fewer tokens. It puts the tokens it does use in the position that costs ninety percent less to re-read, while discovery puts them in the worst position available.

Two honest limits, and they are not the same limit. The cached copy has a lifetime, five minutes by default with a one hour option, so leaving a session idle over lunch means the next thing you ask pays full price for the whole conversation again even though nothing has been forgotten. Separately, starting a **new** session loses the conversation altogether rather than just the discount.

That second one is what decides how you work. Memory is a property of the session. Cost is a property of the clock. It is also the reason the build file has to be a file, rather than something you explained well once in a conversation that has since ended.

## The Cost That Is Not on the Invoice

The strongest argument here is not about money.

AI gets worse as the conversation fills up. Anthropic describes the mechanism plainly: transformers create ["n² pairwise relationships for n tokens"](https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents), so every token you add competes for attention with every other token. In plain terms, every word you add has to be weighed against every word already there, and the AI gets worse at the weighing as the pile grows. They call the result context rot, and performance degrades well before you hit any hard limit.

Sit with what that means for a discovery-heavy build. You open by dumping an enormous, mostly irrelevant description of a file into the conversation. Then you try to do careful work in what is left of its working memory, with the AI's attention already spread across thousands of tokens it will never need again.

The discovery-heavy build is not only the more expensive way to produce the asset. It is the way that produces the worse one.

That is the version of this argument that matters for client work, because a slightly larger bill is survivable and an email that went out worse than it should have is not.

## What Changes When It Is Written Down

None of the fix is exotic. It is documentation, which is why it gets skipped.

For each client I keep a build file. It holds which campaign type clones which existing layout, the exact name of every field that can be edited, where prices and links get verified from, and which components are broken. Section five of it is called "writes, not reads."

That last category earns its place fastest. Two components in one client's design file hang for about sixty seconds on any attempt to read their properties. I found that out several times before I wrote it down. Now nothing reads them, and that single line has saved more than most of the positive instructions in the file.

The whole document runs to roughly 4,000 tokens, about three pages. It loads once at the start of a build, and the build goes straight to changing content. No looking around. Anthropic's own guidance points the same way: letting the AI explore as it goes is slower than handing it what it needs, and they recommend loading the essentials up front.

Two operational consequences follow, and both are free.

**Batch the work.** The first build in a session carries the setup cost. Every one after it is a fraction, because everything it needs is already loaded. One email on Tuesday and one on Thursday pays that cost twice for two emails. Ten in one sitting pays it once. This is the mechanism behind a claim I made in [the Figma to Klaviyo post](/blog/figma-to-klaviyo-email-templates/) without explaining it.

**Stop rebuilding what already exists.** In Klaviyo, headers and footers are universal blocks that live in the account. They never get built. They get dropped in at the end, and the template you actually construct is only the part that is genuinely new. That saving has nothing to do with tokens and everything to do with not doing work twice.

None of this required a better model. It required writing down what I already knew.

The agencies that find AI expensive are usually paying for rediscovery, over and over, on every brand. That cost is real, and it is not inherent. It is the [gap between using AI and having AI workflows](/blog/gap-between-using-ai-and-having-ai-workflows/), showing up on an invoice instead of in a missed flow.

*If you are working out whether this is worth building for your agency, [book a strategy session](/consultation/) and we will look at what your current setup is actually costing you.*
