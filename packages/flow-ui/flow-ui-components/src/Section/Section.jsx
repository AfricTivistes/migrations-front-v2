import React from 'react'
import PropTypes from 'prop-types'
import { Container, Box } from 'theme-ui'
import SectionTitle from './Section.Title'

const SECTION_VARIANT = 'section'
const SIDE_SECTION_VARIANT = 'section-aside'

const sectionAsideWrapper = {
  mb: 3,
  pb: 3,
  px: 3,
  py: 3,
  bg: 'white',
  borderRadius: '12px',
  boxShadow: '0 2px 12px rgba(0,0,0,0.04)',
  border: '1px solid',
  borderColor: 'omegaLighter',
  '&:last-of-type': { mb: 0 }
}

const Section = ({ aside, children, ...props }) => {
  const sectionVariant = aside ? SIDE_SECTION_VARIANT : SECTION_VARIANT

  return (
    <Box as="section" sx={aside ? sectionAsideWrapper : {}}>
      <Container variant={sectionVariant}>
        <SectionTitle variant={sectionVariant} {...props} />
        {children}
      </Container>
    </Box>
  )
}

export default Section

Section.propTypes = {
  title: PropTypes.string,
  titleLink: PropTypes.string,
  omitTitle: PropTypes.bool,
  aside: PropTypes.bool
}
