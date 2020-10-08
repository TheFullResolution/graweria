import { graphql } from 'gatsby';
import * as React from 'react';
import { AboutPage } from '../container/AboutPage/AboutPage';
import { Page } from '../container/Page/Page';
import { AboutDataQuery } from '../graphql-types';
import { Languages } from '../utils/languages';

interface Props {
  data: AboutDataQuery;
}

const About: React.FC<Props> = ({ data }) => {
  return (
    <Page currentPage="about" language={Languages.pl}>
      <AboutPage data={data} />
    </Page>
  );
};

export default About;

export const query = graphql`
  query AboutData {
    about {
      title
      description
      videoTitle
      videoSrcURL
      galleryTitle
      ariaLabels {
        closeButton
        nextButton
        prevButton
        galleryModal
      }
      gallery {
        image
        label
      }
    }
  }
`;
