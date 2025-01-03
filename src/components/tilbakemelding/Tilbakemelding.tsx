import React, { useRef, useState } from "react";
import { Button, Modal, Select, TextField } from "@navikt/ds-react";
import {
  MicrofrontendApp,
  MicrofrontendConfig,
} from "../../config/microfrontend";
import styles from "./Tilbakemelding.module.css";

type Props = {
  showTilbakemelding: boolean;
  setShowTilbakemelding: (show: boolean) => void;
};

type FeedbackData = {
  feedback: string;
  app: string;
};

export default function Tilbakemelding(props: Props) {
  const ref = useRef<HTMLDialogElement>(null);
  const [feedbackData, setFeedbackData] = useState<FeedbackData>({
    feedback: "",
    app: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // eslint-disable-next-line no-console
    console.log("Tilbakemelding sendt", feedbackData);
    alert("Tilbakemelding sendt: " + JSON.stringify(feedbackData));
    ref.current?.close();
    props.setShowTilbakemelding(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setFeedbackData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div>
      <button
        className={styles.button}
        onClick={() => ref.current?.showModal()}
      >
        Tilbakemelding?
      </button>

      <Modal
        ref={ref}
        header={{ heading: "Gi din tilbakemelding" }}
        width={600}
      >
        <Modal.Body>
          <form method="dialog" id="skjema" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-5">
              <TextField
                label="Har du noen tilbakemeldinger?"
                name="feedback"
                value={feedbackData.feedback}
                onChange={handleChange}
              />
              <Select
                label={"Hvilken applikasjon gjelder det?"}
                name="app"
                value={feedbackData.app}
                onChange={handleChange}
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
