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
        <h2>
            Nawigacja:
        </h2>
      <ul>
        {data.site.siteMetadata.menuLinks.map((link) => (
          <li key={link.name}>
            <Link to={link.link}>{data.metaData.links[link.name as Keys]}</Link>
          </li>
        ))}
      </ul>
       <div>
        <h2>Adres:</h2>
       </div>
        <div>
            <h2>Kontakt:</h2>
        </div>
    </footer>
  )
}
