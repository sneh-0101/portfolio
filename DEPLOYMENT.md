# GitHub Pages Deployment Guide

## 🚀 Complete Step-by-Step Deployment

### Prerequisites
- GitHub account (free)
- Git installed on your computer
- Your portfolio files ready

### Option 1: Using GitHub Desktop (Easiest)

#### Step 1: Create Repository on GitHub
1. Go to [github.com](https://github.com)
2. Click "+" icon → "New repository"
3. Name it: `yourusername.github.io` (replace `yourusername`)
   - **IMPORTANT**: Must be exact format for automatic GitHub Pages
4. Keep it Public
5. Don't initialize with README (we already have one)
6. Click "Create repository"

#### Step 2: Clone Repository
1. On the new repository page, click "Code" → "Open with GitHub Desktop"
2. Choose where to save it locally
3. Repository is now cloned

#### Step 3: Add Your Portfolio Files
1. Open the cloned folder
2. Copy all files from your portfolio:
   - `index.html`
   - `css/style.css`
   - `js/script.js`
   - `assets/` folder
   - `README.md`
   - `.gitignore`
3. Paste them into the cloned repository folder

#### Step 4: Commit & Push
1. Open GitHub Desktop
2. You'll see all the new files in "Changes" tab
3. Enter commit message: "Initial portfolio commit"
4. Click "Commit to main"
5. Click "Push origin"

#### Step 5: Access Your Portfolio
1. Wait 1-2 minutes for GitHub to build
2. Visit: `https://yourusername.github.io`
3. 🎉 Your portfolio is live!

---

### Option 2: Using Command Line (Git Bash/Terminal)

#### Step 1: Create Repository on GitHub
(Same as Option 1, Steps 1-6)

#### Step 2: Clone Repository
```bash
# Open terminal/Git Bash in your desired location
git clone https://github.com/yourusername/yourusername.github.io.git
cd yourusername.github.io
```

#### Step 3: Copy Your Portfolio Files
```bash
# Copy all portfolio files into this directory
# Structure should be:
# ├── index.html
# ├── css/
# │   └── style.css
# ├── js/
# │   └── script.js
# ├── assets/
# │   └── resume.pdf (and other assets)
# ├── README.md
# └── .gitignore
```

#### Step 4: Commit & Push
```bash
# Add all files
git add .

# Commit changes
git commit -m "Initial portfolio commit"

# Push to GitHub
git push origin main
```

#### Step 5: Access Your Portfolio
1. Wait 1-2 minutes for GitHub to build
2. Visit: `https://yourusername.github.io`
3. 🎉 Your portfolio is live!

---

### Option 3: Different Repository Name

If you don't want to name it `yourusername.github.io`:

1. Create any repository name: `my-portfolio` (for example)
2. Make it Public
3. Follow steps 2-5 above
4. Go to Settings → Pages → Source
5. Select "Deploy from a branch" and "main" branch
6. Your portfolio will be at: `https://yourusername.github.io/my-portfolio/`

---

## 🔍 Troubleshooting Deployment

### Portfolio Not Showing
- **Wait 2-3 minutes** - GitHub needs time to build
- Check repository is **Public**
- Verify file structure is correct
- Check GitHub Actions tab for build errors

### Theme Not Persisting
- This is normal on first load
- localStorage may be cleared in incognito mode
- Try in regular browsing mode

### Styles Not Loading
- Ensure paths are correct: `css/style.css` and `js/script.js`
- Hard refresh: Ctrl+F5 (Windows) or Cmd+Shift+R (Mac)
- Check browser console for 404 errors

### JavaScript Not Working
- Check browser console (F12)
- Verify `js/script.js` is loading
- Try different browser

### 404 Error on Contact Form
- This is expected - form is frontend-only
- No backend submission occurs

---

## 🔄 Updating Your Portfolio

### Via GitHub Desktop
1. Make changes to your local files
2. Open GitHub Desktop
3. Files appear in "Changes" tab
4. Enter commit message
5. Click "Commit to main"
6. Click "Push origin"

### Via Command Line
```bash
# After making changes
git add .
git commit -m "Update portfolio content"
git push origin main
```

### Changes Go Live
- GitHub automatically redeploys
- Usually visible within 1-2 minutes
- Hard refresh your browser if needed

---

## 🎯 Customization Before Deploying

Make these updates BEFORE pushing to GitHub:

1. **Update Personal Information**
   - In `index.html`: name, email, social links
   - In `assets/resume-data.json`: your actual data

2. **Add Your Resume**
   - Place `resume.pdf` in `assets/` folder
   - Update download link if needed

3. **Update Projects**
   - Add real project cards with your work
   - Link to your actual GitHub repositories

4. **Customize Colors (Optional)**
   - Edit `css/style.css` lines 6-12
   - Update primary, secondary, accent colors

5. **Test Locally**
   - Open `index.html` in browser
   - Test all features:
     - Dark mode toggle
     - Mobile menu
     - Form validation
     - Smooth scrolling

---

## 📊 Monitoring Your Site

### Check Build Status
1. Go to your repository
2. Click "Actions" tab
3. See deployment history and any errors

### Check Traffic (Optional)
1. Go to repository Settings → Pages
2. Scroll down to "GitHub Pages"
3. You can see basic traffic analytics

### Monitor Performance
- Use Google PageSpeed Insights: https://pagespeed.web.dev/
- Paste your portfolio URL
- Get optimization suggestions

---

## 🔐 Custom Domain (Optional)

If you own a domain:

1. Go to repository Settings → Pages
2. Scroll to "Custom domain"
3. Enter your domain: `yourdomain.com`
4. Check "Enforce HTTPS"
5. Update DNS records with GitHub's nameservers
6. (Instructions provided by GitHub)

---

## 🆘 Getting Help

**GitHub Pages Issues:**
- Visit: https://docs.github.com/en/pages
- Check: https://docs.github.com/en/pages/troubleshooting-github-pages

**Portfolio Specific:**
- Check browser console: F12
- Hard refresh: Ctrl+F5
- Check file paths are correct
- Verify all files are in repository

**Still Stuck?**
1. Check all files are in correct folders
2. Verify `index.html` references are correct:
   - `<link rel="stylesheet" href="css/style.css">`
   - `<script src="js/script.js"></script>`
3. Try accessing from different browser
4. Check GitHub Pages status: https://www.githubstatus.com/

---

## ✅ Post-Deployment Checklist

After your portfolio is live:

- [ ] Visit your domain and verify it works
- [ ] Test all navigation links
- [ ] Test dark/light mode toggle
- [ ] Test form validation
- [ ] Test on mobile devices
- [ ] Check that all images load
- [ ] Verify resume download works
- [ ] Check that external links work
- [ ] Share with friends and family!
- [ ] Add portfolio URL to resume and LinkedIn

---

## 🚀 Next Steps

1. **Share Your Portfolio**
   - Add link to GitHub profile
   - Add link to LinkedIn
   - Share on social media
   - Include in job applications

2. **Keep It Updated**
   - Add new projects regularly
   - Update skills section
   - Keep resume current
   - Fix any bugs or typos

3. **Get Feedback**
   - Ask friends to review
   - Test on different devices
   - Monitor for issues
   - Improve based on feedback

4. **Consider Analytics** (Optional)
   - Add Google Analytics
   - Track visitor stats
   - See which sections are popular

---

## 💡 Pro Tips

1. **Use descriptive commit messages** - Makes it easier to track changes
2. **Update regularly** - Fresh content attracts visitors
3. **Optimize images** - Reduces load time
4. **Add keywords** - Helps with search engine visibility
5. **Keep resume updated** - Always be ready for opportunities
6. **Test on mobile** - Most visitors will be on mobile
7. **Use meaningful project descriptions** - Help visitors understand your work

---

**Your portfolio is now live on the internet! Congratulations! 🎉**

For questions or issues, refer to the main README.md file or GitHub Pages documentation.
