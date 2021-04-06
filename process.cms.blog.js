/* eslint-disable @typescript-eslint/no-var-requires, no-console */
const path = require('path');
const { toDate } = require('date-fns');
const ellipsize = require('ellipsize');
const fs = require('fs-extra');
const matter = require('gray-matter');
const logSymbols = require('log-symbols');

const projectDir = process.cwd();

const BLOG_PATH = path.join(projectDir, 'public/cms/blog');
const API_PATH_FILE = path.join(projectDir, 'src/pages/api/blog.json');
const PAGE_PATH_FILE = path.join(projectDir, 'src/pages/blog/blog-urls.json');

// To copy a folder or file
function checkIfMetaWorks(data) {
  return typeof data === 'object' && data.title !== undefined;
}

function firstFourLines(file) {
  file.excerpt = ellipsize(file.content, 100);
}

function readBlogFolder({ onlyUrl = false }) {
  const items = fs.readdirSync(BLOG_PATH);

  const currentBlogList = [];

  for (let i = 0; i < items.length; i++) {
    const filePath = path.join(BLOG_PATH, items[i]);

    const { ext } = path.parse(filePath);
    // Only process markdown/md files that are not index pages
    if (ext.startsWith('.md') && ext !== 'index') {
      if (onlyUrl) {
        currentBlogList.push({
          url: filePath
            .replace(BLOG_PATH, '/blog')
            .replace(/.mdx?$/, '')
            .replace(/.tsx?$/, ''),
        });
      } else {
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
  }

  return currentBlogList;
}

try {
  console.log('\n\n\n', logSymbols.info, 'process.cms.blog started');
  // Generate JSON file for API
  fs.writeJsonSync(API_PATH_FILE, readBlogFolder({}));
  // Generate JSON file for Blog Page
  fs.writeJsonSync(PAGE_PATH_FILE, readBlogFolder({ onlyUrl: true }));

  console.log(
    '\n',
    logSymbols.success,
    'successful processing of blog json files',
  );
} catch (e) {
  console.log('\n', logSymbols.error, 'error processing blog json files', e);
} finally {
  console.log('\n', logSymbols.info, 'process.cms.blog finished\n\n\n\n');
}
