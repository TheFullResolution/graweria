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

  if (!data) return null;

  return (
    <section>
      {data.currentBlogList.map((entry) => {
        return (
          <Fragment key={entry.url}>
            <BreakLine />
            <div className={styles.blog_entry}>
              <Link href={entry.url} passHref>
                <a>
                  {entry.meta.banner && (
                    <PageImage
                      src={entry.meta.banner ?? default_pic}
                      alt={'Banner'}
                      className={cls(styles.image, styles.blog_image)}
                      ratioHeight={3}
                      ratioWidth={5}
                    />
                  )}
                  <div className={styles.blog_content}>
                    <div className={styles.blog_title}>
                      <h3>{entry.meta.title}</h3>
                      <span>({entry.meta.startDate})</span>
                    </div>
                    <Markdown excerpt={true}>{entry.excerpt}</Markdown>
                    <div className={styles.linkWrapper}>
                      <span>{readmore}</span>
                      <FaArrowRight />
                    </div>
                  </div>
                </a>
              </Link>
            </div>
          </Fragment>
        );
      })}
    </section>
  );
};
