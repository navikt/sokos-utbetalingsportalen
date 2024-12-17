import { useRef } from "react";
import { EnvelopeClosedIcon } from "@navikt/aksel-icons";
import { Button, Modal, Select, TextField } from "@navikt/ds-react";
import {
  MicrofrontendApp,
  MicrofrontendConfig,
} from "../../config/microfrontend";

export default function Tilbakemelding() {
  const ref = useRef<HTMLDialogElement>(null);

  return (
    <div className="py-12">
      <Button
        icon={<EnvelopeClosedIcon title={"Tilbakemelding"} />}
        iconPosition="right"
        onClick={() => ref.current?.showModal()}
      >
        Tilbakemelding?
      </Button>

      <Modal
        ref={ref}
        header={{ heading: "Gi din tilbakemelding" }}
        width={400}
      >
        <Modal.Body>
          <form method="dialog" id="skjema" onSubmit={() => alert("onSubmit")}>
            <div className="flex flex-col gap-5">
              <TextField label="Har du noen tilbakemeldinger?" />
              <Select label={"Hvilken applikasjon gjelder det?"}>
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
