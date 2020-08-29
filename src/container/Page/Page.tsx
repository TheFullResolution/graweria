import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import { Header } from '../../components/Header/Header'
import { MetaDataQuery } from '../../graphql-types'
import * as styles from './Page.module.scss'

interface Props {
    currentPage: 'home' | 'contact' | 'products'
}

export const Page: React.FC<Props> = ({ children }) => {
  const data = useStaticQuery<MetaDataQuery>(graphql`
    query MetaData {
      site {
        siteMetadata {
          menuLinks {
            name
            link
          }
        }
      }
      metaData {
        title
        description
        banner
        links {
          home
          contact
          products
        }
      }
    }
  `)

  return (
    <div className={styles.container}>
      <Header data={data} />
      {children}
    </div>
  )
}
