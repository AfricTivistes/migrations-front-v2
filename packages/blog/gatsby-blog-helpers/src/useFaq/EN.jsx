import { useStaticQuery, graphql } from 'gatsby'

const useFaqEN = () => {

  const { allWpFaq } = useStaticQuery(faqENQuery)
  
  return allWpFaq
}

const faqENQuery = graphql`
  query faqENQuery {
  allWpFaq(
    filter: {status: {eq: "publish"}, language: {slug: {eq: "en"}}}
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

export default useFaqEN
