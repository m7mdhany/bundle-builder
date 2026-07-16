# Bundle Builder

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

```text
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
git clone https://github.com/m7mdhany/bundle-builder.git
```

Install dependencies

```bash
npm install
```

Start the development server

```bash
npm run dev
```

Create a production build

```bash
npm run build
```

---

## Product Data

All products are stored in:

```text
src/data/products.json
```

The application UI is generated dynamically from this JSON file.

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
- Required products persist after checkout.
- Subscription plans use a dedicated selection flow.
- Review and Checkout sections are generated from the current state.

---

## Tradeoffs

- No backend integration.
- Shipping and financing values are static.
- No automated tests were added.

---

## Future Improvements

- Backend integration
- Authentication
- Persistent cloud storage
- Unit tests
- End-to-end tests
- Payment integration
