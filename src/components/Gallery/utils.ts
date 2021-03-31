import querystring from 'querystring';
import { ParsedUrlQuery } from 'querystring';
import { NextRouter } from 'next/router';
import { Image } from './Gallery';

export function getNavLinks(
  currentImageIndex: number,
  images: Image[],
  params: ParsedUrlQuery = {},
) {
  if (!images) return {};

  const prevIndex =
    currentImageIndex === 0 ? images.length - 1 : currentImageIndex - 1;

  const nextIndex =
    currentImageIndex === images.length - 1 ? 0 : currentImageIndex + 1;

  return {
    nextParams: {
      ...params,
      gallery: images[nextIndex]?.id,
    },
    prevParams: {
      ...params,
      gallery: images[prevIndex]?.id,
    },
  };
}

export function getHrefForImage(
  router: NextRouter,
  params: ParsedUrlQuery = {},
) {
  const query = querystring.stringify({
    ...params,
  });

  const queryParam = query ? `?${query}` : '';
  return `${router.pathname}${queryParam}`;
}
