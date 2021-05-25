import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { SiteData } from '../../data/siteData';
import styles from './SignupPage.module.scss';

interface Props {
  siteData: SiteData;
}

export const SignupPage: React.FC<Props> = ({ siteData }) => {
  return (
    <>
      <Head>
        <title>Graweria Signup</title>
        <meta name="robots" content="noindex" />
      </Head>
      <div className={styles.container}>
        <Link href="/" passHref>
          <a className={styles.image}>
            <Image
              src={siteData.logo}
              alt={'Banner'}
              width={130}
              height={130}
            />
          </a>
        </Link>
        <h1>Signup Page</h1>
        <Link href="/admin">Admin Page</Link>
      </div>
    </>
  );
};
