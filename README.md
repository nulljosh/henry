# Henry

Henry is a manually curated portfolio dashboard. Everything in `index.html` is static for now—update the figures by editing the markup directly.

## Snapshot (updated Nov 7, 2025)

- Stock holdings: **$787 USD** with a **$1,371** 2030 target (+74% upside)
- Bitcoin position: **$20 USD** current value targeting **$48** (+140% upside)
- Total assets (portfolio + CAD savings): **~$931 USD** toward the **$5,000** goal (19% funded)
- Cash & savings: **$200 CAD** (~$144 USD)
- USD cash reserve: **~$106 USD** (modeled as CASH)
- Debt payoff goal: **$5,000** with **$4,069** remaining
- Monthly surplus: **$453** in November, rising to **$630** once the old phone payment rolls off

## Stock Portfolio

| Symbol | Shares | Price | Value | Target Price | Target Value | Gain |
|--------|--------|-------|-------|--------------|--------------|------|
| PLTR | 0.0582 | $171.91 | $10 | $450 | $26 | +162% |
| HOOD | 0.0806 | $124.00 | $10 | $300 | $24 | +136% |
| IWM | 0.0208 | $238.67 | $5 | $320 | $7 | +34% |
| NVDA | 0.2812 | $184.69 | $52 | $500 | $141 | +171% |
| GOOGL | 0.1485 | $281.45 | $42 | $550 | $82 | +126% |
| TSLA | 0.1122 | $439.14 | $49 | $800 | $90 | +83% |
| AAPL | 0.6338 | $269.41 | $171 | $500 | $317 | +191% |
| SPY | 0.3378 | $667.36 | $225 | $1,100 | $372 | +64% |
| SBUX | 0.1432 | $82.17 | $12 | $130 | $19 | +58% |
| V | 0.2570 | $336.00 | $86 | $550 | $141 | +64% |
| BTC-USD | 0.0001927 | $101,631 | $20 | $250,000 | $48 | +140% |
| CASH | 1 | $105.55 | $106 | $105 | $106 | 0% |
| **Total** | | | **$787** | | **$1,371** | **+74%** |

All figures are entered manually and rounded to the nearest dollar for readability.

## Other Balances & Goals

- Savings: $787 USD portfolio + $200 CAD (~$144 USD) = ~$931 USD toward the $5,000 goal
- Debt-free date: projected **July 2026** with the current $453/month surplus
- Planned MacBook upgrade: **August 2026**
- Budget snapshot:

  | Category | Amount |
  |----------|--------|
  | Wallet / Savings (CAD) | $200 |
  | Trading Cash (USD) | $106 |
  | Income | $1,060 |
  | Food | -$300 |
  | Phone | -$130 |
  | Old phone (1 payment left) | -$177 |

## Features

- Manual-first data: edit `holdingsConfig` once and the entire UI (hero, table, pie, debt tracker) updates.
- Responsive “liquid glass” layout with light/dark toggle + an iOS mockup (`ios-index.html`) that mirrors the desktop data.
- Canvas-powered pie chart with hover/tap pop-outs, synced legend/table highlights, and a fallback table view.
- Insights drawer with PST/EST dual clocks, live open/close countdown, and stacked leader/laggard/runway cards on mobile.
- Millisecond payday countdown, collapsible Budget/Debt/Summary cards, and colorful earnings badges.

## Recent Work

1. Replaced all third-party quote calls with manual data and removed the quote status badge.
2. Rebuilt the pie with a responsive canvas so slices never disappear when toggling views or resizing.
3. Synced CAD savings + debt math with the latest Wealthsimple screenshots (wallet $200 CAD, assets ~$931 USD).
4. Shortened section headers (Insights, Budget, Debt, Summary) and added PST/EST clocks to the Insights card.
5. Converted the payday widget to a day/hour/min/sec/ms countdown for a playful live update.
6. Updated the iOS mockup so it mirrors the desktop portfolio values, including the new IWM position.
7. Reflected the PLTR/HOOD trims by shrinking those positions and adding a `CASH` holding for the USD reserve.

## Roadmap

- Move inline CSS/JS into dedicated modules for easier maintenance.
- Stand up a `test/beta/api` branch to experiment with live pricing without touching `main`.
- Introduce a JSON data file to eliminate duplicate manual edits.

## Usage

```sh
git clone https://github.com/nulljosh/henry.git
cd henry
open index.html
```

## License

MIT License
