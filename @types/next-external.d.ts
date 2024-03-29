declare module '*.module.scss' {
  const content: { [className: string]: string };
  export = content;
}

declare module '*.scss' {
  const content: string;
  export = content;
}

declare module '*.json' {
  const content: { [key: string]: string };
  export = content;
}

declare module '*.mdx' {
  let MDXComponent: (props: any) => JSX.Element;
  export default MDXComponent;
}

declare module 'typography-theme-wordpress-2015' {
  import { TypographyOptions } from 'typography';
  const Theme: TypographyOptions;

  export = Theme;
}

declare module '@mdx-js/mdx' {
  export const createCompiler: any;
}

declare module 'unist-util-remove' {
  const remarkPlugin: any;
  export default remarkPlugin;
}

declare module 'netlify-cms-widget-uuid-v4' {
  interface Package {
    UuidControl: React.ComponentType<any>;
    UuidPreview: React.ComponentType<any>;
  }

  const Package: Package;

  export = Package;
}
