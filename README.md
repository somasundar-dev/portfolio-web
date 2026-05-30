# Elite Portfolio (portfolio-web)

A lightweight Angular 19 portfolio site (monorepo-style) for showcasing projects, skills, and contact information.

## Quick Start

Prerequisites:

- Node.js (18+ recommended)
- npm or yarn
- Angular CLI (optional, installed globally for convenience)

Install dependencies:

```bash
cd portfolio-web
npm install
```

Run the app (development):

```bash
npm run start
```

Build production bundle:

```bash
npm run build
```

Run tests:

```bash
npm run test
```

## Project Layout

- apps/portfolio: main Angular application
  - apps/portfolio/src: source files
    - apps/portfolio/src/app: application code (components, services, models)
    - apps/portfolio/src/environments: environment configs
    - apps/portfolio/public: static assets

Key files:

- [apps/portfolio/src/app/app.component.ts](apps/portfolio/src/app/app.component.ts)
- [apps/portfolio/src/app/data/sample-content.ts](apps/portfolio/src/app/data/sample-content.ts)
- [apps/portfolio/src/styles.scss](apps/portfolio/src/styles.scss)
- [angular.json](angular.json)
- [package.json](package.json)

## Scripts

- `npm run start` — serve the `portfolio` app (development)
- `npm run build` — build the `portfolio` app for production
- `npm run test` — run unit tests

These scripts map to the Angular CLI targets defined in `angular.json`.

## Dependencies

This project uses Angular 19 and related packages. Primary dependencies are listed in `package.json`.
