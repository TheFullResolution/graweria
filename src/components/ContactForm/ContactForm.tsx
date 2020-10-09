import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Alert from '@reach/alert';
import { FaCheck, FaExclamationTriangle } from 'react-icons/all';
import cls from 'classnames';
import { Button } from '../Button/Button';
import { Input } from '../Input/Input';
import * as styles from './ContactForm.module.scss';

interface Props {
  name_label: string;
  name_error: string;
  email_label: string;
  email_error: string;
  message_label: string;
  message_error: string;
  success: string;
  error: string;
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
}) => {
  const [status, setStatus] = useState<'success' | 'error' | 'initial'>(
    'initial',
  );
  const { register, handleSubmit, errors, formState } = useForm<FormFields>({
    mode: 'onBlur',
  });

  const onSubmit = async (data: FormFields) => {
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact-form', ...data }),
    })
      .then(() => {
        setStatus('success');
      })
      .catch(() => {
        alert('Error');
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

  const { isDirty, isSubmitting, isValid } = formState;

  return (
    <form
      name="contact-form"
      data-netlify={true}
      data-netlify-honeypot="bot-field"
      onSubmit={handleSubmit(onSubmit)}
      className={styles.form}
    >
      <input name="form-name" type="hidden" />
      <input name="bot-field" className={styles.hidden} aria-hidden={true} />
      <Input
        name={fields.name}
        label={name_label}
        ref={register({ required: name_error })}
        errors={errors}
      />
      <Input
        label={email_label}
        name={fields.email}
        ref={register({
          required: email_error,
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: email_error,
          },
        })}
        errors={errors}
      />
      <Input name={fields.message} label={message_label} errors={errors}>
        <textarea
          name={fields.message}
          ref={register({ required: message_error })}
        />
      </Input>
      <div className={styles.action}>
        <Button
          disabled={isDirty && (!isValid || isSubmitting)}
          type="submit"
          version="standard"
        >
          Submit
        </Button>
      </div>
    </form>
  );
};
