import React from 'react'
import { Global } from '@emotion/core'
import { ThemeProvider, Flex, Box, css } from 'theme-ui'
import theme from '@africtivistes/flow-ui-theme/src/theme'
import pageContextProvider from '@helpers/pageContextProvider'
import { Header } from '../Header/Header'
import { Footer } from '../Footer/Footer'
import { useLocation } from '@reach/router'; // Assuming you are using @reach/router


const Layout = ({ children, pageContext, location }) => { // Changed to a functional component to use hooks
  const loc = useLocation();
  React.useEffect(() => {
    // initializeAndTrack(loc); // Placeholder for your tracking function.  You'll need to implement this.
  }, [loc]);
  return (
    <ThemeProvider theme={theme}>
      <pageContextProvider.Provider value={{ pageContext, location:loc }}>
        <Flex variant='layout.layout'>
          <Global styles={css(theme => theme.global)} />
          <Header />
          <Box variant='layout.body'>{children}</Box>
          <Footer />
        </Flex>
      </pageContextProvider.Provider>
    </ThemeProvider>
  )
}

export default Layout;