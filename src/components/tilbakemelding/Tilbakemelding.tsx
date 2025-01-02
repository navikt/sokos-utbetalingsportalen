import React, { useRef, useState } from "react";
import { EnvelopeClosedIcon } from "@navikt/aksel-icons";
import { Button, Modal, Select, TextField } from "@navikt/ds-react";
import {
  MicrofrontendApp,
  MicrofrontendConfig,
} from "../../config/microfrontend";

type Props = {
  showTilbakemelding: boolean;
  setShowTilbakemelding: (show: boolean) => void;
};

export default function Tilbakemelding(props: Props) {
  const ref = useRef<HTMLDialogElement>(null);
  const [feedback, setFeedback] = useState<string>("");
  const [app, setApp] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // eslint-disable-next-line no-console
    console.log("Tilbakemelding sendt", { feedback, app });
    alert("Tilbakemelding sendt: " + feedback + " " + app);
    ref.current?.close();
    props.setShowTilbakemelding(false);
  };

  return (
    <div>
      <Button
        className="rounded-3xl"
        icon={<EnvelopeClosedIcon title={"Tilbakemelding"} />}
        iconPosition="right"
        onClick={() => ref.current?.showModal()}
      ></Button>

      <Modal
        ref={ref}
        header={{ heading: "Gi din tilbakemelding" }}
        width={400}
      >
        <Modal.Body>
          <form method="dialog" id="skjema" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-5">
              <TextField
                label="Har du noen tilbakemeldinger?"
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
              />
              <Select
                label={"Hvilken applikasjon gjelder det?"}
                value={app}
                onChange={(e) => setApp(e.target.value)}
              >
                <option key={""} value={""}>
                  - Velg applikasjon -
                </option>
                {MicrofrontendConfig.map((app: MicrofrontendApp) => (
                  <option key={app.app} value={app.app}>
                    {app.title}
                  </option>
                ))}
              </Select>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button form="skjema">Send</Button>
          <Button
            type="button"
            variant="secondary"
            onClick={() => ref.current?.close()}
          >
            Avbryt
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
