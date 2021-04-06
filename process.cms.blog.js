/* eslint-disable @typescript-eslint/no-var-requires, no-console */
const path = require('path');
const { toDate } = require('date-fns');
const ellipsize = require('ellipsize');
const fs = require('fs-extra');
const matter = require('gray-matter');

const projectDir = process.cwd();

const BLOG_PATH = path.join(projectDir, 'public/cms/blog');
const API_PATH_FILE = path.join(projectDir, 'src/pages/api/blog.json');

// To copy a folder or file
function checkIfMetaWorks(data) {
  return typeof data === 'object' && data.title !== undefined;
}

function firstFourLines(file) {
  file.excerpt = ellipsize(file.content, 100);
}

function readBlogFolder() {
  const items = fs.readdirSync(BLOG_PATH);

  const currentBlogList = [];

  for (let i = 0; i < items.length; i++) {
    const filePath = path.join(BLOG_PATH, items[i]);

    const { ext } = path.parse(filePath);
    // Only process markdown/mdx files that are not index.tsx pages
    if (ext.startsWith('.md') && ext !== 'index') {
      try {
        const file = fs.readFileSync(filePath, 'utf8');

        const { data, excerpt } = matter(file, {
          excerpt: firstFourLines,
        });
        if (!checkIfMetaWorks(data)) {
          throw Error(`Meta is not correct ${JSON.stringify(data, null, 2)}`);
        }

        currentBlogList.push({
          meta: {
            ...data,
            startDate: toDate(data.startDate).toISOString(),
            endDate: toDate(data.endDate).toISOString(),
          },
          excerpt: excerpt || '',
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

fs.writeJsonSync(API_PATH_FILE, blogData);
