import React from 'react'
import { IntlContextConsumer, FormattedMessage } from "gatsby-plugin-react-intl"
import { Heading, Box } from 'theme-ui'
import { Hero } from '@layout'
import HeroWide from '@widgets/HeroWide'
import MemphisPattern from '@components/MemphisPattern'
import useQuoteFR from '@helpers-blog/useQuote/FR'
import useQuoteEN from '@helpers-blog/useQuote/EN'

const styles = {
  hero: {
    backgroundColor: `#fff`,
    position: `relative`
  },
  wrapper: {
    py: 0
  },
  heading: {
    color: `omegaDark`,
    span: {
      color: `alpha`
    }
  },
  rightColumn: {
    flexBasis: `1/3`
  },
  quoteWrapper: {
    borderLeft: `5px solid`,
    borderLeftColor: `omegaLighter`,
    pl: 5,
    py: 2,
    my: 5
  },
  quote: {
    color: `omegaDark`,
    fontWeight: `body`
  },
  quoteAuthor: {
    color: `omegaDark`,
    mb: 0
  }
}

const Banner = ({data}) => {
  const { title, content } = data
  
  return(<Hero sx={styles.hero}>
      <HeroWide.Wrapper sx={styles.wrapper}>
        <HeroWide.LeftColumn>
          <Heading variant='h1' sx={styles.heading}>
            <FormattedMessage id="site" />
            <br />
            <span>{title}</span>
          </Heading>
        </HeroWide.LeftColumn>
        <HeroWide.RightColumn sx={styles.rightColumn}>
          <Box sx={styles.quoteWrapper}>
            <Heading variant='h3' sx={styles.quote}>
              <div dangerouslySetInnerHTML={{ __html: content }} />
            </Heading>
            <Heading variant='h4' sx={styles.quoteAuthor}>
              Africtivistes
            </Heading>
          </Box>
        </HeroWide.RightColumn>
      </HeroWide.Wrapper>
      <MemphisPattern />
    </Hero>
)}

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
