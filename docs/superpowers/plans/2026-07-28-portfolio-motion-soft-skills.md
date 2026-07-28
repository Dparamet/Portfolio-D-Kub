# Portfolio Motion and Territorial Defense Soft Skills Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add three concise Territorial Defense Student leadership cards and smooth Soft Fade + Stagger reveal motion with Gentle Lift interactions throughout the portfolio.

**Architecture:** Content remains data-driven in `data/softskills.ts`. Motion uses one client-side `MotionObserver` with a shared `IntersectionObserver`, a small `MutationObserver` for filtered cards, CSS data attributes, and a pure delay helper; no animation dependency or layout wrapper is introduced.

**Tech Stack:** Next.js 16.2.12, React 19.2.3, TypeScript 5, Tailwind CSS v4, native Intersection Observer, native Mutation Observer, Node.js test runner.

## Global Constraints

- No animation library or new runtime dependency.
- Reveal uses `opacity` and `translateY(18px)` for `600ms`.
- Reveal easing is `cubic-bezier(0.22, 1, 0.36, 1)`.
- Stagger is `80ms` per item and capped at `400ms`.
- Gentle Lift uses `translateY(-6px) scale(1.01)` for `360ms`.
- Reveal runs once and each visible element is unobserved.
- All motion is disabled by `prefers-reduced-motion: reduce`.
- Content must remain visible before motion initialization and when JavaScript is unavailable.
- IDs `11–13` use the exact approved bilingual content and supplied local images.
- Preserve all unrelated dirty-worktree changes.

---

## File Structure

- Create `lib/motion.ts`: pure stagger-delay constants and calculation.
- Create `app/components/MotionObserver.tsx`: one shared observer mounted once.
- Modify `app/globals.css`: reveal, Gentle Lift, and reduced-motion rules.
- Modify `data/softskills.ts`: approved cards `11–13`.
- Modify `app/page.tsx`: mount observer and mark Hero, About, Contact, and their cards.
- Modify `app/components/ExperienceSection.tsx`: mark heading, timeline items, and cards.
- Modify `app/components/ProjectsSection.tsx`: mark heading/filter block and filtered cards.
- Modify `app/components/LabSection.tsx`: mark heading/filter block and filtered cards.
- Modify `tests/soft-skills.test.mjs`: verify leadership cards and image mapping.
- Create `tests/motion.test.mjs`: verify delay calculation and motion infrastructure.
- Modify `README.md`: document motion behavior and reduced-motion support.
- Modify `.gitignore`: ignore `.superpowers/` Visual Companion session artifacts.

---

### Task 1: Territorial Defense Student Leadership Cards

**Files:**

- Modify: `tests/soft-skills.test.mjs`
- Modify: `data/softskills.ts`

**Interfaces:**

- Consumes: exported `softSkills: SoftSkillItem[]`.
- Produces: cards with IDs `11`, `12`, and `13`, exact image paths, bilingual content, and concise Thai descriptions of at most 160 characters.

- [ ] **Step 1: Write the failing content test**

Replace the current “every card uses the profile photo” assertion so it applies only to IDs `1–10`, then add:

```js
test("territorial defense leadership cards use approved content and images", () => {
  const softSkills = loadSoftSkills();
  const expected = [
    {
      id: 11,
      titleTH: "ผู้บังคับกองพัน รด.",
      focusTH: "ภาวะผู้นำขั้นสูง",
      image: "/softskills/Battalion Commander.svg",
      personnel: "เกือบ 200 นาย",
    },
    {
      id: 12,
      titleTH: "ผู้บังคับกองร้อย รด.",
      focusTH: "การประสานงานระดับหน่วย",
      image:
        "/softskills/Territorial Defense Student Company Commander.svg",
      personnel: "ประมาณ 100 นาย",
    },
    {
      id: 13,
      titleTH: "ผู้บังคับหมวด รด.",
      focusTH: "ความไว้วางใจและความสามัคคี",
      image: "/softskills/Territorial Defense Student Platoon Leader.svg",
      personnel: "ประมาณ 50 นาย",
    },
  ];

  for (const requirement of expected) {
    const item = softSkills.find(({ id }) => id === requirement.id);
    assert.ok(item, `Missing soft-skill id ${requirement.id}`);
    assert.equal(item.titleTH, requirement.titleTH);
    assert.equal(item.focusTH, requirement.focusTH);
    assert.equal(item.image, requirement.image);
    assert.match(item.descriptionTH, new RegExp(requirement.personnel));
    assert.equal(item.level, "Strong");
    assert.equal(item.category, "Leadership");
    assert.equal(item.imagePosition, "top");
  }
});
```

