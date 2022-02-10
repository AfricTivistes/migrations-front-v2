import React from 'react'
import { graphql } from "gatsby"
import { Layout, Stack, Main } from '@layout'
import PageTitle from '@components/PageTitle'
import Divider from '@components/Divider'
import Seo from '@widgets/Seo'

const PageMentions = props => {
  const {title, content} = props.data.allWpPage.nodes[0]

  return (
    <Layout {...props}>
      <Seo title='Mentions légales' />
      <Divider />
      <Stack effectProps={{ effect: 'fadeInDown' }}>
      <PageTitle
          header={title}
          subheader={content}
        />
      </Stack>
    </Layout>
  )
}

export default PageMentions
export const query = graphql`
query {
  allWpPage(filter: {slug: {eq: "mentions-legales"}}) {
    nodes {
      title
      content
    }
  }
}
`