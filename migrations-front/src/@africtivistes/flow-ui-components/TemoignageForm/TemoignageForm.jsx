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

const TemoignageForm = () => {

  // const intl = useIntl()
  const [emailValue, setEmailValue] = useState('')
  const [messageValue, setMessageValue] = useState('')
  const [nameValue, setNameValue] = useState('')
  const [organizationValue, setOrganizationValue] = useState('')
  const [phoneValue, setPhoneValue] = useState('')
  const [subjectValue, setSubjectValue] = useState('')
  const [countryValue, setCountryValue] = useState('')
  const [contactValue, setContactValue] = useState('')
  const [submitting, setSubmitting] = useState(false)
  
  return(<IntlContextConsumer>
    {({language}) => (
    <Mutation mutation={CONTACT_MUTATION}>
    {(createSubmission, { data, loading, error }) => (
      <form
        method="POST"
        data-netlify-recaptcha="true"
        data-netlify="true"
        name="temoignage"
        onSubmit={async event => {
          event.preventDefault()
          createSubmission({
            variables: {
              clientMutationId: 'temoignage-form',
              email: emailValue,
              message: messageValue,
              name: nameValue,
              organization: organizationValue || ' ',
              phone: phoneValue || ' ',
              subject: subjectValue,
              type: 'temoignage',
              country: countryValue,
              language: language,
              contact: contactValue || ' '
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
          <Label htmlFor='temoignage-form-name'><FormattedMessage id="name" /></Label>
          <Input
            type='text'
            id='temoignage-form-name'
            name='name'
            required
            value={nameValue}
            onChange={event => {setNameValue(event.target.value)}}
          />
        </Box>
        <Box variant='forms.row'>
          <Box variant='forms.column'>
            <Label htmlFor='temoignage-form-organization'><FormattedMessage id="media" /></Label>
            <Input 
              type='text'
              id='temoignage-form-organization'
              name='organization'
              value={organizationValue}
              onChange={event => {setOrganizationValue(event.target.value)}}
            />
          </Box>
          <Box variant='forms.column'>
            <Label htmlFor='temoignage-form-country'><FormattedMessage id="country" /></Label>
            <Input 
              type='text'
              id='temoignage-form-country'
              name='country'
              required
              value={countryValue}
              onChange={event => {setCountryValue(event.target.value)}}
            />
          </Box>
        </Box>
        <Box variant='forms.row'>
          <Box variant='forms.column'>
            <Label htmlFor='temoignage-form-email'><FormattedMessage id="email" /></Label>
            <Input
              type='email'
              placeholder='email@example.com'
              id='temoignage-form-email'
              name='email'
              required
              value={emailValue}
              onChange={event => {setEmailValue(event.target.value)}}
            />
          </Box>
          <Box variant='forms.column'>
            <Label htmlFor='temoignage-form-phone'><FormattedMessage id="phone" /></Label>
            <Input
              type='text'
              placeholder='(xxx) xxx-xxxx'
              id='temoignage-form-phone'
              name='phone'
              value={phoneValue}
              onChange={event => {setPhoneValue(event.target.value)}}
            />
          </Box>
        </Box>
        <Box variant='forms.row'>
          <Label htmlFor='temoignage-form-subject'><FormattedMessage id="subject4" /></Label>
          <Input
            type='text'
            id='temoignage-form-subject'
            name='subject'
            required
            value={subjectValue}
            onChange={event => {setSubjectValue(event.target.value)}}
          />
        </Box>
        <Box variant='forms.row'>
          <Label htmlFor='temoignage-form-message'><FormattedMessage id="message" /></Label>
          <Textarea 
            name='message'
            id='temoignage-form-message'
            rows='6'
            required
            value={messageValue}
            onChange={event => {setMessageValue(event.target.value)}}
          />
        </Box>
        <Box variant='forms.row'>
          <Label htmlFor='temoignage-form-contact'><FormattedMessage id="ContactForm" /></Label>
          <Textarea 
            name='Contact'
            id='temoignage-form-contact'
            rows='4'
            value={contactValue}
            onChange={event => {setContactValue(event.target.value)}}
          />
        </Box>
        <Box variant='forms.row'>
          <input type="hidden" name="form-name" value="temoignage" />
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

export default TemoignageForm

TemoignageForm.propTypes = {
  handleSubmit: PropTypes.func,
  submitting: PropTypes.bool,
  success: PropTypes.bool
}
