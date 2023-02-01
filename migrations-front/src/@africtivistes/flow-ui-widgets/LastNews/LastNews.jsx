import React from 'react'
import { useIntl, IntlContextConsumer } from "gatsby-plugin-react-intl"
import CardList from '@components/CardList'
import useLastFR from '@helpers-blog/useLast/FR'
import useLastEN from '@helpers-blog/useLast/EN'

const Card = ({data}) => {

  const intl = useIntl()
  
  return(<CardList
      nodes={data}
      limit={4}
      columns={[1, 2, 1, 2]}
      variant={['horizontal-md', 'vertical']}
      omitMedia
      title={intl.formatMessage({ id: "dernieresnouvelles" })}
    />
  )}

const LastNews = () => {
  
  const { nodes: nodesFR  } = useLastFR()
  const { nodes: nodesEN  } = useLastEN()

  return (
    <IntlContextConsumer>
      {({ language: currentLocale }) =>
        currentLocale === 'fr' ? <Card data={nodesFR} /> : <Card data={nodesEN} />}
    </IntlContextConsumer>
  )
}

export default LastNews
