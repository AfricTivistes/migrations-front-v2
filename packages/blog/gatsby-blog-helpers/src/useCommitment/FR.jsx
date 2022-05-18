import { useStaticQuery, graphql } from 'gatsby'

const usecommitmentFR = () => {

  const { allWpPage } = useStaticQuery(commitmentFRQuery)
  
  return allWpPage
}

const commitmentFRQuery = graphql`
  query commitmentFRQuery {
    allWpPage(filter: {slug: {eq: "notre-engagement"}}) {
    nodes {
      id
      title
      content
    }
  }
  }
`

export default usecommitmentFR
