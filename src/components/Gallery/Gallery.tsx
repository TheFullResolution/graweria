import { Dialog } from '@reach/dialog';
import '@reach/dialog/styles.css';
import { FaAngleDoubleLeft } from '@react-icons/all-files/fa/FaAngleDoubleLeft';
import { FaAngleDoubleRight } from '@react-icons/all-files/fa/FaAngleDoubleRight';
import { FaTimes } from '@react-icons/all-files/fa/FaTimes';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { Button } from '../Button/Button';
import styles from './Gallery.module.scss';
import { getHrefForImage, getNavLinks } from './utils';

export type Image = { image: string; id: string };

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

export const Gallery: React.FC<Props> = ({
  images,
  ariaLabels,
  imageLabel,
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
                className={styles.image}
              />
            </a>
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
                href={getHrefForImage(router, {
                  ...params,
                })}
                passHref
              >
                <a
                  {...props}
                  aria-label={ariaLabels.closeButton}
                  title={ariaLabels.closeButton}
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
                  aria-label={ariaLabels.prevButton}
                  title={ariaLabels.prevButton}
                >
                  <FaAngleDoubleLeft />
                </a>
              </Link>
            )}
          />
          <div className={styles.imageWrapper}>
            {currentImage && (
              <Image
                src={currentImage.image}
                alt={imageLabel}
                layout="fill"
                objectFit="contain"
                className={styles.image}
              />
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
                  aria-label={ariaLabels.nextButton}
                  title={ariaLabels.nextButton}
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
