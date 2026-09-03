create table public.contact_messages (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  nume text not null,
  email text not null,
  telefon text,
  subiect text,
  mesaj text not null
);

grant insert on public.contact_messages to anon;
grant insert on public.contact_messages to authenticated;
grant all on public.contact_messages to service_role;

alter table public.contact_messages enable row level security;

create policy "public can insert messages"
  on public.contact_messages for insert
  to anon, authenticated
  with check (true);