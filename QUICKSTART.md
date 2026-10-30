# Quick Start Guide

## 🚀 Getting Started in 5 Minutes

### 1. Local Testing
1. Open `index.html` in your web browser
2. Click the theme toggle (moon icon) to test dark mode
3. Try the mobile menu on small screens
4. Fill out the contact form to test validation

### 2. Customization Checklist

**In `index.html`:**
- [ ] Line 10: Update `<title>` with your name
- [ ] Line 74: Replace "Sneh" with your name in hero section
- [ ] Line 75: Update tagline
- [ ] Line 76: Update description
- [ ] Line 160-164: Update About section content
- [ ] Line 266-271: Update project details
- [ ] Line 302: Update email address
- [ ] Line 303: Update LinkedIn URL
- [ ] Line 304: Update GitHub URL
- [ ] Line 335-340: Update footer links

**In `assets/` folder:**
- [ ] Add your `resume.pdf` file
- [ ] Update `resume-data.json` with your information

**In `css/style.css` (Optional - for custom colors):**
- [ ] Lines 6-12: Update color variables to match your brand

### 3. Deploy to GitHub Pages

```bash
# Create a new GitHub repository named: yourusername.github.io

# Clone the repository
git clone https://github.com/yourusername/yourusername.github.io.git
cd yourusername.github.io

# Copy your portfolio files into this folder
# The structure should match the folder layout

# Stage changes
git add .

# Commit
git commit -m "Add portfolio website"

# Push to GitHub
git push origin main

# Visit: https://yourusername.github.io
```

## 📋 File Descriptions

| File | Purpose |
|------|---------|
| `index.html` | Main HTML structure - contains all sections |
| `css/style.css` | All styling and responsive design |
| `js/script.js` | Interactivity: theme toggle, form validation, animations |
| `assets/resume.pdf` | Your resume (add your own) |
| `assets/resume-data.json` | Optional JSON data for resume section |
| `README.md` | Full documentation |
| `QUICKSTART.md` | This file |

## 🎯 Features to Test

1. **Dark Mode**: Click moon icon, refresh page - theme persists
2. **Mobile Menu**: Resize browser to < 768px, click hamburger
3. **Smooth Scroll**: Click any navigation link
4. **Form Validation**: Try submitting empty form or invalid email
5. **Animations**: Scroll down to see card animations
6. **Resume Download**: Click "Download Resume" button

## 🔍 Troubleshooting

| Issue | Solution |
|-------|----------|
| Styles not loading | Ensure `css/style.css` path is correct in index.html |
| JavaScript not working | Check console (F12) for errors, ensure `js/script.js` path is correct |
| Mobile menu not closing | Hard refresh (Ctrl+F5) to clear cache |
| Colors not working | Ensure browser supports CSS custom properties |
| Resume not downloading | Add `resume.pdf` to `assets/` folder |

## 💻 Code Snippets for Common Changes

### Change Primary Color
```css
/* In css/style.css, update: */
--primary-color: #6366f1;  /* Change this hex code */
```

### Update Social Links
```html
<!-- In index.html, find and update: -->
<a href="https://github.com/YOUR-USERNAME" target="_blank">GitHub</a>
<a href="https://linkedin.com/in/YOUR-PROFILE" target="_blank">LinkedIn</a>
```

### Add New Skill
```html
<!-- Add this card in the Skills section: -->
<div class="skill-card">
    <div class="skill-icon">⚡</div>
    <div class="skill-name">Skill Name</div>
    <div class="skill-level">Proficiency Level</div>
</div>
```

### Add New Project
```html
<!-- Add this card in the Projects section: -->
<div class="project-card">
    <div class="project-header">
        <h3>Project Name</h3>
    </div>
    <p class="project-description">Project description...</p>
    <div class="tech-stack">
        <span class="tech-tag">Tech1</span>
        <span class="tech-tag">Tech2</span>
    </div>
    <a href="https://github.com/link" class="project-link">View on GitHub →</a>
</div>
```

## ✅ Pre-Deployment Checklist

Before uploading to GitHub Pages:

- [ ] All personal information is updated
- [ ] Resume PDF is in `assets/` folder
- [ ] All project links point to real repositories
- [ ] Social media links are correct
- [ ] Contact email is correct
- [ ] Website looks good on mobile (test in browser DevTools)
- [ ] Theme toggle works (test dark and light modes)
- [ ] Form validation works (try invalid inputs)
- [ ] All animations are smooth
- [ ] No console errors (check with F12)

## 🎨 Customization Ideas

1. **Add Photos**: Create `assets/images/` folder and add profile picture
2. **Change Font**: Update font-family in CSS (lines 17-18)
3. **Custom Domain**: GitHub Pages supports custom domains
4. **Add Blog Section**: Copy project cards structure for blog posts
5. **Add Certificates**: Create new section for certifications
6. **Social Share Buttons**: Add meta tags for better sharing
7. **Analytics**: Add Google Analytics tag (after customization)

## 📱 Testing Checklist

Desktop:
- [ ] All sections visible and readable
- [ ] Buttons clickable and responsive
- [ ] Dark/Light mode works
- [ ] Hover effects visible

Tablet (768px):
- [ ] Navigation menu responsive
- [ ] Content readable without horizontal scroll
- [ ] Cards stack properly
- [ ] Images scale correctly

Mobile (375px):
- [ ] Hamburger menu visible
- [ ] Touch targets at least 44px
- [ ] Form easy to fill on mobile
- [ ] No horizontal scroll

## 🚀 Performance Tips

1. Optimize resume PDF size (< 2MB)
2. If adding images, compress them first
3. Use simple, lightweight images
4. Test on slow 3G connection (Chrome DevTools)

## 📖 Further Reading

- [GitHub Pages Documentation](https://pages.github.com/)
- [HTML Best Practices](https://html.spec.whatwg.org/)
- [CSS Grid Guide](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout)
- [Vanilla JavaScript Tips](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide)

---

**Ready to deploy? Follow the 3 steps above and your portfolio will be live! 🎉**
