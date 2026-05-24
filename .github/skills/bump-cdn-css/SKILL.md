---
name: bump-cdn-css
description: Bump Aksel ds-css CDN-versjonen i Layout.astro — synkroniserer med @navikt/ds-react i package.json
license: MIT
compatibility: sokos-utbetalingsportalen (Astro container)
metadata:
  domain: frontend
  tags: aksel ds-css cdn versjon bump sokos utbetalingsportalen
---

# Bump CDN CSS — sokos-utbetalingsportalen

Denne skillen oppdaterer Aksel CSS CDN-lenken i `src/layouts/Layout.astro` slik at den samsvarer med `@navikt/ds-react`-versjonen i `package.json`. Den støtter to varianter: synkronisering fra package.json, eller bump til en spesifikk versjon.

## Hva du trenger fra utvikleren

Én av:
- **Ingen versjon** → synkroniser CDN-lenken med det som allerede står i package.json
- **Spesifikk versjon** → oppdater både package.json og CDN-lenken

## Steg

### Variant A: Uten versjon («Bump cdn css»)

#### 1. Les versjon fra package.json

Finn `@navikt/ds-react`-versjonen i `package.json`:

```json
"@navikt/ds-react": "7.40.0",
```

Bruk denne versjonen for CDN-lenken.

#### 2. Oppdater `src/layouts/Layout.astro`

Finn preload- og stylesheet-lenkene og oppdater versjonen:

```html
<link
  rel="preload"
  href={`https://cdn.nav.no/aksel/@navikt/ds-css/<VERSJON>/index.min.css`}
  as="style"
/>
<link
  rel="stylesheet"
  href={`https://cdn.nav.no/aksel/@navikt/ds-css/<VERSJON>/index.min.css`}
/>
```

#### 3. Kjør pnpm install

```bash
pnpm install
```

---

### Variant B: Med versjon («Bump cdn css til 7.41.0»)

#### 1. Oppdater `package.json`

Endre `@navikt/ds-react` til den nye versjonen:

```json
"@navikt/ds-react": "<NY_VERSJON>",
```

#### 2. Oppdater `src/layouts/Layout.astro`

Finn preload- og stylesheet-lenkene og oppdater versjonen:

```html
<link
  rel="preload"
  href={`https://cdn.nav.no/aksel/@navikt/ds-css/<NY_VERSJON>/index.min.css`}
  as="style"
/>
<link
  rel="stylesheet"
  href={`https://cdn.nav.no/aksel/@navikt/ds-css/<NY_VERSJON>/index.min.css`}
/>
```

#### 3. Kjør pnpm install

```bash
pnpm install
```

## Viktig

- **ds-css og ds-react bruker samme versjonsnummer** — CDN-lenken bruker ds-css, men versjonen matcher ds-react i package.json
- **Oppdater alltid begge steder** (preload OG stylesheet) i Layout.astro
- **Begge lenkene har identisk URL** — den ene er preload, den andre er stylesheet

## CDN URL-mønster

```
https://cdn.nav.no/aksel/@navikt/ds-css/{versjon}/index.min.css
```

## Eksempler

### Eksempel 1: Synkroniser (ingen versjon oppgitt)

Utvikler sier: «Bump cdn css»

1. Les package.json: `@navikt/ds-react` er `7.41.0`
2. Layout.astro: oppdater begge CDN-URL-er til `7.41.0`
3. `pnpm install`

### Eksempel 2: Bump til spesifikk versjon

Utvikler sier: «Bump cdn css til 7.42.0»

1. package.json: endre `@navikt/ds-react` til `7.42.0`
2. Layout.astro: oppdater begge CDN-URL-er til `7.42.0`
3. `pnpm install`
