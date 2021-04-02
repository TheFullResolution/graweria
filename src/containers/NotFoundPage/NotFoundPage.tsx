import { FaArrowLeft } from '@react-icons/all-files/fa/FaArrowLeft';
import { FaTimesCircle } from '@react-icons/all-files/fa/FaTimesCircle';
import Link from 'next/link';
import React from 'react';
import { PageImage } from '../../components/PageImage/PageImage';
import { Notfound } from '../../types/content';
import * as styles from './NotFoundPage.module.scss';

interface Props {
  notFoundData: Notfound;
}

export const NotFoundPage: React.FC<Props> = ({ notFoundData }) => {
  return (
    <div className={styles.wrapper}>
      <PageImage
        src={notFoundData.picture}
        alt={'banner'}
        className={styles.banner}
        ratioWidth={16}
        ratioHeight={5}
        objectPosition={'50% 40%'}
      />
      <FaTimesCircle className={styles.icon} />
      <p>{notFoundData.text}</p>
      <Link href="/" passHref>
        <a className={styles.link}>
          <FaArrowLeft />
          {notFoundData.go_home_label}
        </a>
      </Link>
    </div>
  );
};
