import React from 'react';
import { ContactForm } from '../../components/ContactForm/ContactForm';
import { ContactDataQuery } from '../../graphql-types';

interface Props {
  data: ContactDataQuery;
}

export const ContactPage: React.FC<Props> = ({ data }) => {
  return (
    <div>
      <ContactForm {...data.contact.form} />
    </div>
  );
};
