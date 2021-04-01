import { useLocation } from '@reach/router';
import cls from 'classnames';
import { Link } from 'gatsby';
import queryString from 'query-string';
import React from 'react';
import { OfferIds } from '../../container/OfferPage/OfferPage';
import * as styles from './OfferList.module.scss';

interface Props {
  className?: string;
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
  icon,
  className,
}) => {
  const location = useLocation();

  return (
    <ul className={cls(styles.list, className)}>
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
