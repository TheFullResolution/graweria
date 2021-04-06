import format from 'date-fns/format';
import pl from 'date-fns/locale/pl';

export function formatDate(date: Date, formatStr = 'PPP') {
  return format(date, formatStr, {
    locale: pl, // or global.__localeId__
  });
}
