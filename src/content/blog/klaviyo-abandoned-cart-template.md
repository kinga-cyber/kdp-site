---
title: "Klaviyo Abandoned Cart Template: 3 Emails, Copy and Product Block Code"
date: 2026-10-21
author: "Kinga Dow"
category: "Klaviyo"
excerpt: "The template I put inside Klaviyo's pre-built abandoned cart flow: 3 emails with timing, subject lines and preview text, the blocks in order, the cart code, the flow filter, and the one place a discount belongs."
image: "/images/blog/klaviyo-abandoned-cart-template.svg"
imageAlt: "Three abandoned cart emails side by side, each showing the cart and a Return to cart button: a reminder after 1 hour, a reassurance email with reviews after 1 day, and a last reminder after 3 days with an optional code for first-time buyers, all under the flow filter Placed Order zero times since starting this flow"
keywords:
  - "klaviyo abandoned cart template"
  - "klaviyo abandoned cart email template"
  - "abandoned cart email template"
  - "klaviyo abandoned cart flow"
  - "abandoned cart subject lines"
  - "klaviyo abandoned cart dynamic block"
metaTitle: "Klaviyo Abandoned Cart Template: Emails & Code | Kinga Dow"
metaDescription: "Copy my Klaviyo abandoned cart template: 3 emails with timing, subject lines, preview text, block order, the cart code and the flow filter."
featured: false
draft: false
faqs:
  - question: "Does Klaviyo have an abandoned cart template?"
    answer: "Yes. Klaviyo's flow library has a pre-built Abandoned Cart Reminder flow in the Prevent lost sales section. It triggers on Started Checkout (listed as Checkout Started on Shopify), comes with a filter that stops the flow when someone orders, and its emails include a cart block and a Return to Cart button. It waits 4 hours before the first email. The copy, the timing and any discount are still yours to set."
  - question: "Should a Klaviyo abandoned cart flow trigger on Started Checkout or Added to Cart?"
    answer: "Use Started Checkout for the main flow, since it carries the full cart and a link back to that checkout. Added to Cart reaches shoppers earlier and works as a separate second flow, with the filter Started Checkout zero times since starting this flow so nobody gets both sequences. On Shopify, Added to Cart needs Klaviyo's app embed and the Track behavioral events setting turned on."
  - question: "What flow filter does a Klaviyo abandoned cart flow need?"
    answer: "Placed Order zero times since starting this flow. Klaviyo checks the filter before every email, so anyone who buys after the first email stops receiving the rest. The pre-built flow includes it, and it's worth confirming it's still there before the flow goes live."
  - question: "How many emails should an abandoned cart flow have?"
    answer: "A good default is 3 emails: a reminder 1 hour after checkout starts, a reassurance email with reviews, shipping and returns a day later, and a last reminder 3 days after that. Klaviyo recommends 2 to 3 abandoned cart emails. Give each one its own job, so each email says something the last one didn't."
  - question: "Should abandoned cart emails include a discount?"
    answer: "Keep the discount out of the first email, since the people opening it mostly need a link back to their cart. If you use a code, put it in the last email and show it to first-time buyers with smaller carts. Larger carts usually hesitate over confidence, and reviews and a clear returns policy answer that without giving away margin."
---

You pick Abandoned Cart Reminder from Klaviyo's flow library, and the skeleton is built for you: a trigger, a filter, a 4-hour wait, and emails with a cart block and a Return to Cart button already in place. Then you open the first email, and the decisions that make it work are still yours. What each email says, when it goes out, and whether any of them carries a code.

This is the template I fill it with: 3 emails with one job each, the copy and blocks for each one, the product block code, the filter that stops the flow when someone buys, and the one place a discount belongs.

The reasoning behind each choice, including why this flow reports more revenue than it really earns, is in my post on [what actually recovers revenue in a Klaviyo abandoned cart flow](/blog/abandoned-cart-flow/). This post is the template to copy.

## The Klaviyo abandoned cart template at a glance

| Email | Wait before it | Job | Discount |
|---|---|---|---|
| 1 | 1 hour | Remind them, with a link back | None |
| 2 | 1 day | Answer the reason they hesitated | None |
| 3 | 3 days | Last reminder | Optional, first-time buyers only |

Each wait is a flow time delay, counted from the step before it. Klaviyo's pre-built flow waits 4 hours before email 1. This template uses the common 1 hour, 1 day and 3 day spacing, which reaches an interrupted shopper while the cart is still on their mind. On store platforms that sync to Klaviyo less often, Klaviyo suggests waiting at least 1 hour and 15 minutes.

## Abandoned cart flow trigger and filter in Klaviyo

**Trigger: Started Checkout** (listed as Checkout Started on Shopify). It fires when someone enters their details at checkout and moves to the next step, and it carries the full cart and a link back to that checkout.

**Flow filter: Placed Order zero times since starting this flow.** Klaviyo checks it before every email, so a purchase after email 1 stops emails 2 and 3. The pre-built flow includes it. Confirm it's still there before you go live: a reminder about a cart someone already paid for is one of the faults I find most often in accounts.

**Optional second flow: Added to Cart.** It reaches people before they start checkout. Give it the filter Started Checkout zero times since starting this flow, so anyone who checks out moves to the main flow. On Shopify it needs Klaviyo's app embed and the Track behavioral events setting.

Then turn off your store platform's own abandoned cart emails, so each cart gets one set of reminders.

## Abandoned cart email template: what each email says

All 3 emails share a frame: header, headline, a line or two of copy, the cart block, a Return to cart button, footer. The middle of each email is what changes.

### Email 1: the reminder

