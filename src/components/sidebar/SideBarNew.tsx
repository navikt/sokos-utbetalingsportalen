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
    return <ClosedSideBar setShowSideBar={setShowSideBar} />;
  }

  const lenker = Apper.filter((side) => hasAccess(side.group)).map((side) => (
    <SideBarLink to={side.route} key={side.app}>
      {<side.ikonet className={ikonStil} />}
      {side.title}
    </SideBarLink>
  ));

  return (
    <>
      <div className="flex flex-col w-80 bg-neutral-800 h-screen transition-all ease-in-out duration-500">
        <CloseSideBarButton setShowSideBar={setShowSideBar} />

        <ul className="flex flex-col">
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
