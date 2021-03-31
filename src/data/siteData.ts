export type SiteData = typeof siteData;

export const siteData = {
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
  logo: '/images/uploads/banner.png',
} as const;
