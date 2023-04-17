# Guide for å hekte på en mikrofrontend

1. CORS Policy
   For at `sokos-op-fasade` kan kalle på en mikrofrontend på det legges inn en cors policy i naiserator filen i mikrofrontend prosjektet.

```
spec:
  env:
  - name: CORS_ALLOWED_ORIGIN
    value: "https://okonomiportalen.intern.dev.nav.no"
```

2. Legg inn mikrofrontend under [urls.tsx](src/urls.tsx)
   Under `local` må det foreligge en bundle.js fil som skal ligge under [bundle](mock/bundle).
   Dette er for å sørge for at `sokos-op-fasade` har en container å rende en dummy bundle.js fil.
   Du kan kopiere fra en av de som allerede ligger der og endre på linje 1, 449 og 463. Linje 1 og 463 må hete det samme og under linje 1

```
  }, /*#__PURE__*/React.createElement("h2", null, "Mikrofrontend container"));
```

Kan du endre "Mikrofrontend container" til å være noe annet.

3. Legg inn dummy mock path under [micro-frontends.js](mock/micro-frontends.js)

4. Legg kompontent under [micro-frontend](src/micro-frontend)

5. Legg in path til applikasjonen din under [path.ts](src/models/path.ts)

6. Path som du la under [path.ts](src/models/path.tsx) skal importeres til [App.tsx](src/App.tsx)

Nå er `sokos-op-fasade` klar til å kunne rendre mikfrofrontend i NAIS.
