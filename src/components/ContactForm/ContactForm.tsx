import Alert from '@reach/alert';
import { FaCheck } from '@react-icons/all-files/fa/FaCheck';
import { FaExclamationTriangle } from '@react-icons/all-files/fa/FaExclamationTriangle';
import cls from 'clsx';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '../Button/Button';
import { Input } from '../Input/Input';
import styles from './ContactForm.module.scss';

interface Props {
  name_label: string;
  name_error: string;
  email_label: string;
  email_error: string;
  message_label: string;
  message_error: string;
  success: string;
  error: string;
  submit: string;
  className?: string;
}

interface FormFields {
  name: string;
  email: string;
  message: string;
}
const fields = {
  name: 'name',
  email: 'email',
  message: 'message',
} as const;

const encode = (data: Record<string, string>) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
};

export const ContactForm: React.FC<Props> = ({
  name_label,
  name_error,
  email_label,
  email_error,
  message_label,
  message_error,
  success,
  error,
  submit,
  className,
}) => {
  const [status, setStatus] =
    useState<'success' | 'error' | 'initial'>('initial');
  const { register, handleSubmit, formState } = useForm<FormFields>({});

  const onSubmit = (data: FormFields) => {
    return fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact-form', ...data }),
    })
      .then(() => {
        setStatus('success');
      })
      .catch((error) => {
        console.warn(error);
        setStatus('error');
      });
  };

  if (status === 'success') {
    return (
      <div className={cls(styles.notification, styles.success)}>
        <FaCheck className={styles.icon} />
        <Alert type="polite">{success}</Alert>
      </div>
    );
  }

  if (status === 'error') {
    return (
      <div className={cls(styles.notification, styles.error)}>
        <FaExclamationTriangle className={styles.icon} />
        <Alert type="assertive">{error}</Alert>
      </div>
    );
  }

  const { isSubmitting } = formState;

  return (
    <form
      name="contact-form"
      data-netlify={true}
      data-netlify-honeypot="check-field"
      onSubmit={handleSubmit(onSubmit)}
      className={cls(styles.form, className)}
    >
      <input name="form-name" type="hidden" />
      <input name="check-field" className={styles.hidden} aria-hidden={true} />
      <fieldset disabled={isSubmitting}>
        <Input
          label={name_label}
          {...register(fields.name, { required: name_error })}
          errors={formState.errors}
        />
        <Input
          label={email_label}
          {...register(fields.email, {
            required: email_error,
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: email_error,
            },
          })}
          errors={formState.errors}
        />
        <Input
          name={fields.message}
          label={message_label}
          errors={formState.errors}
        >
          <textarea
            {...register(fields.message, { required: message_error })}
          />
        </Input>
      </fieldset>
      <div className={styles.action}>
        <Button disabled={isSubmitting} type="submit" version="standard">
          {submit}
        </Button>
      </div>
    </form>
  );
};
