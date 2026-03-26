create table waitlist (
  id uuid default gen_random_uuid() primary key,
  email text not null unique,
  role text not null check (role in ('host', 'renter')),
  city text,
  created_at timestamptz default now()
);
