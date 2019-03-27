import React, { useCallback, useState } from 'react';
import { Link } from 'gatsby';

import { ScreenReadersOnly } from 'components';

import * as styles from './Navigation.module.css';

interface NavLinks {
  name: string;
  link: string;
}

interface Props {
  navLinks?: NavLinks[];
}

export default ({ navLinks }: Props) => {
  const [expanded, setExpanded] = useState(false);

  if (typeof document !== 'undefined') {
    document.body.classList.toggle('has-overlay', expanded);
  }

  return (
    <nav className={styles.Navigation} role="navigation">
      <input
        className={styles.Trigger}
        type="checkbox"
        id="mainNavButton"
        tabIndex={-1}
        checked={expanded}
        onChange={() => setExpanded(!expanded)}
      />
      <label htmlFor="mainNavButton">
        <ScreenReadersOnly>Menu</ScreenReadersOnly>
        <div className={styles.Hamburger}>
          <span />
          <span />
          <span />
        </div>
      </label>
      <ul className={styles.Menu}>
        {navLinks.map(link => (
          <li key={link.name}>
            <Link to={link.link}>{link.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
