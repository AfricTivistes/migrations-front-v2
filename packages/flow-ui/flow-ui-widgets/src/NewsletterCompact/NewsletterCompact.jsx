import React from 'react'
import { Card, Text } from 'theme-ui'
import NewsletterForm from '@components/NewsletterForm'
import Section from '@components/Section'
import { FormattedMessage } from 'gatsby-plugin-react-intl'

const NewsletterCompact = props => {


  return (
    <Section aside title='Newsletter' {...props}>
      <Card variant='paper'>
        <Text variant='p'>
          <FormattedMessage id='newsletterText'/>
        </Text>
        <NewsletterForm/>
      </Card>
    </Section>
  )
}

export default NewsletterCompact
