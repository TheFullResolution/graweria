import { Menu, MenuButton, MenuLink, MenuList } from '@reach/menu-button';
import cls from 'classnames';
import Link from 'next/link';
import React from 'react';
import { SiteData } from '../../data/siteData';
import { Button } from '../Button/Button';
import '@reach/menu-button/styles.css';
import { PageImage } from '../PageImage/PageImage';
import styles from './Header.module.scss';

interface Props {
  data: SiteData;
  currentPage: string;
}

export const Header: React.FC<Props> = ({ data, currentPage }) => {
  return (
    <header className={styles.header}>
      <Link href="/">
        <PageImage
          src={data.logo}
          alt={'Banner'}
          className={styles.image}
          ratioWidth={4}
          ratioHeight={3}
        />
      </Link>
      <nav className={styles.nav}>
        {data.menuLinks.map((link) => {
          return (
            <li key={link.name} className={styles.desktopLink}>
              <Link href={link.link} passHref>
                <a
                  className={cls({
                    [styles.active]: link.name === currentPage,
                  })}
                >
                  {data.menuLinks[link.name as any]}
                </a>
              </Link>
            </li>
          );
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
                        href={link.link}
                        passHref
                      >
                        {data.metaData.links[link.name as Keys]}
                      </MenuLink>
                    );
                  })}
                </MenuList>
              </>
            )}
          </Menu>
        </div>
      </nav>
    </header>
  );
};
