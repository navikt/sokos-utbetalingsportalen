import { MenuGridIcon } from "@navikt/aksel-icons";
import { Dropdown, InternalHeader } from "@navikt/ds-react";
import { getAuthorizedApps } from "@utils/accessControl";

type AppSwitcherHeaderProps = {
	adGroups: string[];
};
export default function AppSwitcherHeader(props: AppSwitcherHeaderProps) {
	const authorizedApps = getAuthorizedApps(props.adGroups);

	function appSwitcherList() {
		return authorizedApps
			.slice()
			.sort((a, b) => a.title.localeCompare(b.title))
			.map((page) => (
				<Dropdown.Menu.GroupedList.Item
					as="a"
					target="_blank"
					href={page.route}
					key={`${page.title}dropdown`}
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
					{appSwitcherList()}
				</Dropdown.Menu.GroupedList>
			</Dropdown.Menu>
		</Dropdown>
	);
}