**Blocks in order:** header, headline, 1 line of copy, cart block, Return to cart button, a line on how to reach you, footer.

**Copy:** "Your cart is saved. Everything you picked is below, and the button takes you straight back to checkout."

**Subject lines:**
- Your cart is saved
- You left `{{ event.extra.line_items.0.product.title|default:'something' }}` in your cart
- Still deciding? Your cart's right here

**Preview text:**
- Everything you picked, one click from checkout.
- Pick up right where you left off.

The second subject line uses the first item's name, with "something" as the fallback. Keep this email free of discounts and urgency: the people opening it were mostly interrupted, and a link back is all they need.

### Email 2: the reassurance

**Blocks in order:** header, headline, cart block, 2 or 3 short customer reviews, shipping cost and delivery time, returns policy, size guide if you sell sizes, Return to cart button, footer.

**Copy:** "Here's what other customers say, when your order would arrive, and how returns work."

**Subject lines:**
- What other customers say
- Free returns on everything in your cart (if you offer them)
- When your order would arrive

**Preview text:**
- Reviews, delivery times and returns, all in one place.
- The answers most people want before they check out.

By now the interrupted shoppers have bought, and the people left have a reason: shipping cost, sizing, delivery time, price. Repeat customers already trust you, so add a split on Placed Order at least once over all time and send them a shorter version with delivery and returns.

### Email 3: the last reminder

**Blocks in order:** header, headline, 1 line of copy, cart block, the code with its expiry date (discount path only), Return to cart button, footer.

**Copy:** "Your cart is still saved. This is the last email we'll send about it."

**Subject lines:**
- Last reminder about your cart
- Your cart is still saved
- Your cart, now 10% off until Sunday (discount path)

**Preview text:**
- This is the last email about your cart.
- Your code works on everything in your cart until [date].

## Klaviyo abandoned cart product block code

The pre-built emails include a cart block that repeats for each item. To build your own, paste this into an HTML block. It lists each item with its image, name, quantity and price, and every link goes back to that person's checkout.

```django
{% comment %}
  Cart block for a flow triggered by Started Checkout (Checkout Started on Shopify).
  Tags are Shopify's. line_price is the item price times the quantity.
{% endcomment %}
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
  {% for item in event.extra.line_items %}
  <tr>
    <td width="120" valign="top" style="padding:12px 0;">
      <a href="{{ event.extra.checkout_url }}">
        <img src="{{ item.product.images.0.src }}" width="120" alt="{{ item.product.title }}" style="display:block;border:0;width:120px;height:auto;">
      </a>
    </td>
    <td valign="middle" style="padding:12px 0 12px 16px;font-family:Arial,sans-serif;font-size:16px;line-height:24px;color:#333333;">
      <a href="{{ event.extra.checkout_url }}" style="color:#333333;font-weight:bold;text-decoration:none;">{{ item.product.title }}</a><br>
      Qty {{ item.quantity }} &middot; {% currency_format item.line_price %}
    </td>
  </tr>
  {% endfor %}
</table>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
  <tr>
    <td align="center" style="padding:24px 0;">
      <a href="{{ event.extra.checkout_url }}" style="display:inline-block;padding:14px 32px;background:#333333;color:#ffffff;font-family:Arial,sans-serif;font-size:16px;font-weight:bold;text-decoration:none;border-radius:4px;">Return to cart</a>
    </td>
  </tr>
</table>
```

Before it goes live:

- **It reads the trigger event**, so it fills in only in a flow triggered by Started Checkout. Preview it with a test profile that has started a checkout.
- **The tags are Shopify's.** Other platforms use different names, so in Preview & test, hover a property to copy its exact tag. Klaviyo's tags follow Django, a template language. Code from a Shopify theme is written in Liquid, which looks similar and breaks the email.
- **`line_price` is the line total**, so 2 of a $12 item show as $24.
- **The no-code version** is a table block set to Dynamic, with Row collection `event.extra.line_items` and Row alias `item`. Added to Cart carries one product, so that flow uses a single product block.

## When to add a discount to an abandoned cart email

A share of the people this flow brings back were coming back anyway, and a code in email 1 pays them for a purchase they'd already decided to make. Klaviyo's help center gives the same advice: keep the coupon out of the first email, since discounting can train customers to abandon carts to get one.

So the code lives in email 3, for the shoppers where it changes the outcome:

- **First-time buyers.** Split on Placed Order zero times over all time. Repeat customers know you, and the reminder does the job.
- **Smaller carts.** A big cart usually hesitates over confidence, which email 2 answers. A split on cart value reads the total from the checkout event, so you can cap who gets the code.
- **A unique code with a real expiry.** Use a single-use code from Klaviyo's coupons, with the expiry matching the date in the email.

A holdout, as the strategy post describes, shows what the flow really adds, and that's the number to weigh the code's margin against.

## Abandoned cart email timing for your store

The 1 hour, 1 day and 3 day spacing is a convention and a sound place to start. Your account holds the real answer: how long abandoned checkouts take to turn into orders, and what share of the people abandoning have never ordered. A store selling $15 refills and one selling $900 chairs will get different answers, just as they get different [reorder windows](/blog/predict-when-your-customers-will-reorder/).

With Klaviyo connected to Claude through [Klaviyo's MCP connector](/blog/mcp-vs-api-klaviyo/), the plug-in that lets Claude read your account, you can ask both questions in plain English and get answers from your own events. The first answer sets the wait before email 1. The second tells you how many people the code would reach, and so what it costs. Ask when you build the flow, then again a year later.

*If you'd like a second opinion on your abandoned cart flow before you rebuild it, [book a strategy session](/consultation/).*
