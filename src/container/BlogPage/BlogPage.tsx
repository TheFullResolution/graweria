import { Link } from 'gatsby';
import React from 'react';
import cls from 'classnames';
import { FaArrowLeft } from 'react-icons/fa';
import { Markdown } from '../../components/Markdown/Markdown';
import { ResponsiveImg } from '../../components/ResponsiveImg/ResponsiveImg';
import * as styles from './BlogPage.module.scss';

interface Props {
  returnString: string;
  title: string;
  banner: string;
  rawMarkdownBody: string;
  expireDate: string;
  expireLabel: string;
  dateLabel: string;
}

export const BlogPage: React.FC<Props> = ({
  returnString,
  title,
  banner,
  rawMarkdownBody,
  expireDate,
  expireLabel,
  dateLabel,
}) => {
  const expireDateObj = new Date(expireDate);
  const isExpired = new Date() > expireDateObj;

  return (
    <>
      {isExpired && <div className={styles.expiredInfo}>{expireLabel}</div>}
      <Link to="/" className={styles.link}>
        <FaArrowLeft />
        {returnString}
      </Link>
      <article>
        <div
          className={cls(styles.wrapper, styles.header, {
            [styles.isExpired]: isExpired,
          })}
        >
          <h1>{title}</h1>
          <p>
            {dateLabel} {expireDateObj.toLocaleDateString('pl-PL')}
          </p>
        </div>
        {banner && (
          <ResponsiveImg
            image={banner}
            alt={'Banner'}
            className={styles.banner}
          />
        )}
        <div className={cls(styles.wrapper, { [styles.isExpired]: isExpired })}>
          <Markdown>{rawMarkdownBody}</Markdown>
        </div>
      </article>
    </>
  );
};
