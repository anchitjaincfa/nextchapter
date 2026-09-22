# Row-Level Security Strategy (Reference)

The current demo has no Supabase connection. The accompanying SQL is design material only.

## Rules

- Enable and force RLS on every user-data table.
- Authenticated users operate only as their own subject; never accept a user ID from the client.
- Service role is limited to isolated backend jobs and never shipped to browsers.
- Table ownership is not used by request handlers.
- Private submission bodies are author-readable until a valid reveal exists.
- Partnership membership alone is insufficient to read a partner submission.
- Grants and submissions are immutable to clients; revocation is a controlled transition.
- Audit rows are append-only and never directly client-readable.
- Views use security-invoker behavior where supported.

## Policy matrix

| Table | Select | Insert | Update/Delete |
|---|---|---|---|
| profiles | self; minimal accepted-partner projection via function | self bootstrap | self-safe fields |
| partnerships | accepted members | RPC only | state-transition RPC only |
| partnership_members | own membership; counterpart only after acceptance | RPC only | RPC only |
| prompt_versions | published rows | admin migration | admin migration |
| cycles | accepted members | RPC only | transition RPC |
| submissions | author; both members only after exact reveal | author via RPC | none; create new version |
| reveal_grants | grantor only; counterpart sees no pre-reveal status | grantor via RPC | revoke RPC |
| reveals | both current authorized members | security-definer transaction | none |
| audit_events | none | trusted functions | none |

Security-definer functions must pin search path, fully qualify objects, validate caller identity, have narrowly granted execute permissions, and avoid returning private rows.

## Test matrix

For anon, unrelated authenticated user, member A, member B, blocked member, dissolved member, support, and service worker, test select/insert/update/delete plus RPC calls. Include stale grants, edited snapshots, expired cycles, concurrent second consent, forged IDs, and direct REST access. CI fails if a new table lacks forced RLS or a public role obtains broad privileges.

Do not infer authorization from JWT metadata that users can edit. Never place response content in realtime channels, logs, errors, or notification payloads.