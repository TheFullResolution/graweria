import cls from 'clsx';
import React from 'react';
import { formatPrice } from '../../utils/formatPrice';
import styles from './Price.module.scss';

interface Props {
  price: number;
  text_before: string;
  locale: string;
  currency: string;
  className?: string;
}

export const Price: React.FC<Props> = ({
  price,
  currency,
  locale,
  text_before,
  className,
}) => {
  const formattedPrice = formatPrice(price, locale, currency);

  return (
    <div
      className={cls(styles.price, className)}
    >{`${text_before} ${formattedPrice}`}</div>
  );
};
