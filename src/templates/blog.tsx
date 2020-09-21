import React from 'react'
import { graphql } from 'gatsby'
import { BlogPage } from '../container/BlogPage/BlogPage'
import { Page } from '../container/Page/Page'
import { BlogQuery, SitePageContext } from '../graphql-types'
import { Languages } from '../utils/languages'

interface Props {
  data: BlogQuery
  pageContext: SitePageContext
}

const BlogTemplate: React.FC<Props> = ({ data, pageContext }) => {
  return (
    <Page currentPage="blog" language={pageContext.language as Languages}>
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
