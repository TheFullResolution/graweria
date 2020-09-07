import { Link } from 'gatsby'
import React from 'react'
import { FaArrowLeft } from 'react-icons/all'
import { Markdown } from '../../components/Markdown/Markdown'
import { BlogQuery } from '../../graphql-types'
import * as styles from "./BlogPage.module.scss"

interface Props {
  data: BlogQuery
}

export const BlogPage: React.FC<Props> = ({ data }) => {
  return (
    <>
      <Link to="/" className={styles.link}>
        <FaArrowLeft />
        {data.defaults.return}
      </Link>
      <article>
        <h1>{data.blogEntry.frontmatter.title}</h1>
        <Markdown>{data.blogEntry.rawMarkdownBody}</Markdown>
      </article>
    </>
  )
}
