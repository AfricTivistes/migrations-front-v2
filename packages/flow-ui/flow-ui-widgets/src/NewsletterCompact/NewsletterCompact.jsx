import React from 'react'
import { Card, Text } from 'theme-ui'
import NewsletterForm from '@components/NewsletterForm'
import Section from '@components/Section'
<<<<<<< HEAD
import { useIntl, FormattedMessage } from 'gatsby-plugin-react-intl'

const NewsletterCompact = props => {
const intl = useIntl() 
=======
import { FormattedMessage } from 'gatsby-plugin-react-intl'

const NewsletterCompact = props => {

>>>>>>> main

  return (
    <Section aside title={intl.formatMessage({ id: "newsletter" })} {...props}> 
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
