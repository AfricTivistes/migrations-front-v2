import React from 'react'
import { Link } from 'gatsby-plugin-react-intl'
import { Box, Badge, css } from 'theme-ui'
import rv from '@components/utils/buildResponsiveVariant'
import getReadableColor from '@components/utils/getReadableColor'

const styles = {
  badge: {
    mb: 3
  }
}

const CardBodyCategory = ({ variant, categories, omitCategory }) =>
  !omitCategory && categories && (categories.nodes[0].slug && categories.nodes[0].affichage) ? (
    <Box css={css(styles.badge)} sx={{ variant: rv(variant, 'category') }}>
      <Badge
        variant='tag'
        as={Link}
        to={`/${categories.nodes[0].slug}`}
        sx={
          categories.nodes[0].affichage.color && {
            bg: categories.nodes[0].affichage.color,
            color: getReadableColor(categories.nodes[0].affichage.color)
          }
        }
      >
        {categories.nodes[0].name}
      </Badge>
    </Box>
  ) : null

export default CardBodyCategory
