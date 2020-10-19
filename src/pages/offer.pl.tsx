import { graphql } from 'gatsby';
import * as React from 'react';
import { OfferPage } from '../container/OfferPage/OfferPage';
import { Page } from '../container/Page/Page';
import { OfferDataQuery } from '../graphql-types';
import { Languages } from '../utils/languages';

interface Props {
  data: OfferDataQuery;
}

const Offer: React.FC<Props> = ({ data }) => {
  return (
    <Page currentPage="offer" language={Languages.pl}>
      <OfferPage data={data} />
    </Page>
  );
};

export default Offer;

export const query = graphql`
  query OfferData {
    offer {
      title
      description
      craft {
        label
        products {
          id
          label
          images {
            id
            image
          }
        }
      }
      assortment {
        label
        products {
          id
          label
          images {
            id
            image
          }
        }
      }
    }
  }
`;
