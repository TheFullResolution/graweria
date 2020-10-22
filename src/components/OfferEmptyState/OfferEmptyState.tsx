import React from 'react';
import { ResponsiveImg } from '../ResponsiveImg/ResponsiveImg';
import * as styles from './OfferEmptyState.module.scss';

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
      <ResponsiveImg image={image} alt={imageLabel} className={styles.img}/>
      <p>{text}</p>
    </div>
  );
};
