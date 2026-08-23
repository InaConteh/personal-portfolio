---
name: design-system-ina-moses-conteh
description: Creates implementation-ready chess-themed design-system guidance with tokens, 3D motion, parallax, and scroll-animation component behavior for the Ina Moses Conteh dashboard app. Use when creating or updating UI rules, component specifications, chess-card interactions, scroll/parallax effects, or design-system documentation for this project.
---

<!-- TYPEUI_SH_MANAGED_START -->

# Ina Moses Conteh — Chess Theme

## Mission
Deliver implementation-ready, chess-themed design-system guidance for Ina Moses Conteh that can be applied consistently across the dashboard web app, with a strong identity built on chessboard motifs, layered depth, parallax scrolling, and 3D card motion — while staying accessible and performant. Built for the Antigravity coding environment.

## Brand
- Product/brand: Ina Moses Conteh
- URL: http://localhost:5173/
- Audience: authenticated users and operators
- Product surface: dashboard web app
- Theme concept: a modern chess club rendered digitally — ebony/ivory board geometry, brass/gold piece accents, felt-deep shadows, and slow, deliberate "considered move" motion rather than flashy noise.

## Style Foundations

### Typography
- `font.family.display=Playfair Display, ui-serif, Georgia, serif` — used for hero titles, section headers, and any "grand" moment (evokes engraved chess-set nameplates).
- `font.family.primary=ui-sans-serif`, `font.family.stack=ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, Apple Color Emoji, Segoe UI Emoji` — used for body/UI text.
- `font.size.base=16px`, `font.weight.base=400`, `font.lineHeight.base=normal`
- Typography scale: `font.size.xs=14.4px`, `font.size.sm=14.72px`, `font.size.md=16px`, `font.size.lg=16.8px`, `font.size.xl=19.2px`, `font.size.2xl=20px`, `font.size.3xl=28px`, `font.size.4xl=80px`
- Display headings must use `font.family.display`; all other text must use `font.family.primary`. Do not mix a third font family in.

### Color Palette (chessboard-derived)
- `color.text.primary=#f2ede3` (ivory)
- `color.text.secondary=#b8a99a` (worn ivory / stone)
- `color.text.tertiary=#d4af37` (brass/gold — reserved for accents, links, active state, never body copy)
- `color.text.inverse=#14100a` (ebony, for text on light/gold surfaces)
- `color.surface.base=#0a0806` (ebony board square)
- `color.surface.muted=#171310` (raised felt panel)
- `color.surface.raised=#211a13` (card surface)
- `color.surface.square-light=#e8dcc4` (ivory board square, used sparingly for contrast blocks)
- `color.accent.check=#b3432b` (muted rook-red, used only for destructive/error/"in check" states)
- `color.accent.gold=#d4af37` (primary interactive accent — buttons, active nav, focus glow)
- Chessboard pattern (`color.surface.base` alternating with `color.surface.square-light` at low opacity) may be used as a decorative background layer only — never as text background, and never behind body copy without a solid scrim.
- Use semantic tokens, not raw hex values, in component guidance.

### Spacing
`space.1=4px`, `space.2=8px`, `space.3=10.4px`, `space.4=12px`, `space.5=16px`, `space.6=24px`, `space.7=28px`, `space.8=32px`

### Radius / Shadow / Motion
- `radius.xs=8px`, `radius.sm=12px`, `radius.card=16px` (chess-card default)
- `shadow.1=rgba(0, 0, 0, 0.3) 0px 4px 20px 0px` (flat elements)
- `shadow.card-rest=rgba(0, 0, 0, 0.45) 0px 12px 28px -8px` (chess card at rest)
- `shadow.card-hover=rgba(212, 175, 55, 0.25) 0px 20px 44px -10px` (gold-tinted lift on hover/tilt)
- `motion.duration.instant=200ms`, `motion.duration.fast=300ms`, `motion.duration.deliberate=550ms` (for "move" transitions — chess moves are deliberate, not snappy)
- `motion.easing.move=cubic-bezier(0.22, 1, 0.36, 1)` (eased "piece placed" settle)
- `motion.parallax.depth-1=0.15`, `motion.parallax.depth-2=0.35`, `motion.parallax.depth-3=0.6` (scroll-multiplier tokens for background/mid/foreground layers)

## Accessibility
- Target: WCAG 2.2 AA
- Keyboard-first interactions required.
- Focus-visible rules required — use `color.accent.gold` as a 2px outline with 2px offset; never rely on shadow alone for focus.
- Contrast constraints required. `color.text.tertiary` (gold) on `color.surface.base` must be verified at body-text sizes; if it fails AA, restrict gold to large text (18px+/bold) or non-text UI accents only.
- All parallax, 3D tilt, and scroll-triggered animation must respect `prefers-reduced-motion: reduce` — fall back to a simple opacity fade or no animation at all. This is non-negotiable, not optional polish.
- 3D tilt/hover effects must have a non-pointer equivalent (e.g., focus or tap reveals the same content without requiring a hover gesture).

## Writing Tone
concise, confident, implementation-focused — occasional chess-vocabulary flourishes are welcome in marketing copy (e.g., "your next move," "checkmate your goals") but must never appear in functional UI copy (buttons, errors, form labels), which must stay literal and unambiguous.

