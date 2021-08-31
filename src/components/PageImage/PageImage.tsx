import cls from 'clsx';
import Image from 'next/image';
import React from 'react';
import { blurDataImage } from '../../data/blurDataImage';
import styles from './PageImage.module.scss';

export interface PageImageProps {
  ratioWidth: number;
  ratioHeight: number;
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
  objectPosition?: string;
  priority?: boolean;
}

export const PageImage: React.FC<PageImageProps> = ({
  src,
  ratioHeight,
  ratioWidth,
  alt,
  className,
  objectPosition,
  priority,
  sizes,
}) => {
  return (
    <div
      className={cls(styles.container, className)}
      style={{ paddingTop: `calc(${ratioHeight} / ${ratioWidth} * 100%)` }}
    >
      <Image
        src={src}
        alt={alt}
        sizes={sizes}
        layout="fill"
        placeholder="blur"
        blurDataURL={blurDataImage}
        objectFit="cover"
        objectPosition={objectPosition}
        priority={priority}
      />
    </div>
  );
};
