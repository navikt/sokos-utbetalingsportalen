# Guide for å legge til en mikrofrontend

1. I [naiserator-dev.yaml](../.nais/naiserator-dev.yaml) og [naiserator-prod.yaml](../.nais/naiserator-prod.yaml) må du legge inn de `env` variablene som trengs.
   Se for eksempel hvilke `env` variabler andre har lagt inn.
   Husk å legge inn under `accessPolicy` hvilken backend mikrofrontend'en skal snakke med.
    Eksempel:

   ```yaml
    accessPolicy:
       outbound:
         rules:
           - application: sokos-up-kontoregister-api
         external:
           - host: sokos-oppdrag.dev-fss-pub.nais.io
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

    </br></br>
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

<br></br>

2. Legg inn følgende verdier i [microfrontend.ts](/src/microfrontend.ts) :
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
      - **app** (Applikasjon navn)
      - **title** (Dette er det som vises i menyen (Sidebar))
      - **description** (Beskrivelse av hva dette skjermbildet)
      - **adGroupDevelopment** -> (Legg inn UUID for dev)
      - **adGroupProduction** -> (Legg inn UUID for dprodev)
      - **route** -> (Url lenke i Utbetalingsportalen)
          ```
          * Forkortelser i URL er ikke en god idé. Det er bedre å bruke hele ord.
          * Bruk små bokstaver i URL.
          * Bruke bindestrek i URL for å skille på ord.
          * Ikke bruk Æ Ø Å. Skriv heller: Æ = AE, Ø = OE, Å = AA.
          ```
      - **naisAppName** -> (NAIS app navn til mikrofrontend)

<br></br>

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

4. Nå skal du legge inn følgende kode:

    ```js
      ---
      import MicrofrontendWrapper from "../components/microfrontend/MicrofrontendWrapperClient.astro";
      ---

      <MicrofrontendWrapper appName="attestasjon" />
    ```

🚨‼️ **NB** `appName` variablen må være lik `app` i [microfrontend.ts](/src/microfrontend.ts)

Har du en routing i mikrofrontend? Følg pkt. 1. </br>
Har du ikke routing i mikrofrontend? Følg pkt. 2 </br>

  1. Routing -> Lag en mappe som heter det samme som `route: "/attestasjon"` i pkt. 2. Altså [attestasjon](/src/pages/attestasjon/) under [pages](/src/pages/). Inne i mappen lager du en fil med navn `[...attestasjon].astro`. Inne i denne filen legger du inn koden ovenfor.
  2. Ikke routing -> Lag filen `attestasjon.astro` direkte under [pages](/src/pages/). Inne i denne filen legger du inn koden ovenfor.
  3. Endre `attestasjon` til appnavn du skal hente config for ->

      ```
      <MicrofrontendWrapper appName="attestasjon" />
      ```
      til å hente config fra [microfrontend.ts](/src/microfrontend.ts).

<br></br>

# Nå er `Utbetalingsportalen` klar til å kunne rendre mikrofrontend'en og rute api kallene til riktig backend 🎉