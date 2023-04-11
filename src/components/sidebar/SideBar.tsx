import { MenuHamburgerIcon } from "@navikt/aksel-icons";
import { BodyLong } from "@navikt/ds-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Path } from "../../models/path";
import classes from "./SideBar.module.css";

const SideBar = () => {
  const [showSideBar, setShowSideBar] = useState(true);

  const handleGoToLink = () => {
    setTimeout(() => {
      console.log("BØ");
    }, 5000);
  };

  return (
    <div>
      {showSideBar ? (
        <div
          id="offcanvassidebar"
          className="bg-blue-300 w-60 fixed bottom-0 top-12 left-0 flex max-w-full flex-col border-none bg-clip-padding shadow-sm outline-none transition duration-300 ease-in-out  [&[data-te-offcanvas-show]]:transform-none"
        >
          <div className="p-3 flex justify-end">
            <button className="cursor-pointer" onClick={() => setShowSideBar(!showSideBar)}>
              X
            </button>
          </div>
          <BodyLong className="px-10 top-1.5 flex flex-col">
            <h3>Chappai moduler</h3>
            <Link className={classes.link} to={Path.Mikrofrontend} onClick={handleGoToLink}>
              Mikrofrontend
            </Link>
            <Link className={classes.link} to={Path.Attestasjon}>
              Attestasjon
            </Link>
            <Link className={classes.link} to={Path.Postering}>
              Postering
            </Link>
          </BodyLong>
        </div>
      ) : (
        <svg
          onClick={() => setShowSideBar(!showSideBar)}
          className="fixed z-30 flex items-center cursor-pointer left-2 top-10 transition duration-300 ease-in-out"
          fill="#2563EB"
          viewBox="0 0 100 70"
          width="100"
          height="100"
        >
          <MenuHamburgerIcon />
        </svg>
      )}
    </div>
  );
};

export default SideBar;
