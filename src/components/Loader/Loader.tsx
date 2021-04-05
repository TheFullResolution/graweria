import { GiAxeSword } from '@react-icons/all-files/gi/GiAxeSword';
import React from 'react';
import styles from './Loader.module.scss';

interface Props {
  text?: string;
}

export const Loader: React.FC<Props> = ({ text }) => {
  return (
    <div className={styles.container}>
      <GiAxeSword className={styles.icon} />
      <div className={styles.wrapper}>
        <p className={styles.loading}>{text ?? 'Loading'}</p>
      </div>
    </div>
  );
};
