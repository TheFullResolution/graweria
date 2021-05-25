import { Menu, MenuButton, MenuLink, MenuList } from '@reach/menu-button';
import '@reach/menu-button/styles.css';
import { FaChevronDown } from '@react-icons/all-files/fa/FaChevronDown';
import { FaChevronUp } from '@react-icons/all-files/fa/FaChevronUp';
import cls from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { PageKeys, SiteData } from '../../data/siteData';
import { MetaData } from '../../types/content';
import { Button } from '../Button/Button';
import styles from './Header.module.scss';

interface Props {
  siteData: SiteData;
  metaData: MetaData;
  currentPage?: PageKeys;
}

const HeaderLink = React.forwardRef<HTMLAnchorElement, { href: string }>(
  function HeaderLinkComponent({ href, children, ...rest }, ref) {
    return (
      <Link href={href} passHref>
        <a {...rest} ref={ref} className={styles.link}>
          {children}
        </a>
      </Link>
    );
  },
);

export const Header: React.FC<Props> = ({
  siteData,
  currentPage,
  metaData,
}) => {
  return (
    <header className={styles.header}>
      <Link href="/" passHref>
        <a className={styles.image}>
          <Image src={siteData.logo} alt={'Banner'} width={130} height={130} />
        </a>
      </Link>
      <nav className={styles.nav}>
        {siteData.menuLinks.map((link) => {
          return (
            <li key={link.name} className={styles.desktopLink}>
              <Link href={link.link} passHref>
                <a
                  className={cls({
                    [styles.active]: link.name === currentPage,
                  })}
                >
                  {metaData.links[link.name]}
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
                  {metaData.links.label}{' '}
                  {isExpanded ? <FaChevronUp /> : <FaChevronDown />}
                </MenuButton>
                <MenuList portal={false}>
                  {siteData.menuLinks.map((link) => {
                    return (
                      <MenuLink
                        key={link.name}
                        as={HeaderLink}
                        href={link.link}
                      >
                        {metaData.links[link.name]}
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
