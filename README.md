# Alex Mercer — Portfolio Website

A premium, static portfolio website built with pure HTML, CSS, and vanilla JavaScript. Designed for GitHub Pages with optional custom domain support.

---

## ✨ Features

- **4-page website**: Home, About, Projects/Portfolio, Contact
- **Modern SaaS-style design** with dark theme, gradient accents, and smooth animations
- **Fully responsive** across all screen sizes (mobile, tablet, desktop)
- **SEO optimised** with meta tags, Open Graph, Twitter Card, and canonical URLs
- **Performance-first** — pure HTML/CSS/JS, no heavy frameworks
- **Scroll-reveal animations** using Intersection Observer API
- **Sticky navigation** with blur backdrop on scroll
- **Project filter** on the portfolio page
- **Contact form** with client-side validation
- **Custom 404 page** for GitHub Pages
- **CNAME** for custom domain setup

---

## 📁 Folder Structure

```
portfolio-site/
├── index.html              # Home page
├── 404.html                # Custom 404 page
├── CNAME                   # Custom domain (edit before deploying)
├── .nojekyll               # Bypasses Jekyll processing on GitHub Pages
├── README.md
│
├── pages/
│   ├── about.html
│   ├── projects.html
│   └── contact.html
│
└── assets/
    ├── css/
    │   ├── main.css        # Design tokens, layout, shared components
    │   ├── home.css        # Hero section styles
    │   ├── about.css       # About page styles
    │   ├── projects.css    # Portfolio grid & filter
    │   └── contact.css     # Contact form & layout
    ├── js/
    │   ├── main.js         # Nav, reveal animations, cursor glow
    │   ├── projects.js     # Portfolio filter
    │   └── contact.js      # Form validation
    └── images/
        └── favicon.svg     # SVG favicon
```

---

## 🚀 Deploying to GitHub Pages

### Option A — Deploy from the `main` branch (simplest)

1. **Create a new GitHub repository**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
   git push -u origin main
   ```

2. **Enable GitHub Pages**
   - Go to your repository on GitHub
   - Click **Settings** → **Pages**
   - Under *Source*, select **Deploy from a branch**
   - Set branch to `main`, folder to `/ (root)`
   - Click **Save**

3. **Visit your site**
   - Your site will be live at: `https://YOUR_USERNAME.github.io/YOUR_REPO/`
   - Deployment takes 1–3 minutes

---

### Option B — Deploy using GitHub Actions (recommended for custom domains)

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  deploy:
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - uses: actions/checkout@v4
      - uses: actions/configure-pages@v4
      - uses: actions/upload-pages-artifact@v3
        with:
          path: .
      - id: deployment
        uses: actions/deploy-pages@v4
```

---

## 🌐 Custom Domain Setup

### Step 1 — Edit the CNAME file

Replace the contents of `CNAME` with your domain:
```
yourdomain.com
```

Or for a `www` subdomain:
```
www.yourdomain.com
```

### Step 2 — Configure DNS at your domain registrar

**For an apex domain** (e.g., `yourdomain.com`):

Add these **A records** pointing to GitHub Pages IP addresses:
```
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

**For a `www` subdomain**:

Add a **CNAME record**:
```
www  →  YOUR_USERNAME.github.io
```

### Step 3 — Enable HTTPS

- In GitHub → **Settings** → **Pages**
- Under *Custom domain*, enter your domain and click **Save**
- Check **Enforce HTTPS** (available after DNS propagation, ~24h)

---

## 🔧 Customisation

### Personal Information

Update the following in all HTML files:
- Name: Replace `Alex Mercer` with your name
- Initials: Replace `AM` with yours
- Email: Replace `hello@alexmercer.dev`
- Domain: Replace all `alexmercer.dev` references

### Colours

Edit the CSS custom properties in `assets/css/main.css`:
```css
:root {
  --accent:        #6c63ff;  /* Primary accent colour */
  --accent-bright: #8b84ff;  /* Lighter accent */
  --accent-3:      #00d4aa;  /* Green (availability indicator) */
  --bg:            #0a0a0f;  /* Page background */
}
```

### Contact Form Backend

The contact form currently uses a simulated delay. To make it functional, integrate one of these services:

**Formspree** (free tier available):
```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

**EmailJS** (JavaScript SDK):
```js
emailjs.send('SERVICE_ID', 'TEMPLATE_ID', formData);
```

**Web3Forms** (free, no backend):
```html
<input type="hidden" name="access_key" value="YOUR_KEY">
```

### Project Images

Replace the CSS gradient placeholders in `projects.html` with real images:
```html
<!-- Replace this: -->
<div class="project-card__bg" style="background: linear-gradient(...)"></div>

<!-- With this: -->
<img src="../assets/images/project-orbit.jpg" alt="Orbit Analytics Dashboard" />
```

---

## 📈 SEO Checklist

Before going live, update the following in each page:

- [ ] `<title>` — unique per page
- [ ] `<meta name="description">` — 150–160 characters
- [ ] `<link rel="canonical">` — correct URL
- [ ] `og:url` — full page URL
- [ ] `og:image` — 1200×630px image
- [ ] Replace placeholder social links with real profile URLs
- [ ] Add Google Analytics or Plausible (optional)

---

## ⚡ Performance Tips

- Images should be `.webp` format for best compression
- Use `loading="lazy"` on below-fold images
- Fonts are loaded with `display=swap` to prevent layout shift
- All CSS/JS is minimal and unminified — optionally run through a minifier for production

---

## 📄 License

This is a personal portfolio template. Feel free to use and adapt it for your own portfolio. Attribution appreciated but not required.

---

*Built with ❤️ — pure HTML, CSS, and vanilla JavaScript.*
