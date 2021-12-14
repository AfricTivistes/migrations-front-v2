import React from 'react'
import { graphql } from "gatsby"
import { Layout, Stack, Main, Sidebar } from '@layout'
import PageTitle from '@components/PageTitle'
import Divider from '@components/Divider'
import Seo from '@widgets/Seo'
import ContactForm from '@widgets/ContactForm'
import ContactInfo from '@widgets/ContactInfo'
import Commitment from '@widgets/Commitment'

const PageContact = props => {

const {title, content} = props.data.allWpPage.nodes[0]

return (<Layout {...props}>
    <Seo title='Contact' />
    <Divider />
    <Stack>
      <Main>
        <PageTitle
          header={title}
          subheader={content}
        />
        <Divider />
        <ContactForm />
      </Main>
      <Sidebar>
        <Commitment />
        <Divider />
        <ContactInfo />
      </Sidebar>
    </Stack>
  </Layout>
)}

export default PageContact

export const query = graphql`
query {
  allWpPage(filter: {slug: {eq: "contact"}}) {
    nodes {
      title
      content
    }
  }
}
`