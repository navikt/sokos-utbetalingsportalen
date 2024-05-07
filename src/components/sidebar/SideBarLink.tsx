import { PropsWithChildren } from "react";
import { NavLink } from "react-router-dom";
import styles from "./SideBarLink.module.css";

const SideBarLink = ({ children, to }: PropsWithChildren & { to: string }) => (
  <NavLink
    className={({ isActive }) =>
      `${styles.sidebarlink} ${isActive ? styles.active : ""}`
    }
    to={to}
  >
    <div className={styles.sidebarlink__child}>{children}</div>
  </NavLink>
);

export default SideBarLink;
