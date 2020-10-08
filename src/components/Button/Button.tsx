/* eslint-disable @typescript-eslint/no-explicit-any */
import cls from 'classnames';
import React, { forwardRef } from 'react';
import * as styles from './Button.module.scss';

interface ButtonInjectedProps {
  className: string;
}

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  version?: 'standard' | 'icon';
  render?: (props: ButtonInjectedProps) => JSX.Element;
}

export const Button = forwardRef<HTMLButtonElement, Props>(
  ({ children, version, className, type = 'button', render, ...rest }, ref) => {
    const buttonClassStyle = cls(
      className,
      styles.button,
      version && styles[version],
    );

    if (render) {
      return render({ className: buttonClassStyle });
    }

    return (
      <button {...rest} ref={ref} type={type} className={buttonClassStyle}>
        {children}
      </button>
    );
  },
);

Button.displayName = 'Button';
