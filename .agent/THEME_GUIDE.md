# Reelief Foundation — Sky Blue + White Theme Guide

## 🎨 Color Palette

### Primary Colors (Sky Blue)
| Role            | Color Name        | Hex/Tailwind | Usage                                      |
|-----------------|-------------------|--------------|---------------------------------------------|
| Primary         | Sky Blue          | `#0EA5E9` / `sky-500`   | Buttons, links, active states              |
| Primary Dark    | Deep Sky          | `#0284C7` / `sky-600`   | Hover states, headings                     |
| Primary Light   | Soft Sky          | `#BAE6FD` / `sky-200`   | Backgrounds, card tints                    |
| Primary Pale    | Ice Blue          | `#F0F9FF` / `sky-50`    | Section backgrounds, hero overlays         |

### Accent Colors (Orange - Limited Use)
| Role            | Color Name        | Hex/Tailwind | Usage                                      |
|-----------------|-------------------|--------------|---------------------------------------------|
| Accent          | Warm Orange       | `#F97316` / `orange-500` | **CTAs ONLY** (Donate Now), highlights    |
| Accent Hover    | Deep Orange       | `#EA6E0B` / `orange-600` | CTA hover states                          |

### Text Colors
| Role            | Color Name        | Hex/Tailwind | Usage                                      |
|-----------------|-------------------|--------------|---------------------------------------------|
| Text Primary    | Slate Dark        | `#0F172A` / `slate-900`  | Headings                                   |
| Text Secondary  | Slate Mid         | `#475569` / `slate-600`  | Body text, descriptions                    |
| Text Muted      | Slate Light       | `#94A3B8` / `slate-400`  | Captions, meta text                        |

### Neutral Colors
| Role            | Color Name        | Hex/Tailwind | Usage                                      |
|-----------------|-------------------|--------------|---------------------------------------------|
| White           | Pure White        | `#FFFFFF` / `white`      | Cards, navbar background                   |
| Border          | Sky Border        | `#E0F2FE` / `sky-100`    | Card borders, dividers                     |
| Footer BG       | Deep Navy         | `#0C1A2E` / `slate-900`  | Footer (kept for contrast)                 |

---

## 🎯 Color Usage Rules

### ✅ Where Orange Stays (Keep It!)
Orange (`#F97316` / `orange-500`) should **ONLY** be used for:
- ✅ "Donate Now" CTA buttons (primary action)
- ✅ Key stat numbers (10k+, 50k+, 500+)
- ✅ "Learn More →" links on service cards
- ✅ Highlighted/active card borders on hover

### 🔵 Where Sky Blue Goes
Sky Blue (`#0EA5E9` / `sky-500`) should be used for:
- ✅ All other buttons and CTAs
- ✅ Navigation links (hover state)
- ✅ Brand accent in logo
- ✅ Icon backgrounds
- ✅ Active states and highlights
- ✅ Section dividers and accents

### Visual Hierarchy
**Sky Blue = Trust/Brand Identity**  
**Orange = Action/Urgency (Donations Only)**

---

## 📝 Typography

### Recommended Fonts
- **Headings**: `DM Serif Display` — warm, authoritative, health-professional feel
- **Body**: `DM Sans` — clean, modern, highly readable

### Import
```html
<link href="https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:wght@300;400;500;600;700&display=swap" rel="stylesheet">
```

### Tailwind Config
```js
fontFamily: {
  serif: ['DM Serif Display', 'serif'],
  sans: ['DM Sans', 'sans-serif'],
}
```

---

## 🏗️ Section-by-Section Color Map

### 1. Navbar (Header)
```tsx
- Background: white with sky-500 bottom border on scroll
- Logo text "Foundation": sky-500
- Nav links: slate-700, hover:sky-500
- "Donate Now" button: orange-500 bg, white text
```

### 2. Hero Section
```tsx
- Overlay gradient: from-sky-950/85 via-sky-900/60 to-sky-800/20
- Tagline pill: bg-sky-500/20 border-sky-300, white text
- Headline: white + orange-400 italic accent
- CTA primary (Donate): orange-500 bg
- CTA secondary (Volunteer): white border, hover:bg-white hover:text-slate-900
- Trust badges: sky-400 accents
```

### 3. Stats Section
```tsx
- Background: bg-sky-50 (Ice Blue)
- Card background: bg-white
- Card border: border-sky-100
- Numbers: text-sky-500
- Icon circles: bg-sky-100 text-sky-500
- Labels: text-slate-700
- Subtext: text-slate-500
```

### 4. Focus Areas (Services)
```tsx
- Background: bg-white
- Card background: bg-white
- Card border: border-neutral-200
- Card hover: border-t-4 border-sky-500
- Icon background: bg-sky-100
- Icon color: text-sky-500
- Title: text-slate-900, hover:text-sky-500
- Description: text-slate-600
- "Learn More" link: text-sky-500 (NOT orange)
```

### 5. Gallery Section
```tsx
- Background: bg-sky-50
- Title: text-slate-900
- Subtitle: text-sky-600
- Image borders: border-sky-200
```

