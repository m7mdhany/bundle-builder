# Security Bundle Builder

A React application that allows users to build a custom home security bundle by selecting cameras, sensors, accessories, and subscription plans.

## Features

- Multi-step bundle builder
- Product variants support
- Dynamic review panel
- Bundle summary
- Local storage support (Save system for later)
- Responsive layout
- JSON-driven products

## Tech Stack

- React
- CSS Modules
- Context API
- useReducer

## Project Structure

```
src
├── components
├── context
├── data
├── hooks
├── utils
└── styles
```

## Installation

Clone the repository

```bash
git clone <repo-url>
```

Install dependencies

```bash
npm install
```

Run the project

```bash
npm run dev
```

Build

```bash
npm run build
```

## Data

All products are stored inside:

```
src/data/products.json
```

The application is completely driven by this JSON file.

## State Management

The application uses:

- Context API
- useReducer

Bundle selections are managed through a centralized reducer.

## Local Storage

Clicking **Save my system for later** stores the current bundle in Local Storage.

When the application loads, saved selections are restored automatically.

Clicking **Checkout** clears both Local Storage and the current bundle.

## Decisions

- Used Context API instead of Redux because the application has a single global state.
- Product information is stored in JSON while user selections are stored separately in state.
- The Review section is generated dynamically from the current selections.

## Tradeoffs

- No backend was implemented.
- Financing values are currently static.
- Shipping cost is displayed according to the provided design.
