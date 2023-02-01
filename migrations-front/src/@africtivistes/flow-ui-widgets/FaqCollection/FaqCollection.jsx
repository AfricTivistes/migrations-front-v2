import React from 'react'
import { useIntl, IntlContextConsumer } from "gatsby-plugin-react-intl"
import { Stack, Main } from '@layout'
import CardList from '@components/CardList'
import useFaqFR from '@helpers-blog/useFaq/FR'
import useFaqEN from '@helpers-blog/useFaq/EN'

const Card = ({data}) => {

  const intl = useIntl()
  
  return(<Stack>
    <Main sx={{ zIndex: 1 }}>
      <CardList
        variant={['horizontal']}
        title={intl.formatMessage({ id: "subtitlefaq" })}
        nodes={data}
        columns={[1, 2]}
        omitMedia
      />
    </Main>
  </Stack>)}

const FaqCollection = () => {
  
  const { nodes: nodesFR  } = useFaqFR()
  const { nodes: nodesEN  } = useFaqEN()

  return (
    <IntlContextConsumer>
      {({ language: currentLocale }) =>
        currentLocale === 'fr' ? <Card data={nodesFR} /> : <Card data={nodesEN} />}
    </IntlContextConsumer>
  )
}

export default FaqCollection
