import { Link } from 'gatsby'
import React from 'react'
import { Menu, MenuButton, MenuLink, MenuList } from '@reach/menu-button'
import cls from 'classnames'
import { FaChevronDown, FaChevronUp } from 'react-icons/all'
import { Keys, PageKeys } from '../../container/Page/Page'
import { MetaDataQuery } from '../../graphql-types'
import { Button } from '../Button/Button'
import { ResponsiveImg } from '../ResponsiveImg/ResponsiveImg'
import '@reach/menu-button/styles.css'
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
      <nav className={styles.nav}>
        {data.site.siteMetadata.menuLinks.map((link) => {
          return (
            <li key={link.name} className={styles.desktopLink}>
              <Link
                to={link.link}
                className={cls({ [styles.active]: link.name === currentPage })}
              >
                {data.metaData.links[link.name as Keys]}
              </Link>
            </li>
          )
        })}
        <div className={styles.mobileWrapper}>
          <Menu>
            {({ isExpanded }) => (
              <>
                <MenuButton
                  as={Button}
                  className={styles.menuButton}
                  version="standard"
                >
                  {data.metaData.links.label}{' '}
                  {isExpanded ? <FaChevronUp /> : <FaChevronDown />}
                </MenuButton>
                <MenuList portal={false}>
                  {data.site.siteMetadata.menuLinks.map((link) => {
                    return (
                      <MenuLink
                        key={link.name}
                        as={Link}
                        to={link.link}
                        className={cls({
                          [styles.active]: link.name === currentPage,
                        })}
                      >
                        {data.metaData.links[link.name as Keys]}
                      </MenuLink>
                    )
                  })}
                </MenuList>
              </>
            )}
          </Menu>
        </div>
      </nav>
    </header>
  )
}
