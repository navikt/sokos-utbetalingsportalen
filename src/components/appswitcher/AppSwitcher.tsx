import { apps, PLACEHOLDER_AD_GROUP } from "@config/appConfig";
import { Heading, LinkCard, Switch, Tooltip, VStack } from "@navikt/ds-react";
import type { ExternalLink } from "@types/ExternalLink";
import { getAuthorizedApps, hasAccessToApp } from "@utils/accessControl";
import { getClientSideEnvironment } from "@utils/client/environments";
import { useState } from "react";
import styles from "./AppSwitcher.module.css";
import linkCardStyles from "./LinkCard.module.css";

type AppSwitcherProps = {
	adGroups: string[];
	externalLinks: ExternalLink[];
};

function getAvailableApps() {
	const environment = getClientSideEnvironment();

	if (environment === "production") {
		return apps.filter((app) => app.adGroupProduction !== PLACEHOLDER_AD_GROUP);
	}

	return apps;
}

export default function AppSwitcher(props: AppSwitcherProps) {
	const authorizedApps = getAuthorizedApps(props.adGroups);
	const [showAll, setShowAll] = useState(false);
	const availableApps = getAvailableApps();

	const unauthorizedApps = availableApps.filter(
		(app) => !hasAccessToApp(props.adGroups, app),
	);

	function accessibleAppCards() {
		return authorizedApps
			.slice()
			.sort((a, b) => a.title.localeCompare(b.title))
			.map((app) => (
				<LinkCard key={app.app} className={linkCardStyles["linkCard--app"]}>
					<LinkCard.Title as="h3">
						<LinkCard.Anchor href={app.route}>{app.title}</LinkCard.Anchor>
					</LinkCard.Title>
					<LinkCard.Description>{app.description}</LinkCard.Description>
				</LinkCard>
			));
	}

	function inaccessibleAppCards() {
		return unauthorizedApps
			.slice()
			.sort((a, b) => a.title.localeCompare(b.title))
			.map((app) => (
				<Tooltip key={app.app} content="Du har ikke tilgang til denne appen">
					<LinkCard
						className={linkCardStyles["linkCard--disabled"]}
						tabIndex={0}
					>
						<LinkCard.Title as="h3">
							<span>{app.title}</span>
						</LinkCard.Title>
						<LinkCard.Description>{app.description}</LinkCard.Description>
					</LinkCard>
				</Tooltip>
			));
	}

	function shortcutCards() {
		return props.externalLinks.map((link) => (
			<LinkCard key={link.id} className={linkCardStyles["linkCard--shortcut"]}>
				<LinkCard.Title as="h3">
					<LinkCard.Anchor
						href={link.url}
						target="_blank"
						rel="noopener noreferrer"
					>
						{link.title}
					</LinkCard.Anchor>
				</LinkCard.Title>
				<LinkCard.Description>{link.description}</LinkCard.Description>
			</LinkCard>
		));
	}

	return (
		<VStack gap="space-12">
			<section aria-labelledby="dine-apper-heading">
				<Heading id="dine-apper-heading" level="2" size="medium" spacing>
					Dine apper
				</Heading>
				<div className={styles.linkCardGrid}>{accessibleAppCards()}</div>
				<Switch
					className={styles.showAllToggle}
					checked={showAll}
					onChange={(e) => setShowAll(e.target.checked)}
				>
					Vis også applikasjoner jeg ikke har tilgang til
				</Switch>
				{showAll && (
					<div
						className={`${styles.linkCardGrid} ${styles["linkCardGrid--inaccessible"]}`}
					>
						{inaccessibleAppCards()}
					</div>
				)}
			</section>

			<section aria-labelledby="snarveier-heading">
				<Heading id="snarveier-heading" level="2" size="medium" spacing>
					Snarveier til andre systemer
				</Heading>
				<div className={styles.linkCardGrid}>{shortcutCards()}</div>
			</section>
		</VStack>
	);
}
