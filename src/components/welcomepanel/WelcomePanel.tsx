import { BodyLong, Heading, GuidePanel as Panel, Link } from "@navikt/ds-react";
import styles from "./WelcomePanel.module.css";
import moneyBag from "../../../public/images/pengesekk.svg";

type WelcomePanelProps = {
  name: string;
  greeting: string;
};

export default function GuidePanel({ name, greeting }: WelcomePanelProps) {
  return (
    <div className={styles["welcomeGuidepanel"]}>
      <div className={styles["welcomeGuidepanel__heading"]}>
        <Heading level="1" size="large" spacing>
          {greeting}, {name}
        </Heading>
      </div>
      <Panel poster illustration={<img src={moneyBag.src} alt="Pengesekk" />}>
        <Heading level="2" size="small" spacing>
          Informasjon om Utbetalingsportalen
        </Heading>
        <BodyLong spacing>
          Dette er en ny platform som på sikt skal overta funksjoner fra
          Økonomiportalen og Abetal i en ny og forbedret versjon.
        </BodyLong>
        <BodyLong>
          <Link
            href="https://navno.sharepoint.com/sites/fag-og-ytelser-stonadsokonomi/SitePages/Utbetalingsportalen.aspx"
            target="_blank"
          >
            Les mer om Utbetalingsportalen og hvordan du får tilgang til de
            ulike arbeidsflatene (Navet)
          </Link>
        </BodyLong>
      </Panel>
    </div>
  );
}
