import React from 'react'
import { useIntl, IntlContextConsumer } from "gatsby-plugin-react-intl"
import CardList from '@components/CardList'
import useLexiqueFR from '@helpers-blog/useLexique/FR'
import useLexiqueEN from '@helpers-blog/useLexique/EN'

const Card = ({data}) => {
  
  const intl = useIntl()
  const lexiques = data.map(lexique => ({
    'id': lexique.id,
    'slug': `/lexique/#${lexique.slug}`,
    'title': lexique.title,
    'featuredImage': lexique.featuredImage,
  })).sort( () => Math.random() - 0.5)

  return (<CardList
    nodes={lexiques}
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
