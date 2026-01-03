# Implementation Guide - Anmar Portfolio Website

## Quick Start Guide

### 1. First Time Setup

```bash
# Navigate to project directory
cd anmar-portfolio

# Install all dependencies
npm install

# Start development server
npm run dev
```

Open http://localhost:3000 in your browser.

### 2. Adding Your Own Content

#### Portfolio Images

Replace placeholder images in `lib/portfolio-data.ts`:

```typescript
{
  id: '1',
  title: 'Your Project Title',
  category: 'portraits', // or 'events', 'cinematic', 'commercial'
  image: '/images/your-image.jpg', // Place in public/images/
  description: 'Project description',
  date: '2024-01',
  location: 'Tampere, Finland',
  tags: ['tag1', 'tag2']
}
```

#### Upload Images

1. Create folder: `public/images/`
2. Add your photos
3. Reference them in portfolio-data.ts

**Recommended Image Specs:**
- Format: JPG or WebP
- Max size: 2MB per image
- Resolution: 1920x1080 (landscape) or 1080x1350 (portrait)
- Compression: 80-85% quality

### 3. Customizing Content

#### Change Hero Text

Edit `translations/en.json`:
```json
{
  "home": {
    "hero": {
      "name": "YOUR NAME",
      "subtitle": "Your Tagline",
      "location": "Your Location"
    }
  }
}
```

#### Update About Page

Edit `translations/en.json` and `translations/fi.json`:
```json
{
  "about": {
    "bio": "Your biography here...",
    "approach": {
      "text": "Your approach to photography..."
    }
  }
}
```

#### Contact Information

Update social links in `components/Footer.tsx`:
```typescript
const socialLinks = [
  { name: 'Instagram', href: 'https://instagram.com/yourusername' },
  { name: 'Vimeo', href: 'https://vimeo.com/yourusername' },
  { name: 'Email', href: 'mailto:your@email.com' },
]
```

## Advanced Customization

### Changing Colors

#### Primary Yellow Accent

Edit `tailwind.config.js`:
```javascript
colors: {
  yellow: {
    DEFAULT: '#FFD700', // Your color
    hover: '#FFC700',
  }
}
```

#### Background Gradients

Edit `app/globals.css`:
```css
body {
  background-color: #000000; /* Your background */
}
```

### Adjusting Animations

#### Particle Count

In `components/ThreeBackground.tsx`:
```typescript
// Desktop: 5000, Mobile: 2000
const particleCount = 3000 // Adjust for performance
```

#### Animation Speed

In `components/Hero.tsx`:
```typescript
transition={{ duration: 0.8 }} // Adjust speed (seconds)
```

### Typography

#### Change Fonts

Edit `app/globals.css`:
```css
@import url('https://fonts.googleapis.com/css2?family=YourFont:wght@300;400;700&display=swap');
```

Then update `tailwind.config.js`:
```javascript
fontFamily: {
  sans: ['YourFont', 'sans-serif'],
}
```

## Integration Guides

### Email Contact Form

#### Option 1: EmailJS (Free)

1. Sign up at emailjs.com
2. Install: `npm install @emailjs/browser`
3. Update `components/ContactForm.tsx`:

```typescript
import emailjs from '@emailjs/browser'

const onSubmit = async (data: FormData) => {
  try {
    await emailjs.send(
      'YOUR_SERVICE_ID',
      'YOUR_TEMPLATE_ID',
      data,
      'YOUR_PUBLIC_KEY'
    )
    setStatus('success')
  } catch (error) {
    setStatus('error')
  }
}
```

#### Option 2: Formspree (Easy)

```typescript
const onSubmit = async (data: FormData) => {
  await fetch('https://formspree.io/f/YOUR_FORM_ID', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  })
}
```

### Analytics Setup

#### Google Analytics

1. Get tracking ID from analytics.google.com
2. Install: `npm install nextjs-google-analytics`
3. Add to `app/layout.tsx`:

```typescript
import { GoogleAnalytics } from 'nextjs-google-analytics'

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <GoogleAnalytics trackPageViews />
        {children}
      </body>
    </html>
  )
}
```

### Image Hosting

#### Option 1: Cloudinary

1. Sign up at cloudinary.com
2. Upload images
3. Get image URLs
4. Use in portfolio-data.ts

#### Option 2: Vercel (Included)

1. Place images in `public/images/`
2. Reference as `/images/photo.jpg`
3. Automatic optimization included

## Deployment

### Deploy to Vercel (Recommended)

**One-Click Deploy:**

1. Push code to GitHub
2. Go to vercel.com
3. Click "Import Project"
4. Select your repository
5. Click "Deploy"

