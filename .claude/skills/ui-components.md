# Skill: UI Components

## Design Aesthetic
"Handmade digital" — everything looks like it was sketched on graph paper and taped together. Wiggly borders, hatch shadows, washi tape, rotated elements. Snappy (not smooth) interactions. ALL CAPS headlines with marker-style weight.

---

## Core Custom CSS Classes

These are defined in `globals.css` and must never be replaced with Tailwind utilities:

```css
/* Full-page grid texture — applied to <body> */
.graph-paper {
    background-color: #fafaf5;
    background-image: linear-gradient(#e2e3de 1px, transparent 1px),
                      linear-gradient(90deg, #e2e3de 1px, transparent 1px);
    background-size: 20px 20px;
}

/* Hand-drawn organic border — replaces standard border-radius on all cards/buttons */
.wiggly-border {
    border: 2px solid #1a1c19;
    border-radius: 255px 15px 225px 15px/15px 225px 15px 255px;
}

/* Hatched offset shadow behind an element — gives "lifted off paper" feel */
.marker-shadow {
    position: relative;
}
.marker-shadow::after {
    content: '';
    position: absolute;
    inset: 0;
    z-index: -1;
    transform: translate(6px, 6px);
    background: repeating-linear-gradient(45deg, transparent, transparent 2px, #1a1c19 3px);
    opacity: 0.15;
    border-radius: inherit;
}

/* Translucent tape strip decoration */
.washi-tape {
    background-color: #e2dfde;
    opacity: 0.8;
    box-shadow: 1px 1px 2px rgba(0,0,0,0.1);
}

/* Hover scribble — dotted yellow fill on hover */
.scribble-hover:hover {
    background-image: radial-gradient(#d2f000 70%, transparent 70%);
    background-size: 10px 10px;
}
```

---

## Tailwind Config (exact)

```ts
// tailwind.config.ts
import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: "class",
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "on-secondary-container": "#636262",
        "error-container": "#ffdad6",
        "on-surface": "#1a1c19",
        "on-surface-variant": "#454933",
        "surface-container-highest": "#e2e3de",
        "inverse-on-surface": "#f1f1ec",
        "primary-fixed-dim": "#b8d300",
        "secondary-fixed-dim": "#c8c6c5",
        "surface-bright": "#fafaf5",
        "secondary": "#5f5e5e",
        "surface-container": "#eeeee9",
        "on-secondary-fixed": "#1b1c1c",
        "on-primary-fixed-variant": "#414c00",
        "surface": "#fafaf5",
        "outline": "#767960",
        "tertiary-fixed-dim": "#b1c5ff",
        "surface-container-high": "#e8e8e4",
        "on-background": "#1a1c19",
        "background": "#fafaf5",
        "tertiary-container": "#d9e1ff",
        "error": "#ba1a1a",
        "on-tertiary": "#ffffff",
        "secondary-fixed": "#e5e2e1",
        "surface-container-lowest": "#ffffff",
        "tertiary-fixed": "#dae2ff",
        "primary-container": "#d2f000",
        "on-error": "#ffffff",
        "on-error-container": "#93000a",
        "on-tertiary-fixed": "#001946",
        "primary": "#576500",
        "surface-dim": "#dadad6",
        "on-tertiary-fixed-variant": "#00419e",
        "on-primary-container": "#5c6b00",
        "on-tertiary-container": "#2c5fc3",
        "on-secondary-fixed-variant": "#474746",
        "secondary-container": "#e2dfde",
        "on-primary-fixed": "#191e00",
        "outline-variant": "#c6c9ac",
        "tertiary": "#2559bd",
        "on-secondary": "#ffffff",
        "surface-container-low": "#f4f4ef",
        "surface-variant": "#e2e3de",
        "inverse-primary": "#b8d300",
        "on-primary": "#ffffff",
        "surface-tint": "#576500",
        "inverse-surface": "#2f312e",
        "primary-fixed": "#d2f001",
      },
      fontFamily: {
        headline: ["Epilogue", "sans-serif"],
        handwritten: ["Architects Daughter", "cursive"],
        body: ["Be Vietnam Pro", "sans-serif"],
      },
    },
  },
  plugins: [],
}
export default config
```

