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
    // menu à gauche, juste à côté du logo
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexWrap: 'nowrap',
    columnGap: 3,
    whiteSpace: 'nowrap',
    // taille un peu plus grande pour le texte du menu
    fontSize: 2
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

  const DesktopMenuNav = ({ data }) => {
    // Pour le header desktop, on n'affiche que les éléments de premier niveau
    // sur une seule ligne, sans groupes ni sous-menus.
    // On supprime explicitement les entrées Vérification / Fact-checking
    // qui sont désormais gérées par un bouton dédié dans le header.
    const roots = buildMenuTree(data)
      .map(({ childItems, ...rest }) => ({
        ...rest,
        childItems: undefined
      }))
      .filter(item => {
        const path = item.path || item.slug || ''
        const label = (item.label || item.name || '').toLowerCase()
        const isVerificationPath =
          path === '/verification' || path === '/fact-checking'
        const isVerificationLabel =
          label.includes('vérification') || label.includes('fact-check')
        return !isVerificationPath && !isVerificationLabel
      })

    return (
      <Navigation
        variant='horizontal'
        nodes={roots}
        wrapperStyle={styles.desktopMenuWrapper}
      />
    )
  }

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
