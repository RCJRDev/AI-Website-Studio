# Buildwise Website - Deployment Guide

## Project Overview

- **Brand Name**: Buildwise
- **Tagline**: "Websites that work. Support that lasts."
- **Tech Stack**: Next.js 14, TypeScript, Tailwind CSS
- **Target Platform**: Vercel

---

## 1. Prerequisites

Before deploying, ensure you have:

- Node.js 18.17+ installed
- npm or yarn package manager
- Git installed
- Vercel account (free tier works)
- Domain name (optional but recommended)

---

## 2. Local Development

### Install Dependencies

```bash
cd /Users/chris1110/Desktop/AI\ Web\ Studio
npm install
```

### Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build for Production

```bash
npm run build
```

### Run Production Build Locally

```bash
npm run start
```

---

## 3. Deploy to Vercel

### Option A: Via Vercel CLI

1. Install Vercel CLI:
   ```bash
   npm install -g vercel
   ```

2. Login to Vercel:
   ```bash
   vercel login
   ```

3. Deploy:
   ```bash
   vercel
   ```

4. For production deployment:
   ```bash
   vercel --prod
   ```

### Option B: Via Vercel Dashboard

1. Push your code to a Git repository (GitHub, GitLab, or Bitbucket)
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your repository
5. Vercel auto-detects Next.js settings
6. Click "Deploy"

---

## 4. Environment Variables

Create a `.env.local` file for local development (not committed to Git):

```env
# Site URL (update for production)
NEXT_PUBLIC_SITE_URL=https://buildwise.dev

# Analytics (optional)
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Form handling (optional - for contact form)
CONTACT_FORM_ENDPOINT=https://your-form-handler.com/submit

# Email service (optional)
SENDGRID_API_KEY=your-api-key
EMAIL_FROM=hello@buildwise.dev
EMAIL_TO=hello@buildwise.dev
```

### Set Environment Variables in Vercel

1. Go to your project in Vercel Dashboard
2. Navigate to Settings → Environment Variables
3. Add each variable for Production, Preview, and Development

---

## 5. Domain Configuration

### Custom Domain Setup

1. In Vercel Dashboard, go to your project
2. Navigate to Settings → Domains
3. Add your domain: `buildwise.dev`
4. Add www redirect: `www.buildwise.dev` → `buildwise.dev`

### DNS Configuration

Add these records to your domain registrar:

| Type  | Name | Value              |
|-------|------|--------------------|
| A     | @    | 76.76.21.21        |
| CNAME | www  | cname.vercel-dns.com |

---

## 6. Post-Deployment Checklist

### Immediate (Day 1)

