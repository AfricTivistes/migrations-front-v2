import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { Link } from "gatsby-plugin-react-intl"
import { Flex, NavLink, IconButton, Heading, Divider } from 'theme-ui'
import hashCode from '@components/utils/hashCode'
import buildResponsiveVariant from '@components/utils/buildResponsiveVariant'

const styles = {
  divider: {
    mt: 3
  }
}

const NavigationList = ({ navKey, wrapperProps, items, ...props }) =>
  items ? (
    <Flex {...wrapperProps}>
      {items.map((menuItem, index) => (
        <NavigationItem key={`${navKey}-${index}`} {...menuItem} {...props} />
      ))}
    </Flex>
  ) : null

const NavigationDivider = ({ index }) =>
  index !== 0 && <Divider sx={styles.divider} />

const NavigationItem = ({
  name,
  label,
  slug,
  path,
  url,
  Icon,
  color,
  variant,
  iconOnly
}) => {
  const itemLabel = label || name
  const itemPath = path || slug
  let linkProps = {
    sx: { variant: iconOnly ? 'icon' : variant }
  }

  //External link
  if (url) {
    linkProps = {
      ...linkProps,
      as: 'a',
      href: url,
      target: '_blank',
      rel: 'noopener noreferrer'
    }
  }
  //Internal link
  if (itemPath) {
    linkProps = {
      ...linkProps,
      as: Link,
      to: itemPath
    }
  }

  return iconOnly ? (
    <IconButton {...linkProps} title={itemLabel}>
      {Icon && <Icon color={color} />}
    </IconButton>
  ) : (
    <NavLink {...linkProps}>
      {Icon && <Icon color={color} />}
      {itemLabel}
    </NavLink>
  )
}

const Navigation = ({
  items,
  nodes,
  variant,
  headingProps,
  wrapperStyle,
  ...props
}) => {
  const normalizedItems = items || nodes
  if (!normalizedItems || !normalizedItems.length) return null

  const wrapperVariant = buildResponsiveVariant('lists.links', variant)
  const linkVariant = buildResponsiveVariant('links', variant)
  
  const navKey = `${hashCode(
    normalizedItems.map(node => node.title || node.label || node.name).join()
  )}-nav`

  const wrapperProps = {
    sx: { variant: wrapperVariant, ...wrapperStyle },
    key: navKey
  }

  const hasGroupedItems = normalizedItems.some(
    node =>
      Array.isArray(node.items) ||
      Array.isArray(node.childItems?.nodes)
  )
  
  return hasGroupedItems ? (
    normalizedItems.map((node, i) => {
      const groupItems = node.items || node.childItems?.nodes || []
      const groupLabel = node.title || node.label || node.name
      if (!groupItems.length) {
        return (
          <NavigationList
            key={`nav-menu-${i}`}
            navKey={navKey}
            wrapperProps={wrapperProps}
            items={[node]}
            variant={linkVariant}
            {...props}
          />
        )
      }
      return (
      <Fragment key={`nav-menu-${i}`}>
        <NavigationDivider index={i} />
        <Heading {...headingProps}>{groupLabel}</Heading>
        <NavigationList
          navKey={navKey}
          wrapperProps={wrapperProps}
          items={groupItems}
          variant={linkVariant}
          {...props}
        />
      </Fragment>
      )
    })
  ) : (
    <NavigationList
      navKey={navKey}
      wrapperProps={wrapperProps}
      items={normalizedItems}
      variant={linkVariant}
      {...props}
    />
  )
}

export default Navigation

Navigation.defaultProps = {
  variant: 'horizontal'
}

const itemsShape = PropTypes.shape({
  name: PropTypes.string,
  slug: PropTypes.string,
  color: PropTypes.string,
  Icon: PropTypes.element
})

const variantShape = PropTypes.oneOf(['horizontal', 'vertical'])

Navigation.propTypes = {
  variant: PropTypes.oneOfType([PropTypes.arrayOf(variantShape), variantShape]),
  iconOnly: PropTypes.bool,
  wrapperStyle: PropTypes.object,
  headingProps: PropTypes.object,
  items: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string,
        items: itemsShape
      })
    ),
    PropTypes.arrayOf(itemsShape)
  ]),
  nodes: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string,
        path: PropTypes.string,
        childItems: PropTypes.shape({
          nodes: PropTypes.arrayOf(
            PropTypes.shape({
              label: PropTypes.string,
              path: PropTypes.string
            })
          )
        })
      })
    ),
    PropTypes.arrayOf(itemsShape)
  ])
}
