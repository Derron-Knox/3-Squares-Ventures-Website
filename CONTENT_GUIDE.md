# Content Editing Guide

This guide explains how to edit content on the 3 Squares Ventures website.

## Table of Contents

1. [Quick Start](#quick-start)
2. [Content Files](#content-files)
3. [Editing Methods](#editing-methods)
4. [Content Types](#content-types)
5. [Best Practices](#best-practices)

## Quick Start

### Option 1: Visual Editor (Easiest)

```bash
npx @stackbit/cli@latest dev
```

Open the provided URL and edit content visually.

### Option 2: Direct File Editing

Edit JSON files in the `content/data/` directory with any text editor.

## Content Files

All content is in `content/data/`:

| File | Purpose | Used By |
|------|---------|---------|
| `siteData.json` | Contact info & service areas | Header, Footer, Contact, Service Areas |
| `services.json` | Service offerings | Services section, Service modals |
| `projects.json` | Project gallery | Gallery section |
| `testimonials.json` | Customer reviews | Testimonials section |
| `faq.json` | FAQ questions & answers | FAQ section |

## Editing Methods

### Method 1: Stackbit GitCMS (Recommended for Non-Technical Users)

**Pros:**
- Visual interface
- Live preview
- Form validation
- No JSON knowledge needed

**Steps:**
1. Run `npx @stackbit/cli@latest dev`
2. Open the URL in your browser
3. Click on any content to edit
4. Changes save automatically to JSON files
5. Commit changes to git when ready

### Method 2: Direct JSON Editing (For Developers)

**Pros:**
- Fast editing
- Bulk changes
- Works offline

**Steps:**
1. Open the JSON file in `content/data/`
2. Edit following the schema
3. Save the file
4. Refresh the browser to see changes

## Content Types

### Site Data (`siteData.json`)

```json
{
  "phone1": {
    "display": "(469) 907-4920",
    "href": "tel:469-907-4920"
  },
  "phone2": {
    "display": "(601) 937-8822",
    "href": "tel:601-937-8822"
  },
  "email": "info@3squaresventures.com",
  "serviceAreas": [
    "Jackson Metro",
    "The Delta",
    "Gulf Coast"
  ]
}
```

**Fields:**
- `phone1`, `phone2`: Primary and secondary contact numbers
  - `display`: How the number appears on the site
  - `href`: Phone link format (always `tel:xxx-xxx-xxxx`)
- `email`: Contact email address
- `serviceAreas`: List of service coverage areas

### Services (`services.json`)

Array of service objects:

```json
[
  {
    "icon": "demolition",
    "title": "Demolition",
    "description": "Professional demolition services",
    "jobs": ["House demolition", "Barn removal"],
    "detailedDescription": "Full markdown description...",
    "projectExamples": [
      {
        "title": "Example Project",
        "description": "Description",
        "image": "/images/project.jpg"
      }
    ],
    "safetyProtocols": ["Safety protocol 1", "Safety protocol 2"]
  }
]
```

**Fields:**
- `icon`: Icon identifier (demolition, remodel, tree, concrete, tire, pressureWashing)
- `title`: Service name
- `description`: Short description for service card
- `jobs`: List of example jobs (shown as bullets)
- `detailedDescription`: Full description with markdown support
- `projectExamples`: Array of project examples (optional)
  - `title`: Project name
  - `description`: Project description
  - `image`: Image path (place in `public/images/`)
- `safetyProtocols`: List of safety measures (optional)

### Projects (`projects.json`)

Array of project objects:

```json
[
  {
    "imageSrc": "/images/gallery/project1.jpg",
    "caption": "Project description"
  }
]
```

**Fields:**
- `imageSrc`: Path to image (place in `public/images/gallery/`)
- `caption`: Project description or title

**Image Guidelines:**
- Format: JPG or PNG
- Recommended size: 1200x800px
- Max file size: 500KB
- Place in `public/images/gallery/`

### Testimonials (`testimonials.json`)

Array of testimonial objects:

```json
[
  {
    "quote": "Excellent service! Very professional.",
    "name": "John Smith",
    "location": "Jackson, MS",
    "rating": 5
  }
]
```

**Fields:**
- `quote`: Customer's testimonial text
- `name`: Customer's name
- `location`: Customer's city/state (optional)
- `rating`: Star rating (1-5)

### FAQ (`faq.json`)

Array of FAQ objects:

```json
[
  {
    "question": "What areas do you serve?",
    "answer": "We serve the entire state of Mississippi..."
  }
]
```

**Fields:**
- `question`: The question
- `answer`: The answer (supports markdown)

## Best Practices

### Content Writing

1. **Be Concise**: Keep descriptions short and clear
2. **Use Active Voice**: "We demolish buildings" not "Buildings are demolished by us"
3. **Include Keywords**: Use relevant terms for SEO
4. **Check Grammar**: Proofread before saving

### Images

1. **Optimize Images**: Compress before uploading
2. **Use Descriptive Names**: `demolition-project-jackson.jpg` not `IMG_1234.jpg`
3. **Consistent Sizing**: Keep aspect ratios similar
4. **Alt Text**: Use descriptive captions

### JSON Editing

1. **Validate JSON**: Use a validator (jsonlint.com) before saving
2. **Keep Formatting**: Use proper indentation
3. **Escape Special Characters**: Use `\"` for quotes inside strings
4. **Test Locally**: Run `npm run dev` to preview changes

### Git Workflow

1. **Make Small Changes**: Easier to review and revert
2. **Write Clear Commit Messages**: "Update testimonials" not "changes"
3. **Preview Before Pushing**: Test locally first
4. **Don't Break JSON**: Always validate before committing

## Common Tasks

### Add a New Service

1. Open `content/data/services.json`
2. Copy an existing service object
3. Update all fields with new information
4. Add comma after previous service
5. Save and test

### Change Contact Information

1. Open `content/data/siteData.json`
2. Update phone numbers and/or email
3. Save the file
4. Changes appear immediately

### Add Gallery Images

1. Place images in `public/images/gallery/`
2. Open `content/data/projects.json`
3. Add new object with `imageSrc` and `caption`
4. Save the file

### Update FAQ

1. Open `content/data/faq.json`
2. Add new question/answer object to array
3. Use markdown for formatting in answers
4. Save the file

## Troubleshooting

### Changes Don't Appear

- Hard refresh browser (Cmd/Ctrl + Shift + R)
- Check JSON syntax with validator
- Restart dev server

### JSON Syntax Error

- Find the error line in console
- Common issues:
  - Missing comma between objects
  - Extra comma after last item
  - Unclosed quotes or brackets
- Use a JSON validator to identify issues

### Images Not Loading

- Check image path is correct
- Ensure image is in `public/` directory
- Check file permissions
- Clear browser cache

## Support

For technical issues or questions:
- Check the main [README.md](README.md)
- Review [stackbit.config.ts](stackbit.config.ts) for content model
- Stackbit docs: https://docs.stackbit.com/
