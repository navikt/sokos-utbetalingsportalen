import { PropsWithChildren } from "react";
import { NavLink } from "react-router-dom";
import styles from "./SideBar.module.css";

const SideBarLink = (props: PropsWithChildren & { to: string; className: string }) => (
  <NavLink className={({ isActive }) => `${props.className} ${isActive ? styles.active : styles.link}`} to={props.to}>
    {props.children}
  </NavLink>
);

export default SideBarLink;
