import React from 'react'
import { useIntl } from "gatsby-plugin-react-intl"
import { Box, Container } from 'theme-ui'
import { Layout, Stack, Main, Sidebar, Hero } from '@layout'
import CardList from '@components/CardList'
import Divider from '@components/Divider'
import MemphisPattern from '@components/MemphisPattern'
import Seo from '@widgets/Seo'
import NewsletterExpanded from '@widgets/NewsletterExpanded'
import Sponsor from '@widgets/Sponsor'
import Categories from '@widgets/Categories'
import BannerWide from '@widgets/BannerWide'
import HeroCard from '@widgets/HeroCard'
import HorizontalCard from '@widgets/HorizontalCard'
import { useBlogCategories } from '@helpers-blog'

const styles = {
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

const Posts = ({
  data: { posts = {}, featuredPosts = {}, recentPosts = {} },
  ...props
}) => {
  const { pageContext: { services = {} } = {} } = props
  const categories = useBlogCategories()
  const intl = useIntl()

  return (
    <Layout {...props}>
      <Seo title={intl.formatMessage({ id: "accueil" })} />
      <Hero full sx={{ position: `relative` }}>
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
          <CardList
            nodes={featuredPosts.nodes}
            limit={4}
            skip={3}
            columns={[1, 2, 1, 2]}
            variant={['horizontal-md', 'vertical']}
            omitMedia
            title='Controversial News'
          />
        </Main>
        <Sidebar pl={4}>
          <Categories categories={categories} />
          <Divider />
          <Sponsor />
        </Sidebar>
      </Stack>
      <Divider />
      <Hero wide sx={{ bg: `contentBg`, pb: [3, 5], pt: [4, 5] }}>
        <Box sx={{ position: `relative`, zIndex: 2 }}>
          <CardList
            nodes={featuredPosts.nodes}
            limit={4}
            skip={3}
            columns={[1, 2, 2, 4]}
            variant={['vertical-cover']}
            omitCategory
            title='Our Top Pick This Month'
            aside
          />
        </Box>
        <MemphisPattern />
      </Hero>
      <Divider />
      {posts.group.length &&
        posts.group.map((group, index) => (
          <React.Fragment key={`${group.categoryName}.list`}>
            {index % 2 === 0 ? (
              <Stack
                title={group.categoryName}
                titleLink={group.nodes[0].category.slug}
              >
                <Main>
                  <CardList
                    nodes={group.nodes}
                    limit={6}
                    columns={[1, 1, 2]}
                    variant={['horizontal-md', 'horizontal']}
                    omitCategory
                    omitExcerpt
                  />
                </Main>
              </Stack>
            ) : (
              <Stack
                title={group.categoryName}
                titleLink={group.nodes[0].category.slug}
              >
                <Main>
                  <CardList
                    nodes={group.nodes}
                    limit={3}
                    columns={[1, 1, 2, 3]}
                    variant={[
                      'horizontal-md',
                      'horizontal',
                      'horizontal',
                      'vertical'
                    ]}
                    omitCategory
                    omitExcerpt
                  />
                  <Divider space={2} />
                  <CardList
                    nodes={group.nodes}
                    limit={3}
                    skip={3}
                    columns={[1, 2, 3]}
                    variant={['horizontal-md', 'horizontal-aside']}
                    omitCategory
                    omitExcerpt
                  />
                  <Divider space={2} />
                  <CardList
                    nodes={group.nodes}
                    limit={3}
                    skip={6}
                    columns={[1, 1, 2, 3]}
                    variant={[
                      'horizontal-md',
                      'horizontal',
                      'horizontal',
                      'vertical'
                    ]}
                    omitCategory
                    omitExcerpt
                  />
                </Main>
              </Stack>
            )}
            {index === 1 && (
              <>
                <Divider />
                <Hero wide sx={{ pb: [3, 5], pt: [4, 5] }}>
                  <Box sx={{ position: `relative`, zIndex: 2 }}>
                    <CardList
                      nodes={featuredPosts.nodes}
                      limit={2}
                      skip={7}
                      columns={[1, 1, 1, 2]}
                      variant={[
                        'horizontal-md',
                        'horizontal',
                        'horizontal',
                        'horizontal-lg'
                      ]}
                      title='Trending Now'
                      aside
                    />
                  </Box>
                  <MemphisPattern />
                </Hero>
              </>
            )}
            {index !== posts.group.length - 1 && <Divider />}
          </React.Fragment>
        ))}
      <Stack>
        <Main>
          {services.mailchimp && (
            <>
              <Divider />
              <NewsletterExpanded simple />
            </>
          )}
        </Main>
      </Stack>
    </Layout>
  )
}

export default Posts
