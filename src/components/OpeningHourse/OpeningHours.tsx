import React from 'react';
import cls from 'classnames';
import { FaClock } from 'react-icons/all';
import * as styles from './OpeningHours.module.scss';

interface Props {
  label: string;
  list: { days: string; hours: string }[];
  className?: string;
}

export const OpeningHours: React.FC<Props> = ({ label, list, className }) => {
  return (
    <div className={cls(className)}>
      <h2>{label}</h2>
      <ul>
        {list.map((entry, index) => (
          <li key={index} className={styles.openings}>
            <span className={styles.withIcon}>
              <FaClock />
              {entry.days}
            </span>
            <span>{entry.hours}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
