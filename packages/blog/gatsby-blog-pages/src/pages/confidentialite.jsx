import React from 'react'
import { graphql } from "gatsby"
import { Layout, Stack, Main } from '@layout'
import PageTitle from '@components/PageTitle'
import Divider from '@components/Divider'
import Seo from '@widgets/Seo'

const PageConfidentialite = props => {
  const {title, content} = props.data.allWpPage.nodes[0]

  return (
    <Layout {...props}>
      <Seo title='Condition de confidentialite' />
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

export default PageConfidentialite
export const query = graphql`
query {
  allWpPage(filter: {slug: {eq: "condition-de-confidentialite"}}) {
    nodes {
      title
      content
    }
  }
}
`