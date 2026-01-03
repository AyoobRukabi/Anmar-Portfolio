# Deployment & Testing Guide

## Pre-Deployment Checklist

### 1. Content Verification
```bash
# Check all portfolio items have images
# Verify translations in both languages
# Test all internal links
# Confirm contact form works
# Review all text for typos
```

### 2. Technical Testing

#### Run Local Production Build
```bash
npm run build
npm start
```

Visit http://localhost:3000 and test:
- [ ] All pages load correctly
- [ ] Navigation works
- [ ] Gallery filtering functions
- [ ] Lightbox opens/closes
- [ ] Contact form validates
- [ ] Language switcher works
- [ ] Animations smooth
- [ ] Images load properly

#### Browser Testing

Test on:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile Safari (iOS)
- Chrome Mobile (Android)

#### Device Testing

Test on:
- Desktop (1920x1080)
- Laptop (1366x768)
- Tablet (768x1024)
- Mobile (375x667)

### 3. Performance Testing

#### Lighthouse Audit
```bash
# Run in Chrome DevTools
# Target scores:
# Performance: >90
# Accessibility: >90
# Best Practices: >90
# SEO: >90
```

#### Image Optimization Check
```bash
# All images should be:
# - Under 200KB
# - WebP or JPG format
# - Proper dimensions
# - Lazy loaded
```

## Deployment Steps

### Option 1: Vercel (Recommended)

#### First Time Setup

1. **Install Vercel CLI**
```bash
npm i -g vercel
```

2. **Login**
```bash
vercel login
```

3. **Deploy**
```bash
cd anmar-portfolio
vercel
```

Follow prompts:
- Link to existing project? No
- Project name: anmar-portfolio
- Directory: ./
- Build settings: (default)

4. **Production Deploy**
```bash
vercel --prod
```

#### Subsequent Deploys

```bash
# From project directory
vercel --prod
```

#### Custom Domain Setup

1. Go to Vercel dashboard
2. Select project
3. Settings → Domains
4. Add domain: `yourname.com`
5. Update DNS:
   - A Record: `76.76.21.21`
   - CNAME: `cname.vercel-dns.com`
6. Wait for SSL (automatic)

### Option 2: Netlify

#### Deploy from Git

1. Push code to GitHub:
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/yourusername/anmar-portfolio.git
git push -u origin main
```

2. Go to netlify.com
3. Click "Add new site"
4. Choose "Import from Git"
5. Select GitHub repository
6. Build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`
7. Click "Deploy"

#### Custom Domain

1. Site settings → Domain management
2. Add custom domain
3. Follow DNS instructions
4. SSL auto-provisioned

### Option 3: Traditional Hosting (cPanel)

⚠️ **Note**: Requires Node.js support on server

1. **Build locally**
```bash
npm run build
```

2. **Export static**
```bash
# Add to package.json scripts:
"export": "next export"

npm run export
```

3. **Upload via FTP**
- Upload entire `out` folder
- Set directory as document root

4. **Configure server**
- Create `.htaccess`:
```apache
RewriteEngine On
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule ^ index.html [L]
```

## Post-Deployment Tasks

### 1. DNS Configuration

**For Custom Domain:**
```
Type  Name   Value                    TTL
A     @      76.76.21.21             3600
CNAME www    cname.vercel-dns.com    3600
```

**Verification:**
```bash
dig yourname.com
nslookup yourname.com
```

### 2. SSL Certificate

**Vercel/Netlify**: Automatic

**cPanel**: 
1. SSL/TLS → Manage SSL
2. Install Let's Encrypt (free)

**Verification:**
- Visit https://yoursite.com
- Check for padlock icon

### 3. Analytics Setup

#### Google Analytics 4

1. Create GA4 property
2. Get Measurement ID
3. Add to `.env.local`:
```env
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

4. Install package:
```bash
npm install nextjs-google-analytics
```

5. Add to layout:
```typescript
import { GoogleAnalytics } from 'nextjs-google-analytics'

