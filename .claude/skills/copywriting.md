# Skill: Copywriting

## Voice & Tone — Failure Box

The copy is written from the perspective of a **lab technician who finds beauty in entropy**. It's technically fluent, slightly unhinged, and deeply anti-perfectionist. The subtext is always: *you're safe here, broken things are good.*

| Attribute | Description |
|---|---|
| **Honest** | Names failure directly — no euphemisms like "learning opportunity" |
| **Nerdy-playful** | References engineering metaphors (tolerances, logic gates, entropy) |
| **Anti-hustle** | Rejects polish, celebrates the smoke and the rattle |
| **Direct** | Short declarative sentences. No adverbs. |
| **Slightly unhinged** | Willing to say something unexpected ("occasionally forgets how to add 1 + 1") |

---

## Typographic Voice Rules

```
Headlines:     ALL CAPS, font-headline (Epilogue), font-black, tracking-tighter
Annotations:   Sentence case, font-handwritten (Architects Daughter), -rotate-1 or -rotate-2
Body/UI:       Sentence case, font-body (Be Vietnam Pro)
Code refs:     UNDERSCORE_SNAKE_CASE (ENTROPY_001, FAILURE_ARCHIVE.RAW, REJECT_PERFECTION)
```

---

## Headline Patterns (from the design)

**Formula: Bold declarative → subverted with qualifier**
- `Nothing is Perfect. That's the Point.`
- `Choose Your Struggle`
- `Theory of Applied Chaos`
- `Join the Lab`

**Emphasis technique:** One word gets `bg-primary-container px-4 py-1 -rotate-1 inline-block` treatment (yellow highlight, slightly rotated):
```tsx
<span className="bg-primary-container px-4 py-1 -rotate-1 inline-block">Perfect</span>
```

**Error word technique:** Key tension word in `text-error`:
```tsx
Choose Your <span className="text-error">Struggle</span>
```

---

## Handwritten Annotation Copy

These sit *around* or *below* the headline, in `font-handwritten`, and feel like someone scrawled them in the margin:

```
"Look, engineering isn't about the shiny render. It's about the smoke, the rattles, 
 and the glorious moment something finally breaks so you can fix it."

"Caution: Assembly may require high caffeine levels and occasional swearing."

"Receive weekly error logs and discarded blueprints in your inbox."
```

**Format**: 1-2 sentences, conversational, slight negative rotation (`-rotate-1`), subdued color (`text-on-secondary-container`).

---

## Product/Section Description Pattern

Descriptions are short and strange — they describe dysfunction as a feature:

```
"A 4-DOF manipulator that suffers from severe anxiety and jittery servos."
"A structural engineering nightmare designed to topple at the slightest draft."
"An XOR-heavy computing kit that occasionally forgets how to add 1 + 1."
```

**Formula**: `[Technical description] that [human flaw or absurd failure mode].`

---

## Strikethrough & Correction Pattern

Used to show self-editing voice — the writer crosses out the obvious word and replaces it:

```tsx
<span className="line-through decoration-error decoration-2">survive</span> understand
```

Communicates: "we started to say the cliché thing, but we caught ourselves."

---

## Version/Status Labels

Technical metadata as decorative annotation (positioned absolutely near headlines):

```tsx
<span className="absolute -top-12 -left-8 font-handwritten text-tertiary -rotate-6 text-xl">
  v.0.4.2-ALPHA
</span>
```

Other patterns: `BETA`, `DRAFT_001`, `REV_C`, `UNSTABLE_BUILD`, `DEPRECATED`

---

## Error/Warning Copy

Error states use `text-error` (#ba1a1a) and the dashed badge component:

```tsx
<div className="rotate-12 border-4 border-error border-dashed font-handwritten text-error">
  <span className="material-symbols-outlined">warning</span>
  OVERHEATING
</div>
```

Tone: matter-of-fact, not alarming. As if overheating is expected and normal.

---

## Reference Log Pattern

Internal cross-references styled as technical documentation:

```tsx
<div className="flex items-center gap-4 text-tertiary font-handwritten italic">
  <span className="material-symbols-outlined">account_tree</span>
  Reference Log: ENTROPY_001
</div>
```

---

## CTA Button Copy Rules

| Avoid | Use instead |
|---|---|
| "Sign Up" | "INITIALIZE FIRST KIT" |
| "Subscribe" | "TRANSMIT" |
| "Learn More" | "OPEN BLUEPRINT" |
| "Buy Now" | "ACCEPT THE CHAOS" |
| "Submit" | "LOG FAILURE" |
| "Get Started" | "BEGIN EXPERIMENT" |

Button labels are ALL CAPS, imperative, slightly technical or dramatic.

---

## Footer Copy Pattern

Footer uses `font-handwritten italic` in small size, with `hover:line-through hover:text-error` on links:

```
© 2024 FAILURE_ARCHIVE.RAW

MANUAL    ERROR_LOGS    SYSTEM_VOID

[badge: REJECT_PERFECTION]  ← -rotate-2, bg-error, text-error-container
```

Links use `SNAKE_CASE` or single words, not normal nav language.

---

## SEO / Meta (Next.js)

```tsx
// app/layout.tsx
export const metadata = {
  title: "FAILURE BOX | THE LIVING DOCUMENT",
  description:
    "Engineering kits designed to fail — on purpose. Chaos modules with intentional flaws so you learn why things break, not just how they work.",
  openGraph: {
    title: "FAILURE BOX",
    description: "Nothing is Perfect. That's the Point.",
    images: ["/og-image.png"],
  },
}
```

---

## Reading Level Rule

Write at Grade 6-7 level. Short sentences. Active voice. No corporate fluff.
Use hemingwayapp.com to verify before finalizing copy.

Every paragraph should feel like it was typed on a mechanical keyboard at 2am.
