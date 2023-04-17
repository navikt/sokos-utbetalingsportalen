import { MenuHamburgerIcon } from "@navikt/aksel-icons";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Path } from "../../models/path";
import classes from "./SideBar.module.css";

const SideBar = ({ z }) => {
  const [showSideBar, setShowSideBar] = useState(true);

  return (
    <>
      <div
        id="offcanvassidebar"
        className={`bg-blue-300 h-screen overflow-hidden top-12 left-0 flex-col ${showSideBar ? "w-100" : "w-0"}`}
      >
        <div className="p-3 flex justify-end">
          <button className="cursor-pointer" onClick={() => setShowSideBar(!showSideBar)}>
            X
          </button>
        </div>
        <ul className="px-10 top-1.5 flex flex-col">
          <h3>Chappai moduler</h3>
          <Link className={classes.link} to={Path.SOKOS_MIKROFRONTEND_TEMPLATE}>
            Mikrofrontend
          </Link>
          <Link className={classes.link} to={Path.UTBETALINGER_FRONTEND_POC}>
            Utbetaling Frontend Poc
          </Link>
        </ul>
      </div>
      {!showSideBar && (
        <svg
          onClick={() => setShowSideBar(!showSideBar)}
          className="fixed z-30 flex items-center cursor-pointer left-2 top-10"
          fill="#2563EB"
          viewBox="0 0 100 70"
          width="100"
          height="100"
        >
          <MenuHamburgerIcon />
        </svg>
      )}
    </>
  );
};

export default SideBar;
