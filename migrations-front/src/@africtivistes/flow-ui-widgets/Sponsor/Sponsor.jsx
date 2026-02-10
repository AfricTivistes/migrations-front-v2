import React from 'react'
import { useIntl, Link as GLink, FormattedMessage } from "gatsby-plugin-react-intl"
import { GatsbyImage as Img, getImage } from 'gatsby-plugin-image'
import { useStaticQuery, graphql } from 'gatsby'
import { Link, css } from 'theme-ui'
import Section from '@components/Section'

const styles = {
  image: {
    overflow: `hidden`,
    img: {
      borderRadius: `lg`
    }
  },
  caption: {
    display: `block`,
    textAlign: `center`,
    fontSize: 0,
    mt: 1
  }
}

const Sponsor = props => {
  const data = useStaticQuery(sponsorQuery)
  const image = getImage(data.banner)
  const intl = useIntl()

  if (!image) return null

  return (
    <Section aside title={intl.formatMessage({ id: "nospartenaires" })} {...props}>
        <Img image={image} css={css(styles.image)} alt='Sponsor' />
      <Link variant='mute' as={GLink} to='/contact' sx={styles.caption}>
        <FormattedMessage id="noussoutenir" />
      </Link>
    </Section>
  )
}

const sponsorQuery = graphql`
  query SponsorQuery {
    banner: file(absolutePath: { regex: "/sponsor.(jpeg|jpg|gif|png)/" }) {
      childImageSharp {
        gatsbyImageData(
          width: 342
          height: 260
          transformOptions: { cropFocus: CENTER }
          formats: [AUTO, WEBP]
        )
      }
    }
  }
`
export default Sponsor
