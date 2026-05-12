# ECONOMICS.md

## What a Converted Lead is Worth to Credex

Assumptions (conservative):
- Average startup AI spend: $500/month
- Credex discount on credits: 20%
- Credex margin on credits sold: 15%
- Average customer lifetime: 12 months

**LTV per customer:**
$500/month × 15% margin × 12 months = **$900 LTV**

Conservative estimate: $600 LTV (accounting for churn and partial adoption)

---

## CAC at Each Channel

| Channel | Estimated CAC | Basis |
|---------|--------------|-------|
| Organic Twitter/HN | $0 | Time only, no paid spend |
| Indie Hackers post | $0 | Time only |
| Newsletter submission | $0-50 | Some newsletters charge submission fees |
| Product Hunt launch | $0 | Time only |
| Credex warm outreach | $0 | Existing customer relationships |

**Blended CAC at $0 paid budget: ~$15** (accounting for founder time at $50/hour, ~18 minutes per acquired user across outreach and content)

---

## Conversion Funnel Math

```
Landing page visits:        1,000/month
↓ 40% start audit
Audit started:              400
↓ 70% complete
Audit completed:            280
↓ 20% email capture
Leads captured:             56
↓ 15% book consultation
Consultations booked:       8.4
↓ 35% purchase credits
Credit purchases:           ~3/month
```

**Monthly revenue at these rates:**
3 purchases × $600 LTV amortized = ~$150/month direct attribution

This understates the value — many users will purchase later or through a different touchpoint after seeing the audit.

---

## Break-Even Analysis

At $0 paid CAC, the tool is profitable from the first conversion. The real cost is engineering time to maintain pricing data accuracy (est. 2 hours/week).

**Minimum viable conversion rate:**
- Need 1 credit purchase per 280 completed audits to cover maintenance time
- Current funnel estimate: ~3 purchases per 280 audits
- **3x above break-even at launch**

---

## Path to $1M ARR in 18 Months

**What would have to be true:**

$1M ARR = ~$83,000/month revenue
At $900 LTV and 12-month average lifetime = need ~92 active customers
At 35% consultation-to-purchase rate = need ~263 consultations booked
At 15% lead-to-consultation rate = need ~1,753 leads
At 20% audit-to-lead rate = need ~8,765 completed audits/month

**Is 8,765 audits/month achievable in 18 months?**

Month 1-3: 200-500 audits/month (organic launch)
Month 4-6: 500-1,500/month (word of mouth + share loop kicks in)
Month 7-12: 1,500-5,000/month (Product Hunt, newsletter features, Credex customer base)
Month 13-18: 5,000-10,000/month (SEO compounds, referral loop established)

**Verdict:** $1M ARR in 18 months requires the share loop to work — users sharing their public audit URLs is the difference between 2,000 audits/month and 8,000. This is why the shareable URL and OG image are treated as core features, not nice-to-haves.

---

## Key Assumptions That Could Break This Model

1. **Average spend is higher than $500/month** — if the real average is $200/month, LTV drops to $360 and the funnel needs 2.5x more volume
2. **Consultation booking rate is lower** — if founders won't book a call, the email capture has no downstream value; in that case Credex needs a self-serve credit purchase flow
3. **Pricing data gets stale** — if audit recommendations are wrong due to outdated pricing, trust collapses and share rate drops to zero