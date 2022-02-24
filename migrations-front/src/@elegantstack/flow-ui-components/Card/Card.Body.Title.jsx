import React from 'react'
import { Link as GLink } from 'gatsby-plugin-react-intl'
import { Heading } from 'theme-ui'
import rv from '@components/utils/buildResponsiveVariant'

const CardBodyTitle = ({ variant, title, slug, link, categories }) => {
  const linkProps = link
    ? {
        as: 'a',
        href: link,
        target: '_blank',
        rel: 'noopener noreferrer'
      }
    : {
        as: GLink,
        to: categories ? `/${categories.nodes[0].slug}/${slug}` : slug
      }
  return (
    <Heading {...linkProps} sx={{ variant: rv(variant, 'title') }}>
      {title}
    </Heading>
  )
}

export default CardBodyTitle
