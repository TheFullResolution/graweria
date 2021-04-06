/* eslint-disable no-console */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const fse = require('fs-extra');

const srcDir = `public/cms/blog`;
const destDir = `src/pages/api/blog`;

// To copy a folder or file
fse.copySync(srcDir, destDir, { overwrite: true });
