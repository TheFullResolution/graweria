export type Maybe<T> = T;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date string, such as 2007-12-03, compliant with the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
};

export type About = Node & {
  __typename?: 'about';
  id: Scalars['ID'];
  parent: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  title: Maybe<Scalars['String']>;
  description: Maybe<Scalars['String']>;
  videoTitle: Maybe<Scalars['String']>;
  videoSrcURL: Maybe<Scalars['String']>;
  gallery: Maybe<Array<Maybe<AboutGallery>>>;
  galleryTitle: Maybe<Scalars['String']>;
  ariaLabels: Maybe<AboutAriaLabels>;
  pictureLabel: Maybe<Scalars['String']>;
};

export type AboutAriaLabels = {
  __typename?: 'aboutAriaLabels';
  closeButton: Maybe<Scalars['String']>;
  nextButton: Maybe<Scalars['String']>;
  prevButton: Maybe<Scalars['String']>;
  galleryModal: Maybe<Scalars['String']>;
};

export type AboutAriaLabelsFilterInput = {
  closeButton: Maybe<StringQueryOperatorInput>;
  nextButton: Maybe<StringQueryOperatorInput>;
  prevButton: Maybe<StringQueryOperatorInput>;
  galleryModal: Maybe<StringQueryOperatorInput>;
};

export type AboutConnection = {
  __typename?: 'aboutConnection';
  totalCount: Scalars['Int'];
  edges: Array<AboutEdge>;
  nodes: Array<About>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<AboutGroupConnection>;
};


export type AboutConnectionDistinctArgs = {
  field: AboutFieldsEnum;
};


export type AboutConnectionGroupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: AboutFieldsEnum;
};

export type AboutEdge = {
  __typename?: 'aboutEdge';
  next: Maybe<About>;
  node: About;
  previous: Maybe<About>;
};

export enum AboutFieldsEnum {
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  Title = 'title',
  Description = 'description',
  VideoTitle = 'videoTitle',
  VideoSrcUrl = 'videoSrcURL',
  Gallery = 'gallery',
  GalleryImage = 'gallery___image',
  GalleryId = 'gallery___id',
  GalleryTitle = 'galleryTitle',
  AriaLabelsCloseButton = 'ariaLabels___closeButton',
  AriaLabelsNextButton = 'ariaLabels___nextButton',
  AriaLabelsPrevButton = 'ariaLabels___prevButton',
  AriaLabelsGalleryModal = 'ariaLabels___galleryModal',
  PictureLabel = 'pictureLabel'
}

export type AboutFilterInput = {
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
  title: Maybe<StringQueryOperatorInput>;
  description: Maybe<StringQueryOperatorInput>;
  videoTitle: Maybe<StringQueryOperatorInput>;
  videoSrcURL: Maybe<StringQueryOperatorInput>;
  gallery: Maybe<AboutGalleryFilterListInput>;
  galleryTitle: Maybe<StringQueryOperatorInput>;
  ariaLabels: Maybe<AboutAriaLabelsFilterInput>;
  pictureLabel: Maybe<StringQueryOperatorInput>;
};

export type AboutGallery = {
  __typename?: 'aboutGallery';
  image: Maybe<Scalars['String']>;
  id: Maybe<Scalars['String']>;
};

export type AboutGalleryFilterInput = {
  image: Maybe<StringQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
};

export type AboutGalleryFilterListInput = {
  elemMatch: Maybe<AboutGalleryFilterInput>;
};

export type AboutGroupConnection = {
  __typename?: 'aboutGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<AboutEdge>;
  nodes: Array<About>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue: Maybe<Scalars['String']>;
};

export type AboutSortInput = {
  fields: Maybe<Array<Maybe<AboutFieldsEnum>>>;
  order: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type Blog = Node & {
  __typename?: 'blog';
  id: Scalars['ID'];
  parent: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  return: Maybe<Scalars['String']>;
  default_pic: Maybe<Scalars['String']>;
  expireLabel: Maybe<Scalars['String']>;
  dateLabel: Maybe<Scalars['String']>;
};

export type BlogConnection = {
  __typename?: 'blogConnection';
  totalCount: Scalars['Int'];
  edges: Array<BlogEdge>;
  nodes: Array<Blog>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<BlogGroupConnection>;
};


export type BlogConnectionDistinctArgs = {
  field: BlogFieldsEnum;
};


export type BlogConnectionGroupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: BlogFieldsEnum;
};

export type BlogEdge = {
  __typename?: 'blogEdge';
  next: Maybe<Blog>;
  node: Blog;
  previous: Maybe<Blog>;
};

export enum BlogFieldsEnum {
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  Return = 'return',
  DefaultPic = 'default_pic',
  ExpireLabel = 'expireLabel',
  DateLabel = 'dateLabel'
}

export type BlogFilterInput = {
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
  return: Maybe<StringQueryOperatorInput>;
  default_pic: Maybe<StringQueryOperatorInput>;
  expireLabel: Maybe<StringQueryOperatorInput>;
  dateLabel: Maybe<StringQueryOperatorInput>;
};

export type BlogGroupConnection = {
  __typename?: 'blogGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<BlogEdge>;
  nodes: Array<Blog>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue: Maybe<Scalars['String']>;
};

export type BlogSortInput = {
  fields: Maybe<Array<Maybe<BlogFieldsEnum>>>;
  order: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type BlurredOptions = {
  /** Width of the generated low-res preview. Default is 20px */
  width: Maybe<Scalars['Int']>;
  /**
   * Force the output format for the low-res preview. Default is to use the same
   * format as the input. You should rarely need to change this
   */
  toFormat: Maybe<ImageFormat>;
};

export type BooleanQueryOperatorInput = {
  eq: Maybe<Scalars['Boolean']>;
  ne: Maybe<Scalars['Boolean']>;
  in: Maybe<Array<Maybe<Scalars['Boolean']>>>;
  nin: Maybe<Array<Maybe<Scalars['Boolean']>>>;
};

export type Contact = Node & {
  __typename?: 'contact';
  id: Scalars['ID'];
  parent: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  title: Maybe<Scalars['String']>;
  description: Maybe<Scalars['String']>;
  form: Maybe<ContactForm>;
  formTitle: Maybe<Scalars['String']>;
};

export type ContactConnection = {
  __typename?: 'contactConnection';
  totalCount: Scalars['Int'];
  edges: Array<ContactEdge>;
  nodes: Array<Contact>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContactGroupConnection>;
};


export type ContactConnectionDistinctArgs = {
  field: ContactFieldsEnum;
};


export type ContactConnectionGroupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: ContactFieldsEnum;
};

export type ContactEdge = {
  __typename?: 'contactEdge';
  next: Maybe<Contact>;
  node: Contact;
  previous: Maybe<Contact>;
};

export enum ContactFieldsEnum {
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  Title = 'title',
  Description = 'description',
  FormNameLabel = 'form___name_label',
  FormSuccess = 'form___success',
  FormEnable = 'form___enable',
  FormEmailError = 'form___email_error',
  FormError = 'form___error',
  FormMessageError = 'form___message_error',
  FormEmailLabel = 'form___email_label',
  FormNameError = 'form___name_error',
  FormSubmit = 'form___submit',
  FormMessageLabel = 'form___message_label',
  FormTitle = 'formTitle'
}

export type ContactFilterInput = {
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
  title: Maybe<StringQueryOperatorInput>;
  description: Maybe<StringQueryOperatorInput>;
  form: Maybe<ContactFormFilterInput>;
  formTitle: Maybe<StringQueryOperatorInput>;
};

export type ContactForm = {
  __typename?: 'contactForm';
  name_label: Maybe<Scalars['String']>;
  success: Maybe<Scalars['String']>;
  enable: Maybe<Scalars['Boolean']>;
  email_error: Maybe<Scalars['String']>;
  error: Maybe<Scalars['String']>;
  message_error: Maybe<Scalars['String']>;
  email_label: Maybe<Scalars['String']>;
  name_error: Maybe<Scalars['String']>;
  submit: Maybe<Scalars['String']>;
  message_label: Maybe<Scalars['String']>;
};

export type ContactFormFilterInput = {
  name_label: Maybe<StringQueryOperatorInput>;
  success: Maybe<StringQueryOperatorInput>;
  enable: Maybe<BooleanQueryOperatorInput>;
  email_error: Maybe<StringQueryOperatorInput>;
  error: Maybe<StringQueryOperatorInput>;
  message_error: Maybe<StringQueryOperatorInput>;
  email_label: Maybe<StringQueryOperatorInput>;
  name_error: Maybe<StringQueryOperatorInput>;
  submit: Maybe<StringQueryOperatorInput>;
  message_label: Maybe<StringQueryOperatorInput>;
};

export type ContactGroupConnection = {
  __typename?: 'contactGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<ContactEdge>;
  nodes: Array<Contact>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue: Maybe<Scalars['String']>;
};

export type ContactSortInput = {
  fields: Maybe<Array<Maybe<ContactFieldsEnum>>>;
  order: Maybe<Array<Maybe<SortOrderEnum>>>;
};


export type DateQueryOperatorInput = {
  eq: Maybe<Scalars['Date']>;
  ne: Maybe<Scalars['Date']>;
  gt: Maybe<Scalars['Date']>;
  gte: Maybe<Scalars['Date']>;
  lt: Maybe<Scalars['Date']>;
  lte: Maybe<Scalars['Date']>;
  in: Maybe<Array<Maybe<Scalars['Date']>>>;
  nin: Maybe<Array<Maybe<Scalars['Date']>>>;
};

export type Directory = Node & {
  __typename?: 'Directory';
  sourceInstanceName: Scalars['String'];
  absolutePath: Scalars['String'];
  relativePath: Scalars['String'];
  extension: Scalars['String'];
  size: Scalars['Int'];
  prettySize: Scalars['String'];
  modifiedTime: Scalars['Date'];
  accessTime: Scalars['Date'];
  changeTime: Scalars['Date'];
  birthTime: Scalars['Date'];
  root: Scalars['String'];
  dir: Scalars['String'];
  base: Scalars['String'];
  ext: Scalars['String'];
  name: Scalars['String'];
  relativeDirectory: Scalars['String'];
  dev: Scalars['Int'];
  mode: Scalars['Int'];
  nlink: Scalars['Int'];
  uid: Scalars['Int'];
  gid: Scalars['Int'];
  rdev: Scalars['Int'];
  ino: Scalars['Float'];
  atimeMs: Scalars['Float'];
  mtimeMs: Scalars['Float'];
  ctimeMs: Scalars['Float'];
  atime: Scalars['Date'];
  mtime: Scalars['Date'];
  ctime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  birthtime: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  birthtimeMs: Maybe<Scalars['Float']>;
  blksize: Maybe<Scalars['Int']>;
  blocks: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
  parent: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type DirectoryModifiedTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


export type DirectoryAccessTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


export type DirectoryChangeTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


export type DirectoryBirthTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


export type DirectoryAtimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


export type DirectoryMtimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


export type DirectoryCtimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

export type DirectoryConnection = {
  __typename?: 'DirectoryConnection';
  totalCount: Scalars['Int'];
  edges: Array<DirectoryEdge>;
  nodes: Array<Directory>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<DirectoryGroupConnection>;
};


export type DirectoryConnectionDistinctArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryConnectionGroupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: DirectoryFieldsEnum;
};

export type DirectoryEdge = {
  __typename?: 'DirectoryEdge';
  next: Maybe<Directory>;
  node: Directory;
  previous: Maybe<Directory>;
};

export enum DirectoryFieldsEnum {
  SourceInstanceName = 'sourceInstanceName',
  AbsolutePath = 'absolutePath',
  RelativePath = 'relativePath',
  Extension = 'extension',
  Size = 'size',
  PrettySize = 'prettySize',
  ModifiedTime = 'modifiedTime',
  AccessTime = 'accessTime',
  ChangeTime = 'changeTime',
  BirthTime = 'birthTime',
  Root = 'root',
  Dir = 'dir',
  Base = 'base',
  Ext = 'ext',
  Name = 'name',
  RelativeDirectory = 'relativeDirectory',
  Dev = 'dev',
  Mode = 'mode',
  Nlink = 'nlink',
  Uid = 'uid',
  Gid = 'gid',
  Rdev = 'rdev',
  Ino = 'ino',
  AtimeMs = 'atimeMs',
  MtimeMs = 'mtimeMs',
  CtimeMs = 'ctimeMs',
  Atime = 'atime',
  Mtime = 'mtime',
  Ctime = 'ctime',
  Birthtime = 'birthtime',
  BirthtimeMs = 'birthtimeMs',
  Blksize = 'blksize',
  Blocks = 'blocks',
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type'
}

export type DirectoryFilterInput = {
  sourceInstanceName: Maybe<StringQueryOperatorInput>;
  absolutePath: Maybe<StringQueryOperatorInput>;
  relativePath: Maybe<StringQueryOperatorInput>;
  extension: Maybe<StringQueryOperatorInput>;
  size: Maybe<IntQueryOperatorInput>;
  prettySize: Maybe<StringQueryOperatorInput>;
  modifiedTime: Maybe<DateQueryOperatorInput>;
  accessTime: Maybe<DateQueryOperatorInput>;
  changeTime: Maybe<DateQueryOperatorInput>;
  birthTime: Maybe<DateQueryOperatorInput>;
  root: Maybe<StringQueryOperatorInput>;
  dir: Maybe<StringQueryOperatorInput>;
  base: Maybe<StringQueryOperatorInput>;
  ext: Maybe<StringQueryOperatorInput>;
  name: Maybe<StringQueryOperatorInput>;
  relativeDirectory: Maybe<StringQueryOperatorInput>;
  dev: Maybe<IntQueryOperatorInput>;
  mode: Maybe<IntQueryOperatorInput>;
  nlink: Maybe<IntQueryOperatorInput>;
  uid: Maybe<IntQueryOperatorInput>;
  gid: Maybe<IntQueryOperatorInput>;
  rdev: Maybe<IntQueryOperatorInput>;
  ino: Maybe<FloatQueryOperatorInput>;
  atimeMs: Maybe<FloatQueryOperatorInput>;
  mtimeMs: Maybe<FloatQueryOperatorInput>;
  ctimeMs: Maybe<FloatQueryOperatorInput>;
  atime: Maybe<DateQueryOperatorInput>;
  mtime: Maybe<DateQueryOperatorInput>;
  ctime: Maybe<DateQueryOperatorInput>;
  birthtime: Maybe<DateQueryOperatorInput>;
  birthtimeMs: Maybe<FloatQueryOperatorInput>;
  blksize: Maybe<IntQueryOperatorInput>;
  blocks: Maybe<IntQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};

export type DirectoryGroupConnection = {
  __typename?: 'DirectoryGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<DirectoryEdge>;
  nodes: Array<Directory>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue: Maybe<Scalars['String']>;
};

export type DirectorySortInput = {
  fields: Maybe<Array<Maybe<DirectoryFieldsEnum>>>;
  order: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type DuotoneGradient = {
  highlight: Scalars['String'];
  shadow: Scalars['String'];
  opacity: Maybe<Scalars['Int']>;
};

export type File = Node & {
  __typename?: 'File';
  sourceInstanceName: Scalars['String'];
  absolutePath: Scalars['String'];
  relativePath: Scalars['String'];
  extension: Scalars['String'];
  size: Scalars['Int'];
  prettySize: Scalars['String'];
  modifiedTime: Scalars['Date'];
  accessTime: Scalars['Date'];
  changeTime: Scalars['Date'];
  birthTime: Scalars['Date'];
  root: Scalars['String'];
  dir: Scalars['String'];
  base: Scalars['String'];
  ext: Scalars['String'];
  name: Scalars['String'];
  relativeDirectory: Scalars['String'];
  dev: Scalars['Int'];
  mode: Scalars['Int'];
  nlink: Scalars['Int'];
  uid: Scalars['Int'];
  gid: Scalars['Int'];
  rdev: Scalars['Int'];
  ino: Scalars['Float'];
  atimeMs: Scalars['Float'];
  mtimeMs: Scalars['Float'];
  ctimeMs: Scalars['Float'];
  atime: Scalars['Date'];
  mtime: Scalars['Date'];
  ctime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  birthtime: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  birthtimeMs: Maybe<Scalars['Float']>;
  blksize: Maybe<Scalars['Int']>;
  blocks: Maybe<Scalars['Int']>;
  /** Copy file to static directory and return public url to it */
  publicURL: Maybe<Scalars['String']>;
  childImageSharp: Maybe<ImageSharp>;
  id: Scalars['ID'];
  parent: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  childAbout: Maybe<About>;
  childBlog: Maybe<Blog>;
  childContact: Maybe<Contact>;
  childHome: Maybe<Home>;
  childMetaData: Maybe<MetaData>;
  childNotfound: Maybe<Notfound>;
  childOffer: Maybe<Offer>;
  childOfferAssortment: Maybe<OfferAssortment>;
  childOfferCraft: Maybe<OfferCraft>;
  childMarkdownRemark: Maybe<MarkdownRemark>;
};


export type FileModifiedTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


export type FileAccessTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


export type FileChangeTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


export type FileBirthTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


export type FileAtimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


export type FileMtimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


export type FileCtimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

export type FileConnection = {
  __typename?: 'FileConnection';
  totalCount: Scalars['Int'];
  edges: Array<FileEdge>;
  nodes: Array<File>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<FileGroupConnection>;
};


export type FileConnectionDistinctArgs = {
  field: FileFieldsEnum;
};


export type FileConnectionGroupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: FileFieldsEnum;
};

export type FileEdge = {
  __typename?: 'FileEdge';
  next: Maybe<File>;
  node: File;
  previous: Maybe<File>;
};

