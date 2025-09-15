# Personal Website

Sean Mishra's personal website built with Next.js 15, showcasing professional work, writing, and contact information.

## 🚀 Tech Stack

- **Next.js 15** - React framework with App Router
- **TypeScript** - Type safety and better developer experience
- **Tailwind CSS** - Utility-first CSS framework
- **Motion** - Smooth animations and interactions
- **MDX** - Markdown with JSX for writing content
- **PostHog** - Analytics and user tracking
- **Resend** - Email handling for contact forms

## 🛠️ Getting Started

First, install dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📁 Project Structure

```
src/
├── app/                 # Next.js App Router pages
├── components/          # Reusable React components
├── lib/                 # Utility functions and configurations
└── styles/             # Global styles and CSS modules
content/
└── writing/            # MDX blog posts and articles
public/
├── images/             # Static images
└── docs/               # Documents (resume, etc.)
```

## 🎯 Features

- **Responsive Design** - Works on all devices and screen sizes
- **Dark/Light Mode** - Theme switching with persistence
- **Blog/Writing** - MDX-powered content management
- **Contact Form** - Email integration with Resend
- **Analytics** - User tracking with PostHog
- **View Tracking** - Redis-powered article view counting
- **SEO Optimized** - Meta tags, Open Graph, and structured data

## � API Endpoints

### View Tracking
- `GET /api/views?slug=article-slug` - Get view count for a specific article
- `GET /api/views?slugs=slug1,slug2,slug3` - Get view counts for multiple articles
- `GET /api/views?total=true` - Get total views across all articles
- `POST /api/views` - Increment view count for an article (body: `{ slug: "article-slug" }`)

### Contact Form
- `POST /api/contact` - Send contact form email (requires name, email, message)

## �📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
