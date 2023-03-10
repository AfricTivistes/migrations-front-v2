import React from 'react'
import { Link as GLink } from 'gatsby'
import { Text, Link } from 'theme-ui'
import rv from '@components/utils/buildResponsiveVariant'

const styles = {
  author: {
    pr: 2
  }
}

const CardFooterAuthorName = ({ variant, omitAuthor, author }) =>
  !omitAuthor && author && author.auteur && author.auteur[0].slug ? (
    <Text sx={{ ...styles.author, variant: rv(variant, 'author') }}>
      <Link variant='mute' as={GLink} to={author.auteur[0].slug}>
        <strong>{author.auteur[0].title}</strong>
      </Link>
    </Text>
  ) : null

export default CardFooterAuthorName
