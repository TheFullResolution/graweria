import React from 'react';
import { AddressContact } from '../../components/AddressContact/AddressContact';
import { ContactForm } from '../../components/ContactForm/ContactForm';
import { Markdown } from '../../components/Markdown/Markdown';
import { OpeningHours } from '../../components/OpeningHourse/OpeningHours';
import { ContactDataQuery } from '../../graphql-types';

interface Props {
  data: ContactDataQuery;
}

export const ContactPage: React.FC<Props> = ({ data }) => {
  return (
    <div>
      <h1>{data.contact.title}</h1>
      <Markdown>{data.contact.description}</Markdown>
      <div>
        <OpeningHours
          label={data.metaData.openingHours.label}
          list={data.metaData.openingHours.list}
        />
        <AddressContact
          address={data.metaData.address}
          contact={data.metaData.contact}
        />
      </div>
      <ContactForm {...data.contact.form} />
    </div>
  );
};
