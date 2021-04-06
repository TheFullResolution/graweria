import path from 'path';

const BLOG_PATH = 'public/cms/blog';

export const getBlogPath = () => {
  const projectDir = process.cwd();

  return path.join(projectDir, BLOG_PATH);
};
