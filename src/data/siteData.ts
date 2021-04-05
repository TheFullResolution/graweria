export type SiteData = typeof siteData;

export const pageKeys = {
  home: 'home',
  contact: 'contact',
  craft: 'craft',
  shop: 'shop',
} as const;

export type PageKeys = typeof pageKeys[keyof typeof pageKeys];

export const siteData = {
  menuLinks: [
    {
      name: pageKeys.home,
      link: '/',
    },
    {
      name: pageKeys.craft,
      link: '/craft',
    },
    {
      name: pageKeys.shop,
      link: '/shop',
    },
    {
      name: pageKeys.contact,
      link: '/contact',
    },
  ],
  logo: '/images/uploads/banner.png',
} as const;
