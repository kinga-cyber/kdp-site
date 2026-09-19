---
title: "Klaviyo Loyalty Flows: The Tiers, the Points Block, and a Faster Build"
date: 2026-10-22
author: "Kinga Dow"
category: "Klaviyo"
excerpt: "Loyalty gets written off, but for the right account it is one of the highest-leverage programs you can run. Here is the flow architecture that moves customers up a tier, the dynamic block that shows them their points, and the 3-step workflow, LoyaltyLion to Figma to Klaviyo, that made the build easy."
image: "/images/blog/klaviyo-loyalty-flows.svg"
imageAlt: "A loyalty email flow map across five stages, from join and earn through tiers, redemption, referrals and win-back, with a dynamic points-progress block at the center"
keywords:
  - "klaviyo loyalty flows"
  - "loyalty program email flows"
  - "loyaltylion klaviyo"
  - "loyalty email automation"
  - "points program emails"
  - "loyalty tiers email"
featured: false
draft: false
metaTitle: "Klaviyo Loyalty Flows: Tiers, Points, Build | Kinga Dow"
metaDescription: "The loyalty flow architecture that moves customers up a tier, the dynamic block that shows their points, and the LoyaltyLion, Figma and Klaviyo workflow that sped up the build."
---

If your brand holds its prices, whether that is a premium position or simply a decision that discounting teaches customers to wait for the next sale, a points program is how you reward loyalty without ever marking the product down. Your best customers still get something real, early access, a gift, a reward they redeem, and the price stays intact.

That is the case for loyalty that gets missed. It is written off as a low-leverage add-on, the thing you switch on and forget. For the right account it is one of the highest-leverage programs you can run, and the difference is entirely in what you build around it.

Most loyalty programs are already running. Points add up, tiers get earned, and the last time the customer heard a word about any of it was the day they joined. The program works. The communication around it does nothing, and closing that gap is the whole job.

## How a Points Program Works

The mechanic is simple. Customers earn points for the actions you want more of: buying, referring a friend, leaving a review. Those points redeem for a reward, usually a voucher or a discount. Once customers are earning, you divide them into tiers by how much they have earned, so your most active customers sit at the top and get more for being there.

Two levers turn that mechanic into revenue: the flows that run automatically off each customer's activity, and the campaigns you send to your members on purpose. The flows carry most of the weight, and they are where this starts.

## Where Loyalty Has Real Leverage

Loyalty earns its keep when customers buy more than once and the gap between purchases is where you lose them. A brand people buy from a few times a year, in a category with genuine repeat demand, gives customers a reason to keep a balance and a status worth protecting. Points give the next purchase a pull that price alone does not, and a tier gives your best customers a reason to stay your best customers.

It suits premium and discount-averse brands especially well: points reward your best customers without ever cutting the price.

For a true one-and-done purchase, loyalty is harder to justify. Knowing which side of that line your brand sits on is the first decision, and it is worth making honestly before you build anything.

## Tiers Give Customers a Reason to Move Up

The engine of a loyalty program is the tier. A flat "earn points, spend points" scheme is a discount with extra steps. Tiers change the shape of it: there is a level above the one you are on, it comes with something you actually want, and you can see how close you are. That target is what turns a passive balance into a goal.

So the tier structure is worth designing first. Three tiers is a sensible default: an entry level everyone joins, a middle level that takes real spend to reach, and a top level that carries the rewards worth chasing. Each step up should feel earned, and each should come with a reason to have bothered.

## Show the Points Inside the Email

Here is the piece that the email marketers building these programs skip a lot: the dynamic fields. They leave out the personalization that shows a customer their own points, and send the same generic loyalty email to everyone. Putting the number in the email, live, every time, is what makes the tier worth chasing.

A dynamic block handles this. It reads the customer's live points balance and their distance from the next tier, and renders it into a line they understand at a glance: what they have, and how far to the next reward. "Ready to use" once they have crossed the line, "almost there" when they are close, an exact count of points to go when they are not. The same email says something different to every person who opens it, because it is reading their real balance at the moment it sends.

