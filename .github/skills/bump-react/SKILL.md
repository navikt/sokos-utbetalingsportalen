---
name: bump-react
description: Bump React-versjonen i importmap (Layout.astro) og package.json — validerer mot navikt/sokos-shared-dependencies
license: MIT
compatibility: sokos-utbetalingsportalen (Astro container)
metadata:
  domain: frontend
  tags: react importmap cdn versjon bump sokos utbetalingsportalen
---

# Bump React — sokos-utbetalingsportalen

Denne skillen oppdaterer React-versjonen i importmap (`src/layouts/Layout.astro`) og `package.json`. Den validerer at versjonen finnes i [navikt/sokos-shared-dependencies](https://github.com/navikt/sokos-shared-dependencies) før endringer gjøres.

## Hva du trenger fra utvikleren

1. **Ønsket React-versjon** — f.eks. `19.2.6`, eller «nyeste»

## Steg

### 1. Valider versjon mot shared-dependencies

Sjekk at versjonen finnes i repoet:

```bash
gh api repos/navikt/sokos-shared-dependencies/contents/packages/react --jq '.[].name'
```

Hvis versjonen **ikke finnes**, avbryt med feilmelding:

```
❌ Versjon <X> finnes ikke i navikt/sokos-shared-dependencies.
Tilgjengelige versjoner: <liste fra kommandoen over>

Du må først publisere versjonen til sokos-shared-dependencies før du kan bruke den her.
```

Hvis utvikleren ber om «nyeste», bruk den høyeste versjonen fra listen.

### 2. Finn nyeste scheduler-versjon

```bash
gh api repos/navikt/sokos-shared-dependencies/contents/packages/scheduler --jq '.[].name' | sort -V | tail -1
```

Bruk den nyeste scheduler-versjonen automatisk.

### 3. Oppdater `src/layouts/Layout.astro`

Finn importmap-blokken og oppdater alle URL-er:

```html
<script is:inline type="importmap">
  {
    "imports": {
      "react": "https://cdn.nav.no/okonomi/sokos-shared-dependencies/packages/react/<NY_VERSJON>/react.mjs",
      "react/jsx-runtime": "https://cdn.nav.no/okonomi/sokos-shared-dependencies/packages/react/<NY_VERSJON>/jsx-runtime.mjs",
      "react-dom": "https://cdn.nav.no/okonomi/sokos-shared-dependencies/packages/react-dom/<NY_VERSJON>/react-dom.mjs",
      "react-dom/client": "https://cdn.nav.no/okonomi/sokos-shared-dependencies/packages/react-dom/<NY_VERSJON>/client.mjs",
      "scheduler": "https://cdn.nav.no/okonomi/sokos-shared-dependencies/packages/scheduler/<NYESTE_SCHEDULER>/scheduler.mjs"
    }
  }
</script>
```

### 4. Oppdater `package.json`

Endre `react` og `react-dom` til den nye versjonen:

```json
"react": "<NY_VERSJON>",
"react-dom": "<NY_VERSJON>",
```

### 5. Kjør pnpm install

```bash
pnpm install
```

## Viktig

- **react og react-dom bruker alltid samme versjon** — de bumpes sammen
- **scheduler-versjon er uavhengig** — den hentes automatisk som nyeste fra shared-dependencies
- **Ikke bump uten å validere** — CDN returnerer 404 hvis versjonen ikke finnes i shared-dependencies

## CDN URL-mønster

```
https://cdn.nav.no/okonomi/sokos-shared-dependencies/packages/{pakke}/{versjon}/{fil}.mjs
```

## Eksempel

Utvikler sier: «Bump react til 19.2.6»

1. Sjekk: `packages/react/19.2.6/` finnes ✅
2. Scheduler: nyeste er `0.27.0`
3. Layout.astro: oppdater alle 5 URL-er
4. package.json: `"react": "19.2.6"`, `"react-dom": "19.2.6"`
5. `pnpm install`
