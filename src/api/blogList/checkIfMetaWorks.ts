import type { Meta } from '../../types/blogList';

export function checkIfMetaWorks(data: unknown): data is Meta {
  return typeof data === 'object' && (data as Meta)?.title !== undefined;
}
