import React from 'react'
import { IntlContextConsumer } from "gatsby-plugin-react-intl"
import { Card, Text } from 'theme-ui'
import Section from '@components/Section'
import useCommitmentFR from '@helpers-blog/useCommitment/FR'
import useCommitmentEN from '@helpers-blog/useCommitment/EN'

const Banner = ({data, ...props}) => {
  const { title, content } = data
  
  return(<Section aside title={title} {...props}>
    <Card variant='paper'>
      <Text variant='div' dangerouslySetInnerHTML={{ __html: content }} />
    </Card>
  </Section>
)}

const Commitment = () => {
  
  const { nodes: nodesFR  } = useCommitmentFR()
  const { nodes: nodesEN  } = useCommitmentEN()

  return (
    <IntlContextConsumer>
      {({ language: currentLocale }) =>
        currentLocale === 'fr' ? nodesFR.map((data,index) => <Banner data={data} key={`fr-${index}`}/>) : nodesEN.map((data,index) => <Banner data={data} key={`en-${index}`}/>)}
    </IntlContextConsumer>
  )
}

export default Commitment
