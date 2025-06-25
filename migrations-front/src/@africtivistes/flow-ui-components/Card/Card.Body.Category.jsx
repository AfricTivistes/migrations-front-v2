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

const CardBodyCategory = ({ variant, categories, omitCategory }) => {
  // Vérifier si les catégories existent et ont les propriétés nécessaires
  const category = categories?.nodes?.[0]
  const hasValidCategory = category && category.slug && category.affichage
  
  return !omitCategory && categories && hasValidCategory ? (
    <Box css={css(styles.badge)} sx={{ variant: rv(variant, 'category') }}>
      <Badge
        variant='tag'
        as={Link}
        to={`/${category.slug}`}
        sx={
          category.affichage.color && {
            bg: category.affichage.color,
            color: getReadableColor(category.affichage.color)
          }
        }
      >
        {category.name}
      </Badge>
    </Box>
  ) : null
}

export default CardBodyCategory
