# Portfolio Website - Project Documentation

## 1. Project Overview

This is a **Next.js 16** portfolio website for **Aditya Chinchakar**, a Senior Product Designer & Engineer specializing in AI, Design Systems, and Accessibility (WCAG 2.2). The site showcases his work, skills, and professional experience as the founder of Aulys.

### Key Technologies
- **Framework**: Next.js 16.1.6 (App Router)
- **UI Library**: React 19.2.3
- **Styling**: Tailwind CSS 4 with custom theme
- **Animations**: Framer Motion 12.34.0, GSAP 3.14.2
- **Smooth Scrolling**: @studio-freight/react-lenis 0.0.47
- **Icons**: Lucide React 0.563.0
- **Testing**: Playwright 1.58.2, Axe-core 4.11.1
- **Type Safety**: TypeScript 5

---

## 2. Project Structure

```
Portfolio Website/
├── src/
│   ├── app/
│   │   ├── globals.css          # Global styles, Tailwind config, animations
│   │   ├── layout.tsx            # Root layout with fonts, smooth scroll, header/footer
│   │   ├── page.tsx              # Home page - composition of all sections
│   │   ├── work/
│   │   │   └── page.tsx          # Work index page with project list
│   ├── components/
│   │   ├── home/                 # Home page sections
│   │   │   ├── hero.tsx          # Hero with Designer/Engineer toggle
│   │   │   ├── experience.tsx    # Work experience grid
│   │   │   ├── aulys-showcase.tsx
│   │   │   ├── simplifai-showcase.tsx
│   │   │   ├── social-proof.tsx
│   │   │   ├── testimonials.tsx
│   │   │   ├── component-lab.tsx
│   │   │   ├── selected-work.tsx
│   │   │   ├── skills.tsx
│   │   │   ├── about.tsx
│   │   │   └── contact.tsx
│   │   ├── layout/               # Layout components
│   │   │   ├── header.tsx        # Site header
│   │   │   ├── footer.tsx        # Site footer
│   │   │   ├── smooth-scroll.tsx # Lenis smooth scroll wrapper
│   │   │   └── motion-section.tsx # Framer Motion wrapper for sections
│   │   ├── case-studies/         # Case study components
│   │   │   ├── aulys/
│   │   │   ├── simplifai/
│   │   │   └── simplifai-design-system/
│   │   └── ui/                   # Reusable UI components
│   │       ├── button.tsx
│   │       ├── card.tsx
│   │       └── text-reveal.tsx
│   └── lib/
│       └── utils.ts              # cn() utility for className merging
├── tests/
│   ├── home.spec.ts              # Home page E2E tests
│   └── accessibility.spec.ts     # WCAG accessibility tests
├── public/                       # Static assets
├── package.json
├── playwright.config.ts
├── tsconfig.json
└── tailwind.config (via CSS)
```

---

## 3. Design System

### Color Palette
| Token | Value | Usage |
|-------|-------|-------|
| `--color-background` | `#fafafa` (Zinc-50) | Page background |
| `--color-foreground` | `#27272a` (Zinc-800) | Body text |
| `--color-heading` | `#09090b` (Zinc-950) | Headings |
| `--color-primary` | `#09090b` (Zinc-950) | Primary elements |
| `--color-secondary` | `#f4f4f5` (Zinc-100) | Secondary backgrounds |
| `--color-muted-foreground` | `#71717a` (Zinc-500) | Muted text |
| `--color-accent` | `#2563eb` (Blue-600) | Accent/CTA |
| `--color-border` | `#e4e4e7` (Zinc-200) | Borders |

### Typography
- **Headings**: Inter (--font-heading)
- **Body**: Inter (--font-sans)
- **Code/Mono**: JetBrains Mono (--font-mono)

### Animations
- Custom `@keyframes`: `fade-in`, `slide-up`, `marquee`, `marquee-reverse`
- Lenis smooth scroll for premium scroll feel
- Framer Motion for section reveals with staggered delays

---

## 4. Page Structure

### Home Page (`/`)
Composed of these sections in order:
1. **Hero** - Interactive Designer/Engineer toggle
2. **Aulys Showcase** - Featured project highlight
3. **Experience Grid** - Work history with metrics
4. **Social Proof** - Logos/trust indicators
5. **Simplifai Showcase** - Second featured project
6. **Testimonials** - Client/peer reviews
7. **Component Lab** - Design system showcase
8. **Selected Work** - Case study cards
9. **Skills** - Technical competencies
10. **About** - Personal background
11. **Contact** - CTA section

### Work Index (`/work`)
- Lists all projects with year, title, description, tags
- Animated entrance with Framer Motion

### Case Studies (Dynamic Routes)
- `/work/simplifai` - Simplifai Flow Automation case study
- `/work/aulys` - Aulys Accessibility case study
- `/work/simplifai-design-system` - Design system documentation

---

## 5. Key Components

### Layout Components
- **SmoothScroll**: Lenis wrapper for smooth scrolling
- **Header**: Navigation with site links
- **Footer**: Copyright and social links
- **MotionSection**: Reusable animation wrapper with `delay` prop

### UI Components
- **Button**: Custom button variants
- **Card**: Card container with styling
- **TextReveal**: Text reveal animation

---

## 6. Available Scripts

```bash
npm run dev      # Start development server (http://localhost:3000)
npm run build    # Build for production
npm run start   # Start production server
npm run lint    # Run ESLint
```

### Testing
```bash
npx playwright test           # Run all tests
npx playwright test --project=chromium  # Run specific browser
npx playwright show-report    # View HTML test report
```

---

## 7. Testing Strategy

### E2E Tests (`tests/home.spec.ts`)
- Title verification
- Hero section with Designer/Engineer toggle interaction
- Experience section visibility
- Work section with project cards
- About and Contact sections

### Accessibility Tests (`tests/accessibility.spec.ts`)
- Runs Axe-core on all pages
- Tests: Home, Work, Simplifai, Aulys, Simplifai Design System
- WCAG 2.1 AA compliance

---

## 8. Build & Deployment

- **Output**: Static export available in `dist/` folder
- **Deployment**: Configured for Vercel (`vercel.json`)
- **Environment**: `.env.local` for local variables

---

## 9. Important Implementation Details

### Fonts
Loaded via `next/font/google`:
- Inter (variable: `--font-inter`)
- Geist (variable: `--font-geist`)
- JetBrains Mono (variable: `--font-jetbrains-mono`)

### Metadata
```typescript
title: "Aditya Chinchakar | Product Design Engineer"
description: "Senior Product Designer & Engineer specializing in AI, Design Systems, and Accessibility (WCAG 2.2). Founder of Aulys."
```

### Utility Functions
- `cn()` - Merges Tailwind classes using clsx + tailwind-merge

---

## 10. Accessibility Considerations

- WCAG 2.2 compliance target
- Axe-core automated testing in CI
- Semantic HTML structure
- Proper heading hierarchy
- Keyboard navigation support
- ARIA labels where needed
