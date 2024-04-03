# Guide for å hekte på en mikrofrontend

1. Legg inn mikrofrontend under [urls.ts](/src/urls.ts)

2. Legg in path til applikasjonen din under [routePath.ts](/src/models/routePath.ts)

3. Legg `Route` i [App.tsx](../src/App.tsx)

```
 <Route
                path={ROUTE_PATH.SOKOS_MIKROFRONTEND_TEMPLATE}
                element={<Mikrofrontend url={sokosMikrofrontendTemplateUrl} includeGjelderId />}
                loader={checkRouteAccess(AzureAdGroupName.AD_GRUPPE_SOKOS_MF_MIKROFRONTEND_READ)}
              />
```

NB! Hvis du ikke trenger `gjelderId` så trenger du ikke spesifisere `includeGjelderId`
NB! Hvis du bruker routing i mikrofrontend så må du legge inn slik:

```
 <Route
                path={`${ROUTE_PATH.SOKOS_MIKROFRONTEND_TEMPLATE}/*`}
                element={<Mikrofrontend url={sokosMikrofrontendTemplateUrl} includeGjelderId />}
                loader={checkRouteAccess(AzureAdGroupName.AD_GRUPPE_SOKOS_MF_MIKROFRONTEND_READ)}
              />
```

6. Under [Sidebar.tsx](/src/components/sidebar/SideBar.tsx) må du legge inn mikfrofrontend under menypunktet.

7. I [naiserator-dev.yaml](../.nais/naiserator-dev.yaml) of [naiserator-prod.yaml](../.nais/naiserator-prod.yaml) må du legge inn de `env` variablene som trengs. Se f.es hvilken `env` variabler de andre har lagt inn. Husk å legge inn under `accessPolicy` hvilken backend som mikrofrontend skal snakke med. F.eks:

```
  accessPolicy:
    outbound:
      rules:
        - application: sokos-mikrofrontend-api
```

Skal tjenesten snakke med en i `fss` cluster så må du følgende [hvordan å nå applikasjon on-premise](https://docs.nais.io/clusters/migrating-to-gcp/#how-do-i-reach-an-application-found-on-premises-from-my-application-in-gcp)

8. Env variablene som er lagt inn i naiserator-filene skal defineres i [config.ts](/server/src/config.ts)
   _NB! Tre env variabler som MÅ være med er følgende: PROXY , API, OG API_SCOPE må være lagt inn._

9. Under [server.ts](../server/src/server.ts) må du legge inn proxy til tjenesten mikfrofrontend skal snakke med.

```
  proxyWithOboToken(
    Configuration.SOKOS_MIKROFRONTEND_PROXY,
    Configuration.SOKOS_MIKROFRONTEND_API,
    Configuration.SOKOS_MIKROFRONTEND_API_SCOPE
  );
```

🎉 Nå er `sokos-utbetalingsportalen` klar til å kunne rendre mikfrofrontend og rute rest kallene til riktig api.
