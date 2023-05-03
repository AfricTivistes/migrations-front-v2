import React from 'react'
import { useIntl, IntlContextConsumer } from "gatsby-plugin-react-intl"
import CardList from '@components/CardList'
import useRessourcesFR from '@helpers-blog/useHeroRessources/FR'
import useRessourcesEN from '@helpers-blog/useHeroRessources/EN'

const Card = ({data}) => {

  const intl = useIntl()

  return (<CardList
    nodes={data}
    limit={5}
    variant='horizontal-aside'
    title={intl.formatMessage({ id: "ressourcesetdonnees" })}
    omitMedia
    omitCategory
    aside

  />)}

const LastRessources = () => {
  
  const { nodes: nodesFR  } = useRessourcesFR()
  const { nodes: nodesEN  } = useRessourcesEN()

  return (
    <IntlContextConsumer>
      {({ language: currentLocale }) =>
        currentLocale === 'fr' ? <Card data={nodesFR} /> : <Card data={nodesEN} />}
    </IntlContextConsumer>
  )
}

export default LastRessources
