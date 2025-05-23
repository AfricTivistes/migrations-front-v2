import { useStaticQuery, graphql } from 'gatsby'
import dedupe from 'dedupe'


const useTeamEN = () => {

  const { allWpAuteur } = useStaticQuery(teamENQuery)

  return allWpAuteur.nodes
    ? dedupe(allWpAuteur.nodes, node => node.slug)
    : null
}

const teamENQuery = graphql`
  query TeamENQuery  {
  allWpAuteur (
        filter: {language: {slug: {eq: "en"}}, nom_type: {type: {eq: "team"}}} 
        sort: {fields: excerpt, order: ASC}){
    nodes {
              id
              slug
              name: title
              excerpt
              content
              competences {
                nodes {
                  name
                }
              }
              social{
				facebook
                twitter
                instagram
                linkedin
              }
              featuredImage {
              node {
                localFile {
                  childImageSharp {
                    __typename
                    ... on ImageSharp {
                      ImageSharp_small: gatsbyImageData(
                        width: 48
                        height: 48
                        layout: FIXED
                        transformOptions: { cropFocus: NORTH }
                        placeholder: TRACED_SVG
                        quality: 75
                      )
                      ImageSharp_regular: gatsbyImageData(
                        width: 150
                        height: 150
                        layout: FIXED
                        transformOptions: { cropFocus: NORTH }
                        placeholder: TRACED_SVG
                        quality: 80
                      )
                    }
                  }
                }
              }
            }
            }
  }
}
`

export default useTeamEN
