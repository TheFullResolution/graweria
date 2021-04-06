import { GetStaticProps } from 'next';
import React from 'react';
import { NotFoundPage } from '../containers/NotFoundPage/NotFoundPage';
import { Page } from '../containers/Page/Page';
import { siteData } from '../data/siteData';
import { MetaData, Notfound } from '../types/content';

interface Props {
  notFoundData: Notfound;
  metaData: MetaData;
}

const Custom404: React.FC<Props> = ({ notFoundData, metaData }) => {
  return (
    <Page metaData={metaData} siteData={siteData}>
      <NotFoundPage notFoundData={notFoundData} />
    </Page>
  );
};

export default Custom404;

export const getStaticProps: GetStaticProps<Props> = async () => {
  const notFoundData = (await import('../../public/cms/content/notfound.json'))
    .default as Notfound;
  const metaData = (await import('../../public/cms/content/metaData.json'))
    .default as MetaData;
  return {
    props: {
      notFoundData,
      metaData,
    },
  };
};