That is the difference between an email that reads the customer's real balance and one that only announces the program. The personalized one is what gets acted on, and it is why the flows are the backbone of a loyalty program.

## The Build Got Easier: My 3-Step Process

Building this used to be slow and painful. The points, tiers and rules live in LoyaltyLion, the strategy has to be worked out and laid out somewhere, and the sending happens in Klaviyo. Stitching all of that together by hand was where the time went.

Here is how I build it now. It runs in 3 steps, each one an MCP connector, the plug-in that lets Claude read and work with a tool once you give it permission.

1. **Evaluate the program in LoyaltyLion.** Claude reads the rewards program through LoyaltyLion's connector, which is read-only: the tiers, the earning rules, the rewards, the points-expiry policy, and each customer's balance and tier. Before anything gets built, the model understands exactly how the program is set up.
2. **Lay the strategy out in Figma.** Claude builds a board in Figma with every flow and every email mapped out, each with its trigger, its audience and its logic. I keep this step on purpose: I want the whole strategy in one place I can cross-check against, and a reference I can come back to later.
3. **Build it in Klaviyo.** Claude reads the Figma board, the emails and the instructions written on it, and builds directly in Klaviyo, creating the flows and attaching each email where it belongs.

The same build now takes about a third of the time it used to, and the main reason is that the manual work is gone. At each step, the job a person used to do by hand, reading the program, drawing the board, wiring up the flows, is now done by Claude. I double-check and make corrections, but I am no longer the one doing it. Each step also hands the next one something it can read rather than something someone has to re-explain, and with the strategy sitting in Figma in the middle, there is always a clean map to check the build against and come back to later.

## The Program, Stage by Stage

The loyalty program I built most recently runs about a dozen emails across 5 stages. Each stage is its own flow, keyed to the customer's own activity rather than a marketing calendar.

- **Join and earn.** A welcome that explains how points work the moment someone joins, while they still care.
- **Status and tiers.** The heart of it: a nudge when a customer is close to the next tier, a welcome when they reach it, and an honest note when a tier lapses. This is where the movement between tiers actually happens.
- **Rewards and redemption.** A message when a reward is ready to claim, and a reminder when a voucher is sitting unused. Redemption is the step where points turn into revenue.
- **Referrals and win-back.** A prompt to refer, a confirmation when a referral pays out, and a short series to bring back a customer whose points have gone still.
- **Birthday.** A dated gift that scales with the tier the customer has earned.

Every one of these reads the customer's real loyalty state and speaks to it. That is the whole program, and it is why the points stop being a number nobody looks at.

## Loyalty in Your Campaigns

The flows run on their own off each customer's activity. Your campaigns, the broadcasts you send on purpose, are the other lever, and a loyalty program gives them plenty to say. A handful that work:

- **Points reminders.** A broadcast that shows members the balance they are sitting on. A reminder that the points exist brings back people who forgot they were partway to something.
- **Double or triple points.** A limited-time multiplier on every purchase. It gives a real reason to buy this week rather than next month, and it never touches your prices.
- **Early access.** Members get the sale, or the new product, a day or two before everyone else. The reward is status, not a discount, which is exactly what you want your best customers chasing.
- **Bonus points on a launch or a slow mover.** Extra points on one product turns loyalty into a merchandising lever, whether you are pushing a new arrival or clearing stock.
- **A use-your-points nudge.** A campaign to members holding redeemable points, timed before an expiry or the end of a season. Redemption is where points become revenue, and a deadline moves it.

Each of these sends to a loyalty segment, so the message only reaches the people it fits. The flows tell each customer where they stand. The campaigns give the whole program a reason to show up in the inbox on a schedule you set.

## The Short Version

Loyalty is a set of flows that tell each customer where they stand and what is one step away, plus a handful of campaigns that give the whole base a reason to act. With the tier as the pull, the points block as the proof, and the customer's live data underneath all of it, it earns a place on the short list of programs worth running properly. That workflow, from LoyaltyLion to Figma to Klaviyo, is what made building it that way straightforward.

*If you want a look at whether loyalty is high-leverage for your account, and what the flows would look like, [book a strategy session](/consultation/).*
