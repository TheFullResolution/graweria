import { utcToZonedTime } from 'date-fns-tz';
import type { NextApiRequest, NextApiResponse } from 'next';
import { readBlogFolder } from '../../api/blogList/readBlogFolder';
import { BlogListApi } from '../../types/blogList';

const TIME_ZONE = 'Europe/Berlin';

export default function blogList(
  _req: NextApiRequest,
  res: NextApiResponse<BlogListApi>,
) {
  const today = new Date().toISOString();

  const zonedDate = utcToZonedTime(today, TIME_ZONE);

  const currentBlogList = readBlogFolder().filter((entry) => {
    return new Date(entry.meta.endDate) > zonedDate;
  });

  res
    .status(200)
    .json({ currentBlogList, zonedDate: zonedDate.toLocaleString('pl-PL') });
}