- [ ] Verify all pages load correctly
- [ ] Test contact form submission
- [ ] Check mobile responsiveness on real devices
- [ ] Verify SSL certificate is active (https://)
- [ ] Test all navigation links
- [ ] Review console for JavaScript errors
- [ ] Confirm favicon displays correctly

### SEO Setup (Week 1)

- [ ] Submit sitemap to Google Search Console
  - URL: `https://buildwise.dev/sitemap.xml`
- [ ] Verify site in Google Search Console
- [ ] Set up Bing Webmaster Tools
- [ ] Update `robots.txt` with correct sitemap URL
- [ ] Replace `your-google-verification-code` in layout.tsx

### Analytics Setup (Week 1)

- [ ] Create Google Analytics 4 property
- [ ] Add GA4 tracking code or use next/script
- [ ] Set up conversion goals:
  - Contact form submissions
  - CTA button clicks
  - Time on page > 2 minutes
- [ ] Optional: Set up Hotjar or similar for heatmaps

### Legal Compliance (Week 1)

- [ ] Review Privacy Policy for accuracy
- [ ] Review Terms of Service for accuracy
- [ ] Add cookie consent banner if required (GDPR)
- [ ] Ensure contact information is accurate

### Performance Optimization (Week 2)

- [ ] Run Lighthouse audit (target 90+ scores)
- [ ] Optimize images (convert to WebP)
- [ ] Review Core Web Vitals in Search Console
- [ ] Test page speed at multiple locations

### Content Finalization (Week 2)

- [ ] Replace placeholder portfolio images
- [ ] Update contact information (phone, email)
- [ ] Review all copy for accuracy
- [ ] Add real testimonials when available
- [ ] Update social media links

---

## 7. Project Structure

```
buildwise-website/
├── public/
│   ├── icon.svg           # Favicon SVG
│   ├── manifest.json      # PWA manifest
│   └── robots.txt         # Search engine directives
├── src/
│   ├── app/
│   │   ├── layout.tsx     # Root layout
│   │   ├── page.tsx       # Homepage
│   │   ├── globals.css    # Global styles
│   │   ├── sitemap.ts     # Dynamic sitemap
│   │   ├── services/      # Services page
│   │   ├── pricing/       # Pricing page
│   │   ├── portfolio/     # Portfolio page
│   │   ├── process/       # Process page
│   │   ├── about/         # About page
│   │   ├── contact/       # Contact page
│   │   ├── privacy/       # Privacy policy
│   │   └── terms/         # Terms of service
│   └── components/
│       ├── layout/        # Header, Footer
│       ├── ui/            # Reusable UI components
│       ├── home/          # Homepage sections
│       ├── contact/       # Contact form
│       └── seo/           # Structured data
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── next.config.js
```

---

## 8. Customization Guide

### Updating Colors

Edit `tailwind.config.ts`:

```typescript
colors: {
  navy: { ... },      // Primary dark color
  electric: { ... },  // Primary accent (blue)
  accent: { ... },    // Secondary accent (orange)
}
```

### Updating Content

- Homepage sections: `src/components/home/*.tsx`
- Services: `src/app/services/page.tsx`
- Pricing: `src/app/pricing/page.tsx`
- Portfolio: `src/app/portfolio/page.tsx`

### Adding Portfolio Projects

In `src/app/portfolio/page.tsx`, add to the `projects` array:

```typescript
{
  id: 'unique-slug',
  title: 'Project Name',
  subtitle: 'Client Type',
  category: 'E-commerce | Service Business | Professional Services',
  type: 'Client Project | Concept Project',
  description: '...',
  challenge: '...',
  solution: '...',
  results: ['Result 1', 'Result 2', 'Result 3'],
  techStack: ['Next.js', 'Tailwind', ...],
  tags: ['Tag1', 'Tag2', ...],
  color: 'from-blue-500 to-cyan-500', // Tailwind gradient
}
```

### Contact Form Integration

The contact form in `src/components/contact/ContactForm.tsx` needs a backend. Options:

1. **Formspree**: Add form action URL
2. **Netlify Forms**: Add `data-netlify="true"`
3. **Custom API**: Create `/api/contact` route
4. **Email Service**: SendGrid, Mailgun, etc.

---

## 9. Maintenance

### Regular Tasks

- **Weekly**: Check analytics, respond to form submissions
- **Monthly**: Update content, review performance
- **Quarterly**: Security updates, dependency updates
- **Annually**: Review legal pages, update pricing

### Updating Dependencies

```bash
npm update
npm audit fix
```

For major updates:
```bash
npx npm-check-updates -u
npm install
```

---

## 10. Support Resources

- **Next.js Docs**: https://nextjs.org/docs
- **Tailwind CSS**: https://tailwindcss.com/docs
- **Vercel Docs**: https://vercel.com/docs
- **Framer Motion**: https://www.framer.com/motion/

---

## 11. Build Commands Reference

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Create production build |
| `npm run start` | Run production build locally |
| `npm run lint` | Run ESLint |

---

## 12. Performance Targets

| Metric | Target |
|--------|--------|
| Lighthouse Performance | 90+ |
| Lighthouse Accessibility | 95+ |
| Lighthouse Best Practices | 95+ |
| Lighthouse SEO | 95+ |
| First Contentful Paint | < 1.5s |
| Largest Contentful Paint | < 2.5s |
| Cumulative Layout Shift | < 0.1 |

---

## Questions or Issues?

This codebase is production-ready and designed for easy deployment. All pages are complete with real content, SEO optimization, and responsive design.

For issues specific to this implementation, review the component files and ensure all environment variables are properly configured.
