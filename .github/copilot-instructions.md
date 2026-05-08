# Copilot Instructions for Utbetalingsportalen

## Project Overview

Astro-based microfrontend container for NAV's payment processing platform. TypeScript + React components with CSS Modules and NAV's Aksel design system.

## Coding Standards

### File Naming

- **Components**: `PascalCase.tsx`
- **Pages**: `kebab-case.astro`
- **CSS Modules**: `ComponentName.module.css`
- **API Routes**: `[...proxy].ts`

Se `.github/instructions/` for filtype-spesifikke regler (CSS, testing, API-proxy, React/Astro-mønstre).

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
