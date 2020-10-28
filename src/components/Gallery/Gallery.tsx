import { Dialog } from '@reach/dialog';
import '@reach/dialog/styles.css';
import { useLocation } from '@reach/router';
import { Link } from 'gatsby';
import queryString, { ParsedQuery } from 'query-string';
import React from 'react';
import {
  FaAngleDoubleLeft,
  FaAngleDoubleRight,
  FaTimes,
} from 'react-icons/fa';
import { Button } from '../Button/Button';
import { ResponsiveImg } from '../ResponsiveImg/ResponsiveImg';
import * as styles from './Gallery.module.scss';

type Image = { image: string; id: string };

interface Props {
  images: Image[];
  imageLabel: string;
  ariaLabels: {
    closeButton: string;
    nextButton: string;
    prevButton: string;
    galleryModal: string;
  };
}

function getNavLinks(
  currentImageIndex: number,
  images: Image[],
  params: ParsedQuery = {},
) {
  if (!images) return {};

  const prevIndex =
    currentImageIndex === 0 ? images.length - 1 : currentImageIndex - 1;

  const nextIndex =
    currentImageIndex === images.length - 1 ? 0 : currentImageIndex + 1;

  return {
    nextParams: {
      ...params,
      gallery: images[nextIndex]?.id,
    },
    prevParams: {
      ...params,
      gallery: images[prevIndex]?.id,
    },
  };
}

export const Gallery: React.FC<Props> = ({
  images,
  ariaLabels,
  imageLabel,
}) => {
  const location = useLocation();
  const { gallery, ...params } = queryString.parse(location.search);
  const currentImageIndex = images.findIndex((img) => {
    return img.id === gallery;
  });

  const currentImage = currentImageIndex < 0 ? null : images[currentImageIndex];

  const { nextParams, prevParams } = getNavLinks(
    currentImageIndex,
    images,
    params,
  );

  return (
    <>
      <div className={styles.gallery}>
        {images.map((image, index) => (
          <Link
            to={`${location.pathname}?${queryString.stringify({
              ...params,
              gallery: image.id,
            })}`}
            key={image.id}
            className={styles.thumbLink}
          >
            <ResponsiveImg
              image={image.image}
              alt={`${imageLabel} ${index + 1}`}
              className={styles.image}
            />
          </Link>
        ))}
      </div>
      <Dialog
        isOpen={!!currentImage}
        aria-label={ariaLabels.galleryModal}
        allowPinchZoom={true}
        className={styles.dialog}
      >
        <div className={styles.dialogWrapper}>
          <Button
            className={styles.close}
            version="icon"
            render={(props) => (
              <Link
                {...props}
                to={queryString.stringifyUrl({
                  url: location.pathname,
                  query: { ...params },
                })}
                aria-label={ariaLabels.closeButton}
                title={ariaLabels.closeButton}
              >
                <FaTimes />
              </Link>
            )}
          />
          <Button
            version="icon"
            render={(props) => (
              <Link
                {...props}
                to={queryString.stringifyUrl({
                  url: location.pathname,
                  query: { ...prevParams },
                })}
                aria-label={ariaLabels.prevButton}
                title={ariaLabels.prevButton}
              >
                <FaAngleDoubleLeft />
              </Link>
            )}
          />
          <div className={styles.imageWrapper}>
            {currentImage && (
              <ResponsiveImg
                image={currentImage.image}
                alt={imageLabel}
                className={styles.image}
                imgStyle={{ objectFit: 'contain' }}
              />
            )}
          </div>
          <Button
            version="icon"
            render={(props) => (
              <Link
                {...props}
                to={queryString.stringifyUrl({
                  url: location.pathname,
                  query: { ...nextParams },
                })}
                aria-label={ariaLabels.nextButton}
                title={ariaLabels.nextButton}
              >
                <FaAngleDoubleRight />
              </Link>
            )}
          />
        </div>
      </Dialog>
    </>
  );
};
