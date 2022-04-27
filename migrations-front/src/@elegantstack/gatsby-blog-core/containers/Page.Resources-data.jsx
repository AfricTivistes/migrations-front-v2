import React from 'react'
import { Box } from 'theme-ui'
import { Layout, Hero } from '@layout'
import Divider from '@components/Divider'
import Seo from '@widgets/Seo'
import HeroRessources from '@widgets/HeroRessources'
import RessourcesType from '@widgets/RessourcesType'

const PageContact = ({ data: { page }, ...props }) => {

  const {title, content} = page.nodes[0]

  return(<Layout {...props}>
    <Seo title={title} content={content} />
    <Hero
      pt={4}
      pb={5}
      sx={{
        background: t =>
          `linear-gradient(
            0deg,
            ${t.colors.omegaLighter},
            ${t.colors.background}
          )`
      }}
    >
      <Divider space={3} />
      <Box sx={{ position: `relative`, zIndex: 3 }}>
        <Box sx={{ display: [`none`, `block`] }}>
          <RessourcesType />
        </Box>
        <HeroRessources />
      </Box>
    </Hero>
    <Divider />
  </Layout>)
}

export default PageContact
