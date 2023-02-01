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

  return visibility ? (
    author && author.auteur && author.auteur[0].featuredImage.node.localFile.childImageSharp ? (
      <Link
        as={GLink}
        to={author.auteur[0].slug}
        aria-label={author.auteur[0].title}
        sx={{ variant: responsiveVariant }}
      >
        <AvatarSimple
          avatar={author.auteur[0].featuredImage.node.localFile.childImageSharp}
          alt={author.auteur[0].title}
          size='small'
        />
      </Link>
    ) : null
  ) : null
}
export default CardFooterAuthorAvatar
