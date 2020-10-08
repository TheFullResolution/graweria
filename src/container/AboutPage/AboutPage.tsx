import React from 'react';
import { Gallery } from '../../components/Gallery/Gallery';
import { Markdown } from '../../components/Markdown/Markdown';
import { Video } from '../../components/Video/Video';
import { AboutDataQuery } from '../../graphql-types';
import * as styles from './AboutPage.module.scss';

interface Props {
  data: AboutDataQuery;
}

export const AboutPage: React.FC<Props> = ({ data }) => {
  return (
    <>
      <h1>{data.about.title}</h1>
      <section className={styles.topSection}>
        <div>
          <Markdown>{data.about.description}</Markdown>
        </div>
        <Video
          videoSrcURL={data.about.videoSrcURL}
          videoTitle={data.about.videoTitle}
          className={styles.video}
        />
      </section>
      <section>
        <h2>{data.about.galleryTitle}</h2>
        <Gallery
          images={data.about.gallery}
          ariaLables={data.about.ariaLabels}
        />
      </section>
    </>
  );
};
