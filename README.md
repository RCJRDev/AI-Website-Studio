# Buildwise Website

**Modern agency website built with Next.js 14, TypeScript, and Tailwind CSS**

Contact: (516) 847-2902 | hello@buildwise.dev

---

## Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Run production build locally
npm start
```

---

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Email**: Resend API
- **Deployment**: Vercel

---

## Environment Variables

Create `.env.local` for development:

```env
# Required
RESEND_API_KEY=re_your_api_key_here
CONTACT_EMAIL_TO=hello@buildwise.dev

# Optional
CONTACT_EMAIL_FROM=Buildwise Contact <onboarding@resend.dev>
NEXT_PUBLIC_SITE_URL=https://buildwise.dev
```

**Get Resend API Key**: https://resend.com/api-keys (free tier: 100 emails/day)

---

## Project Structure

```
src/
├── app/
│   ├── (marketing)/          # Main marketing pages
│   │   ├── page.tsx          # Homepage
│   │   ├── services/         # Services page
│   │   ├── pricing/          # Pricing page
│   │   ├── portfolio/        # Portfolio page
│   │   ├── process/          # Process page
│   │   ├── about/            # About page
│   │   ├── contact/          # Contact page
│   │   ├── privacy/          # Privacy policy
│   │   └── terms/            # Terms of service
│   ├── demos/                # Portfolio demo sites
│   ├── api/contact/          # Contact form API
│   ├── layout.tsx            # Root layout
│   └── globals.css           # Global styles
└── components/
    ├── layout/               # Header, Footer
    ├── home/                 # Homepage sections
    ├── contact/              # Contact form
    ├── ui/                   # Reusable components
    └── seo/                  # Structured data (JSON-LD)
```

---

## Deploy to Vercel

### 1. Push to GitHub (if not already done)

```bash
git add .
git commit -m "Deploy to Vercel"
git push origin main
```

### 2. Deploy

1. Go to https://vercel.com/new
2. Import your GitHub repository
3. Vercel auto-detects Next.js settings
4. **Add environment variables**:
   - `RESEND_API_KEY`
   - `CONTACT_EMAIL_TO`
   - `NEXT_PUBLIC_SITE_URL`
5. Click **Deploy**

### 3. Configure Custom Domain (Optional)

1. Vercel Dashboard → Settings → Domains
2. Add your domain: `buildwise.dev`
3. Update DNS at your registrar:
   - **A Record**: `@` → `76.76.21.21`
   - **CNAME**: `www` → `cname.vercel-dns.com`
4. Wait 15-30 minutes for DNS propagation

---

## Features

### Contact Form
- Fully functional with Resend email integration
- Rate limiting (5 submissions/hour per IP)
- Input validation and sanitization
- Professional HTML email templates
- Mobile-responsive

### SEO Optimized
- Dynamic sitemap (`/sitemap.xml`)
- Structured data (JSON-LD)
- OpenGraph images (auto-generated)
- Meta tags on all pages
- robots.txt configured

### Performance
- Static page generation where possible
- Optimized bundle size (~87KB shared JS)
- Fast page loads (<140KB first load)
- Lazy-loaded images
- Font optimization with next/font

### Security
- Security headers configured
- Rate limiting on API routes
- Input sanitization
- XSS protection
- HTTPS enforced (via Vercel)

---

## Customization

### Update Colors

Edit `tailwind.config.ts`:

```typescript
colors: {
  navy: {
    900: '#0f172a',  // Primary dark
    800: '#1e293b',
  },
  electric: {
    500: '#3b82f6',  // Primary blue
    600: '#2563eb',
  },
  accent: {
    500: '#f97316',  // Orange accent
  },
}
```

### Update Business Info

- **Phone**: Search for `(516) 847-2902` and replace
- **Email**: Search for `hello@buildwise.dev` and replace
- **Company Name**: Search for `Buildwise` and replace

### Add Portfolio Projects

Edit `src/app/(marketing)/portfolio/page.tsx` → Add to `projects` array

### Modify Pricing

Edit `src/app/(marketing)/pricing/page.tsx` → Update `buildPackages` and `monthlyPlans` arrays

---

## Build Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server (localhost:3000) |
| `npm run build` | Create production build |
| `npm run start` | Run production build locally |
| `npm run lint` | Run ESLint |

---

## Post-Deployment Checklist

### Immediate
- [ ] Test contact form submission
- [ ] Verify SSL certificate (https://)
- [ ] Check mobile responsiveness
- [ ] Test all navigation links
- [ ] Check browser console for errors

### Week 1
- [ ] Submit sitemap to Google Search Console
- [ ] Set up Google Analytics (optional)
- [ ] Monitor Resend dashboard for emails
- [ ] Test on multiple browsers/devices

---

## Troubleshooting

### Contact Form Not Working?
1. Check Resend API key in Vercel environment variables
2. Verify `CONTACT_EMAIL_TO` is set
3. Check Resend dashboard for errors: https://resend.com/emails
4. Review browser console for errors

### Build Failing?
1. Run `npm run build` locally to see errors
2. Check all environment variables are set
3. Verify Node.js version is 18.17+
4. Clear `.next` folder and rebuild

### DNS Not Propagating?
1. Check DNS at https://dnschecker.org
2. Verify A record points to `76.76.21.21`
3. Wait 30-60 minutes (can take up to 48 hours)
4. Clear browser cache

---

## Documentation

- **Next.js**: https://nextjs.org/docs
- **Tailwind**: https://tailwindcss.com/docs
- **Resend**: https://resend.com/docs
- **Vercel**: https://vercel.com/docs

---

## Production Status

✅ **Production Ready**
- Build passing
- Lint clean
- All environment variables configured
- Contact form fully functional
- SEO optimized
- Security hardened
- Mobile responsive

---

## Support

For questions or issues:
- Review this README
- Check the official documentation links above
- Contact: hello@buildwise.dev | (516) 847-2902
