import { GetStaticProps } from 'next';
import React from 'react';
import { Page } from '../containers/Page/Page';

interface Props {
  text: string;
}

const HomePage: React.FC<Props> = ({ text }) => {
  return (
    <Page>
      <p>{text}</p>
    </Page>
  );
};

export default HomePage;

export const getStaticProps: GetStaticProps<Props> = async () => {
  return {
    props: {
      text: 'yolo hdfjhdsjfds hdjhdsjdsjfkdsf  sdjhdsfkjfdk',
    },
  };
};
