import Image from 'next/image';
import React from 'react';
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
        <Image src={image} alt={imageLabel} layout="fill" objectFit="contain" />
      </div>
      <p>{text}</p>
    </div>
  );
};
