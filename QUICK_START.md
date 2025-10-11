# Quick Start Guide

The fastest way to get your 3 Squares Ventures website running with GitCMS.

## 🚀 5-Minute Setup

### Step 1: Install Dependencies

```bash
npm install
```

### Step 2: Run Locally

```bash
npm run dev
```

Visit `http://localhost:5173` to see your site.

### Step 3: Deploy to Netlify

```bash
# Commit your changes
git add .
git commit -m "feat: Add GitCMS configuration"
git push origin main

# Deploy to Netlify
# 1. Go to https://app.netlify.com
# 2. Click "Add new site" → "Import an existing project"
# 3. Select your repository
# 4. Build settings:
#    - Build command: npm run build
#    - Publish directory: dist
# 5. Click "Deploy"
```

### Step 4: Enable Visual Editor

1. Go to your Netlify site dashboard
2. Click **Integrations** tab
3. Search for "Visual Editor"
4. Click **Enable**
5. Done! You can now edit content visually

## 📝 Edit Content

### Method 1: Netlify Visual Editor (Recommended)

1. Open your Netlify site dashboard
2. Click the **Visual Editor** button
3. Click any content to edit
4. Changes save automatically to git

### Method 2: Edit JSON Directly

1. Open files in `content/data/`
2. Edit the JSON
3. Save, commit, and push
4. Site rebuilds automatically

## 📁 Content Files

All content is in `content/data/`:

| File | What It Controls |
|------|------------------|
| `siteData.json` | Phone numbers, email, service areas |
| `services.json` | All services and their details |
| `projects.json` | Gallery images |
| `testimonials.json` | Customer reviews |
| `faq.json` | FAQ questions and answers |

## 🖼️ Add Images

### Via Visual Editor

1. Click an image field
2. Upload new image
3. Done! Automatically saved to git

### Via Manual Upload

```bash
# 1. Add image to public/images/
cp my-image.jpg public/images/gallery/

# 2. Update JSON file
# In content/data/projects.json:
{
  "imageSrc": "/images/gallery/my-image.jpg",
  "caption": "Project description"
}

# 3. Commit and push
git add .
git commit -m "Add new gallery image"
git push
```

## 📚 Full Documentation

- [README.md](README.md) - Complete project documentation
- [CONTENT_GUIDE.md](CONTENT_GUIDE.md) - Detailed content editing guide
- [NETLIFY_SETUP.md](NETLIFY_SETUP.md) - Full Netlify deployment guide
- [GITCMS_RESTRUCTURE.md](GITCMS_RESTRUCTURE.md) - Technical details

## 🆘 Common Issues

### Build fails?

```bash
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Changes not showing?

- Wait 2-5 minutes for Netlify to rebuild
- Hard refresh browser: `Cmd/Ctrl + Shift + R`

### JSON syntax error?

- Validate JSON at [jsonlint.com](https://jsonlint.com)
- Check for:
  - Missing commas
  - Unclosed brackets
  - Extra commas at end

## 🎯 Production Checklist

Before going live:

- [ ] Update all placeholder content
- [ ] Add real project images
- [ ] Test all forms work
- [ ] Check mobile responsiveness
- [ ] Set up custom domain in Netlify
- [ ] Enable HTTPS (automatic with Netlify)
- [ ] Test Visual Editor integration
- [ ] Share editor access with team

## 💡 Tips

- Keep images under 500KB for fast loading
- Use descriptive file names for images
- Write clear, concise content
- Test on mobile devices
- Make small commits (easier to revert)

## 🔗 Resources

- **Netlify Dashboard**: https://app.netlify.com
- **Netlify Docs**: https://docs.netlify.com
- **Visual Editor Docs**: https://docs.netlify.com/manage/visual-editor/
- **Support**: https://answers.netlify.com

---

**Need more help?** Check the detailed guides linked above!
