import { graphql } from 'gatsby';
import * as React from 'react';
import { ContactPage } from '../container/ContactPage/ContactPage';
import { Page } from '../container/Page/Page';
import { ContactDataQuery } from '../graphql-types';
import { Languages } from '../utils/languages';

interface Props {
  data: ContactDataQuery;
}

const Contact: React.FC<Props> = ({ data }) => {
  return (
    <Page currentPage="contact" language={Languages.pl}>
      <ContactPage data={data} />
    </Page>
  );
};

export default Contact;

export const query = graphql`
  query ContactData {
    contact {
      title
      description
      formTitle
      form {
        enable
        name_label
        name_error
        email_label
        email_error
        message_label
        message_error
        success
        error
        submit
      }
    }
    metaData {
      contact {
        label
        email
        phone
      }
      address {
        label
        street
        city
        postcode
        mapLink
      }
      openingHours {
        label
        list {
          days
          hours
        }
      }
    }
  }
`;
