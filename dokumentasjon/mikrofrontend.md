# Guide for å hekte på en mikrofrontend

1. Legg inn mikrofrontend under [urls.ts](src/urls.tsx)
   Under `local` må det foreligge en bundle.js fil som skal ligge under [bundle](mock/bundle).
   Dette er for å sørge for at `sokos-op-fasade` har en container å rende en dummy bundle.js fil.
   Du kan kopiere fra en av de som allerede ligger der og endre på linje 1, 449 og 463. Linje 1 og 463 må hete det samme og under linje 1

```
  }, /*#__PURE__*/React.createElement("h2", null, "Mikrofrontend container"));
```

kan du endre "Mikrofrontend container" til å være noe annet.

2. Legg inn dummy mock path under [micro-frontends.js](mock/micro-frontends.js)

3. Legg `Route` i [App.tsx](../src/App.tsx)

```
 <Route
                path={Path.SOKOS_MIKROFRONTEND_TEMPLATE}
                element={<Mikrofrontend url={sokosMikrofrontendTemplateUrl} includeGjelderId />}
                loader={checkAccessToMicrofrontend(AzureAdGroupName.AD_GRUPPE_SOKOS_MF_MIKROFRONTEND_READ)}
              />
```

NB! Hvis du ikke trenger `gjelderId` så trenger du ikke spesifisere `includeGjelderId`

4. Legg in path til applikasjonen din under [path.ts](src/models/path.ts)

5. Path som du la under [path.ts](src/models/path.tsx) skal importeres til [App.tsx](src/App.tsx)

6. Under [Sidebar.tsx](src/components/sidebar/SideBar.tsx) må du legge inn mikfrofrontend under menypunktet.

7. I [naiserator-dev.yaml](../.nais/naiserator-dev.yaml) of [naiserator-prod.yaml](../.nais/naiserator-prod.yaml) må du legge inn de `env` variablene som trengs. Se f.es hvilken `env` variabler de andre har lagt inn. Husk å legge inn under `accessPolicy` hvilken backend som mikrofrontend skal snakke med. F.eks:

```
  accessPolicy:
    outbound:
      rules:
        - application: sokos-mikrofrontend-api
```

Skal tjenesten snakke med en i `fss` cluster så må du følgende [hvordan å nå applikasjon on-premise](https://docs.nais.io/clusters/migrating-to-gcp/#how-do-i-reach-an-application-found-on-premises-from-my-application-in-gcp)

8. Under [server.ts](../server/src/server.ts) må du legge inn proxy til tjenesten mikfrofrontend skal snakke med.

```
  proxyWithOboToken(
    Configuration.SOKOS_MIKROFRONTEND_PROXY,
    Configuration.SOKOS_MIKROFRONTEND_API,
    Configuration.SOKOS_MIKROFRONTEND_API_SCOPE
  );
```

Env variablene hentes fra [config.ts](server/src/config.ts) som henter alle `env` variablene fra naiserator filen som du har lagt inn under pkt. 8.
NB! Tre env variabler som MÅ være med er følgende: PROXY , API, OG API_SCOPE må være lagt inn.

🎉 Nå er `sokos-op-fasade` klar til å kunne rendre mikfrofrontend i NAIS og rute rest kallene til riktig api.
