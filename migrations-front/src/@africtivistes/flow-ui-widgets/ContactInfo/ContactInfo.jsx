import React from 'react'
import { IntlContextConsumer } from "gatsby-plugin-react-intl"
import { Card, Text, IconButton } from 'theme-ui'
import { FaPhone, FaEnvelope, FaLocationArrow } from 'react-icons/fa'
import Section from '@components/Section'
import useSiteMetadata from '@helpers-blog/useSiteMetadata'
import useContactInfoFR from '@helpers-blog/useContactInfo/FR'
import useContactInfoEN from '@helpers-blog/useContactInfo/EN'

const Banner = ({data}) => {
  const { phone, address, email } = useSiteMetadata()
  const { title, content } = data
  
  return(<Section aside title={title}>
      <Card variant='paper'>
        <Text variant='div' dangerouslySetInnerHTML={{ __html: content }} />
        {phone && (
          <Text>
            <IconButton variant='simple' role='presentation'>
              <FaPhone />
            </IconButton>
            {phone}
          </Text>
        )}
        {email && (
          <Text>
            <IconButton variant='simple' role='presentation'>
              <FaEnvelope />
            </IconButton>
            {email}
          </Text>
        )}
        {address && (
          <Text>
            <IconButton variant='simple' role='presentation'>
              <FaLocationArrow />
            </IconButton>
            {address}
          </Text>
        )}
      </Card>
    </Section>
)}

const ContactInfo = () => {
  
  const { nodes: nodesFR  } = useContactInfoFR()
  const { nodes: nodesEN  } = useContactInfoEN()

  return (
    <IntlContextConsumer>
      {({ language: currentLocale }) =>
        currentLocale === 'fr' ? nodesFR.map((data,index) => <Banner data={data} key={`fr-${index}`}/>) : nodesEN.map((data,index) => <Banner data={data} key={`en-${index}`}/>)}
    </IntlContextConsumer>
  )
}

export default ContactInfo
