# AGENTS.md

## Cursor Cloud specific instructions

This is a single Next.js 14 (App Router) website for a masonry/chimney repair business. There is no monorepo, no Docker, no database, and no test framework.

### Quick reference

| Task | Command |
|------|---------|
| Install deps | `npm install` |
| Dev server | `npm run dev` (serves on `localhost:3000`) |
| Lint | `npm run lint` |
| Build | `npm run build` |
| Production server | `npm run start` |

### Environment variables

The contact form (`/api/contact`) requires SMTP credentials (`SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS`, `CONTACT_FROM_EMAIL`, `CONTACT_TO_EMAIL`). Without them, the rest of the site works fine; only contact form submission returns an error. A `.env.local` with empty placeholders is sufficient for general development.

### Notes

- No `.env.example` file exists in the repo despite the README referencing one. Create `.env.local` manually with the six SMTP-related vars if needed.
- No automated tests exist (no Jest, Vitest, Playwright, etc.). `npm run lint` (ESLint) is the only automated check.
- Tailwind CSS v4 is used via `@tailwindcss/postcss` (not the classic `tailwind.config.js` approach).
- Remote images from `images.unsplash.com` and `randomuser.me` are allowed in `next.config.mjs`.
