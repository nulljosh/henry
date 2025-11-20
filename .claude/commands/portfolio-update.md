---
description: Fast portfolio update - batched price fetches, auto-update from screenshots
---

Perform optimized daily portfolio update for index.html:

**Speed optimizations:**
- Batch all stock price searches in parallel (single message, multiple WebSearch calls)
- Use find -delete for screenshot cleanup
- No emojis, minimal output

**Steps:**
1. Fetch prices for HOOD, NVDA, AAPL, SPY, TSLA, PLTR, GOOGL (parallel)
2. Update fallbackPrice in JavaScript + table values
3. Check Downloads for screenshots (*.png, *.HEIC from last 24h)
4. Read screenshots, update portfolio data (shares, cash, budget)
5. Open in Safari: `open -a Safari /Users/joshua/Documents/Code/finn/index.html`
6. Confirm with user
7. Git commit + push with message:
   ```
   Update portfolio prices and holdings - [date]
   - Updated stock prices
   - Updated holdings from screenshots
   - Updated cash balance
   ```
8. Delete screenshots: `find /Users/joshua/Downloads -name "Screenshot*.png" -mtime -1 -delete`

**Important:**
- Verify share counts match screenshots exactly
- Update both JavaScript portfolioData AND HTML table
- Market insights auto-update from portfolio data
