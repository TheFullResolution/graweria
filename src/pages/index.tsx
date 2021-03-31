import { GetStaticProps } from 'next';
import React from 'react';
import { HomePage } from '../containers/HomePage/HomePage';
import { Page } from '../containers/Page/Page';
import { pageKeys, siteData } from '../data/siteData';
import { Home as HomeData, MetaData } from '../types/content';

interface Props {
  homeData: HomeData;
  metaData: MetaData;
}

const Home: React.FC<Props> = ({ homeData, metaData }) => {
  return (
    <Page metaData={metaData} siteData={siteData} currentPage={pageKeys.home}>
      <HomePage homeData={homeData} />
    </Page>
  );
};

export default Home;

export const getStaticProps: GetStaticProps<Props> = async () => {
  const metaData = (await import('../../cms/content/metaData.json'))
    .default as MetaData;
  const homeData = (await import('../../cms/content/home.json'))
    .default as HomeData;
  return {
    props: {
      homeData,
      metaData,
    },
  };
};
