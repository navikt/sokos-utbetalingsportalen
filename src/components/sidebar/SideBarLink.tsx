import { PropsWithChildren } from "react";
import { NavLink } from "react-router-dom";
import styles from "./SideBar.module.css";

const SideBarLink = (props: PropsWithChildren & { to: string; className?: string }) => (
  <NavLink
    className={({ isActive }) =>
      `${props.className} ${isActive ? "bg-[--a-purple-400] underline pointer-events-none mx-2 py-2 px-8 rounded whitespace-nowrap text-[--a-surface-default]" : "mx-2 py-2 px-8 rounded whitespace-nowrap text-[--a-surface-default]"}`
    }
    to={props.to}
  >
    <div className="flex flex-row gap-1">{props.children}</div>
  </NavLink>
);

export default SideBarLink;
