import { GetStaticProps } from 'next';
import React from 'react';
import { HomePage } from '../containers/HomePage/HomePage';
import { Page } from '../containers/Page/Page';
import { pageKeys, siteData } from '../data/siteData';
import { Blog, Home as HomeData, MetaData } from '../types/content';

interface Props {
  homeData: HomeData;
  metaData: MetaData;
  blogData: Blog;
}

const Home: React.FC<Props> = ({ homeData, metaData, blogData }) => {
  return (
    <Page metaData={metaData} siteData={siteData} currentPage={pageKeys.home}>
      <HomePage homeData={homeData} metaData={metaData} blogData={blogData} />
    </Page>
  );
};

export default Home;

export const getStaticProps: GetStaticProps<Props> = async () => {
  const metaData = (await import('../../public/cms/content/metaData.json'))
    .default as MetaData;
  const homeData = (await import('../../public/cms/content/home.json'))
    .default as HomeData;
  const blogData = (await import('../../public/cms/content/blog.json'))
    .default as Blog;
  return {
    props: {
      homeData,
      metaData,
      blogData,
    },
  };
};
