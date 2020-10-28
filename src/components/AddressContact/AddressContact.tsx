import React from 'react';
import cls from 'classnames';
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';
import * as styles from './AddressContact.module.scss';

interface Props {
  address: {
    label: string;
    street: string;
    city: string;
    postcode: string;
    mapLink: string;
  };
  contact: {
    label: string;
    phone: string;
    email: string;
  };
  className?: string;
}

export const AddressContact: React.FC<Props> = ({
  address,
  contact,
  className,
}) => {
  return (
    <div className={cls(styles.container, className)}>
      <h2>{address.label}</h2>
      <a
        href={address.mapLink}
        target="_blank"
        rel={'nofollow noreferrer'}
        className={styles.withIcon}
      >
        <FaMapMarkerAlt />
        {address.street}, {address.city} {address.postcode}
      </a>
      <h2 className={styles.contactLabel}>{contact.label}</h2>
      <ul>
        <li className={styles.withIcon}>
          <FaPhoneAlt />
          <a href={`tel:${contact.phone}`}>{contact.phone}</a>
        </li>
        <li className={styles.withIcon}>
          <FaEnvelope />
          <a href={`mailto:${contact.email}`}>{contact.email}</a>
        </li>
      </ul>
    </div>
  );
};
