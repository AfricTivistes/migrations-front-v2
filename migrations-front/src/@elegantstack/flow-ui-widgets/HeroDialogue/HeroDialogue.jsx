import React from 'react'
import { useIntl, IntlContextConsumer } from "gatsby-plugin-react-intl"
import CardList from '@components/CardList'
import useHeroDialogueFR from '@helpers-blog/useHeroDialogue/FR'
import useHeroDialogueEN from '@helpers-blog/useHeroDialogue/EN'

const Card = ({data}) => {

  const intl = useIntl()
  
  return(<CardList
    nodes={data}
    variant='vertical-cover'
    limit={4}
    columns={[1, 2]}
    title={intl.formatMessage({ id: "alaunecemoisci" })}
    slider
    autoPlay
    loading='eager'
  />)}

const HeroDialogue = () => {
  
  const { nodes: nodesFR  } = useHeroDialogueFR()
  const { nodes: nodesEN  } = useHeroDialogueEN()

  return (
    <IntlContextConsumer>
      {({ language: currentLocale }) =>
        currentLocale === 'fr' ? <Card data={nodesFR} /> : <Card data={nodesEN} />}
    </IntlContextConsumer>
  )
}

export default HeroDialogue
