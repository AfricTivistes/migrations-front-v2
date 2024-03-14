import React, { useState } from 'react'
import { useIntl, FormattedMessage } from "gatsby-plugin-react-intl"
import CookieConsent from 'react-cookie-consent'
import { Global } from '@emotion/core'
import { ThemeProvider, Flex, Box, css } from 'theme-ui'
import theme from '@africtivistes/flow-ui-theme/src/theme'
import pageContextProvider from '@helpers/pageContextProvider'
import { Header } from '../Header/Header'
import { Footer } from '../Footer/Footer'
import FormfacadePopup from '../FormfacadePopup'
import HomePopup from '../HomePopup'

export const Layout = ({ children, pageContext, location }) => {
  const [showForm, setShowForm] = useState(false);
  const intl = useIntl();

  const handleFormOpen = () => {
    setShowForm(true);
  };

  const handleFormClose = () => {
    setShowForm(false);
  };

  return(<ThemeProvider theme={theme}>
    <pageContextProvider.Provider value={{ pageContext, location }}>
      <Flex variant='layout.layout'>
        <Global styles={css(theme => theme.global)} />
        <Header />
        <Box variant='layout.body'>{children}</Box>
        <HomePopup handleFormOpen={handleFormOpen} handleFormClose={handleFormClose} />
        <FormfacadePopup showForm={showForm} handleFormClose={handleFormClose} />
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
  );
};
