# Production State Model (Reference)

This describes a future production system. The demo must not connect to it or collect real data.

## Aggregate states

Partnership: invited → active → paused → dissolved. Exceptions: declined, expired, blocked. Blocking immediately prevents new access and invitations.

Reflection: draft → submitted-private → awaiting-partner → ready-for-reveal → revealed. Alternatives: withdrawn or expired. Any pre-reveal edit creates a new version and invalidates consent.

## Entities

- User: authenticated principal.
- Partnership: exactly two accepted members in v1.
- Prompt version: immutable reviewed content.
- Cycle: partnership plus prompt version and expiry.
- Submission: immutable response snapshot owned by one member.
- Reveal grant: affirmative consent for one exact local and counterpart snapshot.
- Reveal: atomic proof that both grants were valid.
- Audit event: minimal append-only security metadata without response content.

## Transitions

| From | Event | Guard | To | Effect |
|---|---|---|---|---|
| invited | accept | authenticated invitee; valid token | active | revoke invite token |
| draft | submit | author; current prompt; valid payload | submitted-private | freeze snapshot |
| submitted-private | continue | counterpart private | awaiting-partner | none |
| awaiting-partner | grant | owns snapshot; exact pair; unexpired | awaiting-partner | append grant |
| awaiting-partner | second grant | both grants exact/current | ready-for-reveal | request transaction |
| ready-for-reveal | commit | serializable recheck | revealed | unique reveal |
| pre-reveal | edit | author | draft | new version; revoke old grant |
| pre-reveal | revoke/expire/block | valid guard | withdrawn/expired | deny reveal |
| nonterminal | dissolve | member | dissolved | revoke future access |

## Atomic bilateral reveal

In one serializable transaction:

1. Lock cycle and submissions.
2. Assert active partnership and current membership.
3. Assert compatible content and submission versions.
4. Assert two unexpired, unrevoked grants identify the exact pair.
5. Insert a unique reveal record.
6. Mark cycle revealed; append metadata-only events.
7. Return both responses only to the two authorized members.

Retries are idempotent by unique cycle and snapshot pair. No intermediate state exposes one response.

## Concurrency and failures

- No last-write-wins for submissions or grants.
- Optimistic versions prevent stale consent.
- Timeout before commit is unknown; clients refetch.
- Workers cannot reveal independently.
- Server time governs expiry.
- Private responses use Cache-Control: no-store.
- Completion and consent state disclose only what the screen needs.

Consent can be revoked until atomic reveal. After reveal, future access and stored copies may be removed, but information already perceived cannot be made unknown; explain this before confirmation.

The static demo simulates states only in memory using synthetic fixtures. Partner switching is labeled theatrical navigation, not identity.