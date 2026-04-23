# Skill: Animations

## Core Philosophy: Snappy, Not Smooth

This design uses **`transition-none`** as the default. Interactions are instant — the element jumps to its new state. This gives a handmade, mechanical quality that matches the sketch aesthetic.

**Do not add Framer Motion or GSAP.** All motion in this design is CSS-only via Tailwind utilities.

---

## Interaction Patterns

### Active (Press) State
```tsx
// Scale down on press — confirms click without transition
active:scale-95

// Rotate on press — playful tilt
active:rotate-1
duration-75  // only exception: 75ms allowed for press feel
```

### Hover State
```tsx
// Scale up (icon add-to-cart)
hover:scale-125

// Counter-rotate card on hover
rotate-1 group-hover:-rotate-1

// Opacity reveal
opacity-70 hover:opacity-100

// Scale up (inactive nav item)
hover:scale-105
```

### No-transition Hover (most common)
```tsx
// Instant background swap — no fade
hover:bg-primary-container transition-none

// Instant color swap
hover:text-on-surface transition-none
```

---

## Card Rotation Pattern

Every card has a starting rotation that reverses slightly on hover:

```tsx
// Slight CW rotation, CCW on hover
<div className="rotate-1 group-hover:-rotate-1 transition-transform">

// CCW rotation, no rotation on hover
<div className="-rotate-2 group-hover:rotate-0 transition-transform">

// Larger CW rotation, smaller on hover
<div className="rotate-3 group-hover:rotate-1 transition-transform">
```

Use `transition-transform` (not `transition`) when cards need smooth rotation — it's the **only place** smooth transition is acceptable in this design.

---

## Static Decorative Rotations

Elements that are permanently rotated (no interaction):

```tsx
// Version badge/annotation above hero
<span className="absolute -top-12 -left-8 -rotate-6 font-handwritten">v.0.4.2-ALPHA</span>

// Sub-headline slight tilt
<p className="font-handwritten -rotate-1">Look, engineering isn't about...</p>

// Warning callout badge
<div className="rotate-12 border-4 border-error border-dashed">...</div>

// Washi tape strip
<div className="washi-tape -rotate-2" />
<div className="washi-tape rotate-6" />
<div className="washi-tape -rotate-12" />

// Price badge
<div className="rotate-3 border-dotted">$89.00</div>
<div className="-rotate-2 border-dotted">$124.50</div>
<div className="rotate-6 border-dotted">$55.00</div>

// Footer badge
<div className="-rotate-2">REJECT_PERFECTION</div>
```

---

## Header Scroll Effect

The header uses a graph-paper texture URL for its background — not a solid color. On scroll it remains sticky but the border doubles:

```tsx
// Sticky header — no scroll JS needed, CSS sticky handles it
<header className="sticky top-0 z-[100] bg-surface border-b-[3px] border-on-surface border-b-4 border-double">
```

If a scroll-based backdrop blur is needed, use CSS `@supports` or a minimal `useEffect` — keep it to a single state toggle, no spring physics:

```tsx
"use client"
import { useEffect, useState } from "react"

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 48)
    window.addEventListener("scroll", handler, { passive: true })
    return () => window.removeEventListener("scroll", handler)
  }, [])

  return (
    <header className={`sticky top-0 z-[100] border-b-[3px] border-on-surface transition-none ${
      scrolled ? "bg-surface/90 backdrop-blur" : "bg-surface"
    }`}>
```

---

## Hover Shadow Depth (group pattern)

Cards use a `group` wrapper so the offset shadow layer reveals on hover:

```tsx
<div className="relative inline-block group">
  {/* Foreground: full opacity */}
  <button className="relative z-10 bg-surface wiggly-border transition-none active:scale-95">
    LABEL
  </button>
  {/* Shadow layer: faint at rest, solid on hover */}
  <div className="absolute inset-0 -z-10 bg-on-surface translate-x-2 translate-y-2 wiggly-border opacity-10 group-hover:opacity-100 transition-none" />
</div>
```

---

## Icon Interaction

```tsx
// Add-to-cart icon — grows on hover
<span className="material-symbols-outlined cursor-pointer hover:scale-125">
  add_circle
</span>

// Menu icon — slight tilt on active
<span className="material-symbols-outlined cursor-pointer active:rotate-1">
  menu
</span>
```

---

## Background Doodle Opacity

Decorative images in the background use CSS rotation and opacity only — no JS:

```tsx
<div className="absolute top-20 -left-10 opacity-20 rotate-12 pointer-events-none w-64">
  <img src="..." alt="" className="w-full" />
</div>

<div className="absolute top-[40%] -right-20 opacity-20 -rotate-6 pointer-events-none w-80">
  <img src="..." alt="" className="w-full" />
</div>
```

---

## What NOT to Do

- No `framer-motion` `<motion.div>` wrappers
- No `animate-spin`, `animate-bounce`, `animate-pulse` (except intentional loading states)
- No `transition-all` — too broad, creates janky combined transitions
- No `ease-in-out` or `duration-300+` except `transition-transform` on cards
- No scroll-linked parallax or JS-driven position values
- No `opacity-0 → opacity-100` fade-in reveals (the design has no entrance animations)
