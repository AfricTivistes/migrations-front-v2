import React from 'react'
import { ApolloProvider } from 'react-apollo'
import { client } from './client'

const wrapRootElement = ({ element }) => (
    <ApolloProvider client={client}>{element}</ApolloProvider>
)

export default wrapRootElement