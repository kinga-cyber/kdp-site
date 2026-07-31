---
title: "Bulk Sender Requirements: What Gmail, Yahoo and Microsoft Enforce"
date: 2024-01-30
updated: 2026-07-30
author: "Kinga Dow"
category: "Email Marketing"
excerpt: "Three inbox providers now enforce authentication on bulk senders, not two. Here is the actual bar, the spam rate that matters more than the one most people quote, and the requirement almost every summary of this gets wrong."
image: "/images/blog/sender-requirements.svg"
imageAlt: "Diagram showing the three authentication requirements enforced by Gmail, Yahoo and Microsoft on senders above five thousand messages a day"
keywords:
  - "bulk sender requirements"
  - "gmail yahoo sender requirements"
  - "microsoft outlook sender requirements"
  - "email authentication DMARC"
  - "one-click unsubscribe"
  - "email deliverability"
metaTitle: "Gmail, Yahoo & Microsoft Sender Requirements | Kinga Dow"
metaDescription: "The authentication bar for bulk senders across all three major inbox providers, the spam rate that actually matters, and the one-click unsubscribe rule most guides get wrong."
featured: false
draft: false
---

Three inbox providers enforce authentication requirements on bulk senders now, not two. Microsoft joined Gmail and Yahoo in May 2025, and the bar is broadly the same across all three.

If you send more than 5,000 messages a day to any of them, you need SPF, DKIM and DMARC, a working one-click unsubscribe, and a spam complaint rate you are actively watching. That is the whole requirement. The details are where people get caught.

## What Changed

The original version of this post covered the Google and Yahoo rules that took effect in February 2024. Two things have happened since.

**Microsoft now enforces the same standards.** From 5 May 2025, senders above 5,000 messages a day to Outlook.com, Hotmail.com and Live.com must pass SPF, DKIM and DMARC. Non-compliant mail is rejected outright, with a bounce reading `550 5.7.515 Access denied, sending domain does not meet the required authentication level`. Enforcement is automated and assessed on rolling windows rather than as a one-off check.

**Enforcement across all three has tightened from warning to rejection.** The 2024 posture was largely about filtering. The current posture is that mail failing the bar does not arrive.

## The Requirements

**SPF and DKIM.** Both. Not one or the other.

**DMARC**, with alignment. At minimum a policy of `p=none`, which is a monitoring policy and does not reject anything. The important part is not the policy strength, it is that either SPF or DKIM must pass **and** the passing domain must match the domain in your From header. That match is what alignment means, and it is where most failures actually happen.

**A From header on a domain you own.** Not a generic Gmail or Outlook address.

**One-click unsubscribe** on marketing mail, and the unsubscribe must be honored within two days.

**A spam complaint rate you monitor**, with two numbers that matter.

## The Correction Worth Making

An earlier version of this post said the unsubscribe needed to be a clear, easy, one-step process, but "not necessarily facilitating a one-click unsubscribe action."

That was wrong, and it is worth correcting rather than quietly deleting because the same phrasing still circulates.

**It is genuinely one-click, and it is a technical requirement, not a design one.** The mail has to carry two headers, `List-Unsubscribe` and `List-Unsubscribe-Post`, so the inbox provider can render its own unsubscribe control and process the request without the recipient ever visiting your site. The link must work without forcing anyone to log in.

A visible unsubscribe link in your footer does not satisfy this. It is a separate thing that also has to exist.

The practical implication is short: this is handled at the sending platform level. If you send through a major ESP it is almost certainly already correct. If you send through anything custom, check the raw headers of an email you actually received rather than trusting a settings page.

## The Spam Rate People Quote, and the One That Matters

Most summaries cite 0.10%. That is the target, not the limit.

**Below 0.10%** is where Google wants you to sit and what you should treat as normal.

**0.30% is the cliff.** Reaching it is what causes real damage, and the damage is not proportionate. It is a threshold, not a slope.

The gap between those two numbers is the entire warning zone, and it is narrow. On a list of 100,000, the difference between comfortable and in trouble is a few hundred complaints. That is one badly targeted campaign.

Google Postmaster Tools shows you this. It is free, it takes a few minutes to set up, and almost nobody looks at it until something has already gone wrong.

## Which Is the Actual Problem

Authentication is a one-time job. You configure DNS records, you verify them, and unless somebody changes your DNS they keep working. It is genuinely the easy half, and it is the half every article about this concentrates on.

The complaint rate is the ongoing one, and it is the one that degrades quietly.

Nothing announces a rising spam rate. Deliverability does not fail loudly, it erodes. Open rates drift down over weeks in a way that looks like creative fatigue or seasonality, and by the time it is obvious enough to investigate you are looking at months of damage and a reputation that takes far longer to rebuild than it took to lose.

The reason it goes unnoticed is not carelessness. It is that checking requires deliberately logging into a tool that reports nothing most of the time, which is exactly the kind of task that quietly stops happening.

That makes it a scheduled check rather than a habit. A weekly automated look at the complaint rate, the authentication status and whether either has moved is the difference between catching a bad send in days and finding out in a quarter. It is also the sort of thing that is tedious for a person and trivial to automate, which is usually a sign of where the automation belongs.

## What to Check Today

Four things, in order:

1. **Your DNS records.** Look for TXT records for SPF, DKIM and DMARC. A DMARC record starts with `v=DMARC1`. If it is missing, that is the first job.
2. **Alignment.** Confirm the domain in your From header matches the domain passing SPF or DKIM. Passing authentication on a domain that is not the one in the From header does not count.
3. **The headers on a real email.** Send yourself a campaign and look at the raw source for `List-Unsubscribe-Post`. Not the settings page, the actual message.
4. **Postmaster Tools.** If you are not set up, do that. If you are, look at where your complaint rate has been sitting for the last month, not just today.

If all four are clean, the requirements are not your problem, and any deliverability issue you have is about who you are sending to rather than how.

*If your open rates have been drifting and you want a second opinion on whether it is targeting or reputation, [book a strategy session](/consultation/).*
