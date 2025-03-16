# Next.js Project with Tailwind CSS and Light/Dark Theme

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) that includes Tailwind CSS and a light/dark theme toggle.

## Features

- **Next.js 15** with App Router
- **Tailwind CSS** for styling
- **Light/Dark Theme** with system preference support
- **TypeScript** for type safety

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Theme Implementation

The theme implementation uses React Context to manage the theme state. The theme can be set to:

- Light
- Dark
- System (follows the system preference)

The theme preference is stored in localStorage and persists across page refreshes.

## Learn More

To learn more about Next.js and Tailwind CSS, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
