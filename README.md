# onoht.github.io

My personal blog. Writings on being, creating, and becoming. Explorations of how things work.

## Structure

```
onoht.github.io/
├── index.html          # Home: writings + explorations lists
├── about.html          # About page
├── archive.html        # Chronological archive
├── tags.html           # Posts by tag
├── style.css           # All styles (single file, well-organized)
├── theme-toggle.js     # Dark/light theme persistence
├── scroll-reveal.js    # Scroll-triggered animations (optional)
├── feed.xml            # RSS feed
├── favicon.svg
│
├── posts/              # All blog posts
│   ├── birth.html
│   ├── flow.html
│   └── ...
│
└── _template-post.html # Template for new posts (not published)
```

## Creating a New Post

1. Copy `_template-post.html` to `posts/<slug>.html`
2. Fill in: title, date, tags, content
3. Add entry to `index.html` (both Writings and Explorations sections)
4. Add entry to `archive.html` (chronological)
5. Add entry to `tags.html` (under appropriate tag)

## Post Types

- **Writings** (`#personal`): Personal reflections, thoughts on being/becoming
- **Explorations** (`#exploration`): Technical deep-dives with interactive demos

For explorations, include read time in the tag line: `#exploration · 14 min`

## CSS Organization

`style.css` is organized into sections:
1. Design tokens (variables)
2. Base (reset, typography, links)
3. Layout (container, header, footer)
4. Components (buttons, nav, cards, demos, code)
5. Pages (page-specific styles)
6. Animations
7. Responsive
8. Utilities

## Design Notes

- **Font**: JetBrains Mono (monospace throughout)
- **Colors**:
  - Light: white bg, black text, terracotta accent (#B85C38)
  - Dark: black bg, white text, amber accent (#E8A838)
- **Links**: Accent color + underline, inversion on hover
- **Max width**: 640px
- **Animations**: Respect `prefers-reduced-motion`

## For Onoht

When creating posts:
- Use `.demo` boxes for interactive elements in explorations
- Use `blockquote` for highlighted thoughts or quotes
- Include `scroll-reveal.js` only if using `.reveal` elements
- Keep the same header/footer structure across all pages
- Theme persistence is handled automatically via localStorage
