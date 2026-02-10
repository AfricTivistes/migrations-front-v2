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
    zIndex: 10
  },
  row: {
    alignItems: `center`,
    justifyContent: `space-between`,
    py: 3,
    // padding quasi nul à gauche et aucun à droite pour coller logo et recherche aux bords
    pl: [0, 1],
    pr: [0, 0]
  },
  logoContainer: {
    flexBasis: [`auto`, null, `auto`],
    flexShrink: 0,
    // espace minimal entre le logo et le menu
    mr: [1, 1]
  },
  menuContainer: {
    flexBasis: [`auto`, null, `auto`],
    flexGrow: 1,
    minWidth: 0,
    mx: [2, null, 4]
  },
  searchContainer: {
    flexBasis: [`auto`, null, `auto`],
    minWidth: 0,
    maxWidth: ['150px', '200px']
  },
  searchInner: {
    display: `flex`,
    alignItems: `center`,
    justifyContent: `flex-end`,
    gap: 2
  },
  verifyButton: {
    ml: 1,
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
          </Box>
        </Flex>
      </Container>
      {children}
    </Box>
  )
}
