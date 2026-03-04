# 🚀 Netlify Deployment Guide - Sri Kodanda Ramaswamy Temple

## Quick Deployment Steps

### Method 1: Deploy via Netlify Website (Easiest)

1. **Build the project locally first**
   ```bash
   npm run build
   ```
   This creates a `dist` folder with your production files.

2. **Go to Netlify**
   - Visit: https://app.netlify.com/
   - Sign up or log in (you can use GitHub, GitLab, or email)

3. **Deploy via Drag & Drop**
   - Click "Add new site" → "Deploy manually"
   - Drag and drop your `dist` folder
   - Wait for deployment (usually 30-60 seconds)
   - Your site is live! 🎉

### Method 2: Deploy via Git (Recommended for Updates)

1. **Create a Git repository**
   ```bash
   cd kodanda-temple-divine-main
   git init
   git add .
   git commit -m "Initial commit - Temple website"
   ```

2. **Push to GitHub**
   - Create a new repository on GitHub
   - Follow GitHub's instructions to push your code:
   ```bash
   git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git
   git branch -M main
   git push -u origin main
   ```

3. **Connect to Netlify**
   - Go to https://app.netlify.com/
   - Click "Add new site" → "Import an existing project"
   - Choose "GitHub" and authorize Netlify
   - Select your repository
   - Netlify will auto-detect settings:
     - Build command: `npm run build`
     - Publish directory: `dist`
   - Click "Deploy site"

4. **Automatic Deployments**
   - Every time you push to GitHub, Netlify automatically rebuilds and deploys
   - No manual work needed!

### Method 3: Netlify CLI (For Developers)

1. **Install Netlify CLI**
   ```bash
   npm install -g netlify-cli
   ```

2. **Login to Netlify**
   ```bash
   netlify login
   ```

3. **Deploy**
   ```bash
   cd kodanda-temple-divine-main
   npm run build
   netlify deploy --prod
   ```

## 📋 Pre-Deployment Checklist

Before deploying, make sure:

- [ ] Build works locally: `npm run build`
- [ ] No errors in console: `npm run dev`
- [ ] All images are optimized
- [ ] Contact information is correct
- [ ] Social media links are updated
- [ ] Phone numbers are correct
- [ ] Email addresses are correct

## 🔧 Configuration Files

### netlify.toml (Already Created)
This file tells Netlify how to build and configure your site:
- Build command: `npm run build`
- Publish directory: `dist`
- Redirects for SPA routing
- Security headers
- Cache optimization

## 🌐 Custom Domain Setup

After deployment, you can add a custom domain:

1. **In Netlify Dashboard**
   - Go to "Site settings" → "Domain management"
   - Click "Add custom domain"
   - Enter your domain (e.g., kodandaramaswamy.org)

2. **Update DNS Settings**
   - Go to your domain registrar (GoDaddy, Namecheap, etc.)
   - Add these DNS records:
   
   **For root domain (kodandaramaswamy.org):**
   ```
   Type: A
   Name: @
   Value: 75.2.60.5
   ```
   
   **For www subdomain:**
   ```
   Type: CNAME
   Name: www
   Value: your-site-name.netlify.app
   ```

3. **Enable HTTPS**
   - Netlify automatically provides free SSL certificate
   - Wait 24 hours for DNS propagation
   - HTTPS will be enabled automatically

## 🔄 Update Your Website

### If using Git deployment:
```bash
# Make your changes
git add .
git commit -m "Update temple information"
git push
# Netlify automatically deploys!
```

### If using manual deployment:
```bash
npm run build
# Then drag & drop the new dist folder to Netlify
```

## 📊 Post-Deployment Tasks

### 1. Update SEO Files
Edit these files with your actual domain:
- `src/components/SEO.tsx` - Change all URLs from `kodandaramaswamy-tiruvuru.org` to your actual domain
- `public/sitemap.xml` - Update all URLs
- `index.html` - Update meta tags

### 2. Google Search Console
- Go to: https://search.google.com/search-console
- Add your property (your domain)
- Verify ownership (Netlify makes this easy)
- Submit sitemap: `https://yourdomain.com/sitemap.xml`

### 3. Google Analytics (Optional)
Add Google Analytics to track visitors:
- Create account at: https://analytics.google.com/
- Get tracking ID
- Add to your site (in `index.html` or via plugin)

### 4. Test Your Site
- [ ] Check all pages load correctly
- [ ] Test contact form
- [ ] Test WhatsApp button
- [ ] Check mobile responsiveness
- [ ] Test on different browsers
- [ ] Verify SEO meta tags (use: https://metatags.io/)

## 🎯 Netlify Features to Use

### 1. Forms (Contact Form)
Netlify can handle form submissions for free:
- Add `netlify` attribute to your form
- Submissions appear in Netlify dashboard
- Get email notifications

### 2. Analytics
- Enable Netlify Analytics for $9/month
- Get real visitor data (not blocked by ad blockers)
- See page views, unique visitors, bandwidth

### 3. Functions (Advanced)
- Add serverless functions if needed
- Handle API calls, payments, etc.

## 🆘 Troubleshooting

### Build Fails
```bash
# Check locally first
npm install
npm run build
# If it works locally, check Netlify build logs
```

### 404 Errors on Refresh
- Make sure `netlify.toml` has the redirect rule
- This is already configured in your project

### Images Not Loading
- Check image paths are relative
- Ensure images are in `public` or `src/assets`
- Check case sensitivity (Linux servers are case-sensitive)

### Slow Loading
- Optimize images (compress them)
- Enable Netlify's image optimization
- Check bundle size: `npm run build -- --analyze`

## 💰 Pricing

**Netlify Free Tier Includes:**
- ✅ 100 GB bandwidth/month
- ✅ 300 build minutes/month
- ✅ Automatic HTTPS
- ✅ Continuous deployment
- ✅ Form submissions (100/month)
- ✅ Custom domain
- ✅ Instant rollbacks

This is more than enough for a temple website!

## 📱 Mobile App (PWA)

Your site is already PWA-ready with `manifest.json`. Visitors can:
- Add to home screen on mobile
- Use like a native app
- Get offline support (if you add service worker)

## 🔐 Security

Your site includes:
- ✅ HTTPS (automatic)
- ✅ Security headers (in netlify.toml)
- ✅ XSS protection
- ✅ Clickjacking protection

## 📈 Performance

Expected scores:
- **Google PageSpeed**: 90-100
- **GTmetrix**: A grade
- **Load time**: < 2 seconds

## 🎉 You're Ready!

Your temple website is production-ready with:
- ✅ Full SEO optimization
- ✅ Mobile responsive design
- ✅ WhatsApp integration
- ✅ Social media ready
- ✅ Fast loading
- ✅ Secure (HTTPS)
- ✅ Easy to update

---

**Need Help?**
- Netlify Docs: https://docs.netlify.com/
- Netlify Support: https://www.netlify.com/support/
- Community Forum: https://answers.netlify.com/

**Your site will be live at:**
- Netlify subdomain: `your-site-name.netlify.app`
- Custom domain: `yourdomain.com` (after DNS setup)

🙏 **May Lord Rama bless your temple's online presence!**
