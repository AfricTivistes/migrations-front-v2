import React from 'react'
import { Layout, Stack, Main, Sidebar } from '@layout'
import PageTitle from '@components/PageTitle'
import Divider from '@components/Divider'
import Seo from '@widgets/Seo'
import ContributionForm from '@widgets/ContributionForm'
import ContactInfo from '@widgets/ContactInfo'
import Categories from '@widgets/Categories'

const PageContribution = ({ data: { page }, ...props }) => {

const {title, content} = page.nodes[0]

  return(<Layout {...props}>
    <Seo title={title} />
    <Divider />
    <Stack>
      <Main>
        <PageTitle
          header={title}
          subheader={content}
        />
        <Divider />
        <ContributionForm />
      </Main>
      <Sidebar>
        <Categories />
        <Divider />
        <ContactInfo />
      </Sidebar>
    </Stack>
  </Layout>)
}

export default PageContribution
