import { Chat, Heading } from "@navikt/ds-react";
import useStore, { selectGjelderID } from "../store/store";
import { ExclamationmarkTriangleIcon, InformationIcon } from "@navikt/aksel-icons";

type Utseende = {
  color: string;
  component: JSX.Element;
};

const Meldingtype = {
  WARNING: { color: "rgba(255,240,230,1)", component: <ExclamationmarkTriangleIcon /> },
  INFO: { color: "rgba(230,240,255,1)", component: <InformationIcon /> },
};

type Melding = {
  melding: string;
  timestamp?: string;
  type?: Utseende;
};

const meldinger: Melding[] = [
  { melding: "JAFFA CREE" },
  { melding: "Det blir mangel på jaffacakes om kort tid", timestamp: "03.04.2023 13:15" },
  {
    melding: "På grunn av lite jaffacakes er det lite strøm og Chappai vil oppleves treg",
    timestamp: "03.04.2023 14:15",
  },
  { melding: "På grunn av manglende ZPM må vi stenge Chappai,", timestamp: "03.04.2023 14:35" },
  { melding: "IRISen stenger om 5 min. Alle må hjem.", timestamp: "03.04.2023 14:40" },
  { melding: "IRIS stengt. God påske", timestamp: "03.04.2023 14:45", type: Meldingtype.WARNING },
];

const Information = () => {
  const gjelderId = useStore(selectGjelderID);
  const gjelderIdMelding: Melding = { melding: "Gjelder ID " + gjelderId };
  const meldingElements = [gjelderIdMelding, ...meldinger].reverse().map((m, index) => (
    <Chat
      key={index}
      avatar={m.type?.component ?? Meldingtype.INFO.component}
      timestamp={m?.timestamp ?? ""}
      backgroundColor={m.type?.color ?? Meldingtype.INFO.color}
      position={index % 2 ? "right" : "left"}
    >
      <Chat.Bubble>{m.melding}</Chat.Bubble>
    </Chat>
  ));

  return (
    <>
      <Heading level="2" size="large" spacing className="text-center">
        Informasjon
      </Heading>
      <div id="info" className="space-y-3">
        {meldingElements}
      </div>
    </>
  );
};

export default Information;
