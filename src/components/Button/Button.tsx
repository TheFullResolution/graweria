import React, { forwardRef } from 'react';
import cls from 'classnames';
import * as styles from './Button.module.scss';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  version?: 'standard';
}

export const Button = forwardRef<HTMLButtonElement, Props>(
  ({ children, version, className, type = 'button', ...rest }, ref) => {
    const styleClass = version && styles[version];

    return (
      <button
        {...rest}
        ref={ref}
        type={type}
        className={cls(className, styles.button, styleClass)}
      >
        {children}
      </button>
    );
  },
);

Button.displayName = 'Button';
