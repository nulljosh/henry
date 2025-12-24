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
- **Options scenarios** - Best case, breakeven, worst case, and wildcard forecasts
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

## Coming Soon: Finn Professional Suite

### Vision
Transform Finn from a single-file dashboard into a full-stack personal finance platform with native apps, real-time sync, and brokerage integrations.

### Roadmap

#### Phase 1: Backend API (3-4 months)
**Core Infrastructure**
- REST API (Node.js/Express or Go)
- PostgreSQL database for user data, transactions, holdings
- JWT authentication + OAuth2
- WebSocket server for live price updates
- Redis caching for stock prices
- Rate limiting and security hardening

**Endpoints**
- `/api/portfolio` - CRUD for holdings
- `/api/transactions` - Spending tracker data
- `/api/prices` - Live stock quotes (Alpha Vantage, Yahoo Finance)
- `/api/sync` - Cross-device state sync
- `/api/export` - CSV/PDF reports

**Estimated effort:** 200-300 hours

#### Phase 2: iOS App (2-3 months)
**Native Swift/SwiftUI**
- Portfolio dashboard with live updates
- Interactive charts (Swift Charts)
- Transaction entry with camera receipt scanning (Vision API)
- Push notifications for price alerts, milestone hits
- Widget for home screen portfolio summary
- Dark mode with system preference sync
- Biometric authentication (Face ID/Touch ID)
- Offline mode with background sync

**Estimated effort:** 150-200 hours

#### Phase 3: Web App (1-2 months)
**React/Next.js SPA**
- Migrate from single HTML to component architecture
- Server-side rendering for performance
- Real-time WebSocket price updates
- Advanced charting (TradingView widgets, Chart.js)
- Multi-user support (family accounts)
- Export/import from Mint, Personal Capital, YNAB
- Hosted on Vercel/Railway

**Estimated effort:** 100-150 hours

#### Phase 4: Integrations (3-6 months)
**Brokerage Connections**
- Plaid API for bank/brokerage linking
- Wealthsimple API (if available)
- Robinhood unofficial API
- Interactive Brokers API
- Auto-sync holdings daily
- Transaction import from checking accounts

**Third-Party Services**
- Stripe for premium subscriptions
- SendGrid for email alerts
- Twilio for SMS price alerts
- AWS S3 for receipt storage

**Estimated effort:** 200-300 hours

#### Phase 5: Android App (2-3 months)
**Kotlin/Jetpack Compose**
- Feature parity with iOS
- Material Design 3
- Google Wallet integration for receipt scanning
- Widgets and notifications

**Estimated effort:** 150-200 hours

#### Phase 6: Advanced Features (Ongoing)
- AI-powered spending insights (GPT-4 API)
- Budget recommendations based on patterns
- Tax loss harvesting suggestions
- Retirement planning calculator
- Crypto portfolio tracking
- Options P&L calculator with Greeks
- Social features (share portfolio performance)
- Chrome extension for quick portfolio glance

### Total Estimated Effort
**800-1,150 hours** (6-9 months full-time, or 12-18 months part-time)

### Tech Stack (Proposed)
**Backend:** Node.js/Express or Go, PostgreSQL, Redis, WebSocket
**iOS:** Swift, SwiftUI, Combine
**Android:** Kotlin, Jetpack Compose
**Web:** React, Next.js, TailwindCSS, Recharts
**Infrastructure:** Railway/Render, Vercel, AWS S3
**APIs:** Plaid, Alpha Vantage, Stripe, SendGrid

### Monetization Strategy
- Free tier: Single portfolio, basic features
- Pro ($4.99/mo): Unlimited portfolios, live sync, price alerts
- Premium ($9.99/mo): Brokerage integrations, AI insights, tax tools

---

## License

MIT
