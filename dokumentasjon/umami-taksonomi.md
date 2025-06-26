# Umami-taksonomi for Utbetalingsportalen

Utbetalingsportalen selv og arbeidsflatene som tilbys via den anbefales å bruke taksonomien under for navngiving av
Umami-hendelser og hendelsenes tilhørende detaljer.

Ved å anbefale en felles taksonomi på tvers av arbeidsflatene håper vi det vil bli lettere å forstå hva de forskjellige
Umami-hendelsene betyr. Det vil potensielt også åpne for noe gjenbruk av kode - både kode i selve arbeidsflatene, og
kode for analyse av Umami-hendelser.

Det er dog opp til hver enkelt arbeidsflate å vurdere hvilke hendelser man ønsker å samle inn.
Hendelser man ikke tror er relevante for spørsmålene man håper å få svar på med analyse, kan utelates.

Taksonomien her er basert på [Navs taksonomi for produktanalyser](https://startumami.ansatt.nav.no/taksonomi).
En del av hendelsene som er beskrevet der er også med under - da forhåpentligvis her med bedre info om hva
hendelses-typen er tenkt brukt til, og/eller bedre beskrivelse av hvordan hendelsens detaljer er ment brukt.
Det er dog ikke et mål at vi skal ende opp med vår egen kopi av hele Nav-taksonomien under her.

## Hvordan oppdatere taksonomien?

Dersom noen har behov for å kunne sende hendelser som ikke er beskrevet i taksonomien, eller med ekstra detaljer på en
hendelse som allerede finnes, bør taksonomien oppdateres først. På den måten vil neste person som har et tilsvarende
behov kunne gjøre ting likt, og man unngår å ende opp med unødvendig divergens i hvordan forskjellige arbeidsflater
strukturerer Umami-hendelsene sine.

Har man behov for å endre på navn eller detaljer for hendelses-typer som allerede er nevnt i taksonomien, bør alle
relevante team holdes informert. Dette er i noen grad forsøkt hensyntatt ved å sette `@navikt/okonomi` som codeowner
for dette dokumentet - slik at nye PRs med endringer her automatisk varsler hele `okonomi`-teamet... men det er
helt klart ønskelig at man også bruker andre kanaler for å informere om/diskutere slike endringer.

## Taksonomien

[Aksel-taksonomi]: https://startumami.ansatt.nav.no/taksonomi#aksel-komponenter "Anbefalt taksonomi for Aksel-komponenter"

Hendelsene er her forsøkt listet opp alfabetisk etter navn.

### `accordion lukket` (kilde: [Aksel-taksonomi])

Typisk brukt når en [Aksel \<Accordion/>](https://aksel.nav.no/komponenter/core/accordion) blir lukket.

| Detalj        | Forklaring                                           |
|---------------|------------------------------------------------------|
| `komponentId` | Unik ID for komponenten                              |
| `tittel`      | Beskrivelse av hvilket accordion hendelsen omhandler |

### `accordion åpnet` (kilde: [Aksel-taksonomi])

Typisk brukt når en [Aksel \<Accordion/>](https://aksel.nav.no/komponenter/core/accordion) blir åpnet.

| Detalj        | Forklaring                                           |
|---------------|------------------------------------------------------|
| `komponentId` | Unik ID for komponenten                              |
| `tittel`      | Beskrivelse av hvilket accordion hendelsen omhandler |

### `alert lukket` (kilde: [Aksel-taksonomi])

Typisk brukt når en [Aksel \<Alert/>](https://aksel.nav.no/komponenter/core/alert) blir lukket.

| Detalj         | Forklaring                                        |
|----------------|---------------------------------------------------|
| `alertType`    | Type varsel                                       |
| `alertVariant` | Identifikator for komponenten (error/warning/etc) |

### `expandablerow lukket` (kilde: dette dokumentet)

En [Aksel \<Table.ExpandableRow/>](https://aksel.nav.no/komponenter/core/table#bb01ec258f5f) blir lukket.

| Detalj  | Forklaring                                        |
|---------|---------------------------------------------------|
| `tekst` | Beskrivelse av hvilken tabell hendelsen omhandler |

### `expandablerow åpnet` (kilde: dette dokumentet)

En [Aksel \<Table.ExpandableRow/>](https://aksel.nav.no/komponenter/core/table#bb01ec258f5f) blir åpnet.

| Detalj  | Forklaring                                        |
|---------|---------------------------------------------------|
| `tekst` | Beskrivelse av hvilken tabell hendelsen omhandler |

### `knapp klikket` (kilde: [Aksel-taksonomi])

En knapp, f.eks. en [Aksel \<Button/>](https://aksel.nav.no/komponenter/core/button), har blitt klikket på.

| Detalj         | Forklaring                                   |
|----------------|----------------------------------------------|
| `tekst`        | Beskrivelse av hvilken knapp som ble klikket |
| `knappType`    | Type knapp (submit/reset/button)             |
| `knappVariant` | Variant av knappen (primær/sekundær/etc)     |

### `les mer lukket` (kilde: [Aksel-taksonomi])

Panel med "les mer"-tekst, f.eks. en [Aksel \<ReadMore/>](https://aksel.nav.no/komponenter/core/read-more) blir lukket.

| Detalj     | Forklaring                                           |
|------------|------------------------------------------------------|
| `lesMerId` | Identifikator for komponenten                        |
| `tittel`   | Beskrivelse av hvilken komponent hendelsen omhandler |

### `les mer åpnet` (kilde: [Aksel-taksonomi])

Panel med "les mer"-tekst, f.eks. en [Aksel \<ReadMore/>](https://aksel.nav.no/komponenter/core/read-more) blir åpnet.

| Detalj     | Forklaring                                           |
|------------|------------------------------------------------------|
| `lesMerId` | Identifikator for komponenten                        |
| `tittel`   | Beskrivelse av hvilken komponent hendelsen omhandler |

### `modal lukket` (kilde: [Aksel-taksonomi])

En modal dialog blir lukket, f.eks. en [Aksel \<Modal/>](https://aksel.nav.no/komponenter/core/modal).

| Detalj    | Forklaring                                       |
|-----------|--------------------------------------------------|
| `modalId` | ID for modal-dialogen                            |
| `tittel`  | Beskrivelse av hvilken modal hendelsen omhandler |

### `modal åpnet` (kilde: [Aksel-taksonomi])

En modal dialog blir åpnet, f.eks. en [Aksel \<Modal/>](https://aksel.nav.no/komponenter/core/modal).

| Detalj    | Forklaring                                       |
|-----------|--------------------------------------------------|
| `modalId` | ID for modal-dialogen                            |
| `tittel`  | Beskrivelse av hvilken modal hendelsen omhandler |

### `søk startet` (kilde: dette dokumentet)

Bruker har startet et søk, f.eks. ved å trykke på "Søk"-knappen i et søkeskjema.

Om man har et søkeskjema med flere felter i, kan hendelses-detaljene her avledes av hvilke felter i søkeskjemaet som er
utfylt - som så får verdi `true`, slik at man ikke sender f.eks. fnr til Umami. Ikke-utfylte søkefelter kan enten
utelates eller få verdi `false`.

### `tekst kopiert` (kilde: [Aksel-taksonomi])

Bruker har kopiert ut tekst fra et element, enten ved hjelp av en egen
[Aksel \<CopyButton/>](https://aksel.nav.no/komponenter/core/copybutton) eller med manuell markering og nettleserens
"kopier"-funksjon.

| Detalj | Forklaring                                         |
|--------|----------------------------------------------------|
| tekst  | Beskrivelse av elementet det har blitt kopiert fra |
