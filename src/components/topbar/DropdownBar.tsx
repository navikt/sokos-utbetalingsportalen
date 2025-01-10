import { MenuGridIcon } from "@navikt/aksel-icons";
import { Dropdown, InternalHeader } from "@navikt/ds-react";
import useApps from "../../hooks/useApps";
import { EVENT_NAME } from "../../umami/EventLogging";

export default function DropdownBar() {
  const { authorizedApps } = useApps();

  function getMicrofrontendLinks() {
    return authorizedApps.map((page) => (
      <Dropdown.Menu.GroupedList.Item
        as="a"
        target="_blank"
        href={page.route}
        data-umami-event={EVENT_NAME.AAPNE_ARBEIDSFLATE}
        data-umami-event-arbeidsflate={page.title}
        key={page.title + "dropdown"}
      >
        <div aria-hidden>{page.title}</div>
      </Dropdown.Menu.GroupedList.Item>
    ));
  }

  return (
    <Dropdown>
      <InternalHeader.Button
        as={Dropdown.Toggle}
        data-umami-event={EVENT_NAME.AAPNE_APP_SWITCHER}
      >
        <MenuGridIcon style={{ fontSize: "1.5rem" }} title="Arbeidsflater" />
      </InternalHeader.Button>
      <Dropdown.Menu>
        <Dropdown.Menu.GroupedList>
          <Dropdown.Menu.GroupedList.Heading>
            Arbeidsflater (Åpner&nbsp;i&nbsp;ny&nbsp;fane)
          </Dropdown.Menu.GroupedList.Heading>
          {getMicrofrontendLinks()}
        </Dropdown.Menu.GroupedList>
      </Dropdown.Menu>
    </Dropdown>
  );
}
