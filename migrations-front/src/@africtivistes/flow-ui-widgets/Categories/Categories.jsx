import React from 'react'
import { useIntl, IntlContextConsumer } from "gatsby-plugin-react-intl"
import { Box } from 'theme-ui'
import { FaArchive } from 'react-icons/fa'
import IconButton from '@components/IconButton'
import Section from '@components/Section'
import useCategoriesFR from '@helpers-blog/useCategories/FR'
import useCategoriesEN from '@helpers-blog/useCategories/EN'

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

  const intl = useIntl()

  return (<Section aside={variant === 'vertical'} title={intl.formatMessage({ id: "espacedialogue" })} {...props}>
    <Box sx={styles[variant]}>
      {categories &&
        categories.map(({ id, name, slug, totalCount, affichage }) => {
          const buttonProps = {
            key: id,
            name:`${intl.formatMessage({ id: "callfor" })} ${name}`,
            number: totalCount,
            to: `/${intl.formatMessage({ id: "callforslug" })}${slug}`,
            iconPath: icons.filter(icon => icon.name === name)[0].icon,
            Icon: !icons.filter(icon => icon.name === name)[0].icon && FaArchive,
            variant
          }
          return <IconButton {...buttonProps} />
        })}
    </Box>
  </Section>
)}

const CategoriesBox = () => {
  
  const { nodes: nodesFR, categories: categoriesFR  } = useCategoriesFR()
  const { nodes: nodesEN, categories: categoriesEN  } = useCategoriesEN()

  return (
    <IntlContextConsumer>
      {({ language: currentLocale }) =>
        currentLocale === 'fr' ? <Categories variant={'vertical'} categories={nodesFR} icons={categoriesFR}  /> : <Categories variant={'vertical'} categories={nodesEN} icons={categoriesEN} />}
    </IntlContextConsumer>
  )
}

export default CategoriesBox

CategoriesBox.defaultProps = {
  variant: 'vertical'
}
