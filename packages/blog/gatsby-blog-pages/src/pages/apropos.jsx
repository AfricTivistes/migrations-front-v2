import React from 'react'
import { graphql } from "gatsby"
import { Layout, Stack } from '@layout'
import PageTitle from '@components/PageTitle'
import Divider from '@components/Divider'
import Seo from '@widgets/Seo'

const PageAPropos = props => {
  const {title, content} = props.data.allWpPage.nodes[0]

  return (
    <Layout {...props}>
      <Seo title='Espace dialogue' />
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

export default PageAPropos
export const query = graphql`
query {
  allWpPage(filter: {slug: {eq: "a-propos"}}) {
    nodes {
      title
      content
    }
  }
}
`