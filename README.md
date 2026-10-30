# Personal Portfolio Website

A modern, responsive personal portfolio website built with pure HTML, CSS, and JavaScript. No frameworks, no libraries, and fully ready for GitHub Pages deployment.

## 🚀 Features

- **Fully Responsive Design** - Works seamlessly on desktop, tablet, and mobile devices
- **Dark/Light Mode Toggle** - Theme preference is saved to localStorage
- **Smooth Animations** - Subtle fade-in and scroll animations for a modern feel
- **Mobile Navigation** - Hamburger menu for mobile devices
- **Form Validation** - Frontend validation for contact form with real-time error messages
- **SEO Optimized** - Proper meta tags, semantic HTML, and structured content
- **Fast Loading** - No external dependencies, pure vanilla JavaScript
- **Accessibility** - ARIA labels, keyboard navigation, and semantic markup
- **GitHub Pages Ready** - Deploy directly without any configuration

## 📁 Project Structure

```
portfolio/
├── index.html              # Main HTML file with all sections
├── css/
│   └── style.css          # All styles with responsive design
├── js/
│   └── script.js          # All JavaScript functionality
├── assets/
│   ├── resume.pdf         # Your resume file (add your own)
│   └── resume-data.json   # Resume data (optional JSON file)
└── README.md              # This file
```

## 🎨 Sections Included

1. **Home/Hero** - Eye-catching introduction with CTAs
2. **About** - Personal background and interests
3. **Skills** - Organized by categories with emoji icons
4. **Projects** - Project cards with tech stack badges
5. **Resume** - Resume details and download link
6. **Experience & Education** - Timeline layout
7. **Contact** - Contact form with validation
8. **Footer** - Social links and copyright

## 📝 Customization Guide

### 1. Update Personal Information

Edit `index.html` and replace:
- "Sneh" with your name
- "popatsneh7@gmail.com" with your actual email
- Update social links (GitHub, LinkedIn)
- Update tagline and descriptions

### 2. Add Your Resume

1. Create a PDF of your resume
2. Place it in the `assets/` folder and name it `resume.pdf`
3. The "Download Resume" button will automatically work

### 3. Update Resume Data

Edit `assets/resume-data.json` with your information:
```json
{
  "name": "Your Name",
    "email": "popatsneh7@gmail.com",
  "phone": "+91 XXXXXXXXXX",
  "skills": ["Python", "JavaScript", "etc..."]
}
```

### 4. Update Projects

Edit the projects section in `index.html`:
```html
<div class="project-card">
    <div class="project-header">
        <h3>Your Project Name</h3>
    </div>
    <p class="project-description">Your project description</p>
    <div class="tech-stack">
        <span class="tech-tag">Technology 1</span>
        <span class="tech-tag">Technology 2</span>
    </div>
    <a href="https://github.com/yourprojectlink" class="project-link">View on GitHub →</a>
</div>
```

### 5. Update Skills

Skills are organized in categories in `index.html`. Each skill card shows an emoji, name, and level:
```html
<div class="skill-card">
    <div class="skill-icon">🐍</div>
    <div class="skill-name">Python</div>
    <div class="skill-level">Advanced</div>
</div>
```

### 6. Update Contact Information

In `index.html`, update the contact section with your actual:
- Email address
- LinkedIn profile URL
- GitHub profile URL

## 🌍 Deployment on GitHub Pages

### Step 1: Create Repository
```bash
# Create a new repository on GitHub named: yourusername.github.io
# Clone it locally
git clone https://github.com/yourusername/yourusername.github.io.git
cd yourusername.github.io
```

### Step 2: Add Portfolio Files
```bash
# Copy all files from your portfolio folder to the repository folder
# Structure should be:
# ├── index.html
# ├── css/
# │   └── style.css
# ├── js/
# │   └── script.js
# └── assets/
#     └── resume.pdf
```

### Step 3: Push to GitHub
```bash
git add .
git commit -m "Initial portfolio commit"
git push origin main
```

### Step 4: Access Your Portfolio
Visit: `https://yourusername.github.io`

