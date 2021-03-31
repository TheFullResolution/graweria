export type SiteData = typeof siteData;

export const pageKeys = {
  home: 'home',
  contact: 'contact',
  offer: 'offer',
  about: 'about',
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
    {
      name: pageKeys.about,
      link: '/about',
    },
  ],
  logo: '/images/uploads/banner.png',
} as const;
