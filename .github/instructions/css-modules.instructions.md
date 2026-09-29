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

Aksel v8 bruker `--ax-`-prefiks. Gamle `--a-`-tokens skal ikke brukes. Spacing-tokens navngis etter pikselverdien: `--ax-space-16` er 16px.

```css
/* ❌ Unngå hardkodede verdier */
.kort {
  padding: 16px;
  color: #262626;
  border-radius: 4px;
}

/* ❌ Utdatert tokenprefiks fra Aksel v6/v7 */
.kort {
  padding: var(--a-spacing-4);
  color: var(--a-text-default);
}

/* ✅ Bruk Aksel v8-tokens */
.kort {
  padding: var(--ax-space-16);
  color: var(--ax-text-default);
  border-radius: var(--ax-radius-4);
}
```

Fullstendig tokenoversikt: <https://aksel.nav.no/grunnleggende/styling/design-tokens>

## Responsivt design

Bruk Aksel breakpoints:

```css
@media (max-width: 768px) {
  .layout__innhold {
    flex-direction: column;
  }
}
```
