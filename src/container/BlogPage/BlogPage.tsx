import { Link } from 'gatsby'
import React from 'react'
import { FaArrowLeft } from 'react-icons/all'
import { Markdown } from '../../components/Markdown/Markdown'
import { ResponsiveImg } from '../../components/ResponsiveImg/ResponsiveImg'
import * as styles from './BlogPage.module.scss'

interface Props {
  returnString: string
  title: string
  banner: string
  rawMarkdownBody: string
}

export const BlogPage: React.FC<Props> = ({
  returnString,
  title,
  banner,
  rawMarkdownBody,
}) => {
  return (
    <>
      <Link to="/" className={styles.link}>
        <FaArrowLeft />
        {returnString}
      </Link>
      <article>
        <div className={styles.wrapper}>
          <h1>{title}</h1>
        </div>
        {banner && (
          <ResponsiveImg
            image={banner}
            alt={'Banner'}
            className={styles.banner}
          />
        )}
        <div className={styles.wrapper}>
          <Markdown>{rawMarkdownBody}</Markdown>
        </div>
      </article>
    </>
  )
}
