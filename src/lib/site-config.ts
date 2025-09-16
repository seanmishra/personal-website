export const siteConfig = {
  name: 'Sean Mishra',
  description: 'Impact-driven full-stack engineer shipping revenue-ready products from concept to launch.',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://seanmishra.com',
  author: {
    name: 'Sean Mishra',
    email: 'hello@seanmishra.com',
  },
  social: {
    x: '@seanmishra',
  },
} as const;