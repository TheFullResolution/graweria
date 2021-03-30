import React from 'react';
import { AddressContact } from '../../components/AddressContact/AddressContact';
import { ContactForm } from '../../components/ContactForm/ContactForm';
import { Markdown } from '../../components/Markdown/Markdown';
import { OpeningHours } from '../../components/OpeningHourse/OpeningHours';
import { ContactDataQuery } from '../../graphql-types';
import * as styles from './ContactPage.module.scss';

interface Props {
  data: ContactDataQuery;
}

export const ContactPage: React.FC<Props> = ({ data }) => {
  return (
    <div>
      <h1>{data.contact.title}</h1>
      <Markdown>{data.contact.description}</Markdown>
      <div className={styles.wrapper}>
        <section>
          <OpeningHours
            label={data.metaData.openingHours.label}
            list={data.metaData.openingHours.list}
            className={styles.openings}
          />
          <AddressContact
            address={data.metaData.address}
            contact={data.metaData.contact}
          />
        </section>
        <section>
          <h2>{data.contact.formTitle}</h2>
          <ContactForm {...data.contact.form} />
        </section>
      </div>
    </div>
  );
};
