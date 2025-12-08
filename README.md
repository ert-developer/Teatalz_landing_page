# Teatalz Landing Page

A polished marketing site for Teatalz, an AI companion for emotional wellness. Built with React + Vite + TypeScript and TailwindCSS, featuring smooth animations (Framer Motion), responsive layout, and a Supabase-backed waitlist form.

## Tech Stack
- React 18 + TypeScript
- Vite
- TailwindCSS
- Framer Motion
- Supabase (waitlist capture)

## Getting Started
```bash
pnpm install   # or npm install / yarn
pnpm dev       # runs Vite dev server
```

## Environment Variables
Create a `.env` file in the project root:
```
VITE_SUPABASE_URL=<your-supabase-url>
VITE_SUPABASE_ANON_KEY=<your-supabase-anon-key>
```

## Supabase Setup
Run this SQL in Supabase to store waitlist signups:
```sql
create extension if not exists "uuid-ossp";

create table if not exists public.waitlist (
  id uuid primary key default uuid_generate_v4(),
  created_at timestamptz not null default now(),
  name text,
  email text not null,
  mobile text,
  source text
);

create unique index if not exists waitlist_email_unique on public.waitlist (lower(email));
create index if not exists waitlist_created_at_idx on public.waitlist (created_at desc);
```

## Useful Scripts
- `pnpm dev` — start dev server
- `pnpm build` — type-check and build
- `pnpm lint` — run eslint

## Notes
- The waitlist form trims and lowercases email, handles duplicate signups gracefully, and shows inline/toast feedback.
- Sections use consistent spacing and scroll anchors for navigation.

