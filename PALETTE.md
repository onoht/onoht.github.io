# ONOHT.BLOG - Color Palette

## Philosophy

**Oscilloscope Aesthetic. Terminal Precision.**

This palette draws inspiration from classic amber CRT monitors and oscilloscopes—warm, technical, precise. Against true black, amber glows like phosphor on glass.

---

## Core Colors

### Backgrounds
```
Black (True)     #000000    --bg           Primary background, OLED-friendly
Black (Raised)   #0a0a0a    --bg-raised    Elevated surfaces, cards
```

### Text
```
White            #ffffff    --text         Primary text, maximum contrast
Gray (Muted)     #888888    --text-muted   Secondary text, captions
Gray (Dim)       #444444    --text-dim     Tertiary text, placeholders
```

### Accent (Amber)
```
Amber (Bright)   #ffb84d    --accent       Primary accent, interactive elements
Amber (Normal)   #ff9500    --accent-hover Hover/focus states
Amber (Dim)      #995a00    --accent-dim   Muted accent, disabled states
Amber (Glow)     #ffb84d20  --accent-glow Subtle glow effects (8% opacity)
```

### Borders & Structure
```
Border           #1a1a1a    --border       Primary borders
Border (Subtle)  #0d0d0d    --border-subtle Secondary borders
Grid             #0f0f0f    --grid         Grid lines, rules
```

---

## Usage Guidelines

### Accent Color
Use amber (`--accent: #ffb84d`) for:
- Links and interactive elements
- Hover states
- Highlights and emphasis
- Active states
- Animated elements

### Text Hierarchy
1. **Primary** (`--text`): Headlines, body text, important content
2. **Muted** (`--text-muted`): Captions, metadata, secondary information
3. **Dim** (`--text-dim`): Placeholders, disabled text, decorative elements

### Backgrounds
- **True black** for main canvas (OLED-friendly, pure contrast)
- **Raised black** for cards, demos, elevated content
- Never use colored backgrounds—depth through contrast, not decoration

### Borders
- Thin, subtle borders define structure
- Accent borders only for interactive/focus states
- No decorative borders

---

## Accessibility

### Contrast Ratios (WCAG 2.1)
- White text on black: **21:1** ✓✓✓ (AAA)
- Muted text on black: **5.74:1** ✓ (AA)
- Amber on black: **8.12:1** ✓✓ (AA Large, AAA for large text)
- Dim text on black: **2.85:1** (decorative only)

### Interactive Elements
All interactive elements maintain minimum 3:1 contrast ratio.

---

## Color Tokens

```css
:root {
  /* Backgrounds */
  --bg: #000000;
  --bg-raised: #0a0a0a;
  
  /* Text */
  --text: #ffffff;
  --text-muted: #888888;
  --text-dim: #444444;
  
  /* Accent (Amber) */
  --accent: #ffb84d;
  --accent-hover: #ff9500;
  --accent-dim: #995a00;
  --accent-glow: rgba(255, 184, 77, 0.08);
  
  /* Borders */
  --border: #1a1a1a;
  --border-subtle: #0d0d0d;
  --grid: #0f0f0f;
}
```

---

## Rationale

### Why Amber?

1. **Historical Authenticity**: Amber CRT monitors and oscilloscopes defined the technical aesthetic we're channeling. This isn't retro—it's classic.

2. **Warmth vs. Cold**: Cyan felt clinical. Amber brings warmth while maintaining precision. Against true black, it glows rather than freezes.

3. **Better Readability**: Amber provides excellent contrast on black (8.12:1) while being easier on the eyes than pure cyan or white highlights.

4. **Unique Identity**: Everyone uses blue/purple/cyan accents. Amber is distinctive without being garish.

5. **Technical Heritage**: From VT100 terminals to HP oscilloscopes, amber is the color of precision instrumentation.

---

## Migration Notes

When updating from cyan (#00ffff) to amber (#ffb84d):
- Replace all `--accent` references
- Update inline color values in HTML posts
- Adjust canvas/animation colors in interactive demos
- Verify contrast ratios remain accessible
