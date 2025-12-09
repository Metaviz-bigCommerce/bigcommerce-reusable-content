# Category Page Description Module

A reusable, plug-and-play module for adding category descriptions and FAQ sections to any e-commerce platform or CMS. Works seamlessly with WordPress Elementor, Shopify, BigCommerce, and other platforms.

## Features

- **Generic class names**: No project-specific prefixes, fully reusable
- **FAQ accordion**: Interactive FAQ section with smooth animations
- **CSS variables**: Easy theming via CSS custom properties
- **Fully responsive**: Mobile-first design that works on all devices
- **Accessible**: Keyboard navigation and ARIA attributes included
- **Framework-free**: Pure HTML, CSS, and JavaScript

## Files

- `index.html` - HTML structure for content and FAQ sections
- `index.css` - Styling with CSS variables for easy customization
- `index.js` - JavaScript for FAQ accordion functionality

## Installation

### BigCommerce

1. Copy the contents of `index.html` into your category page template
2. Link `index.css` in your theme's `<head>` section
3. Include `index.js` before closing `</body>` tag
4. Initialize the FAQ accordion (see JavaScript Setup below)

### WordPress / Elementor

1. Add an HTML widget or code block to your category page
2. Paste the HTML from `index.html`
3. Add `index.css` to your theme's `style.css` or via Customizer → Additional CSS
4. Enqueue `index.js` in your theme's `functions.php` or via a plugin

### Shopify

1. Add a new section file or edit an existing category template
2. Include the HTML structure from `index.html`
3. Add CSS to `theme.css` or use section-specific styles
4. Include JavaScript in your theme's asset files

## Customization

### CSS Variables

All colors can be customized using CSS variables. Override them in your theme's CSS:

```css
:root {
    --category-font-color: #000;
    --category-heading-color: #000;
    --category-border-color: #000;
    --category-accent-color: #1155cc;
}
```

Example: Change to a dark theme

```css
:root {
    --category-font-color: #ffffff;
    --category-heading-color: #ffffff;
    --category-border-color: #333333;
    --category-accent-color: #4a9eff;
}
```

### Class Names Reference

All classes use the `category-description-` namespace to avoid conflicts:

- `.category-description-content` - Main content container
- `.category-description-faq` - FAQ section container
- `.category-description-faq-title` - FAQ section heading
- `.category-faq-item` - Individual FAQ item
- `.category-faq-question` - Clickable question element
- `.category-faq-answer` - Collapsible answer element

## JavaScript Setup

### For BigCommerce

The module extends `PageManager`. Ensure `index.js` is properly imported:

```javascript
import CategoriesDescInPageBuilder from './category-page-description/index';
```

### For Other Platforms

If you're not using BigCommerce's PageManager, use this standalone version:

```javascript
document.addEventListener('DOMContentLoaded', function() {
    const faqItems = document.querySelectorAll('.category-faq-item');
    
    faqItems.forEach((faq) => {
        const question = faq.querySelector('.category-faq-question');
        
        if (!question) return;
        
        question.addEventListener('click', () => {
            const isActive = faq.classList.contains('active');
            
            faqItems.forEach((item) => {
                item.classList.remove('active');
                const q = item.querySelector('.category-faq-question');
                if (q) q.setAttribute('aria-expanded', 'false');
            });
            
            if (!isActive) {
                faq.classList.add('active');
                question.setAttribute('aria-expanded', 'true');
            }
        });
        
        question.setAttribute('tabindex', '0');
        question.setAttribute('role', 'button');
        question.setAttribute('aria-expanded', 'false');
        
        question.addEventListener('keypress', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                question.click();
            }
        });
    });
});
```

## FAQ Behavior

- **Accordion style**: Only one FAQ item is open at a time
- **Click to toggle**: Click any question to expand/collapse its answer
- **Keyboard accessible**: Use Enter or Spacebar to toggle items
- **Smooth animations**: CSS transitions provide smooth expand/collapse
- **Arrow rotation**: SVG arrow rotates 180° when item is active

## Content Editing

### Updating Description

Edit the content within `.category-description-content`. You can include:
- Paragraphs (`<p>`)
- Headings (`<h1>`, `<h2>`, etc.)
- Lists (`<ul>`, `<ol>`)
- Links (`<a>`)
- Any standard HTML elements

### Adding FAQ Items

To add a new FAQ, duplicate this structure:

```html
<div class="category-faq-item">
    <div class="category-faq-question">
        <p>Your question here?</p>
        <svg width="15" height="10" viewBox="0 0 42 25">
            <path d="M3 3L21 21L39 3" stroke="black" stroke-width="7" stroke-linecap="round"/>
        </svg>
    </div>
    <div class="category-faq-answer">
        <p>Your answer here.</p>
    </div>
</div>
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Avoiding Conflicts

All class names are prefixed with `category-description-` or `category-faq-` to prevent conflicts with:
- WordPress themes
- Elementor widgets
- Shopify themes
- Other third-party plugins
- Framework CSS (Bootstrap, Tailwind, etc.)

## Responsive Breakpoints

- Desktop: Default styles
- Tablet (≤768px): FAQ section width reduced to 80%
- Mobile (≤480px): FAQ section uses full width

## License

This module is reusable and can be customized for any project without restrictions.
