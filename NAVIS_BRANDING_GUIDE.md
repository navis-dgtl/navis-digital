# Navis Digital — Brand & Design System Guide

This document outlines the complete visual identity and design system for Navis Digital web applications. Use this as a reference to ensure brand consistency across all Navis projects.

---

## 🎨 Color Palette

### Core Colors (HSL Values)

| Name | HSL | Hex | Usage |
|------|-----|-----|-------|
| **Background** | `0 0% 11.4%` | `#1D1D1D` | Primary page background |
| **Card** | `0 0% 14%` | `#242424` | Cards, modals, elevated surfaces |
| **Primary (Cyan)** | `187 75% 76%` | `#99E9F2` | Accent color, icons, highlights, links |
| **Accent (Purple)** | `272 100% 65%` | `#A250FF` | Gradient endpoints, special highlights |
| **Foreground** | `0 0% 100%` | `#FFFFFF` | Primary text |
| **Muted** | `0 0% 20%` | `#333333` | Subtle backgrounds, borders |
| **Muted Foreground** | `0 0% 65%` | `#A6A6A6` | Secondary/body text |
| **Border** | `0 0% 20%` | `#333333` | Subtle dividers, card borders |

### CSS Variables (index.css)

```css
:root {
  /* Base colors */
  --background: 0 0% 11.4%;
  --foreground: 0 0% 100%;

  /* Card colors */
  --card: 0 0% 14%;
  --card-foreground: 0 0% 100%;

  /* Primary: Cyan */
  --primary: 187 75% 76%;
  --primary-foreground: 0 0% 11%;

  /* Secondary */
  --secondary: 0 0% 14%;
  --secondary-foreground: 0 0% 100%;

  /* Muted states */
  --muted: 0 0% 20%;
  --muted-foreground: 0 0% 65%;

  /* Accent: Purple */
  --accent: 272 100% 65%;
  --accent-foreground: 0 0% 100%;

  /* Borders and inputs */
  --border: 0 0% 20%;
  --input: 0 0% 20%;
  --ring: 187 75% 76%;

  /* Border radius */
  --radius: 0.75rem;
}
```

---

## 🌈 Gradients

### Primary Gradient (Cyan → Purple)
Used for button borders, decorative elements, and accent highlights.

```css
--gradient-primary: linear-gradient(135deg, hsl(187 75% 76%) 0%, hsl(272 100% 65%) 100%);
/* CSS: */ background: linear-gradient(135deg, #99E9F2 0%, #A250FF 100%);
/* Tailwind: */ bg-gradient-primary
```

### Hero Gradient
Subtle vertical gradient for hero sections and large backgrounds.

```css
--gradient-hero: linear-gradient(180deg, hsl(0 0% 11.4%) 0%, hsl(0 0% 14%) 100%);
/* CSS: */ background: linear-gradient(180deg, #1D1D1D 0%, #242424 100%);
/* Tailwind: */ bg-gradient-hero
```

---

## ✨ Glow Effects

Used sparingly on hover states and to create depth.

```css
/* Primary glow (purple + cyan) */
--glow-primary: 0 0 40px hsl(272 100% 65% / 0.4), 0 0 80px hsl(187 75% 76% / 0.2);

/* Accent glow (purple only) */
--glow-accent: 0 0 60px hsl(272 100% 65% / 0.4);

/* Cyan glow */
--glow-cyan: 0 0 60px hsl(187 75% 76% / 0.3);

/* Tailwind classes */
shadow-glow-primary
shadow-glow-accent
shadow-glow-cyan
```

---

## 🔤 Typography

### Font Stack
The design uses system fonts for optimal performance. If custom fonts are desired, consider:
- **Display/Headlines**: Inter, Manrope, or similar geometric sans-serif
- **Body**: System UI stack for readability

```css
font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
```

### Type Scale

| Element | Size | Weight | Color |
|---------|------|--------|-------|
| H1 (Hero) | `text-4xl` to `text-6xl` | `font-bold` | `text-foreground` (white) |
| H2 (Section) | `text-3xl` to `text-4xl` | `font-bold` | `text-foreground` (white) |
| H3 (Card title) | `text-xl` to `text-2xl` | `font-semibold` | `text-foreground` (white) |
| Body | `text-base` to `text-lg` | `font-normal` | `text-muted-foreground` (gray) |
| Small/Caption | `text-sm` | `font-normal` | `text-muted-foreground` (gray) |
| Accent text | Any size | `font-medium` | `text-primary` (cyan) |

---

## 🔘 Button Styles

### Primary Button
Dark background with gradient border, glow on hover.

```css
/* Base styles */
background: hsl(0 0% 11.4%); /* #1D1D1D */
border: 1px solid transparent;
background-image: linear-gradient(#1D1D1D, #1D1D1D), 
                  linear-gradient(135deg, #99E9F2, #A250FF);
background-origin: border-box;
background-clip: padding-box, border-box;
border-radius: 0.75rem;

/* Hover state */
box-shadow: 0 0 40px hsl(272 100% 65% / 0.4), 0 0 80px hsl(187 75% 76% / 0.2);
transform: scale(1.02);
transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
```

### Secondary Button
White/light border on dark background.

```css
background: hsl(0 0% 11.4%); /* #1D1D1D */
border: 1px solid rgba(255, 255, 255, 0.2);
border-radius: 0.75rem;

/* Hover state */
transform: scale(1.02);
border-color: rgba(255, 255, 255, 0.4);
```

---

## 📦 Card Pattern

The standard card pattern used throughout the design.

