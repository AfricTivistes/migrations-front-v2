import React from 'react'
import { useIntl, IntlContextConsumer } from "gatsby-plugin-react-intl"
import CardList from '@components/CardList'
import useLexiqueFR from '@helpers-blog/useLexique/FR'
import useLexiqueEN from '@helpers-blog/useLexique/EN'

const Card = ({data}) => {
  
  const intl = useIntl()

  return (<CardList
    nodes={data}
    limit={5}
    variant='vertical-cover'
    title={intl.formatMessage({ id: "lexique" })}
    slider
    columns={[1, 2, 3, 4]}
    autoPlay
  />)
}

const CollectionArticle = () => {
  
  const { nodes: nodesFR  } = useLexiqueFR()
  const { nodes: nodesEN  } = useLexiqueEN()

  return (
    <IntlContextConsumer>
      {({ language: currentLocale }) =>
        currentLocale === 'fr' ? <Card data={nodesFR} /> : <Card data={nodesEN} />}
    </IntlContextConsumer>
  )
}

export default CollectionArticle
