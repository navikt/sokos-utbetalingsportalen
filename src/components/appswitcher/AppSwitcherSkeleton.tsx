import { Heading, Skeleton, Switch } from "@navikt/ds-react";
import styles from "./AppSwitcherSkeleton.module.css";

export default function AppSwitcherSkeleton() {
	return (
		<>
			<Heading level="3" size="medium" spacing>
				Apper
			</Heading>
			<Switch loading>Vis alle</Switch>
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
		</>
	);
}
