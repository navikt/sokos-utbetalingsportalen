import { HouseIcon, MenuHamburgerIcon, XMarkIcon } from "@navikt/aksel-icons";
import { Button, Link, Theme } from "@navikt/ds-react";
import { getAuthorizedApps } from "@utils/accessControl";
import type { ReactNode } from "react";
import { useEffect, useMemo, useRef, useState } from "react";
import styles from "./SideBar.module.css";

type SideBarProps = {
	adGroups: string[];
};

interface SideBarLinkProps {
	route: string;
	children: ReactNode;
}

function SideBarLink({ route, children }: SideBarLinkProps) {
	const isActive =
		window.location.pathname === route ||
		(route !== "/" && window.location.pathname.startsWith(`${route}/`));

	return (
		<Link
			className={`${styles.sidebar__link} ${isActive ? styles["sidebar__link--active"] : ""}`}
			href={route}
			aria-current={isActive ? "page" : undefined}
		>
			<div className={styles.sidebar__linkChild}>{children}</div>
		</Link>
	);
}

export default function SideBar({ adGroups }: SideBarProps) {
	const [isOpen, setIsOpen] = useState(false);
	const [isHamburgerVisible, setIsHamburgerVisible] = useState(true);
	const sidebarRef = useRef<HTMLDivElement>(null);
	const closeButtonRef = useRef<HTMLButtonElement>(null);
	const hamburgerButtonRef = useRef<HTMLButtonElement>(null);
	const isMounted = useRef(false);

	const authorizedApps = useMemo(
		() =>
			getAuthorizedApps(adGroups).sort((a, b) =>
				a.title.localeCompare(b.title),
			),
		[adGroups],
	);

	useEffect(() => {
		document.dispatchEvent(
			new CustomEvent("sidebarStateChange", { detail: { isOpen } }),
		);
	}, [isOpen]);

	useEffect(() => {
		if (!isMounted.current) {
			isMounted.current = true;
			return;
		}
		if (isOpen) {
			closeButtonRef.current?.focus();
		} else {
			hamburgerButtonRef.current?.focus();
		}
	}, [isOpen]);

	useEffect(() => {
		if (!isOpen) return;

		function handleClickOutside(event: MouseEvent) {
			if (
				sidebarRef.current &&
				!sidebarRef.current.contains(event.target as Node)
			) {
				setIsHamburgerVisible(false);
				setIsOpen(false);
			}
		}

		function handleKeyDown(event: KeyboardEvent) {
			if (event.key === "Escape") {
				setIsHamburgerVisible(false);
				setIsOpen(false);
			}
		}

		document.addEventListener("mousedown", handleClickOutside);
		document.addEventListener("keydown", handleKeyDown);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
			document.removeEventListener("keydown", handleKeyDown);
		};
	}, [isOpen]);

	function handleOpen() {
		setIsOpen(true);
		setIsHamburgerVisible(true);
	}

	function handleClose() {
		setIsHamburgerVisible(false);
		setIsOpen(false);
	}

	function handleTransitionEnd() {
		if (!isOpen) setIsHamburgerVisible(true);
	}

	return (
		<Theme theme="dark" hasBackground={false}>
			<nav
				id="sidebar-nav"
				aria-label="Sidemeny"
				className={`${styles.sidebar} ${isOpen ? "" : styles["sidebar--closed"]}`}
				ref={sidebarRef}
				onTransitionEnd={handleTransitionEnd}
			>
				{isOpen ? (
					<>
						<div className={styles.sidebar__closeButton}>
							<Button
								ref={closeButtonRef}
								className={styles.sidebar__buttonColorClose}
								aria-label="Lukk"
								onClick={handleClose}
								icon={<XMarkIcon aria-hidden="true" />}
								iconPosition="right"
								variant="primary"
								data-color="neutral"
							>
								Lukk
							</Button>
						</div>

						<ul className={styles.sidebar__list}>
							<li className={styles.sidebar__links}>
								<SideBarLink route="/">
									<HouseIcon
										className={styles.sidebar__icon}
										aria-hidden="true"
									/>
									Hjem
								</SideBarLink>
							</li>
							{authorizedApps.map((page) => (
								<li key={page.app} className={styles.sidebar__links}>
									<SideBarLink route={page.route}>{page.title}</SideBarLink>
								</li>
							))}
						</ul>
					</>
				) : (
					isHamburgerVisible && (
						<Button
							ref={hamburgerButtonRef}
							aria-expanded={isOpen}
							aria-controls="sidebar-nav"
							aria-label="Åpne sidemeny"
							className={styles.sidebar__buttonColor}
							onClick={handleOpen}
							variant="primary"
							data-color="neutral"
							icon={<MenuHamburgerIcon aria-hidden="true" />}
						/>
					)
				)}
			</nav>
		</Theme>
	);
}
