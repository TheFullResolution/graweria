import React from 'react';
import { Markdown } from '../../components/Markdown/Markdown';
import { PageImage } from '../../components/PageImage/PageImage';
import { Home } from '../../types/content';
import styles from './HomePage.module.scss';

interface Props {
  homeData: Home;
}

export const HomePage: React.FC<Props> = ({ homeData }) => {
  // const today = new Date();

  return (
    <>
      <h1 className={styles.topHeading}>{homeData.title}</h1>
      <section className={styles.about}>
        <div>
          <h2>{homeData.subtitle}</h2>
          <Markdown>{homeData.description}</Markdown>
        </div>
        <PageImage
          src={homeData.sidePicture}
          alt={'Banner'}
          ratioWidth={4}
          ratioHeight={3}
          className={styles.image}
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
    </>
  );
};
