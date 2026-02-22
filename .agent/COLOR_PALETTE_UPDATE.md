# Color Palette Update Summary

## New Color Palette

The website has been updated to use a neutral gray color scheme:

### Color Codes
- **#F5F6F7** - `neutral-lightest` - Lightest gray (backgrounds, overlays)
- **#C1C4C8** - `neutral-light` - Medium-light gray (secondary text, borders)
- **#7B7F85** - `neutral-dark` - Medium-dark gray (body text, descriptions)
- **#2B2E33** - `neutral-darkest` - Darkest gray (headings, primary text)

### Accent Colors (Preserved)
- **#c36a4b** - `hub-terracotta` - Terracotta (buttons, links, icons)
- **#3ADC49** - `hub-green` - Green (accents)

## Updated Components

### 1. **Tailwind Configuration** (`tailwind.config.ts`)
- Added new neutral color palette
- Preserved existing hub colors for backward compatibility

### 2. **Global Styles** (`app/globals.css`)
- Added CSS variables for neutral colors
- Updated body background to `neutral-lightest`
- Updated body text color to `neutral-darkest`

### 3. **Header Component**
- Background: `neutral-lightest/80` with backdrop blur
- Logo text: `neutral-darkest`
- Navigation links: `neutral-dark`
- Dropdowns: `neutral-lightest` background with `neutral-light` borders
- Mobile menu: `neutral-lightest/95` background

### 4. **Hero Section**
- Background gradient overlay: `neutral-lightest` (75% opacity)
- Badge: `neutral-light` background with `neutral-darkest` text
- Heading: `neutral-darkest`
- Description: `neutral-dark`
- Secondary button: `neutral-lightest` background with `neutral-dark` border

### 5. **Footer Component**
- Background: `neutral-lightest`
- Headings: `neutral-darkest`
- Body text: `neutral-dark`
- Borders: `neutral-light`

### 6. **Services Section**
- Headings: `neutral-darkest`
- Body text: `neutral-dark`
- Accent icons and links: `hub-terracotta` (preserved)

### 7. **Call to Action Section**
- Background: `neutral-darkest` (dark section for contrast)
- Heading text: `neutral-lightest`
- Description: `neutral-light`
- Primary button: `hub-terracotta` with white text
- Secondary button: `neutral-lightest/10` with `neutral-lightest` border

## Design Philosophy

The new color palette creates a sophisticated, modern look with:
- **Clean, neutral backgrounds** that don't compete with content
- **Clear text hierarchy** using different shades of gray
- **Strategic use of terracotta** as an accent color for calls-to-action
- **High contrast** for excellent readability
- **Professional appearance** suitable for a foundation/nonprofit

## Usage Guidelines

### Text Colors
- **Headings**: Use `text-neutral-darkest`
- **Body text**: Use `text-neutral-dark`
- **Secondary/muted text**: Use `text-neutral-light` or `text-neutral-dark/70`

### Backgrounds
- **Main backgrounds**: Use `bg-neutral-lightest`
- **Card/section backgrounds**: Use `bg-neutral-lightest` or white
- **Dark sections** (for contrast): Use `bg-neutral-darkest`

### Borders
- **Subtle borders**: Use `border-neutral-light`
- **Prominent borders**: Use `border-neutral-dark`

### Accents
- **Interactive elements**: Use `hub-terracotta` for buttons, links, and icons
- **Hover states**: Use terracotta or lighter neutral shades

## Browser Compatibility

All colors are defined in both:
- Tailwind config (for utility classes)
- CSS variables (for custom CSS)

This ensures maximum compatibility and flexibility across the application.
