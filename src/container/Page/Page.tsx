import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import { Footer } from '../../components/Footer/Footer'
import { Header } from '../../components/Header/Header'
import { MetaDataQuery } from '../../graphql-types'
import * as styles from './Page.module.scss'

interface Props {
  currentPage: 'home' | 'contact' | 'products' | 'blog'
}

export type Keys = keyof MetaDataQuery['metaData']['links']

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
          label
          home
          contact
          products
        }
        contact {
          label
          email
          phone
        }
        address {
          label
          street
          city
          postcode
        }
        openingHours {
          label
          list {
            days
            hours
          }
        }
      }
    }
  `)

  return (
    <div className={styles.container}>
      <Header data={data} />
      <main>{children}</main>
      <Footer data={data} />
    </div>
  )
}