Update the profile-photo test loop:

```js
for (const item of softSkills.filter(({ id }) => id <= 10)) {
  assert.equal(item.image, "/profile.jpg", `${item.title}: image`);
  assert.equal(
    item.imageAlt,
    "Dparamet practicing continuous self improvement",
    `${item.title}: imageAlt`,
  );
  assert.equal(item.imagePosition, "top", `${item.title}: imagePosition`);
}
```

- [ ] **Step 2: Run the test and verify RED**

Run:

```bash
node --test tests/soft-skills.test.mjs
```

Expected: FAIL because ID `12` is missing and ID `11` still uses `/profile.jpg`.

- [ ] **Step 3: Implement the three approved cards**

Replace ID `11` and add IDs `12–13` in `data/softskills.ts`:

```ts
{
  id: 11,
  title: "Territorial Defense Student Battalion Commander",
  titleTH: "ผู้บังคับกองพัน รด.",
  description:
    "Developed advanced leadership, discipline, and endurance while overseeing nearly 200 cadets through respectful, calm, and approachable command.",
  descriptionTH:
    "ฝึกภาวะผู้นำระดับกองพัน ความอดทน และวินัย พร้อมควบคุมดูแลกำลังพลเกือบ 200 นายด้วยแนวทางที่สันติ เป็นกันเอง และให้เกียรติ",
  focus: "Advanced Leadership",
  focusTH: "ภาวะผู้นำขั้นสูง",
  level: "Strong",
  category: "Leadership",
  image: "/softskills/Battalion Commander.svg",
  imageAlt: "Territorial Defense Student serving as battalion commander",
  imagePosition: "top",
},
{
  id: 12,
  title: "Territorial Defense Student Company Commander",
  titleTH: "ผู้บังคับกองร้อย รด.",
  description:
    "Strengthened leadership, discipline, and endurance while coordinating two platoons and supervising approximately 100 cadets.",
  descriptionTH:
    "ฝึกภาวะผู้นำ ความอดทน และวินัย ผ่านการควบคุมดูแลกำลังพลประมาณ 100 นาย ซึ่งประกอบด้วยหมวด 1 และหมวด 2 อย่างเป็นระบบ",
  focus: "Unit Coordination",
  focusTH: "การประสานงานระดับหน่วย",
  level: "Strong",
  category: "Leadership",
  image: "/softskills/Territorial Defense Student Company Commander.svg",
  imageAlt: "Territorial Defense Student serving as company commander",
  imagePosition: "top",
},
{
  id: 13,
  title: "Territorial Defense Student Platoon Leader",
  titleTH: "ผู้บังคับหมวด รด.",
  description:
    "Earned the trust of peers and instructors to lead approximately 50 cadets, building cooperation, respect, and unity through calm leadership.",
  descriptionTH:
    "ได้รับความไว้วางใจจากเพื่อนและครูฝึกให้ดูแลกำลังพลประมาณ 50 นาย โดยใช้ภาวะผู้นำที่สันติและเป็นกันเอง จนเกิดความร่วมมือ ความเคารพ และความสามัคคี",
  focus: "Trust & Unity",
  focusTH: "ความไว้วางใจและความสามัคคี",
  level: "Strong",
  category: "Leadership",
  image: "/softskills/Territorial Defense Student Platoon Leader.svg",
  imageAlt: "Territorial Defense Student serving as platoon leader",
  imagePosition: "top",
},
```

- [ ] **Step 4: Run the focused test and verify GREEN**

Run:

```bash
node --test tests/soft-skills.test.mjs
```

Expected: all Soft Skill tests PASS and all three local image paths resolve.

- [ ] **Step 5: Review the data diff**

Run:

```bash
git diff -- data/softskills.ts tests/soft-skills.test.mjs
```

Expected: only IDs `11–13` and their exact regression assertions change.

---

### Task 2: Motion Timing Boundary

**Files:**

- Create: `lib/motion.ts`
- Create: `tests/motion.test.mjs`

**Interfaces:**

- Produces: `REVEAL_STAGGER_MS`, `REVEAL_MAX_DELAY_MS`, and `getRevealDelay(index: number): string`.
- Consumers: `ExperienceSection`, `ProjectsSection`, and `LabSection`.

- [ ] **Step 1: Write the failing timing test**

Create `tests/motion.test.mjs` with the same TypeScript transpilation seam used by existing data tests:

