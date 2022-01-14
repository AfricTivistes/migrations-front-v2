import React, { useContext } from 'react'
import { Container, Box, Flex } from 'theme-ui'
import pageContextProvider from '@helpers/pageContextProvider'
import { HeaderLogo } from './Header.Logo'
import { HeaderMenu } from './Header.Menu'
import { HeaderColorMode } from './Header.ColorMode'

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
    flexBasis: [`full`, null, `1/4`]
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

  const { mobileMenu, darkMode } = context.pageContext

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
          <Box sx={styles.colorModeContainer}>
            {darkMode && <HeaderColorMode />}
          </Box>
        </Flex>
      </Container>
      {children}
    </Box>
  )
}
