import { GetStaticProps } from 'next';
import React from 'react';
import { CraftShopPage } from '../containers/CraftShopPage/CraftShopPage';
import { Page } from '../containers/Page/Page';
import { pageKeys, siteData } from '../data/siteData';
import { Shop as ShopData, MetaData } from '../types/content';

interface Props {
  shopData: ShopData;
  metaData: MetaData;
}

const Shop: React.FC<Props> = ({ shopData, metaData }) => {
  return (
    <Page metaData={metaData} siteData={siteData} currentPage={pageKeys.shop}>
      <CraftShopPage pageData={shopData} metaData={metaData} />
    </Page>
  );
};

export default Shop;

export const getStaticProps: GetStaticProps<Props> = async () => {
  const metaData = (await import('../../cms/content/metaData.json'))
    .default as MetaData;
  const shopData = (await import('../../cms/content/shop.json'))
    .default as ShopData;
  return {
    props: {
      shopData,
      metaData,
    },
  };
};
