---
description: Suggest portfolio rebalancing based on current prices and targets
---

Analyze the portfolio and suggest rebalancing:

1. Read current holdings from index.html (shares, current prices, target prices)
2. Calculate current allocation vs target allocation
3. Identify positions that are:
   - Overweight (sell candidates)
   - Underweight (buy candidates)
   - At target (hold)
4. Consider:
   - Current market conditions
   - Upcoming earnings (don't sell before earnings beat potential)
   - Tax implications (avoid short-term gains if close to long-term)
   - Transaction costs

Provide specific recommendations:
- "Sell X shares of [STOCK] at $Y to realize Z% gain"
- "Buy X shares of [STOCK] at $Y to reach target allocation"
- "Hold [STOCK] - at target"

Format as a clear action list with reasoning.
