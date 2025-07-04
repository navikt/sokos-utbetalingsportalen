# Guide for å legge til en mikrofrontend

1. I [naiserator-dev.yaml](../.) og [naiserator-prod.yaml](../.nais/naiserator-prod.yaml) må du legge inn de `env` variablene som trengs. <br>
   Se for eksempel `# sokos-astro-template (Astro mikrofrontend template)` i [naiserator-q1.yaml](../.nais/naiserator-q1.yaml) hvilken `env` variabler du må legge inn. <br>
   Husk å legge inn under `accessPolicy` hvilken Astro mikrofrontend du skal hente HTML fra.

   ```yaml
    accessPolicy:
       outbound:
         rules:
           - application: sokos-astro-template
         external:
           - host: sokos-astro-template.dev-fss-pub.nais.io
   ```

   Skal du hente HTML fra mikrofrontend'en i `fss` cluster så må du gjøre [følgende](https://docs.nais.io/workloads/explanations/migrating-to-gcp/#how-do-i-reach-an-application-found-on-premises-from-my-application-in-gcp). Den må da ligge under `accessPolicy -> outbound -> external` som i eksempelet over.
   Det må også være åpnet opp for trafikk fra `sokos-utbetalingsportalen` inn til mikrofrontenden:

   ```yaml
      accessPolicy:
        inbound:
          rules:
            - application: sokos-utbetalingsportalen
   ```

2. Legg inn AD-Gruppe for mikrofrontenden i [naiserator-dev.yaml](../.) og [naiserator-prod.yaml](../.nais/naiserator-prod.yaml). Denne AD-Gruppen gir kun tilgang til brukeren for å hente ut HTML. Resten av tilgangene kan styres fra mikrofrontenden.

3. Nå skal du legge inn følgende kode:

    ```js
    ---
    import MicrofrontendWrapperServer from "@components/microfrontend/MicrofrontendWrapperServer.astro";
    ---

    <MicrofrontendWrapperServer
        appTitle="Astro Template"
        appUrl={process.env.SOKOS_ASTRO_TEMPLATE_URL}
        appAudience={process.env.SOKOS_ASTRO_TEMPLATE_AUDIENCE}
    />
    ```

🚨‼️ **NB** `appUrl` og `appAudience` variablen henter `env` fra [naiserator-dev.yaml](../.) og [naiserator-prod.yaml](../.nais/naiserator-prod.yaml). `appTitle` er tittelen som vises i tab-bar i browser vinduet (Helst tittel med stor bokstav først).

<br>

# Nå er `Utbetalingsportalen` klar til å kunne rendre HTML fra mikrofrontend'en 🎉