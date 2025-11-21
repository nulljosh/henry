# Finn the Fox

A manually curated portfolio dashboard built with vanilla HTML/CSS/JavaScript. No frameworks, no build tools, just one `index.html` file.

## Features

- **Manual data entry** - Update holdings in `holdingsConfig` and everything syncs
- **Keyboard shortcuts** - B (Budget), D (Debt), S (Summary), I/M (Insights)
- **Canvas pie chart** - Interactive stock allocation visualization
- **Dark mode** - Toggle with the sun/moon button
- **Responsive design** - Works on mobile and desktop
- **Live countdowns** - Market hours and payday tracking
- **Debt tracking** - Progress toward $4,700 goal with projections
- **Animated counters** - Portfolio values count up on load
- **Pull to refresh** - Swipe down on mobile to reload
- **Haptic feedback** - Vibration on pie chart interactions (mobile)

## Quick Start

```sh
git clone https://github.com/nulljosh/finn.git
cd finn
open index.html
```

## Keyboard Shortcuts

- **B** - Toggle Budget section
- **D** - Toggle Debt section
- **S** - Toggle Summary section
- **I** or **M** - Toggle Market Insights

## Tech Stack

- Pure vanilla JavaScript (no dependencies)
- Canvas API for pie chart
- localStorage for theme persistence
- CSS Grid and Flexbox for layout

## License

MIT
