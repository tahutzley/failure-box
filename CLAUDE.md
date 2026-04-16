# Failure Box MVP — Landing Page

## Project Overview

An MVP landing page for **Failure Box** — a product/service centered on sharing, learning from, and destigmatizing failure. The goal is a single high-converting page that communicates value, builds credibility, and drives one primary CTA (sign-up or waitlist).

## Tech Stack

| Layer | Choice | Reason |
|-------|--------|--------|
| Framework | **Next.js 15** (App Router) | SEO, performance, easy deployment |
| Styling | **Tailwind CSS v4** | Utility-first, zero dead CSS |
| Components | **shadcn/ui** | Owned components, Radix accessibility |
| Animated components | **Magic UI** | Landing-page-ready animated sections |
| Icons | **Lucide React** | Clean, consistent, tree-shakeable |
| Animations | **Framer Motion** | Declarative, React-native scroll/entrance effects |
| Fonts | **Inter + Manrope** | Screen-optimized, modern startup aesthetic |
| Color palette | Neutral base + bold accent | See Design Tokens below |

## Repository References

- shadcn/ui: https://github.com/shadcn-ui/ui
- Magic UI: https://github.com/magicui-io/magic-ui
- Lucide: https://github.com/lucide-icons/lucide
- Framer Motion: https://github.com/framer/motion
- Tailwind CSS: https://github.com/tailwindlabs/tailwindcss
- Next.js SaaS starter reference: https://github.com/Blazity/next-saas-starter
- Landing page inspiration: https://github.com/PaulleDemon/awesome-landing-pages

## Design Tokens

```css
/* Typography */
--font-heading: 'Manrope', sans-serif;   /* 700-800 weight */
--font-body:    'Inter', sans-serif;      /* 400-500 weight */

/* Colors — adjust brand accent to match Failure Box identity */
--color-bg:         #0A0A0A;   /* near-black */
--color-surface:    #111111;
--color-border:     #1F1F1F;
--color-text:       #F5F5F5;
--color-muted:      #888888;
--color-accent:     #FF4D00;   /* bold orange — failure/energy */
--color-accent-alt: #FF8A4C;
```

## Page Sections (in order)

1. **Navbar** — logo + primary CTA button
2. **Hero** — headline, sub-headline, CTA, social proof number
3. **Problem** — empathy hook: why failure is mishandled
4. **Solution** — what Failure Box does differently
5. **Features** — 3-column icon+text feature grid
6. **Social Proof** — testimonials or early-user quotes
7. **FAQ** — 4-6 common objections as accordion
8. **CTA Banner** — final conversion push
9. **Footer** — minimal links + legal

## Conversion Principles

- Single primary CTA throughout (no competing goals)
- Mobile-first layout (83% of landing visits are mobile)
- Page load < 2s (keep animations opt-in, lazy-load below fold)
- High contrast text, generous whitespace
- Repeat CTA at hero, mid-page, and footer

## File Structure

```
Failure Box MVP/
├── CLAUDE.md
├── package.json
├── next.config.ts
├── tailwind.config.ts
├── app/
│   ├── layout.tsx       # fonts, metadata, global styles
│   ├── page.tsx         # assembles all sections
│   └── globals.css      # Tailwind base + design tokens
├── components/
│   ├── ui/              # shadcn/ui primitives (Button, Card, etc.)
│   ├── sections/        # Navbar, Hero, Problem, Solution, Features…
│   └── shared/          # AnimatedSection wrapper, SectionHeading, etc.
└── public/
    └── images/
```

## Commands

```bash
npm run dev      # start dev server
npm run build    # production build
npm run lint     # ESLint
```

## Skill Files

See `.claude/skills/` for domain-specific guidance:
- `ui-components.md` — component patterns and shadcn/ui usage
- `animations.md`    — Framer Motion scroll/entrance animation patterns
- `copywriting.md`   — Landing page copy structure and tone