---

## Icons: Material Symbols Outlined

**NOT Lucide. NOT Heroicons.** This design uses Material Symbols Outlined exclusively.

### Font load (in `app/layout.tsx`)
```tsx
// Add to Next.js <head> via next/font or direct link in layout
// In globals.css @import or layout metadata:
<link
  href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
  rel="stylesheet"
/>
```

### Usage
```tsx
// Outlined (default FILL 0)
<span className="material-symbols-outlined">menu</span>

// Filled (override FILL to 1 via inline style)
<span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
  grid_view
</span>

// Sizing via text-* or explicit size classes
<span className="material-symbols-outlined text-3xl">warning</span>
<span className="material-symbols-outlined text-6xl">terminal</span>
```

### Common icons used in this project
```
menu          → hamburger nav
grid_view     → dashboard (FILL 1 when active)
architecture  → blueprints
description   → reports
priority_high → void/alerts
warning       → error/overheating callout
account_tree  → reference log / tree structures
terminal      → code/logic diagram placeholder
add_circle    → add to cart
```

---

## Typography System

```tsx
// Headline — Epilogue, font-black, uppercase, tracking-tighter
// Used for: page title, section headers, button labels
<h1 className="font-headline font-black uppercase tracking-tighter text-8xl italic leading-[0.9]">
  FAILURE BOX
</h1>

// Handwritten — Architects Daughter
// Used for: annotations, sub-copy, labels, prices, captions
<p className="font-handwritten text-2xl text-on-secondary-container -rotate-1">
  Look, engineering isn't about the shiny render.
</p>

// Body — Be Vietnam Pro (default on <body>)
// Used for: navigation links, UI chrome, metadata
<span className="font-body text-sm text-on-surface">
  © 2024 FAILURE_ARCHIVE.RAW
</span>
```

---

## Card Pattern

```tsx
// Standard product/content card
<div className="relative group">
  {/* Washi tape decoration */}
  <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-32 h-8 washi-tape -rotate-2 z-20" />

  {/* Card body: slight rotation, hover counter-rotates */}
  <div className="bg-surface p-4 wiggly-border marker-shadow rotate-1 group-hover:-rotate-1 transition-transform">
    {/* Image area */}
    <div className="aspect-square overflow-hidden mb-6 wiggly-border">
      <img src="..." alt="..." className="w-full h-full object-cover" />
    </div>

    <h4 className="font-headline font-black text-2xl uppercase mb-2">CARD TITLE</h4>
    <p className="font-handwritten text-lg mb-6">Short handwritten descriptor.</p>

    <div className="flex justify-between items-center">
      {/* Price badge — tertiary color, rotated */}
      <div className="font-handwritten text-2xl font-bold text-tertiary bg-[#d9e1ff] px-3 py-1 rotate-3 border-2 border-tertiary border-dotted">
        $89.00
      </div>
      <span className="material-symbols-outlined cursor-pointer hover:scale-125">add_circle</span>
    </div>
  </div>
</div>
```

---

## Button Patterns

```tsx
// Primary CTA — wiggly border, offset shadow group
<div className="relative inline-block group">
  <button className="bg-surface relative z-10 font-headline font-black text-xl px-10 py-5 wiggly-border hover:bg-primary-container transition-none active:scale-95">
    INITIALIZE FIRST KIT
  </button>
  {/* Layered shadow */}
  <div className="absolute inset-0 bg-on-surface translate-x-2 translate-y-2 -z-10 wiggly-border opacity-10 group-hover:opacity-100 transition-none" />
</div>

// Nav button (header)
<button className="font-headline font-black uppercase text-primary border-2 border-on-surface px-4 py-1 active:rotate-1 duration-75">
  LOG
</button>

// Dark background CTA (newsletter section)
<button className="bg-primary-container text-on-surface font-headline font-black px-8 py-3 wiggly-border hover:scale-105 transition-none active:scale-95">
  TRANSMIT
</button>

// Nav link — active state
<a className="font-headline font-black uppercase text-primary underline decoration-wavy transition-none" href="#">
  DASHBOARD
</a>

// Nav link — default hover
<a className="font-headline font-black uppercase text-on-surface hover:bg-primary-container hover:text-on-surface transition-none px-2" href="#">
  BLUEPRINTS
</a>
```

