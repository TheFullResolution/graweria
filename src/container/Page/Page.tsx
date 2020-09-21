import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import { Footer } from '../../components/Footer/Footer'
import { Header } from '../../components/Header/Header'
import { MetaTags } from '../../components/MetaTags/MetaTags'
import { MetaDataQuery } from '../../graphql-types'
import { Languages } from '../../utils/languages'
import * as styles from './Page.module.scss'

export type Keys = keyof MetaDataQuery['metaData']['links']
export type PageKeys = Keys | 'blog' | 'notfound'

interface Props {
  currentPage: PageKeys
  language: Languages
}

export const Page: React.FC<Props> = ({ children, currentPage , language}) => {
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
          about
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
    <>
      <MetaTags data={data} language={language} />
      <div className={styles.container}>
        <Header data={data} currentPage={currentPage} />
        <main>{children}</main>
        <Footer data={data} />
      </div>
    </>
  )
}
