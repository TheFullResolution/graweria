import { Link } from 'gatsby';
import React from 'react';
import { Keys } from '../../container/Page/Page';
import { MetaDataQuery } from '../../graphql-types';
import { AddressContact } from '../AddressContact/AddressContact';
import { OpeningHours } from '../OpeningHourse/OpeningHours';
import * as styles from './Footer.module.scss';

interface Props {
  data: MetaDataQuery;
}

export const Footer: React.FC<Props> = ({ data }) => {
  return (
    <footer className={styles.footer}>
      <div className={styles.links}>
        <h2>{data.metaData.links.label}</h2>
        <ul>
          {data.site.siteMetadata.menuLinks.map((link) => (
            <li key={link.name}>
              <Link to={link.link}>
                {data.metaData.links[link.name as Keys]}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <AddressContact
        address={data.metaData.address}
        contact={data.metaData.contact}
      />
      <OpeningHours
        label={data.metaData.openingHours.label}
        list={data.metaData.openingHours.list}
      />
    </footer>
  );
};