---

## Section Callout / Warning Badge

```tsx
// Rotated warning badge pinned to corner of a card/section
<div className="absolute -top-6 -right-6 w-32 h-32 flex flex-col items-center justify-center font-handwritten text-error rotate-12 border-4 border-error border-dashed p-2">
  <span className="material-symbols-outlined text-4xl">warning</span>
  <span className="text-sm font-bold">OVERHEATING</span>
</div>
```

---

## Dark Section (Inverted)

```tsx
// Full-width dark block — newsletter, CTA banner
<div className="bg-on-surface text-surface p-12 wiggly-border relative overflow-hidden marker-shadow">
  {/* Coffee ring decorations */}
  <div className="absolute -bottom-10 -left-10 w-40 h-40 border-[6px] border-surface opacity-10 rounded-full" />
  <div className="absolute -bottom-8 -left-8 w-32 h-32 border-[4px] border-surface opacity-5 rounded-full" />

  {/* Content */}
  <h3 className="font-headline font-black text-4xl uppercase mb-4 tracking-tighter italic text-surface">
    JOIN THE LAB
  </h3>
</div>
```

---

## Bottom Nav Bar

```tsx
<nav className="fixed bottom-0 left-0 w-full flex justify-around items-center h-20 pb-safe bg-surface-variant z-50 border-t-4 border-on-surface backdrop-blur-md shadow-[0_-4px_0_0_rgba(26,28,25,0.1)]">
  {/* Active tab */}
  <a className="flex flex-col items-center justify-center bg-primary-container text-on-surface -rotate-1 px-4 py-1 rounded-sm border-2 border-on-surface shadow-[2px_2px_0_0_#1a1c19]" href="#">
    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>grid_view</span>
    <span className="font-headline text-[10px] font-bold uppercase">DASHBOARD</span>
  </a>

  {/* Inactive tab */}
  <a className="flex flex-col items-center justify-center text-on-surface opacity-70 hover:opacity-100 hover:scale-105 transition-transform" href="#">
    <span className="material-symbols-outlined">architecture</span>
    <span className="font-headline text-[10px] font-bold uppercase">BLUEPRINTS</span>
  </a>
</nav>
```

---

## Layout Skeleton

```tsx
// app/layout.tsx body classes
<body className="graph-paper text-on-surface font-body selection:bg-primary-container">

// Section wrapper — standard max-width
<section className="max-w-7xl mx-auto px-6 py-20">

// Narrow section (forms, centered content)
<section className="max-w-4xl mx-auto px-6 py-24">

// Sticky header
<header className="bg-surface border-b-[3px] border-on-surface sticky top-0 z-[100]">
  <div className="flex justify-between items-center w-full px-6 py-4 h-20">
```

---

## Color Quick Reference

| Token | Hex | Use |
|---|---|---|
| `on-surface` | #1a1c19 | Default text, borders, icon strokes |
| `surface` | #fafaf5 | Card backgrounds, page base |
| `primary` | #576500 | Active nav links, icon accents |
| `primary-container` | #d2f000 | CTA hover, selection highlight, active nav chip |
| `error` | #ba1a1a | Destructive labels, warning badges, strikethrough |
| `tertiary` | #2559bd | Price badges, reference links |
| `tertiary-container` | #d9e1ff | Price badge background |
| `on-secondary-container` | #636262 | Subdued body copy |
| `surface-container-low` | #f4f4ef | Tinted section backgrounds |
