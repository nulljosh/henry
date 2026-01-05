---
description: Fast portfolio update - batched price fetches, auto-update from screenshots (project)
---

Portfolio update for index.html:

1. Check Downloads for screenshots (*.png from last 24h)
   - No screenshots? Open wealthsimple.com and WAIT for user
2. Read screenshots and extract directly:
   - Symbol, shares, current price, daily % change
   - Cash balances (Vacation, TFSA cash)
3. Update holdingsConfig in index.html:
   - Use prices/changes FROM screenshots (skip WebSearch)
   - Match share counts exactly
   - Add new positions, remove zero-share positions
4. Open in Chrome + git commit & push
5. Cleanup: delete processed screenshots

No emojis, minimal output.
