import React, { forwardRef } from 'react';
import * as styles from './BreakLine.module.scss';

export const BreakLine = forwardRef<HTMLDivElement>((props, ref) => {
  return <div className={styles.breakline} ref={ref} />;
});

BreakLine.displayName = 'BreakLine';
