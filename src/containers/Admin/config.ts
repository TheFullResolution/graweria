import { CmsConfig, CmsField } from 'netlify-cms-core';

export const cms_config: CmsConfig = {
  backend: {
    name: 'proxy',
    proxy_url: 'http://localhost:8081/api/v1',
    repo: 'TheFullResolution/graweria',
  } as const,
  logo_url: 'public/images/uploads/banner.png',
  media_folder: 'public/images/uploads',
  public_folder: '/images/uploads',
  collections: [
    {
      label: 'Pages',
      name: 'pages',
      files: [
        {
          label: 'Meta Data',
          name: 'metaData',
          file: 'cms/content/metaData.json',
          fields: [
            { label: 'Title', name: 'title', widget: 'string', required: true },
            {
              label: 'Description',
              name: 'description',
              widget: 'string',
              required: true,
            },
            {
              label: 'Links',
              name: 'links',
              widget: 'object',
              collapsed: true,
              fields: [
                {
                  label: 'Label',
                  name: 'label',
                  widget: 'string',
                  required: true,
                },
                {
                  label: 'Home',
                  name: 'home',
                  widget: 'string',
                  required: true,
                },
                {
                  label: 'Contact',
                  name: 'contact',
                  widget: 'string',
                  required: true,
                },
                {
                  label: 'Craft',
                  name: 'craft',
                  widget: 'string',
                  required: true,
                },
                {
                  label: 'Shop',
                  name: 'shop',
                  widget: 'string',
                  required: true,
                },
              ],
            },
            {
              label: 'Address',
              name: 'address',
              widget: 'object',
              collapsed: true,
              fields: [
                {
                  label: 'Label',
                  name: 'label',
                  widget: 'string',
                  required: true,
                },
                {
                  label: 'Street',
                  name: 'street',
                  widget: 'string',
                  required: true,
                },
                {
                  label: 'City',
                  name: 'city',
                  widget: 'string',
                  required: true,
                },
                {
                  label: 'Postcode',
                  name: 'postcode',
                  widget: 'string',
                  required: true,
                },
                {
                  label: 'Map Link',
                  name: 'mapLink',
                  widget: 'string',
                  required: true,
                },
              ],
            },
            {
              label: 'Contact',
              name: 'contact',
              widget: 'object',
              collapsed: true,
              fields: [
                {
                  label: 'Label',
                  name: 'label',
                  widget: 'string',
                  required: true,
                },
                {
                  label: 'Phone',
                  name: 'phone',
                  widget: 'string',
                  required: true,
                },
                {
                  label: 'Email',
                  name: 'email',
                  widget: 'string',
                  required: true,
                },
              ],
            },
            {
              label: 'Opening Hours',
              name: 'openingHours',
              widget: 'object',
              collapsed: true,
              fields: [
                {
                  label: 'Label',
                  name: 'label',
                  widget: 'string',
                  required: true,
                },
                {
                  label: 'Hours',
                  name: 'list',
                  widget: 'list',
                  summary: '{{fields.days}} - {{fields.hours}}',
                  fields: [
                    {
                      label: 'Days',
                      name: 'days',
                      widget: 'string',
                      required: true,
                    },
                    {
                      label: 'Hours',
                      name: 'hours',
                      widget: 'string',
                      required: true,
                    },
                  ],
                },
              ],
            },
            { label: 'Banner', name: 'banner', widget: 'image' },
            {
              label: 'Picture Gallery Labels',
              name: 'pictureGallery',
              widget: 'object',
              collapsed: true,
              fields: [
                {
                  label: 'CloseButton',
                  name: 'closeButton',
                  widget: 'string',
                  required: true,
                },
                {
                  label: 'NextButton',
                  name: 'nextButton',
                  widget: 'string',
                  required: true,
                },
                {
                  label: 'PrevButton',
                  name: 'prevButton',
                  widget: 'string',
                  required: true,
                },
                {
                  label: 'GalleryModal',
                  name: 'galleryModal',
                  widget: 'string',
                  required: true,
                },
                {
                  label: 'Scroll Up',
                  name: 'scrollUpLabel',
                  widget: 'string',
                  required: true,
                },
                {
                  label: 'Empty State',
                  name: 'emptyState',
                  widget: 'object',
                  collapsed: true,
                  fields: [
                    {
                      label: 'Picture',
                      name: 'picture',
                      widget: 'image',
                      required: true,
                    },
                    {
                      label: 'Picture Label',
                      name: 'label',
                      widget: 'string',
                      required: true,
                    },
                    {
                      label: 'Text',
                      name: 'text',
                      widget: 'string',
                      required: true,
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          label: 'Home',
          name: 'home',
          file: 'cms/content/home.json',
          fields: [
            { label: 'Title', name: 'title', widget: 'string', required: true },
            {
              label: 'SubTitle',
              name: 'subtitle',
              widget: 'string',
              required: true,
            },
            { label: 'Description', name: 'description', widget: 'markdown' },
            {
              label: 'Read More',
              name: 'readmore',
              widget: 'string',
              required: true,
            },
            { label: 'Video Title', name: 'videoTitle', widget: 'string' },
            { label: 'Video Url', name: 'videoSrcURL', widget: 'string' },
            {
              label: 'Gallery Title',
              name: 'galleryTitle',
              widget: 'string',
              required: true,
            },
            {
              label: 'Picture Label',
              name: 'pictureLabel',
              widget: 'string',
              required: true,
            },
            {
              label: 'Pictures',
              name: 'gallery',
              widget: 'list',
              fields: [
                { label: 'Id', name: 'id', widget: 'uuid' } as CmsField,
                {
                  label: 'Image',
                  name: 'image',
                  widget: 'image',
                  required: true,
                },
              ],
            },
          ],
        },
        {
          label: 'Blog',
          name: 'blog',
          file: 'cms/content/blog.json',
          fields: [
            {
              label: 'Return Label',
              name: 'return',
              widget: 'string',
              required: true,
            },
            {
              label: 'Expire Label',
              name: 'expireLabel',
              widget: 'string',
              required: true,
            },
            {
              label: 'Date Label',
              name: 'dateLabel',
              widget: 'string',
              required: true,
            },
            {
              label: 'Default Picture',
              name: 'default_pic',
              widget: 'image',
              required: true,
            },
          ],
        },
        {
          label: 'Contact',
          name: 'contact',
          file: 'cms/content/contact.json',
          fields: [
            { label: 'Title', name: 'title', widget: 'string', required: true },
            { label: 'Description', name: 'description', widget: 'markdown' },
            {
              label: 'Form Title',
              name: 'formTitle',
              widget: 'string',
              required: true,
            },
            {
              label: 'Form',
              name: 'form',
              widget: 'object',
              collapsed: true,
              fields: [
                { label: 'Enable', name: 'enable', widget: 'boolean' },
                { label: 'Name Label', name: 'name_label', widget: 'string' },
                { label: 'Name Error', name: 'name_error', widget: 'string' },
                { label: 'Email Label', name: 'email_label', widget: 'string' },
                { label: 'Email Error', name: 'email_error', widget: 'string' },
                {
                  label: 'Message Label',
                  name: 'message_label',
                  widget: 'string',
                },
                {
                  label: 'Message Error',
                  name: 'message_error',
                  widget: 'string',
                },
                {
                  label: 'On Success Message',
                  name: 'success',
                  widget: 'string',
                },
                { label: 'On Error Message', name: 'error', widget: 'string' },
                { label: 'Submit Button', name: 'submit', widget: 'string' },
              ],
            },
          ],
        },
        {
          label: 'Craft',
          name: 'craft',
          file: 'cms/content/craft.json',
          fields: [
            { name: 'id', widget: 'hidden', default: 'craft' },
            { label: 'Title', name: 'title', widget: 'string', required: true },
            { label: 'Description', name: 'description', widget: 'markdown' },
            {
              label: 'Side Picture',
              name: 'sidePicture',
              widget: 'image',
            },
            { label: 'Label', name: 'label', widget: 'string', required: true },
            {
              label: 'Products',
              name: 'products',
              widget: 'list',
              summary: '{{fields.label}}',
              label_singular: 'Product',
              fields: [
                {
                  label: 'Label',
                  name: 'label',
                  widget: 'string',
                  required: true,
                },
                {
                  label: 'Picture Label',
                  name: 'pictureLabel',
                  widget: 'string',
                  required: true,
                },
                {
                  label: 'Images',
                  name: 'images',
                  widget: 'list',
                  label_singular: 'Image',
                  fields: [
                    { label: 'Image', name: 'image', widget: 'image' },
                    { label: 'Id', name: 'id', widget: 'uuid' } as CmsField,
                  ],
                },
                { label: 'Id', name: 'id', widget: 'uuid' } as CmsField,
              ],
            },
          ],
        },
        {
          label: 'Shop',
          name: 'shop',
          file: 'cms/content/shop.json',
          fields: [
            { name: 'id', widget: 'hidden', default: 'assortment' },
            { label: 'Title', name: 'title', widget: 'string', required: true },
            { label: 'Description', name: 'description', widget: 'markdown' },
            {
              label: 'Side Picture',
              name: 'sidePicture',
              widget: 'image',
            },
            { label: 'Label', name: 'label', widget: 'string', required: true },
            {
              label: 'Products',
              name: 'products',
              widget: 'list',
              summary: '{{fields.label}}',
              label_singular: 'Product',
              fields: [
                {
                  label: 'Label',
                  name: 'label',
                  widget: 'string',
                  required: true,
                },
                {
                  label: 'Picture Label',
                  name: 'pictureLabel',
                  widget: 'string',
                  required: true,
                },
                {
                  label: 'Images',
                  name: 'images',
                  widget: 'list',
                  label_singular: 'Image',
                  fields: [
                    { label: 'Image', name: 'image', widget: 'image' },
                    { label: 'Id', name: 'id', widget: 'uuid' } as CmsField,
                  ],
                },
                { label: 'Id', name: 'id', widget: 'uuid' } as CmsField,
              ],
            },
          ],
        },
        {
          label: 'Not Found',
          name: 'notfound',
          file: 'cms/content/notfound.json',
          fields: [
            {
              label: 'Go Home Label',
              name: 'go_home_label',
              widget: 'string',
              required: true,
            },
            { label: 'Text', name: 'text', widget: 'string', required: true },
            {
              label: 'Picture',
              name: 'picture',
              widget: 'image',
              required: true,
            },
          ],
        },
      ],
    },
    {
      name: 'blog',
      label: 'Blog',
      folder: 'cms/blog',
      create: true,
      slug: '{{year}}-{{month}}-{{day}}-{{slug}}',
      fields: [
        {
          label: 'Content Key',
          name: 'contentKey',
          widget: 'hidden',
          default: 'blog',
        },
        { label: 'Title', name: 'title', widget: 'string', required: true },
        {
          label: 'Publish Date',
          name: 'startDate',
          widget: 'datetime',
          required: true,
        },
        {
          label: 'Expire Date',
          name: 'endDate',
          widget: 'datetime',
          required: true,
        },
        { label: 'Banner', name: 'banner', widget: 'image', required: false },
        {
          label: 'Body',
          name: 'body',
          widget: 'markdown',
          buttons: [
            'bold',
            'italic',
            'link',
            'heading-one',
            'heading-two',
            'heading-three',
            'quote',
            'bulleted-list',
            'numbered-list',
          ],
          editor_components: ['image'],
          required: true,
        },
      ],
    },
  ],
};
