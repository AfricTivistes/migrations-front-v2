import React from 'react'
import { Box } from 'theme-ui'
import { useIntl, IntlContextConsumer } from "gatsby-plugin-react-intl"
import CardList from '@components/CardList'
import useLexiqueFR from '@helpers-blog/useLexique/FR'
import useLexiqueEN from '@helpers-blog/useLexique/EN'

const lexiqueSliderSx = {
  '& .slick-list': {
    margin: 0,
    paddingLeft: '0 !important',
    paddingRight: '0 !important',
  },
  '& .slick-slide': { paddingLeft: 0, paddingRight: 0 },
  '& .slick-slide > div': {
    paddingLeft: '0 !important',
    paddingRight: '0 !important',
  },
  '& .slick-slide .blog_card': {
    paddingLeft: '0 !important',
    paddingRight: '0 !important',
  },
  '& .slick-slide h2, & .slick-slide h3': {
    fontSize: ['1rem', '1.2rem'],
    fontWeight: 600,
    lineHeight: 1.3,
    textShadow: '0 1px 2px rgba(0,0,0,0.4)',
  },
}

const Card = ({ data }) => {
  const intl = useIntl()
  const lexiques = data.map(lexique => ({
    'id': lexique.id,
    'slug': `lexique/#${lexique.slug}`,
    'title': lexique.title,
    'featuredImage': lexique.featuredImage,
  })).sort(() => Math.random() - 0.5)

  return (
    <Box sx={lexiqueSliderSx}>
      <CardList
        nodes={lexiques}
        limit={8}
        variant='vertical-cover'
        title={intl.formatMessage({ id: "lexique" })}
        slider
        columns={[1, 2, 3, 4]}
        autoPlay
        autoplaySpeed={4000}
        smoothAutoScroll={false}
        centerMode={false}
        centerPadding='0px'
        dots={false}
        arrows
        controlPosition='sides'
      />
    </Box>
  )
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
