import MarkdownToJsx from 'markdown-to-jsx';
import React from 'react';
import { PageImage } from '../PageImage/PageImage';

interface Props {
  className?: string;
  excerpt?: boolean;
  children: string;
}

const ImageWrapper: React.FC<{ alt: string; title: string; src: string }> = ({
  alt,
  src,
}) => {
  return (
    <PageImage
      className="markdown-image"
      src={src}
      alt={alt}
      ratioWidth={4}
      ratioHeight={3}
    />
  );
};

const PWrapper: React.FC = ({ children }) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const assertedChildren = children as any;

  if (
    assertedChildren &&
    assertedChildren.length === 1 &&
    assertedChildren[0].props &&
    assertedChildren[0].props.src
  ) {
    // rendering media without p wrapper
    return <>{children}</>;
  } else return <p>{children}</p>;
};

const SkipTag: React.FC = () => null;

export const Markdown: React.FC<Props> = ({
  className,
  children,
  excerpt = false,
}) => {
  return (
    <div className={className}>
      <MarkdownToJsx
        options={{
          overrides: excerpt
            ? {
                img: SkipTag,
                h1: SkipTag,
                h2: SkipTag,
              }
            : {
                img: ImageWrapper,
                p: PWrapper,
              },
        }}
      >
        {children}
      </MarkdownToJsx>
    </div>
  );
};
