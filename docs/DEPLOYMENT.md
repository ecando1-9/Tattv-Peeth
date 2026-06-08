# Tattv Peeth Gurukul Foundation Deployment Guide

## Local setup

1. Install dependencies:

```bash
npm install
```

2. Create `.env.local` from `.env.example`:

```bash
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
NEXT_PUBLIC_WHATSAPP_NUMBER=919350501133
```

3. Run Supabase SQL:

Open Supabase SQL Editor and run `supabase/schema.sql`.

4. Create the first admin:

Sign up or invite a user in Supabase Auth, then update their profile role:

```sql
update public.profiles
set role = 'admin'
where email = 'admin@example.com';
```

5. Start the app:

```bash
npm run dev
```

## Admin workflow

- `/admin` supports Supabase Auth sign-in.
- Donation statistics are stored in `site_settings`.
- Gallery images should be uploaded to the public `gallery` Storage bucket, then added to the `gallery` table.
- Blog posts, testimonials, development phases, and contact details are stored in their respective tables.

## Razorpay future hook

Payment is intentionally not integrated. The existing `/api/donate` route stores donation intent with:

- `status = intent`
- `provider = razorpay_future`

When Razorpay is approved, replace the placeholder section with Razorpay order creation and webhook verification.

## Vercel deployment

1. Push the project to GitHub.
2. Import the repository in Vercel.
3. Add the same environment variables from `.env.local`.
4. Set `NEXT_PUBLIC_SITE_URL` to the production URL.
5. Deploy.

The project includes App Router metadata, OpenGraph defaults, `sitemap.xml`, `robots.txt`, Supabase-ready dynamic content, and remote image config for Cloudinary and Supabase Storage.
