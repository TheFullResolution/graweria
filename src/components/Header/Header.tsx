import { Link } from 'gatsby'
import React from 'react'
import { MetaDataQuery } from '../../graphql-types'
import { ResponsiveImg } from '../ResponsiveImg/ResponsiveImg'
import * as styles from './Header.module.scss'

interface Props {
  data: MetaDataQuery
}

type Keys = keyof MetaDataQuery['metaData']['links']

export const Header: React.FC<Props> = ({ data }) => {
  return (
    <header className={styles.header}>
      <ResponsiveImg image={data.metaData.banner} alt={'Banner'} className={styles.image} imgStyle={{objectFit: 'contain'}} />
      <nav>
        {data.site.siteMetadata.menuLinks.map((link) => (
          <li key={link.name}>
            <Link to={link.link}>{data.metaData.links[link.name as Keys]}</Link>
          </li>
        ))}
      </nav>
    </header>
  )
}