**Custom Domain:**

1. Go to Vercel dashboard
2. Project Settings → Domains
3. Add your domain
4. Update DNS records

### Deploy to Netlify

1. Push code to GitHub
2. Go to netlify.com
3. Click "New site from Git"
4. Select repository
5. Build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`

### Deploy to cPanel/Shared Hosting

```bash
# Build static export
npm run build

# Upload .next folder to server
# Configure web server to serve Next.js
```

## Performance Optimization

### Image Optimization

**Before deploying**, optimize all images:

```bash
# Install image optimizer
npm install -g sharp-cli

# Optimize images
sharp -i public/images/*.jpg -o public/images/optimized/ -f webp -q 85
```

### Lighthouse Score Tips

To achieve 90+ Lighthouse score:

1. **Optimize Images**: 
   - Max 200KB per image
   - Use WebP format
   - Proper dimensions

2. **Reduce JavaScript**:
   - Remove unused dependencies
   - Enable code splitting

3. **Lazy Loading**:
   - Already enabled for images
   - Three.js loaded dynamically

4. **Caching**:
   - Vercel handles automatically
   - Or set cache headers

### Mobile Performance

For better mobile experience:

1. Reduce particle count:
```typescript
const particleCount = window.innerWidth < 768 ? 1000 : 5000
```

2. Disable heavy animations:
```css
@media (max-width: 768px) {
  .three-background { display: none; }
}
```

## Troubleshooting

### Common Issues

**1. White screen on load**
- Check browser console for errors
- Ensure all dependencies installed
- Try clearing .next folder: `rm -rf .next`

**2. Images not loading**
- Verify image paths in portfolio-data.ts
- Check public folder structure
- Ensure correct file extensions

**3. Animations not working**
- Check if JavaScript enabled
- Verify Framer Motion installed
- Check browser compatibility

**4. Translation not changing**
- Clear browser cache
- Check language files syntax
- Verify LanguageProvider wrapping

**5. Build errors**
- Run: `npm run build`
- Check error messages
- Ensure TypeScript types correct

### Performance Issues

**Slow loading:**
1. Optimize images (WebP, smaller sizes)
2. Reduce particle count
3. Enable lazy loading
4. Use CDN for assets

**Laggy animations:**
1. Reduce particle count
2. Disable motion on mobile
3. Use CSS animations instead
4. Check hardware acceleration

## Maintenance

### Regular Updates

```bash
# Update dependencies
npm update

# Check for security issues
npm audit

# Fix vulnerabilities
npm audit fix
```

### Content Updates

**Adding new portfolio items:**
1. Edit `lib/portfolio-data.ts`
2. Add new object to array
3. Upload corresponding image
4. Rebuild and deploy

**Changing translations:**
1. Edit JSON files in `translations/`
2. No rebuild needed (hot reload in dev)
3. Rebuild for production

### Backup

**Important files to backup:**
- `lib/portfolio-data.ts` - Your portfolio content
- `translations/` - All translations
- `public/images/` - Your images
- Custom CSS modifications

## SEO Checklist

- [x] Meta tags configured
- [x] Alt text for images
- [x] Semantic HTML
- [x] Mobile responsive
- [x] Fast loading (<3s)
- [ ] Submit sitemap to Google
- [ ] Add structured data
- [ ] Set up Google Search Console
- [ ] Create social media cards
- [ ] Generate XML sitemap

### Generate Sitemap

Create `app/sitemap.ts`:
```typescript
export default function sitemap() {
  return [
    { url: 'https://yoursite.com', lastModified: new Date() },
    { url: 'https://yoursite.com/work', lastModified: new Date() },
    { url: 'https://yoursite.com/about', lastModified: new Date() },
    { url: 'https://yoursite.com/contact', lastModified: new Date() },
  ]
}
```

## Support Resources

- Next.js Docs: https://nextjs.org/docs
- Tailwind CSS: https://tailwindcss.com/docs
- Framer Motion: https://www.framer.com/motion
- Three.js: https://threejs.org/docs

## Final Checklist Before Launch

- [ ] All images optimized and uploaded
- [ ] Portfolio content complete
- [ ] Contact form tested
- [ ] All translations verified
- [ ] Social media links updated
- [ ] Email addresses correct
- [ ] Analytics installed
- [ ] SEO meta tags configured
- [ ] Custom domain connected
- [ ] SSL certificate active
- [ ] Mobile testing complete
- [ ] Cross-browser testing done
- [ ] Lighthouse score >90
- [ ] Backup created

---

Need help? Contact: hello@anmar.fi
