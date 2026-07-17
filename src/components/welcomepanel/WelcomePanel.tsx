import { BodyLong, GuidePanel, Heading, Link } from "@navikt/ds-react";
import moneyBag from "../../../public/images/pengesekk.svg";
import styles from "./WelcomePanel.module.css";

type WelcomePanelProps = {
	name: string;
	greeting: string;
};

export default function WelcomePanel({ name, greeting }: WelcomePanelProps) {
	return (
		<div className={styles.welcomeGuidepanel}>
			<div className={styles.welcomeGuidepanel__heading}>
				<Heading level="1" size="large" spacing>
					{greeting}, {name}
				</Heading>
			</div>
			<div className={styles.welcomeGuidepanel__panel}>
				<GuidePanel illustration={<img src={moneyBag.src} alt="" />}>
					<Heading level="2" size="small" spacing>
						Ny design!
					</Heading>
					<BodyLong spacing>
						Fordi Aksel, designspråket til Nav, har oppdatert til versjon 8 har
						vi måttet gjøre noen endringer og dermed også forbedringer. Du vil i
						en overgangsperiode oppleve at applikasjonene endrer over til nytt
						design i forskjellig tempo og det vil være litt forskjeller.
					</BodyLong>
					<BodyLong>
						<Link
							href="https://navno.sharepoint.com/sites/fag-og-ytelser-stonadsokonomi/SitePages/Utbetalingsportalen.aspx"
							target="_blank"
							rel="noopener noreferrer"
						>
							Les mer om Utbetalingsportalen og hvordan du får tilgang til de
							ulike arbeidsflatene (Navet)
						</Link>
					</BodyLong>
				</GuidePanel>
			</div>
		</div>
	);
}
