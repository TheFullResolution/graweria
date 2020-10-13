import React from 'react';
import { PreviewTemplateComponentProps } from 'netlify-cms-core';
import * as styles from '../container/BlogPage/BlogPage.module.scss';
import * as stylesPage from '../container/Page/Page.module.scss';

export const BlogPagePreview: React.FC<PreviewTemplateComponentProps> = (
  props,
) => {
  const title = props.entry.getIn(['data', 'title']);
  const body = props.widgetFor('body');
  const banner = props.entry.getIn(['data', 'banner']);
  const bannerSrc = props.getAsset(banner).toString();

  return (
    <div className={stylesPage.container}>
      <div className={styles.wrapper}>
        <h1>{title}</h1>
      </div>
      {banner && (
        <img
          src={bannerSrc}
          className={styles.banner}
          style={{ width: '100%', objectFit: 'fill' }}
        />
      )}
      <div className={styles.wrapper}>{body}</div>
    </div>
  );
};
