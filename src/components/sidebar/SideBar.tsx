import { MenuHamburgerIcon } from "@navikt/aksel-icons";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Path } from "../../models/path";
import styles from "./SideBar.module.css";

const SideBar = () => {
  const [showSideBar, setShowSideBar] = useState(true);

  return (
    <>
      <div
        className={`bg-neutral-800 h-screen overflow-hidden top-12 left-0 flex-col ${
          showSideBar ? "min-w-fit w-100" : "w-0"
        }`}
      >
        <div className="p-3 flex justify-end text-white">
          <button className="cursor-pointer" onClick={() => setShowSideBar(!showSideBar)}>
            X
          </button>
        </div>
        <ul className="px-10 top-1.5 flex flex-col text-white">
          <Link className={styles.link} to={Path.SOKOS_MIKROFRONTEND_TEMPLATE}>
            Mikrofrontend
          </Link>
          <Link className={styles.link} to={Path.UTBETALINGER}>
            Søk Posteringer
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
          <MenuHamburgerIcon fontSize="1.5rem" />
        </svg>
      )}
    </>
  );
};

export default SideBar;
