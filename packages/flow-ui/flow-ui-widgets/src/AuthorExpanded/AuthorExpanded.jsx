import React from 'react'
import { Link as GLink } from 'gatsby'
import { Flex, Box, Text, Heading, Card, Badge, Link } from 'theme-ui'
import MemphisPattern from '@components/MemphisPattern'
import Avatar from '@components/Avatar'
import Navigation from '@components/Navigation'
import attachSocialIcons from '@helpers/attachSocialIcons'


const styles = {
  card: {
    position: `relative`
  },
  wrapper: {
    flexDirection: [`column`, `row`],
    position: `relative`,
    zIndex: 3
  },
  avatarColumn: {
    flexBasis: `1/5`,
    minWidth: `150px`,
  },
  infoColumnLeft: {
    flexBasis: `3/5`
  },
  infoColumnRight: {
    flexBasis: `1/5`
  },

  innerBox: {
    flexBasis: `1/2`,
    flexGrow: 1,
    px: [0, 3],
    mt: [3, 0]
  },
  subheader: {
    color: `omegaDark`
  },
  name: {
    textAlign: [`center`, `left`],
    mt: [3, 0],
    px: 3
  },
  bio: {
    textAlign: [`center`, `left`]
  },
  socialList: {
    a: {
      m: 0
    }
  },
  link: {
    position: `absolute`,
    top: 10,
    right: 10,
    zIndex: 3
    
  },
  pattern: {
    borderRadius: `lg`
  },
  gradient: {
    size: `full`,
    borderRadius: `lg`,
    position: `absolute`,
    left: 0,
    top: 0,
    zIndex: 2,
    background: [
      t =>
        `linear-gradient(0deg, ${t.colors.contentBg} 20%, rgba(255, 255, 255, 0) 80%)`,
      t =>
        `linear-gradient(270deg, ${t.colors.contentBg} 20%, rgba(255, 255, 255, 0) 100%)`
    ]
  }
}

const Subheader = ({ children }) => (
  <Heading variant='h4' sx={styles.subheader}>
    {children}
  </Heading>
)

const AuthorAvatar = ({ name, featuredImage, slug }) =>
  featuredImage ? (
    <Box>
      <Link as={GLink} to={slug} aria-label={name}>
      <Avatar
        avatar={featuredImage.node.localFile.childImageSharp}
        alt={name}
        withPattern
      />
      </Link>
    </Box>
  ) : null


const AuthorName = ({ name, slug }) => (
  <Box sx={styles.name}>
    <Heading variant='h3'>
      <Link as={GLink} to={slug}>
        {name}
      </Link>
    </Heading>
  </Box>
)

const AuthorBio = ({ excerpt, content }) => 
content  ? (
  <Box sx={styles.bio}>
    <Subheader><div dangerouslySetInnerHTML={{ __html: excerpt }} /></Subheader>
    <Text> <div dangerouslySetInnerHTML={{ __html: content.substring(0,250) }} />...</Text>
  </Box>
): null


const AuthorSkills = ({ skills }) =>
  skills ? (
    <Box sx={styles.innerBox}>
      <Subheader>Expertise</Subheader>
      {skills.map(skill => (
        <Text key={`skill-${skill}`}>{skill}</Text>
      ))}
    </Box>
  ) : null

const AuthorSocialMedia = ({ social }) => {
  if (!social) return null;

  const socialLinks = [
    social.facebook ? { name: 'facebook', url: social.facebook } : null,
    social.twitter ? { name: 'twitter', url: social.twitter } : null,
    social.instagram ? { name: 'instagram', url: social.instagram } : null,
    social.linkedin ? { name: 'linkedin', url: social.linkedin } : null
  ];

  const filteredSocialLinks = socialLinks.filter(link => link);

  if (filteredSocialLinks.length === 0) return null;

  return (
    <Box sx={styles.innerBox}>
      <Subheader>Social Media</Subheader>
      <Navigation
        variant='vertical'
        items={attachSocialIcons(filteredSocialLinks)}
      />
    </Box>
  );
};

const AuthorExpanded = ({ author, withLink }) => {
  if (!author) return null

  const { skills, social } = author

  return (
    <Card variant='paper' sx={styles.card}>
      <Flex sx={styles.wrapper}>
        <Box sx={styles.avatarColumn}>
          <AuthorAvatar {...author} />
        </Box>

        <Box sx={styles.infoColumnLeft}>
          <AuthorName {...author} />
            <Box sx={styles.innerBox}>
              <AuthorBio {...author} />
            </Box>

        </Box>
        <Box sx={styles.infoColumnRight}>
              <Box sx={styles.innerBox}>
                  <AuthorSocialMedia {...author} />
              </Box>

        </Box>

      </Flex>
      {withLink && (
        <Badge variant='tag' as={GLink} to={author.slug} sx={styles.link}>
          View Posts
        </Badge>
      )}
      <Box sx={styles.gradient} />
      <MemphisPattern sx={styles.pattern} />
    </Card>
  )
}

export default AuthorExpanded
