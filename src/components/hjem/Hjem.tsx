import React from 'react'
import { Heading } from '@navikt/ds-react'
import HjemCSS from './Hjem.module.css'

const Hjem = (): JSX.Element => {
  return (
    <Heading level="1" size="medium" className="text-center">
      <div className={HjemCSS.moro}></div>
      The red fox jumps over the lazy brown dog.
    </Heading>
  )
}

export default Hjem
