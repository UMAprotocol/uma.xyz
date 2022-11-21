## UMA.xyz

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Data fetching

We use [Tanstack's React Query](https://tanstack.com/query/v4) for data fetching. Fetcher functions are defined in `/queries` and are used in components via custom hooks defined in `/hooks/queries`. See the example implementations in there.

## Styling

We use [Styled Components](https://styled-components.com/) for styling. Global styles are defined in `components/GlobalStyles.tsx`. All constant values like colors, sizes etc. should be defined in TypeScript in `/constants` and then imported and interpolated into `GlobalStyles` as CSS custom properties. This gives us the flexibility and convenience of globally-available custom properties, while also giving us access to the values in TypeScript for when they are needed in components.

## Storybook

We use [Storybook](https://storybook.js.org/) for component development. To run it, use `yarn storybook`. It will be available at [http://localhost:6006](http://localhost:6006).

Storybook is deployed to [Chromatic](https://chromatic.com) via `yarn chromatic`.

## Environment variables

CHAIN_ID = 1 // (or 5 for goerli)
NODE_URLS ={"1":"https://mainnet.infura.io/v3/xxx","5":"https://goerli.infura.io/v3/xxx"}
