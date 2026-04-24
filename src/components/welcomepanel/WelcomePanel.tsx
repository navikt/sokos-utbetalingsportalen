import { BodyLong, GuidePanel, Heading, Link } from "@navikt/ds-react";
import moneyBag from "../../../public/images/pengesekk.svg";
import styles from "./WelcomePanel.module.css";

type WelcomePanelProps = {
	name: string;
	greeting: string;
};

export default function WelcomePanel({ name, greeting }: WelcomePanelProps) {
	return (
		<div className={styles.container}>
			<Heading level="1" size="large" spacing align="center">
				{greeting}, {name}
			</Heading>
			<GuidePanel
				poster
				illustration={<img src={moneyBag.src} alt="Pengesekk" />}
			>
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
			</GuidePanel>
		</div>
	);
}
