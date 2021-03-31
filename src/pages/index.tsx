import { GetStaticProps } from 'next';
import React from 'react';
import { Page } from '../containers/Page/Page';
import { siteData } from '../data/siteData';
import { MetaData } from '../types/content';

interface Props {
  text: string;
  metaData: MetaData;
}

const HomePage: React.FC<Props> = ({ text, metaData }) => {
  return (
    <Page metaData={metaData} siteData={siteData}>
      <p>{text}</p>
    </Page>
  );
};

export default HomePage;

export const getStaticProps: GetStaticProps<Props> = async () => {
  const metaData = (await import('../../cms/content/metaData.json'))
    .default as MetaData;

  return {
    props: {
      text: 'yolo hdfjhdsjfds hdjhdsjdsjfkdsf  sdjhdsfkjfdk',
      metaData,
    },
  };
};
