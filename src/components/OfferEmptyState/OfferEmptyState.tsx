import Image from 'next/image';
import React from 'react';
import { blurDataImage } from '../../data/blurDataImage';
import styles from './OfferEmptyState.module.scss';

interface Props {
  image: string;
  imageLabel: string;
  text: string;
}

export const OfferEmptyState: React.FC<Props> = ({
  image,
  text,
  imageLabel,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <Image
          src={image}
          alt={imageLabel}
          width={309}
          height={309}
          placeholder="blur"
          blurDataURL={blurDataImage}
        />
      </div>
      <p>{text}</p>
    </div>
  );
};
