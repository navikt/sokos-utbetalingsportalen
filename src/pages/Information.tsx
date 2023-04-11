import { Chat, Heading } from "@navikt/ds-react";
import useStore, { selectGjelderID } from "../store/store";
import { ExclamationmarkTriangleIcon, InformationIcon } from "@navikt/aksel-icons";

const Information = () => {
  const gjelderId = useStore(selectGjelderID);

  return (
    <>
      <Heading level="2" size="large" spacing className="text-center">
        Informasjon
      </Heading>
      <div id="info" className="space-y-3">
        <Chat
          avatar={<ExclamationmarkTriangleIcon />}
          backgroundColor="rgba(255,240,230,1)"
          timestamp="03.04.2023 14:45"
        >
          <Chat.Bubble>IRIS stengt. God påske</Chat.Bubble>
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
          <Chat.Bubble>Gjelder ID = {gjelderId}</Chat.Bubble>
        </Chat>
      </div>
    </>
  );
};

export default Information;
