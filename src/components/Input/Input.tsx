import { ErrorMessage } from '@hookform/error-message';
import React, { forwardRef } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form/dist/types/form';
import styles from './Input.module.scss';

interface Props extends Partial<UseFormRegisterReturn> {
  label: string;
  name: string;
  errors: Record<string, unknown>;
  children?: React.ReactElement;
}

export const Input = forwardRef<HTMLInputElement, Props>(
  ({ name, label, errors, children, ...rest }, ref) => {
    return (
      <label className={styles.container}>
        <span className={styles.labelText}>{label}</span>
        {children ? (
          children
        ) : (
          <input type="text" {...rest} name={name} ref={ref} />
        )}
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