export enum FileFieldsEnum {
  SourceInstanceName = 'sourceInstanceName',
  AbsolutePath = 'absolutePath',
  RelativePath = 'relativePath',
  Extension = 'extension',
  Size = 'size',
  PrettySize = 'prettySize',
  ModifiedTime = 'modifiedTime',
  AccessTime = 'accessTime',
  ChangeTime = 'changeTime',
  BirthTime = 'birthTime',
  Root = 'root',
  Dir = 'dir',
  Base = 'base',
  Ext = 'ext',
  Name = 'name',
  RelativeDirectory = 'relativeDirectory',
  Dev = 'dev',
  Mode = 'mode',
  Nlink = 'nlink',
  Uid = 'uid',
  Gid = 'gid',
  Rdev = 'rdev',
  Ino = 'ino',
  AtimeMs = 'atimeMs',
  MtimeMs = 'mtimeMs',
  CtimeMs = 'ctimeMs',
  Atime = 'atime',
  Mtime = 'mtime',
  Ctime = 'ctime',
  Birthtime = 'birthtime',
  BirthtimeMs = 'birthtimeMs',
  Blksize = 'blksize',
  Blocks = 'blocks',
  PublicUrl = 'publicURL',
  ChildImageSharpFixedBase64 = 'childImageSharp___fixed___base64',
  ChildImageSharpFixedTracedSvg = 'childImageSharp___fixed___tracedSVG',
  ChildImageSharpFixedAspectRatio = 'childImageSharp___fixed___aspectRatio',
  ChildImageSharpFixedWidth = 'childImageSharp___fixed___width',
  ChildImageSharpFixedHeight = 'childImageSharp___fixed___height',
  ChildImageSharpFixedSrc = 'childImageSharp___fixed___src',
  ChildImageSharpFixedSrcSet = 'childImageSharp___fixed___srcSet',
  ChildImageSharpFixedSrcWebp = 'childImageSharp___fixed___srcWebp',
  ChildImageSharpFixedSrcSetWebp = 'childImageSharp___fixed___srcSetWebp',
  ChildImageSharpFixedOriginalName = 'childImageSharp___fixed___originalName',
  ChildImageSharpResolutionsBase64 = 'childImageSharp___resolutions___base64',
  ChildImageSharpResolutionsTracedSvg = 'childImageSharp___resolutions___tracedSVG',
  ChildImageSharpResolutionsAspectRatio = 'childImageSharp___resolutions___aspectRatio',
  ChildImageSharpResolutionsWidth = 'childImageSharp___resolutions___width',
  ChildImageSharpResolutionsHeight = 'childImageSharp___resolutions___height',
  ChildImageSharpResolutionsSrc = 'childImageSharp___resolutions___src',
  ChildImageSharpResolutionsSrcSet = 'childImageSharp___resolutions___srcSet',
  ChildImageSharpResolutionsSrcWebp = 'childImageSharp___resolutions___srcWebp',
  ChildImageSharpResolutionsSrcSetWebp = 'childImageSharp___resolutions___srcSetWebp',
  ChildImageSharpResolutionsOriginalName = 'childImageSharp___resolutions___originalName',
  ChildImageSharpFluidBase64 = 'childImageSharp___fluid___base64',
  ChildImageSharpFluidTracedSvg = 'childImageSharp___fluid___tracedSVG',
  ChildImageSharpFluidAspectRatio = 'childImageSharp___fluid___aspectRatio',
  ChildImageSharpFluidSrc = 'childImageSharp___fluid___src',
  ChildImageSharpFluidSrcSet = 'childImageSharp___fluid___srcSet',
  ChildImageSharpFluidSrcWebp = 'childImageSharp___fluid___srcWebp',
  ChildImageSharpFluidSrcSetWebp = 'childImageSharp___fluid___srcSetWebp',
  ChildImageSharpFluidSizes = 'childImageSharp___fluid___sizes',
  ChildImageSharpFluidOriginalImg = 'childImageSharp___fluid___originalImg',
  ChildImageSharpFluidOriginalName = 'childImageSharp___fluid___originalName',
  ChildImageSharpFluidPresentationWidth = 'childImageSharp___fluid___presentationWidth',
  ChildImageSharpFluidPresentationHeight = 'childImageSharp___fluid___presentationHeight',
  ChildImageSharpSizesBase64 = 'childImageSharp___sizes___base64',
  ChildImageSharpSizesTracedSvg = 'childImageSharp___sizes___tracedSVG',
  ChildImageSharpSizesAspectRatio = 'childImageSharp___sizes___aspectRatio',
  ChildImageSharpSizesSrc = 'childImageSharp___sizes___src',
  ChildImageSharpSizesSrcSet = 'childImageSharp___sizes___srcSet',
  ChildImageSharpSizesSrcWebp = 'childImageSharp___sizes___srcWebp',
  ChildImageSharpSizesSrcSetWebp = 'childImageSharp___sizes___srcSetWebp',
  ChildImageSharpSizesSizes = 'childImageSharp___sizes___sizes',
  ChildImageSharpSizesOriginalImg = 'childImageSharp___sizes___originalImg',
  ChildImageSharpSizesOriginalName = 'childImageSharp___sizes___originalName',
  ChildImageSharpSizesPresentationWidth = 'childImageSharp___sizes___presentationWidth',
  ChildImageSharpSizesPresentationHeight = 'childImageSharp___sizes___presentationHeight',
  ChildImageSharpGatsbyImageData = 'childImageSharp___gatsbyImageData',
  ChildImageSharpOriginalWidth = 'childImageSharp___original___width',
  ChildImageSharpOriginalHeight = 'childImageSharp___original___height',
  ChildImageSharpOriginalSrc = 'childImageSharp___original___src',
  ChildImageSharpResizeSrc = 'childImageSharp___resize___src',
  ChildImageSharpResizeTracedSvg = 'childImageSharp___resize___tracedSVG',
  ChildImageSharpResizeWidth = 'childImageSharp___resize___width',
  ChildImageSharpResizeHeight = 'childImageSharp___resize___height',
  ChildImageSharpResizeAspectRatio = 'childImageSharp___resize___aspectRatio',
  ChildImageSharpResizeOriginalName = 'childImageSharp___resize___originalName',
  ChildImageSharpId = 'childImageSharp___id',
  ChildImageSharpParentId = 'childImageSharp___parent___id',
  ChildImageSharpParentParentId = 'childImageSharp___parent___parent___id',
  ChildImageSharpParentParentChildren = 'childImageSharp___parent___parent___children',
  ChildImageSharpParentChildren = 'childImageSharp___parent___children',
  ChildImageSharpParentChildrenId = 'childImageSharp___parent___children___id',
  ChildImageSharpParentChildrenChildren = 'childImageSharp___parent___children___children',
  ChildImageSharpParentInternalContent = 'childImageSharp___parent___internal___content',
  ChildImageSharpParentInternalContentDigest = 'childImageSharp___parent___internal___contentDigest',
  ChildImageSharpParentInternalDescription = 'childImageSharp___parent___internal___description',
  ChildImageSharpParentInternalFieldOwners = 'childImageSharp___parent___internal___fieldOwners',
  ChildImageSharpParentInternalIgnoreType = 'childImageSharp___parent___internal___ignoreType',
  ChildImageSharpParentInternalMediaType = 'childImageSharp___parent___internal___mediaType',
  ChildImageSharpParentInternalOwner = 'childImageSharp___parent___internal___owner',
  ChildImageSharpParentInternalType = 'childImageSharp___parent___internal___type',
  ChildImageSharpChildren = 'childImageSharp___children',
  ChildImageSharpChildrenId = 'childImageSharp___children___id',
  ChildImageSharpChildrenParentId = 'childImageSharp___children___parent___id',
  ChildImageSharpChildrenParentChildren = 'childImageSharp___children___parent___children',
  ChildImageSharpChildrenChildren = 'childImageSharp___children___children',
  ChildImageSharpChildrenChildrenId = 'childImageSharp___children___children___id',
  ChildImageSharpChildrenChildrenChildren = 'childImageSharp___children___children___children',
  ChildImageSharpChildrenInternalContent = 'childImageSharp___children___internal___content',
  ChildImageSharpChildrenInternalContentDigest = 'childImageSharp___children___internal___contentDigest',
  ChildImageSharpChildrenInternalDescription = 'childImageSharp___children___internal___description',
  ChildImageSharpChildrenInternalFieldOwners = 'childImageSharp___children___internal___fieldOwners',
  ChildImageSharpChildrenInternalIgnoreType = 'childImageSharp___children___internal___ignoreType',
  ChildImageSharpChildrenInternalMediaType = 'childImageSharp___children___internal___mediaType',
  ChildImageSharpChildrenInternalOwner = 'childImageSharp___children___internal___owner',
  ChildImageSharpChildrenInternalType = 'childImageSharp___children___internal___type',
  ChildImageSharpInternalContent = 'childImageSharp___internal___content',
  ChildImageSharpInternalContentDigest = 'childImageSharp___internal___contentDigest',
  ChildImageSharpInternalDescription = 'childImageSharp___internal___description',
  ChildImageSharpInternalFieldOwners = 'childImageSharp___internal___fieldOwners',
  ChildImageSharpInternalIgnoreType = 'childImageSharp___internal___ignoreType',
  ChildImageSharpInternalMediaType = 'childImageSharp___internal___mediaType',
  ChildImageSharpInternalOwner = 'childImageSharp___internal___owner',
  ChildImageSharpInternalType = 'childImageSharp___internal___type',
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  ChildAboutId = 'childAbout___id',
  ChildAboutParentId = 'childAbout___parent___id',
  ChildAboutParentParentId = 'childAbout___parent___parent___id',
  ChildAboutParentParentChildren = 'childAbout___parent___parent___children',
  ChildAboutParentChildren = 'childAbout___parent___children',
  ChildAboutParentChildrenId = 'childAbout___parent___children___id',
  ChildAboutParentChildrenChildren = 'childAbout___parent___children___children',
  ChildAboutParentInternalContent = 'childAbout___parent___internal___content',
  ChildAboutParentInternalContentDigest = 'childAbout___parent___internal___contentDigest',
  ChildAboutParentInternalDescription = 'childAbout___parent___internal___description',
  ChildAboutParentInternalFieldOwners = 'childAbout___parent___internal___fieldOwners',
  ChildAboutParentInternalIgnoreType = 'childAbout___parent___internal___ignoreType',
  ChildAboutParentInternalMediaType = 'childAbout___parent___internal___mediaType',
  ChildAboutParentInternalOwner = 'childAbout___parent___internal___owner',
  ChildAboutParentInternalType = 'childAbout___parent___internal___type',
  ChildAboutChildren = 'childAbout___children',
  ChildAboutChildrenId = 'childAbout___children___id',
  ChildAboutChildrenParentId = 'childAbout___children___parent___id',
  ChildAboutChildrenParentChildren = 'childAbout___children___parent___children',
  ChildAboutChildrenChildren = 'childAbout___children___children',
  ChildAboutChildrenChildrenId = 'childAbout___children___children___id',
  ChildAboutChildrenChildrenChildren = 'childAbout___children___children___children',
  ChildAboutChildrenInternalContent = 'childAbout___children___internal___content',
  ChildAboutChildrenInternalContentDigest = 'childAbout___children___internal___contentDigest',
  ChildAboutChildrenInternalDescription = 'childAbout___children___internal___description',
  ChildAboutChildrenInternalFieldOwners = 'childAbout___children___internal___fieldOwners',
  ChildAboutChildrenInternalIgnoreType = 'childAbout___children___internal___ignoreType',
  ChildAboutChildrenInternalMediaType = 'childAbout___children___internal___mediaType',
  ChildAboutChildrenInternalOwner = 'childAbout___children___internal___owner',
  ChildAboutChildrenInternalType = 'childAbout___children___internal___type',
  ChildAboutInternalContent = 'childAbout___internal___content',
  ChildAboutInternalContentDigest = 'childAbout___internal___contentDigest',
  ChildAboutInternalDescription = 'childAbout___internal___description',
  ChildAboutInternalFieldOwners = 'childAbout___internal___fieldOwners',
  ChildAboutInternalIgnoreType = 'childAbout___internal___ignoreType',
  ChildAboutInternalMediaType = 'childAbout___internal___mediaType',
  ChildAboutInternalOwner = 'childAbout___internal___owner',
  ChildAboutInternalType = 'childAbout___internal___type',
  ChildAboutTitle = 'childAbout___title',
  ChildAboutDescription = 'childAbout___description',
  ChildAboutVideoTitle = 'childAbout___videoTitle',
  ChildAboutVideoSrcUrl = 'childAbout___videoSrcURL',
  ChildAboutGallery = 'childAbout___gallery',
  ChildAboutGalleryImage = 'childAbout___gallery___image',
  ChildAboutGalleryId = 'childAbout___gallery___id',
  ChildAboutGalleryTitle = 'childAbout___galleryTitle',
  ChildAboutAriaLabelsCloseButton = 'childAbout___ariaLabels___closeButton',
  ChildAboutAriaLabelsNextButton = 'childAbout___ariaLabels___nextButton',
  ChildAboutAriaLabelsPrevButton = 'childAbout___ariaLabels___prevButton',
  ChildAboutAriaLabelsGalleryModal = 'childAbout___ariaLabels___galleryModal',
  ChildAboutPictureLabel = 'childAbout___pictureLabel',
  ChildBlogId = 'childBlog___id',
  ChildBlogParentId = 'childBlog___parent___id',
  ChildBlogParentParentId = 'childBlog___parent___parent___id',
  ChildBlogParentParentChildren = 'childBlog___parent___parent___children',
  ChildBlogParentChildren = 'childBlog___parent___children',
  ChildBlogParentChildrenId = 'childBlog___parent___children___id',
  ChildBlogParentChildrenChildren = 'childBlog___parent___children___children',
  ChildBlogParentInternalContent = 'childBlog___parent___internal___content',
  ChildBlogParentInternalContentDigest = 'childBlog___parent___internal___contentDigest',
  ChildBlogParentInternalDescription = 'childBlog___parent___internal___description',
  ChildBlogParentInternalFieldOwners = 'childBlog___parent___internal___fieldOwners',
  ChildBlogParentInternalIgnoreType = 'childBlog___parent___internal___ignoreType',
  ChildBlogParentInternalMediaType = 'childBlog___parent___internal___mediaType',
  ChildBlogParentInternalOwner = 'childBlog___parent___internal___owner',
  ChildBlogParentInternalType = 'childBlog___parent___internal___type',
  ChildBlogChildren = 'childBlog___children',
  ChildBlogChildrenId = 'childBlog___children___id',
  ChildBlogChildrenParentId = 'childBlog___children___parent___id',
  ChildBlogChildrenParentChildren = 'childBlog___children___parent___children',
  ChildBlogChildrenChildren = 'childBlog___children___children',
  ChildBlogChildrenChildrenId = 'childBlog___children___children___id',
  ChildBlogChildrenChildrenChildren = 'childBlog___children___children___children',
  ChildBlogChildrenInternalContent = 'childBlog___children___internal___content',
  ChildBlogChildrenInternalContentDigest = 'childBlog___children___internal___contentDigest',
  ChildBlogChildrenInternalDescription = 'childBlog___children___internal___description',
  ChildBlogChildrenInternalFieldOwners = 'childBlog___children___internal___fieldOwners',
  ChildBlogChildrenInternalIgnoreType = 'childBlog___children___internal___ignoreType',
  ChildBlogChildrenInternalMediaType = 'childBlog___children___internal___mediaType',
  ChildBlogChildrenInternalOwner = 'childBlog___children___internal___owner',
  ChildBlogChildrenInternalType = 'childBlog___children___internal___type',
  ChildBlogInternalContent = 'childBlog___internal___content',
  ChildBlogInternalContentDigest = 'childBlog___internal___contentDigest',
  ChildBlogInternalDescription = 'childBlog___internal___description',
  ChildBlogInternalFieldOwners = 'childBlog___internal___fieldOwners',
  ChildBlogInternalIgnoreType = 'childBlog___internal___ignoreType',
  ChildBlogInternalMediaType = 'childBlog___internal___mediaType',
  ChildBlogInternalOwner = 'childBlog___internal___owner',
  ChildBlogInternalType = 'childBlog___internal___type',
  ChildBlogReturn = 'childBlog___return',
  ChildBlogDefaultPic = 'childBlog___default_pic',
  ChildBlogExpireLabel = 'childBlog___expireLabel',
  ChildBlogDateLabel = 'childBlog___dateLabel',
  ChildContactId = 'childContact___id',
  ChildContactParentId = 'childContact___parent___id',
  ChildContactParentParentId = 'childContact___parent___parent___id',
  ChildContactParentParentChildren = 'childContact___parent___parent___children',
  ChildContactParentChildren = 'childContact___parent___children',
  ChildContactParentChildrenId = 'childContact___parent___children___id',
  ChildContactParentChildrenChildren = 'childContact___parent___children___children',
  ChildContactParentInternalContent = 'childContact___parent___internal___content',
  ChildContactParentInternalContentDigest = 'childContact___parent___internal___contentDigest',
  ChildContactParentInternalDescription = 'childContact___parent___internal___description',
  ChildContactParentInternalFieldOwners = 'childContact___parent___internal___fieldOwners',
  ChildContactParentInternalIgnoreType = 'childContact___parent___internal___ignoreType',
  ChildContactParentInternalMediaType = 'childContact___parent___internal___mediaType',
  ChildContactParentInternalOwner = 'childContact___parent___internal___owner',
  ChildContactParentInternalType = 'childContact___parent___internal___type',
  ChildContactChildren = 'childContact___children',
  ChildContactChildrenId = 'childContact___children___id',
  ChildContactChildrenParentId = 'childContact___children___parent___id',
  ChildContactChildrenParentChildren = 'childContact___children___parent___children',
  ChildContactChildrenChildren = 'childContact___children___children',
  ChildContactChildrenChildrenId = 'childContact___children___children___id',
  ChildContactChildrenChildrenChildren = 'childContact___children___children___children',
  ChildContactChildrenInternalContent = 'childContact___children___internal___content',
  ChildContactChildrenInternalContentDigest = 'childContact___children___internal___contentDigest',
  ChildContactChildrenInternalDescription = 'childContact___children___internal___description',
  ChildContactChildrenInternalFieldOwners = 'childContact___children___internal___fieldOwners',
  ChildContactChildrenInternalIgnoreType = 'childContact___children___internal___ignoreType',
  ChildContactChildrenInternalMediaType = 'childContact___children___internal___mediaType',
  ChildContactChildrenInternalOwner = 'childContact___children___internal___owner',
  ChildContactChildrenInternalType = 'childContact___children___internal___type',
  ChildContactInternalContent = 'childContact___internal___content',
  ChildContactInternalContentDigest = 'childContact___internal___contentDigest',
  ChildContactInternalDescription = 'childContact___internal___description',
  ChildContactInternalFieldOwners = 'childContact___internal___fieldOwners',
  ChildContactInternalIgnoreType = 'childContact___internal___ignoreType',
  ChildContactInternalMediaType = 'childContact___internal___mediaType',
  ChildContactInternalOwner = 'childContact___internal___owner',
  ChildContactInternalType = 'childContact___internal___type',
  ChildContactTitle = 'childContact___title',
  ChildContactDescription = 'childContact___description',
  ChildContactFormNameLabel = 'childContact___form___name_label',
  ChildContactFormSuccess = 'childContact___form___success',
  ChildContactFormEnable = 'childContact___form___enable',
  ChildContactFormEmailError = 'childContact___form___email_error',
  ChildContactFormError = 'childContact___form___error',
  ChildContactFormMessageError = 'childContact___form___message_error',
  ChildContactFormEmailLabel = 'childContact___form___email_label',
  ChildContactFormNameError = 'childContact___form___name_error',
  ChildContactFormSubmit = 'childContact___form___submit',
  ChildContactFormMessageLabel = 'childContact___form___message_label',
  ChildContactFormTitle = 'childContact___formTitle',
  ChildHomeId = 'childHome___id',
  ChildHomeParentId = 'childHome___parent___id',
  ChildHomeParentParentId = 'childHome___parent___parent___id',
  ChildHomeParentParentChildren = 'childHome___parent___parent___children',
  ChildHomeParentChildren = 'childHome___parent___children',
  ChildHomeParentChildrenId = 'childHome___parent___children___id',
  ChildHomeParentChildrenChildren = 'childHome___parent___children___children',
  ChildHomeParentInternalContent = 'childHome___parent___internal___content',
  ChildHomeParentInternalContentDigest = 'childHome___parent___internal___contentDigest',
  ChildHomeParentInternalDescription = 'childHome___parent___internal___description',
  ChildHomeParentInternalFieldOwners = 'childHome___parent___internal___fieldOwners',
  ChildHomeParentInternalIgnoreType = 'childHome___parent___internal___ignoreType',
  ChildHomeParentInternalMediaType = 'childHome___parent___internal___mediaType',
  ChildHomeParentInternalOwner = 'childHome___parent___internal___owner',
  ChildHomeParentInternalType = 'childHome___parent___internal___type',
  ChildHomeChildren = 'childHome___children',
  ChildHomeChildrenId = 'childHome___children___id',
  ChildHomeChildrenParentId = 'childHome___children___parent___id',
  ChildHomeChildrenParentChildren = 'childHome___children___parent___children',
  ChildHomeChildrenChildren = 'childHome___children___children',
  ChildHomeChildrenChildrenId = 'childHome___children___children___id',
  ChildHomeChildrenChildrenChildren = 'childHome___children___children___children',
  ChildHomeChildrenInternalContent = 'childHome___children___internal___content',
  ChildHomeChildrenInternalContentDigest = 'childHome___children___internal___contentDigest',
  ChildHomeChildrenInternalDescription = 'childHome___children___internal___description',
  ChildHomeChildrenInternalFieldOwners = 'childHome___children___internal___fieldOwners',
  ChildHomeChildrenInternalIgnoreType = 'childHome___children___internal___ignoreType',
  ChildHomeChildrenInternalMediaType = 'childHome___children___internal___mediaType',
  ChildHomeChildrenInternalOwner = 'childHome___children___internal___owner',
  ChildHomeChildrenInternalType = 'childHome___children___internal___type',
  ChildHomeInternalContent = 'childHome___internal___content',
  ChildHomeInternalContentDigest = 'childHome___internal___contentDigest',
  ChildHomeInternalDescription = 'childHome___internal___description',
  ChildHomeInternalFieldOwners = 'childHome___internal___fieldOwners',
  ChildHomeInternalIgnoreType = 'childHome___internal___ignoreType',
  ChildHomeInternalMediaType = 'childHome___internal___mediaType',
  ChildHomeInternalOwner = 'childHome___internal___owner',
  ChildHomeInternalType = 'childHome___internal___type',
  ChildHomeTitle = 'childHome___title',
  ChildHomeDescription = 'childHome___description',
  ChildHomeReadmore = 'childHome___readmore',
  ChildHomeSubtitle = 'childHome___subtitle',
  ChildHomeSidePicture = 'childHome___sidePicture',
  ChildMetaDataId = 'childMetaData___id',
  ChildMetaDataParentId = 'childMetaData___parent___id',
  ChildMetaDataParentParentId = 'childMetaData___parent___parent___id',
  ChildMetaDataParentParentChildren = 'childMetaData___parent___parent___children',
  ChildMetaDataParentChildren = 'childMetaData___parent___children',
  ChildMetaDataParentChildrenId = 'childMetaData___parent___children___id',
  ChildMetaDataParentChildrenChildren = 'childMetaData___parent___children___children',
  ChildMetaDataParentInternalContent = 'childMetaData___parent___internal___content',
  ChildMetaDataParentInternalContentDigest = 'childMetaData___parent___internal___contentDigest',
  ChildMetaDataParentInternalDescription = 'childMetaData___parent___internal___description',
  ChildMetaDataParentInternalFieldOwners = 'childMetaData___parent___internal___fieldOwners',
  ChildMetaDataParentInternalIgnoreType = 'childMetaData___parent___internal___ignoreType',
  ChildMetaDataParentInternalMediaType = 'childMetaData___parent___internal___mediaType',
  ChildMetaDataParentInternalOwner = 'childMetaData___parent___internal___owner',
  ChildMetaDataParentInternalType = 'childMetaData___parent___internal___type',
  ChildMetaDataChildren = 'childMetaData___children',
  ChildMetaDataChildrenId = 'childMetaData___children___id',
  ChildMetaDataChildrenParentId = 'childMetaData___children___parent___id',
  ChildMetaDataChildrenParentChildren = 'childMetaData___children___parent___children',
  ChildMetaDataChildrenChildren = 'childMetaData___children___children',
  ChildMetaDataChildrenChildrenId = 'childMetaData___children___children___id',
  ChildMetaDataChildrenChildrenChildren = 'childMetaData___children___children___children',
  ChildMetaDataChildrenInternalContent = 'childMetaData___children___internal___content',
  ChildMetaDataChildrenInternalContentDigest = 'childMetaData___children___internal___contentDigest',
  ChildMetaDataChildrenInternalDescription = 'childMetaData___children___internal___description',
  ChildMetaDataChildrenInternalFieldOwners = 'childMetaData___children___internal___fieldOwners',
  ChildMetaDataChildrenInternalIgnoreType = 'childMetaData___children___internal___ignoreType',
  ChildMetaDataChildrenInternalMediaType = 'childMetaData___children___internal___mediaType',
  ChildMetaDataChildrenInternalOwner = 'childMetaData___children___internal___owner',
  ChildMetaDataChildrenInternalType = 'childMetaData___children___internal___type',
  ChildMetaDataInternalContent = 'childMetaData___internal___content',
  ChildMetaDataInternalContentDigest = 'childMetaData___internal___contentDigest',
  ChildMetaDataInternalDescription = 'childMetaData___internal___description',
  ChildMetaDataInternalFieldOwners = 'childMetaData___internal___fieldOwners',
  ChildMetaDataInternalIgnoreType = 'childMetaData___internal___ignoreType',
  ChildMetaDataInternalMediaType = 'childMetaData___internal___mediaType',
  ChildMetaDataInternalOwner = 'childMetaData___internal___owner',
  ChildMetaDataInternalType = 'childMetaData___internal___type',
  ChildMetaDataTitle = 'childMetaData___title',
  ChildMetaDataDescription = 'childMetaData___description',
  ChildMetaDataBanner = 'childMetaData___banner',
  ChildMetaDataLinksLabel = 'childMetaData___links___label',
  ChildMetaDataLinksHome = 'childMetaData___links___home',
  ChildMetaDataLinksContact = 'childMetaData___links___contact',
  ChildMetaDataLinksOffer = 'childMetaData___links___offer',
  ChildMetaDataLinksAbout = 'childMetaData___links___about',
  ChildMetaDataContactPhone = 'childMetaData___contact___phone',
  ChildMetaDataContactEmail = 'childMetaData___contact___email',
  ChildMetaDataContactLabel = 'childMetaData___contact___label',
  ChildMetaDataOpeningHoursLabel = 'childMetaData___openingHours___label',
  ChildMetaDataOpeningHoursList = 'childMetaData___openingHours___list',
  ChildMetaDataOpeningHoursListDays = 'childMetaData___openingHours___list___days',
  ChildMetaDataOpeningHoursListHours = 'childMetaData___openingHours___list___hours',
  ChildMetaDataAddressLabel = 'childMetaData___address___label',
  ChildMetaDataAddressStreet = 'childMetaData___address___street',
  ChildMetaDataAddressCity = 'childMetaData___address___city',
  ChildMetaDataAddressPostcode = 'childMetaData___address___postcode',
  ChildMetaDataAddressMapLink = 'childMetaData___address___mapLink',
  ChildNotfoundId = 'childNotfound___id',
  ChildNotfoundParentId = 'childNotfound___parent___id',
  ChildNotfoundParentParentId = 'childNotfound___parent___parent___id',
  ChildNotfoundParentParentChildren = 'childNotfound___parent___parent___children',
  ChildNotfoundParentChildren = 'childNotfound___parent___children',
  ChildNotfoundParentChildrenId = 'childNotfound___parent___children___id',
  ChildNotfoundParentChildrenChildren = 'childNotfound___parent___children___children',
  ChildNotfoundParentInternalContent = 'childNotfound___parent___internal___content',
  ChildNotfoundParentInternalContentDigest = 'childNotfound___parent___internal___contentDigest',
  ChildNotfoundParentInternalDescription = 'childNotfound___parent___internal___description',
  ChildNotfoundParentInternalFieldOwners = 'childNotfound___parent___internal___fieldOwners',
  ChildNotfoundParentInternalIgnoreType = 'childNotfound___parent___internal___ignoreType',
  ChildNotfoundParentInternalMediaType = 'childNotfound___parent___internal___mediaType',
  ChildNotfoundParentInternalOwner = 'childNotfound___parent___internal___owner',
  ChildNotfoundParentInternalType = 'childNotfound___parent___internal___type',
  ChildNotfoundChildren = 'childNotfound___children',
  ChildNotfoundChildrenId = 'childNotfound___children___id',
  ChildNotfoundChildrenParentId = 'childNotfound___children___parent___id',
  ChildNotfoundChildrenParentChildren = 'childNotfound___children___parent___children',
  ChildNotfoundChildrenChildren = 'childNotfound___children___children',
  ChildNotfoundChildrenChildrenId = 'childNotfound___children___children___id',
  ChildNotfoundChildrenChildrenChildren = 'childNotfound___children___children___children',
  ChildNotfoundChildrenInternalContent = 'childNotfound___children___internal___content',
  ChildNotfoundChildrenInternalContentDigest = 'childNotfound___children___internal___contentDigest',
  ChildNotfoundChildrenInternalDescription = 'childNotfound___children___internal___description',
  ChildNotfoundChildrenInternalFieldOwners = 'childNotfound___children___internal___fieldOwners',
  ChildNotfoundChildrenInternalIgnoreType = 'childNotfound___children___internal___ignoreType',
  ChildNotfoundChildrenInternalMediaType = 'childNotfound___children___internal___mediaType',
  ChildNotfoundChildrenInternalOwner = 'childNotfound___children___internal___owner',
  ChildNotfoundChildrenInternalType = 'childNotfound___children___internal___type',
  ChildNotfoundInternalContent = 'childNotfound___internal___content',
  ChildNotfoundInternalContentDigest = 'childNotfound___internal___contentDigest',
  ChildNotfoundInternalDescription = 'childNotfound___internal___description',
  ChildNotfoundInternalFieldOwners = 'childNotfound___internal___fieldOwners',
  ChildNotfoundInternalIgnoreType = 'childNotfound___internal___ignoreType',
  ChildNotfoundInternalMediaType = 'childNotfound___internal___mediaType',
  ChildNotfoundInternalOwner = 'childNotfound___internal___owner',
  ChildNotfoundInternalType = 'childNotfound___internal___type',
  ChildNotfoundGoHomeLabel = 'childNotfound___go_home_label',
  ChildNotfoundText = 'childNotfound___text',
  ChildNotfoundPicture = 'childNotfound___picture',
  ChildOfferId = 'childOffer___id',
  ChildOfferParentId = 'childOffer___parent___id',
  ChildOfferParentParentId = 'childOffer___parent___parent___id',
  ChildOfferParentParentChildren = 'childOffer___parent___parent___children',
  ChildOfferParentChildren = 'childOffer___parent___children',
  ChildOfferParentChildrenId = 'childOffer___parent___children___id',
  ChildOfferParentChildrenChildren = 'childOffer___parent___children___children',
  ChildOfferParentInternalContent = 'childOffer___parent___internal___content',
  ChildOfferParentInternalContentDigest = 'childOffer___parent___internal___contentDigest',
  ChildOfferParentInternalDescription = 'childOffer___parent___internal___description',
  ChildOfferParentInternalFieldOwners = 'childOffer___parent___internal___fieldOwners',
  ChildOfferParentInternalIgnoreType = 'childOffer___parent___internal___ignoreType',
  ChildOfferParentInternalMediaType = 'childOffer___parent___internal___mediaType',
  ChildOfferParentInternalOwner = 'childOffer___parent___internal___owner',
  ChildOfferParentInternalType = 'childOffer___parent___internal___type',
  ChildOfferChildren = 'childOffer___children',
  ChildOfferChildrenId = 'childOffer___children___id',
  ChildOfferChildrenParentId = 'childOffer___children___parent___id',
  ChildOfferChildrenParentChildren = 'childOffer___children___parent___children',
  ChildOfferChildrenChildren = 'childOffer___children___children',
  ChildOfferChildrenChildrenId = 'childOffer___children___children___id',
  ChildOfferChildrenChildrenChildren = 'childOffer___children___children___children',
  ChildOfferChildrenInternalContent = 'childOffer___children___internal___content',
  ChildOfferChildrenInternalContentDigest = 'childOffer___children___internal___contentDigest',
  ChildOfferChildrenInternalDescription = 'childOffer___children___internal___description',
  ChildOfferChildrenInternalFieldOwners = 'childOffer___children___internal___fieldOwners',
  ChildOfferChildrenInternalIgnoreType = 'childOffer___children___internal___ignoreType',
  ChildOfferChildrenInternalMediaType = 'childOffer___children___internal___mediaType',
  ChildOfferChildrenInternalOwner = 'childOffer___children___internal___owner',
  ChildOfferChildrenInternalType = 'childOffer___children___internal___type',
  ChildOfferInternalContent = 'childOffer___internal___content',
  ChildOfferInternalContentDigest = 'childOffer___internal___contentDigest',
  ChildOfferInternalDescription = 'childOffer___internal___description',
  ChildOfferInternalFieldOwners = 'childOffer___internal___fieldOwners',
  ChildOfferInternalIgnoreType = 'childOffer___internal___ignoreType',
  ChildOfferInternalMediaType = 'childOffer___internal___mediaType',
  ChildOfferInternalOwner = 'childOffer___internal___owner',
  ChildOfferInternalType = 'childOffer___internal___type',
  ChildOfferTitle = 'childOffer___title',
  ChildOfferDescription = 'childOffer___description',
  ChildOfferAriaLabelsCloseButton = 'childOffer___ariaLabels___closeButton',
  ChildOfferAriaLabelsNextButton = 'childOffer___ariaLabels___nextButton',
  ChildOfferAriaLabelsPrevButton = 'childOffer___ariaLabels___prevButton',
  ChildOfferAriaLabelsGalleryModal = 'childOffer___ariaLabels___galleryModal',
  ChildOfferEmptyStatePicture = 'childOffer___emptyState___picture',
  ChildOfferEmptyStateText = 'childOffer___emptyState___text',
  ChildOfferEmptyStateLabel = 'childOffer___emptyState___label',
  ChildOfferScrollUpLabel = 'childOffer___scrollUpLabel',
  ChildOfferTitleGallery = 'childOffer___titleGallery',
  ChildOfferAssortmentId = 'childOfferAssortment___id',
  ChildOfferAssortmentParentId = 'childOfferAssortment___parent___id',
  ChildOfferAssortmentParentParentId = 'childOfferAssortment___parent___parent___id',
  ChildOfferAssortmentParentParentChildren = 'childOfferAssortment___parent___parent___children',
  ChildOfferAssortmentParentChildren = 'childOfferAssortment___parent___children',
  ChildOfferAssortmentParentChildrenId = 'childOfferAssortment___parent___children___id',
  ChildOfferAssortmentParentChildrenChildren = 'childOfferAssortment___parent___children___children',
  ChildOfferAssortmentParentInternalContent = 'childOfferAssortment___parent___internal___content',
  ChildOfferAssortmentParentInternalContentDigest = 'childOfferAssortment___parent___internal___contentDigest',
  ChildOfferAssortmentParentInternalDescription = 'childOfferAssortment___parent___internal___description',
  ChildOfferAssortmentParentInternalFieldOwners = 'childOfferAssortment___parent___internal___fieldOwners',
  ChildOfferAssortmentParentInternalIgnoreType = 'childOfferAssortment___parent___internal___ignoreType',
  ChildOfferAssortmentParentInternalMediaType = 'childOfferAssortment___parent___internal___mediaType',
  ChildOfferAssortmentParentInternalOwner = 'childOfferAssortment___parent___internal___owner',
  ChildOfferAssortmentParentInternalType = 'childOfferAssortment___parent___internal___type',
  ChildOfferAssortmentChildren = 'childOfferAssortment___children',
  ChildOfferAssortmentChildrenId = 'childOfferAssortment___children___id',
  ChildOfferAssortmentChildrenParentId = 'childOfferAssortment___children___parent___id',
  ChildOfferAssortmentChildrenParentChildren = 'childOfferAssortment___children___parent___children',
  ChildOfferAssortmentChildrenChildren = 'childOfferAssortment___children___children',
  ChildOfferAssortmentChildrenChildrenId = 'childOfferAssortment___children___children___id',
  ChildOfferAssortmentChildrenChildrenChildren = 'childOfferAssortment___children___children___children',
  ChildOfferAssortmentChildrenInternalContent = 'childOfferAssortment___children___internal___content',
  ChildOfferAssortmentChildrenInternalContentDigest = 'childOfferAssortment___children___internal___contentDigest',
  ChildOfferAssortmentChildrenInternalDescription = 'childOfferAssortment___children___internal___description',
  ChildOfferAssortmentChildrenInternalFieldOwners = 'childOfferAssortment___children___internal___fieldOwners',
  ChildOfferAssortmentChildrenInternalIgnoreType = 'childOfferAssortment___children___internal___ignoreType',
  ChildOfferAssortmentChildrenInternalMediaType = 'childOfferAssortment___children___internal___mediaType',
  ChildOfferAssortmentChildrenInternalOwner = 'childOfferAssortment___children___internal___owner',
  ChildOfferAssortmentChildrenInternalType = 'childOfferAssortment___children___internal___type',
  ChildOfferAssortmentInternalContent = 'childOfferAssortment___internal___content',
  ChildOfferAssortmentInternalContentDigest = 'childOfferAssortment___internal___contentDigest',
  ChildOfferAssortmentInternalDescription = 'childOfferAssortment___internal___description',
  ChildOfferAssortmentInternalFieldOwners = 'childOfferAssortment___internal___fieldOwners',
  ChildOfferAssortmentInternalIgnoreType = 'childOfferAssortment___internal___ignoreType',
  ChildOfferAssortmentInternalMediaType = 'childOfferAssortment___internal___mediaType',
  ChildOfferAssortmentInternalOwner = 'childOfferAssortment___internal___owner',
  ChildOfferAssortmentInternalType = 'childOfferAssortment___internal___type',
  ChildOfferAssortmentLabel = 'childOfferAssortment___label',
  ChildOfferAssortmentProducts = 'childOfferAssortment___products',
  ChildOfferAssortmentProductsId = 'childOfferAssortment___products___id',
  ChildOfferAssortmentProductsLabel = 'childOfferAssortment___products___label',
  ChildOfferAssortmentProductsPictureLabel = 'childOfferAssortment___products___pictureLabel',
  ChildOfferAssortmentProductsImages = 'childOfferAssortment___products___images',
  ChildOfferAssortmentProductsImagesId = 'childOfferAssortment___products___images___id',
  ChildOfferAssortmentProductsImagesImage = 'childOfferAssortment___products___images___image',
  ChildOfferCraftId = 'childOfferCraft___id',
  ChildOfferCraftParentId = 'childOfferCraft___parent___id',
  ChildOfferCraftParentParentId = 'childOfferCraft___parent___parent___id',
  ChildOfferCraftParentParentChildren = 'childOfferCraft___parent___parent___children',
  ChildOfferCraftParentChildren = 'childOfferCraft___parent___children',
  ChildOfferCraftParentChildrenId = 'childOfferCraft___parent___children___id',
  ChildOfferCraftParentChildrenChildren = 'childOfferCraft___parent___children___children',
  ChildOfferCraftParentInternalContent = 'childOfferCraft___parent___internal___content',
  ChildOfferCraftParentInternalContentDigest = 'childOfferCraft___parent___internal___contentDigest',
  ChildOfferCraftParentInternalDescription = 'childOfferCraft___parent___internal___description',
  ChildOfferCraftParentInternalFieldOwners = 'childOfferCraft___parent___internal___fieldOwners',
  ChildOfferCraftParentInternalIgnoreType = 'childOfferCraft___parent___internal___ignoreType',
  ChildOfferCraftParentInternalMediaType = 'childOfferCraft___parent___internal___mediaType',
  ChildOfferCraftParentInternalOwner = 'childOfferCraft___parent___internal___owner',
  ChildOfferCraftParentInternalType = 'childOfferCraft___parent___internal___type',
  ChildOfferCraftChildren = 'childOfferCraft___children',
  ChildOfferCraftChildrenId = 'childOfferCraft___children___id',
  ChildOfferCraftChildrenParentId = 'childOfferCraft___children___parent___id',
  ChildOfferCraftChildrenParentChildren = 'childOfferCraft___children___parent___children',
  ChildOfferCraftChildrenChildren = 'childOfferCraft___children___children',
  ChildOfferCraftChildrenChildrenId = 'childOfferCraft___children___children___id',
  ChildOfferCraftChildrenChildrenChildren = 'childOfferCraft___children___children___children',
  ChildOfferCraftChildrenInternalContent = 'childOfferCraft___children___internal___content',
  ChildOfferCraftChildrenInternalContentDigest = 'childOfferCraft___children___internal___contentDigest',
  ChildOfferCraftChildrenInternalDescription = 'childOfferCraft___children___internal___description',
  ChildOfferCraftChildrenInternalFieldOwners = 'childOfferCraft___children___internal___fieldOwners',
  ChildOfferCraftChildrenInternalIgnoreType = 'childOfferCraft___children___internal___ignoreType',
  ChildOfferCraftChildrenInternalMediaType = 'childOfferCraft___children___internal___mediaType',
  ChildOfferCraftChildrenInternalOwner = 'childOfferCraft___children___internal___owner',
  ChildOfferCraftChildrenInternalType = 'childOfferCraft___children___internal___type',
  ChildOfferCraftInternalContent = 'childOfferCraft___internal___content',
  ChildOfferCraftInternalContentDigest = 'childOfferCraft___internal___contentDigest',
  ChildOfferCraftInternalDescription = 'childOfferCraft___internal___description',
  ChildOfferCraftInternalFieldOwners = 'childOfferCraft___internal___fieldOwners',
  ChildOfferCraftInternalIgnoreType = 'childOfferCraft___internal___ignoreType',
  ChildOfferCraftInternalMediaType = 'childOfferCraft___internal___mediaType',
  ChildOfferCraftInternalOwner = 'childOfferCraft___internal___owner',
  ChildOfferCraftInternalType = 'childOfferCraft___internal___type',
  ChildOfferCraftLabel = 'childOfferCraft___label',
  ChildOfferCraftProducts = 'childOfferCraft___products',
  ChildOfferCraftProductsId = 'childOfferCraft___products___id',
  ChildOfferCraftProductsLabel = 'childOfferCraft___products___label',
  ChildOfferCraftProductsImages = 'childOfferCraft___products___images',
  ChildOfferCraftProductsImagesId = 'childOfferCraft___products___images___id',
  ChildOfferCraftProductsImagesImage = 'childOfferCraft___products___images___image',
  ChildOfferCraftProductsPictureLabel = 'childOfferCraft___products___pictureLabel',
  ChildMarkdownRemarkId = 'childMarkdownRemark___id',
  ChildMarkdownRemarkFrontmatterTitle = 'childMarkdownRemark___frontmatter___title',
  ChildMarkdownRemarkFrontmatterContentKey = 'childMarkdownRemark___frontmatter___contentKey',
  ChildMarkdownRemarkFrontmatterStartDate = 'childMarkdownRemark___frontmatter___startDate',
  ChildMarkdownRemarkFrontmatterEndDate = 'childMarkdownRemark___frontmatter___endDate',
  ChildMarkdownRemarkFrontmatterBanner = 'childMarkdownRemark___frontmatter___banner',
  ChildMarkdownRemarkExcerpt = 'childMarkdownRemark___excerpt',
  ChildMarkdownRemarkRawMarkdownBody = 'childMarkdownRemark___rawMarkdownBody',
  ChildMarkdownRemarkFileAbsolutePath = 'childMarkdownRemark___fileAbsolutePath',
  ChildMarkdownRemarkFieldsSlug = 'childMarkdownRemark___fields___slug',
  ChildMarkdownRemarkHtml = 'childMarkdownRemark___html',
  ChildMarkdownRemarkHtmlAst = 'childMarkdownRemark___htmlAst',
  ChildMarkdownRemarkExcerptAst = 'childMarkdownRemark___excerptAst',
  ChildMarkdownRemarkHeadings = 'childMarkdownRemark___headings',
  ChildMarkdownRemarkHeadingsId = 'childMarkdownRemark___headings___id',
  ChildMarkdownRemarkHeadingsValue = 'childMarkdownRemark___headings___value',
  ChildMarkdownRemarkHeadingsDepth = 'childMarkdownRemark___headings___depth',
  ChildMarkdownRemarkTimeToRead = 'childMarkdownRemark___timeToRead',
  ChildMarkdownRemarkTableOfContents = 'childMarkdownRemark___tableOfContents',
  ChildMarkdownRemarkWordCountParagraphs = 'childMarkdownRemark___wordCount___paragraphs',
  ChildMarkdownRemarkWordCountSentences = 'childMarkdownRemark___wordCount___sentences',
  ChildMarkdownRemarkWordCountWords = 'childMarkdownRemark___wordCount___words',
  ChildMarkdownRemarkParentId = 'childMarkdownRemark___parent___id',
  ChildMarkdownRemarkParentParentId = 'childMarkdownRemark___parent___parent___id',
  ChildMarkdownRemarkParentParentChildren = 'childMarkdownRemark___parent___parent___children',
  ChildMarkdownRemarkParentChildren = 'childMarkdownRemark___parent___children',
  ChildMarkdownRemarkParentChildrenId = 'childMarkdownRemark___parent___children___id',
  ChildMarkdownRemarkParentChildrenChildren = 'childMarkdownRemark___parent___children___children',
  ChildMarkdownRemarkParentInternalContent = 'childMarkdownRemark___parent___internal___content',
  ChildMarkdownRemarkParentInternalContentDigest = 'childMarkdownRemark___parent___internal___contentDigest',
  ChildMarkdownRemarkParentInternalDescription = 'childMarkdownRemark___parent___internal___description',
  ChildMarkdownRemarkParentInternalFieldOwners = 'childMarkdownRemark___parent___internal___fieldOwners',
  ChildMarkdownRemarkParentInternalIgnoreType = 'childMarkdownRemark___parent___internal___ignoreType',
  ChildMarkdownRemarkParentInternalMediaType = 'childMarkdownRemark___parent___internal___mediaType',
  ChildMarkdownRemarkParentInternalOwner = 'childMarkdownRemark___parent___internal___owner',
  ChildMarkdownRemarkParentInternalType = 'childMarkdownRemark___parent___internal___type',
  ChildMarkdownRemarkChildren = 'childMarkdownRemark___children',
  ChildMarkdownRemarkChildrenId = 'childMarkdownRemark___children___id',
  ChildMarkdownRemarkChildrenParentId = 'childMarkdownRemark___children___parent___id',
  ChildMarkdownRemarkChildrenParentChildren = 'childMarkdownRemark___children___parent___children',
  ChildMarkdownRemarkChildrenChildren = 'childMarkdownRemark___children___children',
  ChildMarkdownRemarkChildrenChildrenId = 'childMarkdownRemark___children___children___id',
  ChildMarkdownRemarkChildrenChildrenChildren = 'childMarkdownRemark___children___children___children',
  ChildMarkdownRemarkChildrenInternalContent = 'childMarkdownRemark___children___internal___content',
  ChildMarkdownRemarkChildrenInternalContentDigest = 'childMarkdownRemark___children___internal___contentDigest',
  ChildMarkdownRemarkChildrenInternalDescription = 'childMarkdownRemark___children___internal___description',
  ChildMarkdownRemarkChildrenInternalFieldOwners = 'childMarkdownRemark___children___internal___fieldOwners',
  ChildMarkdownRemarkChildrenInternalIgnoreType = 'childMarkdownRemark___children___internal___ignoreType',
  ChildMarkdownRemarkChildrenInternalMediaType = 'childMarkdownRemark___children___internal___mediaType',
  ChildMarkdownRemarkChildrenInternalOwner = 'childMarkdownRemark___children___internal___owner',
  ChildMarkdownRemarkChildrenInternalType = 'childMarkdownRemark___children___internal___type',
  ChildMarkdownRemarkInternalContent = 'childMarkdownRemark___internal___content',
  ChildMarkdownRemarkInternalContentDigest = 'childMarkdownRemark___internal___contentDigest',
  ChildMarkdownRemarkInternalDescription = 'childMarkdownRemark___internal___description',
  ChildMarkdownRemarkInternalFieldOwners = 'childMarkdownRemark___internal___fieldOwners',
  ChildMarkdownRemarkInternalIgnoreType = 'childMarkdownRemark___internal___ignoreType',
  ChildMarkdownRemarkInternalMediaType = 'childMarkdownRemark___internal___mediaType',
  ChildMarkdownRemarkInternalOwner = 'childMarkdownRemark___internal___owner',
  ChildMarkdownRemarkInternalType = 'childMarkdownRemark___internal___type'
}

