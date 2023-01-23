import React from 'react'
import { Layout, Stack, Main } from '@layout'
import PageTitle from '@components/PageTitle'
import Divider from '@components/Divider'
import Seo from '@widgets/Seo'
import AuthorExpanded from '@widgets/AuthorExpanded'
import { useBlogAuthors } from '@helpers-blog'
import { useIntl } from "gatsby-plugin-react-intl"


const PageAuthors = props => {
  const authors = useBlogAuthors()
  const intl = useIntl()

  return (
    <Layout {...props}>
      <Seo title={intl.formatMessage({ id: "team" })} />
      <Divider />
      <Stack effectProps={{ effect: 'fadeInDown' }}>
        <PageTitle
          header={intl.formatMessage({ id: "members" })}
        />
      </Stack>
      <Stack>
        <Main>
          {authors.map((author, i) => (
            <React.Fragment key={`item-${i}`}>
              <Divider />
              <AuthorExpanded author={author} withLink />
            </React.Fragment>
          ))}
        </Main>
      </Stack>
    </Layout>
  )
}

export default PageAuthors
