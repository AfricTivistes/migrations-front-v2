import React, { useContext } from 'react'
import { Container, Box, Flex } from 'theme-ui'
import pageContextProvider from '@helpers/pageContextProvider'
import Search from '@widgets/Search'
import { HeaderLogo } from './Header.Logo'
import { HeaderMenu } from './Header.Menu'
import { HeaderLanguage } from './Header.Language'

const styles = {
  wrapper: {
    position: `relative`,
    bg: `headerBg`
  },
  container: {
    position: `relative`,
    zIndex: 10
  },
  logoContainer: {
    flexBasis: [`full`, null, `1/6`],
    flexShrink: 0
  },
  menuContainer: {
    flexBasis: [`auto`, null, `auto`],
    flexGrow: 1,
    minWidth: 0,
    mx: [0, null, 4]
  },
  searchContainer: {
    flexBasis: [`auto`, null, `1/4`],
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
        <Flex variant='layout.header'>
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
