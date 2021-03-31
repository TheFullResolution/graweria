import React from 'react';
import { PageHead } from '../../components/PageHead/PageHead';
import { SiteData } from '../../data/siteData';
import { MetaData } from '../../types/content';
import { getGoogleFontLink, typography } from '../../utils/typography';
import styles from './Page.module.scss';
import 'focus-visible/dist/focus-visible.min.js';
import { Header } from 'src/components/Header/Header';

interface Props {
  currentPage?: string;
  metaData: MetaData;
  siteData: SiteData;
}

const googleFonts = getGoogleFontLink(typography);
const globalStyles = typography.toString();

export const Page: React.FC<Props> = ({ children, metaData, siteData }) => {
  return (
    <>
      <PageHead
        metaData={{
          title: metaData.title,
          description: metaData.description,
          banner: metaData.banner,
        }}
      >
        <style>{globalStyles}</style>
        <link
          href={`//fonts.googleapis.com/css?family=${googleFonts}&display=swap`}
          rel={'stylesheet'}
          type={'text/css'}
        />
      </PageHead>

      <div className={styles.container}>
        <Header currentPage={''} siteData={siteData} metaData={metaData} />
        <main>{children}</main>
      </div>
    </>
  );
};
