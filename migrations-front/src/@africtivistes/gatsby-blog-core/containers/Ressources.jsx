import React from 'react'
import { Card as CardComponent } from 'theme-ui'
import { Layout, Stack, Main } from '@layout'
import Card from '@components/Card'
import Divider from '@components/Divider'
import Seo from '@widgets/Seo'
import TableOfDownloadExpanded from '@widgets/TableOfDownloadExpanded'
import {
  ArticleBody,
} from '@widgets/Post'

const Post = ({
  data: { post },
  ...props
}) => {

  const { pageContext: { services = {}, siteUrl } = {} } = props

  return (
    <Layout {...props}>
      <Seo {...post.nodes[0]} siteUrl={siteUrl} />
      <Divider />
      <Stack effectProps={{ effect: 'fadeInDown' }}>
        <Main>
          <Card {...post.nodes[0]} variant='horizontal-hero' omitExcerpt />
        </Main>
      </Stack>
      <Divider space={3} />
      <Stack effectProps={{ fraction: 0 }}>
        <Main>
          <TableOfDownloadExpanded {...post.nodes[0]} />
          <Divider />
          <CardComponent variant='paper-lg'>
            <ArticleBody {...post.nodes[0]} />
          </CardComponent>
          <Divider />
        </Main>
      </Stack>
    </Layout>
  )
}

export default Post