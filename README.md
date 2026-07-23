# Agen Properti — Landing Page Kos-Kosan

A single-page marketing site for a small property agent managing multiple boarding house (kos-kosan) units. Built as a portfolio piece demonstrating client-side filtering, per-listing WhatsApp CTAs, and a mobile-first responsive layout — all without a backend or database.

This is project #4 in a series of 10 portfolio landing pages (Tier 1: frontend-only, WhatsApp CTA).

## Project Scope

- 8-10 hardcoded property listings with complete details (price, location, room type, amenities, photos)
- Client-side search and filter (location, price range, room type) using React state
- Per-listing WhatsApp CTA with pre-filled messages unique to each property
- Contact form via Web3Forms (serverless, no custom backend)
- Fully responsive, mobile-first design targeting Indonesian boarding house renters

## Tech Stack

| Layer       | Technology                          |
|-------------|-------------------------------------|
| Framework   | Next.js 16 (App Router)            |
| Language    | TypeScript (TSX)                    |
| Styling     | Tailwind CSS 4                      |
| Deployment  | Vercel                              |
| Data        | Static TypeScript arrays (no API)   |
| Contact     | Web3Forms (serverless)              |

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
app/            Next.js App Router pages and layouts
components/     Reusable React components
data/           Static listing data and TypeScript interfaces
public/         Static assets (images, icons)
```

## License

This project is part of a developer portfolio. All property data is fictional.
