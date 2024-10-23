import { PropsWithChildren } from "react";
import { NavLink } from "react-router-dom";
import styles from "./SideBarLink.module.css";

export default function SideBarLink({
  children,
  to,
}: PropsWithChildren & { to: string }) {
  return (
    <NavLink
      className={({ isActive }) =>
        `${styles["sidebarlink"]} ${isActive ? styles["active"] : ""}`
      }
      to={to}
    >
      <div className={styles["sidebarlink-child"]}>{children}</div>
    </NavLink>
  );
}
