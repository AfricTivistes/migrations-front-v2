import React from 'react'
import { IntlContextConsumer } from "gatsby-plugin-react-intl"
import { Box } from 'theme-ui'
import Navigation from '@components/Navigation'
import Drawer from '@components/Drawer'
import useMenuHeaderFR from '@helpers-blog/useHeader/FR'
import useMenuHeaderEN from '@helpers-blog/useHeader/EN'

const styles = {
  desktopMenu: {
    display: [`none`, null, `block`]
  },
  mobileMenu: {
    display: [`block`, null, `none`]
  },
  desktopMenuWrapper: {
    justifyContent: 'flex-end'
  }
}

export const HeaderMenu = ({ mobileMenu = {} }) => {

  const { nodes: nodesFR  } = useMenuHeaderFR()
  const { nodes: nodesEN  } = useMenuHeaderEN()

  const DesktopMenuNav = ({data}) => (
    <Navigation
      variant='horizontal'
      items={data}
      wrapperStyle={styles.desktopMenuWrapper}
    />
  )

  const MobileMenuNav = ({data}) => (
    <Drawer>
      <Navigation
        variant='vertical'
        headingProps={{ variant: 'h3' }}
        items={[
          {
            title: 'Main Menu',
            items: data
          },
          mobileMenu
        ]}
      />
    </Drawer>
  )

  return (
    <IntlContextConsumer>
      {({ language: currentLocale }) =>
        currentLocale === 'fr' ? <>
      <Box sx={styles.desktopMenu}><DesktopMenuNav data={nodesFR} /></Box>
      <Box sx={styles.mobileMenu}><MobileMenuNav data={nodesFR} /></Box></> : <>
      <Box sx={styles.desktopMenu}><DesktopMenuNav data={nodesEN} /></Box>
      <Box sx={styles.mobileMenu}><MobileMenuNav data={nodesEN} /></Box></>
      }
    </IntlContextConsumer>
  )
}
