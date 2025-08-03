import { useMDXComponent } from 'next-contentlayer2/hooks';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

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
    <h1 className="text-4xl font-bold mb-6 text-gray-900 dark:text-gray-100" {...props}>
      {children}
    </h1>
  ),
  h2: ({ children, ...props }: MDXComponentProps) => (
    <h2 className="text-3xl font-bold mb-4 mt-8 text-gray-900 dark:text-gray-100" {...props}>
      {children}
    </h2>
  ),
  h3: ({ children, ...props }: MDXComponentProps) => (
    <h3 className="text-2xl font-bold mb-3 mt-6 text-gray-900 dark:text-gray-100" {...props}>
      {children}
    </h3>
  ),
  h4: ({ children, ...props }: MDXComponentProps) => (
    <h4 className="text-xl font-bold mb-2 mt-4 text-gray-900 dark:text-gray-100" {...props}>
      {children}
    </h4>
  ),
  p: ({ children, ...props }: MDXComponentProps) => (
    <p className="mb-4 leading-relaxed text-gray-700 dark:text-gray-300" {...props}>
      {children}
    </p>
  ),
  ul: ({ children, ...props }: MDXComponentProps) => (
    <ul className="mb-4 ml-6 list-disc space-y-2 text-gray-700 dark:text-gray-300" {...props}>
      {children}
    </ul>
  ),
  ol: ({ children, ...props }: MDXComponentProps) => (
    <ol className="mb-4 ml-6 list-decimal space-y-2 text-gray-700 dark:text-gray-300" {...props}>
      {children}
    </ol>
  ),
  li: ({ children, ...props }: MDXComponentProps) => (
    <li className="text-gray-700 dark:text-gray-300" {...props}>
      {children}
    </li>
  ),
  blockquote: ({ children, ...props }: MDXComponentProps) => (
    <blockquote className="border-l-4 border-blue-500 pl-4 my-6 italic text-gray-600 dark:text-gray-400" {...props}>
      {children}
    </blockquote>
  ),
  code: ({ children, ...props }: MDXComponentProps) => (
    <code className="bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded text-sm font-mono text-gray-800 dark:text-gray-200" {...props}>
      {children}
    </code>
  ),
  pre: ({ children, ...props }: MDXComponentProps) => (
    <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto my-6 text-sm" {...props}>
      {children}
    </pre>
  ),
  a: ({ children, href, ...props }: AnchorProps) => (
    <Link 
      href={href || '#'} 
      className="text-blue-600 dark:text-blue-400 hover:underline" 
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
      className="rounded-lg my-6"
      {...props}
    />
  ),
  hr: ({ ...props }: MDXComponentProps) => (
    <hr className="my-8 border-gray-200 dark:border-gray-700" {...props} />
  ),
  strong: ({ children, ...props }: MDXComponentProps) => (
    <strong className="font-bold text-gray-900 dark:text-gray-100" {...props}>
      {children}
    </strong>
  ),
  em: ({ children, ...props }: MDXComponentProps) => (
    <em className="italic text-gray-700 dark:text-gray-300" {...props}>
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
