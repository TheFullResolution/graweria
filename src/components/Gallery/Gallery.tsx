import { Dialog } from '@reach/dialog';
import '@reach/dialog/styles.css';
import { FaAngleDoubleLeft } from '@react-icons/all-files/fa/FaAngleDoubleLeft';
import { FaAngleDoubleRight } from '@react-icons/all-files/fa/FaAngleDoubleRight';
import { FaTimes } from '@react-icons/all-files/fa/FaTimes';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { blurDataImage } from "../../data/blurDataImage";
import { getHrefForImage, getNavLinks } from '../../utils/galleryUtils';
import { Button } from '../Button/Button';
import { Price } from '../Price/Price';
import styles from './Gallery.module.scss';

export type Image = { image: string; id: string; price?: number };

interface Props {
  images: Image[];
  imageLabel: string;
  gallerySizes: string;
  price?: { text_before: string; currency: string; locale: string };
  labels: {
    closeButton: string;
    nextButton: string;
    prevButton: string;
    galleryModal: string;
  };
}

export const Gallery: React.FC<Props> = ({
  images,
  labels,
  imageLabel,
  gallerySizes,
  price,
}) => {
  const router = useRouter();
  const { gallery, ...params } = router.query;
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
            href={getHrefForImage(router, {
              ...params,
              gallery: image.id,
            })}
            key={image.id}
            passHref
          >
            <a className={styles.thumbLink}>
              <Image
                src={image.image}
                alt={`${imageLabel} ${index + 1}`}
                layout="fill"
                objectFit="cover"
                placeholder="blur"
                blurDataURL={blurDataImage}
                sizes={gallerySizes}
                className={styles.image}
              />
              {image.price && price ? (
                <Price
                  price={image.price}
                  {...price}
                  className={styles.price}
                />
              ) : null}
            </a>
          </Link>
        ))}
      </div>
      <Dialog
        isOpen={!!currentImage}
        aria-label={labels.galleryModal}
        allowPinchZoom={true}
        className={styles.dialog}
      >
        <div className={styles.dialogWrapper}>
          <Button
            className={styles.close}
            version="icon"
            render={(props) => (
              <Link
                href={getHrefForImage(router, {
                  ...params,
                })}
                passHref
              >
                <a
                  {...props}
                  aria-label={labels.closeButton}
                  title={labels.closeButton}
                >
                  <FaTimes />
                </a>
              </Link>
            )}
          />
          <Button
            version="icon"
            render={(props) => (
              <Link
                href={getHrefForImage(router, {
                  ...prevParams,
                })}
                passHref
              >
                <a
                  {...props}
                  aria-label={labels.prevButton}
                  title={labels.prevButton}
                >
                  <FaAngleDoubleLeft />
                </a>
              </Link>
            )}
          />
          <div className={styles.imageWrapper}>
            {currentImage && (
              <>
                <Image
                  src={currentImage.image}
                  alt={imageLabel}
                  layout="fill"
                  objectFit="contain"
                  placeholder="blur"
                  blurDataURL={blurDataImage}
                  className={styles.image}
                />
                {currentImage.price && price ? (
                  <Price
                    price={currentImage.price}
                    {...price}
                    className={styles.price}
                  />
                ) : null}
              </>
            )}
          </div>
          <Button
            version="icon"
            render={(props) => (
              <Link
                href={getHrefForImage(router, {
                  ...nextParams,
                })}
                passHref
              >
                <a
                  {...props}
                  aria-label={labels.nextButton}
                  title={labels.nextButton}
                >
                  <FaAngleDoubleRight />
                </a>
              </Link>
            )}
          />
        </div>
      </Dialog>
    </>
  );
};
