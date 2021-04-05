import dynamic from 'next/dynamic';
import { BlogListProps } from './BlogList';

export const BlogList = dynamic<BlogListProps>(
  () => import('./BlogList').then((module) => module.BlogList),
  // eslint-disable-next-line react/display-name
  { ssr: false },
);
