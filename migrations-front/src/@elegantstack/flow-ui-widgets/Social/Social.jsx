import React from 'react'
import { useIntl, FormattedMessage } from "gatsby-plugin-react-intl"
import { Card, Text } from 'theme-ui'
import Section from '@components/Section'
import Navigation from '@components/Navigation'
import useSiteMetadata from '@helpers-blog/useSiteMetadata'
import attachSocialIcons from '@helpers/attachSocialIcons'

const Social = () => {
  const intl = useIntl()
  const { social } = useSiteMetadata()

  return (
    <Section aside title={intl.formatMessage({ id: "titlesocial" })}>
      <Card variant='paper'>
        <Text variant='p'>
          <FormattedMessage id="descriptionsocial" />
        </Text>
        <Navigation items={attachSocialIcons(social)} iconOnly />
      </Card>
    </Section>
  )
}

export default Social
