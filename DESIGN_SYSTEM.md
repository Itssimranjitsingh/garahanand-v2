# Garhanand Design System (v1)

## Overview

A minimal, sacred, and storytelling-focused design system for a Sikh history platform. This system emphasizes readability, cultural authenticity, and a calm, archival aesthetic.

---

## 1. Design Principles

* **Sacred**: Calm, spacious, respectful UI
* **Storytelling**: Optimized for long-form reading
* **Traditional**: Serif typography, warm tones
* **Minimal**: Flat UI, no visual clutter

---

## 2. Color System

### Base Colors

```css
--color-text-primary: #2C241C;
--color-text-secondary: #5A4A3A;

--color-accent-primary: #C47A2C; /* muted saffron */
--color-accent-secondary: #2F4A3C; /* earthy green */

--color-border-subtle: rgba(44, 36, 28, 0.12);
--color-highlight: rgba(196, 122, 44, 0.15);
```

### Guidelines

* Avoid pure black
* Use saffron sparingly (high significance)
* Maintain soft contrast with paper texture

---

## 3. Background & Texture

### Implementation

```css
body {
  background-image: url('/texture.jpg');
  background-size: cover;
  background-attachment: fixed;
}

body::before {
  content: "";
  position: fixed;
  inset: 0;
  background: rgba(255, 248, 235, 0.65);
  pointer-events: none;
}
```

### Rules

* Always apply a soft overlay
* Keep UI elements flat above texture
* Ensure readability across devices

---

## 4. Typography

### Font Families

* Headings: Playfair Display
* Body: EB Garamond
* Gurmukhi: Noto Serif Gurmukhi

---

### Type Scale

```txt
h1: text-4xl md:text-5xl
h2: text-3xl md:text-4xl
h3: text-2xl md:text-3xl

body-lg: text-lg
body: text-base
small: text-sm
```

---

### Reading Rules

* Max width: `max-w-3xl`
* Line height: `1.7–1.9`
* Paragraph spacing: `mb-6`

---

### Gurmukhi Styling

```css
.lang-pa {
  font-family: 'Noto Serif Gurmukhi', serif;
  line-height: 1.9;
}
```

---

## 5. Layout System

### Container

```css
max-w-5xl mx-auto px-4 md:px-6
```

### Reading Layout

```css
max-w-3xl mx-auto
```

---

### Spacing

```css
section: py-16 md:py-24
content: space-y-6
```

---

## 6. Components

### 6.1 Navbar

```html
<nav class="border-b border-[var(--color-border-subtle)] bg-transparent backdrop-blur-sm">
```

**Rules:**

* Transparent background
* Subtle bottom border
* No shadows

---

### 6.2 Article Layout

Structure:

* Title (Playfair Display)
* Metadata (small text)
* Divider
* Content (EB Garamond)

Optional Drop Cap:

```css
.prose p::first-letter {
  font-size: 3rem;
  float: left;
  margin-right: 0.5rem;
  font-family: 'Playfair Display';
}
```

---

### 6.3 Cards

```html
<div class="border border-[var(--color-border-subtle)] p-4 hover:bg-[var(--color-highlight)] transition">
```

**Rules:**

* No shadows
* Flat design
* Subtle hover effect

---

### 6.4 Quote Block

```html
<blockquote class="border-l-4 pl-4 italic text-[var(--color-text-secondary)]">
```

---

### 6.5 Timeline (Concept)

* Vertical line layout
* Circular markers for events
* Minimal text blocks
* Optimized for historical storytelling

---

## 7. Interaction Design

### Motion

```css
transition: all 0.3s ease;
```

### Guidelines

* Use subtle fades
* Avoid aggressive animations
* Hover = soft highlight only

---

## 8. Language Toggle

* Position: Top-right
* Label: `EN | ਪੰਜਾਬੀ`
* Persist selection using localStorage

---

## 9. Tailwind Configuration

```js
theme: {
  extend: {
    colors: {
      ink: '#2C241C',
      faded: '#5A4A3A',
      saffron: '#C47A2C',
      earth: '#2F4A3C',
    }
  }
}
```

---

## 10. Accessibility

* Maintain sufficient contrast with overlay
* Use readable font sizes (16px+)
* Ensure Gurmukhi readability with proper spacing
* Avoid dense layouts

---

## 11. Do’s and Don’ts

### Do

* Use whitespace generously
* Keep UI calm and minimal
* Focus on readability
* Maintain cultural tone

### Don’t

* Use pure black
* Add heavy shadows
* Overuse accent colors
* Clutter the interface

---

## 12. Future Extensions

* Timeline component system
* Biography layout template
* Image gallery system
* Search and filtering UI

---

## Summary

This design system creates a **calm, sacred reading experience** inspired by historical manuscripts while maintaining modern usability through minimal and structured UI.
