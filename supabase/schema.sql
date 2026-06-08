create extension if not exists "uuid-ossp";

create type public.app_role as enum ('admin', 'content_manager', 'donor');
create type public.donation_status as enum ('intent', 'pending', 'paid', 'failed', 'refunded');

create table public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  full_name text,
  email text,
  role public.app_role not null default 'donor',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.donations (
  id uuid primary key default uuid_generate_v4(),
  user_id uuid references public.profiles(id) on delete set null,
  donor_name text not null,
  donor_email text not null,
  donor_phone text,
  amount numeric(12,2) not null check (amount > 0),
  currency text not null default 'INR',
  status public.donation_status not null default 'intent',
  provider text,
  provider_order_id text,
  provider_payment_id text,
  metadata jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now()
);

create table public.gallery (
  id uuid primary key default uuid_generate_v4(),
  title text not null,
  category text not null default 'Campus',
  image_url text not null,
  alt text,
  sort_order int not null default 0,
  created_at timestamptz not null default now()
);

create table public.testimonials (
  id uuid primary key default uuid_generate_v4(),
  name text not null,
  role text not null,
  quote text not null,
  image_url text,
  published boolean not null default true,
  created_at timestamptz not null default now()
);

create table public.blog_posts (
  id uuid primary key default uuid_generate_v4(),
  author_id uuid references public.profiles(id) on delete set null,
  title text not null,
  slug text not null unique,
  excerpt text not null,
  content text not null,
  category text not null default 'Updates',
  cover_image text,
  featured boolean not null default false,
  published boolean not null default false,
  published_at timestamptz not null default now(),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.timeline_phases (
  id uuid primary key default uuid_generate_v4(),
  phase_number int not null unique,
  title text not null,
  subtitle text not null,
  period text not null,
  status text not null check (status in ('active', 'upcoming', 'planned')),
  description text not null,
  items text[] not null default '{}',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.site_settings (
  key text primary key,
  value text not null,
  updated_at timestamptz not null default now()
);

create table public.contact_messages (
  id uuid primary key default uuid_generate_v4(),
  name text not null,
  email text not null,
  phone text,
  message text not null,
  created_at timestamptz not null default now()
);

create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  insert into public.profiles (id, email, full_name, role)
  values (new.id, new.email, coalesce(new.raw_user_meta_data->>'full_name', ''), 'donor')
  on conflict (id) do nothing;
  return new;
end;
$$;

create trigger on_auth_user_created
after insert on auth.users
for each row execute procedure public.handle_new_user();

create or replace function public.is_content_admin()
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select exists (
    select 1 from public.profiles
    where id = auth.uid() and role in ('admin', 'content_manager')
  );
$$;

alter table public.profiles enable row level security;
alter table public.donations enable row level security;
alter table public.gallery enable row level security;
alter table public.testimonials enable row level security;
alter table public.blog_posts enable row level security;
alter table public.timeline_phases enable row level security;
alter table public.site_settings enable row level security;
alter table public.contact_messages enable row level security;

create policy "profiles read own or admin" on public.profiles for select using (auth.uid() = id or public.is_content_admin());
create policy "profiles update own" on public.profiles for update using (auth.uid() = id);

create policy "public read gallery" on public.gallery for select using (true);
create policy "admin manage gallery" on public.gallery for all using (public.is_content_admin()) with check (public.is_content_admin());

create policy "public read testimonials" on public.testimonials for select using (published = true);
create policy "admin manage testimonials" on public.testimonials for all using (public.is_content_admin()) with check (public.is_content_admin());

create policy "public read published posts" on public.blog_posts for select using (published = true);
create policy "admin manage posts" on public.blog_posts for all using (public.is_content_admin()) with check (public.is_content_admin());

create policy "public read timeline" on public.timeline_phases for select using (true);
create policy "admin manage timeline" on public.timeline_phases for all using (public.is_content_admin()) with check (public.is_content_admin());

create policy "public read settings" on public.site_settings for select using (true);
create policy "admin manage settings" on public.site_settings for all using (public.is_content_admin()) with check (public.is_content_admin());

create policy "donor read own donations" on public.donations for select using (auth.uid() = user_id or public.is_content_admin());
create policy "admin manage donations" on public.donations for all using (public.is_content_admin()) with check (public.is_content_admin());

create policy "admin read contact messages" on public.contact_messages for select using (public.is_content_admin());

insert into public.site_settings (key, value) values
  ('amount_raised', '2300000'),
  ('target_amount', '10000000'),
  ('total_supporters', '84')
on conflict (key) do update set value = excluded.value;

insert into public.timeline_phases (phase_number, title, subtitle, period, status, description, items) values
  (1, 'Land Preparation', 'Establishing the physical and legal foundation of the campus', '2024 - 2025', 'active', 'Boundary demarcation, land levelling, soil preparation, water access, and first campus pathways.', array['Legal consolidation','Boundary wall','Land levelling','Water access','Entry gate']),
  (2, 'Infrastructure Development', 'Creating residential and academic spaces', '2025 - 2026', 'active', 'Core teaching, residential, dining, and meditation infrastructure.', array['Classrooms','Dormitories','Kitchen','Meditation hall','Faculty housing']),
  (3, 'Agriculture & Sustainability', 'Building ecological systems', '2026 - 2027', 'upcoming', 'Organic orchards, agroforestry, medicinal gardens, composting, and rainwater harvesting.', array['Organic farming','Agroforestry','Herbal garden','Composting','Rainwater harvesting']),
  (4, 'Academic Launch', 'Welcoming the founding cohort', '2027 - 2028', 'planned', 'Curriculum launch aligned with NEP 2020, IKS, and contemporary academics.', array['Admissions','Faculty appointments','Curriculum','CBSE process']),
  (5, 'Community Expansion', 'Serving the wider region', '2028 onwards', 'planned', 'Open programs, rural skills training, and research partnerships.', array['Open programs','Research','Rural skills','Annual gathering'])
on conflict (phase_number) do nothing;

insert into storage.buckets (id, name, public)
values ('gallery', 'gallery', true)
on conflict (id) do nothing;

create policy "public read gallery bucket" on storage.objects for select using (bucket_id = 'gallery');
create policy "admin upload gallery bucket" on storage.objects for insert with check (bucket_id = 'gallery' and public.is_content_admin());
create policy "admin update gallery bucket" on storage.objects for update using (bucket_id = 'gallery' and public.is_content_admin());
create policy "admin delete gallery bucket" on storage.objects for delete using (bucket_id = 'gallery' and public.is_content_admin());
