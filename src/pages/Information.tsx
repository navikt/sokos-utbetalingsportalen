import { Chat, Heading } from "@navikt/ds-react";
import useStore, { selectGjelderID } from "../store/store";
import { ExclamationmarkTriangleIcon, InformationIcon } from "@navikt/aksel-icons";
import React from "react";

type Layout = {
  color: string;
  component: React.ReactElement;
};

const MessageType = {
  WARNING: { color: "rgba(255,240,230,1)", component: <ExclamationmarkTriangleIcon /> },
  INFO: { color: "rgba(230,240,255,1)", component: <InformationIcon /> },
};

type Message = {
  message: string;
  timestamp?: string;
  type?: Layout;
};

const meldinger: Message[] = [
  { message: "JAFFA CREE" },
  { message: "Det blir mangel på jaffacakes om kort tid", timestamp: "03.04.2023 13:15" },
  {
    message: "På grunn av lite jaffacakes er det lite strøm og Chappai vil oppleves treg",
    timestamp: "03.04.2023 14:15",
  },
  { message: "På grunn av manglende ZPM må vi stenge Chappai,", timestamp: "03.04.2023 14:35" },
  { message: "IRISen stenger om 5 min. Alle må hjem.", timestamp: "03.04.2023 14:40" },
  { message: "IRIS stengt. God påske", timestamp: "03.04.2023 14:45", type: MessageType.WARNING },
];

const Information = () => {
  const gjelderId = useStore(selectGjelderID);
  const gjelderIdMessage: Message = { message: "Gjelder ID " + gjelderId };
  const messageElements = [gjelderIdMessage, ...meldinger].reverse().map((m, index) => (
    <Chat
      key={index}
      avatar={m.type?.component ?? MessageType.INFO.component}
      timestamp={m?.timestamp ?? ""}
      backgroundColor={m.type?.color ?? MessageType.INFO.color}
      position={index % 2 ? "right" : "left"}
    >
      <Chat.Bubble>{m.message}</Chat.Bubble>
    </Chat>
  ));

  return (
    <>
      <Heading level="2" size="large" spacing className="text-center">
        Informasjon
      </Heading>
      <div id="info" className="space-y-3">
        {messageElements}
      </div>
    </>
  );
};

export default Information;
