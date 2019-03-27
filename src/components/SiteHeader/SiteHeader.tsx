import { Link } from 'gatsby';
import * as React from 'react';
import Headroom from 'react-headroom';

import { ScreenReadersOnly } from 'components';
import Navigation from './Navigation';
import * as styles from './SiteHeader.module.css';
import logo from '../../assets/images/logos/logo.svg';
import logoText from '../../assets/images/logos/logo-text.svg';

interface NavLinks {
  name: string;
  link: string;
}

interface Props {
  navLinks?: NavLinks[];
  siteTitle?: string;
}

export default ({ navLinks, siteTitle = '' }: Props) => (
  <Headroom>
    <header className={styles.Header} role="header">
      <h1 className={styles.Logo}>
        <Link to="/">
          <img className={styles.LogoImage} src={logo} alt="Logo" />
          <img
            className={styles.LogoText}
            src={logoText}
            alt="Logo"
            aria-hidden="true"
          />
          <ScreenReadersOnly>{siteTitle}</ScreenReadersOnly>
        </Link>
      </h1>
      <div className={styles.Navigation}>
        <Navigation navLinks={navLinks} />
      </div>
    </header>
  </Headroom>
);
