---
applyTo: "src/**/*.module.css"
---

# CSS Modules — utbetalingsportalen

BEM-lignende navngiving med Aksel tokens. Ikke hardkod verdier som finnes som Aksel-variabler.

## Navngivingsmønster

```css
/* Basis-komponent */
.sidebar {
}

/* Barn-element */
.sidebar__meny {
}

/* Variant */
.sidebar--kompakt {
}

/* Element med tilstand */
.sidebar__lenke--aktiv {
}
```

## Bruk Aksel tokens

```css
/* ❌ Unngå hardkodede verdier */
.kort {
  padding: 16px;
  color: #262626;
  border-radius: 4px;
}

/* ✅ Bruk Aksel tokens */
.kort {
  padding: var(--a-spacing-4);
  color: var(--a-text-default);
  border-radius: var(--a-border-radius-medium);
}
```

## Responsivt design

Bruk Aksel breakpoints:

```css
@media (max-width: 768px) {
  .layout__innhold {
    flex-direction: column;
  }
}
```