```js
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import test from "node:test";
import ts from "typescript";
import { fileURLToPath } from "node:url";

const currentDirectory = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(currentDirectory, "..");
const motionFile = path.join(projectRoot, "lib", "motion.ts");

function loadMotionModule() {
  const source = fs.readFileSync(motionFile, "utf8");
  const compiled = ts.transpileModule(source, {
    compilerOptions: {
      module: ts.ModuleKind.CommonJS,
      target: ts.ScriptTarget.ES2020,
    },
  }).outputText;
  const testModule = { exports: {} };
  Function("module", "exports", "require", compiled)(
    testModule,
    testModule.exports,
    undefined,
  );
  return testModule.exports;
}

test("reveal delay uses 80ms steps capped at 400ms", () => {
  const { getRevealDelay } = loadMotionModule();
  assert.equal(getRevealDelay(-1), "0ms");
  assert.equal(getRevealDelay(0), "0ms");
  assert.equal(getRevealDelay(1), "80ms");
  assert.equal(getRevealDelay(5), "400ms");
  assert.equal(getRevealDelay(20), "400ms");
});
```

- [ ] **Step 2: Run the test and verify RED**

Run:

```bash
node --test tests/motion.test.mjs
```

Expected: FAIL with missing `lib/motion.ts`.

- [ ] **Step 3: Implement the timing helper**

Create `lib/motion.ts`:

```ts
export const REVEAL_STAGGER_MS = 80;
export const REVEAL_MAX_DELAY_MS = 400;

export function getRevealDelay(index: number): string {
  const safeIndex = Math.max(0, Math.floor(index));
  return `${Math.min(
    safeIndex * REVEAL_STAGGER_MS,
    REVEAL_MAX_DELAY_MS,
  )}ms`;
}
```

- [ ] **Step 4: Run the focused test and verify GREEN**

Run:

```bash
node --test tests/motion.test.mjs
```

Expected: PASS.

---

### Task 3: Shared Motion Observer and Global CSS

**Files:**

- Create: `app/components/MotionObserver.tsx`
- Modify: `app/globals.css`
- Modify: `tests/motion.test.mjs`

**Interfaces:**

- Consumes: DOM elements marked with `data-reveal`.
- Produces: `html[data-motion-ready="true"]`, `.is-visible`, and observer registration for newly filtered cards.
- CSS consumes: `--reveal-delay`, `data-reveal`, `.is-visible`, and `.motion-card`.

- [ ] **Step 1: Add a failing infrastructure contract test**

Append to `tests/motion.test.mjs`:

```js
test("motion infrastructure shares observers and supports reduced motion", () => {
  const observerSource = fs.readFileSync(
    path.join(projectRoot, "app", "components", "MotionObserver.tsx"),
    "utf8",
  );
  const cssSource = fs.readFileSync(
    path.join(projectRoot, "app", "globals.css"),
    "utf8",
  );

  assert.match(observerSource, /new IntersectionObserver/);
  assert.match(observerSource, /new MutationObserver/);
  assert.match(observerSource, /observer\.unobserve/);
  assert.match(observerSource, /prefers-reduced-motion: reduce/);
  assert.match(cssSource, /data-motion-ready="true"/);
  assert.match(cssSource, /\[data-reveal\]\.is-visible/);
  assert.match(cssSource, /\.motion-card/);
  assert.match(cssSource, /prefers-reduced-motion: reduce/);
});
```

- [ ] **Step 2: Run the test and verify RED**

Run:

```bash
node --test tests/motion.test.mjs
```

Expected: FAIL because `MotionObserver.tsx` does not exist.

- [ ] **Step 3: Create the shared observer**

Create `app/components/MotionObserver.tsx`:

```tsx
"use client";

import { useEffect } from "react";

const REVEAL_SELECTOR = "[data-reveal]";
const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";

export default function MotionObserver() {
  useEffect(() => {
    const documentElement = document.documentElement;
    documentElement.dataset.motionReady = "true";

    if (window.matchMedia(REDUCED_MOTION_QUERY).matches) {
      document
        .querySelectorAll<HTMLElement>(REVEAL_SELECTOR)
        .forEach((element) => element.classList.add("is-visible"));
      return () => {
        delete documentElement.dataset.motionReady;
      };
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.14 },
    );

    const register = (root: ParentNode) => {
      root.querySelectorAll<HTMLElement>(REVEAL_SELECTOR).forEach((element) => {
        if (!element.classList.contains("is-visible")) observer.observe(element);
      });
    };

    register(document);

    const mutationObserver = new MutationObserver((records) => {
      for (const record of records) {
        for (const node of record.addedNodes) {
          if (!(node instanceof HTMLElement)) continue;
          if (node.matches(REVEAL_SELECTOR)) observer.observe(node);
          register(node);
        }
      }
    });

    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
      delete documentElement.dataset.motionReady;
    };
  }, []);

  return null;
}
```

