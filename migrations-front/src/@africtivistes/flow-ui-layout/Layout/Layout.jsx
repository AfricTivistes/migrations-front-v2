import React, { useState, useEffect } from 'react'
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

  useEffect(() => {
    // Charger le script du chatbot
    const script1 = document.createElement('script');
    script1.src = 'https://cdn.botpress.cloud/webchat/v3.3/inject.js';
    script1.async = true;
    
    // Attendre que le script principal soit chargé avant de charger la configuration
    script1.onload = () => {
      const script2 = document.createElement('script');
      script2.src = 'https://files.bpcontent.cloud/2025/10/15/15/20251015151538-WNYHXSK8.js';
      script2.defer = true;
      document.body.appendChild(script2);
    };
    
    script1.onerror = () => {
      console.error('Erreur lors du chargement du script Botpress principal');
    };
    
    document.body.appendChild(script1);

    // Nettoyage lors du démontage du composant
    return () => {
      // Supprimer tous les scripts Botpress
      const scripts = document.querySelectorAll('script[src*="botpress"], script[src*="bpcontent"]');
      scripts.forEach(script => {
        if (script.parentNode) {
          script.parentNode.removeChild(script);
        }
      });
    };
  }, []);

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
