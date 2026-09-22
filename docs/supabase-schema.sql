-- REFERENCE ONLY. DO NOT APPLY. The static demo has no database.
-- Requires reviewed migrations, RLS tests, retention jobs, encryption decisions,
-- least-privilege grants, and atomic reveal functions before production use.

create extension if not exists pgcrypto;

create table public.partnerships (
  id uuid primary key default gen_random_uuid(),
  status text not null check (status in ('invited','active','paused','dissolved','declined','expired','blocked')),
  created_at timestamptz not null default now(),
  version bigint not null default 1
);

create table public.partnership_members (
  partnership_id uuid not null references public.partnerships(id) on delete cascade,
  user_id uuid not null references auth.users(id) on delete cascade,
  role text not null check (role in ('member_a','member_b')),
  accepted_at timestamptz,
  primary key (partnership_id, user_id),
  unique (partnership_id, role)
);

create table public.prompt_versions (
  id uuid primary key default gen_random_uuid(),
  stable_key text not null,
  version integer not null,
  body jsonb not null,
  review_status text not null check (review_status in ('draft','approved','retired')),
  published_at timestamptz,
  unique (stable_key, version)
);

create table public.cycles (
  id uuid primary key default gen_random_uuid(),
  partnership_id uuid not null references public.partnerships(id),
  prompt_version_id uuid not null references public.prompt_versions(id),
  status text not null check (status in ('draft','awaiting_partner','ready_for_reveal','revealed','withdrawn','expired')),
  expires_at timestamptz not null,
  revealed_at timestamptz,
  version bigint not null default 1
);

create table public.submissions (
  id uuid primary key default gen_random_uuid(),
  cycle_id uuid not null references public.cycles(id),
  author_id uuid not null references auth.users(id),
  revision integer not null,
  response_ciphertext bytea not null,
  response_key_id text not null,
  submitted_at timestamptz not null default now(),
  withdrawn_at timestamptz,
  unique (cycle_id, author_id, revision)
);

create table public.reveal_grants (
  id uuid primary key default gen_random_uuid(),
  cycle_id uuid not null references public.cycles(id),
  grantor_id uuid not null references auth.users(id),
  own_submission_id uuid not null references public.submissions(id),
  counterpart_submission_id uuid not null references public.submissions(id),
  granted_at timestamptz not null default now(),
  expires_at timestamptz not null,
  revoked_at timestamptz,
  unique (cycle_id, grantor_id, own_submission_id, counterpart_submission_id)
);

create table public.reveals (
  id uuid primary key default gen_random_uuid(),
  cycle_id uuid not null unique references public.cycles(id),
  submission_a_id uuid not null references public.submissions(id),
  submission_b_id uuid not null references public.submissions(id),
  revealed_at timestamptz not null default now(),
  unique (cycle_id, submission_a_id, submission_b_id)
);

create table public.audit_events (
  id bigint generated always as identity primary key,
  actor_id uuid,
  partnership_id uuid,
  event_type text not null,
  occurred_at timestamptz not null default now(),
  metadata jsonb not null default '{}'::jsonb,
  check (not (metadata ?| array['response','answer','ciphertext','token']))
);

alter table public.partnerships enable row level security;
alter table public.partnerships force row level security;
alter table public.partnership_members enable row level security;
alter table public.partnership_members force row level security;
alter table public.prompt_versions enable row level security;
alter table public.prompt_versions force row level security;
alter table public.cycles enable row level security;
alter table public.cycles force row level security;
alter table public.submissions enable row level security;
alter table public.submissions force row level security;
alter table public.reveal_grants enable row level security;
alter table public.reveal_grants force row level security;
alter table public.reveals enable row level security;
alter table public.reveals force row level security;
alter table public.audit_events enable row level security;
alter table public.audit_events force row level security;

-- Policies and SECURITY DEFINER transition functions are intentionally omitted.
-- A permissive placeholder would be more dangerous than no deployable policy.
revoke all on all tables in schema public from anon, authenticated;