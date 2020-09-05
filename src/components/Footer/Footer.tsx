import { Link } from 'gatsby'
import React from 'react'
import { Keys } from '../../container/Page/Page'
import { MetaDataQuery } from '../../graphql-types'
import * as styles from './Footer.module.scss'

interface Props {
  data: MetaDataQuery
}

export const Footer: React.FC<Props> = ({ data }) => {
  return (
    <footer className={styles.footer}>
      <div>
        <h2 className={styles.footerTitle}>{data.metaData.links.label}</h2>
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
      <div>
        <h2 className={styles.footerTitle}>{data.metaData.address.label}</h2>
        <p>
          {data.metaData.address.street}, {data.metaData.address.city}{' '}
          {data.metaData.address.postcode}
        </p>
        <h2 className={styles.footerTitle}>{data.metaData.contact.label}</h2>
        <ul>
          <li>
            <a href={`tel:${data.metaData.contact.phone}`}>
              {data.metaData.contact.phone}
            </a>
          </li>
          <li>
            <a href={`mailto:${data.metaData.contact.email}`}>
              {data.metaData.contact.email}
            </a>
          </li>
        </ul>
      </div>
      <div>
        <h2 className={styles.footerTitle}>{data.metaData.openingHours.label}</h2>
        <ul>
          {data.metaData.openingHours.list.map((entry, index) => (
            <li key={index} className={styles.openings}>
              <span>{entry.days}</span>
              <span>{entry.hours}</span>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  )
}
