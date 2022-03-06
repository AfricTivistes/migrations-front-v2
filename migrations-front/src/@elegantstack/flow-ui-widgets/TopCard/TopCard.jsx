import React from 'react'
import { useIntl, IntlContextConsumer } from "gatsby-plugin-react-intl"
import CardList from '@components/CardList'
import useTopFR from '@helpers-blog/useTop/FR'
import useTopEN from '@helpers-blog/useTop/EN'

const Card = ({data}) => {
  
  const intl = useIntl()

  return(<CardList
  nodes={data}
  limit={4}
  columns={[1, 2, 2, 4]}
  variant={['vertical-cover']}
  omitCategory
  title={intl.formatMessage({ id: "premierchoixmois" })}
  aside
/>)}

const TopCard = () => {
  
  const { nodes: nodesFR  } = useTopFR()
  const { nodes: nodesEN  } = useTopEN()

  return (
    <IntlContextConsumer>
      {({ language: currentLocale }) =>
        currentLocale === 'fr' ? <Card data={nodesFR} /> : <Card data={nodesEN} />}
    </IntlContextConsumer>
  )
}

export default TopCard
