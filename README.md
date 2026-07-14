# Security Bundle Builder

A React application that allows users to build a custom home security bundle by selecting cameras, sensors, accessories, and subscription plans.

## Features

- Multi-step bundle builder
- Product variants support
- Dynamic review panel
- Live bundle summary
- Required products support
- Save bundle for later using Local Storage
- Checkout flow
- JSON-driven product catalog
- Responsive layout

---

## Tech Stack

- React
- Context API
- useReducer
- CSS Modules

---

## Project Structure

```
src
├── components
├── context
├── data
├── hooks
├── styles
└── utils
```

---

## Installation

Clone the repository

```bash
git clone <repository-url>
```

Install dependencies

```bash
npm install
```

Start development server

```bash
npm run dev
```

Create production build

```bash
npm run build
```

---

## Product Data

All products are stored in:

```
src/data/products.json
```

The UI is generated dynamically from this JSON file.

---

## State Management

Global state is managed using:

- Context API
- useReducer

The reducer manages:

- Current builder step
- Product selections
- Selected variants
- Quantities
- Review data

---

## Local Storage

The application supports saving bundles locally.

- **Save my system for later** stores the current selections.
- Saved bundles are restored automatically when the application loads.
- **Checkout** clears the saved bundle and resets the builder while keeping required products.

---

## Design Decisions

- Product catalog and user selections are separated.
- The UI is fully driven by JSON data.
- Required products are injected automatically.
- Review and Checkout sections are generated from the current state.

---

## Tradeoffs

- No backend integration.
- Financing values are static.
- Shipping is implemented according to the provided design.
- No automated tests were added.

---

## Future Improvements

- Backend integration
- Authentication
- Persistent cloud storage
- Unit tests
- End-to-end tests
- Payment integration
