import * as React from 'react';

import * as styles from './ScreenReadersOnly.module.css';

const ScreenReadersOnly = ({children}) => (
  <span className={styles.ScreenReadersOnly}>{children}</span>
);

export default ScreenReadersOnly;
