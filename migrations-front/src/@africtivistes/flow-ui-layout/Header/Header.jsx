import React, { useContext } from 'react'
import { Container, Box, Flex, Link as SxLink } from 'theme-ui'
import { IntlContextConsumer, Link as ILink } from 'gatsby-plugin-react-intl'
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
    zIndex: 10,
    // réduire les marges gauche/droite pour gagner de la place (logo et bouton Vérification plus près des bords)
    px: [2, 2]
  },
  row: {
    display: 'flex',
    flexWrap: 'nowrap',
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: [2, 3],
    py: 3,
    pl: 0,
    pr: 0,
    minWidth: 0
  },
  logoContainer: {
    flexShrink: 0
  },
  menuContainer: {
    flexShrink: 0,
    minWidth: 0
  },
  searchLangBlock: {
    display: 'flex',
    alignItems: 'center',
    flexShrink: 0,
    gap: 3,
    marginLeft: 'auto'
  },
  verifyButton: {
    px: 5,
    py: 2,
    borderRadius: 'pill',
    fontSize: 2,
    fontWeight: 'bold',
    // bouton outline bordeaux, fond transparent
    bg: 'transparent',
    color: '#87311a',
    textDecoration: 'none',
    cursor: 'pointer',
    
  }
}

export const Header = ({ children }) => {
  const context = useContext(pageContextProvider)

  const { services, mobileMenu } = context.pageContext

  const algolia = services && services.algolia

  return (
    <Box sx={styles.wrapper}>
      <Container variant='compact' sx={styles.container}>
        <Flex as="header" sx={styles.row}>
          <Box sx={styles.logoContainer}>
            <HeaderLogo />
          </Box>
          <Box sx={styles.menuContainer}>
            <HeaderMenu mobileMenu={mobileMenu} />
          </Box>
          <Box as="div" sx={styles.searchLangBlock}>
            {algolia && <Search />}
            <HeaderLanguage />
            <IntlContextConsumer>
              {({ language }) => {
                const isFr = language === 'fr'
                const label = isFr ? 'Vérification' : 'Fact-checking'
                const path = isFr ? '/verification' : '/fact-checking'
                return (
                  <SxLink as={ILink} to={path} sx={styles.verifyButton}>
                    {label}
                  </SxLink>
                )
              }}
            </IntlContextConsumer>
          </Box>
        </Flex>
      </Container>
      {children}
    </Box>
  )
}
