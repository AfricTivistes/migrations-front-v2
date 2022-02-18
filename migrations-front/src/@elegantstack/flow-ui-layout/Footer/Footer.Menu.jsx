import React from 'react'
import { IntlContextConsumer } from "gatsby-plugin-react-intl"
import { Box } from 'theme-ui'
import Navigation from '@components/Navigation/Menu'
import useMenuFooterFR from '@helpers-blog/useMenuFooterFR'
import useMenuFooterEN from '@helpers-blog/useMenuFooterEN'

const styles = {
  navHeader: {
    display: [`none`, `block`]
  }
}

const MenuBox = ({menu}) => (
  <Box>
    <Navigation
      variant={[`horizontal`, `vertical`]}
      headingProps={{ variant: 'h4', as: 'p', sx: styles.navHeader }}
      nodes={[menu]}
    />
  </Box>
)

export const FooterMenu = () => {
  
  const { nodes: nodesFR  } = useMenuFooterFR()
  const { nodes: nodesEN  } = useMenuFooterEN()
  
  return (
    <IntlContextConsumer>
      {({ language: currentLocale }) =>
        currentLocale === 'fr' ? nodesFR.map((data,index) => <MenuBox menu={data} key={`fr-${index}`} />) : nodesEN.map((data,index) => <MenuBox menu={data} key={`en-${index}`}/>)}
    </IntlContextConsumer>
  )
}
