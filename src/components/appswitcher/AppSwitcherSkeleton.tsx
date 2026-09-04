import { Heading, Skeleton, Switch, VStack } from "@navikt/ds-react";
import styles from "./AppSwitcherSkeleton.module.css";

export default function AppSwitcherSkeleton() {
	return (
		<VStack
			gap="space-12"
			aria-busy="true"
			aria-live="polite"
			aria-label="Laster applikasjoner"
		>
			<section>
				<Heading level="2" size="medium" spacing>
					Dine apper
				</Heading>
				<div className={styles.appCardGrid}>
					{[1, 2, 3, 4].map((item) => (
						<div key={item} className={styles.appCardGrid__skeleton}>
							<div className={styles.appCardGrid__titleWrapper}>
								<Skeleton variant="text" width="60%" height="24px" />
							</div>
							<div className={styles.appCardGrid__descriptionWrapper}>
								<Skeleton variant="text" width="90%" />
							</div>
						</div>
					))}
				</div>
				<Switch loading className={styles.showAllToggle}>
					Vis også applikasjoner jeg ikke har tilgang til
				</Switch>
			</section>
			<section>
				<Heading level="2" size="medium" spacing>
					Snarveier til andre systemer
				</Heading>
				<div className={styles.appCardGrid}>
					{[1, 2, 3].map((item) => (
						<div key={item} className={styles.appCardGrid__skeleton}>
							<div className={styles.appCardGrid__titleWrapper}>
								<Skeleton variant="text" width="60%" height="24px" />
							</div>
							<div className={styles.appCardGrid__descriptionWrapper}>
								<Skeleton variant="text" width="90%" />
							</div>
						</div>
					))}
				</div>
			</section>
		</VStack>
	);
}