### 6. CTA Banner (Call to Action)
```tsx
- Gradient background: from-sky-600 via-sky-500 to-cyan-400
- Overlay: bg-black/20
- Heading: text-white
- Description: text-white/90
- "Donate Now" button: bg-white text-orange-600 hover:bg-orange-50
- "Volunteer Today" button: border-white/80 text-white hover:bg-white/10
- Trust line: text-white/80
```

### 7. Footer
```tsx
- Background: bg-slate-900 (Deep Navy)
- Headings: text-white
- Links: text-neutral-300 hover:text-sky-400
- Social icons: border-white/20 hover:bg-sky-500 hover:border-sky-500
- Bottom bar gradient: from-sky-100 via-sky-200 to-cyan-100
- Bottom bar text: text-slate-900
```

---

## 🎨 Gradient Combinations

### Sky Blue Gradients
```css
/* Hero overlay */
bg-gradient-to-r from-sky-950/85 via-sky-900/60 to-sky-800/20

/* CTA Banner */
bg-gradient-to-r from-sky-600 via-sky-500 to-cyan-400

/* Footer bottom bar */
bg-gradient-to-r from-sky-100 via-sky-200 to-cyan-100

/* Section backgrounds */
bg-gradient-to-br from-sky-50 via-white to-sky-100
```

---

## 🚫 What NOT to Use

### ❌ Avoid These Colors
- ❌ Purple/Indigo gradients (old theme)
- ❌ Pink/magenta accents
- ❌ Warm orange gradients (except Donate CTA)
- ❌ Multiple accent colors competing with sky blue

### ❌ Don't Use Orange For
- ❌ Regular navigation links
- ❌ Section headings
- ❌ Icon backgrounds
- ❌ General hover states
- ❌ "Learn More" links (use sky blue instead)

---

## ✅ Quick Reference Checklist

When creating/updating components, ask:

1. **Is this a donation-related CTA?**
   - ✅ Yes → Use orange-500
   - ❌ No → Use sky-500

2. **Is this a stat number or key metric?**
   - ✅ Yes → Use orange-500
   - ❌ No → Use sky-500

3. **Is this a brand element (logo, nav, icons)?**
   - ✅ Yes → Use sky-500

4. **Is this a hover state?**
   - ✅ Donation button → orange-600
   - ✅ Other buttons/links → sky-600

5. **Is this a background?**
   - ✅ Light section → sky-50
   - ✅ Card → white with sky-100 border
   - ✅ Footer → slate-900

---

## 📦 Tailwind Config Extension

Add to `tailwind.config.js`:

```js
module.exports = {
  theme: {
    extend: {
      colors: {
        // Sky Blue Theme
        'brand-primary': '#0EA5E9',
        'brand-primary-dark': '#0284C7',
        'brand-primary-light': '#BAE6FD',
        'brand-primary-pale': '#F0F9FF',
        
        // Orange Accent (Limited Use)
        'brand-accent': '#F97316',
        'brand-accent-dark': '#EA6E0B',
      },
      fontFamily: {
        serif: ['DM Serif Display', 'serif'],
        sans: ['DM Sans', 'sans-serif'],
      },
    },
  },
}
```

---

## 🎯 Component Examples

### Button Variants

```tsx
// Primary CTA (Donate)
<button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full font-semibold shadow-lg transition-all hover:scale-105">
  Donate Now
</button>

// Secondary CTA (General)
<button className="bg-sky-500 hover:bg-sky-600 text-white px-8 py-3 rounded-full font-semibold shadow-lg transition-all hover:scale-105">
  Learn More
</button>

// Outline CTA
<button className="border-2 border-sky-500 text-sky-500 hover:bg-sky-500 hover:text-white px-8 py-3 rounded-full font-semibold transition-all">
  Get Involved
</button>
```

### Card Variants

```tsx
// Service Card
<div className="bg-white border border-neutral-200 hover:border-t-4 hover:border-sky-500 rounded-2xl p-8 transition-all">
  <div className="bg-sky-100 text-sky-500 w-16 h-16 rounded-full flex items-center justify-center mb-4">
    <Icon size={32} />
  </div>
  <h3 className="text-xl font-semibold text-slate-900 hover:text-sky-500">Title</h3>
  <p className="text-slate-600">Description</p>
  <a href="#" className="text-sky-500 hover:text-sky-600">Learn More →</a>
</div>

// Stat Card
<div className="bg-white border border-sky-100 rounded-2xl p-10 shadow-lg">
  <div className="bg-sky-100 text-sky-500 w-16 h-16 rounded-full flex items-center justify-center mb-4">
    <Icon size={32} />
  </div>
  <span className="text-5xl font-bold text-orange-500">10k+</span>
  <p className="text-lg font-semibold text-slate-800">Lives Impacted</p>
  <p className="text-sm text-slate-600">Since 2010</p>
</div>
```

---

## 📌 Notes

- **Consistency is key**: Always use sky blue for brand elements
- **Orange is precious**: Reserve it for high-priority actions (donations)
- **Accessibility**: Ensure text contrast meets WCAG AA standards
- **Mobile**: Test all color combinations on mobile devices
- **Dark mode**: Footer uses slate-900 for strong contrast

---

**Last Updated**: 2026-02-17  
**Version**: 1.0  
**Theme**: Sky Blue + White with Orange Accents
