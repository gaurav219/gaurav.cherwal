# Portfolio

Personal portfolio for AI/backend engineering work, built with a Linux-themed UI.

## Stack

- Next.js (App Router) + TypeScript
- Tailwind CSS
- MDX blog support (`content/blog`)
- `rehype-pretty-code` for markdown code highlighting

## Routes

- `/` Home
- `/about` About
- `/projects` Projects
- `/blog` Blog list
- `/blog/[slug]` Blog post

## Run Locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Notes

- Add/edit blog posts in `content/blog/*.mdx` with `export const metadata`.
- Update project entries in `app/projects/page.tsx`.
- Main layout/theme lives in `app/layout.tsx` and `app/globals.css`.
