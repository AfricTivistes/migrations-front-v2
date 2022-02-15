import React from 'react'
import { Link } from 'gatsby'
import { useIntl, FormattedMessage } from "gatsby-plugin-react-intl"
import { Button } from 'theme-ui'
import { Layout, Stack, Main } from '@layout'
import PageTitle from '@components/PageTitle'
import Section from '@components/Section'
import Divider from '@components/Divider'
import Seo from '@widgets/Seo'

const Page404 = props => {
  const intl = useIntl()
  
  return(<Layout {...props}>
    <Seo title={intl.formatMessage({ id: "404titre" })} />
    <Divider />
    <Stack>
      <Main>
        <Section>
          <PageTitle
            header={intl.formatMessage({ id: "404header" })}
            subheader={intl.formatMessage({ id: "404subheader" })}
          />
        </Section>
        <Section>
          <Button variant='primary' as={Link} to='/'>
            <FormattedMessage id='404button' />
          </Button>
        </Section>
      </Main>
    </Stack>
  </Layout>
)}

export default Page404
