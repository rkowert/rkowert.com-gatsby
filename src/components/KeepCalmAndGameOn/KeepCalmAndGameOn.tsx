import * as React from 'react';

import bgImage from './images/keepcalm.png';
import bulletImage from './images/kcago-bullet.png';
import shipImage from './images/kcago-ship.png';

import * as styles from './KeepCalmAndGameOn.module.css';

export default function KeepCalmAndGameOn() {
  return (
    <div className={styles.KeepCalmAndGameOn}>
      <img className="kcago-bg" src={bgImage} alt="Keep Calm and Game On" />
      <img className={styles.Ship} src={shipImage} />
      <img className={styles.Bullet} src={bulletImage} />
    </div>
  );
}
