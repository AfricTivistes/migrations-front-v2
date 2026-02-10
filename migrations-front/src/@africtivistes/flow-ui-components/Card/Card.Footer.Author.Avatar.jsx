import React from 'react'
import { Link as GLink } from 'gatsby'
import { Link, useThemeUI, get } from 'theme-ui'
import AvatarSimple from '@components/AvatarSimple'
import rv from '@components/utils/buildResponsiveVariant'

const CardFooterAuthorAvatar = ({ variant, omitAuthor, author }) => {
  const context = useThemeUI()

  if (omitAuthor) return null

  const responsiveVariant = rv(variant, 'authorPhoto')

  const visibility = responsiveVariant.reduce(
    (mobileVisibility, variant) =>
      mobileVisibility === false &&
      get(context.theme, variant, {}).display === 'none'
        ? false
        : true,
    false
  )

  if (!visibility) return null

  const mainAuthor = author?.auteur?.[0]
  const avatarImage = mainAuthor?.featuredImage?.node?.localFile?.childImageSharp

  if (!mainAuthor || !avatarImage) return null

  return (
    <Link
      as={GLink}
      to={mainAuthor.slug}
      aria-label={mainAuthor.title}
      sx={{ variant: responsiveVariant }}
    >
      <AvatarSimple
        avatar={avatarImage}
        alt={mainAuthor.title}
        size='small'
      />
    </Link>
  )
}
export default CardFooterAuthorAvatar
