import React from 'react'
import { graphql } from 'gatsby'
import { SitePageContext, TagListQuery } from '../graphql-types'

interface Props {
  data: TagListQuery
  pageContext: SitePageContext
}

const TagListTemplate: React.FC<Props> = ({ data, pageContext }) => {
  return <div>TAGS</div>
}

export default TagListTemplate

export const query = graphql`
  query TagList($tag: String!) {
    blogList: allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: {
        frontmatter: { contentKey: { eq: "blog" }, tags: { in: [$tag] } }
      }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            tags
            date(formatString: "MMMM D, YYYY")
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
