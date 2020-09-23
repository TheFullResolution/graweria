import React from 'react';
import { Helmet } from 'react-helmet';
import { MetaDataQuery } from '../../graphql-types';
import { Languages } from '../../utils/languages';

interface Props {
  data: MetaDataQuery;
  language: Languages;
}

export const MetaTags: React.FC<Props> = ({ data, language }) => {
  return (
    <Helmet title={data.metaData.title}>
      <html lang={language} />
      <meta name="description" content={data.metaData.description} />
      <meta name="image" content={data.metaData.banner} />
    </Helmet>
  );
};
