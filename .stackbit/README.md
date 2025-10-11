# Stackbit GitCMS Configuration

This directory contains configuration files for Stackbit's GitCMS integration.

## Structure

- `models/` - Additional content model definitions (optional)
- `presets/` - Preset content templates for quick creation (optional)
- `workflows/` - Custom editorial workflows (optional)

## Content Management

All content is stored in JSON format in the `content/data/` directory:

- `siteData.json` - Global site configuration (phone, email, service areas)
- `services.json` - Service offerings and details
- `projects.json` - Project gallery images
- `testimonials.json` - Customer testimonials
- `faq.json` - Frequently asked questions

## Editing Content

### Via GitCMS (Recommended)
1. Run Stackbit locally: `npx @stackbit/cli@latest dev`
2. Open the provided URL in your browser
3. Edit content through the visual interface
4. Changes are saved directly to JSON files

### Via Code Editor
1. Open the JSON file in `content/data/`
2. Edit the content following the schema in `stackbit.config.ts`
3. Save the file
4. Changes will be reflected when the app rebuilds

## Content Models

All content models are defined in `stackbit.config.ts`:
- **SiteData** - Global site information
- **ServiceItem** - Individual service with details and examples
- **ProjectItem** - Gallery project with image and caption
- **TestimonialItem** - Customer review with rating
- **FaqItemData** - FAQ question and answer pair

## Deployment

Content changes are committed to git and deployed via your CI/CD pipeline.
