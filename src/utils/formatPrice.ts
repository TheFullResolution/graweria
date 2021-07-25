export const formatPrice = (
  price: number,
  locale: string,
  currency: string,
) => {
  return price.toLocaleString(locale, {
    style: 'currency',
    currency,
  });
};
