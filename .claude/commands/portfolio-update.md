---
description: Daily portfolio update - fetches latest stock prices, updates holdings from screenshots, and commits changes
---

You are performing the daily portfolio update routine for index.html. Follow these steps:

1. **Fetch Current Stock Prices:**
   - Use WebSearch to get current prices for: HOOD, NVDA, AAPL, SPY, TSLA, PLTR
   - Update both the fallbackPrice in the JavaScript portfolioData AND the table values in index.html
   - Market closes at 4 PM EST - make sure prices are current

2. **Wait for Screenshots:**
   - Check /Users/joshua/Downloads/ for screenshots
   - If no screenshots found, wait 15 seconds and check again
   - Look for account balance screenshots (Wealthsimple)

3. **Update Portfolio from Screenshots:**
   - Read all screenshot files in Downloads
   - Update:
     - Cash values (CASH symbol - both targetPrice and fallbackPrice)
     - Share counts for each holding (AAPL, NVDA, SPY, TSLA, PLTR, etc.)
     - Set shares to 0 for any stocks that were sold
     - Update budget/debt sections if screenshots show changes

4. **Open in Safari:**
   - Run: `open -a Safari /Users/joshua/Documents/Code/henry/index.html`
   - Allow user to review changes

5. **Confirm and Commit:**
   - Ask user to confirm changes look good
   - Create git commit with message like:
     ```
     Update portfolio prices and holdings - [date]

     - Updated stock prices (HOOD, NVDA, AAPL, SPY, TSLA, PLTR)
     - Updated holdings from Wealthsimple screenshots
     - Updated cash balance

     🤖 Generated with [Claude Code](https://claude.com/claude-code)

     Co-Authored-By: Claude <noreply@anthropic.com>
     ```
   - Push to remote

6. **Cleanup:**
   - Delete all screenshots from /Users/joshua/Downloads/
   - Confirm completion

**Important Notes:**
- Always verify mobile functionality works (pie chart touch, view toggle buttons)
- Double-check share counts match screenshots exactly
- Update both JavaScript data AND table HTML values
- If stocks were sold (shares = 0), keep them in data but set shares to 0
