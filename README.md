# Henry

Henry is a manually curated portfolio dashboard. Everything in `index.html` is static for now—update the figures by editing the markup directly.

## Snapshot (updated Nov 6, 2025)

- Stock holdings: **$786 USD** with a **$1,510** 2030 target (+92% upside)
- Total portfolio (stocks + savings): **$867 USD** with a **$2,098** target (+$1,231 gain)
- Cash & savings: **$320 CAD** (~$321 USD)
- Debt payoff goal: **$5,000** with **$3,812** remaining (24% funded)
- Monthly surplus: **$453** in November, rising to **$630** once the old phone payment rolls off

## Stock Portfolio

| Symbol | Shares | Price | Value | Target Price | Target Value | Gain |
|--------|--------|-------|-------|--------------|--------------|------|
| PLTR | 0.4219 | $178.04 | $75 | $450 | $190 | +153% |
| HOOD | 0.4129 | $131.64 | $54 | $300 | $124 | +130% |
| NVDA | 0.2541 | $189.49 | $48 | $500 | $127 | +165% |
| GOOGL | 0.1485 | $285.60 | $42 | $550 | $82 | +95% |
| TSLA | 0.1122 | $448.80 | $50 | $800 | $90 | +80% |
| AAPL | 0.6338 | $271.63 | $172 | $500 | $317 | +184% |
| SPY | 0.3378 | $671.99 | $227 | $1,100 | $372 | +64% |
| SBUX | 0.1432 | $82.71 | $12 | $130 | $19 | +58% |
| V | 0.2570 | $336.34 | $86 | $550 | $141 | +64% |
| BTC-USD | 0.0001927 | $101,631 | $20 | $250,000 | $48 | +140% |
| **Total** | | | **$786** | | **$1,510** | **+92%** |

All figures are entered manually and rounded to the nearest dollar for readability.

## Other Balances & Goals

- Savings: $867 USD portfolio + $446 CAD (~$321 USD) = ~$1,188 USD toward the $5,000 goal
- Debt-free date: projected **July 2026** with the current $453/month surplus
- Planned MacBook upgrade: **August 2026**
- Budget snapshot:

  | Category | Amount |
  |----------|--------|
  | Wallet / Savings (CAD) | $320 |
  | Income | $1,060 |
  | Food | -$300 |
  | Phone | -$130 |
  | Old phone (1 payment left) | -$177 |

## Features (current)

- Responsive glassmorphism UI with light/dark mode toggle (persists via `localStorage`)
- Sortable holdings table with trailing total row
- Interactive hero chart hover/touch tooltip
- Debt payoff progress bar and upcoming payday countdown
- iOS mockup (`ios-index.html`) that mirrors the desktop experience

## Roadmap

- Move inline CSS/JS into dedicated modules for easier maintenance
- Stand up a `test/beta/api` branch to experiment with live pricing without touching `main`
- Introduce a JSON data layer to eliminate duplicate manual edits

## Usage

```sh
git clone https://github.com/nulljosh/henry.git
cd henry
open index.html
```

## License

MIT License
