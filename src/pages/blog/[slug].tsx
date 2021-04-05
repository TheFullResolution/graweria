import path from 'path';
import { toDate } from 'date-fns';
import fs from 'fs-extra';
import matter from 'gray-matter';
import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import React from 'react';
import { Loader } from '../../components/Loader/Loader';
import { BlogPage } from '../../containers/BlogPage/BlogPage';
import { Page } from '../../containers/Page/Page';
import { BLOG_PATH } from '../../data/blogConfig';
import { siteData } from '../../data/siteData';
import { BlogEntry } from '../../types/blogEntry';
import { Meta } from '../../types/blogList';
import { Blog, MetaData } from '../../types/content';

interface Params {
  slug: string;
  [key: string]: string;
}

interface Props {
  metaData: MetaData;
  blogData: Blog;
  blogEntry: BlogEntry;
}

const Home: React.FC<Props> = ({ blogEntry, blogData, metaData }) => {
  const router = useRouter();
  if (router.isFallback) {
    return <Loader />;
  }

  return (
    <Page metaData={metaData} siteData={siteData}>
      <BlogPage blogEntry={blogEntry} blogData={blogData} />
    </Page>
  );
};

export default Home;

export const getStaticPaths: GetStaticPaths = async () => {
  return { paths: [], fallback: true };
};

export const getStaticProps: GetStaticProps<Props, Params> = async ({
  params,
}) => {
  const blogData = (await import('../../cms/content/blog.json'))
    .default as Blog;
  const metaData = (await import('../../cms/content/metaData.json'))
    .default as MetaData;

  if (!params) {
    return {
      notFound: true,
    };
  }

  let blogEntry: undefined | matter.GrayMatterFile<string>;
  try {
    const blogFile = fs.readFileSync(
      path.join(BLOG_PATH, params.slug + '.md'),
      'utf8',
    );

    blogEntry = matter(blogFile);
  } catch (e) {
    console.error(e);
  }

  if (!blogEntry) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      blogData,
      metaData,
      blogEntry: {
        content: blogEntry.content,
        metaData: {
          ...(blogEntry.data as Meta),
          startDate: toDate(blogEntry.data.startDate).toISOString(),
          endDate: toDate(blogEntry.data.endDate).toISOString(),
        },
      },
    },
  };
};