export type FileFilterInput = {
  sourceInstanceName: Maybe<StringQueryOperatorInput>;
  absolutePath: Maybe<StringQueryOperatorInput>;
  relativePath: Maybe<StringQueryOperatorInput>;
  extension: Maybe<StringQueryOperatorInput>;
  size: Maybe<IntQueryOperatorInput>;
  prettySize: Maybe<StringQueryOperatorInput>;
  modifiedTime: Maybe<DateQueryOperatorInput>;
  accessTime: Maybe<DateQueryOperatorInput>;
  changeTime: Maybe<DateQueryOperatorInput>;
  birthTime: Maybe<DateQueryOperatorInput>;
  root: Maybe<StringQueryOperatorInput>;
  dir: Maybe<StringQueryOperatorInput>;
  base: Maybe<StringQueryOperatorInput>;
  ext: Maybe<StringQueryOperatorInput>;
  name: Maybe<StringQueryOperatorInput>;
  relativeDirectory: Maybe<StringQueryOperatorInput>;
  dev: Maybe<IntQueryOperatorInput>;
  mode: Maybe<IntQueryOperatorInput>;
  nlink: Maybe<IntQueryOperatorInput>;
  uid: Maybe<IntQueryOperatorInput>;
  gid: Maybe<IntQueryOperatorInput>;
  rdev: Maybe<IntQueryOperatorInput>;
  ino: Maybe<FloatQueryOperatorInput>;
  atimeMs: Maybe<FloatQueryOperatorInput>;
  mtimeMs: Maybe<FloatQueryOperatorInput>;
  ctimeMs: Maybe<FloatQueryOperatorInput>;
  atime: Maybe<DateQueryOperatorInput>;
  mtime: Maybe<DateQueryOperatorInput>;
  ctime: Maybe<DateQueryOperatorInput>;
  birthtime: Maybe<DateQueryOperatorInput>;
  birthtimeMs: Maybe<FloatQueryOperatorInput>;
  blksize: Maybe<IntQueryOperatorInput>;
  blocks: Maybe<IntQueryOperatorInput>;
  publicURL: Maybe<StringQueryOperatorInput>;
  childImageSharp: Maybe<ImageSharpFilterInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
  childAbout: Maybe<AboutFilterInput>;
  childBlog: Maybe<BlogFilterInput>;
  childContact: Maybe<ContactFilterInput>;
  childHome: Maybe<HomeFilterInput>;
  childMetaData: Maybe<MetaDataFilterInput>;
  childNotfound: Maybe<NotfoundFilterInput>;
  childOffer: Maybe<OfferFilterInput>;
  childOfferAssortment: Maybe<OfferAssortmentFilterInput>;
  childOfferCraft: Maybe<OfferCraftFilterInput>;
  childMarkdownRemark: Maybe<MarkdownRemarkFilterInput>;
};

