import { Dialog } from '@reach/dialog';
import '@reach/dialog/styles.css';
import { useLocation } from '@reach/router';
import { Link } from 'gatsby';
import queryString from 'query-string';
import React from 'react';
import {
  FaAngleDoubleLeft,
  FaAngleDoubleRight,
  FaTimes,
} from 'react-icons/all';
import { Button } from '../Button/Button';
import { ResponsiveImg } from '../ResponsiveImg/ResponsiveImg';
import * as styles from './Gallery.module.scss';

type Image = { image: string; label: string };

interface Props {
  images: Image[];
}

function getNavLinks(currentImageIndex: number, images: Image[]) {
  if (!images) return {};
  
  const prevIndex =
    currentImageIndex === 0 ? images.length - 1 : currentImageIndex - 1;

  const nextIndex =
    currentImageIndex === images.length - 1 ? 0 : currentImageIndex + 1;

  return {
    nextQuery: queryString.stringify({
      gallery: images[nextIndex]?.image,
    }),
    prevQuery: queryString.stringify({
      gallery: images[prevIndex]?.image,
    }),
  };
}

export const Gallery: React.FC<Props> = ({ images }) => {
  const location = useLocation();
  const { gallery } = queryString.parse(location.search);
  const currentImageIndex = images.findIndex((img) => {
    return img.image === gallery;
  });

  const currentImage = currentImageIndex < 0 ? null : images[currentImageIndex];

  const { nextQuery, prevQuery } = getNavLinks(currentImageIndex, images);

  return (
    <>
      <div className={styles.gallery}>
        {images.map((image) => (
          <Link
            to={`${location.pathname}?${queryString.stringify({
              gallery: image.image,
            })}`}
            key={image.image}
          >
            <ResponsiveImg
              image={image.image}
              alt={image.label}
              className={styles.image}
            />
          </Link>
        ))}
      </div>
      <Dialog
        isOpen={!!currentImage}
        aria-label={'gallery'}
        allowPinchZoom={true}
        className={styles.dialog}
      >
        <div className={styles.dialogWrapper}>
          <Button
            className={styles.close}
            version="icon"
            render={(props) => (
              <Link {...props} to={location.pathname}>
                <FaTimes />
              </Link>
            )}
          />
          <Button
            version="icon"
            render={(props) => (
              <Link {...props} to={`${location.pathname}?${prevQuery}`}>
                <FaAngleDoubleLeft />
              </Link>
            )}
          />
          <div className={styles.imageWrapper}>
            {currentImage && (
              <ResponsiveImg
                image={currentImage.image}
                alt={currentImage.label}
                className={styles.image}
                imgStyle={{ objectFit: 'contain' }}
              />
            )}
          </div>
          <Button
            version="icon"
            render={(props) => (
              <Link {...props} to={`${location.pathname}?${nextQuery}`}>
                <FaAngleDoubleRight />
              </Link>
            )}
          />
        </div>
      </Dialog>
    </>
  );
};
