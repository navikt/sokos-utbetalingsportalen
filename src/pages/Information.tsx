import { BodyLong, BodyShort, GuidePanel, Heading, Link, List } from "@navikt/ds-react";
import { useLoaderData } from "react-router-dom";
import { UserData } from "../models/userData";
import pengesekk from "../../assets/images/pengesekk.svg";
import styles from "./Information.module.css";

const Information = () => {
  const userInfo = useLoaderData() as UserData;

  return (
    <>
      <div className={styles.heading}>
        <Heading level="1" size="large" spacing>
          God dag, {userInfo.name}!
        </Heading>
      </div>
      <div className={styles.container}>
        <GuidePanel poster illustration={<img src={pengesekk} alt="pengesekk" />}>
          <Heading level="2" size="small" spacing>
            Informasjon om utbetalingsportalen
          </Heading>
          <BodyLong spacing>
            Utbetalingsportalen er en ny platform som på sikt skal overta funksjoner fra Økonomiportalen og Abetal i en
            ny og forbedret versjon.
          </BodyLong>
          <List as="ul" size="small">
            <List.Item>
              <BodyShort>
                <Link href="https://navno.sharepoint.com/" target="_blank">
                  Les mer på Navet
                </Link>
              </BodyShort>
            </List.Item>
            <List.Item>
              <BodyShort>
                <Link
                  href="https://navno.sharepoint.com/sites/POutbetaling/_layouts/15/Doc.aspx?sourcedoc=%7B90953D22-FE5D-4818-A341-2FC88D4E2705%7D&file=Tilgangsbestilling%20i%20ny%20utbetalingsportal.docx&action=default&mobileredirect=true&DefaultItemOpen=1"
                  target="_blank"
                >
                  Tilgangsbestilling
                </Link>
              </BodyShort>
            </List.Item>
          </List>
        </GuidePanel>
      </div>
    </>
  );
};

export default Information;
