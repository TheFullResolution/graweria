export interface BlogListFilesData {
  meta: ParsedMeta;
  url: string;
  excerpt: string;
}

export interface Meta {
  title: string;
  startDate: Date;
  endDate: Date;
  banner?: string;
}

export interface ParsedMeta extends Omit<Meta, 'startDate' | 'endDate'> {
  startDate: string;
  endDate: string;
}

export interface BlogListApi {
  currentBlogList: BlogListFilesData[];
  zonedDate: string;
}
