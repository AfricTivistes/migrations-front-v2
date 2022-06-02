import React from 'react'
import { useIntl,  FormattedMessage } from "gatsby-plugin-react-intl"
import { navigate } from "gatsby"
import { GatsbyImage as Img, getImage } from 'gatsby-plugin-image'
import { Box, Text, Card, Flex, Button } from 'theme-ui'
import { Layout, Stack, Main } from '@layout'
import PageTitle from '@components/PageTitle'
import Divider from '@components/Divider'
import Section from '@components/Section'
import Seo from '@widgets/Seo'

/**
 * Shadow me to add your own content
 */

const styles = {
  imageWrapper: {
    borderRadius: `default`,
    overflow: `hidden`,
    position: `relative`
  },
  button: {
    display: [`none`, `block`],
    position: `absolute`,
    bottom: 4,
    right: 4
  },
  grid: {
    flexWrap: [`wrap`, null, `nowrap`],
    ' > div + div': {
      ml: [0, 0, 5]
    }
  },
  column: {
    flex: `auto`,
    flexBasis: [`full`, null, `1/2`]
  }
}

const PageApropos = ({ data: { page }, ...props }) => {
  const {title, content, avatar, wpChildren} = page.nodes[0]
  const image = getImage(avatar.node.localFile)
  let last = wpChildren.nodes.length - 1
  const intl = useIntl()
  return (
    <Layout {...props}>
      <Seo title={title} />
      <Divider />
      <Stack>
        <Main>
          <PageTitle
            header={title}
            subheader={content}
          />
          <Divider />
          <Box sx={styles.imageWrapper}>
            <Img image={image} />
            <Button sx={styles.button} onClick={()=>{navigate(intl.formatMessage({ id: "contactMeLink" }))}}><FormattedMessage id="contactMe" /></Button>
          </Box>
          <Divider />
          <Flex sx={styles.grid}>
            <Box sx={styles.column}>
              <Section title={wpChildren.nodes[last].title}>
                <Text variant='div' dangerouslySetInnerHTML={{ __html: wpChildren.nodes[last].content }} />
              </Section>
            </Box>
            <Box sx={styles.column}>
              {wpChildren.nodes.slice(0, last).reverse().map((data, index) => (
                <><Section title={data.title}>
                <Card variant='paper' dangerouslySetInnerHTML={{ __html: data.content }} />
              </Section>
              <Divider /></>))}
            </Box>
          </Flex>
        </Main>
      </Stack>
    </Layout>
  )
}

export default PageApropos