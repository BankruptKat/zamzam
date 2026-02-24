# Zamzam Masonry & Chimney Repairs Ltd Website

Production-ready Next.js 14 website for local lead generation and SEO.

## Tech Stack

- Next.js 14 (App Router)
- TailwindCSS
- React Hook Form
- Nodemailer

## Local Development

1. Install dependencies:

```bash
npm install
```

2. Create environment variables:

```bash
cp .env.example .env.local
```

3. Run the development server:

```bash
npm run dev
```

Visit `http://localhost:3000`.

## Environment Variables

- `SMTP_HOST`
- `SMTP_PORT`
- `SMTP_USER`
- `SMTP_PASS`
- `CONTACT_FROM_EMAIL`
- `CONTACT_TO_EMAIL`

These are used by `app/api/contact/route.ts` to send quote requests by email.

## Deploy (Vercel)

1. Push the project to your Git provider.
2. Import the repository in Vercel.
3. Add all environment variables in Vercel project settings.
4. Deploy.
