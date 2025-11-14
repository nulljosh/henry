---
description: Daily portfolio update - fetches latest stock prices, updates holdings from screenshots, and commits changes
---

Perform the daily portfolio update routine for index.html.

No emojis. No AI-speak. No m-dashes. Be direct and concise.

1. Fetch Current Stock Prices:
   - Use WebSearch to get current prices for HOOD, NVDA, AAPL, SPY, TSLA, PLTR
   - Update both fallbackPrice in JavaScript portfolioData AND table values in index.html
   - Market closes at 4 PM EST

2. Wait for Screenshots:
   - Check /Users/joshua/Downloads/ for screenshots
   - If no screenshots found, wait 15 seconds and check again
   - Look for account balance screenshots (Wealthsimple)

3. Update Portfolio from Screenshots:
   - Read all screenshot files in Downloads
   - Update cash values, share counts for each holding
   - Set shares to 0 for sold stocks
   - Update budget/debt sections if screenshots show changes

4. Open in Safari:
   - Run: open -a Safari /Users/joshua/Documents/Code/henry/index.html
   - Allow user to review changes

5. Confirm and Commit:
   - Ask user to confirm changes look good
   - Create git commit with message:
     Update portfolio prices and holdings - [date]
     - Updated stock prices
     - Updated holdings from screenshots
     - Updated cash balance
   - Push to remote

6. Cleanup:
   - Delete all screenshots from /Users/joshua/Downloads/
   - Confirm completion

Important: Verify mobile functionality works. Double-check share counts match screenshots exactly. Update both JavaScript data AND table HTML values.
