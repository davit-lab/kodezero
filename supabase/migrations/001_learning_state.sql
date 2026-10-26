-- Optional private cloud sync. Guest learning does not depend on this migration.
begin;
create table if not exists public.learner_state (
  user_id uuid primary key references auth.users(id) on delete cascade,
  state jsonb not null,
  curriculum_version text not null default '2026.1',
  revision integer not null default 1,
  updated_at timestamptz not null default now(),
  constraint supported_backup check (state->>'version' = '1' and jsonb_typeof(state->'completed') = 'array'),
  constraint bounded_backup check (octet_length(state::text) <= 3000000)
);
alter table public.learner_state enable row level security;
drop policy if exists learner_owns_state on public.learner_state;
create policy learner_owns_state on public.learner_state for all to authenticated using (auth.uid() = user_id) with check (auth.uid() = user_id);
grant select, insert, update on public.learner_state to authenticated;
revoke all on public.learner_state from anon;
create or replace function public.save_learner_state(new_state jsonb, expected_revision integer)
returns integer language plpgsql security invoker set search_path = public as $$
declare current_revision integer; next_revision integer;
begin
  if auth.uid() is null then raise exception 'Sign in before saving progress.'; end if;
  perform pg_advisory_xact_lock(hashtextextended(auth.uid()::text, 0));
  select revision into current_revision from public.learner_state where user_id = auth.uid() for update;
  if coalesce(current_revision,0) is distinct from expected_revision then raise exception 'Cloud progress changed on another device. Read and merge before saving.'; end if;
  next_revision := coalesce(current_revision,0) + 1;
  insert into public.learner_state(user_id,state,revision,updated_at) values(auth.uid(),new_state,next_revision,now())
    on conflict(user_id) do update set state=excluded.state,revision=excluded.revision,updated_at=excluded.updated_at;
  return next_revision;
end; $$;
revoke all on function public.save_learner_state(jsonb,integer) from public, anon;
grant execute on function public.save_learner_state(jsonb,integer) to authenticated;
commit;
