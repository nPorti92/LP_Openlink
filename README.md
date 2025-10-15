# Blings Landing Page

A modern, responsive landing page built with Next.js and React, featuring Ant Design components.

## Features

- **Next.js Framework**: Server-side rendering and static site generation
- **Responsive Design**: Adapts seamlessly to all screen sizes
- **Ant Design Components**: Professional UI component library
- **Modern React**: Built with React 18 and functional components
- **Static Export**: Can be exported as static HTML for deployment

## Project Structure

```
├── pages/
│   ├── index.js              # Main page entry point
│   ├── _app.js               # App configuration
│   └── _document.js          # HTML document structure
├── src/
│   └── components/
│       ├── LandingPage.js    # Main landing page component
│       └── LandingPage.css   # Component styles
├── public/                   # Static assets (images, SVGs)
├── package.json              # Dependencies and scripts
└── next.config.js            # Next.js configuration
```

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run next:dev
```

3. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Available Scripts

- `npm run next:dev` - Start development server
- `npm run next:build` - Build for production
- `npm run next:start` - Start production server
- `npm run export` - Export as static HTML (output in `/out` directory)

## Static Export & Deployment

To create a static export for deployment (e.g., to S3, Netlify, Vercel):

```bash
npm run export
```

This generates a static site in the `/out` directory that can be deployed to any static hosting service.

### Deploying to S3

```bash
aws s3 sync out/ s3://your-bucket-name/ --acl public-read
```

Then enable Static Website Hosting in your S3 bucket settings.

## Technologies Used

- **Next.js 15**: React framework with SSR and SSG
- **React 18**: Modern React with hooks
- **Ant Design**: UI component library
- **CSS**: Custom styling for precise design matching

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Project Handover Notes

This project is clean and ready for handover with:
- All unnecessary build artifacts removed
- Only essential source files included
- Clear project structure
- Comprehensive documentation 