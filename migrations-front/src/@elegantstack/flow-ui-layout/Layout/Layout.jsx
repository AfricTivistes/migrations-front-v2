import React from 'react'
import { useIntl, FormattedMessage } from "gatsby-plugin-react-intl"
import CookieConsent from 'react-cookie-consent'
import { Global } from '@emotion/core'
import { ThemeProvider, Flex, Box, css } from 'theme-ui'
import theme from '@elegantstack/flow-ui-theme/src/theme'
import pageContextProvider from '@helpers/pageContextProvider'
import { Header } from '../Header/Header'
import { Footer } from '../Footer/Footer'

export const Layout = ({ children, pageContext, location }) => {

  const intl = useIntl()
  
  return(<ThemeProvider theme={theme}>
    <pageContextProvider.Provider value={{ pageContext, location }}>
      <Flex variant='layout.layout'>
        <Global styles={css(theme => theme.global)} />
        <Header />
        <Box variant='layout.body'>{children}</Box>
        <Footer />
        <CookieConsent
          location="bottom"
          buttonText={intl.formatMessage({ id: "accept" })}
          declineButtonText={intl.formatMessage({ id: "decline" })}
          enableDeclineButton={true}
          cookieName="gatsby-gdpr-google-analytics"
          containerClasses="gdpr-container"
          style={{ background: "#1a5474" }}
          declineButtonStyle={{ color: "#fff", background: "#87311b" }}
        >
          <FormattedMessage id="cookieconsent" />
        </CookieConsent>
      </Flex>
    </pageContextProvider.Provider>
  </ThemeProvider>
)}
