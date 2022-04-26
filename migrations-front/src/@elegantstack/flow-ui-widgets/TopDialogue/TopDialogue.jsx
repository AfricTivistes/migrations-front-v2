import React from 'react'
import { useIntl, IntlContextConsumer } from "gatsby-plugin-react-intl"
import CardList from '@components/CardList'
import useTopDialogueFR from '@helpers-blog/useTopDialogue/FR'
import useTopDialogueEN from '@helpers-blog/useTopDialogue/EN'

const Card = ({data}) => {
  
  const intl = useIntl()
  console.log(data)
  return(<CardList
    nodes={data}
    variant={['horizontal-md', 'horizontal']}
    limit={2}
    title={intl.formatMessage({ id: "meilleureshistoires" })}
    loading='eager'
  />)}

const TopDialogue = () => {
  
  const { nodes: nodesFR  } = useTopDialogueFR()
  const { nodes: nodesEN  } = useTopDialogueEN()

  return (
    <IntlContextConsumer>
      {({ language: currentLocale }) =>
        currentLocale === 'fr' ? <Card data={nodesFR} /> : <Card data={nodesEN} />}
    </IntlContextConsumer>
  )
}

export default TopDialogue
