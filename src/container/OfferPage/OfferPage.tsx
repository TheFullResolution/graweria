import { useLocation } from '@reach/router';
import useScrollPosition from '@react-hook/window-scroll';
import { Tab, TabList, TabPanel, TabPanels, Tabs } from '@reach/tabs';
import '@reach/tabs/styles.css';
import queryString from 'query-string';
import React, { Fragment, useRef } from 'react';
import { FaArrowUp } from 'react-icons/all';
import { BreakLine } from '../../components/BreakLink/BreakLine';
import { Button } from '../../components/Button/Button';
import { Gallery } from '../../components/Gallery/Gallery';
import { Markdown } from '../../components/Markdown/Markdown';
import { OfferEmptyState } from '../../components/OfferEmptyState/OfferEmptyState';
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
  const scrollY = useScrollPosition();
  const tabsRef = useRef<HTMLDivElement>(null);

  const { id, product } = queryString.parse(location.search);

  let currentGallery:
    | typeof data.offerCraft.products[0]
    | typeof data.offerAssortment.products[0]
    | undefined;

  if (id === OfferIds.craft) {
    currentGallery = data.offerCraft.products.find((el) => el.id === product);
  } else if (id === OfferIds.assortment) {
    currentGallery = data.offerAssortment.products.find(
      (el) => el.id === product,
    );
  }

  const handleScrollClick = () => {
    if (tabsRef && tabsRef.current) {
      tabsRef.current.scrollIntoView({ block: 'nearest' });
    }
  };

  return (
    <>
      <section>
        <h1>{data.offer.title}</h1>
        <Markdown>{data.offer.description}</Markdown>
      </section>
      <BreakLine ref={tabsRef} />
      <section className={styles.gallery}>
        <div>
          <Tabs className={styles.list}>
            <TabList className={styles.tablist}>
              <Tab>{data.offerCraft.label}</Tab>
              <Tab>{data.offerAssortment.label}</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <OfferList
                  id={OfferIds.craft}
                  list={data.offerCraft.products}
                  currentProduct={product as string}
                  handleClick={handleScrollClick}
                />
              </TabPanel>
              <TabPanel>
                <OfferList
                  id={OfferIds.assortment}
                  list={data.offerAssortment.products}
                  currentProduct={product as string}
                  handleClick={handleScrollClick}
                />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </div>
        {currentGallery ? (
          <Gallery
            images={currentGallery.images}
            imageLabel={currentGallery.pictureLabel}
            ariaLabels={data.offer.ariaLabels}
          />
        ) : (
          <OfferEmptyState
            image={data.offer.emptyState.picture}
            imageLabel={data.offer.emptyState.label}
            text={data.offer.emptyState.text}
          />
        )}
        {scrollY > 600 && (
          <Button
            onClick={handleScrollClick}
            version={'standard'}
            className={styles.scroll}
          >
            <FaArrowUp /> {data.offer.scrollUpLabel}
          </Button>
        )}
      </section>
    </>
  );
};