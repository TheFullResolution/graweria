import { FaArrowRight } from '@react-icons/all-files/fa/FaArrowRight';
import cls from 'clsx';
import Link from 'next/link';
import React, { Fragment } from 'react';
import useSWR from 'swr';
import { BlogListApi } from '../../types/blogList';
import { BreakLine } from '../BreakLink/BreakLine';
import { Markdown } from '../Markdown/Markdown';
import { PageImage } from '../PageImage/PageImage';
import styles from './BlogList.module.scss';

export interface BlogListProps {
  className?: string;
  default_pic: string;
  readmore: string;
}

const fetcher = async (input: RequestInfo, init: RequestInit) => {
  const res = await fetch(input, init);
  return res.json();
};

export const BlogList: React.FC<BlogListProps> = ({
  default_pic,
  readmore,
}) => {
  const { data, error } = useSWR<BlogListApi>('/api/blogList', fetcher);

  if (error) return null;

  if (!data || !data?.currentBlogList?.length) return null;

  return (
    <section className={styles.container}>
      {data.currentBlogList.map((entry) => {
        return (
          <Fragment key={entry.url}>
            <BreakLine />
            <Link href={entry.url} passHref>
              <a className={styles.blog_entry}>
                <PageImage
                  src={entry.meta.banner ?? default_pic}
                  alt={'Banner'}
                  className={cls(styles.image, styles.blog_image)}
                  ratioHeight={3}
                  ratioWidth={4}
                />
                <div className={styles.blog_content}>
                  <div className={styles.blog_title}>
                    <h3>{entry.meta.title}</h3>
                    <span>
                      ({new Date(entry.meta.startDate).toLocaleDateString()})
                    </span>
                  </div>
                  <Markdown excerpt={true}>{entry.excerpt}</Markdown>
                  <div className={styles.linkWrapper}>
                    <span className={styles.readMore}>
                      {readmore}
                      <FaArrowRight />
                    </span>
                  </div>
                </div>
              </a>
            </Link>
          </Fragment>
        );
      })}
    </section>
  );
};
