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

## T-03: Portfolio Assembly

### Objective
Assemble the portfolio page using reusable and accessible components.

### Components
- Hero
- Theme Switcher
- Skills Matrix
- Project Cards
- Contact Form

### Requirements
- Use semantic HTML elements.
- Use responsive WebP images with the picture element.
- Use native HTML form validation.
- Keep the page responsive.
- Maintain keyboard accessibility.

### Verification
- Check all five components.
- Test the page on mobile and desktop.
- Test required form fields and email validation.
- Verify there are no console errors.

## Exercise 4 - Resilient Component Architecture

### 4-State Component Contract

| State | Description | UI |
|---|---|---|
| Loading | Data is being loaded | CSS shimmer skeleton |
| Live | Data loaded successfully | Metadata badges and grid list |
| Empty | Data loaded but no items exist | Empty state message |
| Error | Data loading failed | Error message and retry button |

### State Flow

Loading -> Live
Loading -> Empty
Loading -> Error
Error -> Loading (Retry)
# Homework 1: Production Portfolio

## M1: Accessibility Audit
- Verify semantic HTML landmarks.
- Check WCAG 2.2 AA contrast ratio (>= 4.5:1).
- Fix accessibility issues.

## M2: Keyboard Navigation
- Test Tab and Shift+Tab navigation.
- Prevent keyboard focus traps.
- Ensure visible focus indicators.

## M3: Security
- Remove inline event handlers.
- Implement Content Security Policy (CSP).
- Prevent unsafe innerHTML usage.

## M4: Performance
- Optimize images and assets.
- Run Lighthouse audits.
- Fix performance issues.
- Target Lighthouse score: 100.

### M4: Performance - Completed

- [x] Review images and assets.
- [x] Run Lighthouse performance audit.
- [x] Achieve Lighthouse Performance score of 100.
- [x] Verify FCP: 0.9s.
- [x] Verify LCP: 0.9s.