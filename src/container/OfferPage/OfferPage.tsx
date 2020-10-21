import { useLocation } from '@reach/router';
import { Tab, TabList, TabPanel, TabPanels, Tabs } from '@reach/tabs';
import '@reach/tabs/styles.css';
import queryString from 'query-string';
import React from 'react';
import { Gallery } from '../../components/Gallery/Gallery';
import { Markdown } from '../../components/Markdown/Markdown';
import { OfferList } from '../../components/OfferList/OfferList';
import { OfferDataQuery } from '../../graphql-types';
import * as styles from './OfferPage.module.scss';

export const OfferIds = {
  craft: 'craft',
  assortment: 'assortment',
} as const;

export interface OfferParams {
  id: typeof OfferIds[keyof typeof OfferIds];
  product: string;
}

interface Props {
  data: OfferDataQuery;
}

export const OfferPage: React.FC<Props> = ({ data }) => {
  const location = useLocation();
  const { id, product } = queryString.parse(location.search);

  let currentGallery: { image: string }[] | undefined;

  if (id === OfferIds.craft) {
    currentGallery = data.offer.craft.products.find((el) => el.id === product)
      ?.images;
  } else if (id === OfferIds.assortment) {
    currentGallery = data.offer.assortment.products.find(
      (el) => el.id === product,
    )?.images;
  } else {
    currentGallery = data.offer.craft.products[0].images
  }

  return (
    <>
      <section>
        <h1>{data.offer.title}</h1>
        <Markdown>{data.offer.description}</Markdown>
      </section>
      <section className={styles.gallery}>
        <div>
          <Tabs className={styles.list}>
            <TabList>
              <Tab>{data.offer.craft.label}</Tab>
              <Tab>{data.offer.assortment.label}</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <OfferList
                  id={OfferIds.craft}
                  list={data.offer.craft.products}
                />
              </TabPanel>
              <TabPanel>
                <OfferList
                  id={OfferIds.assortment}
                  list={data.offer.assortment.products}
                />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </div>
        {currentGallery && (
          <Gallery
            images={currentGallery}
            ariaLables={{
              closeButton: 'string',
              nextButton: 'string',
              prevButton: 'string',
              galleryModal: 'string',
            }}
          />
        )}
      </section>
    </>
  );
};
