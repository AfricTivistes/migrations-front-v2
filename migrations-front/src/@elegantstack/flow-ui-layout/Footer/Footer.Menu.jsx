import React from 'react'
import { useIntl } from "gatsby-plugin-react-intl"
import { Box } from 'theme-ui'
import Navigation from '@components/Navigation'
import useSiteMetadata from '@helpers-blog/useSiteMetadata'

const styles = {
  navHeader: {
    display: [`none`, `block`]
  }
}

export const FooterMenu = () => {
  const { footerMenu } = useSiteMetadata()
  const intl = useIntl()

  return (
    <>
      {footerMenu.map(menu => (
        <Box key={`footer-menu-${intl.formatMessage({ id: menu.title })}`}>
          <Navigation
            variant={[`horizontal`, `vertical`]}
            headingProps={{ variant: 'h4', as: 'p', sx: styles.navHeader }}
            items={[menu]}
          />
        </Box>
      ))}
    </>
  )
}
