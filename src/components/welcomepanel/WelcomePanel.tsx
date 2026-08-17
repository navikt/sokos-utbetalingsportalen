import { GuidePanel, Heading } from "@navikt/ds-react";
import type { ReactNode } from "react";
import moneyBag from "../../../public/images/pengesekk.svg";
import styles from "./WelcomePanel.module.css";

type WelcomePanelProps = {
	name: string;
	greeting: string;
	children: ReactNode;
};

export default function WelcomePanel({
	name,
	greeting,
	children,
}: WelcomePanelProps) {
	return (
		<div className={styles.welcomeGuidepanel}>
			<div className={styles.welcomeGuidepanel__heading}>
				<Heading level="1" size="large" spacing>
					{greeting}, {name}
				</Heading>
			</div>
			<div className={styles.welcomeGuidepanel__panel}>
				<GuidePanel illustration={<img src={moneyBag.src} alt="" />}>
					{children}
				</GuidePanel>
			</div>
		</div>
	);
}
