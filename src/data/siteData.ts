export type SiteData = typeof siteData;

export const siteData = {
  menuLinks: [
    {
      name: 'home',
      link: '/',
    },
    {
      name: 'blog',
      link: '/blog',
    },
    {
      name: 'resume',
      link: '/resume',
    },
  ],
  logo: '/images/uploads/banner.png',
} as const;
