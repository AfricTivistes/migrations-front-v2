import React from 'react'
import { Link as GLink } from 'gatsby'
import { Link, useThemeUI, get } from 'theme-ui'
import rv from '@components/utils/buildResponsiveVariant'
import getImageVariant from '@components/utils/getImageVariant'
import CardMediaIcon from './Card.Media.Icon'
import CardMediaImage from './Card.Media.Image'

const DEFAULT_IMAGE_VARIANT = 'vertical'

const styles = {
  link: {
    userSelect: `none`,
    textAlign: `center`,
    position: `relative`,
    display: `block`
  }
}

const CardMedia = ({
  imageVariant,
  omitMedia,
  mediaType,
  title,
  slug,
  link,
  categories,
  ...props
}) => {
  const context = useThemeUI()

  if (omitMedia) return null

  const { variant, thumbnail, thumbnailText, featuredImage } = props

  const imageVar =
    imageVariant ||
    get(context.theme, rv(variant, 'imageVariant')[0]) ||
    DEFAULT_IMAGE_VARIANT

  const thumImage = thumbnail || (featuredImage && featuredImage.node.localFile.childImageSharp)

  const image = getImageVariant(thumImage, imageVar)

  const linkProps = link
    ? {
        as: 'a',
        href: link,
        target: '_blank',
        rel: 'noopener noreferrer'
      }
    : {
        as: GLink,
        to: categories?.nodes?.[0]?.slug ? `/${categories.nodes[0].slug}/${slug}` : `/${slug}`
      }

  return (
    <Link
      {...linkProps}
      css={styles.link}
      sx={{ variant: rv(variant, 'media') }}
      aria-label={title}
    >
      {mediaType === 'image' && image && (
        <CardMediaImage image={image} title={title} {...props} />
      )}
      {(mediaType === 'icon' || (!image && thumbnailText)) && (
        <CardMediaIcon {...props} />
      )}
    </Link>
  )
}

CardMedia.defaultProps = {
  mediaType: 'image'
}

export default CardMedia
