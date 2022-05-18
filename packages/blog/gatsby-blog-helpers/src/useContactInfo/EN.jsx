import { useStaticQuery, graphql } from 'gatsby'

const usecontactInfoEN = () => {

  const { allWpPage } = useStaticQuery(contactInfoENQuery)
  
  return allWpPage
}

const contactInfoENQuery = graphql`
  query contactInfoENQuery {
    allWpPage(filter: {slug: {eq: "advertise-with-us"}}) {
    nodes {
      id
      title
      content
    }
  }
  }
`

export default usecontactInfoEN
