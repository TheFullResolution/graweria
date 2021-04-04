import dynamic from 'next/dynamic';
import { BlogListProps } from './BlogList';

export const BlogList = dynamic<BlogListProps>(
  () => import('./BlogList').then((module) => module.BlogList),
  { ssr: false },
);
