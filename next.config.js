/* eslint-disable @typescript-eslint/no-var-requires,import/order */
const path = require('path');

module.exports = {
  target: 'serverless',
  webpack5: true,
  sassOptions: {
    //LOOK OUT FOR THAT SHIT - CHANGES NAMES DEPENDS ON RELEASE (NEXTJS uses prependData, sass loader uses additionalData)
    prependData: '@import "src/styles";',
    includePaths: [path.join(__dirname, 'src/styles')],
  },
  async headers() {
    return [
      {
        source: '/:all*(svg|jpg|png|JPG)',
        locale: false,
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31540000, must-revalidate',
          },
        ],
      },
    ];
  },
  webpack: (config, { dev, isServer }) => {
    if (dev && isServer) {
      const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
      config.plugins.push(
        new ForkTsCheckerWebpackPlugin({
          eslint: {
            files: './src/**/*.{ts,tsx,js,jsx}',
          },
        }),
      );
    }

    return config;
  },
};
