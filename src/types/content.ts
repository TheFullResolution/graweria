export interface About {
  title: string;
  description: string;
  videoTitle: string;
  videoSrcURL: string;
  gallery: Gallery[];
  galleryTitle: string;
  ariaLabels: AriaLabels;
  pictureLabel: string;
}

export interface AriaLabels {
  closeButton: string;
  nextButton: string;
  prevButton: string;
  galleryModal: string;
}

export interface Gallery {
  image: string;
  id: string;
}

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

export interface Home {
  title: string;
  description: string;
  readmore: string;
  subtitle: string;
  sidePicture: string;
}

export interface MetaData {
  title: string;
  description: string;
  banner: string;
  links: Links;
  contact: ContactClass;
  openingHours: OpeningHours;
  address: Address;
}

export interface Address {
  label: string;
  street: string;
  city: string;
  postcode: string;
  mapLink: string;
}

export interface ContactClass {
  phone: string;
  email: string;
  label: string;
}

export interface Links {
  label: string;
  home: string;
  contact: string;
  offer: string;
  about: string;
}

export interface OpeningHours {
  label: string;
  list: List[];
}

export interface List {
  days: string;
  hours: string;
}

export interface Notfound {
  go_home_label: string;
  text: string;
  picture: string;
}

export interface Offer {
  title: string;
  description: string;
  ariaLabels: AriaLabels;
  emptyState: EmptyState;
  scrollUpLabel: string;
  titleGallery: string;
}

export interface EmptyState {
  picture: string;
  text: string;
  label: string;
}

export interface OfferCraft {
  label: string;
  products: Product[];
}

export interface Product {
  id: string;
  label: string;
  images?: Gallery[];
  pictureLabel: string;
}
