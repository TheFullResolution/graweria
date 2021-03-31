export type SiteData = typeof siteData;

export const pageKeys = {
  home: 'home',
  contact: 'contact',
  offer: 'offer',
} as const;

export type PageKeys = typeof pageKeys[keyof typeof pageKeys];

export const siteData = {
  menuLinks: [
    {
      name: pageKeys.home,
      link: '/',
    },
    {
      name: pageKeys.contact,
      link: '/contact',
    },
    {
      name: pageKeys.offer,
      link: '/offer',
    },
  ],
  logo: '/images/uploads/banner.png',
} as const;
