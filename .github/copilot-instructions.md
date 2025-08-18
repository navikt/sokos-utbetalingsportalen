# Copilot Instructions for Utbetalingsportalen

## Project Overview

Astro-based microfrontend container for NAV's payment processing platform. TypeScript + React components with CSS Modules and NAV's Aksel design system.

## Coding Standards

### File Naming

- **Components**: `PascalCase.tsx`
- **Pages**: `kebab-case.astro`
- **CSS Modules**: `ComponentName.module.css`
- **API Routes**: `[...proxy].ts`

### CSS Module Conventions

```css
/* BEM-like naming with double underscores/hyphens */
.component {
  /* Base component styles */
}

.component__element {
  /* Child element */
}

.component--modifier {
  /* Component variant */
}

.component__element--state {
  /* Element state */
}
```

## Code Quality Standards

### Component Design Principles

- **Single Responsibility**: One component, one purpose
- **Props Interface**: Always type component props explicitly
- **Error Boundaries**: Wrap microfrontends with ErrorBoundary
- **Loading States**: Use Suspense + fallback for async components
- **Access Control**: Check permissions before rendering sensitive content

### Clean Code Standards

- **No Comments**: Write self-documenting code instead of adding comments
- **Descriptive Names**: Use clear, specific names for variables, functions, and components
- **Extract Functions**: Break complex logic into well-named functions
- **Type Safety**: Let TypeScript types serve as documentation
- **Small Functions**: Keep functions focused and easy to understand at a glance

```typescript
// ❌ Avoid - Comments explain unclear code
const handleClick = () => {
  // Check if user has access to the feature
  if (userGroups.includes(ADMIN_GROUP)) {
    // Enable admin mode
    setAdminMode(true);
  }
};

// ✅ Prefer - Self-documenting code
const handleAdminAccess = () => {
  if (hasAdminPermissions(userGroups)) {
    enableAdminMode();
  }
};
```

## Development Workflow

### Adding New Features

1. **Identify component responsibility**: What single thing does it do?
2. **Define TypeScript interfaces**: Props, state, return types
3. **Create minimal implementation**: Start simple, iterate
4. **Add error handling**: Loading states, error boundaries, access control
5. **Style with CSS modules**: Follow BEM-like naming
6. **Test integration**: Verify with microfrontend system

### Component Refactoring

- **Extract repeated JSX** into render helper functions
- **Move complex logic** to custom hooks
- **Split large components** by responsibility
- **Use composition** over complex prop drilling

### Performance Optimization

- Use `server:defer` for non-critical components
- Implement proper loading states with skeletons
- Avoid unnecessary re-renders with proper dependency arrays
- Lazy load microfrontends and large components

## Development Workflow

### Adding Dependencies

- Use `pnpm add <package>` for dependencies
- Prefer NAV's Aksel components over custom implementations
- External React/React-DOM are provided via importmap

## Performance & Observability

- **Lazy Loading**: Microfrontends loaded dynamically with React.lazy()
- **Error Boundaries**: Wrap microfrontends to prevent crashes
- **Monitoring**: Grafana Faro for web vitals and errors
- **Logging**: Structured logging with Pino + OpenTelemetry
- **CDN**: External dependencies served from NAV CDN

## Norwegian Context Notes

- Interface language: Norwegian Bokmål
- URLs: Use Norwegian words translated to Latin characters
- Accessibility: Follow Norwegian WCAG standards
- Business domain: NAV payment processing and financial operations
- Users: NAV employees (economists, customer service, etc.)

Remember: This is a critical financial system for Norwegian government operations. Follow security best practices and test thoroughly before deployment.
