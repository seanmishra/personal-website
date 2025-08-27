import { useMDXComponent } from 'next-contentlayer2/hooks';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { CodeBlock } from './code-block';

interface MDXComponentProps {
  children?: React.ReactNode;
  [key: string]: unknown;
}

interface AnchorProps extends MDXComponentProps {
  href?: string;
}

interface ImageProps extends MDXComponentProps {
  src: string;
  alt: string;
}

const mdxComponents = {
  h1: ({ children, ...props }: MDXComponentProps) => (
    <h1 {...props}>
      {children}
    </h1>
  ),
  h2: ({ children, ...props }: MDXComponentProps) => (
    <h2 {...props}>
      {children}
    </h2>
  ),
  h3: ({ children, ...props }: MDXComponentProps) => (
    <h3 {...props}>
      {children}
    </h3>
  ),
  h4: ({ children, ...props }: MDXComponentProps) => (
    <h4 {...props}>
      {children}
    </h4>
  ),
  p: ({ children, ...props }: MDXComponentProps) => (
    <p {...props}>
      {children}
    </p>
  ),
  ul: ({ children, ...props }: MDXComponentProps) => (
    <ul {...props}>
      {children}
    </ul>
  ),
  ol: ({ children, ...props }: MDXComponentProps) => (
    <ol {...props}>
      {children}
    </ol>
  ),
  li: ({ children, ...props }: MDXComponentProps) => (
    <li {...props}>
      {children}
    </li>
  ),
  blockquote: ({ children, ...props }: MDXComponentProps) => (
    <blockquote {...props}>
      {children}
    </blockquote>
  ),
  code: ({ children, ...props }: MDXComponentProps) => (
    <code {...props}>
      {children}
    </code>
  ),
  pre: ({ children, ...props }: MDXComponentProps) => (
    <CodeBlock {...props}>
      {children}
    </CodeBlock>
  ),
  a: ({ children, href, ...props }: AnchorProps) => (
    <Link 
      href={href || '#'} 
      target={href?.startsWith('http') ? '_blank' : undefined}
      rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
      {...props}
    >
      {children}
    </Link>
  ),
  img: ({ src, alt, ...props }: ImageProps) => (
    <Image
      src={src}
      alt={alt}
      width={800}
      height={400}
      {...props}
    />
  ),
  hr: ({ ...props }: MDXComponentProps) => (
    <hr {...props} />
  ),
  strong: ({ children, ...props }: MDXComponentProps) => (
    <strong {...props}>
      {children}
    </strong>
  ),
  em: ({ children, ...props }: MDXComponentProps) => (
    <em {...props}>
      {children}
    </em>
  ),
};

interface MdxProps {
  code: string;
}

export function Mdx({ code }: MdxProps) {
  const Component = useMDXComponent(code);

  return (
    <div className="mdx">
      <Component components={mdxComponents} />
    </div>
  );
}
