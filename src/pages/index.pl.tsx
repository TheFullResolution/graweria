import * as React from 'react';
import { graphql } from 'gatsby';
import { HomePage } from '../container/HomePage/HomePage';
import { Page } from '../container/Page/Page';
import { HomeDataQuery } from '../graphql-types';
import { Languages } from '../utils/languages';

interface Props {
  data: HomeDataQuery;
}

const Home: React.FC<Props> = ({ data }) => {
  return (
    <Page currentPage="home" language={Languages.pl}>
      <HomePage data={data} />
    </Page>
  );
};

export default Home;

export const query = graphql`
  query HomeData {
    page: home {
      title
      subtitle
      sidePicture
      description
      readmore
    }
    blogDefaults: blog {
      default_pic
    }
    blogList: allMarkdownRemark(
      sort: { fields: [frontmatter___startDate], order: DESC }
      filter: { frontmatter: { contentKey: { eq: "blog" } } }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            date: startDate(formatString: "D MMMM, YYYY", locale: "pl")
            banner
            startDate
            endDate
          }
          fields {
            slug
          }
          excerpt(format: MARKDOWN, pruneLength: 280)
        }
      }
    }
  }
`;
