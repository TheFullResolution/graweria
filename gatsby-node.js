/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions

  if (node.internal.type === 'MarkdownRemark') {
    const slug = createFilePath({ node, getNode })
    createNodeField({
      node,
      name: 'slug',
      value: slug,
    })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const result = await graphql(`
    {
      postsRemark: allMarkdownRemark(
        limit: 100
      ) {
        edges {
          node {
            fileAbsolutePath
            frontmatter {
              contentKey
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  // handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  const blogEntries = result.data.postsRemark.edges.filter(
    ({ node }) => node.frontmatter.contentKey === 'blog',
  )

  blogEntries.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve('./src/templates/blog.tsx'),
      context: {
        language: 'pl',
        slug: node.fields.slug,
      },
    })
  })
}
