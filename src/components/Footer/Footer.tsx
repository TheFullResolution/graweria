import Link from 'next/link';
import React from 'react';
import { SiteData } from '../../data/siteData';
import { MetaData } from '../../types/content';
import { AddressContact } from '../AddressContact/AddressContact';
import { OpeningHours } from '../OpeningHourse/OpeningHours';
import styles from './Footer.module.scss';

interface Props {
  metaData: MetaData;
  siteData: SiteData;
}

export const Footer: React.FC<Props> = ({ metaData, siteData }) => {
  return (
    <footer className={styles.footer}>
      <div className={styles.links}>
        <h2>{metaData.links.label}</h2>
        <ul>
          {siteData.menuLinks.map((link) => (
            <li key={link.name}>
              <Link href={link.link} passHref>
                {metaData.links[link.name]}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <AddressContact address={metaData.address} contact={metaData.contact} />
      <OpeningHours
        label={metaData.openingHours.label}
        list={metaData.openingHours.list}
      />
    </footer>
  );
};
