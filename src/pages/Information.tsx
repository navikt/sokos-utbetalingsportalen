import { Heading, BodyLong } from "@navikt/ds-react";
import styles from "./Information.module.css";

const Information = () => {
  return (
    <>
      <Heading level="1" size="medium">
        Informasjon
      </Heading>
      <div className={styles.informasjon__bodyLong}>
        <BodyLong>Her skal jeg komme informasjonside for saksbehandlere</BodyLong>
        <BodyLong>
          Amet dolore non tempor incididunt dolor est enim aute commodo cillum quis. Ex esse veniam ipsum quis. Pariatur
          duis do qui exercitation ut laboris sit veniam nostrud nulla esse. In aute sint enim reprehenderit ut
          voluptate do id. Laborum irure qui officia aute ipsum. Exercitation dolor sunt deserunt non anim.
        </BodyLong>
        <BodyLong>
          Amet dolore non tempor incididunt dolor est enim aute commodo cillum quis. Ex esse veniam ipsum quis. Pariatur
          duis do qui exercitation ut laboris sit veniam nostrud nulla esse. In aute sint enim reprehenderit ut
          voluptate do id. Laborum irure qui officia aute ipsum. Exercitation dolor sunt deserunt non anim.
        </BodyLong>
      </div>
    </>
  );
};

export default Information;
