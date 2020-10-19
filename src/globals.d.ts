declare module '*.scss' {
  const content: { [className: string]: string };
  export = content;
}

declare module 'typography-theme-st-annes' {
  import { TypographyOptions } from 'typography';
  const Theme: TypographyOptions;

  export = Theme;
}

declare module 'netlify-cms-widget-uuid-v4' {
  interface Package {
    UuidControl: React.ComponentType<any>;
    UuidPreview: React.ComponentType<any>;
  }

  const Package: Package;

  export = Package;
}
