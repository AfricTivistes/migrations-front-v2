import React from 'react'
import { IntlContextConsumer } from "gatsby-plugin-react-intl"
import { Box } from 'theme-ui'
import Divider from '@components/Divider'
import CardList from '@components/CardList'
import useRessourcesFR from '@helpers-blog/useHeroRessources/FR'
import useRessourcesEN from '@helpers-blog/useHeroRessources/EN'

const Card = ({data}) => {
  
  const sliderRef = React.useRef()

  return(<><CardList
    nodes={data}
    variant={['horizontal-hero']}
    limit={3}
    omitFooter
    slider
    autoPlay
    fade
    arrows={false}
    controlPosition='bottom'
    ref={sliderRef}
    loading='eager'
  />
  <Box sx={{ display: [`none`, null, `block`] }}>
    <Divider />
    <CardList
      nodes={data}
      variant={['horizontal-md', 'horizontal-aside']}
      limit={3}
      columns={[1, 0, 3]}
      omitCategory
      asNavFor={sliderRef}
      loading='eager'
    />
  </Box></>)}

const HeroRessources = () => {
  
  const { nodes: nodesFR  } = useRessourcesFR()
  const { nodes: nodesEN  } = useRessourcesEN()

  return (
    <IntlContextConsumer>
      {({ language: currentLocale }) =>
        currentLocale === 'fr' ? <Card data={nodesFR} /> : <Card data={nodesEN} />}
    </IntlContextConsumer>
  )
}

export default HeroRessources
