import { HouseIcon, MenuHamburgerIcon, XMarkIcon } from "@navikt/aksel-icons";
import { InternalHeader, Link, Theme } from "@navikt/ds-react";
import { getAuthorizedApps } from "@utils/accessControl";
import type { PropsWithChildren } from "react";
import { useEffect, useRef, useState } from "react";
import styles from "./SideBar.module.css";

type SideBarProps = {
	adGroups: string[];
};

function SideBarLink({
	children,
	route,
}: PropsWithChildren & { route: string }) {
	const isActive =
		typeof window !== "undefined" &&
		(window.location.pathname === route ||
			(route !== "/" && window.location.pathname.startsWith(`${route}/`)));

	return (
		<Link
			className={`${styles.sidebar__link} ${isActive ? styles["sidebar__link--active"] : ""}`}
			href={route}
		>
			{children}
		</Link>
	);
}

export default function SideBar({ adGroups }: SideBarProps) {
	const authorizedApps = getAuthorizedApps(adGroups);
	const [isOpen, setIsOpen] = useState(false);
	const [showButton, setShowButton] = useState(true);
	const sidebarRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const event = new CustomEvent("sidebarStateChange", {
			detail: { isOpen },
		});
		document.dispatchEvent(event);
	}, [isOpen]);

	useEffect(() => {
		if (!isOpen) return;

		function handleClickOutside(event: MouseEvent) {
			if (
				sidebarRef.current &&
				!sidebarRef.current.contains(event.target as Node)
			) {
				setShowButton(false);
				setIsOpen(false);
			}
		}

		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [isOpen]);

	const handleToggle = () => {
		if (isOpen) {
			setShowButton(false);
			setIsOpen(false);
		} else {
			setIsOpen(true);
			setShowButton(true);
		}
	};

	const handleTransitionEnd = () => {
		if (!isOpen) {
			setShowButton(true);
		}
	};

	return (
		<Theme theme="dark" asChild hasBackground={false}>
			<nav
				className={`aksel-internalheader ${styles.sidebar} ${!isOpen ? styles["sidebar--closed"] : ""}`}
				ref={sidebarRef}
				onTransitionEnd={handleTransitionEnd}
			>
				{!isOpen ? (
					showButton && (
						<InternalHeader.Button
							className={`${styles.sidebar__toggleButton} ${styles["sidebar__toggleButton--closed"]}`}
							onClick={handleToggle}
						>
							<MenuHamburgerIcon title="Hamburgermeny ikon" />
						</InternalHeader.Button>
					)
				) : (
					<>
						<div className={styles.sidebar__closeButton}>
							<InternalHeader.Button
								className={styles.sidebar__toggleButton}
								onClick={handleToggle}
							>
								Lukk
								<XMarkIcon title="Lukk ikon" />
							</InternalHeader.Button>
						</div>

						<ul className={styles.sidebar__list}>
							<li>
								<SideBarLink route="/">
									<HouseIcon
										className={styles.sidebar__icon}
										title="Hus ikon"
									/>
									Hjem
								</SideBarLink>
							</li>
							{authorizedApps
								.slice()
								.sort((a, b) => a.title.localeCompare(b.title))
								.map((page) => (
									<li key={page.app}>
										<SideBarLink route={page.route}>{page.title}</SideBarLink>
									</li>
								))}
						</ul>
					</>
				)}
			</nav>
		</Theme>
	);
}
