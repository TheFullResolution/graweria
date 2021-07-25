export interface Blog {
  return: string;
  default_pic: string;
  expireLabel: string;
  dateLabel: string;
}

export interface Contact {
  title: string;
  description: string;
  form: Form;
  formTitle: string;
}

export interface Form {
  name_label: string;
  success: string;
  enable: boolean;
  email_error: string;
  error: string;
  message_error: string;
  email_label: string;
  name_error: string;
  submit: string;
  message_label: string;
}

export interface Shop {
  title: string;
  description: string;
  sidePicture: string;
  label: string;
  products: Product[];
}

export interface Product {
  id: string;
  label: string;
  images: Gallery[];
  pictureLabel: string;
}

export interface Gallery {
  id: string;
  image: string;
  price?: number;
}

export interface Home {
  videoSrcURL: string;
  galleryTitle: string;
  readmore: string;
  gallery: Gallery[];
  pictureLabel: string;
  subtitle: string;
  title: string;
  description: string;
  videoTitle: string;
}

export interface MetaData {
  contact: Contact;
  prices: Prices;
  banner: string;
  pictureGallery: PictureGallery;
  address: Address;
  openingHours: OpeningHours;
  title: string;
  links: Links;
  description: string;
}

export interface Address {
  label: string;
  street: string;
  city: string;
  postcode: string;
  mapLink: string;
}

export interface Contact {
  phone: string;
  email: string;
  label: string;
}

export interface Links {
  label: string;
  home: string;
  contact: string;
  shop: string;
  craft: string;
}

export interface OpeningHours {
  label: string;
  list: List[];
}

export interface List {
  days: string;
  hours: string;
}

export interface PictureGallery {
  closeButton: string;
  nextButton: string;
  prevButton: string;
  galleryModal: string;
  scrollUpLabel: string;
  emptyState: EmptyState;
}

export interface EmptyState {
  picture: string;
  text: string;
  label: string;
}

export interface Prices {
  text_before: string;
  currency: string;
  locale: string;
}

export interface Notfound {
  go_home_label: string;
  text: string;
  picture: string;
}