- [ ] **Step 4: Add reveal, Gentle Lift, and reduced-motion CSS**

Append to `app/globals.css`:

```css
html[data-motion-ready="true"] [data-reveal] {
  opacity: 0;
  transform: translate3d(0, 18px, 0);
  transition:
    opacity 600ms cubic-bezier(0.22, 1, 0.36, 1),
    transform 600ms cubic-bezier(0.22, 1, 0.36, 1);
  transition-delay: var(--reveal-delay, 0ms);
  will-change: opacity, transform;
}

html[data-motion-ready="true"] [data-reveal].is-visible {
  opacity: 1;
  transform: translate3d(0, 0, 0);
  will-change: auto;
}

.motion-card {
  transition:
    transform 360ms cubic-bezier(0.22, 1, 0.36, 1),
    box-shadow 360ms ease,
    border-color 360ms ease;
}

@media (hover: hover) and (pointer: fine) {
  .motion-card:hover {
    transform: translateY(-6px) scale(1.01);
  }
}

.motion-card:focus-within {
  transform: translateY(-6px) scale(1.01);
}

@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    scroll-behavior: auto !important;
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    transition-delay: 0ms !important;
  }

  html[data-motion-ready="true"] [data-reveal] {
    opacity: 1;
    transform: none;
  }

  .motion-card:hover,
  .motion-card:focus-within {
    transform: none;
  }
}
```

- [ ] **Step 5: Run the focused test and verify GREEN**

Run:

```bash
node --test tests/motion.test.mjs
```

Expected: both timing and infrastructure tests PASS.

---

### Task 4: Apply Reveal and Gentle Lift Across the Portfolio

**Files:**

- Modify: `app/page.tsx`
- Modify: `app/components/ExperienceSection.tsx`
- Modify: `app/components/ProjectsSection.tsx`
- Modify: `app/components/LabSection.tsx`
- Modify: `tests/motion.test.mjs`

**Interfaces:**

- Consumes: `MotionObserver`, `getRevealDelay(index)`, `data-reveal`, `--reveal-delay`, and `.motion-card`.
- Produces: reveal targets in Hero, About, Experience, Projects, Soft Skills, and Contact; Gentle Lift on all specified card surfaces.

- [ ] **Step 1: Add a failing markup coverage test**

Append to `tests/motion.test.mjs`:

