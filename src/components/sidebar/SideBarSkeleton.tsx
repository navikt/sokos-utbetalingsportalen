import { Loader, Theme } from "@navikt/ds-react";
import styles from "./SideBar.module.css";

export default function SideBarSkeleton() {
	return (
		<Theme theme="dark" asChild hasBackground={false}>
			<nav
				className={`aksel-internalheader ${styles["sidebar--closed"]} ${styles.sidebar}`}
			>
				<div style={{ padding: "0.7rem" }}>
					<Loader variant="inverted" />
				</div>
			</nav>
		</Theme>
	);
}
