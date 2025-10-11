# 3 Squares Ventures Website

A modern, responsive website for 3 Squares Ventures LLC built with React, TypeScript, and Vite. Content is managed via Stackbit's GitCMS for easy editing without technical knowledge.

## Features

- Fully responsive design
- Git-based content management with Stackbit
- Service showcase with detailed modals
- Project gallery
- Customer testimonials
- FAQ section
- Contact forms and quote requests
- Service area coverage map

## Technology Stack

- **Framework**: React 19 with TypeScript
- **Build Tool**: Vite 6
- **CMS**: Stackbit GitCMS
- **Styling**: TailwindCSS (via index.html)
- **Deployment**: Ready for Netlify, Vercel, or similar

## Quick Start

**Prerequisites:** Node.js 18+

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open your browser to `http://localhost:5173`

**New to this project?** See [QUICK_START.md](QUICK_START.md) for a 5-minute setup guide.

## Content Management

### Using Stackbit GitCMS (Recommended)

1. Start the Stackbit development server:
   ```bash
   npx @stackbit/cli@latest dev
   ```

2. Open the provided URL in your browser

3. Edit content visually through the GitCMS interface

4. Changes are automatically saved to the JSON files in [content/data/](content/data/)

### Manual Editing

All content is stored as JSON in the [content/data/](content/data/) directory:

- [siteData.json](content/data/siteData.json) - Phone numbers, email, service areas
- [services.json](content/data/services.json) - Service offerings and details
- [projects.json](content/data/projects.json) - Gallery project images
- [testimonials.json](content/data/testimonials.json) - Customer reviews
- [faq.json](content/data/faq.json) - Frequently asked questions

Edit these files directly to update content. The schema is defined in [stackbit.config.ts](stackbit.config.ts).

## Project Structure

```
├── components/          # React components
├── content/
│   └── data/           # Content files (JSON)
├── .stackbit/          # Stackbit configuration
├── stackbit.config.ts  # Content model definitions
├── App.tsx             # Main application component
└── index.tsx           # Application entry point
```

## Build for Production

```bash
npm run build
```

The built files will be in the `dist/` directory, ready for deployment.

## Deployment

This site can be deployed to any static hosting service:

- **Netlify**: Connect your git repository and set build command to `npm run build`
- **Vercel**: Import project and it will auto-detect Vite configuration
- **GitHub Pages**: Use the built `dist/` folder

## Content Model

Content models are defined in [stackbit.config.ts](stackbit.config.ts):
- **SiteData** - Global site information
- **ServiceItem** - Individual services with descriptions and examples
- **ProjectItem** - Gallery images with captions
- **TestimonialItem** - Customer testimonials with ratings
- **FaqItemData** - FAQ questions and answers

## Documentation

- **[QUICK_START.md](QUICK_START.md)** - 5-minute setup guide
- **[CONTENT_GUIDE.md](CONTENT_GUIDE.md)** - How to edit content (for editors)
- **[NETLIFY_SETUP.md](NETLIFY_SETUP.md)** - Netlify deployment with Visual Editor
- **[GITCMS_RESTRUCTURE.md](GITCMS_RESTRUCTURE.md)** - Technical architecture details

## Deployment

### Netlify (Recommended)

This site is optimized for Netlify deployment with Visual Editor support.

**Quick Deploy:**

```bash
git push origin main
```

Then follow [NETLIFY_SETUP.md](NETLIFY_SETUP.md) for complete deployment instructions.

### Other Platforms

- **Vercel**: Import project, auto-detects configuration
- **GitHub Pages**: Deploy `dist/` folder after `npm run build`
- **Any Static Host**: Upload `dist/` folder contents

## License

Copyright 3 Squares Ventures LLC. All rights reserved.
