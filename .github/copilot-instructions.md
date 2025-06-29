# Copilot Instructions for Utbetalingsportalen

## Project Overview

Astro-based microfrontend container for NAV's payment processing platform. TypeScript + React components with CSS Modules and NAV's Aksel design system.

## Core Architecture Patterns

### Microfrontend Configuration

Each app defined in `src/microfrontend.ts`:

```typescript
{
  app: "APP_ID",              // lowercase, used in code
  title: "Display Name",
  route: "/kebab-case-route", // lowercase, hyphens, no Norwegian chars
  naisAppName: "sokos-up-app",
  adGroupDevelopment: "uuid",
  adGroupProduction: "uuid"
}
```

### Standard File Structure

```
src/pages/app-name.astro          → <MicrofrontendWrapper appName="app-id" />
src/pages/app-api/[...proxy].ts   → API proxy with OBO tokens
```

## Coding Standards

### File Naming

- **Components**: `PascalCase.tsx`
- **Pages**: `kebab-case.astro`
- **CSS Modules**: `ComponentName.module.css`
- **API Routes**: `[...proxy].ts`

### Import Conventions

```typescript
// Path aliases (required)
import Layout from "@layouts/Layout.astro";
import { hasAccessToApp } from "@utils/accessControl";
import type { MicroFrontend } from "src/microfrontend";

// Component imports - group by source
import { Button, Heading } from "@navikt/ds-react";
import { MenuIcon } from "@navikt/aksel-icons";
import styles from "./Component.module.css";
```

### TypeScript Patterns

```typescript
// Always use explicit types for props
export type ComponentProps = {
  title: string;
  adGroups: string[];
};

// Use type imports for types
import type { APIRoute } from "astro";

// Function components with typed props
export default function Component({ title, adGroups }: ComponentProps) {
  // Implementation
}
```

### React Component Structure

```typescript
// 1. Imports (grouped)
import { useState, useEffect } from "react";
import { Button } from "@navikt/ds-react";
import styles from "./Component.module.css";

// 2. Types
type Props = {
  // props
};

// 3. Component
export default function Component({ prop }: Props) {
  // 4. Hooks (state, effects, refs)
  const [state, setState] = useState();

  // 5. Event handlers
  const handleClick = () => {
    // handler logic
  };

  // 6. Render helpers
  function renderItems() {
    return items.map(item => (
      <Item key={item.id} {...item} />
    ));
  }

  // 7. Return JSX
  return (
    <div className={styles.component}>
      {/* JSX */}
    </div>
  );
}
```

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

### Astro Component Patterns

```astro
---
// 1. Imports
import Layout from "@layouts/Layout.astro";
import Component from "@components/Component";

// 2. Types
export type Props = {
  title: string;
};

// 3. Props destructuring
const { title } = Astro.props as Props;

// 4. Server-side logic
const userInfo = Astro.locals.userInfo;
---

<!-- 5. Template -->
<Layout title={title}>
  <Component
    server:defer
    client:only="react"
    prop={value}
  >
    <Fallback slot="fallback" />
  </Component>
</Layout>
```

### API Route Template

```typescript
import type { APIRoute } from "astro";
import { routeProxyWithOboToken } from "@utils/server/proxy";

export const ALL: APIRoute = routeProxyWithOboToken({
  apiProxy: `${process.env.SERVICE_API_PROXY}`,
  apiUrl: `${process.env.SERVICE_API}`,
  audience: `${process.env.SERVICE_API_AUDIENCE}`,
});
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

## Environment & Configuration

### Environment Detection

```typescript
import { getServerSideEnvironment } from "@utils/server/environment";

// Environment-specific logic
if (getServerSideEnvironment() === "local") {
  return "http://localhost:3000/bundle.js";
}
return `https://${hostname}/${appName}/bundle.js`;
```

### Access Control Pattern

```typescript
import { hasAccessToApp } from "@utils/accessControl";
import { getMicrofrontendConfig } from "src/microfrontend";

const config = getMicrofrontendConfig("app-id"); // lowercase
const hasAccess = hasAccessToApp(userGroups, config);
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

### Local Development

```bash
pnpm install
pnpm run dev        # Start Astro dev server
pnpm run mock      # Start mock microfrontend (optional)
```

### Testing & Building

```bash
pnpm run build     # Type check + build
pnpm run stylelint # CSS linting
```

### Adding Dependencies

- Use `pnpm add <package>` for dependencies
- Prefer NAV's Aksel components over custom implementations
- External React/React-DOM are provided via importmap

## Common Tasks

### Access Control Check

```typescript
import { hasAccessToApp } from "@utils/accessControl";
const hasAccess = hasAccessToApp(userGroups, appConfig);
```

### Microfrontend Config Lookup

```typescript
import { getMicrofrontendConfig } from "src/microfrontend";
const config = getMicrofrontendConfig("appname"); // lowercase
```

### Environment Detection

```typescript
import { getServerSideEnvironment } from "@utils/server/environment";
if (getServerSideEnvironment() === "local") {
  // Local development logic
}
```

## Security Considerations

- All API routes require authentication (except `/internal/*`)
- Access control enforced at microfrontend level via AD groups
- OBO tokens used for service-to-service communication
- No sensitive data in client-side code
- CORS configured for local development only

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

## Troubleshooting

**Common Issues:**

1. **Access denied**: Check AD group configuration in `microfrontend.ts`
2. **API proxy errors**: Verify environment variables and audience configuration
3. **Microfrontend won't load**: Check bundle URL and NAIS app name
4. **Build failures**: Run `astro check` for TypeScript errors

Remember: This is a critical financial system for Norwegian government operations. Follow security best practices and test thoroughly before deployment.
