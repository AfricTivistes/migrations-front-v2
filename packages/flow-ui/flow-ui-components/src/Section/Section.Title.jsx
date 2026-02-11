import React from 'react'
import { Link } from 'gatsby'
import { Heading, Badge, Flex } from 'theme-ui'
import Divider from '@components/Divider'

const styles = {
  wrapper: {
    justifyContent: `space-between`,
    alignItems: `flex-end`
  },
  section: {
    position: `relative`,
    pl: [0, 4],
    mx: [`auto`, 0],
    mb: 0,
    fontSize: [3, 4],
    fontWeight: 700,
    color: `omegaDark`,
    letterSpacing: `-0.02em`,
    lineHeight: 1.25,
    '::before': {
      display: [`none`, `block`],
      bg: `#87311a`,
      content: `""`,
      borderRadius: `full`,
      position: `absolute`,
      height: `full`,
      width: 4,
      top: 0,
      left: 0
    }
  },
  'section-aside': {
    color: `#87311a`,
    fontSize: [2, 3],
    fontWeight: 700,
    letterSpacing: `0.04em`,
    textTransform: `uppercase`,
    mx: 0,
    mb: 2,
    pb: 2,
    borderBottom: `3px solid`,
    borderBottomColor: `#87311a`
  },
  badge: {
    display: [`none`, `block`],
    mb: 0
  }
}

const SectionTitle = ({ title, titleLink, omitTitle, variant }) => {
  const linkProps = titleLink && {
    as: Link,
    to: titleLink
  }

  return !omitTitle && (title || titleLink) ? (
    <>
      <Flex sx={styles.wrapper}>
        {title && (
          <Heading variant='h2' sx={styles[variant]} {...linkProps}>
            {title}
          </Heading>
        )}
        {titleLink && (
          <Badge variant='tag' sx={styles.badge} {...linkProps}>
            View More
          </Badge>
        )}
      </Flex>
      <Divider />
    </>
  ) : null
}

export default SectionTitle
