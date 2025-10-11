# Netlify Visual Editor Setup

This guide explains how to deploy the 3 Squares Ventures website to Netlify with Visual Editor (GitCMS) support.

## Prerequisites

- Git repository hosted on GitHub, GitLab, or Bitbucket
- Netlify account (free tier works)
- Node.js 18+ installed locally

## Initial Deployment

### 1. Push to Git Repository

```bash
git add .
git commit -m "Initial commit with GitCMS structure"
git push origin main
```

### 2. Connect to Netlify

#### Option A: Netlify UI

1. Log in to [Netlify](https://app.netlify.com)
2. Click "Add new site" → "Import an existing project"
3. Choose your Git provider and select your repository
4. Configure build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
   - **Node version**: 18
5. Click "Deploy site"

#### Option B: Netlify CLI

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login to Netlify
netlify login

# Initialize site
netlify init

# Follow prompts to link repository and configure build
```

## Enable Visual Editor

### 1. Install Visual Editor Integration

In your Netlify site dashboard:

1. Go to **Integrations** tab
2. Search for "Visual Editor"
3. Click "Enable" on the Visual Editor integration
4. Grant necessary permissions

### 2. Configure Visual Editor

The Visual Editor will automatically detect your `stackbit.config.ts` configuration.

**Key Configuration Points:**
- Content source: Git (already configured in `stackbit.config.ts`)
- Content directory: `content/data/`
- Asset uploads: `public/images/`
- Build command: `npm run build`

### 3. Access Visual Editor

After enabling:

1. Go to your site dashboard
2. Click the "Visual Editor" button in the top navigation
3. The editor will open with your site content loaded

## Configuration Files

### stackbit.config.ts

Already configured with:

```typescript
contentSources: [
  new GitContentSource({
    rootPath: '.',
    contentDirs: ['content/data'],
    assetsConfig: {
      referenceType: 'static',
      staticDir: 'public',
      uploadDir: 'images',
      publicPath: '/'
    },
    models: [/* ... */]
  })
]
```

### netlify.toml (Optional but Recommended)

Create this file in your project root:

```toml
[build]
  command = "npm run build"
  publish = "dist"

[build.environment]
  NODE_VERSION = "18"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200

[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "SAMEORIGIN"
    X-XSS-Protection = "1; mode=block"
    X-Content-Type-Options = "nosniff"

[[headers]]
  for = "/images/*"
  [headers.values]
    Cache-Control = "public, max-age=31536000, immutable"
```

## Content Editing Workflow

### Using Visual Editor

1. Navigate to your Netlify Visual Editor
2. Click on any content to edit
3. Changes are saved as git commits
4. Site automatically rebuilds and deploys

### Direct Git Workflow

1. Edit JSON files in `content/data/`
2. Commit and push to repository
3. Netlify automatically builds and deploys
4. Changes appear live within 2-5 minutes

## Asset Management

### Uploading Images via Visual Editor

1. Open Visual Editor
2. Navigate to a content item with an image field
3. Click the image field
4. Upload new image or select from existing
5. Image is automatically:
   - Uploaded to `public/images/`
   - Committed to git
   - Referenced in content JSON

### Manual Image Upload

```bash
# Add images to the appropriate directory
cp my-image.jpg public/images/gallery/

# Update content JSON to reference the image
# Edit content/data/projects.json:
{
  "imageSrc": "/images/gallery/my-image.jpg",
  "caption": "Project description"
}

# Commit and push
git add public/images/gallery/my-image.jpg content/data/projects.json
git commit -m "Add new gallery image"
git push
```

## Environment Variables

If you need environment variables:

1. Go to **Site settings** → **Environment variables**
2. Add variables as needed
3. Restart builds for changes to take effect

Common variables:
- `NODE_VERSION`: 18
- Custom API keys (if added later)

## Custom Domain Setup

1. Go to **Domain management**
2. Click "Add custom domain"
3. Follow prompts to:
   - Add your domain
   - Configure DNS records
   - Enable HTTPS (automatic with Let's Encrypt)

## Build Settings

### Recommended Settings

```
Build command: npm run build
Publish directory: dist
Node version: 18
```

### Build Performance

To improve build times:

1. **Enable build cache**:
   - Automatic in Netlify
   - Caches `node_modules/` and `.vite/`

2. **Use build plugins** (optional):
   - Cache plugin for faster installs
   - Image optimization plugins

### Deploy Previews

Netlify automatically creates deploy previews for:
- Pull requests
- Branch pushes

Configure in **Site settings** → **Build & deploy** → **Deploy contexts**

## Monitoring and Analytics

### Build Notifications

Set up notifications:
1. Go to **Site settings** → **Build & deploy** → **Deploy notifications**
2. Add notifications for:
   - Deploy started
   - Deploy succeeded
   - Deploy failed
   - (Email, Slack, webhook)

### Analytics

Enable Netlify Analytics (paid feature):
1. Go to **Analytics** tab
2. Enable server-side analytics
3. View traffic, performance, and errors

## Troubleshooting

### Build Failures

**Issue**: Build fails with "command not found"
**Solution**: Ensure `package.json` has all dependencies

```bash
# Test locally
rm -rf node_modules package-lock.json
npm install
npm run build
```

**Issue**: TypeScript errors during build
**Solution**: Fix errors locally first

```bash
npm run build
# Fix any errors shown
```

### Visual Editor Not Loading

**Issue**: Visual Editor shows error or blank page
**Solution**:

1. Check `stackbit.config.ts` has no syntax errors
2. Verify content files are valid JSON
3. Check browser console for errors
4. Try clearing browser cache

### Content Changes Not Appearing

**Issue**: Edited content doesn't show on live site
**Solution**:

1. Check deploy status in Netlify dashboard
2. Wait for build to complete (2-5 minutes)
3. Hard refresh browser (Cmd/Ctrl + Shift + R)
4. Check git commits were pushed

### Image Upload Issues

**Issue**: Images not uploading via Visual Editor
**Solution**:

1. Check file size (< 5MB recommended)
2. Use supported formats (JPG, PNG, WebP)
3. Verify `public/images/` directory exists
4. Check browser console for errors

## Security

### Recommended Practices

1. **Enable HTTPS** (automatic with Netlify)
2. **Set security headers** (see netlify.toml above)
3. **Review access logs** regularly
4. **Use deploy keys** instead of personal tokens
5. **Enable branch protections** in git

### Access Control

For content editors:

1. **Repository access**: Grant write access to your git repository
2. **Visual Editor**: Netlify team members can access Visual Editor
3. **Roles**: Use git branch protections for approval workflows

## Performance Optimization

### Image Optimization

1. Compress images before upload (use tools like ImageOptim)
2. Use WebP format when possible
3. Keep images under 500KB

### Build Optimization

```json
// vite.config.ts
export default {
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom']
        }
      }
    }
  }
}
```

### Caching

Netlify automatically handles caching:
- Static assets: 1 year cache
- HTML: No cache (always fresh)
- Build cache: 7 days

## Costs

### Free Tier Includes
- 100 GB bandwidth/month
- 300 build minutes/month
- Deploy previews
- HTTPS
- Visual Editor basic features

### Paid Features
- More bandwidth and build minutes
- Analytics
- Background functions
- Priority support

## Support Resources

- **Netlify Docs**: https://docs.netlify.com
- **Visual Editor Docs**: https://docs.netlify.com/manage/visual-editor/
- **Stackbit Docs**: https://docs.stackbit.com
- **Community Support**: https://answers.netlify.com

## Maintenance Checklist

### Weekly
- [ ] Review deploy logs for errors
- [ ] Check site performance
- [ ] Test content editing workflow

### Monthly
- [ ] Update dependencies (`npm update`)
- [ ] Review analytics (if enabled)
- [ ] Test all forms and interactions
- [ ] Backup content (git already provides this)

### Quarterly
- [ ] Review and update content
- [ ] Optimize images
- [ ] Update documentation
- [ ] Review security settings

## Next Steps

1. **Deploy to Netlify** following steps above
2. **Enable Visual Editor** in Netlify dashboard
3. **Test content editing** with Visual Editor
4. **Configure custom domain** (optional)
5. **Set up deploy notifications**
6. **Share with content editors**

Your site is now ready for deployment with full Visual Editor support!
