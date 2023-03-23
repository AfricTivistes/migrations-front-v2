import React from 'react'
import { Box, Input, Button } from 'theme-ui'
import { FormattedMessage } from 'gatsby-plugin-react-intl'

const styles = {
  msg: {
    mb: 0
  },
  button: {
    display: `block`,
    mx: `auto`
  }
}

const NewsletterForm = () => (
  <form 
      method="post"
      action="https://newsletter.infomaniak.com/external/submit"
      target="_blank" >
      <>
        <Box variant='forms.row'>
          <Input
            type='email'
            name="inf[1]"
            placeholder='Email Address'
            aria-label='Email Address'
            required
          />
        </Box>
          <Input 
            type="hidden" 
            name="key" value="eyJpdiI6Ik15akZSa1wvbGFDVUtHcWFmNFBVT2RZTVwvenpMaHNFbnBOS25cL09WZFpITTg9IiwidmFsdWUiOiJ4ZXcrOGJqM2V2dE9QSHErSEM1V2hsZ1huYzk3bjhCRXJyRTB4dEpKQkVvPSIsIm1hYyI6IjAwNDg1ZmMyM2E3YjZiZjA2YTZiNWNlYjZlZjBkZDRlY2RlNzM3NTY1YmU2NGFmMWY3NDMzMDI2ZmUzODJmOTEifQ=="/>
          <Input 
            type="hidden" 
            name="webform_id" 
            value={14052}
          />
          <Button
              type='submit'
              sx={styles.button}>
              <FormattedMessage id="subscribe" />
          </Button>
      </>
  </form>
  
)

export default NewsletterForm