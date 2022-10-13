import React from 'react'
// import { Link as GLink } from 'gatsby'
import { Link as GLink } from 'gatsby-plugin-react-intl'
import { Box, Heading, Card, Link } from 'theme-ui'
import Navigation from '@components/Navigation'
import Section from '@components/Section'
import Avatar from '@components/Avatar'
import attachSocialIcons from '@helpers/attachSocialIcons'

const styles = {
  wrapper: {
    textAlign: `center`
  },
  avatarWrapper: {
    mb: 4
  },
  title: {
    color: `omegaDark`
  }
}

const AuthorArticle = ({ author, omitSocial, ...props }) => {
  if (!author.auteur) return ''
  
  return (
   <>
    { author.auteur.map(author => (
      <Section aside title='The Author' {...props} key={author.id}>
      <Card variant='paper'>
        <Box sx={styles.wrapper}>
          {author.featuredImage && (
            <Box sx={styles.avatarWrapper}>
              <Link as={GLink} to={`/auteur/${author.slug}`} aria-label={author.title}>
                <Avatar
                  avatar={author.featuredImage.node.localFile.childImageSharp}
                  alt={author.title}
                  withPattern
                />
              </Link>
            </Box>
          )}
          <Link as={GLink} to={`/auteur/${author.slug}`}>
            <Heading variant='h3'>{author.title}</Heading>
          </Link>
          <Heading variant='h4' sx={styles.title}>
            <p dangerouslySetInnerHTML={{ __html: author.excerpt }} />
          </Heading>
          {!omitSocial && author.social && (
            <Navigation
              variant='horizontal'
              items={attachSocialIcons([
                {'name': 'facebook', 'url': author.social.facebook},
                {'name': 'twitter', 'url': author.social.twitter},
                {'name': 'instagram', 'url': author.social.instagram},
                {'name': 'linkedin', 'url': author.social.linkedin}
              ])}
              iconOnly
            />
          )}
        </Box>
      </Card>
    </Section>
    ))}
   </> 
  )
}

export default AuthorArticle
