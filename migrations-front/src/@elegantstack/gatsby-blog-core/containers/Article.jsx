import React from 'react'
import { Card as CardComponent } from 'theme-ui'
import { Layout, Stack, Main, Sidebar, Hero } from '@layout'
// import CardList from '@components/CardList'
import Card from '@components/Card'
import Divider from '@components/Divider'
import Sticky from '@components/Sticky'
import Seo from '@widgets/Seo'
import AuthorArticle from '@widgets/AuthorArticle'
// import TableOfContentsCompact from '@widgets/TableOfContentsCompact'
import {
  ArticleBody,
  PostComments,
  PostCommentsFacebook,
  PostCommentsGraph,
  PostTagsShare,
  ArticleFooter
} from '@widgets/Post'

const Post = ({
  data: { post, tagCategoryPosts, tagPosts, categoryPosts, previous, next },
  ...props
}) => {
  // const relatedPosts = [
  //   ...(tagCategoryPosts ? tagCategoryPosts.nodes : []),
  //   ...(tagPosts ? tagPosts.nodes : []),
  //   ...(categoryPosts ? categoryPosts.nodes : [])
  // ]
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
            <PostTagsShare {...post.nodes[0]} location={props.location} />
            {services.disqus && <PostComments {...post.nodes[0]} />}
            {services.graphComment && <PostCommentsGraph {...post.nodes[0]} />}
            {services.facebookComment && (
              <PostCommentsFacebook {...post} siteUrl={siteUrl} />
            )}
            <ArticleFooter previous={previous.nodes[0]} next={next.nodes[0]} />
          </CardComponent>
        </Main>
        <Sidebar>
          <AuthorArticle author={post.nodes[0].author} omitTitle />
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
