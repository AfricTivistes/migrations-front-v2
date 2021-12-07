import React from 'react'
import { Link } from 'theme-ui'
import SVG from 'react-inlinesvg'
import africtivistesSVG from '../../assets/africtivistes-logo.svg'

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
  <Link
    variant='mute'
    target='_blank'
    title='Gatsby'
    href='https://www.gatsbyjs.org'
    rel='noopener'
    sx={styles.link}
  >
    Propulsé par
    {africtivistesSVG && <SVG src={africtivistesSVG} />}
  </Link>
)

export default PoweredByGatsby
