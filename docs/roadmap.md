# Roadmap

Dates are intentionally absent: gates determine progression. The plan maximizes future option value while minimizing premature data collection.

## Phase 0 — Static proof of concept

Deliver a polished responsive demo using only synthetic fixtures and in-memory state: onboarding, fictional scenario selection, separate partner reflections, consent explanation, waiting state, bilateral reveal, reset, privacy/safety copy, reduced motion, keyboard support, automated lint/build/test/accessibility checks, and Vercel preview. No auth, backend, analytics, AI, chat, scores, coaches, payments, or real data.

Exit: product walkthrough passes state, copy, privacy, accessibility, mobile, browser, and refresh/reset QA; no network request sends input.

## Phase 1 — Discovery without intimate data

Conduct opt-in interviews and moderated prototype studies. Measure comprehension of privacy, bilateral reveal, editing invalidation, and revocation—not relationship outcomes. Produce service blueprint, content governance, DPIA-style assessment, abuse taxonomy, data map, retention schedule, and incident plan.

Exit: users accurately predict what is private/shared; abuse and accessibility findings have owners.

## Phase 2 — Closed production pilot

Only after approval: authentication, mutual invitation, partnership pause/block/dissolve, versioned prompts, encrypted private submissions, exact bilateral consent, atomic reveal, export/deletion, generic notifications, consent receipts, audit metadata, admin least privilege, rate limits, support and incident runbooks. Use a tiny invite-only cohort; avoid open text.

Exit: RLS/authorization/concurrency tests, deletion and restore drills, pen test, accessibility audit, content review, vendor assessment, and monitoring all pass.

## Phase 3 — Trust and usability

Add localization, configurable reminders, prompt library, history with clear retention controls, device/session management, privacy dashboard, safer re-auth, content reporting, account recovery, and aggregate privacy-preserving product analytics. Consider offline/PWA only after shared-device risks are resolved.

## Phase 4 — Optional business capabilities

Evaluate subscriptions, household plans, gift codes, regional tax/refunds, customer support tooling, and carefully bounded practitioner referral directories. Coaching remains deferred pending licensure, vetting, safeguarding, records, crisis, insurance, marketplace, and jurisdiction reviews.

## Separate research tracks, not commitments

- AI reflection assistance: require model evaluation, human-factors tests, prompt-injection/privacy controls, non-training guarantees, incident handling, and clear non-clinical limits.
- Chat/messaging: require moderation, blocking, evidence preservation, harassment response, rate limits, and retention design.
- Scoring: presume no-go unless construct validity, fairness, explainability, and harm research justify a specific user benefit. Never label compatibility.
- Human coaching: require professional governance and legal review.
- Integrations: calendars, therapists, health platforms, and employers require independent consent and data-boundary reviews.
- Community/content creation: require moderation, age policy, copyright, reputation, and abuse controls.

## Product backlog by capability

Trust: privacy center, consent receipts, access log, session/device controls, pseudonymous mode, configurable retention.

Reflection: curated packs, scheduled check-ins, branching prompts, multimedia accessibility, multilingual content, shared goals only after explicit sharing.

Safety: quick exit, neutral notifications, report/block, safe account recovery, coercion-aware copy, regional resources.

Platform: feature flags, migrations, observability without content, export/deletion jobs, disaster recovery, policy-as-code, environment isolation.

Quality: visual regression, performance budgets, assistive-tech matrix, localization tests, state-model property tests, threat-model regression tests.

Every feature proposal includes user value, non-goals, data collected, retention, threat changes, consent impact, content evidence, accessibility, abuse handling, operational owner, rollout/rollback, and success/stop criteria.