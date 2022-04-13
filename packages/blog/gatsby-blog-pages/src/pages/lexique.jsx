import React from 'react'
import { useIntl, IntlContextConsumer } from "gatsby-plugin-react-intl"
import { Layout, Stack, Main } from '@layout'
import PageTitle from '@components/PageTitle'
import Divider from '@components/Divider'
import Seo from '@widgets/Seo'
import LexiqueExpanded from '@widgets/LexiqueExpanded'
import useLexiqueFR from '@helpers-blog/useCollectionLexique/FR'
import useLexiqueEN from '@helpers-blog/useCollectionLexique/EN'

const Card = ({data}) => {

  return (<Main>{data.map((item, i) => (
    <React.Fragment key={`item-${i}`}>
      <Divider />
      <LexiqueExpanded item={item} />
    </React.Fragment>
  ))}</Main>)
}

const PageLixique = props => {
  const intl = useIntl()
  const { nodes: nodesFR  } = useLexiqueFR()
  const { nodes: nodesEN  } = useLexiqueEN()

  return (
    <Layout {...props}>
      <Seo title={intl.formatMessage({ id: "lexique" })} />
      <Divider />
      <Stack effectProps={{ effect: 'fadeInDown' }}>
        <PageTitle
          header={intl.formatMessage({ id: "lexique" })}
          subheader={intl.formatMessage({ id: "descriptionLexique" })}
        />
      </Stack>
      <Stack>
        <IntlContextConsumer>
          {({ language: currentLocale }) =>
          currentLocale === 'fr' ? <Card data={nodesFR} /> : <Card data={nodesEN} />}
        </IntlContextConsumer>
      </Stack>
    </Layout>
  )
}

export default PageLixique
