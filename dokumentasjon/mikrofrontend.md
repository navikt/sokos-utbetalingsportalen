# Guide for å hekte på en mikrofrontend

1. Legg inn azure-ad-gruppene i [azureAdGroups.ts](/src/auth/azureAdGroups.ts)

2. Legg inn urler for alle miljøer mikrofrontenden skal kunne brukes under [urls.ts](/src/urls.ts)

3. Legg inn path til applikasjonen din under [routePath.ts](/src/models/routePath.ts)

4. Legg inn den nye appen i [apper.ts](/src/models/apps.ts)

5. I [naiserator-dev.yaml](../.nais/naiserator-dev.yaml) og [naiserator-prod.yaml](../.nais/naiserator-prod.yaml) må du legge inn de `env` variablene som trengs.
   Se f.eks hvilken `env` variabler de andre har lagt inn.
   Husk å legge inn under `accessPolicy` hvilken backend som mikrofrontend skal snakke med.
   F.eks:

   ```
     accessPolicy:
       outbound:
         rules:
           - application: sokos-mikrofrontend-api
   ```

   Skal tjenesten snakke med en i `fss` cluster så må du følgende [hvordan å nå applikasjon on-premise](https://docs.nais.io/clusters/migrating-to-gcp/#how-do-i-reach-an-application-found-on-premises-from-my-application-in-gcp)

6. Env variablene som er lagt inn i naiserator-filene skal defineres i [config.ts](/server/src/config.ts)
   _NB! Tre env variabler som MÅ være med er følgende: PROXY , API, OG API_SCOPE må være lagt inn._

7. Under [server.ts](../server/src/server.ts) må du legge inn proxy til tjenesten mikfrofrontend skal snakke med.

   ```
     proxyWithOboToken(
       Configuration.SOKOS_MIKROFRONTEND_PROXY,
       Configuration.SOKOS_MIKROFRONTEND_API,
       Configuration.SOKOS_MIKROFRONTEND_API_SCOPE
     );
   ```

   🎉 Nå er `sokos-utbetalingsportalen` klar til å kunne rendre mikfrofrontend og rute rest kallene til riktig api.
