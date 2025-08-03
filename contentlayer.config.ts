import { defineDocumentType, makeSource } from 'contentlayer2/source-files';
import readingTime from 'reading-time';
import remarkGfm from 'remark-gfm';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypePrettyCode from 'rehype-pretty-code';

export const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: `**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      description: 'The title of the post',
      required: true,
    },
    description: {
      type: 'string',
      description: 'The description of the post',
      required: true,
    },
    date: {
      type: 'date',
      description: 'The date of the post',
      required: true,
    },
    category: {
      type: 'string',
      description: 'The category of the post',
      required: true,
    },
    tags: {
      type: 'list',
      of: { type: 'string' },
      description: 'Tags for the post',
    },
    featured: {
      type: 'boolean',
      description: 'Whether the post is featured',
      default: false,
    },
    published: {
      type: 'boolean',
      description: 'Whether the post is published',
      default: true,
    },
    image: {
      type: 'string',
      description: 'Cover image for the post',
    },
    socialImage: {
      type: 'string',
      description: 'Social media share image (Open Graph image)',
    },
    author: {
      type: 'string',
      description: 'Author of the post',
      default: 'Sean Mishra',
    },
  },
  computedFields: {
    url: {
      type: 'string',
      resolve: (post) => `/writing/${post._raw.flattenedPath}`,
    },
    slug: {
      type: 'string',
      resolve: (post) => post._raw.flattenedPath,
    },
    readingTime: {
      type: 'json',
      resolve: (doc) => readingTime(doc.body.raw),
    },
    wordCount: {
      type: 'number',
      resolve: (doc) => doc.body.raw.split(/\s+/gu).length,
    },
    toc: {
      type: 'json',
      resolve: async (doc) => {
        const headingLines = doc.body.raw.split('\n').filter((line: string) => {
          return line.match(/^#{1,3}\s/);
        });
        
        return headingLines.map((raw: string) => {
          const text = raw.replace(/^#{1,3}\s/, '');
          const level = raw.slice(0, 3) === '###' ? 3 : raw.slice(0, 2) === '##' ? 2 : 1;
          const slug = text
            .toLowerCase()
            .replace(/[^a-z0-9 ]/g, '')
            .replace(/\s+/g, '-');
          
          return {
            text,
            slug,
            level,
          };
        });
      },
    },
  },
}));

export default makeSource({
  contentDirPath: './posts',
  documentTypes: [Post],
  disableImportAliasWarning: true,
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      [
        rehypePrettyCode,
        {
          theme: {
            dark: 'github-dark',
            light: 'github-light'
          },
          onVisitLine(node: { children: unknown[] }) {
            // Prevent lines from collapsing in `display: grid` mode, and allow empty
            // lines to be copy/pasted
            if (node.children.length === 0) {
              node.children = [{ type: 'text', value: ' ' }];
            }
          },
          onVisitHighlightedLine(node: { properties: { className: string[] } }) {
            node.properties.className.push('line--highlighted');
          },
          onVisitHighlightedWord(node: { properties: { className: string[] } }) {
            node.properties.className = ['word--highlighted'];
          },
        },
      ],
      [
        rehypeAutolinkHeadings,
        {
          properties: {
            className: ['subheading-anchor'],
            ariaLabel: 'Link to section',
          },
        },
      ],
    ],
  },
});
