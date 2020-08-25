import React from 'react'
import { graphql } from 'gatsby'
import { BlogQuery } from '../graphql-types'

interface Props {
  data: BlogQuery
}

const BlogTemplate: React.FC<Props> = ({ data }) => {
  return (
    <>
      <h1>{data.markdownRemark.frontmatter.title}</h1>
    </>
  )
}

export default BlogTemplate

export const query = graphql`
  query Blog($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      rawMarkdownBody
      frontmatter {
        title
        tags
        date(formatString: "MMMM D, YYYY")
        banner
      }
    }
  }
`