<GoogleAnalytics trackPageViews />
```

### 4. Search Console

1. Go to search.google.com/search-console
2. Add property: `yoursite.com`
3. Verify ownership (HTML tag or DNS)
4. Submit sitemap: `yoursite.com/sitemap.xml`

### 5. Social Media Setup

#### Open Graph Tags

Already configured in `app/layout.tsx`. Update:
```typescript
openGraph: {
  title: 'Your Name - Visual Storyteller',
  images: ['/og-image.jpg'], // Create 1200x630 image
}
```

#### Create OG Image

- Dimensions: 1200x630px
- Format: JPG or PNG
- Save as: `public/og-image.jpg`
- Include: Name, tagline, branding

#### Test Social Cards

- Facebook: https://developers.facebook.com/tools/debug/
- Twitter: https://cards-dev.twitter.com/validator
- LinkedIn: https://www.linkedin.com/post-inspector/

## Monitoring & Maintenance

### 1. Uptime Monitoring

**Free Options:**
- UptimeRobot (uptimerobot.com)
- StatusCake (statuscake.com)

**Setup:**
- Add site URL
- Set check interval: 5 minutes
- Add email notifications

### 2. Performance Monitoring

**Vercel Analytics** (Built-in):
- Automatic with Vercel deployment
- Real user metrics
- Core Web Vitals

**Google Search Console**:
- Core Web Vitals report
- Mobile usability
- Indexing issues

### 3. Error Tracking

**Sentry** (Free tier):
```bash
npm install @sentry/nextjs
npx @sentry/wizard -i nextjs
```

### 4. Regular Maintenance

**Weekly:**
- Check analytics
- Review contact form submissions
- Monitor uptime

**Monthly:**
- Update dependencies: `npm update`
- Check security: `npm audit`
- Review performance metrics
- Backup content files

**Quarterly:**
- Review and optimize images
- Update portfolio content
- Refresh meta descriptions
- Check broken links

## Troubleshooting Deployment

### Build Fails

**Error: Module not found**
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

**Error: Out of memory**
```bash
# Increase Node memory
NODE_OPTIONS="--max-old-space-size=4096" npm run build
```

### Site Not Loading

1. Check deployment logs
2. Verify DNS settings
3. Clear browser cache
4. Check SSL certificate
5. Test in incognito mode

### Images Not Showing

1. Check image paths (case-sensitive)
2. Verify public folder structure
3. Check image formats (JPG, PNG, WebP)
4. Review Next.js Image domains config

### Contact Form Not Working

1. Check API endpoint
2. Verify environment variables
3. Test in browser console
4. Check CORS settings
5. Review email service logs

## Rollback Procedure

### Vercel
```bash
# View deployments
vercel ls

# Promote previous deployment
vercel promote [deployment-url]
```

### Netlify
1. Go to Deploys tab
2. Find previous working deploy
3. Click "Publish deploy"

### Git
```bash
# Revert to previous commit
git log
git revert [commit-hash]
git push
```

## Performance Optimization Post-Launch

### 1. Image Optimization

```bash
# Convert all images to WebP
npm install sharp
node -e "const sharp = require('sharp'); /* conversion script */"
```

### 2. Enable Caching

**Vercel** (automatic):
- Static assets: 1 year
- API routes: Custom

**Custom headers**:
```javascript
// next.config.js
module.exports = {
  async headers() {
    return [
      {
        source: '/images/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ]
  },
}
```

### 3. CDN Configuration

**Cloudflare** (Free):
1. Sign up at cloudflare.com
2. Add site
3. Update nameservers
4. Enable:
   - Auto Minify (CSS, JS, HTML)
   - Brotli compression
   - Always Use HTTPS

### 4. Database (Future)

If adding blog or CMS:
- Vercel Postgres (free tier)
- Supabase (free tier)
- PlanetScale (free tier)

## Security Checklist

- [x] HTTPS enabled
- [x] Security headers configured
- [x] Dependencies updated
- [x] No sensitive data in code
- [x] Environment variables secured
- [x] Contact form has spam protection
- [ ] Add rate limiting
- [ ] Configure CSP headers
- [ ] Set up backup system

## Success Metrics

Track these KPIs:

**Traffic:**
- Unique visitors
- Page views
- Bounce rate
- Session duration

**Engagement:**
- Portfolio views
- Contact form submissions
- Social media clicks
- Page scroll depth

**Performance:**
- Lighthouse scores
- Core Web Vitals
- Page load time
- Time to interactive

**SEO:**
- Search impressions
- Click-through rate
- Average position
- Indexed pages

## Support Resources

- Vercel Docs: https://vercel.com/docs
- Netlify Docs: https://docs.netlify.com
- Next.js: https://nextjs.org/docs
- GitHub Issues: Create issue in repository

---

**Deployment Date**: ___________
**Deployed By**: ___________
**Production URL**: ___________
**Custom Domain**: ___________

## Emergency Contacts

- Domain Registrar: ___________
- Hosting Provider: ___________
- Email Service: ___________
- Developer: hello@anmar.fi
