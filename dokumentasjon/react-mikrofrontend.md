# Guide for å legge til en mikrofrontend

1. I [naiserator-q1.yaml](../.nais/naiserator-q1.yaml) og [naiserator-prod.yaml](../.nais/naiserator-prod.yaml) må du legge inn de `env` variablene som trengs.

Se for eksempel hvilke `env` variabler andre har lagt inn.

Husk å legge inn under `accessPolicy` hvilken backend applikasjonen skal snakke med.

   ```yaml
    accessPolicy:
       outbound:
         rules:
           - application: sokos-up-kontoregister-api
         external:
           - host: sokos-oppdrag.dev-fss-pub.nais.io
   ```

   Skal applikasjonen snakke med en backend i `fss` clusteret så må du gjøre [følgende](https://docs.nais.io/workloads/explanations/migrating-to-gcp/#how-do-i-reach-an-application-found-on-premises-from-my-application-in-gcp). 

   Den må da ligge under `accessPolicy -> outbound -> external` som i eksempelet over.

   Det må også være åpnet opp for trafikk fra `sokos-utbetalingsportalen` inn til API:

     ```yaml
       accessPolicy:
        inbound:
          rules:
            - application: sokos-utbetalingsportalen
              namespace: okonomi
              cluster: dev-gcp
      ```

   Legg inn riktig env variabler til backend som mikrofrontend skal snakke med:

     ```yaml
          # sokos-oppdrag
          - name: SOKOS_OPPDRAG_API
            value: https://sokos-oppdrag.dev-fss-pub.nais.io
          - name: SOKOS_OPPDRAG_API_AUDIENCE
            value: api://dev-fss.okonomi.sokos-oppdrag/.default
          - name: SOKOS_OPPDRAG_API_PROXY
            value: "/oppdrag-api"
      ```

      *API er den faktiske adressen til tjenesten*

      ```yaml
          # eksempel for en tjeneste i fss
          - name: SOKOS_OPPDRAG_API
            value: https://sokos-skattekort-person.dev-fss-pub.nais.io

          # eksempel for en tjeneste i gcp - http og ikke https!
          - name: SOKOS_OPPDRAG_API
            value: http://sokos-oppdrag
      ```

      *SCOPE representerer en tillatelse som en gitt forbruker har tilgang til.*

      ```yaml
           - name: SOKOS_OPPDRAG_API_AUDIENCE
             value: api://dev-fss.okonomi.sokos-oppdrag/.default
      ```

      *PROXY brukes internt i Utbetalingsportalen for å definere path'en for å nå tjenesten.*

      ```yaml
            - name: SOKOS_OPPDRAG_API_PROXY
              value: "/oppdrag-api"
      ```


2. Legg inn følgende verdier i [appConfig.ts](/src/config/appConfig.ts) i `apps`-arrayet:

    ```typescript
    {
      app: "ATTESTASJON",
      title: "Attestasjon",
      description: "Attestering av oppdrag",
      adGroupDevelopment: "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
      adGroupProduction: "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
      route: "/attestasjon",
      naisAppName: "sokos-up-attestasjon",
    },
    ```

    Beskrivelse av følgende verdier:
      - **app** (Applikasjonsnavn - brukes som nøkkel, store bokstaver)
      - **title** (Dette er det som vises i menyene)
      - **description** (Beskrivelse av applikasjonen)
      - **adGroupDevelopment** -> (Legg inn UUID for dev)
      - **adGroupProduction** -> (Legg inn UUID for prod, bruk `PLACEHOLDER_AD_GROUP` konstant hvis ikke klar enda)
      - **route** -> (Url lenke i Utbetalingsportalen)
      - **naisAppName** -> (NAIS app navn til mikrofrontend)

        > - Forkortelser i URL er ikke en god idé. Det er bedre å bruke hele ord.
        > - Bruk små bokstaver i URL.
        > - Bruke bindestrek i URL for å skille på ord.
        > - Ikke bruk Æ Ø Å. Skriv heller: Æ = AE, Ø = OE, Å = AA.



3. Lag en mappe som har samme navn som proxy routen satt i mikrofrontend. F.eks `/oppdrag-api`, da navngir du mappen `oppdrag-api` under [pages](/src/pages/).
   Inne i den mappen lager du en fil som heter `[...proxy].ts`.
   Variablene som er lagt inn i naiserator-filene skal defineres inne i `[...proxy].ts]` filen:

   ```typescript
    import type { APIRoute } from "astro";
    import { routeProxyWithOboToken } from "src/utils/server/proxy";

    export const ALL: APIRoute = routeProxyWithOboToken({
      apiProxy: `${process.env.SOKOS_OPPDRAG_API_PROXY}`,
      apiUrl: `${process.env.SOKOS_OPPDRAG_API}`,
      audience: `${process.env.SOKOS_OPPDRAG_API_AUDIENCE}`,
    });
   ````

    Har du routing i applikasjonen? Følg pkt. 1.

    Har du ikke routing? Følg pkt. 2

    1. Routing -> Lag en mappe som heter det samme som `route: "/attestasjon"` i pkt. 2. Altså [attestasjon](/src/pages/attestasjon/) under [pages](/src/pages/). Inne i mappen lager du en fil med navn `[...attestasjon].astro`. Inne i denne filen legger du inn koden ovenfor.
    2. Ikke routing -> Lag filen `attestasjon.astro` direkte under [pages](/src/pages/). Inne i denne filen legger du inn koden ovenfor.
    3. Nå skal du legge inn følgende kode:

        ```js
          ---
          import MicrofrontendWrapperClient from "../components/microfrontend/MicrofrontendWrapperClient.astro";
          ---

          <MicrofrontendWrapperClient appName="attestasjon" />
        ```

    4. Endre `attestasjon` til appnavn du skal hente config for


🚨‼️ **NB** `appName` variablen må være lik `app` (men lowercase) i [appConfig.ts](/src/config/appConfig.ts)
      for å hente config fra [appConfig.ts](/src/config/appConfig.ts).

## Nå er `Utbetalingsportalen` klar til å kunne rendre mikrofrontend'en og rute api kallene til riktig backend 🎉
