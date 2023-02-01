import React from 'react'
import { useIntl } from "gatsby-plugin-react-intl"
import { Flex, Card, Grid, Heading } from 'theme-ui'
import Section from '@components/Section'

const styles = {
  number: {
    color: `omega`,
    width: `2rem`,
    mr: 3,
    mb: 0
  },
  text: {
    flex: `1`,
    ':hover': {
      color: 'alphaDark'
    },
    mb: 0
  },
  link:{
    userSelect: "none",
    fontWeight: "normal",
    marginBottom: "0.5rem",
    padding: 0,
    boxSizing: "border-box",
    margin: 0,
    minWidth: 0,
    color:"#1a5474",
    textDecoration: "none"
  }
}
const TableOfDownloadExpanded = ({
  ressource,
  columns
}) => {

  const intl = useIntl()

  const downloadItems = [ 
    ressource.lienVersRessource && {title: intl.formatMessage({ id: "link" }), url: ressource.lienVersRessource}, 
    ressource.ajouterUnDocumentTLCharger && {title: intl.formatMessage({ id: "file" }), url: ressource.ajouterUnDocumentTLCharger}
  ]

  return (
  downloadItems.length > 0 ? (
    <Section title={intl.formatMessage({ id: "download" })}>
      <Card variant='paper'>
        <Grid
          sx={{
            gridRowGap: 1,
            gridAutoFlow: [`row`, null, `column`],
            gridTemplateRows: [
              `auto`,
              null,
              `repeat(${Math.ceil(downloadItems.length / columns)}, 1fr)`
            ]
          }}
        >
          {downloadItems.map((item, index) => (
            item?.url && (
            <a 
              key={`item-${index}`}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              style={styles.link}
              >
              <Flex sx={{ alignItems: `center` }}>
                <Heading variant='h3' as='div' sx={styles.number}>
                  {(index + 1).toLocaleString('en-US', {
                    minimumIntegerDigits: 2,
                    useGrouping: false
                  })}
                </Heading>
                <Heading variant='h4' as='div' sx={styles.text}>
                  {item.title}
                </Heading>
              </Flex>
            </a>)
          ))}
        </Grid>
      </Card>
    </Section>
  ) : null)}

TableOfDownloadExpanded.defaultProps = {
  columns: 2
}

export default TableOfDownloadExpanded
