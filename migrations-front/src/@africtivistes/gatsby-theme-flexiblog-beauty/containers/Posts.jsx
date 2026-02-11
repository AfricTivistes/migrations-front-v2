import React from 'react'
import { useIntl } from "gatsby-plugin-react-intl"
import { Box, Container } from 'theme-ui'
import { Layout, Stack, Main, Sidebar, Hero } from '@layout'
import Divider from '@components/Divider'
import MemphisPattern from '@components/MemphisPattern'
import Seo from '@widgets/Seo'
import NewsletterExpanded from '@widgets/NewsletterExpanded'
import NewsletterCompact from '@widgets/NewsletterCompact'
import Sponsor from '@widgets/Sponsor'
import Categories from '@widgets/Categories'
import BannerWide from '@widgets/BannerWide'
import HeroCard from '@widgets/HeroCard'
import HorizontalCard from '@widgets/HorizontalCard'
import LastNews from '@widgets/LastNews'
import TopCard from '@widgets/TopCard'
import CollectionArticle from '@widgets/CollectionArticle'
import LastRessources from '../../flow-ui-widgets/LastRessources/LastRessources'

const styles = {
  heroWrapper: {
    minHeight: ['50vh', '65vh'],
    position: 'relative'
  },
  heroThumbsContainer: {
    left: `50%`,
    top: `50%`,
    position: `absolute`,
    transform: `translate(-50%, -50%)`,
    display: [`none`, null, null, `block`]
  },
  heroThumbsInner: {
    width: `1/3`,
    ml: `auto`
  }
}

const Posts = ({ ...props }) => {
  const intl = useIntl()

  return (
    <Layout {...props}>
      <Seo title={intl.formatMessage({ id: "accueil" })} />
      <Hero full sx={styles.heroWrapper}>
        <HeroCard />
        <Container sx={styles.heroThumbsContainer}>
          <Box sx={styles.heroThumbsInner}>
            <HorizontalCard />
          </Box>
        </Container>
      </Hero>
      <BannerWide />
      <Divider />
      <Stack>
        <Main>
          <LastNews />
        </Main>
        <Sidebar pl={4}>
          <NewsletterCompact />
          <Divider />
          <Categories />
          <Divider />
          <LastRessources />
          <Divider />
          <Sponsor />
        </Sidebar>
      </Stack>
      <Divider />
      <Hero wide sx={{ bg: `contentBg`, pb: [3, 5], pt: [4, 5] }}>
        <Box sx={{ position: `relative`, zIndex: 2 }}>
          <TopCard />
        </Box>
        <MemphisPattern />
      </Hero>
      <Divider />
      <CollectionArticle />
      <Stack>
        <Main>
          <Divider />
          <NewsletterExpanded />
        </Main>
      </Stack>
    </Layout>
  )
}

export default Posts
