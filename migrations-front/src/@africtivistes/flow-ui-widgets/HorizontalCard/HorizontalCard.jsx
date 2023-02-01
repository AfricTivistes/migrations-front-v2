import React from 'react'
import { IntlContextConsumer } from "gatsby-plugin-react-intl"
import CardList from '@components/CardList'
import useHeroFR from '@helpers-blog/useHero/FR'
import useHeroEN from '@helpers-blog/useHero/EN'

const Card = ({data}) => {
  
  const sliderRef = React.useRef()
  
  return(<CardList
    nodes={data}
    limit={3}
    variant='horizontal-aside'
    imageVariant='hero'
    omitCategory
    asNavFor={sliderRef}
    loading='eager'
  />)}

const HorizontalCard = () => {
  
  const { nodes: nodesFR  } = useHeroFR()
  const { nodes: nodesEN  } = useHeroEN()

  return (
    <IntlContextConsumer>
      {({ language: currentLocale }) =>
        currentLocale === 'fr' ? <Card data={nodesFR} /> : <Card data={nodesEN} />}
    </IntlContextConsumer>
  )
}

export default HorizontalCard
