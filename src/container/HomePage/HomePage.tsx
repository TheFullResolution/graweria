import { Link } from 'gatsby'
import React, { Fragment } from 'react'
import { FaArrowRight } from 'react-icons/all'
import { BreakLine } from '../../components/BreakLink/BreakLine'
import { Markdown } from '../../components/Markdown/Markdown'
import { Video } from '../../components/Video/Video'
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
      <section className={styles.about}>
        <Markdown>{data.page.description}</Markdown>
        <Video
          videoSrcURL="https://www.youtube-nocookie.com/embed/aErESYSH0EQ?modestbranding=1&rel=0"
          videoTitle="Graweria"
        />
      </section>
      <section>
        <h2>{data.page.blogTitle}</h2>
        {data.blogList.edges
          .filter((entry) => {
            return new Date(entry.node.frontmatter.endDate) > today
          })
          .map((entry, index) => {
            return (
              <Fragment key={entry.node.id}>
                  <BreakLine />
                <div className={styles.blog_title}>
                  <h3>{entry.node.frontmatter.title}</h3>
                  <span>({entry.node.frontmatter.date})</span>
                </div>
                <Markdown excerpt={true}>{entry.node.excerpt}</Markdown>
                <div className={styles.linkWrapper}>
                  <Link to={entry.node.fields.slug} className={styles.link}>
                    <span>{data.page.readmore}</span>
                    <FaArrowRight />
                  </Link>
                </div>
              </Fragment>
            )
          })}
      </section>
    </>
  )
}
