import React, { useContext } from 'react'
import { Container, Box, Flex } from 'theme-ui'
import pageContextProvider from '@helpers/pageContextProvider'
import Search from '@widgets/Search'
import { HeaderLogo } from './Header.Logo'
import { HeaderMenu } from './Header.Menu'
import { HeaderLanguage } from './Header.Language'

const styles = {
  wrapper: {
    position: `sticky`,
    top: 0,
    zIndex: 20,
    bg: `headerBg`,
    boxShadow: `0 2px 8px rgba(0,0,0,0.04)`
  },
  container: {
    position: `relative`,
    zIndex: 10
  },
  row: {
    alignItems: `center`,
    justifyContent: `space-between`,
    py: 3,
    px: [3, 4] // un peu plus large sur les côtés
  },
  logoContainer: {
    flexBasis: [`auto`, null, `auto`],
    flexShrink: 0,
    mr: [3, 4] // rapproche le logo du bord et libère de la place au centre
  },
  menuContainer: {
    flexBasis: [`auto`, null, `auto`],
    flexGrow: 1,
    minWidth: 0,
    mx: [2, null, 4]
  },
  searchContainer: {
    flexBasis: [`auto`, null, `auto`],
    minWidth: `auto`
  },
  searchInner: {
    display: `flex`,
    alignItems: `center`,
    justifyContent: `flex-end`,
    gap: 3
  }
}

export const Header = ({ children }) => {
  const context = useContext(pageContextProvider)

  const { services, mobileMenu } = context.pageContext

  const algolia = services && services.algolia

  return (
    <Box sx={styles.wrapper}>
      <Container variant='compact' sx={styles.container}>
        <Flex sx={styles.row}>
          <Box sx={styles.logoContainer}>
            <HeaderLogo />
          </Box>
          <Box sx={styles.menuContainer}>
            <HeaderMenu mobileMenu={mobileMenu} />
          </Box>
          <Box sx={styles.searchContainer}>
            <Box sx={styles.searchInner}>
              {algolia && <Search />}
              <HeaderLanguage />
            </Box>
          </Box>
        </Flex>
      </Container>
      {children}
    </Box>
  )
}
