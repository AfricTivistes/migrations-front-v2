import { useStaticQuery, graphql } from 'gatsby'

const useQuoteEN = () => {

  const { allWpPage } = useStaticQuery(quoteENQuery)
  
  return allWpPage
}

const quoteENQuery = graphql`
  query quoteENQuery {
    allWpPage(filter: {slug: {eq: "quote"}}) {
    nodes {
      id
      title
      content
    }
  }
  }
`

export default useQuoteEN
