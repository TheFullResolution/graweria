import { GetStaticProps } from 'next';
import React from 'react';
import { CraftPage } from '../containers/CraftPage/CraftPage';
import { Page } from '../containers/Page/Page';
import { pageKeys, siteData } from '../data/siteData';
import { Craft as CraftData, MetaData } from '../types/content';

interface Props {
  craftData: CraftData;
  metaData: MetaData;
}

const Craft: React.FC<Props> = ({ craftData, metaData }) => {
  return (
    <Page metaData={metaData} siteData={siteData} currentPage={pageKeys.home}>
      <CraftPage craftData={craftData} metaData={metaData} />
    </Page>
  );
};

export default Craft;

export const getStaticProps: GetStaticProps<Props> = async () => {
  const metaData = (await import('../../cms/content/metaData.json'))
    .default as MetaData;
  const craftData = (await import('../../cms/content/craft.json'))
    .default as CraftData;
  return {
    props: {
      craftData,
      metaData,
    },
  };
};
