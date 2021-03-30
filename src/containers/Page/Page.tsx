import React from 'react';
import { PageHead } from '../../components/PageHead/PageHead';
import { getGoogleFontLink, typography } from '../../utils/typography';
import styles from './Page.module.scss';
import 'focus-visible/dist/focus-visible.min.js';

interface Props {
  currentPage?: string;
}

const googleFonts = getGoogleFontLink(typography);
const globalStyles = typography.toString();

export const Page: React.FC<Props> = ({ children }) => {
  return (
    <>
      <PageHead
        metaData={{
          title: 'Graweria',
          description: 'Coming Soon',
          banner: 'Yolo',
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
        <main>{children}</main>
      </div>
    </>
  );
};
