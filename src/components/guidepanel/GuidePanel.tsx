import { BodyLong, Heading, GuidePanel as Panel } from "@navikt/ds-react";
import moneyBag from "../../../public/images/pengesekk.svg";

export default function GuidePanel() {
  return (
    <Panel poster illustration={<img src={moneyBag.src} alt="NAV logo" />}>
      <Heading level="2" size="small" spacing>
        Informasjon om utbetalingsportalen
      </Heading>
      <BodyLong spacing>
        Utbetalingsportalen er en ny platform som på sikt skal overta funksjoner
        fra Økonomiportalen og Abetal i en ny og forbedret versjon.
      </BodyLong>
    </Panel>
  );
}
