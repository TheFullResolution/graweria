import * as React from 'react'
import { graphql } from 'gatsby'
import { HomePage } from '../container/HomePage/HomePage'
import { Page } from '../container/Page/Page'
import { HomeDataQuery } from '../graphql-types'

interface Props {
  data: HomeDataQuery
}

const Home: React.FC<Props> = ({ data }) => {
  return (
    <Page currentPage="home">
      <HomePage data={data} />
    </Page>
  )
}

export default Home

export const query = graphql`
  query HomeData {
    page: home {
      title
      description
    }
    blogList: allMarkdownRemark(
      sort: { fields: [frontmatter___startDate], order: DESC }
      filter: { frontmatter: { contentKey: { eq: "blog" } } }
      limit: 10
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            date: startDate(formatString: "MMMM D, YYYY")
            startDate
            endDate
          }
          fields {
            slug
          }
          excerpt(format: MARKDOWN)
        }
      }
    }
  }
`
