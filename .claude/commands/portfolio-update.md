---
description: Fast portfolio update - batched price fetches, auto-update from screenshots (project)
---

Portfolio update for index.html:

1. Check Downloads for screenshots (*.png from last 24h)
   - No screenshots? Open wealthsimple.com and WAIT for user
2. Read screenshots and extract:
   - Symbol, shares, current price, daily % change
   - Cash balances (Vacation, TFSA cash)
3. Cross-reference prices:
   - WebSearch each tradeable symbol (SLV, IAU, GOOGL, RL, GOLD)
   - Compare to screenshot prices - flag if >2% difference
   - Use WebSearch price if screenshot looks stale
4. Update BOTH static HTML table AND holdingsConfig in index.html:
   - Match share counts to screenshots exactly
   - Update fallbackPrice AND fallbackDailyChange
   - Update static tbody rows with current values
   - Update tfoot totals
   - Add new positions, remove zero-share positions
5. Open in Chrome + git commit & push
6. Cleanup: delete processed screenshots

No emojis, minimal output.
