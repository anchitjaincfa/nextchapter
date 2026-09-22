# Accessibility Statement

NextChapter targets WCAG 2.2 Level AA for the demo and future product. Accessibility is a release requirement, not a later overlay.

The experience should provide semantic landmarks and headings, visible focus, logical focus order, keyboard operation without traps, descriptive labels and errors, 44 by 44 CSS pixel targets where applicable, text alternatives, 4.5:1 normal-text contrast, 3:1 large-text and UI contrast, 200% zoom without lost content, reflow at 320 CSS px, reduced motion, and status announcements that do not expose private partner information.

Consent cannot depend on color, animation, hover, timing, or ambiguous icons. Focus moves to meaningful headings after state changes. Waiting and reveal screens use live regions sparingly. Error recovery preserves safe input without storing it remotely. Plain language explains demo fiction, sharing, revocation, and post-reveal limits.

## Test matrix

- Keyboard-only across every route and modal.
- VoiceOver/Safari and NVDA/Firefox primary checks.
- 320 px, 400% text zoom, landscape, and high contrast/forced colors.
- Reduced motion, dark mode if offered, and touch target inspection.
- Automated axe checks plus manual semantic review.
- Cognitive walkthrough for consent, reset, errors, and partner switching.
- No focus loss, unexpected navigation, autoplay, flashing, or inaccessible CAPTCHA.

Known issues must be documented with severity, workaround, owner, and target. Accessibility feedback needs a reachable contact route before public launch.