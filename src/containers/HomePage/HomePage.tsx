import React from 'react';
import { Gallery } from '../../components/Gallery/Gallery';
import { Markdown } from '../../components/Markdown/Markdown';
import { Video } from '../../components/Video/Video';
import { Home, MetaData } from '../../types/content';
import styles from './HomePage.module.scss';

interface Props {
  homeData: Home;
  metaData: MetaData;
}

export const HomePage: React.FC<Props> = ({ homeData, metaData }) => {
  // const today = new Date();

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
      {/*<section>*/}
      {/*  {data.blogList.edges*/}
      {/*    .filter((entry) => {*/}
      {/*      return new Date(entry.node.frontmatter.endDate) > today;*/}
      {/*    })*/}
      {/*    .map((entry) => {*/}
      {/*      return (*/}
      {/*        <Fragment key={entry.node.id}>*/}
      {/*          <BreakLine />*/}
      {/*          <div className={styles.blog_entry}>*/}
      {/*            <Link to={entry.node.fields.slug}>*/}
      {/*              <ResponsiveImg*/}
      {/*                image={*/}
      {/*                  entry.node.frontmatter.banner ??*/}
      {/*                  data.blogDefaults.default_pic*/}
      {/*                }*/}
      {/*                alt={'Banner'}*/}
      {/*                className={cls(styles.image, styles.blog_image)}*/}
      {/*              />*/}
      {/*            </Link>*/}
      {/*            <div className={styles.blog_content}>*/}
      {/*              <div className={styles.blog_title}>*/}
      {/*                <Link to={entry.node.fields.slug} className={styles.link}>*/}
      {/*                  <h3>{entry.node.frontmatter.title}</h3>*/}
      {/*                </Link>*/}
      {/*                <span>({entry.node.frontmatter.date})</span>*/}
      {/*              </div>*/}
      {/*              <Markdown excerpt={true}>{entry.node.excerpt}</Markdown>*/}
      {/*              <div className={styles.linkWrapper}>*/}
      {/*                <Link to={entry.node.fields.slug} className={styles.link}>*/}
      {/*                  <span>{data.page.readmore}</span>*/}
      {/*                  <FaArrowRight />*/}
      {/*                </Link>*/}
      {/*              </div>*/}
      {/*            </div>*/}
      {/*          </div>*/}
      {/*        </Fragment>*/}
      {/*      );*/}
      {/*    })}*/}
      {/*</section>*/}
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
