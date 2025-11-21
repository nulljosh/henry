---
description: Fast portfolio update - batched price fetches, auto-update from screenshots
---

Perform optimized daily portfolio update for index.html:

**Speed optimizations:**
- Batch all stock price searches in parallel (single message, multiple WebSearch calls)
- Use find -delete for screenshot cleanup
- No emojis, minimal output

**Steps:**
1. Fetch prices for all holdings in parallel (PLTR, NVDA, NVDL, TSLA, HOOD, GOOGL, GGLL, SPY, cash)
2. Update fallbackPrice AND fallbackDailyChange in holdingsConfig
3. Check Downloads for screenshots (*.png, *.HEIC from last 24h)
4. Read screenshots, update portfolio data (shares, cash, budget)
5. Market insights auto-update with factual data:
   - TODAY: Portfolio daily %, top mover
   - SPREAD: Best to worst performer range
   - TARGETS: Highest upside to target + debt runway
6. Open in Safari: `open -a Safari /Users/joshua/Documents/Code/finn/index.html`
7. Confirm with user
8. Git commit + push with message:
   ```
   Update portfolio prices and holdings - [date]
   ```
9. Delete screenshots: `find /Users/joshua/Downloads -name "Screenshot*.png" -mtime -1 -delete`

**Important:**
- Verify share counts match screenshots exactly
- Update BOTH fallbackPrice AND fallbackDailyChange for each stock
- Update both JavaScript holdingsConfig AND HTML table
- Market insights are unbiased - just facts, no trading advice
- Budget shows $1,113 monthly / ~$476 to invest