**Note:** If your repository is not named `yourusername.github.io`, you'll need to enable GitHub Pages in repository settings and it will be available at `https://yourusername.github.io/repositoryname/`

## 🎯 Key Features Explained

### Dark/Light Mode
- Click the moon/sun icon in the navbar to toggle
- Theme preference is saved in browser's localStorage
- Keyboard shortcut: `Ctrl + T`

### Mobile Navigation
- Responsive hamburger menu on screens < 768px
- Auto-closes when a link is clicked
- Smooth animation transitions

### Form Validation
- Real-time validation as you type
- Displays error messages for:
  - Empty fields
  - Invalid email format
  - Message too short (min 10 characters)
- No backend submission (frontend only)

### Smooth Scrolling
- All navigation links use smooth scroll
- Mobile-friendly scrolling behavior

### SEO Optimization
- Meta descriptions and keywords
- Semantic HTML structure
- Open Graph meta tags ready (can be added)
- Responsive meta viewport tag

## 🔧 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📱 Responsive Breakpoints

- **Desktop**: 1200px and above
- **Tablet**: 768px - 1199px
- **Mobile**: 480px - 767px
- **Small Mobile**: Below 480px

## ⚙️ JavaScript Features

### 1. Theme Toggle
- Automatically saves preference to localStorage
- Smooth transition between themes

### 2. Mobile Navigation
- Hamburger menu toggle
- Auto-close on link click
- Escape key support

### 3. Form Validation
- Email validation with regex
- Real-time error display
- Success message on submit

### 4. Smooth Scrolling
- Native scroll-behavior implementation
- Works across all sections

### 5. Scroll Animations
- Fade-in effect for cards and elements
- Uses IntersectionObserver API for performance

### 6. Active Navigation Link
- Highlights current section in navigation
- Updates on scroll

## 📊 Performance

- **No external requests** (except fonts from browser defaults)
- **Minimal CSS** - All styling in one file (~15KB)
- **Minimal JavaScript** - All functionality in one file (~8KB)
- **Fast Load Time** - Optimized for GitHub Pages
- **Lazy Loading Ready** - Structure supports image lazy loading

## 🔐 Security Notes

- No backend or server-side code
- No user data is sent anywhere
- Contact form is frontend-only (no submission)
- Safe to deploy publicly on GitHub Pages

## 💡 Tips & Best Practices

1. **Update Your Contact Info**: Don't forget to update email and social links
2. **Add Quality Content**: Replace placeholder text with your actual information
3. **Use High-Quality Images**: If adding images, optimize them first
4. **Test on Mobile**: Always test on actual mobile devices
5. **Update Resume**: Keep your resume.pdf updated in assets folder
6. **Customize Colors**: Edit CSS variables at the top of `style.css` to match your brand
7. **Add Projects**: Include real projects with GitHub links
8. **Keep Content Fresh**: Update projects and skills regularly

## 🎨 Customizing Colors

Edit the CSS variables in `style.css`:

```css
:root {
    --primary-color: #6366f1;        /* Main color */
    --primary-dark: #4f46e5;         /* Darker primary */
    --secondary-color: #ec4899;      /* Secondary accent */
    --accent-color: #10b981;         /* Accent color */
}
```

## 📜 License

This portfolio template is free to use for personal purposes. Modify it as needed!

## 🤝 Support

If you encounter any issues:
1. Check that all files are in the correct folders
2. Ensure index.html references css/style.css and js/script.js correctly
3. Clear browser cache (Ctrl + F5 on Windows, Cmd + Shift + R on Mac)
4. Check browser console for JavaScript errors (F12)

## ✨ Next Steps

1. ✅ Customize all text content with your information
2. ✅ Add your resume PDF to assets folder
3. ✅ Update project cards with your real projects
4. ✅ Update GitHub and LinkedIn links
5. ✅ Test locally by opening index.html in a browser
6. ✅ Create GitHub Pages repository
7. ✅ Deploy and share your portfolio!

---

**Happy coding! 🚀**

For more help with GitHub Pages, visit: https://pages.github.com/