```js
test("every major portfolio section opts into reveal motion", () => {
  const sources = [
    "app/page.tsx",
    "app/components/ExperienceSection.tsx",
    "app/components/ProjectsSection.tsx",
    "app/components/LabSection.tsx",
  ].map((file) => fs.readFileSync(path.join(projectRoot, file), "utf8"));
  const combined = sources.join("\n");

  for (const sectionId of [
    "home",
    "about",
    "experience",
    "projects",
    "soft-skill",
    "contact",
  ]) {
    assert.match(combined, new RegExp(`id=["']${sectionId}["']`));
  }

  assert.match(sources[0], /<MotionObserver \/>/);
  assert.ok(
    (combined.match(/data-reveal/g) ?? []).length >= 12,
    "Expected reveal targets across every section",
  );
  assert.ok(
    (combined.match(/motion-card/g) ?? []).length >= 6,
    "Expected Gentle Lift on each card family",
  );
});
```

- [ ] **Step 2: Run the test and verify RED**

Run:

```bash
node --test tests/motion.test.mjs
```

Expected: FAIL because `MotionObserver` is not mounted and markup has no motion attributes.

- [ ] **Step 3: Mount the observer and mark page-owned sections**

In `app/page.tsx`:

```tsx
import MotionObserver from "@/app/components/MotionObserver";
import { getRevealDelay } from "@/lib/motion";
import type { CSSProperties } from "react";
```

Mount once:

```tsx
return (
  <div>
    <MotionObserver />
    {/* portfolio sections */}
  </div>
);
```

Apply:

- Hero left column: `data-reveal`.
- Hero avatar column: `data-reveal` with `style={{ "--reveal-delay": getRevealDelay(1) } as CSSProperties}`.
- Hero stat cards: add `motion-card`.
- About heading group: wrap heading and accent line in a `data-reveal` div.
- About bio column: `data-reveal`.
- About skills column: `data-reveal` with delay index `1`.
- About info cards: add `motion-card`.
- Contact heading/subtitle group: wrap in `data-reveal`.
- Each contact link: add `data-reveal motion-card` and a delay from its map index.
- Contact form container: add `data-reveal motion-card` with delay index `1`.
- Correct the stale comment from `/data/lab.ts` to `/data/softskills.ts`.

- [ ] **Step 4: Mark Experience targets**

In `ExperienceSection.tsx`:

```tsx
import { getRevealDelay } from "@/lib/motion";
import type { CSSProperties } from "react";
```

- Wrap the section heading, accent line, and subtitle in a `data-reveal` div.
- Change `experiences.map((item) =>` to `experiences.map((item, index) =>`.
- Add to each `<li>`:

```tsx
data-reveal
style={{ "--reveal-delay": getRevealDelay(index) } as CSSProperties}
```

- Add `motion-card` to each `<article>`.

- [ ] **Step 5: Mark Project targets**

In `ProjectsSection.tsx`:

```tsx
import type { CSSProperties } from "react";
import { getRevealDelay } from "@/lib/motion";
```

- Wrap heading, accent line, subtitle, and filter tabs in a `data-reveal` div.
- Change `filtered.map((project) =>` to `filtered.map((project, index) =>`.
- Add `data-reveal`.
- Add `style={{ "--reveal-delay": getRevealDelay(index) } as CSSProperties}`.
- Add `motion-card` to the card class.
- Remove `hover:-translate-y-0.5` and the conflicting `duration-150` transform timing.

- [ ] **Step 6: Mark Soft Skill targets**

In `LabSection.tsx`:

```tsx
import type { CSSProperties } from "react";
import { getRevealDelay } from "@/lib/motion";
```

- Wrap heading, accent line, subtitle, and filter tabs in a `data-reveal` div.
- Change `filtered.map((item) =>` to `filtered.map((item, index) =>`.
- Add `data-reveal`.
- Add `style={{ "--reveal-delay": getRevealDelay(index) } as CSSProperties}`.
- Add `motion-card` to the card class.
- Remove `hover:-translate-y-0.5` and the conflicting `duration-150` transform timing.

- [ ] **Step 7: Run focused and full automated checks**

Run:

```bash
node --test tests/motion.test.mjs tests/soft-skills.test.mjs
npm test
npm run lint
npx tsc --noEmit
```

Expected: all commands exit `0`.

---

### Task 5: Documentation, Cleanup, and Runtime Verification

**Files:**

- Modify: `README.md`
- Modify: `.gitignore`

**Interfaces:**

- Produces: contributor-facing motion documentation and ignored Visual Companion artifacts.

- [ ] **Step 1: Update documentation**

Add a “Motion System” subsection to `README.md` containing:

```markdown
### Motion System

- ทุก section ใช้ Soft Fade + Stagger ผ่าน native `IntersectionObserver`
- Card ใช้ Gentle Lift เมื่อ Hover หรือ Focus ภายใน
- ค่าหลักอยู่ใน `lib/motion.ts` และ CSS อยู่ใน `app/globals.css`
- รองรับ `prefers-reduced-motion` และไม่ใช้ animation library เพิ่ม
```

Update the Soft Skill guide to reference IDs `11–13` and `public/softskills/`.

- [ ] **Step 2: Ignore Visual Companion sessions**

Append to `.gitignore`:

```gitignore
# local visual brainstorming sessions
/.superpowers/
```

- [ ] **Step 3: Run final verification**

Run:

```bash
npm test
npm run lint
npx tsc --noEmit
npm run build
git diff --check
```

Expected:

- All tests pass with zero failures.
- ESLint exits `0`.
- TypeScript reports no errors.
- Next.js production build completes and statically prerenders `/`.
- `git diff --check` reports no whitespace errors.

- [ ] **Step 4: Verify runtime behavior**

With `npm run dev`:

1. Scroll through Hero, About, Experience, Projects, Soft Skills, and Contact.
2. Confirm each heading/content group fades upward once.
3. Confirm timeline and filtered cards stagger by `80ms`, capped at `400ms`.
4. Hover and keyboard-focus each card family; confirm Gentle Lift without reflow.
5. Switch Project and Soft Skill filters; confirm newly rendered cards reveal.
6. Emulate `prefers-reduced-motion: reduce`; confirm content is immediately visible and stationary.
7. Check mobile and desktop widths for horizontal overflow and layout shift.
8. Confirm the browser console has no new error.

- [ ] **Step 5: Review the final diff**

Run:

```bash
git status --short
git diff --stat
git diff --check
```

Expected: only plan-scoped implementation files plus pre-existing user changes remain; no `.superpowers/` artifacts appear.
