import React from 'react';
import { AddressContact } from '../../components/AddressContact/AddressContact';
import { ContactForm } from '../../components/ContactForm/ContactForm';
import { Markdown } from '../../components/Markdown/Markdown';
import { OpeningHours } from '../../components/OpeningHourse/OpeningHours';
import { Contact, MetaData } from '../../types/content';
import styles from './ContactPage.module.scss';

interface Props {
  contactData: Contact;
  metaData: MetaData;
}

export const ContactPage: React.FC<Props> = ({ contactData, metaData }) => {
  return (
    <div>
      <h1>{contactData.title}</h1>
      <Markdown>{contactData.description}</Markdown>
      <div className={styles.wrapper}>
        <section>
          <OpeningHours
            label={metaData.openingHours.label}
            list={metaData.openingHours.list}
            className={styles.openings}
          />
          <AddressContact
            address={metaData.address}
            contact={metaData.contact}
          />
        </section>
        <section>
          <h2>{contactData.formTitle}</h2>
          <ContactForm {...contactData.form} />
        </section>
      </div>
    </div>
  );
};
