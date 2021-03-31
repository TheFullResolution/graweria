import { GetStaticProps } from 'next';
import React from 'react';
import { ContactPage } from '../containers/ContactPage/ContactPage';
import { Page } from '../containers/Page/Page';
import { pageKeys, siteData } from '../data/siteData';
import { Contact as ContactData, MetaData } from '../types/content';

interface Props {
  contactData: ContactData;
  metaData: MetaData;
}

const Contact: React.FC<Props> = ({ contactData, metaData }) => {
  return (
    <Page
      metaData={metaData}
      siteData={siteData}
      currentPage={pageKeys.contact}
    >
      <ContactPage contactData={contactData} metaData={metaData} />
    </Page>
  );
};

export default Contact;

export const getStaticProps: GetStaticProps<Props> = async () => {
  const metaData = (await import('../../cms/content/metaData.json'))
    .default as MetaData;
  const contactData = (await import('../../cms/content/contact.json'))
    .default as ContactData;
  return {
    props: {
      contactData,
      metaData,
    },
  };
};
