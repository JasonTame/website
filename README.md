# Personal Website

A personal blog and website built with [Astro](https://astro.build), featuring fast performance and modern web technologies.

## Tech Stack

- **[Astro](https://astro.build)** - Static site generator with partial hydration
- **[Markdown & MDX](https://docs.astro.build/en/guides/markdown-content/)** - Content authoring
- **[TypeScript](https://www.typescriptlang.org/)** - Type safety
- **[TailwindCSS](https://tailwindcss.com/)** - Utility-first CSS framework

## Getting Started

### Prerequisites

- Node.js (v20 or higher)
- pnpm (recommended) or npm

### Installation

1. Clone the repository:

```bash
git clone https://github.com/JasonTame/website
cd website
```

2. Install dependencies:

```bash
pnpm install
```

3. Start the development server:

```bash
pnpm dev
```

The site will be available at `http://localhost:4321`

## Commands

| Command            | Action                                |
| ------------------ | ------------------------------------- |
| `pnpm dev`         | Start development server              |
| `pnpm build`       | Build for production                  |
| `pnpm preview`     | Preview production build locally      |
| `pnpm astro check` | Check for TypeScript and Astro errors |

## Deployment

This site can be deployed to any static hosting platform like Vercel, Netlify, or GitHub Pages. Run `pnpm build` to generate the production build in the `dist/` folder.
