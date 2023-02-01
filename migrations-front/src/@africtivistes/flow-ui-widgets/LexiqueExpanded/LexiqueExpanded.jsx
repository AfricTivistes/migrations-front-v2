import React from 'react'
import { Flex, Box, Text, Heading, Card } from 'theme-ui'
import MemphisPattern from '@components/MemphisPattern'

const styles = {
  card: {
    position: `relative`
  },
  wrapper: {
    flexDirection: [`column`, `row`],
    position: `relative`,
    zIndex: 3
  },
  infoColumn: {
    flexBasis: `1/1`
  },
  innerBox: {
    flexBasis: `1/2`,
    flexGrow: 1,
    px: [0, 3],
    mt: [3, 0]
  },
  title: {
    textAlign: [`center`, `left`],
    mt: [3, 0],
    px: 3
  },
  content: {
    textAlign: [`center`, `left`]
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

const Title = ({ title, slug }) => (
  <Box sx={styles.title}>
    <Heading variant='h3' id={slug}>
        {title}
    </Heading>
  </Box>
)

const Content = ({ content }) => (
  <Box sx={styles.content}>
    <Text dangerouslySetInnerHTML={{ __html: content }}/>
  </Box>
)

const LexiqueExpanded = ({ item }) => {
  if (!item) return null

  return (
    <Card variant='paper' sx={styles.card}>
      <Flex sx={styles.wrapper}>
        <Box sx={styles.infoColumn}>
          <Title {...item} />
          <Flex sx={styles.wrapper}>
            <Box sx={styles.innerBox}>
              <Content {...item} />
            </Box>
          </Flex>
        </Box>
      </Flex>
      <Box sx={styles.gradient} />
      <MemphisPattern sx={styles.pattern} />
    </Card>
  )
}

export default LexiqueExpanded