```css
/* Base card */
background: hsl(0 0% 14%); /* #242424 */
border: 1px solid hsl(0 0% 20%); /* subtle border */
border-radius: 0.75rem;
padding: 1.5rem to 2rem;

/* Hover state */
border-color: hsl(187 75% 76% / 0.5); /* cyan border */
transform: scale(1.02) or scale(1.05);
transition: all 0.3s ease;

/* Icon container inside cards */
background: hsl(187 75% 76% / 0.1); /* primary/10 */
/* Hover: */ background: hsl(187 75% 76% / 0.15); /* primary/15 */

/* Background decorative numbers (if used) */
color: hsl(187 75% 76% / 0.05); /* primary/5 */
/* Hover: */ color: hsl(187 75% 76% / 0.1); /* primary/10 */
```

---

## 🎬 Animations

### Allowed Animations
Keep animations subtle and professional.

| Animation | Usage | CSS/Tailwind |
|-----------|-------|--------------|
| Fade In | Page sections on scroll | `animate-fade-in` |
| Fade In Up | Content reveals | `animate-fade-in-up` |
| Hover Scale | Buttons, cards | `hover:scale-[1.02]` or `hover:scale-105` |

### Animation Keyframes

```css
@keyframes fade-in {
  0% { opacity: 0; transform: translateY(20px); }
  100% { opacity: 1; transform: translateY(0); }
}

@keyframes fade-in-up {
  0% { opacity: 0; transform: translateY(40px); }
  100% { opacity: 1; transform: translateY(0); }
}
```

### Transition Timing
```css
--transition-smooth: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
```

### ❌ Banned Animations
Avoid flashy effects that distract from content:
- Glow pulse animations
- Gradient shift animations
- Border dance animations
- Bounce/pulse effects

---

## 📐 Spacing & Layout

### Border Radius
```css
--radius: 0.75rem; /* 12px - default */
/* Variations: */
border-radius: var(--radius);         /* lg: 12px */
border-radius: calc(var(--radius) - 2px); /* md: 10px */
border-radius: calc(var(--radius) - 4px); /* sm: 8px */
```

### Container
```css
max-width: 1400px; /* 2xl breakpoint */
padding: 2rem;
margin: 0 auto;
```

### Section Spacing
- Vertical padding between sections: `py-16` to `py-24`
- Component gaps: `gap-6` to `gap-8`

---

## 🧩 Component Patterns

### Icon Containers
```css
/* Wrapper */
padding: 0.75rem; /* p-3 */
background: hsl(187 75% 76% / 0.1);
border-radius: 0.5rem; /* rounded-lg */

/* Icon */
color: hsl(187 75% 76%); /* text-primary */
width: 1.5rem; /* w-6 */
height: 1.5rem; /* h-6 */
```

### Text Hierarchy in Cards
```html
<div class="card">
  <h3 class="text-xl font-semibold text-foreground mb-2">Title</h3>
  <p class="text-muted-foreground">Description text goes here.</p>
</div>
```

### Badges/Tags
```css
background: hsl(187 75% 76% / 0.1);
color: hsl(187 75% 76%);
padding: 0.25rem 0.75rem;
border-radius: 9999px; /* rounded-full */
font-size: 0.875rem; /* text-sm */
```

---

## 🖼️ Image Styling

### Circular Avatar/Headshot
```css
width: 5rem; /* w-20 */
height: 5rem; /* h-20 */
border-radius: 9999px; /* rounded-full */
border: 2px solid hsl(187 75% 76% / 0.3);
object-fit: cover;
object-position: center;
overflow: hidden;
```

### Card Images
```css
border-radius: 0.5rem; /* rounded-lg */
overflow: hidden;
border: 1px solid hsl(0 0% 20%); /* border-border */
```

---

## 📱 Responsive Breakpoints

Standard Tailwind breakpoints:
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px
- `2xl`: 1400px (container max-width)

---

## ⚡ Quick Reference

### Tailwind Config Additions

```typescript
// tailwind.config.ts
{
  extend: {
    colors: {
      border: "hsl(var(--border))",
      background: "hsl(var(--background))",
      foreground: "hsl(var(--foreground))",
      primary: {
        DEFAULT: "hsl(var(--primary))",
        foreground: "hsl(var(--primary-foreground))",
      },
      secondary: {
        DEFAULT: "hsl(var(--secondary))",
        foreground: "hsl(var(--secondary-foreground))",
      },
      muted: {
        DEFAULT: "hsl(var(--muted))",
        foreground: "hsl(var(--muted-foreground))",
      },
      accent: {
        DEFAULT: "hsl(var(--accent))",
        foreground: "hsl(var(--accent-foreground))",
      },
      card: {
        DEFAULT: "hsl(var(--card))",
        foreground: "hsl(var(--card-foreground))",
      },
    },
    backgroundImage: {
      "gradient-primary": "linear-gradient(135deg, hsl(187 75% 76%) 0%, hsl(272 100% 65%) 100%)",
      "gradient-hero": "linear-gradient(180deg, hsl(0 0% 11.4%) 0%, hsl(0 0% 14%) 100%)",
    },
    boxShadow: {
      "glow-primary": "0 0 40px hsl(272 100% 65% / 0.4), 0 0 80px hsl(187 75% 76% / 0.2)",
      "glow-accent": "0 0 60px hsl(272 100% 65% / 0.4)",
      "glow-cyan": "0 0 60px hsl(187 75% 76% / 0.3)",
    },
  }
}
```

---

## 🎯 Design Philosophy

> **"Let the content speak. The design should enhance, not distract."**

- Clean, professional aesthetic inspired by high-end SaaS products
- Dark mode by default with subtle depth and layering
- Cyan primary accent used sparingly for maximum impact
- Purple accent reserved for gradient highlights only
- Animations are subtle and purposeful
- Consistent spacing and visual rhythm throughout

---

*Document generated from Navis Digital design system — January 2026*
