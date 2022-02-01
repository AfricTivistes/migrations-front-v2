import React from 'react'
import { FormattedMessage } from "gatsby-plugin-react-intl"
import { Link } from 'theme-ui'
import Svg from 'react-inlinesvg'
import africtivistesSVG from '../../assets/africtivistes-logo.svg'
import cfiSVG from '../../assets/cfi.svg'

const styles = {
  link: {
    display: `inline-flex`,
    color: `heading`,
    fontWeight: `medium`,
    ':visited': {
      color: `heading`
    },
    svg: {
      fill: `omegaDarker`,
      height: 70,
      ml: 2
    }
  }
}

const PoweredByGatsby = () => (
  <nav>
    <Link
      variant='mute'
      target='_blank'
      title='Africtivistes'
      href='https://www.africtivistes.org'
      rel='noopener'
      sx={styles.link}
    >
      <FormattedMessage id="propulse" />
      {africtivistesSVG && <Svg src={africtivistesSVG} />}
    </Link>
    <Link
      variant='mute'
      target='_blank'
      title='CFI'
      href='https://cfi.fr'
      rel='noopener'
      sx={styles.link}
    >
      <FormattedMessage id="partenariat" />
      {cfiSVG && <Svg src={cfiSVG} />}
    </Link>
  </nav>
)

export default PoweredByGatsby
