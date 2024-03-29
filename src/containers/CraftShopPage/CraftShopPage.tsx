import { FaArrowUp } from '@react-icons/all-files/fa/FaArrowUp';
import { FaChessKing } from '@react-icons/all-files/fa/FaChessKing';
import { useRouter } from 'next/router';
import React, { useRef } from 'react';
import { useWindowScroll } from 'react-use';
import { Button } from '../../components/Button/Button';
import { Gallery } from '../../components/Gallery/Gallery';
import { Markdown } from '../../components/Markdown/Markdown';
import { OfferEmptyState } from '../../components/OfferEmptyState/OfferEmptyState';
import { OfferList } from '../../components/OfferList/OfferList';
import { PageImage } from '../../components/PageImage/PageImage';
import { BreakLine } from 'src/components/BreakLink/BreakLine';
import { Shop, MetaData } from 'src/types/content';
import styles from './CraftShopPage.module.scss';

interface Props {
  pageData: Shop;
  metaData: MetaData;
}

export const CraftShopPage: React.FC<Props> = ({ pageData, metaData }) => {
  const { query } = useRouter();
  const { y: scrollY } = useWindowScroll();
  const galleryRef = useRef<HTMLDivElement>(null);
  const tabsRef = useRef<HTMLHeadingElement>(null);
  let currentGallery: typeof pageData.products[0] | undefined;

  if (query.product) {
    currentGallery = pageData.products.find((el) => el.id === query.product);
  }

  const handleScrollClick = () => {
    if (tabsRef && tabsRef.current) {
      tabsRef.current.scrollIntoView(true);
    }
  };

  const onGalleryClick = () => {
    if (galleryRef && galleryRef.current) {
      galleryRef.current.scroll({ top: 0 });
      const position = galleryRef.current.offsetTop - 200;
      window.scroll(0, position);
    }
  };

  return (
    <>
      <section className={styles.text}>
        <div>
          <h1>{pageData.title}</h1>
          <Markdown>{pageData.description}</Markdown>
        </div>
        <PageImage
          ratioWidth={16}
          ratioHeight={11}
          src={pageData.sidePicture}
          alt={pageData.title}
          className={styles.image}
          sizes="(max-width: 670px) 100vw,
                 (max-width: 1050px) 50vw,
                 490px"
        />
      </section>
      <BreakLine />
      <section className={styles.galleryContainer}>
        <h2 ref={tabsRef}>{pageData.label}</h2>
        <div className={styles.gallery}>
          <OfferList
            list={pageData.products}
            currentProduct={query.product as string}
            icon={<FaChessKing />}
            onClick={onGalleryClick}
          />
          <div className={styles.galleryWrapper} ref={galleryRef}>
            {currentGallery && currentGallery.images ? (
              <Gallery
                gallerySizes="(max-width: 570px) 100vw,
                              (max-width: 780px) 50vw,
                              (max-width: 1050px) 33vw,
                              320px"
                images={currentGallery!.images}
                imageLabel={currentGallery.pictureLabel}
                labels={metaData.pictureGallery}
                price={{ ...metaData.prices }}
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
