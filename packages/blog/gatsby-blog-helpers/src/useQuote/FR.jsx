import { useStaticQuery, graphql } from 'gatsby'

const useQuoteFR = () => {

  const { allWpPage } = useStaticQuery(quoteFRQuery)
  
  return allWpPage
}

const quoteFRQuery = graphql`
  query quoteFRQuery {
    allWpPage(filter: {slug: {eq: "citation"}}) {
    nodes {
      id
      title
      content
    }
  }
  }
`

export default useQuoteFR
