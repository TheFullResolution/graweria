import { FaArrowUp } from '@react-icons/all-files/fa/FaArrowUp';
import { FaChessKing } from '@react-icons/all-files/fa/FaChessKing';
import { useRouter } from 'next/router';
import React, { useRef } from 'react';
import { useWindowScroll } from 'react-use';
import { BreakLine } from 'src/components/BreakLink/BreakLine';
import { Craft, MetaData } from 'src/types/content';
import { Button } from '../../components/Button/Button';
import { Gallery } from '../../components/Gallery/Gallery';
import { Markdown } from '../../components/Markdown/Markdown';
import { OfferEmptyState } from '../../components/OfferEmptyState/OfferEmptyState';
import { OfferList } from '../../components/OfferList/OfferList';
import { PageImage } from '../../components/PageImage/PageImage';
import styles from './CraftPage.module.scss';

interface Props {
  craftData: Craft;
  metaData: MetaData;
}

export const CraftPage: React.FC<Props> = ({ craftData, metaData }) => {
  const { query } = useRouter();
  const { y: scrollY } = useWindowScroll();
  const tabsRef = useRef<HTMLHeadingElement>(null);
  let currentGallery: typeof craftData.products[0] | undefined;

  if (query.product) {
    currentGallery = craftData.products.find((el) => el.id === query.product);
  }

  const handleScrollClick = () => {
    if (tabsRef && tabsRef.current) {
      tabsRef.current.scrollIntoView(true);
    }
  };

  return (
    <>
      <section className={styles.text}>
        <div>
          <h1>{craftData.title}</h1>
          <Markdown>{craftData.description}</Markdown>
        </div>
        <PageImage
          ratioWidth={4}
          ratioHeight={3}
          src={craftData.sidePicture}
          alt={craftData.title}
          className={styles.image}
        />
      </section>
      <BreakLine />
      <section>
        <h2 ref={tabsRef}>{craftData.title}</h2>
        <div className={styles.gallery}>
          <OfferList
            list={craftData.products}
            currentProduct={query.product as string}
            icon={<FaChessKing />}
          />
          <div className={styles.galleryWrapper}>
            {currentGallery && currentGallery.images ? (
              <Gallery
                images={currentGallery!.images}
                imageLabel={currentGallery.pictureLabel}
                labels={metaData.pictureGallery}
              />
            ) : (
              <OfferEmptyState
                image={metaData.pictureGallery.emptyState.picture}
                imageLabel={metaData.pictureGallery.emptyState.label}
                text={metaData.pictureGallery.emptyState.text}
              />
            )}
          </div>
        </div>
      </section>
      {scrollY > 1500 && (
        <Button
          onClick={handleScrollClick}
          version={'standard'}
          className={styles.scroll}
        >
          <FaArrowUp /> {metaData.pictureGallery.scrollUpLabel}
        </Button>
      )}
    </>
  );
};
