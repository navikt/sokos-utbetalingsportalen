# Guide for å legge til en mikrofrontend

1. Legg inn følgende verdier i [MicrofrontendApps.ts](/src/MicrofrontendApp.ts) :
    ```typescript
    {
      app: "VENTEREGISTER",
      title: "Venteregister",
      description: "Venteregister for oppdrag",
      group: adGroup({
        adGroupDevelopment: "48a80bbb-be45-4ef6-aab8-21604f057f47",
        adGroupProduction: "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"
      }),
      route: "/venteregister",
      url: mikrofrontendUrl("sokos-up-venteregister"),
    },
    ```
    Beskrivelse av følgende verdier:
      - **app** (Applikasjon navn)
      - **title** (Dette er det som vises i menyen (Sidebar))
      - **description** (Beskrivelse av hva dette skjermbildet)
      - **group** -> (Legg inn UUID for både dev og prod)
      - **route** -> (Url lenke i Utbetalingsportalen)
          ```
          * Forkortelser i URL er ikke en god idé. Det er bedre å bruke hele ord.
          * Bruk små bokstaver i URL.
          * Bruke bindestrek i URL for å skille på ord.
          * Ikke bruk Æ Ø Å. Skriv heller: Æ = AE, Ø = OE, Å = AA.
          ```
      - **url** -> (NAIS app navn)
   <br></br>

2. I [naiserator-dev.yaml](../.nais/naiserator-dev.yaml) og [naiserator-prod.yaml](../.nais/naiserator-prod.yaml) må du legge inn de `env` variablene som trengs.
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

   Skal mikrofrontend'en snakke med en applikasjon  i `fss` cluster så må du gjøre [følgende](https://docs.nais.io/workloads/explanations/migrating-to-gcp/#how-do-i-reach-an-application-found-on-premises-from-my-application-in-gcp). Den må da ligge under `accessPolicy -> outbound -> external` som i eksempelet over.
   Det må også være åpnet opp for trafikk fra Utbetalingsportalen inn til applikasjonen:

     ```yaml
       accessPolicy:
        inbound:
          rules:
            - application: sokos-utbetalingsportalen
              namespace: okonomi
              cluster: dev-gcp
      ```

    Env variablene som er lagt inn i naiserator-filene skal defineres i [config.ts](/server/src/config.ts)
   _De tre env variablene som må være med er: PROXY, API, OG API_SCOPE._

      Formatet skal være følgende:
   ```typescript
   SOKOS_SPK_MOTTAK_API: z.string(),
   SOKOS_SPK_MOTTAK_API_SCOPE: z.string(),
   SOKOS_SPK_MOTTAK_PROXY: z.string(),
   ````

      API er den faktiske adressen til tjenesten.
      ```yaml
          - name: SOKOS_SKATTEKORT_PERSON_API
            value: https://sokos-skattekort-person.dev-fss-pub.nais.io
      ```
      SCOPE brukes internt i Utbetalingsportalen for å definere path'en for å nå tjenesten.
      ```yaml
           - name: SOKOS_SKATTEKORT_API_SCOPE
              value: "api://dev-fss.okonomi.sokos-skattekort-person/.default"
      ```
      PROXY brukes internt i Utbetalingsportalen for å definere path'en for å nå tjenesten.
      ```yaml
            - name: SOKOS_SKATTEKORT_PROXY
             value: "/skattekort-api"
      ```

3. Under [server.ts](../server/src/server.ts) må du legge inn proxy til applikasjonen mikrofrontend'en skal snakke med.

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
