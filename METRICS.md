# METRICS.md

## North Star Metric

**Qualified leads generated per week** — defined as a user who completed an audit showing >$200/month in spend AND submitted their email.

### Why this metric

SpendLens is a B2B lead generation tool for Credex. DAU or total visits are vanity metrics — a founder who visits and bounces generates zero value. A founder who completes an audit, sees real savings, and submits their email is a qualified prospect. That is the only outcome that matters at this stage.

DAU would be wrong here because this is a tool people use once a quarter, not daily. Optimizing for DAU would lead to building engagement features that distract from the core value.

---

## Three Input Metrics That Drive the North Star

### 1. Audit Completion Rate
**Definition:** % of users who land on /audit and click "Run My Audit"
**Target:** >60%
**Why it matters:** If users drop off before completing the form, no audit = no lead. Low completion rate signals the form is too long or confusing.
**What to instrument:** Track form_started event and audit_completed event. Gap between them = drop-off.

### 2. Email Capture Rate
**Definition:** % of users who completed an audit and then submitted their email
**Target:** >25% for high-savings audits, >10% overall
**Why it matters:** This is the conversion step. Value is shown before the ask — if users still don't convert, either the savings aren't compelling or the ask feels risky.
**What to instrument:** Track results_viewed and lead_captured events with savingsCategory as a property.

### 3. Share Rate
**Definition:** % of completed audits where the user copied the shareable link
**Target:** >15%
**Why it matters:** Sharing is the viral loop. One shared report can bring in 3-5 new visitors. This is the organic growth mechanism.
**What to instrument:** Track share_link_copied event on the results page.

---

## What to Instrument First

In priority order:

1. `audit_started` — user lands on /audit
2. `audit_completed` — user clicks Run My Audit
3. `results_viewed` — results page loads with a valid audit
4. `lead_captured` — email submitted successfully
5. `share_link_copied` — share button clicked
6. `credex_cta_clicked` — Book Consultation clicked (high-savings users only)

All events should include `savingsCategory` (high/low/optimal) and `useCase` as properties.

---

## Pivot Trigger

If after **500 completed audits**, email capture rate is below 10% overall, that signals one of two problems:

1. The savings numbers are too low to motivate action — audit engine needs recalibration
2. Users don't trust the results — need social proof or methodology transparency

At that point the decision is: improve audit quality or add trust signals before iterating further on distribution.

If email capture rate is above 10% but Credex consultation bookings are below 2% of captured leads, the problem is the handoff — the Credex CTA needs redesign or the qualification threshold needs adjustment.