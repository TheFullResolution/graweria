import React, { forwardRef } from 'react';
import styles from './BreakLine.module.scss';

export const BreakLine = forwardRef<HTMLDivElement>((_props, ref) => {
  return <div className={styles.breakline} ref={ref} />;
});

BreakLine.displayName = 'BreakLine';
