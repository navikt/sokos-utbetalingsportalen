import { HouseIcon } from "@navikt/aksel-icons";
import { useState } from "react";
import { Apper } from "../../models/apper";
import { ROUTE_PATH } from "../../models/routePath";
import RestService from "../../services/rest-service";
import CloseSideBarButton from "./CloseSideBarButton";
import ClosedSideBar from "./ClosedSideBar";
import SideBarLink from "./SideBarLink";
import { ikonStil } from "../../utils/ikonStil";

const SideBarNew = () => {
  const [showSideBar, setShowSideBar] = useState(true);
  const hasAccess = RestService.useFetchHasAccess();

  if (!showSideBar) {
    return (
      <div className="bg-neutral-800 h-screen transition-all ease-in-out duration-500 w-12 min-w-12">
        <ClosedSideBar setShowSideBar={setShowSideBar} />
      </div>
    );
  }

  const lenker = Apper.filter((side) => hasAccess(side.group)).map((side) => (
    <SideBarLink to={side.route} key={side.app}>
      {side.title}
    </SideBarLink>
  ));

  return (
    <>
      <div className="w-80 bg-neutral-800 h-screen transition-all ease-in-out duration-500 overflow-hidden min-w-80">
        <CloseSideBarButton setShowSideBar={setShowSideBar} />

        <ul className="flex flex-col min-w-80">
          <SideBarLink to={ROUTE_PATH.SOKOS_UP_HOME}>
            <HouseIcon className={ikonStil} />
            Hjem
          </SideBarLink>

          {lenker}
        </ul>
      </div>
    </>
  );
};

export default SideBarNew;
