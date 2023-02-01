import React from 'react'
import { Box, IconButton, css } from 'theme-ui'
import { IntlContextConsumer, changeLocale } from "gatsby-plugin-react-intl"
import Switch from 'rc-switch'
import 'rc-switch/assets/index.css'

const styles = {
  switch: {
    display: [`none`, null, `block`],
    // Switch Body
    '&.rc-switch': {
      background: `linear-gradient(45deg, #1e5574, #87311a)`,
      border: 0,
      width: 50,
      height: 24,
      '&:focus': {
        boxShadow: `none`
      }
    },
    '&.rc-switch-checked': {
      background: `linear-gradient(45deg, #1e5574, #87311a)`,
      border: 0
    },
    // Switch Handle
    '&.rc-switch:after': {
      size: `21px`
    },
    '&.rc-switch-checked:after': {
      left: `auto`,
      right: `2px`
    },
    // Switch Icons
    '.rc-switch-inner': {
      fontSize: `unset`,
      top: `1px`,
      left: `26px`
    },
    '&.rc-switch-checked .rc-switch-inner': {
      left: `7px`
    }
  },
  icon: {
    verticalAlign: `middle`
  },
  //Mobile
  mobileTrigger: {
    display: [`block`, null, `none`]
  }
}

export const HeaderLanguage = () => {
  
  const label = `Toggle language`
  return (
      <IntlContextConsumer>
        {({ languages, language: currentLocale }) => {
          
          const isLanguage = currentLocale!=='en'

          return (
          <Box>
            <IconButton
              aria-label={label}
              onClick={() => changeLocale(isLanguage ? 'en' : 'fr')}
              sx={styles.mobileTrigger}
            >
              { isLanguage ? "EN" : "FR"}
            </IconButton>
            <Switch
              aria-label={label}
              onChange={() => changeLocale(currentLocale!=='en' ? 'en' : 'fr')}
              onClick={() => changeLocale(currentLocale!=='en' ? 'en' : 'fr')}
              checked={isLanguage}
              checkedChildren={"FR"}
              unCheckedChildren={"EN"}
              css={css(styles.switch)}
            />
          </Box>
          
          )}
        }
      </IntlContextConsumer>
  )
}
