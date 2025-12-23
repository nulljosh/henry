---
description: Fast portfolio update - batched price fetches, auto-update from screenshots
---

Daily portfolio update for index.html:

1. Check Downloads for screenshots (*.png, *.HEIC from last 24h)
   - No screenshots? Open wealthsimple.com and WAIT for user
2. Read screenshots to identify holdings
3. Batch fetch ALL stock prices in parallel (single message, multiple WebSearch)
4. Update holdingsConfig in index.html:
   - Match share counts to screenshots exactly
   - Update fallbackPrice AND fallbackDailyChange
   - Add new positions, remove zero-share positions
5. Open in Chrome: `open -a "Google Chrome" /Users/joshua/Documents/Code/finn/index.html`
6. Git commit + push
7. Cleanup: `find /Users/joshua/Downloads -name "Screenshot*.png" -delete`

No emojis, minimal output
