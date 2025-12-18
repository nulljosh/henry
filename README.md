# Finn the Fox

A comprehensive personal finance dashboard built with vanilla HTML/CSS/JavaScript. Track your portfolio, manage spending, plan purchases, and monitor market insights—all in one beautifully designed `index.html` file. No frameworks, no build tools, no bank login required.

## Features

### Portfolio Management
- **Dynamic holdings** - Add/remove positions automatically via screenshot import
- **Live price updates** - Fallback prices with daily change tracking
- **Portfolio milestones** - Progress bars to $2K, $5K, $10K, $50K, $100K targets
- **Target price tracking** - Visual indicators showing upside to price targets
- **Multi-currency support** - CAD and USD holdings with proper labeling
- **Sortable table** - Click headers to sort by ticker, value, daily %, or target gain
- **Animated counters** - Portfolio values count up on load with smooth transitions

### Market Insights
- **Market pulse** - Real-time portfolio performance summary
- **Top movers** - Best and worst performing holdings
- **Target analysis** - Highest upside opportunities
- **Market news** - Curated daily updates
- **Bear case analysis** - Short thesis and downside scenarios
- **Options tracking** - Live put/call positions with P&L
- **Bloomberg TV Live** - Embedded YouTube livestream
- **Market clocks** - PST/EST time display
- **Pre-market outlook** - Status updates before market open

### Spending Tracker (Mint-Style)
- **Transaction entry** - Manual transaction logging with categories
- **Cash flow summary** - Income vs expenses with net calculation
- **Category breakdown** - Spending by category with percentages
- **Budget tracking** - Monthly budget limits with progress bars
- **Recent transactions** - Scrollable list with delete functionality
- **localStorage persistence** - All transactions saved locally
- **Color-coded categories** - Groceries, dining, transportation, entertainment, etc.
- **Over-budget alerts** - Visual indicators when exceeding limits

### Visualizations
- **Canvas pie chart** - Interactive stock allocation with hover effects
- **Full-screen chart mode** - Dedicated view for allocation analysis
- **Color-coded holdings** - Each stock has unique brand colors
- **Progress indicators** - Visual debt paydown and milestone tracking

### Budget & Calendar
- **Interactive calendar** - 12-month purchase timeline with slide navigation
- **Clickable legend** - Click any item to jump to its date on calendar
- **Purchase tracking** - Keyboard, GBA, MacBook, Visa payoff dates
- **Recurring items** - Automatic monthly expenses (Telus)
- **Slide animations** - Smooth left/right transitions between months
- **Budget projections** - When you can afford upcoming purchases

### User Experience
- **Glass morphism UI** - Modern frosted glass design
- **Dark mode** - Smooth theme toggle with localStorage persistence
- **Keyboard shortcuts** - B (Budget), C (Calendar), D (Debt), S (Summary), I/M (Insights), T (Spending)
- **Responsive design** - Optimized for mobile and desktop
- **Pull to refresh** - Swipe down on mobile to reload
- **Haptic feedback** - Vibration on pie chart interactions (mobile)
- **Tab navigation** - Clean switching between all sections

### Automation
- **Live countdowns** - Market hours and payday tracking
- **Debt projections** - Automatic payoff date calculations
- **Portfolio updates** - Via `/portfolio-update` slash command (Claude Code)

## Quick Start

```sh
git clone https://github.com/nulljosh/finn.git
cd finn
open index.html
```

## Keyboard Shortcuts

- **P** - Portfolio tab
- **B** - Budget tab
- **C** - Calendar tab
- **D** - Debt tab
- **S** - Summary tab
- **I** or **M** - Market Insights tab
- **T** - Spending Tracker tab
- **Click theme toggle** - Switch between light/dark mode

## Tech Stack

- **Pure vanilla JavaScript** (zero dependencies)
- **Canvas API** for interactive pie chart
- **localStorage** for theme and tab persistence
- **CSS Grid & Flexbox** for responsive layout
- **Glass morphism** design with backdrop-filter
- **CSS animations** for smooth transitions
- **Responsive iframes** for embedded content

## Development

### Portfolio Updates
Use the `/portfolio-update` command (Claude Code) for automated updates:
1. Takes screenshots from Wealthsimple
2. Fetches current stock prices in parallel
3. Updates holdings dynamically (adds/removes positions)
4. Commits and pushes changes to Git

### File Structure
```
finn/
├── index.html          # Single-file application
├── README.md           # This file
└── .claude/
    └── commands/
        └── portfolio-update.md
```

## License

MIT
