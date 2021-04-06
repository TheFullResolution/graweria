import path from 'path';
import { toDate } from 'date-fns';
import { utcToZonedTime } from 'date-fns-tz';
import ellipsize from 'ellipsize';
import fs from 'fs-extra';
import matter from 'gray-matter';
import type { NextApiRequest, NextApiResponse } from 'next';
import { BlogListApi, BlogListFilesData, Meta } from '../../types/blogList';

const TIME_ZONE = 'Europe/Berlin';
const BLOG_PATH =
  process.env.NODE_ENV === 'development'
    ? path.resolve(process.cwd() + '/public/cms/blog')
    : path.resolve(process.cwd() + '/blog');

console.log(BLOG_PATH);

function checkIfMetaWorks(data: unknown): data is Meta {
  return typeof data === 'object' && (data as Meta)?.title !== undefined;
}

function firstFourLines(file: matter.GrayMatterFile<string>) {
  file.excerpt = ellipsize(file.content, 100);
}

function readBlogFolder() {
  const items = fs.readdirSync(BLOG_PATH);

  const currentBlogList: BlogListFilesData[] = [];

  for (let i = 0; i < items.length; i++) {
    const filePath = path.join(BLOG_PATH, items[i]);

    const { ext } = path.parse(filePath);
    // Only process markdown/mdx files that are not index.tsx pages
    if (ext.startsWith('.md') && ext !== 'index') {
      try {
        const file = fs.readFileSync(filePath, 'utf8');

        const { data, excerpt } = matter(file, {
          excerpt: firstFourLines as never,
        });
        if (!checkIfMetaWorks(data)) {
          throw Error(`Meta is not correct ${JSON.stringify(data, null, 2)}`);
        }

        currentBlogList.push({
          meta: {
            ...(data as Meta),
            startDate: toDate(data.startDate).toISOString(),
            endDate: toDate(data.endDate).toISOString(),
          },
          excerpt: excerpt ?? '',
          url: filePath
            .replace(BLOG_PATH, '/blog')
            .replace(/.mdx?$/, '')
            .replace(/.tsx?$/, ''),
        });
      } catch (e) {
        console.log(`Error reading frontmatter of ${filePath}`, e);
      }
    }
  }

  return currentBlogList;
}

const blogData = readBlogFolder();

export default function blogList(
  _req: NextApiRequest,
  res: NextApiResponse<BlogListApi>,
) {
  const today = new Date().toISOString();

  const zonedDate = utcToZonedTime(today, TIME_ZONE);

  const currentBlogList = blogData.filter((entry) => {
    return new Date(entry.meta.endDate) > zonedDate;
  });

  res
    .status(200)
    .json({ currentBlogList, zonedDate: zonedDate.toLocaleString('pl-PL') });
}