export type FileGroupConnection = {
  __typename?: 'FileGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<FileEdge>;
  nodes: Array<File>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue: Maybe<Scalars['String']>;
};

export type FileSortInput = {
  fields: Maybe<Array<Maybe<FileFieldsEnum>>>;
  order: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type FloatQueryOperatorInput = {
  eq: Maybe<Scalars['Float']>;
  ne: Maybe<Scalars['Float']>;
  gt: Maybe<Scalars['Float']>;
  gte: Maybe<Scalars['Float']>;
  lt: Maybe<Scalars['Float']>;
  lte: Maybe<Scalars['Float']>;
  in: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type Home = Node & {
  __typename?: 'home';
  id: Scalars['ID'];
  parent: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  title: Maybe<Scalars['String']>;
  description: Maybe<Scalars['String']>;
  readmore: Maybe<Scalars['String']>;
  subtitle: Maybe<Scalars['String']>;
  sidePicture: Maybe<Scalars['String']>;
};

export type HomeConnection = {
  __typename?: 'homeConnection';
  totalCount: Scalars['Int'];
  edges: Array<HomeEdge>;
  nodes: Array<Home>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<HomeGroupConnection>;
};


export type HomeConnectionDistinctArgs = {
  field: HomeFieldsEnum;
};


export type HomeConnectionGroupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: HomeFieldsEnum;
};

export type HomeEdge = {
  __typename?: 'homeEdge';
  next: Maybe<Home>;
  node: Home;
  previous: Maybe<Home>;
};

export enum HomeFieldsEnum {
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  Title = 'title',
  Description = 'description',
  Readmore = 'readmore',
  Subtitle = 'subtitle',
  SidePicture = 'sidePicture'
}

export type HomeFilterInput = {
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
  title: Maybe<StringQueryOperatorInput>;
  description: Maybe<StringQueryOperatorInput>;
  readmore: Maybe<StringQueryOperatorInput>;
  subtitle: Maybe<StringQueryOperatorInput>;
  sidePicture: Maybe<StringQueryOperatorInput>;
};

export type HomeGroupConnection = {
  __typename?: 'homeGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<HomeEdge>;
  nodes: Array<Home>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue: Maybe<Scalars['String']>;
};

export type HomeSortInput = {
  fields: Maybe<Array<Maybe<HomeFieldsEnum>>>;
  order: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export enum ImageCropFocus {
  Center = 'CENTER',
  North = 'NORTH',
  Northeast = 'NORTHEAST',
  East = 'EAST',
  Southeast = 'SOUTHEAST',
  South = 'SOUTH',
  Southwest = 'SOUTHWEST',
  West = 'WEST',
  Northwest = 'NORTHWEST',
  Entropy = 'ENTROPY',
  Attention = 'ATTENTION'
}

export enum ImageFit {
  Cover = 'COVER',
  Contain = 'CONTAIN',
  Fill = 'FILL',
  Inside = 'INSIDE',
  Outside = 'OUTSIDE'
}

export enum ImageFormat {
  NoChange = 'NO_CHANGE',
  Auto = 'AUTO',
  Jpg = 'JPG',
  Png = 'PNG',
  Webp = 'WEBP'
}

export enum ImageLayout {
  Fixed = 'FIXED',
  Fluid = 'FLUID',
  Constrained = 'CONSTRAINED'
}

export enum ImagePlaceholder {
  DominantColor = 'DOMINANT_COLOR',
  TracedSvg = 'TRACED_SVG',
  Blurred = 'BLURRED',
  None = 'NONE'
}

export type ImageSharp = Node & {
  __typename?: 'ImageSharp';
  fixed: Maybe<ImageSharpFixed>;
  /** @deprecated Resolutions was deprecated in Gatsby v2. It's been renamed to "fixed" https://example.com/write-docs-and-fix-this-example-link */
  resolutions: Maybe<ImageSharpResolutions>;
  fluid: Maybe<ImageSharpFluid>;
  /** @deprecated Sizes was deprecated in Gatsby v2. It's been renamed to "fluid" https://example.com/write-docs-and-fix-this-example-link */
  sizes: Maybe<ImageSharpSizes>;
  gatsbyImageData: Scalars['JSON'];
  original: Maybe<ImageSharpOriginal>;
  resize: Maybe<ImageSharpResize>;
  id: Scalars['ID'];
  parent: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type ImageSharpFixedArgs = {
  width: Maybe<Scalars['Int']>;
  height: Maybe<Scalars['Int']>;
  base64Width: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  duotone: Maybe<DuotoneGradient>;
  traceSVG: Maybe<Potrace>;
  quality: Maybe<Scalars['Int']>;
  jpegQuality: Maybe<Scalars['Int']>;
  pngQuality: Maybe<Scalars['Int']>;
  webpQuality: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
};


export type ImageSharpResolutionsArgs = {
  width: Maybe<Scalars['Int']>;
  height: Maybe<Scalars['Int']>;
  base64Width: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  duotone: Maybe<DuotoneGradient>;
  traceSVG: Maybe<Potrace>;
  quality: Maybe<Scalars['Int']>;
  jpegQuality: Maybe<Scalars['Int']>;
  pngQuality: Maybe<Scalars['Int']>;
  webpQuality: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
};


export type ImageSharpFluidArgs = {
  maxWidth: Maybe<Scalars['Int']>;
  maxHeight: Maybe<Scalars['Int']>;
  base64Width: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  duotone: Maybe<DuotoneGradient>;
  traceSVG: Maybe<Potrace>;
  quality: Maybe<Scalars['Int']>;
  jpegQuality: Maybe<Scalars['Int']>;
  pngQuality: Maybe<Scalars['Int']>;
  webpQuality: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
  sizes?: Maybe<Scalars['String']>;
  srcSetBreakpoints?: Maybe<Array<Maybe<Scalars['Int']>>>;
};


export type ImageSharpSizesArgs = {
  maxWidth: Maybe<Scalars['Int']>;
  maxHeight: Maybe<Scalars['Int']>;
  base64Width: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  duotone: Maybe<DuotoneGradient>;
  traceSVG: Maybe<Potrace>;
  quality: Maybe<Scalars['Int']>;
  jpegQuality: Maybe<Scalars['Int']>;
  pngQuality: Maybe<Scalars['Int']>;
  webpQuality: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
  sizes?: Maybe<Scalars['String']>;
  srcSetBreakpoints?: Maybe<Array<Maybe<Scalars['Int']>>>;
};


export type ImageSharpGatsbyImageDataArgs = {
  layout?: Maybe<ImageLayout>;
  maxWidth: Maybe<Scalars['Int']>;
  maxHeight: Maybe<Scalars['Int']>;
  width: Maybe<Scalars['Int']>;
  height: Maybe<Scalars['Int']>;
  placeholder?: Maybe<ImagePlaceholder>;
  blurredOptions: Maybe<BlurredOptions>;
  tracedSVGOptions: Maybe<Potrace>;
  formats?: Maybe<Array<Maybe<ImageFormat>>>;
  outputPixelDensities: Maybe<Array<Maybe<Scalars['Float']>>>;
  sizes?: Maybe<Scalars['String']>;
  quality: Maybe<Scalars['Int']>;
  jpgOptions: Maybe<JpgOptions>;
  pngOptions: Maybe<PngOptions>;
  webpOptions: Maybe<WebPOptions>;
  transformOptions: Maybe<TransformOptions>;
  background?: Maybe<Scalars['String']>;
};


export type ImageSharpResizeArgs = {
  width: Maybe<Scalars['Int']>;
  height: Maybe<Scalars['Int']>;
  quality: Maybe<Scalars['Int']>;
  jpegQuality: Maybe<Scalars['Int']>;
  pngQuality: Maybe<Scalars['Int']>;
  webpQuality: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionLevel?: Maybe<Scalars['Int']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  duotone: Maybe<DuotoneGradient>;
  base64?: Maybe<Scalars['Boolean']>;
  traceSVG: Maybe<Potrace>;
  toFormat?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
};

export type ImageSharpConnection = {
  __typename?: 'ImageSharpConnection';
  totalCount: Scalars['Int'];
  edges: Array<ImageSharpEdge>;
  nodes: Array<ImageSharp>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ImageSharpGroupConnection>;
};


export type ImageSharpConnectionDistinctArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpConnectionGroupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: ImageSharpFieldsEnum;
};

export type ImageSharpEdge = {
  __typename?: 'ImageSharpEdge';
  next: Maybe<ImageSharp>;
  node: ImageSharp;
  previous: Maybe<ImageSharp>;
};

export enum ImageSharpFieldsEnum {
  FixedBase64 = 'fixed___base64',
  FixedTracedSvg = 'fixed___tracedSVG',
  FixedAspectRatio = 'fixed___aspectRatio',
  FixedWidth = 'fixed___width',
  FixedHeight = 'fixed___height',
  FixedSrc = 'fixed___src',
  FixedSrcSet = 'fixed___srcSet',
  FixedSrcWebp = 'fixed___srcWebp',
  FixedSrcSetWebp = 'fixed___srcSetWebp',
  FixedOriginalName = 'fixed___originalName',
  ResolutionsBase64 = 'resolutions___base64',
  ResolutionsTracedSvg = 'resolutions___tracedSVG',
  ResolutionsAspectRatio = 'resolutions___aspectRatio',
  ResolutionsWidth = 'resolutions___width',
  ResolutionsHeight = 'resolutions___height',
  ResolutionsSrc = 'resolutions___src',
  ResolutionsSrcSet = 'resolutions___srcSet',
  ResolutionsSrcWebp = 'resolutions___srcWebp',
  ResolutionsSrcSetWebp = 'resolutions___srcSetWebp',
  ResolutionsOriginalName = 'resolutions___originalName',
  FluidBase64 = 'fluid___base64',
  FluidTracedSvg = 'fluid___tracedSVG',
  FluidAspectRatio = 'fluid___aspectRatio',
  FluidSrc = 'fluid___src',
  FluidSrcSet = 'fluid___srcSet',
  FluidSrcWebp = 'fluid___srcWebp',
  FluidSrcSetWebp = 'fluid___srcSetWebp',
  FluidSizes = 'fluid___sizes',
  FluidOriginalImg = 'fluid___originalImg',
  FluidOriginalName = 'fluid___originalName',
  FluidPresentationWidth = 'fluid___presentationWidth',
  FluidPresentationHeight = 'fluid___presentationHeight',
  SizesBase64 = 'sizes___base64',
  SizesTracedSvg = 'sizes___tracedSVG',
  SizesAspectRatio = 'sizes___aspectRatio',
  SizesSrc = 'sizes___src',
  SizesSrcSet = 'sizes___srcSet',
  SizesSrcWebp = 'sizes___srcWebp',
  SizesSrcSetWebp = 'sizes___srcSetWebp',
  SizesSizes = 'sizes___sizes',
  SizesOriginalImg = 'sizes___originalImg',
  SizesOriginalName = 'sizes___originalName',
  SizesPresentationWidth = 'sizes___presentationWidth',
  SizesPresentationHeight = 'sizes___presentationHeight',
  GatsbyImageData = 'gatsbyImageData',
  OriginalWidth = 'original___width',
  OriginalHeight = 'original___height',
  OriginalSrc = 'original___src',
  ResizeSrc = 'resize___src',
  ResizeTracedSvg = 'resize___tracedSVG',
  ResizeWidth = 'resize___width',
  ResizeHeight = 'resize___height',
  ResizeAspectRatio = 'resize___aspectRatio',
  ResizeOriginalName = 'resize___originalName',
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type'
}

export type ImageSharpFilterInput = {
  fixed: Maybe<ImageSharpFixedFilterInput>;
  resolutions: Maybe<ImageSharpResolutionsFilterInput>;
  fluid: Maybe<ImageSharpFluidFilterInput>;
  sizes: Maybe<ImageSharpSizesFilterInput>;
  gatsbyImageData: Maybe<JsonQueryOperatorInput>;
  original: Maybe<ImageSharpOriginalFilterInput>;
  resize: Maybe<ImageSharpResizeFilterInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};

export type ImageSharpFixed = {
  __typename?: 'ImageSharpFixed';
  base64: Maybe<Scalars['String']>;
  tracedSVG: Maybe<Scalars['String']>;
  aspectRatio: Maybe<Scalars['Float']>;
  width: Scalars['Float'];
  height: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp: Maybe<Scalars['String']>;
  srcSetWebp: Maybe<Scalars['String']>;
  originalName: Maybe<Scalars['String']>;
};

export type ImageSharpFixedFilterInput = {
  base64: Maybe<StringQueryOperatorInput>;
  tracedSVG: Maybe<StringQueryOperatorInput>;
  aspectRatio: Maybe<FloatQueryOperatorInput>;
  width: Maybe<FloatQueryOperatorInput>;
  height: Maybe<FloatQueryOperatorInput>;
  src: Maybe<StringQueryOperatorInput>;
  srcSet: Maybe<StringQueryOperatorInput>;
  srcWebp: Maybe<StringQueryOperatorInput>;
  srcSetWebp: Maybe<StringQueryOperatorInput>;
  originalName: Maybe<StringQueryOperatorInput>;
};

export type ImageSharpFluid = {
  __typename?: 'ImageSharpFluid';
  base64: Maybe<Scalars['String']>;
  tracedSVG: Maybe<Scalars['String']>;
  aspectRatio: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp: Maybe<Scalars['String']>;
  srcSetWebp: Maybe<Scalars['String']>;
  sizes: Scalars['String'];
  originalImg: Maybe<Scalars['String']>;
  originalName: Maybe<Scalars['String']>;
  presentationWidth: Scalars['Int'];
  presentationHeight: Scalars['Int'];
};

export type ImageSharpFluidFilterInput = {
  base64: Maybe<StringQueryOperatorInput>;
  tracedSVG: Maybe<StringQueryOperatorInput>;
  aspectRatio: Maybe<FloatQueryOperatorInput>;
  src: Maybe<StringQueryOperatorInput>;
  srcSet: Maybe<StringQueryOperatorInput>;
  srcWebp: Maybe<StringQueryOperatorInput>;
  srcSetWebp: Maybe<StringQueryOperatorInput>;
  sizes: Maybe<StringQueryOperatorInput>;
  originalImg: Maybe<StringQueryOperatorInput>;
  originalName: Maybe<StringQueryOperatorInput>;
  presentationWidth: Maybe<IntQueryOperatorInput>;
  presentationHeight: Maybe<IntQueryOperatorInput>;
};

export type ImageSharpGroupConnection = {
  __typename?: 'ImageSharpGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<ImageSharpEdge>;
  nodes: Array<ImageSharp>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue: Maybe<Scalars['String']>;
};

export type ImageSharpOriginal = {
  __typename?: 'ImageSharpOriginal';
  width: Maybe<Scalars['Float']>;
  height: Maybe<Scalars['Float']>;
  src: Maybe<Scalars['String']>;
};

export type ImageSharpOriginalFilterInput = {
  width: Maybe<FloatQueryOperatorInput>;
  height: Maybe<FloatQueryOperatorInput>;
  src: Maybe<StringQueryOperatorInput>;
};

export type ImageSharpResize = {
  __typename?: 'ImageSharpResize';
  src: Maybe<Scalars['String']>;
  tracedSVG: Maybe<Scalars['String']>;
  width: Maybe<Scalars['Int']>;
  height: Maybe<Scalars['Int']>;
  aspectRatio: Maybe<Scalars['Float']>;
  originalName: Maybe<Scalars['String']>;
};

export type ImageSharpResizeFilterInput = {
  src: Maybe<StringQueryOperatorInput>;
  tracedSVG: Maybe<StringQueryOperatorInput>;
  width: Maybe<IntQueryOperatorInput>;
  height: Maybe<IntQueryOperatorInput>;
  aspectRatio: Maybe<FloatQueryOperatorInput>;
  originalName: Maybe<StringQueryOperatorInput>;
};

export type ImageSharpResolutions = {
  __typename?: 'ImageSharpResolutions';
  base64: Maybe<Scalars['String']>;
  tracedSVG: Maybe<Scalars['String']>;
  aspectRatio: Maybe<Scalars['Float']>;
  width: Scalars['Float'];
  height: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp: Maybe<Scalars['String']>;
  srcSetWebp: Maybe<Scalars['String']>;
  originalName: Maybe<Scalars['String']>;
};

export type ImageSharpResolutionsFilterInput = {
  base64: Maybe<StringQueryOperatorInput>;
  tracedSVG: Maybe<StringQueryOperatorInput>;
  aspectRatio: Maybe<FloatQueryOperatorInput>;
  width: Maybe<FloatQueryOperatorInput>;
  height: Maybe<FloatQueryOperatorInput>;
  src: Maybe<StringQueryOperatorInput>;
  srcSet: Maybe<StringQueryOperatorInput>;
  srcWebp: Maybe<StringQueryOperatorInput>;
  srcSetWebp: Maybe<StringQueryOperatorInput>;
  originalName: Maybe<StringQueryOperatorInput>;
};

export type ImageSharpSizes = {
  __typename?: 'ImageSharpSizes';
  base64: Maybe<Scalars['String']>;
  tracedSVG: Maybe<Scalars['String']>;
  aspectRatio: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp: Maybe<Scalars['String']>;
  srcSetWebp: Maybe<Scalars['String']>;
  sizes: Scalars['String'];
  originalImg: Maybe<Scalars['String']>;
  originalName: Maybe<Scalars['String']>;
  presentationWidth: Scalars['Int'];
  presentationHeight: Scalars['Int'];
};

export type ImageSharpSizesFilterInput = {
  base64: Maybe<StringQueryOperatorInput>;
  tracedSVG: Maybe<StringQueryOperatorInput>;
  aspectRatio: Maybe<FloatQueryOperatorInput>;
  src: Maybe<StringQueryOperatorInput>;
  srcSet: Maybe<StringQueryOperatorInput>;
  srcWebp: Maybe<StringQueryOperatorInput>;
  srcSetWebp: Maybe<StringQueryOperatorInput>;
  sizes: Maybe<StringQueryOperatorInput>;
  originalImg: Maybe<StringQueryOperatorInput>;
  originalName: Maybe<StringQueryOperatorInput>;
  presentationWidth: Maybe<IntQueryOperatorInput>;
  presentationHeight: Maybe<IntQueryOperatorInput>;
};

export type ImageSharpSortInput = {
  fields: Maybe<Array<Maybe<ImageSharpFieldsEnum>>>;
  order: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type Internal = {
  __typename?: 'Internal';
  content: Maybe<Scalars['String']>;
  contentDigest: Scalars['String'];
  description: Maybe<Scalars['String']>;
  fieldOwners: Maybe<Array<Maybe<Scalars['String']>>>;
  ignoreType: Maybe<Scalars['Boolean']>;
  mediaType: Maybe<Scalars['String']>;
  owner: Scalars['String'];
  type: Scalars['String'];
};

export type InternalFilterInput = {
  content: Maybe<StringQueryOperatorInput>;
  contentDigest: Maybe<StringQueryOperatorInput>;
  description: Maybe<StringQueryOperatorInput>;
  fieldOwners: Maybe<StringQueryOperatorInput>;
  ignoreType: Maybe<BooleanQueryOperatorInput>;
  mediaType: Maybe<StringQueryOperatorInput>;
  owner: Maybe<StringQueryOperatorInput>;
  type: Maybe<StringQueryOperatorInput>;
};

export type IntQueryOperatorInput = {
  eq: Maybe<Scalars['Int']>;
  ne: Maybe<Scalars['Int']>;
  gt: Maybe<Scalars['Int']>;
  gte: Maybe<Scalars['Int']>;
  lt: Maybe<Scalars['Int']>;
  lte: Maybe<Scalars['Int']>;
  in: Maybe<Array<Maybe<Scalars['Int']>>>;
  nin: Maybe<Array<Maybe<Scalars['Int']>>>;
};

export type JpgOptions = {
  quality: Maybe<Scalars['Int']>;
  progressive: Maybe<Scalars['Boolean']>;
};


export type JsonQueryOperatorInput = {
  eq: Maybe<Scalars['JSON']>;
  ne: Maybe<Scalars['JSON']>;
  in: Maybe<Array<Maybe<Scalars['JSON']>>>;
  nin: Maybe<Array<Maybe<Scalars['JSON']>>>;
  regex: Maybe<Scalars['JSON']>;
  glob: Maybe<Scalars['JSON']>;
};

export enum MarkdownExcerptFormats {
  Plain = 'PLAIN',
  Html = 'HTML',
  Markdown = 'MARKDOWN'
}

export type MarkdownHeading = {
  __typename?: 'MarkdownHeading';
  id: Maybe<Scalars['String']>;
  value: Maybe<Scalars['String']>;
  depth: Maybe<Scalars['Int']>;
};

export type MarkdownHeadingFilterInput = {
  id: Maybe<StringQueryOperatorInput>;
  value: Maybe<StringQueryOperatorInput>;
  depth: Maybe<IntQueryOperatorInput>;
};

export type MarkdownHeadingFilterListInput = {
  elemMatch: Maybe<MarkdownHeadingFilterInput>;
};

export enum MarkdownHeadingLevels {
  H1 = 'h1',
  H2 = 'h2',
  H3 = 'h3',
  H4 = 'h4',
  H5 = 'h5',
  H6 = 'h6'
}

export type MarkdownRemark = Node & {
  __typename?: 'MarkdownRemark';
  id: Scalars['ID'];
  frontmatter: Maybe<MarkdownRemarkFrontmatter>;
  excerpt: Maybe<Scalars['String']>;
  rawMarkdownBody: Maybe<Scalars['String']>;
  fileAbsolutePath: Maybe<Scalars['String']>;
  fields: Maybe<MarkdownRemarkFields>;
  html: Maybe<Scalars['String']>;
  htmlAst: Maybe<Scalars['JSON']>;
  excerptAst: Maybe<Scalars['JSON']>;
  headings: Maybe<Array<Maybe<MarkdownHeading>>>;
  timeToRead: Maybe<Scalars['Int']>;
  tableOfContents: Maybe<Scalars['String']>;
  wordCount: Maybe<MarkdownWordCount>;
  parent: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type MarkdownRemarkExcerptArgs = {
  pruneLength?: Maybe<Scalars['Int']>;
  truncate?: Maybe<Scalars['Boolean']>;
  format?: Maybe<MarkdownExcerptFormats>;
};


export type MarkdownRemarkExcerptAstArgs = {
  pruneLength?: Maybe<Scalars['Int']>;
  truncate?: Maybe<Scalars['Boolean']>;
};


export type MarkdownRemarkHeadingsArgs = {
  depth: Maybe<MarkdownHeadingLevels>;
};


export type MarkdownRemarkTableOfContentsArgs = {
  absolute?: Maybe<Scalars['Boolean']>;
  pathToSlugField?: Maybe<Scalars['String']>;
  maxDepth: Maybe<Scalars['Int']>;
  heading: Maybe<Scalars['String']>;
};

export type MarkdownRemarkConnection = {
  __typename?: 'MarkdownRemarkConnection';
  totalCount: Scalars['Int'];
  edges: Array<MarkdownRemarkEdge>;
  nodes: Array<MarkdownRemark>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<MarkdownRemarkGroupConnection>;
};


export type MarkdownRemarkConnectionDistinctArgs = {
  field: MarkdownRemarkFieldsEnum;
};


export type MarkdownRemarkConnectionGroupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: MarkdownRemarkFieldsEnum;
};

export type MarkdownRemarkEdge = {
  __typename?: 'MarkdownRemarkEdge';
  next: Maybe<MarkdownRemark>;
  node: MarkdownRemark;
  previous: Maybe<MarkdownRemark>;
};

export type MarkdownRemarkFields = {
  __typename?: 'MarkdownRemarkFields';
  slug: Maybe<Scalars['String']>;
};

export enum MarkdownRemarkFieldsEnum {
  Id = 'id',
  FrontmatterTitle = 'frontmatter___title',
  FrontmatterContentKey = 'frontmatter___contentKey',
  FrontmatterStartDate = 'frontmatter___startDate',
  FrontmatterEndDate = 'frontmatter___endDate',
  FrontmatterBanner = 'frontmatter___banner',
  Excerpt = 'excerpt',
  RawMarkdownBody = 'rawMarkdownBody',
  FileAbsolutePath = 'fileAbsolutePath',
  FieldsSlug = 'fields___slug',
  Html = 'html',
  HtmlAst = 'htmlAst',
  ExcerptAst = 'excerptAst',
  Headings = 'headings',
  HeadingsId = 'headings___id',
  HeadingsValue = 'headings___value',
  HeadingsDepth = 'headings___depth',
  TimeToRead = 'timeToRead',
  TableOfContents = 'tableOfContents',
  WordCountParagraphs = 'wordCount___paragraphs',
  WordCountSentences = 'wordCount___sentences',
  WordCountWords = 'wordCount___words',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type'
}

export type MarkdownRemarkFieldsFilterInput = {
  slug: Maybe<StringQueryOperatorInput>;
};

export type MarkdownRemarkFilterInput = {
  id: Maybe<StringQueryOperatorInput>;
  frontmatter: Maybe<MarkdownRemarkFrontmatterFilterInput>;
  excerpt: Maybe<StringQueryOperatorInput>;
  rawMarkdownBody: Maybe<StringQueryOperatorInput>;
  fileAbsolutePath: Maybe<StringQueryOperatorInput>;
  fields: Maybe<MarkdownRemarkFieldsFilterInput>;
  html: Maybe<StringQueryOperatorInput>;
  htmlAst: Maybe<JsonQueryOperatorInput>;
  excerptAst: Maybe<JsonQueryOperatorInput>;
  headings: Maybe<MarkdownHeadingFilterListInput>;
  timeToRead: Maybe<IntQueryOperatorInput>;
  tableOfContents: Maybe<StringQueryOperatorInput>;
  wordCount: Maybe<MarkdownWordCountFilterInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};

export type MarkdownRemarkFrontmatter = {
  __typename?: 'MarkdownRemarkFrontmatter';
  title: Maybe<Scalars['String']>;
  contentKey: Maybe<Scalars['String']>;
  startDate: Maybe<Scalars['Date']>;
  endDate: Maybe<Scalars['Date']>;
  banner: Maybe<Scalars['String']>;
};


export type MarkdownRemarkFrontmatterStartDateArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


export type MarkdownRemarkFrontmatterEndDateArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

export type MarkdownRemarkFrontmatterFilterInput = {
  title: Maybe<StringQueryOperatorInput>;
  contentKey: Maybe<StringQueryOperatorInput>;
  startDate: Maybe<DateQueryOperatorInput>;
  endDate: Maybe<DateQueryOperatorInput>;
  banner: Maybe<StringQueryOperatorInput>;
};

export type MarkdownRemarkGroupConnection = {
  __typename?: 'MarkdownRemarkGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<MarkdownRemarkEdge>;
  nodes: Array<MarkdownRemark>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue: Maybe<Scalars['String']>;
};

export type MarkdownRemarkSortInput = {
  fields: Maybe<Array<Maybe<MarkdownRemarkFieldsEnum>>>;
  order: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type MarkdownWordCount = {
  __typename?: 'MarkdownWordCount';
  paragraphs: Maybe<Scalars['Int']>;
  sentences: Maybe<Scalars['Int']>;
  words: Maybe<Scalars['Int']>;
};

export type MarkdownWordCountFilterInput = {
  paragraphs: Maybe<IntQueryOperatorInput>;
  sentences: Maybe<IntQueryOperatorInput>;
  words: Maybe<IntQueryOperatorInput>;
};

export type MetaData = Node & {
  __typename?: 'metaData';
  id: Scalars['ID'];
  parent: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  title: Maybe<Scalars['String']>;
  description: Maybe<Scalars['String']>;
  banner: Maybe<Scalars['String']>;
  links: Maybe<MetaDataLinks>;
  contact: Maybe<MetaDataContact>;
  openingHours: Maybe<MetaDataOpeningHours>;
  address: Maybe<MetaDataAddress>;
};

export type MetaDataAddress = {
  __typename?: 'metaDataAddress';
  label: Maybe<Scalars['String']>;
  street: Maybe<Scalars['String']>;
  city: Maybe<Scalars['String']>;
  postcode: Maybe<Scalars['String']>;
  mapLink: Maybe<Scalars['String']>;
};

export type MetaDataAddressFilterInput = {
  label: Maybe<StringQueryOperatorInput>;
  street: Maybe<StringQueryOperatorInput>;
  city: Maybe<StringQueryOperatorInput>;
  postcode: Maybe<StringQueryOperatorInput>;
  mapLink: Maybe<StringQueryOperatorInput>;
};

export type MetaDataConnection = {
  __typename?: 'metaDataConnection';
  totalCount: Scalars['Int'];
  edges: Array<MetaDataEdge>;
  nodes: Array<MetaData>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<MetaDataGroupConnection>;
};


export type MetaDataConnectionDistinctArgs = {
  field: MetaDataFieldsEnum;
};


export type MetaDataConnectionGroupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: MetaDataFieldsEnum;
};

export type MetaDataContact = {
  __typename?: 'metaDataContact';
  phone: Maybe<Scalars['String']>;
  email: Maybe<Scalars['String']>;
  label: Maybe<Scalars['String']>;
};

export type MetaDataContactFilterInput = {
  phone: Maybe<StringQueryOperatorInput>;
  email: Maybe<StringQueryOperatorInput>;
  label: Maybe<StringQueryOperatorInput>;
};

export type MetaDataEdge = {
  __typename?: 'metaDataEdge';
  next: Maybe<MetaData>;
  node: MetaData;
  previous: Maybe<MetaData>;
};

export enum MetaDataFieldsEnum {
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  Title = 'title',
  Description = 'description',
  Banner = 'banner',
  LinksLabel = 'links___label',
  LinksHome = 'links___home',
  LinksContact = 'links___contact',
  LinksOffer = 'links___offer',
  LinksAbout = 'links___about',
  ContactPhone = 'contact___phone',
  ContactEmail = 'contact___email',
  ContactLabel = 'contact___label',
  OpeningHoursLabel = 'openingHours___label',
  OpeningHoursList = 'openingHours___list',
  OpeningHoursListDays = 'openingHours___list___days',
  OpeningHoursListHours = 'openingHours___list___hours',
  AddressLabel = 'address___label',
  AddressStreet = 'address___street',
  AddressCity = 'address___city',
  AddressPostcode = 'address___postcode',
  AddressMapLink = 'address___mapLink'
}

export type MetaDataFilterInput = {
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
  title: Maybe<StringQueryOperatorInput>;
  description: Maybe<StringQueryOperatorInput>;
  banner: Maybe<StringQueryOperatorInput>;
  links: Maybe<MetaDataLinksFilterInput>;
  contact: Maybe<MetaDataContactFilterInput>;
  openingHours: Maybe<MetaDataOpeningHoursFilterInput>;
  address: Maybe<MetaDataAddressFilterInput>;
};

export type MetaDataGroupConnection = {
  __typename?: 'metaDataGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<MetaDataEdge>;
  nodes: Array<MetaData>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue: Maybe<Scalars['String']>;
};

export type MetaDataLinks = {
  __typename?: 'metaDataLinks';
  label: Maybe<Scalars['String']>;
  home: Maybe<Scalars['String']>;
  contact: Maybe<Scalars['String']>;
  offer: Maybe<Scalars['String']>;
  about: Maybe<Scalars['String']>;
};

export type MetaDataLinksFilterInput = {
  label: Maybe<StringQueryOperatorInput>;
  home: Maybe<StringQueryOperatorInput>;
  contact: Maybe<StringQueryOperatorInput>;
  offer: Maybe<StringQueryOperatorInput>;
  about: Maybe<StringQueryOperatorInput>;
};

export type MetaDataOpeningHours = {
  __typename?: 'metaDataOpeningHours';
  label: Maybe<Scalars['String']>;
  list: Maybe<Array<Maybe<MetaDataOpeningHoursList>>>;
};

export type MetaDataOpeningHoursFilterInput = {
  label: Maybe<StringQueryOperatorInput>;
  list: Maybe<MetaDataOpeningHoursListFilterListInput>;
};

export type MetaDataOpeningHoursList = {
  __typename?: 'metaDataOpeningHoursList';
  days: Maybe<Scalars['String']>;
  hours: Maybe<Scalars['String']>;
};

export type MetaDataOpeningHoursListFilterInput = {
  days: Maybe<StringQueryOperatorInput>;
  hours: Maybe<StringQueryOperatorInput>;
};

export type MetaDataOpeningHoursListFilterListInput = {
  elemMatch: Maybe<MetaDataOpeningHoursListFilterInput>;
};

export type MetaDataSortInput = {
  fields: Maybe<Array<Maybe<MetaDataFieldsEnum>>>;
  order: Maybe<Array<Maybe<SortOrderEnum>>>;
};

/** Node Interface */
export type Node = {
  id: Scalars['ID'];
  parent: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type NodeFilterInput = {
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};

export type NodeFilterListInput = {
  elemMatch: Maybe<NodeFilterInput>;
};

export type Notfound = Node & {
  __typename?: 'notfound';
  id: Scalars['ID'];
  parent: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  go_home_label: Maybe<Scalars['String']>;
  text: Maybe<Scalars['String']>;
  picture: Maybe<Scalars['String']>;
};

export type NotfoundConnection = {
  __typename?: 'notfoundConnection';
  totalCount: Scalars['Int'];
  edges: Array<NotfoundEdge>;
  nodes: Array<Notfound>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<NotfoundGroupConnection>;
};


export type NotfoundConnectionDistinctArgs = {
  field: NotfoundFieldsEnum;
};


export type NotfoundConnectionGroupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: NotfoundFieldsEnum;
};

export type NotfoundEdge = {
  __typename?: 'notfoundEdge';
  next: Maybe<Notfound>;
  node: Notfound;
  previous: Maybe<Notfound>;
};

export enum NotfoundFieldsEnum {
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  GoHomeLabel = 'go_home_label',
  Text = 'text',
  Picture = 'picture'
}

export type NotfoundFilterInput = {
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
  go_home_label: Maybe<StringQueryOperatorInput>;
  text: Maybe<StringQueryOperatorInput>;
  picture: Maybe<StringQueryOperatorInput>;
};

export type NotfoundGroupConnection = {
  __typename?: 'notfoundGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<NotfoundEdge>;
  nodes: Array<Notfound>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue: Maybe<Scalars['String']>;
};

export type NotfoundSortInput = {
  fields: Maybe<Array<Maybe<NotfoundFieldsEnum>>>;
  order: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type Offer = Node & {
  __typename?: 'offer';
  id: Scalars['ID'];
  parent: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  title: Maybe<Scalars['String']>;
  description: Maybe<Scalars['String']>;
  ariaLabels: Maybe<OfferAriaLabels>;
  emptyState: Maybe<OfferEmptyState>;
  scrollUpLabel: Maybe<Scalars['String']>;
  titleGallery: Maybe<Scalars['String']>;
};

export type OfferAriaLabels = {
  __typename?: 'offerAriaLabels';
  closeButton: Maybe<Scalars['String']>;
  nextButton: Maybe<Scalars['String']>;
  prevButton: Maybe<Scalars['String']>;
  galleryModal: Maybe<Scalars['String']>;
};

export type OfferAriaLabelsFilterInput = {
  closeButton: Maybe<StringQueryOperatorInput>;
  nextButton: Maybe<StringQueryOperatorInput>;
  prevButton: Maybe<StringQueryOperatorInput>;
  galleryModal: Maybe<StringQueryOperatorInput>;
};

export type OfferAssortment = Node & {
  __typename?: 'offerAssortment';
  id: Scalars['ID'];
  parent: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  label: Maybe<Scalars['String']>;
  products: Maybe<Array<Maybe<OfferAssortmentProducts>>>;
};

export type OfferAssortmentConnection = {
  __typename?: 'offerAssortmentConnection';
  totalCount: Scalars['Int'];
  edges: Array<OfferAssortmentEdge>;
  nodes: Array<OfferAssortment>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<OfferAssortmentGroupConnection>;
};


export type OfferAssortmentConnectionDistinctArgs = {
  field: OfferAssortmentFieldsEnum;
};


export type OfferAssortmentConnectionGroupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: OfferAssortmentFieldsEnum;
};

export type OfferAssortmentEdge = {
  __typename?: 'offerAssortmentEdge';
  next: Maybe<OfferAssortment>;
  node: OfferAssortment;
  previous: Maybe<OfferAssortment>;
};

export enum OfferAssortmentFieldsEnum {
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  Label = 'label',
  Products = 'products',
  ProductsId = 'products___id',
  ProductsLabel = 'products___label',
  ProductsPictureLabel = 'products___pictureLabel',
  ProductsImages = 'products___images',
  ProductsImagesId = 'products___images___id',
  ProductsImagesImage = 'products___images___image'
}

export type OfferAssortmentFilterInput = {
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
  label: Maybe<StringQueryOperatorInput>;
  products: Maybe<OfferAssortmentProductsFilterListInput>;
};

export type OfferAssortmentGroupConnection = {
  __typename?: 'offerAssortmentGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<OfferAssortmentEdge>;
  nodes: Array<OfferAssortment>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue: Maybe<Scalars['String']>;
};

export type OfferAssortmentProducts = {
  __typename?: 'offerAssortmentProducts';
  id: Maybe<Scalars['String']>;
  label: Maybe<Scalars['String']>;
  pictureLabel: Maybe<Scalars['String']>;
  images: Maybe<Array<Maybe<OfferAssortmentProductsImages>>>;
};

export type OfferAssortmentProductsFilterInput = {
  id: Maybe<StringQueryOperatorInput>;
  label: Maybe<StringQueryOperatorInput>;
  pictureLabel: Maybe<StringQueryOperatorInput>;
  images: Maybe<OfferAssortmentProductsImagesFilterListInput>;
};

export type OfferAssortmentProductsFilterListInput = {
  elemMatch: Maybe<OfferAssortmentProductsFilterInput>;
};

export type OfferAssortmentProductsImages = {
  __typename?: 'offerAssortmentProductsImages';
  id: Maybe<Scalars['String']>;
  image: Maybe<Scalars['String']>;
};

export type OfferAssortmentProductsImagesFilterInput = {
  id: Maybe<StringQueryOperatorInput>;
  image: Maybe<StringQueryOperatorInput>;
};

export type OfferAssortmentProductsImagesFilterListInput = {
  elemMatch: Maybe<OfferAssortmentProductsImagesFilterInput>;
};

export type OfferAssortmentSortInput = {
  fields: Maybe<Array<Maybe<OfferAssortmentFieldsEnum>>>;
  order: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type OfferConnection = {
  __typename?: 'offerConnection';
  totalCount: Scalars['Int'];
  edges: Array<OfferEdge>;
  nodes: Array<Offer>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<OfferGroupConnection>;
};


export type OfferConnectionDistinctArgs = {
  field: OfferFieldsEnum;
};


export type OfferConnectionGroupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: OfferFieldsEnum;
};

export type OfferCraft = Node & {
  __typename?: 'offerCraft';
  id: Scalars['ID'];
  parent: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  label: Maybe<Scalars['String']>;
  products: Maybe<Array<Maybe<OfferCraftProducts>>>;
};

export type OfferCraftConnection = {
  __typename?: 'offerCraftConnection';
  totalCount: Scalars['Int'];
  edges: Array<OfferCraftEdge>;
  nodes: Array<OfferCraft>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<OfferCraftGroupConnection>;
};


export type OfferCraftConnectionDistinctArgs = {
  field: OfferCraftFieldsEnum;
};


export type OfferCraftConnectionGroupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: OfferCraftFieldsEnum;
};

export type OfferCraftEdge = {
  __typename?: 'offerCraftEdge';
  next: Maybe<OfferCraft>;
  node: OfferCraft;
  previous: Maybe<OfferCraft>;
};

export enum OfferCraftFieldsEnum {
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  Label = 'label',
  Products = 'products',
  ProductsId = 'products___id',
  ProductsLabel = 'products___label',
  ProductsImages = 'products___images',
  ProductsImagesId = 'products___images___id',
  ProductsImagesImage = 'products___images___image',
  ProductsPictureLabel = 'products___pictureLabel'
}

export type OfferCraftFilterInput = {
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
  label: Maybe<StringQueryOperatorInput>;
  products: Maybe<OfferCraftProductsFilterListInput>;
};

export type OfferCraftGroupConnection = {
  __typename?: 'offerCraftGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<OfferCraftEdge>;
  nodes: Array<OfferCraft>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue: Maybe<Scalars['String']>;
};

export type OfferCraftProducts = {
  __typename?: 'offerCraftProducts';
  id: Maybe<Scalars['String']>;
  label: Maybe<Scalars['String']>;
  images: Maybe<Array<Maybe<OfferCraftProductsImages>>>;
  pictureLabel: Maybe<Scalars['String']>;
};

export type OfferCraftProductsFilterInput = {
  id: Maybe<StringQueryOperatorInput>;
  label: Maybe<StringQueryOperatorInput>;
  images: Maybe<OfferCraftProductsImagesFilterListInput>;
  pictureLabel: Maybe<StringQueryOperatorInput>;
};

export type OfferCraftProductsFilterListInput = {
  elemMatch: Maybe<OfferCraftProductsFilterInput>;
};

export type OfferCraftProductsImages = {
  __typename?: 'offerCraftProductsImages';
  id: Maybe<Scalars['String']>;
  image: Maybe<Scalars['String']>;
};

export type OfferCraftProductsImagesFilterInput = {
  id: Maybe<StringQueryOperatorInput>;
  image: Maybe<StringQueryOperatorInput>;
};

export type OfferCraftProductsImagesFilterListInput = {
  elemMatch: Maybe<OfferCraftProductsImagesFilterInput>;
};

export type OfferCraftSortInput = {
  fields: Maybe<Array<Maybe<OfferCraftFieldsEnum>>>;
  order: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type OfferEdge = {
  __typename?: 'offerEdge';
  next: Maybe<Offer>;
  node: Offer;
  previous: Maybe<Offer>;
};

export type OfferEmptyState = {
  __typename?: 'offerEmptyState';
  picture: Maybe<Scalars['String']>;
  text: Maybe<Scalars['String']>;
  label: Maybe<Scalars['String']>;
};

export type OfferEmptyStateFilterInput = {
  picture: Maybe<StringQueryOperatorInput>;
  text: Maybe<StringQueryOperatorInput>;
  label: Maybe<StringQueryOperatorInput>;
};

export enum OfferFieldsEnum {
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  Title = 'title',
  Description = 'description',
  AriaLabelsCloseButton = 'ariaLabels___closeButton',
  AriaLabelsNextButton = 'ariaLabels___nextButton',
  AriaLabelsPrevButton = 'ariaLabels___prevButton',
  AriaLabelsGalleryModal = 'ariaLabels___galleryModal',
  EmptyStatePicture = 'emptyState___picture',
  EmptyStateText = 'emptyState___text',
  EmptyStateLabel = 'emptyState___label',
  ScrollUpLabel = 'scrollUpLabel',
  TitleGallery = 'titleGallery'
}

export type OfferFilterInput = {
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
  title: Maybe<StringQueryOperatorInput>;
  description: Maybe<StringQueryOperatorInput>;
  ariaLabels: Maybe<OfferAriaLabelsFilterInput>;
  emptyState: Maybe<OfferEmptyStateFilterInput>;
  scrollUpLabel: Maybe<StringQueryOperatorInput>;
  titleGallery: Maybe<StringQueryOperatorInput>;
};

export type OfferGroupConnection = {
  __typename?: 'offerGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<OfferEdge>;
  nodes: Array<Offer>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue: Maybe<Scalars['String']>;
};

export type OfferSortInput = {
  fields: Maybe<Array<Maybe<OfferFieldsEnum>>>;
  order: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type PageInfo = {
  __typename?: 'PageInfo';
  currentPage: Scalars['Int'];
  hasPreviousPage: Scalars['Boolean'];
  hasNextPage: Scalars['Boolean'];
  itemCount: Scalars['Int'];
  pageCount: Scalars['Int'];
  perPage: Maybe<Scalars['Int']>;
  totalCount: Scalars['Int'];
};

export type PngOptions = {
  quality: Maybe<Scalars['Int']>;
  compressionSpeed: Maybe<Scalars['Int']>;
};

export type Potrace = {
  turnPolicy: Maybe<PotraceTurnPolicy>;
  turdSize: Maybe<Scalars['Float']>;
  alphaMax: Maybe<Scalars['Float']>;
  optCurve: Maybe<Scalars['Boolean']>;
  optTolerance: Maybe<Scalars['Float']>;
  threshold: Maybe<Scalars['Int']>;
  blackOnWhite: Maybe<Scalars['Boolean']>;
  color: Maybe<Scalars['String']>;
  background: Maybe<Scalars['String']>;
};

export enum PotraceTurnPolicy {
  TurnpolicyBlack = 'TURNPOLICY_BLACK',
  TurnpolicyWhite = 'TURNPOLICY_WHITE',
  TurnpolicyLeft = 'TURNPOLICY_LEFT',
  TurnpolicyRight = 'TURNPOLICY_RIGHT',
  TurnpolicyMinority = 'TURNPOLICY_MINORITY',
  TurnpolicyMajority = 'TURNPOLICY_MAJORITY'
}

export type Query = {
  __typename?: 'Query';
  file: Maybe<File>;
  allFile: FileConnection;
  directory: Maybe<Directory>;
  allDirectory: DirectoryConnection;
  site: Maybe<Site>;
  allSite: SiteConnection;
  sitePage: Maybe<SitePage>;
  allSitePage: SitePageConnection;
  imageSharp: Maybe<ImageSharp>;
  allImageSharp: ImageSharpConnection;
  markdownRemark: Maybe<MarkdownRemark>;
  allMarkdownRemark: MarkdownRemarkConnection;
  blog: Maybe<Blog>;
  allBlog: BlogConnection;
  offerCraft: Maybe<OfferCraft>;
  allOfferCraft: OfferCraftConnection;
  offer: Maybe<Offer>;
  allOffer: OfferConnection;
  offerAssortment: Maybe<OfferAssortment>;
  allOfferAssortment: OfferAssortmentConnection;
  notfound: Maybe<Notfound>;
  allNotfound: NotfoundConnection;
  home: Maybe<Home>;
  allHome: HomeConnection;
  metaData: Maybe<MetaData>;
  allMetaData: MetaDataConnection;
  contact: Maybe<Contact>;
  allContact: ContactConnection;
  about: Maybe<About>;
  allAbout: AboutConnection;
  siteBuildMetadata: Maybe<SiteBuildMetadata>;
  allSiteBuildMetadata: SiteBuildMetadataConnection;
  sitePlugin: Maybe<SitePlugin>;
  allSitePlugin: SitePluginConnection;
};


export type QueryFileArgs = {
  sourceInstanceName: Maybe<StringQueryOperatorInput>;
  absolutePath: Maybe<StringQueryOperatorInput>;
  relativePath: Maybe<StringQueryOperatorInput>;
  extension: Maybe<StringQueryOperatorInput>;
  size: Maybe<IntQueryOperatorInput>;
  prettySize: Maybe<StringQueryOperatorInput>;
  modifiedTime: Maybe<DateQueryOperatorInput>;
  accessTime: Maybe<DateQueryOperatorInput>;
  changeTime: Maybe<DateQueryOperatorInput>;
  birthTime: Maybe<DateQueryOperatorInput>;
  root: Maybe<StringQueryOperatorInput>;
  dir: Maybe<StringQueryOperatorInput>;
  base: Maybe<StringQueryOperatorInput>;
  ext: Maybe<StringQueryOperatorInput>;
  name: Maybe<StringQueryOperatorInput>;
  relativeDirectory: Maybe<StringQueryOperatorInput>;
  dev: Maybe<IntQueryOperatorInput>;
  mode: Maybe<IntQueryOperatorInput>;
  nlink: Maybe<IntQueryOperatorInput>;
  uid: Maybe<IntQueryOperatorInput>;
  gid: Maybe<IntQueryOperatorInput>;
  rdev: Maybe<IntQueryOperatorInput>;
  ino: Maybe<FloatQueryOperatorInput>;
  atimeMs: Maybe<FloatQueryOperatorInput>;
  mtimeMs: Maybe<FloatQueryOperatorInput>;
  ctimeMs: Maybe<FloatQueryOperatorInput>;
  atime: Maybe<DateQueryOperatorInput>;
  mtime: Maybe<DateQueryOperatorInput>;
  ctime: Maybe<DateQueryOperatorInput>;
  birthtime: Maybe<DateQueryOperatorInput>;
  birthtimeMs: Maybe<FloatQueryOperatorInput>;
  blksize: Maybe<IntQueryOperatorInput>;
  blocks: Maybe<IntQueryOperatorInput>;
  publicURL: Maybe<StringQueryOperatorInput>;
  childImageSharp: Maybe<ImageSharpFilterInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
  childAbout: Maybe<AboutFilterInput>;
  childBlog: Maybe<BlogFilterInput>;
  childContact: Maybe<ContactFilterInput>;
  childHome: Maybe<HomeFilterInput>;
  childMetaData: Maybe<MetaDataFilterInput>;
  childNotfound: Maybe<NotfoundFilterInput>;
  childOffer: Maybe<OfferFilterInput>;
  childOfferAssortment: Maybe<OfferAssortmentFilterInput>;
  childOfferCraft: Maybe<OfferCraftFilterInput>;
  childMarkdownRemark: Maybe<MarkdownRemarkFilterInput>;
};


export type QueryAllFileArgs = {
  filter: Maybe<FileFilterInput>;
  sort: Maybe<FileSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


export type QueryDirectoryArgs = {
  sourceInstanceName: Maybe<StringQueryOperatorInput>;
  absolutePath: Maybe<StringQueryOperatorInput>;
  relativePath: Maybe<StringQueryOperatorInput>;
  extension: Maybe<StringQueryOperatorInput>;
  size: Maybe<IntQueryOperatorInput>;
  prettySize: Maybe<StringQueryOperatorInput>;
  modifiedTime: Maybe<DateQueryOperatorInput>;
  accessTime: Maybe<DateQueryOperatorInput>;
  changeTime: Maybe<DateQueryOperatorInput>;
  birthTime: Maybe<DateQueryOperatorInput>;
  root: Maybe<StringQueryOperatorInput>;
  dir: Maybe<StringQueryOperatorInput>;
  base: Maybe<StringQueryOperatorInput>;
  ext: Maybe<StringQueryOperatorInput>;
  name: Maybe<StringQueryOperatorInput>;
  relativeDirectory: Maybe<StringQueryOperatorInput>;
  dev: Maybe<IntQueryOperatorInput>;
  mode: Maybe<IntQueryOperatorInput>;
  nlink: Maybe<IntQueryOperatorInput>;
  uid: Maybe<IntQueryOperatorInput>;
  gid: Maybe<IntQueryOperatorInput>;
  rdev: Maybe<IntQueryOperatorInput>;
  ino: Maybe<FloatQueryOperatorInput>;
  atimeMs: Maybe<FloatQueryOperatorInput>;
  mtimeMs: Maybe<FloatQueryOperatorInput>;
  ctimeMs: Maybe<FloatQueryOperatorInput>;
  atime: Maybe<DateQueryOperatorInput>;
  mtime: Maybe<DateQueryOperatorInput>;
  ctime: Maybe<DateQueryOperatorInput>;
  birthtime: Maybe<DateQueryOperatorInput>;
  birthtimeMs: Maybe<FloatQueryOperatorInput>;
  blksize: Maybe<IntQueryOperatorInput>;
  blocks: Maybe<IntQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


export type QueryAllDirectoryArgs = {
  filter: Maybe<DirectoryFilterInput>;
  sort: Maybe<DirectorySortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


export type QuerySiteArgs = {
  buildTime: Maybe<DateQueryOperatorInput>;
  siteMetadata: Maybe<SiteSiteMetadataFilterInput>;
  port: Maybe<IntQueryOperatorInput>;
  host: Maybe<StringQueryOperatorInput>;
  polyfill: Maybe<BooleanQueryOperatorInput>;
  pathPrefix: Maybe<StringQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


export type QueryAllSiteArgs = {
  filter: Maybe<SiteFilterInput>;
  sort: Maybe<SiteSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


export type QuerySitePageArgs = {
  path: Maybe<StringQueryOperatorInput>;
  component: Maybe<StringQueryOperatorInput>;
  internalComponentName: Maybe<StringQueryOperatorInput>;
  componentChunkName: Maybe<StringQueryOperatorInput>;
  matchPath: Maybe<StringQueryOperatorInput>;
  isCreatedByStatefulCreatePages: Maybe<BooleanQueryOperatorInput>;
  context: Maybe<SitePageContextFilterInput>;
  pluginCreator: Maybe<SitePluginFilterInput>;
  pluginCreatorId: Maybe<StringQueryOperatorInput>;
  componentPath: Maybe<StringQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


export type QueryAllSitePageArgs = {
  filter: Maybe<SitePageFilterInput>;
  sort: Maybe<SitePageSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


export type QueryImageSharpArgs = {
  fixed: Maybe<ImageSharpFixedFilterInput>;
  resolutions: Maybe<ImageSharpResolutionsFilterInput>;
  fluid: Maybe<ImageSharpFluidFilterInput>;
  sizes: Maybe<ImageSharpSizesFilterInput>;
  gatsbyImageData: Maybe<JsonQueryOperatorInput>;
  original: Maybe<ImageSharpOriginalFilterInput>;
  resize: Maybe<ImageSharpResizeFilterInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


export type QueryAllImageSharpArgs = {
  filter: Maybe<ImageSharpFilterInput>;
  sort: Maybe<ImageSharpSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


export type QueryMarkdownRemarkArgs = {
  id: Maybe<StringQueryOperatorInput>;
  frontmatter: Maybe<MarkdownRemarkFrontmatterFilterInput>;
  excerpt: Maybe<StringQueryOperatorInput>;
  rawMarkdownBody: Maybe<StringQueryOperatorInput>;
  fileAbsolutePath: Maybe<StringQueryOperatorInput>;
  fields: Maybe<MarkdownRemarkFieldsFilterInput>;
  html: Maybe<StringQueryOperatorInput>;
  htmlAst: Maybe<JsonQueryOperatorInput>;
  excerptAst: Maybe<JsonQueryOperatorInput>;
  headings: Maybe<MarkdownHeadingFilterListInput>;
  timeToRead: Maybe<IntQueryOperatorInput>;
  tableOfContents: Maybe<StringQueryOperatorInput>;
  wordCount: Maybe<MarkdownWordCountFilterInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


export type QueryAllMarkdownRemarkArgs = {
  filter: Maybe<MarkdownRemarkFilterInput>;
  sort: Maybe<MarkdownRemarkSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


export type QueryBlogArgs = {
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
  return: Maybe<StringQueryOperatorInput>;
  default_pic: Maybe<StringQueryOperatorInput>;
  expireLabel: Maybe<StringQueryOperatorInput>;
  dateLabel: Maybe<StringQueryOperatorInput>;
};


export type QueryAllBlogArgs = {
  filter: Maybe<BlogFilterInput>;
  sort: Maybe<BlogSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


export type QueryOfferCraftArgs = {
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
  label: Maybe<StringQueryOperatorInput>;
  products: Maybe<OfferCraftProductsFilterListInput>;
};


export type QueryAllOfferCraftArgs = {
  filter: Maybe<OfferCraftFilterInput>;
  sort: Maybe<OfferCraftSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


export type QueryOfferArgs = {
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
  title: Maybe<StringQueryOperatorInput>;
  description: Maybe<StringQueryOperatorInput>;
  ariaLabels: Maybe<OfferAriaLabelsFilterInput>;
  emptyState: Maybe<OfferEmptyStateFilterInput>;
  scrollUpLabel: Maybe<StringQueryOperatorInput>;
  titleGallery: Maybe<StringQueryOperatorInput>;
};


export type QueryAllOfferArgs = {
  filter: Maybe<OfferFilterInput>;
  sort: Maybe<OfferSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


export type QueryOfferAssortmentArgs = {
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
  label: Maybe<StringQueryOperatorInput>;
  products: Maybe<OfferAssortmentProductsFilterListInput>;
};


export type QueryAllOfferAssortmentArgs = {
  filter: Maybe<OfferAssortmentFilterInput>;
  sort: Maybe<OfferAssortmentSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


export type QueryNotfoundArgs = {
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
  go_home_label: Maybe<StringQueryOperatorInput>;
  text: Maybe<StringQueryOperatorInput>;
  picture: Maybe<StringQueryOperatorInput>;
};


export type QueryAllNotfoundArgs = {
  filter: Maybe<NotfoundFilterInput>;
  sort: Maybe<NotfoundSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


export type QueryHomeArgs = {
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
  title: Maybe<StringQueryOperatorInput>;
  description: Maybe<StringQueryOperatorInput>;
  readmore: Maybe<StringQueryOperatorInput>;
  subtitle: Maybe<StringQueryOperatorInput>;
  sidePicture: Maybe<StringQueryOperatorInput>;
};


export type QueryAllHomeArgs = {
  filter: Maybe<HomeFilterInput>;
  sort: Maybe<HomeSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


export type QueryMetaDataArgs = {
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
  title: Maybe<StringQueryOperatorInput>;
  description: Maybe<StringQueryOperatorInput>;
  banner: Maybe<StringQueryOperatorInput>;
  links: Maybe<MetaDataLinksFilterInput>;
  contact: Maybe<MetaDataContactFilterInput>;
  openingHours: Maybe<MetaDataOpeningHoursFilterInput>;
  address: Maybe<MetaDataAddressFilterInput>;
};


export type QueryAllMetaDataArgs = {
  filter: Maybe<MetaDataFilterInput>;
  sort: Maybe<MetaDataSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


export type QueryContactArgs = {
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
  title: Maybe<StringQueryOperatorInput>;
  description: Maybe<StringQueryOperatorInput>;
  form: Maybe<ContactFormFilterInput>;
  formTitle: Maybe<StringQueryOperatorInput>;
};


export type QueryAllContactArgs = {
  filter: Maybe<ContactFilterInput>;
  sort: Maybe<ContactSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


export type QueryAboutArgs = {
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
  title: Maybe<StringQueryOperatorInput>;
  description: Maybe<StringQueryOperatorInput>;
  videoTitle: Maybe<StringQueryOperatorInput>;
  videoSrcURL: Maybe<StringQueryOperatorInput>;
  gallery: Maybe<AboutGalleryFilterListInput>;
  galleryTitle: Maybe<StringQueryOperatorInput>;
  ariaLabels: Maybe<AboutAriaLabelsFilterInput>;
  pictureLabel: Maybe<StringQueryOperatorInput>;
};


export type QueryAllAboutArgs = {
  filter: Maybe<AboutFilterInput>;
  sort: Maybe<AboutSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


export type QuerySiteBuildMetadataArgs = {
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
  buildTime: Maybe<DateQueryOperatorInput>;
};


export type QueryAllSiteBuildMetadataArgs = {
  filter: Maybe<SiteBuildMetadataFilterInput>;
  sort: Maybe<SiteBuildMetadataSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


export type QuerySitePluginArgs = {
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
  resolve: Maybe<StringQueryOperatorInput>;
  name: Maybe<StringQueryOperatorInput>;
  version: Maybe<StringQueryOperatorInput>;
  pluginOptions: Maybe<SitePluginPluginOptionsFilterInput>;
  nodeAPIs: Maybe<StringQueryOperatorInput>;
  browserAPIs: Maybe<StringQueryOperatorInput>;
  ssrAPIs: Maybe<StringQueryOperatorInput>;
  pluginFilepath: Maybe<StringQueryOperatorInput>;
  packageJson: Maybe<SitePluginPackageJsonFilterInput>;
};


export type QueryAllSitePluginArgs = {
  filter: Maybe<SitePluginFilterInput>;
  sort: Maybe<SitePluginSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};

export type Site = Node & {
  __typename?: 'Site';
  buildTime: Maybe<Scalars['Date']>;
  siteMetadata: Maybe<SiteSiteMetadata>;
  port: Maybe<Scalars['Int']>;
  host: Maybe<Scalars['String']>;
  polyfill: Maybe<Scalars['Boolean']>;
  pathPrefix: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  parent: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type SiteBuildTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

export type SiteBuildMetadata = Node & {
  __typename?: 'SiteBuildMetadata';
  id: Scalars['ID'];
  parent: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  buildTime: Maybe<Scalars['Date']>;
};


export type SiteBuildMetadataBuildTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

export type SiteBuildMetadataConnection = {
  __typename?: 'SiteBuildMetadataConnection';
  totalCount: Scalars['Int'];
  edges: Array<SiteBuildMetadataEdge>;
  nodes: Array<SiteBuildMetadata>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SiteBuildMetadataGroupConnection>;
};


export type SiteBuildMetadataConnectionDistinctArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataConnectionGroupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: SiteBuildMetadataFieldsEnum;
};

export type SiteBuildMetadataEdge = {
  __typename?: 'SiteBuildMetadataEdge';
  next: Maybe<SiteBuildMetadata>;
  node: SiteBuildMetadata;
  previous: Maybe<SiteBuildMetadata>;
};

export enum SiteBuildMetadataFieldsEnum {
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  BuildTime = 'buildTime'
}

export type SiteBuildMetadataFilterInput = {
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
  buildTime: Maybe<DateQueryOperatorInput>;
};

export type SiteBuildMetadataGroupConnection = {
  __typename?: 'SiteBuildMetadataGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<SiteBuildMetadataEdge>;
  nodes: Array<SiteBuildMetadata>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue: Maybe<Scalars['String']>;
};

export type SiteBuildMetadataSortInput = {
  fields: Maybe<Array<Maybe<SiteBuildMetadataFieldsEnum>>>;
  order: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SiteConnection = {
  __typename?: 'SiteConnection';
  totalCount: Scalars['Int'];
  edges: Array<SiteEdge>;
  nodes: Array<Site>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SiteGroupConnection>;
};


export type SiteConnectionDistinctArgs = {
  field: SiteFieldsEnum;
};


export type SiteConnectionGroupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: SiteFieldsEnum;
};

export type SiteEdge = {
  __typename?: 'SiteEdge';
  next: Maybe<Site>;
  node: Site;
  previous: Maybe<Site>;
};

export enum SiteFieldsEnum {
  BuildTime = 'buildTime',
  SiteMetadataTitle = 'siteMetadata___title',
  SiteMetadataDescription = 'siteMetadata___description',
  SiteMetadataMenuLinks = 'siteMetadata___menuLinks',
  SiteMetadataMenuLinksName = 'siteMetadata___menuLinks___name',
  SiteMetadataMenuLinksLink = 'siteMetadata___menuLinks___link',
  Port = 'port',
  Host = 'host',
  Polyfill = 'polyfill',
  PathPrefix = 'pathPrefix',
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type'
}

export type SiteFilterInput = {
  buildTime: Maybe<DateQueryOperatorInput>;
  siteMetadata: Maybe<SiteSiteMetadataFilterInput>;
  port: Maybe<IntQueryOperatorInput>;
  host: Maybe<StringQueryOperatorInput>;
  polyfill: Maybe<BooleanQueryOperatorInput>;
  pathPrefix: Maybe<StringQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};

export type SiteGroupConnection = {
  __typename?: 'SiteGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<SiteEdge>;
  nodes: Array<Site>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue: Maybe<Scalars['String']>;
};

export type SitePage = Node & {
  __typename?: 'SitePage';
  path: Scalars['String'];
  component: Scalars['String'];
  internalComponentName: Scalars['String'];
  componentChunkName: Scalars['String'];
  matchPath: Maybe<Scalars['String']>;
  isCreatedByStatefulCreatePages: Maybe<Scalars['Boolean']>;
  context: Maybe<SitePageContext>;
  pluginCreator: Maybe<SitePlugin>;
  pluginCreatorId: Maybe<Scalars['String']>;
  componentPath: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  parent: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type SitePageConnection = {
  __typename?: 'SitePageConnection';
  totalCount: Scalars['Int'];
  edges: Array<SitePageEdge>;
  nodes: Array<SitePage>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SitePageGroupConnection>;
};


export type SitePageConnectionDistinctArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageConnectionGroupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: SitePageFieldsEnum;
};

export type SitePageContext = {
  __typename?: 'SitePageContext';
  language: Maybe<Scalars['String']>;
  slug: Maybe<Scalars['String']>;
  langKey: Maybe<Scalars['String']>;
};

export type SitePageContextFilterInput = {
  language: Maybe<StringQueryOperatorInput>;
  slug: Maybe<StringQueryOperatorInput>;
  langKey: Maybe<StringQueryOperatorInput>;
};

export type SitePageEdge = {
  __typename?: 'SitePageEdge';
  next: Maybe<SitePage>;
  node: SitePage;
  previous: Maybe<SitePage>;
};

export enum SitePageFieldsEnum {
  Path = 'path',
  Component = 'component',
  InternalComponentName = 'internalComponentName',
  ComponentChunkName = 'componentChunkName',
  MatchPath = 'matchPath',
  IsCreatedByStatefulCreatePages = 'isCreatedByStatefulCreatePages',
  ContextLanguage = 'context___language',
  ContextSlug = 'context___slug',
  ContextLangKey = 'context___langKey',
  PluginCreatorId = 'pluginCreator___id',
  PluginCreatorParentId = 'pluginCreator___parent___id',
  PluginCreatorParentParentId = 'pluginCreator___parent___parent___id',
  PluginCreatorParentParentChildren = 'pluginCreator___parent___parent___children',
  PluginCreatorParentChildren = 'pluginCreator___parent___children',
  PluginCreatorParentChildrenId = 'pluginCreator___parent___children___id',
  PluginCreatorParentChildrenChildren = 'pluginCreator___parent___children___children',
  PluginCreatorParentInternalContent = 'pluginCreator___parent___internal___content',
  PluginCreatorParentInternalContentDigest = 'pluginCreator___parent___internal___contentDigest',
  PluginCreatorParentInternalDescription = 'pluginCreator___parent___internal___description',
  PluginCreatorParentInternalFieldOwners = 'pluginCreator___parent___internal___fieldOwners',
  PluginCreatorParentInternalIgnoreType = 'pluginCreator___parent___internal___ignoreType',
  PluginCreatorParentInternalMediaType = 'pluginCreator___parent___internal___mediaType',
  PluginCreatorParentInternalOwner = 'pluginCreator___parent___internal___owner',
  PluginCreatorParentInternalType = 'pluginCreator___parent___internal___type',
  PluginCreatorChildren = 'pluginCreator___children',
  PluginCreatorChildrenId = 'pluginCreator___children___id',
  PluginCreatorChildrenParentId = 'pluginCreator___children___parent___id',
  PluginCreatorChildrenParentChildren = 'pluginCreator___children___parent___children',
  PluginCreatorChildrenChildren = 'pluginCreator___children___children',
  PluginCreatorChildrenChildrenId = 'pluginCreator___children___children___id',
  PluginCreatorChildrenChildrenChildren = 'pluginCreator___children___children___children',
  PluginCreatorChildrenInternalContent = 'pluginCreator___children___internal___content',
  PluginCreatorChildrenInternalContentDigest = 'pluginCreator___children___internal___contentDigest',
  PluginCreatorChildrenInternalDescription = 'pluginCreator___children___internal___description',
  PluginCreatorChildrenInternalFieldOwners = 'pluginCreator___children___internal___fieldOwners',
  PluginCreatorChildrenInternalIgnoreType = 'pluginCreator___children___internal___ignoreType',
  PluginCreatorChildrenInternalMediaType = 'pluginCreator___children___internal___mediaType',
  PluginCreatorChildrenInternalOwner = 'pluginCreator___children___internal___owner',
  PluginCreatorChildrenInternalType = 'pluginCreator___children___internal___type',
  PluginCreatorInternalContent = 'pluginCreator___internal___content',
  PluginCreatorInternalContentDigest = 'pluginCreator___internal___contentDigest',
  PluginCreatorInternalDescription = 'pluginCreator___internal___description',
  PluginCreatorInternalFieldOwners = 'pluginCreator___internal___fieldOwners',
  PluginCreatorInternalIgnoreType = 'pluginCreator___internal___ignoreType',
  PluginCreatorInternalMediaType = 'pluginCreator___internal___mediaType',
  PluginCreatorInternalOwner = 'pluginCreator___internal___owner',
  PluginCreatorInternalType = 'pluginCreator___internal___type',
  PluginCreatorResolve = 'pluginCreator___resolve',
  PluginCreatorName = 'pluginCreator___name',
  PluginCreatorVersion = 'pluginCreator___version',
  PluginCreatorPluginOptionsIsTsx = 'pluginCreator___pluginOptions___isTSX',
  PluginCreatorPluginOptionsJsxPragma = 'pluginCreator___pluginOptions___jsxPragma',
  PluginCreatorPluginOptionsAllExtensions = 'pluginCreator___pluginOptions___allExtensions',
  PluginCreatorPluginOptionsImplementationInfo = 'pluginCreator___pluginOptions___implementation___info',
  PluginCreatorPluginOptionsData = 'pluginCreator___pluginOptions___data',
  PluginCreatorPluginOptionsIncludePaths = 'pluginCreator___pluginOptions___includePaths',
  PluginCreatorPluginOptionsIndentedSyntax = 'pluginCreator___pluginOptions___indentedSyntax',
  PluginCreatorPluginOptionsIndentType = 'pluginCreator___pluginOptions___indentType',
  PluginCreatorPluginOptionsIndentWidth = 'pluginCreator___pluginOptions___indentWidth',
  PluginCreatorPluginOptionsLinefeed = 'pluginCreator___pluginOptions___linefeed',
  PluginCreatorPluginOptionsOmitSourceMapUrl = 'pluginCreator___pluginOptions___omitSourceMapUrl',
  PluginCreatorPluginOptionsPrecision = 'pluginCreator___pluginOptions___precision',
  PluginCreatorPluginOptionsSourceComments = 'pluginCreator___pluginOptions___sourceComments',
  PluginCreatorPluginOptionsSourceMapContents = 'pluginCreator___pluginOptions___sourceMapContents',
  PluginCreatorPluginOptionsSourceMapEmbed = 'pluginCreator___pluginOptions___sourceMapEmbed',
  PluginCreatorPluginOptionsPathToConfigModule = 'pluginCreator___pluginOptions___pathToConfigModule',
  PluginCreatorPluginOptionsStages = 'pluginCreator___pluginOptions___stages',
  PluginCreatorPluginOptionsOptionsEmitWarning = 'pluginCreator___pluginOptions___options___emitWarning',
  PluginCreatorPluginOptionsOptionsFailOnError = 'pluginCreator___pluginOptions___options___failOnError',
  PluginCreatorPluginOptionsName = 'pluginCreator___pluginOptions___name',
  PluginCreatorPluginOptionsPath = 'pluginCreator___pluginOptions___path',
  PluginCreatorPluginOptionsBase64Width = 'pluginCreator___pluginOptions___base64Width',
  PluginCreatorPluginOptionsStripMetadata = 'pluginCreator___pluginOptions___stripMetadata',
  PluginCreatorPluginOptionsDefaultQuality = 'pluginCreator___pluginOptions___defaultQuality',
  PluginCreatorPluginOptionsFailOnError = 'pluginCreator___pluginOptions___failOnError',
  PluginCreatorPluginOptionsModulePath = 'pluginCreator___pluginOptions___modulePath',
  PluginCreatorPluginOptionsHtmlTitle = 'pluginCreator___pluginOptions___htmlTitle',
  PluginCreatorPluginOptionsHtmlFavicon = 'pluginCreator___pluginOptions___htmlFavicon',
  PluginCreatorPluginOptionsLangKeyDefault = 'pluginCreator___pluginOptions___langKeyDefault',
  PluginCreatorPluginOptionsUseLangKeyLayout = 'pluginCreator___pluginOptions___useLangKeyLayout',
  PluginCreatorPluginOptionsPrefixDefault = 'pluginCreator___pluginOptions___prefixDefault',
  PluginCreatorPluginOptionsAnalyzerMode = 'pluginCreator___pluginOptions___analyzerMode',
  PluginCreatorPluginOptionsPathCheck = 'pluginCreator___pluginOptions___pathCheck',
  PluginCreatorNodeApIs = 'pluginCreator___nodeAPIs',
  PluginCreatorBrowserApIs = 'pluginCreator___browserAPIs',
  PluginCreatorSsrApIs = 'pluginCreator___ssrAPIs',
  PluginCreatorPluginFilepath = 'pluginCreator___pluginFilepath',
  PluginCreatorPackageJsonName = 'pluginCreator___packageJson___name',
  PluginCreatorPackageJsonDescription = 'pluginCreator___packageJson___description',
  PluginCreatorPackageJsonVersion = 'pluginCreator___packageJson___version',
  PluginCreatorPackageJsonMain = 'pluginCreator___packageJson___main',
  PluginCreatorPackageJsonLicense = 'pluginCreator___packageJson___license',
  PluginCreatorPackageJsonDependencies = 'pluginCreator___packageJson___dependencies',
  PluginCreatorPackageJsonDependenciesName = 'pluginCreator___packageJson___dependencies___name',
  PluginCreatorPackageJsonDependenciesVersion = 'pluginCreator___packageJson___dependencies___version',
  PluginCreatorPackageJsonDevDependencies = 'pluginCreator___packageJson___devDependencies',
  PluginCreatorPackageJsonDevDependenciesName = 'pluginCreator___packageJson___devDependencies___name',
  PluginCreatorPackageJsonDevDependenciesVersion = 'pluginCreator___packageJson___devDependencies___version',
  PluginCreatorPackageJsonPeerDependencies = 'pluginCreator___packageJson___peerDependencies',
  PluginCreatorPackageJsonPeerDependenciesName = 'pluginCreator___packageJson___peerDependencies___name',
  PluginCreatorPackageJsonPeerDependenciesVersion = 'pluginCreator___packageJson___peerDependencies___version',
  PluginCreatorPackageJsonKeywords = 'pluginCreator___packageJson___keywords',
  PluginCreatorId = 'pluginCreatorId',
  ComponentPath = 'componentPath',
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type'
}

export type SitePageFilterInput = {
  path: Maybe<StringQueryOperatorInput>;
  component: Maybe<StringQueryOperatorInput>;
  internalComponentName: Maybe<StringQueryOperatorInput>;
  componentChunkName: Maybe<StringQueryOperatorInput>;
  matchPath: Maybe<StringQueryOperatorInput>;
  isCreatedByStatefulCreatePages: Maybe<BooleanQueryOperatorInput>;
  context: Maybe<SitePageContextFilterInput>;
  pluginCreator: Maybe<SitePluginFilterInput>;
  pluginCreatorId: Maybe<StringQueryOperatorInput>;
  componentPath: Maybe<StringQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};

export type SitePageGroupConnection = {
  __typename?: 'SitePageGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<SitePageEdge>;
  nodes: Array<SitePage>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue: Maybe<Scalars['String']>;
};

export type SitePageSortInput = {
  fields: Maybe<Array<Maybe<SitePageFieldsEnum>>>;
  order: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SitePlugin = Node & {
  __typename?: 'SitePlugin';
  id: Scalars['ID'];
  parent: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  resolve: Maybe<Scalars['String']>;
  name: Maybe<Scalars['String']>;
  version: Maybe<Scalars['String']>;
  pluginOptions: Maybe<SitePluginPluginOptions>;
  nodeAPIs: Maybe<Array<Maybe<Scalars['String']>>>;
  browserAPIs: Maybe<Array<Maybe<Scalars['String']>>>;
  ssrAPIs: Maybe<Array<Maybe<Scalars['String']>>>;
  pluginFilepath: Maybe<Scalars['String']>;
  packageJson: Maybe<SitePluginPackageJson>;
};

export type SitePluginConnection = {
  __typename?: 'SitePluginConnection';
  totalCount: Scalars['Int'];
  edges: Array<SitePluginEdge>;
  nodes: Array<SitePlugin>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SitePluginGroupConnection>;
};


export type SitePluginConnectionDistinctArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginConnectionGroupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: SitePluginFieldsEnum;
};

export type SitePluginEdge = {
  __typename?: 'SitePluginEdge';
  next: Maybe<SitePlugin>;
  node: SitePlugin;
  previous: Maybe<SitePlugin>;
};

export enum SitePluginFieldsEnum {
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  Resolve = 'resolve',
  Name = 'name',
  Version = 'version',
  PluginOptionsIsTsx = 'pluginOptions___isTSX',
  PluginOptionsJsxPragma = 'pluginOptions___jsxPragma',
  PluginOptionsAllExtensions = 'pluginOptions___allExtensions',
  PluginOptionsImplementationInfo = 'pluginOptions___implementation___info',
  PluginOptionsData = 'pluginOptions___data',
  PluginOptionsIncludePaths = 'pluginOptions___includePaths',
  PluginOptionsIndentedSyntax = 'pluginOptions___indentedSyntax',
  PluginOptionsIndentType = 'pluginOptions___indentType',
  PluginOptionsIndentWidth = 'pluginOptions___indentWidth',
  PluginOptionsLinefeed = 'pluginOptions___linefeed',
  PluginOptionsOmitSourceMapUrl = 'pluginOptions___omitSourceMapUrl',
  PluginOptionsPrecision = 'pluginOptions___precision',
  PluginOptionsSourceComments = 'pluginOptions___sourceComments',
  PluginOptionsSourceMapContents = 'pluginOptions___sourceMapContents',
  PluginOptionsSourceMapEmbed = 'pluginOptions___sourceMapEmbed',
  PluginOptionsPathToConfigModule = 'pluginOptions___pathToConfigModule',
  PluginOptionsStages = 'pluginOptions___stages',
  PluginOptionsOptionsEmitWarning = 'pluginOptions___options___emitWarning',
  PluginOptionsOptionsFailOnError = 'pluginOptions___options___failOnError',
  PluginOptionsName = 'pluginOptions___name',
  PluginOptionsPath = 'pluginOptions___path',
  PluginOptionsBase64Width = 'pluginOptions___base64Width',
  PluginOptionsStripMetadata = 'pluginOptions___stripMetadata',
  PluginOptionsDefaultQuality = 'pluginOptions___defaultQuality',
  PluginOptionsFailOnError = 'pluginOptions___failOnError',
  PluginOptionsModulePath = 'pluginOptions___modulePath',
  PluginOptionsHtmlTitle = 'pluginOptions___htmlTitle',
  PluginOptionsHtmlFavicon = 'pluginOptions___htmlFavicon',
  PluginOptionsLangKeyDefault = 'pluginOptions___langKeyDefault',
  PluginOptionsUseLangKeyLayout = 'pluginOptions___useLangKeyLayout',
  PluginOptionsPrefixDefault = 'pluginOptions___prefixDefault',
  PluginOptionsAnalyzerMode = 'pluginOptions___analyzerMode',
  PluginOptionsPathCheck = 'pluginOptions___pathCheck',
  NodeApIs = 'nodeAPIs',
  BrowserApIs = 'browserAPIs',
  SsrApIs = 'ssrAPIs',
  PluginFilepath = 'pluginFilepath',
  PackageJsonName = 'packageJson___name',
  PackageJsonDescription = 'packageJson___description',
  PackageJsonVersion = 'packageJson___version',
  PackageJsonMain = 'packageJson___main',
  PackageJsonLicense = 'packageJson___license',
  PackageJsonDependencies = 'packageJson___dependencies',
  PackageJsonDependenciesName = 'packageJson___dependencies___name',
  PackageJsonDependenciesVersion = 'packageJson___dependencies___version',
  PackageJsonDevDependencies = 'packageJson___devDependencies',
  PackageJsonDevDependenciesName = 'packageJson___devDependencies___name',
  PackageJsonDevDependenciesVersion = 'packageJson___devDependencies___version',
  PackageJsonPeerDependencies = 'packageJson___peerDependencies',
  PackageJsonPeerDependenciesName = 'packageJson___peerDependencies___name',
  PackageJsonPeerDependenciesVersion = 'packageJson___peerDependencies___version',
  PackageJsonKeywords = 'packageJson___keywords'
}

export type SitePluginFilterInput = {
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
  resolve: Maybe<StringQueryOperatorInput>;
  name: Maybe<StringQueryOperatorInput>;
  version: Maybe<StringQueryOperatorInput>;
  pluginOptions: Maybe<SitePluginPluginOptionsFilterInput>;
  nodeAPIs: Maybe<StringQueryOperatorInput>;
  browserAPIs: Maybe<StringQueryOperatorInput>;
  ssrAPIs: Maybe<StringQueryOperatorInput>;
  pluginFilepath: Maybe<StringQueryOperatorInput>;
  packageJson: Maybe<SitePluginPackageJsonFilterInput>;
};

export type SitePluginGroupConnection = {
  __typename?: 'SitePluginGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<SitePluginEdge>;
  nodes: Array<SitePlugin>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue: Maybe<Scalars['String']>;
};

export type SitePluginPackageJson = {
  __typename?: 'SitePluginPackageJson';
  name: Maybe<Scalars['String']>;
  description: Maybe<Scalars['String']>;
  version: Maybe<Scalars['String']>;
  main: Maybe<Scalars['String']>;
  license: Maybe<Scalars['String']>;
  dependencies: Maybe<Array<Maybe<SitePluginPackageJsonDependencies>>>;
  devDependencies: Maybe<Array<Maybe<SitePluginPackageJsonDevDependencies>>>;
  peerDependencies: Maybe<Array<Maybe<SitePluginPackageJsonPeerDependencies>>>;
  keywords: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePluginPackageJsonDependencies = {
  __typename?: 'SitePluginPackageJsonDependencies';
  name: Maybe<Scalars['String']>;
  version: Maybe<Scalars['String']>;
};

export type SitePluginPackageJsonDependenciesFilterInput = {
  name: Maybe<StringQueryOperatorInput>;
  version: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonDependenciesFilterListInput = {
  elemMatch: Maybe<SitePluginPackageJsonDependenciesFilterInput>;
};

export type SitePluginPackageJsonDevDependencies = {
  __typename?: 'SitePluginPackageJsonDevDependencies';
  name: Maybe<Scalars['String']>;
  version: Maybe<Scalars['String']>;
};

export type SitePluginPackageJsonDevDependenciesFilterInput = {
  name: Maybe<StringQueryOperatorInput>;
  version: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonDevDependenciesFilterListInput = {
  elemMatch: Maybe<SitePluginPackageJsonDevDependenciesFilterInput>;
};

export type SitePluginPackageJsonFilterInput = {
  name: Maybe<StringQueryOperatorInput>;
  description: Maybe<StringQueryOperatorInput>;
  version: Maybe<StringQueryOperatorInput>;
  main: Maybe<StringQueryOperatorInput>;
  license: Maybe<StringQueryOperatorInput>;
  dependencies: Maybe<SitePluginPackageJsonDependenciesFilterListInput>;
  devDependencies: Maybe<SitePluginPackageJsonDevDependenciesFilterListInput>;
  peerDependencies: Maybe<SitePluginPackageJsonPeerDependenciesFilterListInput>;
  keywords: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonPeerDependencies = {
  __typename?: 'SitePluginPackageJsonPeerDependencies';
  name: Maybe<Scalars['String']>;
  version: Maybe<Scalars['String']>;
};

export type SitePluginPackageJsonPeerDependenciesFilterInput = {
  name: Maybe<StringQueryOperatorInput>;
  version: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonPeerDependenciesFilterListInput = {
  elemMatch: Maybe<SitePluginPackageJsonPeerDependenciesFilterInput>;
};

export type SitePluginPluginOptions = {
  __typename?: 'SitePluginPluginOptions';
  isTSX: Maybe<Scalars['Boolean']>;
  jsxPragma: Maybe<Scalars['String']>;
  allExtensions: Maybe<Scalars['Boolean']>;
  implementation: Maybe<SitePluginPluginOptionsImplementation>;
  data: Maybe<Scalars['String']>;
  includePaths: Maybe<Array<Maybe<Scalars['String']>>>;
  indentedSyntax: Maybe<Scalars['Boolean']>;
  indentType: Maybe<Scalars['String']>;
  indentWidth: Maybe<Scalars['Int']>;
  linefeed: Maybe<Scalars['String']>;
  omitSourceMapUrl: Maybe<Scalars['Boolean']>;
  precision: Maybe<Scalars['Int']>;
  sourceComments: Maybe<Scalars['Boolean']>;
  sourceMapContents: Maybe<Scalars['Boolean']>;
  sourceMapEmbed: Maybe<Scalars['Boolean']>;
  pathToConfigModule: Maybe<Scalars['String']>;
  stages: Maybe<Array<Maybe<Scalars['String']>>>;
  options: Maybe<SitePluginPluginOptionsOptions>;
  name: Maybe<Scalars['String']>;
  path: Maybe<Scalars['String']>;
  base64Width: Maybe<Scalars['Int']>;
  stripMetadata: Maybe<Scalars['Boolean']>;
  defaultQuality: Maybe<Scalars['Int']>;
  failOnError: Maybe<Scalars['Boolean']>;
  modulePath: Maybe<Scalars['String']>;
  htmlTitle: Maybe<Scalars['String']>;
  htmlFavicon: Maybe<Scalars['String']>;
  langKeyDefault: Maybe<Scalars['String']>;
  useLangKeyLayout: Maybe<Scalars['Boolean']>;
  prefixDefault: Maybe<Scalars['Boolean']>;
  analyzerMode: Maybe<Scalars['String']>;
  pathCheck: Maybe<Scalars['Boolean']>;
};

export type SitePluginPluginOptionsFilterInput = {
  isTSX: Maybe<BooleanQueryOperatorInput>;
  jsxPragma: Maybe<StringQueryOperatorInput>;
  allExtensions: Maybe<BooleanQueryOperatorInput>;
  implementation: Maybe<SitePluginPluginOptionsImplementationFilterInput>;
  data: Maybe<StringQueryOperatorInput>;
  includePaths: Maybe<StringQueryOperatorInput>;
  indentedSyntax: Maybe<BooleanQueryOperatorInput>;
  indentType: Maybe<StringQueryOperatorInput>;
  indentWidth: Maybe<IntQueryOperatorInput>;
  linefeed: Maybe<StringQueryOperatorInput>;
  omitSourceMapUrl: Maybe<BooleanQueryOperatorInput>;
  precision: Maybe<IntQueryOperatorInput>;
  sourceComments: Maybe<BooleanQueryOperatorInput>;
  sourceMapContents: Maybe<BooleanQueryOperatorInput>;
  sourceMapEmbed: Maybe<BooleanQueryOperatorInput>;
  pathToConfigModule: Maybe<StringQueryOperatorInput>;
  stages: Maybe<StringQueryOperatorInput>;
  options: Maybe<SitePluginPluginOptionsOptionsFilterInput>;
  name: Maybe<StringQueryOperatorInput>;
  path: Maybe<StringQueryOperatorInput>;
  base64Width: Maybe<IntQueryOperatorInput>;
  stripMetadata: Maybe<BooleanQueryOperatorInput>;
  defaultQuality: Maybe<IntQueryOperatorInput>;
  failOnError: Maybe<BooleanQueryOperatorInput>;
  modulePath: Maybe<StringQueryOperatorInput>;
  htmlTitle: Maybe<StringQueryOperatorInput>;
  htmlFavicon: Maybe<StringQueryOperatorInput>;
  langKeyDefault: Maybe<StringQueryOperatorInput>;
  useLangKeyLayout: Maybe<BooleanQueryOperatorInput>;
  prefixDefault: Maybe<BooleanQueryOperatorInput>;
  analyzerMode: Maybe<StringQueryOperatorInput>;
  pathCheck: Maybe<BooleanQueryOperatorInput>;
};

export type SitePluginPluginOptionsImplementation = {
  __typename?: 'SitePluginPluginOptionsImplementation';
  info: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsImplementationFilterInput = {
  info: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsOptions = {
  __typename?: 'SitePluginPluginOptionsOptions';
  emitWarning: Maybe<Scalars['Boolean']>;
  failOnError: Maybe<Scalars['Boolean']>;
};

export type SitePluginPluginOptionsOptionsFilterInput = {
  emitWarning: Maybe<BooleanQueryOperatorInput>;
  failOnError: Maybe<BooleanQueryOperatorInput>;
};

export type SitePluginSortInput = {
  fields: Maybe<Array<Maybe<SitePluginFieldsEnum>>>;
  order: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SiteSiteMetadata = {
  __typename?: 'SiteSiteMetadata';
  title: Maybe<Scalars['String']>;
  description: Maybe<Scalars['String']>;
  menuLinks: Maybe<Array<Maybe<SiteSiteMetadataMenuLinks>>>;
};

export type SiteSiteMetadataFilterInput = {
  title: Maybe<StringQueryOperatorInput>;
  description: Maybe<StringQueryOperatorInput>;
  menuLinks: Maybe<SiteSiteMetadataMenuLinksFilterListInput>;
};

export type SiteSiteMetadataMenuLinks = {
  __typename?: 'SiteSiteMetadataMenuLinks';
  name: Maybe<Scalars['String']>;
  link: Maybe<Scalars['String']>;
};

export type SiteSiteMetadataMenuLinksFilterInput = {
  name: Maybe<StringQueryOperatorInput>;
  link: Maybe<StringQueryOperatorInput>;
};

export type SiteSiteMetadataMenuLinksFilterListInput = {
  elemMatch: Maybe<SiteSiteMetadataMenuLinksFilterInput>;
};

export type SiteSortInput = {
  fields: Maybe<Array<Maybe<SiteFieldsEnum>>>;
  order: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export enum SortOrderEnum {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type StringQueryOperatorInput = {
  eq: Maybe<Scalars['String']>;
  ne: Maybe<Scalars['String']>;
  in: Maybe<Array<Maybe<Scalars['String']>>>;
  nin: Maybe<Array<Maybe<Scalars['String']>>>;
  regex: Maybe<Scalars['String']>;
  glob: Maybe<Scalars['String']>;
};

export type TransformOptions = {
  grayscale: Maybe<Scalars['Boolean']>;
  duotone: Maybe<DuotoneGradient>;
  rotate: Maybe<Scalars['Int']>;
  trim: Maybe<Scalars['Float']>;
  cropFocus: Maybe<ImageCropFocus>;
  fit: Maybe<ImageFit>;
};

export type WebPOptions = {
  quality: Maybe<Scalars['Int']>;
};

export type GatsbyImageSharpFixedFragment = (
  { __typename?: 'ImageSharpFixed' }
  & Pick<ImageSharpFixed, 'base64' | 'width' | 'height' | 'src' | 'srcSet'>
);

export type GatsbyImageSharpFixed_TracedSvgFragment = (
  { __typename?: 'ImageSharpFixed' }
  & Pick<ImageSharpFixed, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet'>
);

export type GatsbyImageSharpFixed_WithWebpFragment = (
  { __typename?: 'ImageSharpFixed' }
  & Pick<ImageSharpFixed, 'base64' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>
);

export type GatsbyImageSharpFixed_WithWebp_TracedSvgFragment = (
  { __typename?: 'ImageSharpFixed' }
  & Pick<ImageSharpFixed, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>
);

export type GatsbyImageSharpFixed_NoBase64Fragment = (
  { __typename?: 'ImageSharpFixed' }
  & Pick<ImageSharpFixed, 'width' | 'height' | 'src' | 'srcSet'>
);

export type GatsbyImageSharpFixed_WithWebp_NoBase64Fragment = (
  { __typename?: 'ImageSharpFixed' }
  & Pick<ImageSharpFixed, 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>
);

export type GatsbyImageSharpFluidFragment = (
  { __typename?: 'ImageSharpFluid' }
  & Pick<ImageSharpFluid, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>
);

export type GatsbyImageSharpFluidLimitPresentationSizeFragment = (
  { __typename?: 'ImageSharpFluid' }
  & { maxHeight: ImageSharpFluid['presentationHeight'], maxWidth: ImageSharpFluid['presentationWidth'] }
);

export type GatsbyImageSharpFluid_TracedSvgFragment = (
  { __typename?: 'ImageSharpFluid' }
  & Pick<ImageSharpFluid, 'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>
);

export type GatsbyImageSharpFluid_WithWebpFragment = (
  { __typename?: 'ImageSharpFluid' }
  & Pick<ImageSharpFluid, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>
);

export type GatsbyImageSharpFluid_WithWebp_TracedSvgFragment = (
  { __typename?: 'ImageSharpFluid' }
  & Pick<ImageSharpFluid, 'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>
);

export type GatsbyImageSharpFluid_NoBase64Fragment = (
  { __typename?: 'ImageSharpFluid' }
  & Pick<ImageSharpFluid, 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>
);

export type GatsbyImageSharpFluid_WithWebp_NoBase64Fragment = (
  { __typename?: 'ImageSharpFluid' }
  & Pick<ImageSharpFluid, 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>
);

export type GatsbyImageSharpResolutionsFragment = (
  { __typename?: 'ImageSharpResolutions' }
  & Pick<ImageSharpResolutions, 'base64' | 'width' | 'height' | 'src' | 'srcSet'>
);

export type GatsbyImageSharpResolutions_TracedSvgFragment = (
  { __typename?: 'ImageSharpResolutions' }
  & Pick<ImageSharpResolutions, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet'>
);

export type GatsbyImageSharpResolutions_WithWebpFragment = (
  { __typename?: 'ImageSharpResolutions' }
  & Pick<ImageSharpResolutions, 'base64' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>
);

export type GatsbyImageSharpResolutions_WithWebp_TracedSvgFragment = (
  { __typename?: 'ImageSharpResolutions' }
  & Pick<ImageSharpResolutions, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>
);

export type GatsbyImageSharpResolutions_NoBase64Fragment = (
  { __typename?: 'ImageSharpResolutions' }
  & Pick<ImageSharpResolutions, 'width' | 'height' | 'src' | 'srcSet'>
);

export type GatsbyImageSharpResolutions_WithWebp_NoBase64Fragment = (
  { __typename?: 'ImageSharpResolutions' }
  & Pick<ImageSharpResolutions, 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>
);

export type GatsbyImageSharpSizesFragment = (
  { __typename?: 'ImageSharpSizes' }
  & Pick<ImageSharpSizes, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>
);

export type GatsbyImageSharpSizes_TracedSvgFragment = (
  { __typename?: 'ImageSharpSizes' }
  & Pick<ImageSharpSizes, 'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>
);

export type GatsbyImageSharpSizes_WithWebpFragment = (
  { __typename?: 'ImageSharpSizes' }
  & Pick<ImageSharpSizes, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>
);

export type GatsbyImageSharpSizes_WithWebp_TracedSvgFragment = (
  { __typename?: 'ImageSharpSizes' }
  & Pick<ImageSharpSizes, 'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>
);

export type GatsbyImageSharpSizes_NoBase64Fragment = (
  { __typename?: 'ImageSharpSizes' }
  & Pick<ImageSharpSizes, 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>
);

export type GatsbyImageSharpSizes_WithWebp_NoBase64Fragment = (
  { __typename?: 'ImageSharpSizes' }
  & Pick<ImageSharpSizes, 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>
);

export type AllFileImageQueryVariables = Exact<{ [key: string]: never; }>;


export type AllFileImageQuery = (
  { __typename?: 'Query' }
  & { allFile: (
    { __typename?: 'FileConnection' }
    & { nodes: Array<(
      { __typename?: 'File' }
      & Pick<File, 'base' | 'relativeDirectory'>
      & { childImageSharp: Maybe<(
        { __typename?: 'ImageSharp' }
        & { fluid: Maybe<(
          { __typename?: 'ImageSharpFluid' }
          & GatsbyImageSharpFluid_WithWebpFragment
        )> }
      )> }
    )> }
  ) }
);

export type MetaDataQueryVariables = Exact<{ [key: string]: never; }>;


export type MetaDataQuery = (
  { __typename?: 'Query' }
  & { site: Maybe<(
    { __typename?: 'Site' }
    & { siteMetadata: Maybe<(
      { __typename?: 'SiteSiteMetadata' }
      & { menuLinks: Maybe<Array<Maybe<(
        { __typename?: 'SiteSiteMetadataMenuLinks' }
        & Pick<SiteSiteMetadataMenuLinks, 'name' | 'link'>
      )>>> }
    )> }
  )>, metaData: Maybe<(
    { __typename?: 'metaData' }
    & Pick<MetaData, 'title' | 'description' | 'banner'>
    & { links: Maybe<(
      { __typename?: 'metaDataLinks' }
      & Pick<MetaDataLinks, 'label' | 'home' | 'contact' | 'offer' | 'about'>
    )>, contact: Maybe<(
      { __typename?: 'metaDataContact' }
      & Pick<MetaDataContact, 'label' | 'email' | 'phone'>
    )>, address: Maybe<(
      { __typename?: 'metaDataAddress' }
      & Pick<MetaDataAddress, 'label' | 'street' | 'city' | 'postcode' | 'mapLink'>
    )>, openingHours: Maybe<(
      { __typename?: 'metaDataOpeningHours' }
      & Pick<MetaDataOpeningHours, 'label'>
      & { list: Maybe<Array<Maybe<(
        { __typename?: 'metaDataOpeningHoursList' }
        & Pick<MetaDataOpeningHoursList, 'days' | 'hours'>
      )>>> }
    )> }
  )> }
);

export type NotFoundDataQueryVariables = Exact<{ [key: string]: never; }>;


export type NotFoundDataQuery = (
  { __typename?: 'Query' }
  & { notfound: Maybe<(
    { __typename?: 'notfound' }
    & Pick<Notfound, 'go_home_label' | 'text' | 'picture'>
  )> }
);

export type AboutDataQueryVariables = Exact<{ [key: string]: never; }>;


export type AboutDataQuery = (
  { __typename?: 'Query' }
  & { about: Maybe<(
    { __typename?: 'about' }
    & Pick<About, 'title' | 'description' | 'videoTitle' | 'videoSrcURL' | 'galleryTitle' | 'pictureLabel'>
    & { ariaLabels: Maybe<(
      { __typename?: 'aboutAriaLabels' }
      & Pick<AboutAriaLabels, 'closeButton' | 'nextButton' | 'prevButton' | 'galleryModal'>
    )>, gallery: Maybe<Array<Maybe<(
      { __typename?: 'aboutGallery' }
      & Pick<AboutGallery, 'image' | 'id'>
    )>>> }
  )> }
);

export type ContactDataQueryVariables = Exact<{ [key: string]: never; }>;


export type ContactDataQuery = (
  { __typename?: 'Query' }
  & { contact: Maybe<(
    { __typename?: 'contact' }
    & Pick<Contact, 'title' | 'description' | 'formTitle'>
    & { form: Maybe<(
      { __typename?: 'contactForm' }
      & Pick<ContactForm, 'enable' | 'name_label' | 'name_error' | 'email_label' | 'email_error' | 'message_label' | 'message_error' | 'success' | 'error' | 'submit'>
    )> }
  )>, metaData: Maybe<(
    { __typename?: 'metaData' }
    & { contact: Maybe<(
      { __typename?: 'metaDataContact' }
      & Pick<MetaDataContact, 'label' | 'email' | 'phone'>
    )>, address: Maybe<(
      { __typename?: 'metaDataAddress' }
      & Pick<MetaDataAddress, 'label' | 'street' | 'city' | 'postcode' | 'mapLink'>
    )>, openingHours: Maybe<(
      { __typename?: 'metaDataOpeningHours' }
      & Pick<MetaDataOpeningHours, 'label'>
      & { list: Maybe<Array<Maybe<(
        { __typename?: 'metaDataOpeningHoursList' }
        & Pick<MetaDataOpeningHoursList, 'days' | 'hours'>
      )>>> }
    )> }
  )> }
);

export type HomeDataQueryVariables = Exact<{ [key: string]: never; }>;


export type HomeDataQuery = (
  { __typename?: 'Query' }
  & { page: Maybe<(
    { __typename?: 'home' }
    & Pick<Home, 'title' | 'subtitle' | 'sidePicture' | 'description' | 'readmore'>
  )>, blogDefaults: Maybe<(
    { __typename?: 'blog' }
    & Pick<Blog, 'default_pic'>
  )>, blogList: (
    { __typename?: 'MarkdownRemarkConnection' }
    & { edges: Array<(
      { __typename?: 'MarkdownRemarkEdge' }
      & { node: (
        { __typename?: 'MarkdownRemark' }
        & Pick<MarkdownRemark, 'id' | 'excerpt'>
        & { frontmatter: Maybe<(
          { __typename?: 'MarkdownRemarkFrontmatter' }
          & Pick<MarkdownRemarkFrontmatter, 'title' | 'banner' | 'startDate' | 'endDate'>
          & { date: MarkdownRemarkFrontmatter['startDate'] }
        )>, fields: Maybe<(
          { __typename?: 'MarkdownRemarkFields' }
          & Pick<MarkdownRemarkFields, 'slug'>
        )> }
      ) }
    )> }
  ) }
);

export type OfferDataQueryVariables = Exact<{ [key: string]: never; }>;


export type OfferDataQuery = (
  { __typename?: 'Query' }
  & { offer: Maybe<(
    { __typename?: 'offer' }
    & Pick<Offer, 'title' | 'titleGallery' | 'description' | 'scrollUpLabel'>
    & { emptyState: Maybe<(
      { __typename?: 'offerEmptyState' }
      & Pick<OfferEmptyState, 'picture' | 'text' | 'label'>
    )>, ariaLabels: Maybe<(
      { __typename?: 'offerAriaLabels' }
      & Pick<OfferAriaLabels, 'closeButton' | 'nextButton' | 'prevButton' | 'galleryModal'>
    )> }
  )>, offerCraft: Maybe<(
    { __typename?: 'offerCraft' }
    & Pick<OfferCraft, 'label'>
    & { products: Maybe<Array<Maybe<(
      { __typename?: 'offerCraftProducts' }
      & Pick<OfferCraftProducts, 'pictureLabel' | 'id' | 'label'>
      & { images: Maybe<Array<Maybe<(
        { __typename?: 'offerCraftProductsImages' }
        & Pick<OfferCraftProductsImages, 'id' | 'image'>
      )>>> }
    )>>> }
  )>, offerAssortment: Maybe<(
    { __typename?: 'offerAssortment' }
    & Pick<OfferAssortment, 'label'>
    & { products: Maybe<Array<Maybe<(
      { __typename?: 'offerAssortmentProducts' }
      & Pick<OfferAssortmentProducts, 'pictureLabel' | 'id' | 'label'>
      & { images: Maybe<Array<Maybe<(
        { __typename?: 'offerAssortmentProductsImages' }
        & Pick<OfferAssortmentProductsImages, 'id' | 'image'>
      )>>> }
    )>>> }
  )> }
);

export type BlogQueryVariables = Exact<{
  slug: Scalars['String'];
}>;


export type BlogQuery = (
  { __typename?: 'Query' }
  & { defaults: Maybe<(
    { __typename?: 'blog' }
    & Pick<Blog, 'return' | 'expireLabel' | 'dateLabel'>
  )>, blogEntry: Maybe<(
    { __typename?: 'MarkdownRemark' }
    & Pick<MarkdownRemark, 'rawMarkdownBody'>
    & { frontmatter: Maybe<(
      { __typename?: 'MarkdownRemarkFrontmatter' }
      & Pick<MarkdownRemarkFrontmatter, 'title' | 'banner' | 'startDate' | 'endDate'>
    )> }
  )> }
);