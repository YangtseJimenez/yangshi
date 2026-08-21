-- Perfil público asociado al usuario seguro de Supabase Auth.
-- Ejecuta este archivo en Supabase > SQL Editor.

create table if not exists public.perfiles (
  id uuid primary key references auth.users(id) on delete cascade,
  nombre text not null,
  email text,
  created_at timestamptz not null default timezone('utc', now())
);

alter table public.perfiles enable row level security;

drop policy if exists "Users can view their own profile" on public.perfiles;
create policy "Users can view their own profile"
  on public.perfiles
  for select
  to authenticated
  using (auth.uid() = id);

create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer set search_path = public
as $$
begin
  insert into public.perfiles (id, nombre, email)
  values (
    new.id,
    coalesce(new.raw_user_meta_data ->> 'full_name', 'Cliente'),
    new.email
  )
  on conflict (id) do update set
    nombre = excluded.nombre,
    email = excluded.email;

  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();
