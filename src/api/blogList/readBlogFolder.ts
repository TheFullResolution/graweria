import path from 'path';
import { toDate } from 'date-fns';
import ellipsize from 'ellipsize';
import fs from 'fs-extra';
import matter from 'gray-matter';
import { getBlogPath } from '../../data/blogConfig';
import { BlogListFilesData, Meta } from '../../types/blogList';
import { checkIfMetaWorks } from './checkIfMetaWorks';

function firstFourLines(file: matter.GrayMatterFile<string>) {
  file.excerpt = ellipsize(file.content, 100);
}

export function readBlogFolder() {
  const BLOG_PATH = getBlogPath();

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
