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
    flexBasis: [`full`, null, `1/6`]
  },
  searchContainer: {
    flexBasis: [`auto`, null, `1/6`],
    minWidth: `auto`,
    order: [3, null, `unset`],
    mx: 3
  },
  menuContainer: {
    flexBasis: [`auto`, null, `auto`],
    minWidth: `auto`,
    order: [4, null, `unset`]
  },
  colorModeContainer: {
    minWidth: `auto`,
    order: [2, null, `unset`]
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
          <Box sx={styles.searchContainer}>{algolia && <Search />}</Box>
          <Box sx={styles.menuContainer}>
            <HeaderMenu mobileMenu={mobileMenu} />
          </Box>
          <Box sx={styles.colorModeContainer}>
            <HeaderLanguage />
          </Box>
        </Flex>
      </Container>
      {children}
    </Box>
  )
}
