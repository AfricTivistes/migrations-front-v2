import React from 'react'
import { IntlContextConsumer, FormattedMessage } from "gatsby-plugin-react-intl"
import { Heading, Box, Text } from 'theme-ui'
import { Hero } from '@layout'
import HeroWide from '@widgets/HeroWide'
import MemphisPattern from '@components/MemphisPattern'
import useQuoteFR from '@helpers-blog/useQuote/FR'
import useQuoteEN from '@helpers-blog/useQuote/EN'

const styles = {
  hero: {
    backgroundColor: `#faf9f8`,
    position: `relative`
  },
  wrapper: {
    py: [3, 3, 4],
    alignItems: 'center',
    gap: [3, 4],
    flexDirection: ['column', null, 'row']
  },
  leftColumn: {
    flexBasis: ['auto', null, 'auto'],
    flexShrink: 0,
    textAlign: ['center', null, 'left']
  },
  heading: {
    color: '#87311a',
    fontSize: [6, 6, 7],
    fontWeight: 700,
    lineHeight: 1.2,
    m: 0,
    '& span': {
      color: '#87311a',
      fontWeight: 700
    }
  },
  divider: {
    width: ['2rem', null, '1px'],
    height: [1, null, '3.5rem'],
    bg: '#87311a',
    opacity: 0.4,
    flexShrink: 0,
    display: ['none', null, 'block']
  },
  rightColumn: {
    flex: [1, null, '1 1 auto'],
    minWidth: 0,
    display: 'block'
  },
  quoteBlock: {
    borderLeft: '3px solid',
    borderLeftColor: '#87311a',
    pl: 4,
    py: 0
  },
  quote: {
    color: 'omegaDark',
    fontSize: [3, 4, 4],
    lineHeight: 1.5,
    fontStyle: 'italic',
    m: 0,
    '& p': { m: 0 }
  },
  quoteAuthor: {
    mt: 2,
    fontSize: [1, 2],
    color: '#87311a',
    fontWeight: 'bold',
    letterSpacing: '0.04em',
    textTransform: 'uppercase'
  }
}

const Banner = ({ data }) => {
  const { title, content } = data

  return (
    <Hero sx={styles.hero}>
      <HeroWide.Wrapper sx={styles.wrapper}>
        <HeroWide.LeftColumn sx={styles.leftColumn}>
          <Heading as="h2" variant="h3" sx={styles.heading}>
            <FormattedMessage id="site" />
            {title && (
              <>
                {' · '}
                <span>{title}</span>
              </>
            )}
          </Heading>
        </HeroWide.LeftColumn>
        <Box sx={styles.divider} aria-hidden />
        <HeroWide.RightColumn sx={styles.rightColumn}>
          <Box sx={styles.quoteBlock}>
            <Text as="div" sx={styles.quote}>
              <div dangerouslySetInnerHTML={{ __html: content }} />
            </Text>
            <Text as="p" sx={styles.quoteAuthor}>
              — Africtivistes
            </Text>
          </Box>
        </HeroWide.RightColumn>
      </HeroWide.Wrapper>
      <MemphisPattern />
    </Hero>
  )
}

const BannerWide = () => {
  
  const { nodes: nodesFR  } = useQuoteFR()
  const { nodes: nodesEN  } = useQuoteEN()

  return (
    <IntlContextConsumer>
      {({ language: currentLocale }) =>
        currentLocale === 'fr' ? nodesFR.map((data,index) => <Banner data={data} key={`fr-${index}`}/>) : nodesEN.map((data,index) => <Banner data={data} key={`en-${index}`}/>)}
    </IntlContextConsumer>
  )
}

export default BannerWide
