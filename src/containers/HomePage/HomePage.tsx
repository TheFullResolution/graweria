import React from 'react';
import { BlogList } from '../../components/BlogList';
import { Gallery } from '../../components/Gallery/Gallery';
import { Markdown } from '../../components/Markdown/Markdown';
import { Video } from '../../components/Video/Video';
import { Blog, Home, MetaData } from '../../types/content';
import styles from './HomePage.module.scss';

interface Props {
  homeData: Home;
  metaData: MetaData;
  blogData: Blog;
}

export const HomePage: React.FC<Props> = ({ homeData, metaData, blogData }) => {
  return (
    <>
      <h1 className={styles.topHeading}>{homeData.title}</h1>
      <section className={styles.about}>
        <div>
          <h2>{homeData.subtitle}</h2>
          <Markdown>{homeData.description}</Markdown>
        </div>
        <Video
          videoSrcURL={homeData.videoSrcURL}
          videoTitle={homeData.videoTitle}
          className={styles.video}
        />
      </section>
      <BlogList
        default_pic={blogData.default_pic}
        readmore={homeData.readmore}
      />
      <section className={styles.gallery}>
        <h2>{homeData.galleryTitle}</h2>
        <Gallery
          images={homeData.gallery}
          imageLabel={homeData.pictureLabel}
          labels={metaData.pictureGallery}
        />
      </section>
    </>
  );
};
