import React from 'react'
import { Layout, Stack, Main, Sidebar } from '@layout'
import Sticky from '@components/Sticky'
import Divider from '@components/Divider'
import Seo from '@widgets/Seo'
import Tags from '@widgets/Tags'
import Sponsor from '@widgets/Sponsor'
import Social from '@widgets/Social'
import Categories from '@widgets/Categories'
import CollectionDialogue from '@widgets/CollectionDialogue'
import LastNewsCol from '@widgets/LastNewsCol'
import TopDialogue from '@widgets/TopDialogue'
import HeroDialogue from '@widgets/HeroDialogue'
import { useBlogTags } from '@helpers-blog'
import NewsletterExpanded from '@widgets/NewsletterExpanded'

const PageContact = ({ data: { page }, ...props }) => {

  const {title} = page.nodes[0]
  const tags = useBlogTags()

  return(<Layout {...props}>
    <Seo title={title} />
    <Divider />
    <Stack effectProps={{ effect: false }}>
      <Main>
        <HeroDialogue />
        <Divider />
        <TopDialogue />
        <CollectionDialogue />
        <Divider space={3}/>
        <NewsletterExpanded/>
      </Main>
      <Sidebar>
        <LastNewsCol />
        <Divider />
        <Sponsor />
        <Divider />
        <Social />
        <Divider />
        <Tags tags={tags} />
        <Divider />
        <Sticky>
          <Categories />
        </Sticky>
      </Sidebar>
    </Stack>
  </Layout>)
}

export default PageContact
