import React from 'react';
import cls from 'classnames';
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/all';
import * as styles from './AddressContact.module.scss';

interface Props {
  address: { label: string; street: string; city: string; postcode: string };
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
      <p className={styles.withIcon}>
        <FaMapMarkerAlt />
        {address.street}, {address.city} {address.postcode}
      </p>
      <h2>{contact.label}</h2>
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