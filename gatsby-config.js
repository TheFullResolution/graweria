// eslint-disable-next-line @typescript-eslint/no-var-requires
const { resolve } = require('path');

const SITE_METADATA = {
  menuLinks: [
    {
      name: 'home',
      link: '/',
    },
    {
      name: 'contact',
      link: '/contact',
    },
    {
      name: 'offer',
      link: '/offer',
    },
    {
      name: 'about',
      link: '/about',
    },
  ],
};

module.exports = {
  siteMetadata: SITE_METADATA,
  plugins: [
    `gatsby-plugin-typescript`,
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        implementation: require('sass'),
        data: '@import "./index";',
        includePaths: [__dirname, './src/styling'],
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: `gatsby-plugin-eslint`,
      options: {
        test: /\.js$|\.jsx$|\.ts$|\.tsx$/,
        exclude: /(node_modules|.cache|public)/,
        stages: [`develop`],
        options: {
          emitWarning: true,
          failOnError: false,
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/static/images`,
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/cms/content`,
      },
    },
    {
      resolve: `gatsby-transformer-json`,
      options: {
        typeName: ({ node }) => node.name,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'blog',
        path: 'cms/blog',
      },
    },

    {
      resolve: `gatsby-transformer-remark`,
      options: {},
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: 'gatsby-plugin-netlify-cms',
      options: {
        modulePath: resolve('src/cms/index.tsx'),
        htmlTitle: 'Graweria | Admin',
        htmlFavicon: `static/favicon.ico`,
      },
    },
    {
      resolve: 'gatsby-plugin-i18n',
      options: {
        langKeyDefault: 'pl',
        useLangKeyLayout: false,
        prefixDefault: false,
      },
    },
    {
      resolve: `gatsby-plugin-webpack-bundle-analyser-v2`,
      options: {
        analyzerMode: `static`,

      },
    },
  ],
};
