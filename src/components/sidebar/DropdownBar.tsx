import { MenuGridIcon } from "@navikt/aksel-icons";
import { Dropdown, InternalHeader } from "@navikt/ds-react";
import useApps from "../../hooks/useApps";

export default function DropdownBar() {
  const { authorizedApps } = useApps();

  function getMicrofrontendLinks() {
    return authorizedApps.map((page) => (
      <Dropdown.Menu.GroupedList.Item
        as="a"
        target="_blank"
        href={page.route}
        key={page.title + "dropdown"}
      >
        <div aria-hidden>{page.title}</div>
      </Dropdown.Menu.GroupedList.Item>
    ));
  }

  return (
    <Dropdown>
      <InternalHeader.Button as={Dropdown.Toggle}>
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
