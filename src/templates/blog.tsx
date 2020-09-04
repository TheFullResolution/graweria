import React from 'react'
import { graphql } from 'gatsby'
import {Page} from '../container/Page/Page'
import { BlogQuery } from '../graphql-types'

interface Props {
  data: BlogQuery
}

const BlogTemplate: React.FC<Props> = ({ data }) => {
  return (
    <Page currentPage="contact">
      <h1>{data.markdownRemark.frontmatter.title}</h1>
    </Page>
  )
}

export default BlogTemplate

export const query = graphql`
  query Blog($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      rawMarkdownBody
      frontmatter {
        title
        startDate(formatString: "MMMM D, YYYY")
        endDate
      }
    }
  }
`
