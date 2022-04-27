import React from 'react'
import { Card as CardComponent } from 'theme-ui'
import { Layout, Stack, Main, Sidebar, Hero } from '@layout'
// import CardList from '@components/CardList'
import Card from '@components/Card'
import Divider from '@components/Divider'
import Sticky from '@components/Sticky'
import Seo from '@widgets/Seo'
// import TableOfContentsCompact from '@widgets/TableOfContentsCompact'
import {
  ArticleBody,
  ArticleFooter
} from '@widgets/Post'

const Post = ({
  data: { post, tagCategoryPosts, tagPosts, categoryPosts, previous, next },
  ...props
}) => {
  
  const { pageContext: { services = {}, siteUrl } = {} } = props
  
  return (
    <Layout {...props}>
      <Seo {...post.nodes[0]} siteUrl={siteUrl} />
      <Hero full>
        <Card {...post.nodes[0]} variant='horizontal-cover-hero' omitExcerpt />
      </Hero>
      <Divider />
      <Stack effectProps={{ fraction: 0 }}>
        <Main>
          <CardComponent variant='paper'>
            <ArticleBody {...post.nodes[0]} />
            <ArticleFooter previous={previous.nodes[0]} next={next.nodes[0]} />
          </CardComponent>
        </Main>
        <Sidebar>
          <Divider />
          <Sticky>
            {/* {post.tableOfContents?.items && (
              <>
                <TableOfContentsCompact {...post} />
                <Divider />
              </>
            )}
            {post.category && (
              <CardList
                title='Related Posts'
                nodes={relatedPosts}
                variant='horizontal-aside'
                limit={6}
                omitMedia
                omitCategory
                distinct
                aside
              />
            )} */}
          </Sticky>
        </Sidebar>
      </Stack>
    </Layout>
  )
}

export default Post
