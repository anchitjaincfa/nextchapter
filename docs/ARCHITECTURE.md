# NextChapter Architecture

## Status and scope

NextChapter is a direct-to-consumer, mobile-first relationship reflection product. The first release is an interactive static demonstration only: fictional seeded scenarios, local transient state, no account creation, no server writes, no real partner data, and no claim of assessment, therapy, safety monitoring, or prediction.

It helps two fictional partners independently consider structured prompts and experience a consent-gated, bilateral reveal. It excludes AI, chat, compatibility scores, diagnostic labels, recommendations, coaching, payments, notifications, and identifying analytics.

## Product principles

1. Consent is a state machine, not a checkbox.
2. Answers remain private until both parties explicitly consent to reveal the same immutable snapshot.
3. No reveal by inference, URL manipulation, telemetry, support tooling, or notification preview.
4. The demo uses only synthetic content and resets without residue.
5. Copy supports reflection; it never diagnoses, ranks, predicts, or pressures.
6. Safety and accessibility are release criteria.
7. Expansion follows evidence and threat-model review, not feature volume.

## Four-round adversarial review record

The reviewer role was represented as an adversarial architecture review. These resolved decisions are binding constraints.

### Round 1 — Audience and launch surface

**Proposal:** launch accounts, AI guidance, partner invitations, and a coach marketplace.

**Reviewer challenge:** that scope creates privacy, abuse, moderation, and clinical-claim risk before value is validated. What is the smallest honest test?

**Resolution:** launch DTC. Ship a static frontend demo with fictional personas. No authentication, backend, storage, payments, AI, chat, scores, or real invitations.

### Round 2 — Consent and reveal semantics

**Proposal:** reveal Partner A after A submits, then Partner B later.

**Reviewer challenge:** staggered reveal creates strategic pressure and leaks asymmetric information. Editable responses allow reaction after learning the other state.

**Resolution:** bilateral reveal. Each submits privately; neither sees the other until both separately confirm. Submission creates an immutable versioned snapshot. Editing creates a new draft and invalidates prior consent. Expiry and revocation occur before reveal. Copy states that revealed information cannot be unseen.

### Round 3 — Data and security boundary

**Proposal:** build the backend now and connect demo forms to it.

**Reviewer challenge:** dormant collection paths and permissive defaults can capture intimate data. Partner products must model coercion, shared devices, link forwarding, enumeration, malicious partners, insiders, and notification leakage.

**Resolution:** no backend connection in the demo. The SQL is reference-only and cannot be applied without migrations, tests, retention jobs, key management, and verified RLS. Demo content is hard-coded synthetic data. No free-text submission or network persistence.

### Round 4 — Intelligence and expansion

**Proposal:** add compatibility scores, generative coaching, chat, and coach escalation.

**Reviewer challenge:** scores resemble pseudo-clinical judgments; generated advice can be unsafe; chat creates moderation obligations; coaching introduces vetting, licensure, crisis, payment, and record-retention burdens.

**Resolution:** no AI, chat, or scores. Coach functionality is deferred. Future features pass privacy, safety, content, accessibility, and evidence gates independently.

## Demo system

~~~text
Browser
  ├─ static HTML/CSS/JS assets
  ├─ synthetic scenario fixtures
  ├─ in-memory interaction state
  └─ optional session storage only if clearly disclosed and purgeable
No API • No database • No auth • No third-party analytics • No user content
~~~

Future reference architecture:

~~~text
Web client → edge/API → consent/state service → Postgres with RLS
                         ├── versioned content
                         ├── metadata-minimized audit events
                         ├── safe notification outbox
                         └── deletion/retention worker
~~~

Trust boundaries are browser, public edge, authenticated service, database, workers, delivery providers, and operational access. Authorization is enforced server-side and in RLS; the client is never a security boundary.

## Demo components

- Landing, limitations, privacy promise, and enter-demo action.
- Fictional scenario chooser.
- Private reflection with structured inputs and no real free text.
- Clearly labeled simulated partner switcher.
- Consent checkpoint explaining exactly what is shared.
- Waiting state that leaks no counterpart answer.
- Paired reveal only after both confirmations.
- Reset clearing all transient state.
- Safety, privacy, accessibility, and crisis-boundary footer.

Routes are directly loadable, keyboard usable, safe on refresh, and never encode answers.

## Future production responsibilities

- Identity: verified principals, session controls, recent-auth checks.
- Partnership: explicit invite/accept; block, report, pause, dissolution.
- Content: versioned prompts with provenance, review, locale, retirement.
- Reflection: encrypted drafts and immutable submissions.
- Consent: per-snapshot, per-purpose, time-bounded grants.
- Reveal: atomic transition only when both exact grants are valid.
- Audit: append-only metadata without response bodies.
- Deletion: account/partnership deletion and backup expiry.
- Operations: least-privileged tools with no default content access.

## Quality attributes

- WCAG 2.2 AA target; keyboard and screen-reader testing.
- Mobile first from 320 CSS px; no horizontal scroll at 200% zoom.
- Targets: LCP 2.5 s, INP 200 ms, CLS 0.1 at p75.
- Strict Content Security Policy; no unsafe eval.
- Dependency and secret scanning; lockfile; reproducible builds.
- Production availability target after backend launch: 99.9%.
- Before collection: restore-tested RPO 24 h and RTO 8 h.
- Logs omit answers, tokens, relationship labels, and secret URLs.

## Invariants

1. Response content is visible only to its author before bilateral reveal.
2. Grants identify exact immutable submission IDs and content version.
3. A new submission invalidates grants for an older pairing.
4. Membership alone never authorizes partner response access.
5. Notifications contain no answers, status, or reveal result.
6. Admin access is deny-by-default and independently audited.
7. Synthetic data is labeled and cannot be mistaken for saved data.
8. Schema changes cannot weaken RLS without failing policy tests.

## Production gate

A pilot requires a named data controller, privacy notice, threat-model approval, consent usability study, RLS tests with all roles, deletion/export tests, incident owner, vendor review, content safety review, accessibility audit, abuse reporting, and emergency-services disclaimer.

AI, chat, scoring, and coaching each require a separate written proposal and review. They are not implied by this architecture.