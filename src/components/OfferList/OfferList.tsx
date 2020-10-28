import { useLocation } from '@reach/router';
import { Link } from 'gatsby';
import queryString from 'query-string';
import React from 'react';
import cls from 'classnames';
import { OfferIds } from '../../container/OfferPage/OfferPage';
import * as styles from './OfferList.module.scss';

interface Props {
  id: typeof OfferIds[keyof typeof OfferIds];
  currentProduct?: string;
  list: { id: string; label: string }[];
  handleClick: () => void;
  icon: React.ReactNode;
}

export const OfferList: React.FC<Props> = ({
  list,
  id,
  currentProduct,
  handleClick,
  icon
}) => {
  const location = useLocation();

  return (
    <ul className={styles.list}>
      {list.map((el) => (
        <li key={el.id}>
          <Link
            to={`${location.pathname}?${queryString.stringify({
              id,
              product: el.id,
            })}`}
            onClick={handleClick}
            className={cls({ [styles.active]: currentProduct === el.id })}
          >
            {icon} {el.label}
          </Link>
        </li>
      ))}
    </ul>
  );
};
