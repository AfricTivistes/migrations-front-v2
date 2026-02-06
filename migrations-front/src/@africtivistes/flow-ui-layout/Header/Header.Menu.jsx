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

  const normalizeItem = item => ({
    ...item,
    label: item.label || item.name,
    path: item.path || item.slug,
    childItems: { nodes: [] }
  })

  const buildMenuTree = items => {
    if (!items || !items.length) return []
    const byId = new Map()
    items.forEach(item => {
      const key = item.databaseId || item.id
      if (key) {
        byId.set(key, normalizeItem(item))
      }
    })

    const roots = []
    items.forEach(item => {
      const key = item.databaseId || item.id
      const parentKey = item.parentDatabaseId || null
      const node = byId.get(key) || normalizeItem(item)

      if (parentKey && byId.has(parentKey)) {
        byId.get(parentKey).childItems.nodes.push(node)
      } else {
        roots.push(node)
      }
    })

    return roots
  }

  const normalizeItems = items =>
    (items || []).map(item => ({
      ...item,
      label: item.label || item.name,
      path: item.path || item.slug,
      childItems: item.childItems?.nodes
        ? {
            nodes: item.childItems.nodes.map(child => ({
              ...child,
              label: child.label || child.name,
              path: child.path || child.slug
            }))
          }
        : undefined
    }))

  const buildMobileNodes = menuItems => {
    const groups = [
      {
        label: 'Main Menu',
        childItems: { nodes: normalizeItems(menuItems) }
      }
    ]

    if (mobileMenu?.items?.length) {
      groups.push({
        label: mobileMenu.title || 'Topics',
        childItems: { nodes: normalizeItems(mobileMenu.items) }
      })
    }

    return groups
  }

  const DesktopMenuNav = ({data}) => (
    <Navigation
      variant='horizontal'
      nodes={buildMenuTree(data)}
      wrapperStyle={styles.desktopMenuWrapper}
    />
  )

  const MobileMenuNav = ({data}) => (
    <Drawer>
      <Navigation
        variant='vertical'
        headingProps={{ variant: 'h3' }}
        nodes={buildMobileNodes(buildMenuTree(data))}
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
