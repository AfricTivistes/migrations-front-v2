import React, {useState} from 'react'
import { IntlContextConsumer, FormattedMessage } from "gatsby-plugin-react-intl"
import gql from 'graphql-tag'
import { Mutation } from 'react-apollo'
import PropTypes from 'prop-types'
import { Box, Label, Input, Textarea, Button, Message, Spinner } from 'theme-ui'

const CONTACT_MUTATION = gql`
  mutation CreateSubmissionMutation($clientMutationId: String!, $email: String!, $message: String!, $name: String!, $organization: String!, $phone: String!, $subject: String!, $type: String!, $country: String!, $language: String!, $contact: String!) {
    createSubmission(input: {clientMutationId: $clientMutationId, email: $email, message: $message, name: $name, organization: $organization, phone: $phone, subject: $subject, type: $type, country: $country, language: $language, contact: $contact}) {
      data
      success
    }
  }
`

const FactcheckingForm = () => {

  // const intl = useIntl()
  const [emailValue, setEmailValue] = useState('')
  const [messageValue, setMessageValue] = useState('')
  const [nameValue, setNameValue] = useState('')
  const [organizationValue, setOrganizationValue] = useState('')
  const [phoneValue, setPhoneValue] = useState('')
  const [subjectValue, setSubjectValue] = useState('')
  const [countryValue, setCountryValue] = useState('')
  const [submitting, setSubmitting] = useState(false)
  
  return(<IntlContextConsumer>
    {({language}) => (
    <Mutation mutation={CONTACT_MUTATION}>
    {(createSubmission, { data, loading, error }) => (
      <form
        method="POST"
        data-netlify-recaptcha="true"
        data-netlify="true"
        name="factchecking"
        onSubmit={async event => {
          event.preventDefault()
          createSubmission({
            variables: {
              clientMutationId: 'factchecking-form',
              email: emailValue,
              message: messageValue,
              name: nameValue,
              organization: organizationValue || ' ',
              phone: phoneValue || ' ',
              subject: subjectValue,
              type: 'factchecking',
              country: countryValue,
              language: language,
              contact: ' '
            },
          })
          setSubmitting(true)
        }}
      >
        { data && (
          <Message variant='success'>
            <FormattedMessage id="contactSuccess2" />
          </Message>
        )}
        { error && (
          <Message variant='error'>
            <FormattedMessage id="contactError" />
          </Message>
        )}
        { loading && (
          <Message variant='info'>
            <FormattedMessage id="loading" />
          </Message>
        )}
        <Box variant='forms.row'>
          <Label htmlFor='factchecking-form-name'><FormattedMessage id="name" /></Label>
          <Input
            type='text'
            id='factchecking-form-name'
            name='name'
            required
            value={nameValue}
            onChange={event => {setNameValue(event.target.value)}}
          />
        </Box>
        <Box variant='forms.row'>
          <Box variant='forms.column'>
            <Label htmlFor='factchecking-form-organization'><FormattedMessage id="media" /></Label>
            <Input 
              type='text'
              id='factchecking-form-organization'
              name='organization'
              value={organizationValue}
              onChange={event => {setOrganizationValue(event.target.value)}}
            />
          </Box>
          <Box variant='forms.column'>
            <Label htmlFor='factchecking-form-country'><FormattedMessage id="country" /></Label>
            <Input 
              type='text'
              id='factchecking-form-country'
              name='country'
              required
              value={countryValue}
              onChange={event => {setCountryValue(event.target.value)}}
            />
          </Box>
        </Box>
        <Box variant='forms.row'>
          <Box variant='forms.column'>
            <Label htmlFor='factchecking-form-email'><FormattedMessage id="email" /></Label>
            <Input
              type='email'
              placeholder='email@example.com'
              id='factchecking-form-email'
              name='email'
              required
              value={emailValue}
              onChange={event => {setEmailValue(event.target.value)}}
            />
          </Box>
          <Box variant='forms.column'>
            <Label htmlFor='factchecking-form-phone'><FormattedMessage id="phone" /></Label>
            <Input
              type='text'
              placeholder='(xxx) xxx-xxxx'
              id='factchecking-form-phone'
              name='phone'
              value={phoneValue}
              onChange={event => {setPhoneValue(event.target.value)}}
            />
          </Box>
        </Box>
        <Box variant='forms.row'>
          <Label htmlFor='factchecking-form-subject'><FormattedMessage id="subject2" /></Label>
          <Input
            type='text'
            id='factchecking-form-subject'
            name='subject'
            required
            value={subjectValue}
            onChange={event => {setSubjectValue(event.target.value)}}
          />
        </Box>
        <Box variant='forms.row'>
          <Label htmlFor='factchecking-form-message'><FormattedMessage id="message" /></Label>
          <Textarea 
            name='message'
            id='factchecking-form-message'
            rows='15'
            required
            value={messageValue}
            onChange={event => {setMessageValue(event.target.value)}}
          />
        </Box>
        <Box variant='forms.row'>
          <input type="hidden" name="form-name" value="factchecking" />
          <div data-netlify-recaptcha="true"></div>
        </Box>
        <Button
          variant={data || submitting ? 'disabled' : 'primary'}
          disabled={data || submitting}
          type='submit'
          required
        >
          <FormattedMessage id="submit" />{loading && <Spinner size='20' />}
        </Button>
      </form>
    )}
  </Mutation>)}
  </IntlContextConsumer>)}

export default FactcheckingForm

FactcheckingForm.propTypes = {
  handleSubmit: PropTypes.func,
  submitting: PropTypes.bool,
  success: PropTypes.bool
}
