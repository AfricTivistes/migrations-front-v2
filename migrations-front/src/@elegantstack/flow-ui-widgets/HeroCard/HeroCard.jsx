import React from 'react'
import { IntlContextConsumer } from "gatsby-plugin-react-intl"
import CardList from '@components/CardList'
import useHeroFR from '@helpers-blog/useHero/FR'
import useHeroEN from '@helpers-blog/useHero/EN'

const Card = ({data}) => {
  
  const sliderRef = React.useRef()
  console.log(data)
  return(<CardList
    nodes={data}
    limit={3}
    variant='horizontal-cover-hero'
    omitFooter
    slider
    autoPlay
    fade
    dots={false}
    arrows={false}
    ref={sliderRef}
    loading='eager'
  />)}

const HeroCard = () => {
  
  const { nodes: nodesFR  } = useHeroFR()
  const { nodes: nodesEN  } = useHeroEN()

  return (
    <IntlContextConsumer>
      {({ language: currentLocale }) =>
        currentLocale === 'fr' ? <Card data={nodesFR} /> : <Card data={nodesEN} />}
    </IntlContextConsumer>
  )
}

export default HeroCard
