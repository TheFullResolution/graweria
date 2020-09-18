import React from 'react'
import { graphql } from 'gatsby'
import { BlogPage } from '../container/BlogPage/BlogPage'
import { Page } from '../container/Page/Page'
import { BlogQuery } from '../graphql-types'

interface Props {
  data: BlogQuery
}

const BlogTemplate: React.FC<Props> = ({ data }) => {
  return (
    <Page currentPage="blog">
      <BlogPage
        title={data.blogEntry.frontmatter.title}
        banner={data.blogEntry.frontmatter.banner}
        rawMarkdownBody={data.blogEntry.rawMarkdownBody}
        returnString={data.defaults.return}
      />
    </Page>
  )
}

export default BlogTemplate

export const query = graphql`
  query Blog($slug: String!) {
    defaults: blog {
      return
    }
    blogEntry: markdownRemark(fields: { slug: { eq: $slug } }) {
      rawMarkdownBody
      frontmatter {
        title
        banner
        startDate(formatString: "MMMM D, YYYY")
        endDate
      }
    }
  }
`
