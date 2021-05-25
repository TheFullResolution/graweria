import cls from 'clsx';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { getHrefForImage } from '../../utils/galleryUtils';
import styles from './OfferList.module.scss';

interface Props {
  className?: string;
  currentProduct?: string;
  list: { id: string; label: string }[];
  icon: React.ReactNode;
  onClick?: () => void;
}

export const OfferList: React.FC<Props> = ({
  list,
  currentProduct,
  icon,
  className,
  onClick,
}) => {
  const router = useRouter();
  return (
    <ul className={cls(styles.list, className)}>
      {list.map((el) => (
        <li key={el.id}>
          <Link
            href={getHrefForImage(router, { product: el.id })}
            prefetch={false}
            scroll={false}
            shallow={true}
            passHref
          >
            <a
              className={cls({ [styles.active]: currentProduct === el.id })}
              onClick={onClick}
            >
              {icon} {el.label}
            </a>
          </Link>
        </li>
      ))}
    </ul>
  );
};
