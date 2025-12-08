---
description: Fast portfolio update - batched price fetches, auto-update from screenshots
---

Perform optimized daily portfolio update for index.html:

**Speed optimizations:**
- Batch all stock price searches in parallel (single message, multiple WebSearch calls)
- Use find -delete for screenshot cleanup
- No emojis, minimal output

**Steps:**
1. Check Downloads for screenshots (*.png, *.HEIC from last 24h)
   - If NO screenshots: Open Chrome to wealthsimple.com and wait for user confirmation
2. Read screenshots to identify current holdings dynamically
3. Fetch prices for ALL active holdings in parallel (single message, multiple WebSearch)
4. Update holdingsConfig:
   - Add new positions from screenshots
   - Update shares/prices for existing positions
   - REMOVE positions with 0 shares (keep config clean)
   - Update fallbackPrice AND fallbackDailyChange for each
5. Write portfolio summary to text file (portfolio-update-[date].txt)
6. Open in Chrome: `open -a "Google Chrome" /Users/joshua/Documents/Code/finn/index.html`
7. Git commit + push with message including added/removed positions
8. Delete screenshots AND text file: `find /Users/joshua/Downloads -name "Screenshot*.png" -delete`
9. Delete temp text file after commit

**Important:**
- Verify share counts match screenshots exactly
- Update BOTH fallbackPrice AND fallbackDailyChange for each stock
- Portfolio is DYNAMIC - add new positions, remove sold ones
- If no screenshots found, open wealthsimple.com and WAIT for user
- Market insights are unbiased - just facts, no trading advice
- Write temp text file during update, delete after commit
- Budget shows $1,113 monthly / ~$476 to invest
