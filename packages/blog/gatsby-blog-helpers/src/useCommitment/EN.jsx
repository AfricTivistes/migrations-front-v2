import { useStaticQuery, graphql } from 'gatsby'

const usecommitmentEN = () => {

  const { allWpPage } = useStaticQuery(commitmentENQuery)
  
  return allWpPage
}

const commitmentENQuery = graphql`
  query commitmentENQuery {
    allWpPage(filter: {slug: {eq: "our-commitment"}}) {
    nodes {
      id
      title
      content
    }
  }
  }
`

export default usecommitmentEN
