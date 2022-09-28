import { useStaticQuery, graphql } from 'gatsby'

const useFaqFR = () => {

  const { allWpFaq } = useStaticQuery(faqFRQuery)
  
  return allWpFaq
}

const faqFRQuery = graphql`
  query faqFRQuery {
  allWpFaq(
    filter: {status: {eq: "publish"}, language: {slug: {eq: "fr"}}}
    sort: {fields: [date], order: DESC}
    limit: 10
  ) {
    nodes {
      id
      title
      excerpt: content
      date
    }
  }
}
`

export default useFaqFR
