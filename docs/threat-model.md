# Threat Model

## Scope

The demo has no accounts, APIs, user data, analytics, or real invitations. This model prevents demo drift and guides a possible production system containing highly sensitive relationship reflections.

## Assets and actors

Assets: private responses, identity and partnership graph, consent records, invitation tokens, session credentials, content provenance, deletion state, and minimal audit metadata.

Actors: each partner, coercive or abusive partner, outsider, link recipient, shared-device user, malicious insider, compromised vendor, support operator, and automated attacker. A partner is authenticated but not automatically trusted to view the other partner's private material.

## Threats and controls

| Threat | Impact | Required control |
|---|---|---|
| Guess/forward invite | unauthorized pairing | random one-time hashed tokens, short expiry, explicit identity display and acceptance |
| IDOR/enumeration | private data exposure | opaque IDs plus RLS and server authorization; generic errors |
| One-sided reveal | coercion/information asymmetry | exact bilateral grants and atomic transaction |
| Edit after consent | consent to different content | immutable snapshots; edit invalidates grant |
| Shared device/back button | accidental disclosure | no-store, safe re-auth, neutral titles/previews, clear sign out |
| Coerced consent | interpersonal harm | private exit, revocation before reveal, no pressure countdown, block/report |
| Notification leak | sensitive metadata exposure | generic messages; no answers or relationship state |
| XSS/supply chain | token/content theft | CSP, output encoding, dependency pinning/scanning, minimal third parties |
| Insider access | intimate data misuse | deny-by-default roles, approval, time-bound access, audited break-glass |
| Logs/backups | durable shadow copy | data minimization, field denylist, encrypted backups, tested expiry |
| Analytics/session replay | accidental capture | disabled on sensitive views; explicit event allowlist; no replay |
| Account takeover | full compromise | MFA option, rate limits, rotation, anomaly signals, recent auth |
| Deletion failure | policy/legal breach | deletion workflow, tombstones, backup schedule, verification |
| Content harm | unsafe pseudo-therapy | reviewed provenance, non-diagnostic copy, crisis boundary, retirement |
| Availability attack | inability to access/revoke | rate limits, degraded safe mode, operational runbook |

## Abuse cases

- A person creates an account for a partner without permission.
- A partner pressures the other to answer or reveal in their presence.
- An ex-partner retains links or screenshots.
- A partner reports private content to weaponize moderation.
- A user mistakes reflection copy for clinical or emergency advice.
- Support staff browse responses out of curiosity.

Design responses include mutual activation, independent consent screens, easy pause/block, no read receipts before reveal, screenshot-risk disclosure, metadata-only abuse intake by default, and clear emergency-resource language. Never promise screenshot prevention or post-reveal erasure from another person's memory/device.

## Data flows and retention

Production collection must be purpose-limited. TLS in transit and managed encryption at rest are baseline, not substitutes for authorization. Application-layer envelope encryption should be evaluated for response bodies, with keys isolated from the database.

Define retention before launch: unaccepted invites, abandoned drafts, expired cycles, audit metadata, account deletion, legal holds, backups, and vendor copies. Default toward the shortest useful duration. Export must not disclose the partner's still-private data.

## Security verification

Before production: RLS matrix tests, object-level authorization tests, concurrency tests for reveal, invitation replay tests, shared-device UX review, CSP scan, secret/dependency scanning, backup restore and deletion exercises, support-role audit, incident tabletop, and independent penetration test.

Residual risks include screenshots, coercion outside the product, compromised endpoints, legal demands, and re-identification from metadata. Communicate these honestly.