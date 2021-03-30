import Head from 'next/head';
import React from 'react';

interface Props {
  metaData: {
    title: string;
    description: string;
    banner: string;
  };
}

export const PageHead: React.FC<Props> = ({ metaData, children }) => {
  return (
    <Head>
      <title>{metaData.title}</title>
      <meta name="description" content={metaData.description} />
      <meta name="image" content={metaData.banner} />
      {children}
    </Head>
  );
};
