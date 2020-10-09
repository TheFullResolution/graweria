import { ErrorMessage } from '@hookform/error-message';
import React, { forwardRef } from 'react';
import * as styles from './Input.module.scss';

interface Props {
  label: string;
  name: string;
  errors: Record<string, unknown>;
  children?: React.ReactElement;
}

export const Input = forwardRef<HTMLInputElement, Props>(
  ({ name, label, errors, children }, ref) => {
    return (
      <label className={styles.container}>
        <span className={styles.labelText}>{label}</span>
        {children ? children : <input type="text" name={name} ref={ref} />}
        <ErrorMessage
          errors={errors}
          name={name}
          render={({ message }) => (
            <span className={styles.message}>{message}</span>
          )}
        />
      </label>
    );
  },
);

Input.displayName = 'Input';
