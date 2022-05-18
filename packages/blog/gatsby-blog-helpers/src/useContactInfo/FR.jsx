import { useStaticQuery, graphql } from 'gatsby'

const usecontactInfoFR = () => {

  const { allWpPage } = useStaticQuery(contactInfoFRQuery)
  
  return allWpPage
}

const contactInfoFRQuery = graphql`
  query contactInfoFRQuery {
    allWpPage(filter: {slug: {eq: "faites-de-la-publicite-avec-nous"}}) {
    nodes {
      id
      title
      content
    }
  }
  }
`

export default usecontactInfoFR
