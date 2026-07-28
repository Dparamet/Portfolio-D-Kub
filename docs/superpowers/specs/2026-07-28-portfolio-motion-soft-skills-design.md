# Portfolio Motion and Territorial Defense Soft Skills Design

Date: 2026-07-28  
Status: Approved direction, pending implementation

## Goal

Improve the portfolio in two focused areas:

1. Present Territorial Defense Student leadership experience as three concise, professional Soft Skill cards.
2. Add smooth, comfortable motion throughout the site without distracting from content or weakening accessibility and performance.

## Scope

### Included

- Rewrite Soft Skill `id: 11`.
- Add Soft Skills `id: 12` and `id: 13`.
- Use the three supplied images in `public/softskills/`.
- Apply Soft Fade + Stagger reveal motion to all major sections.
- Apply Gentle Lift interaction to card-like UI throughout the portfolio.
- Respect `prefers-reduced-motion`.
- Add regression tests for the new content, images, and motion contract.

### Excluded

- No animation library.
- No continuous looping animation on the production portfolio.
- No parallax, 3D tilt, cursor-following, blur reveal, or large lateral slide.
- No layout redesign or unrelated content changes.

## Soft Skill Content

All three cards use `level: "Strong"`, `category: "Leadership"`, and `imagePosition: "top"`.

### ID 11 — Battalion Commander

- `title`: `Territorial Defense Student Battalion Commander`
- `titleTH`: `ผู้บังคับกองพัน รด.`
- `description`: `Developed advanced leadership, discipline, and endurance while overseeing nearly 200 cadets through respectful, calm, and approachable command.`
- `descriptionTH`: `ฝึกภาวะผู้นำระดับกองพัน ความอดทน และวินัย พร้อมควบคุมดูแลกำลังพลเกือบ 200 นายด้วยแนวทางที่สันติ เป็นกันเอง และให้เกียรติ`
- `focus`: `Advanced Leadership`
- `focusTH`: `ภาวะผู้นำขั้นสูง`
- `image`: `/softskills/Battalion Commander.svg`
- `imageAlt`: `Territorial Defense Student serving as battalion commander`

### ID 12 — Company Commander

- `title`: `Territorial Defense Student Company Commander`
- `titleTH`: `ผู้บังคับกองร้อย รด.`
- `description`: `Strengthened leadership, discipline, and endurance while coordinating two platoons and supervising approximately 100 cadets.`
- `descriptionTH`: `ฝึกภาวะผู้นำ ความอดทน และวินัย ผ่านการควบคุมดูแลกำลังพลประมาณ 100 นาย ซึ่งประกอบด้วยหมวด 1 และหมวด 2 อย่างเป็นระบบ`
- `focus`: `Unit Coordination`
- `focusTH`: `การประสานงานระดับหน่วย`
- `image`: `/softskills/Territorial Defense Student Company Commander.svg`
- `imageAlt`: `Territorial Defense Student serving as company commander`

### ID 13 — Platoon Leader

- `title`: `Territorial Defense Student Platoon Leader`
- `titleTH`: `ผู้บังคับหมวด รด.`
- `description`: `Earned the trust of peers and instructors to lead approximately 50 cadets, building cooperation, respect, and unity through calm leadership.`
- `descriptionTH`: `ได้รับความไว้วางใจจากเพื่อนและครูฝึกให้ดูแลกำลังพลประมาณ 50 นาย โดยใช้ภาวะผู้นำที่สันติและเป็นกันเอง จนเกิดความร่วมมือ ความเคารพ และความสามัคคี`
- `focus`: `Trust & Unity`
- `focusTH`: `ความไว้วางใจและความสามัคคี`
- `image`: `/softskills/Territorial Defense Student Platoon Leader.svg`
- `imageAlt`: `Territorial Defense Student serving as platoon leader`

## Motion Design

### Scroll Reveal — Soft Fade + Stagger

Every major section receives a soft entrance when it first enters the viewport:

- Initial state: `opacity: 0` and `translateY(18px)`.
- Visible state: `opacity: 1` and `translateY(0)`.
- Duration: `600ms`.
- Easing: `cubic-bezier(0.22, 1, 0.36, 1)`.
- Card/item stagger: `80ms`, capped at `400ms` so long lists do not create excessive delay.
- Reveal runs once per element; scrolling back does not repeatedly replay it.
- Animations use only `opacity` and `transform` to avoid layout shift.

Major sections:

- Hero
- About
- Experience
- Projects
- Soft Skills
- Contact

Within each section, the heading/content group appears first, followed by its cards or timeline entries.

### Card Interaction — Gentle Lift

Card-like surfaces use a consistent hover/focus interaction:

- Lift by `6px`.
- Scale to `1.01`.
- Slight border-color emphasis.
- Soft shadow increase.
- Duration: `360ms`.
- Keyboard `:focus-within` receives equivalent emphasis where the card contains links or controls.

Card targets:

- Hero information cards
- About/education information cards
- Experience timeline cards
- Project cards
- Soft Skill cards
- Contact form container

The motion must not alter card dimensions, cause content reflow, or interfere with existing clickable controls.

## Technical Architecture

Create one client-side motion observer mounted once near the portfolio page root.

- It finds elements marked with `data-reveal`.
- One shared `IntersectionObserver` observes all reveal targets.
- When a target intersects, the observer adds `is-visible` and unobserves it.
- A lightweight `MutationObserver` registers targets created after filtering Projects or Soft Skills.
- Delay is supplied through a CSS custom property such as `--reveal-delay`.
- Existing card elements receive a shared `motion-card` class instead of introducing wrapper elements that could alter grids.

Global CSS owns the transitions:

- `[data-reveal]`
- `[data-reveal].is-visible`
- `.motion-card`
- `.motion-card:hover`
- `.motion-card:focus-within`

No third-party dependency is required.

## Accessibility

Under `@media (prefers-reduced-motion: reduce)`:

- Reveal elements render immediately at full opacity and without transform.
- Card lift, scale, and animated shadow changes are disabled.
- Content remains available when JavaScript is disabled; hidden reveal styles only activate after the motion observer marks the document as motion-ready.

Motion does not communicate information that is unavailable elsewhere.

## Performance

- Use transform and opacity only for reveal movement.
- Share one `IntersectionObserver`.
- Unobserve elements immediately after their first reveal.
- Cap stagger delay for large Project lists.
- Avoid animation libraries and continuous production loops.
- Retain existing optimized image behavior and dimensions.

## Testing and Verification

### Automated

- Soft Skill IDs remain unique.
- IDs `11–13` contain the approved bilingual titles and concise descriptions.
- IDs `11–13` reference the exact supplied local images with non-empty alt text.
- All referenced images exist under `public/`.
- Motion implementation contains the shared observer contract.
- Reduced-motion CSS disables reveal and card transitions.
- Existing test suite, ESLint, TypeScript, and production build pass.

### Runtime

- Verify every major section reveals smoothly while scrolling.
- Verify Project and Soft Skill filters reveal newly rendered cards.
- Verify Gentle Lift on mouse hover and keyboard focus.
- Verify no horizontal overflow or layout shift at mobile and desktop widths.
- Verify reduced-motion mode shows content immediately with no movement.

## Success Criteria

- The three Territorial Defense Student cards clearly demonstrate increasing leadership scope across approximately 50, 100, and nearly 200 cadets.
- Text is concise enough for the existing card layout in both Thai and English.
- All supplied images appear on their matching cards.
- Motion is consistent across the portfolio, smooth, and comfortable.
- Users who prefer reduced motion receive a stable, fully visible interface.
- No new runtime dependency or production console error is introduced.
