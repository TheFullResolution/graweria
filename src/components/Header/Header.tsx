import { Link } from 'gatsby'
import React from 'react'
import cls from 'classnames'
import { Keys, PageKeys } from '../../container/Page/Page'
import { MetaDataQuery } from '../../graphql-types'
import { ResponsiveImg } from '../ResponsiveImg/ResponsiveImg'
import * as styles from './Header.module.scss'

interface Props {
  data: MetaDataQuery
  currentPage: PageKeys
}

export const Header: React.FC<Props> = ({ data, currentPage }) => {
  return (
    <header className={styles.header}>
      <Link to="/">
        <ResponsiveImg
          image={data.metaData.banner}
          alt={'Banner'}
          className={styles.image}
          imgStyle={{ objectFit: 'contain' }}
        />
      </Link>
      <nav>
        {data.site.siteMetadata.menuLinks.map((link) => {
          return (
            <li key={link.name}>
              <Link
                to={link.link}
                className={cls({ [styles.active]: link.name === currentPage })}
              >
                {data.metaData.links[link.name as Keys]}
              </Link>
            </li>
          )
        })}
      </nav>
    </header>
  )
}
