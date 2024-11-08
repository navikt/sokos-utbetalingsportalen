# Guide for å legge til en mikrofrontend

1.  Legg inn Azure AD gruppene for tilgangsstyring i [azureAdGroups.ts](/src/auth/azureAdGroups.ts). AD grupper får man laget hos [Microsoft](https://mygroups.microsoft.com/). 
    ID'en til gruppen ser man i url'en etter `groups/` i format tilsvarende `1b717a23-d376-471c-9fc6-356299fadc2b`.
    <br></br>
2. Legg inn urler for alle miljøer applikasjonen skal bruke i [urls.ts](/src/urls.ts)
   <br></br>
3. Legg inn path til applikasjonen din under [routes.ts](/src/routes/routes.ts)
   <br></br>

4. Legg inn den nye appen i [MicrofrontendApps.ts](/src/MicrofrontendApp.ts)
   <br></br>

5. I [naiserator-dev.yaml](../.nais/naiserator-dev.yaml) og [naiserator-prod.yaml](../.nais/naiserator-prod.yaml) må du legge inn de `env` variablene som trengs.
   Se for eksempel hvilke `env` variabler andre har lagt inn.
   Husk å legge inn under `accessPolicy` hvilken backend mikrofrontend'en skal snakke med.
    Eksempel:

   ```yaml
    accessPolicy:
       outbound:
         rules:
           - application: sokos-up-ors-api
           - application: sokos-up-kontoregister-api
         external:
           - host: sokos-skattekort-person.dev-fss-pub.nais.io
           - host: sokos-oppdrag.dev-fss-pub.nais.io
           - host: sokos-ur-iso.dev-fss-pub.nais.io
   ```

   Skal mikrofrontend'en snakke med en applikasjon  i `fss` cluster så må du gjøre [følgende](https://docs.nais.io/workloads/explanations/migrating-to-gcp/#how-do-i-reach-an-application-found-on-premises-from-my-application-in-gcp). Den må da ligge under `accessPolicy external` som i eksempelet over.
   Det må også være åpnet opp for trafikk fra Utbetalingsportalen inn til applikasjonen:

     ```yaml
       accessPolicy:
        inbound:
          rules:
            - application: sokos-utbetalingsportalen
              namespace: okonomi
              cluster: dev-gcp
      ```
   
6. Env variablene som er lagt inn i naiserator-filene skal defineres i [config.ts](/server/src/config.ts)
   _De tre env variablene som må være med er: PROXY, API, OG API_SCOPE._ 
   API er den faktiske adressen til tjenesten.
   ```yaml
       - name: SOKOS_SKATTEKORT_PERSON_API
         value: https://sokos-skattekort-person.dev-fss-pub.nais.io
   ```
   PROXY brukes internt i Utbetalingsportalen for å definere path'en for å nå tjenesten.
   ```yaml
        - name: SOKOS_SKATTEKORT_PROXY
          value: "/skattekort-api"
   ```
   Skal du kun deploye til dev så er dette formatet ok:
   ```typescript
   SOKOS_SPK_MOTTAK_API: z.string().default(""),
   SOKOS_SPK_MOTTAK_API_SCOPE: z.string().default(""),
   SOKOS_SPK_MOTTAK_PROXY: z.string().default(""),
   ````
   I prod så trenger vi ikke default verdien siden environment variablene da er tilstede for begge miljøene.
   ```typescript
    SOKOS_SPK_MOTTAK_API: z.string(),
    SOKOS_SPK_MOTTAK_API_SCOPE: z.string(),
    SOKOS_SPK_MOTTAK_PROXY: z.string(),
    ````

7. Under [server.ts](../server/src/server.ts) må du legge inn proxy til applikasjonen mikrofrontend'en skal snakke med.

   ```typescript
     routeProxyWithOboToken(
      path: Config.SOKOS_MIKROFRONTEND_PROXY,
      apiUrl: Config.SOKOS_MIKROFRONTEND_API,
      apiScope: Config.SOKOS_MIKROFRONTEND_API_SCOPE,
    );
   ```
   Skal applikasjonen kun deployes til dev så legges den inn under:
   ```typescript
       if (Config.NAIS_CLUSTER_NAME === "dev-gcp") {
   ```

   🎉 Nå er `sokos-utbetalingsportalen` klar til å kunne rendre mikrofrontend'en og rute rest kallene til riktig api.
