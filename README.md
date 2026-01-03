# Anmar Portfolio - Professional Photography & Videography Website

A high-end, cinematic portfolio website for photographer and videographer Anmar, featuring smooth animations, Three.js particle effects, and a fully bilingual (English/Finnish) interface.

## 🎨 Design Features

- **Cinematic Hero**: Three.js particle field with mouse-reactive animations
- **Bilingual Support**: Full English and Finnish translations
- **Smooth Animations**: Framer Motion and GSAP for professional transitions
- **Advanced Gallery**: Filterable portfolio with lightbox view
- **Responsive Design**: Optimized for all devices (mobile, tablet, desktop)
- **Color Scheme**: Black & white with yellow accents for bold, artistic feel

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **3D Graphics**: Three.js with React Three Fiber
- **Animations**: Framer Motion
- **Forms**: React Hook Form
- **State Management**: React Context + Zustand

## 📦 Installation

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Setup

1. **Install dependencies**:
```bash
npm install
```

2. **Run development server**:
```bash
npm run dev
```

3. **Open browser**:
Navigate to `http://localhost:3000`

## 🚀 Build & Deploy

### Production Build
```bash
npm run build
npm start
```

### Deploy to Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Deploy to Netlify
```bash
# Build command
npm run build

# Publish directory
.next
```

### Environment Variables
No environment variables required for basic functionality. 

For contact form integration, add:
```env
NEXT_PUBLIC_FORM_ENDPOINT=your_form_endpoint
```

## 📁 Project Structure

```
anmar-portfolio/
├── app/
│   ├── about/           # About page
│   ├── contact/         # Contact page
│   ├── work/            # Portfolio gallery
│   ├── layout.tsx       # Root layout
│   ├── page.tsx         # Home page
│   └── globals.css      # Global styles
├── components/
│   ├── ContactForm.tsx  # Contact form with validation
│   ├── FeaturedWork.tsx # Homepage featured projects
│   ├── Footer.tsx       # Site footer
│   ├── Gallery.tsx      # Portfolio gallery with filters
│   ├── Hero.tsx         # Homepage hero section
│   ├── Navigation.tsx   # Main navigation
│   └── ThreeBackground.tsx # Particle animation
├── lib/
│   ├── language.tsx     # i18n context and hooks
│   └── portfolio-data.ts # Portfolio content
├── translations/
│   ├── en.json         # English translations
│   └── fi.json         # Finnish translations
└── public/             # Static assets
```

## 🎯 Key Features

### 1. Three.js Particle Background
- 5000 particles on desktop, 2000 on mobile
- Mouse-reactive movement
- Golden accent particles (5% of total)
- Optimized performance with InstancedMesh

### 2. Portfolio Gallery
- Category filtering (All, Portraits, Events, Cinematic, Commercial)
- Lightbox with keyboard navigation (←/→/ESC)
- Smooth transitions and hover effects
- Lazy loading for performance

### 3. Bilingual Support
- Complete English and Finnish translations
- Context-based language switching
- Persistent language selection
- SEO-friendly URL structure

### 4. Contact Form
- Real-time validation
- React Hook Form integration
- Success/error states
- Spam protection ready

## 🎨 Customization

### Colors
Edit `tailwind.config.js`:
```javascript
colors: {
  yellow: {
    DEFAULT: '#FFD700', // Change accent color
    hover: '#FFC700',
  }
}
```

### Portfolio Content
Edit `lib/portfolio-data.ts`:
```typescript
export const portfolioData: PortfolioItem[] = [
  {
    id: '1',
    title: 'Your Project',
    category: 'portraits',
    image: 'your-image-url',
    // ...
  }
]
```

### Translations
Edit files in `translations/`:
- `en.json` - English
- `fi.json` - Finnish

### Three.js Performance
Adjust particle count in `components/ThreeBackground.tsx`:
```typescript
const particleCount = 5000 // Reduce for better performance
```

## 📱 Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768px - 1024px  
- Desktop: 1024px - 1280px
- Large Desktop: > 1280px

## ⚡ Performance Tips

1. **Image Optimization**:
   - Use Next.js Image component
   - WebP/AVIF formats
   - Lazy loading enabled

2. **Code Splitting**:
   - Three.js loaded dynamically
   - Route-based splitting automatic

3. **Caching**:
   - Static assets cached
   - ISR for portfolio updates

## 🔧 Scripts

- `npm run dev` - Development server
- `npm run build` - Production build
- `npm start` - Production server
- `npm run lint` - Lint code

## 📄 License

This project is created for Anmar's personal portfolio. All rights reserved.

## 🤝 Support

For questions or support, contact:
- Email: hello@anmar.fi
- Instagram: @anmar
- Vimeo: vimeo.com/anmar

## 🎉 Acknowledgments

- Three.js community
- Next.js team
- Framer Motion
- Unsplash for placeholder images

---

Built with ❤️ in Tampere, Finland
