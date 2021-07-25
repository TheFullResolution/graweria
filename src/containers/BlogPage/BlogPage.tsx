import { FaArrowLeft } from '@react-icons/all-files/fa/FaArrowLeft';
import cls from 'clsx';
import Link from 'next/link';
import React from 'react';
import { PageImage } from '../../components/PageImage/PageImage';
import { BlogEntry } from '../../types/blogEntry';
import { Blog } from '../../types/content';
import { formatDate } from '../../utils/formatDate';
import { Markdown } from 'src/components/Markdown/Markdown';
import styles from './BlogPage.module.scss';

interface Props {
  blogData: Blog;
  blogEntry: BlogEntry;
}

export const BlogPage: React.FC<Props> = ({ blogEntry, blogData }) => {
  const expireDateObj = new Date(blogEntry.metaData.endDate);
  const isExpired = new Date() > expireDateObj;
  const expireDate = formatDate(expireDateObj);

  return (
    <>
      {isExpired && (
        <div className={styles.expiredInfo}>{blogData.expireLabel}</div>
      )}
      <Link href="/" passHref>
        <a className={styles.link}>
          <FaArrowLeft />
          {blogData.return}
        </a>
      </Link>
      <article>
        <div
          className={cls(styles.wrapper, styles.header, {
            [styles.isExpired]: isExpired,
          })}
        >
          <h1>{blogEntry.metaData.title}</h1>
          <p>
            {blogData.dateLabel} {expireDate}
          </p>
        </div>
        {blogEntry.metaData.banner && (
          <PageImage
            src={blogEntry.metaData.banner}
            alt={'Banner'}
            ratioWidth={16}
            ratioHeight={9}
            className={styles.banner}
          />
        )}
        <div className={cls(styles.wrapper, { [styles.isExpired]: isExpired })}>
          <Markdown>{blogEntry.content}</Markdown>
        </div>
      </article>
    </>
  );
};
