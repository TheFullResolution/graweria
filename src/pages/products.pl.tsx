import * as React from 'react';
import { graphql } from 'gatsby';
import { Page } from '../container/Page/Page';
import { HomeDataQuery } from '../graphql-types';
import { Languages } from '../utils/languages';

interface Props {
  data: HomeDataQuery;
}

const Products: React.FC<Props> = ({ data }) => {
  return (
    <Page currentPage="products" language={Languages.pl}>
      Yolo
    </Page>
  );
};

export default Products;

// export const query = graphql`
//   query HomeData {
//     home {
//       title
//     }
//   }
// `
