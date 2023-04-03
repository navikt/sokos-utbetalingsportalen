import { Chat, GuidePanel, Heading, Panel } from "@navikt/ds-react";
import useStore, { selectIsError } from "../../store/store";
import { ExclamationmarkTriangleIcon, InformationIcon } from "@navikt/aksel-icons";

const Hjem = () => {
  const isError = useStore<boolean>(selectIsError);
  return (
    <Heading level="1" size="medium" className="text-center">
      <Heading level="1" size="large" spacing>
        Informasjon
      </Heading>
      <div id="info" className="space-y-3">
        <Chat
          avatar={<ExclamationmarkTriangleIcon />}
          backgroundColor="rgba(255,240,230,1)"
          timestamp="03.04.2023 14:45"
        >
          <Chat.Bubble>IRISen stenger om 5 min. Alle må hjem.</Chat.Bubble>
        </Chat>
        <Chat
          avatar={<InformationIcon />}
          backgroundColor="rgba(230,240,255,1)"
          position="right"
          timestamp="03.04.2023 14:40"
        >
          <Chat.Bubble>IRISen stenger om 5 min. Alle må hjem.</Chat.Bubble>
        </Chat>
        <Chat avatar={<InformationIcon />} backgroundColor="rgba(230,240,255,1)" timestamp="03.04.2023 14:35">
          <Chat.Bubble>På grunn av manglende ZPM må vi stenge Chappai,</Chat.Bubble>
        </Chat>
        <Chat
          avatar={<InformationIcon />}
          backgroundColor="rgba(230,240,255,1)"
          position="right"
          timestamp="03.04.2023 14:15"
        >
          <Chat.Bubble>På grunn av lite jaffacakes er det lite strøm og Chappai vil oppleves treg</Chat.Bubble>
        </Chat>
        <Chat avatar={<InformationIcon />} backgroundColor="rgba(230,240,255,1)" timestamp="03.04.2023 13:15">
          <Chat.Bubble>Det blir mangel på jaffacakes om kort tid</Chat.Bubble>
        </Chat>
        <Chat
          avatar={<InformationIcon />}
          backgroundColor="rgba(230,240,255,1)"
          position={"right"}
          timestamp="03.04.2023 13:15"
        >
          <Chat.Bubble>JAFFA CREE</Chat.Bubble>
        </Chat>
      </div>
    </Heading>
  );
};

export default Hjem;
