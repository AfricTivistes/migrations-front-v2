import React from 'react'
import { IntlContextConsumer } from "gatsby-plugin-react-intl"
import { Box } from 'theme-ui'
import { FaArchive } from 'react-icons/fa'
import IconButton from '@components/IconButton'
import Section from '@components/Section'
import useRessourcesTypeFR from '@helpers-blog/useRessourcesType/FR'
import useRessourcesTypeEN from '@helpers-blog/useRessourcesType/EN'

const styles = {
  horizontal: {
    display: `flex`,
    flexWrap: `nowrap`,
    overflowX: `auto`,
    width: `auto`,
    scrollBehavior: `smooth`,
    m: -2,
    a: {
      flex: 1,
      minWidth: [`1/3`, `auto`],
      m: 2
    }
  }
}

const Categories = ({ variant, categories, icons, ...props }) => { 

  return (<Section aside={variant === 'horizontal'} {...props}>
    <Box sx={styles[variant]}>
      {categories &&
        categories.map(({ id, name, slug, totalCount, affichage }) => {
          const buttonProps = {
            key: id,
            name,
            number: totalCount,
            to: `/${slug}`,
            iconPath: icons.filter(icon => icon.name === name)[0].icon,
            Icon: !icons.filter(icon => icon.name === name)[0].icon && FaArchive,
            variant
          }
          return totalCount && totalCount !== 0 && <IconButton {...buttonProps} />
        })}
    </Box>
  </Section>
)}

const RessourcesTypeBox = () => {
  
  const { nodes: nodesFR, categories: categoriesFR  } = useRessourcesTypeFR()
  const { nodes: nodesEN, categories: categoriesEN  } = useRessourcesTypeEN()

  return (
    <IntlContextConsumer>
      {({ language: currentLocale }) =>
        currentLocale === 'fr' ? <Categories variant={'horizontal'} categories={nodesFR} icons={categoriesFR}  /> : <Categories variant={'horizontal'} categories={nodesEN} icons={categoriesEN} />}
    </IntlContextConsumer>
  )
}

export default RessourcesTypeBox

RessourcesTypeBox.defaultProps = {
  variant: 'horizontal'
}
