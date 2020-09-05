import { Link } from 'gatsby'
import React from 'react'
import { Markdown } from '../../components/Markdown/Markdown'
import { HomeDataQuery } from '../../graphql-types'
import * as styles from './HomePage.module.scss'

interface Props {
  data: HomeDataQuery
}

export const HomePage: React.FC<Props> = ({ data }) => {
  const today = new Date()

  return (
    <>
      <h1>{data.page.title}</h1>
      <Markdown>{data.page.description}</Markdown>
      {data.blogList.edges
        .filter((entry) => {
          return new Date(entry.node.frontmatter.endDate) > today
        })
        .map((entry) => {
          return (
            <div key={entry.node.id}>
                <div className={styles.blog_title}>
                  <h2>{entry.node.frontmatter.title}</h2>
                  <span>({entry.node.frontmatter.date})</span>
                </div>
                <Markdown excerpt={true}>{entry.node.excerpt}</Markdown>
              <Link to={entry.node.fields.slug} className={styles.link}>

              </Link>
            </div>
          )
        })}
    </>
  )
}
