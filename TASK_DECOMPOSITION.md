# Task Decomposition

## T-01: Semantic DOM Architecture & A11y Contract

### Objective
Build a semantic and accessible HTML page.

### Requirements
- Use semantic HTML5 elements.
- Use 0 div elements.
- Use exactly one h1 element.
- Add an accessible skip-link.
- Create header, navigation, main content, and sections.

### Verification
- Verify the landmark tree using Chrome DevTools Accessibility.
- Test the skip-link using the keyboard.

## T-02A: Design Tokens & Reset

### Objective
Create a reusable CSS foundation for the portfolio.

### Requirements
- Define reusable CSS variables in `:root`.
- Apply a global border-box reset.
- Use design tokens instead of hardcoded colors.

### Verification
- Check that CSS variables are applied correctly.
- Verify the page has no unexpected sizing issues.

## T-02B: Responsive Grid Layout

### Objective
Create a responsive project card layout.

### Requirements
- Use CSS Grid.
- Use `repeat(auto-fit, minmax(280px, 1fr))`.
- No horizontal scrolling at 375px.

### Verification
- Test the page at 375px viewport width.

## T-02C: Theme Engine

### Objective
Create a persistent light/dark theme switcher.

### Requirements
- Use localStorage key `theme`.
- Theme toggle must be keyboard accessible.
- Theme must persist after reload.
- Zero console errors.

### Verification
- Toggle the theme.
- Reload the page and verify the theme persists.