## Rules: Do
- Use semantic tokens, not raw hex values, in component guidance.
- Every component must define required states: default, hover, focus-visible, active, disabled, loading, error.
- Every card/panel that uses 3D tilt or parallax must also define a static fallback state.
- Responsive behavior and edge-case handling must be specified for every component family.
- Accessibility acceptance criteria must be testable in implementation.
- Motion must be purposeful: reinforce hierarchy (foreground content moves less/slower, background board pattern moves more) not decoration for its own sake.

## Rules: Don't
- Do not allow low-contrast text or hidden focus indicators, including on dark board-textured backgrounds.
- Do not introduce one-off spacing or typography exceptions.
- Do not use ambiguous labels or non-descriptive actions, even under chess-themed copy.
- Do not apply parallax/3D tilt to text-heavy reading content (long-form body copy) — motion is reserved for cards, hero sections, and decorative layers, never for anything the user needs to read continuously.
- Do not stack more than 3 parallax depth layers on a single viewport — it degrades performance and readability.
- Do not let chessboard-pattern decoration reduce text contrast below AA.

## Component Rule Expectations

### Chess Card (primary content card pattern)
- Anatomy: surface (`color.surface.raised`), `radius.card`, optional gold hairline border (1px, `color.accent.gold` at 30% opacity) on hover/focus only.
- 3D motion: on pointer hover, apply a subtle perspective tilt (max 6–8deg rotateX/rotateY, driven by cursor position) plus `shadow.card-hover`, transition `motion.duration.fast` with `motion.easing.move`. On mouse leave, tilt returns to 0 over `motion.duration.deliberate`.
- Keyboard/touch equivalent: on focus-visible or tap, apply the hover shadow and a fixed slight lift (translateY -4px) — no tilt required, since tilt is a pointer-only enhancement.
- States: default (flat, `shadow.card-rest`), hover (tilt + `shadow.card-hover`), focus-visible (gold outline + lift, no tilt), active/pressed (scale 0.98, `motion.duration.instant`), disabled (60% opacity, no motion), loading (skeleton shimmer, no tilt), error (`color.accent.check` border, no tilt).
- Content overflow: title truncates at 2 lines with ellipsis; body copy truncates with a "Read more" affordance rather than clipping silently.
- Empty state: card shows a muted placeholder (pawn-outline glyph + short label), never an empty box.

### Scroll & Parallax System
- Background layer (board-pattern texture): `motion.parallax.depth-3` — moves fastest, lowest opacity (≤15%), purely decorative, `aria-hidden="true"`.
- Midground layer (section illustrations/piece motifs): `motion.parallax.depth-2`.
- Foreground/content layer: `motion.parallax.depth-1` or static — text and interactive elements should move minimally, if at all, to stay comfortably readable while scrolling.
- Scroll-triggered reveals (cards/sections fading or rising into view) must trigger once per element (no re-trigger flicker on scroll-jitter) and use `motion.duration.deliberate` with `motion.easing.move`.
- All scroll/parallax effects must be built with `prefers-reduced-motion` checked first; when reduced motion is requested, disable parallax offset entirely and use a simple fade-in only.

### Navigation & Buttons
- Primary action buttons use `color.accent.gold` fill with `color.text.inverse` label text; hover raises via `shadow.card-hover` at reduced intensity, not a full card tilt.
- Active nav item indicated by a thin gold underline (2px) that animates in with `motion.duration.fast`, not by color change alone (contrast/colorblind safety).

## Content and Tone Standards
- Functional copy (buttons, labels, errors, empty states): literal, no chess idioms. Example — use "Save changes," not "Lock in your move."
- Marketing/hero copy: chess idioms allowed, sparingly. Example — a hero subheadline may read "Plan your next move with clarity," but the CTA button beneath it must still read something literal like "Get started."

## Anti-Patterns and Prohibited Implementations
- Applying tilt/parallax to a data table, form, or any content requiring precise reading or input.
- Using gold-on-ebony body text below AA contrast thresholds "because it matches the theme."
- Infinite or looping decorative animation on the background layer (must be scroll-driven, not autoplaying).
- Chessboard pattern used as a full-bleed background behind dense UI (dashboards, settings) — reserve heavy theming for marketing/landing surfaces; keep in-app dashboard surfaces calmer and closer to flat `color.surface.muted`/`color.surface.raised`.

## QA Checklist
- [ ] All parallax/3D/scroll effects degrade gracefully under `prefers-reduced-motion: reduce`.
- [ ] Every chess card has default, hover, focus-visible, active, disabled, loading, and error states defined and implemented.
- [ ] Keyboard and touch users get an equivalent experience to pointer-hover tilt (no functionality is hover-only).
- [ ] Gold-on-dark text combinations pass WCAG 2.2 AA at the sizes actually used.
- [ ] No more than 3 parallax depth layers per viewport.
- [ ] Long-form/reading content has no applied tilt or parallax.
- [ ] Functional UI copy contains no ambiguous chess idioms.
- [ ] Focus-visible outline (gold, 2px, 2px offset) is present and visible on every interactive element, including on textured backgrounds.

<!-- TYPEUI_SH_MANAGED_END -->
