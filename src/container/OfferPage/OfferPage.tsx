import React from 'react';
import { Markdown } from '../../components/Markdown/Markdown';
import { OfferDataQuery } from '../../graphql-types';

interface Props {
  data: OfferDataQuery;
}

export const OfferPage: React.FC<Props> = ({ data }) => {
  return (
    <>
      <section>
        <h1>{data.offer.title}</h1>
        <Markdown>{data.offer.description}</Markdown>
      </section>
      <section>
        {data.offer.craft.products.map((el) => (
          <p key={el.id}>{el.label}</p>
        ))}
      </section>
    </>
  );
};
