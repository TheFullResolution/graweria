import { Link } from 'gatsby'
import React, { Fragment } from 'react'
import { FaArrowRight } from 'react-icons/all'
import cls from 'classnames'
import { BreakLine } from '../../components/BreakLink/BreakLine'
import { Markdown } from '../../components/Markdown/Markdown'
import { ResponsiveImg } from '../../components/ResponsiveImg/ResponsiveImg'
import { HomeDataQuery } from '../../graphql-types'
import * as styles from './HomePage.module.scss'

interface Props {
  data: HomeDataQuery
}

export const HomePage: React.FC<Props> = ({ data }) => {
  const today = new Date()

  return (
    <>
      <h1 className={styles.topHeading}>{data.page.title}</h1>
      <section className={styles.about}>
        <div>
          <h2>{data.page.subtitle}</h2>
          <Markdown>{data.page.description}</Markdown>
        </div>
        <ResponsiveImg
          image={data.page.sidePicture}
          alt={'Banner'}
          className={styles.image}
        />
      </section>
      <section>
        {data.blogList.edges
          .filter((entry) => {
            return new Date(entry.node.frontmatter.endDate) > today
          })
          .map((entry, index) => {
            return (
              <Fragment key={entry.node.id}>
                <BreakLine />
                <div className={styles.blog_entry}>
                  <Link to={entry.node.fields.slug}>
                    <ResponsiveImg
                      image={
                        entry.node.frontmatter.banner ??
                        data.blogDefaults.default_pic
                      }
                      alt={'Banner'}
                      className={cls(styles.image, styles.blog_image)}
                    />
                  </Link>
                  <div className={styles.blog_content}>
                    <div className={styles.blog_title}>
                      <Link to={entry.node.fields.slug} className={styles.link}>
                        <h3>{entry.node.frontmatter.title}</h3>
                      </Link>
                      <span>({entry.node.frontmatter.date})</span>
                    </div>
                    <Markdown excerpt={true}>{entry.node.excerpt}</Markdown>
                    <div className={styles.linkWrapper}>
                      <Link to={entry.node.fields.slug} className={styles.link}>
                        <span>{data.page.readmore}</span>
                        <FaArrowRight />
                      </Link>
                    </div>
                  </div>
                </div>
              </Fragment>
            )
          })}
      </section>
    </>
  )
}
