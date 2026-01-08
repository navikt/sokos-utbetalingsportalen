import { Loader } from "@navikt/ds-react";
import styles from "./SideBar.module.css";

export default function SideBarSkeleton() {
	return (
		<nav className={`${styles["sidebar--closed"]} ${styles.sidebar}`}>
			<div style={{ padding: "0.7rem" }}>
				<Loader variant="inverted" />
			</div>
		</nav>
	);
}
