import React from 'react'
import { css } from 'theme-ui'
import { Card, Heading, Box } from 'theme-ui'
import NewsletterForm from '@components/NewsletterForm'
import { FormattedMessage } from 'gatsby-plugin-react-intl'
import { FaRegPaperPlane, FaWind } from 'react-icons/fa'

const styles = {
  card: {
    position: `relative`
  },
  wrapper: {
    maxWidth: 500,
    textAlign: `center`,
    mx: `auto`,
    py: 3
  },
  icons: {
    display: [`none`, null, `block`],
    position: `absolute`,
    top: `0rem`,
    left: `3rem`,
    svg: {
      display: `block`
    }
  },
  plane: {
    fontSize: `9rem`,
    color: `beta`
  },
  wind: {
    fontSize: `7rem`,
    color: `omegaLight`,
    transform: `rotate(120deg)`,
    mt: `0.5rem`,
    ml: `-3rem`
  },
  form: {
    maxWidth: 300,
    mx: `auto`,
    mt: 4
  }
}

const NewsletterExpanded = ({ simple }) => {

  return (
    <Card variant='paper' sx={styles.card}>
      <Box sx={styles.wrapper}>
        {!simple && (
          <Box sx={styles.icons}>
            <FaRegPaperPlane css={css(styles.plane)} />
            <FaWind css={css(styles.wind)} />
          </Box>
        )}
        <Heading variant='h2'>
          <FormattedMessage id='newsletterTitle'/>
        </Heading>
        <Box sx={styles.form}>
          <NewsletterForm/>
        </Box>
      </Box>
    </Card>
  )
}


export default NewsletterExpanded
