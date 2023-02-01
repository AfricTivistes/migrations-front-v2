import React from 'react'
import { Layout, Stack, Hero, Main } from '@layout'
import Divider from '@components/Divider'
import NewsletterExpanded from '@widgets/NewsletterExpanded'
import FaqCollection from '@widgets/FaqCollection'
import Seo from '@widgets/Seo'
import HeroFaq from '../components/HeroFaq'

const PageContact = ({ data: { page }, ...props }) => {

  const {title, content} = page.nodes[0]

  return(<Layout {...props}>
    <Seo title={title} content={content} />
    <Hero>
      <HeroFaq title={title} {...props} />
    </Hero>
    <Divider />
    <FaqCollection />
    <Divider space={5} />
    <Stack>
      <Main sx={{ zIndex: 1 }}>
        <NewsletterExpanded simple />
      </Main>
    </Stack>
  </Layout>)
}

export default PageContact
